((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={chB:function chB(){},
hCU(d){var x=null,w=new B.b2F(d,D.eay,new A.pf(x,x,y.c6),new A.pf(x,x,y.B))
w.bwh(d)
return w},
b2F:function b2F(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
chw:function chw(d){this.a=d},
chx:function chx(d){this.a=d},
chy:function chy(d){this.a=d},
chv:function chv(d){this.a=d},
chz:function chz(d){this.a=d},
hCV(d,e){var x=y.N
x=new B.b2G(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwi(d,e)
return x},
b2G:function b2G(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
chC:function chC(d){this.a=d},
chD:function chD(d){this.a=d},
chE:function chE(d){this.a=d},
chF:function chF(d){this.a=d},
chG:function chG(d){this.a=d},
chH:function chH(d){this.a=d},
chI:function chI(d){this.a=d},
chJ:function chJ(d){this.a=d},
fUg(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.ym.Lv(x,"ngmy_doc_share_v1",new B.fgq(),1)},
hJp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eY(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zG(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
Qw(d,e){return B.hYz(d,e)},
hYz(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qw=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMo
x=7
return A.b(o==null?$.aMo=B.fUg():o,$async$Qw)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mD(s,"blobs","readwrite")
C.iD.mc(J.mB(q,"blobs"),r,d)
x=8
return A.b(J.po(q),$async$Qw)
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
return A.i($async$Qw,w)},
Qv(d){return B.hYy(d)},
hYy(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMo
x=7
return A.b(o==null?$.aMo=B.fUg():o,$async$Qv)
case 7:s=f
r=J.mD(s,"blobs","readonly")
x=8
return A.b(C.iD.zd(J.mB(r,"blobs"),d),$async$Qv)
case 8:q=f
x=9
return A.b(J.po(r),$async$Qv)
case 9:o=B.hJp(q)
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
return A.i($async$Qv,w)},
ag_(d){return B.hYx(d)},
hYx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ag_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMo
x=7
return A.b(p==null?$.aMo=B.fUg():p,$async$ag_)
case 7:s=f
r=J.mD(s,"blobs","readwrite")
C.iD.Fo(J.mB(r,"blobs"),d)
x=8
return A.b(J.po(r),$async$ag_)
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
return A.i($async$ag_,w)},
fgq:function fgq(){},
hLM(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bn3(w,v))}return u},
hiV(d,e){var x,w={},v=A.aUN("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fCD(w,v,e)
C.vF.y5(v,"change",new B.fCF(w,v,!1))
C.vF.y5(v,"cancel",new B.fCE(w))
$.eU.mj()
v.click()
A.bN(C.afD,new B.fCC(w),y.H)},
fCD:function fCD(d,e,f){this.a=d
this.b=e
this.c=f},
fCF:function fCF(d,e,f){this.a=d
this.b=e
this.c=f},
fCE:function fCE(d){this.a=d},
fCC:function fCC(d){this.a=d},
CC(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CC=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gT2()?3:4
break
case 3:x=5
return A.b(B.he6(e,d,s,!0,!1,f,g,h,!1,i),$async$CC)
case 5:x=1
break
case 4:x=6
return A.b(B.Qa(d,s,f,g,h,i),$async$CC)
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
return A.b(B.HZ(s,d),$async$CC)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fbS(s,d),$async$CC)
case 14:x=12
return A.b(r.he6(q,p,o,n,m,l,k,j,a1,i),$async$CC)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).c8(A.e8(new B.fCS(s,i,d,f,g,h),!1,null,y.H)),$async$CC)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).c8(A.e8(new B.fCT(s,i,d,f,g,h),!1,null,y.H)),$async$CC)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CC,w)},
Qa(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Qa=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYr(e),$async$Qa)
case 3:u=k
x=4
return A.b(B.ao_(d,e,!1),$async$Qa)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HZ(e,d),$async$Qa)
case 7:if(k){v=D.a8a
x=1
break}x=8
return A.b(B.U7(e),$async$Qa)
case 8:v=t?D.TS:D.a8b
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYp(d,e)){v=D.a8a
x=1
break}x=11
return A.b(B.U7(e),$async$Qa)
case 11:v=t?D.TS:D.a8b
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fPs(d,e)){v=D.a8a
x=1
break}x=14
return A.b(B.U7(e),$async$Qa)
case 14:v=D.TS
x=1
break
case 13:v=t?D.TS:D.a8b
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qa,w)},
fbS(d,e){var x=0,w=A.j(y.y),v
var $async$fbS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYp(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYr(d),$async$fbS)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbS,w)},
he6(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).c8(A.e8(new B.fi4(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h9f(d,e,f,g,h,i,j){return new B.Yl(e,j,d,g,h,i,f,null)},
fk0(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fk0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fk3(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fk0)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fk0,w)},
fkv(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fkv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fkx(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fkv)
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
return A.i($async$fkv,w)},
fUp(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fvd(d,e){var x=0,w=A.j(y.H),v
var $async$fvd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.U7(e),$async$fvd)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eI()
case 1:return A.h(v,w)}})
return A.i($async$fvd,w)},
fCS:function fCS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCT:function fCT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abj:function abj(d,e){this.a=d
this.b=e},
fi4:function fi4(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yl:function Yl(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ay0:function ay0(){this.c=this.a=this.d=null},
d0u:function d0u(d,e){this.a=d
this.b=e},
d0r:function d0r(d){this.a=d},
d0t:function d0t(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0w:function d0w(){},
d0v:function d0v(d){this.a=d},
abM:function abM(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAz:function aAz(d,e){this.a=d
this.b=e},
aDL:function aDL(d,e,f){this.a=d
this.b=e
this.c=f},
fk3:function fk3(d,e,f){this.a=d
this.b=e
this.c=f},
fk1:function fk1(d){this.a=d},
fk2:function fk2(d,e,f){this.a=d
this.b=e
this.c=f},
fkx:function fkx(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fkw:function fkw(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c64(d,e,f,g,h){return B.hxO(d,e,f,g,h)},
hxO(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c64=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c65(s,e,h,g,f,q),y.g),y.l),$async$c64)
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
return A.i($async$c64,w)},
aYm(d,e,f,g,h){return B.hxP(d,e,f,g,h)},
hxP(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYm=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atg("GET",d)
o=A.fLV()
if(o==null)o=new A.Lf(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.ET),$async$aYm)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BW(),$async$aYm)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bd(q,h,o,e,f,"Received via QR")
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
return A.i($async$aYm,w)},
aYl(d){return B.hxM(d)},
hxM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYl=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v4(d,null).cM(0,C.nO),$async$aYl)
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
return A.i($async$aYl,w)},
c63(d){return B.hxN(d)},
hxN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c63=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v4(d,null).cM(0,C.pD),$async$c63)
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
return A.i($async$c63,w)},
c65:function c65(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jh:function jh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HX(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hxU(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HX(C.a.b0(u,v.length))}return null},
hxV(d){var x=B.HX(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hxQ(){var x,w=$.pl(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fW(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a61(d){return B.hxR(d)},
hxR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a61=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f2(d,null,!1,C.bG),$async$a61)
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
return A.i($async$a61,w)},
a62(d,e){return B.hxS(d,e)},
hxS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a62=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cG,null),$async$a62)
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
return A.i($async$a62,w)},
Bc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Bc)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HX(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a63(r),$async$Bc)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a61("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bc)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HX(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bc)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hxQ()
x=14
return A.b(B.a63(m),$async$Bc)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a62("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bc)
case 15:k=f
x=16
return A.b(B.a62("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bc)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bc)
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
return A.i($async$Bc,w)},
a63(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a63=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HX(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a61("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a63)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a63,w)},
a64(d,e,f,g){return B.hxW(d,e,f,g)},
hxW(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a64=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HX(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a63(r),$async$a64)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c6b())>1048576||g.b7(d,new B.c6c())){v=B.E7(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a6f("myCode",d,a0),$async$a64)
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
v=B.E7(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYu(u,g.gM(d),a0),$async$a64)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pl().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c6d(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYn(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a64)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a64,w)},
E7(d,e,f,g,h){return B.hxT(d,e,f,g,h)},
hxT(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E7=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$E7)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c67())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pl().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
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
a1=B.I0(a9,q)
a0=new A.JQ(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$E7)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eX().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oP(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9B(a1.a,a4,"media",a1.d,a2).wG(m,n,new A.Dp(!0,q.c)),$async$E7)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$E7)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOT(r),$async$E7)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c68(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYn(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$E7)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOT(r),$async$E7)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E7,w)},
aYn(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a61(t),$async$aYn)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c66(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a62(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYn,w)},
MR(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MR=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a61("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MR)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cl(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gS(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aYo(k,a0),$async$MR)
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
return A.b(B.aYt(h),$async$MR)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ue(g,a0),$async$MR)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c69(),q),n)
d=A.B(new A.a2(r,new B.c6a(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a62("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MR)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MR,w)},
aYo(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cl(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
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
break}i=B.i1l(k,j)
C.d.v(s,i)
x=5
return A.b(B.CA(l,m,"Received via My Code",t,e,i),$async$aYo)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOT(s),$async$aYo)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYo,w)},
c6b:function c6b(){},
c6c:function c6c(){},
c6d:function c6d(){},
c67:function c67(){},
c68:function c68(){},
c66:function c66(){},
c69:function c69(){},
c6a:function c6a(){},
fCP(d,e){var x=0,w=A.j(y.H)
var $async$fCP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).c8(A.e8(new B.fCQ(e),!1,null,y.H)),$async$fCP)
case 2:return A.h(null,w)}})
return A.i($async$fCP,w)},
bBM(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBM=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cl(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).c8(A.e8(new B.fCR(g,e,f),!1,null,y.y)),$async$bBM)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBM,w)},
fCQ:function fCQ(d){this.a=d},
fCR:function fCR(d,e,f){this.a=d
this.b=e
this.c=f},
U4:function U4(d,e){this.c=d
this.a=e},
aBW:function aBW(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dN2:function dN2(d,e){this.a=d
this.b=e},
U8:function U8(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBZ:function aBZ(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dOb:function dOb(d){this.a=d},
dOc:function dOc(d){this.a=d},
dOd:function dOd(d){this.a=d},
dOa:function dOa(d,e){this.a=d
this.b=e},
dOe:function dOe(d){this.a=d},
dOf:function dOf(d){this.a=d},
dOg:function dOg(d,e){this.a=d
this.b=e},
dOh:function dOh(d,e){this.a=d
this.b=e},
dOi:function dOi(d,e){this.a=d
this.b=e},
dOj:function dOj(d){this.a=d},
dOm:function dOm(){},
dOk:function dOk(d){this.a=d},
dOl:function dOl(d,e){this.a=d
this.b=e},
bhl:function bhl(){},
U5:function U5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBX:function aBX(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dN3:function dN3(d){this.a=d},
dN4:function dN4(d){this.a=d},
fPt(d){var x=d.hN
if(x>=0)return C.o.N(x)
return 10},
hxY(d){var x=d.kB
if(x>=0)return x
return 4.99},
hxX(d){var x=d.lj,w=y.N
w=x.iW(x,new B.c6f(),w,w)
return w},
h4k(d){var x=d.kC,w=y.N
w=x.iW(x,new B.c6g(),w,w)
return w},
aYr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aYr)
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
return A.i($async$aYr,w)},
a66(d,e){var x=0,w=A.j(y.H),v,u
var $async$a66=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a66)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a66)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a66,w)},
U7(d){var x=0,w=A.j(y.H),v,u
var $async$U7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$U7)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$U7)
case 3:case 1:return A.h(v,w)}})
return A.i($async$U7,w)},
fPs(d,e){var x,w,v
if(B.hxY(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hxX(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYp(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h4k(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h4l(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h4k(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kC=w},
ao0(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ao0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$ao0)
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
return A.i($async$ao0,w)},
ao1(d){var x=0,w=A.j(y.H),v,u,t
var $async$ao1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ao0(d),$async$ao1)
case 3:u=f
x=5
return A.b(A.az(),$async$ao1)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$ao1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ao1,w)},
ao_(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$ao_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fPt(d)
if(u<=0){v=!1
x=1
break}if(B.fPs(d,e)){v=!1
x=1
break}x=3
return A.b(B.ao0(e),$async$ao_)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao_,w)},
aYq(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HZ(e,d),$async$aYq)
case 3:if(g){v=-1
x=1
break}u=B.fPt(d)
if(u<=0){v=-1
x=1
break}if(B.fPs(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ao0(e),$async$aYq)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYq,w)},
c6i(d,e,f){var x=0,w=A.j(y.y),v
var $async$c6i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HZ(e,d),$async$c6i)
case 3:if(h){v=!1
x=1
break}v=B.ao_(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6i,w)},
c6h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c6h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c6i(d,u,i.gT2()),$async$c6h)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6h,w)},
a65(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a65=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gT2()){v=!0
x=1
break}if(B.aYp(d,u)){v=!0
x=1
break}x=5
return A.b(A.le(u,C.Rg),$async$a65)
case 5:x=k?3:4
break
case 3:B.h4l(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a65)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kR(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rg,"Doc Share for Organizations"),$async$a65)
case 7:if(!k){v=!1
x=1
break}B.h4l(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a65)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a65,w)},
c6f:function c6f(){},
c6g:function c6g(){},
fDr(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fDr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fDr)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f8A.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hM([r],e.c))
s.toString
$.f8A.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDr,w)},
i3D(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f8A.bn($.f8A,new B.fDt(d))},
fDt:function fDt(d){this.a=d},
f9Y(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f9Y=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.jb,null,y.H),$async$f9Y)
case 3:C.zI.f9(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mj()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9Y,w)},
aeQ(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeQ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f97.n(0,d,new B.ab0(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeQ)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aeQ)
case 2:return A.h(null,w)}})
return A.i($async$aeQ,w)},
aeK(d){return B.hNB(d)},
hNB(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f97.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aeK)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cl(s)){v=null
x=1
break}o=J.b6(s,new B.fdD(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.ab0(r)
$.f97.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeK,w)},
Q0(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Q0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FM.n(0,d,u)
x=3
return A.b(B.Qw(d,u),$async$Q0)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q0,w)},
aMK(d){return B.hNz(d)},
hNz(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FM.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qv(d),$async$aMK)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FM.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aMK)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cE.aJ(r)
x=!J.cl(q)?9:10
break
case 9:B.Q0(d,q)
x=11
return A.b(J.hC(s,d),$async$aMK)
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
return A.i($async$aMK,w)},
hJM(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eY(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zG(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a0K(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0K=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fig(r,t),!1,s)
A.fH(r,"error",new B.fih(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ic(0,C.Lq,new B.fii())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0K,w)},
aN3(d,e,f){return B.hPQ(d,e,f)},
hPQ(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aN3=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0K(i),$async$aN3)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qw(o,p),$async$aN3)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aeQ(k,j,s),$async$aN3)
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
return A.i($async$aN3,w)},
aN2(d,e,f){return B.hPP(d,e,f)},
hPP(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aN2=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aN3(d,e,f),$async$aN2)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0K(f),$async$aN2)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FM.n(0,s,r)
$.Qh.n(0,s,r)
x=11
return A.b(B.Q0(s,r),$async$aN2)
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
return A.i($async$aN2,w)},
Bd(d,e,f,g,h,i){return B.hy6(d,e,f,g,h,i)},
hy6(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bd=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jh(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYx(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Q0(s,d),$async$Bd)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Bd)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cS.gcv().aJ(d)),$async$Bd)
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
return A.b(B.Ag(e),$async$Bd)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.FY(e,j),$async$Bd)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bd,w)},
U9(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U9=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ag(d),$async$U9)
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
k=B.h4n(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jh(m,n,k,l,j,"From folder",null,B.aYx(),null)
$.afi.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0K(o),$async$U9)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FM.n(0,h,g)
$.Qh.n(0,h,g)
B.Q0(h,g)
x=9
break
case 10:x=11
return A.b(B.aN2(d,m,o),$async$U9)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FY(d,t),$async$U9)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U9,w)},
fPx(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fPx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h4n(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.I_(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.Bd(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPx,w)},
I_(d,e,f,g,h,i){return B.hy5(d,e,f,g,h,i)},
hy5(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$I_=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JQ(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$I_)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.cl(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.R3(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kD(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qw(k,l),$async$I_)
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
return A.b(j.a7(0),$async$I_)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qw(k,new Uint8Array(A.ce(n))),$async$I_)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeQ(r,q,g),$async$I_)
case 16:f=new B.jh(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYx(),null)
x=17
return A.b(B.Ag(d),$async$I_)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.FY(d,e),$async$I_)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$I_,w)},
Ub(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ub=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afi.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0K(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeK(s),$async$Ub)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qv(u[o]),$async$Ub)
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
v=A.zG(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qh.h(0,s)
if(i==null)i=$.FM.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rh(d,e),$async$Ub)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qh.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zG(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ub,w)},
h4n(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rh(d,e){return B.hy7(d,e)},
hy7(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rh=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qh.h(0,f)
if(e==null)e=$.FM.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afi.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0K(s),$async$rh)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FM.n(0,f,r)
$.Qh.n(0,f,r)
B.Q0(f,r)
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
return A.b(B.aeK(f),$async$rh)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awP(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qv(g[l]),$async$rh)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.K(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.an6()
if(!C.aG.gam(r)){$.FM.n(0,f,r)
$.Qh.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMK(f),$async$rh)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qh.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Ub(a0,a1,0,g),$async$rh)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.ce(i))
$.FM.n(0,f,h)
$.Qh.n(0,f,h)
B.Q0(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rh,w)},
hya(d){var x,w,v=$.afi.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hyb(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hM([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hy8(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ao7(d,e,f,g,h){return B.hy9(d,e,f,g,h)},
hy9(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ao7=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afi.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0K(s),$async$ao7)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rh(g,e),$async$ao7)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eX().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i6(d).wG(h,r,new A.Dp(!0,e.c)),$async$ao7)
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
return A.i($async$ao7,w)},
h4p(d,e,f,g,h){var x,w,v,u,t=$.h4o
$.h4o=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c6t.n(0,t,new B.btM(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awP(u)))
return t},
fPy(d){var x=0,w=A.j(y.H)
var $async$fPy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fPy,w)},
I0(d,e){var $async$I0=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afi.h(0,h)
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
return A.pX(B.Ub(d,e,p,o<q?o:q),$async$I0,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pX(A.Fj(n),$async$I0,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pX(B.aeK("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$I0,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pX(B.Qv(h[l]),$async$I0,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pX(A.Fj(k),$async$I0,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pX(B.rh(d,e),$async$I0,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pX(A.Fj(A.zG(j,p,o<i?o:i)),$async$I0,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pX(null,0,w)
case 2:return A.pX(t.at(-1),1,w)}})
var x=0,w=A.hd_($async$I0,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.heP(w)},
aYz(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c6t.h(0,d)
if(t==null||J.cl(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3L(),$async$aYz)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYz,w)},
Ua(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Ua=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6t.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3L(),$async$Ua)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeQ(r.c,u,r.z),$async$Ua)
case 4:t=new B.jh(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYx(),null)
u=r.a
x=5
return A.b(B.Ag(u),$async$Ua)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.FY(u,s),$async$Ua)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ua,w)},
a6c(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6t.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ag_(u[s]),$async$a6c)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6c,w)},
c6v(d,e,f){var x=0,w=A.j(y.H)
var $async$c6v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byO(d,e,f),$async$c6v)
case 2:return A.h(null,w)}})
return A.i($async$c6v,w)},
c6w(d,e,f){var x=0,w=A.j(y.H)
var $async$c6w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byP(d,e,f),$async$c6w)
case 2:return A.h(null,w)}})
return A.i($async$c6w,w)},
E8(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ag(d),$async$E8)
case 2:p=g
J.no(p,new B.c6u(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FM.W(0,v)
$.afi.W(0,e)
x=3
return A.b(B.aeK(v),$async$E8)
case 3:u=g
$.f97.W(0,v)
x=4
return A.b(A.az(),$async$E8)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$E8)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$E8)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ag_(s[q]),$async$E8)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ag_(v),$async$E8)
case 13:x=14
return A.b(B.FY(d,p),$async$E8)
case 14:return A.h(null,w)}})
return A.i($async$E8,w)},
aYy(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rh(d,e),$async$aYy)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f9Y(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYy,w)},
Ag(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ag=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ag)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fij(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ag,w)},
FY(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FY)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fmf(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FY)
case 3:return A.h(null,w)}})
return A.i($async$FY,w)},
byO(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ag(d),$async$byO)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fgJ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCD(f))
x=4
return A.b(B.FY(d,u),$async$byO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byO,w)},
byP(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ag(d),$async$byP)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fgK(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cFl(f))
x=4
return A.b(B.FY(d,u),$async$byP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byP,w)},
ab0:function ab0(d){this.a=d},
fdD:function fdD(){},
fig:function fig(d,e){this.a=d
this.b=e},
fih:function fih(d){this.a=d},
fii:function fii(){},
c6u:function c6u(d){this.a=d},
btM:function btM(d,e,f,g,h,i,j,k,l){var _=this
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
fij:function fij(){},
fmf:function fmf(){},
fgJ:function fgJ(d){this.a=d},
fgK:function fgK(d){this.a=d},
a6d(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b7(d,new B.c6z())?3:4
break
case 3:x=5
return A.b(B.aYA(d,e),$async$a6d)
case 5:u=g
if(u!=null){t=u.c
B.MT(d,u.b,e,t)}v=u
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
return A.b(B.aYv(s),$async$a6d)
case 10:case 9:if(g){v=new A.Po(1,D.QU,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Uc(d,e),$async$a6d)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Uh(!0,!0,d,e),$async$a6d)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MT(d,D.yU,e,t)
v=new A.Po(p,D.yU,t)
x=1
break}v=B.c6y(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6d,w)},
Uc(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Uc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6f(null,d,e),$async$Uc)
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
return A.b(B.aYu(p,d.length,e),$async$Uc)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c6w(e,C.d.gL(d).a,r.b),$async$Uc)
case 7:case 6:q=r.a
x=8
return A.b(B.MT(d,D.QU,e,q),$async$Uc)
case 8:v=new A.Po(d.length,D.QU,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uc,w)},
Ud(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ud=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mo(D.mt)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6e(d,e),$async$Ud)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c6r(s,d,e,t),$async$Ud)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYv(t),$async$Ud)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rh(e,d),$async$Ud)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Uc(A.a([d],y.r),e),$async$Ud)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ud,w)},
Uf(){var x=0,w=A.j(y.H)
var $async$Uf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fPr(),$async$Uf)
case 2:x=3
return A.b(B.aPa(),$async$Uf)
case 3:return A.h(null,w)}})
return A.i($async$Uf,w)},
a6e(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYx()
x=3
return A.b(B.c6v(e,d.a,u),$async$a6e)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6e,w)},
MT(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$MT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QU&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6e(p,f),$async$MT)
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
return A.b(B.c6q(o,p,u,f),$async$MT)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c6r(o,p,f,t),$async$MT)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c6p(o,u,p,f),$async$MT)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MT,w)},
aYA(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6x(e,d),$async$aYA)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Uh(!1,!0,d,e),$async$aYA)
case 4:u=g
if(u!=null){t=u.b
v=new A.Po(u.a,D.yU,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYA,w)},
c6x(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c6x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Ub(d,s,0,1),$async$c6x)
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
return A.i($async$c6x,w)},
c6y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c6y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6f(null,d,e),$async$c6y)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h4m(u)
if(t.length>800){v=null
x=1
break}v=new A.Po(d.length,D.dtV,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6y,w)},
ao8(d,e,f){return B.hye(d,e,f)},
hye(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ao8=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mC(g,1)
x=B.fPw(g)?3:4
break
case 3:x=5
return A.b(B.c6s(g),$async$ao8)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mC(g,13))
try{k=B.E9(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mC(g,13))
u=9
x=12
return A.b(B.aYt(q),$async$ao8)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ue(p,a0)
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
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fPv(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ue(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.I1(C.a.i(J.mC(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.I1(C.a.i(J.mC(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.I1(h,d,a0)
x=1
break}if(J.f_(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ue(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao8,w)},
I1(d,e,f){return B.hyc(d,e,f)},
hyc(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$I1=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cw(A.t(s)+"/manifest.json",0,null)
q=A.cw(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYl(r),$async$I1)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYl(A.cw(s,0,null)),$async$I1)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cl(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c64(o,r,a1,n,a2),$async$I1)
case 11:m=a4
x=J.cl(m)?12:13
break
case 12:x=14
return A.b(B.c63(q),$async$I1)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ue(l,a2),$async$I1)
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
return A.i($async$I1,w)},
a6f(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.rh(f,r),$async$a6f)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcv().aJ(q)],t,s))
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
return A.i($async$a6f,w)},
Ue(d,e){return B.hyd(d,e)},
hyd(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ue=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}m=e.gS(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cE.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Bd(i,a3,d,k,l,o),$async$Ue)
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
return A.i($async$Ue,w)},
MS:function MS(d,e){this.a=d
this.b=e},
c6z:function c6z(){},
a0k(d){var x=A.P(d).ax.a===C.I,w=x?D.adh:D.ab8,v=x?D.aeN:C.c,u=x?C.aP:C.M,t=x?C.bJ:C.ak,s=x?D.acn:C.aL
return new A.aEY([w,s,v,u,t,x?C.f8:C.bW])},
hjC(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fHv(e),d,null,!0,!0,y.N)},
c6e(d,e,f,g,h,i,j,k,l){return new B.U6(e,l,d,f,k,j,g,h,i,null)},
Yn(d,e,f,g,h,i,j){return new B.bc0(g,h,j,e,i,d,f,null)},
fHv:function fHv(d){this.a=d},
Yk:function Yk(d,e){this.c=d
this.a=e},
ay_:function ay_(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d0q:function d0q(d){this.a=d},
d0o:function d0o(d){this.a=d},
d0p:function d0p(d){this.a=d},
btq:function btq(){},
U6:function U6(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBY:function aBY(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dO9:function dO9(d){this.a=d},
dNx:function dNx(d,e){this.a=d
this.b=e},
dNy:function dNy(d,e){this.a=d
this.b=e},
dN6:function dN6(d,e,f){this.a=d
this.b=e
this.c=f},
dN5:function dN5(d){this.a=d},
dN7:function dN7(d,e){this.a=d
this.b=e},
dNc:function dNc(d,e,f){this.a=d
this.b=e
this.c=f},
dNb:function dNb(d){this.a=d},
dNY:function dNY(d,e){this.a=d
this.b=e},
dNZ:function dNZ(d){this.a=d},
dNu:function dNu(d,e,f){this.a=d
this.b=e
this.c=f},
dNr:function dNr(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dNa:function dNa(d){this.a=d},
dNC:function dNC(d){this.a=d},
dNB:function dNB(){},
dNg:function dNg(d){this.a=d},
dNV:function dNV(d,e){this.a=d
this.b=e},
dNW:function dNW(d,e){this.a=d
this.b=e},
dNX:function dNX(d,e){this.a=d
this.b=e},
dNs:function dNs(d,e){this.a=d
this.b=e},
dNt:function dNt(d,e){this.a=d
this.b=e},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNK:function dNK(d){this.a=d},
dNJ:function dNJ(d){this.a=d},
dNL:function dNL(){},
dNM:function dNM(){},
dNN:function dNN(d,e){this.a=d
this.b=e},
dNP:function dNP(){},
dNQ:function dNQ(d){this.a=d},
dNI:function dNI(d,e){this.a=d
this.b=e},
dND:function dND(d){this.a=d},
dNE:function dNE(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNG:function dNG(d){this.a=d},
dNH:function dNH(d){this.a=d},
dNd:function dNd(){},
dNe:function dNe(d){this.a=d},
dNf:function dNf(d,e){this.a=d
this.b=e},
dN9:function dN9(d,e){this.a=d
this.b=e},
dN8:function dN8(d,e,f){this.a=d
this.b=e
this.c=f},
dNv:function dNv(d){this.a=d},
dNw:function dNw(d,e,f){this.a=d
this.b=e
this.c=f},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNl:function dNl(d){this.a=d},
dNi:function dNi(d,e,f){this.a=d
this.b=e
this.c=f},
dNm:function dNm(d){this.a=d},
dNn:function dNn(d){this.a=d},
dNo:function dNo(){},
dNq:function dNq(d,e){this.a=d
this.b=e},
dNj:function dNj(d){this.a=d},
dNh:function dNh(d,e,f){this.a=d
this.b=e
this.c=f},
dNk:function dNk(){},
dNA:function dNA(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dNU:function dNU(d,e){this.a=d
this.b=e},
dNR:function dNR(d){this.a=d},
dNS:function dNS(d,e){this.a=d
this.b=e},
dNT:function dNT(d){this.a=d},
dO6:function dO6(d){this.a=d},
dO4:function dO4(d){this.a=d},
dO5:function dO5(d){this.a=d},
dO7:function dO7(){},
dO8:function dO8(d,e){this.a=d
this.b=e},
dO0:function dO0(d,e){this.a=d
this.b=e},
dO1:function dO1(d,e,f){this.a=d
this.b=e
this.c=f},
dO_:function dO_(d,e,f){this.a=d
this.b=e
this.c=f},
dO2:function dO2(d,e){this.a=d
this.b=e},
dO3:function dO3(d,e){this.a=d
this.b=e},
axX:function axX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bc_:function bc_(d,e,f){this.c=d
this.d=e
this.a=f},
d0m:function d0m(){},
d0n:function d0n(){},
abk:function abk(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0K:function d0K(){},
d0J:function d0J(d){this.a=d},
Ym:function Ym(d,e,f){this.c=d
this.d=e
this.a=f},
ay1:function ay1(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d0G:function d0G(d){this.a=d},
d0H:function d0H(d,e,f){this.a=d
this.b=e
this.c=f},
d0I:function d0I(d,e){this.a=d
this.b=e},
d0E:function d0E(d,e){this.a=d
this.b=e},
d0C:function d0C(d){this.a=d},
d0A:function d0A(d){this.a=d},
d0x:function d0x(d){this.a=d},
d0D:function d0D(d){this.a=d},
d0z:function d0z(d){this.a=d},
d0F:function d0F(d){this.a=d},
d0B:function d0B(d){this.a=d},
d0y:function d0y(d){this.a=d},
Yj:function Yj(d,e,f){this.c=d
this.d=e
this.a=f},
axZ:function axZ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d0j:function d0j(d){this.a=d},
d0i:function d0i(d,e){this.a=d
this.b=e},
d0k:function d0k(d){this.a=d},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0l:function d0l(d){this.a=d},
d0g:function d0g(d,e){this.a=d
this.b=e},
d0c:function d0c(d){this.a=d},
d0d:function d0d(d){this.a=d},
d0e:function d0e(d,e){this.a=d
this.b=e},
d0f:function d0f(d){this.a=d},
P1:function P1(d,e,f){this.c=d
this.d=e
this.a=f},
ay4:function ay4(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d0X:function d0X(d){this.a=d},
d0Y:function d0Y(d){this.a=d},
d0Z:function d0Z(d){this.a=d},
d1_:function d1_(d){this.a=d},
d10:function d10(d,e){this.a=d
this.b=e},
d11:function d11(d){this.a=d},
d13:function d13(d){this.a=d},
d12:function d12(d){this.a=d},
Yo:function Yo(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ay2:function ay2(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d0T:function d0T(d,e){this.a=d
this.b=e},
d0U:function d0U(d,e){this.a=d
this.b=e},
d0L:function d0L(d,e,f){this.a=d
this.b=e
this.c=f},
d0M:function d0M(d){this.a=d},
d0N:function d0N(){},
d0S:function d0S(){},
d0O:function d0O(d,e){this.a=d
this.b=e},
d0P:function d0P(d,e){this.a=d
this.b=e},
d0Q:function d0Q(d,e){this.a=d
this.b=e},
d0R:function d0R(d,e){this.a=d
this.b=e},
abi:function abi(d,e){this.c=d
this.a=e},
d0b:function d0b(d){this.a=d},
Yi:function Yi(d){this.a=d},
axY:function axY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yp:function Yp(d,e){this.c=d
this.a=e},
ay3:function ay3(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d0W:function d0W(d){this.a=d},
d0V:function d0V(d){this.a=d},
bc0:function bc0(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hyf(){var x,w=$.pl(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fW(v)},
MU(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$MU)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f2("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MU)
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
return A.i($async$MU,w)},
a6g(d){return B.hyg(d)},
hyg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6g)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6g)
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
return A.i($async$a6g,w)},
Ug(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Ug=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MU(),$async$Ug)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dV(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6g(s),$async$Ug)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ug,w)},
Uh(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Uh=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Uh)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c6B(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hyf()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.B(new A.K(u,new B.c6C(s),t),t.k("ak.E"))
x=6
return A.b(B.MU(),$async$Uh)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6g(q),$async$Uh)
case 7:x=8
return A.b(B.a6h(r,u,g,s),$async$Uh)
case 8:v=new A.bnv(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uh,w)},
ao9(d){var x=0,w=A.j(y.y),v,u,t
var $async$ao9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MU(),$async$ao9)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao9,w)},
c6D(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c6D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MU(),$async$c6D)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6D,w)},
a6h(d,e,f,g){return B.hyh(d,e,f,g)},
hyh(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6h=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ao7("media",r,new B.c6A(s,e,g),f,q),$async$a6h)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Ug(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6h)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Ug(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6h)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Ug(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6h)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6h,w)},
E9(d,e,f){return B.hyi(d,e,f)},
hyi(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E9=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$E9)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ao9(b3),$async$E9)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kg,null,g),$async$E9)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ao9(b3),$async$E9)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MU(),$async$E9)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
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
a1=J.a5(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
if(!a0.b(a7)){x=11
break}a8=J.a5(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.eX().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oP(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9B(a8.a,b0,"media",a8.d,a9).Cg(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYm(k,n,o,s,b7),$async$E9)
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
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gS(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eX().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oP(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9B(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E9)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6g(e),$async$E9)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E9,w)},
c6B:function c6B(){},
c6C:function c6C(d){this.a=d},
c6A:function c6A(d,e,f){this.a=d
this.b=e
this.c=f},
aPa(){var x=0,w=A.j(y.H),v,u
var $async$aPa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hJb=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aPa)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aPa)
case 3:u=$.fUB
u=u==null?null:u.bC(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aPa)
case 4:$.fUB=$.hRF=$.hRG=null
return A.h(null,w)}})
return A.i($async$aPa,w)},
flR(d){var x=0,w=A.j(y.H),v,u
var $async$flR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a5b){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.flS(new A.bW(u,y.aY))
x=3
return A.b(u.ic(0,C.hJ,new B.flT()),$async$flR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$flR,w)},
hRD(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hy_(x):x},
fUF(d){var x=0,w=A.j(y.T),v,u,t
var $async$fUF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.aob(u)
x=1
break}v=B.fPv(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUF,w)},
fUE(d){var x=0,w=A.j(y.T),v,u,t
var $async$fUE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.aoc(u)
x=1
break}v=B.fPv(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fUE,w)},
fDb(d){var x=0,w=A.j(y.T),v
var $async$fDb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aoc(d),$async$fDb)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDb,w)},
bzG(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fUE(d),$async$bzG)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzG,w)},
faM(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$faM=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Ua(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bd(d.an6(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$faM,w)},
G_(d,e,f){return B.hU0(d,e,f)},
hU0(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$G_=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fUF(a1),$async$G_)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a5(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b0(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hlt().aCS(D.dih,null),$async$G_)
case 4:l=d.fUB=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awP(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.fmo(f,k,new B.fmp(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a6F(0,new B.Wr(r,"offer")),$async$G_)
case 5:d=l
x=7
return A.b(l.ajX(0),$async$G_)
case 7:x=6
return A.b(d.a6x(0,a4),$async$G_)
case 6:x=8
return A.b(B.flR(l),$async$G_)
case 8:x=9
return A.b(l.anR(),$async$G_)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hRD(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aod(m,h),$async$G_)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h4m(h)
case 11:v=new A.bmN(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$G_,w)},
flS:function flS(d){this.a=d},
flT:function flT(){},
fmp:function fmp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fmo:function fmo(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fmn:function fmn(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hVS(d){switch(d){case"new":return D.eaz
case"checking":return D.eaA
case"connected":return D.eaC
case"completed":return D.eaB
case"failed":return D.eaE
case"disconnected":return D.eaF
case"closed":return D.aKK
case"count":return D.eaD}return D.aKK},
hVT(d){switch(d){case"new":return D.aKL
case"gathering":return D.eaG
case"complete":return D.a5b}return D.aKL},
i56(d){switch(d){case"stable":return D.eaH
case"have-local-offer":return D.eaI
case"have-local-pranswer":return D.eaK
case"have-remote-offer":return D.eaJ
case"have-remote-pranswer":return D.eaL
case"closed":return D.aKR}return D.aKR},
i3m(d){switch(d){case"new":return D.aKO
case"connecting":return D.aKP
case"connected":return D.aKQ
case"closed":return D.a5c
case"disconnected":return D.aKN
case"failed":return D.aKM}return D.a5c},
a8z:function a8z(d,e){this.a=d
this.b=e},
NU:function NU(d,e){this.a=d
this.b=e},
Wq:function Wq(d,e){this.a=d
this.b=e},
NT:function NT(d,e){this.a=d
this.b=e},
EC:function EC(d,e){this.a=d
this.b=e},
chA:function chA(){},
fRf(d){var x=new B.EB()
x.a=d
x.b=!0
return x},
EB:function EB(){this.b=this.a=$},
a8y:function a8y(){},
asr:function asr(){},
Wr:function Wr(d,e){this.a=d
this.b=e},
fPr(){var x=0,w=A.j(y.H)
var $async$fPr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fPr,w)},
fPu(d,e,f){var x=0,w=A.j(y.T),v
var $async$fPu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mo(D.mt))){v=null
x=1
break}v=B.fDr(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fPu,w)},
h4m(d){var x,w=F.aaA.a3v(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hxZ(d){var x,w,v=C.cE.aJ(d)
try{x=C.c5.ca(0,F.aaz.baX(v,!1))
return x}catch(w){x=C.c5.ca(0,v)
return x}},
fPv(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hxZ(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c5.ca(0,C.cE.aJ(x))
return v}catch(u){return x}}return null},
hy_(d){var x,w,v,u,t,s=A.a([],y.s)
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
hy0(){var x,w=$.pl(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fW(v)},
aYs(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f2("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYs)
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
return A.i($async$aYs,w)},
c6j(d,e){return B.hy1(d,e)},
hy1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c6j=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c6j)
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
return A.i($async$c6j,w)},
aYv(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYs(d),$async$aYv)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYv,w)},
aYu(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hy0()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c6j(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYu)
case 3:if(!h){v=null
x=1
break}v=new A.a_o("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYu,w)},
aYt(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYs(o),$async$aYt)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c5.ca(0,C.cE.aJ(u))
if(J.iT(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYt,w)},
c6k(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c6k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bAD("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c6k)
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
return A.i($async$c6k,w)},
aYw(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HY(),$async$aYw)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYw,w)},
ao4(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ao4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao4)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYw(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao4,w)},
ao2(d,e){var x=0,w=A.j(y.H)
var $async$ao2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao2)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ao2)
case 2:return A.h(null,w)}})
return A.i($async$ao2,w)},
a68(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a68=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a68)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HY(),$async$a68)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dk(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a67(s),$async$a68)
case 5:x=6
return A.b(B.ao2(f,u),$async$a68)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a68,w)},
a69(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a69=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a69)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HY(),$async$a69)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(B.ao2(g,q),$async$a69)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a67(u),$async$a69)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a69,w)},
a6a(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6a)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HY(),$async$a6a)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYp(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6a)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6a)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6a,w)},
c6l(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c6l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c6l)
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
return A.i($async$c6l,w)},
HZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6l(d),$async$HZ)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYw(t),$async$HZ)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ao3(d),$async$HZ)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYp(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ao3(d),$async$HZ)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HZ,w)},
ao3(d){var x=0,w=A.j(y.H)
var $async$ao3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao3)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ao3)
case 2:return A.h(null,w)}})
return A.i($async$ao3,w)},
aYx(){var x,w=$.pl(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fW(v)},
a6b(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fPw(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c6o(d){return B.hy3(d)},
hy3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c6o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6b(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c6o)
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
return A.i($async$c6o,w)},
ao6(d,e){return B.hy4(d,e)},
hy4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ao6=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6b(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$ao6)
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
return A.i($async$ao6,w)},
c6q(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ao6(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6q,w)},
c6p(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ao6(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6p,w)},
c6r(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c6r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ao6(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6r,w)},
c6s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c6s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fPw(d)){v=null
x=1
break}x=3
return A.b(B.c6o(d),$async$c6s)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a5(u)
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
return A.i($async$c6s,w)},
a6i(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6i)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f2("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6i)
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
return A.i($async$a6i,w)},
aoa(d){return B.hyj(d)},
hyj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aoa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$aoa)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$aoa)
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
return A.i($async$aoa,w)},
aob(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aob=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aob)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6i(),$async$aob)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c5.ca(0,C.cE.aJ(q))
if(J.iT(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dV(A.a1(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aF(s,j,o)
x=9
return A.b(B.aoa(s),$async$aob)
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
return A.i($async$aob,w)},
aod(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aod=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aod)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6i(),$async$aod)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dV(A.a1(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcv().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.aoa(u),$async$aod)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aod,w)},
aoc(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aoc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$aoc)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6i(),$async$aoc)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c5.ca(0,C.cE.aJ(u))
v=r
x=1
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aoc,w)},
and(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$and=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pO)){v=null
x=1
break}x=3
return A.b(p.lT(e),$async$and)
case 3:r=g
u=4
x=7
return A.b(r.hq(C.fX),$async$and)
case 7:q=g
o=q
o=o==null?null:J.eR(J.vc(o))
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
return A.i($async$and,w)},
i1l(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fBK(d){return B.i1n(d)},
i1n(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fBK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eX().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i6("media").Kk(d,3600),$async$fBK)
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
return A.i($async$fBK,w)},
CA(d,e,f,g,h,i){var x=null
return B.i1k(d,e,f,g,h,i)},
i1k(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CA=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h4p(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fPy(r),$async$CA)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fBK(o),$async$CA)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6c(r),$async$CA)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aNR)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lf(A.a([],g))
x=15
return A.b(d.eT(0,A.atg("GET",A.cw(n,0,null))).cM(0,C.ET),$async$CA)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6c(r),$async$CA)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JQ(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CA)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYz(r,k),$async$CA)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CA)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.Ua(r)
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
return A.b(B.a6c(r),$async$CA)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
aOT(d){return B.i1m(d)},
i1m(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eX().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i6("media").W(0,d),$async$aOT)
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
return A.i($async$aOT,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[141]
O=c[40]
F=c[236]
I=c[132]
P=c[216]
E=c[209]
G=c[86]
Q=c[181]
R=c[133]
S=c[214]
K=c[240]
L=c[246]
B=a.updateHolder(c[21],B)
D=c[244]
T=c[180]
M=c[199]
U=c[65]
V=c[247]
W=c[71]
X=c[55]
N=c[85]
Y=c[245]
B.chB.prototype={
aCS(d,e){return this.cGR(d,e)},
cGR(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.ke(A.cA(t)))
t=J.k(u)
v=B.hCV(C.cS.gcv().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCS,w)}}
B.b2F.prototype={
bwh(d){var x=this,w=x.w
w.onclose=A.he(new B.chw(x))
w.onopen=A.he(new B.chx(x))
w.onmessage=A.he(new B.chy(x))
w.onbufferedamountlow=A.he(new B.chz(x))},
gdc(d){return this.x},
ag9(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ag9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EB()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fRf(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ag9)
case 8:v=t.fRf(s.amr(f,0,null))
x=1
break
case 7:case 4:v=B.fRf(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag9,w)}}
B.b2G.prototype={
bwi(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.chC(x)))
w.addEventListener("icecandidate",A.he(new B.chD(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.chE(x)))
w.onicegatheringstatechange=A.he(new B.chF(x))
w.addEventListener("signalingstatechange",A.he(new B.chG(x)))
if(!$.fYa())w.addEventListener("connectionstatechange",A.he(new B.chH(x)))
w.addEventListener("negotiationneeded",A.he(new B.chI(x)))
w.addEventListener("track",A.he(new B.chJ(x)))},
ajX(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.ke(A.cA(A.T(y.N,y.z)))),y.aQ),$async$ajX)
case 3:t=f
v=new B.Wr(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajX,w)},
a6x(d,e){return this.blO(0,e)},
blO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6x)
case 2:return A.h(null,w)}})
return A.i($async$a6x,w)},
a6F(d,e){return this.bm3(0,e)},
bm3(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6F)
case 2:return A.h(null,w)}})
return A.i($async$a6F,w)},
anR(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wr(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anR,w)},
bC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bC,w)}}
B.abj.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Yl.prototype={
U(){return new B.ay0()},
gdd(){return this.c}}
B.ay0.prototype={
a_(){this.a1()
this.acT()},
acT(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYq(u.e,u.c),$async$acT)
case 2:t=e
if(v.c!=null)v.m(new B.d0u(v,t))
return A.h(null,w)}})
return A.i($async$acT,w)},
PD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.ao_(t.e,t.c,!1),$async$PD)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eQu)
x=1
break}x=4
return A.b(B.a66(u.a.c,"individual"),$async$PD)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a54(A.e8(new B.d0r(u),!1,null,y.H)),$async$PD)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PD,w)},
IK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fk0(o),$async$IK)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6a(o.e,r,s,q),$async$IK)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eNz)
x=1
break}x=5
return A.b(B.a66(u.a.c,"member"),$async$IK)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a54(A.e8(new B.d0t(u),!1,null,y.H)),$async$IK)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IK,w)},
xC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a65(t.e,o,t.f,t.r,t.w,s),$async$xC)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a66(u.a.c,"org_owner"),$async$xC)
case 4:x=5
return A.b(B.ao4(u.a.c),$async$xC)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fkv(o),$async$xC)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a68(s,t,o,q.c),$async$xC)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eNw)
x=1
break}x=10
return A.b(B.ao4(u.a.c),$async$xC)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a54(A.e8(new B.d0s(u),!1,null,y.H)),$async$xC)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xC,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j8:C.ps,q=B.fPt(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f7X,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.fqz,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bUX,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lA(new B.d0w(),t),C.O,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abM(C.eR,C.axs,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcb9(),t),C.ac],v))
p.push(new B.abM(C.oB,C.a19,"Team Member","Sign in with your organization access code + password",u.gcc0(),t))
p.push(C.ac)
p.push(new B.abM(C.ak2,C.a2C,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcbw(),t))
return A.c8(t,r,A.bn(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahl,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.abM.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eA(A.A(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.E(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p1,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.Bg,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bV,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAz.prototype={}
B.aDL.prototype={}
B.jh.prototype={
mo(d){var x=this.b,w=C.a.oq(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gaou(){var x=this.d
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
bap(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jh(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cFl(d){return this.bap(null,d)},
aCD(d){return this.bap(d,null)}}
B.U4.prototype={
U(){return new B.aBW(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aBW.prototype={
a_(){this.a1()
this.acU()},
acU(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bc(u.a.c),$async$acU)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dN2(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acU,w)},
acV(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fC(s)),$async$acV)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eRo)
case 1:return A.h(v,w)}})
return A.i($async$acV,w)},
YS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.and(s.d,4),$async$YS)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rM(r,"ngmy_my_code_"+m+".png"),$async$YS)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$YS,w)},
agC(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9a("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agC,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j8:C.ps,m=o?C.c:C.M,l=A.eG(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lz
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
w=A.p(p,A.v(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1A,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agW,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mB,w,C.kt,new A.ev(A.p(p,A.pF(p,p,!1,B.hxV(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bV,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kt,A.A(A.a([A.E(A.ex(N.Bz,C.To,q.gc4b(),p),1),C.av,A.E(A.dp(C.yl,C.a7n,q.gc4c(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ex(M.a01,D.fmv,q.gcqu(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.LT,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.U8.prototype={
U(){return new B.aBZ(new A.ar(C.as,$.aw()),A.kk(!0,null,!0,!0,null,null,!1))}}
B.aBZ.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HX(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HX(u.d.a.a)
if(t==null){u.m(new B.dOb(u))
x=1
break}u.m(new B.dOc(u))
s=u.a
r=s.c
x=3
return A.b(B.a64(s.d,new B.dOd(u),t,r),$async$YT)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dOe(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$YT,w)},
a13(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a13=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cl(r.a.d)){x=1
break}r.m(new B.dOf(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rh(r.a.c,q),$async$a13)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dOg(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agJ(p,m,l,j,k),$async$a13)
case 8:o=e
if(r.c!=null)r.m(new B.dOh(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
if(r.c!=null)r.m(new B.dOi(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dOj(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a13,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adh:D.ab8,h=j?D.aeN:C.c,g=j?C.aP:C.M,f=j?C.bJ:C.ak,e=j?D.acn:C.aL
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
t=A.p(k,A.A(A.a([A.p(k,D.bIV,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.E(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fy,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1A,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u6(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhl()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LN,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dOk(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lY,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.KT(l.a.d,4)
m=A.B(new A.K(m,new B.dOl(x,new A.aEY(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.mh,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.d5,p,C.O,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eM5)
else q.push(A.X(C.lg,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aQ,A.dh(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.E(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bse,k,k,C.ah),1)
u=l.f?k:l.gcqv()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(M.a01,D.fnt,u,A.df(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ch,k,new A.b7(q,C.Y),new A.aA(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc4d()
t=A.bk(C.aE,k,k,0,C.c,k,C.n4,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bn(!0,A.mz(new B.dOm(),A.v(A.a([e,new A.C(D.brJ,A.v(A.a([s,C.O,i,C.ac,A.bJ(l.f?C.ry:D.flU,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cs,C.Xu,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhl.prototype={
om(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bv,v.length),C.aN)}}
B.U5.prototype={
U(){return new B.aBX()}}
B.aBX.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.ar(new A.bb(w,C.b3,C.aN),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.ar(new A.bb(x,C.b3,C.aN),v)
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
acW(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acW=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dN3(r))
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
return A.b(B.a69(p,m,n,o,C.a.i(l).length===0?null:l),$async$acW)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eR_)
s=[1]
x=4
break}p.I(y.q).f.R(D.ePD)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dN4(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acW,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j8:C.ps,q=A.eG(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.feC,s,s,s,1,s,!0),p=A.p(s,D.bkv,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gi,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bPM,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bPH,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bPX,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
v=t.r?s:t.gc4e()
u=A.bk(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mB,A.bJ(t.r?C.ry:C.aQt,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.ab0.prototype={}
B.btM.prototype={
a3L(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.an6()))
x=3
return A.b(B.Qw(t,s),$async$a3L)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3L,w)},
gdd(){return this.a}}
B.MS.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yk.prototype={
U(){return new B.ay_(new A.ar(C.as,$.aw()),A.kk(!0,null,!0,!0,null,null,!1))}}
B.ay_.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.d0q(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c4k(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0k(d),u=x.a.c,t=u?C.i7:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j8:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.amK,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cw,16)],n),C.anx,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u6(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.btq()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F3,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aXi),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d0o(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lY,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nr,new B.d0p(d),A.df(w,w,w,w,w,w,w,w,w,s,w,w,C.ch,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eH(w,C.K,new A.cV(Q.JM,A.c_(new A.C(C.xu,A.v(A.a([l,C.aQ,k,C.O,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.E(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e4y,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc4j(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NF,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LV,C.d0,w,w,w)}}
B.btq.prototype={
om(d,e){return e.ajS(e.a.toUpperCase())}}
B.U6.prototype={
U(){return new B.aBY(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aBY.prototype={
a_(){var x=this
x.a1()
x.tr()
x.w=A.du(C.jc,new B.dO9(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.Uf()
this.a2()},
a_W(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_W=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MR(u.a.c),$async$a_W)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ag(u.a.c),$async$a_W)
case 4:u.m(new s.dNx(u,e))
u.hW("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_W,w)},
tr(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MR(u.a.c),$async$tr)
case 3:t=e
x=4
return A.b(B.Ag(u.a.c),$async$tr)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dNy(u,s))
if(t>0)u.hW("Received "+A.t(t)+" file(s) via My Code.")
u.N3(u.d)
B.Bc(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tr,w)},
N3(d){return this.bAe(d)},
bAe(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$N3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6e(r,u.a.c),$async$N3)
case 8:p=f
if(u.c==null){x=1
break}new B.dN6(u,r,p).$0()
u.c.e7()
case 7:if(!(C.a.a0(r.c,"video/")||r.mo(D.mt))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ud(r,u.a.c),$async$N3)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ag(u.a.c),$async$N3)
case 12:u.m(new o.dN7(u,f))
case 1:return A.h(v,w)}})
return A.i($async$N3,w)},
Nq(d){return this.bGp(d)},
bGp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6e(d,u.a.c),$async$Nq)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dNc(u,d,t))
x=6
return A.b(A.fI(new A.fC(t)),$async$Nq)
case 6:u.hW("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fC(r.toUpperCase())),$async$Nq)
case 7:u.hW("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nq,w)},
hW(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
ts(d,e){return this.cAU(d,e)},
cAU(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ts=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dNY(r,e))
u=3
x=6
return A.b(d.$0(),$async$ts)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dNZ(r))
$.eU.mj()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ts,w)},
gaTE(){var x=this.a
return x.f||x.r||x.w},
HG(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTE()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c6h(s,n,r,q,o,t),$async$HG)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hW("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fvd(o,u.a.c),$async$HG)
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
return A.b(B.CC(s,o,r,q,n,t),$async$HG)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HG,w)},
a__(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a__=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao4(u.a.c),$async$a__)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hW("No organization portal found.")
x=1
break}t=J.a5(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).c8(A.e8(new B.dNu(u,r,q),!1,null,y.H)),$async$a__)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a__,w)},
a06(d){return this.cka(d)},
ck9(){return this.a06(1)},
cka(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a06=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTE()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ao1(u.a.c),$async$a06)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a06,w)},
aaV(d,e,f){return this.bWM(d,e,f)},
bWM(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaV=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW(e)
x=1
break}x=3
return A.b(u.ts(new B.dNr(u,d,null,e,f),"Uploading\u2026"),$async$aaV)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaV,w)},
bAm(){B.hiV(!1,new B.dNa(this))
return},
cp7(){this.m(new B.dNC(this))},
axf(){var x=0,w=A.j(y.H),v=this
var $async$axf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAm()
return A.h(null,w)}})
return A.i($async$axf,w)},
aaR(){var x=0,w=A.j(y.H),v=this
var $async$aaR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ts(new B.dNg(v),"Importing\u2026"),$async$aaR)
case 2:return A.h(null,w)}})
return A.i($async$aaR,w)},
RE(d){return this.cAk(d)},
cAk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mo(D.mt)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c8(A.e8(new B.dNV(u,d),!1,null,y.H)),$async$RE)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mo(D.PB)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).c8(A.e8(new B.dNW(u,d),!1,null,y.H)),$async$RE)
case 8:x=1
break
case 7:x=u.bXt(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).c8(A.e8(new B.dNX(u,d),!1,null,y.H)),$async$RE)
case 11:x=1
break
case 10:u.hW("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RE,w)},
bXt(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oq(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cCd,C.a.b0(x,w+1).toLowerCase())},
aen(d){return this.cbd(d)},
cbd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aen=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mo(D.mt)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c8(A.e8(new B.dNs(u,d),!1,null,y.H)),$async$aen)
case 5:x=1
break
case 4:u.m(new B.dNt(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aen,w)},
R1(d){return this.crX(d)},
crX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$R1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p_(t,s.c,s.f),$async$R1)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ts(new B.dNO(u,d),"Preparing QR\u2026"),$async$R1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$R1,w)},
ah1(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ah1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNP(),A.U(t).k("K<1,n>")).fJ(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dNQ(q),s),s.k("J.E"))
if(r.length===0){u.hW("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.R1(r),$async$ah1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ah1,w)},
agV(d){return this.crw(d)},
crw(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0k(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNI(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agV)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RE(d)
break
case"qr":u.R1(A.a([d],y.r))
break
case"send_my_code":u.cbQ(A.a([d],y.r))
break
case"save":u.agg(d)
break
case"delete":u.Iv(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agV,w)},
WR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNd(),A.U(t).k("K<1,n>")).fJ(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dNe(q),s),s.k("J.E"))
if(r.length===0){u.hW("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.p_(t,s.c,s.f),$async$WR)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ts(new B.dNf(u,r),"Preparing file\u2026"),$async$WR)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WR,w)},
aft(d){return this.ciD(d)},
ciD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aft=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hjC(d,!1),$async$aft)
case 3:s=f
r=s==null
q=B.a6b(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hW("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aft,w)},
aet(){var x=0,w=A.j(y.H),v=this,u
var $async$aet=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fCP(u,v.a.c),$async$aet)
case 2:return A.h(null,w)}})
return A.i($async$aet,w)},
bAl(){B.hiV(!1,new B.dN9(this,null))
return},
IJ(d,e){return this.cbR(d,e)},
aZB(d){return this.IJ(null,d)},
cbQ(d){return this.IJ(d,null)},
cbR(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dNv(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wT.c5().ams(!0,C.Zf,!1),$async$IJ)
case 10:r=g
if(r==null||J.cl(r.a)){x=1
break}x=11
return A.b(s.ts(new B.dNw(l,s,r),"Preparing\u2026"),$async$IJ)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hW("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hW("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bBM(p,l,e,s.a.c),$async$IJ)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IJ,w)},
HV(d){return this.bWz(d)},
bWz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hxU(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZB(t),$async$HV)
case 8:x=6
break
case 7:u.hW("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hW("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ts(new B.dNp(u,d),"Receiving video\u2026"),$async$HV)
case 11:x=1
break
case 10:x=12
return A.b(u.ts(new B.dNq(u,d),"Receiving\u2026"),$async$HV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HV,w)},
DR(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cw()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aft(t),$async$DR)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HV(s),$async$DR)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).c8(A.e8(new B.dNA(u),!1,null,y.N)),$async$DR)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tr(),$async$DR)
case 10:x=1
break
case 9:x=11
return A.b(u.HV(C.a.i(r)),$async$DR)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DR,w)},
agg(d){return this.cnI(d)},
cnI(d){var x=0,w=A.j(y.H),v=this
var $async$agg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ts(new B.dNz(v,d),"Saving\u2026"),$async$agg)
case 2:return A.h(null,w)}})
return A.i($async$agg,w)},
Iv(d){return this.bIH(d)},
bIH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Iv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l1(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Iv)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c6k(t),$async$Iv)
case 6:case 5:s=d.a
x=7
return A.b(B.E8(u.a.c,s),$async$Iv)
case 7:u.r.W(0,s)
x=8
return A.b(u.tr(),$async$Iv)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Iv,w)},
ah7(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0k(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNU(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ah7)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aet()
break
case"import":u.aaR()
break}case 1:return A.h(v,w)}})
return A.i($async$ah7,w)},
c4h(d){var x=d.c
if(C.a.a0(x,"video/")||d.mo(D.mt))return C.pT
if(C.a.a0(x,"image/")||d.mo(D.PB))return C.tL
if(C.a.t(x,"pdf"))return E.Nc
return D.akv},
B(d){var x,w,v=this,u=null,t=B.a0k(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ga,u,u,u,new B.dO4(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bJq,u,u,u,v.e?u:v.gcbx(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcp6()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bDO:E.akW,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_Z,u,u,u,v.e?u:v.gc4i(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nY,u,u,u,v.e?u:v.gb_J(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bL6,u,u,u,v.e?u:new B.dO5(v),u,u,u,u,"More options",u))
q=A.eG(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lA(new B.dO6(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m_(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.axX(C.jj,s,!0,t,w?u:v.gcrY(),u),1)
x.push(new A.C(D.bqw,A.mz(new B.dO7(),A.A(A.a([s,C.av,A.E(new B.axX(C.vt,"Export",!1,t,w?u:v.gbMc(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cs,C.iw,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bc_(t,v.e?u:v.gb_J(),u)
else s=A.k3(!0,u,u,new B.dO8(v,t),s,u,D.bqo,u,u,!1,!1)
x.push(A.E(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axX.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.vb,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.df(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vb,t,new A.b7(s,C.Y),new A.aA(v,1,C.q,-1),t,t,t,t)
return A.ex(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bc_.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mz(new B.d0m(),new A.C(E.Yk,A.v(A.a([A.mz(new B.d0n(),A.p(x,A.X(C.xP,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.ia,x,x,new A.bo(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.nY,D.fqS,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Yf,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cs,C.AE,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.abk.prototype={
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
if(!o||i.mo(D.mt))p=D.d8j
else{p=C.a.a0(p,"image/")||i.mo(D.PB)
n=y.O
p=p?A.a([C.d_,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaou()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mo(D.mt))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.E(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c8))
if(!(!o||i.mo(D.mt)))l.push(A.fNe(C.aE,!1,j,j,j,!1,j,j,new B.d0J(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.X(C.nW,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c8))
return A.mz(new B.d0K(),new A.C(C.e4,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.C(C.XQ,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.q,-1)),j,j,C.ag),j),C.cs,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Ym.prototype={
U(){return new B.ay1()},
gdd(){return this.c}}
B.ay1.prototype={
a_(){this.a1()
this.xt()},
q(){B.hy8(this.e)
this.a2()},
xt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rh(o.c,o.d),$async$xt)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hyb(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hya(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d0G(s))
x=1
break}s.m(new B.d0H(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d0I(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xt,w)},
a12(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a12=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rh(t.c,t.d),$async$a12)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eO5)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agJ(q,s,t.length===0?"image/jpeg":t,null,s),$async$a12)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a12,w)},
bWs(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kl(u,C.A,v,new B.d0E(w,t),C.fV,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d0F(w),C.fV,C.du,!0,v,!1,v,v)
else return C.bH
return A.uf(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0k(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.BA,u,u,u,v.gb3t(),u,u,u,u,"Share / save",u))
r=A.eG(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DN
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aQ,A.dp(C.BA,D.fac,v.gb3t(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bWs()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yj.prototype={
U(){return new B.axZ(A.ahx(),C.bw,C.bw)},
gdd(){return this.c}}
B.axZ.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).i8(new B.d0j(v))
x.gcOc().i8(new B.d0k(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b2p
x.i8(new B.d0l(v))
v.xt()},
xt(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xt=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rh(p.c,p.d),$async$xt)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d0c(s))
x=1
break}x=8
return A.b(s.d.BK(0,new A.a2q(r,s.a.d.c)),$async$xt)
case 8:if(s.c==null){x=1
break}s.m(new B.d0d(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d0e(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xt,w)},
YU(){var x=0,w=A.j(y.H),v=this,u
var $async$YU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h1(0),$async$YU)
case 5:x=3
break
case 4:x=6
return A.b(u.ib(0),$async$YU)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YU,w)},
aRz(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0k(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eG(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DN
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bEN,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NF,C.n),o,88,o,o,o,o,o,88)
t=A.kW(C.aE,o,o,m,0,new B.d0f(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRz(p.w)+" / "+p.aRz(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eKC,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.y_:C.iV,o,o,o,o,o)
x=A.v(A.a([u,C.kt,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc4l(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tz,x,o),o,o,o),o,!1,!1,o,o)}}
B.P1.prototype={
U(){return new B.ay4()},
gdd(){return this.c}}
B.ay4.prototype={
a_(){this.a1()
this.P_()},
P_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$P_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fPu(o.c,o.d,new B.d0X(s)),$async$P_)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d0Y(s))
x=1
break}s.e=r
q=O.hUQ(r)
if(q==null){s.m(new B.d0Z(s))
x=1
break}s.d=q
q.aN(0,s.gaZp())
x=8
return A.b(q.i7(0).cM(0,C.qP),$async$P_)
case 8:if(s.c==null){x=1
break}s.m(new B.d1_(s))
x=9
return A.b(q.pG(0),$async$P_)
case 9:q.t3(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d10(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$P_,w)},
c9P(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d11(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cw(0,x.gaZp())
w=x.d
if(w!=null)w.q()
B.i3D(x.e)
x.a2()},
acZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYy(u.c,u.d),$async$acZ)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acZ,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0k(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eG(A.a([A.aH(t,t,t,t,C.oI,t,t,t,u.gc4f(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ie(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DN
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ah0(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zL(s,t),A.aE(t,A.CO(A.p(t,A.X(q?I.y_:C.iV,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bV,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d13(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yo.prototype={
U(){return new B.ay2(new A.cs(null,y.A))}}
B.ay2.prototype={
gcAD(){var x,w,v=this.a
if(v.e!==D.QV)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcAi(){var x,w,v=this.a
if(v.e!==D.yU)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcAD()
if(x!=null){v.Q1(x)
v.e=A.du(R.EW,new B.d0T(v,x))}w=v.gcAi()
if(w!=null){v.Q0(w)
v.f=A.du(C.fT,new B.d0U(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Q0(d){return this.cgP(d)},
cgP(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Q0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ao9(d),$async$Q0)
case 3:t=f
x=4
return A.b(B.c6D(d),$async$Q0)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d0L(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Q0,w)},
Q1(d){return this.cgQ(d)},
cgQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fDb(d),$async$Q1)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzG(t),$async$Q1)
case 4:if(u.c==null){x=1
break}u.m(new B.d0M(u))
u.c.I(y.q).f.R(D.aNs)
case 1:return A.h(v,w)}})
return A.i($async$Q1,w)},
gc0p(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc4g(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0P(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0P=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cw()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eR9)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).c8(A.e8(new B.d0N(),!1,null,y.N)),$async$a0P)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzG(s),$async$a0P)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aNs)
case 1:return A.h(v,w)}})
return A.i($async$a0P,w)},
a8P(d){return this.bGq(d)},
bGq(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fC(C.d.aI(t,", "))),$async$a8P)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8P,w)},
acX(d){return this.bGa(d)},
bGa(d){var x=0,w=A.j(y.H),v=this
var $async$acX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fC(v.a.c)),$async$acX)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eOy)
return A.h(null,w)}})
return A.i($async$acX,w)},
a0K(d){return this.cnK(d)},
cnK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.and(s.d,4),$async$a0K)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rM(r,"ngmy_doc_share_qr.png"),$async$a0K)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0K,w)},
gaUI(){var x,w=this.a
if(w.e!==D.Hm)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8M(d){return this.bGj(d)},
bGj(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8M=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaUI()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8M)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eQ9)
case 1:return A.h(v,w)}})
return A.i($async$a8M,w)},
acY(){var x=0,w=A.j(y.H),v=this,u
var $async$acY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Uf(),$async$acY)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$acY,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0k(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hm&&i!==D.QV&&i!==D.yU
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eG(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hm||t===D.QV||t===D.yU?l:A.aH(l,l,l,l,C.kP,l,l,l,m.gaXB(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pF(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc0p(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hm){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mi,l,l,l)],p))}q.push(C.aQ)
q.push(A.d(m.gc4g(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bOR,D.fjc,new B.d0O(m,d),l)],p))}if(m.a.e===D.Hm&&m.gaUI()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bLq,D.ffX,new B.d0P(m,d),l)],p))
if(m.a.e===D.yU){x=(m.w?C.dx:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DQ:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mi,l,l,l)],p))}if(m.a.e===D.QV){x=(m.r?C.dx:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DQ:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mi,l,l,l),C.ac,A.dp(D.bHe,D.fmc,m.gco7(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oh(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.E(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.E(A.ex(N.Bz,C.To,new B.d0Q(m,d),l),1),C.av,A.E(A.dp(C.yl,C.a7n,new B.d0R(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bJ(C.zr,m.gaXB(),A.bk(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0S(),y.C)}}
B.abi.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aQ,A.p(x,A.pF(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bJ(C.zs,new B.d0b(d),x)],u),x,x,C.mN,v,x,x,x,x,D.f9e,x)}}
B.Yi.prototype={
U(){return new B.axY(A.yT(C.xd,C.ny,C.tX))}}
B.axY.prototype={
q(){this.d.q()
this.a2()},
avS(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c8(A.eG(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fgq,x,x,x,1,x,!0),C.w,A.yS(this.d,C.bQ,this.gavR()),x,!1,!1,x,x)}}
B.Yp.prototype={
U(){return new B.ay3(A.yT(C.xd,C.ny,C.tX))},
gdd(){return this.c}}
B.ay3.prototype={
bXv(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rv("text/plain"),$async$aeQ)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eR3)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$aeQ,w)},
a9A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hjC(p,!0),$async$a9A)
case 3:t=e
p=t==null
s=B.a6b(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eNG)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9A,w)},
q(){this.d.q()
this.a2()},
avS(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bXv(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alR,v,v,v,w.gbLL(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a05,v,v,v,w.gcee(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eG(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.qZ:P.MW,v,v,v,v,v),v,v,v,new B.d0W(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fn0,v,v,v,1,v,!0)
u=A.yS(w.d,C.bQ,w.gavR())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eaf],s),v),v,!1,!1,v,v)}}
B.bc0.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ot
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ot:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.C(C.Yp,A.A(A.a([u,C.bf,A.E(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8z.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NU.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wq.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NT.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.EC.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.chA.prototype={}
B.EB.prototype={}
B.a8y.prototype={}
B.asr.prototype={}
B.Wr.prototype={}
var z=a.updateTypes(["ay<~>()","R(jh)","n(jh)","U6(Y)","~()","Yl(Y)","H(H,jh)","P1(Y)","~(lV)","cq(EB)","ay<jh?>(@)","U4(Y)","U8(Y)","C(jh)","jh(@)","a4<n,@>(jh)","Yk(Y)","U5(Y)","Ym(Y)","Yj(Y)","Yo(Y)","abi(Y)","ai<jh>()","Yp(Y)","abk(Y,H)","Yi(Y)","a4<n,aC>(jh)","cq(Wq)","cq(a8y)","ay<cq>(EB)"])
B.chw.prototype={
$1(d){var x=this.a
x.x=D.aKJ
x.y.K(0,D.aKJ)},
$S:68}
B.chx.prototype={
$1(d){var x=this.a
x.x=D.aKI
x.y.K(0,D.aKI)},
$S:68}
B.chy.prototype={
$1(d){var x=this.a
x.ag9(A.aNC(d.data)).bz(new B.chv(x),y.b)},
$S:68}
B.chv.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.chz.prototype={
$1(d){},
$S:68}
B.chC.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hCU(d.channel))},
$S:15}
B.chD.prototype={
$1(d){},
$S:15}
B.chE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hVS(w.iceConnectionState)
x.cx=w
if($.fYa())switch(w.a){case 0:x.cy=D.aKO
break
case 1:x.cy=D.aKP
break
case 3:x.cy=D.aKQ
break
case 5:x.cy=D.aKM
break
case 6:x.cy=D.aKN
break
case 7:x.cy=D.a5c
break
default:break}},
$S:152}
B.chF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hVT(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.chG.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i56(w.signalingState)},
$S:152}
B.chH.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i3m(w.connectionState)},
$S:152}
B.chI.prototype={
$1(d){},
$S:152}
B.chJ.prototype={
$1(d){},
$S:15}
B.fgq.prototype={
$1(d){var x=y.F.a(new A.rC([],[]).pq(d.target.result,!1)),w=C.xe.t(x.objectStoreNames,"blobs")
if(!w)C.xa.Ki(x,"blobs")},
$S:182}
B.fCD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vF.f9(this.b)
$.eU.mj()
this.c.$1(d)},
$S:447}
B.fCF.prototype={
$1(d){return this.a.$1(B.hLM(this.b,this.c))},
$S:33}
B.fCE.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.fCC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fCS.prototype={
$1(d){var x=this
return B.h9f(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fCT.prototype={
$1(d){var x=this
return B.h9f(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fi4.prototype={
$1(d){var x=this
return B.c6e(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d0u.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d0r.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6e(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d0t.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6e(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d0s.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c6e(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d0w.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bFR,x,x,x,new B.d0v(d),x,x,x,x,x,x),A.E(A.En(D.Pl,!0,x,C.a_b,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pl,x,g,C.ahG,0,e,f)},
$C:"$4",
$R:4,
$S:421}
B.d0v.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fk3.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i7:C.c,r=A.m(28),q=A.p(v,D.bkO,C.f,v,v,D.aYY,v,v,v,v,D.ahw,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bJZ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.F8,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.am5,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v),C.bx,A.A(A.a([A.E(A.dW(C.de,new B.fk1(d),v),1),C.av,A.E(A.bJ(D.feZ,new B.fk2(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.LA,v,v,v,v),v)},
$S:60}
B.fk1.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fk2.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eON)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aAz(v,x))},
$S:0}
B.fkx.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i7:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bkE,C.f,w,w,D.b_o,w,w,w,w,D.ahw,w,w,1/0),new A.C(C.F8,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fUp(u,"Organization name",C.Fz,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fUp(u,"Access code",C.n9,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fUp(u,"Member password",H.G5,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.bx,A.bJ(D.fn5,new B.fkw(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.LA,w,w,w,w),w)},
$S:60}
B.fkw.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eOS)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aDL(u,x,w))},
$S:0}
B.c65.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a5(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cw(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.v4(p,null).cM(0,C.Xt),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bd(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c6b.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6c.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c6d.prototype={
$1(d){return d.b},
$S:z+2}
B.c67.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c68.prototype={
$1(d){return d.b},
$S:z+2}
B.c66.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:13}
B.c69.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c6a.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fCQ.prototype={
$1(d){return new B.U4(this.a,null)},
$S:z+11}
B.fCR.prototype={
$1(d){return new B.U8(this.a,this.b,this.c,null)},
$S:z+12}
B.dN2.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dOb.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dOc.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dOd.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dOa(x,d))},
$S:2}
B.dOa.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dOe.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dOf.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dOg.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dOh.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dOi.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dOj.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dOm.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:100}
B.dOk.prototype={
$1(d){var x=this.a
return x.f?null:x.YT()},
$S:2}
B.dOl.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mo(D.PB))s=C.tL
else s=C.a.a0(s,"video/")||d.mo(D.mt)?C.pT:D.akv
x=this.b.a
w=y.p
return new A.C(C.kI,A.A(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.E(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaou(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dN3.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dN4.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c6f.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c6g.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fDt.prototype={
$2(d,e){return e===this.a},
$S:327}
B.fdD.prototype={
$1(d){return J.k(d)},
$S:17}
B.fig.prototype={
$1(d){var x=this.b
B.hJM(C.Fm.ga5m(this.a)).bz(x.gcDE(x),y.H)},
$S:119}
B.fih.prototype={
$1(d){return this.a.d4(0,null)},
$S:119}
B.fii.prototype={
$0(){return null},
$S:11}
B.c6u.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fij.prototype={
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
return new B.jh(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fmf.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fgJ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fgK.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c6z.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.mt)},
$S:z+1}
B.fHv.prototype={
$1(d){return new B.Yk(this.a,null)},
$S:z+16}
B.d0q.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fH()},
$S:8}
B.d0o.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d0p.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dO9.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_W()},
$S:12}
B.dNx.prototype={
$0(){var x=J.bCR(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dNy.prototype={
$0(){var x=J.bCR(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dN6.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dN5(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCD(this.c)}},
$S:0}
B.dN5.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dN7.prototype={
$0(){var x=J.bCR(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dNc.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dNb(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCD(this.c)}},
$S:0}
B.dNb.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNY.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dNZ.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dNu.prototype={
$1(d){return new B.U5(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dNr.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HG(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.U9(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tr(),$async$$0)
case 5:s=J.a5(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a06(s.gM(t)),$async$$0)
case 8:case 7:r.hW(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNa.prototype={
$1(d){this.a.aaV(d,"No files selected.","Added")},
$S:447}
B.dNC.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dNB(),A.U(x).k("K<1,n>")))},
$S:0}
B.dNB.prototype={
$1(d){return d.a},
$S:z+2}
B.dNg.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wT.c5().cQ9(C.Zf,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jm(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hW("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hW("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ao8(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cl(l)){o.hW("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tr(),$async$$0)
case 9:o.hW("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dNV.prototype={
$1(d){return new B.P1(this.a.a.c,this.b,null)},
$S:z+7}
B.dNW.prototype={
$1(d){return new B.Ym(this.a.a.c,this.b,null)},
$S:z+18}
B.dNX.prototype={
$1(d){return new B.Yj(this.a.a.c,this.b,null)},
$S:z+19}
B.dNs.prototype={
$1(d){return new B.P1(this.a.a.c,this.b,null)},
$S:z+7}
B.dNt.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dNO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HG(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6d(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hW("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ck9(),$async$$0)
case 5:x=6
return A.b(p.tr(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dNK(p),r),new B.dNL(),r.k("K<ak.E,n>")).c_(0,new B.dNM())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).c8(A.e8(new B.dNN(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oZ(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uf(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNK.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dNJ(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dNJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNL.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dNM.prototype={
$1(d){return d.length!==0},
$S:3}
B.dNN.prototype={
$1(d){var x=this.a
return new B.Yo(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dNP.prototype={
$1(d){return d.a},
$S:z+2}
B.dNQ.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dNI.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaou(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mo(D.mt)?C.tN:C.oF
p=!x||p.mo(D.mt)?"Play video":"View"
return A.c_(A.bn(!0,new A.C(C.AQ,A.v(A.a([q,o,t,C.aA,B.Yn(!1,u,!1,w,p,new B.dND(d),v),B.Yn(!1,u,!1,C.jj,"Share via QR",new B.dNE(d),"Letters/numbers QR code"),B.Yn(!1,u,!1,D.a_h,"Send to their Code",new B.dNF(d),"Enter someone else's personal code"),B.Yn(!1,u,!1,C.hA,"Download / save",new B.dNG(d),v),C.an,B.Yn(!1,u,!0,C.e5,"Delete",new B.dNH(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,v,v,C.n),C.bd)},
$S:688}
B.dND.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dNE.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dNF.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dNG.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dNH.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dNd.prototype={
$1(d){return d.a},
$S:z+2}
B.dNe.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dNf.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6f(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.G2(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oZ(s.c,s.f),$async$$0)
case 4:u.hW(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN9.prototype={
$1(d){var x=this.a
x.ts(new B.dN8(x,d,this.b),"Preparing\u2026")},
$S:447}
B.dN8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hW("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.U9(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cl(s)){t.hW("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBM(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNv.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dNw.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gS(s)
x=4
return A.b(B.fPx(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNp.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.G_(new B.dNl(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hW("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dNm(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dNn(s))
case 5:x=8
return A.b(r.b.ic(0,C.ET,new B.dNo()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gam(t)){s.hW("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tr(),$async$$0)
case 9:s.hW("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNl.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dNi(x,d,e))},
$S:127}
B.dNi.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dNm.prototype={
$1(d){return new B.abi(this.a.a,null)},
$S:z+21}
B.dNn.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dNo.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dNq.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HX(o)!=null?3:4
break
case 3:x=5
return A.b(B.a63(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZB(B.HX(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ao8(new B.dNj(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cl(r)){if(B.fPw(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hW(q)
x=1
break}x=10
return A.b(s.tr(),$async$$0)
case 10:o=J.cE(r)
p=o.eJ(r,new B.dNk()).gM(0)
s.hW(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNj.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dNh(x,d,e))},
$S:127}
B.dNh.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dNk.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.mt)},
$S:z+1}
B.dNA.prototype={
$1(d){return new B.Yp(this.a.a.c,null)},
$S:z+23}
B.dNz.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYy(u.a.c,v.b),$async$$0)
case 2:t.hW(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNU.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bn(!0,new A.C(C.AQ,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yn(!0,w,!1,C.n9,"My Code",new B.dNR(d),"Your personal code & QR \u2014 others send docs to you"),B.Yn(!1,w,!1,D.a_h,"Send to their Code",new B.dNS(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yn(!1,w,!1,S.ya,"Import backup",new B.dNT(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,x,x,C.n),C.bd)},
$S:688}
B.dNR.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dNS.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bAl()},
$S:0}
B.dNT.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dO6.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.I5(D.Pl,x,C.a_b,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.Pl).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dO4.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dO5.prototype={
$0(){this.a.ah7()
return null},
$S:0}
B.dO7.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:100}
B.dO8.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abk(e,w,v,this.b,x.e,x.c4h(w),new B.dO0(x,w),new B.dO1(x,v,w),new B.dO2(x,w),new B.dO3(x,w),null)},
$S:z+24}
B.dO0.prototype={
$0(){this.a.aen(this.b)
return null},
$S:0}
B.dO1.prototype={
$0(){var x=this.a
return x.m(new B.dO_(x,this.b,this.c))},
$S:0}
B.dO_.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dO2.prototype={
$0(){this.a.Nq(this.b)
return null},
$S:0}
B.dO3.prototype={
$0(){this.a.agV(this.b)
return null},
$S:0}
B.d0m.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:100}
B.d0n.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:139}
B.d0K.prototype={
$3(d,e,f){return A.dc(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:100}
B.d0J.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d0G.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d0H.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d0I.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d0E.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d0C(this.a),C.fV,C.du,!0,x,!1,x,x)
$.aU.x1$.push(new B.d0D(this.a))
return C.bH},
$S:133}
B.d0C.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d0A(this.a))
return C.bH},
$S:176}
B.d0A.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0x(x))},
$S:8}
B.d0x.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d0D.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0z(x))},
$S:8}
B.d0z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d0F.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d0B(this.a))
return C.bH},
$S:176}
B.d0B.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0y(x))},
$S:8}
B.d0y.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d0j.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d0i(x,d))},
$S:1740}
B.d0i.prototype={
$0(){return this.a.f=this.b===C.uh},
$S:0}
B.d0k.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d0h(x,d))},
$S:8}
B.d0h.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d0l.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d0g(x,d))},
$S:8}
B.d0g.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d0c.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d0d.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d0e.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d0f.prototype={
$1(d){return this.a.d.Mq(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d0X.prototype={
$0(){var x=this.a.a
return B.rh(x.c,x.d)},
$S:1741}
B.d0Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d0Z.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d1_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d10.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d11.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d13.prototype={
$0(){var x=this.a
x.m(new B.d12(x))},
$S:0}
B.d12.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h1(0)
else x.pG(0)},
$S:0}
B.d0T.prototype={
$1(d){return this.a.Q1(this.b)},
$S:12}
B.d0U.prototype={
$1(d){return this.a.Q0(this.b)},
$S:12}
B.d0L.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d0M.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d0N.prototype={
$1(d){return D.fMD},
$S:z+25}
B.d0S.prototype={
$2(d,e){if(d)B.Uf()},
$S:124}
B.d0O.prototype={
$0(){return this.a.a8P(this.b)},
$S:0}
B.d0P.prototype={
$0(){return this.a.a8M(this.b)},
$S:0}
B.d0Q.prototype={
$0(){return this.a.acX(this.b)},
$S:0}
B.d0R.prototype={
$0(){return this.a.a0K(this.b)},
$S:0}
B.d0b.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d0W.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pK(),$async$$0)
case 2:u.m(new B.d0V(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d0V.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c6B.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.mt)},
$S:z+1}
B.c6C.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c6A.prototype={
$2(d,e){return this.bhM(d,e)},
bhM(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Ug(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.flS.prototype={
$1(d){if(d===D.a5b&&(this.a.a.a&30)===0)this.a.fO(0)},
$S:z+27}
B.flT.prototype={
$0(){},
$S:11}
B.fmp.prototype={
bjl(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.faM(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h4p(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bjl(d,e)},
$S:507}
B.fmo.prototype={
$1(d){var x=this
d.b=new B.fmn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fmn.prototype={
$1(d){return this.bjk(d)},
bjk(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYz(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
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
return A.b(B.faM(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
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
return A.b(B.a6c(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.ay0.prototype,"gcb9","PD",0)
x(v,"gcc0","IK",0)
x(v,"gcbw","xC",0)
x(v=B.aBW.prototype,"gc4b","acV",0)
x(v,"gc4c","YS",0)
x(v,"gcqu","agC",0)
x(v=B.aBZ.prototype,"gc4d","YT",0)
x(v,"gcqv","a13",0)
x(B.aBX.prototype,"gc4e","acW",0)
x(B.ay_.prototype,"gc4j","c4k",4)
x(v=B.aBY.prototype,"gcbx","a__",0)
x(v,"gcp6","cp7",4)
x(v,"gb_J","axf",0)
x(v,"gcrY","ah1",0)
x(v,"gbMc","WR",0)
x(v,"gc4i","DR",0)
x(B.ay1.prototype,"gb3t","a12",0)
x(B.axZ.prototype,"gc4l","YU",0)
x(v=B.ay4.prototype,"gaZp","c9P",4)
x(v,"gc4f","acZ",0)
x(v=B.ay2.prototype,"gco7","a0P",0)
x(v,"gaXB","acY",0)
w(B.axY.prototype,"gavR","avS",8)
x(v=B.ay3.prototype,"gcee","aeQ",0)
x(v,"gbLL","a9A",0)
w(v,"gavR","avS",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.chA,B.a8y,B.asr,B.aAz,B.aDL,B.jh,B.ab0,B.btM,B.EB,B.Wr])
w(B.chB,B.chA)
w(B.b2F,B.a8y)
x(A.hT,[B.chw,B.chx,B.chy,B.chv,B.chz,B.chC,B.chD,B.chE,B.chF,B.chG,B.chH,B.chI,B.chJ,B.fgq,B.fCD,B.fCF,B.fCE,B.fCS,B.fCT,B.fi4,B.d0r,B.d0t,B.d0s,B.d0w,B.fk3,B.fkx,B.c65,B.c6c,B.c6d,B.c68,B.c66,B.c69,B.c6a,B.fCQ,B.fCR,B.dOd,B.dOm,B.dOk,B.dOl,B.fdD,B.fig,B.fih,B.c6u,B.fij,B.fmf,B.fgJ,B.fgK,B.c6z,B.fHv,B.d0q,B.d0o,B.dO9,B.dN5,B.dNb,B.dNu,B.dNa,B.dNB,B.dNV,B.dNW,B.dNX,B.dNs,B.dNK,B.dNJ,B.dNL,B.dNM,B.dNN,B.dNP,B.dNQ,B.dNI,B.dNd,B.dNe,B.dN9,B.dNv,B.dNm,B.dNk,B.dNA,B.dNU,B.dO6,B.dO7,B.d0m,B.d0n,B.d0K,B.d0J,B.d0E,B.d0C,B.d0A,B.d0D,B.d0F,B.d0B,B.d0j,B.d0k,B.d0l,B.d0f,B.d0T,B.d0U,B.d0N,B.c6B,B.c6C,B.flS,B.fmo,B.fmn])
w(B.b2G,B.asr)
x(A.j4,[B.fCC,B.d0u,B.d0v,B.fk1,B.fk2,B.fkw,B.dN2,B.dOb,B.dOc,B.dOa,B.dOe,B.dOf,B.dOg,B.dOh,B.dOi,B.dOj,B.dN3,B.dN4,B.fii,B.d0p,B.dNx,B.dNy,B.dN6,B.dN7,B.dNc,B.dNY,B.dNZ,B.dNr,B.dNC,B.dNg,B.dNt,B.dNO,B.dND,B.dNE,B.dNF,B.dNG,B.dNH,B.dNf,B.dN8,B.dNw,B.dNp,B.dNi,B.dNn,B.dNo,B.dNq,B.dNh,B.dNz,B.dNR,B.dNS,B.dNT,B.dO4,B.dO5,B.dO0,B.dO1,B.dO_,B.dO2,B.dO3,B.d0G,B.d0H,B.d0I,B.d0x,B.d0z,B.d0y,B.d0i,B.d0h,B.d0g,B.d0c,B.d0d,B.d0e,B.d0X,B.d0Y,B.d0Z,B.d1_,B.d10,B.d11,B.d13,B.d12,B.d0L,B.d0M,B.d0O,B.d0P,B.d0Q,B.d0R,B.d0b,B.d0W,B.d0V,B.flT])
x(A.m6,[B.abj,B.MS,B.a8z,B.NU,B.Wq,B.NT,B.EC])
x(A.ag,[B.Yl,B.U4,B.U8,B.U5,B.Yk,B.U6,B.Ym,B.Yj,B.P1,B.Yo,B.Yi,B.Yp])
x(A.ah,[B.ay0,B.aBW,B.aBZ,B.aBX,B.ay_,B.aBY,B.ay1,B.axZ,B.ay4,B.ay2,B.axY,B.ay3])
x(A.au,[B.abM,B.axX,B.bc_,B.abk,B.abi,B.bc0])
x(A.kg,[B.c6b,B.c67,B.c6f,B.c6g,B.fDt,B.dNl,B.dNj,B.dO8,B.d0S,B.c6A,B.fmp])
x(A.iP,[B.bhl,B.btq])})()
A.jU(b.typeUniverse,JSON.parse('{"b2F":{"a8y":[]},"b2G":{"asr":[]},"Yl":{"ag":[],"r":[]},"ay0":{"ah":["Yl"]},"abM":{"au":[],"r":[]},"U4":{"ag":[],"r":[]},"U8":{"ag":[],"r":[]},"aBW":{"ah":["U4"]},"aBZ":{"ah":["U8"]},"bhl":{"iP":[]},"U5":{"ag":[],"r":[]},"aBX":{"ah":["U5"]},"Yk":{"ag":[],"r":[]},"U6":{"ag":[],"r":[]},"abk":{"au":[],"r":[]},"Ym":{"ag":[],"r":[]},"Yj":{"ag":[],"r":[]},"P1":{"ag":[],"r":[]},"Yo":{"ag":[],"r":[]},"abi":{"au":[],"r":[]},"Yi":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"ay_":{"ah":["Yk"]},"btq":{"iP":[]},"aBY":{"ah":["U6"]},"axX":{"au":[],"r":[]},"bc_":{"au":[],"r":[]},"ay1":{"ah":["Ym"]},"axZ":{"ah":["Yj"]},"ay4":{"ah":["P1"]},"ay2":{"ah":["Yo"]},"axY":{"ah":["Yi"]},"ay3":{"ah":["Yp"]},"bc0":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tY"),k:x("Lj()"),m:x("bm<n,n>"),F:x("qU"),g:x("ay<jh?>"),x:x("ay<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jh>"),w:x("O<+file,name(lv,n)>"),u:x("O<cP>"),s:x("O<n>"),E:x("O<iP>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jh>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iz"),e:x("i8Z"),af:x("DR"),U:x("jh"),b:x("cq"),C:x("aC"),aK:x("vS"),ab:x("EB"),br:x("asr"),v:x("Wr"),N:x("n"),X:x("bo<N>"),Q:x("lG"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bW<ai<jh>>"),aW:x("bW<dD?>"),aY:x("bW<~>"),cx:x("abj"),b1:x("bg<ai<jh>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAz"),bG:x("aDL"),q:x("mX"),B:x("pf<EB>"),c6:x("pf<a8z>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jh>?"),aL:x("ai<@>?"),h:x("a4<n,@>?"),l:x("jh?"),R:x("aC?"),c:x("Wr?"),d:x("+answerQr,transfer(n,ay<ai<jh>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,MS,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("ab0?"),bk:x("aAz?"),ag:x("aDL?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aXi=new A.aA(C.aE,2,C.q,-1)
D.bT4=new A.a8(C.a3,C.a7,C.x,C.a19,null,null)
D.aYY=new A.o(null,null,null,C.m2,null,D.bT4,C.n)
D.b_o=new A.o(null,null,null,C.m2,null,E.Gi,C.n)
D.ab8=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acn=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adh=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeN=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fa5=new A.x("Your team portal",null,C.ds,null,null,null,null,null,null,null,null,null)
D.fo0=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IH,null,null,null,null,null,null,null,null,null)
D.d0z=x([D.fa5,C.an,D.fo0],y.p)
D.bkv=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d0z,null)
D.fsc=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fee=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IH,null,null,null,null,null,null,null,null,null)
D.dfm=x([D.fsc,C.an,D.fee],y.p)
D.bkE=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dfm,null)
D.foA=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fi_=new A.x("Enter the access code and password from your organization.",null,G.IH,null,null,null,null,null,null,null,null,null)
D.ddl=x([D.foA,C.an,D.fi_],y.p)
D.bkO=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.ddl,null)
D.bqo=new A.Q(16,10,16,28)
D.bqw=new A.Q(16,14,16,4)
D.brJ=new A.Q(20,0,20,16)
D.bse=new A.Q(20,8,20,16)
D.ahw=new A.Q(24,22,24,20)
D.a_h=new A.a0(63394,"MaterialIcons",!1)
D.akv=new A.a0(63515,"MaterialIcons",!1)
D.bDO=new A.a0(983813,"MaterialIcons",!1)
D.bB5=new A.a0(62867,"MaterialIcons",!1)
D.bEN=new A.ae(D.bB5,44,C.c,null,null,null)
D.bFR=new A.ae(C.pI,null,C.ad,null,null,null)
D.bHe=new A.ae(C.iW,18,null,null,null,null)
D.bIV=new A.ae(D.a_h,26,C.c,null,null,null)
D.bJq=new A.ae(C.Bs,null,null,null,null,null)
D.bJZ=new A.ae(C.yc,null,null,null,null,null)
D.bL6=new A.ae(W.Na,null,null,null,null,null)
D.bLq=new A.ae(C.hk,16,null,null,null,null)
D.bOR=new A.ae(C.r2,16,null,null,null,null)
D.bF3=new A.ae(C.n9,null,null,null,null,null)
D.bPH=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bF3,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bKw=new A.ae(C.Fz,null,null,null,null,null)
D.bPM=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bKw,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFo=new A.ae(H.G5,null,null,null,null,null)
D.bPX=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFo,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cCJ=x([C.f8,C.aZ,C.aE],y.O)
D.bUX=new A.a8(C.ax,C.aC,C.x,D.cCJ,null,null)
D.cCd=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pl=x([C.f8,C.aE],y.O)
D.PB=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mt=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d8j=x([C.pl,C.aE],y.O)
D.dZV={iceServers:0}
D.aFm={urls:0}
D.diX=new A.bm(D.aFm,["stun:stun.l.google.com:19302"],y.m)
D.diW=new A.bm(D.aFm,["stun:stun1.l.google.com:19302"],y.m)
D.cSl=x([D.diX,D.diW],A.ax("O<a4<n,n>>"))
D.dih=new A.bm(D.dZV,[D.cSl],A.ax("bm<n,@>"))
D.Hm=new B.MS(0,"lanDirect")
D.QU=new B.MS(1,"cloudStash")
D.dtV=new B.MS(2,"inlineInstant")
D.QV=new B.MS(3,"webrtcLink")
D.yU=new B.MS(4,"videoCloud")
D.fo_=new A.x("Receive file",null,C.nq,null,null,null,null,null,null,null,null,null)
D.csm=x([E.ame,C.ab,D.fo_],y.p)
D.eGE=new A.cn(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.csm,null)
D.e4y=new A.C(C.ch,D.eGE,null)
D.f1k=new A.G(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1O,null,null,null)
D.faD=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f1k,null,C.L,null,null,null,null,null,null,null)
D.e3R=new A.C(C.AW,D.faD,null)
D.b3D=new A.cr(C.A,null,null,D.e3R,null)
D.eaf=new A.cL(0,null,0,28,null,null,D.b3D,null)
D.eay=new B.a8z(0,"RTCDataChannelConnecting")
D.aKI=new B.a8z(1,"RTCDataChannelOpen")
D.aKJ=new B.a8z(3,"RTCDataChannelClosed")
D.eaz=new B.EC(0,"RTCIceConnectionStateNew")
D.eaA=new B.EC(1,"RTCIceConnectionStateChecking")
D.eaB=new B.EC(2,"RTCIceConnectionStateCompleted")
D.eaC=new B.EC(3,"RTCIceConnectionStateConnected")
D.eaD=new B.EC(4,"RTCIceConnectionStateCount")
D.eaE=new B.EC(5,"RTCIceConnectionStateFailed")
D.eaF=new B.EC(6,"RTCIceConnectionStateDisconnected")
D.aKK=new B.EC(7,"RTCIceConnectionStateClosed")
D.aKL=new B.Wq(0,"RTCIceGatheringStateNew")
D.eaG=new B.Wq(1,"RTCIceGatheringStateGathering")
D.a5b=new B.Wq(2,"RTCIceGatheringStateComplete")
D.a5c=new B.NT(0,"RTCPeerConnectionStateClosed")
D.aKM=new B.NT(1,"RTCPeerConnectionStateFailed")
D.aKN=new B.NT(2,"RTCPeerConnectionStateDisconnected")
D.aKO=new B.NT(3,"RTCPeerConnectionStateNew")
D.aKP=new B.NT(4,"RTCPeerConnectionStateConnecting")
D.aKQ=new B.NT(5,"RTCPeerConnectionStateConnected")
D.eaH=new B.NU(0,"RTCSignalingStateStable")
D.eaI=new B.NU(1,"RTCSignalingStateHaveLocalOffer")
D.eaJ=new B.NU(2,"RTCSignalingStateHaveRemoteOffer")
D.eaK=new B.NU(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eaL=new B.NU(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aKR=new B.NU(5,"RTCSignalingStateClosed")
D.eKC=new A.at(160,48)
D.b4Q=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.eM5=new A.a7(16,16,D.b4Q,null)
D.fdE=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eNw=new A.b1(D.fdE,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkW=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eNz=new A.b1(D.fkW,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fte=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eNG=new A.b1(D.fte,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fdh=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eO5=new A.b1(D.fdh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foK=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNs=new A.b1(D.foK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fq7=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eOy=new A.b1(D.fq7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuC=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eON=new A.b1(D.fuC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsG=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eOS=new A.b1(D.fsG,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftQ=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ePD=new A.b1(D.ftQ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fbZ=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new A.b1(D.fbZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmG=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eQu=new A.b1(D.fmG,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ffN=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new A.b1(D.ffN,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuI=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eR3=new A.b1(D.fuI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fce=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eR9=new A.b1(D.fce,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faY=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eRo=new A.b1(D.faY,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f7X=new A.x("NGMY DOC SHARE",null,C.aOJ,null,null,null,null,null,null,null,null,null)
D.f9e=new A.x("Show this to sender",null,C.kv,null,null,null,null,null,null,null,null,null)
D.fac=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.feC=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.feZ=new A.x("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.ffX=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fgq=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fjc=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.flU=new A.x("Send to their Doc Share",null,C.no,null,null,null,null,null,null,null,null,null)
D.fmc=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fmv=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fn0=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fn5=new A.x("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fnt=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fqz=new A.x("Share files & videos\nwith a scan.",null,C.aOK,null,null,null,null,null,null,null,null,null)
D.fqS=new A.x("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fMD=new B.Yi(null)
D.a8a=new B.abj(0,"docShare")
D.a8b=new B.abj(1,"gate")
D.TS=new B.abj(2,"gateNoIndividual")})();(function staticFields(){$.aMo=null
$.f8A=function(){var x=y.N
return A.T(x,x)}()
$.FM=A.T(y.N,y.D)
$.afi=A.T(y.N,A.ax("lv"))
$.Qh=A.T(y.N,y.D)
$.f97=A.T(y.N,A.ax("ab0"))
$.c6t=A.T(y.S,A.ax("btM"))
$.h4o=1
$.hRG=null
$.hRF=null
$.hJb=null
$.fUB=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i9t","hlt",()=>new B.chB())
x($,"i7o","fYa",()=>C.a.t(A.bu(A.bu(A.bu(A.Gm(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["otoB9yb8T88lIGaO+8MVDOshrFM="]=a.current})($__dart_deferred_initializers__);