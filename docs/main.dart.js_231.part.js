((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cgo:function cgo(){},
hyb(d){var x=null,w=new B.b25(d,D.e6s,new A.p6(x,x,y.c6),new A.p6(x,x,y.B))
w.buJ(d)
return w},
b25:function b25(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
cgl:function cgl(d){this.a=d},
cgi:function cgi(d){this.a=d},
cgm:function cgm(d){this.a=d},
hyc(d,e){var x=y.N
x=new B.b26(d,e,A.V(x,y.e),A.V(x,y.z))
x.buK(d,e)
return x},
b26:function b26(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgp:function cgp(d){this.a=d},
cgq:function cgq(d){this.a=d},
cgr:function cgr(d){this.a=d},
cgs:function cgs(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d){this.a=d},
fPG(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.T(A.bd("IndexedDB not available"))
return C.y4.L8(x,"ngmy_doc_share_v1",new B.fcB(),1)},
hEH(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cp(d))
if(y.J.b(d))return new Uint8Array(A.cp(J.eU(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cp(A.BF(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Q8(d,e){return B.hTL(d,e)},
hTL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aLZ
x=7
return A.b(o==null?$.aLZ=B.fPG():o,$async$Q8)
case 7:s=g
r=new Uint8Array(A.cp(e))
q=J.mw(s,"blobs","readwrite")
C.iz.lZ(J.mu(q,"blobs"),r,d)
x=8
return A.b(J.pg(q),$async$Q8)
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
return A.i($async$Q8,w)},
Q7(d){return B.hTK(d)},
hTK(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aLZ
x=7
return A.b(o==null?$.aLZ=B.fPG():o,$async$Q7)
case 7:s=f
r=J.mw(s,"blobs","readonly")
x=8
return A.b(C.iz.z_(J.mu(r,"blobs"),d),$async$Q7)
case 8:q=f
x=9
return A.b(J.pg(r),$async$Q7)
case 9:o=B.hEH(q)
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
return A.i($async$Q7,w)},
afw(d){return B.hTJ(d)},
hTJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aLZ
x=7
return A.b(p==null?$.aLZ=B.fPG():p,$async$afw)
case 7:s=f
r=J.mw(s,"blobs","readwrite")
C.iz.F3(J.mu(r,"blobs"),d)
x=8
return A.b(J.pg(r),$async$afw)
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
return A.i($async$afw,w)},
fcB:function fcB(){},
hH0(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmo(w,v))}return u},
heh(d,e){var x,w={},v=A.aUe("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fyf(w,v,e)
C.vm.xS(v,"change",new B.fyh(w,v,!1))
C.vm.xS(v,"cancel",new B.fyg(w))
$.eP.m7()
v.click()
A.bN(C.aeJ,new B.fye(w),y.H)},
fyf:function fyf(d,e,f){this.a=d
this.b=e
this.c=f},
fyh:function fyh(d,e,f){this.a=d
this.b=e
this.c=f},
fyg:function fyg(d){this.a=d},
fye:function fye(d){this.a=d},
Cq(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cq=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSH()?3:4
break
case 3:x=5
return A.b(B.h9t(e,d,s,!0,!1,f,g,h,!1,i),$async$Cq)
case 5:x=1
break
case 4:x=6
return A.b(B.PM(d,s,f,g,h,i),$async$Cq)
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
return A.b(B.HE(s,d),$async$Cq)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f82(s,d),$async$Cq)
case 14:x=12
return A.b(r.h9t(q,p,o,n,m,l,k,j,a1,i),$async$Cq)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).ci(A.em(new B.fyu(s,i,d,f,g,h),!1,null,y.H)),$async$Cq)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).ci(A.em(new B.fyv(s,i,d,f,g,h),!1,null,y.H)),$async$Cq)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cq,w)},
PM(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PM=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXT(e),$async$PM)
case 3:u=k
x=4
return A.b(B.any(d,e,!1),$async$PM)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HE(e,d),$async$PM)
case 7:if(k){v=D.a7B
x=1
break}x=8
return A.b(B.TK(e),$async$PM)
case 8:v=t?D.Tj:D.a7C
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXR(d,e)){v=D.a7B
x=1
break}x=11
return A.b(B.TK(e),$async$PM)
case 11:v=t?D.Tj:D.a7C
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fKU(d,e)){v=D.a7B
x=1
break}x=14
return A.b(B.TK(e),$async$PM)
case 14:v=D.Tj
x=1
break
case 13:v=t?D.Tj:D.a7C
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PM,w)},
f82(d,e){var x=0,w=A.j(y.y),v
var $async$f82=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXR(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXT(d),$async$f82)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f82,w)},
h9t(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).ci(A.em(new B.fdW(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h4E(d,e,f,g,h,i,j){return new B.XX(e,j,d,g,h,i,f,null)},
ffS(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$ffS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bZ(C.K,null,new B.ffV(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$ffS)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffS,w)},
fgm(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fgm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bZ(C.K,null,new B.fgo(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fgm)
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
return A.i($async$fgm,w)},
fPP(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bo(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fqQ(d,e){var x=0,w=A.j(y.H),v
var $async$fqQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TK(e),$async$fqQ)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eH()
case 1:return A.h(v,w)}})
return A.i($async$fqQ,w)},
fyu:function fyu(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fyv:function fyv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aaS:function aaS(d,e){this.a=d
this.b=e},
fdW:function fdW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XX:function XX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axA:function axA(){this.c=this.a=this.d=null},
d_8:function d_8(d,e){this.a=d
this.b=e},
d_5:function d_5(d){this.a=d},
d_7:function d_7(d){this.a=d},
d_6:function d_6(d){this.a=d},
d_a:function d_a(){},
d_9:function d_9(d){this.a=d},
abk:function abk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aA9:function aA9(d,e){this.a=d
this.b=e},
aDl:function aDl(d,e,f){this.a=d
this.b=e
this.c=f},
ffV:function ffV(d,e,f){this.a=d
this.b=e
this.c=f},
ffT:function ffT(d){this.a=d},
ffU:function ffU(d,e,f){this.a=d
this.b=e
this.c=f},
fgo:function fgo(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fgn:function fgn(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4V(d,e,f,g,h){return B.ht6(d,e,f,g,h)},
ht6(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c4V=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iH(r.dt(d,new B.c4W(s,e,h,g,f,q),y.g),y.l),$async$c4V)
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
return A.i($async$c4V,w)},
aXO(d,e,f,g,h){return B.ht7(d,e,f,g,h)},
ht7(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXO=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asQ("GET",d)
o=A.fHr()
if(o==null)o=new A.KV(A.a([],y.W))
x=7
return A.b(o.eR(0,s).cM(0,C.Et),$async$aXO)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BI(),$async$aXO)
case 8:q=j
if(J.ac(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B2(q,h,o,e,f,"Received via QR")
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
return A.i($async$aXO,w)},
aXN(d){return B.ht4(d)},
ht4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uY(d,null).cM(0,C.ny),$async$aXN)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iv(A.iu(p.e)).c7(0,p.w),null)
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
return A.i($async$aXN,w)},
c4U(d){return B.ht5(d)},
ht5(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c4U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uY(d,null).cM(0,C.pm),$async$c4U)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iv(A.iu(q.e)).c7(0,q.w)
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
return A.i($async$c4U,w)},
c4W:function c4W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
je:function je(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HC(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
htc(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HC(C.a.b_(u,v.length))}return null},
htd(d){var x=B.HC(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
ht8(){var x,w=$.pd(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fT(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a5E(d){return B.ht9(d)},
ht9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bG),$async$a5E)
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
return A.i($async$a5E,w)},
a5F(d,e){return B.hta(d,e)},
hta(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5F=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hz(d,e,!1,!1,C.cF,null),$async$a5F)
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
return A.i($async$a5F,w)},
B1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$B1)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HC(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5G(r),$async$B1)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5E("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B1)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HC(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B1)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.ht8()
x=14
return A.b(B.a5G(m),$async$B1)
case 14:if(f!=null){x=12
break}l=new A.R(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5F("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B1)
case 15:k=f
x=16
return A.b(B.a5F("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B1)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B1)
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
return A.i($async$B1,w)},
a5G(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HC(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5E("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5G)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5G,w)},
a5H(d,e,f,g){return B.hte(d,e,f,g)},
hte(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5H=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gal(d)){v=!1
x=1
break}r=B.HC(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5G(r),$async$a5H)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.c51())>1048576||g.b8(d,new B.c52())){v=B.DT(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a5S("myCode",d,a0),$async$a5H)
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
v=B.DT(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXW(u,g.gM(d),a0),$async$a5H)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pd().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c53(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXP(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.R(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5H)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5H,w)},
DT(d,e,f,g,h){return B.htb(d,e,f,g,h)},
htb(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DT=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$DT)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cH(a6,0,new B.c4Y())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pd().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaj(a6),e=y.N,d=y.z
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
a1=B.HG(a9,q)
a0=new A.Jw(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DT)
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
a4=A.oF(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a99(a1.a,a4,"media",a1.d,a2).wv(m,n,new A.Da(!0,q.c)),$async$DT)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DT)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOr(r),$async$DT)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c4Z(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXP(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.R(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DT)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOr(r),$async$DT)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DT,w)},
aXP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5E(t),$async$aXP)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c4X(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5F(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXP,w)},
Ms(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ms=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5E("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ms)
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
return A.b(B.aXQ(k,a0),$async$Ms)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.R(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aXV(h),$async$Ms)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.TR(g,a0),$async$Ms)
case 10:f=a3
if(f!=null&&J.cw(f)){m+=J.ac(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.R(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("H.E")
e=A.B(new A.a2(r,new B.c5_(),q),n)
d=A.B(new A.a2(r,new B.c50(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.da(d,0,A.dJ(50,"count",y.S),A.S(d).c))
x=11
return A.b(B.a5F("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Ms)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ms,w)},
aXQ(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXQ=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.hXx(k,j)
C.d.v(s,i)
x=5
return A.b(B.Co(l,m,"Received via My Code",t,e,i),$async$aXQ)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOr(s),$async$aXQ)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXQ,w)},
c51:function c51(){},
c52:function c52(){},
c53:function c53(){},
c4Y:function c4Y(){},
c4Z:function c4Z(){},
c4X:function c4X(){},
c5_:function c5_(){},
c50:function c50(){},
fyr(d,e){var x=0,w=A.j(y.H)
var $async$fyr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).ci(A.em(new B.fys(e),!1,null,y.H)),$async$fyr)
case 2:return A.h(null,w)}})
return A.i($async$fyr,w)},
bB2(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bB2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).ci(A.em(new B.fyt(g,e,f),!1,null,y.y)),$async$bB2)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB2,w)},
fys:function fys(d){this.a=d},
fyt:function fyt(d,e,f){this.a=d
this.b=e
this.c=f},
TH:function TH(d,e){this.c=d
this.a=e},
aBw:function aBw(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dLb:function dLb(d,e){this.a=d
this.b=e},
TL:function TL(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBz:function aBz(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d){this.a=d},
dMm:function dMm(d){this.a=d},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMn:function dMn(d){this.a=d},
dMo:function dMo(d){this.a=d},
dMp:function dMp(d,e){this.a=d
this.b=e},
dMq:function dMq(d,e){this.a=d
this.b=e},
dMr:function dMr(d,e){this.a=d
this.b=e},
dMs:function dMs(d){this.a=d},
dMv:function dMv(){},
dMt:function dMt(d){this.a=d},
dMu:function dMu(d,e){this.a=d
this.b=e},
bgH:function bgH(){},
TI:function TI(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBx:function aBx(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dLc:function dLc(d){this.a=d},
dLd:function dLd(d){this.a=d},
fKV(d){var x=d.hI
if(x>=0)return C.o.O(x)
return 10},
htg(d){var x=d.kq
if(x>=0)return x
return 4.99},
htf(d){var x=d.l9,w=y.N
w=x.iN(x,new B.c55(),w,w)
return w},
h_J(d){var x=d.kr,w=y.N
w=x.iN(x,new B.c56(),w,w)
return w},
aXT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aXT)
case 7:s=f
r=A.t(p)
r=A.aT(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aXT,w)},
a5J(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a5J)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a5J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
TK(d){var x=0,w=A.j(y.H),v,u
var $async$TK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$TK)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TK)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TK,w)},
fKU(d,e){var x,w,v
if(B.htg(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.htf(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.c9(new A.R(Date.now(),0,!1))},
aXR(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h_J(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.c9(new A.R(Date.now(),0,!1))},
h_K(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h_J(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.c9(new A.R(Date.now(),0,!1))?v:new A.R(Date.now(),0,!1)
w.n(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ac())
d.kr=w},
anz(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$anz)
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
return A.i($async$anz,w)},
anA(d){var x=0,w=A.j(y.H),v,u,t
var $async$anA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anz(d),$async$anA)
case 3:u=f
x=5
return A.b(A.ay(),$async$anA)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anA,w)},
any(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$any=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fKV(d)
if(u<=0){v=!1
x=1
break}if(B.fKU(d,e)){v=!1
x=1
break}x=3
return A.b(B.anz(e),$async$any)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$any,w)},
aXS(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HE(e,d),$async$aXS)
case 3:if(g){v=-1
x=1
break}u=B.fKV(d)
if(u<=0){v=-1
x=1
break}if(B.fKU(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anz(e),$async$aXS)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXS,w)},
c58(d,e,f){var x=0,w=A.j(y.y),v
var $async$c58=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HE(e,d),$async$c58)
case 3:if(h){v=!1
x=1
break}v=B.any(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c58,w)},
c57(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c57=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.c58(d,u,i.gSH()),$async$c57)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c57,w)},
a5I(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5I=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gSH()){v=!0
x=1
break}if(B.aXR(d,u)){v=!0
x=1
break}x=5
return A.b(A.l7(u,C.QP),$async$a5I)
case 5:x=k?3:4
break
case 3:B.h_K(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5I)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kL(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QP,"Doc Share for Organizations"),$async$a5I)
case 7:if(!k){v=!1
x=1
break}B.h_K(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5I)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5I,w)},
c55:function c55(){},
c56:function c56(){},
fz3(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fz3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fz3)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f4L.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.f4L.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fz3,w)},
hZJ(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f4L.bn($.f4L,new B.fz5(d))},
fz5:function fz5(d){this.a=d},
f68(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f68=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mW(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jn,null,y.H),$async$f68)
case 3:C.zo.f5(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eP.m7()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f68,w)},
aen(d,e,f){var x=0,w=A.j(y.H),v
var $async$aen=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f5i.n(0,d,new B.aaz(A.bl(e,!0,v)))
x=3
return A.b(A.ay(),$async$aen)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aen)
case 2:return A.h(null,w)}})
return A.i($async$aen,w)},
aeh(d){return B.hIR(d)},
hIR(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f5i.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$aeh)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.f9O(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaz(r)
$.f5i.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeh,w)},
PC(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cp(e))
$.Fv.n(0,d,u)
x=3
return A.b(B.Q8(d,u),$async$PC)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PC,w)},
aMj(d){return B.hIP(d)},
hIP(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fv.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Q7(d),$async$aMj)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fv.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aMj)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aI(r)
x=!J.ck(q)?9:10
break
case 9:B.PC(d,q)
x=11
return A.b(J.hJ(s,d),$async$aMj)
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
return A.i($async$aMj,w)},
hF2(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cp(J.eU(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cp(A.BF(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
return A.fe(null,y.K)},
a0l(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fe7(r,t),!1,s)
A.fG(r,"error",new B.fe8(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i6(0,C.L3,new B.fe9())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0l,w)},
aMD(d,e,f){return B.hL4(d,e,f)},
hL4(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMD=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0l(i),$async$aMD)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ac(j)
x=11
return A.b(B.Q8(o,p),$async$aMD)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ac(j)===0){x=1
break}x=12
return A.b(B.aen(k,j,s),$async$aMD)
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
return A.i($async$aMD,w)},
aMC(d,e,f){return B.hL3(d,e,f)},
hL3(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMC=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMD(d,e,f),$async$aMC)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0l(f),$async$aMC)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fv.n(0,s,r)
$.PT.n(0,s,r)
x=11
return A.b(B.PC(s,r),$async$aMC)
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
return A.i($async$aMC,w)},
B2(d,e,f,g,h,i){return B.htp(d,e,f,g,h,i)},
htp(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B2=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.je(p,q,o,n,new A.R(Date.now(),0,!1).a5().ac(),a0,f,B.aXZ(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PC(s,d),$async$B2)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$B2)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcu().aI(d)),$async$B2)
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
return A.b(B.A5(e),$async$B2)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FG(e,j),$async$B2)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B2,w)},
TM(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TM=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A5(d),$async$TM)
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
k=B.h_M(n,null,l)
l=o.size
l.toString
j=new A.R(Date.now(),0,!1).a5().ac()
i=new B.je(m,n,k,l,j,"From folder",null,B.aXZ(),null)
$.aeQ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0l(o),$async$TM)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fv.n(0,h,g)
$.PT.n(0,h,g)
B.PC(h,g)
x=9
break
case 10:x=11
return A.b(B.aMC(d,m,o),$async$TM)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FG(d,t),$async$TM)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TM,w)},
fKZ(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fKZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h_M(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HF(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.B2(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKZ,w)},
HF(d,e,f,g,h,i){return B.hto(d,e,f,g,h,i)},
hto(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HF=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Jw(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HF)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.fZ(n,m)
o+=J.ac(m)
case 9:if(!(J.ac(n)>=1048576)){x=10
break}l=new Uint8Array(A.cp(J.QG(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kv(0,1048576,J.ac(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Q8(k,l),$async$HF)
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
return A.b(j.a9(0),$async$HF)
case 12:x=s.pop()
break
case 5:x=J.ac(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Q8(k,new Uint8Array(A.cp(n))),$async$HF)
case 15:J.cf(q,k)
case 14:if(J.ac(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aen(r,q,g),$async$HF)
case 16:f=new B.je(i,a1,a0,g,new A.R(Date.now(),0,!1).a5().ac(),a2,null,B.aXZ(),null)
x=17
return A.b(B.A5(d),$async$HF)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FG(d,e),$async$HF)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HF,w)},
TO(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TO=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeQ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0l(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeh(s),$async$TO)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Q7(u[o]),$async$TO)
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
v=A.BF(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.PT.h(0,s)
if(i==null)i=$.Fv.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r8(d,e),$async$TO)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.PT.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BF(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TO,w)},
h_M(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
r8(d,e){return B.htq(d,e)},
htq(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r8=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.PT.h(0,f)
if(e==null)e=$.Fv.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeQ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0l(s),$async$r8)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fv.n(0,f,r)
$.PT.n(0,f,r)
B.PC(f,r)
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
return A.b(B.aeh(f),$async$r8)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awo(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Q7(g[l]),$async$r8)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.amm()
if(!C.aG.gal(r)){$.Fv.n(0,f,r)
$.PT.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMj(f),$async$r8)
case 17:j=a3
if(j!=null&&!C.aG.gal(j)){$.PT.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TO(a0,a1,0,g),$async$r8)
case 20:i=a3
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.cp(i))
$.Fv.n(0,f,h)
$.PT.n(0,f,h)
B.PC(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$r8,w)},
htt(d){var x,w,v=$.aeQ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
htu(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
htr(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anG(d,e,f,g,h){return B.hts(d,e,f,g,h)},
hts(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anG=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aeQ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0l(s),$async$anG)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.r8(g,e),$async$anG)
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
return A.b(n.i0(d).wv(h,r,new A.Da(!0,e.c)),$async$anG)
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
return A.i($async$anG,w)},
h_O(d,e,f,g,h){var x,w,v,u,t=$.h_N
$.h_N=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c5j.n(0,t,new B.bt3(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awo(u)))
return t},
fL_(d){var x=0,w=A.j(y.H)
var $async$fL_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fL_,w)},
HG(d,e){var $async$HG=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aeQ.h(0,h)
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
return A.pP(B.TO(d,e,p,o<q?o:q),$async$HG,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pP(A.F4(n),$async$HG,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pP(B.aeh("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HG,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pP(B.Q7(h[l]),$async$HG,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pP(A.F4(k),$async$HG,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pP(B.r8(d,e),$async$HG,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pP(A.F4(A.BF(j,p,o<i?o:i)),$async$HG,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pP(null,0,w)
case 2:return A.pP(t.at(-1),1,w)}})
var x=0,w=A.h8m($async$HG,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.haa(w)},
aY0(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aY0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c5j.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3f(),$async$aY0)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY0,w)},
TN(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5j.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3f(),$async$TN)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aen(r.c,u,r.z),$async$TN)
case 4:t=new B.je(r.b,r.d,r.e,r.z,new A.R(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aXZ(),null)
u=r.a
x=5
return A.b(B.A5(u),$async$TN)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FG(u,s),$async$TN)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TN,w)},
a5P(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5j.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afw(u[s]),$async$a5P)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5P,w)},
c5l(d,e,f){var x=0,w=A.j(y.H)
var $async$c5l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by5(d,e,f),$async$c5l)
case 2:return A.h(null,w)}})
return A.i($async$c5l,w)},
c5m(d,e,f){var x=0,w=A.j(y.H)
var $async$c5m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.by6(d,e,f),$async$c5m)
case 2:return A.h(null,w)}})
return A.i($async$c5m,w)},
DU(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A5(d),$async$DU)
case 2:p=g
J.nd(p,new B.c5k(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fv.W(0,v)
$.aeQ.W(0,e)
x=3
return A.b(B.aeh(v),$async$DU)
case 3:u=g
$.f5i.W(0,v)
x=4
return A.b(A.ay(),$async$DU)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DU)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DU)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afw(s[q]),$async$DU)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afw(v),$async$DU)
case 13:x=14
return A.b(B.FG(d,p),$async$DU)
case 14:return A.h(null,w)}})
return A.i($async$DU,w)},
aY_(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aY_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r8(d,e),$async$aY_)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f68(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY_,w)},
A5(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$A5)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fea(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A5,w)},
FG(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$FG)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fi5(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FG)
case 3:return A.h(null,w)}})
return A.i($async$FG,w)},
by5(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A5(d),$async$by5)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fcP(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aBN(f))
x=4
return A.b(B.FG(d,u),$async$by5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by5,w)},
by6(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$by6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A5(d),$async$by6)
case 3:u=h
t=J.cE(u)
s=t.be(u,new B.fcQ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cCQ(f))
x=4
return A.b(B.FG(d,u),$async$by6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$by6,w)},
aaz:function aaz(d){this.a=d},
f9O:function f9O(){},
fe7:function fe7(d,e){this.a=d
this.b=e},
fe8:function fe8(d){this.a=d},
fe9:function fe9(){},
c5k:function c5k(d){this.a=d},
bt3:function bt3(d,e,f,g,h,i,j,k,l){var _=this
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
fea:function fea(){},
fi5:function fi5(){},
fcP:function fcP(d){this.a=d},
fcQ:function fcQ(d){this.a=d},
a5Q(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5p())?3:4
break
case 3:x=5
return A.b(B.aY1(d,e),$async$a5Q)
case 5:u=g
if(u!=null){t=u.c
B.Mu(d,u.b,e,t)}v=u
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
return A.b(B.aXX(s),$async$a5Q)
case 10:case 9:if(g){v=new A.P_(1,D.Qs,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TP(d,e),$async$a5Q)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.TU(!0,!0,d,e),$async$a5Q)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Mu(d,D.yD,e,t)
v=new A.P_(p,D.yD,t)
x=1
break}v=B.c5o(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Q,w)},
TP(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5S(null,d,e),$async$TP)
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
return A.b(B.aXW(p,d.length,e),$async$TP)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5m(e,C.d.gL(d).a,r.b),$async$TP)
case 7:case 6:q=r.a
x=8
return A.b(B.Mu(d,D.Qs,e,q),$async$TP)
case 8:v=new A.P_(d.length,D.Qs,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
TQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mc(D.mk)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5R(d,e),$async$TQ)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5h(s,d,e,t),$async$TQ)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXX(t),$async$TQ)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.r8(e,d),$async$TQ)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TP(A.a([d],y.r),e),$async$TQ)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TQ,w)},
TS(){var x=0,w=A.j(y.H)
var $async$TS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fKT(),$async$TS)
case 2:x=3
return A.b(B.aOI(),$async$TS)
case 3:return A.h(null,w)}})
return A.i($async$TS,w)},
a5R(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aXZ()
x=3
return A.b(B.c5l(e,d.a,u),$async$a5R)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5R,w)},
Mu(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Mu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Qs&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5R(p,f),$async$Mu)
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
return A.b(B.c5g(o,p,u,f),$async$Mu)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5h(o,p,f,t),$async$Mu)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5f(o,u,p,f),$async$Mu)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Mu,w)},
aY1(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aY1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5n(e,d),$async$aY1)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.TU(!1,!0,d,e),$async$aY1)
case 4:u=g
if(u!=null){t=u.b
v=new A.P_(u.a,D.yD,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY1,w)},
c5n(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TO(d,s,0,1),$async$c5n)
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
return A.i($async$c5n,w)},
c5o(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5S(null,d,e),$async$c5o)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h_L(u)
if(t.length>800){v=null
x=1
break}v=new A.P_(d.length,D.dq6,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5o,w)},
anH(d,e,f){return B.htx(d,e,f)},
htx(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anH=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mv(g,1)
x=B.fKY(g)?3:4
break
case 3:x=5
return A.b(B.c5i(g),$async$anH)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mv(g,13))
try{k=B.DV(d,a0,s)
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
return A.b(B.aXV(q),$async$anH)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TR(p,a0)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fKX(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TR(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HH(C.a.i(J.mv(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HH(C.a.i(J.mv(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HH(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.TR(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anH,w)},
HH(d,e,f){return B.htv(d,e,f)},
htv(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HH=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c8(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aXN(r),$async$HH)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXN(A.cv(s,0,null)),$async$HH)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c4V(o,r,a1,n,a2),$async$HH)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c4U(q),$async$HH)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TR(l,a2),$async$HH)
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
return A.i($async$HH,w)},
a5S(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.r8(f,r),$async$a5S)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcu().aI(q)],t,s))
x=3
break
case 4:u=A.V(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.R(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5S,w)},
TR(d,e){return B.htw(d,e)},
htw(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TR=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.B2(i,a3,d,k,l,o),$async$TR)
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
return A.i($async$TR,w)},
Mt:function Mt(d,e){this.a=d
this.b=e},
c5p:function c5p(){},
a_W(d){var x=A.M(d).ax.a===C.H,w=x?D.acr:D.aav,v=x?D.adU:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abE:C.aL
return new A.aEz([w,s,v,u,t,x?C.f6:C.bT])},
hf_(d,e){var x=e?C.w.j(0.72):C.aW
return A.c9(null,x,!0,null,new B.fD7(e),d,null,!0,!0,y.N)},
c54(d,e,f,g,h,i,j,k,l){return new B.TJ(e,l,d,f,k,j,g,h,i,null)},
XZ(d,e,f,g,h,i,j){return new B.bbo(g,h,j,e,i,d,f,null)},
fD7:function fD7(d){this.a=d},
XW:function XW(d,e){this.c=d
this.a=e},
axz:function axz(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_4:function d_4(d){this.a=d},
d_2:function d_2(d){this.a=d},
d_3:function d_3(d){this.a=d},
bsI:function bsI(){},
TJ:function TJ(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBy:function aBy(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dMi:function dMi(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLf:function dLf(d,e,f){this.a=d
this.b=e
this.c=f},
dLe:function dLe(d){this.a=d},
dLg:function dLg(d,e){this.a=d
this.b=e},
dLl:function dLl(d,e,f){this.a=d
this.b=e
this.c=f},
dLk:function dLk(d){this.a=d},
dM6:function dM6(d,e){this.a=d
this.b=e},
dM7:function dM7(d){this.a=d},
dLD:function dLD(d,e,f){this.a=d
this.b=e
this.c=f},
dLA:function dLA(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLj:function dLj(d){this.a=d},
dLL:function dLL(d){this.a=d},
dLK:function dLK(){},
dLp:function dLp(d){this.a=d},
dM3:function dM3(d,e){this.a=d
this.b=e},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM5:function dM5(d,e){this.a=d
this.b=e},
dLB:function dLB(d,e){this.a=d
this.b=e},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLT:function dLT(d){this.a=d},
dLS:function dLS(d){this.a=d},
dLU:function dLU(){},
dLV:function dLV(){},
dLW:function dLW(d,e){this.a=d
this.b=e},
dLY:function dLY(){},
dLZ:function dLZ(d){this.a=d},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLM:function dLM(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLO:function dLO(d){this.a=d},
dLP:function dLP(d){this.a=d},
dLQ:function dLQ(d){this.a=d},
dLm:function dLm(){},
dLn:function dLn(d){this.a=d},
dLo:function dLo(d,e){this.a=d
this.b=e},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLh:function dLh(d,e,f){this.a=d
this.b=e
this.c=f},
dLE:function dLE(d){this.a=d},
dLF:function dLF(d,e,f){this.a=d
this.b=e
this.c=f},
dLy:function dLy(d,e){this.a=d
this.b=e},
dLu:function dLu(d){this.a=d},
dLr:function dLr(d,e,f){this.a=d
this.b=e
this.c=f},
dLv:function dLv(d){this.a=d},
dLw:function dLw(d){this.a=d},
dLx:function dLx(){},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLs:function dLs(d){this.a=d},
dLq:function dLq(d,e,f){this.a=d
this.b=e
this.c=f},
dLt:function dLt(){},
dLJ:function dLJ(d){this.a=d},
dLI:function dLI(d,e){this.a=d
this.b=e},
dM2:function dM2(d,e){this.a=d
this.b=e},
dM_:function dM_(d){this.a=d},
dM0:function dM0(d,e){this.a=d
this.b=e},
dM1:function dM1(d){this.a=d},
dMf:function dMf(d){this.a=d},
dMd:function dMd(d){this.a=d},
dMe:function dMe(d){this.a=d},
dMg:function dMg(){},
dMh:function dMh(d,e){this.a=d
this.b=e},
dM9:function dM9(d,e){this.a=d
this.b=e},
dMa:function dMa(d,e,f){this.a=d
this.b=e
this.c=f},
dM8:function dM8(d,e,f){this.a=d
this.b=e
this.c=f},
dMb:function dMb(d,e){this.a=d
this.b=e},
dMc:function dMc(d,e){this.a=d
this.b=e},
axw:function axw(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbn:function bbn(d,e,f){this.c=d
this.d=e
this.a=f},
d_0:function d_0(){},
d_1:function d_1(){},
aaT:function aaT(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_o:function d_o(){},
d_n:function d_n(d){this.a=d},
XY:function XY(d,e,f){this.c=d
this.d=e
this.a=f},
axB:function axB(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_k:function d_k(d){this.a=d},
d_l:function d_l(d,e,f){this.a=d
this.b=e
this.c=f},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_i:function d_i(d,e){this.a=d
this.b=e},
d_g:function d_g(d){this.a=d},
d_e:function d_e(d){this.a=d},
d_b:function d_b(d){this.a=d},
d_h:function d_h(d){this.a=d},
d_d:function d_d(d){this.a=d},
d_j:function d_j(d){this.a=d},
d_f:function d_f(d){this.a=d},
d_c:function d_c(d){this.a=d},
XV:function XV(d,e,f){this.c=d
this.d=e
this.a=f},
axy:function axy(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cZY:function cZY(d){this.a=d},
cZX:function cZX(d,e){this.a=d
this.b=e},
cZZ:function cZZ(d){this.a=d},
cZW:function cZW(d,e){this.a=d
this.b=e},
d__:function d__(d){this.a=d},
cZV:function cZV(d,e){this.a=d
this.b=e},
cZR:function cZR(d){this.a=d},
cZS:function cZS(d){this.a=d},
cZT:function cZT(d,e){this.a=d
this.b=e},
cZU:function cZU(d){this.a=d},
OC:function OC(d,e,f){this.c=d
this.d=e
this.a=f},
axE:function axE(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_B:function d_B(d){this.a=d},
d_C:function d_C(d){this.a=d},
d_D:function d_D(d){this.a=d},
d_E:function d_E(d){this.a=d},
d_F:function d_F(d,e){this.a=d
this.b=e},
d_G:function d_G(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_H:function d_H(d){this.a=d},
Y_:function Y_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axC:function axC(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_x:function d_x(d,e){this.a=d
this.b=e},
d_y:function d_y(d,e){this.a=d
this.b=e},
d_p:function d_p(d,e,f){this.a=d
this.b=e
this.c=f},
d_q:function d_q(d){this.a=d},
d_r:function d_r(){},
d_w:function d_w(){},
d_s:function d_s(d,e){this.a=d
this.b=e},
d_t:function d_t(d,e){this.a=d
this.b=e},
d_u:function d_u(d,e){this.a=d
this.b=e},
d_v:function d_v(d,e){this.a=d
this.b=e},
aaR:function aaR(d,e){this.c=d
this.a=e},
cZQ:function cZQ(d){this.a=d},
XU:function XU(d){this.a=d},
axx:function axx(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Y0:function Y0(d,e){this.c=d
this.a=e},
axD:function axD(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_A:function d_A(d){this.a=d},
d_z:function d_z(d){this.a=d},
bbo:function bbo(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hty(){var x,w=$.pd(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fT(v)},
Mv(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Mv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$Mv)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$Mv)
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
return A.i($async$Mv,w)},
a5T(d){return B.htz(d)},
htz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a5T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5T)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hz("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a5T)
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
return A.i($async$a5T,w)},
TT(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$TT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mv(),$async$TT)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dV(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.R(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a5T(s),$async$TT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TT,w)},
TU(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$TU=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c0(),$async$TU)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.S(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c5r(),t),t.k("H.E"))}if(u.length===0){v=null
x=1
break}s=B.hty()
t=A.S(u).k("J<1,a4<n,aC>>")
r=A.B(new A.J(u,new B.c5s(s),t),t.k("aj.E"))
x=6
return A.b(B.Mv(),$async$TU)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a5T(q),$async$TU)
case 7:x=8
return A.b(B.a5U(r,u,g,s),$async$TU)
case 8:v=new A.bmQ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TU,w)},
anI(d){var x=0,w=A.j(y.y),v,u,t
var $async$anI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Mv(),$async$anI)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anI,w)},
c5t(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Mv(),$async$c5t)
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
return A.i($async$c5t,w)},
a5U(d,e,f,g){return B.htA(d,e,f,g)},
htA(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5U=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ac(q)===0){x=8
break}x=10
return A.b(B.anG("media",r,new B.c5q(s,e,g),f,q),$async$a5U)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.TT(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5U)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.TT(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a5U)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.TT(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5U)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5U,w)},
DV(d,e,f){return B.htB(d,e,f)},
htB(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DV=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$DV)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anI(b3),$async$DV)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kA,null,g),$async$DV)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anI(b3),$async$DV)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Mv(),$async$DV)
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
a2=a1.gaj(a4),a5=y.N,a6=b6==null
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
b0=A.oF(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a99(a8.a,b0,"media",a8.d,a9).C2(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXO(k,n,o,s,b7),$async$DV)
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
g=a1.gaj(a4),a1=y.s
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
a8=A.oF(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a99(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DV)
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
a0.n(0,"lastUsedAt",new A.R(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a5T(e),$async$DV)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DV,w)},
c5r:function c5r(){},
c5s:function c5s(d){this.a=d},
c5q:function c5q(d,e,f){this.a=d
this.b=e
this.c=f},
aOI(){var x=0,w=A.j(y.H),v,u
var $async$aOI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hEt=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aOI)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aOI)
case 3:u=$.fQ0
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aOI)
case 4:$.fQ0=$.hMS=$.hMT=null
return A.h(null,w)}})
return A.i($async$aOI,w)},
fhI(d){var x=0,w=A.j(y.H),v,u
var $async$fhI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4x){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fhJ(new A.bS(u,y.aY))
x=3
return A.b(u.i6(0,C.hF,new B.fhK()),$async$fhI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fhI,w)},
hMQ(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hti(x):x},
fQ4(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQ4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anK(u)
x=1
break}v=B.fKX(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQ4,w)},
fQ3(d){var x=0,w=A.j(y.T),v,u,t
var $async$fQ3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anL(u)
x=1
break}v=B.fKX(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fQ3,w)},
fyO(d){var x=0,w=A.j(y.T),v
var $async$fyO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anL(d),$async$fyO)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fyO,w)},
byX(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$byX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fQ3(d),$async$byX)
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
return A.i($async$byX,w)},
f6X(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f6X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TN(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B2(d.amm(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6X,w)},
FI(d,e,f){return B.hPd(d,e,f)},
hPd(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FI=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fQ4(a1),$async$FI)
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
return A.b($.hgQ().aC1(D.deD,null),$async$FI)
case 4:l=d.fQ0=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awo(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fic(f,k,new B.fid(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a66(0,new B.W3(r,"offer")),$async$FI)
case 5:d=l
x=7
return A.b(l.ajb(0),$async$FI)
case 7:x=6
return A.b(d.a5Z(0,a4),$async$FI)
case 6:x=8
return A.b(B.fhI(l),$async$FI)
case 8:x=9
return A.b(l.an5(),$async$FI)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hMQ(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anM(m,h),$async$FI)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h_L(h)
case 11:v=new A.bm7(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FI,w)},
fhJ:function fhJ(d){this.a=d},
fhK:function fhK(){},
fid:function fid(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fic:function fic(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fib:function fib(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hR3(d){switch(d){case"new":return D.e6t
case"checking":return D.e6u
case"connected":return D.e6w
case"completed":return D.e6v
case"failed":return D.e6y
case"disconnected":return D.e6z
case"closed":return D.aJz
case"count":return D.e6x}return D.aJz},
hR4(d){switch(d){case"new":return D.aJA
case"gathering":return D.e6A
case"complete":return D.a4x}return D.aJA},
i0d(d){switch(d){case"stable":return D.e6B
case"have-local-offer":return D.e6C
case"have-local-pranswer":return D.e6E
case"have-remote-offer":return D.e6D
case"have-remote-pranswer":return D.e6F
case"closed":return D.aJG}return D.aJG},
hZs(d){switch(d){case"new":return D.aJD
case"connecting":return D.aJE
case"connected":return D.aJF
case"closed":return D.a4y
case"disconnected":return D.aJC
case"failed":return D.aJB}return D.a4y},
a89:function a89(d,e){this.a=d
this.b=e},
Nu:function Nu(d,e){this.a=d
this.b=e},
W2:function W2(d,e){this.a=d
this.b=e},
Nt:function Nt(d,e){this.a=d
this.b=e},
En:function En(d,e){this.a=d
this.b=e},
cgn:function cgn(){},
fMG(d){var x=new B.Em()
x.a=d
x.b=!0
return x},
Em:function Em(){this.b=this.a=$},
a88:function a88(){},
as0:function as0(){},
W3:function W3(d,e){this.a=d
this.b=e},
fKT(){var x=0,w=A.j(y.H)
var $async$fKT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fKT,w)},
fKW(d,e,f){var x=0,w=A.j(y.T),v
var $async$fKW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mc(D.mk))){v=null
x=1
break}v=B.fz3(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fKW,w)},
h_L(d){var x,w=F.aa0.a3_(C.dH.aI(d),null)
if(w.length===0){x=C.dH.aI(d)
return C.cS.gcu().aI(x)}return C.cS.gcu().aI(w)},
hth(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c7(0,F.aa_.b9F(v,!1))
return x}catch(w){x=C.c4.c7(0,v)
return x}},
fKX(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hth(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c7(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
hti(d){var x,w,v,u,t,s=A.a([],y.s)
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
htj(){var x,w=$.pd(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fT(v)},
aXU(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aXU)
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
return A.i($async$aXU,w)},
c59(d,e){return B.htk(d,e)},
htk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c59=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hz("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c59)
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
return A.i($async$c59,w)},
aXX(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXU(d),$async$aXX)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXX,w)},
aXW(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.htj()
r=C.a.i(f)
t=C.dH.aI(s)
x=3
return A.b(B.c59(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcu().aI(t),"usesRemaining",999999,"createdAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aXW)
case 3:if(!h){v=null
x=1
break}v=new A.a__("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXW,w)},
aXV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ac(o)===0){v=null
x=1
break}x=3
return A.b(B.aXU(o),$async$aXV)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ac(u)===0){v=null
x=1
break}try{t=C.c4.c7(0,C.cB.aI(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aXV,w)},
c5a(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ac(q)===0){x=1
break}u=4
x=7
return A.b(X.bzU("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c5a)
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
return A.i($async$c5a,w)},
aXY(d){var x=0,w=A.j(y.h),v,u,t
var $async$aXY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HD(),$async$aXY)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXY,w)},
anD(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anD)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aXY(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anD,w)},
anB(d,e){var x=0,w=A.j(y.H)
var $async$anB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anB)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anB)
case 2:return A.h(null,w)}})
return A.i($async$anB,w)},
a5L(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5L)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HD(),$async$a5L)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5K(s),$async$a5L)
case 5:x=6
return A.b(B.anB(f,u),$async$a5L)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5L,w)},
a5M(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5M=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5M)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HD(),$async$a5M)
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
if(o!==t&&s.ah(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.anB(g,q),$async$a5M)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5K(u),$async$a5M)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5M,w)},
a5N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5N)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HD(),$async$a5N)
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
s=B.aXR(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a5N)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.R(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5N,w)},
c5b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ac(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c5b)
case 7:s=f
p=A.t(n)
r=A.aT(J.q(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$c5b,w)},
HE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5b(d),$async$HE)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aXY(t),$async$HE)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anC(d),$async$HE)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXR(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anC(d),$async$HE)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
anC(d){var x=0,w=A.j(y.H)
var $async$anC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anC)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anC)
case 2:return A.h(null,w)}})
return A.i($async$anC,w)},
aXZ(){var x,w=$.pd(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fT(v)},
a5O(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fKY(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5e(d){return B.htm(d)},
htm(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5O(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5e)
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
return A.i($async$c5e,w)},
anF(d,e){return B.htn(d,e)},
htn(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$anF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5O(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hz("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$anF)
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
return A.i($async$anF,w)},
c5g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5O(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.anF(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5g,w)},
c5f(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5O(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.anF(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5f)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5f,w)},
c5h(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5O(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.anF(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5h,w)},
c5i(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fKY(d)){v=null
x=1
break}x=3
return A.b(B.c5e(d),$async$c5i)
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
return A.i($async$c5i,w)},
a5V(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a5V=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5V)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a5V)
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
return A.i($async$a5V,w)},
anJ(d){return B.htC(d)},
htC(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$anJ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hz("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.R(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anJ)
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
return A.i($async$anJ,w)},
anK(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ac(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anK)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a5V(),$async$anK)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ac(q)===0){v=null
x=1
break}u=6
p=C.c4.c7(0,C.cB.aI(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dV(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.R(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anJ(s),$async$anK)
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
return A.i($async$anK,w)},
anM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c0(),$async$anM)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a5V(),$async$anM)
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
q.n(0,"answerAt",new A.R(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anJ(u),$async$anM)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anM,w)},
anL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anL)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a5V(),$async$anL)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ac(u)===0){v=null
x=1
break}try{r=C.c4.c7(0,C.cB.aI(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anL,w)},
amM(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.qk)){v=null
x=1
break}x=3
return A.b(p.m2(e),$async$amM)
case 3:r=g
u=4
x=7
return A.b(r.hl(C.fS),$async$amM)
case 7:q=g
o=q
o=o==null?null:J.fa(J.ws(o))
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
return A.i($async$amM,w)},
hXx(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fxm(d){return B.hXz(d)},
hXz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fxm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").K_(d,3600),$async$fxm)
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
return A.i($async$fxm,w)},
Co(d,e,f,g,h,i){var x=null
return B.hXw(d,e,f,g,h,i)},
hXw(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Co=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h_O(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fL_(r),$async$Co)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fxm(o),$async$Co)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5P(r),$async$Co)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aME)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.KV(A.a([],g))
x=15
return A.b(d.eR(0,A.asQ("GET",A.cv(n,0,null))).cM(0,C.Et),$async$Co)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5P(r),$async$Co)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Jw(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Co)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ac(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aY0(r,k),$async$Co)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Co)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.TN(r)
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
return A.b(B.a5P(r),$async$Co)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Co,w)},
aOr(d){return B.hXy(d)},
hXy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eT().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i0("media").W(0,d),$async$aOr)
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
return A.i($async$aOr,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[118]
O=c[38]
F=c[212]
I=c[106]
P=c[194]
E=c[187]
G=c[82]
Q=c[159]
R=c[107]
S=c[192]
K=c[216]
L=c[222]
B=a.updateHolder(c[21],B)
D=c[220]
T=c[158]
M=c[177]
U=c[62]
V=c[223]
W=c[68]
X=c[53]
N=c[81]
Y=c[221]
B.cgo.prototype={
aC1(d,e){return this.cEm(d,e)},
cEm(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aC1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.V(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.ka(A.cA(t)))
t=J.k(u)
v=B.hyc(C.cS.gcu().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aC1,w)}}
B.b25.prototype={
buJ(d){var x=this,w=x.w
w.onclose=A.hd(new B.cgj(x))
w.onopen=A.hd(new B.cgk(x))
w.onmessage=A.hd(new B.cgl(x))
w.onbufferedamountlow=A.hd(new B.cgm(x))},
gdk(d){return this.x},
afx(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Em()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fMG(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afx)
case 8:v=t.fMG(s.am_(f,0,null))
x=1
break
case 7:case 4:v=B.fMG(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afx,w)}}
B.b26.prototype={
buK(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hd(new B.cgp(x)))
w.addEventListener("icecandidate",A.hd(new B.cgq(x)))
w.addEventListener("iceconnectionstatechange",A.hd(new B.cgr(x)))
w.onicegatheringstatechange=A.hd(new B.cgs(x))
w.addEventListener("signalingstatechange",A.hd(new B.cgt(x)))
if(!$.fTB())w.addEventListener("connectionstatechange",A.hd(new B.cgu(x)))
w.addEventListener("negotiationneeded",A.hd(new B.cgv(x)))
w.addEventListener("track",A.hd(new B.cgw(x)))},
ajb(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ka(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajb)
case 3:t=f
v=new B.W3(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajb,w)},
a5Z(d,e){return this.bkh(0,e)},
bkh(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a5Z)
case 2:return A.h(null,w)}})
return A.i($async$a5Z,w)},
a66(d,e){return this.bkx(0,e)},
bkx(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a66=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a66)
case 2:return A.h(null,w)}})
return A.i($async$a66,w)},
an5(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$an5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.W3(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$an5,w)},
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
B.aaS.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.XX.prototype={
T(){return new B.axA()},
gd8(){return this.c}}
B.axA.prototype={
a_(){this.a1()
this.acg()},
acg(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXS(u.e,u.c),$async$acg)
case 2:t=e
if(v.c!=null)v.m(new B.d_8(v,t))
return A.h(null,w)}})
return A.i($async$acg,w)},
Pf(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.any(t.e,t.c,!1),$async$Pf)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eLl)
x=1
break}x=4
return A.b(B.a5J(u.a.c,"individual"),$async$Pf)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4x(A.em(new B.d_5(u),!1,null,y.H)),$async$Pf)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Pf,w)},
Ip(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ip=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.ffS(o),$async$Ip)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5N(o.e,r,s,q),$async$Ip)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIq)
x=1
break}x=5
return A.b(B.a5J(u.a.c,"member"),$async$Ip)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4x(A.em(new B.d_7(u),!1,null,y.H)),$async$Ip)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Ip,w)},
xp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5I(t.e,o,t.f,t.r,t.w,s),$async$xp)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5J(u.a.c,"org_owner"),$async$xp)
case 4:x=5
return A.b(B.anD(u.a.c),$async$xp)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fgm(o),$async$xp)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5L(s,t,o,q.c),$async$xp)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eIn)
x=1
break}x=10
return A.b(B.anD(u.a.c),$async$xp)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4x(A.em(new B.d_6(u),!1,null,y.H)),$async$xp)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xp,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.iZ:C.pd,q=B.fKV(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.fK,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f2I,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h3,t,t,t),C.az,D.fkZ,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bRX,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lu(new B.d_a(),t),C.P,w,C.e0,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abk(C.eR,C.awn,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc95(),t),C.ac],v))
p.push(new B.abk(C.oq,C.a0z,"Team Member","Sign in with your organization access code + password",u.gc9X(),t))
p.push(C.ac)
p.push(new B.abk(C.aj3,C.a1Z,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc9s(),t))
return A.cb(t,r,A.bp(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.ago,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.abk.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oQ,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.AW,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bY,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.af)}}
B.aA9.prototype={}
B.aDl.prototype={}
B.je.prototype={
mc(d){var x=this.b,w=C.a.oe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
ganK(){var x=this.d
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
b9a(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.je(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cCQ(d){return this.b9a(null,d)},
aBN(d){return this.b9a(d,null)}}
B.TH.prototype={
T(){return new B.aBw(new A.cs(null,y.A))},
gd8(){return this.c}}
B.aBw.prototype={
a_(){this.a1()
this.ach()},
ach(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ach=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B1(u.a.c),$async$ach)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dLb(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ach,w)},
aci(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aci=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fA(s)),$async$aci)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eMf)
case 1:return A.h(v,w)}})
return A.i($async$aci,w)},
Yr(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Yr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amM(s.d,4),$async$Yr)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rC(r,"ngmy_my_code_"+m+".png"),$async$Yr)
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
return A.i($async$Yr,w)},
ag_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ag_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8J("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ag_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ag_,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.iZ:C.pd,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a0Z,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.afZ,p,p,1/0)
v=A.m(20)
u=A.a([new A.ad(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mr,w,C.kn,new A.et(A.p(p,A.py(p,p,!1,B.htd(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bY,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kn,A.A(A.a([A.D(A.ez(N.Be,C.SN,q.gc28(),p),1),C.aw,A.D(A.dq(C.y3,C.a6P,q.gc29(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.ez(M.a_r,D.fh4,q.gcok(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.Lu,p,p,C.ah)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.TL.prototype={
T(){return new B.aBz(new A.ar(C.as,$.aw()),A.ke(!0,null,!0,!0,null,null,!1))}}
B.aBz.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HC(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Ys(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ys=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HC(u.d.a.a)
if(t==null){u.m(new B.dMk(u))
x=1
break}u.m(new B.dMl(u))
s=u.a
r=s.c
x=3
return A.b(B.a5H(s.d,new B.dMm(u),t,r),$async$Ys)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dMn(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$Ys,w)},
a0C(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0C=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dMo(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.r8(r.a.c,q),$async$a0C)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dMp(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ac(r.a.d)>1?"NGMY Doc Share ("+J.ac(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agf(p,m,l,j,k),$async$a0C)
case 8:o=e
if(r.c!=null)r.m(new B.dMq(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dMr(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dMs(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0C,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.acr:D.aav,h=j?D.adU:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abE:C.aL
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.M(d).ax.a===C.H
w=J.ac(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bG1,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fx,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a0Z,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgH()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bo(k,k,k,C.Lo,k,k,"",k,!0,new A.b4(4,A.m(18),new A.az(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.az(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dMt(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lP,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.KA(l.a.d,4)
m=A.B(new A.J(m,new B.dMu(x,new A.aEz(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ac(l.a.d)>4)m.push(new A.C(C.m8,A.d("+ "+(J.ac(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d6,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ev,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eGX)
else q.push(A.W(C.l7,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.df(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.ir,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bq6,k,k,C.ah),1)
u=l.f?k:l.gcol()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(M.a_r,D.fi_,u,A.dd(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.az(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc2a()
t=A.bk(C.aE,k,k,0,C.c,k,C.mQ,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cb(g,h,new A.an(C.W,k,C.aa,C.q,A.a([f,v,A.bp(!0,A.mN(new B.dMv(),A.v(A.a([e,new A.C(D.bpB,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.ri:D.fgt,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.WR,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgH.prototype={
oa(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h7(C.bt,v.length),C.aN)}}
B.TI.prototype={
T(){return new B.aBx()}}
B.aBx.prototype={
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
acj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dLc(r))
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
return A.b(B.a5M(p,m,n,o,C.a.i(l).length===0?null:l),$async$acj)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eLR)
s=[1]
x=4
break}p.I(y.q).f.R(D.eKu)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dLd(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acj,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.iZ:C.pd,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f9j,s,s,s,1,s,!0),p=A.p(s,D.bik,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.FV,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bMS,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bMN,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bN2,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc2b()
u=A.bk(C.aE,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cb(q,r,A.cd(A.v(A.a([p,C.d6,o,C.ac,x,C.ac,w,C.mr,A.bJ(t.r?C.ri:C.aPf,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.aaz.prototype={}
B.bt3.prototype={
a3f(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cp(r.amm()))
x=3
return A.b(B.Q8(t,s),$async$a3f)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3f,w)},
gd8(){return this.a}}
B.Mt.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.XW.prototype={
T(){return new B.axz(new A.ar(C.as,$.aw()),A.ke(!0,null,!0,!0,null,null,!1))}}
B.axz.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.d_4(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c2h(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a_W(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.iZ:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ad(0,C.G,C.aE.j(u?0.25:0.12),C.fK,32)],n),l=A.p(w,T.alJ,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ad(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.amw,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsI()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bo(w,w,w,C.EG,w,w,"",w,!0,new A.b4(4,A.m(16),new A.az(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aVK),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_2(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lP,w,w,w,w)
f=f[1]
f=A.D(A.dW(C.nc,new B.d_3(d),A.dd(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.az(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eD(w,C.K,new A.cU(Q.Jq,A.bX(new A.C(C.xc,A.v(A.a([l,C.aO,k,C.P,j,C.e0,i,C.e0,A.A(A.a([f,C.aw,A.D(A.bX(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e0D,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc2g(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.af),new A.o(w,w,w,h,n,L.Nf,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.Lw,C.cZ,w,w,w)}}
B.bsI.prototype={
oa(d,e){return e.aj6(e.a.toUpperCase())}}
B.TJ.prototype={
T(){return new B.aBy(A.a([],y.r),A.aX(y.N))},
gd8(){return this.c}}
B.aBy.prototype={
a_(){var x=this
x.a1()
x.tc()
x.w=A.dG(C.j2,new B.dMi(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.TS()
this.a2()},
a_u(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ms(u.a.c),$async$a_u)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A5(u.a.c),$async$a_u)
case 4:u.m(new s.dLG(u,e))
u.hR("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_u,w)},
tc(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ms(u.a.c),$async$tc)
case 3:t=e
x=4
return A.b(B.A5(u.a.c),$async$tc)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLH(u,s))
if(t>0)u.hR("Received "+A.t(t)+" file(s) via My Code.")
u.MJ(u.d)
B.B1(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tc,w)},
MJ(d){return this.byD(d)},
byD(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5R(r,u.a.c),$async$MJ)
case 8:p=f
if(u.c==null){x=1
break}new B.dLf(u,r,p).$0()
u.c.e6()
case 7:if(!(C.a.a0(r.c,"video/")||r.mc(D.mk))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TQ(r,u.a.c),$async$MJ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A5(u.a.c),$async$MJ)
case 12:u.m(new o.dLg(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MJ,w)},
N5(d){return this.bEL(d)},
bEL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$N5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5R(d,u.a.c),$async$N5)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dLl(u,d,t))
x=6
return A.b(A.fH(new A.fA(t)),$async$N5)
case 6:u.hR("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fA(r.toUpperCase())),$async$N5)
case 7:u.hR("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$N5,w)},
hR(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
td(d,e){return this.cyx(d,e)},
cyx(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$td=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dM6(r,e))
u=3
x=6
return A.b(d.$0(),$async$td)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dM7(r))
$.eP.m7()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$td,w)},
gaSD(){var x=this.a
return x.f||x.r||x.w},
Hn(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaSD()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c57(s,n,r,q,o,t),$async$Hn)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hR("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fqQ(o,u.a.c),$async$Hn)
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
return A.b(B.Cq(s,o,r,q,n,t),$async$Hn)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hn,w)},
Zy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Zy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anD(u.a.c),$async$Zy)
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
return A.b(A.a5(t,!1).ci(A.em(new B.dLD(u,r,q),!1,null,y.H)),$async$Zy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zy,w)},
a_F(d){return this.ci2(d)},
ci1(){return this.a_F(1)},
ci2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaSD()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anA(u.a.c),$async$a_F)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_F,w)},
aal(d,e,f){return this.bUU(d,e,f)},
bUU(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aal=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR(e)
x=1
break}x=3
return A.b(u.td(new B.dLA(u,d,null,e,f),"Uploading\u2026"),$async$aal)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aal,w)},
byM(){B.heh(!1,new B.dLj(this))
return},
cmY(){this.m(new B.dLL(this))},
awu(){var x=0,w=A.j(y.H),v=this
var $async$awu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.byM()
return A.h(null,w)}})
return A.i($async$awu,w)},
aah(){var x=0,w=A.j(y.H),v=this
var $async$aah=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.td(new B.dLp(v),"Importing\u2026"),$async$aah)
case 2:return A.h(null,w)}})
return A.i($async$aah,w)},
Rg(d){return this.cy0(d)},
cy0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dM3(u,d),!1,null,y.H)),$async$Rg)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mc(D.P9)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).ci(A.em(new B.dM4(u,d),!1,null,y.H)),$async$Rg)
case 8:x=1
break
case 7:x=u.bVB(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).ci(A.em(new B.dM5(u,d),!1,null,y.H)),$async$Rg)
case 11:x=1
break
case 10:u.hR("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rg,w)},
bVB(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oe(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cz7,C.a.b_(x,w+1).toLowerCase())},
adL(d){return this.c99(d)},
c99(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$adL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mc(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ci(A.em(new B.dLB(u,d),!1,null,y.H)),$async$adL)
case 5:x=1
break
case 4:u.m(new B.dLC(u,d))
case 1:return A.h(v,w)}})
return A.i($async$adL,w)},
QE(d){return this.cpN(d)},
cpN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hR("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oR(t,s.c,s.f),$async$QE)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.td(new B.dLX(u,d),"Preparing QR\u2026"),$async$QE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QE,w)},
agp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLY(),A.S(t).k("J<1,n>")).fG(0)}t=u.d
s=A.S(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLZ(q),s),s.k("H.E"))
if(r.length===0){u.hR("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QE(r),$async$agp)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agp,w)},
agi(d){return this.cpm(d)},
cpm(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_W(r)
r=u.c
r.toString
x=3
return A.b(A.bZ(C.K,null,new B.dLR(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agi)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rg(d)
break
case"qr":u.QE(A.a([d],y.r))
break
case"send_my_code":u.c9M(A.a([d],y.r))
break
case"save":u.afE(d)
break
case"delete":u.Ia(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agi,w)},
Wq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Wq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLm(),A.S(t).k("J<1,n>")).fG(0)}t=u.d
s=A.S(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLn(q),s),s.k("H.E"))
if(r.length===0){u.hR("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oR(t,s.c,s.f),$async$Wq)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.td(new B.dLo(u,r),"Preparing file\u2026"),$async$Wq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wq,w)},
aeR(d){return this.cgw(d)},
cgw(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aeR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hf_(d,!1),$async$aeR)
case 3:s=f
r=s==null
q=B.a5O(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hR("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aeR,w)},
adR(){var x=0,w=A.j(y.H),v=this,u
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fyr(u,v.a.c),$async$adR)
case 2:return A.h(null,w)}})
return A.i($async$adR,w)},
byL(){B.heh(!1,new B.dLi(this,null))
return},
Io(d,e){return this.c9N(d,e)},
aYt(d){return this.Io(null,d)},
c9M(d){return this.Io(d,null)},
c9N(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Io=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.S(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dLE(s),o),o.k("H.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wK.c3().alI(!0,C.YF,!1),$async$Io)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.td(new B.dLF(l,s,r),"Preparing\u2026"),$async$Io)
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
return A.b(B.bB2(p,l,e,s.a.c),$async$Io)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Io,w)},
HC(d){return this.bUH(d)},
bUH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.htc(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aYt(t),$async$HC)
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
return A.b(u.td(new B.dLy(u,d),"Receiving video\u2026"),$async$HC)
case 11:x=1
break
case 10:x=12
return A.b(u.td(new B.dLz(u,d),"Receiving\u2026"),$async$HC)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HC,w)},
Dw(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Dw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Ck()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aeR(t),$async$Dw)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HC(s),$async$Dw)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dLJ(u),!1,null,y.N)),$async$Dw)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tc(),$async$Dw)
case 10:x=1
break
case 9:x=11
return A.b(u.HC(C.a.i(r)),$async$Dw)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Dw,w)},
afE(d){return this.clx(d)},
clx(d){var x=0,w=A.j(y.H),v=this
var $async$afE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.td(new B.dLI(v,d),"Saving\u2026"),$async$afE)
case 2:return A.h(null,w)}})
return A.i($async$afE,w)},
Ia(d){return this.bH2(d)},
bH2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ia=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kV(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ia)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5a(t),$async$Ia)
case 6:case 5:s=d.a
x=7
return A.b(B.DU(u.a.c,s),$async$Ia)
case 7:u.r.W(0,s)
x=8
return A.b(u.tc(),$async$Ia)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ia,w)},
agv(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_W(r)
r=u.c
r.toString
x=3
return A.b(A.bZ(C.K,null,new B.dM2(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agv)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.adR()
break
case"import":u.aah()
break}case 1:return A.h(v,w)}})
return A.i($async$agv,w)},
c2e(d){var x=d.c
if(C.a.a0(x,"video/")||d.mc(D.mk))return C.pC
if(C.a.a0(x,"image/")||d.mc(D.P9))return C.tu
if(C.a.t(x,"pdf"))return E.MN
return D.ajw},
B(d){var x,w,v=this,u=null,t=B.a_W(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FN,u,u,u,new B.dMd(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bGx,u,u,u,v.e?u:v.gc9t(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcmX()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bAU:E.ajW,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_o,u,u,u,v.e?u:v.gc2f(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nJ,u,u,u,v.e?u:v.gaZB(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bId,u,u,u,v.e?u:new B.dMe(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lu(new B.dMf(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.M(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.md(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axw(C.ja,s,!0,t,w?u:v.gcpO(),u),1)
x.push(new A.C(D.boo,A.mN(new B.dMg(),A.A(A.a([s,C.aw,A.D(new B.axw(C.va,"Export",!1,t,w?u:v.gbKs(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.is,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbn(t,v.e?u:v.gaZB(),u)
else s=A.k_(!0,u,u,new B.dMh(v,t),s,u,D.bog,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.an(C.W,u,C.aa,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axw.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.uU,t,new A.b7(s,C.Y),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dd(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uU,t,new A.b7(s,C.Y),new A.az(v,1,C.r,-1),t,t,t,t)
return A.ez(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbn.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mN(new B.d_0(),new A.C(E.XK,A.v(A.a([A.mN(new B.d_1(),A.p(x,A.W(C.xx,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eu,C.it,x,new A.bm(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e0,A.dq(C.nJ,D.flh,this.d,A.bk(C.aE,x,x,x,C.c,x,C.XF,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.Al,x,new A.bm(0,1,w),s),x,x,x)}}
B.aaT.prototype={
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
if(!o||i.mc(D.mk))p=D.d4J
else{p=C.a.a0(p,"image/")||i.mc(D.P9)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aI.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.ganK()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mc(D.mk))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mc(D.mk)))l.push(A.fIL(C.aE,!1,j,j,j,!1,j,j,new B.d_n(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nH,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mN(new B.d_o(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.Xd,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.r,-1)),j,j,C.af),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.XY.prototype={
T(){return new B.axB()},
gd8(){return this.c}}
B.axB.prototype={
a_(){this.a1()
this.xg()},
q(){B.htr(this.e)
this.a2()},
xg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.r8(o.c,o.d),$async$xg)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.htu(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.htt(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_k(s))
x=1
break}s.m(new B.d_l(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d_m(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xg,w)},
a0B(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0B=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r8(t.c,t.d),$async$a0B)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eIX)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agf(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0B)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0B,w)},
bUA(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kf(u,C.A,v,new B.d_i(w,t),C.fQ,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fK(t,C.A,v,new B.d_j(w),C.fQ,C.dt,!0,v,!1,v,v)
else return C.bH
return A.u9(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_W(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bf,u,u,u,v.gb2k(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dr
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dq(C.Bf,D.f4X,v.gb2k(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bUA()}return A.cb(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.XV.prototype={
T(){return new B.axy(A.ah2(),C.bw,C.bw)},
gd8(){return this.c}}
B.axy.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a3(w).k("fs<1>")).i2(new B.cZY(v))
x.gcLF().i2(new B.cZZ(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a3(x).k("fs<1>"))}if(x==null)x=C.b0R
x.i2(new B.d__(v))
v.xg()},
xg(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xg=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r8(p.c,p.d),$async$xg)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cZR(s))
x=1
break}x=8
return A.b(s.d.Bw(0,new A.a23(r,s.a.d.c)),$async$xg)
case 8:if(s.c==null){x=1
break}s.m(new B.cZS(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.cZT(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xg,w)},
Yt(){var x=0,w=A.j(y.H),v=this,u
var $async$Yt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fY(0),$async$Yt)
case 5:x=3
break
case 4:x=6
return A.b(u.i5(0),$async$Yt)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Yt,w)},
aQz(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_W(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dr
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bBU,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Nf,C.n),o,88,o,o,o,o,o,88)
t=A.kR(C.aE,o,o,m,0,new B.cZU(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQz(p.w)+" / "+p.aQz(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eFt,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xI:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.kn,t,x,C.d6,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc2i(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.av(new A.C(C.ti,x,o),o,o,o),o,!1,!1,o,o)}}
B.OC.prototype={
T(){return new B.axE()},
gd8(){return this.c}}
B.axE.prototype={
a_(){this.a1()
this.OC()},
OC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fKW(o.c,o.d,new B.d_B(s)),$async$OC)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_C(s))
x=1
break}s.e=r
q=O.hQ2(r)
if(q==null){s.m(new B.d_D(s))
x=1
break}s.d=q
q.aM(0,s.gaYh())
x=8
return A.b(q.i1(0).cM(0,C.qA),$async$OC)
case 8:if(s.c==null){x=1
break}s.m(new B.d_E(s))
x=9
return A.b(q.pp(0),$async$OC)
case 9:q.rQ(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d_F(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OC,w)},
c7L(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_G(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cg(0,x.gaYh())
w=x.d
if(w!=null)w.q()
B.hZJ(x.e)
x.a2()},
acm(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY_(u.c,u.d),$async$acm)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acm,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_W(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.ox,t,t,t,u.gc2c(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dr
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agx(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.q,A.a([new A.zC(s,t),A.aE(t,A.CA(A.p(t,A.W(q?I.xI:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bY,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_I(u),t,t,t,t,t,t,!1,C.a9)],o),t),t)}else s=C.bH}}return A.cb(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Y_.prototype={
T(){return new B.axC(new A.cs(null,y.A))}}
B.axC.prototype={
gcyh(){var x,w,v=this.a
if(v.e!==D.Qt)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcxZ(){var x,w,v=this.a
if(v.e!==D.yD)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcyh()
if(x!=null){v.PE(x)
v.e=A.dG(R.Ex,new B.d_x(v,x))}w=v.gcxZ()
if(w!=null){v.PD(w)
v.f=A.dG(C.hf,new B.d_y(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
PD(d){return this.ceJ(d)},
ceJ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anI(d),$async$PD)
case 3:t=f
x=4
return A.b(B.c5t(d),$async$PD)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_p(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PD,w)},
PE(d){return this.ceK(d)},
ceK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fyO(d),$async$PE)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.byX(t),$async$PE)
case 4:if(u.c==null){x=1
break}u.m(new B.d_q(u))
u.c.I(y.q).f.R(D.aMf)
case 1:return A.h(v,w)}})
return A.i($async$PE,w)},
gbZv(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc2d(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0n(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0n=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Ck()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eM0)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).ci(A.em(new B.d_r(),!1,null,y.N)),$async$a0n)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.byX(s),$async$a0n)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aMf)
case 1:return A.h(v,w)}})
return A.i($async$a0n,w)},
a8g(d){return this.bEM(d)},
bEM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fA(C.d.aH(t,", "))),$async$a8g)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8g,w)},
ack(d){return this.bEw(d)},
bEw(d){var x=0,w=A.j(y.H),v=this
var $async$ack=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fA(v.a.c)),$async$ack)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eJp)
return A.h(null,w)}})
return A.i($async$ack,w)},
a0i(d){return this.clz(d)},
clz(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amM(s.d,4),$async$a0i)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rC(r,"ngmy_doc_share_qr.png"),$async$a0i)
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
return A.i($async$a0i,w)},
gaTH(){var x,w=this.a
if(w.e!==D.GY)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a8d(d){return this.bEF(d)},
bEF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaTH()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8d)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eL0)
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
acl(){var x=0,w=A.j(y.H),v=this,u
var $async$acl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.TS(),$async$acl)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acl,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_W(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.GY&&i!==D.Qt&&i!==D.yD
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.GY||t===D.Qt||t===D.yD?l:A.aH(l,l,l,l,C.kJ,l,l,l,m.gaWt(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.py(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbZv(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.GY){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc2d(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bLX,D.fdN,new B.d_s(m,d),l)],p))}if(m.a.e===D.GY&&m.gaTH()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bIx,D.faB,new B.d_t(m,d),l)],p))
if(m.a.e===D.yD){x=(m.w?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Du:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}if(m.a.e===D.Qt){x=(m.r?C.dv:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Du:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l),C.ac,A.dq(D.bEl,D.fgM,m.gclX(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.o8(i,A.cb(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(N.Be,C.SN,new B.d_u(m,d),l),1),C.aw,A.D(A.dq(C.y3,C.a6P,new B.d_v(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.z7,m.gaWt(),A.bk(C.aI,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_w(),y.C)}}
B.aaR.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.py(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ah)
return A.eh(A.a([A.bJ(C.z8,new B.cZQ(d),x)],u),x,x,C.mB,v,x,x,x,x,D.f3Y,x)}}
B.XU.prototype={
T(){return new B.axx(A.yK(C.wV,C.nj,C.tG))}}
B.axx.prototype={
q(){this.d.q()
this.a2()},
av5(d){var x,w,v,u,t
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
return A.cb(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fb4,x,x,x,1,x,!0),C.w,A.yJ(this.d,C.bQ,this.gav4()),x,!1,!1,x,x)}}
B.Y0.prototype={
T(){return new B.axD(A.yK(C.wV,C.nj,C.tG))},
gd8(){return this.c}}
B.axD.prototype={
bVD(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aed(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aed=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.R6("text/plain"),$async$aed)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eLV)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aed,w)},
a91(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a91=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hf_(p,!0),$async$a91)
case 3:t=e
p=t==null
s=B.a5O(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eIx)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a91,w)},
q(){this.d.q()
this.a2()},
av5(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bVD(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.akQ,v,v,v,w.gbK0(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_v,v,v,v,w.gcc8(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qK:P.Mx,v,v,v,v,v),v,v,v,new B.d_A(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fhz,v,v,v,1,v,!0)
u=A.yJ(w.d,C.bQ,w.gav4())
x=A.m(20)
return A.cb(t,C.w,new A.an(C.W,v,C.aa,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e6a],s),v),v,!1,!1,v,v)}}
B.bbo.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oh
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oh:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.XP,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.en,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.af)}}
B.a89.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.Nu.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.W2.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.Nt.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.En.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgn.prototype={}
B.Em.prototype={}
B.a88.prototype={}
B.as0.prototype={}
B.W3.prototype={}
var z=a.updateTypes(["ax<~>()","Q(je)","n(je)","TJ(Y)","~()","XX(Y)","G(G,je)","OC(Y)","~(lP)","co(Em)","ax<je?>(@)","TH(Y)","TL(Y)","C(je)","je(@)","a4<n,@>(je)","XW(Y)","TI(Y)","XY(Y)","XV(Y)","Y_(Y)","aaR(Y)","ak<je>()","Y0(Y)","aaT(Y,G)","XU(Y)","a4<n,aC>(je)","co(W2)","co(a88)","ax<co>(Em)"])
B.cgj.prototype={
$1(d){var x=this.a
x.x=D.aJy
x.y.J(0,D.aJy)},
$S:68}
B.cgk.prototype={
$1(d){var x=this.a
x.x=D.aJx
x.y.J(0,D.aJx)},
$S:68}
B.cgl.prototype={
$1(d){var x=this.a
x.afx(A.aNb(d.data)).bz(new B.cgi(x),y.b)},
$S:68}
B.cgi.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgm.prototype={
$1(d){},
$S:68}
B.cgp.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hyb(d.channel))},
$S:15}
B.cgq.prototype={
$1(d){},
$S:15}
B.cgr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hR3(w.iceConnectionState)
x.cx=w
if($.fTB())switch(w.a){case 0:x.cy=D.aJD
break
case 1:x.cy=D.aJE
break
case 3:x.cy=D.aJF
break
case 5:x.cy=D.aJB
break
case 6:x.cy=D.aJC
break
case 7:x.cy=D.a4y
break
default:break}},
$S:143}
B.cgs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hR4(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:143}
B.cgt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i0d(w.signalingState)},
$S:143}
B.cgu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hZs(w.connectionState)},
$S:143}
B.cgv.prototype={
$1(d){},
$S:143}
B.cgw.prototype={
$1(d){},
$S:15}
B.fcB.prototype={
$1(d){var x=y.F.a(new A.rt([],[]).pc(d.target.result,!1)),w=C.wW.t(x.objectStoreNames,"blobs")
if(!w)C.wS.JY(x,"blobs")},
$S:194}
B.fyf.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vm.f5(this.b)
$.eP.m7()
this.c.$1(d)},
$S:412}
B.fyh.prototype={
$1(d){return this.a.$1(B.hH0(this.b,this.c))},
$S:34}
B.fyg.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fye.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fyu.prototype={
$1(d){var x=this
return B.h4E(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fyv.prototype={
$1(d){var x=this
return B.h4E(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fdW.prototype={
$1(d){var x=this
return B.c54(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_5.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c54(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_7.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c54(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_6.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c54(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_a.prototype={
$4(d,e,f,g){var x=null
return A.jA(A.A(A.a([A.aH(x,x,x,x,D.bCZ,x,x,x,new B.d_9(d),x,x,x,x,x,x),A.D(A.E8(D.OV,!0,x,C.ZA,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.OV,x,g,C.agJ,0,e,f)},
$C:"$4",
$R:4,
$S:414}
B.d_9.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.ffV.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.biD,C.f,v,v,D.aXp,v,v,v,v,D.agy,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bH5,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.O(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.EL,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.al4,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.D(A.dW(C.dd,new B.ffT(d),v),1),C.aw,A.D(A.bJ(D.f9E,new B.ffU(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Xa,v,v,v,v),v)},
$S:60}
B.ffT.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.ffU.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eJE)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aA9(v,x))},
$S:0}
B.fgo.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.O(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bit,C.f,w,w,D.aYQ,w,w,w,w,D.agy,w,w,1/0),new A.C(C.EL,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fPP(u,"Organization name",C.Fb,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fPP(u,"Access code",C.mV,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fPP(u,"Member password",H.FI,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bJ(D.fhD,new B.fgn(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Xa,w,w,w,w),w)},
$S:60}
B.fgn.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eJJ)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDl(u,x,w))},
$S:0}
B.c4W.prototype={
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
return A.b(A.uY(p,null).cM(0,C.WQ),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cp(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B2(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c51.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c52.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c53.prototype={
$1(d){return d.b},
$S:z+2}
B.c4Y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c4X.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c5_.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c50.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fys.prototype={
$1(d){return new B.TH(this.a,null)},
$S:z+11}
B.fyt.prototype={
$1(d){return new B.TL(this.a,this.b,this.c,null)},
$S:z+12}
B.dLb.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dMk.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dMl.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dMm.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dMj(x,d))},
$S:2}
B.dMj.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMn.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMo.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dMp.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dMq.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMr.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dMs.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMv.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dMt.prototype={
$1(d){var x=this.a
return x.f?null:x.Ys()},
$S:2}
B.dMu.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mc(D.P9))s=C.tu
else s=C.a.a0(s,"video/")||d.mc(D.mk)?C.pC:D.ajw
x=this.b.a
w=y.p
return new A.C(C.kC,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.ganK(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dLc.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dLd.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c55.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.c56.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.fz5.prototype={
$2(d,e){return e===this.a},
$S:324}
B.f9O.prototype={
$1(d){return J.k(d)},
$S:17}
B.fe7.prototype={
$1(d){var x=this.b
B.hF2(C.EZ.ga4P(this.a)).bz(x.gcBd(x),y.H)},
$S:123}
B.fe8.prototype={
$1(d){return this.a.d2(0,null)},
$S:123}
B.fe9.prototype={
$0(){return null},
$S:11}
B.c5k.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fea.prototype={
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
u=J.k(u==null?new A.R(Date.now(),0,!1).a5().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.je(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fi5.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fcP.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fcQ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5p.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.fD7.prototype={
$1(d){return new B.XW(this.a,null)},
$S:z+16}
B.d_4.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fE()},
$S:8}
B.d_2.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_3.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMi.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_u()},
$S:14}
B.dLG.prototype={
$0(){var x=J.bC7(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLH.prototype={
$0(){var x=J.bC7(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLf.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLe(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBN(this.c)}},
$S:0}
B.dLe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLg.prototype={
$0(){var x=J.bC7(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLl.prototype={
$0(){var x=this.a,w=C.d.be(x.d,new B.dLk(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBN(this.c)}},
$S:0}
B.dLk.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dM6.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dM7.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLD.prototype={
$1(d){return new B.TI(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dLA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Hn(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TM(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tc(),$async$$0)
case 5:s=J.a8(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a_F(s.gM(t)),$async$$0)
case 8:case 7:r.hR(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLj.prototype={
$1(d){this.a.aal(d,"No files selected.","Added")},
$S:412}
B.dLL.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dLK(),A.S(x).k("J<1,n>")))},
$S:0}
B.dLK.prototype={
$1(d){return d.a},
$S:z+2}
B.dLp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wK.c3().cNC(C.YF,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jj(o,0,null)}u=2
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
return A.b(B.anH(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hR("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tc(),$async$$0)
case 9:o.hR("Imported "+J.ac(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dM3.prototype={
$1(d){return new B.OC(this.a.a.c,this.b,null)},
$S:z+7}
B.dM4.prototype={
$1(d){return new B.XY(this.a.a.c,this.b,null)},
$S:z+18}
B.dM5.prototype={
$1(d){return new B.XV(this.a.a.c,this.b,null)},
$S:z+19}
B.dLB.prototype={
$1(d){return new B.OC(this.a.a.c,this.b,null)},
$S:z+7}
B.dLC.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dLX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Hn(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5Q(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hR("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ci1(),$async$$0)
case 5:x=6
return A.b(p.tc(),$async$$0)
case 6:r=A.S(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dLT(p),r),new B.dLU(),r.k("J<aj.E,n>")).bY(0,new B.dLV())
q=A.B(r,r.$ti.k("H.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).ci(A.em(new B.dLW(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oQ(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.TS(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLT.prototype={
$1(d){var x=this.a,w=C.d.be(x.d,new B.dLS(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dLS.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLU.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dLV.prototype={
$1(d){return d.length!==0},
$S:3}
B.dLW.prototype={
$1(d){var x=this.a
return new B.Y_(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dLY.prototype={
$1(d){return d.a},
$S:z+2}
B.dLZ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLR.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kB,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.ganK(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mc(D.mk)?C.tw:C.ou
p=!x||p.mc(D.mk)?"Play video":"View"
return A.bX(A.bp(!0,new A.C(C.Av,A.v(A.a([q,o,t,C.az,B.XZ(!1,u,!1,w,p,new B.dLM(d),v),B.XZ(!1,u,!1,C.ja,"Share via QR",new B.dLN(d),"Letters/numbers QR code"),B.XZ(!1,u,!1,D.ZG,"Send to their Code",new B.dLO(d),"Enter someone else's personal code"),B.XZ(!1,u,!1,C.hx,"Download / save",new B.dLP(d),v),C.ao,B.XZ(!1,u,!0,C.e4,"Delete",new B.dLQ(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bP(new A.az(r,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,v,v,C.n),C.bd)},
$S:733}
B.dLM.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dLN.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dLO.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dLP.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dLQ.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dLm.prototype={
$1(d){return d.a},
$S:z+2}
B.dLn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLo.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5S(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FL(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oQ(s.c,s.f),$async$$0)
case 4:u.hR(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLi.prototype={
$1(d){var x=this.a
x.td(new B.dLh(x,d,this.b),"Preparing\u2026")},
$S:412}
B.dLh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hR("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TM(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hR("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bB2(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hR("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLE.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLF.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fKZ(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLy.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FI(new B.dLu(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hR("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dLv(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dLw(s))
case 5:x=8
return A.b(r.b.i6(0,C.Et,new B.dLx()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gal(t)){s.hR("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tc(),$async$$0)
case 9:s.hR("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLu.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLr(x,d,e))},
$S:137}
B.dLr.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLv.prototype={
$1(d){return new B.aaR(this.a.a,null)},
$S:z+21}
B.dLw.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dLx.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dLz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HC(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5G(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aYt(B.HC(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anH(new B.dLs(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fKY(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hR(q)
x=1
break}x=10
return A.b(s.tc(),$async$$0)
case 10:o=J.cE(r)
p=o.eI(r,new B.dLt()).gM(0)
s.hR(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLs.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLq(x,d,e))},
$S:137}
B.dLq.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLt.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.dLJ.prototype={
$1(d){return new B.Y0(this.a.a.c,null)},
$S:z+23}
B.dLI.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aY_(u.a.c,v.b),$async$$0)
case 2:t.hR(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM2.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bX(A.bp(!0,new A.C(C.Av,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kB,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.XZ(!0,w,!1,C.mV,"My Code",new B.dM_(d),"Your personal code & QR \u2014 others send docs to you"),B.XZ(!1,w,!1,D.ZG,"Send to their Code",new B.dM0(this.a,d),"Enter someone else's 5-digit code + letter"),B.XZ(!1,w,!1,S.xT,"Import backup",new B.dM1(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bP(new A.az(t,1,C.r,-1),C.Y,C.Y,C.Y),C.kt,x,x,C.n),C.bd)},
$S:733}
B.dM_.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dM0.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.byL()},
$S:0}
B.dM1.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dMf.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HL(D.OV,x,C.ZA,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.OV).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:522}
B.dMd.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMe.prototype={
$0(){this.a.agv()
return null},
$S:0}
B.dMg.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dMh.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aaT(e,w,v,this.b,x.e,x.c2e(w),new B.dM9(x,w),new B.dMa(x,v,w),new B.dMb(x,w),new B.dMc(x,w),null)},
$S:z+24}
B.dM9.prototype={
$0(){this.a.adL(this.b)
return null},
$S:0}
B.dMa.prototype={
$0(){var x=this.a
return x.m(new B.dM8(x,this.b,this.c))},
$S:0}
B.dM8.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dMb.prototype={
$0(){this.a.N5(this.b)
return null},
$S:0}
B.dMc.prototype={
$0(){this.a.agi(this.b)
return null},
$S:0}
B.d_0.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d_1.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:127}
B.d_o.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d_n.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_k.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_l.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_m.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_i.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fK(w,C.A,x,new B.d_g(this.a),C.fQ,C.dt,!0,x,!1,x,x)
$.aU.x1$.push(new B.d_h(this.a))
return C.bH},
$S:126}
B.d_g.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_e(this.a))
return C.bH},
$S:189}
B.d_e.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_b(x))},
$S:8}
B.d_b.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_h.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_d(x))},
$S:8}
B.d_d.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_j.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_f(this.a))
return C.bH},
$S:189}
B.d_f.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_c(x))},
$S:8}
B.d_c.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cZY.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZX(x,d))},
$S:1740}
B.cZX.prototype={
$0(){return this.a.f=this.b===C.u1},
$S:0}
B.cZZ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZW(x,d))},
$S:8}
B.cZW.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d__.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZV(x,d))},
$S:8}
B.cZV.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cZR.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cZS.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cZT.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cZU.prototype={
$1(d){return this.a.d.M6(0,A.dB(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_B.prototype={
$0(){var x=this.a.a
return B.r8(x.c,x.d)},
$S:1741}
B.d_C.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_D.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_E.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_F.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_G.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_I.prototype={
$0(){var x=this.a
x.m(new B.d_H(x))},
$S:0}
B.d_H.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fY(0)
else x.pp(0)},
$S:0}
B.d_x.prototype={
$1(d){return this.a.PE(this.b)},
$S:14}
B.d_y.prototype={
$1(d){return this.a.PD(this.b)},
$S:14}
B.d_p.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_q.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_r.prototype={
$1(d){return D.fDh},
$S:z+25}
B.d_w.prototype={
$2(d,e){if(d)B.TS()},
$S:116}
B.d_s.prototype={
$0(){return this.a.a8g(this.b)},
$S:0}
B.d_t.prototype={
$0(){return this.a.a8d(this.b)},
$S:0}
B.d_u.prototype={
$0(){return this.a.ack(this.b)},
$S:0}
B.d_v.prototype={
$0(){return this.a.a0i(this.b)},
$S:0}
B.cZQ.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d_A.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pt(),$async$$0)
case 2:u.m(new B.d_z(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_z.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mc(D.mk)},
$S:z+1}
B.c5s.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5q.prototype={
$2(d,e){return this.bgh(d,e)},
bgh(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.TT(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fhJ.prototype={
$1(d){if(d===D.a4x&&(this.a.a.a&30)===0)this.a.fK(0)},
$S:z+27}
B.fhK.prototype={
$0(){},
$S:11}
B.fid.prototype={
bhQ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f6X(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h_O(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bhQ(d,e)},
$S:685}
B.fic.prototype={
$1(d){var x=this
d.b=new B.fib(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fib.prototype={
$1(d){return this.bhP(d)},
bhP(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aY0(n,m),$async$$1)
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
return A.b(B.f6X(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d2(0,s.e)
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
return A.b(B.a5P(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d2(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axA.prototype,"gc95","Pf",0)
x(v,"gc9X","Ip",0)
x(v,"gc9s","xp",0)
x(v=B.aBw.prototype,"gc28","aci",0)
x(v,"gc29","Yr",0)
x(v,"gcok","ag_",0)
x(v=B.aBz.prototype,"gc2a","Ys",0)
x(v,"gcol","a0C",0)
x(B.aBx.prototype,"gc2b","acj",0)
x(B.axz.prototype,"gc2g","c2h",4)
x(v=B.aBy.prototype,"gc9t","Zy",0)
x(v,"gcmX","cmY",4)
x(v,"gaZB","awu",0)
x(v,"gcpO","agp",0)
x(v,"gbKs","Wq",0)
x(v,"gc2f","Dw",0)
x(B.axB.prototype,"gb2k","a0B",0)
x(B.axy.prototype,"gc2i","Yt",0)
x(v=B.axE.prototype,"gaYh","c7L",4)
x(v,"gc2c","acm",0)
x(v=B.axC.prototype,"gclX","a0n",0)
x(v,"gaWt","acl",0)
w(B.axx.prototype,"gav4","av5",8)
x(v=B.axD.prototype,"gcc8","aed",0)
x(v,"gbK0","a91",0)
w(v,"gav4","av5",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgn,B.a88,B.as0,B.aA9,B.aDl,B.je,B.aaz,B.bt3,B.Em,B.W3])
w(B.cgo,B.cgn)
w(B.b25,B.a88)
x(A.i7,[B.cgj,B.cgk,B.cgl,B.cgi,B.cgm,B.cgp,B.cgq,B.cgr,B.cgs,B.cgt,B.cgu,B.cgv,B.cgw,B.fcB,B.fyf,B.fyh,B.fyg,B.fyu,B.fyv,B.fdW,B.d_5,B.d_7,B.d_6,B.d_a,B.ffV,B.fgo,B.c4W,B.c52,B.c53,B.c4Z,B.c4X,B.c5_,B.c50,B.fys,B.fyt,B.dMm,B.dMv,B.dMt,B.dMu,B.f9O,B.fe7,B.fe8,B.c5k,B.fea,B.fi5,B.fcP,B.fcQ,B.c5p,B.fD7,B.d_4,B.d_2,B.dMi,B.dLe,B.dLk,B.dLD,B.dLj,B.dLK,B.dM3,B.dM4,B.dM5,B.dLB,B.dLT,B.dLS,B.dLU,B.dLV,B.dLW,B.dLY,B.dLZ,B.dLR,B.dLm,B.dLn,B.dLi,B.dLE,B.dLv,B.dLt,B.dLJ,B.dM2,B.dMf,B.dMg,B.d_0,B.d_1,B.d_o,B.d_n,B.d_i,B.d_g,B.d_e,B.d_h,B.d_j,B.d_f,B.cZY,B.cZZ,B.d__,B.cZU,B.d_x,B.d_y,B.d_r,B.c5r,B.c5s,B.fhJ,B.fic,B.fib])
w(B.b26,B.as0)
x(A.jr,[B.fye,B.d_8,B.d_9,B.ffT,B.ffU,B.fgn,B.dLb,B.dMk,B.dMl,B.dMj,B.dMn,B.dMo,B.dMp,B.dMq,B.dMr,B.dMs,B.dLc,B.dLd,B.fe9,B.d_3,B.dLG,B.dLH,B.dLf,B.dLg,B.dLl,B.dM6,B.dM7,B.dLA,B.dLL,B.dLp,B.dLC,B.dLX,B.dLM,B.dLN,B.dLO,B.dLP,B.dLQ,B.dLo,B.dLh,B.dLF,B.dLy,B.dLr,B.dLw,B.dLx,B.dLz,B.dLq,B.dLI,B.dM_,B.dM0,B.dM1,B.dMd,B.dMe,B.dM9,B.dMa,B.dM8,B.dMb,B.dMc,B.d_k,B.d_l,B.d_m,B.d_b,B.d_d,B.d_c,B.cZX,B.cZW,B.cZV,B.cZR,B.cZS,B.cZT,B.d_B,B.d_C,B.d_D,B.d_E,B.d_F,B.d_G,B.d_I,B.d_H,B.d_p,B.d_q,B.d_s,B.d_t,B.d_u,B.d_v,B.cZQ,B.d_A,B.d_z,B.fhK])
x(A.mr,[B.aaS,B.Mt,B.a89,B.Nu,B.W2,B.Nt,B.En])
x(A.ag,[B.XX,B.TH,B.TL,B.TI,B.XW,B.TJ,B.XY,B.XV,B.OC,B.Y_,B.XU,B.Y0])
x(A.ah,[B.axA,B.aBw,B.aBz,B.aBx,B.axz,B.aBy,B.axB,B.axy,B.axE,B.axC,B.axx,B.axD])
x(A.au,[B.abk,B.axw,B.bbn,B.aaT,B.aaR,B.bbo])
x(A.kE,[B.c51,B.c4Y,B.c55,B.c56,B.fz5,B.dLu,B.dLs,B.dMh,B.d_w,B.c5q,B.fid])
x(A.iN,[B.bgH,B.bsI])})()
A.kl(b.typeUniverse,JSON.parse('{"b25":{"a88":[]},"b26":{"as0":[]},"XX":{"ag":[],"r":[]},"axA":{"ah":["XX"]},"abk":{"au":[],"r":[]},"TH":{"ag":[],"r":[]},"TL":{"ag":[],"r":[]},"aBw":{"ah":["TH"]},"aBz":{"ah":["TL"]},"bgH":{"iN":[]},"TI":{"ag":[],"r":[]},"aBx":{"ah":["TI"]},"XW":{"ag":[],"r":[]},"TJ":{"ag":[],"r":[]},"aaT":{"au":[],"r":[]},"XY":{"ag":[],"r":[]},"XV":{"ag":[],"r":[]},"OC":{"ag":[],"r":[]},"Y_":{"ag":[],"r":[]},"aaR":{"au":[],"r":[]},"XU":{"ag":[],"r":[]},"Y0":{"ag":[],"r":[]},"axz":{"ah":["XW"]},"bsI":{"iN":[]},"aBy":{"ah":["TJ"]},"axw":{"au":[],"r":[]},"bbn":{"au":[],"r":[]},"axB":{"ah":["XY"]},"axy":{"ah":["XV"]},"axE":{"ah":["OC"]},"axC":{"ah":["Y_"]},"axx":{"ah":["XU"]},"axD":{"ah":["Y0"]},"bbo":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tS"),k:x("KZ()"),m:x("br<n,n>"),F:x("qK"),g:x("ax<je?>"),x:x("ax<~>"),V:x("P<ad>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a4<n,Q>>"),t:x("P<a4<n,@>>"),r:x("P<je>"),w:x("P<+file,name(lp,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iN>"),a:x("P<dC>"),p:x("P<r>"),Z:x("P<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ak<je>"),j:x("ak<@>"),I:x("ak<G>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iI"),e:x("i45"),af:x("DC"),U:x("je"),b:x("co"),C:x("aC"),aK:x("vJ"),ab:x("Em"),br:x("as0"),v:x("W3"),N:x("n"),X:x("bm<N>"),Q:x("lA"),D:x("dC"),aw:x("cz<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bS<ak<je>>"),aW:x("bS<dC?>"),aY:x("bS<~>"),cx:x("aaS"),b1:x("bg<ak<je>>"),cf:x("bg<dC?>"),d4:x("bg<~>"),c4:x("aA9"),bG:x("aDl"),q:x("mP"),B:x("p6<Em>"),c6:x("p6<a89>"),y:x("Q"),i:x("N"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ak<je>?"),aL:x("ak<@>?"),h:x("a4<n,@>?"),l:x("je?"),R:x("aC?"),c:x("W3?"),d:x("+answerQr,transfer(n,ax<ak<je>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,Mt,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dC?"),cm:x("aaz?"),bk:x("aA9?"),ag:x("aDl?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aVK=new A.az(C.aE,2,C.r,-1)
D.bQ5=new A.a7(C.a3,C.a7,C.x,C.a0z,null,null)
D.aXp=new A.o(null,null,null,C.lU,null,D.bQ5,C.n)
D.aYQ=new A.o(null,null,null,C.lU,null,E.FV,C.n)
D.aav=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abE=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.acr=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.adU=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f4Q=new A.x("Your team portal",null,C.dF,null,null,null,null,null,null,null,null,null)
D.fiv=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Ik,null,null,null,null,null,null,null,null,null)
D.cYe=x([D.f4Q,C.ao,D.fiv],y.p)
D.bik=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYe,null)
D.fmB=new A.x("Create your organization",null,C.ho,null,null,null,null,null,null,null,null,null)
D.f8W=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Ik,null,null,null,null,null,null,null,null,null)
D.dbI=x([D.fmB,C.ao,D.f8W],y.p)
D.bit=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dbI,null)
D.fj3=new A.x("Team Member sign-in",null,C.ho,null,null,null,null,null,null,null,null,null)
D.fcB=new A.x("Enter the access code and password from your organization.",null,G.Ik,null,null,null,null,null,null,null,null,null)
D.d9H=x([D.fj3,C.ao,D.fcB],y.p)
D.biD=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d9H,null)
D.bog=new A.O(16,10,16,28)
D.boo=new A.O(16,14,16,4)
D.bpB=new A.O(20,0,20,16)
D.bq6=new A.O(20,8,20,16)
D.agy=new A.O(24,22,24,20)
D.ZG=new A.a0(63394,"MaterialIcons",!1)
D.ajw=new A.a0(63515,"MaterialIcons",!1)
D.bAU=new A.a0(983813,"MaterialIcons",!1)
D.bya=new A.a0(62867,"MaterialIcons",!1)
D.bBU=new A.ae(D.bya,44,C.c,null,null,null)
D.bCZ=new A.ae(C.pr,null,C.ad,null,null,null)
D.bEl=new A.ae(C.iO,18,null,null,null,null)
D.bG1=new A.ae(D.ZG,26,C.c,null,null,null)
D.bGx=new A.ae(C.B7,null,null,null,null,null)
D.bH5=new A.ae(C.xV,null,null,null,null,null)
D.bId=new A.ae(W.ML,null,null,null,null,null)
D.bIx=new A.ae(C.hi,16,null,null,null,null)
D.bLX=new A.ae(C.qO,16,null,null,null,null)
D.bCb=new A.ae(C.mV,null,null,null,null,null)
D.bMN=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCb,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bHD=new A.ae(C.Fb,null,null,null,null,null)
D.bMS=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bHD,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCw=new A.ae(H.FI,null,null,null,null,null)
D.bN2=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.czD=x([C.f6,C.aZ,C.aE],y.O)
D.bRX=new A.a7(C.ax,C.aC,C.x,D.czD,null,null)
D.cz7=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.OV=x([C.f6,C.aE],y.O)
D.P9=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mk=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d4J=x([C.p7,C.aE],y.O)
D.dW3={iceServers:0}
D.aEd={urls:0}
D.dfi=new A.br(D.aEd,["stun:stun.l.google.com:19302"],y.m)
D.dfh=new A.br(D.aEd,["stun:stun1.l.google.com:19302"],y.m)
D.cP5=x([D.dfi,D.dfh],A.aA("P<a4<n,n>>"))
D.deD=new A.br(D.dW3,[D.cP5],A.aA("br<n,@>"))
D.GY=new B.Mt(0,"lanDirect")
D.Qs=new B.Mt(1,"cloudStash")
D.dq6=new B.Mt(2,"inlineInstant")
D.Qt=new B.Mt(3,"webrtcLink")
D.yD=new B.Mt(4,"videoCloud")
D.fiu=new A.x("Receive file",null,C.nb,null,null,null,null,null,null,null,null,null)
D.cpg=x([E.ald,C.ab,D.fiu],y.p)
D.eBv=new A.cn(C.aQ,C.b9,C.j,C.m,null,C.p,null,0,D.cpg,null)
D.e0D=new A.C(C.cf,D.eBv,null)
D.eX7=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1c,null,null,null)
D.f5n=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eX7,null,C.L,null,null,null,null,null,null,null)
D.e_X=new A.C(C.AB,D.f5n,null)
D.b23=new A.cq(C.A,null,null,D.e_X,null)
D.e6a=new A.cK(0,null,0,28,null,null,D.b23,null)
D.e6s=new B.a89(0,"RTCDataChannelConnecting")
D.aJx=new B.a89(1,"RTCDataChannelOpen")
D.aJy=new B.a89(3,"RTCDataChannelClosed")
D.e6t=new B.En(0,"RTCIceConnectionStateNew")
D.e6u=new B.En(1,"RTCIceConnectionStateChecking")
D.e6v=new B.En(2,"RTCIceConnectionStateCompleted")
D.e6w=new B.En(3,"RTCIceConnectionStateConnected")
D.e6x=new B.En(4,"RTCIceConnectionStateCount")
D.e6y=new B.En(5,"RTCIceConnectionStateFailed")
D.e6z=new B.En(6,"RTCIceConnectionStateDisconnected")
D.aJz=new B.En(7,"RTCIceConnectionStateClosed")
D.aJA=new B.W2(0,"RTCIceGatheringStateNew")
D.e6A=new B.W2(1,"RTCIceGatheringStateGathering")
D.a4x=new B.W2(2,"RTCIceGatheringStateComplete")
D.a4y=new B.Nt(0,"RTCPeerConnectionStateClosed")
D.aJB=new B.Nt(1,"RTCPeerConnectionStateFailed")
D.aJC=new B.Nt(2,"RTCPeerConnectionStateDisconnected")
D.aJD=new B.Nt(3,"RTCPeerConnectionStateNew")
D.aJE=new B.Nt(4,"RTCPeerConnectionStateConnecting")
D.aJF=new B.Nt(5,"RTCPeerConnectionStateConnected")
D.e6B=new B.Nu(0,"RTCSignalingStateStable")
D.e6C=new B.Nu(1,"RTCSignalingStateHaveLocalOffer")
D.e6D=new B.Nu(2,"RTCSignalingStateHaveRemoteOffer")
D.e6E=new B.Nu(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e6F=new B.Nu(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJG=new B.Nu(5,"RTCSignalingStateClosed")
D.eFt=new A.at(160,48)
D.b3c=new A.fh(2,null,null,null,null,C.aE,null,null,null,null)
D.eGX=new A.a6(16,16,D.b3c,null)
D.f8n=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eIn=new A.b1(D.f8n,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.ffv=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eIq=new A.b1(D.ffv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fnC=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eIx=new A.b1(D.fnC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f80=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eIX=new A.b1(D.f80,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjc=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aMf=new A.b1(D.fjc,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fkx=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eJp=new A.b1(D.fkx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.foZ=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eJE=new A.b1(D.foZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fn3=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eJJ=new A.b1(D.fn3,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fod=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eKu=new A.b1(D.fod,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f6I=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eL0=new A.b1(D.f6I,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fhf=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eLl=new A.b1(D.fhf,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.far=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eLR=new A.b1(D.far,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fp4=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eLV=new A.b1(D.fp4,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f6Y=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eM0=new A.b1(D.f6Y,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f5H=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eMf=new A.b1(D.f5H,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f2I=new A.x("NGMY DOC SHARE",null,C.aNw,null,null,null,null,null,null,null,null,null)
D.f3Y=new A.x("Show this to sender",null,C.kp,null,null,null,null,null,null,null,null,null)
D.f4X=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f9j=new A.x("Organization settings",null,C.ct,null,null,null,null,null,null,null,null,null)
D.f9E=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.faB=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fb4=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fdN=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fgt=new A.x("Send to their Doc Share",null,C.n9,null,null,null,null,null,null,null,null,null)
D.fgM=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fh4=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fhz=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhD=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fi_=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fkZ=new A.x("Share files & videos\nwith a scan.",null,C.aNx,null,null,null,null,null,null,null,null,null)
D.flh=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fDh=new B.XU(null)
D.a7B=new B.aaS(0,"docShare")
D.a7C=new B.aaS(1,"gate")
D.Tj=new B.aaS(2,"gateNoIndividual")})();(function staticFields(){$.aLZ=null
$.f4L=function(){var x=y.N
return A.V(x,x)}()
$.Fv=A.V(y.N,y.D)
$.aeQ=A.V(y.N,A.aA("lp"))
$.PT=A.V(y.N,y.D)
$.f5i=A.V(y.N,A.aA("aaz"))
$.c5j=A.V(y.S,A.aA("bt3"))
$.h_N=1
$.hMT=null
$.hMS=null
$.hEt=null
$.fQ0=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i4A","hgQ",()=>new B.cgo())
x($,"i2v","fTB",()=>C.a.t(A.bt(A.bt(A.bt(A.G4(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["edcaaOQ+1je6gB3LDp2t5Ic+0y0="]=a.current})($__dart_deferred_initializers__);