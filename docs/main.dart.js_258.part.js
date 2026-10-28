((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ci9:function ci9(){},
hED(d){var x=null,w=new B.b34(d,D.ebo,new A.pg(x,x,y.c6),new A.pg(x,x,y.B))
w.bwH(d)
return w},
b34:function b34(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ci4:function ci4(d){this.a=d},
ci5:function ci5(d){this.a=d},
ci6:function ci6(d){this.a=d},
ci3:function ci3(d){this.a=d},
ci7:function ci7(d){this.a=d},
hEE(d,e){var x=y.N
x=new B.b35(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwI(d,e)
return x},
b35:function b35(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cia:function cia(d){this.a=d},
cib:function cib(d){this.a=d},
cic:function cic(d){this.a=d},
cid:function cid(d){this.a=d},
cie:function cie(d){this.a=d},
cif:function cif(d){this.a=d},
cig:function cig(d){this.a=d},
cih:function cih(d){this.a=d},
fVR(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yr.LB(x,"ngmy_doc_share_v1",new B.fhK(),1)},
hLb(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zN(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cG.aJ(d)
return x}catch(w){return v}return v},
QD(d,e){return B.i_m(d,e)},
i_m(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMO
x=7
return A.b(o==null?$.aMO=B.fVR():o,$async$QD)
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
QC(d){return B.i_l(d)},
i_l(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMO
x=7
return A.b(o==null?$.aMO=B.fVR():o,$async$QC)
case 7:s=f
r=J.mE(s,"blobs","readonly")
x=8
return A.b(C.iD.zg(J.mC(r,"blobs"),d),$async$QC)
case 8:q=f
x=9
return A.b(J.pp(r),$async$QC)
case 9:o=B.hLb(q)
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
ago(d){return B.i_k(d)},
i_k(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ago=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMO
x=7
return A.b(p==null?$.aMO=B.fVR():p,$async$ago)
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
fhK:function fhK(){},
hNz(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bnA(w,v))}return u},
hkC(d,e){var x,w={},v=A.aVc("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fE6(w,v,e)
C.vL.ya(v,"change",new B.fE8(w,v,!1))
C.vL.ya(v,"cancel",new B.fE7(w))
$.eV.mn()
v.click()
A.bN(C.afS,new B.fE5(w),y.H)},
fE6:function fE6(d,e,f){this.a=d
this.b=e
this.c=f},
fE8:function fE8(d,e,f){this.a=d
this.b=e
this.c=f},
fE7:function fE7(d){this.a=d},
fE5:function fE5(d){this.a=d},
CI(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gT9()?3:4
break
case 3:x=5
return A.b(B.hfM(e,d,s,!0,!1,f,g,h,!1,i),$async$CI)
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
return A.b(B.fdb(s,d),$async$CI)
case 14:x=12
return A.b(r.hfM(q,p,o,n,m,l,k,j,a1,i),$async$CI)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c8(A.e8(new B.fEl(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c8(A.e8(new B.fEm(s,i,d,f,g,h),!1,null,y.H)),$async$CI)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CI,w)},
Qi(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qi=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYQ(e),$async$Qi)
case 3:u=k
x=4
return A.b(B.aon(d,e,!1),$async$Qi)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.I5(e,d),$async$Qi)
case 7:if(k){v=D.a8m
x=1
break}x=8
return A.b(B.Uf(e),$async$Qi)
case 8:v=t?D.U2:D.a8n
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYO(d,e)){v=D.a8m
x=1
break}x=11
return A.b(B.Uf(e),$async$Qi)
case 11:v=t?D.U2:D.a8n
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fR1(d,e)){v=D.a8m
x=1
break}x=14
return A.b(B.Uf(e),$async$Qi)
case 14:v=D.U2
x=1
break
case 13:v=t?D.U2:D.a8n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qi,w)},
fdb(d,e){var x=0,w=A.j(y.y),v
var $async$fdb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYO(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYQ(d),$async$fdb)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fdb,w)},
hfM(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c8(A.e8(new B.fjo(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
haV(d,e,f,g,h,i,j){return new B.Yu(e,j,d,g,h,i,f,null)},
flk(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$flk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.fln(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$flk)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$flk,w)},
flP(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$flP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.flR(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$flP)
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
return A.i($async$flP,w)},
fW_(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fwH(d,e){var x=0,w=A.j(y.H),v
var $async$fwH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Uf(e),$async$fwH)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eJ()
case 1:return A.h(v,w)}})
return A.i($async$fwH,w)},
fEl:function fEl(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fEm:function fEm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abE:function abE(d,e){this.a=d
this.b=e},
fjo:function fjo(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yu:function Yu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ayo:function ayo(){this.c=this.a=this.d=null},
d1e:function d1e(d,e){this.a=d
this.b=e},
d1b:function d1b(d){this.a=d},
d1d:function d1d(d){this.a=d},
d1c:function d1c(d){this.a=d},
d1g:function d1g(){},
d1f:function d1f(d){this.a=d},
ac6:function ac6(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAW:function aAW(d,e){this.a=d
this.b=e},
aE7:function aE7(d,e,f){this.a=d
this.b=e
this.c=f},
fln:function fln(d,e,f){this.a=d
this.b=e
this.c=f},
fll:function fll(d){this.a=d},
flm:function flm(d,e,f){this.a=d
this.b=e
this.c=f},
flR:function flR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
flQ:function flQ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c6D(d,e,f,g,h){return B.hzx(d,e,f,g,h)},
hzx(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c6D=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iK(r.dt(d,new B.c6E(s,e,h,g,f,q),y.g),y.l),$async$c6D)
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
return A.i($async$c6D,w)},
aYL(d,e,f,g,h){return B.hzy(d,e,f,g,h)},
hzy(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYL=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atE("GET",d)
o=A.fNu()
if(o==null)o=new A.Lo(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.EV),$async$aYL)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.C1(),$async$aYL)
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
return A.i($async$aYL,w)},
aYK(d){return B.hzv(d)},
hzv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v7(d,null).cM(0,C.nR),$async$aYK)
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
return A.i($async$aYK,w)},
c6C(d){return B.hzw(d)},
hzw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c6C=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v7(d,null).cM(0,C.pH),$async$c6C)
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
return A.i($async$c6C,w)},
c6E:function c6E(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ji:function ji(d,e,f,g,h,i,j,k,l){var _=this
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
hzD(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.I3(C.a.b1(u,v.length))}return null},
hzE(d){var x=B.I3(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hzz(){var x,w=$.pm(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fX(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a6h(d){return B.hzA(d)},
hzA(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a6i(d,e){return B.hzB(d,e)},
hzB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
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
break}m=B.hzz()
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
a6k(d,e,f,g){return B.hzF(d,e,f,g)},
hzF(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
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
break}if(g.cI(d,0,new B.c6K())>1048576||g.b5(d,new B.c6L())){v=B.Eb(r,d,e,q,a0)
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
return A.b(B.aYT(u,g.gM(d),a0),$async$a6k)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pm().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c6M(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYM(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6k)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6k,w)},
Eb(d,e,f,g,h){return B.hzC(d,e,f,g,h)},
hzC(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Eb=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Eb)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c6G())
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
break}q=h.gU(h)
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
break}n=a0.gU(0)
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
return A.b(new A.a9U(a1.a,a4,"media",a1.d,a2).wM(m,n,new A.Dt(!0,q.c)),$async$Eb)
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
return A.b(B.aPi(r),$async$Eb)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c6H(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYM(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Eb)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPi(r),$async$Eb)
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
aYM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6h(t),$async$aYM)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c6F(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6i(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYM,w)},
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
return A.b(B.aYN(k,a0),$async$MZ)
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
return A.b(B.aYS(h),$async$MZ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Um(g,a0),$async$MZ)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c6I(),q),n)
d=A.B(new A.a2(r,new B.c6J(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a6i("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MZ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MZ,w)},
aYN(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cl(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
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
break}i=B.i38(k,j)
C.d.v(s,i)
x=5
return A.b(B.CG(l,m,"Received via My Code",t,e,i),$async$aYN)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPi(s),$async$aYN)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYN,w)},
c6K:function c6K(){},
c6L:function c6L(){},
c6M:function c6M(){},
c6G:function c6G(){},
c6H:function c6H(){},
c6F:function c6F(){},
c6I:function c6I(){},
c6J:function c6J(){},
fEi(d,e){var x=0,w=A.j(y.H)
var $async$fEi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c8(A.e8(new B.fEj(e),!1,null,y.H)),$async$fEi)
case 2:return A.h(null,w)}})
return A.i($async$fEi,w)},
bCj(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bCj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cl(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c8(A.e8(new B.fEk(g,e,f),!1,null,y.y)),$async$bCj)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bCj,w)},
fEj:function fEj(d){this.a=d},
fEk:function fEk(d,e,f){this.a=d
this.b=e
this.c=f},
Uc:function Uc(d,e){this.c=d
this.a=e},
aCi:function aCi(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dNX:function dNX(d,e){this.a=d
this.b=e},
Ug:function Ug(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCl:function aCl(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dP5:function dP5(d){this.a=d},
dP6:function dP6(d){this.a=d},
dP7:function dP7(d){this.a=d},
dP4:function dP4(d,e){this.a=d
this.b=e},
dP8:function dP8(d){this.a=d},
dP9:function dP9(d){this.a=d},
dPa:function dPa(d,e){this.a=d
this.b=e},
dPb:function dPb(d,e){this.a=d
this.b=e},
dPc:function dPc(d,e){this.a=d
this.b=e},
dPd:function dPd(d){this.a=d},
dPg:function dPg(){},
dPe:function dPe(d){this.a=d},
dPf:function dPf(d,e){this.a=d
this.b=e},
bhN:function bhN(){},
Ud:function Ud(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCj:function aCj(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dNY:function dNY(d){this.a=d},
dNZ:function dNZ(d){this.a=d},
fR2(d){var x=d.hO
if(x>=0)return C.o.N(x)
return 10},
hzH(d){var x=d.kC
if(x>=0)return x
return 4.99},
hzG(d){var x=d.lk,w=y.N
w=x.iY(x,new B.c6O(),w,w)
return w},
h5Y(d){var x=d.kD,w=y.N
w=x.iY(x,new B.c6P(),w,w)
return w},
aYQ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aYQ)
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
return A.i($async$aYQ,w)},
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
Uf(d){var x=0,w=A.j(y.H),v,u
var $async$Uf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Uf)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Uf)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Uf,w)},
fR1(d,e){var x,w,v
if(B.hzH(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hzG(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYO(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h5Y(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h5Z(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h5Y(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kD=w},
aoo(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoo=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aoo)
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
return A.i($async$aoo,w)},
aop(d){var x=0,w=A.j(y.H),v,u,t
var $async$aop=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoo(d),$async$aop)
case 3:u=f
x=5
return A.b(A.aA(),$async$aop)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$aop)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aop,w)},
aon(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aon=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fR2(d)
if(u<=0){v=!1
x=1
break}if(B.fR1(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoo(e),$async$aon)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aon,w)},
aYP(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.I5(e,d),$async$aYP)
case 3:if(g){v=-1
x=1
break}u=B.fR2(d)
if(u<=0){v=-1
x=1
break}if(B.fR1(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoo(e),$async$aYP)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYP,w)},
c6R(d,e,f){var x=0,w=A.j(y.y),v
var $async$c6R=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.I5(e,d),$async$c6R)
case 3:if(h){v=!1
x=1
break}v=B.aon(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6R,w)},
c6Q(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c6Q=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c6R(d,u,i.gT9()),$async$c6Q)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6Q,w)},
a6l(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6l=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gT9()){v=!0
x=1
break}if(B.aYO(d,u)){v=!0
x=1
break}x=5
return A.b(A.le(u,C.Rr),$async$a6l)
case 5:x=k?3:4
break
case 3:B.h5Z(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6l)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kS(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rr,"Doc Share for Organizations"),$async$a6l)
case 7:if(!k){v=!1
x=1
break}B.h5Z(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6l)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6l,w)},
c6O:function c6O(){},
c6P:function c6P(){},
fEV(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fEV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fEV)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f9S.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hM([r],e.c))
s.toString
$.f9S.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEV,w)},
i5q(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f9S.bn($.f9S,new B.fEX(d))},
fEX:function fEX(d){this.a=d},
fbh(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fbh=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.jb,null,y.H),$async$fbh)
case 3:C.zN.fb(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eV.mn()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbh,w)},
aff(d,e,f){var x=0,w=A.j(y.H),v
var $async$aff=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fap.n(0,d,new B.abl(A.bm(e,!0,v)))
x=3
return A.b(A.aA(),$async$aff)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aff)
case 2:return A.h(null,w)}})
return A.i($async$aff,w)},
af9(d){return B.hPo(d)},
hPo(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$af9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fap.h(0,d)
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
break}o=J.b6(s,new B.feX(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abl(r)
$.fap.n(0,d,p)
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
aN9(d){return B.hPm(d)},
hPm(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aN9=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FS.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.QC(d),$async$aN9)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FS.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aN9)
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
return A.b(J.hD(s,d),$async$aN9)
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
return A.i($async$aN9,w)},
hLy(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eZ(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zN(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a0W(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fjA(r,t),!1,s)
A.fI(r,"error",new B.fjB(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ig(0,C.LC,new B.fjC())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0W,w)},
aNt(d,e,f){return B.hRD(d,e,f)},
hRD(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aNt=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0W(i),$async$aNt)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QD(o,p),$async$aNt)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aff(k,j,s),$async$aNt)
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
return A.i($async$aNt,w)},
aNs(d,e,f){return B.hRC(d,e,f)},
hRC(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNs=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aNt(d,e,f),$async$aNs)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0W(f),$async$aNs)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FS.n(0,s,r)
$.Qp.n(0,s,r)
x=11
return A.b(B.Q8(s,r),$async$aNs)
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
return A.i($async$aNs,w)},
Bm(d,e,f,g,h,i){return B.hzQ(d,e,f,g,h,i)},
hzQ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
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
m=new B.ji(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYW(),null)
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
Uh(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Uh=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.An(d),$async$Uh)
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
k=B.h60(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.ji(m,n,k,l,j,"From folder",null,B.aYW(),null)
$.afI.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0W(o),$async$Uh)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FS.n(0,h,g)
$.Qp.n(0,h,g)
B.Q8(h,g)
x=9
break
case 10:x=11
return A.b(B.aNs(d,m,o),$async$Uh)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.G3(d,t),$async$Uh)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uh,w)},
fR6(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fR6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h60(r,C.d.gal(r.split(".")),null)
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
return A.i($async$fR6,w)},
I6(d,e,f,g,h,i){return B.hzP(d,e,f,g,h,i)},
hzP(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
break}m=j.gU(0)
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
case 16:f=new B.ji(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYW(),null)
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
Uj(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Uj=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afI.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0W(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.af9(s),$async$Uj)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QC(u[o]),$async$Uj)
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
return A.b(B.ri(d,e),$async$Uj)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qp.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zN(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uj,w)},
h60(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ri(d,e){return B.hzR(d,e)},
hzR(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.b(B.a0W(s),$async$ri)
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
case 11:n=new A.axb(A.a([],y.a))
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
return A.b(B.aN9(f),$async$ri)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qp.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Uj(a0,a1,0,g),$async$ri)
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
hzU(d){var x,w,v=$.afI.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hzV(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hM([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hzS(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aov(d,e,f,g,h){return B.hzT(d,e,f,g,h)},
hzT(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aov=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afI.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0W(s),$async$aov)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ri(g,e),$async$aov)
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
return A.b(n.i8(d).wM(h,r,new A.Dt(!0,e.c)),$async$aov)
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
return A.i($async$aov,w)},
h62(d,e,f,g,h){var x,w,v,u,t=$.h61
$.h61=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c71.n(0,t,new B.buj(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axb(u)))
return t},
fR7(d){var x=0,w=A.j(y.H)
var $async$fR7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fR7,w)},
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
return A.pY(B.Uj(d,e,p,o<q?o:q),$async$I7,w)
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
var x=0,w=A.heF($async$I7,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hgu(w)},
aYY(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c71.h(0,d)
if(t==null||J.cl(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3U(),$async$aYY)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYY,w)},
Ui(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Ui=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c71.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3U(),$async$Ui)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aff(r.c,u,r.z),$async$Ui)
case 4:t=new B.ji(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYW(),null)
u=r.a
x=5
return A.b(B.An(u),$async$Ui)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.G3(u,s),$async$Ui)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ui,w)},
a6s(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c71.W(0,d)
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
c73(d,e,f){var x=0,w=A.j(y.H)
var $async$c73=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzl(d,e,f),$async$c73)
case 2:return A.h(null,w)}})
return A.i($async$c73,w)},
c74(d,e,f){var x=0,w=A.j(y.H)
var $async$c74=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bzm(d,e,f),$async$c74)
case 2:return A.h(null,w)}})
return A.i($async$c74,w)},
Ec(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Ec=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.An(d),$async$Ec)
case 2:p=g
J.no(p,new B.c72(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FS.W(0,v)
$.afI.W(0,e)
x=3
return A.b(B.af9(v),$async$Ec)
case 3:u=g
$.fap.W(0,v)
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
aYX(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ri(d,e),$async$aYX)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fbh(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYX,w)},
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
break}r=J.b6(u,new B.fjD(),y.U)
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
t=J.b6(e,new B.fnz(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$G3)
case 3:return A.h(null,w)}})
return A.i($async$G3,w)},
bzl(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.An(d),$async$bzl)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fi2(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCQ(f))
x=4
return A.b(B.G3(d,u),$async$bzl)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzl,w)},
bzm(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bzm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.An(d),$async$bzm)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fi3(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cG_(f))
x=4
return A.b(B.G3(d,u),$async$bzm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bzm,w)},
abl:function abl(d){this.a=d},
feX:function feX(){},
fjA:function fjA(d,e){this.a=d
this.b=e},
fjB:function fjB(d){this.a=d},
fjC:function fjC(){},
c72:function c72(d){this.a=d},
buj:function buj(d,e,f,g,h,i,j,k,l){var _=this
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
fjD:function fjD(){},
fnz:function fnz(){},
fi2:function fi2(d){this.a=d},
fi3:function fi3(d){this.a=d},
a6t(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b5(d,new B.c77())?3:4
break
case 3:x=5
return A.b(B.aYZ(d,e),$async$a6t)
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
return A.b(B.aYU(s),$async$a6t)
case 10:case 9:if(g){v=new A.Px(1,D.R4,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Uk(d,e),$async$a6t)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Up(!0,!0,d,e),$async$a6t)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.N0(d,D.yZ,e,t)
v=new A.Px(p,D.yZ,t)
x=1
break}v=B.c76(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6t,w)},
Uk(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Uk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6v(null,d,e),$async$Uk)
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
return A.b(B.aYT(p,d.length,e),$async$Uk)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c74(e,C.d.gL(d).a,r.b),$async$Uk)
case 7:case 6:q=r.a
x=8
return A.b(B.N0(d,D.R4,e,q),$async$Uk)
case 8:v=new A.Px(d.length,D.R4,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uk,w)},
Ul(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ul=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ms(D.mx)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6u(d,e),$async$Ul)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c7_(s,d,e,t),$async$Ul)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYU(t),$async$Ul)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ri(e,d),$async$Ul)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Uk(A.a([d],y.r),e),$async$Ul)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ul,w)},
Un(){var x=0,w=A.j(y.H)
var $async$Un=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fR0(),$async$Un)
case 2:x=3
return A.b(B.aPA(),$async$Un)
case 3:return A.h(null,w)}})
return A.i($async$Un,w)},
a6u(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6u=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYW()
x=3
return A.b(B.c73(e,d.a,u),$async$a6u)
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
t=e===D.R4&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b1(u,13)):null
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
return A.b(B.c6Z(o,p,u,f),$async$N0)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c7_(o,p,f,t),$async$N0)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c6Y(o,u,p,f),$async$N0)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$N0,w)},
aYZ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c75(e,d),$async$aYZ)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Up(!1,!0,d,e),$async$aYZ)
case 4:u=g
if(u!=null){t=u.b
v=new A.Px(u.a,D.yZ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYZ,w)},
c75(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c75=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Uj(d,s,0,1),$async$c75)
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
return A.i($async$c75,w)},
c76(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c76=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6v(null,d,e),$async$c76)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h6_(u)
if(t.length>800){v=null
x=1
break}v=new A.Px(d.length,D.duJ,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c76,w)},
aow(d,e,f){return B.hzY(d,e,f)},
hzY(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aow=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mD(g,1)
x=B.fR5(g)?3:4
break
case 3:x=5
return A.b(B.c70(g),$async$aow)
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
return A.b(B.aYS(q),$async$aow)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Um(p,a0)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fR4(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Um(n,a0)
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
v=B.Um(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aow,w)},
I8(d,e,f){return B.hzW(d,e,f)},
hzW(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.b(B.aYK(r),$async$I8)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYK(A.cw(s,0,null)),$async$I8)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cl(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c6D(o,r,a1,n,a2),$async$I8)
case 11:m=a4
x=J.cl(m)?12:13
break
case 12:x=14
return A.b(B.c6C(q),$async$I8)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Um(l,a2),$async$I8)
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
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
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
Um(d,e){return B.hzX(d,e)},
hzX(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Um=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
if(J.ad(j)===0){x=7
break}i=C.cG.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bm(i,a3,d,k,l,o),$async$Um)
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
return A.i($async$Um,w)},
N_:function N_(d,e){this.a=d
this.b=e},
c77:function c77(){},
a0w(d){var x=A.P(d).ax.a===C.I,w=x?D.adt:D.abk,v=x?D.aeZ:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acz:C.aL
return new A.aFl([w,s,v,u,t,x?C.f8:C.bW])},
hlj(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fJ2(e),d,null,!0,!0,y.N)},
c6N(d,e,f,g,h,i,j,k,l){return new B.Ue(e,l,d,f,k,j,g,h,i,null)},
Yw(d,e,f,g,h,i,j){return new B.bcs(g,h,j,e,i,d,f,null)},
fJ2:function fJ2(d){this.a=d},
Yt:function Yt(d,e){this.c=d
this.a=e},
ayn:function ayn(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d1a:function d1a(d){this.a=d},
d18:function d18(d){this.a=d},
d19:function d19(d){this.a=d},
btY:function btY(){},
Ue:function Ue(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCk:function aCk(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dP3:function dP3(d){this.a=d},
dOr:function dOr(d,e){this.a=d
this.b=e},
dOs:function dOs(d,e){this.a=d
this.b=e},
dO0:function dO0(d,e,f){this.a=d
this.b=e
this.c=f},
dO_:function dO_(d){this.a=d},
dO1:function dO1(d,e){this.a=d
this.b=e},
dO6:function dO6(d,e,f){this.a=d
this.b=e
this.c=f},
dO5:function dO5(d){this.a=d},
dOS:function dOS(d,e){this.a=d
this.b=e},
dOT:function dOT(d){this.a=d},
dOo:function dOo(d,e,f){this.a=d
this.b=e
this.c=f},
dOl:function dOl(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dO4:function dO4(d){this.a=d},
dOw:function dOw(d){this.a=d},
dOv:function dOv(){},
dOa:function dOa(d){this.a=d},
dOP:function dOP(d,e){this.a=d
this.b=e},
dOQ:function dOQ(d,e){this.a=d
this.b=e},
dOR:function dOR(d,e){this.a=d
this.b=e},
dOm:function dOm(d,e){this.a=d
this.b=e},
dOn:function dOn(d,e){this.a=d
this.b=e},
dOI:function dOI(d,e){this.a=d
this.b=e},
dOE:function dOE(d){this.a=d},
dOD:function dOD(d){this.a=d},
dOF:function dOF(){},
dOG:function dOG(){},
dOH:function dOH(d,e){this.a=d
this.b=e},
dOJ:function dOJ(){},
dOK:function dOK(d){this.a=d},
dOC:function dOC(d,e){this.a=d
this.b=e},
dOx:function dOx(d){this.a=d},
dOy:function dOy(d){this.a=d},
dOz:function dOz(d){this.a=d},
dOA:function dOA(d){this.a=d},
dOB:function dOB(d){this.a=d},
dO7:function dO7(){},
dO8:function dO8(d){this.a=d},
dO9:function dO9(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
dO2:function dO2(d,e,f){this.a=d
this.b=e
this.c=f},
dOp:function dOp(d){this.a=d},
dOq:function dOq(d,e,f){this.a=d
this.b=e
this.c=f},
dOj:function dOj(d,e){this.a=d
this.b=e},
dOf:function dOf(d){this.a=d},
dOc:function dOc(d,e,f){this.a=d
this.b=e
this.c=f},
dOg:function dOg(d){this.a=d},
dOh:function dOh(d){this.a=d},
dOi:function dOi(){},
dOk:function dOk(d,e){this.a=d
this.b=e},
dOd:function dOd(d){this.a=d},
dOb:function dOb(d,e,f){this.a=d
this.b=e
this.c=f},
dOe:function dOe(){},
dOu:function dOu(d){this.a=d},
dOt:function dOt(d,e){this.a=d
this.b=e},
dOO:function dOO(d,e){this.a=d
this.b=e},
dOL:function dOL(d){this.a=d},
dOM:function dOM(d,e){this.a=d
this.b=e},
dON:function dON(d){this.a=d},
dP0:function dP0(d){this.a=d},
dOZ:function dOZ(d){this.a=d},
dP_:function dP_(d){this.a=d},
dP1:function dP1(){},
dP2:function dP2(d,e){this.a=d
this.b=e},
dOV:function dOV(d,e){this.a=d
this.b=e},
dOW:function dOW(d,e,f){this.a=d
this.b=e
this.c=f},
dOU:function dOU(d,e,f){this.a=d
this.b=e
this.c=f},
dOX:function dOX(d,e){this.a=d
this.b=e},
dOY:function dOY(d,e){this.a=d
this.b=e},
ayk:function ayk(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bcr:function bcr(d,e,f){this.c=d
this.d=e
this.a=f},
d16:function d16(){},
d17:function d17(){},
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
d1u:function d1u(){},
d1t:function d1t(d){this.a=d},
Yv:function Yv(d,e,f){this.c=d
this.d=e
this.a=f},
ayp:function ayp(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d1q:function d1q(d){this.a=d},
d1r:function d1r(d,e,f){this.a=d
this.b=e
this.c=f},
d1s:function d1s(d,e){this.a=d
this.b=e},
d1o:function d1o(d,e){this.a=d
this.b=e},
d1m:function d1m(d){this.a=d},
d1k:function d1k(d){this.a=d},
d1h:function d1h(d){this.a=d},
d1n:function d1n(d){this.a=d},
d1j:function d1j(d){this.a=d},
d1p:function d1p(d){this.a=d},
d1l:function d1l(d){this.a=d},
d1i:function d1i(d){this.a=d},
Ys:function Ys(d,e,f){this.c=d
this.d=e
this.a=f},
aym:function aym(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d13:function d13(d){this.a=d},
d12:function d12(d,e){this.a=d
this.b=e},
d14:function d14(d){this.a=d},
d11:function d11(d,e){this.a=d
this.b=e},
d15:function d15(d){this.a=d},
d10:function d10(d,e){this.a=d
this.b=e},
d0X:function d0X(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d0Z:function d0Z(d,e){this.a=d
this.b=e},
d1_:function d1_(d){this.a=d},
Pa:function Pa(d,e,f){this.c=d
this.d=e
this.a=f},
ays:function ays(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d1H:function d1H(d){this.a=d},
d1I:function d1I(d){this.a=d},
d1J:function d1J(d){this.a=d},
d1K:function d1K(d){this.a=d},
d1L:function d1L(d,e){this.a=d
this.b=e},
d1M:function d1M(d){this.a=d},
d1O:function d1O(d){this.a=d},
d1N:function d1N(d){this.a=d},
Yx:function Yx(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ayq:function ayq(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d1D:function d1D(d,e){this.a=d
this.b=e},
d1E:function d1E(d,e){this.a=d
this.b=e},
d1v:function d1v(d,e,f){this.a=d
this.b=e
this.c=f},
d1w:function d1w(d){this.a=d},
d1x:function d1x(){},
d1C:function d1C(){},
d1y:function d1y(d,e){this.a=d
this.b=e},
d1z:function d1z(d,e){this.a=d
this.b=e},
d1A:function d1A(d,e){this.a=d
this.b=e},
d1B:function d1B(d,e){this.a=d
this.b=e},
abD:function abD(d,e){this.c=d
this.a=e},
d0W:function d0W(d){this.a=d},
Yr:function Yr(d){this.a=d},
ayl:function ayl(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yy:function Yy(d,e){this.c=d
this.a=e},
ayr:function ayr(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d1G:function d1G(d){this.a=d},
d1F:function d1F(d){this.a=d},
bcs:function bcs(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hzZ(){var x,w=$.pm(),v=J.e3(10,y.N)
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
a6w(d){return B.hA_(d)},
hA_(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
Uo(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Uo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.N1(),$async$Uo)
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
return A.b(B.a6w(s),$async$Uo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Uo,w)},
Up(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Up=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Up)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bm(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c79(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hzZ()
t=A.U(u).k("K<1,a3<n,aC>>")
r=A.B(new A.K(u,new B.c7a(s),t),t.k("ak.E"))
x=6
return A.b(B.N1(),$async$Up)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6w(q),$async$Up)
case 7:x=8
return A.b(B.a6x(r,u,g,s),$async$Up)
case 8:v=new A.bo1(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Up,w)},
aox(d){var x=0,w=A.j(y.y),v,u,t
var $async$aox=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.N1(),$async$aox)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aox,w)},
c7b(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c7b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.N1(),$async$c7b)
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
return A.i($async$c7b,w)},
a6x(d,e,f,g){return B.hA0(d,e,f,g)},
hA0(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6x=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aov("media",r,new B.c78(s,e,g),f,q),$async$a6x)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Uo(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6x)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Uo(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6x)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Uo(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6x)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6x,w)},
Ed(d,e,f){return B.hA1(d,e,f)},
hA1(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
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
return A.b(B.aox(b3),$async$Ed)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ki,null,g),$async$Ed)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aox(b3),$async$Ed)
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
break}a7=a2.gU(a2)
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
l=new A.a9U(a8.a,b0,"media",a8.d,a9).Cm(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYL(k,n,o,s,b7),$async$Ed)
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
break}a7=g.gU(g)
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
c79:function c79(){},
c7a:function c7a(d){this.a=d},
c78:function c78(d,e,f){this.a=d
this.b=e
this.c=f},
aPA(){var x=0,w=A.j(y.H),v,u
var $async$aPA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hKY=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPA)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPA)
case 3:u=$.fWb
u=u==null?null:u.bD(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPA)
case 4:$.fWb=$.hTs=$.hTt=null
return A.h(null,w)}})
return A.i($async$aPA,w)},
fna(d){var x=0,w=A.j(y.H),v,u
var $async$fna=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5l){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fnb(new A.bW(u,y.aY))
x=3
return A.b(u.ig(0,C.hJ,new B.fnc()),$async$fna)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fna,w)},
hTq(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hzJ(x):x},
fWf(d){var x=0,w=A.j(y.T),v,u,t
var $async$fWf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,13))
if(C.a.a0(u,"WR")){v=B.aoz(u)
x=1
break}v=B.fR4(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWf,w)},
fWe(d){var x=0,w=A.j(y.T),v,u,t
var $async$fWe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b1(t,14))
if(C.a.a0(u,"WR")){v=B.aoA(u)
x=1
break}v=B.fR4(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWe,w)},
fEF(d){var x=0,w=A.j(y.T),v
var $async$fEF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoA(d),$async$fEF)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEF,w)},
bAd(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fWe(d),$async$bAd)
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
return A.i($async$bAd,w)},
fc5(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fc5=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Ui(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bm(d.anf(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fc5,w)},
G5(d,e,f){return B.hVO(d,e,f)},
hVO(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$G5=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fWf(a1),$async$G5)
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
return A.b($.hnc().aD4(D.dj5,null),$async$G5)
case 4:l=d.fWb=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axb(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.fnI(f,k,new B.fnJ(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a6P(0,new B.Wz(r,"offer")),$async$G5)
case 5:d=l
x=7
return A.b(l.ak6(0),$async$G5)
case 7:x=6
return A.b(d.a6H(0,a4),$async$G5)
case 6:x=8
return A.b(B.fna(l),$async$G5)
case 8:x=9
return A.b(l.ao_(),$async$G5)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hTq(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoB(m,h),$async$G5)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h6_(h)
case 11:v=new A.bnj(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G5,w)},
fnb:function fnb(d){this.a=d},
fnc:function fnc(){},
fnJ:function fnJ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnI:function fnI(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fnH:function fnH(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hXF(d){switch(d){case"new":return D.ebp
case"checking":return D.ebq
case"connected":return D.ebs
case"completed":return D.ebr
case"failed":return D.ebu
case"disconnected":return D.ebv
case"closed":return D.aL0
case"count":return D.ebt}return D.aL0},
hXG(d){switch(d){case"new":return D.aL1
case"gathering":return D.ebw
case"complete":return D.a5l}return D.aL1},
i6U(d){switch(d){case"stable":return D.ebx
case"have-local-offer":return D.eby
case"have-local-pranswer":return D.ebA
case"have-remote-offer":return D.ebz
case"have-remote-pranswer":return D.ebB
case"closed":return D.aL7}return D.aL7},
i59(d){switch(d){case"new":return D.aL4
case"connecting":return D.aL5
case"connected":return D.aL6
case"closed":return D.a5m
case"disconnected":return D.aL3
case"failed":return D.aL2}return D.a5m},
a8P:function a8P(d,e){this.a=d
this.b=e},
O1:function O1(d,e){this.a=d
this.b=e},
Wy:function Wy(d,e){this.a=d
this.b=e},
O0:function O0(d,e){this.a=d
this.b=e},
EG:function EG(d,e){this.a=d
this.b=e},
ci8:function ci8(){},
fSP(d){var x=new B.EF()
x.a=d
x.b=!0
return x},
EF:function EF(){this.b=this.a=$},
a8O:function a8O(){},
asP:function asP(){},
Wz:function Wz(d,e){this.a=d
this.b=e},
fR0(){var x=0,w=A.j(y.H)
var $async$fR0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fR0,w)},
fR3(d,e,f){var x=0,w=A.j(y.T),v
var $async$fR3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ms(D.mx))){v=null
x=1
break}v=B.fEV(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fR3,w)},
h6_(d){var x,w=F.aaM.a3E(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cT.gcw().aJ(x)}return C.cT.gcw().aJ(w)},
hzI(d){var x,w,v=C.cG.aJ(d)
try{x=C.c6.ca(0,F.aaL.bbl(v,!1))
return x}catch(w){x=C.c6.ca(0,v)
return x}},
fR4(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hzI(C.a.b1(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b1(t,w.length)
try{v=C.c6.ca(0,C.cG.aJ(x))
return v}catch(u){return x}}return null},
hzJ(d){var x,w,v,u,t,s=A.a([],y.s)
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
hzK(){var x,w=$.pm(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fX(v)},
aYR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYR)
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
return A.i($async$aYR,w)},
c6S(d,e){return B.hzL(d,e)},
hzL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c6S=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c6S)
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
return A.i($async$c6S,w)},
aYU(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYR(d),$async$aYU)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYU,w)},
aYT(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hzK()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c6S(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cT.gcw().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYT)
case 3:if(!h){v=null
x=1
break}v=new A.a_z("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYT,w)},
aYS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYR(o),$async$aYS)
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
return A.i($async$aYS,w)},
c6T(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c6T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBa("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c6T)
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
return A.i($async$c6T,w)},
aYV(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.I4(),$async$aYV)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYV,w)},
aos(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aos=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aos)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYV(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aos,w)},
aoq(d,e){var x=0,w=A.j(y.H)
var $async$aoq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aoq)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aoq)
case 2:return A.h(null,w)}})
return A.i($async$aoq,w)},
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
return A.b(B.aoq(f,u),$async$a6o)
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
return A.b(B.aoq(g,q),$async$a6p)
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
s=B.aYO(d,J.k(s==null?"":s))
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
c6U(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c6U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c6U)
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
return A.i($async$c6U,w)},
I5(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$I5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6U(d),$async$I5)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYV(t),$async$I5)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aor(d),$async$I5)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYO(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aor(d),$async$I5)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I5,w)},
aor(d){var x=0,w=A.j(y.H)
var $async$aor=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aor)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aor)
case 2:return A.h(null,w)}})
return A.i($async$aor,w)},
aYW(){var x,w=$.pm(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fX(v)},
a6r(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fR5(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c6X(d){return B.hzN(d)},
hzN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c6X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6r(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f3("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c6X)
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
return A.i($async$c6X,w)},
aou(d,e){return B.hzO(d,e)},
hzO(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aou=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6r(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hC("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$aou)
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
return A.i($async$aou,w)},
c6Z(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6Z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aou(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6Z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6Z,w)},
c6Y(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aou(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6Y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6Y,w)},
c7_(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c7_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6r(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aou(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7_,w)},
c70(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c70=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fR5(d)){v=null
x=1
break}x=3
return A.b(B.c6X(d),$async$c70)
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
return A.i($async$c70,w)},
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
aoy(d){return B.hA2(d)},
hA2(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoy)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hC("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$aoy)
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
return A.i($async$aoy,w)},
aoz(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aoz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoz)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6y(),$async$aoz)
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
return A.b(B.aoy(s),$async$aoz)
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
return A.i($async$aoz,w)},
aoB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoB)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6y(),$async$aoB)
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
return A.b(B.aoy(u),$async$aoB)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoB,w)},
aoA(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoA)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6y(),$async$aoA)
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
return A.i($async$aoA,w)},
anB(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$anB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pP)){v=null
x=1
break}x=3
return A.b(p.lW(e),$async$anB)
case 3:r=g
u=4
x=7
return A.b(r.hq(C.fX),$async$anB)
case 7:q=g
o=q
o=o==null?null:J.eS(J.vf(o))
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
return A.i($async$anB,w)},
i38(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fDd(d){return B.i3a(d)},
i3a(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fDd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i8("media").Kr(d,3600),$async$fDd)
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
return A.i($async$fDd,w)},
CG(d,e,f,g,h,i){var x=null
return B.i37(d,e,f,g,h,i)},
i37(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CG=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h62(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fR7(r),$async$CG)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fDd(o),$async$CG)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6s(r),$async$CG)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aO6)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lo(A.a([],g))
x=15
return A.b(d.eT(0,A.atE("GET",A.cw(n,0,null))).cM(0,C.EV),$async$CG)
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
break}k=d.gU(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYY(r,k),$async$CG)
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
case 10:i=B.Ui(r)
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
aPi(d){return B.i39(d)},
i39(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eY().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i8("media").W(0,d),$async$aPi)
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
return A.i($async$aPi,w)}},D,T,M,U,V,W,X,N,Y
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
B.ci9.prototype={
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
v=B.hEE(C.cT.gcw().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aD4,w)}}
B.b34.prototype={
bwH(d){var x=this,w=x.w
w.onclose=A.he(new B.ci4(x))
w.onopen=A.he(new B.ci5(x))
w.onmessage=A.he(new B.ci6(x))
w.onbufferedamountlow=A.he(new B.ci7(x))},
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
case 3:v=B.fSP(J.eS(d))
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
case 8:v=t.fSP(s.amP(f,0,null))
x=1
break
case 7:case 4:v=B.fSP(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agk,w)}}
B.b35.prototype={
bwI(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cia(x)))
w.addEventListener("icecandidate",A.he(new B.cib(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cic(x)))
w.onicegatheringstatechange=A.he(new B.cid(x))
w.addEventListener("signalingstatechange",A.he(new B.cie(x)))
if(!$.fZN())w.addEventListener("connectionstatechange",A.he(new B.cif(x)))
w.addEventListener("negotiationneeded",A.he(new B.cig(x)))
w.addEventListener("track",A.he(new B.cih(x)))},
ak6(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ak6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kh(A.cB(A.T(y.N,y.z)))),y.aQ),$async$ak6)
case 3:t=f
v=new B.Wz(t.sdp,t.type)
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
v=new B.Wz(s,t?null:r.type)
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
B.Yu.prototype={
R(){return new B.ayo()},
gdd(){return this.c}}
B.ayo.prototype={
a_(){this.a1()
this.ad2()},
ad2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYP(u.e,u.c),$async$ad2)
case 2:t=e
if(v.c!=null)v.m(new B.d1e(v,t))
return A.h(null,w)}})
return A.i($async$ad2,w)},
PK(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aon(t.e,t.c,!1),$async$PK)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.S(D.eRn)
x=1
break}x=4
return A.b(B.a6m(u.a.c,"individual"),$async$PK)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a5e(A.e8(new B.d1b(u),!1,null,y.H)),$async$PK)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
IQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.flk(o),$async$IQ)
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
break}if(!p){o.I(y.q).f.S(D.eOs)
x=1
break}x=5
return A.b(B.a6m(u.a.c,"member"),$async$IQ)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a5e(A.e8(new B.d1d(u),!1,null,y.H)),$async$IQ)
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
return A.b(B.aos(u.a.c),$async$xH)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.flP(o),$async$xH)
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
break}if(!p){o.I(y.q).f.S(D.eOp)
x=1
break}x=10
return A.b(B.aos(u.a.c),$async$xH)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a5e(A.e8(new B.d1c(u),!1,null,y.H)),$async$xH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xH,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j8:C.pw,q=B.fR2(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f92,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.frO,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bVt,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lA(new B.d1g(),t),C.N,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.ac6(C.eR,C.axI,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcbF(),t),C.ac],v))
p.push(new B.ac6(C.oE,C.a1j,"Team Member","Sign in with your organization access code + password",u.gccw(),t))
p.push(C.ac)
p.push(new B.ac6(C.akh,C.a2M,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcc1(),t))
return A.c8(t,r,A.bn(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahA,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.ac6.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eC(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p5,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bm,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAW.prototype={}
B.aE7.prototype={}
B.ji.prototype={
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
return new B.ji(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cG_(d){return this.baO(null,d)},
aCQ(d){return this.baO(d,null)}}
B.Uc.prototype={
R(){return new B.aCi(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aCi.prototype={
a_(){this.a1()
this.ad3()},
ad3(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ad3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bl(u.a.c),$async$ad3)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dNX(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
ad4(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ad4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fJ(new A.fC(s)),$async$ad4)
case 3:t=u.c
if(t!=null)t.I(y.q).f.S(D.eSh)
case 1:return A.h(v,w)}})
return A.i($async$ad4,w)},
Z0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Z0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.anB(s.d,4),$async$Z0)
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
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j8:C.pw,m=o?C.c:C.M,l=A.eG(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.v(A.a([t,C.N,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1K,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.aha,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mF,w,C.ku,new A.ev(A.p(p,A.pG(p,p,!1,B.hzE(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ku,A.A(A.a([A.E(A.ey(N.BF,C.Tx,q.gc4H(),p),1),C.av,A.E(A.dp(C.yq,C.a7z,q.gc4I(),A.bl(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ey(M.a0b,D.fnH,q.gcr5(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.M3,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.Ug.prototype={
R(){return new B.aCl(new A.ar(C.as,$.aw()),A.jM(!0,null,!0,!0,null,null,!1))}}
B.aCl.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.I3(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Z1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Z1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.I3(u.d.a.a)
if(t==null){u.m(new B.dP5(u))
x=1
break}u.m(new B.dP6(u))
s=u.a
r=s.c
x=3
return A.b(B.a6k(s.d,new B.dP7(u),t,r),$async$Z1)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dP8(u))
if(q){s=u.c
s.toString
A.a5(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Z1,w)},
a1c(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cl(r.a.d)){x=1
break}r.m(new B.dP9(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.ri(r.a.c,q),$async$a1c)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dPa(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ah7(p,m,l,j,k),$async$a1c)
case 8:o=e
if(r.c!=null)r.m(new B.dPb(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dPc(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dPd(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1c,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adt:D.abk,h=j?D.aeZ:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acz:C.aL
i=[i,e,h,g,f,j?C.f8:C.bW]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eG(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bJr,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fz,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1K,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u7(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhN()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LY,k,k,"",k,!0,new A.b4(4,A.m(18),new A.ay(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.ay(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dPe(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m_,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.L1(l.a.d,4)
m=A.B(new A.K(m,new B.dPf(x,new A.aFl(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.ml,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.N,e,C.N,q,C.d5,p,C.N,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eMZ)
else q.push(A.X(C.li,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.di(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bsK,k,k,C.ah),1)
u=l.f?k:l.gcr6()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(M.a0b,D.foH,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.Y),new A.ay(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc4J()
t=A.bl(C.aE,k,k,0,C.c,k,C.n7,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bn(!0,A.mA(new B.dPg(),A.v(A.a([e,new A.C(D.bse,A.v(A.a([s,C.N,i,C.ac,A.bH(l.f?C.rB:D.fn5,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.ct,C.XE,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhN.prototype={
ow(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bw,v.length),C.aN)}}
B.Ud.prototype={
R(){return new B.aCj()}}
B.aCj.prototype={
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
x=v.T$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a2()},
ad5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ad5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dNY(r))
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
break}if(!q){p.I(y.q).f.S(D.eRT)
s=[1]
x=4
break}p.I(y.q).f.S(D.eQw)
p=r.c
p.toString
A.a5(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dNZ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ad5,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j8:C.pw,q=A.eG(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.ffM,s,s,s,1,s,!0),p=A.p(s,D.bkQ,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gk,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bQi,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bQd,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bQt,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
v=t.r?s:t.gc4K()
u=A.bl(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mF,A.bH(t.r?C.rB:C.aQK,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abl.prototype={}
B.buj.prototype={
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
B.Yt.prototype={
R(){return new B.ayn(new A.ar(C.as,$.aw()),A.jM(!0,null,!0,!0,null,null,!1))}}
B.ayn.prototype={
a_(){this.a1()
$.aV.x1$.push(new B.d1a(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c4Q(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0w(d),u=x.a.c,t=u?C.i8:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j8:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.amZ,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.anM,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u7(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.btY()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F5,w,w,"",w,!0,new A.b4(4,A.m(16),new A.ay(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aXC),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d18(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m_,w,w,w,w)
f=f[1]
f=A.E(A.dT(C.nu,new B.d19(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.m(14),C.Y),new A.ay(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eH(w,C.K,new A.cS(Q.JX,A.c_(new A.C(C.xB,A.v(A.a([l,C.aQ,k,C.N,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.E(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e5o,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc4P(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NQ,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.M5,C.d0,w,w,w)}}
B.btY.prototype={
ow(d,e){return e.ak1(e.a.toUpperCase())}}
B.Ue.prototype={
R(){return new B.aCk(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aCk.prototype={
a_(){var x=this
x.a1()
x.tz()
x.w=A.dv(C.jc,new B.dP3(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Un()
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
case 4:u.m(new s.dOr(u,e))
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
break}u.m(new B.dOs(u,s))
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
break}new B.dO0(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.ms(D.mx))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ul(r,u.a.c),$async$N9)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.An(u.a.c),$async$N9)
case 12:u.m(new o.dO1(u,f))
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
break}u.m(new B.dO6(u,d,t))
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
break}r.m(new B.dOS(r,e))
u=3
x=6
return A.b(d.$0(),$async$tA)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dOT(r))
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
return A.b(B.c6Q(s,n,r,q,o,t),$async$HM)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hX("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fwH(o,u.a.c),$async$HM)
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
return A.b(B.aos(u.a.c),$async$a_8)
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
return A.b(A.a5(t,!1).c8(A.e8(new B.dOo(u,r,q),!1,null,y.H)),$async$a_8)
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
return A.b(B.aop(u.a.c),$async$a0f)
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
return A.b(u.tA(new B.dOl(u,d,null,e,f),"Uploading\u2026"),$async$ab4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ab4,w)},
bAM(){B.hkC(!1,new B.dO4(this))
return},
cpJ(){this.m(new B.dOw(this))},
axo(){var x=0,w=A.j(y.H),v=this
var $async$axo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAM()
return A.h(null,w)}})
return A.i($async$axo,w)},
ab0(){var x=0,w=A.j(y.H),v=this
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tA(new B.dOa(v),"Importing\u2026"),$async$ab0)
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
return A.b(A.a5(t,!1).c8(A.e8(new B.dOP(u,d),!1,null,y.H)),$async$RL)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ms(D.PM)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c8(A.e8(new B.dOQ(u,d),!1,null,y.H)),$async$RL)
case 8:x=1
break
case 7:x=u.bXX(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c8(A.e8(new B.dOR(u,d),!1,null,y.H)),$async$RL)
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
return C.d.t(D.cCM,C.a.b1(x,w+1).toLowerCase())},
aex(d){return this.cbJ(d)},
cbJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aex=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ms(D.mx)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c8(A.e8(new B.dOm(u,d),!1,null,y.H)),$async$aex)
case 5:x=1
break
case 4:u.m(new B.dOn(u,d))
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
return A.b(u.tA(new B.dOI(u,d),"Preparing QR\u2026"),$async$R7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$R7,w)},
ahc(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dOJ(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dOK(q),s),s.k("J.E"))
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
t=B.a0w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dOC(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ah5)
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
q=new A.K(t,new B.dO7(),A.U(t).k("K<1,n>")).fK(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dO8(q),s),s.k("J.E"))
if(r.length===0){u.hX("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p0(t,s.c,s.f),$async$X_)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tA(new B.dO9(u,r),"Preparing file\u2026"),$async$X_)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
afD(d){return this.cj8(d)},
cj8(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hlj(d,!1),$async$afD)
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
return A.b(B.fEi(u,v.a.c),$async$aeD)
case 2:return A.h(null,w)}})
return A.i($async$aeD,w)},
bAL(){B.hkC(!1,new B.dO3(this,null))
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
k=A.B(new A.a2(p,new B.dOp(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wY.c5().amA(!0,C.Zp,!1),$async$IP)
case 10:r=g
if(r==null||J.cl(r.a)){x=1
break}x=11
return A.b(s.tA(new B.dOq(l,s,r),"Preparing\u2026"),$async$IP)
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
return A.b(B.bCj(p,l,e,s.a.c),$async$IP)
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
case 3:t=B.hzD(d)
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
return A.b(u.tA(new B.dOj(u,d),"Receiving video\u2026"),$async$I0)
case 11:x=1
break
case 10:x=12
return A.b(u.tA(new B.dOk(u,d),"Receiving\u2026"),$async$I0)
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
return A.b(A.a5(t,!1).c8(A.e8(new B.dOu(u),!1,null,y.N)),$async$DY)
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
return A.b(v.tA(new B.dOt(v,d),"Saving\u2026"),$async$agr)
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
return A.b(B.c6T(t),$async$IB)
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
t=B.a0w(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dOO(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahi)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aeD()
break
case"import":u.ab0()
break}case 1:return A.h(v,w)}})
return A.i($async$ahi,w)},
c4N(d){var x=d.c
if(C.a.a0(x,"video/")||d.ms(D.mx))return C.pX
if(C.a.a0(x,"image/")||d.ms(D.PM))return C.tQ
if(C.a.t(x,"pdf"))return E.Nn
return D.akK},
B(d){var x,w,v=this,u=null,t=B.a0w(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Gc,u,u,u,new B.dOZ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bJX,u,u,u,v.e?u:v.gcc2(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcpI()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bEk:E.ala,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a08,u,u,u,v.e?u:v.gc4O(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o_,u,u,u,v.e?u:v.gb01(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bLD,u,u,u,v.e?u:new B.dP_(v),u,u,u,u,"More options",u))
q=A.eG(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lA(new B.dP0(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m_(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayk(C.jj,s,!0,t,w?u:v.gcsA(),u),1)
x.push(new A.C(D.br1,A.mA(new B.dP1(),A.A(A.a([s,C.av,A.E(new B.ayk(C.vy,"Export",!1,t,w?u:v.gbME(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.ct,C.iw,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bcr(t,v.e?u:v.gb01(),u)
else s=A.k6(!0,u,u,new B.dP2(v,t),s,u,D.bqU,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayk.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bl(C.aE,t,t,0,C.c,t,C.vg,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cj,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vg,t,new A.b7(s,C.Y),new A.ay(v,1,C.q,-1),t,t,t,t)
return A.ey(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bcr.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mA(new B.d16(),new A.C(E.Yu,A.v(A.a([A.mA(new B.d17(),A.p(x,A.X(C.xW,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ib,x,x,new A.bo(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.o_,D.fs6,this.d,A.bl(C.aE,x,x,x,C.c,x,C.Yp,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.ct,C.AK,x,x,new A.bo(0,1,w),s),x,x,x)}}
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
if(!o||i.ms(D.mx))p=D.d95
else{p=C.a.a0(p,"image/")||i.ms(D.PM)
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
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c9))
if(!(!o||i.ms(D.mx)))l.push(A.fOO(C.aE,!1,j,j,j,!1,j,j,new B.d1t(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.nY,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c9))
return A.mA(new B.d1u(),new A.C(C.e4,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.C(C.Y_,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.q,-1)),j,j,C.ag),j),C.ct,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Yv.prototype={
R(){return new B.ayp()},
gdd(){return this.c}}
B.ayp.prototype={
a_(){this.a1()
this.xy()},
q(){B.hzS(this.e)
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
n=B.hzV(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hzU(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d1q(s))
x=1
break}s.m(new B.d1r(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d1s(s,q))
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
break}t.I(y.q).f.S(D.eOZ)
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
if(u!=null&&u.length!==0)x=A.km(u,C.A,v,new B.d1o(w,t),C.fV,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d1p(w),C.fV,C.du,!0,v,!1,v,v)
else return C.bH
return A.ug(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0w(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BG,u,u,u,v.gb3R(),u,u,u,u,"Share / save",u))
r=A.eG(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DS
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dp(C.BG,D.fbk,v.gb3R(),A.bl(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bWW()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Ys.prototype={
R(){return new B.aym(A.ahX(),C.bx,C.bx)},
gdd(){return this.c}}
B.aym.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a4(w).k("ft<1>")).ia(new B.d13(v))
x.gcOS().ia(new B.d14(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a4(x).k("ft<1>"))}if(x==null)x=C.b2J
x.ia(new B.d15(v))
v.xy()},
xy(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xy=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ri(p.c,p.d),$async$xy)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d0X(s))
x=1
break}x=8
return A.b(s.d.BQ(0,new A.a2C(r,s.a.d.c)),$async$xy)
case 8:if(s.c==null){x=1
break}s.m(new B.d0Y(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d0Z(s,q))
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
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0w(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eG(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DS
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bFj,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NQ,C.n),o,88,o,o,o,o,o,88)
t=A.kX(C.aE,o,o,m,0,new B.d1_(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRS(p.w)+" / "+p.aRS(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bl(C.aE,o,o,o,o,D.eLv,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.y5:C.iV,o,o,o,o,o)
x=A.v(A.a([u,C.ku,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc4R(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tD,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pa.prototype={
R(){return new B.ays()},
gdd(){return this.c}}
B.ays.prototype={
a_(){this.a1()
this.P6()},
P6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fR3(o.c,o.d,new B.d1H(s)),$async$P6)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d1I(s))
x=1
break}s.e=r
q=O.hWD(r)
if(q==null){s.m(new B.d1J(s))
x=1
break}s.d=q
q.aN(0,s.gaZI())
x=8
return A.b(q.i9(0).cM(0,C.qS),$async$P6)
case 8:if(s.c==null){x=1
break}s.m(new B.d1K(s))
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
break}s.m(new B.d1L(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P6,w)},
cak(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d1M(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CC(0,x.gaZI())
w=x.d
if(w!=null)w.q()
B.i5q(x.e)
x.a2()},
ad8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ad8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYX(u.c,u.d),$async$ad8)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ad8,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0w(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eG(A.a([A.aH(t,t,t,t,C.oM,t,t,t,u.gc4L(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ig(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DS
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahq(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zS(s,t),A.aE(t,A.CT(A.p(t,A.X(q?I.y5:C.iV,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d1O(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yx.prototype={
R(){return new B.ayq(new A.cs(null,y.A))}}
B.ayq.prototype={
gcBe(){var x,w,v=this.a
if(v.e!==D.R5)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcAU(){var x,w,v=this.a
if(v.e!==D.yZ)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b1(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcBe()
if(x!=null){v.Q8(x)
v.e=A.dv(R.EY,new B.d1D(v,x))}w=v.gcAU()
if(w!=null){v.Q7(w)
v.f=A.dv(C.fT,new B.d1E(v,w))}},
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
return A.b(B.aox(d),$async$Q7)
case 3:t=f
x=4
return A.b(B.c7b(d),$async$Q7)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d1v(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
Q8(d){return this.chl(d)},
chl(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fEF(d),$async$Q8)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAd(t),$async$Q8)
case 4:if(u.c==null){x=1
break}u.m(new B.d1w(u))
u.c.I(y.q).f.S(D.aNI)
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
if(t!=null)t.I(y.q).f.S(D.eS2)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c8(A.e8(new B.d1x(),!1,null,y.N)),$async$a0Y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAd(s),$async$a0Y)
case 4:t=u.c
if(t!=null)t.I(y.q).f.S(D.aNI)
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
case 2:if(d.e!=null)d.I(y.q).f.S(D.ePr)
return A.h(null,w)}})
return A.i($async$ad6,w)},
a0T(d){return this.col(d)},
col(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.anB(s.d,4),$async$a0T)
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
if(w.e!==D.Ho)return null
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
case 3:if(d.e!=null)d.I(y.q).f.S(D.eR2)
case 1:return A.h(v,w)}})
return A.i($async$a8W,w)},
ad7(){var x=0,w=A.j(y.H),v=this,u
var $async$ad7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Un(),$async$ad7)
case 2:u=v.c
if(u!=null)A.a5(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$ad7,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0w(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Ho&&i!==D.R5&&i!==D.yZ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eG(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Ho||t===D.R5||t===D.yZ?l:A.aH(l,l,l,l,C.kR,l,l,l,m.gaXU(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.N,A.pG(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc0T(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Ho){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.N,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc4M(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hd(D.bPn,D.fko,new B.d1y(m,d),l)],p))}if(m.a.e===D.Ho&&m.gaV0()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hd(D.bLX,D.fh6,new B.d1z(m,d),l)],p))
if(m.a.e===D.yZ){x=(m.w?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.N,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DV:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l)],p))}if(m.a.e===D.R5){x=(m.r?C.dy:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.N,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DV:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mm,l,l,l),C.ac,A.dp(D.bHL,D.fno,m.gcoJ(),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oh(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.E(A.ey(N.BF,C.Tx,new B.d1A(m,d),l),1),C.av,A.E(A.dp(C.yq,C.a7z,new B.d1B(m,d),A.bl(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.N,new A.a7(1/0,l,A.bH(C.zw,m.gaXU(),A.bl(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d1C(),y.C)}}
B.abD.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pG(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bH(C.zx,new B.d0W(d),x)],u),x,x,C.mQ,v,x,x,x,x,D.fal,x)}}
B.Yr.prototype={
R(){return new B.ayl(A.yY(C.xj,C.nB,C.u1))}}
B.ayl.prototype={
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
return A.c8(A.eG(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fhA,x,x,x,1,x,!0),C.w,A.yX(this.d,C.bR,this.gaw_()),x,!1,!1,x,x)}}
B.Yy.prototype={
R(){return new B.ayr(A.yY(C.xj,C.nB,C.u1))},
gdd(){return this.c}}
B.ayr.prototype={
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
if(s!=null)s.I(y.q).f.S(D.eRX)
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
return A.b(B.hlj(p,!0),$async$a9K)
case 3:t=e
p=t==null
s=B.a6r(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.S(D.eOz)
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
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.am5,v,v,v,w.gbMc(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a0f,v,v,v,w.gceK(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eG(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.r0:P.N6,v,v,v,v,v),v,v,v,new B.d1G(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fod,v,v,v,1,v,!0)
u=A.yX(w.d,C.bR,w.gaw_())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eb5],s),v),v,!1,!1,v,v)}}
B.bcs.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ow
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ow:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.C(C.Yz,A.A(A.a([u,C.bf,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8P.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.O1.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wy.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.O0.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.EG.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.ci8.prototype={}
B.EF.prototype={}
B.a8O.prototype={}
B.asP.prototype={}
B.Wz.prototype={}
var z=a.updateTypes(["az<~>()","R(ji)","n(ji)","Ue(Y)","~()","Yu(Y)","H(H,ji)","Pa(Y)","~(lV)","cq(EF)","az<ji?>(@)","Uc(Y)","Ug(Y)","C(ji)","ji(@)","a3<n,@>(ji)","Yt(Y)","Ud(Y)","Yv(Y)","Ys(Y)","Yx(Y)","abD(Y)","ai<ji>()","Yy(Y)","abF(Y,H)","Yr(Y)","a3<n,aC>(ji)","cq(Wy)","cq(a8O)","az<cq>(EF)"])
B.ci4.prototype={
$1(d){var x=this.a
x.x=D.aL_
x.y.J(0,D.aL_)},
$S:70}
B.ci5.prototype={
$1(d){var x=this.a
x.x=D.aKZ
x.y.J(0,D.aKZ)},
$S:70}
B.ci6.prototype={
$1(d){var x=this.a
x.agk(A.aO1(d.data)).bz(new B.ci3(x),y.b)},
$S:70}
B.ci3.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ci7.prototype={
$1(d){},
$S:70}
B.cia.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hED(d.channel))},
$S:15}
B.cib.prototype={
$1(d){},
$S:15}
B.cic.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hXF(w.iceConnectionState)
x.cx=w
if($.fZN())switch(w.a){case 0:x.cy=D.aL4
break
case 1:x.cy=D.aL5
break
case 3:x.cy=D.aL6
break
case 5:x.cy=D.aL2
break
case 6:x.cy=D.aL3
break
case 7:x.cy=D.a5m
break
default:break}},
$S:155}
B.cid.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hXG(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:155}
B.cie.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i6U(w.signalingState)},
$S:155}
B.cif.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i59(w.connectionState)},
$S:155}
B.cig.prototype={
$1(d){},
$S:155}
B.cih.prototype={
$1(d){},
$S:15}
B.fhK.prototype={
$1(d){var x=y.F.a(new A.rD([],[]).py(d.target.result,!1)),w=C.xk.t(x.objectStoreNames,"blobs")
if(!w)C.xg.Kp(x,"blobs")},
$S:190}
B.fE6.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vL.fb(this.b)
$.eV.mn()
this.c.$1(d)},
$S:440}
B.fE8.prototype={
$1(d){return this.a.$1(B.hNz(this.b,this.c))},
$S:33}
B.fE7.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.fE5.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fEl.prototype={
$1(d){var x=this
return B.haV(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fEm.prototype={
$1(d){var x=this
return B.haV(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fjo.prototype={
$1(d){var x=this
return B.c6N(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d1e.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d1b.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6N(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d1d.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6N(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d1c.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6N(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d1g.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bGn,x,x,x,new B.d1f(d),x,x,x,x,x,x),A.E(A.Er(D.Pw,!0,x,C.a_l,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pw,x,g,C.ahV,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d1f.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.fln.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i8:C.c,r=A.m(28),q=A.p(v,D.bl8,C.f,v,v,D.aZh,v,v,v,v,D.ahL,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bKv,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.Fa,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.amk,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v),C.by,A.A(A.a([A.E(A.dT(C.de,new B.fll(d),v),1),C.av,A.E(A.bH(D.fg8,new B.flm(p,x,d),A.bl(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LL,v,v,v,v),v)},
$S:58}
B.fll.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.flm.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.S(D.ePG)
return}x=w.b.a.a
A.a5(w.c,!1).O(new B.aAW(v,x))},
$S:0}
B.flR.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i8:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bkZ,C.f,w,w,D.b_I,w,w,w,w,D.ahL,w,w,1/0),new A.C(C.Fa,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fW_(u,"Organization name",C.FB,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fW_(u,"Access code",C.nc,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fW_(u,"Member password",H.G7,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.by,A.bH(D.foi,new B.flQ(r,q,p,d),A.bl(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LL,w,w,w,w),w)},
$S:58}
B.flQ.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.S(D.ePL)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).O(new B.aE7(u,x,w))},
$S:0}
B.c6E.prototype={
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
return A.b(A.v7(p,null).cM(0,C.XD),$async$$1)
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
B.c6K.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6L.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c6M.prototype={
$1(d){return d.b},
$S:z+2}
B.c6G.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6H.prototype={
$1(d){return d.b},
$S:z+2}
B.c6F.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:13}
B.c6I.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c6J.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fEj.prototype={
$1(d){return new B.Uc(this.a,null)},
$S:z+11}
B.fEk.prototype={
$1(d){return new B.Ug(this.a,this.b,this.c,null)},
$S:z+12}
B.dNX.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dP5.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dP6.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dP7.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dP4(x,d))},
$S:2}
B.dP4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dP8.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dP9.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dPa.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dPb.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dPc.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dPd.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dPg.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.dPe.prototype={
$1(d){var x=this.a
return x.f?null:x.Z1()},
$S:2}
B.dPf.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ms(D.PM))s=C.tQ
else s=C.a.a0(s,"video/")||d.ms(D.mx)?C.pX:D.akK
x=this.b.a
w=y.p
return new A.C(C.kK,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoD(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dNY.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dNZ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c6O.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.c6P.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:91}
B.fEX.prototype={
$2(d,e){return e===this.a},
$S:284}
B.feX.prototype={
$1(d){return J.k(d)},
$S:17}
B.fjA.prototype={
$1(d){var x=this.b
B.hLy(C.Fo.ga5x(this.a)).bz(x.gcEi(x),y.H)},
$S:121}
B.fjB.prototype={
$1(d){return this.a.d5(0,null)},
$S:121}
B.fjC.prototype={
$0(){return null},
$S:11}
B.c72.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fjD.prototype={
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
return new B.ji(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fnz.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fi2.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fi3.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c77.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.fJ2.prototype={
$1(d){return new B.Yt(this.a,null)},
$S:z+16}
B.d1a.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fJ()},
$S:8}
B.d18.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).O(x)
return null},
$S:2}
B.d19.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dP3.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a04()},
$S:12}
B.dOr.prototype={
$0(){var x=J.bDo(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dOs.prototype={
$0(){var x=J.bDo(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dO0.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dO_(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dO_.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dO1.prototype={
$0(){var x=J.bDo(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dO6.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dO5(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCQ(this.c)}},
$S:0}
B.dO5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOS.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dOT.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dOo.prototype={
$1(d){return new B.Ud(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dOl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HM(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Uh(r.a.c,u.b,u.c),$async$$0)
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
B.dO4.prototype={
$1(d){this.a.ab4(d,"No files selected.","Added")},
$S:440}
B.dOw.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dOv(),A.U(x).k("K<1,n>")))},
$S:0}
B.dOv.prototype={
$1(d){return d.a},
$S:z+2}
B.dOa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wY.c5().cQP(C.Zp,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jn(o,0,null)}u=2
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
return A.b(B.aow(null,m,o.a.c),$async$$0)
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
B.dOP.prototype={
$1(d){return new B.Pa(this.a.a.c,this.b,null)},
$S:z+7}
B.dOQ.prototype={
$1(d){return new B.Yv(this.a.a.c,this.b,null)},
$S:z+18}
B.dOR.prototype={
$1(d){return new B.Ys(this.a.a.c,this.b,null)},
$S:z+19}
B.dOm.prototype={
$1(d){return new B.Pa(this.a.a.c,this.b,null)},
$S:z+7}
B.dOn.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dOI.prototype={
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
r=new A.K(new A.K(t,new B.dOE(p),r),new B.dOF(),r.k("K<ak.E,n>")).c_(0,new B.dOG())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c8(A.e8(new B.dOH(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p_(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Un(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOE.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dOD(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dOD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dOF.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dOG.prototype={
$1(d){return d.length!==0},
$S:3}
B.dOH.prototype={
$1(d){var x=this.a
return new B.Yx(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dOJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dOK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dOC.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kJ,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoD(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ms(D.mx)?C.tS:C.oJ
p=!x||p.ms(D.mx)?"Play video":"View"
return A.c_(A.bn(!0,new A.C(C.AW,A.v(A.a([q,o,t,C.aA,B.Yw(!1,u,!1,w,p,new B.dOx(d),v),B.Yw(!1,u,!1,C.jj,"Share via QR",new B.dOy(d),"Letters/numbers QR code"),B.Yw(!1,u,!1,D.a_r,"Send to their Code",new B.dOz(d),"Enter someone else's personal code"),B.Yw(!1,u,!1,C.hA,"Download / save",new B.dOA(d),v),C.an,B.Yw(!1,u,!0,C.e5,"Delete",new B.dOB(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.ay(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kA,v,v,C.n),C.bd)},
$S:715}
B.dOx.prototype={
$0(){A.a5(this.a,!1).O("view")
return null},
$S:0}
B.dOy.prototype={
$0(){A.a5(this.a,!1).O("qr")
return null},
$S:0}
B.dOz.prototype={
$0(){A.a5(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dOA.prototype={
$0(){A.a5(this.a,!1).O("save")
return null},
$S:0}
B.dOB.prototype={
$0(){A.a5(this.a,!1).O("delete")
return null},
$S:0}
B.dO7.prototype={
$1(d){return d.a},
$S:z+2}
B.dO8.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dO9.prototype={
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
B.dO3.prototype={
$1(d){var x=this.a
x.tA(new B.dO2(x,d,this.b),"Preparing\u2026")},
$S:440}
B.dO2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hX("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Uh(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cl(s)){t.hX("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bCj(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hX("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOp.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dOq.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fR6(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOj.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.G5(new B.dOf(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hX("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dOg(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dOh(s))
case 5:x=8
return A.b(r.b.ig(0,C.EV,new B.dOi()),$async$$0)
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
B.dOf.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOc(x,d,e))},
$S:130}
B.dOc.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOg.prototype={
$1(d){return new B.abD(this.a.a,null)},
$S:z+21}
B.dOh.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dOi.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dOk.prototype={
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
return A.b(B.aow(new B.dOd(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cl(r)){if(B.fR5(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hX(q)
x=1
break}x=10
return A.b(s.tz(),$async$$0)
case 10:o=J.cE(r)
p=o.eK(r,new B.dOe()).gM(0)
s.hX(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOd.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dOb(x,d,e))},
$S:130}
B.dOb.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dOe.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.dOu.prototype={
$1(d){return new B.Yy(this.a.a.c,null)},
$S:z+23}
B.dOt.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYX(u.a.c,v.b),$async$$0)
case 2:t.hX(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dOO.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bn(!0,new A.C(C.AW,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kJ,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yw(!0,w,!1,C.nc,"My Code",new B.dOL(d),"Your personal code & QR \u2014 others send docs to you"),B.Yw(!1,w,!1,D.a_r,"Send to their Code",new B.dOM(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yw(!1,w,!1,S.yf,"Import backup",new B.dON(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.ay(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kA,x,x,C.n),C.bd)},
$S:715}
B.dOL.prototype={
$0(){A.a5(this.a,!1).O("my_code")
return null},
$S:0}
B.dOM.prototype={
$0(){A.a5(this.b,!1).O(null)
this.a.bAL()},
$S:0}
B.dON.prototype={
$0(){A.a5(this.a,!1).O("import")
return null},
$S:0}
B.dP0.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Ic(D.Pw,x,C.a_l,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cQ(C.d.gL(D.Pw).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:692}
B.dOZ.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.dP_.prototype={
$0(){this.a.ahi()
return null},
$S:0}
B.dP1.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:102}
B.dP2.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abF(e,w,v,this.b,x.e,x.c4N(w),new B.dOV(x,w),new B.dOW(x,v,w),new B.dOX(x,w),new B.dOY(x,w),null)},
$S:z+24}
B.dOV.prototype={
$0(){this.a.aex(this.b)
return null},
$S:0}
B.dOW.prototype={
$0(){var x=this.a
return x.m(new B.dOU(x,this.b,this.c))},
$S:0}
B.dOU.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dOX.prototype={
$0(){this.a.Nw(this.b)
return null},
$S:0}
B.dOY.prototype={
$0(){this.a.ah5(this.b)
return null},
$S:0}
B.d16.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:102}
B.d17.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:140}
B.d1u.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.d1t.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.d1q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d1r.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d1s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d1o.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d1m(this.a),C.fV,C.du,!0,x,!1,x,x)
$.aV.x1$.push(new B.d1n(this.a))
return C.bH},
$S:141}
B.d1m.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d1k(this.a))
return C.bH},
$S:178}
B.d1k.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1h(x))},
$S:8}
B.d1h.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1n.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1j(x))},
$S:8}
B.d1j.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d1p.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d1l(this.a))
return C.bH},
$S:178}
B.d1l.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d1i(x))},
$S:8}
B.d1i.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d13.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d12(x,d))},
$S:1740}
B.d12.prototype={
$0(){return this.a.f=this.b===C.um},
$S:0}
B.d14.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d11(x,d))},
$S:8}
B.d11.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d15.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d10(x,d))},
$S:8}
B.d10.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d0X.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d0Y.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d0Z.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d1_.prototype={
$1(d){return this.a.d.Mw(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d1H.prototype={
$0(){var x=this.a.a
return B.ri(x.c,x.d)},
$S:1741}
B.d1I.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d1J.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d1K.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d1L.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d1M.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d1O.prototype={
$0(){var x=this.a
x.m(new B.d1N(x))},
$S:0}
B.d1N.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h2(0)
else x.pQ(0)},
$S:0}
B.d1D.prototype={
$1(d){return this.a.Q8(this.b)},
$S:12}
B.d1E.prototype={
$1(d){return this.a.Q7(this.b)},
$S:12}
B.d1v.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d1w.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d1x.prototype={
$1(d){return D.fNQ},
$S:z+25}
B.d1C.prototype={
$2(d,e){if(d)B.Un()},
$S:119}
B.d1y.prototype={
$0(){return this.a.a8Z(this.b)},
$S:0}
B.d1z.prototype={
$0(){return this.a.a8W(this.b)},
$S:0}
B.d1A.prototype={
$0(){return this.a.ad6(this.b)},
$S:0}
B.d1B.prototype={
$0(){return this.a.a0T(this.b)},
$S:0}
B.d0W.prototype={
$0(){A.a5(this.a,!1).O(null)
return null},
$S:0}
B.d1G.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pU(),$async$$0)
case 2:u.m(new B.d1F(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d1F.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c79.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ms(D.mx)},
$S:z+1}
B.c7a.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c78.prototype={
$2(d,e){return this.bi7(d,e)},
bi7(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Uo(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fnb.prototype={
$1(d){if(d===D.a5l&&(this.a.a.a&30)===0)this.a.fP(0)},
$S:z+27}
B.fnc.prototype={
$0(){},
$S:11}
B.fnJ.prototype={
bjH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fc5(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h62(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjH(d,e)},
$S:542}
B.fnI.prototype={
$1(d){var x=this
d.b=new B.fnH(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fnH.prototype={
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
return A.b(B.aYY(n,m),$async$$1)
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
return A.b(B.fc5(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.ayo.prototype,"gcbF","PK",0)
x(v,"gccw","IQ",0)
x(v,"gcc1","xH",0)
x(v=B.aCi.prototype,"gc4H","ad4",0)
x(v,"gc4I","Z0",0)
x(v,"gcr5","agN",0)
x(v=B.aCl.prototype,"gc4J","Z1",0)
x(v,"gcr6","a1c",0)
x(B.aCj.prototype,"gc4K","ad5",0)
x(B.ayn.prototype,"gc4P","c4Q",4)
x(v=B.aCk.prototype,"gcc2","a_8",0)
x(v,"gcpI","cpJ",4)
x(v,"gb01","axo",0)
x(v,"gcsA","ahc",0)
x(v,"gbME","X_",0)
x(v,"gc4O","DY",0)
x(B.ayp.prototype,"gb3R","a1b",0)
x(B.aym.prototype,"gc4R","Z2",0)
x(v=B.ays.prototype,"gaZI","cak",4)
x(v,"gc4L","ad8",0)
x(v=B.ayq.prototype,"gcoJ","a0Y",0)
x(v,"gaXU","ad7",0)
w(B.ayl.prototype,"gaw_","aw0",8)
x(v=B.ayr.prototype,"gceK","af_",0)
x(v,"gbMc","a9K",0)
w(v,"gaw_","aw0",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ci8,B.a8O,B.asP,B.aAW,B.aE7,B.ji,B.abl,B.buj,B.EF,B.Wz])
w(B.ci9,B.ci8)
w(B.b34,B.a8O)
x(A.hT,[B.ci4,B.ci5,B.ci6,B.ci3,B.ci7,B.cia,B.cib,B.cic,B.cid,B.cie,B.cif,B.cig,B.cih,B.fhK,B.fE6,B.fE8,B.fE7,B.fEl,B.fEm,B.fjo,B.d1b,B.d1d,B.d1c,B.d1g,B.fln,B.flR,B.c6E,B.c6L,B.c6M,B.c6H,B.c6F,B.c6I,B.c6J,B.fEj,B.fEk,B.dP7,B.dPg,B.dPe,B.dPf,B.feX,B.fjA,B.fjB,B.c72,B.fjD,B.fnz,B.fi2,B.fi3,B.c77,B.fJ2,B.d1a,B.d18,B.dP3,B.dO_,B.dO5,B.dOo,B.dO4,B.dOv,B.dOP,B.dOQ,B.dOR,B.dOm,B.dOE,B.dOD,B.dOF,B.dOG,B.dOH,B.dOJ,B.dOK,B.dOC,B.dO7,B.dO8,B.dO3,B.dOp,B.dOg,B.dOe,B.dOu,B.dOO,B.dP0,B.dP1,B.d16,B.d17,B.d1u,B.d1t,B.d1o,B.d1m,B.d1k,B.d1n,B.d1p,B.d1l,B.d13,B.d14,B.d15,B.d1_,B.d1D,B.d1E,B.d1x,B.c79,B.c7a,B.fnb,B.fnI,B.fnH])
w(B.b35,B.asP)
x(A.j5,[B.fE5,B.d1e,B.d1f,B.fll,B.flm,B.flQ,B.dNX,B.dP5,B.dP6,B.dP4,B.dP8,B.dP9,B.dPa,B.dPb,B.dPc,B.dPd,B.dNY,B.dNZ,B.fjC,B.d19,B.dOr,B.dOs,B.dO0,B.dO1,B.dO6,B.dOS,B.dOT,B.dOl,B.dOw,B.dOa,B.dOn,B.dOI,B.dOx,B.dOy,B.dOz,B.dOA,B.dOB,B.dO9,B.dO2,B.dOq,B.dOj,B.dOc,B.dOh,B.dOi,B.dOk,B.dOb,B.dOt,B.dOL,B.dOM,B.dON,B.dOZ,B.dP_,B.dOV,B.dOW,B.dOU,B.dOX,B.dOY,B.d1q,B.d1r,B.d1s,B.d1h,B.d1j,B.d1i,B.d12,B.d11,B.d10,B.d0X,B.d0Y,B.d0Z,B.d1H,B.d1I,B.d1J,B.d1K,B.d1L,B.d1M,B.d1O,B.d1N,B.d1v,B.d1w,B.d1y,B.d1z,B.d1A,B.d1B,B.d0W,B.d1G,B.d1F,B.fnc])
x(A.m6,[B.abE,B.N_,B.a8P,B.O1,B.Wy,B.O0,B.EG])
x(A.ag,[B.Yu,B.Uc,B.Ug,B.Ud,B.Yt,B.Ue,B.Yv,B.Ys,B.Pa,B.Yx,B.Yr,B.Yy])
x(A.ah,[B.ayo,B.aCi,B.aCl,B.aCj,B.ayn,B.aCk,B.ayp,B.aym,B.ays,B.ayq,B.ayl,B.ayr])
x(A.au,[B.ac6,B.ayk,B.bcr,B.abF,B.abD,B.bcs])
x(A.ki,[B.c6K,B.c6G,B.c6O,B.c6P,B.fEX,B.dOf,B.dOd,B.dP2,B.d1C,B.c78,B.fnJ])
x(A.iP,[B.bhN,B.btY])})()
A.jW(b.typeUniverse,JSON.parse('{"b34":{"a8O":[]},"b35":{"asP":[]},"Yu":{"ag":[],"r":[]},"ayo":{"ah":["Yu"]},"ac6":{"au":[],"r":[]},"Uc":{"ag":[],"r":[]},"Ug":{"ag":[],"r":[]},"aCi":{"ah":["Uc"]},"aCl":{"ah":["Ug"]},"bhN":{"iP":[]},"Ud":{"ag":[],"r":[]},"aCj":{"ah":["Ud"]},"Yt":{"ag":[],"r":[]},"Ue":{"ag":[],"r":[]},"abF":{"au":[],"r":[]},"Yv":{"ag":[],"r":[]},"Ys":{"ag":[],"r":[]},"Pa":{"ag":[],"r":[]},"Yx":{"ag":[],"r":[]},"abD":{"au":[],"r":[]},"Yr":{"ag":[],"r":[]},"Yy":{"ag":[],"r":[]},"ayn":{"ah":["Yt"]},"btY":{"iP":[]},"aCk":{"ah":["Ue"]},"ayk":{"au":[],"r":[]},"bcr":{"au":[],"r":[]},"ayp":{"ah":["Yv"]},"aym":{"ah":["Ys"]},"ays":{"ah":["Pa"]},"ayq":{"ah":["Yx"]},"ayl":{"ah":["Yr"]},"ayr":{"ah":["Yy"]},"bcs":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tZ"),k:x("Ls()"),m:x("bk<n,n>"),F:x("qV"),g:x("az<ji?>"),x:x("az<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a3<n,R>>"),t:x("O<a3<n,@>>"),r:x("O<ji>"),w:x("O<+file,name(lv,n)>"),u:x("O<cQ>"),s:x("O<n>"),E:x("O<iP>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<ji>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iz"),e:x("iaM"),af:x("DV"),U:x("ji"),b:x("cq"),C:x("aC"),aK:x("vX"),ab:x("EF"),br:x("asP"),v:x("Wz"),N:x("n"),X:x("bo<N>"),Q:x("lG"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a3<n,@>>"),c7:x("r"),ch:x("bW<ai<ji>>"),aW:x("bW<dD?>"),aY:x("bW<~>"),cx:x("abE"),b1:x("bg<ai<ji>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAW"),bG:x("aE7"),q:x("mX"),B:x("pg<EF>"),c6:x("pg<a8P>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<ji>?"),aL:x("ai<@>?"),h:x("a3<n,@>?"),l:x("ji?"),R:x("aC?"),c:x("Wz?"),d:x("+answerQr,transfer(n,az<ai<ji>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,N_,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("abl?"),bk:x("aAW?"),ag:x("aE7?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aXC=new A.ay(C.aE,2,C.q,-1)
D.bTB=new A.a8(C.a3,C.a7,C.x,C.a1j,null,null)
D.aZh=new A.o(null,null,null,C.m5,null,D.bTB,C.n)
D.b_I=new A.o(null,null,null,C.m5,null,E.Gk,C.n)
D.abk=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acz=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adt=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeZ=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fbd=new A.x("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fpe=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IQ,null,null,null,null,null,null,null,null,null)
D.d1i=x([D.fbd,C.an,D.fpe],y.p)
D.bkQ=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d1i,null)
D.ftr=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.ffo=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IQ,null,null,null,null,null,null,null,null,null)
D.dga=x([D.ftr,C.an,D.ffo],y.p)
D.bkZ=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dga,null)
D.fpN=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fja=new A.x("Enter the access code and password from your organization.",null,G.IQ,null,null,null,null,null,null,null,null,null)
D.de8=x([D.fpN,C.an,D.fja],y.p)
D.bl8=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.de8,null)
D.bqU=new A.Q(16,10,16,28)
D.br1=new A.Q(16,14,16,4)
D.bse=new A.Q(20,0,20,16)
D.bsK=new A.Q(20,8,20,16)
D.ahL=new A.Q(24,22,24,20)
D.a_r=new A.a0(63394,"MaterialIcons",!1)
D.akK=new A.a0(63515,"MaterialIcons",!1)
D.bEk=new A.a0(983813,"MaterialIcons",!1)
D.bBC=new A.a0(62867,"MaterialIcons",!1)
D.bFj=new A.ae(D.bBC,44,C.c,null,null,null)
D.bGn=new A.ae(C.pM,null,C.ad,null,null,null)
D.bHL=new A.ae(C.iW,18,null,null,null,null)
D.bJr=new A.ae(D.a_r,26,C.c,null,null,null)
D.bJX=new A.ae(C.By,null,null,null,null,null)
D.bKv=new A.ae(C.yh,null,null,null,null,null)
D.bLD=new A.ae(W.Nl,null,null,null,null,null)
D.bLX=new A.ae(C.hk,16,null,null,null,null)
D.bPn=new A.ae(C.r4,16,null,null,null,null)
D.bFA=new A.ae(C.nc,null,null,null,null,null)
D.bQd=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bL2=new A.ae(C.FB,null,null,null,null,null)
D.bQi=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bL2,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFV=new A.ae(H.G7,null,null,null,null,null)
D.bQt=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cDi=x([C.f8,C.aZ,C.aE],y.O)
D.bVt=new A.a8(C.ax,C.aC,C.x,D.cDi,null,null)
D.cCM=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pw=x([C.f8,C.aE],y.O)
D.PM=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mx=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d95=x([C.pp,C.aE],y.O)
D.e_K={iceServers:0}
D.aFD={urls:0}
D.djL=new A.bk(D.aFD,["stun:stun.l.google.com:19302"],y.m)
D.djK=new A.bk(D.aFD,["stun:stun1.l.google.com:19302"],y.m)
D.cSY=x([D.djL,D.djK],A.ax("O<a3<n,n>>"))
D.dj5=new A.bk(D.e_K,[D.cSY],A.ax("bk<n,@>"))
D.Ho=new B.N_(0,"lanDirect")
D.R4=new B.N_(1,"cloudStash")
D.duJ=new B.N_(2,"inlineInstant")
D.R5=new B.N_(3,"webrtcLink")
D.yZ=new B.N_(4,"videoCloud")
D.fpd=new A.x("Receive file",null,C.nt,null,null,null,null,null,null,null,null,null)
D.csU=x([E.amt,C.ab,D.fpd],y.p)
D.eHu=new A.cn(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.csU,null)
D.e5o=new A.C(C.ck,D.eHu,null)
D.f2q=new A.G(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1Y,null,null,null)
D.fbL=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f2q,null,C.L,null,null,null,null,null,null,null)
D.e4G=new A.C(C.B1,D.fbL,null)
D.b3X=new A.cr(C.A,null,null,D.e4G,null)
D.eb5=new A.cL(0,null,0,28,null,null,D.b3X,null)
D.ebo=new B.a8P(0,"RTCDataChannelConnecting")
D.aKZ=new B.a8P(1,"RTCDataChannelOpen")
D.aL_=new B.a8P(3,"RTCDataChannelClosed")
D.ebp=new B.EG(0,"RTCIceConnectionStateNew")
D.ebq=new B.EG(1,"RTCIceConnectionStateChecking")
D.ebr=new B.EG(2,"RTCIceConnectionStateCompleted")
D.ebs=new B.EG(3,"RTCIceConnectionStateConnected")
D.ebt=new B.EG(4,"RTCIceConnectionStateCount")
D.ebu=new B.EG(5,"RTCIceConnectionStateFailed")
D.ebv=new B.EG(6,"RTCIceConnectionStateDisconnected")
D.aL0=new B.EG(7,"RTCIceConnectionStateClosed")
D.aL1=new B.Wy(0,"RTCIceGatheringStateNew")
D.ebw=new B.Wy(1,"RTCIceGatheringStateGathering")
D.a5l=new B.Wy(2,"RTCIceGatheringStateComplete")
D.a5m=new B.O0(0,"RTCPeerConnectionStateClosed")
D.aL2=new B.O0(1,"RTCPeerConnectionStateFailed")
D.aL3=new B.O0(2,"RTCPeerConnectionStateDisconnected")
D.aL4=new B.O0(3,"RTCPeerConnectionStateNew")
D.aL5=new B.O0(4,"RTCPeerConnectionStateConnecting")
D.aL6=new B.O0(5,"RTCPeerConnectionStateConnected")
D.ebx=new B.O1(0,"RTCSignalingStateStable")
D.eby=new B.O1(1,"RTCSignalingStateHaveLocalOffer")
D.ebz=new B.O1(2,"RTCSignalingStateHaveRemoteOffer")
D.ebA=new B.O1(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ebB=new B.O1(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aL7=new B.O1(5,"RTCSignalingStateClosed")
D.eLv=new A.at(160,48)
D.b59=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eMZ=new A.a7(16,16,D.b59,null)
D.feO=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eOp=new A.b1(D.feO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fm7=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eOs=new A.b1(D.fm7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fut=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eOz=new A.b1(D.fut,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fep=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eOZ=new A.b1(D.fep,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fpX=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNI=new A.b1(D.fpX,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frl=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ePr=new A.b1(D.frl,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvR=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ePG=new A.b1(D.fvR,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftV=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.ePL=new A.b1(D.ftV,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fv4=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eQw=new A.b1(D.fv4,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fd6=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eR2=new A.b1(D.fd6,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnS=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eRn=new A.b1(D.fnS,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fgX=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eRT=new A.b1(D.fgX,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fvX=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eRX=new A.b1(D.fvX,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdm=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new A.b1(D.fdm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fc5=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eSh=new A.b1(D.fc5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f92=new A.x("NGMY DOC SHARE",null,C.aP_,null,null,null,null,null,null,null,null,null)
D.fal=new A.x("Show this to sender",null,C.kw,null,null,null,null,null,null,null,null,null)
D.fbk=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.ffM=new A.x("Organization settings",null,C.cy,null,null,null,null,null,null,null,null,null)
D.fg8=new A.x("Sign in",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fh6=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fhA=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fko=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fn5=new A.x("Send to their Doc Share",null,C.nr,null,null,null,null,null,null,null,null,null)
D.fno=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fnH=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fod=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.foi=new A.x("Create portal",null,C.cj,null,null,null,null,null,null,null,null,null)
D.foH=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.frO=new A.x("Share files & videos\nwith a scan.",null,C.aP0,null,null,null,null,null,null,null,null,null)
D.fs6=new A.x("Add files",null,C.cj,null,null,null,null,null,null,null,null,null)
D.fNQ=new B.Yr(null)
D.a8m=new B.abE(0,"docShare")
D.a8n=new B.abE(1,"gate")
D.U2=new B.abE(2,"gateNoIndividual")})();(function staticFields(){$.aMO=null
$.f9S=function(){var x=y.N
return A.T(x,x)}()
$.FS=A.T(y.N,y.D)
$.afI=A.T(y.N,A.ax("lv"))
$.Qp=A.T(y.N,y.D)
$.fap=A.T(y.N,A.ax("abl"))
$.c71=A.T(y.S,A.ax("buj"))
$.h61=1
$.hTt=null
$.hTs=null
$.hKY=null
$.fWb=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ibg","hnc",()=>new B.ci9())
x($,"i9b","fZN",()=>C.a.t(A.bu(A.bu(A.bu(A.Gs(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["VUFg/EEOuqU9g9IK7AIt6W6U+ow="]=a.current})($__dart_deferred_initializers__);