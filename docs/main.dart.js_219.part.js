((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cd3:function cd3(){},
hmm(d){var x=null,w=new B.b0a(d,D.dRn,new A.oR(x,x,y.c6),new A.oR(x,x,y.B))
w.brK(d)
return w},
b0a:function b0a(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ccZ:function ccZ(d){this.a=d},
cd_:function cd_(d){this.a=d},
cd0:function cd0(d){this.a=d},
ccY:function ccY(d){this.a=d},
cd1:function cd1(d){this.a=d},
hmn(d,e){var x=y.N
x=new B.b0b(d,e,A.R(x,y.e),A.R(x,y.z))
x.brL(d,e)
return x},
b0b:function b0b(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cd4:function cd4(d){this.a=d},
cd5:function cd5(d){this.a=d},
cd6:function cd6(d){this.a=d},
cd7:function cd7(d){this.a=d},
cd8:function cd8(d){this.a=d},
cd9:function cd9(d){this.a=d},
cda:function cda(d){this.a=d},
cdb:function cdb(d){this.a=d},
fEs(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.O(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_doc_share_v1",new B.f2T(),1)},
hsQ(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eP(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AX(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aE(d)
return x}catch(w){return v}return v},
Pb(d,e){return B.hHk(d,e)},
hHk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKc
x=7
return A.b(o==null?$.aKc=B.fEs():o,$async$Pb)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mg(s,"blobs","readwrite")
C.im.lL(J.me(q,"blobs"),r,d)
x=8
return A.b(J.oZ(q),$async$Pb)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.al.$1("[doc share idb put] "+A.t(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pb,w)},
Pa(d){return B.hHj(d)},
hHj(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKc
x=7
return A.b(o==null?$.aKc=B.fEs():o,$async$Pa)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.im.yu(J.me(r,"blobs"),d),$async$Pa)
case 8:q=f
x=9
return A.b(J.oZ(r),$async$Pa)
case 9:o=B.hsQ(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.al.$1("[doc share idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pa,w)},
aeg(d){return B.hHi(d)},
hHi(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aeg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKc
x=7
return A.b(p==null?$.aKc=B.fEs():p,$async$aeg)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.im.Ep(J.me(r,"blobs"),d)
x=8
return A.b(J.oZ(r),$async$aeg)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aeg,w)},
f2T:function f2T(){},
hv1(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bkh(w,v))}return u},
h2y(d,e){var x,w={},v=A.aSh("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fnB(w,v,e)
C.uI.xm(v,"change",new B.fnD(w,v,!1))
C.uI.xm(v,"cancel",new B.fnC(w))
$.eI.lU()
v.click()
A.bK(C.abH,new B.fnA(w),y.H)},
fnB:function fnB(d,e,f){this.a=d
this.b=e
this.c=f},
fnD:function fnD(d,e,f){this.a=d
this.b=e
this.c=f},
fnC:function fnC(d){this.a=d},
fnA:function fnA(d){this.a=d},
BG(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BG=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRJ()?3:4
break
case 3:x=5
return A.b(B.fYO(e,d,s,!0,!1,f,g,h,!1,i),$async$BG)
case 5:x=1
break
case 4:x=6
return A.b(B.OP(d,s,f,g,h,i),$async$BG)
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
return A.b(B.GK(s,d),$async$BG)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.eZs(s,d),$async$BG)
case 14:x=12
return A.b(r.fYO(q,p,o,n,m,l,k,j,a1,i),$async$BG)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cr(A.eH(new B.fnQ(s,i,d,f,g,h),!1,null,y.H)),$async$BG)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cr(A.eH(new B.fnR(s,i,d,f,g,h),!1,null,y.H)),$async$BG)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BG,w)},
OP(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OP=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVW(e),$async$OP)
case 3:u=k
x=4
return A.b(B.amg(d,e,!1),$async$OP)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GK(e,d),$async$OP)
case 7:if(k){v=D.a5a
x=1
break}x=8
return A.b(B.SI(e),$async$OP)
case 8:v=t?D.RB:D.a5b
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aVU(d,e)){v=D.a5a
x=1
break}x=11
return A.b(B.SI(e),$async$OP)
case 11:v=t?D.RB:D.a5b
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fzJ(d,e)){v=D.a5a
x=1
break}x=14
return A.b(B.SI(e),$async$OP)
case 14:v=D.RB
x=1
break
case 13:v=t?D.RB:D.a5b
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OP,w)},
eZs(d,e){var x=0,w=A.j(y.y),v
var $async$eZs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aVU(e,d)){v=!1
x=1
break}x=3
return A.b(B.aVW(d),$async$eZs)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZs,w)},
fYO(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cr(A.eH(new B.f4b(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fU3(d,e,f,g,h,i,j){return new B.WQ(e,j,d,g,h,i,f,null)},
f67(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f67=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6a(A.K(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f67)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f67,w)},
f6C(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f6C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6E(A.K(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f6C)
case 3:q=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
r.R$=u
r.O$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6C,w)},
fEA(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgd(d,e){var x=0,w=A.j(y.H),v
var $async$fgd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SI(e),$async$fgd)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eB()
case 1:return A.h(v,w)}})
return A.i($async$fgd,w)},
fnQ:function fnQ(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fnR:function fnR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9G:function a9G(d,e){this.a=d
this.b=e},
f4b:function f4b(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WQ:function WQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aw5:function aw5(){this.c=this.a=this.d=null},
cWd:function cWd(d,e){this.a=d
this.b=e},
cWa:function cWa(d){this.a=d},
cWc:function cWc(d){this.a=d},
cWb:function cWb(d){this.a=d},
cWf:function cWf(){},
cWe:function cWe(d){this.a=d},
aa7:function aa7(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayz:function ayz(d,e){this.a=d
this.b=e},
aBG:function aBG(d,e,f){this.a=d
this.b=e
this.c=f},
f6a:function f6a(d,e,f){this.a=d
this.b=e
this.c=f},
f68:function f68(d){this.a=d},
f69:function f69(d,e,f){this.a=d
this.b=e
this.c=f},
f6E:function f6E(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f6D:function f6D(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c1O(d,e,f,g,h){return B.hhn(d,e,f,g,h)},
hhn(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c1O=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gG(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c1P(s,e,h,g,f,q),y.g),y.l),$async$c1O)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c1O,w)},
aVR(d,e,f,g,h){return B.hho(d,e,f,g,h)},
hho(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aVR=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arr("GET",d)
o=A.fwd()
if(o==null)o=new A.JX(A.a([],y.W))
x=7
return A.b(o.eK(0,s).cJ(0,C.Do),$async$aVR)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ba(),$async$aVR)
case 8:q=j
if(J.aa(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Am(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
$.al.$1("[doc share pull url web] "+f+": "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVR,w)},
aVQ(d){return B.hhl(d)},
hhl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aVQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ut(d,null).cJ(0,C.nf),$async$aVQ)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aC(0,A.io(A.im(p.e)).c4(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share lan manifest web] "+A.t(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVQ,w)},
c1N(d){return B.hhm(d)},
hhm(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c1N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.ut(d,null).cJ(0,C.oV),$async$c1N)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c4(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a5(o)
$.al.$1("[doc share lan text web] "+A.t(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c1N,w)},
c1P:function c1P(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
j8:function j8(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
GI(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hht(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GI(C.a.aU(u,v.length))}return null},
hhu(d){var x=B.GI(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hhp(){var x,w=$.oX(),v=J.e_(5,y.S)
for(x=0;x<5;++x)v[x]=w.aG(10)
return C.d.fL(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(24)]},
a4t(d){return B.hhq(d)},
hhq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eU(d,null,!1,C.bD),$async$a4t)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[doc share my code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4t,w)},
a4u(d,e){return B.hhr(d,e)},
hhr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4u=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hs(d,e,!1,!1,C.cy,null),$async$a4u)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[doc share my code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4u,w)},
Al(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Al=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aw(),$async$Al)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GI(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4v(r),$async$Al)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4t("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Al)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GI(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Al)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hhp()
x=14
return A.b(B.a4v(m),$async$Al)
case 14:if(f!=null){x=12
break}l=new A.N(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4u("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Al)
case 15:k=f
x=16
return A.b(B.a4u("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.D(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Al)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Al)
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
return A.i($async$Al,w)},
a4v(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GI(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4t("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4v)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4v,w)},
a4w(d,e,f,g){return B.hhv(d,e,f,g)},
hhv(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4w=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GI(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4v(r),$async$a4w)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c1V())>1048576||g.be(d,new B.c1W())){v=B.D3(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4H("myCode",d,a0),$async$a4w)
case 4:u=a3
try{t=C.Q.aC(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.aa(s)!==g.gG(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.aa(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D3(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aVZ(u,g.gG(d),a0),$async$a4w)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oX().aG(9999)
k=n.b
j=g.gG(d)
i=y.N
h=g.di(d,new B.c1X(),i)
h=A.z(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aVS(A.D(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4w)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gG(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4w,w)},
D3(d,e,f,g,h){return B.hhs(d,e,f,g,h)},
hhs(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D3=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$D3)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c1R())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oX().aG(9999)
h=Date.now()
g=""+1000*h+"_"+C.cA.aG(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aI(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.GM(a9,q)
a0=new A.Ix(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D3)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.aa(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oq(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a7Y(a1.a,a4,"media",a1.d,a2).w3(m,n,new A.Cq(!0,q.c)),$async$D3)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D3)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMz(r),$async$D3)
case 16:v=!1
x=1
break
case 15:f.push(A.D(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gG(a6)
a1=l.di(a6,new B.c1S(),e)
a1=A.z(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aVS(A.D(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.N(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D3)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMz(r),$async$D3)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gG(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D3,w)},
aVS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aVS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4t(t),$async$aVS)
case 3:s=g
r=y.aL.a(J.q(s==null?A.D(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c1Q(),y.P)
r=A.z(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4u(t,A.D(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVS,w)},
Lt(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lt=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4t("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lt)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.Z(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aVT(k,a0),$async$Lt)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aVY(h),$async$Lt)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SP(g,a0),$async$Lt)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.aa(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.N(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("F.E")
e=A.z(new A.a4(r,new B.c1T(),q),n)
d=A.z(new A.a4(r,new B.c1U(),q),n)
q=A.z(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4u("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.D(["deliveries",q],p,o)),$async$Lt)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lt,w)},
aVT(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aVT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
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
o=A.aQ(o.h(p,"partCount"))
j=o==null?null:C.k.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hL2(k,j)
C.d.v(s,i)
x=5
return A.b(B.BE(l,m,"Received via My Code",t,e,i),$async$aVT)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMz(s),$async$aVT)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVT,w)},
c1V:function c1V(){},
c1W:function c1W(){},
c1X:function c1X(){},
c1R:function c1R(){},
c1S:function c1S(){},
c1Q:function c1Q(){},
c1T:function c1T(){},
c1U:function c1U(){},
fnN(d,e){var x=0,w=A.j(y.H)
var $async$fnN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cr(A.eH(new B.fnO(e),!1,null,y.H)),$async$fnN)
case 2:return A.h(null,w)}})
return A.i($async$fnN,w)},
byJ(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byJ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cr(A.eH(new B.fnP(g,e,f),!1,null,y.y)),$async$byJ)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byJ,w)},
fnO:function fnO(d){this.a=d},
fnP:function fnP(d,e,f){this.a=d
this.b=e
this.c=f},
SF:function SF(d,e){this.c=d
this.a=e},
azW:function azW(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dFD:function dFD(d,e){this.a=d
this.b=e},
SJ:function SJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azZ:function azZ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dGM:function dGM(d){this.a=d},
dGN:function dGN(d){this.a=d},
dGO:function dGO(d){this.a=d},
dGL:function dGL(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dGQ:function dGQ(d){this.a=d},
dGR:function dGR(d,e){this.a=d
this.b=e},
dGS:function dGS(d,e){this.a=d
this.b=e},
dGT:function dGT(d,e){this.a=d
this.b=e},
dGU:function dGU(d){this.a=d},
dGX:function dGX(){},
dGV:function dGV(d){this.a=d},
dGW:function dGW(d,e){this.a=d
this.b=e},
beF:function beF(){},
SG:function SG(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
azX:function azX(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dFE:function dFE(d){this.a=d},
dFF:function dFF(d){this.a=d},
fzK(d){var x=d.hC
if(x>=0)return C.o.M(x)
return 10},
hhx(d){var x=d.k9
if(x>=0)return x
return 4.99},
hhw(d){var x=d.kR,w=y.N
w=x.iC(x,new B.c1Z(),w,w)
return w},
fPe(d){var x=d.ka,w=y.N
w=x.iC(x,new B.c2_(),w,w)
return w},
aVW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aVW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aVW)
case 7:s=f
r=A.t(p)
r=A.aR(J.q(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$aVW,w)},
a4y(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4y)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4y)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4y,w)},
SI(d){var x=0,w=A.j(y.H),v,u
var $async$SI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SI)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SI)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SI,w)},
fzJ(d,e){var x,w,v
if(B.hhx(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hhw(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c9(new A.N(Date.now(),0,!1))},
aVU(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fPe(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c9(new A.N(Date.now(),0,!1))},
fPf(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fPe(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c9(new A.N(Date.now(),0,!1))?v:new A.N(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amh(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.aa(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amh)
case 7:s=f
r=A.t(p)
r=A.eX(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amh,w)},
ami(d){var x=0,w=A.j(y.H),v,u,t
var $async$ami=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amh(d),$async$ami)
case 3:u=f
x=5
return A.b(A.aw(),$async$ami)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$ami)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ami,w)},
amg(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$amg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fzK(d)
if(u<=0){v=!1
x=1
break}if(B.fzJ(d,e)){v=!1
x=1
break}x=3
return A.b(B.amh(e),$async$amg)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amg,w)},
aVV(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aVV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GK(e,d),$async$aVV)
case 3:if(g){v=-1
x=1
break}u=B.fzK(d)
if(u<=0){v=-1
x=1
break}if(B.fzJ(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amh(e),$async$aVV)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVV,w)},
c21(d,e,f){var x=0,w=A.j(y.y),v
var $async$c21=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GK(e,d),$async$c21)
case 3:if(h){v=!1
x=1
break}v=B.amg(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c21,w)},
c20(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c20=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c21(d,u,i.gRJ()),$async$c20)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c20,w)},
a4x(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4x=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRJ()){v=!0
x=1
break}if(B.aVU(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.Pd),$async$a4x)
case 5:x=k?3:4
break
case 3:B.fPf(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4x)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kD(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Pd,"Doc Share for Organizations"),$async$a4x)
case 7:if(!k){v=!1
x=1
break}B.fPf(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4x)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4x,w)},
c1Z:function c1Z(){},
c2_:function c2_(){},
foi(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$foi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$foi)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWe.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hC([r],e.c))
s.toString
$.eWe.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foi,w)},
hN9(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWe.bl($.eWe,new B.fok(d))},
fok:function fok(d){this.a=d},
eXz(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eXz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hC([d],f))
s.toString
u=A.mH(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jc,null,y.H),$async$eXz)
case 3:C.yz.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eXz,w)},
ad9(d,e,f){var x=0,w=A.j(y.H),v
var $async$ad9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eWL.m(0,d,new B.a9n(A.bi(e,!0,v)))
x=3
return A.b(A.aw(),$async$ad9)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.D(["parts",e,"size",f],v,y.C),null)),$async$ad9)
case 2:return A.h(null,w)}})
return A.i($async$ad9,w)},
ad3(d){return B.hwJ(d)},
hwJ(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eWL.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad3)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aC(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f05(),y.N)
n=A.z(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.M(o)
q=m==null?0:m
p=new B.a9n(r)
$.eWL.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad3,w)},
OF(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EE.m(0,d,u)
x=3
return A.b(B.Pb(d,u),$async$OF)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OF,w)},
aKw(d){return B.hwH(d)},
hwH(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EE.h(0,d)
if(n!=null&&!C.aD.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pa(d),$async$aKw)
case 3:p=f
if(p!=null&&!C.aD.gah(p)){$.EE.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKw)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aE(r)
x=!J.ci(q)?9:10
break
case 9:B.OF(d,q)
x=11
return A.b(J.hB(s,d),$async$aKw)
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
return A.i($async$aKw,w)},
hta(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.cl(J.eP(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.cl(A.AX(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.cl(d)),y.K)
return A.f7(null,y.K)},
a_e(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bM(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.f4n(r,t),!1,s)
A.fB(r,"error",new B.f4o(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.JC,new B.f4p())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_e,w)},
aKQ(d,e,f){return B.hyV(d,e,f)},
hyV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKQ=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.o.U(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a_e(i),$async$aKQ)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.aa(j)
x=11
return A.b(B.Pb(o,p),$async$aKQ)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.aa(j)===0){x=1
break}x=12
return A.b(B.ad9(k,j,s),$async$aKQ)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a5(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKQ,w)},
aKP(d,e,f){return B.hyU(d,e,f)},
hyU(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKP=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKQ(d,e,f),$async$aKP)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_e(f),$async$aKP)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EE.m(0,s,r)
$.OX.m(0,s,r)
x=11
return A.b(B.OF(s,r),$async$aKP)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a5(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKP,w)},
Am(d,e,f,g,h,i){return B.hhG(d,e,f,g,h,i)},
hhG(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Am=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aG(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.N(Date.now(),0,!1).a4().aa(),a0,f,B.aW1(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OF(s,d),$async$Am)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aw(),$async$Am)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcq().aE(d)),$async$Am)
case 11:u=2
x=9
break
case 7:u=6
i=t.pop()
x=9
break
case 6:x=2
break
case 9:case 5:if(!l&&n>524288)$.al.$1("[doc share addBytes] durable storage failed for "+h+" \u2014 kept in memory only")
x=12
return A.b(B.zr(e),$async$Am)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.EN(e,j),$async$Am)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Am,w)},
SK(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zr(d),$async$SK)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cA.aG(99999)
n=p.b
l=o.type
l.toString
k=B.fPh(n,null,l)
l=o.size
l.toString
j=new A.N(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aW1(),null)
$.adC.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_e(o),$async$SK)
case 7:g=a1
x=g!=null&&!C.aD.gah(g)?8:10
break
case 8:$.EE.m(0,h,g)
$.OX.m(0,h,g)
B.OF(h,g)
x=9
break
case 10:x=11
return A.b(B.aKP(d,m,o),$async$SK)
case 11:case 9:r.H(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.EN(d,t),$async$SK)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SK,w)},
fzO(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fzO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fPh(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GL(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aD.gah(s)){v=B.Am(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzO,w)},
GL(d,e,f,g,h,i){return B.hhF(d,e,f,g,h,i)},
hhF(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GL=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aG(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Ix(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GL)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fT(n,m)
o+=J.aa(m)
case 9:if(!(J.aa(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PI(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.aa(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pb(k,l),$async$GL)
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
return A.b(j.a9(0),$async$GL)
case 12:x=s.pop()
break
case 5:x=J.aa(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pb(k,new Uint8Array(A.cl(n))),$async$GL)
case 15:J.ch(q,k)
case 14:if(J.aa(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ad9(r,q,g),$async$GL)
case 16:f=new B.j8(i,a1,a0,g,new A.N(Date.now(),0,!1).a4().aa(),a2,null,B.aW1(),null)
x=17
return A.b(B.zr(d),$async$GL)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.EN(d,e),$async$GL)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GL,w)},
SM(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SM=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adC.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_e(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad3(s),$async$SM)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pa(u[o]),$async$SM)
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
v=A.AX(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OX.h(0,s)
if(i==null)i=$.EE.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qN(d,e),$async$SM)
case 12:i=a0
if(i!=null&&!C.aD.gah(i))$.OX.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AX(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SM,w)},
fPh(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gai(x):""
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
qN(d,e){return B.hhH(d,e)},
hhH(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qN=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OX.h(0,f)
if(e==null)e=$.EE.h(0,f)
if(e!=null&&!C.aD.gah(e)){v=e
x=1
break}s=$.adC.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_e(s),$async$qN)
case 9:r=a3
if(r!=null&&!C.aD.gah(r)){$.EE.m(0,f,r)
$.OX.m(0,f,r)
B.OF(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a5(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ad3(f),$async$qN)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.auU(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pa(g[l]),$async$qN)
case 16:k=a3
if(k!=null&&!C.aD.gah(k))n.H(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.akJ()
if(!C.aD.gah(r)){$.EE.m(0,f,r)
$.OX.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKw(f),$async$qN)
case 17:j=a3
if(j!=null&&!C.aD.gah(j)){$.OX.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SM(a0,a1,0,g),$async$qN)
case 20:i=a3
if(i!=null&&!C.aD.gah(i)){h=new Uint8Array(A.cl(i))
$.EE.m(0,f,h)
$.OX.m(0,f,h)
B.OF(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qN,w)},
hhK(d){var x,w,v=$.adC.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hhL(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hC([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hhI(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amo(d,e,f,g,h){return B.hhJ(d,e,f,g,h)},
hhJ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amo=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adC.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_e(s),$async$amo)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qN(g,e),$async$amo)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.aa(r)/2|0,J.aa(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w3(h,r,new A.Cq(!0,e.c)),$async$amo)
case 12:f.$2(J.aa(r),J.aa(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.al.$1("[doc share upload web] "+e.b+": "+A.t(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amo,w)},
fPj(d,e,f,g,h){var x,w,v,u,t=$.fPi
$.fPi=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aG(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2c.m(0,t,new B.bqT(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.auU(u)))
return t},
fzP(d){var x=0,w=A.j(y.H)
var $async$fzP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzP,w)},
GM(d,e){var $async$GM=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adC.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.o.U(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.pz(B.SM(d,e,p,o<q?o:q),$async$GM,w)
case 8:n=a1
x=n!=null&&!C.aD.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pz(A.Ed(n),$async$GM,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pz(B.ad3("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GM,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pz(B.Pa(h[l]),$async$GM,w)
case 18:k=a1
x=k!=null&&!C.aD.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pz(A.Ed(k),$async$GM,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pz(B.qN(d,e),$async$GM,w)
case 22:j=a1
x=j!=null&&!C.aD.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pz(A.Ed(A.AX(j,p,o<i?o:i)),$async$GM,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pz(null,0,w)
case 2:return A.pz(t.at(-1),1,w)}})
var x=0,w=A.fXI($async$GM,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.fZv(w)},
aW3(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2c.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.H(0,e)
case 3:if(!(u.gG(u)>=1048576)){x=4
break}x=5
return A.b(t.a1Z(),$async$aW3)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW3,w)},
SL(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2c.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a1Z(),$async$SL)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ad9(r.c,u,r.z),$async$SL)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.N(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aW1(),null)
u=r.a
x=5
return A.b(B.zr(u),$async$SL)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.EN(u,s),$async$SL)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
a4E(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2c.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aeg(u[s]),$async$a4E)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4E,w)},
c2e(d,e,f){var x=0,w=A.j(y.H)
var $async$c2e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvR(d,e,f),$async$c2e)
case 2:return A.h(null,w)}})
return A.i($async$c2e,w)},
c2f(d,e,f){var x=0,w=A.j(y.H)
var $async$c2f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bvS(d,e,f),$async$c2f)
case 2:return A.h(null,w)}})
return A.i($async$c2f,w)},
D4(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zr(d),$async$D4)
case 2:p=g
J.n_(p,new B.c2d(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EE.W(0,v)
$.adC.W(0,e)
x=3
return A.b(B.ad3(v),$async$D4)
case 3:u=g
$.eWL.W(0,v)
x=4
return A.b(A.aw(),$async$D4)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D4)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D4)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aeg(s[q]),$async$D4)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aeg(v),$async$D4)
case 13:x=14
return A.b(B.EN(d,p),$async$D4)
case 14:return A.h(null,w)}})
return A.i($async$D4,w)},
aW2(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aW2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qN(d,e),$async$aW2)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eXz(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW2,w)},
zr(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zr)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aC(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f4q(),y.U)
r=A.z(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zr,w)},
EN(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$EN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$EN)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f8j(),y.P)
t=A.z(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$EN)
case 3:return A.h(null,w)}})
return A.i($async$EN,w)},
bvR(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvR)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f34(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azJ(f))
x=4
return A.b(B.EN(d,u),$async$bvR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvR,w)},
bvS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bvS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zr(d),$async$bvS)
case 3:u=h
t=J.cB(u)
s=t.bf(u,new B.f35(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cym(f))
x=4
return A.b(B.EN(d,u),$async$bvS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bvS,w)},
a9n:function a9n(d){this.a=d},
f05:function f05(){},
f4n:function f4n(d,e){this.a=d
this.b=e},
f4o:function f4o(d){this.a=d},
f4p:function f4p(){},
c2d:function c2d(d){this.a=d},
bqT:function bqT(d,e,f,g,h,i,j,k,l){var _=this
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
f4q:function f4q(){},
f8j:function f8j(){},
f34:function f34(d){this.a=d},
f35:function f35(d){this.a=d},
a4F(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.be(d,new B.c2i())?3:4
break
case 3:x=5
return A.b(B.aW4(d,e),$async$a4F)
case 5:u=g
if(u!=null){t=u.c
B.Lv(d,u.b,e,t)}v=u
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
return A.b(B.aW_(s),$async$a4F)
case 10:case 9:if(g){v=new A.O2(1,D.OR,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SN(d,e),$async$a4F)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SS(!0,!0,d,e),$async$a4F)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Lv(d,D.xQ,e,t)
v=new A.O2(p,D.xQ,t)
x=1
break}v=B.c2h(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
SN(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4H(null,d,e),$async$SN)
case 3:p=g
try{u=C.Q.aC(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.aa(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aVZ(p,d.length,e),$async$SN)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2f(e,C.d.gI(d).a,r.b),$async$SN)
case 7:case 6:q=r.a
x=8
return A.b(B.Lv(d,D.OR,e,q),$async$SN)
case 8:v=new A.O2(d.length,D.OR,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
SO(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m3)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4G(d,e),$async$SO)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2a(s,d,e,t),$async$SO)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aW_(t),$async$SO)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qN(e,d),$async$SO)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SN(A.a([d],y.r),e),$async$SO)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
SQ(){var x=0,w=A.j(y.H)
var $async$SQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fzI(),$async$SQ)
case 2:x=3
return A.b(B.aMQ(),$async$SQ)
case 3:return A.h(null,w)}})
return A.i($async$SQ,w)},
a4G(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aW1()
x=3
return A.b(B.c2e(e,d.a,u),$async$a4G)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4G,w)},
Lv(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Lv=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OR&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aU(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4G(p,f),$async$Lv)
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
return A.b(B.c29(o,p,u,f),$async$Lv)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2a(o,p,f,t),$async$Lv)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c28(o,u,p,f),$async$Lv)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Lv,w)},
aW4(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aW4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2g(e,d),$async$aW4)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SS(!1,!0,d,e),$async$aW4)
case 4:u=g
if(u!=null){t=u.b
v=new A.O2(u.a,D.xQ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW4,w)},
c2g(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SM(d,s,0,1),$async$c2g)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2g,w)},
c2h(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4H(null,d,e),$async$c2h)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fPg(u)
if(t.length>800){v=null
x=1
break}v=new A.O2(d.length,D.ddK,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2h,w)},
amp(d,e,f){return B.hhO(d,e,f)},
hhO(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amp=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fzN(g)?3:4
break
case 3:x=5
return A.b(B.c2b(g),$async$amp)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mf(g,13))
try{k=B.D5(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a5(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mf(g,13))
u=9
x=12
return A.b(B.aVY(q),$async$amp)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a5(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fzM(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SP(n,a0)
v=k
x=1
break}catch(a1){m=A.a5(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GN(C.a.i(J.mf(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GN(C.a.i(J.mf(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c5(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GN(h,d,a0)
x=1
break}if(J.eR(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SP(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amp,w)},
GN(d,e,f){return B.hhM(d,e,f)},
hhM(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GN=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aU(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aU(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c5(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aVQ(r),$async$GN)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aVQ(A.cq(s,0,null)),$async$GN)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c1O(o,r,a1,n,a2),$async$GN)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c1N(q),$async$GN)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SP(l,a2),$async$GN)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ci(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.a5(d)
$.al.$1("[doc share lan import] "+A.t(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GN,w)},
a4H(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4H=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qN(f,r),$async$a4H)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.D(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcq().aE(q)],t,s))
x=3
break
case 4:u=A.R(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.N(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
SP(d,e){return B.hhN(d,e)},
hhN(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SP=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aC(0,a2,null)
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
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.aa(j)===0){x=7
break}i=C.cw.aE(j)
d=J.aa(q)!==0?q:null
x=9
return A.b(B.Am(i,a3,d,k,l,o),$async$SP)
case 9:h=a5
if(h!=null)J.ch(n,h)
x=7
break
case 8:f=J.aa(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a5(a1)
$.al.$1("[doc share bundle] "+A.t(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$SP,w)},
Lu:function Lu(d,e){this.a=d
this.b=e},
c2i:function c2i(){},
ZP(d){var x=A.K(d).ax.a===C.H,w=x?D.a9D:D.a8_,v=x?D.ab_:C.c,u=x?C.aO:C.M,t=x?C.bP:C.aj,s=x?D.a8W:C.aJ
return new A.aCS([w,s,v,u,t,x?C.eT:C.bQ])},
h3f(d,e){var x=e?C.x.j(0.72):C.aV
return A.cg(null,x,!0,null,new B.fsg(e),d,null,!0,!0,y.N)},
c1Y(d,e,f,g,h,i,j,k,l){return new B.SH(e,l,d,f,k,j,g,h,i,null)},
WS(d,e,f,g,h,i,j){return new B.b9o(g,h,j,e,i,d,f,null)},
fsg:function fsg(d){this.a=d},
WP:function WP(d,e){this.c=d
this.a=e},
aw4:function aw4(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cW9:function cW9(d){this.a=d},
cW7:function cW7(d){this.a=d},
cW8:function cW8(d){this.a=d},
bqy:function bqy(){},
SH:function SH(d,e,f,g,h,i,j,k,l,m){var _=this
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
azY:function azY(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dGK:function dGK(d){this.a=d},
dG7:function dG7(d,e){this.a=d
this.b=e},
dG8:function dG8(d,e){this.a=d
this.b=e},
dFH:function dFH(d,e,f){this.a=d
this.b=e
this.c=f},
dFG:function dFG(d){this.a=d},
dFI:function dFI(d,e){this.a=d
this.b=e},
dFN:function dFN(d,e,f){this.a=d
this.b=e
this.c=f},
dFM:function dFM(d){this.a=d},
dGy:function dGy(d,e){this.a=d
this.b=e},
dGz:function dGz(d){this.a=d},
dG4:function dG4(d,e,f){this.a=d
this.b=e
this.c=f},
dG1:function dG1(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dFL:function dFL(d){this.a=d},
dGc:function dGc(d){this.a=d},
dGb:function dGb(){},
dFR:function dFR(d){this.a=d},
dGv:function dGv(d,e){this.a=d
this.b=e},
dGw:function dGw(d,e){this.a=d
this.b=e},
dGx:function dGx(d,e){this.a=d
this.b=e},
dG2:function dG2(d,e){this.a=d
this.b=e},
dG3:function dG3(d,e){this.a=d
this.b=e},
dGo:function dGo(d,e){this.a=d
this.b=e},
dGk:function dGk(d){this.a=d},
dGj:function dGj(d){this.a=d},
dGl:function dGl(){},
dGm:function dGm(){},
dGn:function dGn(d,e){this.a=d
this.b=e},
dGp:function dGp(){},
dGq:function dGq(d){this.a=d},
dGi:function dGi(d,e){this.a=d
this.b=e},
dGd:function dGd(d){this.a=d},
dGe:function dGe(d){this.a=d},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d){this.a=d},
dGh:function dGh(d){this.a=d},
dFO:function dFO(){},
dFP:function dFP(d){this.a=d},
dFQ:function dFQ(d,e){this.a=d
this.b=e},
dFK:function dFK(d,e){this.a=d
this.b=e},
dFJ:function dFJ(d,e,f){this.a=d
this.b=e
this.c=f},
dG5:function dG5(d){this.a=d},
dG6:function dG6(d,e,f){this.a=d
this.b=e
this.c=f},
dG_:function dG_(d,e){this.a=d
this.b=e},
dFW:function dFW(d){this.a=d},
dFT:function dFT(d,e,f){this.a=d
this.b=e
this.c=f},
dFX:function dFX(d){this.a=d},
dFY:function dFY(d){this.a=d},
dFZ:function dFZ(){},
dG0:function dG0(d,e){this.a=d
this.b=e},
dFU:function dFU(d){this.a=d},
dFS:function dFS(d,e,f){this.a=d
this.b=e
this.c=f},
dFV:function dFV(){},
dGa:function dGa(d){this.a=d},
dG9:function dG9(d,e){this.a=d
this.b=e},
dGu:function dGu(d,e){this.a=d
this.b=e},
dGr:function dGr(d){this.a=d},
dGs:function dGs(d,e){this.a=d
this.b=e},
dGt:function dGt(d){this.a=d},
dGH:function dGH(d){this.a=d},
dGF:function dGF(d){this.a=d},
dGG:function dGG(d){this.a=d},
dGI:function dGI(){},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGC:function dGC(d,e,f){this.a=d
this.b=e
this.c=f},
dGA:function dGA(d,e,f){this.a=d
this.b=e
this.c=f},
dGD:function dGD(d,e){this.a=d
this.b=e},
dGE:function dGE(d,e){this.a=d
this.b=e},
aw1:function aw1(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9n:function b9n(d,e,f){this.c=d
this.d=e
this.a=f},
cW5:function cW5(){},
cW6:function cW6(){},
a9H:function a9H(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWt:function cWt(){},
cWs:function cWs(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
aw6:function aw6(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWp:function cWp(d){this.a=d},
cWq:function cWq(d,e,f){this.a=d
this.b=e
this.c=f},
cWr:function cWr(d,e){this.a=d
this.b=e},
cWn:function cWn(d,e){this.a=d
this.b=e},
cWl:function cWl(d){this.a=d},
cWj:function cWj(d){this.a=d},
cWg:function cWg(d){this.a=d},
cWm:function cWm(d){this.a=d},
cWi:function cWi(d){this.a=d},
cWo:function cWo(d){this.a=d},
cWk:function cWk(d){this.a=d},
cWh:function cWh(d){this.a=d},
WO:function WO(d,e,f){this.c=d
this.d=e
this.a=f},
aw3:function aw3(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cW2:function cW2(d){this.a=d},
cW1:function cW1(d,e){this.a=d
this.b=e},
cW3:function cW3(d){this.a=d},
cW0:function cW0(d,e){this.a=d
this.b=e},
cW4:function cW4(d){this.a=d},
cW_:function cW_(d,e){this.a=d
this.b=e},
cVW:function cVW(d){this.a=d},
cVX:function cVX(d){this.a=d},
cVY:function cVY(d,e){this.a=d
this.b=e},
cVZ:function cVZ(d){this.a=d},
NF:function NF(d,e,f){this.c=d
this.d=e
this.a=f},
aw9:function aw9(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cWG:function cWG(d){this.a=d},
cWH:function cWH(d){this.a=d},
cWI:function cWI(d){this.a=d},
cWJ:function cWJ(d){this.a=d},
cWK:function cWK(d,e){this.a=d
this.b=e},
cWL:function cWL(d){this.a=d},
cWN:function cWN(d){this.a=d},
cWM:function cWM(d){this.a=d},
WT:function WT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aw7:function aw7(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cWC:function cWC(d,e){this.a=d
this.b=e},
cWD:function cWD(d,e){this.a=d
this.b=e},
cWu:function cWu(d,e,f){this.a=d
this.b=e
this.c=f},
cWv:function cWv(d){this.a=d},
cWw:function cWw(){},
cWB:function cWB(){},
cWx:function cWx(d,e){this.a=d
this.b=e},
cWy:function cWy(d,e){this.a=d
this.b=e},
cWz:function cWz(d,e){this.a=d
this.b=e},
cWA:function cWA(d,e){this.a=d
this.b=e},
a9F:function a9F(d,e){this.c=d
this.a=e},
cVV:function cVV(d){this.a=d},
WN:function WN(d){this.a=d},
aw2:function aw2(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WU:function WU(d,e){this.c=d
this.a=e},
aw8:function aw8(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cWF:function cWF(d){this.a=d},
cWE:function cWE(d){this.a=d},
b9o:function b9o(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hhP(){var x,w=$.oX(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"VT"+C.d.fL(v)},
Lw(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$Lw)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$Lw)
case 8:s=e
if(s==null){v=A.R(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.R(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lw,w)},
a4I(d){return B.hhQ(d)},
hhQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4I)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_video_relay_v1",A.D(["relays",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$a4I)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4I,w)},
SR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lw(),$async$SR)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.Z(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.N(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4I(s),$async$SR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
SS(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bZ(),$async$SS)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bi(f,!0,y.U)
else{t=A.T(f).k("a4<1>")
u=A.z(new A.a4(f,new B.c2k(),t),t.k("F.E"))}if(u.length===0){v=null
x=1
break}s=B.hhP()
t=A.T(u).k("I<1,a0<n,aC>>")
r=A.z(new A.I(u,new B.c2l(s),t),t.k("ai.E"))
x=6
return A.b(B.Lw(),$async$SS)
case 6:q=i
J.aE(q,s,A.D(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4I(q),$async$SS)
case 7:x=8
return A.b(B.a4J(r,u,g,s),$async$SS)
case 8:v=new A.bkJ(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SS,w)},
amq(d){var x=0,w=A.j(y.y),v,u,t
var $async$amq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lw(),$async$amq)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amq,w)},
c2m(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2m=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lw(),$async$c2m)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a6(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2m,w)},
a4J(d,e,f,g){return B.hhR(d,e,f,g)},
hhR(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4J=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.aa(q)===0){x=8
break}x=10
return A.b(B.amo("media",r,new B.c2j(s,e,g),f,q),$async$a4J)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4J)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SR(g,A.D(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4J)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a5(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SR(g,A.D(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4J)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4J,w)},
D5(d,e,f){return B.hhS(d,e,f)},
hhS(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D5=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$D5)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amq(b3),$async$D5)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$D5)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amq(b3),$async$D5)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lw(),$async$D5)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gG(a4)
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
if(J.aa(m)===0){x=11
break}u=14
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oq(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a7Y(a8.a,b0,"media",a8.d,a9).Bu(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aVR(k,n,o,s,b7),$async$D5)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a5(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.aa(p)===0){v=null
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
x=J.aa(h)!==0?25:26
break
case 25:u=28
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oq(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a7Y(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D5)
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
a0=A.dQ(A.Z(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.N(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4I(e),$async$D5)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D5,w)},
c2k:function c2k(){},
c2l:function c2l(d){this.a=d},
c2j:function c2j(d,e,f){this.a=d
this.b=e
this.c=f},
aMQ(){var x=0,w=A.j(y.H),v,u
var $async$aMQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hsD=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aMQ)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aMQ)
case 3:u=$.fEM
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aMQ)
case 4:$.fEM=$.hAF=$.hAG=null
return A.h(null,w)}})
return A.i($async$aMQ,w)},
f7W(d){var x=0,w=A.j(y.H),v,u
var $async$f7W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2h){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f7X(new A.bM(u,y.aY))
x=3
return A.b(u.i0(0,C.hr,new B.f7Y()),$async$f7W)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f7W,w)},
hAD(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hhz(x):x},
fEQ(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aU(t,13))
if(C.a.a_(u,"WR")){v=B.ams(u)
x=1
break}v=B.fzM(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEQ,w)},
fEP(d){var x=0,w=A.j(y.T),v,u,t
var $async$fEP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aU(t,14))
if(C.a.a_(u,"WR")){v=B.amt(u)
x=1
break}v=B.fzM(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fEP,w)},
fo3(d){var x=0,w=A.j(y.T),v
var $async$fo3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amt(d),$async$fo3)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fo3,w)},
bwI(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fEP(d),$async$bwI)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aC(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.aa(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwI,w)},
eYn(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eYn=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SL(g)
x=1
break}if(d.gG(d)<=0){v=null
x=1
break}v=B.Am(d.akJ(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYn,w)},
EP(d,e,f){return B.hCS(d,e,f)},
hCS(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$EP=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fEQ(a1),$async$EP)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aC(0,e,null)
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
break}p=J.aa(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aU(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h52().azY(D.d2_,null),$async$EP)
case 4:l=d.fEM=a4
f.a="file"
f.b="application/octet-stream"
k=new A.auU(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f8q(f,k,new B.f8r(f,a2,k,j,a0,p),a2,j,a0,p,new A.bM(t,y.ch))
x=5
return A.b(l.a4O(0,new B.UY(r,"offer")),$async$EP)
case 5:d=l
x=7
return A.b(l.ahE(0),$async$EP)
case 7:x=6
return A.b(d.a4G(0,a4),$async$EP)
case 6:x=8
return A.b(B.f7W(l),$async$EP)
case 8:x=9
return A.b(l.als(),$async$EP)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hAD(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.D(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amu(m,h),$async$EP)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fPg(h)
case 11:v=new A.bk1(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$EP,w)},
f7X:function f7X(d){this.a=d},
f7Y:function f7Y(){},
f8r:function f8r(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f8q:function f8q(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f8p:function f8p(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hEE(d){switch(d){case"new":return D.dRo
case"checking":return D.dRp
case"connected":return D.dRr
case"completed":return D.dRq
case"failed":return D.dRt
case"disconnected":return D.dRu
case"closed":return D.aFI
case"count":return D.dRs}return D.aFI},
hEF(d){switch(d){case"new":return D.aFJ
case"gathering":return D.dRv
case"complete":return D.a2h}return D.aFJ},
hOC(d){switch(d){case"stable":return D.dRw
case"have-local-offer":return D.dRx
case"have-local-pranswer":return D.dRz
case"have-remote-offer":return D.dRy
case"have-remote-pranswer":return D.dRA
case"closed":return D.aFP}return D.aFP},
hMW(d){switch(d){case"new":return D.aFM
case"connecting":return D.aFN
case"connected":return D.aFO
case"closed":return D.a2i
case"disconnected":return D.aFL
case"failed":return D.aFK}return D.a2i},
a6X:function a6X(d,e){this.a=d
this.b=e},
Mx:function Mx(d,e){this.a=d
this.b=e},
UX:function UX(d,e){this.a=d
this.b=e},
Mw:function Mw(d,e){this.a=d
this.b=e},
Dy:function Dy(d,e){this.a=d
this.b=e},
cd2:function cd2(){},
fBr(d){var x=new B.Dx()
x.a=d
x.b=!0
return x},
Dx:function Dx(){this.b=this.a=$},
a6W:function a6W(){},
aqC:function aqC(){},
UY:function UY(d,e){this.a=d
this.b=e},
fzI(){var x=0,w=A.j(y.H)
var $async$fzI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fzI,w)},
fzL(d,e,f){var x=0,w=A.j(y.T),v
var $async$fzL=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m3))){v=null
x=1
break}v=B.foi(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fzL,w)},
fPg(d){var x,w=F.a7w.a1J(C.dB.aE(d),null)
if(w.length===0){x=C.dB.aE(d)
return C.cM.gcq().aE(x)}return C.cM.gcq().aE(w)},
hhy(d){var x,w,v=C.cw.aE(d)
try{x=C.c0.c4(0,F.a7v.b6Y(v,!1))
return x}catch(w){x=C.c0.c4(0,v)
return x}},
fzM(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hhy(C.a.aU(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aU(t,w.length)
try{v=C.c0.c4(0,C.cw.aE(x))
return v}catch(u){return x}}return null},
hhz(d){var x,w,v,u,t,s=A.a([],y.s)
for(x=d.split("\n"),w=x.length,v=0,u=0;u<w;++u){t=C.a.i(x[u])
if(t.length===0)continue
if(C.a.a_(t,"a=extmap"))continue
if(C.a.a_(t,"a=ssrc"))continue
if(C.a.a_(t,"a=msid"))continue
if(C.a.a_(t,"a=rtcp"))continue
if(C.a.a_(t,"a=rtpmap"))continue
if(C.a.a_(t,"a=fmtp"))continue
if(C.a.a_(t,"a=rtcp-fb"))continue
if(C.a.a_(t,"a=mid:"))continue
if(C.a.a_(t,"a=group:"))continue
if(C.a.a_(t,"a=setup:"))continue
if(C.a.a_(t,"a=ice-options:"))continue
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aF(s,"\n")},
hhA(){var x,w=$.oX(),v=J.e_(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aG(32)]
return"DS"+C.d.fL(v)},
aVX(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aVX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aVX)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.al.$1("[doc share qr stash] load "+A.t(p)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aVX,w)},
c22(d,e){return B.hhB(d,e)},
hhB(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c22=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.aa(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cy,null),$async$c22)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.al.$1("[doc share qr stash] save "+A.t(p)+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c22,w)},
aW_(d){var x=0,w=A.j(y.y),v,u,t
var $async$aW_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aVX(d),$async$aW_)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW_,w)},
aVZ(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aVZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hhA()
r=C.a.i(f)
t=C.dB.aE(s)
x=3
return A.b(B.c22(u,A.D(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcq().aE(t),"usesRemaining",999999,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aVZ)
case 3:if(!h){v=null
x=1
break}v=new A.YT("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aVZ,w)},
aVY(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aVY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.aa(o)===0){v=null
x=1
break}x=3
return A.b(B.aVX(o),$async$aVY)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.aa(u)===0){v=null
x=1
break}try{t=C.c0.c4(0,C.cw.aE(u))
if(J.iK(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a5(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aVY,w)},
c23(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c23=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.aa(q)===0){x=1
break}u=4
x=7
return A.b(X.bxD("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cy),$async$c23)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c23,w)},
aW0(d){var x=0,w=A.j(y.h),v,u,t
var $async$aW0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GJ(),$async$aW0)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW0,w)},
aml(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aml=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$aml)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aW0(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aml,w)},
amj(d,e){var x=0,w=A.j(y.H)
var $async$amj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amj)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amj)
case 2:return A.h(null,w)}})
return A.i($async$amj,w)},
a4A(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4A=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4A)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GJ(),$async$a4A)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.D(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4z(s),$async$a4A)
case 5:x=6
return A.b(B.amj(f,u),$async$a4A)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
a4B(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4B)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GJ(),$async$a4B)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a6(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.Z(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.m(0,"schoolName",q)
p.m(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.m(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.am(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.m(0,"loginCode",q)
s.W(u,t)
s.m(u,o,p)
x=8
return A.b(B.amj(g,q),$async$a4B)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4z(u),$async$a4B)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
a4C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4C)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GJ(),$async$a4C)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a6(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aVU(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4C)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.D(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.N(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
c24(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c24=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.aa(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c24)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aC(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.Z(q,y.N,y.z)
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
return A.i($async$c24,w)},
GK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c24(d),$async$GK)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aW0(t),$async$GK)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amk(d),$async$GK)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aVU(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amk(d),$async$GK)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GK,w)},
amk(d){var x=0,w=A.j(y.H)
var $async$amk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amk)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amk)
case 2:return A.h(null,w)}})
return A.i($async$amk,w)},
aW1(){var x,w=$.oX(),v=J.e_(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aG(32)]
return C.d.fL(v)},
a4D(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fzN(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c27(d){return B.hhD(d)},
hhD(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c27=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4D(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eU("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c27)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.al.$1("[doc share short code] load "+d+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c27,w)},
amn(d,e){return B.hhE(d,e)},
hhE(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$amn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4D(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hs("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cy,null),$async$amn)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a5(o)
$.al.$1("[doc share short code] save "+d+": "+A.t(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amn,w)},
c29(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c29=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.amn(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c29)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c29,w)},
c28(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c28=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.amn(u,A.D(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c28)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c28,w)},
c2a(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4D(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.amn(u,A.D(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2a,w)},
c2b(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fzN(d)){v=null
x=1
break}x=3
return A.b(B.c27(d),$async$c2b)
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
return A.i($async$c2b,w)},
a4K(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$a4K)
case 3:if(!e){v=A.R(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eU("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4K)
case 8:s=e
if(s==null){v=A.R(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.Z(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a5(n)
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.R(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4K,w)},
amr(d){return B.hhT(d)},
hhT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bZ(),$async$amr)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hs("ngmy_doc_share_webrtc_signal_v1",A.D(["signals",d,"savedAt",new A.N(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cy,null),$async$amr)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a5(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amr,w)},
ams(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ams=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.aa(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$ams)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4K(),$async$ams)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.aa(q)===0){v=null
x=1
break}u=6
p=C.c0.c4(0,C.cw.aE(q))
if(J.iK(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.N(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amr(s),$async$ams)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a5(i)
$.al.$1("[doc share webrtc stash] offer decode: "+A.t(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ams,w)},
amu(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bZ(),$async$amu)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4K(),$async$amu)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.Z(s,r,q),r,q)
r=C.dB.aE(C.a.i(e))
q.m(0,"answer",C.cM.gcq().aE(r))
q.m(0,"answerAt",new A.N(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amr(u),$async$amu)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amu,w)},
amt(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bZ(),$async$amt)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4K(),$async$amt)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.aa(u)===0){v=null
x=1
break}try{r=C.c0.c4(0,C.cw.aE(u))
v=r
x=1
break}catch(n){t=A.a5(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amt,w)},
alu(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alu=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q1)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alu)
case 3:r=g
u=4
x=7
return A.b(r.he(C.fI),$async$alu)
case 7:q=g
o=q
o=o==null?null:J.f2(J.vY(o))
v=o
s=[1]
x=5
break
s.push(6)
x=5
break
case 4:s=[2]
case 5:u=2
r.p()
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$alu,w)},
hL2(d,e){var x,w,v=J.e_(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fmI(d){return B.hL4(d)},
hL4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fmI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fmI)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[supabase signed url] "+d+": "+A.t(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fmI,w)},
BE(d,e,f,g,h,i){var x=null
return B.hL1(d,e,f,g,h,i)},
hL1(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BE=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fPj(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fzP(r),$async$BE)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fmI(o),$async$BE)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4E(r),$async$BE)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIx)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.JX(A.a([],g))
x=15
return A.b(d.eK(0,A.arr("GET",A.cq(n,0,null))).cJ(0,C.Do),$async$BE)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4E(r),$async$BE)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Ix(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BE)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.aa(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aW3(r,k),$async$BE)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BE)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.SL(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a5(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4E(r),$async$BE)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BE,w)},
aMz(d){return B.hL3(d)},
hL3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMz)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a5(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMz,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[208]
H=c[101]
P=c[189]
E=c[180]
G=c[83]
Q=c[153]
R=c[102]
S=c[187]
I=c[213]
K=c[219]
B=a.updateHolder(c[21],B)
D=c[217]
T=c[152]
L=c[170]
U=c[62]
V=c[220]
W=c[68]
X=c[53]
M=c[82]
Y=c[218]
N=c[112]
B.cd3.prototype={
azY(d,e){return this.czR(d,e)},
czR(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$azY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.D(["mandatory",A.R(t,t),"optional",A.a([A.D(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.k2(A.ct(t)))
t=J.k(u)
v=B.hmn(C.cM.gcq().aE(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$azY,w)}}
B.b0a.prototype={
brK(d){var x=this,w=x.w
w.onclose=A.h7(new B.ccZ(x))
w.onopen=A.h7(new B.cd_(x))
w.onmessage=A.h7(new B.cd0(x))
w.onbufferedamountlow=A.h7(new B.cd1(x))},
gdh(d){return this.x},
ae2(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Dx()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fBr(J.f2(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae2)
case 8:v=t.fBr(s.akI(f,0,null))
x=1
break
case 7:case 4:v=B.fBr(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae2,w)}}
B.b0b.prototype={
brL(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h7(new B.cd4(x)))
w.addEventListener("icecandidate",A.h7(new B.cd5(x)))
w.addEventListener("iceconnectionstatechange",A.h7(new B.cd6(x)))
w.onicegatheringstatechange=A.h7(new B.cd7(x))
w.addEventListener("signalingstatechange",A.h7(new B.cd8(x)))
if(!$.fIe())w.addEventListener("connectionstatechange",A.h7(new B.cd9(x)))
w.addEventListener("negotiationneeded",A.h7(new B.cda(x)))
w.addEventListener("track",A.h7(new B.cdb(x)))},
ahE(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.ct(A.R(y.N,y.z)))),y.aQ),$async$ahE)
case 3:t=f
v=new B.UY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahE,w)},
a4G(d,e){return this.bhp(0,e)},
bhp(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4G=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4G)
case 2:return A.h(null,w)}})
return A.i($async$a4G,w)},
a4O(d,e){return this.bhF(0,e)},
bhF(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4O=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4O)
case 2:return A.h(null,w)}})
return A.i($async$a4O,w)},
als(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$als=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.UY(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$als,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9G.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WQ.prototype={
S(){return new B.aw5()},
gd6(){return this.c}}
B.aw5.prototype={
Z(){this.a0()
this.aaT()},
aaT(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aVV(u.e,u.c),$async$aaT)
case 2:t=e
if(v.c!=null)v.n(new B.cWd(v,t))
return A.h(null,w)}})
return A.i($async$aaT,w)},
Ol(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.amg(t.e,t.c,!1),$async$Ol)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ekc)
x=1
break}x=4
return A.b(B.a4y(u.a.c,"individual"),$async$Ol)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3f(A.eH(new B.cWa(u),!1,null,y.H)),$async$Ol)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
HE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f67(o),$async$HE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4C(o.e,r,s,q),$async$HE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.ehh)
x=1
break}x=5
return A.b(B.a4y(u.a.c,"member"),$async$HE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3f(A.eH(new B.cWc(u),!1,null,y.H)),$async$HE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
wU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4x(t.e,o,t.f,t.r,t.w,s),$async$wU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4y(u.a.c,"org_owner"),$async$wU)
case 4:x=5
return A.b(B.aml(u.a.c),$async$wU)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f6C(o),$async$wU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4A(s,t,o,q.c),$async$wU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.ehe)
x=1
break}x=10
return A.b(B.aml(u.a.c),$async$wU)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3f(A.eH(new B.cWb(u),!1,null,y.H)),$async$wU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wU,w)},
B(d){var x,w,v,u=this,t=null,s=A.K(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fzK(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eC_,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.eTs,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHg,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lj(new B.cWf(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.aj,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aa7(C.eF,C.asR,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc53(),t),C.aa],v))
p.push(new B.aa7(C.o6,C.Zn,"Team Member","Sign in with your organization access code + password",u.gc5T(),t))
p.push(C.aa)
p.push(new B.aa7(C.afX,C.a_J,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5p(),t))
return A.ce(t,r,A.br(!0,A.cf(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adm,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aa7.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.G(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.er(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a_,C.a7,C.w,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.C(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.K(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A6,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayz.prototype={}
B.aBG.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aU(x,w+1).toLowerCase())},
gam5(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.R(y.N,y.z)
v.m(0,"id",w.a)
v.m(0,"name",w.b)
v.m(0,"mime",w.c)
v.m(0,"sizeBytes",w.d)
v.m(0,"createdAt",w.e)
x=w.f
if(x!=null&&C.a.i(x).length!==0)v.m(0,"note",x)
x=w.r
if(x!=null&&C.a.i(x).length!==0)v.m(0,"fromSender",x)
x=w.w
if(x!=null&&C.a.i(x).length!==0)v.m(0,"shortCode",x)
x=w.x
if(x!=null&&C.a.i(x).length!==0)v.m(0,"stashToken",x)
return v},
b6u(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cym(d){return this.b6u(null,d)},
azJ(d){return this.b6u(d,null)}}
B.SF.prototype={
S(){return new B.azW(new A.cn(null,y.A))},
gd6(){return this.c}}
B.azW.prototype={
Z(){this.a0()
this.aaU()},
aaU(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Al(u.a.c),$async$aaU)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dFD(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aaU,w)},
aaV(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aaV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fC(new A.fv(s)),$async$aaV)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.el6)
case 1:return A.h(v,w)}})
return A.i($async$aaV,w)},
Xj(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alu(s.d,4),$async$Xj)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xj)
case 8:q=e
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a5(l)
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xj,w)},
aev(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aev=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7x("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aev)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aev,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.K(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.as(new A.B(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aA.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.G(C.aA.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZN,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a_,C.a7,C.w,w,p,p),C.n),p,p,p,p,Y.acX,p,p,1/0)
v=A.m(20)
u=A.a([new A.a9(0,C.G,C.aA.j(0.2),C.dm,24)],y.V)
s=q.e
s.toString
r=A.cf(A.u(A.a([x,C.mb,w,C.ka,new A.eo(A.p(p,A.pj(p,p,!1,B.hhu(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ka,A.A(A.a([A.C(A.ey(M.Ak,C.R7,q.gbZh(),p),1),C.av,A.C(A.dj(C.xj,C.a4x,q.gbZi(),A.bk(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Yg,D.ePH,q.gcjZ(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.K0,p,p,C.ah)
x=r}return A.ce(l,n,x,p,!1,!1,p,p)}}
B.SJ.prototype={
S(){return new B.azZ(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.azZ.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GI(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xk(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xk=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GI(u.d.a.a)
if(t==null){u.n(new B.dGM(u))
x=1
break}u.n(new B.dGN(u))
s=u.a
r=s.c
x=3
return A.b(B.a4w(s.d,new B.dGO(u),t,r),$async$Xk)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dGP(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xk,w)},
a_n(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_n=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dGQ(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.qN(r.a.c,q),$async$a_n)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dGR(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.aa(r.a.d)>1?"NGMY Doc Share ("+J.aa(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af_(p,m,l,j,k),$async$a_n)
case 8:o=e
if(r.c!=null)r.n(new B.dGS(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a5(h)
if(r.c!=null)r.n(new B.dGT(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dGU(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_n,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.K(d).ax.a===C.H,i=j?D.a9D:D.a8_,h=j?D.ab_:C.c,g=j?C.aO:C.M,f=j?C.bP:C.aj,e=j?D.a8W:C.aJ
i=[i,e,h,g,f,j?C.eT:C.bQ]
x=A.K(d).ax.a===C.H
w=J.aa(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e8(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.w,k,0,A.a([C.aA.j(x?0.12:0.08),C.aA.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.G(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bwm,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aE,C.w,A.a([i[5].j(0.85),C.aA],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.C(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZN,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tB(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beF()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JU,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ae,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dGV(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.G(i[1],C.r,1)
m=J.JB(l.a.d,4)
m=A.z(new A.I(m,new B.dGW(x,new A.aCS(i)),m.$ti.k("I<ai.E,r>")),y.c7)
if(J.aa(l.a.d)>4)m.push(new A.B(C.nj,A.d("+ "+(J.aa(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a1,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bs,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.m(14)
s=A.G(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.efP)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.C(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.ib,k,k,k,C.eE,k,k,k)],r))}e=A.C(A.cf(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhB,k,k,C.ah),1)
u=l.f?k:l.gck_()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Yg,D.eQB,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZj()
t=A.bk(C.aA,k,k,0,C.c,k,C.mx,k,new A.b5(A.m(16),C.W),k,k,k)
return A.ce(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dGX(),A.u(A.a([e,new A.B(D.bh5,A.u(A.a([s,C.P,i,C.aa,A.bJ(l.f?C.qN:D.eP6,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UI,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beF.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f4(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h1(C.bo,v.length),C.aL)}}
B.SG.prototype={
S(){return new B.azX()}}
B.azX.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.aZ,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.aZ,C.aL),v)
u.f!==$&&A.aO()
u.f=new A.ao(C.aq,v)},
p(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.at()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a2()},
aaW(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aaW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dFE(r))
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
return A.b(B.a4B(p,m,n,o,C.a.i(l).length===0?null:l),$async$aaW)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.ekI)
s=[1]
x=4
break}p.F(y.q).f.P(D.ejl)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dFF(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aaW,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.K(d).ax.a===C.H?C.iT:C.oO,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eIk,s,s,s,1,s,!0),p=A.p(s,D.baC,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.EQ,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bD3,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bD_,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bDd,C.z,!0,s,!0,s,!1,s,C.ae,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gbZk()
u=A.bk(C.aA,s,s,s,s,C.fV,s,s,s,s,s,s)
return A.ce(q,r,A.cf(A.u(A.a([p,C.d1,o,C.aa,x,C.aa,w,C.mb,A.bJ(t.r?C.qN:C.aL2,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9n.prototype={}
B.bqT.prototype={
a1Z(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a1Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gG(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akJ()))
x=3
return A.b(B.Pb(t,s),$async$a1Z)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a1Z,w)},
gd6(){return this.a}}
B.Lu.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WP.prototype={
S(){return new B.aw4(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aw4.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cW9(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZq(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZP(d),u=x.a.c,t=u?C.hn:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.G(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.a9(0,C.G,C.aA.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.aiy,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.a9(0,C.G,C.aA.j(0.4),C.cv,16)],n),C.ajk,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tB(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqy()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.DB,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPX),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ae,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cW7(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.C(A.dU(C.mX,new B.cW8(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.a9(0,C.G,C.aA.j(0.35),C.cD,12)],n)
g=y.p
return A.eB(w,C.K,new A.d2(Q.Ib,A.bQ(new A.B(C.wt,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.A(A.a([f,C.av,A.C(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dMF,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZp(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LJ,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.K2,C.cZ,w,w,w)}}
B.bqy.prototype={
nV(d,e){return e.ahz(e.a.toUpperCase())}}
B.SH.prototype={
S(){return new B.azY(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.azY.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dE(C.iV,new B.dGK(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.SQ()
this.a2()},
Zg(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$Zg)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zr(u.a.c),$async$Zg)
case 4:u.n(new s.dG7(u,e))
u.hL("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zg,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lt(u.a.c),$async$rQ)
case 3:t=e
x=4
return A.b(B.zr(u.a.c),$async$rQ)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dG8(u,s))
if(t>0)u.hL("Received "+A.t(t)+" file(s) via My Code.")
u.LR(u.d)
B.Al(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LR(d){return this.bvA(d)},
bvA(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4G(r,u.a.c),$async$LR)
case 8:p=f
if(u.c==null){x=1
break}new B.dFH(u,r,p).$0()
u.c.e2()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m3))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SO(r,u.a.c),$async$LR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zr(u.a.c),$async$LR)
case 12:u.n(new o.dFI(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
Mc(d){return this.bBz(d)},
bBz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Mc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4G(d,u.a.c),$async$Mc)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dFN(u,d,t))
x=6
return A.b(A.fC(new A.fv(t)),$async$Mc)
case 6:u.hL("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fC(new A.fv(r.toUpperCase())),$async$Mc)
case 7:u.hL("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Mc,w)},
hL(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cu5(d,e)},
cu5(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dGy(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dGz(r))
$.eI.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQq(){var x=this.a
return x.f||x.r||x.w},
GG(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQq()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c20(s,n,r,q,o,t),$async$GG)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hL("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgd(o,u.a.c),$async$GG)
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
return A.b(B.BG(s,o,r,q,n,t),$async$GG)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GG,w)},
Yn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aml(u.a.c),$async$Yn)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hL("No organization portal found.")
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
return A.b(A.a7(t,!1).cr(A.eH(new B.dG4(u,r,q),!1,null,y.H)),$async$Yn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yn,w)},
Zr(d){return this.cdO(d)},
cdN(){return this.Zr(1)},
cdO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQq()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ami(u.a.c),$async$Zr)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zr,w)},
a9_(d,e,f){return this.bRC(d,e,f)},
bRC(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL(e)
x=1
break}x=3
return A.b(u.rR(new B.dG1(u,d,null,e,f),"Uploading\u2026"),$async$a9_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9_,w)},
bvJ(){B.h2y(!1,new B.dFL(this))
return},
ciC(){this.n(new B.dGc(this))},
aus(){var x=0,w=A.j(y.H),v=this
var $async$aus=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvJ()
return A.h(null,w)}})
return A.i($async$aus,w)},
a8W(){var x=0,w=A.j(y.H),v=this
var $async$a8W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dFR(v),"Importing\u2026"),$async$a8W)
case 2:return A.h(null,w)}})
return A.i($async$a8W,w)},
Qj(d){return this.ctz(d)},
ctz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eH(new B.dGv(u,d),!1,null,y.H)),$async$Qj)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.ND)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cr(A.eH(new B.dGw(u,d),!1,null,y.H)),$async$Qj)
case 8:x=1
break
case 7:x=u.bSj(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cr(A.eH(new B.dGx(u,d),!1,null,y.H)),$async$Qj)
case 11:x=1
break
case 10:u.hL("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qj,w)},
bSj(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cof,C.a.aU(x,w+1).toLowerCase())},
acf(d){return this.c57(d)},
c57(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m3)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cr(A.eH(new B.dG2(u,d),!1,null,y.H)),$async$acf)
case 5:x=1
break
case 4:u.n(new B.dG3(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acf,w)},
PI(d){return this.clp(d)},
clp(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hL("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oB(t,s.c,s.f),$async$PI)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGo(u,d),"Preparing QR\u2026"),$async$PI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PI,w)},
aeU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aeU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dGp(),A.T(t).k("I<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dGq(q),s),s.k("F.E"))
if(r.length===0){u.hL("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PI(r),$async$aeU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeU,w)},
aeN(d){return this.ckZ(d)},
ckZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGi(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeN)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qj(d)
break
case"qr":u.PI(A.a([d],y.r))
break
case"send_my_code":u.c5I(A.a([d],y.r))
break
case"save":u.ae9(d)
break
case"delete":u.Ho(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeN,w)},
Vn(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.I(t,new B.dFO(),A.T(t).k("I<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a4<1>")
r=A.z(new A.a4(t,new B.dFP(q),s),s.k("F.E"))
if(r.length===0){u.hL("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oB(t,s.c,s.f),$async$Vn)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dFQ(u,r),"Preparing file\u2026"),$async$Vn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
adm(d){return this.ccj(d)},
ccj(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$adm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h3f(d,!1),$async$adm)
case 3:s=f
r=s==null
q=B.a4D(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hL("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$adm,w)},
acl(){var x=0,w=A.j(y.H),v=this,u
var $async$acl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fnN(u,v.a.c),$async$acl)
case 2:return A.h(null,w)}})
return A.i($async$acl,w)},
bvI(){B.h2y(!1,new B.dFK(this,null))
return},
HD(d,e){return this.c5J(d,e)},
aVU(d){return this.HD(null,d)},
c5I(d){return this.HD(d,null)},
c5J(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HD=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a4<1>")
k=A.z(new A.a4(p,new B.dG5(s),o),o.k("F.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wf.c2().ak5(!0,C.Wp,!1),$async$HD)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dG6(l,s,r),"Preparing\u2026"),$async$HD)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a5(j)
$.al.$1("[doc share send my code pick] "+A.t(q))
s.hL("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hL("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.byJ(p,l,e,s.a.c),$async$HD)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HD,w)},
GV(d){return this.bRp(d)},
bRp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hht(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aVU(t),$async$GV)
case 8:x=6
break
case 7:u.hL("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hL("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rR(new B.dG_(u,d),"Receiving video\u2026"),$async$GV)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dG0(u,d),"Receiving\u2026"),$async$GV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GV,w)},
CV(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BA()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.adm(t),$async$CV)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GV(s),$async$CV)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eH(new B.dGa(u),!1,null,y.N)),$async$CV)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CV)
case 10:x=1
break
case 9:x=11
return A.b(u.GV(C.a.i(r)),$async$CV)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CV,w)},
ae9(d){return this.chd(d)},
chd(d){var x=0,w=A.j(y.H),v=this
var $async$ae9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dG9(v,d),"Saving\u2026"),$async$ae9)
case 2:return A.h(null,w)}})
return A.i($async$ae9,w)},
Ho(d){return this.bDR(d)},
bDR(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ho=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ho)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c23(t),$async$Ho)
case 6:case 5:s=d.a
x=7
return A.b(B.D4(u.a.c,s),$async$Ho)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Ho)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ho,w)},
af_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZP(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGu(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af_)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acl()
break
case"import":u.a8W()
break}case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
bZn(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m3))return C.pb
if(C.a.a_(x,"image/")||d.lZ(D.ND))return C.rW
if(C.a.q(x,"pdf"))return E.Lf
return D.agm},
B(d){var x,w,v=this,u=null,t=B.ZP(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EJ,u,u,u,new B.dGF(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bwS,u,u,u,v.e?u:v.gc5q(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciB()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brh:E.agM,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Yd,u,u,u,v.e?u:v.gbZo(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.nr,u,u,u,v.e?u:v.gaWX(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byw,u,u,u,v.e?u:new B.dGG(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lj(new B.dGH(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.w,u,0,A.a([p.j(A.K(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e8(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.w,u,0,A.a([C.aA.j(A.K(d).ax.a===C.H?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.C(new B.aw1(C.j1,s,!0,t,w?u:v.gclq(),u),1)
x.push(new A.B(D.bfS,A.mx(new B.dGI(),A.A(A.a([s,C.av,A.C(new B.aw1(C.uu,"Export",!1,t,w?u:v.gbHf(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.id,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9n(t,v.e?u:v.gaWX(),u)
else s=A.jT(!0,u,u,new B.dGJ(v,t),s,u,D.bfK,u,u,!1,!1)
x.push(A.C(s,1))
return A.ce(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw1.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aA,t,t,0,C.c,t,C.ud,t,new A.b5(s,C.W),t,t,t)
return A.dj(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ud,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eJ,t,t,t),u.r,v)}}
B.b9n.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.G(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cW5(),new A.B(E.VC,A.u(A.a([A.mx(new B.cW6(),A.p(x,A.V(C.wO,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aE,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ie,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dj(C.nr,D.eTK,this.d,A.bk(C.aA,x,x,x,C.c,x,C.Vx,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zt,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9H.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aA.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lZ(D.m3))p=D.cTC
else{p=C.a.a_(p,"image/")||i.lZ(D.ND)
n=y.O
p=p?A.a([C.cW,C.aA],n):A.a([C.aK.j(0.85),C.aA.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aE,C.w,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gam5()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m3))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.C(A.u(A.a([q,C.au,A.d(C.d.aF(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m3)))l.push(A.fxx(C.aA,!1,j,j,j,!1,j,j,new B.cWs(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.no,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cWt(),new A.B(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.B(C.V3,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WR.prototype={
S(){return new B.aw6()},
gd6(){return this.c}}
B.aw6.prototype={
Z(){this.a0()
this.wM()},
p(){B.hhI(this.e)
this.a2()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qN(o.c,o.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aD.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hhL(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hhK(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWp(s))
x=1
break}s.n(new B.cWq(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a5(l)
if(s.c==null){x=1
break}s.n(new B.cWr(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
a_m(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_m=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qN(t.c,t.d),$async$a_m)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ehO)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af_(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_m)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_m,w)},
bRi(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWn(w,t),C.fG,C.dp,!0,v,v,v,v)
else if(t!=null&&!C.aD.gah(t))x=A.fD(t,C.B,v,new B.cWo(w),C.fG,C.dp,!0,v,!1,v,v)
else return C.bF
return A.tK(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZP(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Al,u,u,u,v.gb_F(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cv
else{q=v.r
if(q!=null)t=new A.B(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c5(w,".heic")||C.a.c5(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.B(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dj(C.Al,D.eE7,v.gb_F(),A.bk(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRi()}return A.ce(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WO.prototype={
S(){return new B.aw3(A.afL(),C.bu,C.bu)},
gd6(){return this.c}}
B.aw3.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fm(w,A.a2(w).k("fm<1>")).hX(new B.cW2(v))
x.gcGY().hX(new B.cW3(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fm(x,A.a2(x).k("fm<1>"))}if(x==null)x=C.aVM
x.hX(new B.cW4(v))
v.wM()},
wM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qN(p.c,p.d),$async$wM)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cVW(s))
x=1
break}x=8
return A.b(s.d.AZ(0,new A.a0Z(r,s.a.d.c)),$async$wM)
case 8:if(s.c==null){x=1
break}s.n(new B.cVX(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a5(n)
if(s.c==null){x=1
break}s.n(new B.cVY(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wM,w)},
Xl(){var x=0,w=A.j(y.H),v=this,u
var $async$Xl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xl)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xl)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xl,w)},
aOn(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZP(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cv
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bsf,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LJ,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aA,o,o,m,0,new B.cVZ(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOn(p.w)+" / "+p.aOn(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a1,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aA,o,o,o,o,D.eeo,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.x_:C.j0,o,o,o,o,o)
x=A.u(A.a([u,C.ka,t,x,C.d1,A.dj(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZr(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.ce(v,w,A.as(new A.B(C.uh,x,o),o,o,o),o,!1,!1,o,o)}}
B.NF.prototype={
S(){return new B.aw9()},
gd6(){return this.c}}
B.aw9.prototype={
Z(){this.a0()
this.NH()},
NH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fzL(o.c,o.d,new B.cWG(s)),$async$NH)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cWH(s))
x=1
break}s.e=r
q=O.hDG(r)
if(q==null){s.n(new B.cWI(s))
x=1
break}s.d=q
q.aJ(0,s.gaVJ())
x=8
return A.b(q.hW(0).cJ(0,C.rC),$async$NH)
case 8:if(s.c==null){x=1
break}s.n(new B.cWJ(s))
x=9
return A.b(q.p5(0),$async$NH)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a5(m)
if(s.c==null){x=1
break}s.n(new B.cWK(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NH,w)},
c3M(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cWL(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BH(0,x.gaVJ())
w=x.d
if(w!=null)w.p()
B.hN9(x.e)
x.a2()},
aaZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW2(u.c,u.d),$async$aaZ)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aaZ,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZP(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.oc,t,t,t,u.gbZl(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i5(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cv
else{q=u.r
if(q!=null)s=new A.B(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aff(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fN(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.yZ(s,t),A.aJ(t,A.Fi(A.p(t,A.V(q?H.x_:C.j0,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cWN(u),t,t,t,t,t,t,!1,C.af)],o),t),t)}else s=C.bF}}return A.ce(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WT.prototype={
S(){return new B.aw7(new A.cn(null,y.A))}}
B.aw7.prototype={
gctQ(){var x,w,v=this.a
if(v.e!==D.OS)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aU(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctx(){var x,w,v=this.a
if(v.e!==D.xQ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aU(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gctQ()
if(x!=null){v.OK(x)
v.e=A.dE(R.Dr,new B.cWC(v,x))}w=v.gctx()
if(w!=null){v.OJ(w)
v.f=A.dE(C.h_,new B.cWD(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OJ(d){return this.caA(d)},
caA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amq(d),$async$OJ)
case 3:t=f
x=4
return A.b(B.c2m(d),$async$OJ)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWu(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
OK(d){return this.caB(d)},
caB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fo3(d),$async$OK)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwI(t),$async$OK)
case 4:if(u.c==null){x=1
break}u.n(new B.cWv(u))
u.c.F(y.q).f.P(D.aI8)
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
gbW9(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZm(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_7(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BA()){t=u.c
if(t!=null)t.F(y.q).f.P(D.ekS)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cr(A.eH(new B.cWw(),!1,null,y.N)),$async$a_7)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwI(s),$async$a_7)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI8)
case 1:return A.h(v,w)}})
return A.i($async$a_7,w)},
a6W(d){return this.bBA(d)},
bBA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6W=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fC(new A.fv(C.d.aF(t,", "))),$async$a6W)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a6W,w)},
aaX(d){return this.bBk(d)},
bBk(d){var x=0,w=A.j(y.H),v=this
var $async$aaX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fC(new A.fv(v.a.c)),$async$aaX)
case 2:if(d.e!=null)d.F(y.q).f.P(D.eig)
return A.h(null,w)}})
return A.i($async$aaX,w)},
a_2(d){return this.chf(d)},
chf(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alu(s.d,4),$async$a_2)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_2)
case 8:q=f
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a5(n)
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_2,w)},
gaRs(){var x,w=this.a
if(w.e!==D.FR)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aU(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aU(x,13))
return null},
a6T(d){return this.bBt(d)},
bBt(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRs()
if(t==null){x=1
break}x=3
return A.b(A.fC(new A.fv(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6T)
case 3:if(d.e!=null)d.F(y.q).f.P(D.ejS)
case 1:return A.h(v,w)}})
return A.i($async$a6T,w)},
aaY(){var x=0,w=A.j(y.H),v=this,u
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.SQ(),$async$aaY)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$aaY,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZP(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FR&&i!==D.OS&&i!==D.xQ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FR||t===D.OS||t===D.xQ?l:A.aF(l,l,l,l,C.kB,l,l,l,m.gaU1(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.G(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pj(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bs,A.d(""+q.d+" file(s) \xb7 "+m.gbW9(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FR){t=C.aA.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZm(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aF(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.bC8,D.eMx,new B.cWx(m,d),l)],p))}if(m.a.e===D.FR&&m.gaRs()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a1,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hg(D.byR,D.eJA,new B.cWy(m,d),l)],p))
if(m.a.e===D.xQ){x=(m.w?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cy:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l)],p))}if(m.a.e===D.OS){x=(m.r?C.dr:C.aA).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cy:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.my,l,l,l),C.aa,A.dj(D.buI,D.ePp,m.gchD(),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.ce(v,w,new A.B(C.a8,A.u(A.a([A.C(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.A(A.a([A.C(A.ey(M.Ak,C.R7,new B.cWz(m,d),l),1),C.av,A.C(A.dj(C.xj,C.a4x,new B.cWA(m,d),A.bk(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bJ(C.yk,m.gaU1(),A.bk(C.aK,l,l,l,l,C.fV,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cWB(),y.C)}}
B.a9F.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cf(A.u(A.a([w,C.aN,A.p(x,A.pj(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.ep(A.a([A.bJ(C.BS,new B.cVV(d),x)],u),x,x,C.mk,v,x,x,x,x,D.eDa,x)}}
B.WN.prototype={
S(){return new B.aw2(A.y7(C.wa,C.n3,C.t6))}}
B.aw2.prototype={
p(){this.d.p()
this.a2()},
atb(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).K(t)
return}}},
B(d){var x=null
return A.ce(A.eA(x,x,x,!0,!0,C.x,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eK_,x,x,x,1,x,!0),C.x,A.y6(this.d,C.bM,this.gata()),x,!1,!1,x,x)}}
B.WU.prototype={
S(){return new B.aw8(A.y7(C.wa,C.n3,C.t6))},
gd6(){return this.c}}
B.aw8.prototype={
bSl(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Q8("text/plain"),$async$acI)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.ekM)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acI,w)},
a7G(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7G=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h3f(p,!0),$async$a7G)
case 3:t=e
p=t==null
s=B.a4D(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.eho)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7G,w)},
p(){this.d.p()
this.a2()},
atb(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSl(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahE,v,v,v,w.gbGO(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Yk,v,v,v,w.gc80(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rU:P.L_,v,v,v,v,v),v,v,v,new B.cWF(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.x,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eQa,v,v,v,1,v,!0)
u=A.y6(w.d,C.bM,w.gata())
x=A.m(20)
return A.ce(t,C.x,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.G(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dR5],s),v),v,!1,!1,v,v)}}
B.b9o.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nW
else x=s.w?C.aA:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aA.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nW:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.B(C.VI,A.A(A.a([u,C.ba,A.C(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a6X.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mx.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.UX.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.Mw.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.Dy.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cd2.prototype={}
B.Dx.prototype={}
B.a6W.prototype={}
B.aqC.prototype={}
B.UY.prototype={}
var z=a.updateTypes(["au<~>()","Q(j8)","n(j8)","SH(Y)","~()","WQ(Y)","H(H,j8)","NF(Y)","~(lE)","cp(Dx)","au<j8?>(@)","SF(Y)","SJ(Y)","B(j8)","j8(@)","a0<n,@>(j8)","WP(Y)","SG(Y)","WR(Y)","WO(Y)","WT(Y)","a9F(Y)","ak<j8>()","WU(Y)","a9H(Y,H)","WN(Y)","a0<n,aC>(j8)","cp(UX)","cp(a6W)","au<cp>(Dx)"])
B.ccZ.prototype={
$1(d){var x=this.a
x.x=D.aFH
x.y.H(0,D.aFH)},
$S:68}
B.cd_.prototype={
$1(d){var x=this.a
x.x=D.aFG
x.y.H(0,D.aFG)},
$S:68}
B.cd0.prototype={
$1(d){var x=this.a
x.ae2(A.aLk(d.data)).bw(new B.ccY(x),y.b)},
$S:68}
B.ccY.prototype={
$1(d){var x=this.a
x.z.H(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cd1.prototype={
$1(d){},
$S:68}
B.cd4.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hmm(d.channel))},
$S:15}
B.cd5.prototype={
$1(d){},
$S:15}
B.cd6.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEE(w.iceConnectionState)
x.cx=w
if($.fIe())switch(w.a){case 0:x.cy=D.aFM
break
case 1:x.cy=D.aFN
break
case 3:x.cy=D.aFO
break
case 5:x.cy=D.aFK
break
case 6:x.cy=D.aFL
break
case 7:x.cy=D.a2i
break
default:break}},
$S:142}
B.cd7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hEF(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cd8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hOC(w.signalingState)},
$S:142}
B.cd9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hMW(w.connectionState)},
$S:142}
B.cda.prototype={
$1(d){},
$S:142}
B.cdb.prototype={
$1(d){},
$S:15}
B.f2T.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wb.q(x.objectStoreNames,"blobs")
if(!w)C.w7.Jc(x,"blobs")},
$S:195}
B.fnB.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uI.f1(this.b)
$.eI.lU()
this.c.$1(d)},
$S:449}
B.fnD.prototype={
$1(d){return this.a.$1(B.hv1(this.b,this.c))},
$S:31}
B.fnC.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fnA.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fnQ.prototype={
$1(d){var x=this
return B.fU3(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnR.prototype={
$1(d){var x=this
return B.fU3(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4b.prototype={
$1(d){var x=this
return B.c1Y(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWd.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWa.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1Y(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWc.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1Y(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWb.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c1Y(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWf.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.A(A.a([A.aF(x,x,x,x,D.btl,x,x,x,new B.cWe(d),x,x,x,x,x,x),A.C(A.Dj(D.Np,!0,x,C.Xn,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Np,x,g,C.adF,0,e,f)},
$C:"$4",
$R:4,
$S:429}
B.cWe.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6a.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hn:C.c,r=A.m(28),q=A.p(v,D.baV,C.h,v,v,D.aRz,v,v,v,v,D.adw,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxq,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.B(new A.L(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.B(C.zI,A.u(A.a([o,C.aa,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahT,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ae,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bs,A.A(A.a([A.C(A.dU(C.de,new B.f68(d),v),1),C.av,A.C(A.bJ(D.eID,new B.f69(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JJ,v,v,v,v),v)},
$S:57}
B.f68.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f69.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eiv)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayz(v,x))},
$S:0}
B.f6E.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hn:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.B(new A.L(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baL,C.h,w,w,D.aSV,w,w,w,w,D.adw,w,w,1/0),new A.B(C.zI,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fEA(u,"Organization name",C.E3,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fEA(u,"Access code",C.mD,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fEA(u,"Member password",N.EE,w),C.z,!0,w,!0,w,!1,w,C.ae,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bs,A.bJ(D.eQe,new B.f6D(r,q,p,d),A.bk(C.aA,w,w,w,w,C.fV,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JJ,w,w,w,w),w)},
$S:57}
B.f6D.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eiA)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBG(u,x,w))},
$S:0}
B.c1P.prototype={
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
p=C.a.a_(j,"http")?A.cq(j,0,null):s.b.aO(j)
u=4
x=7
return A.b(A.ut(p,null).cJ(0,C.UH),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Am(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a5(h)
$.al.$1("[doc share lan web] "+A.t(r)+": "+A.t(m))
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
B.c1V.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1W.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c1X.prototype={
$1(d){return d.b},
$S:z+2}
B.c1R.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c1S.prototype={
$1(d){return d.b},
$S:z+2}
B.c1Q.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c1T.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c1U.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fnO.prototype={
$1(d){return new B.SF(this.a,null)},
$S:z+11}
B.fnP.prototype={
$1(d){return new B.SJ(this.a,this.b,this.c,null)},
$S:z+12}
B.dFD.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dGM.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dGN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dGO.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dGL(x,d))},
$S:2}
B.dGL.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGQ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dGR.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dGS.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dGT.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dGU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dGX.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dGV.prototype={
$1(d){var x=this.a
return x.f?null:x.Xk()},
$S:2}
B.dGW.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.ND))s=C.rW
else s=C.a.a_(s,"video/")||d.lZ(D.m3)?C.pb:D.agm
x=this.b.a
w=y.p
return new A.B(C.lm,A.A(A.a([A.p(v,A.V(s,C.aA,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.C(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gam5(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dFE.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dFF.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c1Z.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c2_.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.fok.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f05.prototype={
$1(d){return J.k(d)},
$S:17}
B.f4n.prototype={
$1(d){var x=this.b
B.hta(C.DR.ga3x(this.a)).bw(x.gcwL(x),y.H)},
$S:120}
B.f4o.prototype={
$1(d){return this.a.d_(0,null)},
$S:120}
B.f4p.prototype={
$0(){return null},
$S:11}
B.c2d.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f4q.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.N(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j8(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f8j.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f34.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f35.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2i.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.fsg.prototype={
$1(d){return new B.WP(this.a,null)},
$S:z+16}
B.cW9.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:9}
B.cW7.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cW8.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGK.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zg()},
$S:14}
B.dG7.prototype={
$0(){var x=J.bzL(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dG8.prototype={
$0(){var x=J.bzL(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFH.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dFG(this.b))
if(w>=0){x=x.d
x[w]=x[w].azJ(this.c)}},
$S:0}
B.dFG.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dFI.prototype={
$0(){var x=J.bzL(this.b)
x=A.z(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dFN.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dFM(this.b))
if(w>=0){x=x.d
x[w]=x[w].azJ(this.c)}},
$S:0}
B.dFM.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGy.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dGz.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dG4.prototype={
$1(d){return new B.SG(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dG1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GG(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SK(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rQ(),$async$$0)
case 5:s=J.a6(t)
x=s.gcf(t)?6:7
break
case 6:x=8
return A.b(r.Zr(s.gG(t)),$async$$0)
case 8:case 7:r.hL(s.gah(t)?u.d:u.e+" "+s.gG(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFL.prototype={
$1(d){this.a.a9_(d,"No files selected.","Added")},
$S:449}
B.dGc.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.I(x,new B.dGb(),A.T(x).k("I<1,n>")))},
$S:0}
B.dGb.prototype={
$1(d){return d.a},
$S:z+2}
B.dFR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wf.c2().cIS(C.Wp,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aD.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jd(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a5(j)
$.al.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hL("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hL("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amp(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.hL("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rQ(),$async$$0)
case 9:o.hL("Imported "+J.aa(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dGv.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dGw.prototype={
$1(d){return new B.WR(this.a.a.c,this.b,null)},
$S:z+18}
B.dGx.prototype={
$1(d){return new B.WO(this.a.a.c,this.b,null)},
$S:z+19}
B.dG2.prototype={
$1(d){return new B.NF(this.a.a.c,this.b,null)},
$S:z+7}
B.dG3.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GG(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4F(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hL("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cdN(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.T(t).k("I<1,n>")
r=new A.I(new A.I(t,new B.dGk(p),r),new B.dGl(),r.k("I<ai.E,n>")).bZ(0,new B.dGm())
q=A.z(r,r.$ti.k("F.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cr(A.eH(new B.dGn(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oA(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.SQ(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGk.prototype={
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dGj(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGl.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGm.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGn.prototype={
$1(d){var x=this.a
return new B.WT(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dGp.prototype={
$1(d){return d.a},
$S:z+2}
B.dGq.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGi.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.ks,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gam5(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m3)?C.rY:C.oa
p=!x||p.lZ(D.m3)?"Play video":"View"
return A.bQ(A.br(!0,new A.B(C.zE,A.u(A.a([q,o,t,C.ay,B.WS(!1,u,!1,w,p,new B.dGd(d),v),B.WS(!1,u,!1,C.j1,"Share via QR",new B.dGe(d),"Letters/numbers QR code"),B.WS(!1,u,!1,D.Xs,"Send to their Code",new B.dGf(d),"Enter someone else's personal code"),B.WS(!1,u,!1,C.hi,"Download / save",new B.dGg(d),v),C.ar,B.WS(!1,u,!0,C.e4,"Delete",new B.dGh(d),v)],y.p),C.ad,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c2(new A.ax(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b7)},
$S:684}
B.dGd.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGe.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGf.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGg.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGh.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dFO.prototype={
$1(d){return d.a},
$S:z+2}
B.dFP.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dFQ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4H(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.ES(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oA(s.c,s.f),$async$$0)
case 4:u.hL(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFK.prototype={
$1(d){var x=this.a
x.rR(new B.dFJ(x,d,this.b),"Preparing\u2026")},
$S:449}
B.dFJ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hL("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SK(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.hL("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byJ(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hL("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG5.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dG6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fzO(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.H(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dG_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.EP(new B.dFW(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hL("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dFX(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dFY(s))
case 5:x=8
return A.b(r.b.i0(0,C.Do,new B.dFZ()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hL("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hL("Received "+q.gG(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFW.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFT(x,d,e))},
$S:132}
B.dFT.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFX.prototype={
$1(d){return new B.a9F(this.a.a,null)},
$S:z+21}
B.dFY.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dFZ.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dG0.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GI(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4v(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aVU(B.GI(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amp(new B.dFU(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fzN(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hL(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eC(r,new B.dFV()).gG(0)
s.hL(p>0?"Received "+p+" video(s).":"Restored "+o.gG(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dFU.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dFS(x,d,e))},
$S:132}
B.dFS.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dFV.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.dGa.prototype={
$1(d){return new B.WU(this.a.a.c,null)},
$S:z+23}
B.dG9.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aW2(u.a.c,v.b),$async$$0)
case 2:t.hL(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGu.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aA.j(0.35)
return A.bQ(A.br(!0,new A.B(C.zE,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.ks,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.WS(!0,w,!1,C.mD,"My Code",new B.dGr(d),"Your personal code & QR \u2014 others send docs to you"),B.WS(!1,w,!1,D.Xs,"Send to their Code",new B.dGs(this.a,d),"Enter someone else's 5-digit code + letter"),B.WS(!1,w,!1,S.x8,"Import backup",new B.dGt(d),".ngmydoc file from another device")],y.p),C.ad,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c2(new A.ax(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b7)},
$S:684}
B.dGr.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dGs.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvI()},
$S:0}
B.dGt.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dGH.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.GR(D.Np,x,C.Xn,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cI(C.d.gI(D.Np).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:649}
B.dGF.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dGG.prototype={
$0(){this.a.af_()
return null},
$S:0}
B.dGI.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dGJ.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9H(e,w,v,this.b,x.e,x.bZn(w),new B.dGB(x,w),new B.dGC(x,v,w),new B.dGD(x,w),new B.dGE(x,w),null)},
$S:z+24}
B.dGB.prototype={
$0(){this.a.acf(this.b)
return null},
$S:0}
B.dGC.prototype={
$0(){var x=this.a
return x.n(new B.dGA(x,this.b,this.c))},
$S:0}
B.dGA.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.H(0,w)},
$S:0}
B.dGD.prototype={
$0(){this.a.Mc(this.b)
return null},
$S:0}
B.dGE.prototype={
$0(){this.a.aeN(this.b)
return null},
$S:0}
B.cW5.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cW6.prototype={
$3(d,e,f){return A.e4(C.B,f,e,null,null)},
$S:134}
B.cWt.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cWs.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWp.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWq.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWr.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWn.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aD.gah(w))return A.fD(w,C.B,x,new B.cWl(this.a),C.fG,C.dp,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWm(this.a))
return C.bF},
$S:140}
B.cWl.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWj(this.a))
return C.bF},
$S:185}
B.cWj.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWg(x))},
$S:9}
B.cWg.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWm.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWi(x))},
$S:9}
B.cWi.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWo.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWk(this.a))
return C.bF},
$S:185}
B.cWk.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWh(x))},
$S:9}
B.cWh.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cW2.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW1(x,d))},
$S:1734}
B.cW1.prototype={
$0(){return this.a.f=this.b===C.tu},
$S:0}
B.cW3.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW0(x,d))},
$S:9}
B.cW0.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cW4.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cW_(x,d))},
$S:9}
B.cW_.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cVW.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cVX.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cVY.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cVZ.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cWG.prototype={
$0(){var x=this.a.a
return B.qN(x.c,x.d)},
$S:1735}
B.cWH.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cWI.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cWJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cWK.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cWL.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cWN.prototype={
$0(){var x=this.a
x.n(new B.cWM(x))},
$S:0}
B.cWM.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cWC.prototype={
$1(d){return this.a.OK(this.b)},
$S:14}
B.cWD.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cWu.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWv.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWw.prototype={
$1(d){return D.f2k},
$S:z+25}
B.cWB.prototype={
$2(d,e){if(d)B.SQ()},
$S:118}
B.cWx.prototype={
$0(){return this.a.a6W(this.b)},
$S:0}
B.cWy.prototype={
$0(){return this.a.a6T(this.b)},
$S:0}
B.cWz.prototype={
$0(){return this.a.aaX(this.b)},
$S:0}
B.cWA.prototype={
$0(){return this.a.a_2(this.b)},
$S:0}
B.cVV.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cWF.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cWE(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cWE.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2k.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m3)},
$S:z+1}
B.c2l.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.D(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2j.prototype={
$2(d,e){return this.bds(d,e)},
bds(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SR(u.c,A.D(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1736}
B.f7X.prototype={
$1(d){if(d===D.a2h&&(this.a.a.a&30)===0)this.a.fA(0)},
$S:z+27}
B.f7Y.prototype={
$0(){},
$S:11}
B.f8r.prototype={
bf0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eYn(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fPj(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bf0(d,e)},
$S:525}
B.f8q.prototype={
$1(d){var x=this
d.b=new B.f8p(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f8p.prototype={
$1(d){return this.bf_(d)},
bf_(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aW3(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.H(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aC(0,n,null)
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
return A.b(B.eYn(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d_(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a5(j)
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4E(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d_(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aw5.prototype,"gc53","Ol",0)
x(v,"gc5T","HE",0)
x(v,"gc5p","wU",0)
x(v=B.azW.prototype,"gbZh","aaV",0)
x(v,"gbZi","Xj",0)
x(v,"gcjZ","aev",0)
x(v=B.azZ.prototype,"gbZj","Xk",0)
x(v,"gck_","a_n",0)
x(B.azX.prototype,"gbZk","aaW",0)
x(B.aw4.prototype,"gbZp","bZq",4)
x(v=B.azY.prototype,"gc5q","Yn",0)
x(v,"gciB","ciC",4)
x(v,"gaWX","aus",0)
x(v,"gclq","aeU",0)
x(v,"gbHf","Vn",0)
x(v,"gbZo","CV",0)
x(B.aw6.prototype,"gb_F","a_m",0)
x(B.aw3.prototype,"gbZr","Xl",0)
x(v=B.aw9.prototype,"gaVJ","c3M",4)
x(v,"gbZl","aaZ",0)
x(v=B.aw7.prototype,"gchD","a_7",0)
x(v,"gaU1","aaY",0)
w(B.aw2.prototype,"gata","atb",8)
x(v=B.aw8.prototype,"gc80","acI",0)
x(v,"gbGO","a7G",0)
w(v,"gata","atb",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cd2,B.a6W,B.aqC,B.ayz,B.aBG,B.j8,B.a9n,B.bqT,B.Dx,B.UY])
w(B.cd3,B.cd2)
w(B.b0a,B.a6W)
x(A.i1,[B.ccZ,B.cd_,B.cd0,B.ccY,B.cd1,B.cd4,B.cd5,B.cd6,B.cd7,B.cd8,B.cd9,B.cda,B.cdb,B.f2T,B.fnB,B.fnD,B.fnC,B.fnQ,B.fnR,B.f4b,B.cWa,B.cWc,B.cWb,B.cWf,B.f6a,B.f6E,B.c1P,B.c1W,B.c1X,B.c1S,B.c1Q,B.c1T,B.c1U,B.fnO,B.fnP,B.dGO,B.dGX,B.dGV,B.dGW,B.f05,B.f4n,B.f4o,B.c2d,B.f4q,B.f8j,B.f34,B.f35,B.c2i,B.fsg,B.cW9,B.cW7,B.dGK,B.dFG,B.dFM,B.dG4,B.dFL,B.dGb,B.dGv,B.dGw,B.dGx,B.dG2,B.dGk,B.dGj,B.dGl,B.dGm,B.dGn,B.dGp,B.dGq,B.dGi,B.dFO,B.dFP,B.dFK,B.dG5,B.dFX,B.dFV,B.dGa,B.dGu,B.dGH,B.dGI,B.cW5,B.cW6,B.cWt,B.cWs,B.cWn,B.cWl,B.cWj,B.cWm,B.cWo,B.cWk,B.cW2,B.cW3,B.cW4,B.cVZ,B.cWC,B.cWD,B.cWw,B.c2k,B.c2l,B.f7X,B.f8q,B.f8p])
w(B.b0b,B.aqC)
x(A.jk,[B.fnA,B.cWd,B.cWe,B.f68,B.f69,B.f6D,B.dFD,B.dGM,B.dGN,B.dGL,B.dGP,B.dGQ,B.dGR,B.dGS,B.dGT,B.dGU,B.dFE,B.dFF,B.f4p,B.cW8,B.dG7,B.dG8,B.dFH,B.dFI,B.dFN,B.dGy,B.dGz,B.dG1,B.dGc,B.dFR,B.dG3,B.dGo,B.dGd,B.dGe,B.dGf,B.dGg,B.dGh,B.dFQ,B.dFJ,B.dG6,B.dG_,B.dFT,B.dFY,B.dFZ,B.dG0,B.dFS,B.dG9,B.dGr,B.dGs,B.dGt,B.dGF,B.dGG,B.dGB,B.dGC,B.dGA,B.dGD,B.dGE,B.cWp,B.cWq,B.cWr,B.cWg,B.cWi,B.cWh,B.cW1,B.cW0,B.cW_,B.cVW,B.cVX,B.cVY,B.cWG,B.cWH,B.cWI,B.cWJ,B.cWK,B.cWL,B.cWN,B.cWM,B.cWu,B.cWv,B.cWx,B.cWy,B.cWz,B.cWA,B.cVV,B.cWF,B.cWE,B.f7Y])
x(A.mb,[B.a9G,B.Lu,B.a6X,B.Mx,B.UX,B.Mw,B.Dy])
x(A.ae,[B.WQ,B.SF,B.SJ,B.SG,B.WP,B.SH,B.WR,B.WO,B.NF,B.WT,B.WN,B.WU])
x(A.ag,[B.aw5,B.azW,B.azZ,B.azX,B.aw4,B.azY,B.aw6,B.aw3,B.aw9,B.aw7,B.aw2,B.aw8])
x(A.ar,[B.aa7,B.aw1,B.b9n,B.a9H,B.a9F,B.b9o])
x(A.kw,[B.c1V,B.c1R,B.c1Z,B.c2_,B.fok,B.dFW,B.dFU,B.dGJ,B.cWB,B.c2j,B.f8r])
x(A.iG,[B.beF,B.bqy])})()
A.kd(b.typeUniverse,JSON.parse('{"b0a":{"a6W":[]},"b0b":{"aqC":[]},"WQ":{"ae":[],"r":[]},"aw5":{"ag":["WQ"]},"aa7":{"ar":[],"r":[]},"SF":{"ae":[],"r":[]},"SJ":{"ae":[],"r":[]},"azW":{"ag":["SF"]},"azZ":{"ag":["SJ"]},"beF":{"iG":[]},"SG":{"ae":[],"r":[]},"azX":{"ag":["SG"]},"WP":{"ae":[],"r":[]},"SH":{"ae":[],"r":[]},"a9H":{"ar":[],"r":[]},"WR":{"ae":[],"r":[]},"WO":{"ae":[],"r":[]},"NF":{"ae":[],"r":[]},"WT":{"ae":[],"r":[]},"a9F":{"ar":[],"r":[]},"WN":{"ae":[],"r":[]},"WU":{"ae":[],"r":[]},"aw4":{"ag":["WP"]},"bqy":{"iG":[]},"azY":{"ag":["SH"]},"aw1":{"ar":[],"r":[]},"b9n":{"ar":[],"r":[]},"aw6":{"ag":["WR"]},"aw3":{"ag":["WO"]},"aw9":{"ag":["NF"]},"aw7":{"ag":["WT"]},"aw2":{"ag":["WN"]},"aw8":{"ag":["WU"]},"b9o":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tu"),k:x("K0()"),m:x("bt<n,n>"),F:x("qq"),g:x("au<j8?>"),x:x("au<~>"),V:x("M<a9>"),O:x("M<x>"),W:x("M<be>"),Y:x("M<a0<n,Q>>"),t:x("M<a0<n,@>>"),r:x("M<j8>"),w:x("M<+file,name(le,n)>"),u:x("M<cI>"),s:x("M<n>"),E:x("M<iG>"),a:x("M<dz>"),p:x("M<r>"),Z:x("M<H>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("ak<j8>"),j:x("ak<@>"),I:x("ak<H>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hSp"),af:x("CN"),U:x("j8"),b:x("cp"),C:x("aC"),aK:x("vf"),ab:x("Dx"),br:x("aqC"),v:x("UY"),N:x("n"),X:x("bm<P>"),Q:x("lp"),D:x("dz"),aw:x("cv<n>"),cd:x("a4<a0<n,@>>"),c7:x("r"),ch:x("bM<ak<j8>>"),aW:x("bM<dz?>"),aY:x("bM<~>"),cx:x("a9G"),b1:x("bd<ak<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayz"),bG:x("aBG"),q:x("mz"),B:x("oR<Dx>"),c6:x("oR<a6X>"),y:x("Q"),i:x("P"),z:x("@"),S:x("H"),aQ:x("be?"),_:x("ak<j8>?"),aL:x("ak<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aC?"),c:x("UY?"),d:x("+answerQr,transfer(n,au<ak<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Lu,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9n?"),bk:x("ayz?"),ag:x("aBG?"),dd:x("P?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPX=new A.ax(C.aA,2,C.r,-1)
D.bFx=new A.a8(C.a_,C.a7,C.w,C.Zn,null,null)
D.aRz=new A.o(null,null,null,C.mh,null,D.bFx,C.n)
D.aSV=new A.o(null,null,null,C.mh,null,E.EQ,C.n)
D.a8_=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8W=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9D=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ab_=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eE1=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eR5=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cMw=x([D.eE1,C.ar,D.eR5],y.p)
D.baC=new A.fd(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cMw,null)
D.eV_=new A.w("Create your organization",null,C.h8,null,null,null,null,null,null,null,null,null)
D.eHY=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.d_5=x([D.eV_,C.ar,D.eHY],y.p)
D.baL=new A.fd(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_5,null)
D.eRD=new A.w("Team Member sign-in",null,C.h8,null,null,null,null,null,null,null,null,null)
D.eLr=new A.w("Enter the access code and password from your organization.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cYg=x([D.eRD,C.ar,D.eLr],y.p)
D.baV=new A.fd(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYg,null)
D.bfK=new A.L(16,10,16,28)
D.bfS=new A.L(16,14,16,4)
D.bh5=new A.L(20,0,20,16)
D.bhB=new A.L(20,8,20,16)
D.adw=new A.L(24,22,24,20)
D.Xs=new A.a_(63394,"MaterialIcons",!1)
D.agm=new A.a_(63515,"MaterialIcons",!1)
D.brh=new A.a_(983813,"MaterialIcons",!1)
D.bou=new A.a_(62867,"MaterialIcons",!1)
D.bsf=new A.ac(D.bou,44,C.c,null,null,null)
D.btl=new A.ac(C.rQ,null,C.al,null,null,null)
D.buI=new A.ac(C.iF,18,null,null,null,null)
D.bwm=new A.ac(D.Xs,26,C.c,null,null,null)
D.bwS=new A.ac(C.Eu,null,null,null,null,null)
D.bxq=new A.ac(C.xa,null,null,null,null,null)
D.byw=new A.ac(W.Ld,null,null,null,null,null)
D.byR=new A.ac(C.h3,16,null,null,null,null)
D.bC8=new A.ac(C.qk,16,null,null,null,null)
D.bsx=new A.ac(C.mD,null,null,null,null,null)
D.bD_=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxX=new A.ac(C.E3,null,null,null,null,null)
D.bD3=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxX,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bsS=new A.ac(N.EE,null,null,null,null,null)
D.bDd=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsS,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coK=x([C.eT,C.aW,C.aA],y.O)
D.bHg=new A.a8(C.ax,C.aE,C.w,D.coK,null,null)
D.cof=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Np=x([C.eT,C.aA],y.O)
D.ND=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m3=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTC=x([C.q3,C.aA],y.O)
D.dIj={iceServers:0}
D.aAE={urls:0}
D.d2F=new A.bt(D.aAE,["stun:stun.l.google.com:19302"],y.m)
D.d2E=new A.bt(D.aAE,["stun:stun1.l.google.com:19302"],y.m)
D.cDM=x([D.d2F,D.d2E],A.aA("M<a0<n,n>>"))
D.d2_=new A.bt(D.dIj,[D.cDM],A.aA("bt<n,@>"))
D.FR=new B.Lu(0,"lanDirect")
D.OR=new B.Lu(1,"cloudStash")
D.ddK=new B.Lu(2,"inlineInstant")
D.OS=new B.Lu(3,"webrtcLink")
D.xQ=new B.Lu(4,"videoCloud")
D.eR4=new A.w("Receive file",null,C.mU,null,null,null,null,null,null,null,null,null)
D.cet=x([E.ai1,C.ab,D.eR4],y.p)
D.eaQ=new A.cC(C.aY,C.b5,C.j,C.m,null,C.p,null,0,D.cet,null)
D.dMF=new A.B(C.ca,D.eaQ,null)
D.evB=new A.E(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a_0,null,null,null)
D.eEx=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.evB,null,C.L,null,null,null,null,null,null,null)
D.dM_=new A.B(C.zL,D.eEx,null)
D.aWV=new A.cw(C.B,null,null,D.dM_,null)
D.dR5=new A.cE(0,null,0,28,null,null,D.aWV,null)
D.dRn=new B.a6X(0,"RTCDataChannelConnecting")
D.aFG=new B.a6X(1,"RTCDataChannelOpen")
D.aFH=new B.a6X(3,"RTCDataChannelClosed")
D.dRo=new B.Dy(0,"RTCIceConnectionStateNew")
D.dRp=new B.Dy(1,"RTCIceConnectionStateChecking")
D.dRq=new B.Dy(2,"RTCIceConnectionStateCompleted")
D.dRr=new B.Dy(3,"RTCIceConnectionStateConnected")
D.dRs=new B.Dy(4,"RTCIceConnectionStateCount")
D.dRt=new B.Dy(5,"RTCIceConnectionStateFailed")
D.dRu=new B.Dy(6,"RTCIceConnectionStateDisconnected")
D.aFI=new B.Dy(7,"RTCIceConnectionStateClosed")
D.aFJ=new B.UX(0,"RTCIceGatheringStateNew")
D.dRv=new B.UX(1,"RTCIceGatheringStateGathering")
D.a2h=new B.UX(2,"RTCIceGatheringStateComplete")
D.a2i=new B.Mw(0,"RTCPeerConnectionStateClosed")
D.aFK=new B.Mw(1,"RTCPeerConnectionStateFailed")
D.aFL=new B.Mw(2,"RTCPeerConnectionStateDisconnected")
D.aFM=new B.Mw(3,"RTCPeerConnectionStateNew")
D.aFN=new B.Mw(4,"RTCPeerConnectionStateConnecting")
D.aFO=new B.Mw(5,"RTCPeerConnectionStateConnected")
D.dRw=new B.Mx(0,"RTCSignalingStateStable")
D.dRx=new B.Mx(1,"RTCSignalingStateHaveLocalOffer")
D.dRy=new B.Mx(2,"RTCSignalingStateHaveRemoteOffer")
D.dRz=new B.Mx(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dRA=new B.Mx(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFP=new B.Mx(5,"RTCSignalingStateClosed")
D.eeo=new A.ap(160,48)
D.aY2=new A.f9(2,null,null,null,null,C.aA,null,null,null,null)
D.efP=new A.a3(16,16,D.aY2,null)
D.eHp=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ehe=new A.aY(D.eHp,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eOb=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.ehh=new A.aY(D.eOb,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eW_=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eho=new A.aY(D.eW_,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eH2=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.ehO=new A.aY(D.eH2,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRM=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI8=new A.aY(D.eRM,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eT1=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eig=new A.aY(D.eT1,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXi=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eiv=new A.aY(D.eXi,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eVr=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eiA=new A.aY(D.eVr,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWA=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ejl=new A.aY(D.eWA,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eFN=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ejS=new A.aY(D.eFN,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.ePS=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ekc=new A.aY(D.ePS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eJq=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ekI=new A.aY(D.eJq,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXo=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ekM=new A.aY(D.eXo,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eG1=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ekS=new A.aY(D.eG1,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eER=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.el6=new A.aY(D.eER,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eC_=new A.w("NGMY DOC SHARE",null,C.aJo,null,null,null,null,null,null,null,null,null)
D.eDa=new A.w("Show this to sender",null,C.kc,null,null,null,null,null,null,null,null,null)
D.eE7=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eIk=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eID=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eJA=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eK_=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eMx=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eP6=new A.w("Send to their Doc Share",null,C.mT,null,null,null,null,null,null,null,null,null)
D.ePp=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ePH=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eQa=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eQe=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eQB=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eJ,null,null,null,null,null,null,null,null,null)
D.eTs=new A.w("Share files & videos\nwith a scan.",null,C.aJp,null,null,null,null,null,null,null,null,null)
D.eTK=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f2k=new B.WN(null)
D.a5a=new B.a9G(0,"docShare")
D.a5b=new B.a9G(1,"gate")
D.RB=new B.a9G(2,"gateNoIndividual")})();(function staticFields(){$.aKc=null
$.eWe=function(){var x=y.N
return A.R(x,x)}()
$.EE=A.R(y.N,y.D)
$.adC=A.R(y.N,A.aA("le"))
$.OX=A.R(y.N,y.D)
$.eWL=A.R(y.N,A.aA("a9n"))
$.c2c=A.R(y.S,A.aA("bqT"))
$.fPi=1
$.hAG=null
$.hAF=null
$.hsD=null
$.fEM=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hSU","h52",()=>new B.cd3())
x($,"hQP","fIe",()=>C.a.q(A.bp(A.bp(A.bp(A.F9(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["XAhNCaYUExLHZYpAuwK5qaJdBrk="]=a.current})($__dart_deferred_initializers__);