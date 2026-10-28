((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cih:function cih(){},
hFt(d){var x=null,w=new B.b39(d,D.ec7,new A.ph(x,x,y.c6),new A.ph(x,x,y.B))
w.bwL(d)
return w},
b39:function b39(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cic:function cic(d){this.a=d},
cid:function cid(d){this.a=d},
cie:function cie(d){this.a=d},
cib:function cib(d){this.a=d},
cif:function cif(d){this.a=d},
hFu(d,e){var x=y.N
x=new B.b3a(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwM(d,e)
return x},
b3a:function b3a(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cii:function cii(d){this.a=d},
cij:function cij(d){this.a=d},
cik:function cik(d){this.a=d},
cil:function cil(d){this.a=d},
cim:function cim(d){this.a=d},
cin:function cin(d){this.a=d},
cio:function cio(d){this.a=d},
cip:function cip(d){this.a=d},
fWG(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yu.LB(x,"ngmy_doc_share_v1",new B.fiu(),1)},
hM2(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zR(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QI(d,e){return B.i0d(d,e)},
i0d(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QI=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMS
x=7
return A.b(o==null?$.aMS=B.fWG():o,$async$QI)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mF(s,"blobs","readwrite")
C.iD.mg(J.mD(q,"blobs"),r,d)
x=8
return A.b(J.pq(q),$async$QI)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$QI,w)},
QH(d){return B.i0c(d)},
i0c(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMS
x=7
return A.b(o==null?$.aMS=B.fWG():o,$async$QH)
case 7:s=f
r=J.mF(s,"blobs","readonly")
x=8
return A.b(C.iD.zm(J.mD(r,"blobs"),d),$async$QH)
case 8:q=f
x=9
return A.b(J.pq(r),$async$QH)
case 9:o=B.hM2(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$QH,w)},
agq(d){return B.i0b(d)},
i0b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMS
x=7
return A.b(p==null?$.aMS=B.fWG():p,$async$agq)
case 7:s=f
r=J.mF(s,"blobs","readwrite")
C.iD.Fw(J.mD(r,"blobs"),d)
x=8
return A.b(J.pq(r),$async$agq)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agq,w)},
fiu:function fiu(){},
hOq(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnH(w,v))}return u},
hlt(d,e){var x,w={},v=A.aVf("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fEU(w,v,e)
C.vM.yf(v,"change",new B.fEW(w,v,!1))
C.vM.yf(v,"cancel",new B.fEV(w))
$.eV.mn()
v.click()
A.bN(C.ag2,new B.fET(w),y.H)},
fEU:function fEU(d,e,f){this.a=d
this.b=e
this.c=f},
fEW:function fEW(d,e,f){this.a=d
this.b=e
this.c=f},
fEV:function fEV(d){this.a=d},
fET:function fET(d){this.a=d},
CI(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTb()?3:4
break
case 3:x=5
return A.b(B.hgC(e,d,s,!0,!1,f,g,h,!1,i),$async$CI)
case 5:x=1
break
case 4:x=6
return A.b(B.Qn(d,s,f,g,h,i),$async$CI)
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
return A.b(B.I5(s,d),$async$CI)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fdW(s,d),$async$CI)
case 14:x=12
return A.b(r.hgC(q,p,o,n,m,l,k,j,a1,i),$async$CI)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c8(A.e9(new B.fF8(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c8(A.e9(new B.fF9(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CI,w)},
Qn(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qn=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYT(e),$async$Qn)
case 3:u=k
x=4
return A.b(B.aoq(d,e,!1),$async$Qn)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.I5(e,d),$async$Qn)
case 7:if(k){v=D.a8y
x=1
break}x=8
return A.b(B.Ul(e),$async$Qn)
case 8:v=t?D.U9:D.a8z
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYR(d,e)){v=D.a8y
x=1
break}x=11
return A.b(B.Ul(e),$async$Qn)
case 11:v=t?D.U9:D.a8z
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fRQ(d,e)){v=D.a8y
x=1
break}x=14
return A.b(B.Ul(e),$async$Qn)
case 14:v=D.U9
x=1
break
case 13:v=t?D.U9:D.a8z
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
fdW(d,e){var x=0,w=A.j(y.y),v
var $async$fdW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYR(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYT(d),$async$fdW)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdW,w)},
hgC(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c8(A.e9(new B.fka(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hbL(d,e,f,g,h,i,j){return new B.Yz(e,j,d,g,h,i,f,null)},
fm6(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fm6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fm9(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fm6)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fm6,w)},
fmB(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fmB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bR(C.K,null,new B.fmD(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fmB)
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
return A.i($async$fmB,w)},
fWP(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fxu(d,e){var x=0,w=A.j(y.H),v
var $async$fxu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ul(e),$async$fxu)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eK()
case 1:return A.h(v,w)}})
return A.i($async$fxu,w)},
fF8:function fF8(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fF9:function fF9(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abG:function abG(d,e){this.a=d
this.b=e},
fka:function fka(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yz:function Yz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ays:function ays(){this.c=this.a=this.d=null},
d1w:function d1w(d,e){this.a=d
this.b=e},
d1t:function d1t(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1u:function d1u(d){this.a=d},
d1y:function d1y(){},
d1x:function d1x(d){this.a=d},
ac8:function ac8(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB_:function aB_(d,e){this.a=d
this.b=e},
aEb:function aEb(d,e,f){this.a=d
this.b=e
this.c=f},
fm9:function fm9(d,e,f){this.a=d
this.b=e
this.c=f},
fm7:function fm7(d){this.a=d},
fm8:function fm8(d,e,f){this.a=d
this.b=e
this.c=f},
fmD:function fmD(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fmC:function fmC(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6N(d,e,f,g,h){return B.hAn(d,e,f,g,h)},
hAn(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6N=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dt(d,new B.c6O(s,e,h,g,f,q),y.g),y.l),$async$c6N)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6N,w)},
aYO(d,e,f,g,h){return B.hAo(d,e,f,g,h)},
hAo(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYO=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atI("GET",d)
o=A.fOi()
if(o==null)o=new A.Lo(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.EZ),$async$aYO)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.C5(),$async$aYO)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bn(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$aYO,w)},
aYN(d){return B.hAl(d)},
hAl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v8(d,null).cM(0,C.nR),$async$aYN)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.ix(A.iw(p.e)).ca(0,p.w),null)
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
return A.i($async$aYN,w)},
c6M(d){return B.hAm(d)},
hAm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v8(d,null).cM(0,C.pI),$async$c6M)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ix(A.iw(q.e)).ca(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.aa(o)
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
return A.i($async$c6M,w)},
c6O:function c6O(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jk:function jk(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
I3(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hAt(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.I3(C.a.b1(u,v.length))}return null},
hAu(d){var x=B.I3(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hAp(){var x,w=$.pn(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fX(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a6k(d){return B.hAq(d)},
hAq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f3(d,null,!1,C.bG),$async$a6k)
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
return A.i($async$a6k,w)},
a6l(d,e){return B.hAr(d,e)},
hAr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6l=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hC(d,e,!1,!1,C.cH,null),$async$a6l)
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
return A.i($async$a6l,w)},
Bm(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Bm)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.I3(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6m(r),$async$Bm)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6k("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bm)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.I3(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bm)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hAp()
x=14
return A.b(B.a6m(m),$async$Bm)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6l("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bm)
case 15:k=f
x=16
return A.b(B.a6l("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bm)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bm)
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
return A.i($async$Bm,w)},
a6m(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.I3(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6k("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6m)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6m,w)},
a6n(d,e,f,g){return B.hAv(d,e,f,g)},
hAv(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6n=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gam(d)){v=!1
x=1
break}r=B.I3(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6m(r),$async$a6n)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c6U())>1048576||g.b5(d,new B.c6V())){v=B.Eb(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a6y("myCode",d,a0),$async$a6n)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cm(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Eb(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYW(u,g.gM(d),a0),$async$a6n)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pn().aC(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c6W(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYP(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6n)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6n,w)},
Eb(d,e,f,g,h){return B.hAs(d,e,f,g,h)},
hAs(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eb=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eb)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c6Q())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pn().aC(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aC(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.I7(a9,q)
a0=new A.JY(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Eb)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oR(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9V(a1.a,a4,"media",a1.d,a2).wQ(m,n,new A.Dt(!0,q.c)),$async$Eb)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Eb)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPl(r),$async$Eb)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c6R(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYP(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Eb)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPl(r),$async$Eb)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eb,w)},
aYP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6k(t),$async$aYP)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c6P(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6l(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYP,w)},
N_(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$N_=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6k("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$N_)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cm(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aYQ(k,a0),$async$N_)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aYV(h),$async$N_)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Us(g,a0),$async$N_)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c6S(),q),n)
d=A.B(new A.a2(r,new B.c6T(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6l("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$N_)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$N_,w)},
aYQ(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cm(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
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
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.i4_(k,j)
C.d.v(s,i)
x=5
return A.b(B.CG(l,m,"Received via My Code",t,e,i),$async$aYQ)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPl(s),$async$aYQ)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYQ,w)},
c6U:function c6U(){},
c6V:function c6V(){},
c6W:function c6W(){},
c6Q:function c6Q(){},
c6R:function c6R(){},
c6P:function c6P(){},
c6S:function c6S(){},
c6T:function c6T(){},
fF5(d,e){var x=0,w=A.j(y.H)
var $async$fF5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c8(A.e9(new B.fF6(e),!1,null,y.H)),$async$fF5)
case 2:return A.h(null,w)}})
return A.i($async$fF5,w)},
bCq(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cm(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c8(A.e9(new B.fF7(g,e,f),!1,null,y.y)),$async$bCq)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCq,w)},
fF6:function fF6(d){this.a=d},
fF7:function fF7(d,e,f){this.a=d
this.b=e
this.c=f},
Ui:function Ui(d,e){this.c=d
this.a=e},
aCm:function aCm(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOl:function dOl(d,e){this.a=d
this.b=e},
Um:function Um(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCp:function aCp(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPu:function dPu(d){this.a=d},
dPv:function dPv(d){this.a=d},
dPw:function dPw(d){this.a=d},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPx:function dPx(d){this.a=d},
dPy:function dPy(d){this.a=d},
dPz:function dPz(d,e){this.a=d
this.b=e},
dPA:function dPA(d,e){this.a=d
this.b=e},
dPB:function dPB(d,e){this.a=d
this.b=e},
dPC:function dPC(d){this.a=d},
dPF:function dPF(){},
dPD:function dPD(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
bhU:function bhU(){},
Uj:function Uj(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCn:function aCn(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOm:function dOm(d){this.a=d},
dOn:function dOn(d){this.a=d},
fRR(d){var x=d.hP
if(x>=0)return C.o.N(x)
return 10},
hAx(d){var x=d.kE
if(x>=0)return x
return 4.99},
hAw(d){var x=d.lm,w=y.N
w=x.j0(x,new B.c6Y(),w,w)
return w},
h6P(d){var x=d.kF,w=y.N
w=x.j0(x,new B.c6Z(),w,w)
return w},
aYT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aYT)
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
return A.i($async$aYT,w)},
a6p(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a6p)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a6p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6p,w)},
Ul(d){var x=0,w=A.j(y.H),v,u
var $async$Ul=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Ul)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ul)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ul,w)},
fRQ(d,e){var x,w,v
if(B.hAx(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hAw(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYR(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h6P(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h6Q(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h6P(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bQ(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kF=w},
aor(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aor=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aor)
case 7:s=f
r=A.t(p)
r=A.f6(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aor,w)},
aos(d){var x=0,w=A.j(y.H),v,u,t
var $async$aos=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aor(d),$async$aos)
case 3:u=f
x=5
return A.b(A.aA(),$async$aos)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$aos)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aos,w)},
aoq(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fRR(d)
if(u<=0){v=!1
x=1
break}if(B.fRQ(d,e)){v=!1
x=1
break}x=3
return A.b(B.aor(e),$async$aoq)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoq,w)},
aYS(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.I5(e,d),$async$aYS)
case 3:if(g){v=-1
x=1
break}u=B.fRR(d)
if(u<=0){v=-1
x=1
break}if(B.fRQ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aor(e),$async$aYS)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYS,w)},
c70(d,e,f){var x=0,w=A.j(y.y),v
var $async$c70=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.I5(e,d),$async$c70)
case 3:if(h){v=!1
x=1
break}v=B.aoq(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c70,w)},
c7_(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7_=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c70(d,u,i.gTb()),$async$c7_)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7_,w)},
a6o(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6o=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gTb()){v=!0
x=1
break}if(B.aYR(d,u)){v=!0
x=1
break}x=5
return A.b(A.ld(u,C.Rw),$async$a6o)
case 5:x=k?3:4
break
case 3:B.h6Q(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6o)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kS(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rw,"Doc Share for Organizations"),$async$a6o)
case 7:if(!k){v=!1
x=1
break}B.h6Q(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6o)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6o,w)},
c6Y:function c6Y(){},
c6Z:function c6Z(){},
fFK(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fFK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fFK)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.faC.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hN([r],e.c))
s.toString
$.faC.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFK,w)},
i6i(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.faC.bn($.faC,new B.fFM(d))},
fFM:function fFM(d){this.a=d},
fc1(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fc1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hN([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jc,null,y.H),$async$fc1)
case 3:C.zT.fb(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mn()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fc1,w)},
afh(d,e,f){var x=0,w=A.j(y.H),v
var $async$afh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fb9.n(0,d,new B.abn(A.bn(e,!0,v)))
x=3
return A.b(A.aA(),$async$afh)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afh)
case 2:return A.h(null,w)}})
return A.i($async$afh,w)},
afb(d){return B.hQf(d)},
hQf(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fb9.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$afb)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cm(s)){v=null
x=1
break}o=J.b6(s,new B.ffH(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abn(r)
$.fb9.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afb,w)},
Qd(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FS.n(0,d,u)
x=3
return A.b(B.QI(d,u),$async$Qd)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qd,w)},
aNc(d){return B.hQd(d)},
hQd(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FS.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.QH(d),$async$aNc)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FS.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aNc)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aJ(r)
x=!J.cm(q)?9:10
break
case 9:B.Qd(d,q)
x=11
return A.b(J.hD(s,d),$async$aNc)
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
return A.i($async$aNc,w)},
hMp(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zR(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a10(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a10=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.by,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fkm(r,t),!1,s)
A.fI(r,"error",new B.fkn(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ih(0,C.LH,new B.fko())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a10,w)},
aNw(d,e,f){return B.hSu(d,e,f)},
hSu(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNw=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a10(i),$async$aNw)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QI(o,p),$async$aNw)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afh(k,j,s),$async$aNw)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNw,w)},
aNv(d,e,f){return B.hSt(d,e,f)},
hSt(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNv=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNw(d,e,f),$async$aNv)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a10(f),$async$aNv)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FS.n(0,s,r)
$.Qu.n(0,s,r)
x=11
return A.b(B.Qd(s,r),$async$aNv)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNv,w)},
Bn(d,e,f,g,h,i){return B.hAG(d,e,f,g,h,i)},
hAG(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bn=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aC(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jk(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYZ(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qd(s,d),$async$Bn)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Bn)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cT.gcw().aJ(d)),$async$Bn)
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
return A.b(B.Ar(e),$async$Bn)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.G3(e,j),$async$Bn)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bn,w)},
Un(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Un=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ar(d),$async$Un)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cI.aC(99999)
n=p.b
l=o.type
l.toString
k=B.h6S(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jk(m,n,k,l,j,"From folder",null,B.aYZ(),null)
$.afK.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a10(o),$async$Un)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FS.n(0,h,g)
$.Qu.n(0,h,g)
B.Qd(h,g)
x=9
break
case 10:x=11
return A.b(B.aNv(d,m,o),$async$Un)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.G3(d,t),$async$Un)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Un,w)},
fRV(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fRV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h6S(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.I6(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.Bn(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRV,w)},
I6(d,e,f,g,h,i){return B.hAF(d,e,f,g,h,i)},
hAF(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$I6=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JY(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$I6)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.cm(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rf(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kE(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QI(k,l),$async$I6)
case 11:J.ch(q,k);++p
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
return A.b(j.a7(0),$async$I6)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QI(k,new Uint8Array(A.ce(n))),$async$I6)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afh(r,q,g),$async$I6)
case 16:f=new B.jk(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYZ(),null)
x=17
return A.b(B.Ar(d),$async$I6)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.G3(d,e),$async$I6)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$I6,w)},
Up(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Up=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afK.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a10(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afb(s),$async$Up)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QH(u[o]),$async$Up)
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
v=A.zR(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qu.h(0,s)
if(i==null)i=$.FS.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rj(d,e),$async$Up)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qu.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zR(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Up,w)},
h6S(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rj(d,e){return B.hAH(d,e)},
hAH(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rj=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qu.h(0,f)
if(e==null)e=$.FS.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afK.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a10(s),$async$rj)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FS.n(0,f,r)
$.Qu.n(0,f,r)
B.Qd(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afb(f),$async$rj)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axf(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QH(g[l]),$async$rj)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.J(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anh()
if(!C.aG.gam(r)){$.FS.n(0,f,r)
$.Qu.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNc(f),$async$rj)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qu.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Up(a0,a1,0,g),$async$rj)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.ce(i))
$.FS.n(0,f,h)
$.Qu.n(0,f,h)
B.Qd(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rj,w)},
hAK(d){var x,w,v=$.afK.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hAL(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hN([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hAI(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoy(d,e,f,g,h){return B.hAJ(d,e,f,g,h)},
hAJ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoy=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afK.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a10(s),$async$aoy)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rj(g,e),$async$aoy)
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
return A.b(n.i9(d).wQ(h,r,new A.Dt(!0,e.c)),$async$aoy)
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
return A.i($async$aoy,w)},
h6U(d,e,f,g,h){var x,w,v,u,t=$.h6T
$.h6T=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7b.n(0,t,new B.buq(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axf(u)))
return t},
fRW(d){var x=0,w=A.j(y.H)
var $async$fRW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fRW,w)},
I7(d,e){var $async$I7=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afK.h(0,h)
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
return A.pZ(B.Up(d,e,p,o<q?o:q),$async$I7,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pZ(A.Fp(n),$async$I7,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pZ(B.afb("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$I7,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pZ(B.QH(h[l]),$async$I7,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pZ(A.Fp(k),$async$I7,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pZ(B.rj(d,e),$async$I7,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pZ(A.Fp(A.zR(j,p,o<i?o:i)),$async$I7,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pZ(null,0,w)
case 2:return A.pZ(t.at(-1),1,w)}})
var x=0,w=A.hfv($async$I7,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hhk(w)},
aZ0(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZ0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7b.h(0,d)
if(t==null||J.cm(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3V(),$async$aZ0)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ0,w)},
Uo(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Uo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7b.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3V(),$async$Uo)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afh(r.c,u,r.z),$async$Uo)
case 4:t=new B.jk(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYZ(),null)
u=r.a
x=5
return A.b(B.Ar(u),$async$Uo)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.G3(u,s),$async$Uo)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uo,w)},
a6v(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7b.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agq(u[s]),$async$a6v)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
c7d(d,e,f){var x=0,w=A.j(y.H)
var $async$c7d=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzs(d,e,f),$async$c7d)
case 2:return A.h(null,w)}})
return A.i($async$c7d,w)},
c7e(d,e,f){var x=0,w=A.j(y.H)
var $async$c7e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzt(d,e,f),$async$c7e)
case 2:return A.h(null,w)}})
return A.i($async$c7e,w)},
Ec(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ec=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ar(d),$async$Ec)
case 2:p=g
J.no(p,new B.c7c(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FS.W(0,v)
$.afK.W(0,e)
x=3
return A.b(B.afb(v),$async$Ec)
case 3:u=g
$.fb9.W(0,v)
x=4
return A.b(A.aA(),$async$Ec)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ec)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ec)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agq(s[q]),$async$Ec)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agq(v),$async$Ec)
case 13:x=14
return A.b(B.G3(d,p),$async$Ec)
case 14:return A.h(null,w)}})
return A.i($async$Ec,w)},
aZ_(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rj(d,e),$async$aZ_)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fc1(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ_,w)},
Ar(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ar=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Ar)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fkp(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ar,w)},
G3(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$G3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$G3)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fol(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$G3)
case 3:return A.h(null,w)}})
return A.i($async$G3,w)},
bzs(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ar(d),$async$bzs)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fiP(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCQ(f))
x=4
return A.b(B.G3(d,u),$async$bzs)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzs,w)},
bzt(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzt=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ar(d),$async$bzt)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fiQ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cGb(f))
x=4
return A.b(B.G3(d,u),$async$bzt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzt,w)},
abn:function abn(d){this.a=d},
ffH:function ffH(){},
fkm:function fkm(d,e){this.a=d
this.b=e},
fkn:function fkn(d){this.a=d},
fko:function fko(){},
c7c:function c7c(d){this.a=d},
buq:function buq(d,e,f,g,h,i,j,k,l){var _=this
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
fkp:function fkp(){},
fol:function fol(){},
fiP:function fiP(d){this.a=d},
fiQ:function fiQ(d){this.a=d},
a6w(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.c7h())?3:4
break
case 3:x=5
return A.b(B.aZ1(d,e),$async$a6w)
case 5:u=g
if(u!=null){t=u.c
B.N1(d,u.b,e,t)}v=u
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
return A.b(B.aYX(s),$async$a6w)
case 10:case 9:if(g){v=new A.PB(1,D.R9,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Uq(d,e),$async$a6w)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Uv(!0,!0,d,e),$async$a6w)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N1(d,D.z2,e,t)
v=new A.PB(p,D.z2,t)
x=1
break}v=B.c7g(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6w,w)},
Uq(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Uq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6y(null,d,e),$async$Uq)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cm(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aYW(p,d.length,e),$async$Uq)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7e(e,C.d.gL(d).a,r.b),$async$Uq)
case 7:case 6:q=r.a
x=8
return A.b(B.N1(d,D.R9,e,q),$async$Uq)
case 8:v=new A.PB(d.length,D.R9,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uq,w)},
Ur(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ur=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ms(D.my)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6x(d,e),$async$Ur)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c79(s,d,e,t),$async$Ur)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYX(t),$async$Ur)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rj(e,d),$async$Ur)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Uq(A.a([d],y.r),e),$async$Ur)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ur,w)},
Ut(){var x=0,w=A.j(y.H)
var $async$Ut=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fRP(),$async$Ut)
case 2:x=3
return A.b(B.aPD(),$async$Ut)
case 3:return A.h(null,w)}})
return A.i($async$Ut,w)},
a6x(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYZ()
x=3
return A.b(B.c7d(e,d.a,u),$async$a6x)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6x,w)},
N1(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.R9&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b1(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6x(p,f),$async$N1)
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
return A.b(B.c78(o,p,u,f),$async$N1)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c79(o,p,f,t),$async$N1)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c77(o,u,p,f),$async$N1)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N1,w)},
aZ1(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZ1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7f(e,d),$async$aZ1)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Uv(!1,!0,d,e),$async$aZ1)
case 4:u=g
if(u!=null){t=u.b
v=new A.PB(u.a,D.z2,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ1,w)},
c7f(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7f=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Up(d,s,0,1),$async$c7f)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.L)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7f,w)},
c7g(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6y(null,d,e),$async$c7g)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h6R(u)
if(t.length>800){v=null
x=1
break}v=new A.PB(d.length,D.dvn,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7g,w)},
aoz(d,e,f){return B.hAO(d,e,f)},
hAO(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoz=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mE(g,1)
x=B.fRU(g)?3:4
break
case 3:x=5
return A.b(B.c7a(g),$async$aoz)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mE(g,13))
try{k=B.Ed(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mE(g,13))
u=9
x=12
return A.b(B.aYV(q),$async$aoz)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Us(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fRT(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Us(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.I8(C.a.i(J.mE(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.I8(C.a.i(J.mE(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.I8(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Us(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoz,w)},
I8(d,e,f){return B.hAM(d,e,f)},
hAM(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$I8=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b1(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b1(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cw(A.t(s)+"/manifest.json",0,null)
q=A.cw(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYN(r),$async$I8)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYN(A.cw(s,0,null)),$async$I8)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cm(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6N(o,r,a1,n,a2),$async$I8)
case 11:m=a4
x=J.cm(m)?12:13
break
case 12:x=14
return A.b(B.c6M(q),$async$I8)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Us(l,a2),$async$I8)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cm(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.aa(d)
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
return A.i($async$I8,w)},
a6y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6y=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.rj(f,r),$async$a6y)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cT.gcw().aJ(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
Us(d,e){return B.hAN(d,e)},
hAN(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Us=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cG.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bn(i,a3,d,k,l,o),$async$Us)
case 9:h=a5
if(h!=null)J.ch(n,h)
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
return A.i($async$Us,w)},
N0:function N0(d,e){this.a=d
this.b=e},
c7h:function c7h(){},
a0B(d){var x=A.P(d).ax.a===C.I,w=x?D.adF:D.abw,v=x?D.afa:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acK:C.aL
return new A.aFp([w,s,v,u,t,x?C.f9:C.bW])},
hma(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fJS(e),d,null,!0,!0,y.N)},
c6X(d,e,f,g,h,i,j,k,l){return new B.Uk(e,l,d,f,k,j,g,h,i,null)},
YB(d,e,f,g,h,i,j){return new B.bcz(g,h,j,e,i,d,f,null)},
fJS:function fJS(d){this.a=d},
Yy:function Yy(d,e){this.c=d
this.a=e},
ayr:function ayr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1s:function d1s(d){this.a=d},
d1q:function d1q(d){this.a=d},
d1r:function d1r(d){this.a=d},
bu4:function bu4(){},
Uk:function Uk(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCo:function aCo(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPs:function dPs(d){this.a=d},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOp:function dOp(d,e,f){this.a=d
this.b=e
this.c=f},
dOo:function dOo(d){this.a=d},
dOq:function dOq(d,e){this.a=d
this.b=e},
dOv:function dOv(d,e,f){this.a=d
this.b=e
this.c=f},
dOu:function dOu(d){this.a=d},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPh:function dPh(d){this.a=d},
dON:function dON(d,e,f){this.a=d
this.b=e
this.c=f},
dOK:function dOK(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOt:function dOt(d){this.a=d},
dOV:function dOV(d){this.a=d},
dOU:function dOU(){},
dOz:function dOz(d){this.a=d},
dPd:function dPd(d,e){this.a=d
this.b=e},
dPe:function dPe(d,e){this.a=d
this.b=e},
dPf:function dPf(d,e){this.a=d
this.b=e},
dOL:function dOL(d,e){this.a=d
this.b=e},
dOM:function dOM(d,e){this.a=d
this.b=e},
dP6:function dP6(d,e){this.a=d
this.b=e},
dP2:function dP2(d){this.a=d},
dP1:function dP1(d){this.a=d},
dP3:function dP3(){},
dP4:function dP4(){},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP7:function dP7(){},
dP8:function dP8(d){this.a=d},
dP0:function dP0(d,e){this.a=d
this.b=e},
dOW:function dOW(d){this.a=d},
dOX:function dOX(d){this.a=d},
dOY:function dOY(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dP_:function dP_(d){this.a=d},
dOw:function dOw(){},
dOx:function dOx(d){this.a=d},
dOy:function dOy(d,e){this.a=d
this.b=e},
dOs:function dOs(d,e){this.a=d
this.b=e},
dOr:function dOr(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(d){this.a=d},
dOP:function dOP(d,e,f){this.a=d
this.b=e
this.c=f},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOB:function dOB(d,e,f){this.a=d
this.b=e
this.c=f},
dOF:function dOF(d){this.a=d},
dOG:function dOG(d){this.a=d},
dOH:function dOH(){},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dOC:function dOC(d){this.a=d},
dOA:function dOA(d,e,f){this.a=d
this.b=e
this.c=f},
dOD:function dOD(){},
dOT:function dOT(d){this.a=d},
dOS:function dOS(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dP9:function dP9(d){this.a=d},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPb:function dPb(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPo:function dPo(d){this.a=d},
dPq:function dPq(){},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPk:function dPk(d,e,f){this.a=d
this.b=e
this.c=f},
dPi:function dPi(d,e,f){this.a=d
this.b=e
this.c=f},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d,e){this.a=d
this.b=e},
ayo:function ayo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcy:function bcy(d,e,f){this.c=d
this.d=e
this.a=f},
d1o:function d1o(){},
d1p:function d1p(){},
abH:function abH(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d1M:function d1M(){},
d1L:function d1L(d){this.a=d},
YA:function YA(d,e,f){this.c=d
this.d=e
this.a=f},
ayt:function ayt(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1I:function d1I(d){this.a=d},
d1J:function d1J(d,e,f){this.a=d
this.b=e
this.c=f},
d1K:function d1K(d,e){this.a=d
this.b=e},
d1G:function d1G(d,e){this.a=d
this.b=e},
d1E:function d1E(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1F:function d1F(d){this.a=d},
d1B:function d1B(d){this.a=d},
d1H:function d1H(d){this.a=d},
d1D:function d1D(d){this.a=d},
d1A:function d1A(d){this.a=d},
Yx:function Yx(d,e,f){this.c=d
this.d=e
this.a=f},
ayq:function ayq(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1l:function d1l(d){this.a=d},
d1k:function d1k(d,e){this.a=d
this.b=e},
d1m:function d1m(d){this.a=d},
d1j:function d1j(d,e){this.a=d
this.b=e},
d1n:function d1n(d){this.a=d},
d1i:function d1i(d,e){this.a=d
this.b=e},
d1e:function d1e(d){this.a=d},
d1f:function d1f(d){this.a=d},
d1g:function d1g(d,e){this.a=d
this.b=e},
d1h:function d1h(d){this.a=d},
Pe:function Pe(d,e,f){this.c=d
this.d=e
this.a=f},
ayw:function ayw(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d1Z:function d1Z(d){this.a=d},
d2_:function d2_(d){this.a=d},
d20:function d20(d){this.a=d},
d21:function d21(d){this.a=d},
d22:function d22(d,e){this.a=d
this.b=e},
d23:function d23(d){this.a=d},
d25:function d25(d){this.a=d},
d24:function d24(d){this.a=d},
YC:function YC(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayu:function ayu(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d1V:function d1V(d,e){this.a=d
this.b=e},
d1W:function d1W(d,e){this.a=d
this.b=e},
d1N:function d1N(d,e,f){this.a=d
this.b=e
this.c=f},
d1O:function d1O(d){this.a=d},
d1P:function d1P(){},
d1U:function d1U(){},
d1Q:function d1Q(d,e){this.a=d
this.b=e},
d1R:function d1R(d,e){this.a=d
this.b=e},
d1S:function d1S(d,e){this.a=d
this.b=e},
d1T:function d1T(d,e){this.a=d
this.b=e},
abF:function abF(d,e){this.c=d
this.a=e},
d1d:function d1d(d){this.a=d},
Yw:function Yw(d){this.a=d},
ayp:function ayp(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YD:function YD(d,e){this.c=d
this.a=e},
ayv:function ayv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d1Y:function d1Y(d){this.a=d},
d1X:function d1X(d){this.a=d},
bcz:function bcz(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hAP(){var x,w=$.pn(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fX(v)},
N2(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$N2=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$N2)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$N2)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$N2,w)},
a6z(d){return B.hAQ(d)},
hAQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6z)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hC("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6z)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6z,w)},
Uu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Uu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N2(),$async$Uu)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dW(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6z(s),$async$Uu)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Uu,w)},
Uv(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Uv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Uv)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bn(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c7j(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hAP()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.B(new A.K(u,new B.c7k(s),t),t.k("ak.E"))
x=6
return A.b(B.N2(),$async$Uv)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6z(q),$async$Uv)
case 7:x=8
return A.b(B.a6A(r,u,g,s),$async$Uv)
case 8:v=new A.bo8(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uv,w)},
aoA(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.N2(),$async$aoA)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoA,w)},
c7l(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N2(),$async$c7l)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7l,w)},
a6A(d,e,f,g){return B.hAR(d,e,f,g)},
hAR(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6A=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoy("media",r,new B.c7i(s,e,g),f,q),$async$a6A)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Uu(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6A)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Uu(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6A)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Uu(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6A)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6A,w)},
Ed(d,e,f){return B.hAS(d,e,f)},
hAS(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ed=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ed)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoA(b3),$async$Ed)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kl,null,g),$async$Ed)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoA(b3),$async$Ed)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.N2(),$async$Ed)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cm(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gM(a4)
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
if(J.ad(m)===0){x=11
break}u=14
a8=$.eY().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oR(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9V(a8.a,b0,"media",a8.d,a9).Cq(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYO(k,n,o,s,b7),$async$Ed)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
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
break}a7=g.gT(g)
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
a8=A.oR(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9V(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ed)
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
a0=A.dW(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6z(e),$async$Ed)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ed,w)},
c7j:function c7j(){},
c7k:function c7k(d){this.a=d},
c7i:function c7i(d,e,f){this.a=d
this.b=e
this.c=f},
aPD(){var x=0,w=A.j(y.H),v,u
var $async$aPD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hLO=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPD)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPD)
case 3:u=$.fX0
u=u==null?null:u.bE(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPD)
case 4:$.fX0=$.hUj=$.hUk=null
return A.h(null,w)}})
return A.i($async$aPD,w)},
fnX(d){var x=0,w=A.j(y.H),v,u
var $async$fnX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5x){x=1
break}u=new A.bg($.by,y.d4)
d.c=new B.fnY(new A.bX(u,y.aY))
x=3
return A.b(u.ih(0,C.hJ,new B.fnZ()),$async$fnX)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fnX,w)},
hUh(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hAz(x):x},
fX4(d){var x=0,w=A.j(y.T),v,u,t
var $async$fX4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,13))
if(C.a.a0(u,"WR")){v=B.aoC(u)
x=1
break}v=B.fRT(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fX4,w)},
fX3(d){var x=0,w=A.j(y.T),v,u,t
var $async$fX3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,14))
if(C.a.a0(u,"WR")){v=B.aoD(u)
x=1
break}v=B.fRT(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fX3,w)},
fFu(d){var x=0,w=A.j(y.T),v
var $async$fFu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoD(d),$async$fFu)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFu,w)},
bAk(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fX3(d),$async$bAk)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAk,w)},
fcQ(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fcQ=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uo(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bn(d.anh(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcQ,w)},
G5(d,e,f){return B.hWF(d,e,f)},
hWF(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$G5=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fX4(a1),$async$G5)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
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
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b1(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.ho2().aD4(D.djJ,null),$async$G5)
case 4:l=d.fX0=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axf(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.by,y.b1)
l.y=new B.fov(f,k,new B.fow(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a6Q(0,new B.WE(r,"offer")),$async$G5)
case 5:d=l
x=7
return A.b(l.ak9(0),$async$G5)
case 7:x=6
return A.b(d.a6I(0,a4),$async$G5)
case 6:x=8
return A.b(B.fnX(l),$async$G5)
case 8:x=9
return A.b(l.ao1(),$async$G5)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hUh(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoE(m,h),$async$G5)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h6R(h)
case 11:v=new A.bnq(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G5,w)},
fnY:function fnY(d){this.a=d},
fnZ:function fnZ(){},
fow:function fow(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fov:function fov(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fou:function fou(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hYw(d){switch(d){case"new":return D.ec8
case"checking":return D.ec9
case"connected":return D.ecb
case"completed":return D.eca
case"failed":return D.ecd
case"disconnected":return D.ece
case"closed":return D.aL5
case"count":return D.ecc}return D.aL5},
hYx(d){switch(d){case"new":return D.aL6
case"gathering":return D.ecf
case"complete":return D.a5x}return D.aL6},
i7M(d){switch(d){case"stable":return D.ecg
case"have-local-offer":return D.ech
case"have-local-pranswer":return D.ecj
case"have-remote-offer":return D.eci
case"have-remote-pranswer":return D.eck
case"closed":return D.aLc}return D.aLc},
i61(d){switch(d){case"new":return D.aL9
case"connecting":return D.aLa
case"connected":return D.aLb
case"closed":return D.a5y
case"disconnected":return D.aL8
case"failed":return D.aL7}return D.a5y},
a8R:function a8R(d,e){this.a=d
this.b=e},
O4:function O4(d,e){this.a=d
this.b=e},
WD:function WD(d,e){this.a=d
this.b=e},
O3:function O3(d,e){this.a=d
this.b=e},
EG:function EG(d,e){this.a=d
this.b=e},
cig:function cig(){},
fTD(d){var x=new B.EF()
x.a=d
x.b=!0
return x},
EF:function EF(){this.b=this.a=$},
a8Q:function a8Q(){},
asT:function asT(){},
WE:function WE(d,e){this.a=d
this.b=e},
fRP(){var x=0,w=A.j(y.H)
var $async$fRP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fRP,w)},
fRS(d,e,f){var x=0,w=A.j(y.T),v
var $async$fRS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ms(D.my))){v=null
x=1
break}v=B.fFK(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRS,w)},
h6R(d){var x,w=F.aaY.a3F(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cT.gcw().aJ(x)}return C.cT.gcw().aJ(w)},
hAy(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.aaX.bbo(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fRT(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hAy(C.a.b1(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b1(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hAz(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a0(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aI(s,"\n")},
hAA(){var x,w=$.pn(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"DS"+C.d.fX(v)},
aYU(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYU)
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
return A.i($async$aYU,w)},
c71(d,e){return B.hAB(d,e)},
hAB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c71=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c71)
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
return A.i($async$c71,w)},
aYX(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYU(d),$async$aYX)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYX,w)},
aYW(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hAA()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c71(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cT.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYW)
case 3:if(!h){v=null
x=1
break}v=new A.a_E("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYW,w)},
aYV(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYU(o),$async$aYV)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c6.ca(0,C.cG.aJ(u))
if(J.iT(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYV,w)},
c72(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c72=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBh("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c72)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c72,w)},
aYY(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.I4(),$async$aYY)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYY,w)},
aov(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aov=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aov)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYY(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aov,w)},
aot(d,e){var x=0,w=A.j(y.H)
var $async$aot=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aot)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aot)
case 2:return A.h(null,w)}})
return A.i($async$aot,w)},
a6r(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6r)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.I4(),$async$a6r)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6q(s),$async$a6r)
case 5:x=6
return A.b(B.aot(f,u),$async$a6r)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
a6s(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6s=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6s)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.I4(),$async$a6s)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
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
if(o!==t&&s.ai(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.aot(g,q),$async$a6s)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6q(u),$async$a6s)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6s,w)},
a6t(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6t=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6t)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.I4(),$async$a6t)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYR(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a6t)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6t)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6t,w)},
c73(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c73=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c73)
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
return A.i($async$c73,w)},
I5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$I5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c73(d),$async$I5)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYY(t),$async$I5)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aou(d),$async$I5)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYR(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aou(d),$async$I5)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I5,w)},
aou(d){var x=0,w=A.j(y.H)
var $async$aou=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aou)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aou)
case 2:return A.h(null,w)}})
return A.i($async$aou,w)},
aYZ(){var x,w=$.pn(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(32)]
return C.d.fX(v)},
a6u(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fRU(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c76(d){return B.hAD(d)},
hAD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c76=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6u(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c76)
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
return A.i($async$c76,w)},
aox(d,e){return B.hAE(d,e)},
hAE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aox=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6u(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aox)
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
return A.i($async$aox,w)},
c78(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c78=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6u(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aox(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c78)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c78,w)},
c77(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c77=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6u(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aox(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c77)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c77,w)},
c79(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c79=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6u(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aox(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c79,w)},
c7a(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7a=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fRU(d)){v=null
x=1
break}x=3
return A.b(B.c76(d),$async$c7a)
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
return A.i($async$c7a,w)},
a6B(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6B)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6B)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
q=A.aa(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6B,w)},
aoB(d){return B.hAT(d)},
hAT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoB)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hC("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoB)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoB,w)},
aoC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoC)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6B(),$async$aoC)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c6.ca(0,C.cG.aJ(q))
if(J.iT(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a1(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aF(s,j,o)
x=9
return A.b(B.aoB(s),$async$aoC)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$aoC,w)},
aoE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoE)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6B(),$async$aoE)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a1(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cT.gcw().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.aoB(u),$async$aoE)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoE,w)},
aoD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoD)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6B(),$async$aoD)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c6.ca(0,C.cG.aJ(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoD,w)},
anE(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pQ)){v=null
x=1
break}x=3
return A.b(p.lX(e),$async$anE)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.fY),$async$anE)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vg(o))
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
return A.i($async$anE,w)},
i4_(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fE0(d){return B.i41(d)},
i41(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fE0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i9("media").Kr(d,3600),$async$fE0)
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
return A.i($async$fE0,w)},
CG(d,e,f,g,h,i){var x=null
return B.i3Z(d,e,f,g,h,i)},
i3Z(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CG=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h6U(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fRW(r),$async$CG)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fE0(o),$async$CG)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6v(r),$async$CG)
case 14:v=null
x=1
break
case 13:e=$.by.h(0,C.aOb)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lo(A.a([],g))
x=15
return A.b(d.eT(0,A.atI("GET",A.cw(n,0,null))).cM(0,C.EZ),$async$CG)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6v(r),$async$CG)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JY(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CG)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZ0(r,k),$async$CG)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CG)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Uo(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a6v(r),$async$CG)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CG,w)},
aPl(d){return B.i40(d)},
i40(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i9("media").W(0,d),$async$aPl)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPl,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[144]
O=c[40]
F=c[239]
I=c[136]
P=c[219]
E=c[212]
G=c[86]
Q=c[184]
R=c[137]
S=c[217]
K=c[243]
L=c[249]
B=a.updateHolder(c[21],B)
D=c[247]
T=c[183]
M=c[202]
U=c[65]
V=c[250]
W=c[71]
X=c[55]
N=c[85]
Y=c[248]
B.cih.prototype={
aD4(d,e){return this.cHI(d,e)},
cHI(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aD4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kh(A.cB(t)))
t=J.k(u)
v=B.hFu(C.cT.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aD4,w)}}
B.b39.prototype={
bwL(d){var x=this,w=x.w
w.onclose=A.hf(new B.cic(x))
w.onopen=A.hf(new B.cid(x))
w.onmessage=A.hf(new B.cie(x))
w.onbufferedamountlow=A.hf(new B.cif(x))},
gdc(d){return this.x},
agm(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EF()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fTD(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agm)
case 8:v=t.fTD(s.amS(f,0,null))
x=1
break
case 7:case 4:v=B.fTD(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agm,w)}}
B.b3a.prototype={
bwM(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hf(new B.cii(x)))
w.addEventListener("icecandidate",A.hf(new B.cij(x)))
w.addEventListener("iceconnectionstatechange",A.hf(new B.cik(x)))
w.onicegatheringstatechange=A.hf(new B.cil(x))
w.addEventListener("signalingstatechange",A.hf(new B.cim(x)))
if(!$.h_E())w.addEventListener("connectionstatechange",A.hf(new B.cin(x)))
w.addEventListener("negotiationneeded",A.hf(new B.cio(x)))
w.addEventListener("track",A.hf(new B.cip(x)))},
ak9(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ak9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kh(A.cB(A.T(y.N,y.z)))),y.aQ),$async$ak9)
case 3:t=f
v=new B.WE(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ak9,w)},
a6I(d,e){return this.bmd(0,e)},
bmd(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6I)
case 2:return A.h(null,w)}})
return A.i($async$a6I,w)},
a6Q(d,e){return this.bmt(0,e)},
bmt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6Q)
case 2:return A.h(null,w)}})
return A.i($async$a6Q,w)},
ao1(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ao1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WE(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao1,w)},
bE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bE,w)}}
B.abG.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Yz.prototype={
R(){return new B.ays()},
gdd(){return this.c}}
B.ays.prototype={
a_(){this.a1()
this.ad4()},
ad4(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYS(u.e,u.c),$async$ad4)
case 2:t=e
if(v.c!=null)v.m(new B.d1w(v,t))
return A.h(null,w)}})
return A.i($async$ad4,w)},
PK(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoq(t.e,t.c,!1),$async$PK)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eSn)
x=1
break}x=4
return A.b(B.a6p(u.a.c,"individual"),$async$PK)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5f(A.e9(new B.d1t(u),!1,null,y.H)),$async$PK)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
IQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fm6(o),$async$IQ)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6t(o.e,r,s,q),$async$IQ)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.ePs)
x=1
break}x=5
return A.b(B.a6p(u.a.c,"member"),$async$IQ)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5f(A.e9(new B.d1v(u),!1,null,y.H)),$async$IQ)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
xM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6o(t.e,o,t.f,t.r,t.w,s),$async$xM)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6p(u.a.c,"org_owner"),$async$xM)
case 4:x=5
return A.b(B.aov(u.a.c),$async$xM)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fmB(o),$async$xM)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6r(s,t,o,q.c),$async$xM)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.ePp)
x=1
break}x=10
return A.b(B.aov(u.a.c),$async$xM)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5f(A.e9(new B.d1u(u),!1,null,y.H)),$async$xM)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xM,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j9:C.py,q=B.fRR(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.fa5,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h6,t,t,t),C.aA,D.fsW,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bVS,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lA(new B.d1y(),t),C.N,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.ac8(C.eR,C.axN,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcbS(),t),C.ac],v))
p.push(new B.ac8(C.oH,C.a1u,"Team Member","Sign in with your organization access code + password",u.gccJ(),t))
p.push(C.ac)
p.push(new B.ac8(C.akq,C.a2X,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcce(),t))
return A.c8(t,r,A.bl(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahJ,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ac8.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eE(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ey,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p7,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bs,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aB_.prototype={}
B.aEb.prototype={}
B.jk.prototype={
ms(d){var x=this.b,w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b1(x,w+1).toLowerCase())},
gaoF(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
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
baR(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jk(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cGb(d){return this.baR(null,d)},
aCQ(d){return this.baR(d,null)}}
B.Ui.prototype={
R(){return new B.aCm(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCm.prototype={
a_(){this.a1()
this.ad5()},
ad5(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ad5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bm(u.a.c),$async$ad5)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOl(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ad5,w)},
ad6(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ad6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ad6)
case 3:t=u.c
if(t!=null)t.I(y.q).f.S(D.eTh)
case 1:return A.h(v,w)}})
return A.i($async$ad6,w)},
Z2(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Z2=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anE(s.d,4),$async$Z2)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rP(r,"ngmy_my_code_"+m+".png"),$async$Z2)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Z2,w)},
agP(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9u("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agP,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j9:C.py,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lC
else if(q.e==null)x=A.av(new A.D(C.ew,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1V,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ahk,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mG,w,C.kx,new A.ev(A.p(p,A.pH(p,p,!1,B.hAu(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kx,A.A(A.a([A.E(A.ey(N.BL,C.TD,q.gc4U(),p),1),C.av,A.E(A.dk(C.yt,C.a7L,q.gc4V(),A.bm(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0m,D.foO,q.gcri(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.M8,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Um.prototype={
R(){return new B.aCp(new A.ar(C.as,$.aw()),A.jN(!0,null,!0,!0,null,null,!1))}}
B.aCp.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.I3(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Z3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.I3(u.d.a.a)
if(t==null){u.m(new B.dPu(u))
x=1
break}u.m(new B.dPv(u))
s=u.a
r=s.c
x=3
return A.b(B.a6n(s.d,new B.dPw(u),t,r),$async$Z3)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPx(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z3,w)},
a1e(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cm(r.a.d)){x=1
break}r.m(new B.dPy(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rj(r.a.c,q),$async$a1e)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPz(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ah9(p,m,l,j,k),$async$a1e)
case 8:o=e
if(r.c!=null)r.m(new B.dPA(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPB(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPC(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1e,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adF:D.abw,h=j?D.afa:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acK:C.aL
i=[i,e,h,g,f,j?C.f9:C.bW]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bJK,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ey,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fz,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1V,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ua(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhU()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.M2,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPD(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m0,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L1(l.a.d,4)
m=A.B(new A.K(m,new B.dPE(x,new A.aFp(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.ml,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d5,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eNZ)
else q.push(A.X(C.lj,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.dj(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.ix,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bsY,k,k,C.ah),1)
u=l.f?k:l.gcrj()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0m,D.fpN,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc4W()
t=A.bm(C.aE,k,k,0,C.c,k,C.n9,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bl(!0,A.mB(new B.dPF(),A.v(A.a([e,new A.D(D.bss,A.v(A.a([s,C.N,i,C.ac,A.bH(l.f?C.rE:D.fob,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XL,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhU.prototype={
ow(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bw,v.length),C.aN)}}
B.Uj.prototype={
R(){return new B.aCn()}}
B.aCn.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.ar(new A.bb(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.ar(C.as,v)},
q(){var x,w=this,v=w.d
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
w.a2()},
ad7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ad7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOm(r))
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
return A.b(B.a6s(p,m,n,o,C.a.i(l).length===0?null:l),$async$ad7)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.S(D.eST)
s=[1]
x=4
break}p.I(y.q).f.S(D.eRw)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOn(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ad7,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j9:C.py,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fgR,s,s,s,1,s,!0),p=A.p(s,D.bkZ,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Go,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bQE,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bQz,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bQP,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc4X()
u=A.bm(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mG,A.bH(t.r?C.rE:C.aQP,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abn.prototype={}
B.buq.prototype={
a3V(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anh()))
x=3
return A.b(B.QI(t,s),$async$a3V)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3V,w)},
gdd(){return this.a}}
B.N0.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yy.prototype={
R(){return new B.ayr(new A.ar(C.as,$.aw()),A.jN(!0,null,!0,!0,null,null,!1))}}
B.ayr.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1s(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c52(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0B(d),u=x.a.c,t=u?C.i8:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j9:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.an3,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.anR,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ua(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu4()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F9,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aXI),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1q(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m0,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nv,new B.d1r(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eI(w,C.K,new A.cS(Q.JZ,A.c_(new A.D(C.xE,A.v(A.a([l,C.aQ,k,C.N,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.E(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e66,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc51(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NV,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.Ma,C.d0,w,w,w)}}
B.bu4.prototype={
ow(d,e){return e.ak4(e.a.toUpperCase())}}
B.Uk.prototype={
R(){return new B.aCo(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCo.prototype={
a_(){var x=this
x.a1()
x.tA()
x.w=A.dv(C.jd,new B.dPs(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Ut()
this.a2()},
a06(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a06=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N_(u.a.c),$async$a06)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ar(u.a.c),$async$a06)
case 4:u.m(new s.dOQ(u,e))
u.hY("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a06,w)},
tA(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N_(u.a.c),$async$tA)
case 3:t=e
x=4
return A.b(B.Ar(u.a.c),$async$tA)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dOR(u,s))
if(t>0)u.hY("Received "+A.t(t)+" file(s) via My Code.")
u.N9(u.d)
B.Bm(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tA,w)},
N9(d){return this.bAI(d)},
bAI(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$N9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6x(r,u.a.c),$async$N9)
case 8:p=f
if(u.c==null){x=1
break}new B.dOp(u,r,p).$0()
u.c.e9()
case 7:if(!(C.a.a0(r.c,"video/")||r.ms(D.my))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ur(r,u.a.c),$async$N9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ar(u.a.c),$async$N9)
case 12:u.m(new o.dOq(u,f))
case 1:return A.h(v,w)}})
return A.i($async$N9,w)},
Nw(d){return this.bGV(d)},
bGV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6x(d,u.a.c),$async$Nw)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOv(u,d,t))
x=6
return A.b(A.fJ(new A.fC(t)),$async$Nw)
case 6:u.hY("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fC(r.toUpperCase())),$async$Nw)
case 7:u.hY("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nw,w)},
hY(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tB(d,e){return this.cBH(d,e)},
cBH(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPg(r,e))
u=3
x=6
return A.b(d.$0(),$async$tB)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPh(r))
$.eV.mn()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tB,w)},
gaTY(){var x=this.a
return x.f||x.r||x.w},
HN(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTY()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7_(s,n,r,q,o,t),$async$HN)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hY("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fxu(o,u.a.c),$async$HN)
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
return A.b(B.CI(s,o,r,q,n,t),$async$HN)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HN,w)},
a_a(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aov(u.a.c),$async$a_a)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hY("No organization portal found.")
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
return A.b(A.a5(t,!1).c8(A.e9(new B.dON(u,r,q),!1,null,y.H)),$async$a_a)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_a,w)},
a0h(d){return this.ckY(d)},
ckX(){return this.a0h(1)},
ckY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTY()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aos(u.a.c),$async$a0h)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0h,w)},
ab5(d,e,f){return this.bXo(d,e,f)},
bXo(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ab5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hY(e)
x=1
break}x=3
return A.b(u.tB(new B.dOK(u,d,null,e,f),"Uploading\u2026"),$async$ab5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ab5,w)},
bAQ(){B.hlt(!1,new B.dOt(this))
return},
cpW(){this.m(new B.dOV(this))},
axp(){var x=0,w=A.j(y.H),v=this
var $async$axp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAQ()
return A.h(null,w)}})
return A.i($async$axp,w)},
ab1(){var x=0,w=A.j(y.H),v=this
var $async$ab1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tB(new B.dOz(v),"Importing\u2026"),$async$ab1)
case 2:return A.h(null,w)}})
return A.i($async$ab1,w)},
RL(d){return this.cB7(d)},
cB7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.ms(D.my)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.e9(new B.dPd(u,d),!1,null,y.H)),$async$RL)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ms(D.PR)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c8(A.e9(new B.dPe(u,d),!1,null,y.H)),$async$RL)
case 8:x=1
break
case 7:x=u.bY5(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c8(A.e9(new B.dPf(u,d),!1,null,y.H)),$async$RL)
case 11:x=1
break
case 10:u.hY("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
bY5(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cDd,C.a.b1(x,w+1).toLowerCase())},
aez(d){return this.cbW(d)},
cbW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aez=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ms(D.my)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.e9(new B.dOL(u,d),!1,null,y.H)),$async$aez)
case 5:x=1
break
case 4:u.m(new B.dOM(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aez,w)},
R7(d){return this.csM(d)},
csM(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hY("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p1(t,s.c,s.f),$async$R7)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tB(new B.dP6(u,d),"Preparing QR\u2026"),$async$R7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
ahe(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dP7(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dP8(q),s),s.k("J.E"))
if(r.length===0){u.hY("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.R7(r),$async$ahe)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahe,w)},
ah7(d){return this.csk(d)},
csk(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0B(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dP0(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ah7)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RL(d)
break
case"qr":u.R7(A.a([d],y.r))
break
case"send_my_code":u.ccy(A.a([d],y.r))
break
case"save":u.agt(d)
break
case"delete":u.IB(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ah7,w)},
X1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOw(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dOx(q),s),s.k("J.E"))
if(r.length===0){u.hY("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p1(t,s.c,s.f),$async$X1)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tB(new B.dOy(u,r),"Preparing file\u2026"),$async$X1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X1,w)},
afF(d){return this.cjl(d)},
cjl(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hma(d,!1),$async$afF)
case 3:s=f
r=s==null
q=B.a6u(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hY("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afF,w)},
aeF(){var x=0,w=A.j(y.H),v=this,u
var $async$aeF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fF5(u,v.a.c),$async$aeF)
case 2:return A.h(null,w)}})
return A.i($async$aeF,w)},
bAP(){B.hlt(!1,new B.dOs(this,null))
return},
IP(d,e){return this.ccz(d,e)},
aZW(d){return this.IP(null,d)},
ccy(d){return this.IP(d,null)},
ccz(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dOO(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x0.c5().amC(!0,C.Zx,!1),$async$IP)
case 10:r=g
if(r==null||J.cm(r.a)){x=1
break}x=11
return A.b(s.tB(new B.dOP(l,s,r),"Preparing\u2026"),$async$IP)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hY("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hY("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCq(p,l,e,s.a.c),$async$IP)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hY("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IP,w)},
I1(d){return this.bXb(d)},
bXb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hAt(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZW(t),$async$I1)
case 8:x=6
break
case 7:u.hY("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hY("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tB(new B.dOI(u,d),"Receiving video\u2026"),$async$I1)
case 11:x=1
break
case 10:x=12
return A.b(u.tB(new B.dOJ(u,d),"Receiving\u2026"),$async$I1)
case 12:case 1:return A.h(v,w)}})
return A.i($async$I1,w)},
DZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CC()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afF(t),$async$DZ)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.I1(s),$async$DZ)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.e9(new B.dOT(u),!1,null,y.N)),$async$DZ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tA(),$async$DZ)
case 10:x=1
break
case 9:x=11
return A.b(u.I1(C.a.i(r)),$async$DZ)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DZ,w)},
agt(d){return this.cow(d)},
cow(d){var x=0,w=A.j(y.H),v=this
var $async$agt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tB(new B.dOS(v,d),"Saving\u2026"),$async$agt)
case 2:return A.h(null,w)}})
return A.i($async$agt,w)},
IB(d){return this.bJe(d)},
bJe(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l1(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IB)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c72(t),$async$IB)
case 6:case 5:s=d.a
x=7
return A.b(B.Ec(u.a.c,s),$async$IB)
case 7:u.r.W(0,s)
x=8
return A.b(u.tA(),$async$IB)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IB,w)},
ahk(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0B(r)
r=u.c
r.toString
x=3
return A.b(A.bR(C.K,null,new B.dPc(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahk)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeF()
break
case"import":u.ab1()
break}case 1:return A.h(v,w)}})
return A.i($async$ahk,w)},
c5_(d){var x=d.c
if(C.a.a0(x,"video/")||d.ms(D.my))return C.pX
if(C.a.a0(x,"image/")||d.ms(D.PR))return C.tQ
if(C.a.t(x,"pdf"))return E.Ns
return D.akS},
B(d){var x,w,v=this,u=null,t=B.a0B(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gg,u,u,u,new B.dPn(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bKf,u,u,u,v.e?u:v.gccf(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcpV()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bEB:E.alg,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0j,u,u,u,v.e?u:v.gc50(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o0,u,u,u,v.e?u:v.gb03(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bLX,u,u,u,v.e?u:new B.dPo(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lA(new B.dPp(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m_(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayo(C.jj,s,!0,t,w?u:v.gcsN(),u),1)
x.push(new A.D(D.brf,A.mB(new B.dPq(),A.A(A.a([s,C.av,A.E(new B.ayo(C.vz,"Export",!1,t,w?u:v.gbMM(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iy,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcy(t,v.e?u:v.gb03(),u)
else s=A.k6(!0,u,u,new B.dPr(v,t),s,u,D.br7,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayo.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bm(C.aE,t,t,0,C.c,t,C.vh,t,new A.b7(s,C.Y),t,t,t)
return A.dk(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cj,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vh,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bcy.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mB(new B.d1o(),new A.D(E.YC,A.v(A.a([A.mB(new B.d1p(),A.p(x,A.X(C.xZ,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ib,x,x,new A.bo(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dk(C.o0,D.fte,this.d,A.bm(C.aE,x,x,x,C.c,x,C.Yx,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AR,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.abH.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dC(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.ms(D.my))p=D.d9F
else{p=C.a.a0(p,"image/")||i.ms(D.PR)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoF()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.ms(D.my))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.E(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cb))
if(!(!o||i.ms(D.my)))l.push(A.fPC(C.aE,!1,j,j,j,!1,j,j,new B.d1L(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.nZ,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cb))
return A.mB(new B.d1M(),new A.D(C.e4,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Y6,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.YA.prototype={
R(){return new B.ayt()},
gdd(){return this.c}}
B.ayt.prototype={
a_(){this.a1()
this.xD()},
q(){B.hAI(this.e)
this.a2()},
xD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rj(o.c,o.d),$async$xD)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hAL(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hAK(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1I(s))
x=1
break}s.m(new B.d1J(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d1K(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xD,w)},
a1d(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rj(t.c,t.d),$async$a1d)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.ePZ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ah9(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1d)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1d,w)},
bX4(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.km(u,C.A,v,new B.d1G(w,t),C.fW,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d1H(w),C.fW,C.du,!0,v,!1,v,v)
else return C.bH
return A.uj(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0B(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BM,u,u,u,v.gb3T(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DY
else{q=v.r
if(q!=null)t=new A.D(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dk(C.BM,D.fcn,v.gb3T(),A.bm(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bX4()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yx.prototype={
R(){return new B.ayq(A.ahZ(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayq.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).ib(new B.d1l(v))
x.gcP5().ib(new B.d1m(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b2P
x.ib(new B.d1n(v))
v.xD()},
xD(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rj(p.c,p.d),$async$xD)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1e(s))
x=1
break}x=8
return A.b(s.d.BU(0,new A.a2H(r,s.a.d.c)),$async$xD)
case 8:if(s.c==null){x=1
break}s.m(new B.d1f(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1g(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xD,w)},
Z4(){var x=0,w=A.j(y.H),v=this,u
var $async$Z4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h2(0),$async$Z4)
case 5:x=3
break
case 4:x=6
return A.b(u.ig(0),$async$Z4)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Z4,w)},
aRS(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0B(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DY
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bFB,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NV,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aE,o,o,m,0,new B.d1h(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRS(p.w)+" / "+p.aRS(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bm(C.aE,o,o,o,o,D.eMv,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.y8:C.iW,o,o,o,o,o)
x=A.v(A.a([u,C.kx,t,x,C.d5,A.dk(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc53(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.D(C.tD,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pe.prototype={
R(){return new B.ayw()},
gdd(){return this.c}}
B.ayw.prototype={
a_(){this.a1()
this.P6()},
P6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fRS(o.c,o.d,new B.d1Z(s)),$async$P6)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2_(s))
x=1
break}s.e=r
q=O.hXu(r)
if(q==null){s.m(new B.d20(s))
x=1
break}s.d=q
q.aN(0,s.gaZK())
x=8
return A.b(q.ia(0).cM(0,C.qV),$async$P6)
case 8:if(s.c==null){x=1
break}s.m(new B.d21(s))
x=9
return A.b(q.pQ(0),$async$P6)
case 9:q.tb(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d22(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P6,w)},
cax(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d23(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CF(0,x.gaZK())
w=x.d
if(w!=null)w.q()
B.i6i(x.e)
x.a2()},
ada(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ada=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ_(u.c,u.d),$async$ada)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ada,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0B(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.oO,t,t,t,u.gc4Y(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ig(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DY
else{q=u.r
if(q!=null)s=new A.D(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahs(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zW(s,t),A.aE(t,A.CT(A.p(t,A.X(q?I.y8:C.iW,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d25(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YC.prototype={
R(){return new B.ayu(new A.cs(null,y.A))}}
B.ayu.prototype={
gcBq(){var x,w,v=this.a
if(v.e!==D.Ra)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcB5(){var x,w,v=this.a
if(v.e!==D.z2)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBq()
if(x!=null){v.Q8(x)
v.e=A.dv(R.F1,new B.d1V(v,x))}w=v.gcB5()
if(w!=null){v.Q7(w)
v.f=A.dv(C.fU,new B.d1W(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q7(d){return this.chx(d)},
chx(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoA(d),$async$Q7)
case 3:t=f
x=4
return A.b(B.c7l(d),$async$Q7)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d1N(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
Q8(d){return this.chy(d)},
chy(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fFu(d),$async$Q8)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAk(t),$async$Q8)
case 4:if(u.c==null){x=1
break}u.m(new B.d1O(u))
u.c.I(y.q).f.S(D.aNN)
case 1:return A.h(v,w)}})
return A.i($async$Q8,w)},
gc15(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc4Z(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CC()){t=u.c
if(t!=null)t.I(y.q).f.S(D.eT2)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c8(A.e9(new B.d1P(),!1,null,y.N)),$async$a1_)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAk(s),$async$a1_)
case 4:t=u.c
if(t!=null)t.I(y.q).f.S(D.aNN)
case 1:return A.h(v,w)}})
return A.i($async$a1_,w)},
a9_(d){return this.bGW(d)},
bGW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.d.aI(t,", "))),$async$a9_)
case 3:if(d.e!=null){t=d.I(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
ad8(d){return this.bGG(d)},
bGG(d){var x=0,w=A.j(y.H),v=this
var $async$ad8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fC(v.a.c)),$async$ad8)
case 2:if(d.e!=null)d.I(y.q).f.S(D.eQr)
return A.h(null,w)}})
return A.i($async$ad8,w)},
a0V(d){return this.coy(d)},
coy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anE(s.d,4),$async$a0V)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rP(r,"ngmy_doc_share_qr.png"),$async$a0V)
case 8:q=f
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0V,w)},
gaV1(){var x,w=this.a
if(w.e!==D.Hr)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b1(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b1(x,13))
return null},
a8X(d){return this.bGP(d)},
bGP(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaV1()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8X)
case 3:if(d.e!=null)d.I(y.q).f.S(D.eS2)
case 1:return A.h(v,w)}})
return A.i($async$a8X,w)},
ad9(){var x=0,w=A.j(y.H),v=this,u
var $async$ad9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ut(),$async$ad9)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$ad9,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0B(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hr&&i!==D.Ra&&i!==D.z2
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hr||t===D.Ra||t===D.z2?l:A.aH(l,l,l,l,C.kU,l,l,l,m.gaXW(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pH(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc15(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hr){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc4Z(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.he(D.bPJ,D.flu,new B.d1Q(m,d),l)],p))}if(m.a.e===D.Hr&&m.gaV1()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.he(D.bMg,D.fib,new B.d1R(m,d),l)],p))
if(m.a.e===D.z2){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.E0:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}if(m.a.e===D.Ra){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.E0:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l),C.ac,A.dk(D.bI3,D.fov,m.gcoW(),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oh(i,A.c8(v,w,new A.D(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.E(A.ey(N.BL,C.TD,new B.d1S(m,d),l),1),C.av,A.E(A.dk(C.yt,C.a7L,new B.d1T(m,d),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bH(C.zC,m.gaXW(),A.bm(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d1U(),y.C)}}
B.abF.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pH(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bH(C.zD,new B.d1d(d),x)],u),x,x,C.mR,v,x,x,x,x,D.fbo,x)}}
B.Yw.prototype={
R(){return new B.ayp(A.z1(C.xk,C.nC,C.u1))}}
B.ayp.prototype={
q(){this.d.q()
this.a2()},
aw1(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).O(t)
return}}},
B(d){var x=null
return A.c8(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fiF,x,x,x,1,x,!0),C.w,A.z0(this.d,C.bS,this.gaw0()),x,!1,!1,x,x)}}
B.YD.prototype={
R(){return new B.ayv(A.z1(C.xk,C.nC,C.u1))},
gdd(){return this.c}}
B.ayv.prototype={
bY7(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
af1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RH("text/plain"),$async$af1)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.S(D.eSX)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$af1,w)},
a9L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hma(p,!0),$async$a9L)
case 3:t=e
p=t==null
s=B.a6u(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.S(D.ePz)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9L,w)},
q(){this.d.q()
this.a2()},
aw1(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bY7(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ama,v,v,v,w.gbMk(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0q,v,v,v,w.gceX(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r3:P.Nb,v,v,v,v,v),v,v,v,new B.d1Y(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fpk,v,v,v,1,v,!0)
u=A.z0(w.d,C.bS,w.gaw0())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ebP],s),v),v,!1,!1,v,v)}}
B.bcz.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oy
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oy:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.YH,A.A(A.a([u,C.bf,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8R.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.O4.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.WD.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.O3.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.EG.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cig.prototype={}
B.EF.prototype={}
B.a8Q.prototype={}
B.asT.prototype={}
B.WE.prototype={}
var z=a.updateTypes(["az<~>()","R(jk)","n(jk)","Uk(Y)","~()","Yz(Y)","H(H,jk)","Pe(Y)","~(lV)","cq(EF)","az<jk?>(@)","Ui(Y)","Um(Y)","D(jk)","jk(@)","a4<n,@>(jk)","Yy(Y)","Uj(Y)","YA(Y)","Yx(Y)","YC(Y)","abF(Y)","ai<jk>()","YD(Y)","abH(Y,H)","Yw(Y)","a4<n,aC>(jk)","cq(WD)","cq(a8Q)","az<cq>(EF)"])
B.cic.prototype={
$1(d){var x=this.a
x.x=D.aL4
x.y.J(0,D.aL4)},
$S:69}
B.cid.prototype={
$1(d){var x=this.a
x.x=D.aL3
x.y.J(0,D.aL3)},
$S:69}
B.cie.prototype={
$1(d){var x=this.a
x.agm(A.aO4(d.data)).bA(new B.cib(x),y.b)},
$S:69}
B.cib.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cif.prototype={
$1(d){},
$S:69}
B.cii.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hFt(d.channel))},
$S:15}
B.cij.prototype={
$1(d){},
$S:15}
B.cik.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hYw(w.iceConnectionState)
x.cx=w
if($.h_E())switch(w.a){case 0:x.cy=D.aL9
break
case 1:x.cy=D.aLa
break
case 3:x.cy=D.aLb
break
case 5:x.cy=D.aL7
break
case 6:x.cy=D.aL8
break
case 7:x.cy=D.a5y
break
default:break}},
$S:155}
B.cil.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hYx(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:155}
B.cim.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i7M(w.signalingState)},
$S:155}
B.cin.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i61(w.connectionState)},
$S:155}
B.cio.prototype={
$1(d){},
$S:155}
B.cip.prototype={
$1(d){},
$S:15}
B.fiu.prototype={
$1(d){var x=y.F.a(new A.rF([],[]).py(d.target.result,!1)),w=C.xl.t(x.objectStoreNames,"blobs")
if(!w)C.xh.Kp(x,"blobs")},
$S:191}
B.fEU.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vM.fb(this.b)
$.eV.mn()
this.c.$1(d)},
$S:441}
B.fEW.prototype={
$1(d){return this.a.$1(B.hOq(this.b,this.c))},
$S:34}
B.fEV.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fET.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fF8.prototype={
$1(d){var x=this
return B.hbL(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fF9.prototype={
$1(d){var x=this
return B.hbL(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fka.prototype={
$1(d){var x=this
return B.c6X(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1w.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1t.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6X(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1v.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6X(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1u.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6X(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1y.prototype={
$4(d,e,f,g){var x=null
return A.jF(A.A(A.a([A.aH(x,x,x,x,D.bGF,x,x,x,new B.d1x(d),x,x,x,x,x,x),A.E(A.Er(D.PB,!0,x,C.a_t,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PB,x,g,C.ai3,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d1x.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fm9.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i8:C.c,r=A.m(28),q=A.p(v,D.blh,C.f,v,v,D.aZo,v,v,v,v,D.ahU,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bKO,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.D(C.Fe,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amp,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.de,new B.fm7(d),v),1),C.av,A.E(A.bH(D.fhc,new B.fm8(p,x,d),A.bm(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LQ,v,v,v,v),v)},
$S:58}
B.fm7.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fm8.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.S(D.eQG)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aB_(v,x))},
$S:0}
B.fmD.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i8:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bl7,C.f,w,w,D.b_O,w,w,w,w,D.ahU,w,w,1/0),new A.D(C.Fe,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fWP(u,"Organization name",C.FF,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fWP(u,"Access code",C.ne,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fWP(u,"Member password",H.Gb,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bH(D.fpp,new B.fmC(r,q,p,d),A.bm(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LQ,w,w,w,w),w)},
$S:58}
B.fmC.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.S(D.eQL)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEb(u,x,w))},
$S:0}
B.c6O.prototype={
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
p=C.a.a0(j,"http")?A.cw(j,0,null):s.b.aQ(j)
u=4
x=7
return A.b(A.v8(p,null).cM(0,C.XK),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bn(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c6U.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6V.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c6W.prototype={
$1(d){return d.b},
$S:z+2}
B.c6Q.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6R.prototype={
$1(d){return d.b},
$S:z+2}
B.c6P.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:13}
B.c6S.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c6T.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fF6.prototype={
$1(d){return new B.Ui(this.a,null)},
$S:z+11}
B.fF7.prototype={
$1(d){return new B.Um(this.a,this.b,this.c,null)},
$S:z+12}
B.dOl.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPu.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPv.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPw.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPt(x,d))},
$S:2}
B.dPt.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPx.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPy.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPz.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPA.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPB.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPC.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPF.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dPD.prototype={
$1(d){var x=this.a
return x.f?null:x.Z3()},
$S:2}
B.dPE.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ms(D.PR))s=C.tQ
else s=C.a.a0(s,"video/")||d.ms(D.my)?C.pX:D.akS
x=this.b.a
w=y.p
return new A.D(C.kN,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoF(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOm.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOn.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c6Y.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.c6Z.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.fFM.prototype={
$2(d,e){return e===this.a},
$S:332}
B.ffH.prototype={
$1(d){return J.k(d)},
$S:17}
B.fkm.prototype={
$1(d){var x=this.b
B.hMp(C.Fs.ga5y(this.a)).bA(x.gcEu(x),y.H)},
$S:118}
B.fkn.prototype={
$1(d){return this.a.d5(0,null)},
$S:118}
B.fko.prototype={
$0(){return null},
$S:11}
B.c7c.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fkp.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jk(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fol.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fiP.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fiQ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7h.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.my)},
$S:z+1}
B.fJS.prototype={
$1(d){return new B.Yy(this.a,null)},
$S:z+16}
B.d1s.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fJ()},
$S:8}
B.d1q.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d1r.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPs.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a06()},
$S:12}
B.dOQ.prototype={
$0(){var x=J.bDv(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOR.prototype={
$0(){var x=J.bDv(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOp.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOo(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dOo.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOq.prototype={
$0(){var x=J.bDv(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOv.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOu(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dOu.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPg.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPh.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dON.prototype={
$1(d){return new B.Uj(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HN(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Un(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tA(),$async$$0)
case 5:s=J.a6(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a0h(s.gM(t)),$async$$0)
case 8:case 7:r.hY(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOt.prototype={
$1(d){this.a.ab5(d,"No files selected.","Added")},
$S:441}
B.dOV.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dOU(),A.U(x).k("K<1,n>")))},
$S:0}
B.dOU.prototype={
$1(d){return d.a},
$S:z+2}
B.dOz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x0.c5().cR2(C.Zx,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jp(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.aa(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hY("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hY("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoz(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cm(l)){o.hY("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tA(),$async$$0)
case 9:o.hY("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPd.prototype={
$1(d){return new B.Pe(this.a.a.c,this.b,null)},
$S:z+7}
B.dPe.prototype={
$1(d){return new B.YA(this.a.a.c,this.b,null)},
$S:z+18}
B.dPf.prototype={
$1(d){return new B.Yx(this.a.a.c,this.b,null)},
$S:z+19}
B.dOL.prototype={
$1(d){return new B.Pe(this.a.a.c,this.b,null)},
$S:z+7}
B.dOM.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dP6.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HN(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6w(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hY("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ckX(),$async$$0)
case 5:x=6
return A.b(p.tA(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dP2(p),r),new B.dP3(),r.k("K<ak.E,n>")).c_(0,new B.dP4())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.e9(new B.dP5(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p0(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ut(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP2.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dP1(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dP1.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dP3.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dP4.prototype={
$1(d){return d.length!==0},
$S:3}
B.dP5.prototype={
$1(d){var x=this.a
return new B.YC(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dP7.prototype={
$1(d){return d.a},
$S:z+2}
B.dP8.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dP0.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoF(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ms(D.my)?C.tS:C.oL
p=!x||p.ms(D.my)?"Play video":"View"
return A.c_(A.bl(!0,new A.D(C.B2,A.v(A.a([q,o,t,C.aA,B.YB(!1,u,!1,w,p,new B.dOW(d),v),B.YB(!1,u,!1,C.jj,"Share via QR",new B.dOX(d),"Letters/numbers QR code"),B.YB(!1,u,!1,D.a_z,"Send to their Code",new B.dOY(d),"Enter someone else's personal code"),B.YB(!1,u,!1,C.hA,"Download / save",new B.dOZ(d),v),C.am,B.YB(!1,u,!0,C.e5,"Delete",new B.dP_(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kE,v,v,C.n),C.bd)},
$S:715}
B.dOW.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dOX.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dOY.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dOZ.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dP_.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dOw.prototype={
$1(d){return d.a},
$S:z+2}
B.dOx.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOy.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6y(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.G8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p0(s.c,s.f),$async$$0)
case 4:u.hY(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOs.prototype={
$1(d){var x=this.a
x.tB(new B.dOr(x,d,this.b),"Preparing\u2026")},
$S:441}
B.dOr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hY("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Un(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cm(s)){t.hY("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCq(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hY("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOO.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dOP.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fRV(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.G5(new B.dOE(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hY("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOF(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOG(s))
case 5:x=8
return A.b(r.b.ih(0,C.EZ,new B.dOH()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gam(t)){s.hY("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tA(),$async$$0)
case 9:s.hY("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOE.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOB(x,d,e))},
$S:128}
B.dOB.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOF.prototype={
$1(d){return new B.abF(this.a.a,null)},
$S:z+21}
B.dOG.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOH.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOJ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.I3(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6m(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZW(B.I3(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoz(new B.dOC(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cm(r)){if(B.fRU(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hY(q)
x=1
break}x=10
return A.b(s.tA(),$async$$0)
case 10:o=J.cE(r)
p=o.eL(r,new B.dOD()).gM(0)
s.hY(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOC.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOA(x,d,e))},
$S:128}
B.dOA.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOD.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.my)},
$S:z+1}
B.dOT.prototype={
$1(d){return new B.YD(this.a.a.c,null)},
$S:z+23}
B.dOS.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ_(u.a.c,v.b),$async$$0)
case 2:t.hY(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPc.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bl(!0,new A.D(C.B2,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kM,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.YB(!0,w,!1,C.ne,"My Code",new B.dP9(d),"Your personal code & QR \u2014 others send docs to you"),B.YB(!1,w,!1,D.a_z,"Send to their Code",new B.dPa(this.a,d),"Enter someone else's 5-digit code + letter"),B.YB(!1,w,!1,S.yi,"Import backup",new B.dPb(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kE,x,x,C.n),C.bd)},
$S:715}
B.dP9.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dPa.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAP()},
$S:0}
B.dPb.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dPp.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Ic(D.PB,x,C.a_t,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cQ(C.d.gL(D.PB).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:694}
B.dPn.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPo.prototype={
$0(){this.a.ahk()
return null},
$S:0}
B.dPq.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dPr.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abH(e,w,v,this.b,x.e,x.c5_(w),new B.dPj(x,w),new B.dPk(x,v,w),new B.dPl(x,w),new B.dPm(x,w),null)},
$S:z+24}
B.dPj.prototype={
$0(){this.a.aez(this.b)
return null},
$S:0}
B.dPk.prototype={
$0(){var x=this.a
return x.m(new B.dPi(x,this.b,this.c))},
$S:0}
B.dPi.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dPl.prototype={
$0(){this.a.Nw(this.b)
return null},
$S:0}
B.dPm.prototype={
$0(){this.a.ah7(this.b)
return null},
$S:0}
B.d1o.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d1p.prototype={
$3(d,e,f){return A.ec(C.A,f,e,null,null)},
$S:137}
B.d1M.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d1L.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.d1I.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1J.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d1K.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1G.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d1E(this.a),C.fW,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d1F(this.a))
return C.bH},
$S:136}
B.d1E.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1C(this.a))
return C.bH},
$S:193}
B.d1C.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1z(x))},
$S:8}
B.d1z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1F.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1B(x))},
$S:8}
B.d1B.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1H.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1D(this.a))
return C.bH},
$S:193}
B.d1D.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1A(x))},
$S:8}
B.d1A.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1l.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1k(x,d))},
$S:1740}
B.d1k.prototype={
$0(){return this.a.f=this.b===C.um},
$S:0}
B.d1m.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1j(x,d))},
$S:8}
B.d1j.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1n.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1i(x,d))},
$S:8}
B.d1i.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1e.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1f.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1g.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1h.prototype={
$1(d){return this.a.d.Mw(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d1Z.prototype={
$0(){var x=this.a.a
return B.rj(x.c,x.d)},
$S:1741}
B.d2_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d20.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d21.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d22.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d23.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d25.prototype={
$0(){var x=this.a
x.m(new B.d24(x))},
$S:0}
B.d24.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h2(0)
else x.pQ(0)},
$S:0}
B.d1V.prototype={
$1(d){return this.a.Q8(this.b)},
$S:12}
B.d1W.prototype={
$1(d){return this.a.Q7(this.b)},
$S:12}
B.d1N.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d1O.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d1P.prototype={
$1(d){return D.fPd},
$S:z+25}
B.d1U.prototype={
$2(d,e){if(d)B.Ut()},
$S:121}
B.d1Q.prototype={
$0(){return this.a.a9_(this.b)},
$S:0}
B.d1R.prototype={
$0(){return this.a.a8X(this.b)},
$S:0}
B.d1S.prototype={
$0(){return this.a.ad8(this.b)},
$S:0}
B.d1T.prototype={
$0(){return this.a.a0V(this.b)},
$S:0}
B.d1d.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d1Y.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pU(),$async$$0)
case 2:u.m(new B.d1X(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d1X.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7j.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.my)},
$S:z+1}
B.c7k.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7i.prototype={
$2(d,e){return this.bib(d,e)},
bib(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Uu(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fnY.prototype={
$1(d){if(d===D.a5x&&(this.a.a.a&30)===0)this.a.fP(0)},
$S:z+27}
B.fnZ.prototype={
$0(){},
$S:11}
B.fow.prototype={
bjL(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fcQ(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h6U(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjL(d,e)},
$S:542}
B.fov.prototype={
$1(d){var x=this
d.b=new B.fou(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fou.prototype={
$1(d){return this.bjK(d)},
bjK(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZ0(n,m),$async$$1)
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
x=J.z(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
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
return A.b(B.fcQ(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6v(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ays.prototype,"gcbS","PK",0)
x(v,"gccJ","IQ",0)
x(v,"gcce","xM",0)
x(v=B.aCm.prototype,"gc4U","ad6",0)
x(v,"gc4V","Z2",0)
x(v,"gcri","agP",0)
x(v=B.aCp.prototype,"gc4W","Z3",0)
x(v,"gcrj","a1e",0)
x(B.aCn.prototype,"gc4X","ad7",0)
x(B.ayr.prototype,"gc51","c52",4)
x(v=B.aCo.prototype,"gccf","a_a",0)
x(v,"gcpV","cpW",4)
x(v,"gb03","axp",0)
x(v,"gcsN","ahe",0)
x(v,"gbMM","X1",0)
x(v,"gc50","DZ",0)
x(B.ayt.prototype,"gb3T","a1d",0)
x(B.ayq.prototype,"gc53","Z4",0)
x(v=B.ayw.prototype,"gaZK","cax",4)
x(v,"gc4Y","ada",0)
x(v=B.ayu.prototype,"gcoW","a1_",0)
x(v,"gaXW","ad9",0)
w(B.ayp.prototype,"gaw0","aw1",8)
x(v=B.ayv.prototype,"gceX","af1",0)
x(v,"gbMk","a9L",0)
w(v,"gaw0","aw1",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cig,B.a8Q,B.asT,B.aB_,B.aEb,B.jk,B.abn,B.buq,B.EF,B.WE])
w(B.cih,B.cig)
w(B.b39,B.a8Q)
x(A.hU,[B.cic,B.cid,B.cie,B.cib,B.cif,B.cii,B.cij,B.cik,B.cil,B.cim,B.cin,B.cio,B.cip,B.fiu,B.fEU,B.fEW,B.fEV,B.fF8,B.fF9,B.fka,B.d1t,B.d1v,B.d1u,B.d1y,B.fm9,B.fmD,B.c6O,B.c6V,B.c6W,B.c6R,B.c6P,B.c6S,B.c6T,B.fF6,B.fF7,B.dPw,B.dPF,B.dPD,B.dPE,B.ffH,B.fkm,B.fkn,B.c7c,B.fkp,B.fol,B.fiP,B.fiQ,B.c7h,B.fJS,B.d1s,B.d1q,B.dPs,B.dOo,B.dOu,B.dON,B.dOt,B.dOU,B.dPd,B.dPe,B.dPf,B.dOL,B.dP2,B.dP1,B.dP3,B.dP4,B.dP5,B.dP7,B.dP8,B.dP0,B.dOw,B.dOx,B.dOs,B.dOO,B.dOF,B.dOD,B.dOT,B.dPc,B.dPp,B.dPq,B.d1o,B.d1p,B.d1M,B.d1L,B.d1G,B.d1E,B.d1C,B.d1F,B.d1H,B.d1D,B.d1l,B.d1m,B.d1n,B.d1h,B.d1V,B.d1W,B.d1P,B.c7j,B.c7k,B.fnY,B.fov,B.fou])
w(B.b3a,B.asT)
x(A.j6,[B.fET,B.d1w,B.d1x,B.fm7,B.fm8,B.fmC,B.dOl,B.dPu,B.dPv,B.dPt,B.dPx,B.dPy,B.dPz,B.dPA,B.dPB,B.dPC,B.dOm,B.dOn,B.fko,B.d1r,B.dOQ,B.dOR,B.dOp,B.dOq,B.dOv,B.dPg,B.dPh,B.dOK,B.dOV,B.dOz,B.dOM,B.dP6,B.dOW,B.dOX,B.dOY,B.dOZ,B.dP_,B.dOy,B.dOr,B.dOP,B.dOI,B.dOB,B.dOG,B.dOH,B.dOJ,B.dOA,B.dOS,B.dP9,B.dPa,B.dPb,B.dPn,B.dPo,B.dPj,B.dPk,B.dPi,B.dPl,B.dPm,B.d1I,B.d1J,B.d1K,B.d1z,B.d1B,B.d1A,B.d1k,B.d1j,B.d1i,B.d1e,B.d1f,B.d1g,B.d1Z,B.d2_,B.d20,B.d21,B.d22,B.d23,B.d25,B.d24,B.d1N,B.d1O,B.d1Q,B.d1R,B.d1S,B.d1T,B.d1d,B.d1Y,B.d1X,B.fnZ])
x(A.m6,[B.abG,B.N0,B.a8R,B.O4,B.WD,B.O3,B.EG])
x(A.ag,[B.Yz,B.Ui,B.Um,B.Uj,B.Yy,B.Uk,B.YA,B.Yx,B.Pe,B.YC,B.Yw,B.YD])
x(A.ah,[B.ays,B.aCm,B.aCp,B.aCn,B.ayr,B.aCo,B.ayt,B.ayq,B.ayw,B.ayu,B.ayp,B.ayv])
x(A.au,[B.ac8,B.ayo,B.bcy,B.abH,B.abF,B.bcz])
x(A.ki,[B.c6U,B.c6Q,B.c6Y,B.c6Z,B.fFM,B.dOE,B.dOC,B.dPr,B.d1U,B.c7i,B.fow])
x(A.iP,[B.bhU,B.bu4])})()
A.jW(b.typeUniverse,JSON.parse('{"b39":{"a8Q":[]},"b3a":{"asT":[]},"Yz":{"ag":[],"r":[]},"ays":{"ah":["Yz"]},"ac8":{"au":[],"r":[]},"Ui":{"ag":[],"r":[]},"Um":{"ag":[],"r":[]},"aCm":{"ah":["Ui"]},"aCp":{"ah":["Um"]},"bhU":{"iP":[]},"Uj":{"ag":[],"r":[]},"aCn":{"ah":["Uj"]},"Yy":{"ag":[],"r":[]},"Uk":{"ag":[],"r":[]},"abH":{"au":[],"r":[]},"YA":{"ag":[],"r":[]},"Yx":{"ag":[],"r":[]},"Pe":{"ag":[],"r":[]},"YC":{"ag":[],"r":[]},"abF":{"au":[],"r":[]},"Yw":{"ag":[],"r":[]},"YD":{"ag":[],"r":[]},"ayr":{"ah":["Yy"]},"bu4":{"iP":[]},"aCo":{"ah":["Uk"]},"ayo":{"au":[],"r":[]},"bcy":{"au":[],"r":[]},"ayt":{"ah":["YA"]},"ayq":{"ah":["Yx"]},"ayw":{"ah":["Pe"]},"ayu":{"ah":["YC"]},"ayp":{"ah":["Yw"]},"ayv":{"ah":["YD"]},"bcz":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u1"),k:x("Ls()"),m:x("bk<n,n>"),F:x("qW"),g:x("az<jk?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jk>"),w:x("O<+file,name(lv,n)>"),u:x("O<cQ>"),s:x("O<n>"),E:x("O<iP>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jk>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iA"),e:x("ibE"),af:x("DV"),U:x("jk"),b:x("cq"),C:x("aC"),aK:x("vX"),ab:x("EF"),br:x("asT"),v:x("WE"),N:x("n"),X:x("bo<N>"),Q:x("lG"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bX<ai<jk>>"),aW:x("bX<dD?>"),aY:x("bX<~>"),cx:x("abG"),b1:x("bg<ai<jk>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aB_"),bG:x("aEb"),q:x("mY"),B:x("ph<EF>"),c6:x("ph<a8R>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jk>?"),aL:x("ai<@>?"),h:x("a4<n,@>?"),l:x("jk?"),R:x("aC?"),c:x("WE?"),d:x("+answerQr,transfer(n,az<ai<jk>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N0,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abn?"),bk:x("aB_?"),ag:x("aEb?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aXI=new A.ay(C.aE,2,C.q,-1)
D.bTZ=new A.a8(C.a3,C.a7,C.x,C.a1u,null,null)
D.aZo=new A.o(null,null,null,C.m6,null,D.bTZ,C.n)
D.b_O=new A.o(null,null,null,C.m6,null,E.Go,C.n)
D.abw=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acK=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adF=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afa=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fcg=new A.x("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.fqk=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.d1T=x([D.fcg,C.am,D.fqk],y.p)
D.bkZ=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d1T,null)
D.fuz=new A.x("Create your organization",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fgt=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.dgN=x([D.fuz,C.am,D.fgt],y.p)
D.bl7=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dgN,null)
D.fqT=new A.x("Team Member sign-in",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fkf=new A.x("Enter the access code and password from your organization.",null,G.Dd,null,null,null,null,null,null,null,null,null)
D.deK=x([D.fqT,C.am,D.fkf],y.p)
D.blh=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.deK,null)
D.br7=new A.Q(16,10,16,28)
D.brf=new A.Q(16,14,16,4)
D.bss=new A.Q(20,0,20,16)
D.bsY=new A.Q(20,8,20,16)
D.ahU=new A.Q(24,22,24,20)
D.a_z=new A.a_(63394,"MaterialIcons",!1)
D.akS=new A.a_(63515,"MaterialIcons",!1)
D.bEB=new A.a_(983813,"MaterialIcons",!1)
D.bBQ=new A.a_(62867,"MaterialIcons",!1)
D.bFB=new A.ae(D.bBQ,44,C.c,null,null,null)
D.bGF=new A.ae(C.pN,null,C.ad,null,null,null)
D.bI3=new A.ae(C.iX,18,null,null,null,null)
D.bJK=new A.ae(D.a_z,26,C.c,null,null,null)
D.bKf=new A.ae(C.BE,null,null,null,null,null)
D.bKO=new A.ae(C.yk,null,null,null,null,null)
D.bLX=new A.ae(W.Nq,null,null,null,null,null)
D.bMg=new A.ae(C.hm,16,null,null,null,null)
D.bPJ=new A.ae(C.r7,16,null,null,null,null)
D.bFS=new A.ae(C.ne,null,null,null,null,null)
D.bQz=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLl=new A.ae(C.FF,null,null,null,null,null)
D.bQE=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bLl,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bGc=new A.ae(H.Gb,null,null,null,null,null)
D.bQP=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cDK=x([C.f9,C.aZ,C.aE],y.O)
D.bVS=new A.a8(C.ax,C.aC,C.x,D.cDK,null,null)
D.cDd=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PB=x([C.f9,C.aE],y.O)
D.PR=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.my=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d9F=x([C.pr,C.aE],y.O)
D.e0r={iceServers:0}
D.aFI={urls:0}
D.dkp=new A.bk(D.aFI,["stun:stun.l.google.com:19302"],y.m)
D.dko=new A.bk(D.aFI,["stun:stun1.l.google.com:19302"],y.m)
D.cTt=x([D.dkp,D.dko],A.ax("O<a4<n,n>>"))
D.djJ=new A.bk(D.e0r,[D.cTt],A.ax("bk<n,@>"))
D.Hr=new B.N0(0,"lanDirect")
D.R9=new B.N0(1,"cloudStash")
D.dvn=new B.N0(2,"inlineInstant")
D.Ra=new B.N0(3,"webrtcLink")
D.z2=new B.N0(4,"videoCloud")
D.fqj=new A.x("Receive file",null,C.nu,null,null,null,null,null,null,null,null,null)
D.ctk=x([E.amy,C.ab,D.fqj],y.p)
D.eIw=new A.cn(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.ctk,null)
D.e66=new A.D(C.ck,D.eIw,null)
D.f3s=new A.G(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a28,null,null,null)
D.fcO=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f3s,null,C.L,null,null,null,null,null,null,null)
D.e5o=new A.D(C.B7,D.fcO,null)
D.b42=new A.cr(C.A,null,null,D.e5o,null)
D.ebP=new A.cL(0,null,0,28,null,null,D.b42,null)
D.ec7=new B.a8R(0,"RTCDataChannelConnecting")
D.aL3=new B.a8R(1,"RTCDataChannelOpen")
D.aL4=new B.a8R(3,"RTCDataChannelClosed")
D.ec8=new B.EG(0,"RTCIceConnectionStateNew")
D.ec9=new B.EG(1,"RTCIceConnectionStateChecking")
D.eca=new B.EG(2,"RTCIceConnectionStateCompleted")
D.ecb=new B.EG(3,"RTCIceConnectionStateConnected")
D.ecc=new B.EG(4,"RTCIceConnectionStateCount")
D.ecd=new B.EG(5,"RTCIceConnectionStateFailed")
D.ece=new B.EG(6,"RTCIceConnectionStateDisconnected")
D.aL5=new B.EG(7,"RTCIceConnectionStateClosed")
D.aL6=new B.WD(0,"RTCIceGatheringStateNew")
D.ecf=new B.WD(1,"RTCIceGatheringStateGathering")
D.a5x=new B.WD(2,"RTCIceGatheringStateComplete")
D.a5y=new B.O3(0,"RTCPeerConnectionStateClosed")
D.aL7=new B.O3(1,"RTCPeerConnectionStateFailed")
D.aL8=new B.O3(2,"RTCPeerConnectionStateDisconnected")
D.aL9=new B.O3(3,"RTCPeerConnectionStateNew")
D.aLa=new B.O3(4,"RTCPeerConnectionStateConnecting")
D.aLb=new B.O3(5,"RTCPeerConnectionStateConnected")
D.ecg=new B.O4(0,"RTCSignalingStateStable")
D.ech=new B.O4(1,"RTCSignalingStateHaveLocalOffer")
D.eci=new B.O4(2,"RTCSignalingStateHaveRemoteOffer")
D.ecj=new B.O4(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eck=new B.O4(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLc=new B.O4(5,"RTCSignalingStateClosed")
D.eMv=new A.at(160,48)
D.b5f=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eNZ=new A.a7(16,16,D.b5f,null)
D.ffT=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ePp=new A.b1(D.ffT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnd=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ePs=new A.b1(D.fnd,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvB=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.ePz=new A.b1(D.fvB,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ffu=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ePZ=new A.b1(D.ffu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fr2=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNN=new A.b1(D.fr2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsr=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eQr=new A.b1(D.fsr,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fx_=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eQG=new A.b1(D.fx_,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fv2=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new A.b1(D.fv2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fwc=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eRw=new A.b1(D.fwc,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.feb=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new A.b1(D.feb,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foZ=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eSn=new A.b1(D.foZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fi1=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eST=new A.b1(D.fi1,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fx5=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSX=new A.b1(D.fx5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fer=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eT2=new A.b1(D.fer,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fd8=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eTh=new A.b1(D.fd8,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fa5=new A.x("NGMY DOC SHARE",null,C.aP4,null,null,null,null,null,null,null,null,null)
D.fbo=new A.x("Show this to sender",null,C.k7,null,null,null,null,null,null,null,null,null)
D.fcn=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fgR=new A.x("Organization settings",null,C.cy,null,null,null,null,null,null,null,null,null)
D.fhc=new A.x("Sign in",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fib=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fiF=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.flu=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fob=new A.x("Send to their Doc Share",null,C.ns,null,null,null,null,null,null,null,null,null)
D.fov=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.foO=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fpk=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fpp=new A.x("Create portal",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fpN=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fsW=new A.x("Share files & videos\nwith a scan.",null,C.aP5,null,null,null,null,null,null,null,null,null)
D.fte=new A.x("Add files",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fPd=new B.Yw(null)
D.a8y=new B.abG(0,"docShare")
D.a8z=new B.abG(1,"gate")
D.U9=new B.abG(2,"gateNoIndividual")})();(function staticFields(){$.aMS=null
$.faC=function(){var x=y.N
return A.T(x,x)}()
$.FS=A.T(y.N,y.D)
$.afK=A.T(y.N,A.ax("lv"))
$.Qu=A.T(y.N,y.D)
$.fb9=A.T(y.N,A.ax("abn"))
$.c7b=A.T(y.S,A.ax("buq"))
$.h6T=1
$.hUk=null
$.hUj=null
$.hLO=null
$.fX0=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ic8","ho2",()=>new B.cih())
x($,"ia3","h_E",()=>C.a.t(A.bu(A.bu(A.bu(A.Gs(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["d1RQt2YdoJjdILKoZwhBr9vsTns="]=a.current})($__dart_deferred_initializers__);