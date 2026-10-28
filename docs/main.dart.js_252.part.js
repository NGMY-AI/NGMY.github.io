((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cgq:function cgq(){},
hyz(d){var x=null,w=new B.b26(d,D.e6Q,new A.p9(x,x,y.c6),new A.p9(x,x,y.B))
w.buX(d)
return w},
b26:function b26(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cgl:function cgl(d){this.a=d},
cgm:function cgm(d){this.a=d},
cgn:function cgn(d){this.a=d},
cgk:function cgk(d){this.a=d},
cgo:function cgo(d){this.a=d},
hyA(d,e){var x=y.N
x=new B.b27(d,e,A.V(x,y.e),A.V(x,y.z))
x.buY(d,e)
return x},
b27:function b27(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgr:function cgr(d){this.a=d},
cgs:function cgs(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d){this.a=d},
cgx:function cgx(d){this.a=d},
cgy:function cgy(d){this.a=d},
fQ1(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.y8.Le(x,"ngmy_doc_share_v1",new B.fcV(),1)},
hF4(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cp(d))
if(y.J.b(d))return new Uint8Array(A.cp(J.eV(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cp(A.BI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Qc(d,e){return B.hUa(d,e)},
hUa(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aM_
x=7
return A.b(o==null?$.aM_=B.fQ1():o,$async$Qc)
case 7:s=g
r=new Uint8Array(A.cp(e))
q=J.mw(s,"blobs","readwrite")
C.iz.lZ(J.mu(q,"blobs"),r,d)
x=8
return A.b(J.pi(q),$async$Qc)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qc,w)},
Qb(d){return B.hU9(d)},
hU9(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aM_
x=7
return A.b(o==null?$.aM_=B.fQ1():o,$async$Qb)
case 7:s=f
r=J.mw(s,"blobs","readonly")
x=8
return A.b(C.iz.z2(J.mu(r,"blobs"),d),$async$Qb)
case 8:q=f
x=9
return A.b(J.pi(r),$async$Qb)
case 9:o=B.hF4(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qb,w)},
afy(d){return B.hU8(d)},
hU8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aM_
x=7
return A.b(p==null?$.aM_=B.fQ1():p,$async$afy)
case 7:s=f
r=J.mw(s,"blobs","readwrite")
C.iz.F9(J.mu(r,"blobs"),d)
x=8
return A.b(J.pi(r),$async$afy)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afy,w)},
fcV:function fcV(){},
hHo(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmp(w,v))}return u},
heE(d,e){var x,w={},v=A.aUf("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fyB(w,v,e)
C.vp.xU(v,"change",new B.fyD(w,v,!1))
C.vp.xU(v,"cancel",new B.fyC(w))
$.eP.m7()
v.click()
A.bN(C.aeM,new B.fyA(w),y.H)},
fyB:function fyB(d,e,f){this.a=d
this.b=e
this.c=f},
fyD:function fyD(d,e,f){this.a=d
this.b=e
this.c=f},
fyC:function fyC(d){this.a=d},
fyA:function fyA(d){this.a=d},
Ct(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ct=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd9()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSJ()?3:4
break
case 3:x=5
return A.b(B.h9Q(e,d,s,!0,!1,f,g,h,!1,i),$async$Ct)
case 5:x=1
break
case 4:x=6
return A.b(B.PQ(d,s,f,g,h,i),$async$Ct)
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
return A.b(B.HF(s,d),$async$Ct)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f8m(s,d),$async$Ct)
case 14:x=12
return A.b(r.h9Q(q,p,o,n,m,l,k,j,a1,i),$async$Ct)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).ci(A.em(new B.fyQ(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).ci(A.em(new B.fyR(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ct,w)},
PQ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PQ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXU(e),$async$PQ)
case 3:u=k
x=4
return A.b(B.anz(d,e,!1),$async$PQ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HF(e,d),$async$PQ)
case 7:if(k){v=D.a7G
x=1
break}x=8
return A.b(B.TN(e),$async$PQ)
case 8:v=t?D.Tp:D.a7H
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXS(d,e)){v=D.a7G
x=1
break}x=11
return A.b(B.TN(e),$async$PQ)
case 11:v=t?D.Tp:D.a7H
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fLf(d,e)){v=D.a7G
x=1
break}x=14
return A.b(B.TN(e),$async$PQ)
case 14:v=D.Tp
x=1
break
case 13:v=t?D.Tp:D.a7H
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PQ,w)},
f8m(d,e){var x=0,w=A.j(y.y),v
var $async$f8m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXS(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXU(d),$async$f8m)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8m,w)},
h9Q(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).ci(A.em(new B.fef(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h50(d,e,f,g,h,i,j){return new B.Y_(e,j,d,g,h,i,f,null)},
fgb(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fgb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bY(C.K,null,new B.fge(A.N(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fgb)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgb,w)},
fgG(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fgG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bY(C.K,null,new B.fgI(A.N(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fgG)
case 3:q=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
r.S$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fgG,w)},
fQa(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bq(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
frb(d,e){var x=0,w=A.j(y.H),v
var $async$frb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TN(e),$async$frb)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eH()
case 1:return A.h(v,w)}})
return A.i($async$frb,w)},
fyQ:function fyQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyR:function fyR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aaU:function aaU(d,e){this.a=d
this.b=e},
fef:function fef(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y_:function Y_(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axB:function axB(){this.c=this.a=this.d=null},
d_b:function d_b(d,e){this.a=d
this.b=e},
d_8:function d_8(d){this.a=d},
d_a:function d_a(d){this.a=d},
d_9:function d_9(d){this.a=d},
d_d:function d_d(){},
d_c:function d_c(d){this.a=d},
abm:function abm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAa:function aAa(d,e){this.a=d
this.b=e},
aDm:function aDm(d,e,f){this.a=d
this.b=e
this.c=f},
fge:function fge(d,e,f){this.a=d
this.b=e
this.c=f},
fgc:function fgc(d){this.a=d},
fgd:function fgd(d,e,f){this.a=d
this.b=e
this.c=f},
fgI:function fgI(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgH:function fgH(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4W(d,e,f,g,h){return B.htu(d,e,f,g,h)},
htu(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c4W=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iI(r.dt(d,new B.c4X(s,e,h,g,f,q),y.g),y.l),$async$c4W)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gU(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4W,w)},
aXP(d,e,f,g,h){return B.htv(d,e,f,g,h)},
htv(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXP=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asR("GET",d)
o=A.fHN()
if(o==null)o=new A.KX(A.a([],y.W))
x=7
return A.b(o.eR(0,s).cN(0,C.EB),$async$aXP)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BO(),$async$aXP)
case 8:q=j
if(J.ac(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B5(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aXP,w)},
aXO(d){return B.hts(d)},
hts(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cN(0,C.nz),$async$aXO)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iv(A.iu(p.e)).c8(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aXO,w)},
c4V(d){return B.htt(d)},
htt(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c4V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cN(0,C.pm),$async$c4V)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iv(A.iu(q.e)).c8(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a9(o)
$.am.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c4V,w)},
c4X:function c4X(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jf:function jf(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HD(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
htA(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HD(C.a.b_(u,v.length))}return null},
htB(d){var x=B.HD(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
htw(){var x,w=$.pf(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fT(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a5G(d){return B.htx(d)},
htx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bG),$async$a5G)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5G,w)},
a5H(d,e){return B.hty(d,e)},
hty(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5H=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hA(d,e,!1,!1,C.cF,null),$async$a5H)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5H,w)},
B4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$B4)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HD(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5I(r),$async$B4)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5G("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B4)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HD(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B4)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.htw()
x=14
return A.b(B.a5I(m),$async$B4)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5H("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 15:k=f
x=16
return A.b(B.a5H("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B4)
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
return A.i($async$B4,w)},
a5I(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HD(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5G("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5I)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5I,w)},
a5J(d,e,f,g){return B.htC(d,e,f,g)},
htC(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5J=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gal(d)){v=!1
x=1
break}r=B.HD(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5I(r),$async$a5J)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c52())>1048576||g.b8(d,new B.c53())){v=B.DW(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a5U("myCode",d,a0),$async$a5J)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ac(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ac(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.DW(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXX(u,g.gM(d),a0),$async$a5J)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pf().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c54(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXQ(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5J)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
DW(d,e,f,g,h){return B.htz(d,e,f,g,h)},
htz(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DW=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$DW)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c4Z())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pf().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gai(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gU(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.HH(a9,q)
a0=new A.Jx(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DW)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ac(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eT().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oI(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9b(a1.a,a4,"media",a1.d,a2).wx(m,n,new A.De(!0,q.c)),$async$DW)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DW)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOs(r),$async$DW)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c5_(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXQ(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DW)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOs(r),$async$DW)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DW,w)},
aXQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5G(t),$async$aXQ)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c4Y(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5H(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXQ,w)},
Mw(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Mw=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5G("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Mw)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gU(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aXR(k,a0),$async$Mw)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aXW(h),$async$Mw)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.TU(g,a0),$async$Mw)
case 10:f=a3
if(f!=null&&J.cw(f)){m+=J.ac(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("H.E")
e=A.B(new A.a2(r,new B.c50(),q),n)
d=A.B(new A.a2(r,new B.c51(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.da(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5H("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Mw)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Mw,w)},
aXR(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
if(!r.b(p)){x=3
break}o=J.a8(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aN(o.h(p,"partCount"))
j=o==null?null:C.k.O(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hXX(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cr(l,m,"Received via My Code",t,e,i),$async$aXR)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOs(s),$async$aXR)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXR,w)},
c52:function c52(){},
c53:function c53(){},
c54:function c54(){},
c4Z:function c4Z(){},
c5_:function c5_(){},
c4Y:function c4Y(){},
c50:function c50(){},
c51:function c51(){},
fyN(d,e){var x=0,w=A.j(y.H)
var $async$fyN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).ci(A.em(new B.fyO(e),!1,null,y.H)),$async$fyN)
case 2:return A.h(null,w)}})
return A.i($async$fyN,w)},
bB3(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bB3=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).ci(A.em(new B.fyP(g,e,f),!1,null,y.y)),$async$bB3)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB3,w)},
fyO:function fyO(d){this.a=d},
fyP:function fyP(d,e,f){this.a=d
this.b=e
this.c=f},
TK:function TK(d,e){this.c=d
this.a=e},
aBx:function aBx(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dLg:function dLg(d,e){this.a=d
this.b=e},
TO:function TO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBA:function aBA(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dMp:function dMp(d){this.a=d},
dMq:function dMq(d){this.a=d},
dMr:function dMr(d){this.a=d},
dMo:function dMo(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
dMt:function dMt(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
dMv:function dMv(d,e){this.a=d
this.b=e},
dMw:function dMw(d,e){this.a=d
this.b=e},
dMx:function dMx(d){this.a=d},
dMA:function dMA(){},
dMy:function dMy(d){this.a=d},
dMz:function dMz(d,e){this.a=d
this.b=e},
bgI:function bgI(){},
TL:function TL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBy:function aBy(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dLh:function dLh(d){this.a=d},
dLi:function dLi(d){this.a=d},
fLg(d){var x=d.hI
if(x>=0)return C.o.O(x)
return 10},
htE(d){var x=d.kq
if(x>=0)return x
return 4.99},
htD(d){var x=d.l9,w=y.N
w=x.iN(x,new B.c56(),w,w)
return w},
h06(d){var x=d.kr,w=y.N
w=x.iN(x,new B.c57(),w,w)
return w},
aXU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aXU)
case 7:s=f
r=A.t(p)
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
return A.i($async$aXU,w)},
a5L(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a5L)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a5L)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5L,w)},
TN(d){var x=0,w=A.j(y.H),v,u
var $async$TN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$TN)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TN,w)},
fLf(d,e){var x,w,v
if(B.htE(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.htD(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ca(new A.S(Date.now(),0,!1))},
aXS(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h06(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ca(new A.S(Date.now(),0,!1))},
h07(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h06(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ca(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ac())
d.kr=w},
anA(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$anA)
case 7:s=f
r=A.t(p)
r=A.f3(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$anA,w)},
anB(d){var x=0,w=A.j(y.H),v,u,t
var $async$anB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anA(d),$async$anB)
case 3:u=f
x=5
return A.b(A.az(),$async$anB)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anB,w)},
anz(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fLg(d)
if(u<=0){v=!1
x=1
break}if(B.fLf(d,e)){v=!1
x=1
break}x=3
return A.b(B.anA(e),$async$anz)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anz,w)},
aXT(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HF(e,d),$async$aXT)
case 3:if(g){v=-1
x=1
break}u=B.fLg(d)
if(u<=0){v=-1
x=1
break}if(B.fLf(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anA(e),$async$aXT)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXT,w)},
c59(d,e,f){var x=0,w=A.j(y.y),v
var $async$c59=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HF(e,d),$async$c59)
case 3:if(h){v=!1
x=1
break}v=B.anz(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c59,w)},
c58(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c58=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd9()
x=3
return A.b(B.c59(d,u,i.gSJ()),$async$c58)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c58,w)},
a5K(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5K=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd9()
if(i.gSJ()){v=!0
x=1
break}if(B.aXS(d,u)){v=!0
x=1
break}x=5
return A.b(A.l8(u,C.QV),$async$a5K)
case 5:x=k?3:4
break
case 3:B.h07(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5K)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kL(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QV,"Doc Share for Organizations"),$async$a5K)
case 7:if(!k){v=!1
x=1
break}B.h07(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5K)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5K,w)},
c56:function c56(){},
c57:function c57(){},
fzp(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fzp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fzp)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f54.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.f54.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzp,w)},
i_8(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f54.bn($.f54,new B.fzr(d))},
fzr:function fzr(d){this.a=d},
f6s(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f6s=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mX(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jn,null,y.H),$async$f6s)
case 3:C.zr.f5(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eP.m7()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6s,w)},
aep(d,e,f){var x=0,w=A.j(y.H),v
var $async$aep=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f5C.n(0,d,new B.aaB(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aep)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aep)
case 2:return A.h(null,w)}})
return A.i($async$aep,w)},
aej(d){return B.hJe(d)},
hJe(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aej=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f5C.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aej)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.fa7(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaB(r)
$.f5C.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aej,w)},
PG(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cp(e))
$.Fx.n(0,d,u)
x=3
return A.b(B.Qc(d,u),$async$PG)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PG,w)},
aMk(d){return B.hJc(d)},
hJc(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMk=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fx.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Qb(d),$async$aMk)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fx.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aMk)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aI(r)
x=!J.ck(q)?9:10
break
case 9:B.PG(d,q)
x=11
return A.b(J.hJ(s,d),$async$aMk)
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
return A.i($async$aMk,w)},
hFq(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cp(J.eV(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cp(A.BI(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
return A.fe(null,y.K)},
a0o(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fer(r,t),!1,s)
A.fG(r,"error",new B.fes(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i6(0,C.L9,new B.fet())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
aME(d,e,f){return B.hLt(d,e,f)},
hLt(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aME=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0o(i),$async$aME)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ac(j)
x=11
return A.b(B.Qc(o,p),$async$aME)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ac(j)===0){x=1
break}x=12
return A.b(B.aep(k,j,s),$async$aME)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a9(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aME,w)},
aMD(d,e,f){return B.hLs(d,e,f)},
hLs(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMD=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aME(d,e,f),$async$aMD)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0o(f),$async$aMD)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fx.n(0,s,r)
$.PX.n(0,s,r)
x=11
return A.b(B.PG(s,r),$async$aMD)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMD,w)},
B5(d,e,f,g,h,i){return B.htN(d,e,f,g,h,i)},
htN(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B5=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jf(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aY_(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PG(s,d),$async$B5)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$B5)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcu().aI(d)),$async$B5)
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
return A.b(B.A7(e),$async$B5)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FI(e,j),$async$B5)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B5,w)},
TP(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TP=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A7(d),$async$TP)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cI.aB(99999)
n=p.b
l=o.type
l.toString
k=B.h09(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jf(m,n,k,l,j,"From folder",null,B.aY_(),null)
$.aeS.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0o(o),$async$TP)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fx.n(0,h,g)
$.PX.n(0,h,g)
B.PG(h,g)
x=9
break
case 10:x=11
return A.b(B.aMD(d,m,o),$async$TP)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FI(d,t),$async$TP)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
fLk(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fLk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h09(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HG(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.B5(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLk,w)},
HG(d,e,f,g,h,i){return B.htM(d,e,f,g,h,i)},
htM(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HG=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Jx(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HG)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.fZ(n,m)
o+=J.ac(m)
case 9:if(!(J.ac(n)>=1048576)){x=10
break}l=new Uint8Array(A.cp(J.QK(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kw(0,1048576,J.ac(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qc(k,l),$async$HG)
case 11:J.cf(q,k);++p
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
return A.b(j.a9(0),$async$HG)
case 12:x=s.pop()
break
case 5:x=J.ac(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qc(k,new Uint8Array(A.cp(n))),$async$HG)
case 15:J.cf(q,k)
case 14:if(J.ac(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aep(r,q,g),$async$HG)
case 16:f=new B.jf(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aY_(),null)
x=17
return A.b(B.A7(d),$async$HG)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FI(d,e),$async$HG)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HG,w)},
TR(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TR=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeS.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0o(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aej(s),$async$TR)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qb(u[o]),$async$TR)
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
v=A.BI(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.PX.h(0,s)
if(i==null)i=$.Fx.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r8(d,e),$async$TR)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.PX.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TR,w)},
h09(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gam(x):""
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
r8(d,e){return B.htO(d,e)},
htO(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r8=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.PX.h(0,f)
if(e==null)e=$.Fx.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeS.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0o(s),$async$r8)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fx.n(0,f,r)
$.PX.n(0,f,r)
B.PG(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a9(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aej(f),$async$r8)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awp(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qb(g[l]),$async$r8)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.amr()
if(!C.aG.gal(r)){$.Fx.n(0,f,r)
$.PX.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMk(f),$async$r8)
case 17:j=a3
if(j!=null&&!C.aG.gal(j)){$.PX.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TR(a0,a1,0,g),$async$r8)
case 20:i=a3
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.cp(i))
$.Fx.n(0,f,h)
$.PX.n(0,f,h)
B.PG(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$r8,w)},
htR(d){var x,w,v=$.aeS.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
htS(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
htP(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anH(d,e,f,g,h){return B.htQ(d,e,f,g,h)},
htQ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anH=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aeS.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0o(s),$async$anH)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.r8(g,e),$async$anH)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ac(r)/2|0,J.ac(r))
n=$.eT().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i0(d).wx(h,r,new A.De(!0,e.c)),$async$anH)
case 12:f.$2(J.ac(r),J.ac(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anH,w)},
h0b(d,e,f,g,h){var x,w,v,u,t=$.h0a
$.h0a=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c5k.n(0,t,new B.bt4(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awp(u)))
return t},
fLl(d){var x=0,w=A.j(y.H)
var $async$fLl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fLl,w)},
HH(d,e){var $async$HH=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aeS.h(0,h)
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
return A.pQ(B.TR(d,e,p,o<q?o:q),$async$HH,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pQ(A.F6(n),$async$HH,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pQ(B.aej("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HH,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pQ(B.Qb(h[l]),$async$HH,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pQ(A.F6(k),$async$HH,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pQ(B.r8(d,e),$async$HH,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pQ(A.F6(A.BI(j,p,o<i?o:i)),$async$HH,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pQ(null,0,w)
case 2:return A.pQ(t.at(-1),1,w)}})
var x=0,w=A.h8J($async$HH,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hax(w)},
aY1(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aY1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c5k.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3i(),$async$aY1)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY1,w)},
TQ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5k.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3i(),$async$TQ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aep(r.c,u,r.z),$async$TQ)
case 4:t=new B.jf(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aY_(),null)
u=r.a
x=5
return A.b(B.A7(u),$async$TQ)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FI(u,s),$async$TQ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TQ,w)},
a5R(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5k.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afy(u[s]),$async$a5R)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5R,w)},
c5m(d,e,f){var x=0,w=A.j(y.H)
var $async$c5m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by6(d,e,f),$async$c5m)
case 2:return A.h(null,w)}})
return A.i($async$c5m,w)},
c5n(d,e,f){var x=0,w=A.j(y.H)
var $async$c5n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by7(d,e,f),$async$c5n)
case 2:return A.h(null,w)}})
return A.i($async$c5n,w)},
DX(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A7(d),$async$DX)
case 2:p=g
J.nf(p,new B.c5l(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fx.W(0,v)
$.aeS.W(0,e)
x=3
return A.b(B.aej(v),$async$DX)
case 3:u=g
$.f5C.W(0,v)
x=4
return A.b(A.az(),$async$DX)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DX)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DX)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afy(s[q]),$async$DX)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afy(v),$async$DX)
case 13:x=14
return A.b(B.FI(d,p),$async$DX)
case 14:return A.h(null,w)}})
return A.i($async$DX,w)},
aY0(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aY0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r8(d,e),$async$aY0)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f6s(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY0,w)},
A7(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$A7)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.feu(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A7,w)},
FI(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FI)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fip(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FI)
case 3:return A.h(null,w)}})
return A.i($async$FI,w)},
by6(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A7(d),$async$by6)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fd8(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aBQ(f))
x=4
return A.b(B.FI(d,u),$async$by6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by6,w)},
by7(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A7(d),$async$by7)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fd9(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cD5(f))
x=4
return A.b(B.FI(d,u),$async$by7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by7,w)},
aaB:function aaB(d){this.a=d},
fa7:function fa7(){},
fer:function fer(d,e){this.a=d
this.b=e},
fes:function fes(d){this.a=d},
fet:function fet(){},
c5l:function c5l(d){this.a=d},
bt4:function bt4(d,e,f,g,h,i,j,k,l){var _=this
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
feu:function feu(){},
fip:function fip(){},
fd8:function fd8(d){this.a=d},
fd9:function fd9(d){this.a=d},
a5S(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5q())?3:4
break
case 3:x=5
return A.b(B.aY2(d,e),$async$a5S)
case 5:u=g
if(u!=null){t=u.c
B.My(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gL(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aXY(s),$async$a5S)
case 10:case 9:if(g){v=new A.P3(1,D.Qy,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TS(d,e),$async$a5S)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.TX(!0,!0,d,e),$async$a5S)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.My(d,D.yH,e,t)
v=new A.P3(p,D.yH,t)
x=1
break}v=B.c5p(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5S,w)},
TS(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5U(null,d,e),$async$TS)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ac(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aXX(p,d.length,e),$async$TS)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5n(e,C.d.gL(d).a,r.b),$async$TS)
case 7:case 6:q=r.a
x=8
return A.b(B.My(d,D.Qy,e,q),$async$TS)
case 8:v=new A.P3(d.length,D.Qy,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TS,w)},
TT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mc(D.mk)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5T(d,e),$async$TT)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5i(s,d,e,t),$async$TT)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXY(t),$async$TT)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.r8(e,d),$async$TT)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TS(A.a([d],y.r),e),$async$TT)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TT,w)},
TV(){var x=0,w=A.j(y.H)
var $async$TV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fLe(),$async$TV)
case 2:x=3
return A.b(B.aOJ(),$async$TV)
case 3:return A.h(null,w)}})
return A.i($async$TV,w)},
a5T(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aY_()
x=3
return A.b(B.c5m(e,d.a,u),$async$a5T)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5T,w)},
My(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$My=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Qy&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5T(p,f),$async$My)
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
return A.b(B.c5h(o,p,u,f),$async$My)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5i(o,p,f,t),$async$My)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5g(o,u,p,f),$async$My)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$My,w)},
aY2(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aY2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5o(e,d),$async$aY2)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.TX(!1,!0,d,e),$async$aY2)
case 4:u=g
if(u!=null){t=u.b
v=new A.P3(u.a,D.yH,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY2,w)},
c5o(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TR(d,s,0,1),$async$c5o)
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
return A.i($async$c5o,w)},
c5p(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5U(null,d,e),$async$c5p)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h08(u)
if(t.length>800){v=null
x=1
break}v=new A.P3(d.length,D.dqt,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5p,w)},
anI(d,e,f){return B.htV(d,e,f)},
htV(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anI=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mv(g,1)
x=B.fLj(g)?3:4
break
case 3:x=5
return A.b(B.c5j(g),$async$anI)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mv(g,13))
try{k=B.DY(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mv(g,13))
u=9
x=12
return A.b(B.aXW(q),$async$anI)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TU(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a9(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fLi(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TU(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HI(C.a.i(J.mv(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HI(C.a.i(J.mv(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HI(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.TU(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anI,w)},
HI(d,e,f){return B.htT(d,e,f)},
htT(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HI=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aXO(r),$async$HI)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXO(A.cv(s,0,null)),$async$HI)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c4W(o,r,a1,n,a2),$async$HI)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c4V(q),$async$HI)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TU(l,a2),$async$HI)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ck(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a9(d)
$.am.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HI,w)},
a5U(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5U=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.r8(f,r),$async$a5U)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcu().aI(q)],t,s))
x=3
break
case 4:u=A.V(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5U,w)},
TU(d,e){return B.htU(d,e)},
htU(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TU=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aG(0,a2,null)
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
break}m=e.gU(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ac(j)===0){x=7
break}i=C.cB.aI(j)
d=J.ac(q)!==0?q:null
x=9
return A.b(B.B5(i,a3,d,k,l,o),$async$TU)
case 9:h=a5
if(h!=null)J.cf(n,h)
x=7
break
case 8:f=J.ac(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a9(a1)
$.am.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$TU,w)},
Mx:function Mx(d,e){this.a=d
this.b=e},
c5q:function c5q(){},
a_Z(d){var x=A.N(d).ax.a===C.H,w=x?D.acw:D.aaA,v=x?D.adZ:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abJ:C.aL
return new A.aEA([w,s,v,u,t,x?C.f6:C.bT])},
hfm(d,e){var x=e?C.w.j(0.72):C.aW
return A.c9(null,x,!0,null,new B.fDt(e),d,null,!0,!0,y.N)},
c55(d,e,f,g,h,i,j,k,l){return new B.TM(e,l,d,f,k,j,g,h,i,null)},
Y1(d,e,f,g,h,i,j){return new B.bbp(g,h,j,e,i,d,f,null)},
fDt:function fDt(d){this.a=d},
XZ:function XZ(d,e){this.c=d
this.a=e},
axA:function axA(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_7:function d_7(d){this.a=d},
d_5:function d_5(d){this.a=d},
d_6:function d_6(d){this.a=d},
bsJ:function bsJ(){},
TM:function TM(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBz:function aBz(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dMn:function dMn(d){this.a=d},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLk:function dLk(d,e,f){this.a=d
this.b=e
this.c=f},
dLj:function dLj(d){this.a=d},
dLl:function dLl(d,e){this.a=d
this.b=e},
dLq:function dLq(d,e,f){this.a=d
this.b=e
this.c=f},
dLp:function dLp(d){this.a=d},
dMb:function dMb(d,e){this.a=d
this.b=e},
dMc:function dMc(d){this.a=d},
dLI:function dLI(d,e,f){this.a=d
this.b=e
this.c=f},
dLF:function dLF(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLo:function dLo(d){this.a=d},
dLQ:function dLQ(d){this.a=d},
dLP:function dLP(){},
dLu:function dLu(d){this.a=d},
dM8:function dM8(d,e){this.a=d
this.b=e},
dM9:function dM9(d,e){this.a=d
this.b=e},
dMa:function dMa(d,e){this.a=d
this.b=e},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dM1:function dM1(d,e){this.a=d
this.b=e},
dLY:function dLY(d){this.a=d},
dLX:function dLX(d){this.a=d},
dLZ:function dLZ(){},
dM_:function dM_(){},
dM0:function dM0(d,e){this.a=d
this.b=e},
dM2:function dM2(){},
dM3:function dM3(d){this.a=d},
dLW:function dLW(d,e){this.a=d
this.b=e},
dLR:function dLR(d){this.a=d},
dLS:function dLS(d){this.a=d},
dLT:function dLT(d){this.a=d},
dLU:function dLU(d){this.a=d},
dLV:function dLV(d){this.a=d},
dLr:function dLr(){},
dLs:function dLs(d){this.a=d},
dLt:function dLt(d,e){this.a=d
this.b=e},
dLn:function dLn(d,e){this.a=d
this.b=e},
dLm:function dLm(d,e,f){this.a=d
this.b=e
this.c=f},
dLJ:function dLJ(d){this.a=d},
dLK:function dLK(d,e,f){this.a=d
this.b=e
this.c=f},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLz:function dLz(d){this.a=d},
dLw:function dLw(d,e,f){this.a=d
this.b=e
this.c=f},
dLA:function dLA(d){this.a=d},
dLB:function dLB(d){this.a=d},
dLC:function dLC(){},
dLE:function dLE(d,e){this.a=d
this.b=e},
dLx:function dLx(d){this.a=d},
dLv:function dLv(d,e,f){this.a=d
this.b=e
this.c=f},
dLy:function dLy(){},
dLO:function dLO(d){this.a=d},
dLN:function dLN(d,e){this.a=d
this.b=e},
dM7:function dM7(d,e){this.a=d
this.b=e},
dM4:function dM4(d){this.a=d},
dM5:function dM5(d,e){this.a=d
this.b=e},
dM6:function dM6(d){this.a=d},
dMk:function dMk(d){this.a=d},
dMi:function dMi(d){this.a=d},
dMj:function dMj(d){this.a=d},
dMl:function dMl(){},
dMm:function dMm(d,e){this.a=d
this.b=e},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMf:function dMf(d,e,f){this.a=d
this.b=e
this.c=f},
dMd:function dMd(d,e,f){this.a=d
this.b=e
this.c=f},
dMg:function dMg(d,e){this.a=d
this.b=e},
dMh:function dMh(d,e){this.a=d
this.b=e},
axx:function axx(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbo:function bbo(d,e,f){this.c=d
this.d=e
this.a=f},
d_3:function d_3(){},
d_4:function d_4(){},
aaV:function aaV(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_r:function d_r(){},
d_q:function d_q(d){this.a=d},
Y0:function Y0(d,e,f){this.c=d
this.d=e
this.a=f},
axC:function axC(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_n:function d_n(d){this.a=d},
d_o:function d_o(d,e,f){this.a=d
this.b=e
this.c=f},
d_p:function d_p(d,e){this.a=d
this.b=e},
d_l:function d_l(d,e){this.a=d
this.b=e},
d_j:function d_j(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_e:function d_e(d){this.a=d},
d_k:function d_k(d){this.a=d},
d_g:function d_g(d){this.a=d},
d_m:function d_m(d){this.a=d},
d_i:function d_i(d){this.a=d},
d_f:function d_f(d){this.a=d},
XY:function XY(d,e,f){this.c=d
this.d=e
this.a=f},
axz:function axz(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d_0:function d_0(d){this.a=d},
d__:function d__(d,e){this.a=d
this.b=e},
d_1:function d_1(d){this.a=d},
cZZ:function cZZ(d,e){this.a=d
this.b=e},
d_2:function d_2(d){this.a=d},
cZY:function cZY(d,e){this.a=d
this.b=e},
cZU:function cZU(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZW:function cZW(d,e){this.a=d
this.b=e},
cZX:function cZX(d){this.a=d},
OG:function OG(d,e,f){this.c=d
this.d=e
this.a=f},
axF:function axF(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_E:function d_E(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_G:function d_G(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_I:function d_I(d,e){this.a=d
this.b=e},
d_J:function d_J(d){this.a=d},
d_L:function d_L(d){this.a=d},
d_K:function d_K(d){this.a=d},
Y2:function Y2(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axD:function axD(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_B:function d_B(d,e){this.a=d
this.b=e},
d_s:function d_s(d,e,f){this.a=d
this.b=e
this.c=f},
d_t:function d_t(d){this.a=d},
d_u:function d_u(){},
d_z:function d_z(){},
d_v:function d_v(d,e){this.a=d
this.b=e},
d_w:function d_w(d,e){this.a=d
this.b=e},
d_x:function d_x(d,e){this.a=d
this.b=e},
d_y:function d_y(d,e){this.a=d
this.b=e},
aaT:function aaT(d,e){this.c=d
this.a=e},
cZT:function cZT(d){this.a=d},
XX:function XX(d){this.a=d},
axy:function axy(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Y3:function Y3(d,e){this.c=d
this.a=e},
axE:function axE(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_D:function d_D(d){this.a=d},
d_C:function d_C(d){this.a=d},
bbp:function bbp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
htW(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fT(v)},
Mz(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Mz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$Mz)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$Mz)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Mz,w)},
a5V(d){return B.htX(d)},
htX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a5V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5V)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a5V)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5V,w)},
TW(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$TW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mz(),$async$TW)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dV(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a5V(s),$async$TW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TW,w)},
TX(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$TX=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c0(),$async$TX)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c5s(),t),t.k("H.E"))}if(u.length===0){v=null
x=1
break}s=B.htW()
t=A.T(u).k("J<1,a4<n,aC>>")
r=A.B(new A.J(u,new B.c5t(s),t),t.k("aj.E"))
x=6
return A.b(B.Mz(),$async$TX)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a5V(q),$async$TX)
case 7:x=8
return A.b(B.a5W(r,u,g,s),$async$TX)
case 8:v=new A.bmR(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TX,w)},
anJ(d){var x=0,w=A.j(y.y),v,u,t
var $async$anJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Mz(),$async$anJ)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anJ,w)},
c5u(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Mz(),$async$c5u)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5u,w)},
a5W(d,e,f,g){return B.htY(d,e,f,g)},
htY(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5W=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ac(q)===0){x=8
break}x=10
return A.b(B.anH("media",r,new B.c5r(s,e,g),f,q),$async$a5W)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.TW(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5W)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.TW(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a5W)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.TW(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5W)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5W,w)},
DY(d,e,f){return B.htZ(d,e,f)},
htZ(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DY=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$DY)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anJ(b3),$async$DY)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kB,null,g),$async$DY)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anJ(b3),$async$DY)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Mz(),$async$DY)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aN(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.O(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ck(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gai(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gU(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ac(m)===0){x=11
break}u=14
a8=$.eT().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oI(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9b(a8.a,b0,"media",a8.d,a9).C8(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXP(k,n,o,s,b7),$async$DY)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a9(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ac(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gai(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gU(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ac(h)!==0?25:26
break
case 25:u=28
a2=$.eT().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oI(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9b(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DY)
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
a0=A.dV(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a5V(e),$async$DY)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DY,w)},
c5s:function c5s(){},
c5t:function c5t(d){this.a=d},
c5r:function c5r(d,e,f){this.a=d
this.b=e
this.c=f},
aOJ(){var x=0,w=A.j(y.H),v,u
var $async$aOJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hER=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aOJ)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aOJ)
case 3:u=$.fQm
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aOJ)
case 4:$.fQm=$.hNg=$.hNh=null
return A.h(null,w)}})
return A.i($async$aOJ,w)},
fi1(d){var x=0,w=A.j(y.H),v,u
var $async$fi1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4D){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fi2(new A.bS(u,y.aY))
x=3
return A.b(u.i6(0,C.hF,new B.fi3()),$async$fi1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fi1,w)},
hNe(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.htG(x):x},
fQq(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anL(u)
x=1
break}v=B.fLi(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQq,w)},
fQp(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anM(u)
x=1
break}v=B.fLi(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQp,w)},
fz9(d){var x=0,w=A.j(y.T),v
var $async$fz9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anM(d),$async$fz9)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fz9,w)},
byY(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$byY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fQp(d),$async$byY)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ac(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byY,w)},
f7g(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f7g=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TQ(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B5(d.amr(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7g,w)},
FK(d,e,f){return B.hPC(d,e,f)},
hPC(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FK=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fQq(a1),$async$FK)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
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
break}p=J.ac(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hhc().aC4(D.df0,null),$async$FK)
case 4:l=d.fQm=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awp(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fiy(f,k,new B.fiz(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a69(0,new B.W6(r,"offer")),$async$FK)
case 5:d=l
x=7
return A.b(l.ajg(0),$async$FK)
case 7:x=6
return A.b(d.a61(0,a4),$async$FK)
case 6:x=8
return A.b(B.fi1(l),$async$FK)
case 8:x=9
return A.b(l.ana(),$async$FK)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hNe(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anN(m,h),$async$FK)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h08(h)
case 11:v=new A.bm8(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FK,w)},
fi2:function fi2(d){this.a=d},
fi3:function fi3(){},
fiz:function fiz(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fiy:function fiy(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fix:function fix(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hRt(d){switch(d){case"new":return D.e6R
case"checking":return D.e6S
case"connected":return D.e6U
case"completed":return D.e6T
case"failed":return D.e6W
case"disconnected":return D.e6X
case"closed":return D.aJF
case"count":return D.e6V}return D.aJF},
hRu(d){switch(d){case"new":return D.aJG
case"gathering":return D.e6Y
case"complete":return D.a4D}return D.aJG},
i0C(d){switch(d){case"stable":return D.e6Z
case"have-local-offer":return D.e7_
case"have-local-pranswer":return D.e71
case"have-remote-offer":return D.e70
case"have-remote-pranswer":return D.e72
case"closed":return D.aJM}return D.aJM},
hZS(d){switch(d){case"new":return D.aJJ
case"connecting":return D.aJK
case"connected":return D.aJL
case"closed":return D.a4E
case"disconnected":return D.aJI
case"failed":return D.aJH}return D.a4E},
a8b:function a8b(d,e){this.a=d
this.b=e},
Ny:function Ny(d,e){this.a=d
this.b=e},
W5:function W5(d,e){this.a=d
this.b=e},
Nx:function Nx(d,e){this.a=d
this.b=e},
Eq:function Eq(d,e){this.a=d
this.b=e},
cgp:function cgp(){},
fN1(d){var x=new B.Ep()
x.a=d
x.b=!0
return x},
Ep:function Ep(){this.b=this.a=$},
a8a:function a8a(){},
as1:function as1(){},
W6:function W6(d,e){this.a=d
this.b=e},
fLe(){var x=0,w=A.j(y.H)
var $async$fLe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fLe,w)},
fLh(d,e,f){var x=0,w=A.j(y.T),v
var $async$fLh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mc(D.mk))){v=null
x=1
break}v=B.fzp(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLh,w)},
h08(d){var x,w=F.aa5.a32(C.dH.aI(d),null)
if(w.length===0){x=C.dH.aI(d)
return C.cS.gcu().aI(x)}return C.cS.gcu().aI(w)},
htF(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c8(0,F.aa4.b9M(v,!1))
return x}catch(w){x=C.c4.c8(0,v)
return x}},
fLi(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.htF(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c8(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
htG(d){var x,w,v,u,t,s=A.a([],y.s)
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
htH(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fT(v)},
aXV(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aXV)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
$.am.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aXV,w)},
c5a(d,e){return B.htI(d,e)},
htI(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5a=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c5a)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
$.am.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c5a,w)},
aXY(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXV(d),$async$aXY)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXY,w)},
aXX(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.htH()
r=C.a.i(f)
t=C.dH.aI(s)
x=3
return A.b(B.c5a(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcu().aI(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aXX)
case 3:if(!h){v=null
x=1
break}v=new A.a_2("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXX,w)},
aXW(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ac(o)===0){v=null
x=1
break}x=3
return A.b(B.aXV(o),$async$aXW)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ac(u)===0){v=null
x=1
break}try{t=C.c4.c8(0,C.cB.aI(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aXW,w)},
c5b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ac(q)===0){x=1
break}u=4
x=7
return A.b(X.bzV("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c5b)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c5b,w)},
aXZ(d){var x=0,w=A.j(y.h),v,u,t
var $async$aXZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HE(),$async$aXZ)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXZ,w)},
anE(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anE)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aXZ(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anE,w)},
anC(d,e){var x=0,w=A.j(y.H)
var $async$anC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anC)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anC)
case 2:return A.h(null,w)}})
return A.i($async$anC,w)},
a5N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5N)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HE(),$async$a5N)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ag(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5M(s),$async$a5N)
case 5:x=6
return A.b(B.anC(f,u),$async$a5N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5N,w)},
a5O(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5O)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HE(),$async$a5O)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a1(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.ag(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.anC(g,q),$async$a5O)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5M(u),$async$a5O)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5O,w)},
a5P(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5P=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5P)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HE(),$async$a5P)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aXS(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a5P)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5P)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5P,w)},
c5c(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ac(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c5c)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aG(0,r,null)
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
return A.i($async$c5c,w)},
HF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5c(d),$async$HF)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aXZ(t),$async$HF)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anD(d),$async$HF)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXS(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anD(d),$async$HF)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HF,w)},
anD(d){var x=0,w=A.j(y.H)
var $async$anD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anD)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anD)
case 2:return A.h(null,w)}})
return A.i($async$anD,w)},
aY_(){var x,w=$.pf(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fT(v)},
a5Q(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fLj(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5f(d){return B.htK(d)},
htK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5Q(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5f)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
$.am.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c5f,w)},
anG(d,e){return B.htL(d,e)},
htL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$anG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5Q(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$anG)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
$.am.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anG,w)},
c5h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Q(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.anG(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5h,w)},
c5g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Q(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.anG(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5g,w)},
c5i(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Q(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.anG(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5i,w)},
c5j(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fLj(d)){v=null
x=1
break}x=3
return A.b(B.c5f(d),$async$c5j)
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
return A.i($async$c5j,w)},
a5X(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a5X=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5X)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a5X)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a1(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5X,w)},
anK(d){return B.hu_(d)},
hu_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$anK)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anK)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anK,w)},
anL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ac(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anL)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a5X(),$async$anL)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ac(q)===0){v=null
x=1
break}u=6
p=C.c4.c8(0,C.cB.aI(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dV(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anK(s),$async$anL)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a9(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anL,w)},
anN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c0(),$async$anN)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a5X(),$async$anN)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dV(A.a1(s,r,q),r,q)
r=C.dH.aI(C.a.i(e))
q.n(0,"answer",C.cS.gcu().aI(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anK(u),$async$anN)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anN,w)},
anM(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anM)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a5X(),$async$anM)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ac(u)===0){v=null
x=1
break}try{r=C.c4.c8(0,C.cB.aI(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anM,w)},
amN(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.m2(e),$async$amN)
case 3:r=g
u=4
x=7
return A.b(r.hl(C.fS),$async$amN)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wu(o))
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
return A.i($async$amN,w)},
hXX(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fxI(d){return B.hXZ(d)},
hXZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fxI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").K4(d,3600),$async$fxI)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fxI,w)},
Cr(d,e,f,g,h,i){var x=null
return B.hXW(d,e,f,g,h,i)},
hXW(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cr=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h0b(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fLl(r),$async$Cr)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fxI(o),$async$Cr)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5R(r),$async$Cr)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aMK)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.KX(A.a([],g))
x=15
return A.b(d.eR(0,A.asR("GET",A.cv(n,0,null))).cN(0,C.EB),$async$Cr)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5R(r),$async$Cr)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Jx(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cr)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ac(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aY1(r,k),$async$Cr)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Cr)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.TQ(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a9(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a5R(r),$async$Cr)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cr,w)},
aOs(d){return B.hXY(d)},
hXY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").W(0,d),$async$aOs)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOs,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[136]
O=c[40]
F=c[232]
I=c[128]
P=c[213]
E=c[206]
G=c[86]
Q=c[178]
R=c[129]
S=c[211]
K=c[236]
L=c[243]
B=a.updateHolder(c[21],B)
D=c[241]
T=c[177]
M=c[196]
U=c[65]
V=c[244]
W=c[71]
X=c[55]
N=c[85]
Y=c[242]
B.cgq.prototype={
aC4(d,e){return this.cEB(d,e)},
cEB(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aC4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.V(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.kb(A.cA(t)))
t=J.k(u)
v=B.hyA(C.cS.gcu().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aC4,w)}}
B.b26.prototype={
buX(d){var x=this,w=x.w
w.onclose=A.he(new B.cgl(x))
w.onopen=A.he(new B.cgm(x))
w.onmessage=A.he(new B.cgn(x))
w.onbufferedamountlow=A.he(new B.cgo(x))},
gdl(d){return this.x},
afB(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ep()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fN1(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afB)
case 8:v=t.fN1(s.am0(f,0,null))
x=1
break
case 7:case 4:v=B.fN1(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afB,w)}}
B.b27.prototype={
buY(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgr(x)))
w.addEventListener("icecandidate",A.he(new B.cgs(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgt(x)))
w.onicegatheringstatechange=A.he(new B.cgu(x))
w.addEventListener("signalingstatechange",A.he(new B.cgv(x)))
if(!$.fTZ())w.addEventListener("connectionstatechange",A.he(new B.cgw(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgx(x)))
w.addEventListener("track",A.he(new B.cgy(x)))},
ajg(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kb(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajg)
case 3:t=f
v=new B.W6(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajg,w)},
a61(d,e){return this.bkv(0,e)},
bkv(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a61=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a61)
case 2:return A.h(null,w)}})
return A.i($async$a61,w)},
a69(d,e){return this.bkL(0,e)},
bkL(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a69=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a69)
case 2:return A.h(null,w)}})
return A.i($async$a69,w)},
ana(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ana=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.W6(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ana,w)},
bB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fe(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB,w)}}
B.aaU.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Y_.prototype={
T(){return new B.axB()},
gd9(){return this.c}}
B.axB.prototype={
a_(){this.a1()
this.ack()},
ack(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ack=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXT(u.e,u.c),$async$ack)
case 2:t=e
if(v.c!=null)v.m(new B.d_b(v,t))
return A.h(null,w)}})
return A.i($async$ack,w)},
Ph(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ph=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anz(t.e,t.c,!1),$async$Ph)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eLJ)
x=1
break}x=4
return A.b(B.a5L(u.a.c,"individual"),$async$Ph)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4A(A.em(new B.d_8(u),!1,null,y.H)),$async$Ph)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ph,w)},
Iu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Iu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fgb(o),$async$Iu)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5P(o.e,r,s,q),$async$Iu)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIO)
x=1
break}x=5
return A.b(B.a5L(u.a.c,"member"),$async$Iu)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4A(A.em(new B.d_a(u),!1,null,y.H)),$async$Iu)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Iu,w)},
xs(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5K(t.e,o,t.f,t.r,t.w,s),$async$xs)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5L(u.a.c,"org_owner"),$async$xs)
case 4:x=5
return A.b(B.anE(u.a.c),$async$xs)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fgG(o),$async$xs)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5N(s,t,o,q.c),$async$xs)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIL)
x=1
break}x=10
return A.b(B.anE(u.a.c),$async$xs)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4A(A.em(new B.d_9(u),!1,null,y.H)),$async$xs)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xs,w)},
B(d){var x,w,v,u=this,t=null,s=A.N(d).ax.a===C.H,r=s?C.j_:C.pd,q=B.fLg(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.fK,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f35,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h3,t,t,t),C.az,D.flo,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bSh,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lv(new B.d_d(),t),C.P,w,C.e0,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abm(C.eR,C.awt,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc9i(),t),C.ac],v))
p.push(new B.abm(C.or,C.a0F,"Team Member","Sign in with your organization access code + password",u.gca9(),t))
p.push(C.ac)
p.push(new B.abm(C.aj7,C.a24,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc9F(),t))
return A.cb(t,r,A.bo(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.agr,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.abm.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.N(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oQ,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.N(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.AZ,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bY,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.af)}}
B.aAa.prototype={}
B.aDm.prototype={}
B.jf.prototype={
mc(d){var x=this.b,w=C.a.of(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
ganP(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.V(y.N,y.z)
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
b9g(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jf(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cD5(d){return this.b9g(null,d)},
aBQ(d){return this.b9g(d,null)}}
B.TK.prototype={
T(){return new B.aBx(new A.cs(null,y.A))},
gd9(){return this.c}}
B.aBx.prototype={
a_(){this.a1()
this.acl()},
acl(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B4(u.a.c),$async$acl)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dLg(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acl,w)},
acm(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fA(s)),$async$acm)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eMD)
case 1:return A.h(v,w)}})
return A.i($async$acm,w)},
Yt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Yt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amN(s.d,4),$async$Yt)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rC(r,"ngmy_my_code_"+m+".png"),$async$Yt)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Yt,w)},
ag3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8L("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ag3)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ag3,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===C.H,n=o?C.j_:C.pd,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lY
else if(q.e==null)x=A.av(new A.C(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aI.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a14,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ag1,p,p,1/0)
v=A.m(20)
u=A.a([new A.ad(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mr,w,C.kn,new A.et(A.p(p,A.pz(p,p,!1,B.htB(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bY,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kn,A.A(A.a([A.D(A.ez(N.Bh,C.SU,q.gc2l(),p),1),C.aw,A.D(A.dq(C.y7,C.a6U,q.gc2m(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.ez(M.a_x,D.fht,q.gcox(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.LA,p,p,C.ah)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.TO.prototype={
T(){return new B.aBA(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.aBA.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HD(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Yu(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HD(u.d.a.a)
if(t==null){u.m(new B.dMp(u))
x=1
break}u.m(new B.dMq(u))
s=u.a
r=s.c
x=3
return A.b(B.a5J(s.d,new B.dMr(u),t,r),$async$Yu)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dMs(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$Yu,w)},
a0D(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0D=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dMt(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.r8(r.a.c,q),$async$a0D)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dMu(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ac(r.a.d)>1?"NGMY Doc Share ("+J.ac(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agh(p,m,l,j,k),$async$a0D)
case 8:o=e
if(r.c!=null)r.m(new B.dMv(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dMw(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dMx(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0D,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===C.H,i=j?D.acw:D.aaA,h=j?D.adZ:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abJ:C.aL
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.N(d).ax.a===C.H
w=J.ac(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bGm,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fx,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a14,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgI()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bq(k,k,k,C.Lu,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dMy(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lP,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.KC(l.a.d,4)
m=A.B(new A.J(m,new B.dMz(x,new A.aEA(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ac(l.a.d)>4)m.push(new A.C(C.m8,A.d("+ "+(J.ac(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d6,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eHk)
else q.push(A.W(C.l7,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.ir,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bqj,k,k,C.ah),1)
u=l.f?k:l.gcoy()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(M.a_x,D.fio,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.aA(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc2n()
t=A.bk(C.aE,k,k,0,C.c,k,C.mR,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cb(g,h,new A.an(C.W,k,C.aa,C.q,A.a([f,v,A.bo(!0,A.mO(new B.dMA(),A.v(A.a([e,new A.C(D.bpO,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rk:D.fgS,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.WX,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgI.prototype={
ob(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bt,v.length),C.aN)}}
B.TL.prototype={
T(){return new B.aBy()}}
B.aBy.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,C.b1,C.aN),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ar(new A.bb(x,C.b1,C.aN),v)
u.f!==$&&A.aO()
u.f=new A.ar(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.S$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.S$=x
v.P$=0
v=w.f
v===$&&A.c()
v.S$=x
v.P$=0
w.a2()},
acn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dLh(r))
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
return A.b(B.a5O(p,m,n,o,C.a.i(l).length===0?null:l),$async$acn)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eMe)
s=[1]
x=4
break}p.I(y.q).f.R(D.eKS)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dLi(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acn,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.N(d).ax.a===C.H?C.j_:C.pd,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f9H,s,s,s,1,s,!0),p=A.p(s,D.bix,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.G1,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bNc,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bN7,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bNn,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc2o()
u=A.bk(C.aE,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cb(q,r,A.cd(A.v(A.a([p,C.d6,o,C.ac,x,C.ac,w,C.mr,A.bJ(t.r?C.rk:C.aPl,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.aaB.prototype={}
B.bt4.prototype={
a3i(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cp(r.amr()))
x=3
return A.b(B.Qc(t,s),$async$a3i)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3i,w)},
gd9(){return this.a}}
B.Mx.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.XZ.prototype={
T(){return new B.axA(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.axA.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_7(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c2u(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a_Z(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j_:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ad(0,C.G,C.aE.j(u?0.25:0.12),C.fK,32)],n),l=A.p(w,T.alO,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ad(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.amB,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsJ()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bq(w,w,w,C.EN,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aVU),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_5(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lP,w,w,w,w)
f=f[1]
f=A.D(A.dW(C.nd,new B.d_6(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eE(w,C.K,new A.cU(Q.Jw,A.bX(new A.C(C.xg,A.v(A.a([l,C.aO,k,C.P,j,C.e0,i,C.e0,A.A(A.a([f,C.aw,A.D(A.bX(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e10,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc2t(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.af),new A.o(w,w,w,h,n,L.Nl,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LC,C.d_,w,w,w)}}
B.bsJ.prototype={
ob(d,e){return e.ajb(e.a.toUpperCase())}}
B.TM.prototype={
T(){return new B.aBz(A.a([],y.r),A.aX(y.N))},
gd9(){return this.c}}
B.aBz.prototype={
a_(){var x=this
x.a1()
x.td()
x.w=A.dG(C.j3,new B.dMn(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.TV()
this.a2()},
a_v(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mw(u.a.c),$async$a_v)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A7(u.a.c),$async$a_v)
case 4:u.m(new s.dLL(u,e))
u.hR("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_v,w)},
td(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$td=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mw(u.a.c),$async$td)
case 3:t=e
x=4
return A.b(B.A7(u.a.c),$async$td)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLM(u,s))
if(t>0)u.hR("Received "+A.t(t)+" file(s) via My Code.")
u.MM(u.d)
B.B4(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$td,w)},
MM(d){return this.byR(d)},
byR(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5T(r,u.a.c),$async$MM)
case 8:p=f
if(u.c==null){x=1
break}new B.dLk(u,r,p).$0()
u.c.e6()
case 7:if(!(C.a.a0(r.c,"video/")||r.mc(D.mk))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TT(r,u.a.c),$async$MM)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A7(u.a.c),$async$MM)
case 12:u.m(new o.dLl(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MM,w)},
N8(d){return this.bEZ(d)},
bEZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$N8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5T(d,u.a.c),$async$N8)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dLq(u,d,t))
x=6
return A.b(A.fH(new A.fA(t)),$async$N8)
case 6:u.hR("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fA(r.toUpperCase())),$async$N8)
case 7:u.hR("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$N8,w)},
hR(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
te(d,e){return this.cyL(d,e)},
cyL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$te=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dMb(r,e))
u=3
x=6
return A.b(d.$0(),$async$te)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dMc(r))
$.eP.m7()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$te,w)},
gaSJ(){var x=this.a
return x.f||x.r||x.w},
Ht(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ht=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaSJ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c58(s,n,r,q,o,t),$async$Ht)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hR("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.frb(o,u.a.c),$async$Ht)
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
return A.b(B.Ct(s,o,r,q,n,t),$async$Ht)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ht,w)},
ZA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anE(u.a.c),$async$ZA)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hR("No organization portal found.")
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
return A.b(A.a5(t,!1).ci(A.em(new B.dLI(u,r,q),!1,null,y.H)),$async$ZA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZA,w)},
a_G(d){return this.cif(d)},
cie(){return this.a_G(1)},
cif(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaSJ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anB(u.a.c),$async$a_G)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_G,w)},
aao(d,e,f){return this.bV7(d,e,f)},
bV7(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aao=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR(e)
x=1
break}x=3
return A.b(u.te(new B.dLF(u,d,null,e,f),"Uploading\u2026"),$async$aao)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aao,w)},
bz_(){B.heE(!1,new B.dLo(this))
return},
cna(){this.m(new B.dLQ(this))},
awy(){var x=0,w=A.j(y.H),v=this
var $async$awy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bz_()
return A.h(null,w)}})
return A.i($async$awy,w)},
aak(){var x=0,w=A.j(y.H),v=this
var $async$aak=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.te(new B.dLu(v),"Importing\u2026"),$async$aak)
case 2:return A.h(null,w)}})
return A.i($async$aak,w)},
Rj(d){return this.cye(d)},
cye(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dM8(u,d),!1,null,y.H)),$async$Rj)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mc(D.Pf)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).ci(A.em(new B.dM9(u,d),!1,null,y.H)),$async$Rj)
case 8:x=1
break
case 7:x=u.bVP(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).ci(A.em(new B.dMa(u,d),!1,null,y.H)),$async$Rj)
case 11:x=1
break
case 10:u.hR("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rj,w)},
bVP(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.of(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.czs,C.a.b_(x,w+1).toLowerCase())},
adP(d){return this.c9m(d)},
c9m(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$adP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dLG(u,d),!1,null,y.H)),$async$adP)
case 5:x=1
break
case 4:u.m(new B.dLH(u,d))
case 1:return A.h(v,w)}})
return A.i($async$adP,w)},
QH(d){return this.cq_(d)},
cq_(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$QH)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.te(new B.dM1(u,d),"Preparing QR\u2026"),$async$QH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QH,w)},
agt(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dM2(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dM3(q),s),s.k("H.E"))
if(r.length===0){u.hR("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QH(r),$async$agt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
agm(d){return this.cpz(d)},
cpz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_Z(r)
r=u.c
r.toString
x=3
return A.b(A.bY(C.K,null,new B.dLW(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agm)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rj(d)
break
case"qr":u.QH(A.a([d],y.r))
break
case"send_my_code":u.c9Z(A.a([d],y.r))
break
case"save":u.afI(d)
break
case"delete":u.If(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agm,w)},
Ws(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ws=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLr(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLs(q),s),s.k("H.E"))
if(r.length===0){u.hR("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$Ws)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.te(new B.dLt(u,r),"Preparing file\u2026"),$async$Ws)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ws,w)},
aeV(d){return this.cgJ(d)},
cgJ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aeV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hfm(d,!1),$async$aeV)
case 3:s=f
r=s==null
q=B.a5Q(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hR("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aeV,w)},
adV(){var x=0,w=A.j(y.H),v=this,u
var $async$adV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fyN(u,v.a.c),$async$adV)
case 2:return A.h(null,w)}})
return A.i($async$adV,w)},
byZ(){B.heE(!1,new B.dLn(this,null))
return},
It(d,e){return this.ca_(d,e)},
aYA(d){return this.It(null,d)},
c9Z(d){return this.It(d,null)},
ca_(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$It=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dLJ(s),o),o.k("H.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wM.c4().alN(!0,C.YL,!1),$async$It)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.te(new B.dLK(l,s,r),"Preparing\u2026"),$async$It)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hR("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hR("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bB3(p,l,e,s.a.c),$async$It)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$It,w)},
HI(d){return this.bUV(d)},
bUV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.htA(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aYA(t),$async$HI)
case 8:x=6
break
case 7:u.hR("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hR("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.te(new B.dLD(u,d),"Receiving video\u2026"),$async$HI)
case 11:x=1
break
case 10:x=12
return A.b(u.te(new B.dLE(u,d),"Receiving\u2026"),$async$HI)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HI,w)},
DD(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cn()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aeV(t),$async$DD)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HI(s),$async$DD)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dLO(u),!1,null,y.N)),$async$DD)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.td(),$async$DD)
case 10:x=1
break
case 9:x=11
return A.b(u.HI(C.a.i(r)),$async$DD)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DD,w)},
afI(d){return this.clK(d)},
clK(d){var x=0,w=A.j(y.H),v=this
var $async$afI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.te(new B.dLN(v,d),"Saving\u2026"),$async$afI)
case 2:return A.h(null,w)}})
return A.i($async$afI,w)},
If(d){return this.bHg(d)},
bHg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$If=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kW(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$If)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5b(t),$async$If)
case 6:case 5:s=d.a
x=7
return A.b(B.DX(u.a.c,s),$async$If)
case 7:u.r.W(0,s)
x=8
return A.b(u.td(),$async$If)
case 8:case 1:return A.h(v,w)}})
return A.i($async$If,w)},
agz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_Z(r)
r=u.c
r.toString
x=3
return A.b(A.bY(C.K,null,new B.dM7(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agz)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.adV()
break
case"import":u.aak()
break}case 1:return A.h(v,w)}})
return A.i($async$agz,w)},
c2r(d){var x=d.c
if(C.a.a0(x,"video/")||d.mc(D.mk))return C.pC
if(C.a.a0(x,"image/")||d.mc(D.Pf))return C.tx
if(C.a.t(x,"pdf"))return E.MT
return D.ajA},
B(d){var x,w,v=this,u=null,t=B.a_Z(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FU,u,u,u,new B.dMi(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bGS,u,u,u,v.e?u:v.gc9G(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcn9()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bBe:E.ak0,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_u,u,u,u,v.e?u:v.gc2s(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nJ,u,u,u,v.e?u:v.gaZI(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bIy,u,u,u,v.e?u:new B.dMj(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lv(new B.dMk(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.N(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.N(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mf(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axx(C.jb,s,!0,t,w?u:v.gcq0(),u),1)
x.push(new A.C(D.boB,A.mO(new B.dMl(),A.A(A.a([s,C.aw,A.D(new B.axx(C.vd,"Export",!1,t,w?u:v.gbKG(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.is,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbo(t,v.e?u:v.gaZI(),u)
else s=A.k0(!0,u,u,new B.dMm(v,t),s,u,D.bot,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.an(C.W,u,C.aa,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axx.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.uX,t,new A.b7(s,C.Y),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uX,t,new A.b7(s,C.Y),new A.aA(v,1,C.r,-1),t,t,t,t)
return A.ez(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbo.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mO(new B.d_3(),new A.C(E.XQ,A.v(A.a([A.mO(new B.d_4(),A.p(x,A.W(C.xB,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.it,x,new A.bm(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e0,A.dq(C.nJ,D.flH,this.d,A.bk(C.aE,x,x,x,C.c,x,C.XL,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.Ao,x,new A.bm(0,1,w),s),x,x,x)}}
B.aaV.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mc(D.mk))p=D.d57
else{p=C.a.a0(p,"image/")||i.mc(D.Pf)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aI.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.ganP()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mc(D.mk))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mc(D.mk)))l.push(A.fJ6(C.aE,!1,j,j,j,!1,j,j,new B.d_q(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nH,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mO(new B.d_r(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.Xj,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.r,-1)),j,j,C.af),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.Y0.prototype={
T(){return new B.axC()},
gd9(){return this.c}}
B.axC.prototype={
a_(){this.a1()
this.xi()},
q(){B.htP(this.e)
this.a2()},
xi(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.r8(o.c,o.d),$async$xi)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.htS(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.htR(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_n(s))
x=1
break}s.m(new B.d_o(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d_p(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xi,w)},
a0C(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r8(t.c,t.d),$async$a0C)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eJk)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agh(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0C)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0C,w)},
bUO(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kh(u,C.A,v,new B.d_l(w,t),C.fQ,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fK(t,C.A,v,new B.d_m(w),C.fQ,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ua(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_Z(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bi,u,u,u,v.gb2s(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dv
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.Bi,D.f5k,v.gb2s(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bUO()}return A.cb(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.XY.prototype={
T(){return new B.axz(A.ah4(),C.bx,C.bx)},
gd9(){return this.c}}
B.axz.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a3(w).k("fs<1>")).i2(new B.d_0(v))
x.gcLR().i2(new B.d_1(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a3(x).k("fs<1>"))}if(x==null)x=C.b10
x.i2(new B.d_2(v))
v.xi()},
xi(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xi=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r8(p.c,p.d),$async$xi)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cZU(s))
x=1
break}x=8
return A.b(s.d.BB(0,new A.a26(r,s.a.d.c)),$async$xi)
case 8:if(s.c==null){x=1
break}s.m(new B.cZV(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.cZW(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xi,w)},
Yv(){var x=0,w=A.j(y.H),v=this,u
var $async$Yv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fY(0),$async$Yv)
case 5:x=3
break
case 4:x=6
return A.b(u.i5(0),$async$Yv)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Yv,w)},
aQF(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_Z(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dv
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bCe,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Nl,C.n),o,88,o,o,o,o,o,88)
t=A.kR(C.aE,o,o,m,0,new B.cZX(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQF(p.w)+" / "+p.aQF(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eFR,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xM:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.kn,t,x,C.d6,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc2v(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.av(new A.C(C.tl,x,o),o,o,o),o,!1,!1,o,o)}}
B.OG.prototype={
T(){return new B.axF()},
gd9(){return this.c}}
B.axF.prototype={
a_(){this.a1()
this.OE()},
OE(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OE=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fLh(o.c,o.d,new B.d_E(s)),$async$OE)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_F(s))
x=1
break}s.e=r
q=O.hQr(r)
if(q==null){s.m(new B.d_G(s))
x=1
break}s.d=q
q.aM(0,s.gaYo())
x=8
return A.b(q.i1(0).cN(0,C.qC),$async$OE)
case 8:if(s.c==null){x=1
break}s.m(new B.d_H(s))
x=9
return A.b(q.pr(0),$async$OE)
case 9:q.rR(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d_I(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OE,w)},
c7Y(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_J(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cm(0,x.gaYo())
w=x.d
if(w!=null)w.q()
B.i_8(x.e)
x.a2()},
acq(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY0(u.c,u.d),$async$acq)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acq,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_Z(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oy,t,t,t,u.gc2p(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dv
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agz(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.q,A.a([new A.zE(s,t),A.aE(t,A.CE(A.p(t,A.W(q?I.xM:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bY,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_L(u),t,t,t,t,t,t,!1,C.a9)],o),t),t)}else s=C.bH}}return A.cb(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Y2.prototype={
T(){return new B.axD(new A.cs(null,y.A))}}
B.axD.prototype={
gcyv(){var x,w,v=this.a
if(v.e!==D.Qz)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcyc(){var x,w,v=this.a
if(v.e!==D.yH)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcyv()
if(x!=null){v.PH(x)
v.e=A.dG(R.EE,new B.d_A(v,x))}w=v.gcyc()
if(w!=null){v.PG(w)
v.f=A.dG(C.hf,new B.d_B(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
PG(d){return this.ceW(d)},
ceW(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anJ(d),$async$PG)
case 3:t=f
x=4
return A.b(B.c5u(d),$async$PG)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_s(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PG,w)},
PH(d){return this.ceX(d)},
ceX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fz9(d),$async$PH)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.byY(t),$async$PH)
case 4:if(u.c==null){x=1
break}u.m(new B.d_t(u))
u.c.I(y.q).f.R(D.aMl)
case 1:return A.h(v,w)}})
return A.i($async$PH,w)},
gbZJ(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc2q(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0o(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0o=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cn()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eMo)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).ci(A.em(new B.d_u(),!1,null,y.N)),$async$a0o)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.byY(s),$async$a0o)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aMl)
case 1:return A.h(v,w)}})
return A.i($async$a0o,w)},
a8j(d){return this.bF_(d)},
bF_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fA(C.d.aH(t,", "))),$async$a8j)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8j,w)},
aco(d){return this.bEK(d)},
bEK(d){var x=0,w=A.j(y.H),v=this
var $async$aco=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fA(v.a.c)),$async$aco)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eJN)
return A.h(null,w)}})
return A.i($async$aco,w)},
a0j(d){return this.clM(d)},
clM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amN(s.d,4),$async$a0j)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rC(r,"ngmy_doc_share_qr.png"),$async$a0j)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a9(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0j,w)},
gaTN(){var x,w=this.a
if(w.e!==D.H4)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a8g(d){return this.bET(d)},
bET(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaTN()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8g)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eLo)
case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
acp(){var x=0,w=A.j(y.H),v=this,u
var $async$acp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.TV(),$async$acp)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acp,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_Z(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.H4&&i!==D.Qz&&i!==D.yH
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.H4||t===D.Qz||t===D.yH?l:A.aH(l,l,l,l,C.kK,l,l,l,m.gaWA(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pz(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbZJ(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.H4){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc2q(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bMh,D.fea,new B.d_v(m,d),l)],p))}if(m.a.e===D.H4&&m.gaTN()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bIS,D.faZ,new B.d_w(m,d),l)],p))
if(m.a.e===D.yH){x=(m.w?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Dy:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}if(m.a.e===D.Qz){x=(m.r?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Dy:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l),C.ac,A.dq(D.bEG,D.fha,m.gcm9(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oa(i,A.cb(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.ba,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(N.Bh,C.SU,new B.d_x(m,d),l),1),C.aw,A.D(A.dq(C.y7,C.a6U,new B.d_y(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zb,m.gaWA(),A.bk(C.aI,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_z(),y.C)}}
B.aaT.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.pz(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ah)
return A.eh(A.a([A.bJ(C.zc,new B.cZT(d),x)],u),x,x,C.mB,v,x,x,x,x,D.f4l,x)}}
B.XX.prototype={
T(){return new B.axy(A.yL(C.wY,C.nk,C.tJ))}}
B.axy.prototype={
q(){this.d.q()
this.a2()},
av9(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).N(t)
return}}},
B(d){var x=null
return A.cb(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fbs,x,x,x,1,x,!0),C.w,A.yK(this.d,C.bQ,this.gav8()),x,!1,!1,x,x)}}
B.Y3.prototype={
T(){return new B.axE(A.yL(C.wY,C.nk,C.tJ))},
gd9(){return this.c}}
B.axE.prototype={
bVR(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeh(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Ra("text/plain"),$async$aeh)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eMi)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aeh,w)},
a94(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a94=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hfm(p,!0),$async$a94)
case 3:t=e
p=t==null
s=B.a5Q(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eIV)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a94,w)},
q(){this.d.q()
this.a2()},
av9(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bVR(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.akV,v,v,v,w.gbKe(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_B,v,v,v,w.gccl(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qM:P.MD,v,v,v,v,v),v,v,v,new B.d_D(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fhY,v,v,v,1,v,!0)
u=A.yK(w.d,C.bQ,w.gav8())
x=A.m(20)
return A.cb(t,C.w,new A.an(C.W,v,C.aa,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e6y],s),v),v,!1,!1,v,v)}}
B.bbp.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oi
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oi:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.XV,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.eo,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.af)}}
B.a8b.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.Ny.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.W5.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.Nx.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Eq.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgp.prototype={}
B.Ep.prototype={}
B.a8a.prototype={}
B.as1.prototype={}
B.W6.prototype={}
var z=a.updateTypes(["ay<~>()","R(jf)","n(jf)","TM(Y)","~()","Y_(Y)","G(G,jf)","OG(Y)","~(lP)","cn(Ep)","ay<jf?>(@)","TK(Y)","TO(Y)","C(jf)","jf(@)","a4<n,@>(jf)","XZ(Y)","TL(Y)","Y0(Y)","XY(Y)","Y2(Y)","aaT(Y)","ak<jf>()","Y3(Y)","aaV(Y,G)","XX(Y)","a4<n,aC>(jf)","cn(W5)","cn(a8a)","ay<cn>(Ep)"])
B.cgl.prototype={
$1(d){var x=this.a
x.x=D.aJE
x.y.J(0,D.aJE)},
$S:69}
B.cgm.prototype={
$1(d){var x=this.a
x.x=D.aJD
x.y.J(0,D.aJD)},
$S:69}
B.cgn.prototype={
$1(d){var x=this.a
x.afB(A.aNc(d.data)).bz(new B.cgk(x),y.b)},
$S:69}
B.cgk.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgo.prototype={
$1(d){},
$S:69}
B.cgr.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hyz(d.channel))},
$S:15}
B.cgs.prototype={
$1(d){},
$S:15}
B.cgt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hRt(w.iceConnectionState)
x.cx=w
if($.fTZ())switch(w.a){case 0:x.cy=D.aJJ
break
case 1:x.cy=D.aJK
break
case 3:x.cy=D.aJL
break
case 5:x.cy=D.aJH
break
case 6:x.cy=D.aJI
break
case 7:x.cy=D.a4E
break
default:break}},
$S:148}
B.cgu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hRu(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cgv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i0C(w.signalingState)},
$S:148}
B.cgw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hZS(w.connectionState)},
$S:148}
B.cgx.prototype={
$1(d){},
$S:148}
B.cgy.prototype={
$1(d){},
$S:15}
B.fcV.prototype={
$1(d){var x=y.F.a(new A.rt([],[]).pd(d.target.result,!1)),w=C.wZ.t(x.objectStoreNames,"blobs")
if(!w)C.wV.K2(x,"blobs")},
$S:178}
B.fyB.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vp.f5(this.b)
$.eP.m7()
this.c.$1(d)},
$S:405}
B.fyD.prototype={
$1(d){return this.a.$1(B.hHo(this.b,this.c))},
$S:34}
B.fyC.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fyA.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fyQ.prototype={
$1(d){var x=this
return B.h50(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyR.prototype={
$1(d){var x=this
return B.h50(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fef.prototype={
$1(d){var x=this
return B.c55(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_b.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_8.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c55(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_a.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c55(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_9.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c55(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_d.prototype={
$4(d,e,f,g){var x=null
return A.jA(A.A(A.a([A.aH(x,x,x,x,D.bDj,x,x,x,new B.d_c(d),x,x,x,x,x,x),A.D(A.Eb(D.P0,!0,x,C.ZG,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.P0,x,g,C.agM,0,e,f)},
$C:"$4",
$R:4,
$S:413}
B.d_c.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fge.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.biQ,C.f,v,v,D.aXz,v,v,v,v,D.agB,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bq(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bHq,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.ES,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bq(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.al9,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.D(A.dW(C.dd,new B.fgc(d),v),1),C.aw,A.D(A.bJ(D.fa1,new B.fgd(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Xg,v,v,v,v),v)},
$S:60}
B.fgc.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fgd.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eK1)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAa(v,x))},
$S:0}
B.fgI.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.biG,C.f,w,w,D.aZ_,w,w,w,w,D.agB,w,w,1/0),new A.C(C.ES,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fQa(u,"Organization name",C.Fi,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fQa(u,"Access code",C.mW,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fQa(u,"Member password",H.FP,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bJ(D.fi1,new B.fgH(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Xg,w,w,w,w),w)},
$S:60}
B.fgH.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eK6)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDm(u,x,w))},
$S:0}
B.c4X.prototype={
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
p=C.a.a0(j,"http")?A.cv(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.uZ(p,null).cN(0,C.WW),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cp(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B5(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a9(h)
$.am.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c52.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c53.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c54.prototype={
$1(d){return d.b},
$S:z+2}
B.c4Z.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5_.prototype={
$1(d){return d.b},
$S:z+2}
B.c4Y.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c50.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c51.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fyO.prototype={
$1(d){return new B.TK(this.a,null)},
$S:z+11}
B.fyP.prototype={
$1(d){return new B.TO(this.a,this.b,this.c,null)},
$S:z+12}
B.dLg.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dMp.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dMq.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dMr.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dMo(x,d))},
$S:2}
B.dMo.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMt.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dMu.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dMv.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMw.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dMx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMA.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.dMy.prototype={
$1(d){var x=this.a
return x.f?null:x.Yu()},
$S:2}
B.dMz.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mc(D.Pf))s=C.tx
else s=C.a.a0(s,"video/")||d.mc(D.mk)?C.pC:D.ajA
x=this.b.a
w=y.p
return new A.C(C.kD,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.ganP(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dLh.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dLi.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c56.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.c57.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.fzr.prototype={
$2(d,e){return e===this.a},
$S:324}
B.fa7.prototype={
$1(d){return J.k(d)},
$S:17}
B.fer.prototype={
$1(d){var x=this.b
B.hFq(C.F5.ga4S(this.a)).bz(x.gcBr(x),y.H)},
$S:123}
B.fes.prototype={
$1(d){return this.a.d3(0,null)},
$S:123}
B.fet.prototype={
$0(){return null},
$S:11}
B.c5l.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.feu.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a5().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jf(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fip.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fd8.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fd9.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5q.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.fDt.prototype={
$1(d){return new B.XZ(this.a,null)},
$S:z+16}
B.d_7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fD()},
$S:8}
B.d_5.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_6.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMn.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_v()},
$S:14}
B.dLL.prototype={
$0(){var x=J.bC8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLM.prototype={
$0(){var x=J.bC8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLk.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLj(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBQ(this.c)}},
$S:0}
B.dLj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLl.prototype={
$0(){var x=J.bC8(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLq.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLp(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBQ(this.c)}},
$S:0}
B.dLp.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMb.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dMc.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLI.prototype={
$1(d){return new B.TL(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dLF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ht(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TP(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.td(),$async$$0)
case 5:s=J.a8(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a_G(s.gM(t)),$async$$0)
case 8:case 7:r.hR(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLo.prototype={
$1(d){this.a.aao(d,"No files selected.","Added")},
$S:405}
B.dLQ.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dLP(),A.T(x).k("J<1,n>")))},
$S:0}
B.dLP.prototype={
$1(d){return d.a},
$S:z+2}
B.dLu.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wM.c4().cNO(C.YL,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jk(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a9(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hR("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hR("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anI(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hR("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.td(),$async$$0)
case 9:o.hR("Imported "+J.ac(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dM8.prototype={
$1(d){return new B.OG(this.a.a.c,this.b,null)},
$S:z+7}
B.dM9.prototype={
$1(d){return new B.Y0(this.a.a.c,this.b,null)},
$S:z+18}
B.dMa.prototype={
$1(d){return new B.XY(this.a.a.c,this.b,null)},
$S:z+19}
B.dLG.prototype={
$1(d){return new B.OG(this.a.a.c,this.b,null)},
$S:z+7}
B.dLH.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dM1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ht(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5S(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hR("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cie(),$async$$0)
case 5:x=6
return A.b(p.td(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dLY(p),r),new B.dLZ(),r.k("J<aj.E,n>")).bZ(0,new B.dM_())
q=A.B(r,r.$ti.k("H.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dM0(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oT(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.TV(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLY.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dLX(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dLX.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLZ.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dM_.prototype={
$1(d){return d.length!==0},
$S:3}
B.dM0.prototype={
$1(d){var x=this.a
return new B.Y2(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dM2.prototype={
$1(d){return d.a},
$S:z+2}
B.dM3.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLW.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kC,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.ganP(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mc(D.mk)?C.tz:C.ov
p=!x||p.mc(D.mk)?"Play video":"View"
return A.bX(A.bo(!0,new A.C(C.Ay,A.v(A.a([q,o,t,C.az,B.Y1(!1,u,!1,w,p,new B.dLR(d),v),B.Y1(!1,u,!1,C.jb,"Share via QR",new B.dLS(d),"Letters/numbers QR code"),B.Y1(!1,u,!1,D.ZM,"Send to their Code",new B.dLT(d),"Enter someone else's personal code"),B.Y1(!1,u,!1,C.hx,"Download / save",new B.dLU(d),v),C.ao,B.Y1(!1,u,!0,C.e4,"Delete",new B.dLV(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,v,v,C.n),C.bd)},
$S:733}
B.dLR.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dLS.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dLT.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dLU.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dLV.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dLr.prototype={
$1(d){return d.a},
$S:z+2}
B.dLs.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5U(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FN(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oT(s.c,s.f),$async$$0)
case 4:u.hR(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLn.prototype={
$1(d){var x=this.a
x.te(new B.dLm(x,d,this.b),"Preparing\u2026")},
$S:405}
B.dLm.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hR("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TP(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hR("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bB3(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLJ.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLK.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fLk(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FK(new B.dLz(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hR("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dLA(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dLB(s))
case 5:x=8
return A.b(r.b.i6(0,C.EB,new B.dLC()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gal(t)){s.hR("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.td(),$async$$0)
case 9:s.hR("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLz.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLw(x,d,e))},
$S:137}
B.dLw.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLA.prototype={
$1(d){return new B.aaT(this.a.a,null)},
$S:z+21}
B.dLB.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dLC.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dLE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HD(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5I(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aYA(B.HD(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anI(new B.dLx(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fLj(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hR(q)
x=1
break}x=10
return A.b(s.td(),$async$$0)
case 10:o=J.cE(r)
p=o.eI(r,new B.dLy()).gM(0)
s.hR(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLx.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLv(x,d,e))},
$S:137}
B.dLv.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLy.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.dLO.prototype={
$1(d){return new B.Y3(this.a.a.c,null)},
$S:z+23}
B.dLN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aY0(u.a.c,v.b),$async$$0)
case 2:t.hR(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM7.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bX(A.bo(!0,new A.C(C.Ay,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kC,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.Y1(!0,w,!1,C.mW,"My Code",new B.dM4(d),"Your personal code & QR \u2014 others send docs to you"),B.Y1(!1,w,!1,D.ZM,"Send to their Code",new B.dM5(this.a,d),"Enter someone else's 5-digit code + letter"),B.Y1(!1,w,!1,S.xX,"Import backup",new B.dM6(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,x,x,C.n),C.bd)},
$S:733}
B.dM4.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dM5.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.byZ()},
$S:0}
B.dM6.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dMk.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HM(D.P0,x,C.ZG,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.P0).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:522}
B.dMi.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMj.prototype={
$0(){this.a.agz()
return null},
$S:0}
B.dMl.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:107}
B.dMm.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aaV(e,w,v,this.b,x.e,x.c2r(w),new B.dMe(x,w),new B.dMf(x,v,w),new B.dMg(x,w),new B.dMh(x,w),null)},
$S:z+24}
B.dMe.prototype={
$0(){this.a.adP(this.b)
return null},
$S:0}
B.dMf.prototype={
$0(){var x=this.a
return x.m(new B.dMd(x,this.b,this.c))},
$S:0}
B.dMd.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dMg.prototype={
$0(){this.a.N8(this.b)
return null},
$S:0}
B.dMh.prototype={
$0(){this.a.agm(this.b)
return null},
$S:0}
B.d_3.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:107}
B.d_4.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:135}
B.d_r.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.d_q.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_n.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_o.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_p.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_l.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fK(w,C.A,x,new B.d_j(this.a),C.fQ,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d_k(this.a))
return C.bH},
$S:126}
B.d_j.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_h(this.a))
return C.bH},
$S:189}
B.d_h.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_e(x))},
$S:8}
B.d_e.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_k.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_g(x))},
$S:8}
B.d_g.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_m.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_i(this.a))
return C.bH},
$S:189}
B.d_i.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_f(x))},
$S:8}
B.d_f.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_0.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d__(x,d))},
$S:1740}
B.d__.prototype={
$0(){return this.a.f=this.b===C.u5},
$S:0}
B.d_1.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZZ(x,d))},
$S:8}
B.cZZ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_2.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZY(x,d))},
$S:8}
B.cZY.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cZU.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cZV.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cZW.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cZX.prototype={
$1(d){return this.a.d.M9(0,A.dB(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_E.prototype={
$0(){var x=this.a.a
return B.r8(x.c,x.d)},
$S:1741}
B.d_F.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_G.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_H.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_I.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_J.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_L.prototype={
$0(){var x=this.a
x.m(new B.d_K(x))},
$S:0}
B.d_K.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fY(0)
else x.pr(0)},
$S:0}
B.d_A.prototype={
$1(d){return this.a.PH(this.b)},
$S:14}
B.d_B.prototype={
$1(d){return this.a.PG(this.b)},
$S:14}
B.d_s.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_t.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_u.prototype={
$1(d){return D.fED},
$S:z+25}
B.d_z.prototype={
$2(d,e){if(d)B.TV()},
$S:116}
B.d_v.prototype={
$0(){return this.a.a8j(this.b)},
$S:0}
B.d_w.prototype={
$0(){return this.a.a8g(this.b)},
$S:0}
B.d_x.prototype={
$0(){return this.a.aco(this.b)},
$S:0}
B.d_y.prototype={
$0(){return this.a.a0j(this.b)},
$S:0}
B.cZT.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d_D.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pv(),$async$$0)
case 2:u.m(new B.d_C(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_C.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5s.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.c5t.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5r.prototype={
$2(d,e){return this.bgv(d,e)},
bgv(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.TW(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fi2.prototype={
$1(d){if(d===D.a4D&&(this.a.a.a&30)===0)this.a.fK(0)},
$S:z+27}
B.fi3.prototype={
$0(){},
$S:11}
B.fiz.prototype={
bi3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f7g(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h0b(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bi3(d,e)},
$S:685}
B.fiy.prototype={
$1(d){var x=this
d.b=new B.fix(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fix.prototype={
$1(d){return this.bi2(d)},
bi2(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aY1(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aG(0,n,null)
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
return A.b(B.f7g(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a9(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a5R(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axB.prototype,"gc9i","Ph",0)
x(v,"gca9","Iu",0)
x(v,"gc9F","xs",0)
x(v=B.aBx.prototype,"gc2l","acm",0)
x(v,"gc2m","Yt",0)
x(v,"gcox","ag3",0)
x(v=B.aBA.prototype,"gc2n","Yu",0)
x(v,"gcoy","a0D",0)
x(B.aBy.prototype,"gc2o","acn",0)
x(B.axA.prototype,"gc2t","c2u",4)
x(v=B.aBz.prototype,"gc9G","ZA",0)
x(v,"gcn9","cna",4)
x(v,"gaZI","awy",0)
x(v,"gcq0","agt",0)
x(v,"gbKG","Ws",0)
x(v,"gc2s","DD",0)
x(B.axC.prototype,"gb2s","a0C",0)
x(B.axz.prototype,"gc2v","Yv",0)
x(v=B.axF.prototype,"gaYo","c7Y",4)
x(v,"gc2p","acq",0)
x(v=B.axD.prototype,"gcm9","a0o",0)
x(v,"gaWA","acp",0)
w(B.axy.prototype,"gav8","av9",8)
x(v=B.axE.prototype,"gccl","aeh",0)
x(v,"gbKe","a94",0)
w(v,"gav8","av9",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgp,B.a8a,B.as1,B.aAa,B.aDm,B.jf,B.aaB,B.bt4,B.Ep,B.W6])
w(B.cgq,B.cgp)
w(B.b26,B.a8a)
x(A.hS,[B.cgl,B.cgm,B.cgn,B.cgk,B.cgo,B.cgr,B.cgs,B.cgt,B.cgu,B.cgv,B.cgw,B.cgx,B.cgy,B.fcV,B.fyB,B.fyD,B.fyC,B.fyQ,B.fyR,B.fef,B.d_8,B.d_a,B.d_9,B.d_d,B.fge,B.fgI,B.c4X,B.c53,B.c54,B.c5_,B.c4Y,B.c50,B.c51,B.fyO,B.fyP,B.dMr,B.dMA,B.dMy,B.dMz,B.fa7,B.fer,B.fes,B.c5l,B.feu,B.fip,B.fd8,B.fd9,B.c5q,B.fDt,B.d_7,B.d_5,B.dMn,B.dLj,B.dLp,B.dLI,B.dLo,B.dLP,B.dM8,B.dM9,B.dMa,B.dLG,B.dLY,B.dLX,B.dLZ,B.dM_,B.dM0,B.dM2,B.dM3,B.dLW,B.dLr,B.dLs,B.dLn,B.dLJ,B.dLA,B.dLy,B.dLO,B.dM7,B.dMk,B.dMl,B.d_3,B.d_4,B.d_r,B.d_q,B.d_l,B.d_j,B.d_h,B.d_k,B.d_m,B.d_i,B.d_0,B.d_1,B.d_2,B.cZX,B.d_A,B.d_B,B.d_u,B.c5s,B.c5t,B.fi2,B.fiy,B.fix])
w(B.b27,B.as1)
x(A.j2,[B.fyA,B.d_b,B.d_c,B.fgc,B.fgd,B.fgH,B.dLg,B.dMp,B.dMq,B.dMo,B.dMs,B.dMt,B.dMu,B.dMv,B.dMw,B.dMx,B.dLh,B.dLi,B.fet,B.d_6,B.dLL,B.dLM,B.dLk,B.dLl,B.dLq,B.dMb,B.dMc,B.dLF,B.dLQ,B.dLu,B.dLH,B.dM1,B.dLR,B.dLS,B.dLT,B.dLU,B.dLV,B.dLt,B.dLm,B.dLK,B.dLD,B.dLw,B.dLB,B.dLC,B.dLE,B.dLv,B.dLN,B.dM4,B.dM5,B.dM6,B.dMi,B.dMj,B.dMe,B.dMf,B.dMd,B.dMg,B.dMh,B.d_n,B.d_o,B.d_p,B.d_e,B.d_g,B.d_f,B.d__,B.cZZ,B.cZY,B.cZU,B.cZV,B.cZW,B.d_E,B.d_F,B.d_G,B.d_H,B.d_I,B.d_J,B.d_L,B.d_K,B.d_s,B.d_t,B.d_v,B.d_w,B.d_x,B.d_y,B.cZT,B.d_D,B.d_C,B.fi3])
x(A.m0,[B.aaU,B.Mx,B.a8b,B.Ny,B.W5,B.Nx,B.Eq])
x(A.ag,[B.Y_,B.TK,B.TO,B.TL,B.XZ,B.TM,B.Y0,B.XY,B.OG,B.Y2,B.XX,B.Y3])
x(A.ah,[B.axB,B.aBx,B.aBA,B.aBy,B.axA,B.aBz,B.axC,B.axz,B.axF,B.axD,B.axy,B.axE])
x(A.au,[B.abm,B.axx,B.bbo,B.aaV,B.aaT,B.bbp])
x(A.kc,[B.c52,B.c4Z,B.c56,B.c57,B.fzr,B.dLz,B.dLx,B.dMm,B.d_z,B.c5r,B.fiz])
x(A.iN,[B.bgI,B.bsJ])})()
A.jR(b.typeUniverse,JSON.parse('{"b26":{"a8a":[]},"b27":{"as1":[]},"Y_":{"ag":[],"r":[]},"axB":{"ah":["Y_"]},"abm":{"au":[],"r":[]},"TK":{"ag":[],"r":[]},"TO":{"ag":[],"r":[]},"aBx":{"ah":["TK"]},"aBA":{"ah":["TO"]},"bgI":{"iN":[]},"TL":{"ag":[],"r":[]},"aBy":{"ah":["TL"]},"XZ":{"ag":[],"r":[]},"TM":{"ag":[],"r":[]},"aaV":{"au":[],"r":[]},"Y0":{"ag":[],"r":[]},"XY":{"ag":[],"r":[]},"OG":{"ag":[],"r":[]},"Y2":{"ag":[],"r":[]},"aaT":{"au":[],"r":[]},"XX":{"ag":[],"r":[]},"Y3":{"ag":[],"r":[]},"axA":{"ah":["XZ"]},"bsJ":{"iN":[]},"aBz":{"ah":["TM"]},"axx":{"au":[],"r":[]},"bbo":{"au":[],"r":[]},"axC":{"ah":["Y0"]},"axz":{"ah":["XY"]},"axF":{"ah":["OG"]},"axD":{"ah":["Y2"]},"axy":{"ah":["XX"]},"axE":{"ah":["Y3"]},"bbp":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tS"),k:x("L0()"),m:x("bp<n,n>"),F:x("qL"),g:x("ay<jf?>"),x:x("ay<~>"),V:x("O<ad>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jf>"),w:x("O<+file,name(lq,n)>"),u:x("O<cP>"),s:x("O<n>"),E:x("O<iN>"),a:x("O<dC>"),p:x("O<r>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ak<jf>"),j:x("ak<@>"),I:x("ak<G>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iy"),e:x("i4u"),af:x("DF"),U:x("jf"),b:x("cn"),C:x("aC"),aK:x("vL"),ab:x("Ep"),br:x("as1"),v:x("W6"),N:x("n"),X:x("bm<P>"),Q:x("lB"),D:x("dC"),aw:x("cz<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bS<ak<jf>>"),aW:x("bS<dC?>"),aY:x("bS<~>"),cx:x("aaU"),b1:x("bg<ak<jf>>"),cf:x("bg<dC?>"),d4:x("bg<~>"),c4:x("aAa"),bG:x("aDm"),q:x("mQ"),B:x("p9<Ep>"),c6:x("p9<a8b>"),y:x("R"),i:x("P"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ak<jf>?"),aL:x("ak<@>?"),h:x("a4<n,@>?"),l:x("jf?"),R:x("aC?"),c:x("W6?"),d:x("+answerQr,transfer(n,ay<ak<jf>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Mx,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dC?"),cm:x("aaB?"),bk:x("aAa?"),ag:x("aDm?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aVU=new A.aA(C.aE,2,C.r,-1)
D.bQq=new A.a7(C.a3,C.a7,C.x,C.a0F,null,null)
D.aXz=new A.o(null,null,null,C.lU,null,D.bQq,C.n)
D.aZ_=new A.o(null,null,null,C.lU,null,E.G1,C.n)
D.aaA=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abJ=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.acw=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.adZ=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f5d=new A.x("Your team portal",null,C.dB,null,null,null,null,null,null,null,null,null)
D.fiV=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Iq,null,null,null,null,null,null,null,null,null)
D.cYD=x([D.f5d,C.ao,D.fiV],y.p)
D.bix=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYD,null)
D.fn0=new A.x("Create your organization",null,C.ho,null,null,null,null,null,null,null,null,null)
D.f9j=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Iq,null,null,null,null,null,null,null,null,null)
D.dc5=x([D.fn0,C.ao,D.f9j],y.p)
D.biG=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dc5,null)
D.fjt=new A.x("Team Member sign-in",null,C.ho,null,null,null,null,null,null,null,null,null)
D.fcZ=new A.x("Enter the access code and password from your organization.",null,G.Iq,null,null,null,null,null,null,null,null,null)
D.da5=x([D.fjt,C.ao,D.fcZ],y.p)
D.biQ=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.da5,null)
D.bot=new A.Q(16,10,16,28)
D.boB=new A.Q(16,14,16,4)
D.bpO=new A.Q(20,0,20,16)
D.bqj=new A.Q(20,8,20,16)
D.agB=new A.Q(24,22,24,20)
D.ZM=new A.a0(63394,"MaterialIcons",!1)
D.ajA=new A.a0(63515,"MaterialIcons",!1)
D.bBe=new A.a0(983813,"MaterialIcons",!1)
D.byw=new A.a0(62867,"MaterialIcons",!1)
D.bCe=new A.ae(D.byw,44,C.c,null,null,null)
D.bDj=new A.ae(C.pr,null,C.ad,null,null,null)
D.bEG=new A.ae(C.iO,18,null,null,null,null)
D.bGm=new A.ae(D.ZM,26,C.c,null,null,null)
D.bGS=new A.ae(C.Ba,null,null,null,null,null)
D.bHq=new A.ae(C.xZ,null,null,null,null,null)
D.bIy=new A.ae(W.MR,null,null,null,null,null)
D.bIS=new A.ae(C.hi,16,null,null,null,null)
D.bMh=new A.ae(C.qQ,16,null,null,null,null)
D.bCw=new A.ae(C.mW,null,null,null,null,null)
D.bN7=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bHY=new A.ae(C.Fi,null,null,null,null,null)
D.bNc=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCR=new A.ae(H.FP,null,null,null,null,null)
D.bNn=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.czY=x([C.f6,C.aZ,C.aE],y.O)
D.bSh=new A.a7(C.ax,C.aD,C.x,D.czY,null,null)
D.czs=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.P0=x([C.f6,C.aE],y.O)
D.Pf=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mk=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d57=x([C.p7,C.aE],y.O)
D.dWr={iceServers:0}
D.aEj={urls:0}
D.dfG=new A.bp(D.aEj,["stun:stun.l.google.com:19302"],y.m)
D.dfF=new A.bp(D.aEj,["stun:stun1.l.google.com:19302"],y.m)
D.cPs=x([D.dfG,D.dfF],A.ax("O<a4<n,n>>"))
D.df0=new A.bp(D.dWr,[D.cPs],A.ax("bp<n,@>"))
D.H4=new B.Mx(0,"lanDirect")
D.Qy=new B.Mx(1,"cloudStash")
D.dqt=new B.Mx(2,"inlineInstant")
D.Qz=new B.Mx(3,"webrtcLink")
D.yH=new B.Mx(4,"videoCloud")
D.fiU=new A.x("Receive file",null,C.nc,null,null,null,null,null,null,null,null,null)
D.cpB=x([E.ali,C.ab,D.fiU],y.p)
D.eBT=new A.co(C.aQ,C.ba,C.j,C.m,null,C.p,null,0,D.cpB,null)
D.e10=new A.C(C.cf,D.eBT,null)
D.eXv=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1i,null,null,null)
D.f5L=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eXv,null,C.L,null,null,null,null,null,null,null)
D.e0k=new A.C(C.AE,D.f5L,null)
D.b2d=new A.cq(C.A,null,null,D.e0k,null)
D.e6y=new A.cK(0,null,0,28,null,null,D.b2d,null)
D.e6Q=new B.a8b(0,"RTCDataChannelConnecting")
D.aJD=new B.a8b(1,"RTCDataChannelOpen")
D.aJE=new B.a8b(3,"RTCDataChannelClosed")
D.e6R=new B.Eq(0,"RTCIceConnectionStateNew")
D.e6S=new B.Eq(1,"RTCIceConnectionStateChecking")
D.e6T=new B.Eq(2,"RTCIceConnectionStateCompleted")
D.e6U=new B.Eq(3,"RTCIceConnectionStateConnected")
D.e6V=new B.Eq(4,"RTCIceConnectionStateCount")
D.e6W=new B.Eq(5,"RTCIceConnectionStateFailed")
D.e6X=new B.Eq(6,"RTCIceConnectionStateDisconnected")
D.aJF=new B.Eq(7,"RTCIceConnectionStateClosed")
D.aJG=new B.W5(0,"RTCIceGatheringStateNew")
D.e6Y=new B.W5(1,"RTCIceGatheringStateGathering")
D.a4D=new B.W5(2,"RTCIceGatheringStateComplete")
D.a4E=new B.Nx(0,"RTCPeerConnectionStateClosed")
D.aJH=new B.Nx(1,"RTCPeerConnectionStateFailed")
D.aJI=new B.Nx(2,"RTCPeerConnectionStateDisconnected")
D.aJJ=new B.Nx(3,"RTCPeerConnectionStateNew")
D.aJK=new B.Nx(4,"RTCPeerConnectionStateConnecting")
D.aJL=new B.Nx(5,"RTCPeerConnectionStateConnected")
D.e6Z=new B.Ny(0,"RTCSignalingStateStable")
D.e7_=new B.Ny(1,"RTCSignalingStateHaveLocalOffer")
D.e70=new B.Ny(2,"RTCSignalingStateHaveRemoteOffer")
D.e71=new B.Ny(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e72=new B.Ny(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJM=new B.Ny(5,"RTCSignalingStateClosed")
D.eFR=new A.at(160,48)
D.b3m=new A.fh(2,null,null,null,null,C.aE,null,null,null,null)
D.eHk=new A.a6(16,16,D.b3m,null)
D.f8L=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eIL=new A.b1(D.f8L,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.ffU=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eIO=new A.b1(D.ffU,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fo1=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eIV=new A.b1(D.fo1,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8o=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eJk=new A.b1(D.f8o,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjC=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aMl=new A.b1(D.fjC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fkX=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eJN=new A.b1(D.fkX,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpo=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eK1=new A.b1(D.fpo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fnt=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eK6=new A.b1(D.fnt,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.foE=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eKS=new A.b1(D.foE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f75=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eLo=new A.b1(D.f75,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fhE=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eLJ=new A.b1(D.fhE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.faP=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eMe=new A.b1(D.faP,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpu=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMi=new A.b1(D.fpu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f7l=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eMo=new A.b1(D.f7l,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f64=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eMD=new A.b1(D.f64,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f35=new A.x("NGMY DOC SHARE",null,C.aNC,null,null,null,null,null,null,null,null,null)
D.f4l=new A.x("Show this to sender",null,C.kp,null,null,null,null,null,null,null,null,null)
D.f5k=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f9H=new A.x("Organization settings",null,C.ct,null,null,null,null,null,null,null,null,null)
D.fa1=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.faZ=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fbs=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fea=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fgS=new A.x("Send to their Doc Share",null,C.na,null,null,null,null,null,null,null,null,null)
D.fha=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fht=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fhY=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fi1=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fio=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.flo=new A.x("Share files & videos\nwith a scan.",null,C.aND,null,null,null,null,null,null,null,null,null)
D.flH=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fED=new B.XX(null)
D.a7G=new B.aaU(0,"docShare")
D.a7H=new B.aaU(1,"gate")
D.Tp=new B.aaU(2,"gateNoIndividual")})();(function staticFields(){$.aM_=null
$.f54=function(){var x=y.N
return A.V(x,x)}()
$.Fx=A.V(y.N,y.D)
$.aeS=A.V(y.N,A.ax("lq"))
$.PX=A.V(y.N,y.D)
$.f5C=A.V(y.N,A.ax("aaB"))
$.c5k=A.V(y.S,A.ax("bt4"))
$.h0a=1
$.hNh=null
$.hNg=null
$.hER=null
$.fQm=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i4Z","hhc",()=>new B.cgq())
x($,"i2U","fTZ",()=>C.a.t(A.bt(A.bt(A.bt(A.G6(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["Fzka3VkGMAKxeo+X43KGhmq9OBQ="]=a.current})($__dart_deferred_initializers__);