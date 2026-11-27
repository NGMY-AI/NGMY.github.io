((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,N,O,P,F,I,G,Q,R,E,H,S,T,U,V,K,W,L,B={cvu:function cvu(){},
icC(d){var x=null,w=new B.b8g(d,D.eOl,new A.q5(x,x,y.c6),new A.q5(x,x,y.B))
w.bEG(d)
return w},
b8g:function b8g(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cvp:function cvp(d){this.a=d},
cvq:function cvq(d){this.a=d},
cvr:function cvr(d){this.a=d},
cvo:function cvo(d){this.a=d},
cvs:function cvs(d){this.a=d},
icD(d,e){var x=y.N
x=new B.b8h(d,e,A.S(x,y.e),A.S(x,y.z))
x.bEH(d,e)
return x},
b8h:function b8h(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cvv:function cvv(d){this.a=d},
cvw:function cvw(d){this.a=d},
cvx:function cvx(d){this.a=d},
cvy:function cvy(d){this.a=d},
cvz:function cvz(d){this.a=d},
cvA:function cvA(d){this.a=d},
cvB:function cvB(d){this.a=d},
cvC:function cvC(d){this.a=d},
hpN(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bd("IndexedDB not available"))
return C.xF.Hn(x,"ngmy_doc_share_v1",new B.fGF(),1)},
ijt(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eB(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w_(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cK.aK(d)
return x}catch(w){return v}return v},
ST(d,e){return B.izk(d,e)},
izk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ST=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRm
x=7
return A.b(o==null?$.aRm=B.hpN():o,$async$ST)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mA(s,"blobs","readwrite")
C.iV.mm(J.mz(q,"blobs"),r,d)
x=8
return A.b(J.oT(q),$async$ST)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share idb put] "+A.v(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ST,w)},
SS(d){return B.izj(d)},
izj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$SS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRm
x=7
return A.b(o==null?$.aRm=B.hpN():o,$async$SS)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iV.y3(J.mz(r,"blobs"),d),$async$SS)
case 8:q=f
x=9
return A.b(J.oT(r),$async$SS)
case 9:o=B.ijt(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SS,w)},
ajg(d){return B.izi(d)},
izi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRm
x=7
return A.b(p==null?$.aRm=B.hpN():p,$async$ajg)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iV.GT(J.mz(r,"blobs"),d)
x=8
return A.b(J.oT(r),$async$ajg)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajg,w)},
fGF:function fGF(){},
im0(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btl(w,v))}return u},
hS0(d,e){var x,w={},v=A.b_a("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h6r(w,v,e)
C.xH.x4(v,"change",new B.h6t(w,v,!1))
C.xH.x4(v,"cancel",new B.h6s(w))
$.eX.mN()
v.click()
A.bO(C.and,new B.h6q(w),y.H)},
h6r:function h6r(d,e,f){this.a=d
this.b=e
this.c=f},
h6t:function h6t(d,e,f){this.a=d
this.b=e
this.c=f},
h6s:function h6s(d){this.a=d},
h6q:function h6q(d){this.a=d},
E2(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$E2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd2()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVl()?3:4
break
case 3:x=5
return A.b(B.hMt(e,d,s,!0,!1,f,g,h,!1,i),$async$E2)
case 5:x=1
break
case 4:x=6
return A.b(B.Su(d,s,f,g,h,i),$async$E2)
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
return A.b(B.JG(s,d),$async$E2)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fBX(s,d),$async$E2)
case 14:x=12
return A.b(r.hMt(q,p,o,n,m,l,k,j,a1,i),$async$E2)
case 12:x=8
break
case 10:x=15
return A.b(A.a8(e,!1).ca(A.e7(new B.h6G(s,i,d,f,g,h),!1,null,y.H)),$async$E2)
case 15:x=8
break
case 11:x=16
return A.b(A.a8(e,!1).ca(A.e7(new B.h6H(s,i,d,f,g,h),!1,null,y.H)),$async$E2)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$E2,w)},
Su(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Su=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2W(e),$async$Su)
case 3:u=k
x=4
return A.b(B.as4(d,e,!1),$async$Su)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JG(e,d),$async$Su)
case 7:if(k){v=D.aeD
x=1
break}x=8
return A.b(B.WQ(e),$async$Su)
case 8:v=t?D.Y7:D.aeE
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b2U(d,e)){v=D.aeD
x=1
break}x=11
return A.b(B.WQ(e),$async$Su)
case 11:v=t?D.Y7:D.aeE
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hks(d,e)){v=D.aeD
x=1
break}x=14
return A.b(B.WQ(e),$async$Su)
case 14:v=D.Y7
x=1
break
case 13:v=t?D.Y7:D.aeE
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Su,w)},
fBX(d,e){var x=0,w=A.j(y.y),v
var $async$fBX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b2U(e,d)){v=!1
x=1
break}x=3
return A.b(B.b2W(d),$async$fBX)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBX,w)},
hMt(d,e,f,g,h,i,j,k,l,m){return A.a8(d,!1).ca(A.e7(new B.fJl(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hGX(d,e,f,g,h,i,j){return new B.a0d(e,j,d,g,h,i,f,null)},
fLh(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fLh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLk(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fLh)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLh,w)},
fLM(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fLM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bV(C.L,null,new B.fLO(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fLM)
case 3:q=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
r.V$=u
r.W$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fLM,w)},
hq_(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fZ_(d,e){var x=0,w=A.j(y.H),v
var $async$fZ_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.WQ(e),$async$fZ_)
case 3:if(d.e==null){x=1
break}A.a8(d,!1).e4()
case 1:return A.h(v,w)}})
return A.i($async$fZ_,w)},
h6G:function h6G(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h6H:function h6H(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aes:function aes(d,e){this.a=d
this.b=e},
fJl:function fJl(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0d:function a0d(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCv:function aCv(){this.c=this.a=this.d=null},
dgJ:function dgJ(d,e){this.a=d
this.b=e},
dgG:function dgG(d){this.a=d},
dgI:function dgI(d){this.a=d},
dgH:function dgH(d){this.a=d},
dgL:function dgL(){},
dgK:function dgK(d){this.a=d},
aeW:function aeW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFa:function aFa(d,e){this.a=d
this.b=e},
aIr:function aIr(d,e,f){this.a=d
this.b=e
this.c=f},
fLk:function fLk(d,e,f){this.a=d
this.b=e
this.c=f},
fLi:function fLi(d){this.a=d},
fLj:function fLj(d,e,f){this.a=d
this.b=e
this.c=f},
fLO:function fLO(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fLN:function fLN(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cgP(d,e,f,g,h){return B.i7h(d,e,f,g,h)},
i7h(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cgP=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hc(r.dR(d,new B.cgQ(s,e,h,g,f,q),y.g),y.l),$async$cgP)
case 3:r=p.aQ(j)
case 4:if(!r.C()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cgP,w)},
b2R(d,e,f,g,h){return B.i7i(d,e,f,g,h)},
i7i(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b2R=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axB("GET",d)
o=A.bJi()
if(o==null)o=new A.Ii(A.a([],y.W))
x=7
return A.b(o.fc(0,s).d7(0,C.HD),$async$b2R)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Dq(),$async$b2R)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cx(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share pull url web] "+f+": "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2R,w)},
b2Q(d){return B.i7f(d)},
i7f(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b2Q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wb(d,null).d7(0,C.oU),$async$b2Q)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.V.aP(0,A.m3(A.m0(p.e)).cF(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share lan manifest web] "+A.v(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2Q,w)},
cgO(d){return B.i7g(d)},
i7g(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cgO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wb(d,null).d7(0,C.re),$async$cgO)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m3(A.m0(q.e)).cF(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
$.an.$1("[doc share lan text web] "+A.v(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cgO,w)},
cgQ:function cgQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jU:function jU(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JE(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
i7n(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JE(C.a.aV(t,u.length))}return null},
i7o(d){var x=B.JE(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
i7j(){var x,w=$.oP(),v=J.e6(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hl(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a8Y(d){return B.i7k(d)},
i7k(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a8Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.fb(d,null,!1,C.bN),$async$a8Y)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share my code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8Y,w)},
a8Z(d,e){return B.i7l(d,e)},
i7l(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a8Z=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i0(d,e,!1,!1,C.cY,null),$async$a8Z)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share my code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8Z,w)},
Cw(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Cw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$Cw)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JE(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9_(r),$async$Cw)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a8Y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Cw)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JE(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Cw)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.i7j()
x=14
return A.b(B.a9_(m),$async$Cw)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a8Z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 15:k=f
x=16
return A.b(B.a8Z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Cw)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Cw)
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
return A.i($async$Cw,w)},
a9_(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JE(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a8Y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9_)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
a90(d,e,f,g){return B.i7p(d,e,f,g)},
i7p(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a90=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JE(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9_(r),$async$a90)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cD(d,0,new B.cgW())>1048576||g.aR(d,new B.cgX())){v=B.FF(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gG(q.split("@"))+"\u2026")
x=4
return A.b(B.a9b("myCode",d,a0),$async$a90)
case 4:u=a3
try{t=C.V.aP(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cx(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FF(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b2Z(u,g.gJ(d),a0),$async$a90)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oP().aw(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dR(d,new B.cgY(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b2S(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a90)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a90,w)},
FF(d,e,f,g,h){return B.i7m(d,e,f,g,h)},
i7m(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FF=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FF)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cJ(a6)
k=l.cD(a6,0,new B.cgS())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oP().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cV.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JI(a9,q)
a0=new A.Lx(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$FF)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ad(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aZ(J.k(o),5,"0")
a1=$.f5().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nR(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acE(a1.a,a4,"media",a1.d,a2).xZ(m,n,new A.EV(!0,q.c)),$async$FF)
case 12:J.c8(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$FF)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aU6(r),$async$FF)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dR(a6,new B.cgT(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b2S(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FF)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aU6(r),$async$FF)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FF,w)},
b2S(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b2S=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a8Y(t),$async$b2S)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cgR(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a8Z(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2S,w)},
OM(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OM=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a8Y("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OM)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cx(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aQ(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a_(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b2T(k,a0),$async$OM)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b2Y(h),$async$OM)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.WX(g,a0),$async$OM)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.cgU(),q),n)
d=A.B(new A.X(r,new B.cgV(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cU(d,0,A.dw(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a8Z("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OM)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OM,w)},
b2T(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b2T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cx(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aQ(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gP(u)
if(!r.b(p)){x=3
break}o=J.a1(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iDz(k,j)
C.d.u(s,i)
x=5
return A.b(B.E0(l,m,"Received via My Code",t,e,i),$async$b2T)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aU6(s),$async$b2T)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2T,w)},
cgW:function cgW(){},
cgX:function cgX(){},
cgY:function cgY(){},
cgS:function cgS(){},
cgT:function cgT(){},
cgR:function cgR(){},
cgU:function cgU(){},
cgV:function cgV(){},
h6D(d,e){var x=0,w=A.j(y.H)
var $async$h6D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a8(d,!1).ca(A.e7(new B.h6E(e),!1,null,y.H)),$async$h6D)
case 2:return A.h(null,w)}})
return A.i($async$h6D,w)},
bIM(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bIM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cx(e)){v=!1
x=1
break}x=3
return A.b(A.a8(d,!1).ca(A.e7(new B.h6F(g,e,f),!1,null,y.y)),$async$bIM)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bIM,w)},
h6E:function h6E(d){this.a=d},
h6F:function h6F(d,e,f){this.a=d
this.b=e
this.c=f},
WN:function WN(d,e){this.c=d
this.a=e},
aGz:function aGz(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e3n:function e3n(d,e){this.a=d
this.b=e},
WR:function WR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGC:function aGC(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e4w:function e4w(d){this.a=d},
e4x:function e4x(d){this.a=d},
e4y:function e4y(d){this.a=d},
e4v:function e4v(d,e){this.a=d
this.b=e},
e4z:function e4z(d){this.a=d},
e4A:function e4A(d){this.a=d},
e4B:function e4B(d,e){this.a=d
this.b=e},
e4C:function e4C(d,e){this.a=d
this.b=e},
e4D:function e4D(d,e){this.a=d
this.b=e},
e4E:function e4E(d){this.a=d},
e4H:function e4H(){},
e4F:function e4F(d){this.a=d},
e4G:function e4G(d,e){this.a=d
this.b=e},
bno:function bno(){},
WO:function WO(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aGA:function aGA(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e3o:function e3o(d){this.a=d},
e3p:function e3p(d){this.a=d},
hkt(d){var x=d.i9
if(x>=0)return C.o.M(x)
return 10},
i7r(d){var x=d.l4
if(x>=0)return x
return 4.99},
i7q(d){var x=d.lN,w=y.N
w=x.iZ(x,new B.ch_(),w,w)
return w},
hBU(d){var x=d.kG,w=y.N
w=x.iZ(x,new B.ch0(),w,w)
return w},
b2W(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b2W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b2W)
case 7:s=f
r=A.v(p)
r=A.aV(J.t(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b2W,w)},
a92(d,e){var x=0,w=A.j(y.H),v,u
var $async$a92=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a92)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a92)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a92,w)},
WQ(d){var x=0,w=A.j(y.H),v,u
var $async$WQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$WQ)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$WQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$WQ,w)},
hks(d,e){var x,w,v
if(B.i7r(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.i7q(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.be(w)
return v!=null&&v.c9(new A.W(Date.now(),0,!1))},
b2U(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hBU(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.be(x)
return w!=null&&w.c9(new A.W(Date.now(),0,!1))},
hBV(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.hBU(d),x,x)
x=w.h(0,t)
v=A.be(x==null?"":x)
u=v!=null&&v.c9(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bL(A.du(f,0,0,0,0,0).a).aa().ag())
d.kG=w},
as5(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$as5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$as5)
case 7:s=f
r=A.v(p)
r=A.ev(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$as5,w)},
as6(d){var x=0,w=A.j(y.H),v,u,t
var $async$as6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.as5(d),$async$as6)
case 3:u=f
x=5
return A.b(A.aB(),$async$as6)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$as6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$as6,w)},
as4(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$as4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hkt(d)
if(u<=0){v=!1
x=1
break}if(B.hks(d,e)){v=!1
x=1
break}x=3
return A.b(B.as5(e),$async$as4)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as4,w)},
b2V(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b2V=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JG(e,d),$async$b2V)
case 3:if(g){v=-1
x=1
break}u=B.hkt(d)
if(u<=0){v=-1
x=1
break}if(B.hks(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.as5(e),$async$b2V)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2V,w)},
ch2(d,e,f){var x=0,w=A.j(y.y),v
var $async$ch2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JG(e,d),$async$ch2)
case 3:if(h){v=!1
x=1
break}v=B.as4(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch2,w)},
ch1(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ch1=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
x=3
return A.b(B.ch2(d,u,i.gVl()),$async$ch1)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ch1,w)},
a91(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a91=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd2()
if(i.gVl()){v=!0
x=1
break}if(B.b2U(d,u)){v=!0
x=1
break}x=5
return A.b(A.lW(u,C.Vp),$async$a91)
case 5:x=k?3:4
break
case 3:B.hBV(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a91)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lw(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Vp,"Doc Share for Organizations"),$async$a91)
case 7:if(!k){v=!1
x=1
break}B.hBV(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a91)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a91,w)},
ch_:function ch_(){},
ch0:function ch0(){},
h7D(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$h7D=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$h7D)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fya.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i2([r],e.c))
s.toString
$.fya.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7D,w)},
iFN(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fya.br($.fya,new B.h7F(d))},
h7F:function h7F(d){this.a=d},
fzQ(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fzQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i2([d],f))
s.toString
u=A.nj(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jD,null,y.H),$async$fzQ)
case 3:C.C2.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mN()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzQ,w)},
aic(d,e,f){var x=0,w=A.j(y.H),v
var $async$aic=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fyR.n(0,d,new B.ae9(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$aic)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.V.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$aic)
case 2:return A.h(null,w)}})
return A.i($async$aic,w)},
ai6(d){return B.inV(d)},
inV(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ai6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fyR.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$ai6)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.V.aP(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cx(s)){v=null
x=1
break}o=J.b8(s,new B.fDD(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ae9(r)
$.fyR.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ai6,w)},
Sk(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.Hs.n(0,d,u)
x=3
return A.b(B.ST(d,u),$async$Sk)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sk,w)},
aRH(d){return B.inT(d)},
inT(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aRH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Hs.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.SS(d),$async$aRH)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.Hs.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aRH)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cK.aK(r)
x=!J.cx(q)?9:10
break
case 9:B.Sk(d,q)
x=11
return A.b(J.fO(s,d),$async$aRH)
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
return A.i($async$aRH,w)},
ijV(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cd(J.eB(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cd(A.w_(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cd(d)),y.K)
return A.f9(null,y.K)},
a3L(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a3L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bn($.bG,y.cf)
t=new A.cb(u,y.aW)
s=y.aK
A.fI(r,"loadend",new B.fJx(r,t),!1,s)
A.fI(r,"error",new B.fJy(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ie(0,C.Pb,new B.fJz())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a3L,w)},
aS1(d,e,f){return B.iqh(d,e,f)},
iqh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aS1=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a3L(i),$async$aS1)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ad(j)
x=11
return A.b(B.ST(o,p),$async$aS1)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.c8(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aic(k,j,s),$async$aS1)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aS1,w)},
aS0(d,e,f){return B.iqg(d,e,f)},
iqg(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aS0=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aS1(d,e,f),$async$aS0)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a3L(f),$async$aS0)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Hs.n(0,s,r)
$.SE.n(0,s,r)
x=11
return A.b(B.Sk(s,r),$async$aS0)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aS0,w)},
Cx(d,e,f,g,h,i){return B.i7A(d,e,f,g,h,i)},
i7A(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cx=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cV.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jU(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b31(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sk(s,d),$async$Cx)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$Cx)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$Cx)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.an.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.Br(e),$async$Cx)
case 12:j=a2
J.c8(j,m)
x=13
return A.b(B.HD(e,j),$async$Cx)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cx,w)},
WS(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$WS=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Br(d),$async$WS)
case 3:t=a1
s=e.length,r=J.cJ(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cV.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hBX(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jU(m,n,k,l,j,"From folder",null,B.b31(),null)
$.aiB.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a3L(o),$async$WS)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.Hs.n(0,h,g)
$.SE.n(0,h,g)
B.Sk(h,g)
x=9
break
case 10:x=11
return A.b(B.aS0(d,m,o),$async$WS)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HD(d,t),$async$WS)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WS,w)},
hkx(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hkx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hBX(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JH(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.Cx(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hkx,w)},
JH(d,e,f,g,h,i){return B.i7z(d,e,f,g,h,i)},
i7z(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JH=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cV.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lx(A.dw(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$JH)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.cx(m)){x=6
break}J.fV(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.Tu(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kz(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.ST(k,l),$async$JH)
case 11:J.c8(q,k);++p
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
return A.b(j.a1(0),$async$JH)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.ST(k,new Uint8Array(A.cd(n))),$async$JH)
case 15:J.c8(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aic(r,q,g),$async$JH)
case 16:f=new B.jU(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b31(),null)
x=17
return A.b(B.Br(d),$async$JH)
case 17:e=a6
J.c8(e,f)
x=18
return A.b(B.HD(d,e),$async$JH)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JH,w)},
WU(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$WU=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiB.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a3L(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ai6(s),$async$WU)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.SS(u[o]),$async$WU)
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
v=A.w_(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SE.h(0,s)
if(i==null)i=$.Hs.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.t8(d,e),$async$WU)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SE.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w_(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WU,w)},
hBX(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
t8(d,e){return B.i7B(d,e)},
i7B(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$t8=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SE.h(0,f)
if(e==null)e=$.Hs.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiB.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a3L(s),$async$t8)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.Hs.n(0,f,r)
$.SE.n(0,f,r)
B.Sk(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ai6(f),$async$t8)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ae5(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.SS(g[l]),$async$t8)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.I(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a8D()
if(!C.aI.gar(r)){$.Hs.n(0,f,r)
$.SE.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aRH(f),$async$t8)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SE.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.WU(a0,a1,0,g),$async$t8)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.Hs.n(0,f,h)
$.SE.n(0,f,h)
B.Sk(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t8,w)},
i7E(d){var x,w,v=$.aiB.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
i7F(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i2([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
i7C(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asc(d,e,f,g,h){return B.i7D(d,e,f,g,h)},
i7D(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asc=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiB.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a3L(s),$async$asc)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.t8(g,e),$async$asc)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f5().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iH(d).xZ(h,r,new A.EV(!0,e.c)),$async$asc)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share upload web] "+e.b+": "+A.v(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asc,w)},
hBZ(d,e,f,g,h){var x,w,v,u,t=$.hBY
$.hBY=t+1
x=Date.now()
w=""+1000*x+"_"+C.cV.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chd.n(0,t,new B.bAr(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ae5(u)))
return t},
hky(d){var x=0,w=A.j(y.H)
var $async$hky=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hky,w)},
JI(d,e){var $async$JI=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiB.h(0,h)
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
return A.qM(B.WU(d,e,p,o<q?o:q),$async$JI,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qM(A.GY(n),$async$JI,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qM(B.ai6("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JI,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qM(B.SS(h[l]),$async$JI,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qM(A.GY(k),$async$JI,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qM(B.t8(d,e),$async$JI,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qM(A.GY(A.w_(j,p,o<i?o:i)),$async$JI,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qM(null,0,w)
case 2:return A.qM(t.at(-1),1,w)}})
var x=0,w=A.hL8($async$JI,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hNd(w)},
b33(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b33=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chd.h(0,d)
if(t==null||J.cx(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a6V(),$async$b33)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b33,w)},
WT(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$WT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chd.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a6V(),$async$WT)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aic(r.c,u,r.z),$async$WT)
case 4:t=new B.jU(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b31(),null)
u=r.a
x=5
return A.b(B.Br(u),$async$WT)
case 5:s=f
J.c8(s,t)
x=6
return A.b(B.HD(u,s),$async$WT)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WT,w)},
a98(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a98=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chd.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajg(u[s]),$async$a98)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a6(0)
case 1:return A.h(v,w)}})
return A.i($async$a98,w)},
chf(d,e,f){var x=0,w=A.j(y.H)
var $async$chf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFA(d,e,f),$async$chf)
case 2:return A.h(null,w)}})
return A.i($async$chf,w)},
chg(d,e,f){var x=0,w=A.j(y.H)
var $async$chg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bFB(d,e,f),$async$chg)
case 2:return A.h(null,w)}})
return A.i($async$chg,w)},
FG(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Br(d),$async$FG)
case 2:p=g
J.nh(p,new B.che(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Hs.X(0,v)
$.aiB.X(0,e)
x=3
return A.b(B.ai6(v),$async$FG)
case 3:u=g
$.fyR.X(0,v)
x=4
return A.b(A.aB(),$async$FG)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FG)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FG)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajg(s[q]),$async$FG)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajg(v),$async$FG)
case 13:x=14
return A.b(B.HD(d,p),$async$FG)
case 14:return A.h(null,w)}})
return A.i($async$FG,w)},
b32(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b32=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.t8(d,e),$async$b32)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fzQ(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b32,w)},
Br(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Br=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$Br)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.V.aP(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fJA(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Br,w)},
HD(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HD)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fNT(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.V.au(t,null)),$async$HD)
case 3:return A.h(null,w)}})
return A.i($async$HD,w)},
bFA(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFA=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFA)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aHN(f))
x=4
return A.b(B.HD(d,u),$async$bFA)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFA,w)},
bFB(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bFB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Br(d),$async$bFB)
case 3:u=h
t=J.cJ(u)
s=t.bl(u,new B.fHK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cSY(f))
x=4
return A.b(B.HD(d,u),$async$bFB)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bFB,w)},
ae9:function ae9(d){this.a=d},
fDD:function fDD(){},
fJx:function fJx(d,e){this.a=d
this.b=e},
fJy:function fJy(d){this.a=d},
fJz:function fJz(){},
che:function che(d){this.a=d},
bAr:function bAr(d,e,f,g,h,i,j,k,l){var _=this
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
fJA:function fJA(){},
fNT:function fNT(){},
fHJ:function fHJ(d){this.a=d},
fHK:function fHK(d){this.a=d},
a99(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a99=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.chj())?3:4
break
case 3:x=5
return A.b(B.b34(d,e),$async$a99)
case 5:u=g
if(u!=null){t=u.c
B.OO(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gG(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b3_(s),$async$a99)
case 10:case 9:if(g){v=new A.RF(1,D.V2,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.WV(d,e),$async$a99)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.X_(!0,!0,d,e),$async$a99)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OO(d,D.B5,e,t)
v=new A.RF(p,D.B5,t)
x=1
break}v=B.chi(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a99,w)},
WV(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$WV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9b(null,d,e),$async$WV)
case 3:p=g
try{u=C.V.aP(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cx(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b2Z(p,d.length,e),$async$WV)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.chg(e,C.d.gG(d).a,r.b),$async$WV)
case 7:case 6:q=r.a
x=8
return A.b(B.OO(d,D.V2,e,q),$async$WV)
case 8:v=new A.RF(d.length,D.V2,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WV,w)},
WW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$WW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.mU(D.ns)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9a(d,e),$async$WW)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.chb(s,d,e,t),$async$WW)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3_(t),$async$WW)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.t8(e,d),$async$WW)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.WV(A.a([d],y.r),e),$async$WW)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$WW,w)},
WY(){var x=0,w=A.j(y.H)
var $async$WY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hkr(),$async$WY)
case 2:x=3
return A.b(B.aUs(),$async$WY)
case 3:return A.h(null,w)}})
return A.i($async$WY,w)},
a9a(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b31()
x=3
return A.b(B.chf(e,d.a,u),$async$a9a)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9a,w)},
OO(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.V2&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9a(p,f),$async$OO)
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
return A.b(B.cha(o,p,u,f),$async$OO)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.chb(o,p,f,t),$async$OO)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.ch9(o,u,p,f),$async$OO)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OO,w)},
b34(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b34=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chh(e,d),$async$b34)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.X_(!1,!0,d,e),$async$b34)
case 4:u=g
if(u!=null){t=u.b
v=new A.RF(u.a,D.B5,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b34,w)},
chh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.WU(d,s,0,1),$async$chh)
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
return A.i($async$chh,w)},
chi(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gG(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9b(null,d,e),$async$chi)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hBW(u)
if(t.length>800){v=null
x=1
break}v=new A.RF(d.length,D.e3h,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chi,w)},
asd(d,e,f){return B.i7I(d,e,f)},
i7I(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asd=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.db(g,"\ufeff"))g=J.ni(g,1)
x=B.hkw(g)?3:4
break
case 3:x=5
return A.b(B.chc(g),$async$asd)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.db(g,"NGMYDOCSYNC4|")){s=C.a.i(J.ni(g,13))
try{k=B.FH(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.db(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.ni(g,13))
u=9
x=12
return A.b(B.b2Y(q),$async$asd)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WX(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.db(g,"NGMYDOCSYNC0|"))try{n=B.hkv(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.WX(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.db(g,"N2|")){v=B.JJ(C.a.i(J.ni(g,3)),d,a0)
x=1
break}if(J.db(g,"NGMYDOCSYNC2|")){v=B.JJ(C.a.i(J.ni(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cI(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JJ(h,d,a0)
x=1
break}if(J.eF(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.WX(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asd,w)},
JJ(d,e,f){return B.i7G(d,e,f)},
i7G(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JJ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cG(A.v(s)+"/manifest.json",0,null)
q=A.cG(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b2Q(r),$async$JJ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b2Q(A.cG(s,0,null)),$async$JJ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cx(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cgP(o,r,a1,n,a2),$async$JJ)
case 11:m=a4
x=J.cx(m)?12:13
break
case 12:x=14
return A.b(B.cgO(q),$async$JJ)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.WX(l,a2),$async$JJ)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cx(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ac(d)
$.an.$1("[doc share lan import] "+A.v(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JJ,w)},
a9b(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aQ(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gP(u)
x=5
return A.b(B.t8(f,r),$async$a9b)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.J(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcp().aK(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.W(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.V.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9b,w)},
WX(d,e){return B.i7H(d,e)},
i7H(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$WX=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.V.aP(0,a2,null)
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
e=J.aQ(r)
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
break}i=C.cK.aK(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cx(i,a3,d,k,l,o),$async$WX)
case 9:h=a5
if(h!=null)J.c8(n,h)
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
g=A.ac(a1)
$.an.$1("[doc share bundle] "+A.v(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$WX,w)},
ON:function ON(d,e){this.a=d
this.b=e},
chj:function chj(){},
a3k(d){var x=A.Q(d).ax.a===C.I,w=x?D.akp:D.ahS,v=x?D.amd:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajn:C.bn
return new A.aJI([w,s,v,u,t,x?C.fz:C.bU])},
hT4(d,e){var x=e?C.v.j(0.72):C.b9
return A.cf(null,x,!0,null,new B.hbY(e),d,null,!0,!0,y.N)},
cgZ(d,e,f,g,h,i,j,k,l){return new B.WP(e,l,d,f,k,j,g,h,i,null)},
a0f(d,e,f,g,h,i,j){return new B.bhT(g,h,j,e,i,d,f,null)},
hbY:function hbY(d){this.a=d},
a0c:function a0c(d,e){this.c=d
this.a=e},
aCu:function aCu(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dgF:function dgF(d){this.a=d},
dgD:function dgD(d){this.a=d},
dgE:function dgE(d){this.a=d},
bA3:function bA3(){},
WP:function WP(d,e,f,g,h,i,j,k,l,m){var _=this
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
aGB:function aGB(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e4u:function e4u(d){this.a=d},
e3S:function e3S(d,e){this.a=d
this.b=e},
e3T:function e3T(d,e){this.a=d
this.b=e},
e3r:function e3r(d,e,f){this.a=d
this.b=e
this.c=f},
e3q:function e3q(d){this.a=d},
e3s:function e3s(d,e){this.a=d
this.b=e},
e3x:function e3x(d,e,f){this.a=d
this.b=e
this.c=f},
e3w:function e3w(d){this.a=d},
e4i:function e4i(d,e){this.a=d
this.b=e},
e4j:function e4j(d){this.a=d},
e3P:function e3P(d,e,f){this.a=d
this.b=e
this.c=f},
e3M:function e3M(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e3v:function e3v(d){this.a=d},
e3X:function e3X(d){this.a=d},
e3W:function e3W(){},
e3B:function e3B(d){this.a=d},
e4f:function e4f(d,e){this.a=d
this.b=e},
e4g:function e4g(d,e){this.a=d
this.b=e},
e4h:function e4h(d,e){this.a=d
this.b=e},
e3N:function e3N(d,e){this.a=d
this.b=e},
e3O:function e3O(d,e){this.a=d
this.b=e},
e48:function e48(d,e){this.a=d
this.b=e},
e44:function e44(d){this.a=d},
e43:function e43(d){this.a=d},
e45:function e45(){},
e46:function e46(){},
e47:function e47(d,e){this.a=d
this.b=e},
e49:function e49(){},
e4a:function e4a(d){this.a=d},
e42:function e42(d,e){this.a=d
this.b=e},
e3Y:function e3Y(d){this.a=d},
e3Z:function e3Z(d){this.a=d},
e4_:function e4_(d){this.a=d},
e40:function e40(d){this.a=d},
e41:function e41(d){this.a=d},
e3y:function e3y(){},
e3z:function e3z(d){this.a=d},
e3A:function e3A(d,e){this.a=d
this.b=e},
e3u:function e3u(d,e){this.a=d
this.b=e},
e3t:function e3t(d,e,f){this.a=d
this.b=e
this.c=f},
e3Q:function e3Q(d){this.a=d},
e3R:function e3R(d,e,f){this.a=d
this.b=e
this.c=f},
e3K:function e3K(d,e){this.a=d
this.b=e},
e3G:function e3G(d){this.a=d},
e3D:function e3D(d,e,f){this.a=d
this.b=e
this.c=f},
e3H:function e3H(d){this.a=d},
e3I:function e3I(d){this.a=d},
e3J:function e3J(){},
e3L:function e3L(d,e){this.a=d
this.b=e},
e3E:function e3E(d){this.a=d},
e3C:function e3C(d,e,f){this.a=d
this.b=e
this.c=f},
e3F:function e3F(){},
e3V:function e3V(d){this.a=d},
e3U:function e3U(d,e){this.a=d
this.b=e},
e4e:function e4e(d,e){this.a=d
this.b=e},
e4b:function e4b(d){this.a=d},
e4c:function e4c(d,e){this.a=d
this.b=e},
e4d:function e4d(d){this.a=d},
e4r:function e4r(d){this.a=d},
e4p:function e4p(d){this.a=d},
e4q:function e4q(d){this.a=d},
e4s:function e4s(){},
e4t:function e4t(d,e){this.a=d
this.b=e},
e4l:function e4l(d,e){this.a=d
this.b=e},
e4m:function e4m(d,e,f){this.a=d
this.b=e
this.c=f},
e4k:function e4k(d,e,f){this.a=d
this.b=e
this.c=f},
e4n:function e4n(d,e){this.a=d
this.b=e},
e4o:function e4o(d,e){this.a=d
this.b=e},
aCr:function aCr(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bhS:function bhS(d,e,f){this.c=d
this.d=e
this.a=f},
dgB:function dgB(){},
dgC:function dgC(){},
aet:function aet(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dgZ:function dgZ(){},
dgY:function dgY(d){this.a=d},
a0e:function a0e(d,e,f){this.c=d
this.d=e
this.a=f},
aCw:function aCw(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dgV:function dgV(d){this.a=d},
dgW:function dgW(d,e,f){this.a=d
this.b=e
this.c=f},
dgX:function dgX(d,e){this.a=d
this.b=e},
dgT:function dgT(d,e){this.a=d
this.b=e},
dgR:function dgR(d){this.a=d},
dgP:function dgP(d){this.a=d},
dgM:function dgM(d){this.a=d},
dgS:function dgS(d){this.a=d},
dgO:function dgO(d){this.a=d},
dgU:function dgU(d){this.a=d},
dgQ:function dgQ(d){this.a=d},
dgN:function dgN(d){this.a=d},
a0b:function a0b(d,e,f){this.c=d
this.d=e
this.a=f},
aCt:function aCt(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dgy:function dgy(d){this.a=d},
dgx:function dgx(d,e){this.a=d
this.b=e},
dgz:function dgz(d){this.a=d},
dgw:function dgw(d,e){this.a=d
this.b=e},
dgA:function dgA(d){this.a=d},
dgv:function dgv(d,e){this.a=d
this.b=e},
dgr:function dgr(d){this.a=d},
dgs:function dgs(d){this.a=d},
dgt:function dgt(d,e){this.a=d
this.b=e},
dgu:function dgu(d){this.a=d},
Rd:function Rd(d,e,f){this.c=d
this.d=e
this.a=f},
aCz:function aCz(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dhb:function dhb(d){this.a=d},
dhc:function dhc(d){this.a=d},
dhd:function dhd(d){this.a=d},
dhe:function dhe(d){this.a=d},
dhf:function dhf(d,e){this.a=d
this.b=e},
dhg:function dhg(d){this.a=d},
dhi:function dhi(d){this.a=d},
dhh:function dhh(d){this.a=d},
a0g:function a0g(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCx:function aCx(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dh7:function dh7(d,e){this.a=d
this.b=e},
dh8:function dh8(d,e){this.a=d
this.b=e},
dh_:function dh_(d,e,f){this.a=d
this.b=e
this.c=f},
dh0:function dh0(d){this.a=d},
dh1:function dh1(){},
dh6:function dh6(){},
dh2:function dh2(d,e){this.a=d
this.b=e},
dh3:function dh3(d,e){this.a=d
this.b=e},
dh4:function dh4(d,e){this.a=d
this.b=e},
dh5:function dh5(d,e){this.a=d
this.b=e},
aer:function aer(d,e){this.c=d
this.a=e},
dgq:function dgq(d){this.a=d},
a0a:function a0a(d){this.a=d},
aCs:function aCs(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0h:function a0h(d,e){this.c=d
this.a=e},
aCy:function aCy(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dha:function dha(d){this.a=d},
dh9:function dh9(d){this.a=d},
bhT:function bhT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
i7J(){var x,w=$.oP(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hl(v)},
OP(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$OP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$OP)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$OP)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share video cloud] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OP,w)},
a9c(d){return B.i7K(d)},
i7K(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9c)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i0("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cY,null),$async$a9c)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9c,w)},
WZ(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$WZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OP(),$async$WZ)
case 3:s=g
r=J.a1(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dA(A.a_(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9c(s),$async$WZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WZ,w)},
X_(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$X_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$X_)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.U(f).k("X<1>")
u=A.B(new A.X(f,new B.chl(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.i7J()
t=A.U(u).k("O<1,a9<n,aG>>")
r=A.B(new A.O(u,new B.chm(s),t),t.k("aj.E"))
x=6
return A.b(B.OP(),$async$X_)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9c(q),$async$X_)
case 7:x=8
return A.b(B.a9d(r,u,g,s),$async$X_)
case 8:v=new A.btS(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X_,w)},
ase(d){var x=0,w=A.j(y.y),v,u,t
var $async$ase=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.OP(),$async$ase)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ase,w)},
chn(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$chn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.OP(),$async$chn)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a1(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chn,w)},
a9d(d,e,f,g){return B.i7L(d,e,f,g)},
i7L(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9d=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.asc("media",r,new B.chk(s,e,g),f,q),$async$a9d)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.WZ(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9d)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.WZ(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9d)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.WZ(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9d)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9d,w)},
FH(d,e,f){return B.i7M(d,e,f)},
i7M(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FH=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FH)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ase(b3),$async$FH)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.j5,null,g),$async$FH)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ase(b3),$async$FH)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.OP(),$async$FH)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cx(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f5().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nR(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acE(a8.a,b0,"media",a8.d,a9).DL(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b2R(k,n,o,s,b7),$async$FH)
case 17:j=c0
if(j!=null){J.c8(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
case 18:g.X(e,b3)
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
a2=$.f5().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nR(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acE(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FH)
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
a0=A.dA(A.a_(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9c(e),$async$FH)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FH,w)},
chl:function chl(){},
chm:function chm(d){this.a=d},
chk:function chk(d,e,f){this.a=d
this.b=e
this.c=f},
aUs(){var x=0,w=A.j(y.H),v,u
var $async$aUs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.ijd=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aUs)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aUs)
case 3:u=$.hqb
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aUs)
case 4:$.hqb=$.is8=$.is9=null
return A.h(null,w)}})
return A.i($async$aUs,w)},
fNu(d){var x=0,w=A.j(y.H),v,u
var $async$fNu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abc){x=1
break}u=new A.bn($.bG,y.d4)
d.c=new B.fNv(new A.cb(u,y.aY))
x=3
return A.b(u.ie(0,C.hc,new B.fNw()),$async$fNu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fNu,w)},
is6(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.i7t(x):x},
hqg(d){var x=0,w=A.j(y.T),v,u,t
var $async$hqg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asg(u)
x=1
break}v=B.hkv(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hqg,w)},
hqf(d){var x=0,w=A.j(y.T),v,u,t
var $async$hqf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.ash(u)
x=1
break}v=B.hkv(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hqf,w)},
h7m(d){var x=0,w=A.j(y.T),v
var $async$h7m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ash(d),$async$h7m)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h7m,w)},
bGy(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bGy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqf(d),$async$bGy)
case 3:q=f
if(q==null){x=1
break}t=C.V.aP(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bGy,w)},
fAE(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fAE=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.WT(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cx(d.a8D(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAE,w)},
HE(d,e,f){return B.iuu(d,e,f)},
iuu(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HE=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hqg(a1),$async$HE)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.V.aP(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a1(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hV5().aI4(D.dNc,null),$async$HE)
case 4:l=d.hqb=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ae5(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bn($.bG,y.b1)
l.y=new B.fO5(f,k,new B.fO6(f,a2,k,j,a0,p),a2,j,a0,p,new A.cb(t,y.ch))
x=5
return A.b(l.a9Z(0,new B.Ze(r,"offer")),$async$HE)
case 5:d=l
x=7
return A.b(l.anM(0),$async$HE)
case 7:x=6
return A.b(d.a9R(0,a4),$async$HE)
case 6:x=8
return A.b(B.fNu(l),$async$HE)
case 8:x=9
return A.b(l.as8(),$async$HE)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.is6(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.V.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asi(m,h),$async$HE)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hBW(h)
case 11:v=new A.bt5(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
fNv:function fNv(d){this.a=d},
fNw:function fNw(){},
fO6:function fO6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fO5:function fO5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fO4:function fO4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iwz(d){switch(d){case"new":return D.eOm
case"checking":return D.eOn
case"connected":return D.eOp
case"completed":return D.eOo
case"failed":return D.eOr
case"disconnected":return D.eOs
case"closed":return D.aTB
case"count":return D.eOq}return D.aTB},
iwA(d){switch(d){case"new":return D.aTC
case"gathering":return D.eOt
case"complete":return D.abc}return D.aTC},
iHn(d){switch(d){case"stable":return D.eOu
case"have-local-offer":return D.eOv
case"have-local-pranswer":return D.eOx
case"have-remote-offer":return D.eOw
case"have-remote-pranswer":return D.eOy
case"closed":return D.aTI}return D.aTI},
iFu(d){switch(d){case"new":return D.aTF
case"connecting":return D.aTG
case"connected":return D.aTH
case"closed":return D.abd
case"disconnected":return D.aTE
case"failed":return D.aTD}return D.abd},
abB:function abB(d,e){this.a=d
this.b=e},
PX:function PX(d,e){this.a=d
this.b=e},
Zd:function Zd(d,e){this.a=d
this.b=e},
PW:function PW(d,e){this.a=d
this.b=e},
Gc:function Gc(d,e){this.a=d
this.b=e},
cvt:function cvt(){},
hmn(d){var x=new B.Gb()
x.a=d
x.b=!0
return x},
Gb:function Gb(){this.b=this.a=$},
abA:function abA(){},
awN:function awN(){},
Ze:function Ze(d,e){this.a=d
this.b=e},
hkr(){var x=0,w=A.j(y.H)
var $async$hkr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hkr,w)},
hku(d,e,f){var x=0,w=A.j(y.T),v
var $async$hku=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.mU(D.ns))){v=null
x=1
break}v=B.h7D(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hku,w)},
hBW(d){var x,w=F.ahi.a6E(C.e3.aK(d),null)
if(w.length===0){x=C.e3.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
i7s(d){var x,w,v=C.cK.aK(d)
try{x=C.cf.cF(0,F.ahh.bif(v,!1))
return x}catch(w){x=C.cf.cF(0,v)
return x}},
hkv(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.i7s(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.cf.cF(0,C.cK.aK(x))
return v}catch(u){return x}}return null},
i7t(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.Y(t,"a=extmap"))continue
if(C.a.Y(t,"a=ssrc"))continue
if(C.a.Y(t,"a=msid"))continue
if(C.a.Y(t,"a=rtcp"))continue
if(C.a.Y(t,"a=rtpmap"))continue
if(C.a.Y(t,"a=fmtp"))continue
if(C.a.Y(t,"a=rtcp-fb"))continue
if(C.a.Y(t,"a=mid:"))continue
if(C.a.Y(t,"a=group:"))continue
if(C.a.Y(t,"a=setup:"))continue
if(C.a.Y(t,"a=ice-options:"))continue
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aL(s,"\n")},
i7u(){var x,w=$.oP(),v=J.e6(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hl(v)},
b2X(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b2X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b2X)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share qr stash] load "+A.v(p)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b2X,w)},
ch3(d,e){return B.i7v(d,e)},
i7v(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ch3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i0("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cY,null),$async$ch3)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share qr stash] save "+A.v(p)+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ch3,w)},
b3_(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b2X(d),$async$b3_)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3_,w)},
b2Z(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b2Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.i7u()
r=C.a.i(f)
t=C.e3.aK(s)
x=3
return A.b(B.ch3(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b2Z)
case 3:if(!h){v=null
x=1
break}v=new A.a2k("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b2Z,w)},
b2Y(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b2Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b2X(o),$async$b2Y)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cF(0,C.cK.aK(u))
if(J.j8(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b2Y,w)},
ch4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ch4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(N.bHx("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cY),$async$ch4)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ch4,w)},
b30(d){var x=0,w=A.j(y.h),v,u,t
var $async$b30=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JF(),$async$b30)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b30,w)},
as9(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$as9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as9)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b30(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as9,w)},
as7(d,e){var x=0,w=A.j(y.H)
var $async$as7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as7)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$as7)
case 2:return A.h(null,w)}})
return A.i($async$as7,w)},
a94(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a94=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a94)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JF(),$async$a94)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dx(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a93(s),$async$a94)
case 5:x=6
return A.b(B.as7(f,u),$async$a94)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a94,w)},
a95(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a95=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a95)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JF(),$async$a95)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a1(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a_(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.X(u,t)
s.n(u,o,p)
x=8
return A.b(B.as7(g,q),$async$a95)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a93(u),$async$a95)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a95,w)},
a96(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a96=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a96)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JF(),$async$a96)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a1(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b2U(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a96)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.V.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a96)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a96,w)},
ch5(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ch5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$ch5)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.V.aP(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a_(q,y.N,y.z)
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
return A.i($async$ch5,w)},
JG(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ch5(d),$async$JG)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b30(t),$async$JG)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.as8(d),$async$JG)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b2U(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.as8(d),$async$JG)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JG,w)},
as8(d){var x=0,w=A.j(y.H)
var $async$as8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$as8)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$as8)
case 2:return A.h(null,w)}})
return A.i($async$as8,w)},
b31(){var x,w=$.oP(),v=J.e6(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hl(v)},
a97(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hkw(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ch8(d){return B.i7x(d)},
i7x(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ch8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a97(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.fb("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$ch8)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share short code] load "+d+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ch8,w)},
asb(d,e){return B.i7y(d,e)},
i7y(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a97(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cY,null),$async$asb)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
$.an.$1("[doc share short code] save "+d+": "+A.v(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asb,w)},
cha(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cha=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a97(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asb(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cha)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cha,w)},
ch9(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ch9=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a97(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asb(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ch9)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ch9,w)},
chb(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$chb=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a97(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asb(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chb,w)},
chc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hkw(d)){v=null
x=1
break}x=3
return A.b(B.ch8(d),$async$chc)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a1(u)
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
return A.i($async$chc,w)},
a9e(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9e)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.fb("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9e)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.an.$1("[doc share webrtc stash] load: "+A.v(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9e,w)},
asf(d){return B.i7N(d)},
i7N(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asf)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i0("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cY,null),$async$asf)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asf,w)},
asg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.db(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asg)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9e(),$async$asg)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cF(0,C.cK.aK(q))
if(J.j8(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dA(A.a_(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asf(s),$async$asg)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
$.an.$1("[doc share webrtc stash] offer decode: "+A.v(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asg,w)},
asi(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asi)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9e(),$async$asi)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dA(A.a_(s,r,q),r,q)
r=C.e3.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asf(u),$async$asi)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asi,w)},
ash(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ash=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$ash)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9e(),$async$ash)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cF(0,C.cK.aK(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ash,w)},
ar8(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ar8=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bk$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oy)){v=null
x=1
break}x=3
return A.b(p.ly(e),$async$ar8)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.hq),$async$ar8)
case 7:q=g
o=q
o=o==null?null:J.eW(J.uZ(o))
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
return A.i($async$ar8,w)},
iDz(d,e){var x,w,v=J.e6(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aZ(C.o.v(w),5,"0")
return v},
h5v(d){return B.iDB(d)},
iDB(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h5v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iH("media").Mb(d,3600),$async$h5v)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[supabase signed url] "+d+": "+A.v(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$h5v,w)},
E0(d,e,f,g,h,i){var x=null
return B.iDy(d,e,f,g,h,i)},
iDy(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E0=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hBZ(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hky(r),$async$E0)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h5v(o),$async$E0)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a98(r),$async$E0)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aXl)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ii(A.a([],g))
x=15
return A.b(d.fc(0,A.axB("GET",A.cG(n,0,null))).d7(0,C.HD),$async$E0)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a98(r),$async$E0)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lx(d)
u=19
case 22:x=24
return A.b(d.C(),$async$E0)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b33(r,k),$async$E0)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$E0)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.WT(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a98(r),$async$E0)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E0,w)},
aU6(d){return B.iDA(d)},
iDA(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aU6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f5().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iH("media").X(0,d),$async$aU6)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aU6,w)}},D,X,M,Y,Z
J=c[1]
A=c[0]
C=c[2]
N=c[67]
O=c[310]
P=c[53]
F=c[303]
I=c[182]
G=c[69]
Q=c[268]
R=c[269]
E=c[259]
H=c[100]
S=c[234]
T=c[72]
U=c[183]
V=c[266]
K=c[248]
W=c[295]
L=c[311]
B=a.updateHolder(c[27],B)
D=c[309]
X=c[233]
M=c[242]
Y=c[78]
Z=c[86]
B.cvu.prototype={
aI4(d,e){return this.cUs(d,e)},
cUs(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aI4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dA(r,s,t)
t.u(0,d)
u=new q(A.kC(A.cz(t)))
t=J.k(u)
v=B.icD(C.cS.gcp().aK(new A.dl(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aI4,w)}}
B.b8g.prototype={
bEG(d){var x=this,w=x.w
w.onclose=A.hG(new B.cvp(x))
w.onopen=A.hG(new B.cvq(x))
w.onmessage=A.hG(new B.cvr(x))
w.onbufferedamountlow=A.hG(new B.cvs(x))},
gd5(d){return this.x},
ak1(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ak1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gb()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hmn(J.eW(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$ak1)
case 8:v=t.hmn(s.aqh(f,0,null))
x=1
break
case 7:case 4:v=B.hmn(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ak1,w)}}
B.b8h.prototype={
bEH(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hG(new B.cvv(x)))
w.addEventListener("icecandidate",A.hG(new B.cvw(x)))
w.addEventListener("iceconnectionstatechange",A.hG(new B.cvx(x)))
w.onicegatheringstatechange=A.hG(new B.cvy(x))
w.addEventListener("signalingstatechange",A.hG(new B.cvz(x)))
if(!$.huq())w.addEventListener("connectionstatechange",A.hG(new B.cvA(x)))
w.addEventListener("negotiationneeded",A.hG(new B.cvB(x)))
w.addEventListener("track",A.hG(new B.cvC(x)))},
anM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$anM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.ek(s.createAnswer(A.kC(A.cz(A.S(y.N,y.z)))),y.aQ),$async$anM)
case 3:t=f
v=new B.Ze(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anM,w)},
a9R(d,e){return this.btA(0,e)},
btA(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a9R)
case 2:return A.h(null,w)}})
return A.i($async$a9R,w)},
a9Z(d,e){return this.btV(0,e)},
btV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a9Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a9Z)
case 2:return A.h(null,w)}})
return A.i($async$a9Z,w)},
as8(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$as8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Ze(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$as8,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.aes.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0d.prototype={
R(){return new B.aCv()},
gd2(){return this.c}}
B.aCv.prototype={
Z(){this.a3()
this.agw()},
agw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b2V(u.e,u.c),$async$agw)
case 2:t=e
if(v.c!=null)v.l(new B.dgJ(v,t))
return A.h(null,w)}})
return A.i($async$agw,w)},
RR(){var x=0,w=A.j(y.H),v,u=this,t
var $async$RR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.as4(t.e,t.c,!1),$async$RR)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fDx)
x=1
break}x=4
return A.b(B.a92(u.a.c,"individual"),$async$RR)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a8(t,!1).a8d(A.e7(new B.dgG(u),!1,null,y.H)),$async$RR)
case 5:case 1:return A.h(v,w)}})
return A.i($async$RR,w)},
Ks(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Ks=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fLh(o),$async$Ks)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a96(o.e,r,s,q),$async$Ks)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAw)
x=1
break}x=5
return A.b(B.a92(u.a.c,"member"),$async$Ks)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a8(o,!1).a8d(A.e7(new B.dgI(u),!1,null,y.H)),$async$Ks)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Ks,w)},
z1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$z1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a91(t.e,o,t.f,t.r,t.w,s),$async$z1)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a92(u.a.c,"org_owner"),$async$z1)
case 4:x=5
return A.b(B.as9(u.a.c),$async$z1)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fLM(o),$async$z1)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a94(s,t,o,q.c),$async$z1)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.T(D.fAs)
x=1
break}x=10
return A.b(B.as9(u.a.c),$async$z1)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a8(o,!1).a8d(A.e7(new B.dgH(u),!1,null,y.H)),$async$z1)
case 11:case 1:return A.h(v,w)}})
return A.i($async$z1,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.nW:C.nh,p=B.hkt(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aF(d,C.dK,y.m).w
w=A.m(28)
v=A.a([new A.aa(0,C.H,C.az.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.p(s,A.w(A.a([A.p(s,D.fY2,C.f,s,s,new A.o(C.c.j(0.2),s,s,A.m(20),s,s,C.m),s,s,s,s,C.ho,s,s,s),C.aB,D.hhh,C.R,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),C.f,s,s,new A.o(s,s,s,w,v,D.ceA,C.m),s,s,s,s,C.ew,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lS(new B.dgL(),s),C.O,v,C.eb,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.aeW(C.f0,C.aG4,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcmP(),s),C.af],u))
w.push(new B.aeW(C.q6,C.a6D,"Team Member","Sign in with your organization access code + password",t.gcnK(),s))
w.push(C.af)
w.push(new B.aeW(C.arW,C.a8h,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcne(),s))
return A.c6(s,q,A.bo(!0,A.cc(A.w(w,C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.aeW.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.K(C.d.gG(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aE(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eL(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.er,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lR,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.h,0,C.p),1),A.V(C.A_,C.d.gG(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.h,0,s,s),s,new A.o(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFa.prototype={}
B.aIr.prototype={}
B.jU.prototype={
mU(d){var x=this.b,w=C.a.pl(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gasP(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.a5(x/1024,1)+" KB"
if(x<1073741824)return C.i.a5(x/1048576,1)+" MB"
return C.i.a5(x/1073741824,2)+" GB"},
ak(){var x,w=this,v=A.S(y.N,y.z)
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
bhJ(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jU(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cSY(d){return this.bhJ(null,d)},
aHN(d){return this.bhJ(d,null)}}
B.WN.prototype={
R(){return new B.aGz(new A.cB(null,y.A))},
gd2(){return this.c}}
B.aGz.prototype={
Z(){this.a3()
this.agx()},
agx(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Cw(u.a.c),$async$agx)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e3n(u,t))
case 1:return A.h(v,w)}})
return A.i($async$agx,w)},
agy(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$agy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fK(new A.fA(s)),$async$agy)
case 3:t=u.c
if(t!=null)t.K(y.q).f.T(D.fEs)
case 1:return A.h(v,w)}})
return A.i($async$agy,w)},
a0y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a0y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ar8(s.d,4),$async$a0y)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_my_code_"+m+".png"),$async$a0y)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0y,w)},
aks(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aks=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acd("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aks)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aks,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.nW:C.nh,m=o?C.c:C.a_,l=A.eS(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l3
else if(q.e==null)x=A.at(new A.C(C.ew,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.az.j(o?0.35:0.12)
w=A.a([w,C.aP.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.K(C.az.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.w(A.a([t,C.O,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.AE,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.h,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,O.aos,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.H,C.az.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cc(A.w(A.a([x,C.ny,w,C.lq,new A.ea(A.p(p,A.qt(p,p,!1,B.i7o(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.ei(C.Aq,p,C.Xu,q.gceN(),p),1),C.ar,A.E(A.de(C.As,p,C.adB,q.gceO(),A.bp(C.az,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.h,0,p,p),C.R,new A.a4(1/0,p,A.ei(M.a5r,p,D.hcM,q.gcD1(),p),p)],r),C.l,p,C.e,C.h,0,C.p),C.t,p,C.y,p,p,Y.ap3,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.WR.prototype={
R(){return new B.aGC(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aGC.prototype={
Z(){var x,w
this.a3()
x=this.a.e
w=B.JE(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
a0z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JE(u.d.a.a)
if(t==null){u.l(new B.e4w(u))
x=1
break}u.l(new B.e4x(u))
s=u.a
r=s.c
x=3
return A.b(B.a90(s.d,new B.e4y(u),t,r),$async$a0z)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e4z(u))
if(q){s=u.c
s.toString
A.a8(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a0z,w)},
a43(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a43=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cx(r.a.d)){x=1
break}r.l(new B.e4A(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.t8(r.a.c,q),$async$a43)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e4B(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ak3(p,m,l,j,k),$async$a43)
case 8:o=e
if(r.c!=null)r.l(new B.e4C(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.l(new B.e4D(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e4E(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a43,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akp:D.ahS,h=j?D.amd:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajn:C.bn
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eS(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dp(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dp(!0,A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bU(C.z,0.5,C.w,k,0,A.a([C.az.j(x?0.12:0.08),C.az.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.c1u,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.az],e),k,k),C.m),k,52,k,k,k,k,k,52),C.er,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.h,0,C.p),1)],r),C.l,k,C.e,C.h,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.m),k,k,k,k,C.f6,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.AE,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tT(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bno()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aN(k,C.M,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.Pw,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ax(C.az,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.al,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e4F(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mT,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.K(i[1],C.r,1)
m=J.E9(l.a.d,4)
m=A.B(new A.O(m,new B.e4G(x,new A.aJI(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.kO,A.c("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.df,p,C.O,A.p(k,A.w(m,C.l,k,C.e,C.h,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.m),k,k,k,k,C.ep,k,k,k)],r)
if(l.r!=null){u=C.az.j(x?0.16:0.1)
t=A.m(14)
s=A.K(C.az.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fyZ)
else q.push(A.V(C.kQ,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cY(k,A.A(q,C.l,k,C.e,C.h,0,k,k),k,k,C.aZ,new A.o(u,k,s,t,k,k,C.m),C.j4,k,k,k,k,C.eZ,k,k,k)],r))}e=A.E(A.cc(A.w(e,C.am,k,C.e,C.h,0,C.p),C.t,k,C.y,k,k,D.bJK,k,k,C.ah),1)
u=l.f?k:l.gcD2()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ei(M.a5r,k,D.hdT,u,A.dh(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gceP()
t=A.bp(C.az,k,k,0,C.c,k,C.o3,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ac,C.t,A.a([f,v,A.bo(!0,A.l1(new B.e4H(),A.w(A.a([e,new A.C(D.bJc,A.w(A.a([s,C.O,i,C.af,A.bH(l.f?C.uw:D.hc7,k,u,t)],r),C.am,k,C.e,C.h,0,C.p),k)],r),C.l,k,C.e,C.h,0,C.p),C.cn,C.a1E,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bno.prototype={
ph(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fn(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hl(C.bC,v.length),C.aO)}}
B.WO.prototype={
R(){return new B.aGA()}}
B.aGA.prototype={
Z(){var x,w,v,u=this
u.a3()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bb(w,C.b5,C.aO),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bb(x,C.b5,C.aO),v)
u.f!==$&&A.aT()
u.f=new A.au(C.ay,v)},
t(){var x,w=this,v=w.d
v===$&&A.d()
x=v.V$=$.ay()
v.W$=0
v=w.e
v===$&&A.d()
v.V$=x
v.W$=0
v=w.f
v===$&&A.d()
v.V$=x
v.W$=0
w.a2()},
agz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$agz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e3o(r))
u=3
p=r.a
o=p.c
p=p.d
n=r.d
n===$&&A.d()
n=n.a.a
m=r.e
m===$&&A.d()
m=m.a.a
m=C.a.i(m)!==C.a.i(p)?m:null
l=r.f
l===$&&A.d()
l=l.a.a
x=6
return A.b(B.a95(p,m,n,o,C.a.i(l).length===0?null:l),$async$agz)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.T(D.fE3)
s=[1]
x=4
break}p.K(y.q).f.T(D.fCF)
p=r.c
p.toString
A.a8(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e3p(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agz,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.nW:C.nh,q=A.eS(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h4r,s,s,s,1,s,!0),p=A.p(s,D.bBd,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.J4,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c8U,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c8P,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aN(s,C.M,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c94,C.y,!0,s,!0,s,!1,s,C.al,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a7,s,C.ao,s,s,s,s)
v=t.r?s:t.gceQ()
u=A.bp(C.az,s,s,s,s,C.ht,s,s,s,s,s,s)
return A.c6(q,r,A.cc(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.ny,A.bH(t.r?C.uw:C.b_f,s,v,u)],y.p),C.am,s,C.e,C.h,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.ae9.prototype={}
B.bAr.prototype={
a6V(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a6V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a8D()))
x=3
return A.b(B.ST(t,s),$async$a6V)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a6V,w)},
gd2(){return this.a}}
B.ON.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0c.prototype={
R(){return new B.aCu(new A.au(C.ay,$.ay()),A.jP(!0,null,!0,!0,null,null,!1))}}
B.aCu.prototype={
Z(){this.a3()
$.aS.U$.push(new B.dgF(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a2()},
ceW(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a8(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a3k(d),u=x.a.c,t=u?C.iZ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nW:v.a[0],p=A.m(24),o=A.K(C.az.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.H,C.az.j(u?0.25:0.12),C.fF,32)],n),l=A.p(w,X.auI,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.H,C.az.j(0.4),C.cy,16)],n),C.avz,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tT(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bA3()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.N,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aN(!1,C.M,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dh,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b8N),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.al,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dgD(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mT,w,w,w,w)
f=f[1]
h=y.p
return A.ez(w,C.L,new A.cP(S.N5,new A.bP(new A.o(t,w,o,p,m,w,C.m),C.bm,new A.C(C.xf,A.w(A.a([l,C.aN,k,C.O,j,C.eb,i,C.eb,A.A(A.a([A.E(A.dV(C.ov,new B.dgE(d),A.dh(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.o(w,w,w,A.m(14),A.a([new A.aa(0,C.H,C.az.j(0.35),C.cN,12)],n),L.RC,C.m),C.bm,A.aE(!1,C.a3,!0,w,A.aM(!1,A.m(14),!0,D.eHJ,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gceV(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.h,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PD,w,C.da,w,w,w)}}
B.bA3.prototype={
ph(d,e){return e.anG(e.a.toUpperCase())}}
B.WP.prototype={
R(){return new B.aGB(A.a([],y.r),A.aR(y.N))},
gd2(){return this.c}}
B.aGB.prototype={
Z(){var x=this
x.a3()
x.uA()
x.w=A.d4(C.jZ,new B.e4u(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.WY()
this.a2()},
a2S(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2S=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OM(u.a.c),$async$a2S)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Br(u.a.c),$async$a2S)
case 4:u.l(new s.e3S(u,e))
u.ir("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a2S,w)},
uA(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OM(u.a.c),$async$uA)
case 3:t=e
x=4
return A.b(B.Br(u.a.c),$async$uA)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e3T(u,s))
if(t>0)u.ir("Received "+A.v(t)+" file(s) via My Code.")
u.OV(u.d)
B.Cw(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uA,w)},
OV(d){return this.bIP(d)},
bIP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$OV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9a(r,u.a.c),$async$OV)
case 8:p=f
if(u.c==null){x=1
break}new B.e3r(u,r,p).$0()
u.c.ew()
case 7:if(!(C.a.Y(r.c,"video/")||r.mU(D.ns))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.WW(r,u.a.c),$async$OV)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Br(u.a.c),$async$OV)
case 12:u.l(new o.e3s(u,f))
case 1:return A.h(v,w)}})
return A.i($async$OV,w)},
Pk(d){return this.bPg(d)},
bPg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Pk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9a(d,u.a.c),$async$Pk)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e3x(u,d,t))
x=6
return A.b(A.fK(new A.fA(t)),$async$Pk)
case 6:u.ir("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fK(new A.fA(r.toUpperCase())),$async$Pk)
case 7:u.ir("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Pk,w)},
ir(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.T(A.b0(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uB(d,e){return this.cOe(d,e)},
cOe(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uB=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e4i(r,e))
u=3
x=6
return A.b(d.$0(),$async$uB)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e4j(r))
$.eX.mN()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uB,w)},
gaZC(){var x=this.a
return x.f||x.r||x.w},
Jc(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Jc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaZC()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ch1(s,n,r,q,o,t),$async$Jc)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ir("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fZ_(o,u.a.c),$async$Jc)
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
return A.b(B.E2(s,o,r,q,n,t),$async$Jc)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jc,w)},
a1T(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a1T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.as9(u.a.c),$async$a1T)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ir("No organization portal found.")
x=1
break}t=J.a1(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a8(t,!1).ca(A.e7(new B.e3P(u,r,q),!1,null,y.H)),$async$a1T)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a1T,w)},
a32(d){return this.cwo(d)},
cwn(){return this.a32(1)},
cwo(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a32=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaZC()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.as6(u.a.c),$async$a32)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a32,w)},
aek(d,e,f){return this.c5n(d,e,f)},
c5n(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aek=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ir(e)
x=1
break}x=3
return A.b(u.uB(new B.e3M(u,d,null,e,f),"Uploading\u2026"),$async$aek)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aek,w)},
bIY(){B.hS0(!1,new B.e3v(this))
return},
cBz(){this.l(new B.e3X(this))},
aCc(){var x=0,w=A.j(y.H),v=this
var $async$aCc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bIY()
return A.h(null,w)}})
return A.i($async$aCc,w)},
aeg(){var x=0,w=A.j(y.H),v=this
var $async$aeg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uB(new B.e3B(v),"Importing\u2026"),$async$aeg)
case 2:return A.h(null,w)}})
return A.i($async$aeg,w)},
TT(d){return this.cNw(d)},
cNw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$TT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.mU(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e4f(u,d),!1,null,y.H)),$async$TT)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.mU(D.TG)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a8(t,!1).ca(A.e7(new B.e4g(u,d),!1,null,y.H)),$async$TT)
case 8:x=1
break
case 7:x=u.c65(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a8(t,!1).ca(A.e7(new B.e4h(u,d),!1,null,y.H)),$async$TT)
case 11:x=1
break
case 10:u.ir("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$TT,w)},
c65(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.pl(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cYy,C.a.aV(x,w+1).toLowerCase())},
aib(d){return this.cmT(d)},
cmT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aib=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.mU(D.ns)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a8(t,!1).ca(A.e7(new B.e3N(u,d),!1,null,y.H)),$async$aib)
case 5:x=1
break
case 4:u.l(new B.e3O(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aib,w)},
Te(d){return this.cEw(d)},
cEw(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Te=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ir("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Te)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uB(new B.e48(u,d),"Preparing QR\u2026"),$async$Te)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Te,w)},
akS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$akS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e49(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e4a(q),s),s.k("M.E"))
if(r.length===0){u.ir("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Te(r),$async$akS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$akS,w)},
akL(d){return this.cE3(d)},
cE3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3k(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e42(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$akL)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.TT(d)
break
case"qr":u.Te(A.a([d],y.r))
break
case"send_my_code":u.cnz(A.a([d],y.r))
break
case"save":u.ak9(d)
break
case"delete":u.K7(d)
break}case 1:return A.h(v,w)}})
return A.i($async$akL,w)},
Zh(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e3y(),A.U(t).k("O<1,n>")).fD(0)}t=u.d
s=A.U(t).k("X<1>")
r=A.B(new A.X(t,new B.e3z(q),s),s.k("M.E"))
if(r.length===0){u.ir("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pT(t,s.c,s.f),$async$Zh)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uB(new B.e3A(u,r),"Preparing file\u2026"),$async$Zh)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zh,w)},
ajh(d){return this.cuF(d)},
cuF(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hT4(d,!1),$async$ajh)
case 3:s=f
r=s==null
q=B.a97(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ir("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajh,w)},
aih(){var x=0,w=A.j(y.H),v=this,u
var $async$aih=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h6D(u,v.a.c),$async$aih)
case 2:return A.h(null,w)}})
return A.i($async$aih,w)},
bIX(){B.hS0(!1,new B.e3u(this,null))
return},
Kr(d,e){return this.cnA(d,e)},
b5o(d){return this.Kr(null,d)},
cnz(d){return this.Kr(d,null)},
cnA(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Kr=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("X<1>")
k=A.B(new A.X(p,new B.e3Q(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y3.cq().aqr(!0,C.a3w,!1),$async$Kr)
case 10:r=g
if(r==null||J.cx(r.a)){x=1
break}x=11
return A.b(s.uB(new B.e3R(l,s,r),"Preparing\u2026"),$async$Kr)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.ir("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ir("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bIM(p,l,e,s.a.c),$async$Kr)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ir("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Kr,w)},
Jt(d){return this.c5a(d)},
c5a(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Jt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.i7n(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b5o(t),$async$Jt)
case 8:x=6
break
case 7:u.ir("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ir("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uB(new B.e3K(u,d),"Receiving video\u2026"),$async$Jt)
case 11:x=1
break
case 10:x=12
return A.b(u.uB(new B.e3L(u,d),"Receiving\u2026"),$async$Jt)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Jt,w)},
Ff(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ff=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DX()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajh(t),$async$Ff)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Jt(s),$async$Ff)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e3V(u),!1,null,y.N)),$async$Ff)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uA(),$async$Ff)
case 10:x=1
break
case 9:x=11
return A.b(u.Jt(C.a.i(r)),$async$Ff)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ff,w)},
ak9(d){return this.cA2(d)},
cA2(d){var x=0,w=A.j(y.H),v=this
var $async$ak9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uB(new B.e3U(v,d),"Saving\u2026"),$async$ak9)
case 2:return A.h(null,w)}})
return A.i($async$ak9,w)},
K7(d){return this.bRF(d)},
bRF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$K7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lE(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$K7)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ch4(t),$async$K7)
case 6:case 5:s=d.a
x=7
return A.b(B.FG(u.a.c,s),$async$K7)
case 7:u.r.X(0,s)
x=8
return A.b(u.uA(),$async$K7)
case 8:case 1:return A.h(v,w)}})
return A.i($async$K7,w)},
akY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$akY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3k(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.L,null,new B.e4e(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$akY)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aih()
break
case"import":u.aeg()
break}case 1:return A.h(v,w)}})
return A.i($async$akY,w)},
ceT(d){var x=d.c
if(C.a.Y(x,"video/")||d.mU(D.ns))return C.rx
if(C.a.Y(x,"image/")||d.mU(D.TG))return C.vB
if(C.a.q(x,"pdf"))return R.IK
return D.ask},
B(d){var x,w,v=this,u=null,t=B.a3k(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.IX,u,u,u,new B.e4p(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.c25,u,u,u,v.e?u:v.gcnf(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcBy()
n.push(A.aH(u,u,u,u,A.V(v.r.a===x?D.bX8:E.asJ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a5n,u,u,u,v.e?u:v.gceU(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.p7,u,u,u,v.e?u:v.gb6v(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.c3U,u,u,u,v.e?u:new B.e4q(v),u,u,u,u,"More options",u))
q=A.eS(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lS(new B.e4r(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dp(!0,A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bU(C.z,0.5,C.w,u,0,A.a([C.az.j(A.Q(d).ax.a===C.I?0.12:0.08),C.az.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jH(s[1].j(0.5),u,C.az,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCr(C.jK,s,!0,t,w?u:v.gcEx(),u),1)
x.push(new A.C(C.aoq,A.l1(new B.e4s(),A.A(A.a([s,C.ar,A.E(new B.aCr(C.tT,"Export",!1,t,w?u:v.gbVx(),u),1)],o),C.l,u,C.e,C.h,0,u,u),C.cn,C.iO,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bhS(t,v.e?u:v.gb6v(),u)
else s=A.ks(!0,u,u,new B.e4t(v,t),s,u,D.bHP,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ac,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.h,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCr.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.az,t,t,0,C.c,t,C.tG,t,new A.b9(s,C.a1),t,t,t)
return A.de(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dh(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tG,t,new A.b9(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ei(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bhS.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.az.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l1(new B.dgB(),new A.C(E.a2D,A.w(A.a([A.l1(new B.dgC(),A.p(x,A.V(C.A3,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.eg,C.hy,x,x,new A.bq(0.86,1,w),s),C.eb,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.R,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.eb,A.de(C.p7,x,D.hhB,this.d,A.bp(C.az,x,x,x,C.c,x,C.PB,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.D3,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aet.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.du(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.az.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.mU(D.ns))p=D.dBr
else{p=C.a.Y(p,"image/")||i.mU(D.TG)
n=y.O
p=p?A.a([C.cX,C.az],n):A.a([C.aP.j(0.85),C.az.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gasP()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mU(D.ns))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.E(A.w(A.a([q,C.at,A.c(C.d.aL(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.h,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.V(C.h2,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.mU(D.ns)))l.push(A.hig(C.az,!1,j,j,j,!1,j,j,new B.dgY(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.V(C.p3,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l1(new B.dgZ(),new A.C(C.dV,A.aE(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a23,A.A(l,C.l,j,C.e,C.h,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.bg("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0e.prototype={
R(){return new B.aCw()},
gd2(){return this.c}}
B.aCw.prototype={
Z(){this.a3()
this.yP()},
t(){B.i7C(this.e)
this.a2()},
yP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.t8(o.c,o.d),$async$yP)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.i7F(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.i7E(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.dgV(s))
x=1
break}s.l(new B.dgW(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.l(new B.dgX(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yP,w)},
a42(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a42=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.t8(t.c,t.d),$async$a42)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(D.fB2)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ak3(q,s,t.length===0?"image/jpeg":t,null,s),$async$a42)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a42,w)},
c53(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kr(u,C.z,v,new B.dgT(w,t),C.hf,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.h7(t,C.z,v,new B.dgU(w),C.hf,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u_(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a3k(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.E6,u,u,u,v.gbal(),u,u,u,u,"Share / save",u))
r=A.eS(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Gv
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.de(C.E6,u,D.h_x,v.gbal(),A.bp(C.az,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c53()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0b.prototype={
R(){return new B.aCt(A.al1(),C.bH,C.bH)},
gd2(){return this.c}}
B.aCt.prototype={
Z(){var x,w,v=this
v.a3()
x=v.d
w=x.CW
new A.fH(w,A.a3(w).k("fH<1>")).iJ(new B.dgy(v))
x.gd1b().iJ(new B.dgz(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fH(x,A.a3(x).k("fH<1>"))}if(x==null)x=C.bf8
x.iJ(new B.dgA(v))
v.yP()},
yP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.t8(p.c,p.d),$async$yP)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dgr(s))
x=1
break}x=8
return A.b(s.d.vE(0,new A.a5x(r,s.a.d.c)),$async$yP)
case 8:if(s.c==null){x=1
break}s.l(new B.dgs(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.l(new B.dgt(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yP,w)},
a0A(){var x=0,w=A.j(y.H),v=this,u
var $async$a0A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hn(0),$async$a0A)
case 5:x=3
break
case 4:x=6
return A.b(u.iM(0),$async$a0A)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a0A,w)},
aXs(d){var x=d.a
return C.a.aZ(C.o.v(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aZ(C.o.v(C.o.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3k(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eS(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Gv
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.p(o,D.bY8,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.RC,C.m),o,88,o,o,o,o,o,88)
t=A.lg(C.az,o,o,m,0,new B.dgu(p),C.o.D(C.o.ao(p.w.a,1000),0,m))
x=A.c(p.aXs(p.w)+" / "+p.aXs(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.az,o,o,o,o,D.fxr,o,o,o,o,o,o)
r=p.f
q=A.V(r?I.vE:C.fQ,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.df,A.de(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gceX(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.pX,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rd.prototype={
R(){return new B.aCz()},
gd2(){return this.c}}
B.aCz.prototype={
Z(){this.a3()
this.R5()},
R5(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$R5=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hku(o.c,o.d,new B.dhb(s)),$async$R5)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dhc(s))
x=1
break}s.e=r
q=P.ivp(r)
if(q==null){s.l(new B.dhd(s))
x=1
break}s.d=q
q.aU(0,s.gb5b())
x=8
return A.b(q.iY(0).d7(0,C.o2),$async$R5)
case 8:if(s.c==null){x=1
break}s.l(new B.dhe(s))
x=9
return A.b(q.qz(0),$async$R5)
case 9:q.ua(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.l(new B.dhf(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$R5,w)},
cln(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.dhg(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.E_(0,x.gb5b())
w=x.d
if(w!=null)w.t()
B.iFN(x.e)
x.a2()},
agC(){var x=0,w=A.j(y.H),v=this,u,t
var $async$agC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b32(u.c,u.d),$async$agC)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$agC,w)},
B(d){var x,w,v,u=this,t=null,s=B.a3k(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eS(A.a([A.aH(t,t,t,t,C.oh,t,t,t,u.gceR(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iz(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Gv
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akr(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fP(x,new A.am(C.z,t,C.ac,C.t,A.a([new A.AX(s,t),A.aA(t,A.xN(A.p(t,A.V(q?I.vE:C.fQ,C.c,t,t,t,48),C.f,t,t,new A.o(C.b9,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.aZ,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dhi(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0g.prototype={
R(){return new B.aCx(new A.cB(null,y.A))}}
B.aCx.prototype={
gcNU(){var x,w,v=this.a
if(v.e!==D.V3)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcNu(){var x,w,v=this.a
if(v.e!==D.B5)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a3()
x=v.gcNU()
if(x!=null){v.Sg(x)
v.e=A.d4(U.D5,new B.dh7(v,x))}w=v.gcNu()
if(w!=null){v.Sf(w)
v.f=A.d4(C.fr,new B.dh8(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a2()},
Sf(d){return this.csP(d)},
csP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ase(d),$async$Sf)
case 3:t=f
x=4
return A.b(B.chn(d),$async$Sf)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.dh_(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Sf,w)},
Sg(d){return this.csQ(d)},
csQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h7m(d),$async$Sg)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bGy(t),$async$Sg)
case 4:if(u.c==null){x=1
break}u.l(new B.dh0(u))
u.c.K(y.q).f.T(D.aWV)
case 1:return A.h(v,w)}})
return A.i($async$Sg,w)},
gcaD(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gceS(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a3M(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DX()){t=u.c
if(t!=null)t.K(y.q).f.T(D.fEd)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a8(t,!1).ca(A.e7(new B.dh1(),!1,null,y.N)),$async$a3M)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bGy(s),$async$a3M)
case 4:t=u.c
if(t!=null)t.K(y.q).f.T(D.aWV)
case 1:return A.h(v,w)}})
return A.i($async$a3M,w)},
ac6(d){return this.bPh(d)},
bPh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fK(new A.fA(C.d.aL(t,", "))),$async$ac6)
case 3:if(d.e!=null){t=d.K(y.q).f
t.T(A.b0(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$ac6,w)},
agA(d){return this.bP_(d)},
bP_(d){var x=0,w=A.j(y.H),v=this
var $async$agA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fK(new A.fA(v.a.c)),$async$agA)
case 2:if(d.e!=null)d.K(y.q).f.T(D.fBw)
return A.h(null,w)}})
return A.i($async$agA,w)},
a3G(d){return this.cA4(d)},
cA4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a3G=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ar8(s.d,4),$async$a3G)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rA(r,"ngmy_doc_share_qr.png"),$async$a3G)
case 8:q=f
if(d.e!=null)d.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.K(y.q).f.T(A.b0(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a3G,w)},
gb_S(){var x,w=this.a
if(w.e!==D.Kc)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
ac3(d){return this.bPa(d)},
bPa(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ac3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb_S()
if(t==null){x=1
break}x=3
return A.b(A.fK(new A.fA(C.a.Y(t,"http")?t:"N2|"+t)),$async$ac3)
case 3:if(d.e!=null)d.K(y.q).f.T(D.fDc)
case 1:return A.h(v,w)}})
return A.i($async$ac3,w)},
agB(){var x=0,w=A.j(y.H),v=this,u
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.WY(),$async$agB)
case 2:u=v.c
if(u!=null)A.a8(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$agB,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3k(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kc&&i!==D.V3&&i!==D.B5
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eS(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kc||t===D.V3||t===D.B5?l:A.aH(l,l,l,l,C.lI,l,l,l,m.gb30(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.K(C.az.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.qt(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcaD(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kc){t=C.az.j(0.12)
o=A.m(20)
C.d.u(q,A.a([C.O,A.p(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gceS(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gG(t):"Type-in codes: "+C.d.aL(t,", ")
C.d.u(q,A.a([C.R,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.N,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c7X,D.h9h,new B.dh2(m,d),l)],p))}if(m.a.e===D.Kc&&m.gb_S()!=null)C.d.u(q,A.a([C.R,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hy(D.c4f,D.h5R,new B.dh3(m,d),l)],p))
if(m.a.e===D.B5){x=(m.w?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.a5(C.i.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.O,A.p(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Gz:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l)],p))}if(m.a.e===D.V3){x=(m.r?C.dR:C.az).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.O,A.p(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.Gz:C.az,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.m),l,l,l,l,C.lE,l,l,l),C.af,A.de(D.c_D,l,D.hcr,m.gcAs(),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pc(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.p(l,A.w(q,C.l,l,C.bc,C.h,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.ei(C.Aq,l,C.Xu,new B.dh4(m,d),l),1),C.ar,A.E(A.de(C.As,l,C.adB,new B.dh5(m,d),A.bp(C.az,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.h,0,l,l),C.O,new A.a4(1/0,l,A.bH(T.BJ,l,m.gb30(),A.bp(C.aP,l,l,l,l,C.ht,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.h,0,C.p),l),l,!1,!1,l,l),new B.dh6(),y.C)}}
B.aer.prototype={
B(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.cc(A.w(A.a([w,C.aN,A.p(x,A.qt(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.el(A.a([A.bH(C.BK,x,new B.dgq(d),x)],u),x,x,C.nM,v,x,x,x,x,D.fZu,x)}}
B.a0a.prototype={
R(){return new B.aCs(A.A9(C.zl,C.oC,C.vQ))}}
B.aCs.prototype={
t(){this.d.t()
this.a2()},
aAB(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a8(x,!1).N(t)
return}}},
B(d){var x=null
return A.c6(A.eS(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.h6o,x,x,x,1,x,!0),C.v,A.A8(this.d,C.c0,this.gaAA()),x,!1,!1,x,x)}}
B.a0h.prototype={
R(){return new B.aCy(A.A9(C.zl,C.oC,C.vQ))},
gd2(){return this.c}}
B.aCy.prototype={
c67(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
aiF(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.N9("text/plain"),$async$aiF)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.T(D.fE7)
x=1
break}s=u.c
if(s!=null)A.a8(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aiF,w)},
acV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$acV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hT4(p,!0),$async$acV)
case 3:t=e
p=t==null
s=B.a97(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.T(D.fAD)
x=1
break}p=u.c
if(p!=null)A.a8(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$acV,w)},
t(){this.d.t()
this.a2()},
aAB(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c67(t))continue
s.e=!0
x=s.c
x.toString
A.a8(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.atL,v,v,v,w.gbV0(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a5v,v,v,v,w.gcq4(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eS(A.a([u,t,A.aH(v,v,v,v,A.V(w.f?C.rr:Q.QL,v,v,v,v,v),v,v,v,new B.dha(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hdn,v,v,v,1,v,!0)
u=A.A8(w.d,C.c0,w.gaAA())
x=A.m(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ac,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.K(C.aP,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eO1],s),v),v,!1,!1,v,v)}}
B.bhT.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pP
else x=s.w?C.az:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.az.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pP:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a2J,A.A(A.a([u,C.ba,A.E(A.w(t,C.B,r,C.e,C.h,0,C.p),1),A.V(C.eL,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.h,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abB.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.PX.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zd.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.PW.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gc.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cvt.prototype={}
B.Gb.prototype={}
B.abA.prototype={}
B.awN.prototype={}
B.Ze.prototype={}
var z=a.updateTypes(["az<~>()","P(jU)","n(jU)","WP(Z)","~()","a0d(Z)","G(G,jU)","Rd(Z)","~(lJ)","cp(Gb)","az<jU?>(@)","WN(Z)","WR(Z)","C(jU)","jU(@)","a9<n,@>(jU)","a0c(Z)","WO(Z)","a0e(Z)","a0b(Z)","a0g(Z)","aer(Z)","ai<jU>()","a0h(Z)","aet(Z,G)","a0a(Z)","a9<n,aG>(jU)","cp(Zd)","cp(abA)","az<cp>(Gb)"])
B.cvp.prototype={
$1(d){var x=this.a
x.x=D.aTA
x.y.I(0,D.aTA)},
$S:75}
B.cvq.prototype={
$1(d){var x=this.a
x.x=D.aTz
x.y.I(0,D.aTz)},
$S:75}
B.cvr.prototype={
$1(d){var x=this.a
x.ak1(A.a43(d.data)).bD(new B.cvo(x),y.b)},
$S:75}
B.cvo.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cvs.prototype={
$1(d){},
$S:75}
B.cvv.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.icC(d.channel))},
$S:17}
B.cvw.prototype={
$1(d){},
$S:17}
B.cvx.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iwz(w.iceConnectionState)
x.cx=w
if($.huq())switch(w.a){case 0:x.cy=D.aTF
break
case 1:x.cy=D.aTG
break
case 3:x.cy=D.aTH
break
case 5:x.cy=D.aTD
break
case 6:x.cy=D.aTE
break
case 7:x.cy=D.abd
break
default:break}},
$S:107}
B.cvy.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iwA(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:107}
B.cvz.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iHn(w.signalingState)},
$S:107}
B.cvA.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iFu(w.connectionState)},
$S:107}
B.cvB.prototype={
$1(d){},
$S:107}
B.cvC.prototype={
$1(d){},
$S:17}
B.fGF.prototype={
$1(d){var x=y.F.a(new A.qK([],[]).oa(d.target.result,!1)),w=C.x3.q(x.objectStoreNames,"blobs")
if(!w)C.x0.GN(x,"blobs")},
$S:181}
B.h6r.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xH.fl(this.b)
$.eX.mN()
this.c.$1(d)},
$S:452}
B.h6t.prototype={
$1(d){return this.a.$1(B.im0(this.b,this.c))},
$S:33}
B.h6s.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h6q.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h6G.prototype={
$1(d){var x=this
return B.hGX(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h6H.prototype={
$1(d){var x=this
return B.hGX(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJl.prototype={
$1(d){var x=this
return B.cgZ(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dgJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dgG.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgZ(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dgI.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgZ(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dgH.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cgZ(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dgL.prototype={
$4(d,e,f,g){var x=null
return A.kf(A.A(A.a([A.aH(x,x,x,x,D.bZe,x,x,x,new B.dgK(d),x,x,x,x,x,x),A.E(A.FY(D.To,!0,x,!1,C.a4A,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.h,0,x,x),D.To,x,g,C.apo,0,e,f)},
$C:"$4",
$R:4,
$S:422}
B.dgK.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fLk.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.f4,y.m).w,t=this.a,s=t?C.iZ:C.c,r=A.m(28),q=A.p(v,D.bBx,C.f,v,v,D.bap,v,v,v,v,D.ap9,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c2H,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.p(v,A.w(A.a([q,new A.C(C.Dk,A.w(A.a([o,C.af,A.aN(v,C.M,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bB(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.au0,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.al,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a7,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fLi(d),v),1),C.ar,A.E(A.bH(D.h4P,v,new B.fLj(p,x,d),A.bp(C.b6,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.h,0,v,v)],w),C.l,v,C.e,C.h,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.m),v,v,v,C.HI,v,v,v,v),v)},
$S:62}
B.fLi.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.fLj.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.T(D.fBN)
return}x=w.b.a.a
A.a8(w.c,!1).N(new B.aFa(v,x))},
$S:0}
B.fLO.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.f4,y.m).w,u=x.a,t=u?C.iZ:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.p(w,A.w(A.a([A.p(w,D.bBn,C.f,w,w,D.bbU,w,w,w,w,D.ap9,w,w,1/0),new A.C(C.Dk,A.w(A.a([A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.hq_(u,"Organization name",C.Ii,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.hq_(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.R,A.aN(w,C.M,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.hq_(u,"Member password",C.E4,w),C.y,!0,w,!0,w,!1,w,C.al,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a7,w,C.ao,w,w,w,w),C.bx,A.bH(D.hdu,w,new B.fLN(r,q,p,d),A.bp(C.az,w,w,w,w,C.ht,w,w,w,w,w,w))],o),C.l,w,C.e,C.h,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.m),w,w,w,C.HI,w,w,w,w),w)},
$S:62}
B.fLN.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.T(D.fBS)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a8(v.d,!1).N(new B.aIr(u,x,w))},
$S:0}
B.cgQ.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a1(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.Y(j,"http")?A.cG(j,0,null):s.b.aY(j)
u=4
x=7
return A.b(A.wb(p,null).d7(0,C.a1D),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cx(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ac(h)
$.an.$1("[doc share lan web] "+A.v(r)+": "+A.v(m))
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
B.cgW.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgX.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cgY.prototype={
$1(d){return d.b},
$S:z+2}
B.cgS.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cgT.prototype={
$1(d){return d.b},
$S:z+2}
B.cgR.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:14}
B.cgU.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cgV.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h6E.prototype={
$1(d){return new B.WN(this.a,null)},
$S:z+11}
B.h6F.prototype={
$1(d){return new B.WR(this.a,this.b,this.c,null)},
$S:z+12}
B.e3n.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e4w.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e4x.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e4y.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e4v(x,d))},
$S:2}
B.e4v.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4z.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4A.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e4B.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e4C.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e4D.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e4E.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e4H.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.e4F.prototype={
$1(d){var x=this.a
return x.f?null:x.a0z()},
$S:2}
B.e4G.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.az.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.mU(D.TG))s=C.vB
else s=C.a.Y(s,"video/")||d.mU(D.ns)?C.rx:D.ask
x=this.b.a
w=y.p
return new A.C(C.k_,A.A(A.a([A.p(v,A.V(s,C.az,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.N,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gasP(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.h,0,C.p),1)],w),C.l,v,C.e,C.h,0,v,v),v)},
$S:z+13}
B.e3o.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e3p.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ch_.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.ch0.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:102}
B.h7F.prototype={
$2(d,e){return e===this.a},
$S:245}
B.fDD.prototype={
$1(d){return J.k(d)},
$S:15}
B.fJx.prototype={
$1(d){var x=this.b
B.ijV(C.I6.ga8x(this.a)).bD(x.gCz(x),y.H)},
$S:132}
B.fJy.prototype={
$1(d){return this.a.dh(0,null)},
$S:132}
B.fJz.prototype={
$0(){return null},
$S:12}
B.che.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJA.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a_(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.W(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jU(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fNT.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fHJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fHK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.chj.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.hbY.prototype={
$1(d){return new B.a0c(this.a,null)},
$S:z+16}
B.dgF.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:7}
B.dgD.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a8(w,!1).N(x)
return null},
$S:2}
B.dgE.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4u.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a2S()},
$S:10}
B.e3S.prototype={
$0(){var x=J.bJS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3T.prototype={
$0(){var x=J.bJS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3r.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3q(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHN(this.c)}},
$S:0}
B.e3q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e3s.prototype={
$0(){var x=J.bJS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e3x.prototype={
$0(){var x=this.a,w=C.d.bl(x.d,new B.e3w(this.b))
if(w>=0){x=x.d
x[w]=x[w].aHN(this.c)}},
$S:0}
B.e3w.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4i.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e4j.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e3P.prototype={
$1(d){return new B.WO(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e3M.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Jc(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.WS(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uA(),$async$$0)
case 5:s=J.a1(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a32(s.gJ(t)),$async$$0)
case 8:case 7:r.ir(s.gar(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3v.prototype={
$1(d){this.a.aek(d,"No files selected.","Added")},
$S:452}
B.e3X.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a6(0)
else w.u(0,new A.O(x,new B.e3W(),A.U(x).k("O<1,n>")))},
$S:0}
B.e3W.prototype={
$1(d){return d.a},
$S:z+2}
B.e3B.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y3.cq().d3c(C.a3w,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k_(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ir("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.ir("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asd(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cx(l)){o.ir("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uA(),$async$$0)
case 9:o.ir("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e4f.prototype={
$1(d){return new B.Rd(this.a.a.c,this.b,null)},
$S:z+7}
B.e4g.prototype={
$1(d){return new B.a0e(this.a.a.c,this.b,null)},
$S:z+18}
B.e4h.prototype={
$1(d){return new B.a0b(this.a.a.c,this.b,null)},
$S:z+19}
B.e3N.prototype={
$1(d){return new B.Rd(this.a.a.c,this.b,null)},
$S:z+7}
B.e3O.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.I(0,w)},
$S:0}
B.e48.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Jc(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a99(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ir("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cwn(),$async$$0)
case 5:x=6
return A.b(p.uA(),$async$$0)
case 6:r=A.U(t).k("O<1,n>")
r=new A.O(new A.O(t,new B.e44(p),r),new B.e45(),r.k("O<aj.E,n>")).c0(0,new B.e46())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a8(t,!1).ca(A.e7(new B.e47(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pS(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.WY(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e44.prototype={
$1(d){var x=this.a,w=C.d.bl(x.d,new B.e43(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e43.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e45.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e46.prototype={
$1(d){return d.length!==0},
$S:3}
B.e47.prototype={
$1(d){var x=this.a
return new B.a0g(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e49.prototype={
$1(d){return d.a},
$S:z+2}
B.e4a.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e42.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.az.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gasP(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.mU(D.ns)?C.tX:C.of
p=!x||p.mU(D.ns)?"Play video":"View"
return new A.bP(new A.o(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lu,v,v,C.m),C.bm,A.bo(!0,new A.C(C.Df,A.w(A.a([q,o,t,C.aB,B.a0f(!1,u,!1,w,p,new B.e3Y(d),v),B.a0f(!1,u,!1,C.jK,"Share via QR",new B.e3Z(d),"Letters/numbers QR code"),B.a0f(!1,u,!1,D.a4F,"Send to their Code",new B.e4_(d),"Enter someone else's personal code"),B.a0f(!1,u,!1,C.hP,"Download / save",new B.e40(d),v),C.aj,B.a0f(!1,u,!0,C.eq,"Delete",new B.e41(d),v)],y.p),C.am,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:746}
B.e3Y.prototype={
$0(){A.a8(this.a,!1).N("view")
return null},
$S:0}
B.e3Z.prototype={
$0(){A.a8(this.a,!1).N("qr")
return null},
$S:0}
B.e4_.prototype={
$0(){A.a8(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e40.prototype={
$0(){A.a8(this.a,!1).N("save")
return null},
$S:0}
B.e41.prototype={
$0(){A.a8(this.a,!1).N("delete")
return null},
$S:0}
B.e3y.prototype={
$1(d){return d.a},
$S:z+2}
B.e3z.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e3A.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9b(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HG(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pS(s.c,s.f),$async$$0)
case 4:u.ir(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3u.prototype={
$1(d){var x=this.a
x.uB(new B.e3t(x,d,this.b),"Preparing\u2026")},
$S:452}
B.e3t.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ir("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.WS(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cx(s)){t.ir("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bIM(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ir("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3Q.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e3R.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aQ(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hkx(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3K.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HE(new B.e3G(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ir("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e3H(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e3I(s))
case 5:x=8
return A.b(r.b.ie(0,C.HD,new B.e3J()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.ir("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uA(),$async$$0)
case 9:s.ir("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3G.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3D(x,d,e))},
$S:184}
B.e3D.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3H.prototype={
$1(d){return new B.aer(this.a.a,null)},
$S:z+21}
B.e3I.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e3J.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e3L.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JE(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9_(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b5o(B.JE(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asd(new B.e3E(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cx(r)){if(B.hkw(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ir(q)
x=1
break}x=10
return A.b(s.uA(),$async$$0)
case 10:o=J.cJ(r)
p=o.eU(r,new B.e3F()).gJ(0)
s.ir(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e3E.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e3C(x,d,e))},
$S:184}
B.e3C.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e3F.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.e3V.prototype={
$1(d){return new B.a0h(this.a.a.c,null)},
$S:z+23}
B.e3U.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b32(u.a.c,v.b),$async$$0)
case 2:t.ir(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4e.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.o(v[2],x,new A.bE(new A.ax(C.az.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lu,x,x,C.m),C.bm,A.bo(!0,new A.C(C.Df,A.w(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a0f(!0,w,!1,C.mC,"My Code",new B.e4b(d),"Your personal code & QR \u2014 others send docs to you"),B.a0f(!1,w,!1,D.a4F,"Send to their Code",new B.e4c(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0f(!1,w,!1,V.Aj,"Import backup",new B.e4d(d),".ngmydoc file from another device")],y.p),C.am,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:746}
B.e4b.prototype={
$0(){A.a8(this.a,!1).N("my_code")
return null},
$S:0}
B.e4c.prototype={
$0(){A.a8(this.b,!1).N(null)
this.a.bIX()},
$S:0}
B.e4d.prototype={
$0(){A.a8(this.a,!1).N("import")
return null},
$S:0}
B.e4r.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JO(D.To,x,C.a4A,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d3(C.d.gG(D.To).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.h,0,x,x)},
$C:"$4",
$R:4,
$S:726}
B.e4p.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.e4q.prototype={
$0(){this.a.akY()
return null},
$S:0}
B.e4s.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*10)),e)},
$S:92}
B.e4t.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aet(e,w,v,this.b,x.e,x.ceT(w),new B.e4l(x,w),new B.e4m(x,v,w),new B.e4n(x,w),new B.e4o(x,w),null)},
$S:z+24}
B.e4l.prototype={
$0(){this.a.aib(this.b)
return null},
$S:0}
B.e4m.prototype={
$0(){var x=this.a
return x.l(new B.e4k(x,this.b,this.c))},
$S:0}
B.e4k.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.I(0,w)},
$S:0}
B.e4n.prototype={
$0(){this.a.Pk(this.b)
return null},
$S:0}
B.e4o.prototype={
$0(){this.a.akL(this.b)
return null},
$S:0}
B.dgB.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*18)),e)},
$S:92}
B.dgC.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:112}
B.dgZ.prototype={
$3(d,e,f){return A.d2(A.dQ(f,new A.r(0,(1-e)*14)),e)},
$S:92}
B.dgY.prototype={
$1(d){return this.a.y.$0()},
$S:87}
B.dgV.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dgW.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dgX.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.dgT.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.h7(w,C.z,x,new B.dgR(this.a),C.hf,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.dgS(this.a))
return C.bK},
$S:151}
B.dgR.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgP(this.a))
return C.bK},
$S:201}
B.dgP.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgM(x))},
$S:7}
B.dgM.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgS.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgO(x))},
$S:7}
B.dgO.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgU.prototype={
$3(d,e,f){$.aS.U$.push(new B.dgQ(this.a))
return C.bK},
$S:201}
B.dgQ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.dgN(x))},
$S:7}
B.dgN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dgy.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgx(x,d))},
$S:1818}
B.dgx.prototype={
$0(){return this.a.f=this.b===C.wc},
$S:0}
B.dgz.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgw(x,d))},
$S:7}
B.dgw.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dgA.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dgv(x,d))},
$S:7}
B.dgv.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dgr.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dgs.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dgt.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dgu.prototype={
$1(d){return this.a.d.Od(0,A.du(0,0,0,C.i.S(d),0,0))},
$S:6}
B.dhb.prototype={
$0(){var x=this.a.a
return B.t8(x.c,x.d)},
$S:1819}
B.dhc.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dhd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dhe.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dhf.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.dhg.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dhi.prototype={
$0(){var x=this.a
x.l(new B.dhh(x))},
$S:0}
B.dhh.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hn(0)
else x.qz(0)},
$S:0}
B.dh7.prototype={
$1(d){return this.a.Sg(this.b)},
$S:10}
B.dh8.prototype={
$1(d){return this.a.Sf(this.b)},
$S:10}
B.dh_.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dh0.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dh1.prototype={
$1(d){return D.hPm},
$S:z+25}
B.dh6.prototype={
$2(d,e){if(d)B.WY()},
$S:133}
B.dh2.prototype={
$0(){return this.a.ac6(this.b)},
$S:0}
B.dh3.prototype={
$0(){return this.a.ac3(this.b)},
$S:0}
B.dh4.prototype={
$0(){return this.a.agA(this.b)},
$S:0}
B.dh5.prototype={
$0(){return this.a.a3G(this.b)},
$S:0}
B.dgq.prototype={
$0(){A.a8(this.a,!1).N(null)
return null},
$S:0}
B.dha.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qC(),$async$$0)
case 2:u.l(new B.dh9(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dh9.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.chl.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.mU(D.ns)},
$S:z+1}
B.chm.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.chk.prototype={
$2(d,e){return this.bpi(d,e)},
bpi(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.WZ(u.c,A.J(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1820}
B.fNv.prototype={
$1(d){if(d===D.abc&&(this.a.a.a&30)===0)this.a.h4(0)},
$S:z+27}
B.fNw.prototype={
$0(){},
$S:12}
B.fO6.prototype={
bqX(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fAE(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a6(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hBZ(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bqX(d,e)},
$S:557}
B.fO5.prototype={
$1(d){var x=this
d.b=new B.fO4(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fO4.prototype={
$1(d){return this.bqW(d)},
bqW(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
n=d.b
n===$&&A.d()
x=n?7:8
break
case 7:n=s.a.c
m=d.a
x=n!=null?9:11
break
case 9:m===$&&A.d()
x=12
return A.b(B.b33(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.V.aP(0,n,null)
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
return A.b(B.fAE(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a6(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ac(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a98(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dh(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aCv.prototype,"gcmP","RR",0)
x(v,"gcnK","Ks",0)
x(v,"gcne","z1",0)
x(v=B.aGz.prototype,"gceN","agy",0)
x(v,"gceO","a0y",0)
x(v,"gcD1","aks",0)
x(v=B.aGC.prototype,"gceP","a0z",0)
x(v,"gcD2","a43",0)
x(B.aGA.prototype,"gceQ","agz",0)
x(B.aCu.prototype,"gceV","ceW",4)
x(v=B.aGB.prototype,"gcnf","a1T",0)
x(v,"gcBy","cBz",4)
x(v,"gb6v","aCc",0)
x(v,"gcEx","akS",0)
x(v,"gbVx","Zh",0)
x(v,"gceU","Ff",0)
x(B.aCw.prototype,"gbal","a42",0)
x(B.aCt.prototype,"gceX","a0A",0)
x(v=B.aCz.prototype,"gb5b","cln",4)
x(v,"gceR","agC",0)
x(v=B.aCx.prototype,"gcAs","a3M",0)
x(v,"gb30","agB",0)
w(B.aCs.prototype,"gaAA","aAB",8)
x(v=B.aCy.prototype,"gcq4","aiF",0)
x(v,"gbV0","acV",0)
w(v,"gaAA","aAB",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aG,[B.cvt,B.abA,B.awN,B.aFa,B.aIr,B.jU,B.ae9,B.bAr,B.Gb,B.Ze])
w(B.cvu,B.cvt)
w(B.b8g,B.abA)
x(A.hp,[B.cvp,B.cvq,B.cvr,B.cvo,B.cvs,B.cvv,B.cvw,B.cvx,B.cvy,B.cvz,B.cvA,B.cvB,B.cvC,B.fGF,B.h6r,B.h6t,B.h6s,B.h6G,B.h6H,B.fJl,B.dgG,B.dgI,B.dgH,B.dgL,B.fLk,B.fLO,B.cgQ,B.cgX,B.cgY,B.cgT,B.cgR,B.cgU,B.cgV,B.h6E,B.h6F,B.e4y,B.e4H,B.e4F,B.e4G,B.fDD,B.fJx,B.fJy,B.che,B.fJA,B.fNT,B.fHJ,B.fHK,B.chj,B.hbY,B.dgF,B.dgD,B.e4u,B.e3q,B.e3w,B.e3P,B.e3v,B.e3W,B.e4f,B.e4g,B.e4h,B.e3N,B.e44,B.e43,B.e45,B.e46,B.e47,B.e49,B.e4a,B.e42,B.e3y,B.e3z,B.e3u,B.e3Q,B.e3H,B.e3F,B.e3V,B.e4e,B.e4r,B.e4s,B.dgB,B.dgC,B.dgZ,B.dgY,B.dgT,B.dgR,B.dgP,B.dgS,B.dgU,B.dgQ,B.dgy,B.dgz,B.dgA,B.dgu,B.dh7,B.dh8,B.dh1,B.chl,B.chm,B.fNv,B.fO5,B.fO4])
w(B.b8h,B.awN)
x(A.iW,[B.h6q,B.dgJ,B.dgK,B.fLi,B.fLj,B.fLN,B.e3n,B.e4w,B.e4x,B.e4v,B.e4z,B.e4A,B.e4B,B.e4C,B.e4D,B.e4E,B.e3o,B.e3p,B.fJz,B.dgE,B.e3S,B.e3T,B.e3r,B.e3s,B.e3x,B.e4i,B.e4j,B.e3M,B.e3X,B.e3B,B.e3O,B.e48,B.e3Y,B.e3Z,B.e4_,B.e40,B.e41,B.e3A,B.e3t,B.e3R,B.e3K,B.e3D,B.e3I,B.e3J,B.e3L,B.e3C,B.e3U,B.e4b,B.e4c,B.e4d,B.e4p,B.e4q,B.e4l,B.e4m,B.e4k,B.e4n,B.e4o,B.dgV,B.dgW,B.dgX,B.dgM,B.dgO,B.dgN,B.dgx,B.dgw,B.dgv,B.dgr,B.dgs,B.dgt,B.dhb,B.dhc,B.dhd,B.dhe,B.dhf,B.dhg,B.dhi,B.dhh,B.dh_,B.dh0,B.dh2,B.dh3,B.dh4,B.dh5,B.dgq,B.dha,B.dh9,B.fNw])
x(A.lk,[B.aes,B.ON,B.abB,B.PX,B.Zd,B.PW,B.Gc])
x(A.af,[B.a0d,B.WN,B.WR,B.WO,B.a0c,B.WP,B.a0e,B.a0b,B.Rd,B.a0g,B.a0a,B.a0h])
x(A.ah,[B.aCv,B.aGz,B.aGC,B.aGA,B.aCu,B.aGB,B.aCw,B.aCt,B.aCz,B.aCx,B.aCs,B.aCy])
x(A.aw,[B.aeW,B.aCr,B.bhS,B.aet,B.aer,B.bhT])
x(A.iX,[B.cgW,B.cgS,B.ch_,B.ch0,B.h7F,B.e3G,B.e3E,B.e4t,B.dh6,B.chk,B.fO6])
x(A.jo,[B.bno,B.bA3])})()
A.jf(b.typeUniverse,JSON.parse('{"b8g":{"abA":[]},"b8h":{"awN":[]},"a0d":{"af":[],"x":[]},"aCv":{"ah":["a0d"]},"aeW":{"aw":[],"x":[]},"WN":{"af":[],"x":[]},"WR":{"af":[],"x":[]},"aGz":{"ah":["WN"]},"aGC":{"ah":["WR"]},"bno":{"jo":[]},"WO":{"af":[],"x":[]},"aGA":{"ah":["WO"]},"a0c":{"af":[],"x":[]},"WP":{"af":[],"x":[]},"aet":{"aw":[],"x":[]},"a0e":{"af":[],"x":[]},"a0b":{"af":[],"x":[]},"Rd":{"af":[],"x":[]},"a0g":{"af":[],"x":[]},"aer":{"aw":[],"x":[]},"a0a":{"af":[],"x":[]},"a0h":{"af":[],"x":[]},"aCu":{"ah":["a0c"]},"bA3":{"jo":[]},"aGB":{"ah":["WP"]},"aCr":{"aw":[],"x":[]},"bhS":{"aw":[],"x":[]},"aCw":{"ah":["a0e"]},"aCt":{"ah":["a0b"]},"aCz":{"ah":["Rd"]},"aCx":{"ah":["a0g"]},"aCs":{"ah":["a0a"]},"aCy":{"ah":["a0h"]},"bhT":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("mV"),k:x("N7()"),o:x("bm<n,n>"),F:x("rK"),g:x("az<jU?>"),x:x("az<~>"),V:x("N<aa>"),O:x("N<u>"),W:x("N<bl>"),Y:x("N<a9<n,P>>"),t:x("N<a9<n,@>>"),r:x("N<jU>"),w:x("N<+file,name(me,n)>"),u:x("N<d3>"),s:x("N<n>"),E:x("N<jo>"),a:x("N<dF>"),p:x("N<x>"),Z:x("N<G>"),G:x("bl"),A:x("cB<ah<af>>"),n:x("ai<jU>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bw<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("im"),e:x("iLs"),af:x("Fn"),U:x("jU"),b:x("cp"),C:x("aG"),aK:x("wW"),ab:x("Gb"),br:x("awN"),v:x("Ze"),N:x("n"),X:x("bq<H>"),Q:x("mq"),D:x("dF"),aw:x("bg<n>"),cd:x("X<a9<n,@>>"),c7:x("x"),ch:x("cb<ai<jU>>"),aW:x("cb<dF?>"),aY:x("cb<~>"),cx:x("aes"),b1:x("bn<ai<jU>>"),cf:x("bn<dF?>"),d4:x("bn<~>"),c4:x("aFa"),bG:x("aIr"),q:x("l2"),B:x("q5<Gb>"),c6:x("q5<abB>"),y:x("P"),i:x("H"),z:x("@"),S:x("G"),aQ:x("bl?"),_:x("ai<jU>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jU?"),R:x("aG?"),c:x("Ze?"),d:x("+answerQr,transfer(n,az<ai<jU>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,ON,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dF?"),cm:x("ae9?"),bk:x("aFa?"),ag:x("aIr?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b8N=new A.ax(C.az,2,C.r,-1)
D.ccD=new A.a6(C.a5,C.a9,C.w,C.a6D,null,null)
D.bap=new A.o(null,null,null,C.n0,null,D.ccD,C.m)
D.bbU=new A.o(null,null,null,C.n0,null,E.J4,C.m)
D.ahS=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajn=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akp=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amd=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h_p=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hes=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.drO=x([D.h_p,C.aj,D.hes],y.p)
D.bBd=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.drO,null)
D.hj0=new A.D("Create your organization",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h40=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dKb=x([D.hj0,C.aj,D.h40],y.p)
D.bBn=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dKb,null)
D.hf6=new A.D("Team Member sign-in",null,C.fS,null,null,null,null,null,null,null,null,null)
D.h80=new A.D("Enter the access code and password from your organization.",null,H.FJ,null,null,null,null,null,null,null,null,null)
D.dHI=x([D.hf6,C.aj,D.h80],y.p)
D.bBx=new A.fv(C.ah,C.e,C.h,C.B,null,C.p,null,0,D.dHI,null)
D.bHP=new A.R(16,10,16,28)
D.bJc=new A.R(20,0,20,16)
D.bJK=new A.R(20,8,20,16)
D.ap9=new A.R(24,22,24,20)
D.a4F=new A.a0(63394,"MaterialIcons",!1)
D.ask=new A.a0(63515,"MaterialIcons",!1)
D.bX8=new A.a0(983813,"MaterialIcons",!1)
D.bUf=new A.a0(62867,"MaterialIcons",!1)
D.bY8=new A.ae(D.bUf,44,C.c,null,null,null)
D.bZe=new A.ae(C.km,null,C.ab,null,null,null)
D.c_D=new A.ae(C.jL,18,null,null,null,null)
D.c1u=new A.ae(D.a4F,26,C.c,null,null,null)
D.c25=new A.ae(C.DW,null,null,null,null,null)
D.c2H=new A.ae(C.E1,null,null,null,null,null)
D.c3U=new A.ae(Z.a4P,null,null,null,null,null)
D.c4f=new A.ae(C.i4,16,null,null,null,null)
D.c7X=new A.ae(C.tW,16,null,null,null,null)
D.bYq=new A.ae(C.mC,null,null,null,null,null)
D.c8P=new A.ef(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYq,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c3e=new A.ae(C.Ii,null,null,null,null,null)
D.c8U=new A.ef(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c3e,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bYM=new A.ae(C.E4,null,null,null,null,null)
D.c94=new A.ef(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bYM,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cZc=x([C.fz,C.b6,C.az],y.O)
D.ceA=new A.a6(C.aw,C.aD,C.w,D.cZc,null,null)
D.cYy=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.To=x([C.fz,C.az],y.O)
D.TG=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ns=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dBr=x([C.nb,C.az],y.O)
D.eAf={iceServers:0}
D.aO5={urls:0}
D.dO7=new A.bm(D.aO5,["stun:stun.l.google.com:19302"],y.o)
D.dO6=new A.bm(D.aO5,["stun:stun1.l.google.com:19302"],y.o)
D.dgi=x([D.dO7,D.dO6],A.as("N<a9<n,n>>"))
D.dNc=new A.bm(D.eAf,[D.dgi],A.as("bm<n,@>"))
D.Kc=new B.ON(0,"lanDirect")
D.V2=new B.ON(1,"cloudStash")
D.e3h=new B.ON(2,"inlineInstant")
D.V3=new B.ON(3,"webrtcLink")
D.B5=new B.ON(4,"videoCloud")
D.her=new A.D("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cO5=x([E.au9,C.aa,D.her],y.p)
D.fsi=new A.c0(C.aK,C.bc,C.h,C.l,null,C.p,null,0,D.cO5,null)
D.eHJ=new A.C(C.cq,D.fsi,null)
D.fQE=new A.F(!0,C.c,null,null,null,null,null,C.N,null,null,null,null,null,null,null,null,null,null,null,null,null,null,W.Jz,null,null,null)
D.h01=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fQE,null,C.K,null,null,null,null,null,null,null)
D.eGT=new A.C(C.zD,D.h01,null)
D.bgu=new A.cn(C.z,null,null,D.eGT,null)
D.eO1=new A.cR(0,null,0,28,null,null,D.bgu,null)
D.eOl=new B.abB(0,"RTCDataChannelConnecting")
D.aTz=new B.abB(1,"RTCDataChannelOpen")
D.aTA=new B.abB(3,"RTCDataChannelClosed")
D.eOm=new B.Gc(0,"RTCIceConnectionStateNew")
D.eOn=new B.Gc(1,"RTCIceConnectionStateChecking")
D.eOo=new B.Gc(2,"RTCIceConnectionStateCompleted")
D.eOp=new B.Gc(3,"RTCIceConnectionStateConnected")
D.eOq=new B.Gc(4,"RTCIceConnectionStateCount")
D.eOr=new B.Gc(5,"RTCIceConnectionStateFailed")
D.eOs=new B.Gc(6,"RTCIceConnectionStateDisconnected")
D.aTB=new B.Gc(7,"RTCIceConnectionStateClosed")
D.aTC=new B.Zd(0,"RTCIceGatheringStateNew")
D.eOt=new B.Zd(1,"RTCIceGatheringStateGathering")
D.abc=new B.Zd(2,"RTCIceGatheringStateComplete")
D.abd=new B.PW(0,"RTCPeerConnectionStateClosed")
D.aTD=new B.PW(1,"RTCPeerConnectionStateFailed")
D.aTE=new B.PW(2,"RTCPeerConnectionStateDisconnected")
D.aTF=new B.PW(3,"RTCPeerConnectionStateNew")
D.aTG=new B.PW(4,"RTCPeerConnectionStateConnecting")
D.aTH=new B.PW(5,"RTCPeerConnectionStateConnected")
D.eOu=new B.PX(0,"RTCSignalingStateStable")
D.eOv=new B.PX(1,"RTCSignalingStateHaveLocalOffer")
D.eOw=new B.PX(2,"RTCSignalingStateHaveRemoteOffer")
D.eOx=new B.PX(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eOy=new B.PX(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aTI=new B.PX(5,"RTCSignalingStateClosed")
D.fxr=new A.av(160,48)
D.bhK=new A.fs(2,null,null,null,null,C.az,null,null,null,null)
D.fyZ=new A.a4(16,16,D.bhK,null)
D.h3l=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fAs=new A.b3(D.h3l,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hb4=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fAw=new A.b3(D.hb4,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hk4=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fAD=new A.b3(D.hk4,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h2V=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.b3(D.h2V,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hfi=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aWV=new A.b3(D.hfi,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgM=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fBw=new A.b3(D.hgM,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlz=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBN=new A.b3(D.hlz,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hju=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fBS=new A.b3(D.hju,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkK=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fCF=new A.b3(D.hkK,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1v=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fDc=new A.b3(D.h1v,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hd_=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fDx=new A.b3(D.hd_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5G=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fE3=new A.b3(D.h5G,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hlE=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fE7=new A.b3(D.hlE,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h1L=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fEd=new A.b3(D.h1L,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0o=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fEs=new A.b3(D.h0o,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fY2=new A.D("NGMY DOC SHARE",null,C.aYl,null,null,null,null,null,null,null,null,null)
D.fZu=new A.D("Show this to sender",null,C.iX,null,null,null,null,null,null,null,null,null)
D.h_x=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h4r=new A.D("Organization settings",null,C.cJ,null,null,null,null,null,null,null,null,null)
D.h4P=new A.D("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.h5R=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.h6o=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.h9h=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hc7=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hcr=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hcM=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hdn=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdu=new A.D("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hdT=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hhh=new A.D("Share files & videos\nwith a scan.",null,C.aYo,null,null,null,null,null,null,null,null,null)
D.hhB=new A.D("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hPm=new B.a0a(null)
D.aeD=new B.aes(0,"docShare")
D.aeE=new B.aes(1,"gate")
D.Y7=new B.aes(2,"gateNoIndividual")})();(function staticFields(){$.aRm=null
$.fya=function(){var x=y.N
return A.S(x,x)}()
$.Hs=A.S(y.N,y.D)
$.aiB=A.S(y.N,A.as("me"))
$.SE=A.S(y.N,y.D)
$.fyR=A.S(y.N,A.as("ae9"))
$.chd=A.S(y.S,A.as("bAr"))
$.hBY=1
$.is9=null
$.is8=null
$.ijd=null
$.hqb=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iLY","hV5",()=>new B.cvu())
x($,"iJR","huq",()=>C.a.q(A.by(A.by(A.by(A.HY(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["hlaws9Si/yHYx0cbGyaWhsklcqU="]=a.current})($__dart_deferred_initializers__);