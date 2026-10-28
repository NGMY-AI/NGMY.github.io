((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cis:function cis(){},
hGj(d){var x=null,w=new B.b3e(d,D.edy,new A.pj(x,x,y.c6),new A.pj(x,x,y.B))
w.bwP(d)
return w},
b3e:function b3e(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cin:function cin(d){this.a=d},
cio:function cio(d){this.a=d},
cip:function cip(d){this.a=d},
cim:function cim(d){this.a=d},
ciq:function ciq(d){this.a=d},
hGk(d,e){var x=y.N
x=new B.b3f(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwQ(d,e)
return x},
b3f:function b3f(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cit:function cit(d){this.a=d},
ciu:function ciu(d){this.a=d},
civ:function civ(d){this.a=d},
ciw:function ciw(d){this.a=d},
cix:function cix(d){this.a=d},
ciy:function ciy(d){this.a=d},
ciz:function ciz(d){this.a=d},
ciA:function ciA(d){this.a=d},
fXn(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yw.LD(x,"ngmy_doc_share_v1",new B.fj_(),1)},
hMT(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QO(d,e){return B.i15(d,e)},
i15(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fXn():o,$async$QO)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mG(s,"blobs","readwrite")
C.iE.mi(J.mE(q,"blobs"),r,d)
x=8
return A.b(J.pt(q),$async$QO)
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
return A.i($async$QO,w)},
QN(d){return B.i14(d)},
i14(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fXn():o,$async$QN)
case 7:s=f
r=J.mG(s,"blobs","readonly")
x=8
return A.b(C.iE.zo(J.mE(r,"blobs"),d),$async$QN)
case 8:q=f
x=9
return A.b(J.pt(r),$async$QN)
case 9:o=B.hMT(q)
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
return A.i($async$QN,w)},
ags(d){return B.i13(d)},
i13(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ags=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMZ
x=7
return A.b(p==null?$.aMZ=B.fXn():p,$async$ags)
case 7:s=f
r=J.mG(s,"blobs","readwrite")
C.iE.Fz(J.mE(r,"blobs"),d)
x=8
return A.b(J.pt(r),$async$ags)
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
return A.i($async$ags,w)},
fj_:function fj_(){},
hPg(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnM(w,v))}return u},
hmg(d,e){var x,w={},v=A.aVl("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fFA(w,v,e)
C.vS.yi(v,"change",new B.fFC(w,v,!1))
C.vS.yi(v,"cancel",new B.fFB(w))
$.eV.mp()
v.click()
A.bN(C.agc,new B.fFz(w),y.H)},
fFA:function fFA(d,e,f){this.a=d
this.b=e
this.c=f},
fFC:function fFC(d,e,f){this.a=d
this.b=e
this.c=f},
fFB:function fFB(d){this.a=d},
fFz:function fFz(d){this.a=d},
CN(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTd()?3:4
break
case 3:x=5
return A.b(B.hhp(e,d,s,!0,!1,f,g,h,!1,i),$async$CN)
case 5:x=1
break
case 4:x=6
return A.b(B.Qs(d,s,f,g,h,i),$async$CN)
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
return A.b(B.Id(s,d),$async$CN)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fer(s,d),$async$CN)
case 14:x=12
return A.b(r.hhp(q,p,o,n,m,l,k,j,a1,i),$async$CN)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c5(A.e8(new B.fFP(s,i,d,f,g,h),!1,null,y.H)),$async$CN)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c5(A.e8(new B.fFQ(s,i,d,f,g,h),!1,null,y.H)),$async$CN)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CN,w)},
Qs(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qs=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYZ(e),$async$Qs)
case 3:u=k
x=4
return A.b(B.aow(d,e,!1),$async$Qs)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Id(e,d),$async$Qs)
case 7:if(k){v=D.a8M
x=1
break}x=8
return A.b(B.Ur(e),$async$Qs)
case 8:v=t?D.Uf:D.a8N
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYX(d,e)){v=D.a8M
x=1
break}x=11
return A.b(B.Ur(e),$async$Qs)
case 11:v=t?D.Uf:D.a8N
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fSz(d,e)){v=D.a8M
x=1
break}x=14
return A.b(B.Ur(e),$async$Qs)
case 14:v=D.Uf
x=1
break
case 13:v=t?D.Uf:D.a8N
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qs,w)},
fer(d,e){var x=0,w=A.j(y.y),v
var $async$fer=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYX(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYZ(d),$async$fer)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fer,w)},
hhp(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c5(A.e8(new B.fkO(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hcx(d,e,f,g,h,i,j){return new B.YE(e,j,d,g,h,i,f,null)},
fmK(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fmK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fmN(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fmK)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmK,w)},
fne(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fne=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fng(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fne)
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
return A.i($async$fne,w)},
fXw(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fya(d,e){var x=0,w=A.j(y.H),v
var $async$fya=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ur(e),$async$fya)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eK()
case 1:return A.h(v,w)}})
return A.i($async$fya,w)},
fFP:function fFP(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFQ:function fFQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abJ:function abJ(d,e){this.a=d
this.b=e},
fkO:function fkO(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YE:function YE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayz:function ayz(){this.c=this.a=this.d=null},
d1K:function d1K(d,e){this.a=d
this.b=e},
d1H:function d1H(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1M:function d1M(){},
d1L:function d1L(d){this.a=d},
acb:function acb(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aB6:function aB6(d,e){this.a=d
this.b=e},
aEi:function aEi(d,e,f){this.a=d
this.b=e
this.c=f},
fmN:function fmN(d,e,f){this.a=d
this.b=e
this.c=f},
fmL:function fmL(d){this.a=d},
fmM:function fmM(d,e,f){this.a=d
this.b=e
this.c=f},
fng:function fng(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fnf:function fnf(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6X(d,e,f,g,h){return B.hBd(d,e,f,g,h)},
hBd(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iL(r.dt(d,new B.c6Y(s,e,h,g,f,q),y.g),y.l),$async$c6X)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gS(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6X,w)},
aYU(d,e,f,g,h){return B.hBe(d,e,f,g,h)},
hBe(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYU=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atP("GET",d)
o=A.fP1()
if(o==null)o=new A.Lw(A.a([],y.W))
x=7
return A.b(o.eU(0,s).cM(0,C.F2),$async$aYU)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.C7(),$async$aYU)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bs(q,h,o,e,f,"Received via QR")
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
return A.i($async$aYU,w)},
aYT(d){return B.hBb(d)},
hBb(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.va(d,null).cM(0,C.nU),$async$aYT)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aH(0,A.ix(A.iw(p.e)).ca(0,p.w),null)
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
return A.i($async$aYT,w)},
c6W(d){return B.hBc(d)},
hBc(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.va(d,null).cM(0,C.pM),$async$c6W)
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
return A.i($async$c6W,w)},
c6Y:function c6Y(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jn:function jn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ib(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hBj(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ib(C.a.b2(u,v.length))}return null},
hBk(d){var x=B.Ib(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hBf(){var x,w=$.pq(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fZ(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a6n(d){return B.hBg(d)},
hBg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f3(d,null,!1,C.bH),$async$a6n)
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
return A.i($async$a6n,w)},
a6o(d,e){return B.hBh(d,e)},
hBh(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6o=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hE(d,e,!1,!1,C.cH,null),$async$a6o)
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
return A.i($async$a6o,w)},
Br(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Br)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Ib(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6p(r),$async$Br)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6n("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Br)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Ib(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Br)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hBf()
x=14
return A.b(B.a6p(m),$async$Br)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6o("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Br)
case 15:k=f
x=16
return A.b(B.a6o("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Br)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Br)
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
return A.i($async$Br,w)},
a6p(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Ib(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6n("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6p)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6p,w)},
a6q(d,e,f,g){return B.hBl(d,e,f,g)},
hBl(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6q=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ib(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6p(r),$async$a6q)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c73())>1048576||g.b4(d,new B.c74())){v=B.Eh(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a6B("myCode",d,a0),$async$a6q)
case 4:u=a3
try{t=C.R.aH(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Eh(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZ1(u,g.gM(d),a0),$async$a6q)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pq().aC(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c75(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYV(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6q)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6q,w)},
Eh(d,e,f,g,h){return B.hBi(d,e,f,g,h)},
hBi(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eh=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eh)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cG(a6)
k=l.cI(a6,0,new B.c7_())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pq().aC(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aC(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gS(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.If(a9,q)
a0=new A.K6(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Eh)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eY().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oT(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9Y(a1.a,a4,"media",a1.d,a2).wV(m,n,new A.Dz(!0,q.c)),$async$Eh)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Eh)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPs(r),$async$Eh)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c70(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYV(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Eh)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPs(r),$async$Eh)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Eh,w)},
aYV(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6n(t),$async$aYV)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c6Z(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6o(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYV,w)},
N6(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$N6=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6n("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$N6)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gS(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aYW(k,a0),$async$N6)
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
return A.b(B.aZ0(h),$async$N6)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Uy(g,a0),$async$N6)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a1(r,new B.c71(),q),n)
d=A.C(new A.a1(r,new B.c72(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6o("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$N6)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$N6,w)},
aYW(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
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
break}i=B.i4S(k,j)
C.d.v(s,i)
x=5
return A.b(B.CL(l,m,"Received via My Code",t,e,i),$async$aYW)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPs(s),$async$aYW)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYW,w)},
c73:function c73(){},
c74:function c74(){},
c75:function c75(){},
c7_:function c7_(){},
c70:function c70(){},
c6Z:function c6Z(){},
c71:function c71(){},
c72:function c72(){},
fFM(d,e){var x=0,w=A.j(y.H)
var $async$fFM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c5(A.e8(new B.fFN(e),!1,null,y.H)),$async$fFM)
case 2:return A.h(null,w)}})
return A.i($async$fFM,w)},
bCv(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c5(A.e8(new B.fFO(g,e,f),!1,null,y.y)),$async$bCv)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCv,w)},
fFN:function fFN(d){this.a=d},
fFO:function fFO(d,e,f){this.a=d
this.b=e
this.c=f},
Uo:function Uo(d,e){this.c=d
this.a=e},
aCt:function aCt(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOw:function dOw(d,e){this.a=d
this.b=e},
Us:function Us(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCw:function aCw(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPF:function dPF(d){this.a=d},
dPG:function dPG(d){this.a=d},
dPH:function dPH(d){this.a=d},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPK:function dPK(d,e){this.a=d
this.b=e},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d){this.a=d},
dPQ:function dPQ(){},
dPO:function dPO(d){this.a=d},
dPP:function dPP(d,e){this.a=d
this.b=e},
bhZ:function bhZ(){},
Up:function Up(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCu:function aCu(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOx:function dOx(d){this.a=d},
dOy:function dOy(d){this.a=d},
fSA(d){var x=d.hP
if(x>=0)return C.o.N(x)
return 10},
hBn(d){var x=d.kF
if(x>=0)return x
return 4.99},
hBm(d){var x=d.lm,w=y.N
w=x.j0(x,new B.c77(),w,w)
return w},
h7B(d){var x=d.kG,w=y.N
w=x.j0(x,new B.c78(),w,w)
return w},
aYZ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYZ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aYZ)
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
return A.i($async$aYZ,w)},
a6s(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a6s)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a6s)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6s,w)},
Ur(d){var x=0,w=A.j(y.H),v,u
var $async$Ur=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Ur)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ur)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ur,w)},
fSz(d,e){var x,w,v
if(B.hBn(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hBm(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYX(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h7B(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h7C(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h7B(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bQ(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kG=w},
aox(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aox=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aox)
case 7:s=f
r=A.t(p)
r=A.f7(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aox,w)},
aoy(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aox(d),$async$aoy)
case 3:u=f
x=5
return A.b(A.aA(),$async$aoy)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoy,w)},
aow(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aow=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fSA(d)
if(u<=0){v=!1
x=1
break}if(B.fSz(d,e)){v=!1
x=1
break}x=3
return A.b(B.aox(e),$async$aow)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aow,w)},
aYY(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Id(e,d),$async$aYY)
case 3:if(g){v=-1
x=1
break}u=B.fSA(d)
if(u<=0){v=-1
x=1
break}if(B.fSz(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aox(e),$async$aYY)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYY,w)},
c7a(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Id(e,d),$async$c7a)
case 3:if(h){v=!1
x=1
break}v=B.aow(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7a,w)},
c79(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c79=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c7a(d,u,i.gTd()),$async$c79)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c79,w)},
a6r(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6r=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gTd()){v=!0
x=1
break}if(B.aYX(d,u)){v=!0
x=1
break}x=5
return A.b(A.lf(u,C.RC),$async$a6r)
case 5:x=k?3:4
break
case 3:B.h7C(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6r)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kU(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.RC,"Doc Share for Organizations"),$async$a6r)
case 7:if(!k){v=!1
x=1
break}B.h7C(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6r)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
c77:function c77(){},
c78:function c78(){},
fGp(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fGp=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fGp)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fb7.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fb7.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGp,w)},
i79(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fb7.bo($.fb7,new B.fGr(d))},
fGr:function fGr(d){this.a=d},
fcx(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fcx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hO([d],f))
s.toString
u=A.n5(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jf,null,y.H),$async$fcx)
case 3:C.zU.fc(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcx,w)},
afj(d,e,f){var x=0,w=A.j(y.H),v
var $async$afj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fbF.n(0,d,new B.abq(A.bn(e,!0,v)))
x=3
return A.b(A.aA(),$async$afj)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afj)
case 2:return A.h(null,w)}})
return A.i($async$afj,w)},
afd(d){return B.hR5(d)},
hR5(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fbF.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$afd)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aH(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fgc(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abq(r)
$.fbF.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
Qi(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FZ.n(0,d,u)
x=3
return A.b(B.QO(d,u),$async$Qi)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
aNj(d){return B.hR3(d)},
hR3(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FZ.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QN(d),$async$aNj)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.FZ.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aNj)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cG.aJ(r)
x=!J.cn(q)?9:10
break
case 9:B.Qi(d,q)
x=11
return A.b(J.hF(s,d),$async$aNj)
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
return A.i($async$aNj,w)},
hNf(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ce(A.zV(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ce(d)),y.K)
return A.f8(null,y.K)},
a15(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a15=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fl_(r,t),!1,s)
A.fI(r,"error",new B.fl0(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ii(0,C.LN,new B.fl1())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a15,w)},
aND(d,e,f){return B.hTk(d,e,f)},
hTk(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aND=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a15(i),$async$aND)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QO(o,p),$async$aND)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afj(k,j,s),$async$aND)
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
return A.i($async$aND,w)},
aNC(d,e,f){return B.hTj(d,e,f)},
hTj(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNC=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aND(d,e,f),$async$aNC)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a15(f),$async$aNC)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FZ.n(0,s,r)
$.Qz.n(0,s,r)
x=11
return A.b(B.Qi(s,r),$async$aNC)
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
return A.i($async$aNC,w)},
Bs(d,e,f,g,h,i){return B.hBw(d,e,f,g,h,i)},
hBw(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bs=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aC(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aZ4(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qi(s,d),$async$Bs)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Bs)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcw().aJ(d)),$async$Bs)
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
return A.b(B.Aw(e),$async$Bs)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.Ga(e,j),$async$Bs)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bs,w)},
Ut(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ut=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Aw(d),$async$Ut)
case 3:t=a1
s=e.length,r=J.cG(t),q=0
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
k=B.h7E(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZ4(),null)
$.afM.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a15(o),$async$Ut)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.FZ.n(0,h,g)
$.Qz.n(0,h,g)
B.Qi(h,g)
x=9
break
case 10:x=11
return A.b(B.aNC(d,m,o),$async$Ut)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Ga(d,t),$async$Ut)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ut,w)},
fSE(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fSE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h7E(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Ie(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.Bs(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSE,w)},
Ie(d,e,f,g,h,i){return B.hBv(d,e,f,g,h,i)},
hBv(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Ie=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.K6(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Ie)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.cn(m)){x=6
break}J.h0(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rl(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QO(k,l),$async$Ie)
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
return A.b(j.a7(0),$async$Ie)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QO(k,new Uint8Array(A.ce(n))),$async$Ie)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afj(r,q,g),$async$Ie)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZ4(),null)
x=17
return A.b(B.Aw(d),$async$Ie)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.Ga(d,e),$async$Ie)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ie,w)},
Uv(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Uv=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afM.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a15(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afd(s),$async$Uv)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QN(u[o]),$async$Uv)
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
v=A.zV(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qz.h(0,s)
if(i==null)i=$.FZ.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rl(d,e),$async$Uv)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.Qz.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zV(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uv,w)},
h7E(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rl(d,e){return B.hBx(d,e)},
hBx(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rl=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qz.h(0,f)
if(e==null)e=$.FZ.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.afM.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a15(s),$async$rl)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.FZ.n(0,f,r)
$.Qz.n(0,f,r)
B.Qi(f,r)
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
return A.b(B.afd(f),$async$rl)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axm(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QN(g[l]),$async$rl)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.J(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ano()
if(!C.aH.gam(r)){$.FZ.n(0,f,r)
$.Qz.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNj(f),$async$rl)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.Qz.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Uv(a0,a1,0,g),$async$rl)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.ce(i))
$.FZ.n(0,f,h)
$.Qz.n(0,f,h)
B.Qi(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rl,w)},
hBA(d){var x,w,v=$.afM.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hBB(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hBy(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoE(d,e,f,g,h){return B.hBz(d,e,f,g,h)},
hBz(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aoE=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afM.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a15(s),$async$aoE)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rl(g,e),$async$aoE)
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
return A.b(n.ia(d).wV(h,r,new A.Dz(!0,e.c)),$async$aoE)
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
return A.i($async$aoE,w)},
h7G(d,e,f,g,h){var x,w,v,u,t=$.h7F
$.h7F=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7l.n(0,t,new B.buv(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axm(u)))
return t},
fSF(d){var x=0,w=A.j(y.H)
var $async$fSF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSF,w)},
If(d,e){var $async$If=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afM.h(0,h)
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
return A.q1(B.Uv(d,e,p,o<q?o:q),$async$If,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q1(A.Fw(n),$async$If,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q1(B.afd("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$If,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q1(B.QN(h[l]),$async$If,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q1(A.Fw(k),$async$If,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q1(B.rl(d,e),$async$If,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q1(A.Fw(A.zV(j,p,o<i?o:i)),$async$If,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q1(null,0,w)
case 2:return A.q1(t.at(-1),1,w)}})
var x=0,w=A.hgi($async$If,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hi7(w)},
aZ6(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZ6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7l.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4_(),$async$aZ6)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ6,w)},
Uu(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Uu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7l.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4_(),$async$Uu)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afj(r.c,u,r.z),$async$Uu)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZ4(),null)
u=r.a
x=5
return A.b(B.Aw(u),$async$Uu)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.Ga(u,s),$async$Uu)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uu,w)},
a6y(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c7l.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ags(u[s]),$async$a6y)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6y,w)},
c7n(d,e,f){var x=0,w=A.j(y.H)
var $async$c7n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzx(d,e,f),$async$c7n)
case 2:return A.h(null,w)}})
return A.i($async$c7n,w)},
c7o(d,e,f){var x=0,w=A.j(y.H)
var $async$c7o=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzy(d,e,f),$async$c7o)
case 2:return A.h(null,w)}})
return A.i($async$c7o,w)},
Ei(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ei=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Aw(d),$async$Ei)
case 2:p=g
J.np(p,new B.c7m(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FZ.W(0,v)
$.afM.W(0,e)
x=3
return A.b(B.afd(v),$async$Ei)
case 3:u=g
$.fbF.W(0,v)
x=4
return A.b(A.aA(),$async$Ei)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Ei)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Ei)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ags(s[q]),$async$Ei)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ags(v),$async$Ei)
case 13:x=14
return A.b(B.Ga(d,p),$async$Ei)
case 14:return A.h(null,w)}})
return A.i($async$Ei,w)},
aZ5(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZ5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rl(d,e),$async$aZ5)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fcx(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ5,w)},
Aw(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Aw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Aw)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aH(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fl2(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Aw,w)},
Ga(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Ga=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Ga)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fp1(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$Ga)
case 3:return A.h(null,w)}})
return A.i($async$Ga,w)},
bzx(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aw(d),$async$bzx)
case 3:u=h
t=J.cG(u)
s=t.bd(u,new B.fjs(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCX(f))
x=4
return A.b(B.Ga(d,u),$async$bzx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzx,w)},
bzy(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzy=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aw(d),$async$bzy)
case 3:u=h
t=J.cG(u)
s=t.bd(u,new B.fjt(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cGy(f))
x=4
return A.b(B.Ga(d,u),$async$bzy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzy,w)},
abq:function abq(d){this.a=d},
fgc:function fgc(){},
fl_:function fl_(d,e){this.a=d
this.b=e},
fl0:function fl0(d){this.a=d},
fl1:function fl1(){},
c7m:function c7m(d){this.a=d},
buv:function buv(d,e,f,g,h,i,j,k,l){var _=this
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
fl2:function fl2(){},
fp1:function fp1(){},
fjs:function fjs(d){this.a=d},
fjt:function fjt(d){this.a=d},
a6z(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c7r())?3:4
break
case 3:x=5
return A.b(B.aZ7(d,e),$async$a6z)
case 5:u=g
if(u!=null){t=u.c
B.N8(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gK(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.aZ2(s),$async$a6z)
case 10:case 9:if(g){v=new A.PH(1,D.Rf,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Uw(d,e),$async$a6z)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UB(!0,!0,d,e),$async$a6z)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N8(d,D.z4,e,t)
v=new A.PH(p,D.z4,t)
x=1
break}v=B.c7q(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6z,w)},
Uw(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Uw=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6B(null,d,e),$async$Uw)
case 3:p=g
try{u=C.R.aH(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZ1(p,d.length,e),$async$Uw)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c7o(e,C.d.gK(d).a,r.b),$async$Uw)
case 7:case 6:q=r.a
x=8
return A.b(B.N8(d,D.Rf,e,q),$async$Uw)
case 8:v=new A.PH(d.length,D.Rf,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uw,w)},
Ux(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ux=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mu(D.mA)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6A(d,e),$async$Ux)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7j(s,d,e,t),$async$Ux)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZ2(t),$async$Ux)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rl(e,d),$async$Ux)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Uw(A.a([d],y.r),e),$async$Ux)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ux,w)},
Uz(){var x=0,w=A.j(y.H)
var $async$Uz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fSy(),$async$Uz)
case 2:x=3
return A.b(B.aPJ(),$async$Uz)
case 3:return A.h(null,w)}})
return A.i($async$Uz,w)},
a6A(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZ4()
x=3
return A.b(B.c7n(e,d.a,u),$async$a6A)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
N8(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N8=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Rf&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6A(p,f),$async$N8)
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
return A.b(B.c7i(o,p,u,f),$async$N8)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7j(o,p,f,t),$async$N8)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7h(o,u,p,f),$async$N8)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N8,w)},
aZ7(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZ7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7p(e,d),$async$aZ7)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UB(!1,!0,d,e),$async$aZ7)
case 4:u=g
if(u!=null){t=u.b
v=new A.PH(u.a,D.z4,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ7,w)},
c7p(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Uv(d,s,0,1),$async$c7p)
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
return A.i($async$c7p,w)},
c7q(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6B(null,d,e),$async$c7q)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h7D(u)
if(t.length>800){v=null
x=1
break}v=new A.PH(d.length,D.dwI,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7q,w)},
aoF(d,e,f){return B.hBE(d,e,f)},
hBE(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoF=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mF(g,1)
x=B.fSD(g)?3:4
break
case 3:x=5
return A.b(B.c7k(g),$async$aoF)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mF(g,13))
try{k=B.Ej(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mF(g,13))
u=9
x=12
return A.b(B.aZ0(q),$async$aoF)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uy(p,a0)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fSC(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Uy(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.Ig(C.a.i(J.mF(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.Ig(C.a.i(J.mF(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Ig(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Uy(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aoF,w)},
Ig(d,e,f){return B.hBC(d,e,f)},
hBC(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Ig=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cw(A.t(s)+"/manifest.json",0,null)
q=A.cw(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYT(r),$async$Ig)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYT(A.cw(s,0,null)),$async$Ig)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6X(o,r,a1,n,a2),$async$Ig)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c6W(q),$async$Ig)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Uy(l,a2),$async$Ig)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cn(m)?null:m
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
return A.i($async$Ig,w)},
a6B(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6B=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rl(f,r),$async$a6B)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcw().aJ(q)],t,s))
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
return A.i($async$a6B,w)},
Uy(d,e){return B.hBD(d,e)},
hBD(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Uy=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aH(0,a2,null)
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
break}m=e.gS(e)
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
return A.b(B.Bs(i,a3,d,k,l,o),$async$Uy)
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
return A.i($async$Uy,w)},
N7:function N7(d,e){this.a=d
this.b=e},
c7r:function c7r(){},
a0G(d){var x=A.P(d).ax.a===C.I,w=x?D.adS:D.abK,v=x?D.afl:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acW:C.aL
return new A.aFw([w,s,v,u,t,x?C.fb:C.bT])},
hmZ(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fKx(e),d,null,!0,!0,y.N)},
c76(d,e,f,g,h,i,j,k,l){return new B.Uq(e,l,d,f,k,j,g,h,i,null)},
YG(d,e,f,g,h,i,j){return new B.bcE(g,h,j,e,i,d,f,null)},
fKx:function fKx(d){this.a=d},
YD:function YD(d,e){this.c=d
this.a=e},
ayy:function ayy(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1G:function d1G(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1F:function d1F(d){this.a=d},
bu9:function bu9(){},
Uq:function Uq(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCv:function aCv(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPD:function dPD(d){this.a=d},
dP0:function dP0(d,e){this.a=d
this.b=e},
dP1:function dP1(d,e){this.a=d
this.b=e},
dOA:function dOA(d,e,f){this.a=d
this.b=e
this.c=f},
dOz:function dOz(d){this.a=d},
dOB:function dOB(d,e){this.a=d
this.b=e},
dOG:function dOG(d,e,f){this.a=d
this.b=e
this.c=f},
dOF:function dOF(d){this.a=d},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d){this.a=d},
dOY:function dOY(d,e,f){this.a=d
this.b=e
this.c=f},
dOV:function dOV(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOE:function dOE(d){this.a=d},
dP5:function dP5(d){this.a=d},
dP4:function dP4(){},
dOK:function dOK(d){this.a=d},
dPo:function dPo(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPq:function dPq(d,e){this.a=d
this.b=e},
dOW:function dOW(d,e){this.a=d
this.b=e},
dOX:function dOX(d,e){this.a=d
this.b=e},
dPh:function dPh(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPc:function dPc(d){this.a=d},
dPe:function dPe(){},
dPf:function dPf(){},
dPg:function dPg(d,e){this.a=d
this.b=e},
dPi:function dPi(){},
dPj:function dPj(d){this.a=d},
dPb:function dPb(d,e){this.a=d
this.b=e},
dP6:function dP6(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d){this.a=d},
dPa:function dPa(d){this.a=d},
dOH:function dOH(){},
dOI:function dOI(d){this.a=d},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOC:function dOC(d,e,f){this.a=d
this.b=e
this.c=f},
dOZ:function dOZ(d){this.a=d},
dP_:function dP_(d,e,f){this.a=d
this.b=e
this.c=f},
dOT:function dOT(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dOM:function dOM(d,e,f){this.a=d
this.b=e
this.c=f},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOS:function dOS(){},
dOU:function dOU(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dOL:function dOL(d,e,f){this.a=d
this.b=e
this.c=f},
dOO:function dOO(){},
dP3:function dP3(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPk:function dPk(d){this.a=d},
dPl:function dPl(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPy:function dPy(d){this.a=d},
dPz:function dPz(d){this.a=d},
dPB:function dPB(){},
dPC:function dPC(d,e){this.a=d
this.b=e},
dPu:function dPu(d,e){this.a=d
this.b=e},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPt:function dPt(d,e,f){this.a=d
this.b=e
this.c=f},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e){this.a=d
this.b=e},
ayv:function ayv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcD:function bcD(d,e,f){this.c=d
this.d=e
this.a=f},
d1C:function d1C(){},
d1D:function d1D(){},
abK:function abK(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d2_:function d2_(){},
d1Z:function d1Z(d){this.a=d},
YF:function YF(d,e,f){this.c=d
this.d=e
this.a=f},
ayA:function ayA(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d,e,f){this.a=d
this.b=e
this.c=f},
d1Y:function d1Y(d,e){this.a=d
this.b=e},
d1U:function d1U(d,e){this.a=d
this.b=e},
d1S:function d1S(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
d1N:function d1N(d){this.a=d},
d1T:function d1T(d){this.a=d},
d1P:function d1P(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1R:function d1R(d){this.a=d},
d1O:function d1O(d){this.a=d},
YC:function YC(d,e,f){this.c=d
this.d=e
this.a=f},
ayx:function ayx(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1z:function d1z(d){this.a=d},
d1y:function d1y(d,e){this.a=d
this.b=e},
d1A:function d1A(d){this.a=d},
d1x:function d1x(d,e){this.a=d
this.b=e},
d1B:function d1B(d){this.a=d},
d1w:function d1w(d,e){this.a=d
this.b=e},
d1s:function d1s(d){this.a=d},
d1t:function d1t(d){this.a=d},
d1u:function d1u(d,e){this.a=d
this.b=e},
d1v:function d1v(d){this.a=d},
Pk:function Pk(d,e,f){this.c=d
this.d=e
this.a=f},
ayD:function ayD(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2c:function d2c(d){this.a=d},
d2d:function d2d(d){this.a=d},
d2e:function d2e(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2g:function d2g(d,e){this.a=d
this.b=e},
d2h:function d2h(d){this.a=d},
d2j:function d2j(d){this.a=d},
d2i:function d2i(d){this.a=d},
YH:function YH(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayB:function ayB(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d28:function d28(d,e){this.a=d
this.b=e},
d29:function d29(d,e){this.a=d
this.b=e},
d20:function d20(d,e,f){this.a=d
this.b=e
this.c=f},
d21:function d21(d){this.a=d},
d22:function d22(){},
d27:function d27(){},
d23:function d23(d,e){this.a=d
this.b=e},
d24:function d24(d,e){this.a=d
this.b=e},
d25:function d25(d,e){this.a=d
this.b=e},
d26:function d26(d,e){this.a=d
this.b=e},
abI:function abI(d,e){this.c=d
this.a=e},
d1r:function d1r(d){this.a=d},
YB:function YB(d){this.a=d},
ayw:function ayw(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
YI:function YI(d,e){this.c=d
this.a=e},
ayC:function ayC(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d2b:function d2b(d){this.a=d},
d2a:function d2a(d){this.a=d},
bcE:function bcE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hBF(){var x,w=$.pq(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fZ(v)},
N9(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$N9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$N9)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_video_relay_v1",null,!1,C.bH),$async$N9)
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
return A.i($async$N9,w)},
a6C(d){return B.hBG(d)},
hBG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6C)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hE("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6C)
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
return A.i($async$a6C,w)},
UA(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$UA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N9(),$async$UA)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dW(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6C(s),$async$UA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$UA,w)},
UB(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UB)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bn(f,!0,y.U)
else{t=A.U(f).k("a1<1>")
u=A.C(new A.a1(f,new B.c7t(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hBF()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.C(new A.K(u,new B.c7u(s),t),t.k("ak.E"))
x=6
return A.b(B.N9(),$async$UB)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6C(q),$async$UB)
case 7:x=8
return A.b(B.a6D(r,u,g,s),$async$UB)
case 8:v=new A.bod(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UB,w)},
aoG(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.N9(),$async$aoG)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoG,w)},
c7v(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N9(),$async$c7v)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7v,w)},
a6D(d,e,f,g){return B.hBH(d,e,f,g)},
hBH(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6D=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoE("media",r,new B.c7s(s,e,g),f,q),$async$a6D)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.UA(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6D)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.UA(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6D)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.UA(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6D)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6D,w)},
Ej(d,e,f){return B.hBI(d,e,f)},
hBI(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ej=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ej)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aoG(b3),$async$Ej)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kq,null,g),$async$Ej)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoG(b3),$async$Ej)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.N9(),$async$Ej)
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
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
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
b0=A.oT(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9Y(a8.a,b0,"media",a8.d,a9).Cs(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYU(k,n,o,s,b7),$async$Ej)
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
break}a7=g.gS(g)
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
a8=A.oT(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9Y(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ej)
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
a0=A.dW(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6C(e),$async$Ej)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ej,w)},
c7t:function c7t(){},
c7u:function c7u(d){this.a=d},
c7s:function c7s(d,e,f){this.a=d
this.b=e
this.c=f},
aPJ(){var x=0,w=A.j(y.H),v,u
var $async$aPJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hME=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPJ)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPJ)
case 3:u=$.fXI
u=u==null?null:u.bE(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPJ)
case 4:$.fXI=$.hVa=$.hVb=null
return A.h(null,w)}})
return A.i($async$aPJ,w)},
foD(d){var x=0,w=A.j(y.H),v,u
var $async$foD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5H){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.foE(new A.bX(u,y.aY))
x=3
return A.b(u.ii(0,C.hJ,new B.foF()),$async$foD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$foD,w)},
hV8(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hBp(x):x},
fXM(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aoI(u)
x=1
break}v=B.fSC(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXM,w)},
fXL(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aoJ(u)
x=1
break}v=B.fSC(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXL,w)},
fG9(d){var x=0,w=A.j(y.T),v
var $async$fG9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoJ(d),$async$fG9)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fG9,w)},
bAp(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fXL(d),$async$bAp)
case 3:q=f
if(q==null){x=1
break}t=C.R.aH(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAp,w)},
fdl(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fdl=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uu(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bs(d.ano(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdl,w)},
Gc(d,e,f){return B.hXx(d,e,f)},
hXx(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gc=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fXM(a1),$async$Gc)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aH(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hoS().aDb(D.dkS,null),$async$Gc)
case 4:l=d.fXI=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axm(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fpa(f,k,new B.fpb(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a6W(0,new B.WK(r,"offer")),$async$Gc)
case 5:d=l
x=7
return A.b(l.ake(0),$async$Gc)
case 7:x=6
return A.b(d.a6O(0,a4),$async$Gc)
case 6:x=8
return A.b(B.foD(l),$async$Gc)
case 8:x=9
return A.b(l.ao7(),$async$Gc)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hV8(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoK(m,h),$async$Gc)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h7D(h)
case 11:v=new A.bnv(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gc,w)},
foE:function foE(d){this.a=d},
foF:function foF(){},
fpb:function fpb(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpa:function fpa(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fp9:function fp9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hZo(d){switch(d){case"new":return D.edz
case"checking":return D.edA
case"connected":return D.edC
case"completed":return D.edB
case"failed":return D.edE
case"disconnected":return D.edF
case"closed":return D.aLm
case"count":return D.edD}return D.aLm},
hZp(d){switch(d){case"new":return D.aLn
case"gathering":return D.edG
case"complete":return D.a5H}return D.aLn},
i8D(d){switch(d){case"stable":return D.edH
case"have-local-offer":return D.edI
case"have-local-pranswer":return D.edK
case"have-remote-offer":return D.edJ
case"have-remote-pranswer":return D.edL
case"closed":return D.aLt}return D.aLt},
i6T(d){switch(d){case"new":return D.aLq
case"connecting":return D.aLr
case"connected":return D.aLs
case"closed":return D.a5I
case"disconnected":return D.aLp
case"failed":return D.aLo}return D.a5I},
a8U:function a8U(d,e){this.a=d
this.b=e},
O9:function O9(d,e){this.a=d
this.b=e},
WJ:function WJ(d,e){this.a=d
this.b=e},
O8:function O8(d,e){this.a=d
this.b=e},
EM:function EM(d,e){this.a=d
this.b=e},
cir:function cir(){},
fUl(d){var x=new B.EL()
x.a=d
x.b=!0
return x},
EL:function EL(){this.b=this.a=$},
a8T:function a8T(){},
at_:function at_(){},
WK:function WK(d,e){this.a=d
this.b=e},
fSy(){var x=0,w=A.j(y.H)
var $async$fSy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSy,w)},
fSB(d,e,f){var x=0,w=A.j(y.T),v
var $async$fSB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mA))){v=null
x=1
break}v=B.fGp(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSB,w)},
h7D(d){var x,w=F.abb.a3K(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcw().aJ(x)}return C.cS.gcw().aJ(w)},
hBo(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.aba.bbt(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fSC(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hBo(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hBp(d){var x,w,v,u,t,s=A.a([],y.s)
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
hBq(){var x,w=$.pq(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"DS"+C.d.fZ(v)},
aZ_(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZ_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bH),$async$aZ_)
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
return A.i($async$aZ_,w)},
c7b(d,e){return B.hBr(d,e)},
hBr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7b=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hE("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7b)
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
return A.i($async$c7b,w)},
aZ2(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZ2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZ_(d),$async$aZ2)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ2,w)},
aZ1(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZ1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hBq()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c7b(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZ1)
case 3:if(!h){v=null
x=1
break}v=new A.a_J("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ1,w)},
aZ0(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZ0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZ_(o),$async$aZ0)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c6.ca(0,C.cG.aJ(u))
if(J.iV(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZ0,w)},
c7c(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBm("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7c)
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
return A.i($async$c7c,w)},
aZ3(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZ3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ic(),$async$aZ3)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ3,w)},
aoB(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aoB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoB)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZ3(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoB,w)},
aoz(d,e){var x=0,w=A.j(y.H)
var $async$aoz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoz)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoz)
case 2:return A.h(null,w)}})
return A.i($async$aoz,w)},
a6u(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6u=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6u)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Ic(),$async$a6u)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dm(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6t(s),$async$a6u)
case 5:x=6
return A.b(B.aoz(f,u),$async$a6u)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6u,w)},
a6v(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6v=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6v)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Ic(),$async$a6v)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
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
return A.b(B.aoz(g,q),$async$a6v)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6t(u),$async$a6v)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6v,w)},
a6w(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6w=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6w)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Ic(),$async$a6w)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYX(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a6w)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6w)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6w,w)},
c7d(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c7d)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aH(0,r,null)
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
return A.i($async$c7d,w)},
Id(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Id=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7d(d),$async$Id)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZ3(t),$async$Id)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoA(d),$async$Id)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYX(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoA(d),$async$Id)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Id,w)},
aoA(d){var x=0,w=A.j(y.H)
var $async$aoA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoA)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aoA)
case 2:return A.h(null,w)}})
return A.i($async$aoA,w)},
aZ4(){var x,w=$.pq(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(32)]
return C.d.fZ(v)},
a6x(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fSD(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7g(d){return B.hBt(d)},
hBt(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6x(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bH),$async$c7g)
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
return A.i($async$c7g,w)},
aoD(d,e){return B.hBu(d,e)},
hBu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aoD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6x(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hE("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aoD)
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
return A.i($async$aoD,w)},
c7i(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoD(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7i)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7i,w)},
c7h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoD(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7h,w)},
c7j(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoD(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7j,w)},
c7k(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fSD(d)){v=null
x=1
break}x=3
return A.b(B.c7g(d),$async$c7k)
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
return A.i($async$c7k,w)},
a6E(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6E=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6E)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bH),$async$a6E)
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
return A.i($async$a6E,w)},
aoH(d){return B.hBJ(d)},
hBJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoH)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hE("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoH)
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
return A.i($async$aoH,w)},
aoI(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoI)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6E(),$async$aoI)
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
if(J.iV(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a2(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aF(s,j,o)
x=9
return A.b(B.aoH(s),$async$aoI)
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
return A.i($async$aoI,w)},
aoK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoK)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6E(),$async$aoK)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a2(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcw().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.aoH(u),$async$aoK)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoK,w)},
aoJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoJ)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6E(),$async$aoJ)
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
return A.i($async$aoJ,w)},
anJ(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pT)){v=null
x=1
break}x=3
return A.b(p.lY(e),$async$anJ)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.fY),$async$anJ)
case 7:q=g
o=q
o=o==null?null:J.eT(J.vi(o))
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
return A.i($async$anJ,w)},
i4S(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fEH(d){return B.i4U(d)},
i4U(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fEH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ia("media").Kt(d,3600),$async$fEH)
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
return A.i($async$fEH,w)},
CL(d,e,f,g,h,i){var x=null
return B.i4R(d,e,f,g,h,i)},
i4R(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CL=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h7G(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fSF(r),$async$CL)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fEH(o),$async$CL)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6y(r),$async$CL)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aOt)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lw(A.a([],g))
x=15
return A.b(d.eU(0,A.atP("GET",A.cw(n,0,null))).cM(0,C.F2),$async$CL)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6y(r),$async$CL)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.K6(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CL)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZ6(r,k),$async$CL)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CL)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Uu(r)
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
return A.b(B.a6y(r),$async$CL)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CL,w)},
aPs(d){return B.i4T(d)},
i4T(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ia("media").W(0,d),$async$aPs)
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
return A.i($async$aPs,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[144]
O=c[40]
F=c[239]
I=c[135]
P=c[219]
E=c[212]
G=c[86]
Q=c[184]
R=c[136]
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
B.cis.prototype={
aDb(d,e){return this.cI4(d,e)},
cI4(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kj(A.cB(t)))
t=J.k(u)
v=B.hGk(C.cS.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDb,w)}}
B.b3e.prototype={
bwP(d){var x=this,w=x.w
w.onclose=A.hh(new B.cin(x))
w.onopen=A.hh(new B.cio(x))
w.onmessage=A.hh(new B.cip(x))
w.onbufferedamountlow=A.hh(new B.ciq(x))},
gdc(d){return this.x},
agt(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EL()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fUl(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ei(d.arrayBuffer(),y.af),$async$agt)
case 8:v=t.fUl(s.amX(f,0,null))
x=1
break
case 7:case 4:v=B.fUl(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agt,w)}}
B.b3f.prototype={
bwQ(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hh(new B.cit(x)))
w.addEventListener("icecandidate",A.hh(new B.ciu(x)))
w.addEventListener("iceconnectionstatechange",A.hh(new B.civ(x)))
w.onicegatheringstatechange=A.hh(new B.ciw(x))
w.addEventListener("signalingstatechange",A.hh(new B.cix(x)))
if(!$.h0o())w.addEventListener("connectionstatechange",A.hh(new B.ciy(x)))
w.addEventListener("negotiationneeded",A.hh(new B.ciz(x)))
w.addEventListener("track",A.hh(new B.ciA(x)))},
ake(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ake=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ei(s.createAnswer(A.kj(A.cB(A.T(y.N,y.z)))),y.aQ),$async$ake)
case 3:t=f
v=new B.WK(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ake,w)},
a6O(d,e){return this.bmh(0,e)},
bmh(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6O)
case 2:return A.h(null,w)}})
return A.i($async$a6O,w)},
a6W(d,e){return this.bmx(0,e)},
bmx(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6W=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ei(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6W)
case 2:return A.h(null,w)}})
return A.i($async$a6W,w)},
ao7(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ao7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WK(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao7,w)},
bE(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bE,w)}}
B.abJ.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YE.prototype={
R(){return new B.ayz()},
gdd(){return this.c}}
B.ayz.prototype={
a_(){this.a1()
this.adb()},
adb(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYY(u.e,u.c),$async$adb)
case 2:t=e
if(v.c!=null)v.m(new B.d1K(v,t))
return A.h(null,w)}})
return A.i($async$adb,w)},
PM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aow(t.e,t.c,!1),$async$PM)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.T(D.eUw)
x=1
break}x=4
return A.b(B.a6s(u.a.c,"individual"),$async$PM)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5k(A.e8(new B.d1H(u),!1,null,y.H)),$async$PM)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PM,w)},
IT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fmK(o),$async$IT)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6w(o.e,r,s,q),$async$IT)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.T(D.eRB)
x=1
break}x=5
return A.b(B.a6s(u.a.c,"member"),$async$IT)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5k(A.e8(new B.d1J(u),!1,null,y.H)),$async$IT)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IT,w)},
xP(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6r(t.e,o,t.f,t.r,t.w,s),$async$xP)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6s(u.a.c,"org_owner"),$async$xP)
case 4:x=5
return A.b(B.aoB(u.a.c),$async$xP)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fne(o),$async$xP)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6u(s,t,o,q.c),$async$xP)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.T(D.eRy)
x=1
break}x=10
return A.b(B.aoB(u.a.c),$async$xP)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5k(A.e8(new B.d1I(u),!1,null,y.H)),$async$xP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xP,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jb:C.pD,q=B.fSA(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.fcd,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h6,t,t,t),C.aB,D.fv5,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bWF,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lC(new B.d1M(),t),C.N,w,C.e3,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acb(C.eS,C.ay3,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcc5(),t),C.ac],v))
p.push(new B.acb(C.oL,C.a1B,"Team Member","Sign in with your organization access code + password",u.gccX(),t))
p.push(C.ac)
p.push(new B.acb(C.akA,C.a37,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gccs(),t))
return A.c8(t,r,A.bl(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahS,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acb.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eE(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.pb,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bs,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aB6.prototype={}
B.aEi.prototype={}
B.jn.prototype={
mu(d){var x=this.b,w=C.a.oC(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b2(x,w+1).toLowerCase())},
gaoL(){var x=this.d
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
baW(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cGy(d){return this.baW(null,d)},
aCX(d){return this.baW(d,null)}}
B.Uo.prototype={
R(){return new B.aCt(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCt.prototype={
a_(){this.a1()
this.adc()},
adc(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(u.a.c),$async$adc)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOw(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adc,w)},
ade(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ade=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ade)
case 3:t=u.c
if(t!=null)t.I(y.q).f.T(D.eVq)
case 1:return A.h(v,w)}})
return A.i($async$ade,w)},
Z6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Z6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anJ(s.d,4),$async$Z6)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rR(r,"ngmy_my_code_"+m+".png"),$async$Z6)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Z6,w)},
agW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9x("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agW,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jb:C.pD,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lF
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a22,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.aht,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mI,w,C.kD,new A.ev(A.p(p,A.pK(p,p,!1,B.hBk(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kD,A.B(A.a([A.E(A.ey(N.BM,C.TJ,q.gc56(),p),1),C.av,A.E(A.df(C.yv,C.a7V,q.gc57(),A.bm(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0t,D.fr_,q.gcrz(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.Me,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Us.prototype={
R(){return new B.aCw(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.aCw.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ib(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Z7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ib(u.d.a.a)
if(t==null){u.m(new B.dPF(u))
x=1
break}u.m(new B.dPG(u))
s=u.a
r=s.c
x=3
return A.b(B.a6q(s.d,new B.dPH(u),t,r),$async$Z7)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPI(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z7,w)},
a1i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dPJ(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rl(r.a.c,q),$async$a1i)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPK(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahc(p,m,l,j,k),$async$a1i)
case 8:o=e
if(r.c!=null)r.m(new B.dPL(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPM(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPN(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1i,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adS:D.abK,h=j?D.afl:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acW:C.aL
i=[i,e,h,g,f,j?C.fb:C.bT]
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
t=A.p(k,A.B(A.a([A.p(k,D.bKt,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fA,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a22,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uc(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhZ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.M7,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPO(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m2,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L9(l.a.d,4)
m=A.C(new A.K(m,new B.dPP(x,new A.aFw(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.mn,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d7,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eQ7)
else q.push(A.X(C.lm,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.dk(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eQ,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.btC,k,k,C.ah),1)
u=l.f?k:l.gcrA()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0t,D.frZ,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc58()
t=A.bm(C.aE,k,k,0,C.c,k,C.nb,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bl(!0,A.mC(new B.dPQ(),A.v(A.a([e,new A.D(D.bt6,A.v(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rH:D.fqo,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XT,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhZ.prototype={
oy(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fe(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.ha(C.bw,v.length),C.aN)}}
B.Up.prototype={
R(){return new B.aCu()}}
B.aCu.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b4,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b4,C.aN),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
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
adf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOx(r))
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
return A.b(B.a6v(p,m,n,o,C.a.i(l).length===0?null:l),$async$adf)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.T(D.eV1)
s=[1]
x=4
break}p.I(y.q).f.T(D.eTF)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOy(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adf,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jb:C.pD,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fj1,s,s,s,1,s,!0),p=A.p(s,D.blB,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gr,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bRm,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bRh,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bRx,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc59()
u=A.bm(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mI,A.bG(t.r?C.rH:C.aR9,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abq.prototype={}
B.buv.prototype={
a4_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.ano()))
x=3
return A.b(B.QO(t,s),$async$a4_)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4_,w)},
gdd(){return this.a}}
B.N7.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YD.prototype={
R(){return new B.ayy(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.ayy.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1G(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c5f(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0G(d),u=x.a.c,t=u?C.ia:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jb:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.ang,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cB,16)],n),C.ao3,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uc(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu9()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fd,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aY7),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1E(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m2,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nx,new B.d1F(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eJ(w,C.K,new A.cS(Q.K3,A.c0(new A.D(C.xG,A.v(A.a([l,C.aQ,k,C.N,j,C.e3,i,C.e3,A.B(A.a([f,C.av,A.E(A.c0(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e7u,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc5e(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.O1,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Mg,C.d0,w,w,w)}}
B.bu9.prototype={
oy(d,e){return e.ak9(e.a.toUpperCase())}}
B.Uq.prototype={
R(){return new B.aCv(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCv.prototype={
a_(){var x=this
x.a1()
x.tD()
x.w=A.dv(C.jg,new B.dPD(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Uz()
this.a2()},
a0a(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N6(u.a.c),$async$a0a)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Aw(u.a.c),$async$a0a)
case 4:u.m(new s.dP0(u,e))
u.hZ("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0a,w)},
tD(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N6(u.a.c),$async$tD)
case 3:t=e
x=4
return A.b(B.Aw(u.a.c),$async$tD)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dP1(u,s))
if(t>0)u.hZ("Received "+A.t(t)+" file(s) via My Code.")
u.Nb(u.d)
B.Br(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tD,w)},
Nb(d){return this.bAM(d)},
bAM(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6A(r,u.a.c),$async$Nb)
case 8:p=f
if(u.c==null){x=1
break}new B.dOA(u,r,p).$0()
u.c.e9()
case 7:if(!(C.a.a0(r.c,"video/")||r.mu(D.mA))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ux(r,u.a.c),$async$Nb)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Aw(u.a.c),$async$Nb)
case 12:u.m(new o.dOB(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nb,w)},
Ny(d){return this.bGZ(d)},
bGZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ny=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6A(d,u.a.c),$async$Ny)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOG(u,d,t))
x=6
return A.b(A.fJ(new A.fC(t)),$async$Ny)
case 6:u.hZ("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fC(r.toUpperCase())),$async$Ny)
case 7:u.hZ("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ny,w)},
hZ(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.T(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tE(d,e){return this.cC1(d,e)},
cC1(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPr(r,e))
u=3
x=6
return A.b(d.$0(),$async$tE)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPs(r))
$.eV.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tE,w)},
gaU4(){var x=this.a
return x.f||x.r||x.w},
HQ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaU4()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c79(s,n,r,q,o,t),$async$HQ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hZ("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fya(o,u.a.c),$async$HQ)
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
return A.b(B.CN(s,o,r,q,n,t),$async$HQ)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HQ,w)},
a_e(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_e=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoB(u.a.c),$async$a_e)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hZ("No organization portal found.")
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
return A.b(A.a5(t,!1).c5(A.e8(new B.dOY(u,r,q),!1,null,y.H)),$async$a_e)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_e,w)},
a0l(d){return this.clb(d)},
cla(){return this.a0l(1)},
clb(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaU4()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoy(u.a.c),$async$a0l)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0l,w)},
abd(d,e,f){return this.bXv(d,e,f)},
bXv(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hZ(e)
x=1
break}x=3
return A.b(u.tE(new B.dOV(u,d,null,e,f),"Uploading\u2026"),$async$abd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abd,w)},
bAU(){B.hmg(!1,new B.dOE(this))
return},
cqa(){this.m(new B.dP5(this))},
axv(){var x=0,w=A.j(y.H),v=this
var $async$axv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAU()
return A.h(null,w)}})
return A.i($async$axv,w)},
ab9(){var x=0,w=A.j(y.H),v=this
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tE(new B.dOK(v),"Importing\u2026"),$async$ab9)
case 2:return A.h(null,w)}})
return A.i($async$ab9,w)},
RO(d){return this.cBs(d)},
cBs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c5(A.e8(new B.dPo(u,d),!1,null,y.H)),$async$RO)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.PX)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c5(A.e8(new B.dPp(u,d),!1,null,y.H)),$async$RO)
case 8:x=1
break
case 7:x=u.bYc(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c5(A.e8(new B.dPq(u,d),!1,null,y.H)),$async$RO)
case 11:x=1
break
case 10:u.hZ("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RO,w)},
bYc(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oC(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cE8,C.a.b2(x,w+1).toLowerCase())},
aeG(d){return this.cc9(d)},
cc9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c5(A.e8(new B.dOW(u,d),!1,null,y.H)),$async$aeG)
case 5:x=1
break
case 4:u.m(new B.dOX(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeG,w)},
Ra(d){return this.ct4(d)},
ct4(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ra=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hZ("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p3(t,s.c,s.f),$async$Ra)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tE(new B.dPh(u,d),"Preparing QR\u2026"),$async$Ra)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ra,w)},
ahl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dPi(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dPj(q),s),s.k("J.E"))
if(r.length===0){u.hZ("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ra(r),$async$ahl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahl,w)},
ahe(d){return this.csC(d)},
csC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0G(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPb(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahe)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RO(d)
break
case"qr":u.Ra(A.a([d],y.r))
break
case"send_my_code":u.ccM(A.a([d],y.r))
break
case"save":u.agA(d)
break
case"delete":u.IE(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahe,w)},
X3(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOH(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dOI(q),s),s.k("J.E"))
if(r.length===0){u.hZ("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p3(t,s.c,s.f),$async$X3)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tE(new B.dOJ(u,r),"Preparing file\u2026"),$async$X3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
afM(d){return this.cjz(d)},
cjz(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hmZ(d,!1),$async$afM)
case 3:s=f
r=s==null
q=B.a6x(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hZ("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afM,w)},
aeM(){var x=0,w=A.j(y.H),v=this,u
var $async$aeM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fFM(u,v.a.c),$async$aeM)
case 2:return A.h(null,w)}})
return A.i($async$aeM,w)},
bAT(){B.hmg(!1,new B.dOD(this,null))
return},
IS(d,e){return this.ccN(d,e)},
b_0(d){return this.IS(null,d)},
ccM(d){return this.IS(d,null)},
ccN(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a1<1>")
k=A.C(new A.a1(p,new B.dOZ(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.x3.c6().amJ(!0,C.ZF,!1),$async$IS)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tE(new B.dP_(l,s,r),"Preparing\u2026"),$async$IS)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hZ("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hZ("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCv(p,l,e,s.a.c),$async$IS)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hZ("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IS,w)},
I4(d){return this.bXi(d)},
bXi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hBj(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_0(t),$async$I4)
case 8:x=6
break
case 7:u.hZ("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hZ("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tE(new B.dOT(u,d),"Receiving video\u2026"),$async$I4)
case 11:x=1
break
case 10:x=12
return A.b(u.tE(new B.dOU(u,d),"Receiving\u2026"),$async$I4)
case 12:case 1:return A.h(v,w)}})
return A.i($async$I4,w)},
E1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$E1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CH()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afM(t),$async$E1)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.I4(s),$async$E1)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c5(A.e8(new B.dP3(u),!1,null,y.N)),$async$E1)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tD(),$async$E1)
case 10:x=1
break
case 9:x=11
return A.b(u.I4(C.a.i(r)),$async$E1)
case 11:case 1:return A.h(v,w)}})
return A.i($async$E1,w)},
agA(d){return this.coK(d)},
coK(d){var x=0,w=A.j(y.H),v=this
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tE(new B.dP2(v,d),"Saving\u2026"),$async$agA)
case 2:return A.h(null,w)}})
return A.i($async$agA,w)},
IE(d){return this.bJi(d)},
bJi(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l3(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IE)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c7c(t),$async$IE)
case 6:case 5:s=d.a
x=7
return A.b(B.Ei(u.a.c,s),$async$IE)
case 7:u.r.W(0,s)
x=8
return A.b(u.tD(),$async$IE)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IE,w)},
ahr(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0G(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPn(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahr)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeM()
break
case"import":u.ab9()
break}case 1:return A.h(v,w)}})
return A.i($async$ahr,w)},
c5c(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mA))return C.q0
if(C.a.a0(x,"image/")||d.mu(D.PX))return C.tU
if(C.a.t(x,"pdf"))return E.Ny
return D.al1},
B(d){var x,w,v=this,u=null,t=B.a0G(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gj,u,u,u,new B.dPy(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bKZ,u,u,u,v.e?u:v.gcct(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcq9()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bFl:E.alq,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0q,u,u,u,v.e?u:v.gc5d(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o3,u,u,u,v.e?u:v.gb08(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bMF,u,u,u,v.e?u:new B.dPz(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lC(new B.dPA(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m1(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayv(C.jn,s,!0,t,w?u:v.gct5(),u),1)
x.push(new A.D(D.brU,A.mC(new B.dPB(),A.B(A.a([s,C.av,A.E(new B.ayv(C.vF,"Export",!1,t,w?u:v.gbMQ(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iz,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcD(t,v.e?u:v.gb08(),u)
else s=A.k8(!0,u,u,new B.dPC(v,t),s,u,D.brM,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayv.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bm(C.aE,t,t,0,C.c,t,C.vm,t,new A.b7(s,C.Y),t,t,t)
return A.df(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vm,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eW,t,t,t),u.r,v)}}
B.bcD.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mC(new B.d1C(),new A.D(E.YK,A.v(A.a([A.mC(new B.d1D(),A.p(x,A.X(C.y0,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ew,C.ie,x,x,new A.bp(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e3,A.df(C.o3,D.fvo,this.d,A.bm(C.aE,x,x,x,C.c,x,C.YF,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AR,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.abK.prototype={
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
if(!o||i.mu(D.mA))p=D.daN
else{p=C.a.a0(p,"image/")||i.mu(D.PX)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoL()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mu(D.mA))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cc))
if(!(!o||i.mu(D.mA)))l.push(A.fQl(C.aE,!1,j,j,j,!1,j,j,new B.d1Z(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.o1,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mC(new B.d2_(),new A.D(C.e5,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Ye,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.YF.prototype={
R(){return new B.ayA()},
gdd(){return this.c}}
B.ayA.prototype={
a_(){this.a1()
this.xG()},
q(){B.hBy(this.e)
this.a2()},
xG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rl(o.c,o.d),$async$xG)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hBB(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hBA(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1W(s))
x=1
break}s.m(new B.d1X(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d1Y(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xG,w)},
a1h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rl(t.c,t.d),$async$a1h)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.T(D.eS7)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahc(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1h)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1h,w)},
bXb(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ko(u,C.A,v,new B.d1U(w,t),C.fW,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fL(t,C.A,v,new B.d1V(w),C.fW,C.du,!0,v,!1,v,v)
else return C.bI
return A.ul(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0G(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BN,u,u,u,v.gb3Y(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.E_
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.df(C.BN,D.feu,v.gb3Y(),A.bm(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bXb()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YC.prototype={
R(){return new B.ayx(A.ai1(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayx.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).ic(new B.d1z(v))
x.gcPs().ic(new B.d1A(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b3d
x.ic(new B.d1B(v))
v.xG()},
xG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rl(p.c,p.d),$async$xG)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1s(s))
x=1
break}x=8
return A.b(s.d.BW(0,new A.a2L(r,s.a.d.c)),$async$xG)
case 8:if(s.c==null){x=1
break}s.m(new B.d1t(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1u(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xG,w)},
Z8(){var x=0,w=A.j(y.H),v=this,u
var $async$Z8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h4(0),$async$Z8)
case 5:x=3
break
case 4:x=6
return A.b(u.ih(0),$async$Z8)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Z8,w)},
aRY(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0G(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.E_
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bGk,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.O1,C.n),o,88,o,o,o,o,o,88)
t=A.kZ(C.aE,o,o,m,0,new B.d1v(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRY(p.w)+" / "+p.aRY(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bm(C.aE,o,o,o,o,D.eOD,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.ya:C.iW,o,o,o,o,o)
x=A.v(A.a([u,C.kD,t,x,C.d7,A.df(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc5g(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.D(C.tH,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pk.prototype={
R(){return new B.ayD()},
gdd(){return this.c}}
B.ayD.prototype={
a_(){this.a1()
this.P8()},
P8(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P8=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fSB(o.c,o.d,new B.d2c(s)),$async$P8)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2d(s))
x=1
break}s.e=r
q=O.hYm(r)
if(q==null){s.m(new B.d2e(s))
x=1
break}s.d=q
q.aO(0,s.gaZP())
x=8
return A.b(q.ib(0).cM(0,C.qY),$async$P8)
case 8:if(s.c==null){x=1
break}s.m(new B.d2f(s))
x=9
return A.b(q.pS(0),$async$P8)
case 9:q.te(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d2g(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P8,w)},
caL(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2h(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CH(0,x.gaZP())
w=x.d
if(w!=null)w.q()
B.i79(x.e)
x.a2()},
adi(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ5(u.c,u.d),$async$adi)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adi,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0G(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.oS,t,t,t,u.gc5a(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ih(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.E_
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahv(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A_(s,t),A.aE(t,A.CY(A.p(t,A.X(q?I.ya:C.iW,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2j(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bI}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YH.prototype={
R(){return new B.ayB(new A.cs(null,y.A))}}
B.ayB.prototype={
gcBL(){var x,w,v=this.a
if(v.e!==D.Rg)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcBq(){var x,w,v=this.a
if(v.e!==D.z4)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBL()
if(x!=null){v.Qa(x)
v.e=A.dv(R.F5,new B.d28(v,x))}w=v.gcBq()
if(w!=null){v.Q9(w)
v.f=A.dv(C.fU,new B.d29(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q9(d){return this.chL(d)},
chL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoG(d),$async$Q9)
case 3:t=f
x=4
return A.b(B.c7v(d),$async$Q9)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d20(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q9,w)},
Qa(d){return this.chM(d)},
chM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fG9(d),$async$Qa)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAp(t),$async$Qa)
case 4:if(u.c==null){x=1
break}u.m(new B.d21(u))
u.c.I(y.q).f.T(D.aO4)
case 1:return A.h(v,w)}})
return A.i($async$Qa,w)},
gc1c(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc5b(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a13(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CH()){t=u.c
if(t!=null)t.I(y.q).f.T(D.eVb)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c5(A.e8(new B.d22(),!1,null,y.N)),$async$a13)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAp(s),$async$a13)
case 4:t=u.c
if(t!=null)t.I(y.q).f.T(D.aO4)
case 1:return A.h(v,w)}})
return A.i($async$a13,w)},
a95(d){return this.bH_(d)},
bH_(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a95=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.d.aI(t,", "))),$async$a95)
case 3:if(d.e!=null){t=d.I(y.q).f
t.T(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
adg(d){return this.bGK(d)},
bGK(d){var x=0,w=A.j(y.H),v=this
var $async$adg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fC(v.a.c)),$async$adg)
case 2:if(d.e!=null)d.I(y.q).f.T(D.eSA)
return A.h(null,w)}})
return A.i($async$adg,w)},
a0Z(d){return this.coM(d)},
coM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anJ(s.d,4),$async$a0Z)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rR(r,"ngmy_doc_share_qr.png"),$async$a0Z)
case 8:q=f
if(d.e!=null)d.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0Z,w)},
gaV8(){var x,w=this.a
if(w.e!==D.Hv)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
a92(d){return this.bGT(d)},
bGT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a92=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaV8()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a92)
case 3:if(d.e!=null)d.I(y.q).f.T(D.eUb)
case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
adh(){var x=0,w=A.j(y.H),v=this,u
var $async$adh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Uz(),$async$adh)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adh,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0G(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hv&&i!==D.Rg&&i!==D.z4
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hv||t===D.Rg||t===D.z4?l:A.aH(l,l,l,l,C.kY,l,l,l,m.gaY0(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pK(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc1c(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hv){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc5b(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bQr,D.fnF,new B.d23(m,d),l)],p))}if(m.a.e===D.Hv&&m.gaV8()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bMZ,D.fkn,new B.d24(m,d),l)],p))
if(m.a.e===D.z4){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.E2:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}if(m.a.e===D.Rg){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.E2:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l),C.ac,A.df(D.bIN,D.fqH,m.gcp9(),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oi(i,A.c8(v,w,new A.D(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.ey(N.BM,C.TJ,new B.d25(m,d),l),1),C.av,A.E(A.df(C.yv,C.a7V,new B.d26(m,d),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zD,m.gaY0(),A.bm(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d27(),y.C)}}
B.abI.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pK(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bD,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bG(C.zE,new B.d1r(d),x)],u),x,x,C.mR,v,x,x,x,x,D.fdv,x)}}
B.YB.prototype={
R(){return new B.ayw(A.z4(C.xn,C.nE,C.u5))}}
B.ayw.prototype={
q(){this.d.q()
this.a2()},
aw7(d){var x,w,v,u,t
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
return A.c8(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fkR,x,x,x,1,x,!0),C.w,A.z3(this.d,C.bS,this.gaw6()),x,!1,!1,x,x)}}
B.YI.prototype={
R(){return new B.ayC(A.z4(C.xn,C.nE,C.u5))},
gdd(){return this.c}}
B.ayC.prototype={
bYe(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
af8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RN("text/plain"),$async$af8)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.T(D.eV5)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$af8,w)},
a9R(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9R=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hmZ(p,!0),$async$a9R)
case 3:t=e
p=t==null
s=B.a6x(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.T(D.eRI)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9R,w)},
q(){this.d.q()
this.a2()},
aw7(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bYe(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.aml,v,v,v,w.gbMo(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0x,v,v,v,w.gcfa(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r6:P.Nh,v,v,v,v,v),v,v,v,new B.d2b(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.frw,v,v,v,1,v,!0)
u=A.z3(w.d,C.bS,w.gaw6())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.edf],s),v),v,!1,!1,v,v)}}
B.bcE.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oC
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oC:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.YP,A.B(A.a([u,C.bd,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8U.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.O9.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WJ.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.O8.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EM.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cir.prototype={}
B.EL.prototype={}
B.a8T.prototype={}
B.at_.prototype={}
B.WK.prototype={}
var z=a.updateTypes(["az<~>()","R(jn)","n(jn)","Uq(Y)","~()","YE(Y)","H(H,jn)","Pk(Y)","~(lX)","cq(EL)","az<jn?>(@)","Uo(Y)","Us(Y)","D(jn)","jn(@)","a4<n,@>(jn)","YD(Y)","Up(Y)","YF(Y)","YC(Y)","YH(Y)","abI(Y)","ai<jn>()","YI(Y)","abK(Y,H)","YB(Y)","a4<n,aC>(jn)","cq(WJ)","cq(a8T)","az<cq>(EL)"])
B.cin.prototype={
$1(d){var x=this.a
x.x=D.aLl
x.y.J(0,D.aLl)},
$S:69}
B.cio.prototype={
$1(d){var x=this.a
x.x=D.aLk
x.y.J(0,D.aLk)},
$S:69}
B.cip.prototype={
$1(d){var x=this.a
x.agt(A.aOb(d.data)).bz(new B.cim(x),y.b)},
$S:69}
B.cim.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ciq.prototype={
$1(d){},
$S:69}
B.cit.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hGj(d.channel))},
$S:15}
B.ciu.prototype={
$1(d){},
$S:15}
B.civ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hZo(w.iceConnectionState)
x.cx=w
if($.h0o())switch(w.a){case 0:x.cy=D.aLq
break
case 1:x.cy=D.aLr
break
case 3:x.cy=D.aLs
break
case 5:x.cy=D.aLo
break
case 6:x.cy=D.aLp
break
case 7:x.cy=D.a5I
break
default:break}},
$S:147}
B.ciw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hZp(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.cix.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i8D(w.signalingState)},
$S:147}
B.ciy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i6T(w.connectionState)},
$S:147}
B.ciz.prototype={
$1(d){},
$S:147}
B.ciA.prototype={
$1(d){},
$S:15}
B.fj_.prototype={
$1(d){var x=y.F.a(new A.rH([],[]).pA(d.target.result,!1)),w=C.xo.t(x.objectStoreNames,"blobs")
if(!w)C.xk.Kr(x,"blobs")},
$S:177}
B.fFA.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vS.fc(this.b)
$.eV.mp()
this.c.$1(d)},
$S:442}
B.fFC.prototype={
$1(d){return this.a.$1(B.hPg(this.b,this.c))},
$S:34}
B.fFB.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fFz.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fFP.prototype={
$1(d){var x=this
return B.hcx(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fFQ.prototype={
$1(d){var x=this
return B.hcx(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fkO.prototype={
$1(d){var x=this
return B.c76(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1K.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1H.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c76(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1J.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c76(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1I.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c76(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1M.prototype={
$4(d,e,f,g){var x=null
return A.jH(A.B(A.a([A.aH(x,x,x,x,D.bHo,x,x,x,new B.d1L(d),x,x,x,x,x,x),A.E(A.Ex(D.PI,!0,x,C.a_B,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PI,x,g,C.aic,0,e,f)},
$C:"$4",
$R:4,
$S:413}
B.d1L.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmN.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eE,y.o).w,t=this.a,s=t?C.ia:C.c,r=A.m(28),q=A.p(v,D.blV,C.f,v,v,D.aZN,v,v,v,v,D.ai2,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bLx,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.D(C.Fi,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amA,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dT(C.de,new B.fmL(d),v),1),C.av,A.E(A.bG(D.fjn,new B.fmM(p,x,d),A.bm(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LW,v,v,v,v),v)},
$S:60}
B.fmL.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmM.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.T(D.eSP)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aB6(v,x))},
$S:0}
B.fng.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eE,y.o).w,u=x.a,t=u?C.ia:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.blK,C.f,w,w,D.b0c,w,w,w,w,D.ai2,w,w,1/0),new A.D(C.Fi,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fXw(u,"Organization name",C.FJ,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fXw(u,"Access code",C.ng,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fXw(u,"Member password",H.Ge,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.frB,new B.fnf(r,q,p,d),A.bm(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LW,w,w,w,w),w)},
$S:60}
B.fnf.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.T(D.eSU)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEi(u,x,w))},
$S:0}
B.c6Y.prototype={
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
return A.b(A.va(p,null).cM(0,C.XS),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bs(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c73.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c74.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c75.prototype={
$1(d){return d.b},
$S:z+2}
B.c7_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c70.prototype={
$1(d){return d.b},
$S:z+2}
B.c6Z.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c71.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c72.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fFN.prototype={
$1(d){return new B.Uo(this.a,null)},
$S:z+11}
B.fFO.prototype={
$1(d){return new B.Us(this.a,this.b,this.c,null)},
$S:z+12}
B.dOw.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPF.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPG.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPH.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPE(x,d))},
$S:2}
B.dPE.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPI.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPJ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPK.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPM.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPN.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPQ.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:100}
B.dPO.prototype={
$1(d){var x=this.a
return x.f?null:x.Z7()},
$S:2}
B.dPP.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.PX))s=C.tU
else s=C.a.a0(s,"video/")||d.mu(D.mA)?C.q0:D.al1
x=this.b.a
w=y.p
return new A.D(C.kR,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoL(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOx.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOy.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c77.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.c78.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.fGr.prototype={
$2(d,e){return e===this.a},
$S:280}
B.fgc.prototype={
$1(d){return J.k(d)},
$S:17}
B.fl_.prototype={
$1(d){var x=this.b
B.hNf(C.Fw.ga5D(this.a)).bz(x.gcER(x),y.H)},
$S:117}
B.fl0.prototype={
$1(d){return this.a.d5(0,null)},
$S:117}
B.fl1.prototype={
$0(){return null},
$S:11}
B.c7m.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fl2.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fp1.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fjs.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fjt.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.fKx.prototype={
$1(d){return new B.YD(this.a,null)},
$S:z+16}
B.d1G.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fK()},
$S:9}
B.d1E.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d1F.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPD.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0a()},
$S:12}
B.dP0.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dP1.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOA.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOz(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCX(this.c)}},
$S:0}
B.dOz.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOB.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOG.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOF(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCX(this.c)}},
$S:0}
B.dOF.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPr.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPs.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dOY.prototype={
$1(d){return new B.Up(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HQ(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Ut(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tD(),$async$$0)
case 5:s=J.a6(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a0l(s.gM(t)),$async$$0)
case 8:case 7:r.hZ(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOE.prototype={
$1(d){this.a.abd(d,"No files selected.","Added")},
$S:442}
B.dP5.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dP4(),A.U(x).k("K<1,n>")))},
$S:0}
B.dP4.prototype={
$1(d){return d.a},
$S:z+2}
B.dOK.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x3.c6().cRp(C.ZF,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fp(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hZ("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hZ("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoF(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.hZ("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tD(),$async$$0)
case 9:o.hZ("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPo.prototype={
$1(d){return new B.Pk(this.a.a.c,this.b,null)},
$S:z+7}
B.dPp.prototype={
$1(d){return new B.YF(this.a.a.c,this.b,null)},
$S:z+18}
B.dPq.prototype={
$1(d){return new B.YC(this.a.a.c,this.b,null)},
$S:z+19}
B.dOW.prototype={
$1(d){return new B.Pk(this.a.a.c,this.b,null)},
$S:z+7}
B.dOX.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dPh.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HQ(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6z(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hZ("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cla(),$async$$0)
case 5:x=6
return A.b(p.tD(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dPd(p),r),new B.dPe(),r.k("K<ak.E,n>")).c_(0,new B.dPf())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c5(A.e8(new B.dPg(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p2(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uz(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPd.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dPc(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPc.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPe.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPf.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPg.prototype={
$1(d){var x=this.a
return new B.YH(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPi.prototype={
$1(d){return d.a},
$S:z+2}
B.dPj.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPb.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kQ,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoL(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mA)?C.tW:C.oP
p=!x||p.mu(D.mA)?"Play video":"View"
return A.c0(A.bl(!0,new A.D(C.B2,A.v(A.a([q,o,t,C.aB,B.YG(!1,u,!1,w,p,new B.dP6(d),v),B.YG(!1,u,!1,C.jn,"Share via QR",new B.dP7(d),"Letters/numbers QR code"),B.YG(!1,u,!1,D.a_H,"Send to their Code",new B.dP8(d),"Enter someone else's personal code"),B.YG(!1,u,!1,C.hA,"Download / save",new B.dP9(d),v),C.am,B.YG(!1,u,!0,C.e6,"Delete",new B.dPa(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kJ,v,v,C.n),C.be)},
$S:545}
B.dP6.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dP7.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dP8.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dP9.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dPa.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dOH.prototype={
$1(d){return d.a},
$S:z+2}
B.dOI.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6B(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gf(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p2(s.c,s.f),$async$$0)
case 4:u.hZ(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOD.prototype={
$1(d){var x=this.a
x.tE(new B.dOC(x,d,this.b),"Preparing\u2026")},
$S:442}
B.dOC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hZ("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Ut(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.hZ("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCv(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hZ("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOZ.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dP_.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.fSE(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gc(new B.dOP(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hZ("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOQ(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOR(s))
case 5:x=8
return A.b(r.b.ii(0,C.F2,new B.dOS()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gam(t)){s.hZ("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tD(),$async$$0)
case 9:s.hZ("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOM(x,d,e))},
$S:142}
B.dOM.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOQ.prototype={
$1(d){return new B.abI(this.a.a,null)},
$S:z+21}
B.dOR.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOS.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ib(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6p(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_0(B.Ib(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoF(new B.dON(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fSD(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hZ(q)
x=1
break}x=10
return A.b(s.tD(),$async$$0)
case 10:o=J.cG(r)
p=o.eL(r,new B.dOO()).gM(0)
s.hZ(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dON.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOL(x,d,e))},
$S:142}
B.dOL.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOO.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.dP3.prototype={
$1(d){return new B.YI(this.a.a.c,null)},
$S:z+23}
B.dP2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ5(u.a.c,v.b),$async$$0)
case 2:t.hZ(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPn.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bl(!0,new A.D(C.B2,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kQ,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YG(!0,w,!1,C.ng,"My Code",new B.dPk(d),"Your personal code & QR \u2014 others send docs to you"),B.YG(!1,w,!1,D.a_H,"Send to their Code",new B.dPl(this.a,d),"Enter someone else's 5-digit code + letter"),B.YG(!1,w,!1,S.yk,"Import backup",new B.dPm(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kJ,x,x,C.n),C.be)},
$S:545}
B.dPk.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dPl.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAT()},
$S:0}
B.dPm.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dPA.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Il(D.PI,x,C.a_B,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gK(D.PI).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:570}
B.dPy.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPz.prototype={
$0(){this.a.ahr()
return null},
$S:0}
B.dPB.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:100}
B.dPC.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abK(e,w,v,this.b,x.e,x.c5c(w),new B.dPu(x,w),new B.dPv(x,v,w),new B.dPw(x,w),new B.dPx(x,w),null)},
$S:z+24}
B.dPu.prototype={
$0(){this.a.aeG(this.b)
return null},
$S:0}
B.dPv.prototype={
$0(){var x=this.a
return x.m(new B.dPt(x,this.b,this.c))},
$S:0}
B.dPt.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dPw.prototype={
$0(){this.a.Ny(this.b)
return null},
$S:0}
B.dPx.prototype={
$0(){this.a.ahe(this.b)
return null},
$S:0}
B.d1C.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:100}
B.d1D.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:130}
B.d2_.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:100}
B.d1Z.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d1W.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1X.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d1Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1U.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fL(w,C.A,x,new B.d1S(this.a),C.fW,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d1T(this.a))
return C.bI},
$S:129}
B.d1S.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1Q(this.a))
return C.bI},
$S:179}
B.d1Q.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1N(x))},
$S:9}
B.d1N.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1P(x))},
$S:9}
B.d1P.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1V.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1R(this.a))
return C.bI},
$S:179}
B.d1R.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1O(x))},
$S:9}
B.d1O.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1z.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1y(x,d))},
$S:1740}
B.d1y.prototype={
$0(){return this.a.f=this.b===C.ur},
$S:0}
B.d1A.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1x(x,d))},
$S:9}
B.d1x.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1B.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1w(x,d))},
$S:9}
B.d1w.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1s.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1t.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1u.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1v.prototype={
$1(d){return this.a.d.My(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2c.prototype={
$0(){var x=this.a.a
return B.rl(x.c,x.d)},
$S:1741}
B.d2d.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2e.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2f.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d2h.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2j.prototype={
$0(){var x=this.a
x.m(new B.d2i(x))},
$S:0}
B.d2i.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h4(0)
else x.pS(0)},
$S:0}
B.d28.prototype={
$1(d){return this.a.Qa(this.b)},
$S:12}
B.d29.prototype={
$1(d){return this.a.Q9(this.b)},
$S:12}
B.d20.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d21.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d22.prototype={
$1(d){return D.fSP},
$S:z+25}
B.d27.prototype={
$2(d,e){if(d)B.Uz()},
$S:123}
B.d23.prototype={
$0(){return this.a.a95(this.b)},
$S:0}
B.d24.prototype={
$0(){return this.a.a92(this.b)},
$S:0}
B.d25.prototype={
$0(){return this.a.adg(this.b)},
$S:0}
B.d26.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
B.d1r.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d2b.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pW(),$async$$0)
case 2:u.m(new B.d2a(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2a.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7t.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.c7u.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7s.prototype={
$2(d,e){return this.bif(d,e)},
bif(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.UA(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.foE.prototype={
$1(d){if(d===D.a5H&&(this.a.a.a&30)===0)this.a.fQ(0)},
$S:z+27}
B.foF.prototype={
$0(){},
$S:11}
B.fpb.prototype={
bjP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fdl(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h7G(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjP(d,e)},
$S:753}
B.fpa.prototype={
$1(d){var x=this
d.b=new B.fp9(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fp9.prototype={
$1(d){return this.bjO(d)},
bjO(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZ6(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.J(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aH(0,n,null)
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
return A.b(B.fdl(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6y(m),$async$$1)
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
x(v=B.ayz.prototype,"gcc5","PM",0)
x(v,"gccX","IT",0)
x(v,"gccs","xP",0)
x(v=B.aCt.prototype,"gc56","ade",0)
x(v,"gc57","Z6",0)
x(v,"gcrz","agW",0)
x(v=B.aCw.prototype,"gc58","Z7",0)
x(v,"gcrA","a1i",0)
x(B.aCu.prototype,"gc59","adf",0)
x(B.ayy.prototype,"gc5e","c5f",4)
x(v=B.aCv.prototype,"gcct","a_e",0)
x(v,"gcq9","cqa",4)
x(v,"gb08","axv",0)
x(v,"gct5","ahl",0)
x(v,"gbMQ","X3",0)
x(v,"gc5d","E1",0)
x(B.ayA.prototype,"gb3Y","a1h",0)
x(B.ayx.prototype,"gc5g","Z8",0)
x(v=B.ayD.prototype,"gaZP","caL",4)
x(v,"gc5a","adi",0)
x(v=B.ayB.prototype,"gcp9","a13",0)
x(v,"gaY0","adh",0)
w(B.ayw.prototype,"gaw6","aw7",8)
x(v=B.ayC.prototype,"gcfa","af8",0)
x(v,"gbMo","a9R",0)
w(v,"gaw6","aw7",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cir,B.a8T,B.at_,B.aB6,B.aEi,B.jn,B.abq,B.buv,B.EL,B.WK])
w(B.cis,B.cir)
w(B.b3e,B.a8T)
x(A.hV,[B.cin,B.cio,B.cip,B.cim,B.ciq,B.cit,B.ciu,B.civ,B.ciw,B.cix,B.ciy,B.ciz,B.ciA,B.fj_,B.fFA,B.fFC,B.fFB,B.fFP,B.fFQ,B.fkO,B.d1H,B.d1J,B.d1I,B.d1M,B.fmN,B.fng,B.c6Y,B.c74,B.c75,B.c70,B.c6Z,B.c71,B.c72,B.fFN,B.fFO,B.dPH,B.dPQ,B.dPO,B.dPP,B.fgc,B.fl_,B.fl0,B.c7m,B.fl2,B.fp1,B.fjs,B.fjt,B.c7r,B.fKx,B.d1G,B.d1E,B.dPD,B.dOz,B.dOF,B.dOY,B.dOE,B.dP4,B.dPo,B.dPp,B.dPq,B.dOW,B.dPd,B.dPc,B.dPe,B.dPf,B.dPg,B.dPi,B.dPj,B.dPb,B.dOH,B.dOI,B.dOD,B.dOZ,B.dOQ,B.dOO,B.dP3,B.dPn,B.dPA,B.dPB,B.d1C,B.d1D,B.d2_,B.d1Z,B.d1U,B.d1S,B.d1Q,B.d1T,B.d1V,B.d1R,B.d1z,B.d1A,B.d1B,B.d1v,B.d28,B.d29,B.d22,B.c7t,B.c7u,B.foE,B.fpa,B.fp9])
w(B.b3f,B.at_)
x(A.j8,[B.fFz,B.d1K,B.d1L,B.fmL,B.fmM,B.fnf,B.dOw,B.dPF,B.dPG,B.dPE,B.dPI,B.dPJ,B.dPK,B.dPL,B.dPM,B.dPN,B.dOx,B.dOy,B.fl1,B.d1F,B.dP0,B.dP1,B.dOA,B.dOB,B.dOG,B.dPr,B.dPs,B.dOV,B.dP5,B.dOK,B.dOX,B.dPh,B.dP6,B.dP7,B.dP8,B.dP9,B.dPa,B.dOJ,B.dOC,B.dP_,B.dOT,B.dOM,B.dOR,B.dOS,B.dOU,B.dOL,B.dP2,B.dPk,B.dPl,B.dPm,B.dPy,B.dPz,B.dPu,B.dPv,B.dPt,B.dPw,B.dPx,B.d1W,B.d1X,B.d1Y,B.d1N,B.d1P,B.d1O,B.d1y,B.d1x,B.d1w,B.d1s,B.d1t,B.d1u,B.d2c,B.d2d,B.d2e,B.d2f,B.d2g,B.d2h,B.d2j,B.d2i,B.d20,B.d21,B.d23,B.d24,B.d25,B.d26,B.d1r,B.d2b,B.d2a,B.foF])
x(A.m8,[B.abJ,B.N7,B.a8U,B.O9,B.WJ,B.O8,B.EM])
x(A.ag,[B.YE,B.Uo,B.Us,B.Up,B.YD,B.Uq,B.YF,B.YC,B.Pk,B.YH,B.YB,B.YI])
x(A.ah,[B.ayz,B.aCt,B.aCw,B.aCu,B.ayy,B.aCv,B.ayA,B.ayx,B.ayD,B.ayB,B.ayw,B.ayC])
x(A.au,[B.acb,B.ayv,B.bcD,B.abK,B.abI,B.bcE])
x(A.kk,[B.c73,B.c7_,B.c77,B.c78,B.fGr,B.dOP,B.dON,B.dPC,B.d27,B.c7s,B.fpb])
x(A.iQ,[B.bhZ,B.bu9])})()
A.jY(b.typeUniverse,JSON.parse('{"b3e":{"a8T":[]},"b3f":{"at_":[]},"YE":{"ag":[],"r":[]},"ayz":{"ah":["YE"]},"acb":{"au":[],"r":[]},"Uo":{"ag":[],"r":[]},"Us":{"ag":[],"r":[]},"aCt":{"ah":["Uo"]},"aCw":{"ah":["Us"]},"bhZ":{"iQ":[]},"Up":{"ag":[],"r":[]},"aCu":{"ah":["Up"]},"YD":{"ag":[],"r":[]},"Uq":{"ag":[],"r":[]},"abK":{"au":[],"r":[]},"YF":{"ag":[],"r":[]},"YC":{"ag":[],"r":[]},"Pk":{"ag":[],"r":[]},"YH":{"ag":[],"r":[]},"abI":{"au":[],"r":[]},"YB":{"ag":[],"r":[]},"YI":{"ag":[],"r":[]},"ayy":{"ah":["YD"]},"bu9":{"iQ":[]},"aCv":{"ah":["Uq"]},"ayv":{"au":[],"r":[]},"bcD":{"au":[],"r":[]},"ayA":{"ah":["YF"]},"ayx":{"ah":["YC"]},"ayD":{"ah":["Pk"]},"ayB":{"ah":["YH"]},"ayw":{"ah":["YB"]},"ayC":{"ah":["YI"]},"bcE":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u4"),k:x("LA()"),m:x("bk<n,n>"),F:x("qY"),g:x("az<jn?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jn>"),w:x("O<+file,name(lx,n)>"),u:x("O<cR>"),s:x("O<n>"),E:x("O<iQ>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iA"),e:x("icx"),af:x("E0"),U:x("jn"),b:x("cq"),C:x("aC"),aK:x("vZ"),ab:x("EL"),br:x("at_"),v:x("WK"),N:x("n"),X:x("bp<M>"),Q:x("lI"),D:x("dD"),aw:x("cx<n>"),cd:x("a1<a4<n,@>>"),c7:x("r"),ch:x("bX<ai<jn>>"),aW:x("bX<dD?>"),aY:x("bX<~>"),cx:x("abJ"),b1:x("bg<ai<jn>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aB6"),bG:x("aEi"),q:x("mZ"),B:x("pj<EL>"),c6:x("pj<a8U>"),y:x("R"),i:x("M"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a4<n,@>?"),l:x("jn?"),R:x("aC?"),c:x("WK?"),d:x("+answerQr,transfer(n,az<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N7,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abq?"),bk:x("aB6?"),ag:x("aEi?"),dd:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aY7=new A.ay(C.aE,2,C.q,-1)
D.bUN=new A.a8(C.a3,C.a7,C.x,C.a1B,null,null)
D.aZN=new A.o(null,null,null,C.m9,null,D.bUN,C.n)
D.b0c=new A.o(null,null,null,C.m9,null,E.Gr,C.n)
D.abK=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acW=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adS=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afl=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fen=new A.x("Your team portal",null,C.dm,null,null,null,null,null,null,null,null,null)
D.fsw=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.d2W=x([D.fen,C.am,D.fsw],y.p)
D.blB=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d2W,null)
D.fwJ=new A.x("Create your organization",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fiE=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.dhX=x([D.fwJ,C.am,D.fiE],y.p)
D.blK=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dhX,null)
D.ft4=new A.x("Team Member sign-in",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fms=new A.x("Enter the access code and password from your organization.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.dfU=x([D.ft4,C.am,D.fms],y.p)
D.blV=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dfU,null)
D.brM=new A.Q(16,10,16,28)
D.brU=new A.Q(16,14,16,4)
D.bt6=new A.Q(20,0,20,16)
D.btC=new A.Q(20,8,20,16)
D.ai2=new A.Q(24,22,24,20)
D.a_H=new A.a_(63394,"MaterialIcons",!1)
D.al1=new A.a_(63515,"MaterialIcons",!1)
D.bFl=new A.a_(983813,"MaterialIcons",!1)
D.bCz=new A.a_(62867,"MaterialIcons",!1)
D.bGk=new A.ae(D.bCz,44,C.c,null,null,null)
D.bHo=new A.ae(C.pR,null,C.ad,null,null,null)
D.bIN=new A.ae(C.iX,18,null,null,null,null)
D.bKt=new A.ae(D.a_H,26,C.c,null,null,null)
D.bKZ=new A.ae(C.BE,null,null,null,null,null)
D.bLx=new A.ae(C.ym,null,null,null,null,null)
D.bMF=new A.ae(W.Nw,null,null,null,null,null)
D.bMZ=new A.ae(C.ho,16,null,null,null,null)
D.bQr=new A.ae(C.ra,16,null,null,null,null)
D.bGB=new A.ae(C.ng,null,null,null,null,null)
D.bRh=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bM4=new A.ae(C.FJ,null,null,null,null,null)
D.bRm=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bM4,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bGW=new A.ae(H.Ge,null,null,null,null,null)
D.bRx=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGW,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cEG=x([C.fb,C.aZ,C.aE],y.O)
D.bWF=new A.a8(C.ax,C.aC,C.x,D.cEG,null,null)
D.cE8=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PI=x([C.fb,C.aE],y.O)
D.PX=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mA=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.daN=x([C.pw,C.aE],y.O)
D.e1P={iceServers:0}
D.aG_={urls:0}
D.dlz=new A.bk(D.aG_,["stun:stun.l.google.com:19302"],y.m)
D.dly=new A.bk(D.aG_,["stun:stun1.l.google.com:19302"],y.m)
D.cUr=x([D.dlz,D.dly],A.ax("O<a4<n,n>>"))
D.dkS=new A.bk(D.e1P,[D.cUr],A.ax("bk<n,@>"))
D.Hv=new B.N7(0,"lanDirect")
D.Rf=new B.N7(1,"cloudStash")
D.dwI=new B.N7(2,"inlineInstant")
D.Rg=new B.N7(3,"webrtcLink")
D.z4=new B.N7(4,"videoCloud")
D.fsv=new A.x("Receive file",null,C.nw,null,null,null,null,null,null,null,null,null)
D.cud=x([E.amJ,C.ab,D.fsv],y.p)
D.eKC=new A.cm(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.cud,null)
D.e7u=new A.D(C.cl,D.eKC,null)
D.f5z=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2g,null,null,null)
D.feW=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f5z,null,C.L,null,null,null,null,null,null,null)
D.e6M=new A.D(C.B7,D.feW,null)
D.b4r=new A.cr(C.A,null,null,D.e6M,null)
D.edf=new A.cL(0,null,0,28,null,null,D.b4r,null)
D.edy=new B.a8U(0,"RTCDataChannelConnecting")
D.aLk=new B.a8U(1,"RTCDataChannelOpen")
D.aLl=new B.a8U(3,"RTCDataChannelClosed")
D.edz=new B.EM(0,"RTCIceConnectionStateNew")
D.edA=new B.EM(1,"RTCIceConnectionStateChecking")
D.edB=new B.EM(2,"RTCIceConnectionStateCompleted")
D.edC=new B.EM(3,"RTCIceConnectionStateConnected")
D.edD=new B.EM(4,"RTCIceConnectionStateCount")
D.edE=new B.EM(5,"RTCIceConnectionStateFailed")
D.edF=new B.EM(6,"RTCIceConnectionStateDisconnected")
D.aLm=new B.EM(7,"RTCIceConnectionStateClosed")
D.aLn=new B.WJ(0,"RTCIceGatheringStateNew")
D.edG=new B.WJ(1,"RTCIceGatheringStateGathering")
D.a5H=new B.WJ(2,"RTCIceGatheringStateComplete")
D.a5I=new B.O8(0,"RTCPeerConnectionStateClosed")
D.aLo=new B.O8(1,"RTCPeerConnectionStateFailed")
D.aLp=new B.O8(2,"RTCPeerConnectionStateDisconnected")
D.aLq=new B.O8(3,"RTCPeerConnectionStateNew")
D.aLr=new B.O8(4,"RTCPeerConnectionStateConnecting")
D.aLs=new B.O8(5,"RTCPeerConnectionStateConnected")
D.edH=new B.O9(0,"RTCSignalingStateStable")
D.edI=new B.O9(1,"RTCSignalingStateHaveLocalOffer")
D.edJ=new B.O9(2,"RTCSignalingStateHaveRemoteOffer")
D.edK=new B.O9(3,"RTCSignalingStateHaveLocalPrAnswer")
D.edL=new B.O9(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLt=new B.O9(5,"RTCSignalingStateClosed")
D.eOD=new A.ar(160,48)
D.b5G=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eQ7=new A.a7(16,16,D.b5G,null)
D.fi2=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eRy=new A.b1(D.fi2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fpq=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eRB=new A.b1(D.fpq,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxM=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eRI=new A.b1(D.fxM,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fhE=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eS7=new A.b1(D.fhE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fte=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aO4=new A.b1(D.fte,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuC=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eSA=new A.b1(D.fuC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fza=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eSP=new A.b1(D.fza,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxd=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eSU=new A.b1(D.fxd,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fyn=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eTF=new A.b1(D.fyn,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgk=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eUb=new A.b1(D.fgk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fra=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eUw=new A.b1(D.fra,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkd=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eV1=new A.b1(D.fkd,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzg=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eV5=new A.b1(D.fzg,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgA=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eVb=new A.b1(D.fgA,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ffh=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eVq=new A.b1(D.ffh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fcd=new A.x("NGMY DOC SHARE",null,C.aPm,null,null,null,null,null,null,null,null,null)
D.fdv=new A.x("Show this to sender",null,C.k8,null,null,null,null,null,null,null,null,null)
D.feu=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fj1=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.fjn=new A.x("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fkn=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fkR=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnF=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fqo=new A.x("Send to their Doc Share",null,C.nu,null,null,null,null,null,null,null,null,null)
D.fqH=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fr_=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.frw=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.frB=new A.x("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.frZ=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eW,null,null,null,null,null,null,null,null,null)
D.fv5=new A.x("Share files & videos\nwith a scan.",null,C.aPn,null,null,null,null,null,null,null,null,null)
D.fvo=new A.x("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fSP=new B.YB(null)
D.a8M=new B.abJ(0,"docShare")
D.a8N=new B.abJ(1,"gate")
D.Uf=new B.abJ(2,"gateNoIndividual")})();(function staticFields(){$.aMZ=null
$.fb7=function(){var x=y.N
return A.T(x,x)}()
$.FZ=A.T(y.N,y.D)
$.afM=A.T(y.N,A.ax("lx"))
$.Qz=A.T(y.N,y.D)
$.fbF=A.T(y.N,A.ax("abq"))
$.c7l=A.T(y.S,A.ax("buv"))
$.h7F=1
$.hVb=null
$.hVa=null
$.hME=null
$.fXI=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"id1","hoS",()=>new B.cis())
x($,"iaX","h0o",()=>C.a.t(A.bu(A.bu(A.bu(A.GA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["FDKU+HDYFtfPJyYw0KcxSSu/sz4="]=a.current})($__dart_deferred_initializers__);