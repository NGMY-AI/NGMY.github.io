((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cie:function cie(){},
hEV(d){var x=null,w=new B.b37(d,D.ebF,new A.pg(x,x,y.c6),new A.pg(x,x,y.B))
w.bwH(d)
return w},
b37:function b37(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ci9:function ci9(d){this.a=d},
cia:function cia(d){this.a=d},
cib:function cib(d){this.a=d},
ci8:function ci8(d){this.a=d},
cic:function cic(d){this.a=d},
hEW(d,e){var x=y.N
x=new B.b38(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwI(d,e)
return x},
b38:function b38(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cif:function cif(d){this.a=d},
cig:function cig(d){this.a=d},
cih:function cih(d){this.a=d},
cii:function cii(d){this.a=d},
cij:function cij(d){this.a=d},
cik:function cik(d){this.a=d},
cil:function cil(d){this.a=d},
cim:function cim(d){this.a=d},
fW8(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.ys.LB(x,"ngmy_doc_share_v1",new B.fi_(),1)},
hLt(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zN(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QD(d,e){return B.i_E(d,e)},
i_E(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMR
x=7
return A.b(o==null?$.aMR=B.fW8():o,$async$QD)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mE(s,"blobs","readwrite")
C.iD.mg(J.mC(q,"blobs"),r,d)
x=8
return A.b(J.pp(q),$async$QD)
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
return A.i($async$QD,w)},
QC(d){return B.i_D(d)},
i_D(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMR
x=7
return A.b(o==null?$.aMR=B.fW8():o,$async$QC)
case 7:s=f
r=J.mE(s,"blobs","readonly")
x=8
return A.b(C.iD.zg(J.mC(r,"blobs"),d),$async$QC)
case 8:q=f
x=9
return A.b(J.pp(r),$async$QC)
case 9:o=B.hLt(q)
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
return A.i($async$QC,w)},
ago(d){return B.i_C(d)},
i_C(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ago=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMR
x=7
return A.b(p==null?$.aMR=B.fW8():p,$async$ago)
case 7:s=f
r=J.mE(s,"blobs","readwrite")
C.iD.Fv(J.mC(r,"blobs"),d)
x=8
return A.b(J.pp(r),$async$ago)
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
return A.i($async$ago,w)},
fi_:function fi_(){},
hNR(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnF(w,v))}return u},
hkV(d,e){var x,w={},v=A.aVf("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fEn(w,v,e)
C.vM.ya(v,"change",new B.fEp(w,v,!1))
C.vM.ya(v,"cancel",new B.fEo(w))
$.eV.mn()
v.click()
A.bN(C.afU,new B.fEm(w),y.H)},
fEn:function fEn(d,e,f){this.a=d
this.b=e
this.c=f},
fEp:function fEp(d,e,f){this.a=d
this.b=e
this.c=f},
fEo:function fEo(d){this.a=d},
fEm:function fEm(d){this.a=d},
CI(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gT9()?3:4
break
case 3:x=5
return A.b(B.hg3(e,d,s,!0,!1,f,g,h,!1,i),$async$CI)
case 5:x=1
break
case 4:x=6
return A.b(B.Qi(d,s,f,g,h,i),$async$CI)
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
return A.b(B.fdr(s,d),$async$CI)
case 14:x=12
return A.b(r.hg3(q,p,o,n,m,l,k,j,a1,i),$async$CI)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c8(A.e8(new B.fEC(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c8(A.e8(new B.fED(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CI,w)},
Qi(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qi=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYT(e),$async$Qi)
case 3:u=k
x=4
return A.b(B.aoo(d,e,!1),$async$Qi)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.I5(e,d),$async$Qi)
case 7:if(k){v=D.a8o
x=1
break}x=8
return A.b(B.Ug(e),$async$Qi)
case 8:v=t?D.U5:D.a8p
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYR(d,e)){v=D.a8o
x=1
break}x=11
return A.b(B.Ug(e),$async$Qi)
case 11:v=t?D.U5:D.a8p
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fRi(d,e)){v=D.a8o
x=1
break}x=14
return A.b(B.Ug(e),$async$Qi)
case 14:v=D.U5
x=1
break
case 13:v=t?D.U5:D.a8p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
fdr(d,e){var x=0,w=A.j(y.y),v
var $async$fdr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYR(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYT(d),$async$fdr)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdr,w)},
hg3(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c8(A.e8(new B.fjE(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hbc(d,e,f,g,h,i,j){return new B.Yv(e,j,d,g,h,i,f,null)},
flA(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$flA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.flD(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$flA)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$flA,w)},
fm4(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fm4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.fm6(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fm4)
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
return A.i($async$fm4,w)},
fWh(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fwY(d,e){var x=0,w=A.j(y.H),v
var $async$fwY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ug(e),$async$fwY)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eJ()
case 1:return A.h(v,w)}})
return A.i($async$fwY,w)},
fEC:function fEC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fED:function fED(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abE:function abE(d,e){this.a=d
this.b=e},
fjE:function fjE(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yv:function Yv(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayr:function ayr(){this.c=this.a=this.d=null},
d1t:function d1t(d,e){this.a=d
this.b=e},
d1q:function d1q(d){this.a=d},
d1s:function d1s(d){this.a=d},
d1r:function d1r(d){this.a=d},
d1v:function d1v(){},
d1u:function d1u(d){this.a=d},
ac6:function ac6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAZ:function aAZ(d,e){this.a=d
this.b=e},
aEa:function aEa(d,e,f){this.a=d
this.b=e
this.c=f},
flD:function flD(d,e,f){this.a=d
this.b=e
this.c=f},
flB:function flB(d){this.a=d},
flC:function flC(d,e,f){this.a=d
this.b=e
this.c=f},
fm6:function fm6(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fm5:function fm5(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6I(d,e,f,g,h){return B.hzP(d,e,f,g,h)},
hzP(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6I=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dt(d,new B.c6J(s,e,h,g,f,q),y.g),y.l),$async$c6I)
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
return A.i($async$c6I,w)},
aYO(d,e,f,g,h){return B.hzQ(d,e,f,g,h)},
hzQ(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYO=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atG("GET",d)
o=A.fNL()
if(o==null)o=new A.Lo(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.EY),$async$aYO)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.C2(),$async$aYO)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bm(q,h,o,e,f,"Received via QR")
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
aYN(d){return B.hzN(d)},
hzN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v8(d,null).cM(0,C.nR),$async$aYN)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iw(A.iv(p.e)).ca(0,p.w),null)
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
c6H(d){return B.hzO(d)},
hzO(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v8(d,null).cM(0,C.pH),$async$c6H)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iw(A.iv(q.e)).ca(0,q.w)
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
return A.i($async$c6H,w)},
c6J:function c6J(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jj:function jj(d,e,f,g,h,i,j,k,l){var _=this
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
hzV(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.I3(C.a.b1(u,v.length))}return null},
hzW(d){var x=B.I3(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hzR(){var x,w=$.pm(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fX(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a6h(d){return B.hzS(d)},
hzS(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6h=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f3(d,null,!1,C.bG),$async$a6h)
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
return A.i($async$a6h,w)},
a6i(d,e){return B.hzT(d,e)},
hzT(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6i=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hC(d,e,!1,!1,C.cH,null),$async$a6i)
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
return A.i($async$a6i,w)},
Bl(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Bl)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.I3(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6j(r),$async$Bl)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6h("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bl)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.I3(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bl)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hzR()
x=14
return A.b(B.a6j(m),$async$Bl)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6i("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bl)
case 15:k=f
x=16
return A.b(B.a6i("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bl)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bl)
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
return A.i($async$Bl,w)},
a6j(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.I3(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6h("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6j)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6j,w)},
a6k(d,e,f,g){return B.hzX(d,e,f,g)},
hzX(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6k=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gam(d)){v=!1
x=1
break}r=B.I3(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6j(r),$async$a6k)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c6P())>1048576||g.b5(d,new B.c6Q())){v=B.Eb(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a6v("myCode",d,a0),$async$a6k)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cl(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Eb(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYW(u,g.gM(d),a0),$async$a6k)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pm().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c6R(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYP(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6k)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6k,w)},
Eb(d,e,f,g,h){return B.hzU(d,e,f,g,h)},
hzU(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eb=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eb)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c6L())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pm().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
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
a4=A.oQ(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9U(a1.a,a4,"media",a1.d,a2).wN(m,n,new A.Dt(!0,q.c)),$async$Eb)
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
a1=l.dt(a6,new B.c6M(),e)
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
return A.b(B.a6h(t),$async$aYP)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c6K(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6i(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYP,w)},
MZ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MZ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6h("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MZ)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cl(s)){v=0
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
return A.b(B.aYQ(k,a0),$async$MZ)
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
return A.b(B.aYV(h),$async$MZ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Un(g,a0),$async$MZ)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c6N(),q),n)
d=A.B(new A.a2(r,new B.c6O(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6i("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MZ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MZ,w)},
aYQ(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cl(h)){v=0
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
break}i=B.i3q(k,j)
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
c6P:function c6P(){},
c6Q:function c6Q(){},
c6R:function c6R(){},
c6L:function c6L(){},
c6M:function c6M(){},
c6K:function c6K(){},
c6N:function c6N(){},
c6O:function c6O(){},
fEz(d,e){var x=0,w=A.j(y.H)
var $async$fEz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c8(A.e8(new B.fEA(e),!1,null,y.H)),$async$fEz)
case 2:return A.h(null,w)}})
return A.i($async$fEz,w)},
bCo(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cl(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c8(A.e8(new B.fEB(g,e,f),!1,null,y.y)),$async$bCo)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCo,w)},
fEA:function fEA(d){this.a=d},
fEB:function fEB(d,e,f){this.a=d
this.b=e
this.c=f},
Ud:function Ud(d,e){this.c=d
this.a=e},
aCl:function aCl(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dOc:function dOc(d,e){this.a=d
this.b=e},
Uh:function Uh(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCo:function aCo(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dPl:function dPl(d){this.a=d},
dPm:function dPm(d){this.a=d},
dPn:function dPn(d){this.a=d},
dPk:function dPk(d,e){this.a=d
this.b=e},
dPo:function dPo(d){this.a=d},
dPp:function dPp(d){this.a=d},
dPq:function dPq(d,e){this.a=d
this.b=e},
dPr:function dPr(d,e){this.a=d
this.b=e},
dPs:function dPs(d,e){this.a=d
this.b=e},
dPt:function dPt(d){this.a=d},
dPw:function dPw(){},
dPu:function dPu(d){this.a=d},
dPv:function dPv(d,e){this.a=d
this.b=e},
bhS:function bhS(){},
Ue:function Ue(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCm:function aCm(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dOd:function dOd(d){this.a=d},
dOe:function dOe(d){this.a=d},
fRj(d){var x=d.hO
if(x>=0)return C.o.N(x)
return 10},
hzZ(d){var x=d.kC
if(x>=0)return x
return 4.99},
hzY(d){var x=d.lk,w=y.N
w=x.iY(x,new B.c6T(),w,w)
return w},
h6g(d){var x=d.kD,w=y.N
w=x.iY(x,new B.c6U(),w,w)
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
a6m(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a6m)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a6m)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6m,w)},
Ug(d){var x=0,w=A.j(y.H),v,u
var $async$Ug=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Ug)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ug)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ug,w)},
fRi(d,e){var x,w,v
if(B.hzZ(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hzY(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYR(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h6g(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h6h(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h6g(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kD=w},
aop(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aop=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aop)
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
return A.i($async$aop,w)},
aoq(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aop(d),$async$aoq)
case 3:u=f
x=5
return A.b(A.aA(),$async$aoq)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoq,w)},
aoo(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fRj(d)
if(u<=0){v=!1
x=1
break}if(B.fRi(d,e)){v=!1
x=1
break}x=3
return A.b(B.aop(e),$async$aoo)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoo,w)},
aYS(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.I5(e,d),$async$aYS)
case 3:if(g){v=-1
x=1
break}u=B.fRj(d)
if(u<=0){v=-1
x=1
break}if(B.fRi(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aop(e),$async$aYS)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYS,w)},
c6W(d,e,f){var x=0,w=A.j(y.y),v
var $async$c6W=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.I5(e,d),$async$c6W)
case 3:if(h){v=!1
x=1
break}v=B.aoo(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6W,w)},
c6V(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c6V=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c6W(d,u,i.gT9()),$async$c6V)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6V,w)},
a6l(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6l=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gT9()){v=!0
x=1
break}if(B.aYR(d,u)){v=!0
x=1
break}x=5
return A.b(A.le(u,C.Rt),$async$a6l)
case 5:x=k?3:4
break
case 3:B.h6h(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6l)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kS(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rt,"Doc Share for Organizations"),$async$a6l)
case 7:if(!k){v=!1
x=1
break}B.h6h(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6l)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6l,w)},
c6T:function c6T(){},
c6U:function c6U(){},
fFb(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fFb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fFb)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fa7.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hM([r],e.c))
s.toString
$.fa7.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFb,w)},
i5I(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fa7.bn($.fa7,new B.fFd(d))},
fFd:function fFd(d){this.a=d},
fbx(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fbx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],f))
s.toString
u=A.n3(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jb,null,y.H),$async$fbx)
case 3:C.zQ.fb(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mn()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbx,w)},
aff(d,e,f){var x=0,w=A.j(y.H),v
var $async$aff=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.faF.n(0,d,new B.abl(A.bm(e,!0,v)))
x=3
return A.b(A.aA(),$async$aff)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aff)
case 2:return A.h(null,w)}})
return A.i($async$aff,w)},
af9(d){return B.hPG(d)},
hPG(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.faF.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$af9)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cl(s)){v=null
x=1
break}o=J.b6(s,new B.ffc(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abl(r)
$.faF.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$af9,w)},
Q8(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Q8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FS.n(0,d,u)
x=3
return A.b(B.QD(d,u),$async$Q8)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q8,w)},
aNc(d){return B.hPE(d)},
hPE(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FS.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.QC(d),$async$aNc)
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
x=!J.cl(q)?9:10
break
case 9:B.Q8(d,q)
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
hLQ(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zN(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a0X(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fjQ(r,t),!1,s)
A.fI(r,"error",new B.fjR(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ig(0,C.LE,new B.fjS())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0X,w)},
aNw(d,e,f){return B.hRV(d,e,f)},
hRV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
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
return A.b(B.a0X(i),$async$aNw)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QD(o,p),$async$aNw)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aff(k,j,s),$async$aNw)
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
aNv(d,e,f){return B.hRU(d,e,f)},
hRU(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
return A.b(B.a0X(f),$async$aNv)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FS.n(0,s,r)
$.Qp.n(0,s,r)
x=11
return A.b(B.Q8(s,r),$async$aNv)
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
Bm(d,e,f,g,h,i){return B.hA7(d,e,f,g,h,i)},
hA7(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bm=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jj(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYZ(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Q8(s,d),$async$Bm)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Bm)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cT.gcw().aJ(d)),$async$Bm)
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
return A.b(B.An(e),$async$Bm)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.G3(e,j),$async$Bm)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bm,w)},
Ui(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Ui=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.An(d),$async$Ui)
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
k=B.h6j(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jj(m,n,k,l,j,"From folder",null,B.aYZ(),null)
$.afI.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0X(o),$async$Ui)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FS.n(0,h,g)
$.Qp.n(0,h,g)
B.Q8(h,g)
x=9
break
case 10:x=11
return A.b(B.aNv(d,m,o),$async$Ui)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.G3(d,t),$async$Ui)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ui,w)},
fRn(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fRn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h6j(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.I6(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.Bm(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRn,w)},
I6(d,e,f,g,h,i){return B.hA6(d,e,f,g,h,i)},
hA6(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$I6=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
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
if(J.cl(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.Ra(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.QD(k,l),$async$I6)
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
return A.b(B.QD(k,new Uint8Array(A.ce(n))),$async$I6)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aff(r,q,g),$async$I6)
case 16:f=new B.jj(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYZ(),null)
x=17
return A.b(B.An(d),$async$I6)
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
Uk(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Uk=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afI.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0X(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.af9(s),$async$Uk)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QC(u[o]),$async$Uk)
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
v=A.zN(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qp.h(0,s)
if(i==null)i=$.FS.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ri(d,e),$async$Uk)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qp.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zN(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uk,w)},
h6j(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ri(d,e){return B.hA8(d,e)},
hA8(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ri=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qp.h(0,f)
if(e==null)e=$.FS.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afI.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0X(s),$async$ri)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FS.n(0,f,r)
$.Qp.n(0,f,r)
B.Q8(f,r)
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
return A.b(B.af9(f),$async$ri)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axe(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QC(g[l]),$async$ri)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.J(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.anf()
if(!C.aG.gam(r)){$.FS.n(0,f,r)
$.Qp.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNc(f),$async$ri)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qp.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Uk(a0,a1,0,g),$async$ri)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.ce(i))
$.FS.n(0,f,h)
$.Qp.n(0,f,h)
B.Q8(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ri,w)},
hAb(d){var x,w,v=$.afI.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hAc(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hM([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hA9(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aow(d,e,f,g,h){return B.hAa(d,e,f,g,h)},
hAa(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aow=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afI.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0X(s),$async$aow)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ri(g,e),$async$aow)
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
return A.b(n.i8(d).wN(h,r,new A.Dt(!0,e.c)),$async$aow)
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
return A.i($async$aow,w)},
h6l(d,e,f,g,h){var x,w,v,u,t=$.h6k
$.h6k=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c76.n(0,t,new B.buo(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axe(u)))
return t},
fRo(d){var x=0,w=A.j(y.H)
var $async$fRo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fRo,w)},
I7(d,e){var $async$I7=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afI.h(0,h)
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
return A.pY(B.Uk(d,e,p,o<q?o:q),$async$I7,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pY(A.Fp(n),$async$I7,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pY(B.af9("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$I7,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pY(B.QC(h[l]),$async$I7,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pY(A.Fp(k),$async$I7,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pY(B.ri(d,e),$async$I7,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pY(A.Fp(A.zN(j,p,o<i?o:i)),$async$I7,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pY(null,0,w)
case 2:return A.pY(t.at(-1),1,w)}})
var x=0,w=A.heX($async$I7,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hgM(w)},
aZ0(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZ0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c76.h(0,d)
if(t==null||J.cl(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3U(),$async$aZ0)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ0,w)},
Uj(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Uj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c76.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3U(),$async$Uj)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aff(r.c,u,r.z),$async$Uj)
case 4:t=new B.jj(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYZ(),null)
u=r.a
x=5
return A.b(B.An(u),$async$Uj)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.G3(u,s),$async$Uj)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uj,w)},
a6s(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c76.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ago(u[s]),$async$a6s)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6s,w)},
c78(d,e,f){var x=0,w=A.j(y.H)
var $async$c78=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzq(d,e,f),$async$c78)
case 2:return A.h(null,w)}})
return A.i($async$c78,w)},
c79(d,e,f){var x=0,w=A.j(y.H)
var $async$c79=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzr(d,e,f),$async$c79)
case 2:return A.h(null,w)}})
return A.i($async$c79,w)},
Ec(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ec=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.An(d),$async$Ec)
case 2:p=g
J.no(p,new B.c77(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FS.W(0,v)
$.afI.W(0,e)
x=3
return A.b(B.af9(v),$async$Ec)
case 3:u=g
$.faF.W(0,v)
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
return A.b(B.ago(s[q]),$async$Ec)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ago(v),$async$Ec)
case 13:x=14
return A.b(B.G3(d,p),$async$Ec)
case 14:return A.h(null,w)}})
return A.i($async$Ec,w)},
aZ_(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ri(d,e),$async$aZ_)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fbx(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ_,w)},
An(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$An=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$An)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fjT(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$An,w)},
G3(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$G3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$G3)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fnP(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$G3)
case 3:return A.h(null,w)}})
return A.i($async$G3,w)},
bzq(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.An(d),$async$bzq)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fii(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCQ(f))
x=4
return A.b(B.G3(d,u),$async$bzq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzq,w)},
bzr(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.An(d),$async$bzr)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fij(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cG_(f))
x=4
return A.b(B.G3(d,u),$async$bzr)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzr,w)},
abl:function abl(d){this.a=d},
ffc:function ffc(){},
fjQ:function fjQ(d,e){this.a=d
this.b=e},
fjR:function fjR(d){this.a=d},
fjS:function fjS(){},
c77:function c77(d){this.a=d},
buo:function buo(d,e,f,g,h,i,j,k,l){var _=this
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
fjT:function fjT(){},
fnP:function fnP(){},
fii:function fii(d){this.a=d},
fij:function fij(d){this.a=d},
a6t(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.c7c())?3:4
break
case 3:x=5
return A.b(B.aZ1(d,e),$async$a6t)
case 5:u=g
if(u!=null){t=u.c
B.N0(d,u.b,e,t)}v=u
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
return A.b(B.aYX(s),$async$a6t)
case 10:case 9:if(g){v=new A.Px(1,D.R6,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Ul(d,e),$async$a6t)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Uq(!0,!0,d,e),$async$a6t)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N0(d,D.z0,e,t)
v=new A.Px(p,D.z0,t)
x=1
break}v=B.c7b(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6t,w)},
Ul(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Ul=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6v(null,d,e),$async$Ul)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cl(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aYW(p,d.length,e),$async$Ul)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c79(e,C.d.gL(d).a,r.b),$async$Ul)
case 7:case 6:q=r.a
x=8
return A.b(B.N0(d,D.R6,e,q),$async$Ul)
case 8:v=new A.Px(d.length,D.R6,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ul,w)},
Um(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Um=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ms(D.mx)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6u(d,e),$async$Um)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c74(s,d,e,t),$async$Um)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYX(t),$async$Um)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ri(e,d),$async$Um)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Ul(A.a([d],y.r),e),$async$Um)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Um,w)},
Uo(){var x=0,w=A.j(y.H)
var $async$Uo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fRh(),$async$Uo)
case 2:x=3
return A.b(B.aPD(),$async$Uo)
case 3:return A.h(null,w)}})
return A.i($async$Uo,w)},
a6u(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYZ()
x=3
return A.b(B.c78(e,d.a,u),$async$a6u)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6u,w)},
N0(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$N0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.R6&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b1(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6u(p,f),$async$N0)
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
return A.b(B.c73(o,p,u,f),$async$N0)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c74(o,p,f,t),$async$N0)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c72(o,u,p,f),$async$N0)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N0,w)},
aZ1(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZ1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c7a(e,d),$async$aZ1)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Uq(!1,!0,d,e),$async$aZ1)
case 4:u=g
if(u!=null){t=u.b
v=new A.Px(u.a,D.z0,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZ1,w)},
c7a(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c7a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Uk(d,s,0,1),$async$c7a)
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
return A.i($async$c7a,w)},
c7b(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c7b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6v(null,d,e),$async$c7b)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h6i(u)
if(t.length>800){v=null
x=1
break}v=new A.Px(d.length,D.duX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7b,w)},
aox(d,e,f){return B.hAf(d,e,f)},
hAf(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aox=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mD(g,1)
x=B.fRm(g)?3:4
break
case 3:x=5
return A.b(B.c75(g),$async$aox)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mD(g,13))
try{k=B.Ed(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mD(g,13))
u=9
x=12
return A.b(B.aYV(q),$async$aox)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Un(p,a0)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fRl(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Un(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.I8(C.a.i(J.mD(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.I8(C.a.i(J.mD(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cE(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.I8(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Un(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aox,w)},
I8(d,e,f){return B.hAd(d,e,f)},
hAd(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
if(!y.j.b(o)||J.cl(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6I(o,r,a1,n,a2),$async$I8)
case 11:m=a4
x=J.cl(m)?12:13
break
case 12:x=14
return A.b(B.c6H(q),$async$I8)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Un(l,a2),$async$I8)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cl(m)?null:m
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
a6v(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.ri(f,r),$async$a6v)
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
return A.i($async$a6v,w)},
Un(d,e){return B.hAe(d,e)},
hAe(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Un=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
return A.b(B.Bm(i,a3,d,k,l,o),$async$Un)
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
return A.i($async$Un,w)},
N_:function N_(d,e){this.a=d
this.b=e},
c7c:function c7c(){},
a0x(d){var x=A.P(d).ax.a===C.I,w=x?D.adv:D.abm,v=x?D.af0:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acB:C.aL
return new A.aFo([w,s,v,u,t,x?C.f8:C.bW])},
hlC(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fJj(e),d,null,!0,!0,y.N)},
c6S(d,e,f,g,h,i,j,k,l){return new B.Uf(e,l,d,f,k,j,g,h,i,null)},
Yx(d,e,f,g,h,i,j){return new B.bcx(g,h,j,e,i,d,f,null)},
fJj:function fJj(d){this.a=d},
Yu:function Yu(d,e){this.c=d
this.a=e},
ayq:function ayq(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1p:function d1p(d){this.a=d},
d1n:function d1n(d){this.a=d},
d1o:function d1o(d){this.a=d},
bu2:function bu2(){},
Uf:function Uf(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCn:function aCn(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dPj:function dPj(d){this.a=d},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOg:function dOg(d,e,f){this.a=d
this.b=e
this.c=f},
dOf:function dOf(d){this.a=d},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOm:function dOm(d,e,f){this.a=d
this.b=e
this.c=f},
dOl:function dOl(d){this.a=d},
dP7:function dP7(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dOE:function dOE(d,e,f){this.a=d
this.b=e
this.c=f},
dOB:function dOB(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dOk:function dOk(d){this.a=d},
dOM:function dOM(d){this.a=d},
dOL:function dOL(){},
dOq:function dOq(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP5:function dP5(d,e){this.a=d
this.b=e},
dP6:function dP6(d,e){this.a=d
this.b=e},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOD:function dOD(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e){this.a=d
this.b=e},
dOU:function dOU(d){this.a=d},
dOT:function dOT(d){this.a=d},
dOV:function dOV(){},
dOW:function dOW(){},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOZ:function dOZ(){},
dP_:function dP_(d){this.a=d},
dOS:function dOS(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dOO:function dOO(d){this.a=d},
dOP:function dOP(d){this.a=d},
dOQ:function dOQ(d){this.a=d},
dOR:function dOR(d){this.a=d},
dOn:function dOn(){},
dOo:function dOo(d){this.a=d},
dOp:function dOp(d,e){this.a=d
this.b=e},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOi:function dOi(d,e,f){this.a=d
this.b=e
this.c=f},
dOF:function dOF(d){this.a=d},
dOG:function dOG(d,e,f){this.a=d
this.b=e
this.c=f},
dOz:function dOz(d,e){this.a=d
this.b=e},
dOv:function dOv(d){this.a=d},
dOs:function dOs(d,e,f){this.a=d
this.b=e
this.c=f},
dOw:function dOw(d){this.a=d},
dOx:function dOx(d){this.a=d},
dOy:function dOy(){},
dOA:function dOA(d,e){this.a=d
this.b=e},
dOt:function dOt(d){this.a=d},
dOr:function dOr(d,e,f){this.a=d
this.b=e
this.c=f},
dOu:function dOu(){},
dOK:function dOK(d){this.a=d},
dOJ:function dOJ(d,e){this.a=d
this.b=e},
dP3:function dP3(d,e){this.a=d
this.b=e},
dP0:function dP0(d){this.a=d},
dP1:function dP1(d,e){this.a=d
this.b=e},
dP2:function dP2(d){this.a=d},
dPg:function dPg(d){this.a=d},
dPe:function dPe(d){this.a=d},
dPf:function dPf(d){this.a=d},
dPh:function dPh(){},
dPi:function dPi(d,e){this.a=d
this.b=e},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e,f){this.a=d
this.b=e
this.c=f},
dP9:function dP9(d,e,f){this.a=d
this.b=e
this.c=f},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPd:function dPd(d,e){this.a=d
this.b=e},
ayn:function ayn(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcw:function bcw(d,e,f){this.c=d
this.d=e
this.a=f},
d1l:function d1l(){},
d1m:function d1m(){},
abF:function abF(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d1J:function d1J(){},
d1I:function d1I(d){this.a=d},
Yw:function Yw(d,e,f){this.c=d
this.d=e
this.a=f},
ays:function ays(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1F:function d1F(d){this.a=d},
d1G:function d1G(d,e,f){this.a=d
this.b=e
this.c=f},
d1H:function d1H(d,e){this.a=d
this.b=e},
d1D:function d1D(d,e){this.a=d
this.b=e},
d1B:function d1B(d){this.a=d},
d1z:function d1z(d){this.a=d},
d1w:function d1w(d){this.a=d},
d1C:function d1C(d){this.a=d},
d1y:function d1y(d){this.a=d},
d1E:function d1E(d){this.a=d},
d1A:function d1A(d){this.a=d},
d1x:function d1x(d){this.a=d},
Yt:function Yt(d,e,f){this.c=d
this.d=e
this.a=f},
ayp:function ayp(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d1i:function d1i(d){this.a=d},
d1h:function d1h(d,e){this.a=d
this.b=e},
d1j:function d1j(d){this.a=d},
d1g:function d1g(d,e){this.a=d
this.b=e},
d1k:function d1k(d){this.a=d},
d1f:function d1f(d,e){this.a=d
this.b=e},
d1b:function d1b(d){this.a=d},
d1c:function d1c(d){this.a=d},
d1d:function d1d(d,e){this.a=d
this.b=e},
d1e:function d1e(d){this.a=d},
Pa:function Pa(d,e,f){this.c=d
this.d=e
this.a=f},
ayv:function ayv(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d1W:function d1W(d){this.a=d},
d1X:function d1X(d){this.a=d},
d1Y:function d1Y(d){this.a=d},
d1Z:function d1Z(d){this.a=d},
d2_:function d2_(d,e){this.a=d
this.b=e},
d20:function d20(d){this.a=d},
d22:function d22(d){this.a=d},
d21:function d21(d){this.a=d},
Yy:function Yy(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayt:function ayt(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d1S:function d1S(d,e){this.a=d
this.b=e},
d1T:function d1T(d,e){this.a=d
this.b=e},
d1K:function d1K(d,e,f){this.a=d
this.b=e
this.c=f},
d1L:function d1L(d){this.a=d},
d1M:function d1M(){},
d1R:function d1R(){},
d1N:function d1N(d,e){this.a=d
this.b=e},
d1O:function d1O(d,e){this.a=d
this.b=e},
d1P:function d1P(d,e){this.a=d
this.b=e},
d1Q:function d1Q(d,e){this.a=d
this.b=e},
abD:function abD(d,e){this.c=d
this.a=e},
d1a:function d1a(d){this.a=d},
Ys:function Ys(d){this.a=d},
ayo:function ayo(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yz:function Yz(d,e){this.c=d
this.a=e},
ayu:function ayu(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d1V:function d1V(d){this.a=d},
d1U:function d1U(d){this.a=d},
bcx:function bcx(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hAg(){var x,w=$.pm(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fX(v)},
N1(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$N1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$N1)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$N1)
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
return A.i($async$N1,w)},
a6w(d){return B.hAh(d)},
hAh(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6w)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hC("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6w)
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
return A.i($async$a6w,w)},
Up(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Up=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N1(),$async$Up)
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
return A.b(B.a6w(s),$async$Up)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Up,w)},
Uq(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Uq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Uq)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bm(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c7e(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hAg()
t=A.U(u).k("K<1,a3<n,aC>>")
r=A.B(new A.K(u,new B.c7f(s),t),t.k("ak.E"))
x=6
return A.b(B.N1(),$async$Uq)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6w(q),$async$Uq)
case 7:x=8
return A.b(B.a6x(r,u,g,s),$async$Uq)
case 8:v=new A.bo6(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uq,w)},
aoy(d){var x=0,w=A.j(y.y),v,u,t
var $async$aoy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.N1(),$async$aoy)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoy,w)},
c7g(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7g=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N1(),$async$c7g)
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
return A.i($async$c7g,w)},
a6x(d,e,f,g){return B.hAi(d,e,f,g)},
hAi(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6x=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aow("media",r,new B.c7d(s,e,g),f,q),$async$a6x)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Up(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6x)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Up(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6x)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Up(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6x)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6x,w)},
Ed(d,e,f){return B.hAj(d,e,f)},
hAj(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.aoy(b3),$async$Ed)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kj,null,g),$async$Ed)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aoy(b3),$async$Ed)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.N1(),$async$Ed)
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
if(!y.j.b(a4)||J.cl(a4)){v=null
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
b0=A.oQ(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9U(a8.a,b0,"media",a8.d,a9).Cn(m)
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
a8=A.oQ(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9U(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ed)
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
return A.b(B.a6w(e),$async$Ed)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ed,w)},
c7e:function c7e(){},
c7f:function c7f(d){this.a=d},
c7d:function c7d(d,e,f){this.a=d
this.b=e
this.c=f},
aPD(){var x=0,w=A.j(y.H),v,u
var $async$aPD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hLf=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPD)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPD)
case 3:u=$.fWt
u=u==null?null:u.bD(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPD)
case 4:$.fWt=$.hTK=$.hTL=null
return A.h(null,w)}})
return A.i($async$aPD,w)},
fnq(d){var x=0,w=A.j(y.H),v,u
var $async$fnq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5n){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fnr(new A.bW(u,y.aY))
x=3
return A.b(u.ig(0,C.hJ,new B.fns()),$async$fnq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fnq,w)},
hTI(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hA0(x):x},
fWx(d){var x=0,w=A.j(y.T),v,u,t
var $async$fWx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,13))
if(C.a.a0(u,"WR")){v=B.aoA(u)
x=1
break}v=B.fRl(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWx,w)},
fWw(d){var x=0,w=A.j(y.T),v,u,t
var $async$fWw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,14))
if(C.a.a0(u,"WR")){v=B.aoB(u)
x=1
break}v=B.fRl(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWw,w)},
fEW(d){var x=0,w=A.j(y.T),v
var $async$fEW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoB(d),$async$fEW)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEW,w)},
bAi(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fWw(d),$async$bAi)
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
return A.i($async$bAi,w)},
fcl(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fcl=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Uj(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bm(d.anf(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fcl,w)},
G5(d,e,f){return B.hW5(d,e,f)},
hW5(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$G5=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fWx(a1),$async$G5)
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
return A.b($.hnu().aD4(D.dji,null),$async$G5)
case 4:l=d.fWt=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axe(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.fnY(f,k,new B.fnZ(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a6P(0,new B.WA(r,"offer")),$async$G5)
case 5:d=l
x=7
return A.b(l.ak6(0),$async$G5)
case 7:x=6
return A.b(d.a6H(0,a4),$async$G5)
case 6:x=8
return A.b(B.fnq(l),$async$G5)
case 8:x=9
return A.b(l.ao_(),$async$G5)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hTI(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoC(m,h),$async$G5)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h6i(h)
case 11:v=new A.bno(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G5,w)},
fnr:function fnr(d){this.a=d},
fns:function fns(){},
fnZ:function fnZ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnY:function fnY(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fnX:function fnX(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hXX(d){switch(d){case"new":return D.ebG
case"checking":return D.ebH
case"connected":return D.ebJ
case"completed":return D.ebI
case"failed":return D.ebL
case"disconnected":return D.ebM
case"closed":return D.aL2
case"count":return D.ebK}return D.aL2},
hXY(d){switch(d){case"new":return D.aL3
case"gathering":return D.ebN
case"complete":return D.a5n}return D.aL3},
i7b(d){switch(d){case"stable":return D.ebO
case"have-local-offer":return D.ebP
case"have-local-pranswer":return D.ebR
case"have-remote-offer":return D.ebQ
case"have-remote-pranswer":return D.ebS
case"closed":return D.aL9}return D.aL9},
i5r(d){switch(d){case"new":return D.aL6
case"connecting":return D.aL7
case"connected":return D.aL8
case"closed":return D.a5o
case"disconnected":return D.aL5
case"failed":return D.aL4}return D.a5o},
a8P:function a8P(d,e){this.a=d
this.b=e},
O1:function O1(d,e){this.a=d
this.b=e},
Wz:function Wz(d,e){this.a=d
this.b=e},
O0:function O0(d,e){this.a=d
this.b=e},
EG:function EG(d,e){this.a=d
this.b=e},
cid:function cid(){},
fT5(d){var x=new B.EF()
x.a=d
x.b=!0
return x},
EF:function EF(){this.b=this.a=$},
a8O:function a8O(){},
asR:function asR(){},
WA:function WA(d,e){this.a=d
this.b=e},
fRh(){var x=0,w=A.j(y.H)
var $async$fRh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fRh,w)},
fRk(d,e,f){var x=0,w=A.j(y.T),v
var $async$fRk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ms(D.mx))){v=null
x=1
break}v=B.fFb(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRk,w)},
h6i(d){var x,w=F.aaO.a3E(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cT.gcw().aJ(x)}return C.cT.gcw().aJ(w)},
hA_(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.aaN.bbl(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fRl(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hA_(C.a.b1(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b1(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hA0(d){var x,w,v,u,t,s=A.a([],y.s)
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
hA1(){var x,w=$.pm(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
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
c6X(d,e){return B.hA2(d,e)},
hA2(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c6X=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c6X)
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
return A.i($async$c6X,w)},
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
break}u=B.hA1()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c6X(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cT.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYW)
case 3:if(!h){v=null
x=1
break}v=new A.a_A("NGMYDOCSYNC1|"+u,u,999999)
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
c6Y(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c6Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBf("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c6Y)
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
return A.i($async$c6Y,w)},
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
aot(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aot=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aot)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYY(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aot,w)},
aor(d,e){var x=0,w=A.j(y.H)
var $async$aor=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aor)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aor)
case 2:return A.h(null,w)}})
return A.i($async$aor,w)},
a6o(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6o)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.I4(),$async$a6o)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dk(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6n(s),$async$a6o)
case 5:x=6
return A.b(B.aor(f,u),$async$a6o)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6o,w)},
a6p(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6p=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6p)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.I4(),$async$a6p)
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
return A.b(B.aor(g,q),$async$a6p)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6n(u),$async$a6p)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6p,w)},
a6q(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6q)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.I4(),$async$a6q)
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
return A.b(A.aA(),$async$a6q)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6q)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6q,w)},
c6Z(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c6Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c6Z)
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
return A.i($async$c6Z,w)},
I5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$I5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6Z(d),$async$I5)
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
return A.b(B.aos(d),$async$I5)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYR(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aos(d),$async$I5)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I5,w)},
aos(d){var x=0,w=A.j(y.H)
var $async$aos=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aos)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aos)
case 2:return A.h(null,w)}})
return A.i($async$aos,w)},
aYZ(){var x,w=$.pm(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fX(v)},
a6r(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fRm(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c71(d){return B.hA4(d)},
hA4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c71=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6r(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c71)
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
return A.i($async$c71,w)},
aov(d,e){return B.hA5(d,e)},
hA5(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aov=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6r(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aov)
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
return A.i($async$aov,w)},
c73(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c73=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aov(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c73)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c73,w)},
c72(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c72=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aov(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c72)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c72,w)},
c74(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c74=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aov(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c74,w)},
c75(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c75=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fRm(d)){v=null
x=1
break}x=3
return A.b(B.c71(d),$async$c75)
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
return A.i($async$c75,w)},
a6y(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6y)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f3("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6y)
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
return A.i($async$a6y,w)},
aoz(d){return B.hAk(d)},
hAk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoz)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hC("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoz)
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
return A.i($async$aoz,w)},
aoA(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoA)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6y(),$async$aoA)
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
return A.b(B.aoz(s),$async$aoA)
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
return A.i($async$aoA,w)},
aoC(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoC)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6y(),$async$aoC)
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
return A.b(B.aoz(u),$async$aoC)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoC,w)},
aoB(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoB)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6y(),$async$aoB)
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
return A.i($async$aoB,w)},
anC(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pP)){v=null
x=1
break}x=3
return A.b(p.lW(e),$async$anC)
case 3:r=g
u=4
x=7
return A.b(r.hq(C.fX),$async$anC)
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
return A.i($async$anC,w)},
i3q(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fDu(d){return B.i3s(d)},
i3s(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fDu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i8("media").Kr(d,3600),$async$fDu)
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
return A.i($async$fDu,w)},
CG(d,e,f,g,h,i){var x=null
return B.i3p(d,e,f,g,h,i)},
i3p(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CG=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h6l(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fRo(r),$async$CG)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fDu(o),$async$CG)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6s(r),$async$CG)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aO9)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lo(A.a([],g))
x=15
return A.b(d.eT(0,A.atG("GET",A.cw(n,0,null))).cM(0,C.EY),$async$CG)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6s(r),$async$CG)
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
case 10:i=B.Uj(r)
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
return A.b(B.a6s(r),$async$CG)
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
aPl(d){return B.i3r(d)},
i3r(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i8("media").W(0,d),$async$aPl)
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
H=c[142]
O=c[40]
F=c[237]
I=c[133]
P=c[217]
E=c[210]
G=c[86]
Q=c[182]
R=c[134]
S=c[215]
K=c[241]
L=c[247]
B=a.updateHolder(c[21],B)
D=c[245]
T=c[181]
M=c[200]
U=c[65]
V=c[248]
W=c[71]
X=c[55]
N=c[85]
Y=c[246]
B.cie.prototype={
aD4(d,e){return this.cHv(d,e)},
cHv(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aD4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kh(A.cB(t)))
t=J.k(u)
v=B.hEW(C.cT.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aD4,w)}}
B.b37.prototype={
bwH(d){var x=this,w=x.w
w.onclose=A.he(new B.ci9(x))
w.onopen=A.he(new B.cia(x))
w.onmessage=A.he(new B.cib(x))
w.onbufferedamountlow=A.he(new B.cic(x))},
gdc(d){return this.x},
agk(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EF()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fT5(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$agk)
case 8:v=t.fT5(s.amQ(f,0,null))
x=1
break
case 7:case 4:v=B.fT5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agk,w)}}
B.b38.prototype={
bwI(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cif(x)))
w.addEventListener("icecandidate",A.he(new B.cig(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cih(x)))
w.onicegatheringstatechange=A.he(new B.cii(x))
w.addEventListener("signalingstatechange",A.he(new B.cij(x)))
if(!$.h_5())w.addEventListener("connectionstatechange",A.he(new B.cik(x)))
w.addEventListener("negotiationneeded",A.he(new B.cil(x)))
w.addEventListener("track",A.he(new B.cim(x)))},
ak6(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ak6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kh(A.cB(A.T(y.N,y.z)))),y.aQ),$async$ak6)
case 3:t=f
v=new B.WA(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ak6,w)},
a6H(d,e){return this.bm9(0,e)},
bm9(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6H)
case 2:return A.h(null,w)}})
return A.i($async$a6H,w)},
a6P(d,e){return this.bmp(0,e)},
bmp(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6P=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6P)
case 2:return A.h(null,w)}})
return A.i($async$a6P,w)},
ao_(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ao_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.WA(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao_,w)},
bD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bD,w)}}
B.abE.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Yv.prototype={
R(){return new B.ayr()},
gdd(){return this.c}}
B.ayr.prototype={
a_(){this.a1()
this.ad2()},
ad2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYS(u.e,u.c),$async$ad2)
case 2:t=e
if(v.c!=null)v.m(new B.d1t(v,t))
return A.h(null,w)}})
return A.i($async$ad2,w)},
PK(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoo(t.e,t.c,!1),$async$PK)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eRC)
x=1
break}x=4
return A.b(B.a6m(u.a.c,"individual"),$async$PK)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5e(A.e8(new B.d1q(u),!1,null,y.H)),$async$PK)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
IQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.flA(o),$async$IQ)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6q(o.e,r,s,q),$async$IQ)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eOH)
x=1
break}x=5
return A.b(B.a6m(u.a.c,"member"),$async$IQ)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5e(A.e8(new B.d1s(u),!1,null,y.H)),$async$IQ)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
xH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6l(t.e,o,t.f,t.r,t.w,s),$async$xH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6m(u.a.c,"org_owner"),$async$xH)
case 4:x=5
return A.b(B.aot(u.a.c),$async$xH)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fm4(o),$async$xH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6o(s,t,o,q.c),$async$xH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.S(D.eOE)
x=1
break}x=10
return A.b(B.aot(u.a.c),$async$xH)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5e(A.e8(new B.d1r(u),!1,null,y.H)),$async$xH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xH,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j8:C.pw,q=B.fRj(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f9j,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.fs7,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bVB,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lA(new B.d1v(),t),C.N,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.ac6(C.eR,C.axK,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcbF(),t),C.ac],v))
p.push(new B.ac6(C.oF,C.a1l,"Team Member","Sign in with your organization access code + password",u.gccw(),t))
p.push(C.ac)
p.push(new B.ac6(C.akj,C.a2O,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcc1(),t))
return A.c8(t,r,A.bn(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahC,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ac6.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eE(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p5,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bp,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAZ.prototype={}
B.aEa.prototype={}
B.jj.prototype={
ms(d){var x=this.b,w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b1(x,w+1).toLowerCase())},
gaoD(){var x=this.d
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
baO(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jj(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cG_(d){return this.baO(null,d)},
aCQ(d){return this.baO(d,null)}}
B.Ud.prototype={
R(){return new B.aCl(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCl.prototype={
a_(){this.a1()
this.ad3()},
ad3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ad3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(u.a.c),$async$ad3)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dOc(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
ad4(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ad4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ad4)
case 3:t=u.c
if(t!=null)t.I(y.q).f.S(D.eSw)
case 1:return A.h(v,w)}})
return A.i($async$ad4,w)},
Z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anC(s.d,4),$async$Z0)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rN(r,"ngmy_my_code_"+m+".png"),$async$Z0)
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
return A.i($async$Z0,w)},
agN(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9t("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agN,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j8:C.pw,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lB
else if(q.e==null)x=A.av(new A.C(C.ew,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1M,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ahc,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mF,w,C.kv,new A.ev(A.p(p,A.pG(p,p,!1,B.hzW(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kv,A.A(A.a([A.E(A.ey(N.BI,C.TA,q.gc4H(),p),1),C.av,A.E(A.dp(C.yr,C.a7B,q.gc4I(),A.bl(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0d,D.fo_,q.gcr5(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.M5,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Uh.prototype={
R(){return new B.aCo(new A.ar(C.as,$.aw()),A.jM(!0,null,!0,!0,null,null,!1))}}
B.aCo.prototype={
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
Z1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.I3(u.d.a.a)
if(t==null){u.m(new B.dPl(u))
x=1
break}u.m(new B.dPm(u))
s=u.a
r=s.c
x=3
return A.b(B.a6k(s.d,new B.dPn(u),t,r),$async$Z1)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dPo(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z1,w)},
a1c(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cl(r.a.d)){x=1
break}r.m(new B.dPp(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.ri(r.a.c,q),$async$a1c)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPq(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ah7(p,m,l,j,k),$async$a1c)
case 8:o=e
if(r.c!=null)r.m(new B.dPr(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPs(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPt(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1c,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adv:D.abm,h=j?D.af0:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acB:C.aL
i=[i,e,h,g,f,j?C.f8:C.bW]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bJz,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fz,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1M,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u8(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhS()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.M_,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPu(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m_,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L1(l.a.d,4)
m=A.B(new A.K(m,new B.dPv(x,new A.aFo(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.ml,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d5,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eNd)
else q.push(A.X(C.li,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.di(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bsR,k,k,C.ah),1)
u=l.f?k:l.gcr6()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0d,D.fp_,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc4J()
t=A.bl(C.aE,k,k,0,C.c,k,C.n7,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bn(!0,A.mA(new B.dPw(),A.v(A.a([e,new A.C(D.bsl,A.v(A.a([s,C.N,i,C.ac,A.bH(l.f?C.rC:D.fno,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XG,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhS.prototype={
ow(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bw,v.length),C.aN)}}
B.Ue.prototype={
R(){return new B.aCm()}}
B.aCm.prototype={
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
ad5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ad5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dOd(r))
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
return A.b(B.a6p(p,m,n,o,C.a.i(l).length===0?null:l),$async$ad5)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.S(D.eS7)
s=[1]
x=4
break}p.I(y.q).f.S(D.eQL)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dOe(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ad5,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j8:C.pw,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fg3,s,s,s,1,s,!0),p=A.p(s,D.bkT,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gn,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bQq,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bQl,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bQB,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
v=t.r?s:t.gc4K()
u=A.bl(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mF,A.bH(t.r?C.rC:C.aQN,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abl.prototype={}
B.buo.prototype={
a3U(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.anf()))
x=3
return A.b(B.QD(t,s),$async$a3U)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3U,w)},
gdd(){return this.a}}
B.N_.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yu.prototype={
R(){return new B.ayq(new A.ar(C.as,$.aw()),A.jM(!0,null,!0,!0,null,null,!1))}}
B.ayq.prototype={
a_(){this.a1()
$.aW.x1$.push(new B.d1p(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c4Q(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0x(d),u=x.a.c,t=u?C.i8:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j8:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.an0,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.anO,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u8(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bu2()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F8,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aXF),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d1n(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m_,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nu,new B.d1o(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eI(w,C.K,new A.cS(Q.JY,A.c_(new A.C(C.xC,A.v(A.a([l,C.aQ,k,C.N,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.E(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e5F,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc4P(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NS,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.M7,C.d0,w,w,w)}}
B.bu2.prototype={
ow(d,e){return e.ak1(e.a.toUpperCase())}}
B.Uf.prototype={
R(){return new B.aCn(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCn.prototype={
a_(){var x=this
x.a1()
x.tz()
x.w=A.dv(C.jc,new B.dPj(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Uo()
this.a2()},
a04(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a04=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MZ(u.a.c),$async$a04)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.An(u.a.c),$async$a04)
case 4:u.m(new s.dOH(u,e))
u.hX("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a04,w)},
tz(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MZ(u.a.c),$async$tz)
case 3:t=e
x=4
return A.b(B.An(u.a.c),$async$tz)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dOI(u,s))
if(t>0)u.hX("Received "+A.t(t)+" file(s) via My Code.")
u.N9(u.d)
B.Bl(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tz,w)},
N9(d){return this.bAE(d)},
bAE(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$N9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6u(r,u.a.c),$async$N9)
case 8:p=f
if(u.c==null){x=1
break}new B.dOg(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.ms(D.mx))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Um(r,u.a.c),$async$N9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.An(u.a.c),$async$N9)
case 12:u.m(new o.dOh(u,f))
case 1:return A.h(v,w)}})
return A.i($async$N9,w)},
Nw(d){return this.bGP(d)},
bGP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6u(d,u.a.c),$async$Nw)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dOm(u,d,t))
x=6
return A.b(A.fJ(new A.fC(t)),$async$Nw)
case 6:u.hX("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fJ(new A.fC(r.toUpperCase())),$async$Nw)
case 7:u.hX("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nw,w)},
hX(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tA(d,e){return this.cBv(d,e)},
cBv(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tA=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dP7(r,e))
u=3
x=6
return A.b(d.$0(),$async$tA)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dP8(r))
$.eV.mn()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tA,w)},
gaTX(){var x=this.a
return x.f||x.r||x.w},
HM(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTX()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c6V(s,n,r,q,o,t),$async$HM)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hX("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fwY(o,u.a.c),$async$HM)
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
return A.b(B.CI(s,o,r,q,n,t),$async$HM)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HM,w)},
a_8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aot(u.a.c),$async$a_8)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hX("No organization portal found.")
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
return A.b(A.a5(t,!1).c8(A.e8(new B.dOE(u,r,q),!1,null,y.H)),$async$a_8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_8,w)},
a0f(d){return this.ckL(d)},
ckK(){return this.a0f(1)},
ckL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTX()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoq(u.a.c),$async$a0f)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0f,w)},
ab4(d,e,f){return this.bXf(d,e,f)},
bXf(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ab4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hX(e)
x=1
break}x=3
return A.b(u.tA(new B.dOB(u,d,null,e,f),"Uploading\u2026"),$async$ab4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ab4,w)},
bAM(){B.hkV(!1,new B.dOk(this))
return},
cpJ(){this.m(new B.dOM(this))},
axo(){var x=0,w=A.j(y.H),v=this
var $async$axo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAM()
return A.h(null,w)}})
return A.i($async$axo,w)},
ab0(){var x=0,w=A.j(y.H),v=this
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tA(new B.dOq(v),"Importing\u2026"),$async$ab0)
case 2:return A.h(null,w)}})
return A.i($async$ab0,w)},
RL(d){return this.cAW(d)},
cAW(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.ms(D.mx)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.e8(new B.dP4(u,d),!1,null,y.H)),$async$RL)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ms(D.PO)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c8(A.e8(new B.dP5(u,d),!1,null,y.H)),$async$RL)
case 8:x=1
break
case 7:x=u.bXX(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c8(A.e8(new B.dP6(u,d),!1,null,y.H)),$async$RL)
case 11:x=1
break
case 10:u.hX("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RL,w)},
bXX(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oA(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cCU,C.a.b1(x,w+1).toLowerCase())},
aex(d){return this.cbJ(d)},
cbJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aex=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ms(D.mx)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.e8(new B.dOC(u,d),!1,null,y.H)),$async$aex)
case 5:x=1
break
case 4:u.m(new B.dOD(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aex,w)},
R7(d){return this.csz(d)},
csz(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hX("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p0(t,s.c,s.f),$async$R7)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tA(new B.dOY(u,d),"Preparing QR\u2026"),$async$R7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
ahc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOZ(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dP_(q),s),s.k("J.E"))
if(r.length===0){u.hX("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.R7(r),$async$ahc)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahc,w)},
ah5(d){return this.cs7(d)},
cs7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0x(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dOS(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ah5)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RL(d)
break
case"qr":u.R7(A.a([d],y.r))
break
case"send_my_code":u.ccl(A.a([d],y.r))
break
case"save":u.agr(d)
break
case"delete":u.IB(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ah5,w)},
X_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$X_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOn(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dOo(q),s),s.k("J.E"))
if(r.length===0){u.hX("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p0(t,s.c,s.f),$async$X_)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tA(new B.dOp(u,r),"Preparing file\u2026"),$async$X_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
afD(d){return this.cj8(d)},
cj8(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hlC(d,!1),$async$afD)
case 3:s=f
r=s==null
q=B.a6r(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hX("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afD,w)},
aeD(){var x=0,w=A.j(y.H),v=this,u
var $async$aeD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fEz(u,v.a.c),$async$aeD)
case 2:return A.h(null,w)}})
return A.i($async$aeD,w)},
bAL(){B.hkV(!1,new B.dOj(this,null))
return},
IP(d,e){return this.ccm(d,e)},
aZU(d){return this.IP(null,d)},
ccl(d){return this.IP(d,null)},
ccm(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IP=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dOF(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wZ.c5().amA(!0,C.Zr,!1),$async$IP)
case 10:r=g
if(r==null||J.cl(r.a)){x=1
break}x=11
return A.b(s.tA(new B.dOG(l,s,r),"Preparing\u2026"),$async$IP)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hX("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hX("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bCo(p,l,e,s.a.c),$async$IP)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hX("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IP,w)},
I0(d){return this.bX2(d)},
bX2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$I0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hzV(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZU(t),$async$I0)
case 8:x=6
break
case 7:u.hX("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hX("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tA(new B.dOz(u,d),"Receiving video\u2026"),$async$I0)
case 11:x=1
break
case 10:x=12
return A.b(u.tA(new B.dOA(u,d),"Receiving\u2026"),$async$I0)
case 12:case 1:return A.h(v,w)}})
return A.i($async$I0,w)},
DY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CC()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afD(t),$async$DY)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.I0(s),$async$DY)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.e8(new B.dOK(u),!1,null,y.N)),$async$DY)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tz(),$async$DY)
case 10:x=1
break
case 9:x=11
return A.b(u.I0(C.a.i(r)),$async$DY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DY,w)},
agr(d){return this.coj(d)},
coj(d){var x=0,w=A.j(y.H),v=this
var $async$agr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tA(new B.dOJ(v,d),"Saving\u2026"),$async$agr)
case 2:return A.h(null,w)}})
return A.i($async$agr,w)},
IB(d){return this.bJ8(d)},
bJ8(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l2(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IB)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c6Y(t),$async$IB)
case 6:case 5:s=d.a
x=7
return A.b(B.Ec(u.a.c,s),$async$IB)
case 7:u.r.W(0,s)
x=8
return A.b(u.tz(),$async$IB)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IB,w)},
ahi(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0x(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dP3(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahi)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeD()
break
case"import":u.ab0()
break}case 1:return A.h(v,w)}})
return A.i($async$ahi,w)},
c4N(d){var x=d.c
if(C.a.a0(x,"video/")||d.ms(D.mx))return C.pX
if(C.a.a0(x,"image/")||d.ms(D.PO))return C.tQ
if(C.a.t(x,"pdf"))return E.Np
return D.akM},
B(d){var x,w,v=this,u=null,t=B.a0x(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gf,u,u,u,new B.dPe(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bK4,u,u,u,v.e?u:v.gcc2(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcpI()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bEr:E.alc,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a0a,u,u,u,v.e?u:v.gc4O(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o0,u,u,u,v.e?u:v.gb01(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bLL,u,u,u,v.e?u:new B.dPf(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lA(new B.dPg(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m_(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayn(C.jj,s,!0,t,w?u:v.gcsA(),u),1)
x.push(new A.C(D.br8,A.mA(new B.dPh(),A.A(A.a([s,C.av,A.E(new B.ayn(C.vz,"Export",!1,t,w?u:v.gbME(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iw,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcw(t,v.e?u:v.gb01(),u)
else s=A.k6(!0,u,u,new B.dPi(v,t),s,u,D.br0,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayn.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bl(C.aE,t,t,0,C.c,t,C.vh,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cj,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vh,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bcw.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mA(new B.d1l(),new A.C(E.Yw,A.v(A.a([A.mA(new B.d1m(),A.p(x,A.X(C.xX,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ib,x,x,new A.bo(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.o0,D.fsq,this.d,A.bl(C.aE,x,x,x,C.c,x,C.Yr,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AN,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.abF.prototype={
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
if(!o||i.ms(D.mx))p=D.d9f
else{p=C.a.a0(p,"image/")||i.ms(D.PO)
n=y.O
p=p?A.a([C.d_,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoD()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.ms(D.mx))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.E(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ca))
if(!(!o||i.ms(D.mx)))l.push(A.fP4(C.aE,!1,j,j,j,!1,j,j,new B.d1I(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.nZ,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ca))
return A.mA(new B.d1J(),new A.C(C.e4,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.C(C.Y1,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Yw.prototype={
R(){return new B.ays()},
gdd(){return this.c}}
B.ays.prototype={
a_(){this.a1()
this.xy()},
q(){B.hA9(this.e)
this.a2()},
xy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ri(o.c,o.d),$async$xy)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hAc(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hAb(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1F(s))
x=1
break}s.m(new B.d1G(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d1H(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xy,w)},
a1b(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ri(t.c,t.d),$async$a1b)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.ePd)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ah7(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1b)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1b,w)},
bWW(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.km(u,C.A,v,new B.d1D(w,t),C.fV,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d1E(w),C.fV,C.du,!0,v,!1,v,v)
else return C.bH
return A.uh(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0x(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BJ,u,u,u,v.gb3R(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DV
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dp(C.BJ,D.fbB,v.gb3R(),A.bl(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bWW()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yt.prototype={
R(){return new B.ayp(A.ahX(),C.bx,C.bx)},
gdd(){return this.c}}
B.ayp.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a4(w).k("ft<1>")).ia(new B.d1i(v))
x.gcOS().ia(new B.d1j(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a4(x).k("ft<1>"))}if(x==null)x=C.b2M
x.ia(new B.d1k(v))
v.xy()},
xy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ri(p.c,p.d),$async$xy)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d1b(s))
x=1
break}x=8
return A.b(s.d.BR(0,new A.a2D(r,s.a.d.c)),$async$xy)
case 8:if(s.c==null){x=1
break}s.m(new B.d1c(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d1d(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xy,w)},
Z2(){var x=0,w=A.j(y.H),v=this,u
var $async$Z2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h2(0),$async$Z2)
case 5:x=3
break
case 4:x=6
return A.b(u.ie(0),$async$Z2)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Z2,w)},
aRS(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0x(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DV
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bFq,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NS,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aE,o,o,m,0,new B.d1e(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRS(p.w)+" / "+p.aRS(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bl(C.aE,o,o,o,o,D.eLK,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.y6:C.iV,o,o,o,o,o)
x=A.v(A.a([u,C.kv,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc4R(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tD,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pa.prototype={
R(){return new B.ayv()},
gdd(){return this.c}}
B.ayv.prototype={
a_(){this.a1()
this.P6()},
P6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fRk(o.c,o.d,new B.d1W(s)),$async$P6)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d1X(s))
x=1
break}s.e=r
q=O.hWV(r)
if(q==null){s.m(new B.d1Y(s))
x=1
break}s.d=q
q.aN(0,s.gaZI())
x=8
return A.b(q.i9(0).cM(0,C.qT),$async$P6)
case 8:if(s.c==null){x=1
break}s.m(new B.d1Z(s))
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
break}s.m(new B.d2_(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P6,w)},
cak(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d20(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CD(0,x.gaZI())
w=x.d
if(w!=null)w.q()
B.i5I(x.e)
x.a2()},
ad8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZ_(u.c,u.d),$async$ad8)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ad8,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0x(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.oM,t,t,t,u.gc4L(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ig(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DV
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahq(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zS(s,t),A.aE(t,A.CT(A.p(t,A.X(q?I.y6:C.iV,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d22(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yy.prototype={
R(){return new B.ayt(new A.cs(null,y.A))}}
B.ayt.prototype={
gcBe(){var x,w,v=this.a
if(v.e!==D.R7)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcAU(){var x,w,v=this.a
if(v.e!==D.z0)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBe()
if(x!=null){v.Q8(x)
v.e=A.dv(R.F0,new B.d1S(v,x))}w=v.gcAU()
if(w!=null){v.Q7(w)
v.f=A.dv(C.fT,new B.d1T(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q7(d){return this.chk(d)},
chk(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aoy(d),$async$Q7)
case 3:t=f
x=4
return A.b(B.c7g(d),$async$Q7)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d1K(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
Q8(d){return this.chl(d)},
chl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fEW(d),$async$Q8)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAi(t),$async$Q8)
case 4:if(u.c==null){x=1
break}u.m(new B.d1L(u))
u.c.I(y.q).f.S(D.aNL)
case 1:return A.h(v,w)}})
return A.i($async$Q8,w)},
gc0T(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc4M(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0Y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CC()){t=u.c
if(t!=null)t.I(y.q).f.S(D.eSh)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c8(A.e8(new B.d1M(),!1,null,y.N)),$async$a0Y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAi(s),$async$a0Y)
case 4:t=u.c
if(t!=null)t.I(y.q).f.S(D.aNL)
case 1:return A.h(v,w)}})
return A.i($async$a0Y,w)},
a8Z(d){return this.bGQ(d)},
bGQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.d.aI(t,", "))),$async$a8Z)
case 3:if(d.e!=null){t=d.I(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8Z,w)},
ad6(d){return this.bGA(d)},
bGA(d){var x=0,w=A.j(y.H),v=this
var $async$ad6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fJ(new A.fC(v.a.c)),$async$ad6)
case 2:if(d.e!=null)d.I(y.q).f.S(D.ePG)
return A.h(null,w)}})
return A.i($async$ad6,w)},
a0T(d){return this.col(d)},
col(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anC(s.d,4),$async$a0T)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rN(r,"ngmy_doc_share_qr.png"),$async$a0T)
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
return A.i($async$a0T,w)},
gaV0(){var x,w=this.a
if(w.e!==D.Hr)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b1(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b1(x,13))
return null},
a8W(d){return this.bGJ(d)},
bGJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaV0()
if(t==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8W)
case 3:if(d.e!=null)d.I(y.q).f.S(D.eRh)
case 1:return A.h(v,w)}})
return A.i($async$a8W,w)},
ad7(){var x=0,w=A.j(y.H),v=this,u
var $async$ad7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Uo(),$async$ad7)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$ad7,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0x(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hr&&i!==D.R7&&i!==D.z0
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hr||t===D.R7||t===D.z0?l:A.aH(l,l,l,l,C.kT,l,l,l,m.gaXU(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pG(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc0T(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hr){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc4M(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hd(D.bPv,D.fkH,new B.d1N(m,d),l)],p))}if(m.a.e===D.Hr&&m.gaV0()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hd(D.bM4,D.fhp,new B.d1O(m,d),l)],p))
if(m.a.e===D.z0){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DY:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}if(m.a.e===D.R7){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DY:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l),C.ac,A.dp(D.bHT,D.fnH,m.gcoJ(),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oh(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.E(A.ey(N.BI,C.TA,new B.d1P(m,d),l),1),C.av,A.E(A.dp(C.yr,C.a7B,new B.d1Q(m,d),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bH(C.zz,m.gaXU(),A.bl(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d1R(),y.C)}}
B.abD.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pG(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bH(C.zA,new B.d1a(d),x)],u),x,x,C.mQ,v,x,x,x,x,D.faC,x)}}
B.Ys.prototype={
R(){return new B.ayo(A.yZ(C.xk,C.nB,C.u1))}}
B.ayo.prototype={
q(){this.d.q()
this.a2()},
aw0(d){var x,w,v,u,t
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
return A.c8(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fhT,x,x,x,1,x,!0),C.w,A.yY(this.d,C.bR,this.gaw_()),x,!1,!1,x,x)}}
B.Yz.prototype={
R(){return new B.ayu(A.yZ(C.xk,C.nB,C.u1))},
gdd(){return this.c}}
B.ayu.prototype={
bXZ(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
af_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RC("text/plain"),$async$af_)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.S(D.eSb)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
a9K(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hlC(p,!0),$async$a9K)
case 3:t=e
p=t==null
s=B.a6r(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.S(D.eOO)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9K,w)},
q(){this.d.q()
this.a2()},
aw0(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bXZ(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.am7,v,v,v,w.gbMc(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0h,v,v,v,w.gceK(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r1:P.N8,v,v,v,v,v),v,v,v,new B.d1V(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fox,v,v,v,1,v,!0)
u=A.yY(w.d,C.bR,w.gaw_())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ebm],s),v),v,!1,!1,v,v)}}
B.bcx.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ox
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ox:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.C(C.YB,A.A(A.a([u,C.bf,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8P.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.O1.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wz.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.O0.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.EG.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cid.prototype={}
B.EF.prototype={}
B.a8O.prototype={}
B.asR.prototype={}
B.WA.prototype={}
var z=a.updateTypes(["az<~>()","R(jj)","n(jj)","Uf(Y)","~()","Yv(Y)","H(H,jj)","Pa(Y)","~(lV)","cq(EF)","az<jj?>(@)","Ud(Y)","Uh(Y)","C(jj)","jj(@)","a3<n,@>(jj)","Yu(Y)","Ue(Y)","Yw(Y)","Yt(Y)","Yy(Y)","abD(Y)","ai<jj>()","Yz(Y)","abF(Y,H)","Ys(Y)","a3<n,aC>(jj)","cq(Wz)","cq(a8O)","az<cq>(EF)"])
B.ci9.prototype={
$1(d){var x=this.a
x.x=D.aL1
x.y.J(0,D.aL1)},
$S:69}
B.cia.prototype={
$1(d){var x=this.a
x.x=D.aL0
x.y.J(0,D.aL0)},
$S:69}
B.cib.prototype={
$1(d){var x=this.a
x.agk(A.aO4(d.data)).bz(new B.ci8(x),y.b)},
$S:69}
B.ci8.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cic.prototype={
$1(d){},
$S:69}
B.cif.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hEV(d.channel))},
$S:15}
B.cig.prototype={
$1(d){},
$S:15}
B.cih.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hXX(w.iceConnectionState)
x.cx=w
if($.h_5())switch(w.a){case 0:x.cy=D.aL6
break
case 1:x.cy=D.aL7
break
case 3:x.cy=D.aL8
break
case 5:x.cy=D.aL4
break
case 6:x.cy=D.aL5
break
case 7:x.cy=D.a5o
break
default:break}},
$S:147}
B.cii.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hXY(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.cij.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i7b(w.signalingState)},
$S:147}
B.cik.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i5r(w.connectionState)},
$S:147}
B.cil.prototype={
$1(d){},
$S:147}
B.cim.prototype={
$1(d){},
$S:15}
B.fi_.prototype={
$1(d){var x=y.F.a(new A.rD([],[]).py(d.target.result,!1)),w=C.xl.t(x.objectStoreNames,"blobs")
if(!w)C.xh.Kp(x,"blobs")},
$S:194}
B.fEn.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vM.fb(this.b)
$.eV.mn()
this.c.$1(d)},
$S:441}
B.fEp.prototype={
$1(d){return this.a.$1(B.hNR(this.b,this.c))},
$S:34}
B.fEo.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fEm.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fEC.prototype={
$1(d){var x=this
return B.hbc(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fED.prototype={
$1(d){var x=this
return B.hbc(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fjE.prototype={
$1(d){var x=this
return B.c6S(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1t.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1q.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6S(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1s.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6S(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1r.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6S(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1v.prototype={
$4(d,e,f,g){var x=null
return A.jD(A.A(A.a([A.aH(x,x,x,x,D.bGu,x,x,x,new B.d1u(d),x,x,x,x,x,x),A.E(A.Er(D.Py,!0,x,C.a_n,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Py,x,g,C.ahX,0,e,f)},
$C:"$4",
$R:4,
$S:413}
B.d1u.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.flD.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i8:C.c,r=A.m(28),q=A.p(v,D.blb,C.f,v,v,D.aZk,v,v,v,v,D.ahN,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bKD,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.Fd,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amm,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.de,new B.flB(d),v),1),C.av,A.E(A.bH(D.fgq,new B.flC(p,x,d),A.bl(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LN,v,v,v,v),v)},
$S:59}
B.flB.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.flC.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.S(D.ePV)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aAZ(v,x))},
$S:0}
B.fm6.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i8:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bl1,C.f,w,w,D.b_L,w,w,w,w,D.ahN,w,w,1/0),new A.C(C.Fd,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fWh(u,"Organization name",C.FE,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fWh(u,"Access code",C.nc,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fWh(u,"Member password",H.Ga,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.by,A.bH(D.foC,new B.fm5(r,q,p,d),A.bl(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LN,w,w,w,w),w)},
$S:59}
B.fm5.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.S(D.eQ_)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aEa(u,x,w))},
$S:0}
B.c6J.prototype={
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
return A.b(A.v8(p,null).cM(0,C.XF),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bm(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c6P.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6Q.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c6R.prototype={
$1(d){return d.b},
$S:z+2}
B.c6L.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6M.prototype={
$1(d){return d.b},
$S:z+2}
B.c6K.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:13}
B.c6N.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c6O.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fEA.prototype={
$1(d){return new B.Ud(this.a,null)},
$S:z+11}
B.fEB.prototype={
$1(d){return new B.Uh(this.a,this.b,this.c,null)},
$S:z+12}
B.dOc.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dPl.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dPm.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dPn.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dPk(x,d))},
$S:2}
B.dPk.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPo.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPp.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPq.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPr.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPs.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPt.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPw.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:103}
B.dPu.prototype={
$1(d){var x=this.a
return x.f?null:x.Z1()},
$S:2}
B.dPv.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ms(D.PO))s=C.tQ
else s=C.a.a0(s,"video/")||d.ms(D.mx)?C.pX:D.akM
x=this.b.a
w=y.p
return new A.C(C.kM,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoD(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dOd.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dOe.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c6T.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:94}
B.c6U.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:94}
B.fFd.prototype={
$2(d,e){return e===this.a},
$S:335}
B.ffc.prototype={
$1(d){return J.k(d)},
$S:17}
B.fjQ.prototype={
$1(d){var x=this.b
B.hLQ(C.Fr.ga5x(this.a)).bz(x.gcEi(x),y.H)},
$S:121}
B.fjR.prototype={
$1(d){return this.a.d5(0,null)},
$S:121}
B.fjS.prototype={
$0(){return null},
$S:11}
B.c77.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fjT.prototype={
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
return new B.jj(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fnP.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fii.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fij.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c7c.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.fJj.prototype={
$1(d){return new B.Yu(this.a,null)},
$S:z+16}
B.d1p.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fJ()},
$S:9}
B.d1n.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d1o.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPj.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a04()},
$S:12}
B.dOH.prototype={
$0(){var x=J.bDt(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOI.prototype={
$0(){var x=J.bDt(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOg.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOf(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dOf.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOh.prototype={
$0(){var x=J.bDt(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOm.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dOl(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dOl.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dP7.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dP8.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dOE.prototype={
$1(d){return new B.Ue(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HM(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Ui(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tz(),$async$$0)
case 5:s=J.a6(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a0f(s.gM(t)),$async$$0)
case 8:case 7:r.hX(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOk.prototype={
$1(d){this.a.ab4(d,"No files selected.","Added")},
$S:441}
B.dOM.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dOL(),A.U(x).k("K<1,n>")))},
$S:0}
B.dOL.prototype={
$1(d){return d.a},
$S:z+2}
B.dOq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wZ.c5().cQP(C.Zr,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jo(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hX("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hX("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aox(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cl(l)){o.hX("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tz(),$async$$0)
case 9:o.hX("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dP4.prototype={
$1(d){return new B.Pa(this.a.a.c,this.b,null)},
$S:z+7}
B.dP5.prototype={
$1(d){return new B.Yw(this.a.a.c,this.b,null)},
$S:z+18}
B.dP6.prototype={
$1(d){return new B.Yt(this.a.a.c,this.b,null)},
$S:z+19}
B.dOC.prototype={
$1(d){return new B.Pa(this.a.a.c,this.b,null)},
$S:z+7}
B.dOD.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dOY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HM(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6t(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hX("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ckK(),$async$$0)
case 5:x=6
return A.b(p.tz(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dOU(p),r),new B.dOV(),r.k("K<ak.E,n>")).c_(0,new B.dOW())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.e8(new B.dOX(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p_(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uo(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOU.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dOT(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dOT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOV.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dOW.prototype={
$1(d){return d.length!==0},
$S:3}
B.dOX.prototype={
$1(d){var x=this.a
return new B.Yy(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dOZ.prototype={
$1(d){return d.a},
$S:z+2}
B.dP_.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOS.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kL,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoD(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ms(D.mx)?C.tS:C.oJ
p=!x||p.ms(D.mx)?"Play video":"View"
return A.c_(A.bn(!0,new A.C(C.AZ,A.v(A.a([q,o,t,C.aA,B.Yx(!1,u,!1,w,p,new B.dON(d),v),B.Yx(!1,u,!1,C.jj,"Share via QR",new B.dOO(d),"Letters/numbers QR code"),B.Yx(!1,u,!1,D.a_t,"Send to their Code",new B.dOP(d),"Enter someone else's personal code"),B.Yx(!1,u,!1,C.hA,"Download / save",new B.dOQ(d),v),C.an,B.Yx(!1,u,!0,C.e5,"Delete",new B.dOR(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kC,v,v,C.n),C.bd)},
$S:715}
B.dON.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dOO.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dOP.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dOQ.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dOR.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dOn.prototype={
$1(d){return d.a},
$S:z+2}
B.dOo.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOp.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6v(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.G8(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p_(s.c,s.f),$async$$0)
case 4:u.hX(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOj.prototype={
$1(d){var x=this.a
x.tA(new B.dOi(x,d,this.b),"Preparing\u2026")},
$S:441}
B.dOi.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hX("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Ui(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cl(s)){t.hX("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCo(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hX("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOF.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dOG.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fRn(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.G5(new B.dOv(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hX("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOw(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOx(s))
case 5:x=8
return A.b(r.b.ig(0,C.EY,new B.dOy()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gam(t)){s.hX("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tz(),$async$$0)
case 9:s.hX("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOv.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOs(x,d,e))},
$S:139}
B.dOs.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOw.prototype={
$1(d){return new B.abD(this.a.a,null)},
$S:z+21}
B.dOx.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOy.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.I3(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6j(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZU(B.I3(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aox(new B.dOt(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cl(r)){if(B.fRm(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hX(q)
x=1
break}x=10
return A.b(s.tz(),$async$$0)
case 10:o=J.cE(r)
p=o.eK(r,new B.dOu()).gM(0)
s.hX(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOt.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOr(x,d,e))},
$S:139}
B.dOr.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOu.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.dOK.prototype={
$1(d){return new B.Yz(this.a.a.c,null)},
$S:z+23}
B.dOJ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZ_(u.a.c,v.b),$async$$0)
case 2:t.hX(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dP3.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bn(!0,new A.C(C.AZ,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kL,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yx(!0,w,!1,C.nc,"My Code",new B.dP0(d),"Your personal code & QR \u2014 others send docs to you"),B.Yx(!1,w,!1,D.a_t,"Send to their Code",new B.dP1(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yx(!1,w,!1,S.yg,"Import backup",new B.dP2(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kC,x,x,C.n),C.bd)},
$S:715}
B.dP0.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dP1.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAL()},
$S:0}
B.dP2.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dPg.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Ic(D.Py,x,C.a_n,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cQ(C.d.gL(D.Py).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:693}
B.dPe.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dPf.prototype={
$0(){this.a.ahi()
return null},
$S:0}
B.dPh.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:103}
B.dPi.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abF(e,w,v,this.b,x.e,x.c4N(w),new B.dPa(x,w),new B.dPb(x,v,w),new B.dPc(x,w),new B.dPd(x,w),null)},
$S:z+24}
B.dPa.prototype={
$0(){this.a.aex(this.b)
return null},
$S:0}
B.dPb.prototype={
$0(){var x=this.a
return x.m(new B.dP9(x,this.b,this.c))},
$S:0}
B.dP9.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dPc.prototype={
$0(){this.a.Nw(this.b)
return null},
$S:0}
B.dPd.prototype={
$0(){this.a.ah5(this.b)
return null},
$S:0}
B.d1l.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:103}
B.d1m.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:134}
B.d1J.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:103}
B.d1I.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d1F.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1G.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d1H.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1D.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d1B(this.a),C.fV,C.du,!0,x,!1,x,x)
$.aW.x1$.push(new B.d1C(this.a))
return C.bH},
$S:132}
B.d1B.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1z(this.a))
return C.bH},
$S:183}
B.d1z.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1w(x))},
$S:9}
B.d1w.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1C.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1y(x))},
$S:9}
B.d1y.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1E.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d1A(this.a))
return C.bH},
$S:183}
B.d1A.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1x(x))},
$S:9}
B.d1x.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1i.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1h(x,d))},
$S:1740}
B.d1h.prototype={
$0(){return this.a.f=this.b===C.um},
$S:0}
B.d1j.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1g(x,d))},
$S:9}
B.d1g.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d1k.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d1f(x,d))},
$S:9}
B.d1f.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d1b.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d1c.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d1d.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1e.prototype={
$1(d){return this.a.d.Mw(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d1W.prototype={
$0(){var x=this.a.a
return B.ri(x.c,x.d)},
$S:1741}
B.d1X.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d1Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d1Z.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d2_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d20.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d22.prototype={
$0(){var x=this.a
x.m(new B.d21(x))},
$S:0}
B.d21.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h2(0)
else x.pQ(0)},
$S:0}
B.d1S.prototype={
$1(d){return this.a.Q8(this.b)},
$S:12}
B.d1T.prototype={
$1(d){return this.a.Q7(this.b)},
$S:12}
B.d1K.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d1L.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d1M.prototype={
$1(d){return D.fOa},
$S:z+25}
B.d1R.prototype={
$2(d,e){if(d)B.Uo()},
$S:120}
B.d1N.prototype={
$0(){return this.a.a8Z(this.b)},
$S:0}
B.d1O.prototype={
$0(){return this.a.a8W(this.b)},
$S:0}
B.d1P.prototype={
$0(){return this.a.ad6(this.b)},
$S:0}
B.d1Q.prototype={
$0(){return this.a.a0T(this.b)},
$S:0}
B.d1a.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d1V.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pU(),$async$$0)
case 2:u.m(new B.d1U(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d1U.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c7e.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.c7f.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c7d.prototype={
$2(d,e){return this.bi7(d,e)},
bi7(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Up(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fnr.prototype={
$1(d){if(d===D.a5n&&(this.a.a.a&30)===0)this.a.fP(0)},
$S:z+27}
B.fns.prototype={
$0(){},
$S:11}
B.fnZ.prototype={
bjH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fcl(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h6l(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjH(d,e)},
$S:542}
B.fnY.prototype={
$1(d){var x=this
d.b=new B.fnX(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fnX.prototype={
$1(d){return this.bjG(d)},
bjG(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.fcl(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6s(m),$async$$1)
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
x(v=B.ayr.prototype,"gcbF","PK",0)
x(v,"gccw","IQ",0)
x(v,"gcc1","xH",0)
x(v=B.aCl.prototype,"gc4H","ad4",0)
x(v,"gc4I","Z0",0)
x(v,"gcr5","agN",0)
x(v=B.aCo.prototype,"gc4J","Z1",0)
x(v,"gcr6","a1c",0)
x(B.aCm.prototype,"gc4K","ad5",0)
x(B.ayq.prototype,"gc4P","c4Q",4)
x(v=B.aCn.prototype,"gcc2","a_8",0)
x(v,"gcpI","cpJ",4)
x(v,"gb01","axo",0)
x(v,"gcsA","ahc",0)
x(v,"gbME","X_",0)
x(v,"gc4O","DY",0)
x(B.ays.prototype,"gb3R","a1b",0)
x(B.ayp.prototype,"gc4R","Z2",0)
x(v=B.ayv.prototype,"gaZI","cak",4)
x(v,"gc4L","ad8",0)
x(v=B.ayt.prototype,"gcoJ","a0Y",0)
x(v,"gaXU","ad7",0)
w(B.ayo.prototype,"gaw_","aw0",8)
x(v=B.ayu.prototype,"gceK","af_",0)
x(v,"gbMc","a9K",0)
w(v,"gaw_","aw0",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cid,B.a8O,B.asR,B.aAZ,B.aEa,B.jj,B.abl,B.buo,B.EF,B.WA])
w(B.cie,B.cid)
w(B.b37,B.a8O)
x(A.hT,[B.ci9,B.cia,B.cib,B.ci8,B.cic,B.cif,B.cig,B.cih,B.cii,B.cij,B.cik,B.cil,B.cim,B.fi_,B.fEn,B.fEp,B.fEo,B.fEC,B.fED,B.fjE,B.d1q,B.d1s,B.d1r,B.d1v,B.flD,B.fm6,B.c6J,B.c6Q,B.c6R,B.c6M,B.c6K,B.c6N,B.c6O,B.fEA,B.fEB,B.dPn,B.dPw,B.dPu,B.dPv,B.ffc,B.fjQ,B.fjR,B.c77,B.fjT,B.fnP,B.fii,B.fij,B.c7c,B.fJj,B.d1p,B.d1n,B.dPj,B.dOf,B.dOl,B.dOE,B.dOk,B.dOL,B.dP4,B.dP5,B.dP6,B.dOC,B.dOU,B.dOT,B.dOV,B.dOW,B.dOX,B.dOZ,B.dP_,B.dOS,B.dOn,B.dOo,B.dOj,B.dOF,B.dOw,B.dOu,B.dOK,B.dP3,B.dPg,B.dPh,B.d1l,B.d1m,B.d1J,B.d1I,B.d1D,B.d1B,B.d1z,B.d1C,B.d1E,B.d1A,B.d1i,B.d1j,B.d1k,B.d1e,B.d1S,B.d1T,B.d1M,B.c7e,B.c7f,B.fnr,B.fnY,B.fnX])
w(B.b38,B.asR)
x(A.j6,[B.fEm,B.d1t,B.d1u,B.flB,B.flC,B.fm5,B.dOc,B.dPl,B.dPm,B.dPk,B.dPo,B.dPp,B.dPq,B.dPr,B.dPs,B.dPt,B.dOd,B.dOe,B.fjS,B.d1o,B.dOH,B.dOI,B.dOg,B.dOh,B.dOm,B.dP7,B.dP8,B.dOB,B.dOM,B.dOq,B.dOD,B.dOY,B.dON,B.dOO,B.dOP,B.dOQ,B.dOR,B.dOp,B.dOi,B.dOG,B.dOz,B.dOs,B.dOx,B.dOy,B.dOA,B.dOr,B.dOJ,B.dP0,B.dP1,B.dP2,B.dPe,B.dPf,B.dPa,B.dPb,B.dP9,B.dPc,B.dPd,B.d1F,B.d1G,B.d1H,B.d1w,B.d1y,B.d1x,B.d1h,B.d1g,B.d1f,B.d1b,B.d1c,B.d1d,B.d1W,B.d1X,B.d1Y,B.d1Z,B.d2_,B.d20,B.d22,B.d21,B.d1K,B.d1L,B.d1N,B.d1O,B.d1P,B.d1Q,B.d1a,B.d1V,B.d1U,B.fns])
x(A.m6,[B.abE,B.N_,B.a8P,B.O1,B.Wz,B.O0,B.EG])
x(A.ag,[B.Yv,B.Ud,B.Uh,B.Ue,B.Yu,B.Uf,B.Yw,B.Yt,B.Pa,B.Yy,B.Ys,B.Yz])
x(A.ah,[B.ayr,B.aCl,B.aCo,B.aCm,B.ayq,B.aCn,B.ays,B.ayp,B.ayv,B.ayt,B.ayo,B.ayu])
x(A.au,[B.ac6,B.ayn,B.bcw,B.abF,B.abD,B.bcx])
x(A.ki,[B.c6P,B.c6L,B.c6T,B.c6U,B.fFd,B.dOv,B.dOt,B.dPi,B.d1R,B.c7d,B.fnZ])
x(A.iP,[B.bhS,B.bu2])})()
A.jW(b.typeUniverse,JSON.parse('{"b37":{"a8O":[]},"b38":{"asR":[]},"Yv":{"ag":[],"r":[]},"ayr":{"ah":["Yv"]},"ac6":{"au":[],"r":[]},"Ud":{"ag":[],"r":[]},"Uh":{"ag":[],"r":[]},"aCl":{"ah":["Ud"]},"aCo":{"ah":["Uh"]},"bhS":{"iP":[]},"Ue":{"ag":[],"r":[]},"aCm":{"ah":["Ue"]},"Yu":{"ag":[],"r":[]},"Uf":{"ag":[],"r":[]},"abF":{"au":[],"r":[]},"Yw":{"ag":[],"r":[]},"Yt":{"ag":[],"r":[]},"Pa":{"ag":[],"r":[]},"Yy":{"ag":[],"r":[]},"abD":{"au":[],"r":[]},"Ys":{"ag":[],"r":[]},"Yz":{"ag":[],"r":[]},"ayq":{"ah":["Yu"]},"bu2":{"iP":[]},"aCn":{"ah":["Uf"]},"ayn":{"au":[],"r":[]},"bcw":{"au":[],"r":[]},"ays":{"ah":["Yw"]},"ayp":{"ah":["Yt"]},"ayv":{"ah":["Pa"]},"ayt":{"ah":["Yy"]},"ayo":{"ah":["Ys"]},"ayu":{"ah":["Yz"]},"bcx":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("u_"),k:x("Ls()"),m:x("bk<n,n>"),F:x("qV"),g:x("az<jj?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a3<n,R>>"),t:x("O<a3<n,@>>"),r:x("O<jj>"),w:x("O<+file,name(lv,n)>"),u:x("O<cQ>"),s:x("O<n>"),E:x("O<iP>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jj>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iz"),e:x("ib3"),af:x("DV"),U:x("jj"),b:x("cq"),C:x("aC"),aK:x("vX"),ab:x("EF"),br:x("asR"),v:x("WA"),N:x("n"),X:x("bo<N>"),Q:x("lG"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a3<n,@>>"),c7:x("r"),ch:x("bW<ai<jj>>"),aW:x("bW<dD?>"),aY:x("bW<~>"),cx:x("abE"),b1:x("bg<ai<jj>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAZ"),bG:x("aEa"),q:x("mX"),B:x("pg<EF>"),c6:x("pg<a8P>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jj>?"),aL:x("ai<@>?"),h:x("a3<n,@>?"),l:x("jj?"),R:x("aC?"),c:x("WA?"),d:x("+answerQr,transfer(n,az<ai<jj>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N_,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abl?"),bk:x("aAZ?"),ag:x("aEa?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aXF=new A.ay(C.aE,2,C.q,-1)
D.bTJ=new A.a8(C.a3,C.a7,C.x,C.a1l,null,null)
D.aZk=new A.o(null,null,null,C.m5,null,D.bTJ,C.n)
D.b_L=new A.o(null,null,null,C.m5,null,E.Gn,C.n)
D.abm=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acB=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adv=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.af0=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fbu=new A.x("Your team portal",null,C.dl,null,null,null,null,null,null,null,null,null)
D.fpx=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Da,null,null,null,null,null,null,null,null,null)
D.d1s=x([D.fbu,C.an,D.fpx],y.p)
D.bkT=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d1s,null)
D.ftL=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.ffG=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Da,null,null,null,null,null,null,null,null,null)
D.dgm=x([D.ftL,C.an,D.ffG],y.p)
D.bl1=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dgm,null)
D.fq5=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fjt=new A.x("Enter the access code and password from your organization.",null,G.Da,null,null,null,null,null,null,null,null,null)
D.dej=x([D.fq5,C.an,D.fjt],y.p)
D.blb=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dej,null)
D.br0=new A.Q(16,10,16,28)
D.br8=new A.Q(16,14,16,4)
D.bsl=new A.Q(20,0,20,16)
D.bsR=new A.Q(20,8,20,16)
D.ahN=new A.Q(24,22,24,20)
D.a_t=new A.a0(63394,"MaterialIcons",!1)
D.akM=new A.a0(63515,"MaterialIcons",!1)
D.bEr=new A.a0(983813,"MaterialIcons",!1)
D.bBJ=new A.a0(62867,"MaterialIcons",!1)
D.bFq=new A.ae(D.bBJ,44,C.c,null,null,null)
D.bGu=new A.ae(C.pM,null,C.ad,null,null,null)
D.bHT=new A.ae(C.iW,18,null,null,null,null)
D.bJz=new A.ae(D.a_t,26,C.c,null,null,null)
D.bK4=new A.ae(C.BB,null,null,null,null,null)
D.bKD=new A.ae(C.yi,null,null,null,null,null)
D.bLL=new A.ae(W.Nn,null,null,null,null,null)
D.bM4=new A.ae(C.hk,16,null,null,null,null)
D.bPv=new A.ae(C.r5,16,null,null,null,null)
D.bFH=new A.ae(C.nc,null,null,null,null,null)
D.bQl=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFH,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bLa=new A.ae(C.FE,null,null,null,null,null)
D.bQq=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bLa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bG1=new A.ae(H.Ga,null,null,null,null,null)
D.bQB=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bG1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cDq=x([C.f8,C.aZ,C.aE],y.O)
D.bVB=new A.a8(C.ax,C.aC,C.x,D.cDq,null,null)
D.cCU=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Py=x([C.f8,C.aE],y.O)
D.PO=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mx=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d9f=x([C.pp,C.aE],y.O)
D.e0_={iceServers:0}
D.aFF={urls:0}
D.djZ=new A.bk(D.aFF,["stun:stun.l.google.com:19302"],y.m)
D.djY=new A.bk(D.aFF,["stun:stun1.l.google.com:19302"],y.m)
D.cT8=x([D.djZ,D.djY],A.ax("O<a3<n,n>>"))
D.dji=new A.bk(D.e0_,[D.cT8],A.ax("bk<n,@>"))
D.Hr=new B.N_(0,"lanDirect")
D.R6=new B.N_(1,"cloudStash")
D.duX=new B.N_(2,"inlineInstant")
D.R7=new B.N_(3,"webrtcLink")
D.z0=new B.N_(4,"videoCloud")
D.fpw=new A.x("Receive file",null,C.nt,null,null,null,null,null,null,null,null,null)
D.ct1=x([E.amv,C.ab,D.fpw],y.p)
D.eHL=new A.cn(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.ct1,null)
D.e5F=new A.C(C.ck,D.eHL,null)
D.f2G=new A.G(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2_,null,null,null)
D.fc1=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f2G,null,C.L,null,null,null,null,null,null,null)
D.e4X=new A.C(C.B4,D.fc1,null)
D.b4_=new A.cr(C.A,null,null,D.e4X,null)
D.ebm=new A.cL(0,null,0,28,null,null,D.b4_,null)
D.ebF=new B.a8P(0,"RTCDataChannelConnecting")
D.aL0=new B.a8P(1,"RTCDataChannelOpen")
D.aL1=new B.a8P(3,"RTCDataChannelClosed")
D.ebG=new B.EG(0,"RTCIceConnectionStateNew")
D.ebH=new B.EG(1,"RTCIceConnectionStateChecking")
D.ebI=new B.EG(2,"RTCIceConnectionStateCompleted")
D.ebJ=new B.EG(3,"RTCIceConnectionStateConnected")
D.ebK=new B.EG(4,"RTCIceConnectionStateCount")
D.ebL=new B.EG(5,"RTCIceConnectionStateFailed")
D.ebM=new B.EG(6,"RTCIceConnectionStateDisconnected")
D.aL2=new B.EG(7,"RTCIceConnectionStateClosed")
D.aL3=new B.Wz(0,"RTCIceGatheringStateNew")
D.ebN=new B.Wz(1,"RTCIceGatheringStateGathering")
D.a5n=new B.Wz(2,"RTCIceGatheringStateComplete")
D.a5o=new B.O0(0,"RTCPeerConnectionStateClosed")
D.aL4=new B.O0(1,"RTCPeerConnectionStateFailed")
D.aL5=new B.O0(2,"RTCPeerConnectionStateDisconnected")
D.aL6=new B.O0(3,"RTCPeerConnectionStateNew")
D.aL7=new B.O0(4,"RTCPeerConnectionStateConnecting")
D.aL8=new B.O0(5,"RTCPeerConnectionStateConnected")
D.ebO=new B.O1(0,"RTCSignalingStateStable")
D.ebP=new B.O1(1,"RTCSignalingStateHaveLocalOffer")
D.ebQ=new B.O1(2,"RTCSignalingStateHaveRemoteOffer")
D.ebR=new B.O1(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ebS=new B.O1(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aL9=new B.O1(5,"RTCSignalingStateClosed")
D.eLK=new A.at(160,48)
D.b5c=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eNd=new A.a7(16,16,D.b5c,null)
D.ff5=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eOE=new A.b1(D.ff5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmq=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eOH=new A.b1(D.fmq,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuN=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eOO=new A.b1(D.fuN,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.feH=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ePd=new A.b1(D.feH,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fqf=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNL=new A.b1(D.fqf,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frE=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ePG=new A.b1(D.frE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fwb=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ePV=new A.b1(D.fwb,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fue=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.b1(D.fue,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvo=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new A.b1(D.fvo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdo=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eRh=new A.b1(D.fdo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foa=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eRC=new A.b1(D.foa,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fhf=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eS7=new A.b1(D.fhf,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fwh=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eSb=new A.b1(D.fwh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdE=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new A.b1(D.fdE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fcm=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eSw=new A.b1(D.fcm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f9j=new A.x("NGMY DOC SHARE",null,C.aP2,null,null,null,null,null,null,null,null,null)
D.faC=new A.x("Show this to sender",null,C.kx,null,null,null,null,null,null,null,null,null)
D.fbB=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fg3=new A.x("Organization settings",null,C.cy,null,null,null,null,null,null,null,null,null)
D.fgq=new A.x("Sign in",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fhp=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fkH=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fno=new A.x("Send to their Doc Share",null,C.nr,null,null,null,null,null,null,null,null,null)
D.fnH=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fo_=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fox=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.foC=new A.x("Create portal",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fp_=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fs7=new A.x("Share files & videos\nwith a scan.",null,C.aP3,null,null,null,null,null,null,null,null,null)
D.fsq=new A.x("Add files",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fOa=new B.Ys(null)
D.a8o=new B.abE(0,"docShare")
D.a8p=new B.abE(1,"gate")
D.U5=new B.abE(2,"gateNoIndividual")})();(function staticFields(){$.aMR=null
$.fa7=function(){var x=y.N
return A.T(x,x)}()
$.FS=A.T(y.N,y.D)
$.afI=A.T(y.N,A.ax("lv"))
$.Qp=A.T(y.N,y.D)
$.faF=A.T(y.N,A.ax("abl"))
$.c76=A.T(y.S,A.ax("buo"))
$.h6k=1
$.hTL=null
$.hTK=null
$.hLf=null
$.fWt=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iby","hnu",()=>new B.cie())
x($,"i9t","h_5",()=>C.a.t(A.bu(A.bu(A.bu(A.Gs(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["tsVVwOVgxS5P+KT9+bJrPoHDDaI="]=a.current})($__dart_deferred_initializers__);