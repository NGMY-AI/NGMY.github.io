((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ciu:function ciu(){},
hGn(d){var x=null,w=new B.b3e(d,D.edE,new A.pj(x,x,y.c6),new A.pj(x,x,y.B))
w.bwS(d)
return w},
b3e:function b3e(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cip:function cip(d){this.a=d},
ciq:function ciq(d){this.a=d},
cir:function cir(d){this.a=d},
cio:function cio(d){this.a=d},
cis:function cis(d){this.a=d},
hGo(d,e){var x=y.N
x=new B.b3f(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwT(d,e)
return x},
b3f:function b3f(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
civ:function civ(d){this.a=d},
ciw:function ciw(d){this.a=d},
cix:function cix(d){this.a=d},
ciy:function ciy(d){this.a=d},
ciz:function ciz(d){this.a=d},
ciA:function ciA(d){this.a=d},
ciB:function ciB(d){this.a=d},
ciC:function ciC(d){this.a=d},
fXr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yx.LD(x,"ngmy_doc_share_v1",new B.fj2(),1)},
hMX(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zV(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QN(d,e){return B.i19(d,e)},
i19(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QN=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fXr():o,$async$QN)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mG(s,"blobs","readwrite")
C.iE.mi(J.mE(q,"blobs"),r,d)
x=8
return A.b(J.pt(q),$async$QN)
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
return A.i($async$QN,w)},
QM(d){return B.i18(d)},
i18(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fXr():o,$async$QM)
case 7:s=f
r=J.mG(s,"blobs","readonly")
x=8
return A.b(C.iE.zo(J.mE(r,"blobs"),d),$async$QM)
case 8:q=f
x=9
return A.b(J.pt(r),$async$QM)
case 9:o=B.hMX(q)
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
return A.i($async$QM,w)},
ags(d){return B.i17(d)},
i17(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ags=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMZ
x=7
return A.b(p==null?$.aMZ=B.fXr():p,$async$ags)
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
fj2:function fj2(){},
hPk(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnM(w,v))}return u},
hmk(d,e){var x,w={},v=A.aVl("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fFD(w,v,e)
C.vT.yi(v,"change",new B.fFF(w,v,!1))
C.vT.yi(v,"cancel",new B.fFE(w))
$.eV.mp()
v.click()
A.bN(C.agd,new B.fFC(w),y.H)},
fFD:function fFD(d,e,f){this.a=d
this.b=e
this.c=f},
fFF:function fFF(d,e,f){this.a=d
this.b=e
this.c=f},
fFE:function fFE(d){this.a=d},
fFC:function fFC(d){this.a=d},
CN(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTd()?3:4
break
case 3:x=5
return A.b(B.hht(e,d,s,!0,!1,f,g,h,!1,i),$async$CN)
case 5:x=1
break
case 4:x=6
return A.b(B.Qr(d,s,f,g,h,i),$async$CN)
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
return A.b(B.Ic(s,d),$async$CN)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.feu(s,d),$async$CN)
case 14:x=12
return A.b(r.hht(q,p,o,n,m,l,k,j,a1,i),$async$CN)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c5(A.e8(new B.fFS(s,i,d,f,g,h),!1,null,y.H)),$async$CN)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c5(A.e8(new B.fFT(s,i,d,f,g,h),!1,null,y.H)),$async$CN)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CN,w)},
Qr(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qr=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYZ(e),$async$Qr)
case 3:u=k
x=4
return A.b(B.aow(d,e,!1),$async$Qr)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ic(e,d),$async$Qr)
case 7:if(k){v=D.a8M
x=1
break}x=8
return A.b(B.Ur(e),$async$Qr)
case 8:v=t?D.Uf:D.a8N
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYX(d,e)){v=D.a8M
x=1
break}x=11
return A.b(B.Ur(e),$async$Qr)
case 11:v=t?D.Uf:D.a8N
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fSD(d,e)){v=D.a8M
x=1
break}x=14
return A.b(B.Ur(e),$async$Qr)
case 14:v=D.Uf
x=1
break
case 13:v=t?D.Uf:D.a8N
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qr,w)},
feu(d,e){var x=0,w=A.j(y.y),v
var $async$feu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYX(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYZ(d),$async$feu)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feu,w)},
hht(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c5(A.e8(new B.fkR(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hcB(d,e,f,g,h,i,j){return new B.YE(e,j,d,g,h,i,f,null)},
fmN(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fmN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fmQ(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fmN)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fmN,w)},
fnh(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fnh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bQ(C.K,null,new B.fnj(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fnh)
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
return A.i($async$fnh,w)},
fXA(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bs(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fyd(d,e){var x=0,w=A.j(y.H),v
var $async$fyd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ur(e),$async$fyd)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eK()
case 1:return A.h(v,w)}})
return A.i($async$fyd,w)},
fFS:function fFS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fFT:function fFT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abJ:function abJ(d,e){this.a=d
this.b=e},
fkR:function fkR(d,e,f,g,h,i,j,k,l){var _=this
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
d1M:function d1M(d,e){this.a=d
this.b=e},
d1J:function d1J(d){this.a=d},
d1L:function d1L(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1O:function d1O(){},
d1N:function d1N(d){this.a=d},
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
fmQ:function fmQ(d,e,f){this.a=d
this.b=e
this.c=f},
fmO:function fmO(d){this.a=d},
fmP:function fmP(d,e,f){this.a=d
this.b=e
this.c=f},
fnj:function fnj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fni:function fni(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6Z(d,e,f,g,h){return B.hBh(d,e,f,g,h)},
hBh(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6Z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iM(r.dt(d,new B.c7_(s,e,h,g,f,q),y.g),y.l),$async$c6Z)
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
return A.i($async$c6Z,w)},
aYU(d,e,f,g,h){return B.hBi(d,e,f,g,h)},
hBi(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYU=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atP("GET",d)
o=A.fP5()
if(o==null)o=new A.Lv(A.a([],y.W))
x=7
return A.b(o.eV(0,s).cM(0,C.F2),$async$aYU)
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
aYT(d){return B.hBf(d)},
hBf(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vb(d,null).cM(0,C.nU),$async$aYT)
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
c6Y(d){return B.hBg(d)},
hBg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vb(d,null).cM(0,C.pM),$async$c6Y)
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
return A.i($async$c6Y,w)},
c7_:function c7_(d,e,f,g,h,i){var _=this
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
Ia(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hBn(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Ia(C.a.b2(u,v.length))}return null},
hBo(d){var x=B.Ia(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hBj(){var x,w=$.pq(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aC(10)
return C.d.fZ(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aC(24)]},
a6n(d){return B.hBk(d)},
hBk(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a6o(d,e){return B.hBl(d,e)},
hBl(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
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
r=B.Ia(s==null?"":s)
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
p=B.Ia(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Br)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hBj()
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
for(;;)switch(x){case 0:r=B.Ia(d)
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
a6q(d,e,f,g){return B.hBp(d,e,f,g)},
hBp(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6q=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gam(d)){v=!1
x=1
break}r=B.Ia(f)
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
break}if(g.cI(d,0,new B.c75())>1048576||g.b4(d,new B.c76())){v=B.Eh(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
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
h=g.dt(d,new B.c77(),i)
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
Eh(d,e,f,g,h){return B.hBm(d,e,f,g,h)},
hBm(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eh=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eh)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cG(a6)
k=l.cI(a6,0,new B.c71())
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
a1=B.Ie(a9,q)
a0=new A.K5(a1)
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
a1=l.dt(a6,new B.c72(),e)
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
else{r=J.b6(r,new B.c70(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6o(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYV,w)},
N5(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$N5=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6n("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$N5)
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
return A.b(B.aYW(k,a0),$async$N5)
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
return A.b(B.aZ0(h),$async$N5)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Uy(g,a0),$async$N5)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a1(r,new B.c73(),q),n)
d=A.C(new A.a1(r,new B.c74(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6o("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$N5)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$N5,w)},
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
break}i=B.i4W(k,j)
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
c75:function c75(){},
c76:function c76(){},
c77:function c77(){},
c71:function c71(){},
c72:function c72(){},
c70:function c70(){},
c73:function c73(){},
c74:function c74(){},
fFP(d,e){var x=0,w=A.j(y.H)
var $async$fFP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c5(A.e8(new B.fFQ(e),!1,null,y.H)),$async$fFP)
case 2:return A.h(null,w)}})
return A.i($async$fFP,w)},
bCv(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c5(A.e8(new B.fFR(g,e,f),!1,null,y.y)),$async$bCv)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCv,w)},
fFQ:function fFQ(d){this.a=d},
fFR:function fFR(d,e,f){this.a=d
this.b=e
this.c=f},
Uo:function Uo(d,e){this.c=d
this.a=e},
aCt:function aCt(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOy:function dOy(d,e){this.a=d
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
dPH:function dPH(d){this.a=d},
dPI:function dPI(d){this.a=d},
dPJ:function dPJ(d){this.a=d},
dPG:function dPG(d,e){this.a=d
this.b=e},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d){this.a=d},
dPM:function dPM(d,e){this.a=d
this.b=e},
dPN:function dPN(d,e){this.a=d
this.b=e},
dPO:function dPO(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPS:function dPS(){},
dPQ:function dPQ(d){this.a=d},
dPR:function dPR(d,e){this.a=d
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
dOz:function dOz(d){this.a=d},
dOA:function dOA(d){this.a=d},
fSE(d){var x=d.hQ
if(x>=0)return C.o.N(x)
return 10},
hBr(d){var x=d.kF
if(x>=0)return x
return 4.99},
hBq(d){var x=d.lm,w=y.N
w=x.j0(x,new B.c79(),w,w)
return w},
h7F(d){var x=d.kG,w=y.N
w=x.j0(x,new B.c7a(),w,w)
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
fSD(d,e){var x,w,v
if(B.hBr(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hBq(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYX(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h7F(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h7G(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.h7F(d),x,x)
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
break}u=B.fSE(d)
if(u<=0){v=!1
x=1
break}if(B.fSD(d,e)){v=!1
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
return A.b(B.Ic(e,d),$async$aYY)
case 3:if(g){v=-1
x=1
break}u=B.fSE(d)
if(u<=0){v=-1
x=1
break}if(B.fSD(d,e)){v=-1
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
c7c(d,e,f){var x=0,w=A.j(y.y),v
var $async$c7c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ic(e,d),$async$c7c)
case 3:if(h){v=!1
x=1
break}v=B.aow(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7c,w)},
c7b(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c7b=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c7c(d,u,i.gTd()),$async$c7b)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7b,w)},
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
case 3:B.h7G(d,u,30)
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
break}B.h7G(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6r)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6r,w)},
c79:function c79(){},
c7a:function c7a(){},
fGs(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fGs=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fGs)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fba.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hO([r],e.c))
s.toString
$.fba.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGs,w)},
i7d(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fba.bo($.fba,new B.fGu(d))},
fGu:function fGu(d){this.a=d},
fcA(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fcA=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.jf,null,y.H),$async$fcA)
case 3:C.zU.fc(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mp()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcA,w)},
afj(d,e,f){var x=0,w=A.j(y.H),v
var $async$afj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fbI.n(0,d,new B.abq(A.bn(e,!0,v)))
x=3
return A.b(A.aA(),$async$afj)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afj)
case 2:return A.h(null,w)}})
return A.i($async$afj,w)},
afd(d){return B.hR9(d)},
hR9(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fbI.h(0,d)
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
break}o=J.b6(s,new B.fgf(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abq(r)
$.fbI.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afd,w)},
Qh(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FZ.n(0,d,u)
x=3
return A.b(B.QN(d,u),$async$Qh)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qh,w)},
aNj(d){return B.hR7(d)},
hR7(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNj=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FZ.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QM(d),$async$aNj)
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
case 9:B.Qh(d,q)
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
hNj(d){if(d==null)return A.f8(null,y.K)
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
A.fI(r,"loadend",new B.fl2(r,t),!1,s)
A.fI(r,"error",new B.fl3(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ii(0,C.LN,new B.fl4())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a15,w)},
aND(d,e,f){return B.hTo(d,e,f)},
hTo(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
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
return A.b(B.QN(o,p),$async$aND)
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
aNC(d,e,f){return B.hTn(d,e,f)},
hTn(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
$.Qy.n(0,s,r)
x=11
return A.b(B.Qh(s,r),$async$aNC)
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
Bs(d,e,f,g,h,i){return B.hBA(d,e,f,g,h,i)},
hBA(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
return A.b(B.Qh(s,d),$async$Bs)
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
k=B.h7I(n,null,l)
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
$.Qy.n(0,h,g)
B.Qh(h,g)
x=9
break
case 10:x=11
return A.b(B.aNC(d,m,o),$async$Ut)
case 11:case 9:r.K(t,i)
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
fSI(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fSI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h7I(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Id(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.Bs(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSI,w)},
Id(d,e,f,g,h,i){return B.hBz(d,e,f,g,h,i)},
hBz(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Id=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aC(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.K5(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Id)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.cn(m)){x=6
break}J.h0(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Rk(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kG(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QN(k,l),$async$Id)
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
return A.b(j.a7(0),$async$Id)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.QN(k,new Uint8Array(A.ce(n))),$async$Id)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afj(r,q,g),$async$Id)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZ4(),null)
x=17
return A.b(B.Aw(d),$async$Id)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.Ga(d,e),$async$Id)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Id,w)},
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
return A.b(B.QM(u[o]),$async$Uv)
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
case 5:i=$.Qy.h(0,s)
if(i==null)i=$.FZ.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rl(d,e),$async$Uv)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.Qy.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zV(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uv,w)},
h7I(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rl(d,e){return B.hBB(d,e)},
hBB(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rl=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qy.h(0,f)
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
$.Qy.n(0,f,r)
B.Qh(f,r)
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
return A.b(B.QM(g[l]),$async$rl)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.K(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.ano()
if(!C.aH.gam(r)){$.FZ.n(0,f,r)
$.Qy.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNj(f),$async$rl)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.Qy.n(0,f,j)
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
$.Qy.n(0,f,h)
B.Qh(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rl,w)},
hBE(d){var x,w,v=$.afM.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hBF(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hO([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hBC(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aoE(d,e,f,g,h){return B.hBD(d,e,f,g,h)},
hBD(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
h7K(d,e,f,g,h){var x,w,v,u,t=$.h7J
$.h7J=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aC(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c7n.n(0,t,new B.buv(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axm(u)))
return t},
fSJ(d){var x=0,w=A.j(y.H)
var $async$fSJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSJ,w)},
Ie(d,e){var $async$Ie=A.e(function(a0,a1){switch(a0){case 2:s=v
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
return A.q1(B.Uv(d,e,p,o<q?o:q),$async$Ie,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q1(A.Fw(n),$async$Ie,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q1(B.afd("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ie,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q1(B.QM(h[l]),$async$Ie,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q1(A.Fw(k),$async$Ie,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q1(B.rl(d,e),$async$Ie,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q1(A.Fw(A.zV(j,p,o<i?o:i)),$async$Ie,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q1(null,0,w)
case 2:return A.q1(t.at(-1),1,w)}})
var x=0,w=A.hgm($async$Ie,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hib(w)},
aZ6(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZ6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c7n.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
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
for(;;)switch(x){case 0:r=$.c7n.W(0,d)
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
for(;;)switch(x){case 0:r=$.c7n.W(0,d)
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
c7p(d,e,f){var x=0,w=A.j(y.H)
var $async$c7p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzx(d,e,f),$async$c7p)
case 2:return A.h(null,w)}})
return A.i($async$c7p,w)},
c7q(d,e,f){var x=0,w=A.j(y.H)
var $async$c7q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzy(d,e,f),$async$c7q)
case 2:return A.h(null,w)}})
return A.i($async$c7q,w)},
Ei(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ei=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Aw(d),$async$Ei)
case 2:p=g
J.np(p,new B.c7o(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FZ.W(0,v)
$.afM.W(0,e)
x=3
return A.b(B.afd(v),$async$Ei)
case 3:u=g
$.fbI.W(0,v)
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
v=B.fcA(t,A.aK(e.b,u,"_"),e.c)
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
break}r=J.b6(u,new B.fl5(),y.U)
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
t=J.b6(e,new B.fp4(),y.P)
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
s=t.bd(u,new B.fjv(e))
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
s=t.bd(u,new B.fjw(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cGD(f))
x=4
return A.b(B.Ga(d,u),$async$bzy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzy,w)},
abq:function abq(d){this.a=d},
fgf:function fgf(){},
fl2:function fl2(d,e){this.a=d
this.b=e},
fl3:function fl3(d){this.a=d},
fl4:function fl4(){},
c7o:function c7o(d){this.a=d},
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
fl5:function fl5(){},
fp4:function fp4(){},
fjv:function fjv(d){this.a=d},
fjw:function fjw(d){this.a=d},
a6z(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b4(d,new B.c7t())?3:4
break
case 3:x=5
return A.b(B.aZ7(d,e),$async$a6z)
case 5:u=g
if(u!=null){t=u.c
B.N7(d,u.b,e,t)}v=u
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
return A.b(B.aZ2(s),$async$a6z)
case 10:case 9:if(g){v=new A.PG(1,D.Rf,"NGMYDOCSYNC1|"+s)
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
B.N7(d,D.z5,e,t)
v=new A.PG(p,D.z5,t)
x=1
break}v=B.c7s(d,e)
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
return A.b(B.c7q(e,C.d.gL(d).a,r.b),$async$Uw)
case 7:case 6:q=r.a
x=8
return A.b(B.N7(d,D.Rf,e,q),$async$Uw)
case 8:v=new A.PG(d.length,D.Rf,q)
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
return A.b(B.c7l(s,d,e,t),$async$Ux)
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
return A.b(B.fSC(),$async$Uz)
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
return A.b(B.c7p(e,d.a,u),$async$a6A)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6A,w)},
N7(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N7=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Rf&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6A(p,f),$async$N7)
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
return A.b(B.c7k(o,p,u,f),$async$N7)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7l(o,p,f,t),$async$N7)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c7j(o,u,p,f),$async$N7)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N7,w)},
aZ7(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZ7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7r(e,d),$async$aZ7)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UB(!1,!0,d,e),$async$aZ7)
case 4:u=g
if(u!=null){t=u.b
v=new A.PG(u.a,D.z5,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ7,w)},
c7r(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Uv(d,s,0,1),$async$c7r)
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
return A.i($async$c7r,w)},
c7s(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6B(null,d,e),$async$c7s)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h7H(u)
if(t.length>800){v=null
x=1
break}v=new A.PG(d.length,D.dwO,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7s,w)},
aoF(d,e,f){return B.hBI(d,e,f)},
hBI(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aoF=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mF(g,1)
x=B.fSH(g)?3:4
break
case 3:x=5
return A.b(B.c7m(g),$async$aoF)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fSG(g,"NGMYDOCSYNC0")
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
break}if(J.d_(g,"N2|")){v=B.If(C.a.i(J.mF(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.If(C.a.i(J.mF(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.If(h,d,a0)
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
If(d,e,f){return B.hBG(d,e,f)},
hBG(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$If=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aYT(r),$async$If)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYT(A.cw(s,0,null)),$async$If)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6Z(o,r,a1,n,a2),$async$If)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c6Y(q),$async$If)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Uy(l,a2),$async$If)
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
return A.i($async$If,w)},
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
Uy(d,e){return B.hBH(d,e)},
hBH(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
N6:function N6(d,e){this.a=d
this.b=e},
c7t:function c7t(){},
a0G(d){var x=A.P(d).ax.a===C.I,w=x?D.adS:D.abK,v=x?D.afm:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acW:C.aL
return new A.aFw([w,s,v,u,t,x?C.fb:C.bT])},
hn2(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fKA(e),d,null,!0,!0,y.N)},
c78(d,e,f,g,h,i,j,k,l){return new B.Uq(e,l,d,f,k,j,g,h,i,null)},
YG(d,e,f,g,h,i,j){return new B.bcE(g,h,j,e,i,d,f,null)},
fKA:function fKA(d){this.a=d},
YD:function YD(d,e){this.c=d
this.a=e},
ayy:function ayy(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1I:function d1I(d){this.a=d},
d1G:function d1G(d){this.a=d},
d1H:function d1H(d){this.a=d},
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
dPF:function dPF(d){this.a=d},
dP2:function dP2(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dOC:function dOC(d,e,f){this.a=d
this.b=e
this.c=f},
dOB:function dOB(d){this.a=d},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOI:function dOI(d,e,f){this.a=d
this.b=e
this.c=f},
dOH:function dOH(d){this.a=d},
dPt:function dPt(d,e){this.a=d
this.b=e},
dPu:function dPu(d){this.a=d},
dP_:function dP_(d,e,f){this.a=d
this.b=e
this.c=f},
dOX:function dOX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOG:function dOG(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP6:function dP6(){},
dOM:function dOM(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOZ:function dOZ(d,e){this.a=d
this.b=e},
dPj:function dPj(d,e){this.a=d
this.b=e},
dPf:function dPf(d){this.a=d},
dPe:function dPe(d){this.a=d},
dPg:function dPg(){},
dPh:function dPh(){},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPk:function dPk(){},
dPl:function dPl(d){this.a=d},
dPd:function dPd(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d){this.a=d},
dPa:function dPa(d){this.a=d},
dPb:function dPb(d){this.a=d},
dPc:function dPc(d){this.a=d},
dOJ:function dOJ(){},
dOK:function dOK(d){this.a=d},
dOL:function dOL(d,e){this.a=d
this.b=e},
dOF:function dOF(d,e){this.a=d
this.b=e},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dP0:function dP0(d){this.a=d},
dP1:function dP1(d,e,f){this.a=d
this.b=e
this.c=f},
dOV:function dOV(d,e){this.a=d
this.b=e},
dOR:function dOR(d){this.a=d},
dOO:function dOO(d,e,f){this.a=d
this.b=e
this.c=f},
dOS:function dOS(d){this.a=d},
dOT:function dOT(d){this.a=d},
dOU:function dOU(){},
dOW:function dOW(d,e){this.a=d
this.b=e},
dOP:function dOP(d){this.a=d},
dON:function dON(d,e,f){this.a=d
this.b=e
this.c=f},
dOQ:function dOQ(){},
dP5:function dP5(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dPp:function dPp(d,e){this.a=d
this.b=e},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPC:function dPC(d){this.a=d},
dPA:function dPA(d){this.a=d},
dPB:function dPB(d){this.a=d},
dPD:function dPD(){},
dPE:function dPE(d,e){this.a=d
this.b=e},
dPw:function dPw(d,e){this.a=d
this.b=e},
dPx:function dPx(d,e,f){this.a=d
this.b=e
this.c=f},
dPv:function dPv(d,e,f){this.a=d
this.b=e
this.c=f},
dPy:function dPy(d,e){this.a=d
this.b=e},
dPz:function dPz(d,e){this.a=d
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
d1E:function d1E(){},
d1F:function d1F(){},
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
d21:function d21(){},
d20:function d20(d){this.a=d},
YF:function YF(d,e,f){this.c=d
this.d=e
this.a=f},
ayA:function ayA(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1Y:function d1Y(d){this.a=d},
d1Z:function d1Z(d,e,f){this.a=d
this.b=e
this.c=f},
d2_:function d2_(d,e){this.a=d
this.b=e},
d1W:function d1W(d,e){this.a=d
this.b=e},
d1U:function d1U(d){this.a=d},
d1S:function d1S(d){this.a=d},
d1P:function d1P(d){this.a=d},
d1V:function d1V(d){this.a=d},
d1R:function d1R(d){this.a=d},
d1X:function d1X(d){this.a=d},
d1T:function d1T(d){this.a=d},
d1Q:function d1Q(d){this.a=d},
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
d1B:function d1B(d){this.a=d},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1C:function d1C(d){this.a=d},
d1z:function d1z(d,e){this.a=d
this.b=e},
d1D:function d1D(d){this.a=d},
d1y:function d1y(d,e){this.a=d
this.b=e},
d1u:function d1u(d){this.a=d},
d1v:function d1v(d){this.a=d},
d1w:function d1w(d,e){this.a=d
this.b=e},
d1x:function d1x(d){this.a=d},
Pj:function Pj(d,e,f){this.c=d
this.d=e
this.a=f},
ayD:function ayD(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d2e:function d2e(d){this.a=d},
d2f:function d2f(d){this.a=d},
d2g:function d2g(d){this.a=d},
d2h:function d2h(d){this.a=d},
d2i:function d2i(d,e){this.a=d
this.b=e},
d2j:function d2j(d){this.a=d},
d2l:function d2l(d){this.a=d},
d2k:function d2k(d){this.a=d},
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
d2a:function d2a(d,e){this.a=d
this.b=e},
d2b:function d2b(d,e){this.a=d
this.b=e},
d22:function d22(d,e,f){this.a=d
this.b=e
this.c=f},
d23:function d23(d){this.a=d},
d24:function d24(){},
d29:function d29(){},
d25:function d25(d,e){this.a=d
this.b=e},
d26:function d26(d,e){this.a=d
this.b=e},
d27:function d27(d,e){this.a=d
this.b=e},
d28:function d28(d,e){this.a=d
this.b=e},
abI:function abI(d,e){this.c=d
this.a=e},
d1t:function d1t(d){this.a=d},
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
d2d:function d2d(d){this.a=d},
d2c:function d2c(d){this.a=d},
bcE:function bcE(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hBJ(){var x,w=$.pq(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aC(32)]
return"VT"+C.d.fZ(v)},
N8(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$N8=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$N8)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_video_relay_v1",null,!1,C.bH),$async$N8)
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
return A.i($async$N8,w)},
a6C(d){return B.hBK(d)},
hBK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
return A.b(B.N8(),$async$UA)
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
u=A.C(new A.a1(f,new B.c7v(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hBJ()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.C(new A.K(u,new B.c7w(s),t),t.k("ak.E"))
x=6
return A.b(B.N8(),$async$UB)
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
return A.b(B.N8(),$async$aoG)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoG,w)},
c7x(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N8(),$async$c7x)
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
return A.i($async$c7x,w)},
a6D(d,e,f,g){return B.hBL(d,e,f,g)},
hBL(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6D=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aoE("media",r,new B.c7u(s,e,g),f,q),$async$a6D)
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
Ej(d,e,f){return B.hBM(d,e,f)},
hBM(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.N8(),$async$Ej)
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
c7v:function c7v(){},
c7w:function c7w(d){this.a=d},
c7u:function c7u(d,e,f){this.a=d
this.b=e
this.c=f},
aPJ(){var x=0,w=A.j(y.H),v,u
var $async$aPJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hMI=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPJ)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPJ)
case 3:u=$.fXM
u=u==null?null:u.bE(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPJ)
case 4:$.fXM=$.hVe=$.hVf=null
return A.h(null,w)}})
return A.i($async$aPJ,w)},
foG(d){var x=0,w=A.j(y.H),v,u
var $async$foG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5H){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.foH(new A.bX(u,y.aY))
x=3
return A.b(u.ii(0,C.hJ,new B.foI()),$async$foG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$foG,w)},
hVc(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hBt(x):x},
fXQ(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a0(u,"WR")){v=B.aoI(u)
x=1
break}v=B.fSG(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXQ,w)},
fXP(d){var x=0,w=A.j(y.T),v,u,t
var $async$fXP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a0(u,"WR")){v=B.aoJ(u)
x=1
break}v=B.fSG(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXP,w)},
fGc(d){var x=0,w=A.j(y.T),v
var $async$fGc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoJ(d),$async$fGc)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fGc,w)},
bAp(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fXP(d),$async$bAp)
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
fdo(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fdo=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uu(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bs(d.ano(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdo,w)},
Gc(d,e,f){return B.hXB(d,e,f)},
hXB(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gc=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fXQ(a1),$async$Gc)
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
return A.b($.hoW().aDb(D.dkY,null),$async$Gc)
case 4:l=d.fXM=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axm(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fpd(f,k,new B.fpe(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a6W(0,new B.WK(r,"offer")),$async$Gc)
case 5:d=l
x=7
return A.b(l.ake(0),$async$Gc)
case 7:x=6
return A.b(d.a6O(0,a4),$async$Gc)
case 6:x=8
return A.b(B.foG(l),$async$Gc)
case 8:x=9
return A.b(l.ao7(),$async$Gc)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hVc(f,s)
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
case 12:g="NGMYDOCSYNC3A|z|"+B.h7H(h)
case 11:v=new A.bnv(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gc,w)},
foH:function foH(d){this.a=d},
foI:function foI(){},
fpe:function fpe(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fpd:function fpd(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fpc:function fpc(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hZs(d){switch(d){case"new":return D.edF
case"checking":return D.edG
case"connected":return D.edI
case"completed":return D.edH
case"failed":return D.edK
case"disconnected":return D.edL
case"closed":return D.aLo
case"count":return D.edJ}return D.aLo},
hZt(d){switch(d){case"new":return D.aLp
case"gathering":return D.edM
case"complete":return D.a5H}return D.aLp},
i8H(d){switch(d){case"stable":return D.edN
case"have-local-offer":return D.edO
case"have-local-pranswer":return D.edQ
case"have-remote-offer":return D.edP
case"have-remote-pranswer":return D.edR
case"closed":return D.aLv}return D.aLv},
i6X(d){switch(d){case"new":return D.aLs
case"connecting":return D.aLt
case"connected":return D.aLu
case"closed":return D.a5I
case"disconnected":return D.aLr
case"failed":return D.aLq}return D.a5I},
a8U:function a8U(d,e){this.a=d
this.b=e},
O8:function O8(d,e){this.a=d
this.b=e},
WJ:function WJ(d,e){this.a=d
this.b=e},
O7:function O7(d,e){this.a=d
this.b=e},
EM:function EM(d,e){this.a=d
this.b=e},
cit:function cit(){},
fUp(d){var x=new B.EL()
x.a=d
x.b=!0
return x},
EL:function EL(){this.b=this.a=$},
a8T:function a8T(){},
at_:function at_(){},
WK:function WK(d,e){this.a=d
this.b=e},
fSC(){var x=0,w=A.j(y.H)
var $async$fSC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fSC,w)},
fSF(d,e,f){var x=0,w=A.j(y.T),v
var $async$fSF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mu(D.mA))){v=null
x=1
break}v=B.fGs(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSF,w)},
h7H(d){var x,w=F.abb.a3K(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcw().aJ(x)}return C.cS.gcw().aJ(w)},
hBs(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.aba.bbu(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fSG(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hBs(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b2(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hBt(d){var x,w,v,u,t,s=A.a([],y.s)
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
hBu(){var x,w=$.pq(),v=J.e3(10,y.N)
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
c7d(d,e){return B.hBv(d,e)},
hBv(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c7d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hE("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c7d)
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
return A.i($async$c7d,w)},
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
break}u=B.hBu()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c7d(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZ1)
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
c7e(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c7e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBm("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c7e)
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
return A.i($async$c7e,w)},
aZ3(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZ3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Ib(),$async$aZ3)
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
return A.b(A.Ib(),$async$a6u)
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
return A.b(A.Ib(),$async$a6v)
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
return A.b(A.Ib(),$async$a6w)
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
c7f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c7f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c7f)
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
return A.i($async$c7f,w)},
Ic(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ic=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7f(d),$async$Ic)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZ3(t),$async$Ic)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aoA(d),$async$Ic)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYX(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aoA(d),$async$Ic)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ic,w)},
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
fSH(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c7i(d){return B.hBx(d)},
hBx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c7i=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6x(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bH),$async$c7i)
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
return A.i($async$c7i,w)},
aoD(d,e){return B.hBy(d,e)},
hBy(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
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
c7k(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7k=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aoD(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7k)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7k,w)},
c7j(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c7j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aoD(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c7j)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c7j,w)},
c7l(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6x(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aoD(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7l,w)},
c7m(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c7m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fSH(d)){v=null
x=1
break}x=3
return A.b(B.c7i(d),$async$c7m)
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
return A.i($async$c7m,w)},
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
aoH(d){return B.hBN(d)},
hBN(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
o=o==null?null:J.eT(J.vj(o))
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
i4W(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fEK(d){return B.i4Y(d)},
i4Y(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fEK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ia("media").Kt(d,3600),$async$fEK)
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
return A.i($async$fEK,w)},
CL(d,e,f,g,h,i){var x=null
return B.i4V(d,e,f,g,h,i)},
i4V(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CL=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h7K(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fSJ(r),$async$CL)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fEK(o),$async$CL)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6y(r),$async$CL)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aOv)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lv(A.a([],g))
x=15
return A.b(d.eV(0,A.atP("GET",A.cw(n,0,null))).cM(0,C.F2),$async$CL)
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
d=new A.K5(d)
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
aPs(d){return B.i4X(d)},
i4X(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
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
B.ciu.prototype={
aDb(d,e){return this.cI9(d,e)},
cI9(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kj(A.cB(t)))
t=J.k(u)
v=B.hGo(C.cS.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDb,w)}}
B.b3e.prototype={
bwS(d){var x=this,w=x.w
w.onclose=A.hh(new B.cip(x))
w.onopen=A.hh(new B.ciq(x))
w.onmessage=A.hh(new B.cir(x))
w.onbufferedamountlow=A.hh(new B.cis(x))},
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
case 3:v=B.fUp(J.eT(d))
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
case 8:v=t.fUp(s.amX(f,0,null))
x=1
break
case 7:case 4:v=B.fUp(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agt,w)}}
B.b3f.prototype={
bwT(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hh(new B.civ(x)))
w.addEventListener("icecandidate",A.hh(new B.ciw(x)))
w.addEventListener("iceconnectionstatechange",A.hh(new B.cix(x)))
w.onicegatheringstatechange=A.hh(new B.ciy(x))
w.addEventListener("signalingstatechange",A.hh(new B.ciz(x)))
if(!$.h0s())w.addEventListener("connectionstatechange",A.hh(new B.ciA(x)))
w.addEventListener("negotiationneeded",A.hh(new B.ciB(x)))
w.addEventListener("track",A.hh(new B.ciC(x)))},
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
a6O(d,e){return this.bmk(0,e)},
bmk(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
a6W(d,e){return this.bmA(0,e)},
bmA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
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
if(v.c!=null)v.m(new B.d1M(v,t))
return A.h(null,w)}})
return A.i($async$adb,w)},
PM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aow(t.e,t.c,!1),$async$PM)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.T(D.eUD)
x=1
break}x=4
return A.b(B.a6s(u.a.c,"individual"),$async$PM)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5k(A.e8(new B.d1J(u),!1,null,y.H)),$async$PM)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PM,w)},
IT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fmN(o),$async$IT)
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
break}if(!p){o.I(y.q).f.T(D.eRI)
x=1
break}x=5
return A.b(B.a6s(u.a.c,"member"),$async$IT)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5k(A.e8(new B.d1L(u),!1,null,y.H)),$async$IT)
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
return A.b(B.fnh(o),$async$xP)
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
break}if(!p){o.I(y.q).f.T(D.eRF)
x=1
break}x=10
return A.b(B.aoB(u.a.c),$async$xP)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.T(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5k(A.e8(new B.d1K(u),!1,null,y.H)),$async$xP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xP,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jb:C.pD,q=B.fSE(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.fck,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h6,t,t,t),C.aB,D.fvc,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bWI,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lC(new B.d1O(),t),C.N,w,C.e3,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acb(C.eS,C.ay5,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcca(),t),C.ac],v))
p.push(new B.acb(C.oL,C.a1B,"Team Member","Sign in with your organization access code + password",u.gcd1(),t))
p.push(C.ac)
p.push(new B.acb(C.akB,C.a37,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gccx(),t))
return A.c8(t,r,A.bl(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahT,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acb.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eE(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.pb,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bs,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
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
baX(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cGD(d){return this.baX(null,d)},
aCX(d){return this.baX(d,null)}}
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
break}u.m(new B.dOy(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adc,w)},
ade(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ade=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ade)
case 3:t=u.c
if(t!=null)t.I(y.q).f.T(D.eVx)
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
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a22,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ahu,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mI,w,C.kD,new A.ev(A.p(p,A.pK(p,p,!1,B.hBo(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bR,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kD,A.B(A.a([A.E(A.ey(N.BM,C.TJ,q.gc5b(),p),1),C.av,A.E(A.df(C.yw,C.a7V,q.gc5c(),A.bm(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0t,D.fr6,q.gcrE(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.Me,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Us.prototype={
R(){return new B.aCw(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.aCw.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Ia(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Z7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Ia(u.d.a.a)
if(t==null){u.m(new B.dPH(u))
x=1
break}u.m(new B.dPI(u))
s=u.a
r=s.c
x=3
return A.b(B.a6q(s.d,new B.dPJ(u),t,r),$async$Z7)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPK(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z7,w)},
a1i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dPL(r))
u=4
q=J.fp(r.a.d)
x=7
return A.b(B.rl(r.a.c,q),$async$a1i)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPM(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahc(p,m,l,j,k),$async$a1i)
case 8:o=e
if(r.c!=null)r.m(new B.dPN(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPO(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPP(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1i,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adS:D.abK,h=j?D.afm:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acW:C.aL
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
t=A.p(k,A.B(A.a([A.p(k,D.bKw,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fA,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a22,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uc(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhZ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.M7,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPQ(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m2,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L8(l.a.d,4)
m=A.C(new A.K(m,new B.dPR(x,new A.aFw(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.mn,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d7,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eQe)
else q.push(A.X(C.lm,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.dk(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eQ,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.btF,k,k,C.ah),1)
u=l.f?k:l.gcrF()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0t,D.fs5,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cl,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc5d()
t=A.bm(C.aE,k,k,0,C.c,k,C.nb,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bl(!0,A.mC(new B.dPS(),A.v(A.a([e,new A.D(D.bt9,A.v(A.a([s,C.N,i,C.ac,A.bG(l.f?C.rI:D.fqv,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XT,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
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
break}r.m(new B.dOz(r))
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
break}if(!q){p.I(y.q).f.T(D.eV8)
s=[1]
x=4
break}p.I(y.q).f.T(D.eTM)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOA(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adf,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jb:C.pD,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fj8,s,s,s,1,s,!0),p=A.p(s,D.blE,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gr,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bRp,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bRk,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bRA,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc5e()
u=A.bm(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mI,A.bG(t.r?C.rI:C.aRb,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abq.prototype={}
B.buv.prototype={
a4_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.ano()))
x=3
return A.b(B.QN(t,s),$async$a4_)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4_,w)},
gdd(){return this.a}}
B.N6.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YD.prototype={
R(){return new B.ayy(new A.as(C.as,$.aw()),A.jQ(!0,null,!0,!0,null,null,!1))}}
B.ayy.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1I(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c5k(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0G(d),u=x.a.c,t=u?C.ia:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jb:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.ani,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cB,16)],n),C.ao5,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uc(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu9()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fd,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aYb),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1G(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m2,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nx,new B.d1H(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cl,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eJ(w,C.K,new A.cS(Q.K3,A.c0(new A.D(C.xH,A.v(A.a([l,C.aQ,k,C.N,j,C.e3,i,C.e3,A.B(A.a([f,C.av,A.E(A.c0(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e7A,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc5j(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.O1,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Mg,C.d0,w,w,w)}}
B.bu9.prototype={
oy(d,e){return e.ak9(e.a.toUpperCase())}}
B.Uq.prototype={
R(){return new B.aCv(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCv.prototype={
a_(){var x=this
x.a1()
x.tD()
x.w=A.dv(C.jg,new B.dPF(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Uz()
this.a2()},
a0a(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N5(u.a.c),$async$a0a)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Aw(u.a.c),$async$a0a)
case 4:u.m(new s.dP2(u,e))
u.i_("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0a,w)},
tD(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N5(u.a.c),$async$tD)
case 3:t=e
x=4
return A.b(B.Aw(u.a.c),$async$tD)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dP3(u,s))
if(t>0)u.i_("Received "+A.t(t)+" file(s) via My Code.")
u.Nb(u.d)
B.Br(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tD,w)},
Nb(d){return this.bAP(d)},
bAP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
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
break}new B.dOC(u,r,p).$0()
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
case 12:u.m(new o.dOD(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nb,w)},
Ny(d){return this.bH1(d)},
bH1(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ny=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6A(d,u.a.c),$async$Ny)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOI(u,d,t))
x=6
return A.b(A.fJ(new A.fC(t)),$async$Ny)
case 6:u.i_("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fC(r.toUpperCase())),$async$Ny)
case 7:u.i_("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Ny,w)},
i_(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.T(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tE(d,e){return this.cC6(d,e)},
cC6(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dPt(r,e))
u=3
x=6
return A.b(d.$0(),$async$tE)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dPu(r))
$.eV.mp()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tE,w)},
gaU5(){var x=this.a
return x.f||x.r||x.w},
HQ(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaU5()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c7b(s,n,r,q,o,t),$async$HQ)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i_("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fyd(o,u.a.c),$async$HQ)
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
break}if(p==null){u.i_("No organization portal found.")
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
return A.b(A.a5(t,!1).c5(A.e8(new B.dP_(u,r,q),!1,null,y.H)),$async$a_e)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_e,w)},
a0l(d){return this.clg(d)},
clf(){return this.a0l(1)},
clg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaU5()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoy(u.a.c),$async$a0l)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0l,w)},
abd(d,e,f){return this.bXy(d,e,f)},
bXy(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i_(e)
x=1
break}x=3
return A.b(u.tE(new B.dOX(u,d,null,e,f),"Uploading\u2026"),$async$abd)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abd,w)},
bAX(){B.hmk(!1,new B.dOG(this))
return},
cqf(){this.m(new B.dP7(this))},
axv(){var x=0,w=A.j(y.H),v=this
var $async$axv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAX()
return A.h(null,w)}})
return A.i($async$axv,w)},
ab9(){var x=0,w=A.j(y.H),v=this
var $async$ab9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tE(new B.dOM(v),"Importing\u2026"),$async$ab9)
case 2:return A.h(null,w)}})
return A.i($async$ab9,w)},
RO(d){return this.cBx(d)},
cBx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c5(A.e8(new B.dPq(u,d),!1,null,y.H)),$async$RO)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mu(D.PX)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c5(A.e8(new B.dPr(u,d),!1,null,y.H)),$async$RO)
case 8:x=1
break
case 7:x=u.bYf(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c5(A.e8(new B.dPs(u,d),!1,null,y.H)),$async$RO)
case 11:x=1
break
case 10:u.i_("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RO,w)},
bYf(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oC(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cEc,C.a.b2(x,w+1).toLowerCase())},
aeG(d){return this.cce(d)},
cce(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mu(D.mA)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c5(A.e8(new B.dOY(u,d),!1,null,y.H)),$async$aeG)
case 5:x=1
break
case 4:u.m(new B.dOZ(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeG,w)},
Ra(d){return this.ct9(d)},
ct9(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ra=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i_("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p3(t,s.c,s.f),$async$Ra)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tE(new B.dPj(u,d),"Preparing QR\u2026"),$async$Ra)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ra,w)},
ahl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dPk(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dPl(q),s),s.k("J.E"))
if(r.length===0){u.i_("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ra(r),$async$ahl)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahl,w)},
ahe(d){return this.csH(d)},
csH(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0G(r)
r=u.c
r.toString
x=3
return A.b(A.bQ(C.K,null,new B.dPd(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahe)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RO(d)
break
case"qr":u.Ra(A.a([d],y.r))
break
case"send_my_code":u.ccR(A.a([d],y.r))
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
q=new A.K(t,new B.dOJ(),A.U(t).k("K<1,n>")).fL(0)}t=u.d
s=A.U(t).k("a1<1>")
r=A.C(new A.a1(t,new B.dOK(q),s),s.k("J.E"))
if(r.length===0){u.i_("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p3(t,s.c,s.f),$async$X3)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tE(new B.dOL(u,r),"Preparing file\u2026"),$async$X3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
afM(d){return this.cjE(d)},
cjE(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hn2(d,!1),$async$afM)
case 3:s=f
r=s==null
q=B.a6x(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i_("Enter a valid 5\u20136 character code.")
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
return A.b(B.fFP(u,v.a.c),$async$aeM)
case 2:return A.h(null,w)}})
return A.i($async$aeM,w)},
bAW(){B.hmk(!1,new B.dOF(this,null))
return},
IS(d,e){return this.ccS(d,e)},
b_1(d){return this.IS(null,d)},
ccR(d){return this.IS(d,null)},
ccS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IS=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a1<1>")
k=A.C(new A.a1(p,new B.dP0(s),o),o.k("J.E"))
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
return A.b(s.tE(new B.dP1(l,s,r),"Preparing\u2026"),$async$IS)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.i_("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i_("No files selected.")
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
break}if(m)s.i_("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IS,w)},
I4(d){return this.bXl(d)},
bXl(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hBn(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b_1(t),$async$I4)
case 8:x=6
break
case 7:u.i_("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i_("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tE(new B.dOV(u,d),"Receiving video\u2026"),$async$I4)
case 11:x=1
break
case 10:x=12
return A.b(u.tE(new B.dOW(u,d),"Receiving\u2026"),$async$I4)
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
return A.b(A.a5(t,!1).c5(A.e8(new B.dP5(u),!1,null,y.N)),$async$E1)
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
agA(d){return this.coP(d)},
coP(d){var x=0,w=A.j(y.H),v=this
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tE(new B.dP4(v,d),"Saving\u2026"),$async$agA)
case 2:return A.h(null,w)}})
return A.i($async$agA,w)},
IE(d){return this.bJl(d)},
bJl(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(B.c7e(t),$async$IE)
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
return A.b(A.bQ(C.K,null,new B.dPp(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahr)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeM()
break
case"import":u.ab9()
break}case 1:return A.h(v,w)}})
return A.i($async$ahr,w)},
c5h(d){var x=d.c
if(C.a.a0(x,"video/")||d.mu(D.mA))return C.q0
if(C.a.a0(x,"image/")||d.mu(D.PX))return C.tU
if(C.a.t(x,"pdf"))return E.Ny
return D.al3},
B(d){var x,w,v=this,u=null,t=B.a0G(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gj,u,u,u,new B.dPA(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bL1,u,u,u,v.e?u:v.gccy(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcqe()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bFo:E.als,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0q,u,u,u,v.e?u:v.gc5i(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o3,u,u,u,v.e?u:v.gb09(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bMI,u,u,u,v.e?u:new B.dPB(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lC(new B.dPC(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m1(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayv(C.jn,s,!0,t,w?u:v.gcta(),u),1)
x.push(new A.D(D.brX,A.mC(new B.dPD(),A.B(A.a([s,C.av,A.E(new B.ayv(C.vG,"Export",!1,t,w?u:v.gbMT(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iz,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcD(t,v.e?u:v.gb09(),u)
else s=A.k8(!0,u,u,new B.dPE(v,t),s,u,D.brP,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayv.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bm(C.aE,t,t,0,C.c,t,C.vn,t,new A.b7(s,C.Y),t,t,t)
return A.df(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vn,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eW,t,t,t),u.r,v)}}
B.bcD.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mC(new B.d1E(),new A.D(E.YK,A.v(A.a([A.mC(new B.d1F(),A.p(x,A.X(C.y1,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ew,C.ie,x,x,new A.bp(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e3,A.df(C.o3,D.fvv,this.d,A.bm(C.aE,x,x,x,C.c,x,C.YF,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AR,x,x,new A.bp(0,1,w),s),x,x,x)}}
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
if(!o||i.mu(D.mA))p=D.daT
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
if(!(!o||i.mu(D.mA)))l.push(A.fQp(C.aE,!1,j,j,j,!1,j,j,new B.d20(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.o1,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cc))
return A.mC(new B.d21(),new A.D(C.e5,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.Ye,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.YF.prototype={
R(){return new B.ayA()},
gdd(){return this.c}}
B.ayA.prototype={
a_(){this.a1()
this.xG()},
q(){B.hBC(this.e)
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
n=B.hBF(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hBE(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1Y(s))
x=1
break}s.m(new B.d1Z(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d2_(s,q))
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
break}t.I(y.q).f.T(D.eSe)
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
bXe(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ko(u,C.A,v,new B.d1W(w,t),C.fW,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fL(t,C.A,v,new B.d1X(w),C.fW,C.du,!0,v,!1,v,v)
else return C.bI
return A.ul(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0G(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BN,u,u,u,v.gb3Z(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.E_
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.df(C.BN,D.feB,v.gb3Z(),A.bm(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bXe()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YC.prototype={
R(){return new B.ayx(A.ai1(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayx.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).ic(new B.d1B(v))
x.gcPx().ic(new B.d1C(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b3h
x.ic(new B.d1D(v))
v.xG()},
xG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rl(p.c,p.d),$async$xG)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1u(s))
x=1
break}x=8
return A.b(s.d.BW(0,new A.a2L(r,s.a.d.c)),$async$xG)
case 8:if(s.c==null){x=1
break}s.m(new B.d1v(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1w(s,q))
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
aRZ(d){var x=d.a
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
else{u=A.p(o,D.bGn,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.O1,C.n),o,88,o,o,o,o,o,88)
t=A.kZ(C.aE,o,o,m,0,new B.d1x(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRZ(p.w)+" / "+p.aRZ(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bm(C.aE,o,o,o,o,D.eOK,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yb:C.iW,o,o,o,o,o)
x=A.v(A.a([u,C.kD,t,x,C.d7,A.df(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc5l(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.D(C.tH,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pj.prototype={
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
return A.b(B.fSF(o.c,o.d,new B.d2e(s)),$async$P8)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d2f(s))
x=1
break}s.e=r
q=O.hYq(r)
if(q==null){s.m(new B.d2g(s))
x=1
break}s.d=q
q.aO(0,s.gaZQ())
x=8
return A.b(q.ib(0).cM(0,C.qZ),$async$P8)
case 8:if(s.c==null){x=1
break}s.m(new B.d2h(s))
x=9
return A.b(q.pS(0),$async$P8)
case 9:q.td(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d2i(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P8,w)},
caQ(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d2j(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CH(0,x.gaZQ())
w=x.d
if(w!=null)w.q()
B.i7d(x.e)
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
p=A.eC(A.a([A.aH(t,t,t,t,C.oS,t,t,t,u.gc5f(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ih(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.E_
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahv(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A_(s,t),A.aE(t,A.CY(A.p(t,A.X(q?I.yb:C.iW,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bR,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d2l(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bI}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.YH.prototype={
R(){return new B.ayB(new A.cs(null,y.A))}}
B.ayB.prototype={
gcBQ(){var x,w,v=this.a
if(v.e!==D.Rg)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcBv(){var x,w,v=this.a
if(v.e!==D.z5)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBQ()
if(x!=null){v.Qa(x)
v.e=A.dv(R.F5,new B.d2a(v,x))}w=v.gcBv()
if(w!=null){v.Q9(w)
v.f=A.dv(C.fU,new B.d2b(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q9(d){return this.chQ(d)},
chQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoG(d),$async$Q9)
case 3:t=f
x=4
return A.b(B.c7x(d),$async$Q9)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d22(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q9,w)},
Qa(d){return this.chR(d)},
chR(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fGc(d),$async$Qa)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAp(t),$async$Qa)
case 4:if(u.c==null){x=1
break}u.m(new B.d23(u))
u.c.I(y.q).f.T(D.aO6)
case 1:return A.h(v,w)}})
return A.i($async$Qa,w)},
gc1f(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc5g(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a13(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CH()){t=u.c
if(t!=null)t.I(y.q).f.T(D.eVi)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c5(A.e8(new B.d24(),!1,null,y.N)),$async$a13)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAp(s),$async$a13)
case 4:t=u.c
if(t!=null)t.I(y.q).f.T(D.aO6)
case 1:return A.h(v,w)}})
return A.i($async$a13,w)},
a95(d){return this.bH2(d)},
bH2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a95=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.d.aI(t,", "))),$async$a95)
case 3:if(d.e!=null){t=d.I(y.q).f
t.T(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
adg(d){return this.bGN(d)},
bGN(d){var x=0,w=A.j(y.H),v=this
var $async$adg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fC(v.a.c)),$async$adg)
case 2:if(d.e!=null)d.I(y.q).f.T(D.eSH)
return A.h(null,w)}})
return A.i($async$adg,w)},
a0Z(d){return this.coR(d)},
coR(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
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
gaV9(){var x,w=this.a
if(w.e!==D.Hv)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
a92(d){return this.bGW(d)},
bGW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a92=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaV9()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a92)
case 3:if(d.e!=null)d.I(y.q).f.T(D.eUi)
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
i=i!==D.Hv&&i!==D.Rg&&i!==D.z5
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hv||t===D.Rg||t===D.z5?l:A.aH(l,l,l,l,C.kY,l,l,l,m.gaY1(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pK(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc1f(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hv){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc5g(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bQu,D.fnM,new B.d25(m,d),l)],p))}if(m.a.e===D.Hv&&m.gaV9()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bN1,D.fku,new B.d26(m,d),l)],p))
if(m.a.e===D.z5){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.E2:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l)],p))}if(m.a.e===D.Rg){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.E2:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mo,l,l,l),C.ac,A.df(D.bIQ,D.fqO,m.gcpe(),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oi(i,A.c8(v,w,new A.D(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.ey(N.BM,C.TJ,new B.d27(m,d),l),1),C.av,A.E(A.df(C.yw,C.a7V,new B.d28(m,d),A.bm(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bG(C.zE,m.gaY1(),A.bm(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d29(),y.C)}}
B.abI.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pK(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bD,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ek(A.a([A.bG(C.zF,new B.d1t(d),x)],u),x,x,C.mR,v,x,x,x,x,D.fdC,x)}}
B.YB.prototype={
R(){return new B.ayw(A.z4(C.xo,C.nE,C.u5))}}
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
return A.c8(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fkY,x,x,x,1,x,!0),C.w,A.z3(this.d,C.bS,this.gaw6()),x,!1,!1,x,x)}}
B.YI.prototype={
R(){return new B.ayC(A.z4(C.xo,C.nE,C.u5))},
gdd(){return this.c}}
B.ayC.prototype={
bYh(d){var x=C.a.i(d)
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
if(s!=null)s.I(y.q).f.T(D.eVc)
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
return A.b(B.hn2(p,!0),$async$a9R)
case 3:t=e
p=t==null
s=B.a6x(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.T(D.eRP)
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
if(!s.bYh(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.amn,v,v,v,w.gbMr(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0x,v,v,v,w.gcff(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r7:P.Nh,v,v,v,v,v),v,v,v,new B.d2d(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.frD,v,v,v,1,v,!0)
u=A.z3(w.d,C.bS,w.gaw6())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.edl],s),v),v,!1,!1,v,v)}}
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
B.O8.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.WJ.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.O7.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EM.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cit.prototype={}
B.EL.prototype={}
B.a8T.prototype={}
B.at_.prototype={}
B.WK.prototype={}
var z=a.updateTypes(["az<~>()","R(jn)","n(jn)","Uq(Y)","~()","YE(Y)","H(H,jn)","Pj(Y)","~(lX)","cq(EL)","az<jn?>(@)","Uo(Y)","Us(Y)","D(jn)","jn(@)","a4<n,@>(jn)","YD(Y)","Up(Y)","YF(Y)","YC(Y)","YH(Y)","abI(Y)","ai<jn>()","YI(Y)","abK(Y,H)","YB(Y)","a4<n,aC>(jn)","cq(WJ)","cq(a8T)","az<cq>(EL)"])
B.cip.prototype={
$1(d){var x=this.a
x.x=D.aLn
x.y.K(0,D.aLn)},
$S:68}
B.ciq.prototype={
$1(d){var x=this.a
x.x=D.aLm
x.y.K(0,D.aLm)},
$S:68}
B.cir.prototype={
$1(d){var x=this.a
x.agt(A.aOb(d.data)).bz(new B.cio(x),y.b)},
$S:68}
B.cio.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cis.prototype={
$1(d){},
$S:68}
B.civ.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hGn(d.channel))},
$S:15}
B.ciw.prototype={
$1(d){},
$S:15}
B.cix.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hZs(w.iceConnectionState)
x.cx=w
if($.h0s())switch(w.a){case 0:x.cy=D.aLs
break
case 1:x.cy=D.aLt
break
case 3:x.cy=D.aLu
break
case 5:x.cy=D.aLq
break
case 6:x.cy=D.aLr
break
case 7:x.cy=D.a5I
break
default:break}},
$S:145}
B.ciy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hZt(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:145}
B.ciz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i8H(w.signalingState)},
$S:145}
B.ciA.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i6X(w.connectionState)},
$S:145}
B.ciB.prototype={
$1(d){},
$S:145}
B.ciC.prototype={
$1(d){},
$S:15}
B.fj2.prototype={
$1(d){var x=y.F.a(new A.rH([],[]).pA(d.target.result,!1)),w=C.xp.t(x.objectStoreNames,"blobs")
if(!w)C.xl.Kr(x,"blobs")},
$S:183}
B.fFD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vT.fc(this.b)
$.eV.mp()
this.c.$1(d)},
$S:442}
B.fFF.prototype={
$1(d){return this.a.$1(B.hPk(this.b,this.c))},
$S:34}
B.fFE.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fFC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fFS.prototype={
$1(d){var x=this
return B.hcB(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fFT.prototype={
$1(d){var x=this
return B.hcB(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fkR.prototype={
$1(d){var x=this
return B.c78(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1M.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1J.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c78(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1L.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c78(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1K.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c78(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1O.prototype={
$4(d,e,f,g){var x=null
return A.jH(A.B(A.a([A.aH(x,x,x,x,D.bHr,x,x,x,new B.d1N(d),x,x,x,x,x,x),A.E(A.Ex(D.PI,!0,x,C.a_B,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.PI,x,g,C.aid,0,e,f)},
$C:"$4",
$R:4,
$S:413}
B.d1N.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmQ.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eE,y.o).w,t=this.a,s=t?C.ia:C.c,r=A.m(28),q=A.p(v,D.blY,C.f,v,v,D.aZR,v,v,v,v,D.ai3,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bLA,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.D(C.Fi,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dT(C.de,new B.fmO(d),v),1),C.av,A.E(A.bG(D.fju,new B.fmP(p,x,d),A.bm(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LW,v,v,v,v),v)},
$S:60}
B.fmO.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fmP.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.T(D.eSW)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aB6(v,x))},
$S:0}
B.fnj.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eE,y.o).w,u=x.a,t=u?C.ia:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.blN,C.f,w,w,D.b0g,w,w,w,w,D.ai3,w,w,1/0),new A.D(C.Fi,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fXA(u,"Organization name",C.FJ,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fXA(u,"Access code",C.ng,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fXA(u,"Member password",H.Ge,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.frI,new B.fni(r,q,p,d),A.bm(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LW,w,w,w,w),w)},
$S:60}
B.fni.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.T(D.eT0)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEi(u,x,w))},
$S:0}
B.c7_.prototype={
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
return A.b(A.vb(p,null).cM(0,C.XS),$async$$1)
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
B.c75.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c76.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c77.prototype={
$1(d){return d.b},
$S:z+2}
B.c71.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c72.prototype={
$1(d){return d.b},
$S:z+2}
B.c70.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c73.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c74.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fFQ.prototype={
$1(d){return new B.Uo(this.a,null)},
$S:z+11}
B.fFR.prototype={
$1(d){return new B.Us(this.a,this.b,this.c,null)},
$S:z+12}
B.dOy.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPH.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPI.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPJ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPG(x,d))},
$S:2}
B.dPG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPL.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPM.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPO.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPS.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dPQ.prototype={
$1(d){var x=this.a
return x.f?null:x.Z7()},
$S:2}
B.dPR.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mu(D.PX))s=C.tU
else s=C.a.a0(s,"video/")||d.mu(D.mA)?C.q0:D.al3
x=this.b.a
w=y.p
return new A.D(C.kR,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoL(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOz.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOA.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c79.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.c7a.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:96}
B.fGu.prototype={
$2(d,e){return e===this.a},
$S:280}
B.fgf.prototype={
$1(d){return J.k(d)},
$S:17}
B.fl2.prototype={
$1(d){var x=this.b
B.hNj(C.Fw.ga5D(this.a)).bz(x.gcEW(x),y.H)},
$S:120}
B.fl3.prototype={
$1(d){return this.a.d5(0,null)},
$S:120}
B.fl4.prototype={
$0(){return null},
$S:11}
B.c7o.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fl5.prototype={
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
B.fp4.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fjv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fjw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7t.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.fKA.prototype={
$1(d){return new B.YD(this.a,null)},
$S:z+16}
B.d1I.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fK()},
$S:8}
B.d1G.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d1H.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPF.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0a()},
$S:12}
B.dP2.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dP3.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOC.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCX(this.c)}},
$S:0}
B.dOB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOD.prototype={
$0(){var x=J.bDz(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOI.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCX(this.c)}},
$S:0}
B.dOH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPt.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dPu.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dP_.prototype={
$1(d){return new B.Up(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOX.prototype={
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
case 8:case 7:r.i_(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOG.prototype={
$1(d){this.a.abd(d,"No files selected.","Added")},
$S:442}
B.dP7.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dP6(),A.U(x).k("K<1,n>")))},
$S:0}
B.dP6.prototype={
$1(d){return d.a},
$S:z+2}
B.dOM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.x3.c6().cRu(C.ZF,!0),$async$$0)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.i_("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i_("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aoF(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i_("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tD(),$async$$0)
case 9:o.i_("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dPq.prototype={
$1(d){return new B.Pj(this.a.a.c,this.b,null)},
$S:z+7}
B.dPr.prototype={
$1(d){return new B.YF(this.a.a.c,this.b,null)},
$S:z+18}
B.dPs.prototype={
$1(d){return new B.YC(this.a.a.c,this.b,null)},
$S:z+19}
B.dOY.prototype={
$1(d){return new B.Pj(this.a.a.c,this.b,null)},
$S:z+7}
B.dOZ.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dPj.prototype={
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
break}if(s==null){p.i_("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.clf(),$async$$0)
case 5:x=6
return A.b(p.tD(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dPf(p),r),new B.dPg(),r.k("K<ak.E,n>")).c_(0,new B.dPh())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c5(A.e8(new B.dPi(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p2(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uz(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPf.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dPe(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dPe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPg.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dPh.prototype={
$1(d){return d.length!==0},
$S:3}
B.dPi.prototype={
$1(d){var x=this.a
return new B.YH(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dPk.prototype={
$1(d){return d.a},
$S:z+2}
B.dPl.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPd.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kQ,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoL(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mu(D.mA)?C.tW:C.oP
p=!x||p.mu(D.mA)?"Play video":"View"
return A.c0(A.bl(!0,new A.D(C.B2,A.v(A.a([q,o,t,C.aB,B.YG(!1,u,!1,w,p,new B.dP8(d),v),B.YG(!1,u,!1,C.jn,"Share via QR",new B.dP9(d),"Letters/numbers QR code"),B.YG(!1,u,!1,D.a_H,"Send to their Code",new B.dPa(d),"Enter someone else's personal code"),B.YG(!1,u,!1,C.hA,"Download / save",new B.dPb(d),v),C.am,B.YG(!1,u,!0,C.e6,"Delete",new B.dPc(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kJ,v,v,C.n),C.be)},
$S:715}
B.dP8.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dP9.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dPa.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dPb.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dPc.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dOJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dOK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOL.prototype={
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
case 4:u.i_(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOF.prototype={
$1(d){var x=this.a
x.tE(new B.dOE(x,d,this.b),"Preparing\u2026")},
$S:442}
B.dOE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i_("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Ut(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i_("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCv(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i_("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP0.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dP1.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.fSI(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gc(new B.dOR(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i_("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOS(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOT(s))
case 5:x=8
return A.b(r.b.ii(0,C.F2,new B.dOU()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gam(t)){s.i_("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tD(),$async$$0)
case 9:s.i_("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOO(x,d,e))},
$S:132}
B.dOO.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOS.prototype={
$1(d){return new B.abI(this.a.a,null)},
$S:z+21}
B.dOT.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOU.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Ia(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6p(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b_1(B.Ia(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aoF(new B.dOP(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fSH(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i_(q)
x=1
break}x=10
return A.b(s.tD(),$async$$0)
case 10:o=J.cG(r)
p=o.eL(r,new B.dOQ()).gM(0)
s.i_(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dON(x,d,e))},
$S:132}
B.dON.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOQ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.dP5.prototype={
$1(d){return new B.YI(this.a.a.c,null)},
$S:z+23}
B.dP4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ5(u.a.c,v.b),$async$$0)
case 2:t.i_(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPp.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c0(A.bl(!0,new A.D(C.B2,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kQ,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YG(!0,w,!1,C.ng,"My Code",new B.dPm(d),"Your personal code & QR \u2014 others send docs to you"),B.YG(!1,w,!1,D.a_H,"Send to their Code",new B.dPn(this.a,d),"Enter someone else's 5-digit code + letter"),B.YG(!1,w,!1,S.yl,"Import backup",new B.dPo(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kJ,x,x,C.n),C.be)},
$S:715}
B.dPm.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dPn.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAW()},
$S:0}
B.dPo.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dPC.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Ik(D.PI,x,C.a_B,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gL(D.PI).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:694}
B.dPA.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPB.prototype={
$0(){this.a.ahr()
return null},
$S:0}
B.dPD.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dPE.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abK(e,w,v,this.b,x.e,x.c5h(w),new B.dPw(x,w),new B.dPx(x,v,w),new B.dPy(x,w),new B.dPz(x,w),null)},
$S:z+24}
B.dPw.prototype={
$0(){this.a.aeG(this.b)
return null},
$S:0}
B.dPx.prototype={
$0(){var x=this.a
return x.m(new B.dPv(x,this.b,this.c))},
$S:0}
B.dPv.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dPy.prototype={
$0(){this.a.Ny(this.b)
return null},
$S:0}
B.dPz.prototype={
$0(){this.a.ahe(this.b)
return null},
$S:0}
B.d1E.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d1F.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:134}
B.d21.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d20.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.d1Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1Z.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d2_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1W.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fL(w,C.A,x,new B.d1U(this.a),C.fW,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d1V(this.a))
return C.bI},
$S:130}
B.d1U.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1S(this.a))
return C.bI},
$S:197}
B.d1S.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1P(x))},
$S:8}
B.d1P.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1V.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1R(x))},
$S:8}
B.d1R.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1X.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1T(this.a))
return C.bI},
$S:197}
B.d1T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1Q(x))},
$S:8}
B.d1Q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1B.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1A(x,d))},
$S:1740}
B.d1A.prototype={
$0(){return this.a.f=this.b===C.ur},
$S:0}
B.d1C.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1z(x,d))},
$S:8}
B.d1z.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1D.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1y(x,d))},
$S:8}
B.d1y.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1u.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1v.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1w.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1x.prototype={
$1(d){return this.a.d.My(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d2e.prototype={
$0(){var x=this.a.a
return B.rl(x.c,x.d)},
$S:1741}
B.d2f.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d2g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d2h.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2i.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d2j.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d2l.prototype={
$0(){var x=this.a
x.m(new B.d2k(x))},
$S:0}
B.d2k.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h4(0)
else x.pS(0)},
$S:0}
B.d2a.prototype={
$1(d){return this.a.Qa(this.b)},
$S:12}
B.d2b.prototype={
$1(d){return this.a.Q9(this.b)},
$S:12}
B.d22.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d23.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d24.prototype={
$1(d){return D.fSY},
$S:z+25}
B.d29.prototype={
$2(d,e){if(d)B.Uz()},
$S:118}
B.d25.prototype={
$0(){return this.a.a95(this.b)},
$S:0}
B.d26.prototype={
$0(){return this.a.a92(this.b)},
$S:0}
B.d27.prototype={
$0(){return this.a.adg(this.b)},
$S:0}
B.d28.prototype={
$0(){return this.a.a0Z(this.b)},
$S:0}
B.d1t.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d2d.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pW(),$async$$0)
case 2:u.m(new B.d2c(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d2c.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7v.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mu(D.mA)},
$S:z+1}
B.c7w.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7u.prototype={
$2(d,e){return this.bij(d,e)},
bij(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
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
B.foH.prototype={
$1(d){if(d===D.a5H&&(this.a.a.a&30)===0)this.a.fQ(0)},
$S:z+27}
B.foI.prototype={
$0(){},
$S:11}
B.fpe.prototype={
bjS(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fdo(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h7K(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjS(d,e)},
$S:541}
B.fpd.prototype={
$1(d){var x=this
d.b=new B.fpc(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fpc.prototype={
$1(d){return this.bjR(d)},
bjR(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
s.b.K(0,m)
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
return A.b(B.fdo(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.ayz.prototype,"gcca","PM",0)
x(v,"gcd1","IT",0)
x(v,"gccx","xP",0)
x(v=B.aCt.prototype,"gc5b","ade",0)
x(v,"gc5c","Z6",0)
x(v,"gcrE","agW",0)
x(v=B.aCw.prototype,"gc5d","Z7",0)
x(v,"gcrF","a1i",0)
x(B.aCu.prototype,"gc5e","adf",0)
x(B.ayy.prototype,"gc5j","c5k",4)
x(v=B.aCv.prototype,"gccy","a_e",0)
x(v,"gcqe","cqf",4)
x(v,"gb09","axv",0)
x(v,"gcta","ahl",0)
x(v,"gbMT","X3",0)
x(v,"gc5i","E1",0)
x(B.ayA.prototype,"gb3Z","a1h",0)
x(B.ayx.prototype,"gc5l","Z8",0)
x(v=B.ayD.prototype,"gaZQ","caQ",4)
x(v,"gc5f","adi",0)
x(v=B.ayB.prototype,"gcpe","a13",0)
x(v,"gaY1","adh",0)
w(B.ayw.prototype,"gaw6","aw7",8)
x(v=B.ayC.prototype,"gcff","af8",0)
x(v,"gbMr","a9R",0)
w(v,"gaw6","aw7",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cit,B.a8T,B.at_,B.aB6,B.aEi,B.jn,B.abq,B.buv,B.EL,B.WK])
w(B.ciu,B.cit)
w(B.b3e,B.a8T)
x(A.hV,[B.cip,B.ciq,B.cir,B.cio,B.cis,B.civ,B.ciw,B.cix,B.ciy,B.ciz,B.ciA,B.ciB,B.ciC,B.fj2,B.fFD,B.fFF,B.fFE,B.fFS,B.fFT,B.fkR,B.d1J,B.d1L,B.d1K,B.d1O,B.fmQ,B.fnj,B.c7_,B.c76,B.c77,B.c72,B.c70,B.c73,B.c74,B.fFQ,B.fFR,B.dPJ,B.dPS,B.dPQ,B.dPR,B.fgf,B.fl2,B.fl3,B.c7o,B.fl5,B.fp4,B.fjv,B.fjw,B.c7t,B.fKA,B.d1I,B.d1G,B.dPF,B.dOB,B.dOH,B.dP_,B.dOG,B.dP6,B.dPq,B.dPr,B.dPs,B.dOY,B.dPf,B.dPe,B.dPg,B.dPh,B.dPi,B.dPk,B.dPl,B.dPd,B.dOJ,B.dOK,B.dOF,B.dP0,B.dOS,B.dOQ,B.dP5,B.dPp,B.dPC,B.dPD,B.d1E,B.d1F,B.d21,B.d20,B.d1W,B.d1U,B.d1S,B.d1V,B.d1X,B.d1T,B.d1B,B.d1C,B.d1D,B.d1x,B.d2a,B.d2b,B.d24,B.c7v,B.c7w,B.foH,B.fpd,B.fpc])
w(B.b3f,B.at_)
x(A.j8,[B.fFC,B.d1M,B.d1N,B.fmO,B.fmP,B.fni,B.dOy,B.dPH,B.dPI,B.dPG,B.dPK,B.dPL,B.dPM,B.dPN,B.dPO,B.dPP,B.dOz,B.dOA,B.fl4,B.d1H,B.dP2,B.dP3,B.dOC,B.dOD,B.dOI,B.dPt,B.dPu,B.dOX,B.dP7,B.dOM,B.dOZ,B.dPj,B.dP8,B.dP9,B.dPa,B.dPb,B.dPc,B.dOL,B.dOE,B.dP1,B.dOV,B.dOO,B.dOT,B.dOU,B.dOW,B.dON,B.dP4,B.dPm,B.dPn,B.dPo,B.dPA,B.dPB,B.dPw,B.dPx,B.dPv,B.dPy,B.dPz,B.d1Y,B.d1Z,B.d2_,B.d1P,B.d1R,B.d1Q,B.d1A,B.d1z,B.d1y,B.d1u,B.d1v,B.d1w,B.d2e,B.d2f,B.d2g,B.d2h,B.d2i,B.d2j,B.d2l,B.d2k,B.d22,B.d23,B.d25,B.d26,B.d27,B.d28,B.d1t,B.d2d,B.d2c,B.foI])
x(A.m8,[B.abJ,B.N6,B.a8U,B.O8,B.WJ,B.O7,B.EM])
x(A.ag,[B.YE,B.Uo,B.Us,B.Up,B.YD,B.Uq,B.YF,B.YC,B.Pj,B.YH,B.YB,B.YI])
x(A.ah,[B.ayz,B.aCt,B.aCw,B.aCu,B.ayy,B.aCv,B.ayA,B.ayx,B.ayD,B.ayB,B.ayw,B.ayC])
x(A.au,[B.acb,B.ayv,B.bcD,B.abK,B.abI,B.bcE])
x(A.kk,[B.c75,B.c71,B.c79,B.c7a,B.fGu,B.dOR,B.dOP,B.dPE,B.d29,B.c7u,B.fpe])
x(A.iR,[B.bhZ,B.bu9])})()
A.jY(b.typeUniverse,JSON.parse('{"b3e":{"a8T":[]},"b3f":{"at_":[]},"YE":{"ag":[],"r":[]},"ayz":{"ah":["YE"]},"acb":{"au":[],"r":[]},"Uo":{"ag":[],"r":[]},"Us":{"ag":[],"r":[]},"aCt":{"ah":["Uo"]},"aCw":{"ah":["Us"]},"bhZ":{"iR":[]},"Up":{"ag":[],"r":[]},"aCu":{"ah":["Up"]},"YD":{"ag":[],"r":[]},"Uq":{"ag":[],"r":[]},"abK":{"au":[],"r":[]},"YF":{"ag":[],"r":[]},"YC":{"ag":[],"r":[]},"Pj":{"ag":[],"r":[]},"YH":{"ag":[],"r":[]},"abI":{"au":[],"r":[]},"YB":{"ag":[],"r":[]},"YI":{"ag":[],"r":[]},"ayy":{"ah":["YD"]},"bu9":{"iR":[]},"aCv":{"ah":["Uq"]},"ayv":{"au":[],"r":[]},"bcD":{"au":[],"r":[]},"ayA":{"ah":["YF"]},"ayx":{"ah":["YC"]},"ayD":{"ah":["Pj"]},"ayB":{"ah":["YH"]},"ayw":{"ah":["YB"]},"ayC":{"ah":["YI"]},"bcE":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u4"),k:x("Lz()"),m:x("bk<n,n>"),F:x("qY"),g:x("az<jn?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jn>"),w:x("O<+file,name(lx,n)>"),u:x("O<cR>"),s:x("O<n>"),E:x("O<iR>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iA"),e:x("icB"),af:x("E0"),U:x("jn"),b:x("cq"),C:x("aC"),aK:x("w_"),ab:x("EL"),br:x("at_"),v:x("WK"),N:x("n"),X:x("bp<M>"),Q:x("lI"),D:x("dD"),aw:x("cx<n>"),cd:x("a1<a4<n,@>>"),c7:x("r"),ch:x("bX<ai<jn>>"),aW:x("bX<dD?>"),aY:x("bX<~>"),cx:x("abJ"),b1:x("bg<ai<jn>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aB6"),bG:x("aEi"),q:x("mZ"),B:x("pj<EL>"),c6:x("pj<a8U>"),y:x("R"),i:x("M"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a4<n,@>?"),l:x("jn?"),R:x("aC?"),c:x("WK?"),d:x("+answerQr,transfer(n,az<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N6,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abq?"),bk:x("aB6?"),ag:x("aEi?"),dd:x("M?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aYb=new A.ay(C.aE,2,C.q,-1)
D.bUQ=new A.a8(C.a3,C.a7,C.x,C.a1B,null,null)
D.aZR=new A.o(null,null,null,C.m9,null,D.bUQ,C.n)
D.b0g=new A.o(null,null,null,C.m9,null,E.Gr,C.n)
D.abK=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acW=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adS=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.afm=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.feu=new A.x("Your team portal",null,C.dm,null,null,null,null,null,null,null,null,null)
D.fsD=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.d3_=x([D.feu,C.am,D.fsD],y.p)
D.blE=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d3_,null)
D.fwQ=new A.x("Create your organization",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fiL=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.di2=x([D.fwQ,C.am,D.fiL],y.p)
D.blN=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.di2,null)
D.ftb=new A.x("Team Member sign-in",null,C.hg,null,null,null,null,null,null,null,null,null)
D.fmz=new A.x("Enter the access code and password from your organization.",null,G.Df,null,null,null,null,null,null,null,null,null)
D.dg_=x([D.ftb,C.am,D.fmz],y.p)
D.blY=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dg_,null)
D.brP=new A.Q(16,10,16,28)
D.brX=new A.Q(16,14,16,4)
D.bt9=new A.Q(20,0,20,16)
D.btF=new A.Q(20,8,20,16)
D.ai3=new A.Q(24,22,24,20)
D.a_H=new A.a_(63394,"MaterialIcons",!1)
D.al3=new A.a_(63515,"MaterialIcons",!1)
D.bFo=new A.a_(983813,"MaterialIcons",!1)
D.bCD=new A.a_(62867,"MaterialIcons",!1)
D.bGn=new A.ae(D.bCD,44,C.c,null,null,null)
D.bHr=new A.ae(C.pR,null,C.ad,null,null,null)
D.bIQ=new A.ae(C.iX,18,null,null,null,null)
D.bKw=new A.ae(D.a_H,26,C.c,null,null,null)
D.bL1=new A.ae(C.BE,null,null,null,null,null)
D.bLA=new A.ae(C.yn,null,null,null,null,null)
D.bMI=new A.ae(W.Nw,null,null,null,null,null)
D.bN1=new A.ae(C.ho,16,null,null,null,null)
D.bQu=new A.ae(C.rb,16,null,null,null,null)
D.bGE=new A.ae(C.ng,null,null,null,null,null)
D.bRk=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bM7=new A.ae(C.FJ,null,null,null,null,null)
D.bRp=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bM7,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bGZ=new A.ae(H.Ge,null,null,null,null,null)
D.bRA=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cEL=x([C.fb,C.aZ,C.aE],y.O)
D.bWI=new A.a8(C.ax,C.aC,C.x,D.cEL,null,null)
D.cEc=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.PI=x([C.fb,C.aE],y.O)
D.PX=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mA=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.daT=x([C.pw,C.aE],y.O)
D.e1U={iceServers:0}
D.aG1={urls:0}
D.dlF=new A.bk(D.aG1,["stun:stun.l.google.com:19302"],y.m)
D.dlE=new A.bk(D.aG1,["stun:stun1.l.google.com:19302"],y.m)
D.cUw=x([D.dlF,D.dlE],A.ax("O<a4<n,n>>"))
D.dkY=new A.bk(D.e1U,[D.cUw],A.ax("bk<n,@>"))
D.Hv=new B.N6(0,"lanDirect")
D.Rf=new B.N6(1,"cloudStash")
D.dwO=new B.N6(2,"inlineInstant")
D.Rg=new B.N6(3,"webrtcLink")
D.z5=new B.N6(4,"videoCloud")
D.fsC=new A.x("Receive file",null,C.nw,null,null,null,null,null,null,null,null,null)
D.cuh=x([E.amL,C.ab,D.fsC],y.p)
D.eKJ=new A.cm(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.cuh,null)
D.e7A=new A.D(C.cl,D.eKJ,null)
D.f5G=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2g,null,null,null)
D.ff2=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f5G,null,C.L,null,null,null,null,null,null,null)
D.e6S=new A.D(C.B7,D.ff2,null)
D.b4v=new A.cr(C.A,null,null,D.e6S,null)
D.edl=new A.cL(0,null,0,28,null,null,D.b4v,null)
D.edE=new B.a8U(0,"RTCDataChannelConnecting")
D.aLm=new B.a8U(1,"RTCDataChannelOpen")
D.aLn=new B.a8U(3,"RTCDataChannelClosed")
D.edF=new B.EM(0,"RTCIceConnectionStateNew")
D.edG=new B.EM(1,"RTCIceConnectionStateChecking")
D.edH=new B.EM(2,"RTCIceConnectionStateCompleted")
D.edI=new B.EM(3,"RTCIceConnectionStateConnected")
D.edJ=new B.EM(4,"RTCIceConnectionStateCount")
D.edK=new B.EM(5,"RTCIceConnectionStateFailed")
D.edL=new B.EM(6,"RTCIceConnectionStateDisconnected")
D.aLo=new B.EM(7,"RTCIceConnectionStateClosed")
D.aLp=new B.WJ(0,"RTCIceGatheringStateNew")
D.edM=new B.WJ(1,"RTCIceGatheringStateGathering")
D.a5H=new B.WJ(2,"RTCIceGatheringStateComplete")
D.a5I=new B.O7(0,"RTCPeerConnectionStateClosed")
D.aLq=new B.O7(1,"RTCPeerConnectionStateFailed")
D.aLr=new B.O7(2,"RTCPeerConnectionStateDisconnected")
D.aLs=new B.O7(3,"RTCPeerConnectionStateNew")
D.aLt=new B.O7(4,"RTCPeerConnectionStateConnecting")
D.aLu=new B.O7(5,"RTCPeerConnectionStateConnected")
D.edN=new B.O8(0,"RTCSignalingStateStable")
D.edO=new B.O8(1,"RTCSignalingStateHaveLocalOffer")
D.edP=new B.O8(2,"RTCSignalingStateHaveRemoteOffer")
D.edQ=new B.O8(3,"RTCSignalingStateHaveLocalPrAnswer")
D.edR=new B.O8(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aLv=new B.O8(5,"RTCSignalingStateClosed")
D.eOK=new A.ar(160,48)
D.b5K=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eQe=new A.a7(16,16,D.b5K,null)
D.fi9=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eRF=new A.b1(D.fi9,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fpx=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eRI=new A.b1(D.fpx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxT=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eRP=new A.b1(D.fxT,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fhL=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eSe=new A.b1(D.fhL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftl=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aO6=new A.b1(D.ftl,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuJ=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eSH=new A.b1(D.fuJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzh=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eSW=new A.b1(D.fzh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fxk=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eT0=new A.b1(D.fxk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fyu=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eTM=new A.b1(D.fyu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgr=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eUi=new A.b1(D.fgr,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frh=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eUD=new A.b1(D.frh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkk=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eV8=new A.b1(D.fkk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fzn=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eVc=new A.b1(D.fzn,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgH=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eVi=new A.b1(D.fgH,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ffo=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eVx=new A.b1(D.ffo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fck=new A.x("NGMY DOC SHARE",null,C.aPo,null,null,null,null,null,null,null,null,null)
D.fdC=new A.x("Show this to sender",null,C.k8,null,null,null,null,null,null,null,null,null)
D.feB=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fj8=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.fju=new A.x("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fku=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fkY=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnM=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fqv=new A.x("Send to their Doc Share",null,C.nu,null,null,null,null,null,null,null,null,null)
D.fqO=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fr6=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.frD=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.frI=new A.x("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fs5=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eW,null,null,null,null,null,null,null,null,null)
D.fvc=new A.x("Share files & videos\nwith a scan.",null,C.aPp,null,null,null,null,null,null,null,null,null)
D.fvv=new A.x("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fSY=new B.YB(null)
D.a8M=new B.abJ(0,"docShare")
D.a8N=new B.abJ(1,"gate")
D.Uf=new B.abJ(2,"gateNoIndividual")})();(function staticFields(){$.aMZ=null
$.fba=function(){var x=y.N
return A.T(x,x)}()
$.FZ=A.T(y.N,y.D)
$.afM=A.T(y.N,A.ax("lx"))
$.Qy=A.T(y.N,y.D)
$.fbI=A.T(y.N,A.ax("abq"))
$.c7n=A.T(y.S,A.ax("buv"))
$.h7J=1
$.hVf=null
$.hVe=null
$.hMI=null
$.fXM=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"id5","hoW",()=>new B.ciu())
x($,"ib0","h0s",()=>C.a.t(A.bu(A.bu(A.bu(A.GA(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["lW1pCL4V6nflCPoe3amOhx2h0TY="]=a.current})($__dart_deferred_initializers__);