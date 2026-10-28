((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cge:function cge(){},
hwT(d){var x=null,w=new B.b1W(d,D.e4l,new A.p5(x,x,y.c6),new A.p5(x,x,y.B))
w.bub(d)
return w},
b1W:function b1W(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cg9:function cg9(d){this.a=d},
cga:function cga(d){this.a=d},
cgb:function cgb(d){this.a=d},
cg8:function cg8(d){this.a=d},
cgc:function cgc(d){this.a=d},
hwU(d,e){var x=y.N
x=new B.b1X(d,e,A.U(x,y.e),A.U(x,y.z))
x.buc(d,e)
return x},
b1X:function b1X(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgf:function cgf(d){this.a=d},
cgg:function cgg(d){this.a=d},
cgh:function cgh(d){this.a=d},
cgi:function cgi(d){this.a=d},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
cgl:function cgl(d){this.a=d},
cgm:function cgm(d){this.a=d},
fOq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.y1.KW(x,"ngmy_doc_share_v1",new B.fbr(),1)},
hDo(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cp(d))
if(y.J.b(d))return new Uint8Array(A.cp(J.eU(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cp(A.Bz(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Q5(d,e){return B.hSr(d,e)},
hSr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aLQ
x=7
return A.b(o==null?$.aLQ=B.fOq():o,$async$Q5)
case 7:s=g
r=new Uint8Array(A.cp(e))
q=J.mv(s,"blobs","readwrite")
C.iz.lX(J.mt(q,"blobs"),r,d)
x=8
return A.b(J.pe(q),$async$Q5)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a8(m)
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
return A.i($async$Q5,w)},
Q4(d){return B.hSq(d)},
hSq(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aLQ
x=7
return A.b(o==null?$.aLQ=B.fOq():o,$async$Q4)
case 7:s=f
r=J.mv(s,"blobs","readonly")
x=8
return A.b(C.iz.yV(J.mt(r,"blobs"),d),$async$Q4)
case 8:q=f
x=9
return A.b(J.pe(r),$async$Q4)
case 9:o=B.hDo(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a8(m)
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
return A.i($async$Q4,w)},
afp(d){return B.hSp(d)},
hSp(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aLQ
x=7
return A.b(p==null?$.aLQ=B.fOq():p,$async$afp)
case 7:s=f
r=J.mv(s,"blobs","readwrite")
C.iz.EW(J.mt(r,"blobs"),d)
x=8
return A.b(J.pe(r),$async$afp)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a8(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afp,w)},
fbr:function fbr(){},
hFI(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bma(w,v))}return u},
hcY(d,e){var x,w={},v=A.aU4("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fx0(w,v,e)
C.vi.xO(v,"change",new B.fx2(w,v,!1))
C.vi.xO(v,"cancel",new B.fx1(w))
$.eP.m5()
v.click()
A.bN(C.aem,new B.fx_(w),y.H)},
fx0:function fx0(d,e,f){this.a=d
this.b=e
this.c=f},
fx2:function fx2(d,e,f){this.a=d
this.b=e
this.c=f},
fx1:function fx1(d){this.a=d},
fx_:function fx_(d){this.a=d},
Cl(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cl=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSq()?3:4
break
case 3:x=5
return A.b(B.h8a(e,d,s,!0,!1,f,g,h,!1,i),$async$Cl)
case 5:x=1
break
case 4:x=6
return A.b(B.PK(d,s,f,g,h,i),$async$Cl)
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
return A.b(B.HB(s,d),$async$Cl)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f6T(s,d),$async$Cl)
case 14:x=12
return A.b(r.h8a(q,p,o,n,m,l,k,j,a1,i),$async$Cl)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).ci(A.eo(new B.fxf(s,i,d,f,g,h),!1,null,y.H)),$async$Cl)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).ci(A.eo(new B.fxg(s,i,d,f,g,h),!1,null,y.H)),$async$Cl)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cl,w)},
PK(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXJ(e),$async$PK)
case 3:u=k
x=4
return A.b(B.anr(d,e,!1),$async$PK)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HB(e,d),$async$PK)
case 7:if(k){v=D.a7n
x=1
break}x=8
return A.b(B.TG(e),$async$PK)
case 8:v=t?D.Tb:D.a7o
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXH(d,e)){v=D.a7n
x=1
break}x=11
return A.b(B.TG(e),$async$PK)
case 11:v=t?D.Tb:D.a7o
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fJH(d,e)){v=D.a7n
x=1
break}x=14
return A.b(B.TG(e),$async$PK)
case 14:v=D.Tb
x=1
break
case 13:v=t?D.Tb:D.a7o
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
f6T(d,e){var x=0,w=A.j(y.y),v
var $async$f6T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXH(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXJ(d),$async$f6T)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6T,w)},
h8a(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).ci(A.eo(new B.fcM(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h3l(d,e,f,g,h,i,j){return new B.XP(e,j,d,g,h,i,f,null)},
feI(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$feI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.c_(C.K,null,new B.feL(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$feI)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$feI,w)},
ffc(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$ffc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.c_(C.K,null,new B.ffe(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$ffc)
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
return A.i($async$ffc,w)},
fOz(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bo(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fpB(d,e){var x=0,w=A.j(y.H),v
var $async$fpB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TG(e),$async$fpB)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fpB,w)},
fxf:function fxf(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fxg:function fxg(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aaL:function aaL(d,e){this.a=d
this.b=e},
fcM:function fcM(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XP:function XP(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axs:function axs(){this.c=this.a=this.d=null},
cZZ:function cZZ(d,e){this.a=d
this.b=e},
cZW:function cZW(d){this.a=d},
cZY:function cZY(d){this.a=d},
cZX:function cZX(d){this.a=d},
d_0:function d_0(){},
d__:function d__(d){this.a=d},
abd:function abd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aA1:function aA1(d,e){this.a=d
this.b=e},
aDc:function aDc(d,e,f){this.a=d
this.b=e
this.c=f},
feL:function feL(d,e,f){this.a=d
this.b=e
this.c=f},
feJ:function feJ(d){this.a=d},
feK:function feK(d,e,f){this.a=d
this.b=e
this.c=f},
ffe:function ffe(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ffd:function ffd(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4L(d,e,f,g,h){return B.hrO(d,e,f,g,h)},
hrO(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c4L=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iH(r.dr(d,new B.c4M(s,e,h,g,f,q),y.g),y.l),$async$c4L)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gU(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4L,w)},
aXE(d,e,f,g,h){return B.hrP(d,e,f,g,h)},
hrP(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXE=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asI("GET",d)
o=A.fGd()
if(o==null)o=new A.KS(A.a([],y.W))
x=7
return A.b(o.eO(0,s).cL(0,C.Em),$async$aXE)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BC(),$async$aXE)
case 8:q=j
if(J.ab(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.AY(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a8(m)
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
return A.i($async$aXE,w)},
aXD(d){return B.hrM(d)},
hrM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uV(d,null).cL(0,C.nx),$async$aXD)
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
q=A.a8(n)
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
return A.i($async$aXD,w)},
c4K(d){return B.hrN(d)},
hrN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c4K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uV(d,null).cL(0,C.pl),$async$c4K)
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
r=A.a8(o)
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
return A.i($async$c4K,w)},
c4M:function c4M(d,e,f,g,h,i){var _=this
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
Hz(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hrU(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Hz(C.a.b_(u,v.length))}return null},
hrV(d){var x=B.Hz(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hrQ(){var x,w=$.pb(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aD(10)
return C.d.fS(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(24)]},
a5v(d){return B.hrR(d)},
hrR(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5v=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bF),$async$a5v)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
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
return A.i($async$a5v,w)},
a5w(d,e){return B.hrS(d,e)},
hrS(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5w=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hz(d,e,!1,!1,C.cF,null),$async$a5w)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
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
return A.i($async$a5w,w)},
AX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$AX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$AX)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Hz(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5x(r),$async$AX)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5v("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$AX)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Hz(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$AX)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hrQ()
x=14
return A.b(B.a5x(m),$async$AX)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5w("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AX)
case 15:k=f
x=16
return A.b(B.a5w("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AX)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$AX)
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
return A.i($async$AX,w)},
a5x(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Hz(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5v("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5x)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5x,w)},
a5y(d,e,f,g){return B.hrW(d,e,f,g)},
hrW(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5y=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gal(d)){v=!1
x=1
break}r=B.Hz(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5x(r),$async$a5y)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c4S())>1048576||g.b8(d,new B.c4T())){v=B.DN(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a5J("myCode",d,a0),$async$a5y)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ab(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ab(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.DN(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXM(u,g.gM(d),a0),$async$a5y)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pb().aD(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dr(d,new B.c4U(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXF(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5y)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5y,w)},
DN(d,e,f,g,h){return B.hrT(d,e,f,g,h)},
hrT(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DN=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$DN)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.c4O())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pb().aD(9999)
h=Date.now()
g=""+1000*h+"_"+C.cH.aD(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gah(a6),e=y.N,d=y.z
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
a1=B.HD(a9,q)
a0=new A.Js(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DN)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ab(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eS().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oE(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a91(a1.a,a4,"media",a1.d,a2).wr(m,n,new A.D5(!0,q.c)),$async$DN)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DN)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOi(r),$async$DN)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dr(a6,new B.c4P(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXF(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DN)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOi(r),$async$DN)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DN,w)},
aXF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5v(t),$async$aXF)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c4N(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5w(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXF,w)},
Mo(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Mo=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5v("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Mo)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gU(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aXG(k,a0),$async$Mo)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aXL(h),$async$Mo)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.TN(g,a0),$async$Mo)
case 10:f=a3
if(f!=null&&J.cw(f)){m+=J.ab(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.B(new A.a1(r,new B.c4Q(),q),n)
d=A.B(new A.a1(r,new B.c4R(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.da(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5w("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Mo)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Mo,w)},
aXG(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
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
break}i=B.hWd(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cj(l,m,"Received via My Code",t,e,i),$async$aXG)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOi(s),$async$aXG)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXG,w)},
c4S:function c4S(){},
c4T:function c4T(){},
c4U:function c4U(){},
c4O:function c4O(){},
c4P:function c4P(){},
c4N:function c4N(){},
c4Q:function c4Q(){},
c4R:function c4R(){},
fxc(d,e){var x=0,w=A.j(y.H)
var $async$fxc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).ci(A.eo(new B.fxd(e),!1,null,y.H)),$async$fxc)
case 2:return A.h(null,w)}})
return A.i($async$fxc,w)},
bAP(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bAP=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).ci(A.eo(new B.fxe(g,e,f),!1,null,y.y)),$async$bAP)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAP,w)},
fxd:function fxd(d){this.a=d},
fxe:function fxe(d,e,f){this.a=d
this.b=e
this.c=f},
TD:function TD(d,e){this.c=d
this.a=e},
aBo:function aBo(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dKO:function dKO(d,e){this.a=d
this.b=e},
TH:function TH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBr:function aBr(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dLX:function dLX(d){this.a=d},
dLY:function dLY(d){this.a=d},
dLZ:function dLZ(d){this.a=d},
dLW:function dLW(d,e){this.a=d
this.b=e},
dM_:function dM_(d){this.a=d},
dM0:function dM0(d){this.a=d},
dM1:function dM1(d,e){this.a=d
this.b=e},
dM2:function dM2(d,e){this.a=d
this.b=e},
dM3:function dM3(d,e){this.a=d
this.b=e},
dM4:function dM4(d){this.a=d},
dM7:function dM7(){},
dM5:function dM5(d){this.a=d},
dM6:function dM6(d,e){this.a=d
this.b=e},
bgu:function bgu(){},
TE:function TE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBp:function aBp(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dKP:function dKP(d){this.a=d},
dKQ:function dKQ(d){this.a=d},
fJI(d){var x=d.hH
if(x>=0)return C.o.O(x)
return 10},
hrY(d){var x=d.kp
if(x>=0)return x
return 4.99},
hrX(d){var x=d.l7,w=y.N
w=x.iM(x,new B.c4W(),w,w)
return w},
fZq(d){var x=d.kq,w=y.N
w=x.iM(x,new B.c4X(),w,w)
return w},
aXJ(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aXJ)
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
return A.i($async$aXJ,w)},
a5A(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5A=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a5A)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a5A)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5A,w)},
TG(d){var x=0,w=A.j(y.H),v,u
var $async$TG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$TG)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TG,w)},
fJH(d,e){var x,w,v
if(B.hrY(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hrX(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.c9(new A.Q(Date.now(),0,!1))},
aXH(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fZq(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.c9(new A.Q(Date.now(),0,!1))},
fZr(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.fZq(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.c9(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.n(0,t,u.bN(A.dA(f,0,0,0,0,0).a).a5().ac())
d.kq=w},
ans(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$ans=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$ans)
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
return A.i($async$ans,w)},
ant(d){var x=0,w=A.j(y.H),v,u,t
var $async$ant=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.ans(d),$async$ant)
case 3:u=f
x=5
return A.b(A.ay(),$async$ant)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$ant)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ant,w)},
anr(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fJI(d)
if(u<=0){v=!1
x=1
break}if(B.fJH(d,e)){v=!1
x=1
break}x=3
return A.b(B.ans(e),$async$anr)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anr,w)},
aXI(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HB(e,d),$async$aXI)
case 3:if(g){v=-1
x=1
break}u=B.fJI(d)
if(u<=0){v=-1
x=1
break}if(B.fJH(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ans(e),$async$aXI)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXI,w)},
c4Z(d,e,f){var x=0,w=A.j(y.y),v
var $async$c4Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HB(e,d),$async$c4Z)
case 3:if(h){v=!1
x=1
break}v=B.anr(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4Z,w)},
c4Y(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c4Y=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.c4Z(d,u,i.gSq()),$async$c4Y)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4Y,w)},
a5z(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5z=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gSq()){v=!0
x=1
break}if(B.aXH(d,u)){v=!0
x=1
break}x=5
return A.b(A.l6(u,C.QF),$async$a5z)
case 5:x=k?3:4
break
case 3:B.fZr(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5z)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kK(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QF,"Doc Share for Organizations"),$async$a5z)
case 7:if(!k){v=!1
x=1
break}B.fZr(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5z)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5z,w)},
c4W:function c4W(){},
c4X:function c4X(){},
fxP(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fxP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fxP)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f3B.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.f3B.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxP,w)},
hYp(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f3B.bn($.f3B,new B.fxR(d))},
fxR:function fxR(d){this.a=d},
f4Z(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f4Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mV(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jm,null,y.H),$async$f4Z)
case 3:C.zk.f4(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eP.m5()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f4Z,w)},
aeg(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f48.n(0,d,new B.aas(A.bl(e,!0,v)))
x=3
return A.b(A.ay(),$async$aeg)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aeg)
case 2:return A.h(null,w)}})
return A.i($async$aeg,w)},
aea(d){return B.hHx(d)},
hHx(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aea=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f48.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$aea)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.f8E(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aas(r)
$.f48.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aea,w)},
PA(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cp(e))
$.Fr.n(0,d,u)
x=3
return A.b(B.Q5(d,u),$async$PA)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PA,w)},
aMa(d){return B.hHv(d)},
hHv(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fr.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Q4(d),$async$aMa)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fr.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aMa)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aI(r)
x=!J.ck(q)?9:10
break
case 9:B.PA(d,q)
x=11
return A.b(J.hJ(s,d),$async$aMa)
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
return A.i($async$aMa,w)},
hDK(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cp(J.eU(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cp(A.Bz(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
return A.fe(null,y.K)},
a0d(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0d=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bR(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fcY(r,t),!1,s)
A.fG(r,"error",new B.fcZ(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i5(0,C.KS,new B.fd_())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0d,w)},
aMu(d,e,f){return B.hJL(d,e,f)},
hJL(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMu=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0d(i),$async$aMu)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ab(j)
x=11
return A.b(B.Q5(o,p),$async$aMu)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ab(j)===0){x=1
break}x=12
return A.b(B.aeg(k,j,s),$async$aMu)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a8(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMu,w)},
aMt(d,e,f){return B.hJK(d,e,f)},
hJK(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMt=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMu(d,e,f),$async$aMt)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0d(f),$async$aMt)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fr.n(0,s,r)
$.PR.n(0,s,r)
x=11
return A.b(B.PA(s,r),$async$aMt)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a8(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMt,w)},
AY(d,e,f,g,h,i){return B.hs6(d,e,f,g,h,i)},
hs6(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AY=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cH.aD(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.je(p,q,o,n,new A.Q(Date.now(),0,!1).a5().ac(),a0,f,B.aXP(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PA(s,d),$async$AY)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$AY)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cS.gct().aI(d)),$async$AY)
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
return A.b(B.A2(e),$async$AY)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FC(e,j),$async$AY)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AY,w)},
TI(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A2(d),$async$TI)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cH.aD(99999)
n=p.b
l=o.type
l.toString
k=B.fZt(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a5().ac()
i=new B.je(m,n,k,l,j,"From folder",null,B.aXP(),null)
$.aeJ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0d(o),$async$TI)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fr.n(0,h,g)
$.PR.n(0,h,g)
B.PA(h,g)
x=9
break
case 10:x=11
return A.b(B.aMt(d,m,o),$async$TI)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FC(d,t),$async$TI)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TI,w)},
fJM(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fJM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fZt(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HC(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.AY(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJM,w)},
HC(d,e,f,g,h,i){return B.hs5(d,e,f,g,h,i)},
hs5(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HC=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cH.aD(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Js(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HC)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.fZ(n,m)
o+=J.ab(m)
case 9:if(!(J.ab(n)>=1048576)){x=10
break}l=new Uint8Array(A.cp(J.QD(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kt(0,1048576,J.ab(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Q5(k,l),$async$HC)
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
return A.b(j.a9(0),$async$HC)
case 12:x=s.pop()
break
case 5:x=J.ab(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Q5(k,new Uint8Array(A.cp(n))),$async$HC)
case 15:J.cf(q,k)
case 14:if(J.ab(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeg(r,q,g),$async$HC)
case 16:f=new B.je(i,a1,a0,g,new A.Q(Date.now(),0,!1).a5().ac(),a2,null,B.aXP(),null)
x=17
return A.b(B.A2(d),$async$HC)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FC(d,e),$async$HC)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HC,w)},
TK(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TK=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeJ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0d(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aea(s),$async$TK)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Q4(u[o]),$async$TK)
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
v=A.Bz(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.PR.h(0,s)
if(i==null)i=$.Fr.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r3(d,e),$async$TK)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.PR.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Bz(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TK,w)},
fZt(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
r3(d,e){return B.hs7(d,e)},
hs7(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r3=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.PR.h(0,f)
if(e==null)e=$.Fr.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeJ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0d(s),$async$r3)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fr.n(0,f,r)
$.PR.n(0,f,r)
B.PA(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a8(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aea(f),$async$r3)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awg(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Q4(g[l]),$async$r3)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.am1()
if(!C.aG.gal(r)){$.Fr.n(0,f,r)
$.PR.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMa(f),$async$r3)
case 17:j=a3
if(j!=null&&!C.aG.gal(j)){$.PR.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TK(a0,a1,0,g),$async$r3)
case 20:i=a3
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.cp(i))
$.Fr.n(0,f,h)
$.PR.n(0,f,h)
B.PA(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$r3,w)},
hsa(d){var x,w,v=$.aeJ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hsb(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hs8(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anz(d,e,f,g,h){return B.hs9(d,e,f,g,h)},
hs9(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anz=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aeJ.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0d(s),$async$anz)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.r3(g,e),$async$anz)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ab(r)/2|0,J.ab(r))
n=$.eS().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i_(d).wr(h,r,new A.D5(!0,e.c)),$async$anz)
case 12:f.$2(J.ab(r),J.ab(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
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
return A.i($async$anz,w)},
fZv(d,e,f,g,h){var x,w,v,u,t=$.fZu
$.fZu=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.aD(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c59.n(0,t,new B.bsR(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awg(u)))
return t},
fJN(d){var x=0,w=A.j(y.H)
var $async$fJN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fJN,w)},
HD(d,e){var $async$HD=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aeJ.h(0,h)
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
return A.pM(B.TK(d,e,p,o<q?o:q),$async$HD,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pM(A.F0(n),$async$HD,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pM(B.aea("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HD,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pM(B.Q4(h[l]),$async$HD,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pM(A.F0(k),$async$HD,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pM(B.r3(d,e),$async$HD,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pM(A.F0(A.Bz(j,p,o<i?o:i)),$async$HD,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pM(null,0,w)
case 2:return A.pM(t.at(-1),1,w)}})
var x=0,w=A.h73($async$HD,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h8S(w)},
aXR(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aXR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c59.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a2X(),$async$aXR)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXR,w)},
TJ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c59.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2X(),$async$TJ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeg(r.c,u,r.z),$async$TJ)
case 4:t=new B.je(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aXP(),null)
u=r.a
x=5
return A.b(B.A2(u),$async$TJ)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FC(u,s),$async$TJ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TJ,w)},
a5G(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c59.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afp(u[s]),$async$a5G)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5G,w)},
c5b(d,e,f){var x=0,w=A.j(y.H)
var $async$c5b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxT(d,e,f),$async$c5b)
case 2:return A.h(null,w)}})
return A.i($async$c5b,w)},
c5c(d,e,f){var x=0,w=A.j(y.H)
var $async$c5c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxU(d,e,f),$async$c5c)
case 2:return A.h(null,w)}})
return A.i($async$c5c,w)},
DO(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A2(d),$async$DO)
case 2:p=g
J.nc(p,new B.c5a(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fr.W(0,v)
$.aeJ.W(0,e)
x=3
return A.b(B.aea(v),$async$DO)
case 3:u=g
$.f48.W(0,v)
x=4
return A.b(A.ay(),$async$DO)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DO)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DO)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afp(s[q]),$async$DO)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afp(v),$async$DO)
case 13:x=14
return A.b(B.FC(d,p),$async$DO)
case 14:return A.h(null,w)}})
return A.i($async$DO,w)},
aXQ(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aXQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r3(d,e),$async$aXQ)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f4Z(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXQ,w)},
A2(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$A2)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fd0(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A2,w)},
FC(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FC=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$FC)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fgW(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FC)
case 3:return A.h(null,w)}})
return A.i($async$FC,w)},
bxT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A2(d),$async$bxT)
case 3:u=h
t=J.cD(u)
s=t.bf(u,new B.fbF(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aBp(f))
x=4
return A.b(B.FC(d,u),$async$bxT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxT,w)},
bxU(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A2(d),$async$bxU)
case 3:u=h
t=J.cD(u)
s=t.bf(u,new B.fbG(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cC3(f))
x=4
return A.b(B.FC(d,u),$async$bxU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxU,w)},
aas:function aas(d){this.a=d},
f8E:function f8E(){},
fcY:function fcY(d,e){this.a=d
this.b=e},
fcZ:function fcZ(d){this.a=d},
fd_:function fd_(){},
c5a:function c5a(d){this.a=d},
bsR:function bsR(d,e,f,g,h,i,j,k,l){var _=this
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
fd0:function fd0(){},
fgW:function fgW(){},
fbF:function fbF(d){this.a=d},
fbG:function fbG(d){this.a=d},
a5H(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5f())?3:4
break
case 3:x=5
return A.b(B.aXS(d,e),$async$a5H)
case 5:u=g
if(u!=null){t=u.c
B.Mq(d,u.b,e,t)}v=u
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
return A.b(B.aXN(s),$async$a5H)
case 10:case 9:if(g){v=new A.OY(1,D.Qi,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TL(d,e),$async$a5H)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.TQ(!0,!0,d,e),$async$a5H)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Mq(d,D.yz,e,t)
v=new A.OY(p,D.yz,t)
x=1
break}v=B.c5e(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5H,w)},
TL(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5J(null,d,e),$async$TL)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ab(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aXM(p,d.length,e),$async$TL)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5c(e,C.d.gL(d).a,r.b),$async$TL)
case 7:case 6:q=r.a
x=8
return A.b(B.Mq(d,D.Qi,e,q),$async$TL)
case 8:v=new A.OY(d.length,D.Qi,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TL,w)},
TM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ma(D.mi)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5I(d,e),$async$TM)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c57(s,d,e,t),$async$TM)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXN(t),$async$TM)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.r3(e,d),$async$TM)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TL(A.a([d],y.r),e),$async$TM)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TM,w)},
TO(){var x=0,w=A.j(y.H)
var $async$TO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fJG(),$async$TO)
case 2:x=3
return A.b(B.aOz(),$async$TO)
case 3:return A.h(null,w)}})
return A.i($async$TO,w)},
a5I(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aXP()
x=3
return A.b(B.c5b(e,d.a,u),$async$a5I)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5I,w)},
Mq(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Mq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Qi&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5I(p,f),$async$Mq)
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
return A.b(B.c56(o,p,u,f),$async$Mq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c57(o,p,f,t),$async$Mq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c55(o,u,p,f),$async$Mq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Mq,w)},
aXS(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aXS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5d(e,d),$async$aXS)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.TQ(!1,!0,d,e),$async$aXS)
case 4:u=g
if(u!=null){t=u.b
v=new A.OY(u.a,D.yz,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXS,w)},
c5d(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TK(d,s,0,1),$async$c5d)
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
return A.i($async$c5d,w)},
c5e(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5J(null,d,e),$async$c5e)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fZs(u)
if(t.length>800){v=null
x=1
break}v=new A.OY(d.length,D.dnX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5e,w)},
anA(d,e,f){return B.hse(d,e,f)},
hse(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mu(g,1)
x=B.fJL(g)?3:4
break
case 3:x=5
return A.b(B.c58(g),$async$anA)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mu(g,13))
try{k=B.DP(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a8(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mu(g,13))
u=9
x=12
return A.b(B.aXL(q),$async$anA)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TN(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a8(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fJK(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TN(n,a0)
v=k
x=1
break}catch(a1){m=A.a8(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HE(C.a.i(J.mu(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HE(C.a.i(J.mu(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HE(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.TN(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anA,w)},
HE(d,e,f){return B.hsc(d,e,f)},
hsc(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HE=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aXD(r),$async$HE)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXD(A.cv(s,0,null)),$async$HE)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c4L(o,r,a1,n,a2),$async$HE)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c4K(q),$async$HE)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TN(l,a2),$async$HE)
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
k=A.a8(d)
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
return A.i($async$HE,w)},
a5J(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.r3(f,r),$async$a5J)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gct().aI(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.Q(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5J,w)},
TN(d,e){return B.hsd(d,e)},
hsd(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TN=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gU(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ab(j)===0){x=7
break}i=C.cB.aI(j)
d=J.ab(q)!==0?q:null
x=9
return A.b(B.AY(i,a3,d,k,l,o),$async$TN)
case 9:h=a5
if(h!=null)J.cf(n,h)
x=7
break
case 8:f=J.ab(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a8(a1)
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
return A.i($async$TN,w)},
Mp:function Mp(d,e){this.a=d
this.b=e},
c5f:function c5f(){},
a_O(d){var x=A.M(d).ax.a===C.H,w=x?D.ac9:D.aag,v=x?D.adz:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abm:C.aK
return new A.aEq([w,s,v,u,t,x?C.f6:C.bT])},
hdG(d,e){var x=e?C.w.j(0.72):C.aX
return A.c9(null,x,!0,null,new B.fBU(e),d,null,!0,!0,y.N)},
c4V(d,e,f,g,h,i,j,k,l){return new B.TF(e,l,d,f,k,j,g,h,i,null)},
XR(d,e,f,g,h,i,j){return new B.bbd(g,h,j,e,i,d,f,null)},
fBU:function fBU(d){this.a=d},
XO:function XO(d,e){this.c=d
this.a=e},
axr:function axr(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZV:function cZV(d){this.a=d},
cZT:function cZT(d){this.a=d},
cZU:function cZU(d){this.a=d},
bsv:function bsv(){},
TF:function TF(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBq:function aBq(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dLV:function dLV(d){this.a=d},
dLi:function dLi(d,e){this.a=d
this.b=e},
dLj:function dLj(d,e){this.a=d
this.b=e},
dKS:function dKS(d,e,f){this.a=d
this.b=e
this.c=f},
dKR:function dKR(d){this.a=d},
dKT:function dKT(d,e){this.a=d
this.b=e},
dKY:function dKY(d,e,f){this.a=d
this.b=e
this.c=f},
dKX:function dKX(d){this.a=d},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
dLK:function dLK(d){this.a=d},
dLf:function dLf(d,e,f){this.a=d
this.b=e
this.c=f},
dLc:function dLc(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dKW:function dKW(d){this.a=d},
dLn:function dLn(d){this.a=d},
dLm:function dLm(){},
dL1:function dL1(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLH:function dLH(d,e){this.a=d
this.b=e},
dLI:function dLI(d,e){this.a=d
this.b=e},
dLd:function dLd(d,e){this.a=d
this.b=e},
dLe:function dLe(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLv:function dLv(d){this.a=d},
dLu:function dLu(d){this.a=d},
dLw:function dLw(){},
dLx:function dLx(){},
dLy:function dLy(d,e){this.a=d
this.b=e},
dLA:function dLA(){},
dLB:function dLB(d){this.a=d},
dLt:function dLt(d,e){this.a=d
this.b=e},
dLo:function dLo(d){this.a=d},
dLp:function dLp(d){this.a=d},
dLq:function dLq(d){this.a=d},
dLr:function dLr(d){this.a=d},
dLs:function dLs(d){this.a=d},
dKZ:function dKZ(){},
dL_:function dL_(d){this.a=d},
dL0:function dL0(d,e){this.a=d
this.b=e},
dKV:function dKV(d,e){this.a=d
this.b=e},
dKU:function dKU(d,e,f){this.a=d
this.b=e
this.c=f},
dLg:function dLg(d){this.a=d},
dLh:function dLh(d,e,f){this.a=d
this.b=e
this.c=f},
dLa:function dLa(d,e){this.a=d
this.b=e},
dL6:function dL6(d){this.a=d},
dL3:function dL3(d,e,f){this.a=d
this.b=e
this.c=f},
dL7:function dL7(d){this.a=d},
dL8:function dL8(d){this.a=d},
dL9:function dL9(){},
dLb:function dLb(d,e){this.a=d
this.b=e},
dL4:function dL4(d){this.a=d},
dL2:function dL2(d,e,f){this.a=d
this.b=e
this.c=f},
dL5:function dL5(){},
dLl:function dLl(d){this.a=d},
dLk:function dLk(d,e){this.a=d
this.b=e},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLC:function dLC(d){this.a=d},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLE:function dLE(d){this.a=d},
dLS:function dLS(d){this.a=d},
dLQ:function dLQ(d){this.a=d},
dLR:function dLR(d){this.a=d},
dLT:function dLT(){},
dLU:function dLU(d,e){this.a=d
this.b=e},
dLM:function dLM(d,e){this.a=d
this.b=e},
dLN:function dLN(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d,e,f){this.a=d
this.b=e
this.c=f},
dLO:function dLO(d,e){this.a=d
this.b=e},
dLP:function dLP(d,e){this.a=d
this.b=e},
axo:function axo(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbc:function bbc(d,e,f){this.c=d
this.d=e
this.a=f},
cZR:function cZR(){},
cZS:function cZS(){},
aaM:function aaM(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_e:function d_e(){},
d_d:function d_d(d){this.a=d},
XQ:function XQ(d,e,f){this.c=d
this.d=e
this.a=f},
axt:function axt(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_a:function d_a(d){this.a=d},
d_b:function d_b(d,e,f){this.a=d
this.b=e
this.c=f},
d_c:function d_c(d,e){this.a=d
this.b=e},
d_8:function d_8(d,e){this.a=d
this.b=e},
d_6:function d_6(d){this.a=d},
d_4:function d_4(d){this.a=d},
d_1:function d_1(d){this.a=d},
d_7:function d_7(d){this.a=d},
d_3:function d_3(d){this.a=d},
d_9:function d_9(d){this.a=d},
d_5:function d_5(d){this.a=d},
d_2:function d_2(d){this.a=d},
XN:function XN(d,e,f){this.c=d
this.d=e
this.a=f},
axq:function axq(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cZO:function cZO(d){this.a=d},
cZN:function cZN(d,e){this.a=d
this.b=e},
cZP:function cZP(d){this.a=d},
cZM:function cZM(d,e){this.a=d
this.b=e},
cZQ:function cZQ(d){this.a=d},
cZL:function cZL(d,e){this.a=d
this.b=e},
cZH:function cZH(d){this.a=d},
cZI:function cZI(d){this.a=d},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
cZK:function cZK(d){this.a=d},
OA:function OA(d,e,f){this.c=d
this.d=e
this.a=f},
axw:function axw(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_r:function d_r(d){this.a=d},
d_s:function d_s(d){this.a=d},
d_t:function d_t(d){this.a=d},
d_u:function d_u(d){this.a=d},
d_v:function d_v(d,e){this.a=d
this.b=e},
d_w:function d_w(d){this.a=d},
d_y:function d_y(d){this.a=d},
d_x:function d_x(d){this.a=d},
XS:function XS(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axu:function axu(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_n:function d_n(d,e){this.a=d
this.b=e},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_f:function d_f(d,e,f){this.a=d
this.b=e
this.c=f},
d_g:function d_g(d){this.a=d},
d_h:function d_h(){},
d_m:function d_m(){},
d_i:function d_i(d,e){this.a=d
this.b=e},
d_j:function d_j(d,e){this.a=d
this.b=e},
d_k:function d_k(d,e){this.a=d
this.b=e},
d_l:function d_l(d,e){this.a=d
this.b=e},
aaK:function aaK(d,e){this.c=d
this.a=e},
cZG:function cZG(d){this.a=d},
XM:function XM(d){this.a=d},
axp:function axp(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
XT:function XT(d,e){this.c=d
this.a=e},
axv:function axv(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_q:function d_q(d){this.a=d},
d_p:function d_p(d){this.a=d},
bbd:function bbd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hsf(){var x,w=$.pb(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aD(32)]
return"VT"+C.d.fS(v)},
Mr(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Mr=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$Mr)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bF),$async$Mr)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a8(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Mr,w)},
a5K(d){return B.hsg(d)},
hsg(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a5K=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5K)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hz("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a5K)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a8(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5K,w)},
TP(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$TP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mr(),$async$TP)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dV(A.a0(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a5K(s),$async$TP)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TP,w)},
TQ(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$TQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c0(),$async$TQ)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a1<1>")
u=A.B(new A.a1(f,new B.c5h(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hsf()
t=A.T(u).k("J<1,a3<n,aC>>")
r=A.B(new A.J(u,new B.c5i(s),t),t.k("aj.E"))
x=6
return A.b(B.Mr(),$async$TQ)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a5K(q),$async$TQ)
case 7:x=8
return A.b(B.a5L(r,u,g,s),$async$TQ)
case 8:v=new A.bmC(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TQ,w)},
anB(d){var x=0,w=A.j(y.y),v,u,t
var $async$anB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Mr(),$async$anB)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anB,w)},
c5j(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Mr(),$async$c5j)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5j,w)},
a5L(d,e,f,g){return B.hsh(d,e,f,g)},
hsh(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5L=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ab(q)===0){x=8
break}x=10
return A.b(B.anz("media",r,new B.c5g(s,e,g),f,q),$async$a5L)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.TP(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5L)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.TP(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a5L)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a8(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.TP(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5L)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5L,w)},
DP(d,e,f){return B.hsi(d,e,f)},
hsi(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DP=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$DP)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anB(b3),$async$DP)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kz,null,g),$async$DP)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anB(b3),$async$DP)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Mr(),$async$DP)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
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
a1=J.a7(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gah(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gU(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ab(m)===0){x=11
break}u=14
a8=$.eS().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oE(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a91(a8.a,b0,"media",a8.d,a9).BX(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXE(k,n,o,s,b7),$async$DP)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a8(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ab(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gah(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gU(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ab(h)!==0?25:26
break
case 25:u=28
a2=$.eS().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oE(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a91(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DP)
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
a0=A.dV(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a5K(e),$async$DP)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DP,w)},
c5h:function c5h(){},
c5i:function c5i(d){this.a=d},
c5g:function c5g(d,e,f){this.a=d
this.b=e
this.c=f},
aOz(){var x=0,w=A.j(y.H),v,u
var $async$aOz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hDa=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aOz)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aOz)
case 3:u=$.fOL
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aOz)
case 4:$.fOL=$.hLy=$.hLz=null
return A.h(null,w)}})
return A.i($async$aOz,w)},
fgy(d){var x=0,w=A.j(y.H),v,u
var $async$fgy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4h){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fgz(new A.bR(u,y.aY))
x=3
return A.b(u.i5(0,C.hE,new B.fgA()),$async$fgy)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fgy,w)},
hLw(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hs_(x):x},
fOP(d){var x=0,w=A.j(y.T),v,u,t
var $async$fOP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anD(u)
x=1
break}v=B.fJK(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOP,w)},
fOO(d){var x=0,w=A.j(y.T),v,u,t
var $async$fOO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anE(u)
x=1
break}v=B.fJK(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOO,w)},
fxz(d){var x=0,w=A.j(y.T),v
var $async$fxz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anE(d),$async$fxz)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxz,w)},
byK(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$byK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fOO(d),$async$byK)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ab(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byK,w)},
f5N(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f5N=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TJ(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.AY(d.am1(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5N,w)},
FE(d,e,f){return B.hNU(d,e,f)},
hNU(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FE=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fOP(a1),$async$FE)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a7(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ab(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hfx().aBE(D.dcr,null),$async$FE)
case 4:l=d.fOL=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awg(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fh2(f,k,new B.fh3(f,a2,k,j,a0,p),a2,j,a0,p,new A.bR(t,y.ch))
x=5
return A.b(l.a5N(0,new B.VX(r,"offer")),$async$FE)
case 5:d=l
x=7
return A.b(l.aiS(0),$async$FE)
case 7:x=6
return A.b(d.a5F(0,a4),$async$FE)
case 6:x=8
return A.b(B.fgy(l),$async$FE)
case 8:x=9
return A.b(l.amN(),$async$FE)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hLw(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anF(m,h),$async$FE)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fZs(h)
case 11:v=new A.blU(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FE,w)},
fgz:function fgz(d){this.a=d},
fgA:function fgA(){},
fh3:function fh3(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fh2:function fh2(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fh1:function fh1(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hPK(d){switch(d){case"new":return D.e4m
case"checking":return D.e4n
case"connected":return D.e4p
case"completed":return D.e4o
case"failed":return D.e4r
case"disconnected":return D.e4s
case"closed":return D.aJ5
case"count":return D.e4q}return D.aJ5},
hPL(d){switch(d){case"new":return D.aJ6
case"gathering":return D.e4t
case"complete":return D.a4h}return D.aJ6},
hZU(d){switch(d){case"stable":return D.e4u
case"have-local-offer":return D.e4v
case"have-local-pranswer":return D.e4x
case"have-remote-offer":return D.e4w
case"have-remote-pranswer":return D.e4y
case"closed":return D.aJc}return D.aJc},
hY8(d){switch(d){case"new":return D.aJ9
case"connecting":return D.aJa
case"connected":return D.aJb
case"closed":return D.a4i
case"disconnected":return D.aJ8
case"failed":return D.aJ7}return D.a4i},
a80:function a80(d,e){this.a=d
this.b=e},
Ns:function Ns(d,e){this.a=d
this.b=e},
VW:function VW(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e){this.a=d
this.b=e},
Ei:function Ei(d,e){this.a=d
this.b=e},
cgd:function cgd(){},
fLr(d){var x=new B.Eh()
x.a=d
x.b=!0
return x},
Eh:function Eh(){this.b=this.a=$},
a8_:function a8_(){},
arT:function arT(){},
VX:function VX(d,e){this.a=d
this.b=e},
fJG(){var x=0,w=A.j(y.H)
var $async$fJG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fJG,w)},
fJJ(d,e,f){var x=0,w=A.j(y.T),v
var $async$fJJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ma(D.mi))){v=null
x=1
break}v=B.fxP(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJJ,w)},
fZs(d){var x,w=F.a9M.a2H(C.dG.aI(d),null)
if(w.length===0){x=C.dG.aI(d)
return C.cS.gct().aI(x)}return C.cS.gct().aI(w)},
hrZ(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c7(0,F.a9L.b96(v,!1))
return x}catch(w){x=C.c4.c7(0,v)
return x}},
fJK(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hrZ(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c7(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
hs_(d){var x,w,v,u,t,s=A.a([],y.s)
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
hs0(){var x,w=$.pb(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aD(32)]
return"DS"+C.d.fS(v)},
aXK(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bF),$async$aXK)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a8(o)
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
return A.i($async$aXK,w)},
c5_(d,e){return B.hs1(d,e)},
hs1(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hz("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c5_)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a8(o)
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
return A.i($async$c5_,w)},
aXN(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXK(d),$async$aXN)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXN,w)},
aXM(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hs0()
r=C.a.i(f)
t=C.dG.aI(s)
x=3
return A.b(B.c5_(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gct().aI(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aXM)
case 3:if(!h){v=null
x=1
break}v=new A.ZS("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXM,w)},
aXL(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ab(o)===0){v=null
x=1
break}x=3
return A.b(B.aXK(o),$async$aXL)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ab(u)===0){v=null
x=1
break}try{t=C.c4.c7(0,C.cB.aI(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a8(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aXL,w)},
c50(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c50=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ab(q)===0){x=1
break}u=4
x=7
return A.b(X.bzG("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c50)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c50,w)},
aXO(d){var x=0,w=A.j(y.h),v,u,t
var $async$aXO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HA(),$async$aXO)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXO,w)},
anw(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anw)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aXO(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anw,w)},
anu(d,e){var x=0,w=A.j(y.H)
var $async$anu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anu)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anu)
case 2:return A.h(null,w)}})
return A.i($async$anu,w)},
a5C(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5C)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HA(),$async$a5C)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.di(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5B(s),$async$a5C)
case 5:x=6
return A.b(B.anu(f,u),$async$a5C)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5C,w)},
a5D(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5D=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5D)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HA(),$async$a5D)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.aj(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.anu(g,q),$async$a5D)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5B(u),$async$a5D)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5D,w)},
a5E(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5E=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5E)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HA(),$async$a5E)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aXH(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a5E)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5E)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5E,w)},
c51(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c51=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ab(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c51)
case 7:s=f
p=A.t(n)
r=A.aT(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aG(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a0(q,y.N,y.z)
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
return A.i($async$c51,w)},
HB(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HB=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c51(d),$async$HB)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aXO(t),$async$HB)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anv(d),$async$HB)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXH(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anv(d),$async$HB)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HB,w)},
anv(d){var x=0,w=A.j(y.H)
var $async$anv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anv)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anv)
case 2:return A.h(null,w)}})
return A.i($async$anv,w)},
aXP(){var x,w=$.pb(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(32)]
return C.d.fS(v)},
a5F(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fJL(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c54(d){return B.hs3(d)},
hs3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c54=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5F(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bF),$async$c54)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a8(o)
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
return A.i($async$c54,w)},
any(d,e){return B.hs4(d,e)},
hs4(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$any=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5F(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hz("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$any)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a8(o)
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
return A.i($async$any,w)},
c56(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c56=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.any(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c56)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c56,w)},
c55(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c55=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.any(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c55)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c55,w)},
c57(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c57=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.any(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c57,w)},
c58(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c58=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fJL(d)){v=null
x=1
break}x=3
return A.b(B.c54(d),$async$c58)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a7(u)
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
return A.i($async$c58,w)},
a5M(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a5M=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$a5M)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bF),$async$a5M)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a8(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5M,w)},
anC(d){return B.hsj(d)},
hsj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$anC)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hz("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anC)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a8(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anC,w)},
anD(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ab(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anD)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a5M(),$async$anD)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ab(q)===0){v=null
x=1
break}u=6
p=C.c4.c7(0,C.cB.aI(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dV(A.a0(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anC(s),$async$anD)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a8(i)
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
return A.i($async$anD,w)},
anF(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c0(),$async$anF)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a5M(),$async$anF)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dV(A.a0(s,r,q),r,q)
r=C.dG.aI(C.a.i(e))
q.n(0,"answer",C.cS.gct().aI(r))
q.n(0,"answerAt",new A.Q(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anC(u),$async$anF)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anF,w)},
anE(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c0(),$async$anE)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a5M(),$async$anE)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ab(u)===0){v=null
x=1
break}try{r=C.c4.c7(0,C.cB.aI(u))
v=r
x=1
break}catch(n){t=A.a8(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anE,w)},
amF(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amF=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.qg)){v=null
x=1
break}x=3
return A.b(p.m0(e),$async$amF)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.fR),$async$amF)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wq(o))
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
return A.i($async$amF,w)},
hWd(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fw7(d){return B.hWf(d)},
hWf(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fw7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eS().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i_("media").JO(d,3600),$async$fw7)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
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
return A.i($async$fw7,w)},
Cj(d,e,f,g,h,i){var x=null
return B.hWc(d,e,f,g,h,i)},
hWc(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cj=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fZv(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fJN(r),$async$Cj)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fw7(o),$async$Cj)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5G(r),$async$Cj)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aMa)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.KS(A.a([],g))
x=15
return A.b(d.eO(0,A.asI("GET",A.cv(n,0,null))).cL(0,C.Em),$async$Cj)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5G(r),$async$Cj)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Js(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cj)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ab(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aXR(r,k),$async$Cj)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Cj)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.TJ(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a8(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a5G(r),$async$Cj)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cj,w)},
aOi(d){return B.hWe(d)},
hWe(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eS().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i_("media").W(0,d),$async$aOi)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a8(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOi,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[212]
H=c[104]
P=c[194]
E=c[187]
G=c[82]
Q=c[158]
R=c[105]
S=c[192]
I=c[216]
K=c[222]
B=a.updateHolder(c[21],B)
D=c[220]
T=c[157]
L=c[176]
U=c[62]
V=c[223]
W=c[68]
X=c[53]
M=c[81]
Y=c[221]
N=c[117]
B.cge.prototype={
aBE(d,e){return this.cDA(d,e)},
cDA(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aBE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.U(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.k9(A.cA(t)))
t=J.k(u)
v=B.hwU(C.cS.gct().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aBE,w)}}
B.b1W.prototype={
bub(d){var x=this,w=x.w
w.onclose=A.he(new B.cg9(x))
w.onopen=A.he(new B.cga(x))
w.onmessage=A.he(new B.cgb(x))
w.onbufferedamountlow=A.he(new B.cgc(x))},
gdj(d){return this.x},
afd(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Eh()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fLr(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afd)
case 8:v=t.fLr(s.alT(f,0,null))
x=1
break
case 7:case 4:v=B.fLr(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afd,w)}}
B.b1X.prototype={
buc(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgf(x)))
w.addEventListener("icecandidate",A.he(new B.cgg(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgh(x)))
w.onicegatheringstatechange=A.he(new B.cgi(x))
w.addEventListener("signalingstatechange",A.he(new B.cgj(x)))
if(!$.fSk())w.addEventListener("connectionstatechange",A.he(new B.cgk(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgl(x)))
w.addEventListener("track",A.he(new B.cgm(x)))},
aiS(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aiS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.k9(A.cA(A.U(y.N,y.z)))),y.aQ),$async$aiS)
case 3:t=f
v=new B.VX(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiS,w)},
a5F(d,e){return this.bjL(0,e)},
bjL(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a5F)
case 2:return A.h(null,w)}})
return A.i($async$a5F,w)},
a5N(d,e){return this.bk0(0,e)},
bk0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5N=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a5N)
case 2:return A.h(null,w)}})
return A.i($async$a5N,w)},
amN(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$amN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.VX(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amN,w)},
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
B.aaL.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.XP.prototype={
T(){return new B.axs()},
gd7(){return this.c}}
B.axs.prototype={
a_(){this.a1()
this.abX()},
abX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXI(u.e,u.c),$async$abX)
case 2:t=e
if(v.c!=null)v.m(new B.cZZ(v,t))
return A.h(null,w)}})
return A.i($async$abX,w)},
P_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$P_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anr(t.e,t.c,!1),$async$P_)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eJ0)
x=1
break}x=4
return A.b(B.a5A(u.a.c,"individual"),$async$P_)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a4e(A.eo(new B.cZW(u),!1,null,y.H)),$async$P_)
case 5:case 1:return A.h(v,w)}})
return A.i($async$P_,w)},
Id(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Id=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.feI(o),$async$Id)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5E(o.e,r,s,q),$async$Id)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eG5)
x=1
break}x=5
return A.b(B.a5A(u.a.c,"member"),$async$Id)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a4e(A.eo(new B.cZY(u),!1,null,y.H)),$async$Id)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Id,w)},
xl(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5z(t.e,o,t.f,t.r,t.w,s),$async$xl)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5A(u.a.c,"org_owner"),$async$xl)
case 4:x=5
return A.b(B.anw(u.a.c),$async$xl)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.ffc(o),$async$xl)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5C(s,t,o,q.c),$async$xl)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eG2)
x=1
break}x=10
return A.b(B.anw(u.a.c),$async$xl)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a4e(A.eo(new B.cZX(u),!1,null,y.H)),$async$xl)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xl,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j_:C.pc,q=B.fJI(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fI,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f0h,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h2,t,t,t),C.az,D.fiv,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bQ_,C.n),t,t,t,t,C.ey,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.ls(new B.d_0(),t),C.P,w,C.e_,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abd(C.eP,C.avV,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc8n(),t),C.ac],v))
p.push(new B.abd(C.oo,C.a0i,"Team Member","Sign in with your organization access code + password",u.gc9d(),t))
p.push(C.ac)
p.push(new B.abd(C.aiG,C.a1J,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc8K(),t))
return A.cc(t,r,A.bq(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.ag2,t,t,C.ai),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.abd.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.z(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a6(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eA,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oP,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.AQ,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c0,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ae)}}
B.aA1.prototype={}
B.aDc.prototype={}
B.je.prototype={
ma(d){var x=this.b,w=C.a.od(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
ganr(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.U(y.N,y.z)
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
b8C(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.je(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cC3(d){return this.b8C(null,d)},
aBp(d){return this.b8C(d,null)}}
B.TD.prototype={
T(){return new B.aBo(new A.cs(null,y.A))},
gd7(){return this.c}}
B.aBo.prototype={
a_(){this.a1()
this.abY()},
abY(){var x=0,w=A.j(y.H),v,u=this,t
var $async$abY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AX(u.a.c),$async$abY)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dKO(u,t))
case 1:return A.h(v,w)}})
return A.i($async$abY,w)},
abZ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fA(s)),$async$abZ)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eJV)
case 1:return A.h(v,w)}})
return A.i($async$abZ,w)},
Y9(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Y9=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amF(s.d,4),$async$Y9)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_my_code_"+m+".png"),$async$Y9)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a8(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Y9,w)},
afG(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8A("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$afG)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afG,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j_:C.pc,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lV
else if(q.e==null)x=A.av(new A.C(C.ey,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aI.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a0I,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a6(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.afD,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mp,w,C.km,new A.eq(A.p(p,A.pv(p,p,!1,B.hrV(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c0,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.km,A.z(A.a([A.D(A.ez(M.B8,C.SH,q.gc1q(),p),1),C.aw,A.D(A.dp(C.y0,C.a6B,q.gc1r(),A.bk(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a5(1/0,p,A.ez(L.a_a,D.feA,q.gcnA(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.Li,p,p,C.ai)
x=r}return A.cc(l,n,x,p,!1,!1,p,p)}}
B.TH.prototype={
T(){return new B.aBr(new A.ar(C.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aBr.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Hz(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Ya(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ya=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Hz(u.d.a.a)
if(t==null){u.m(new B.dLX(u))
x=1
break}u.m(new B.dLY(u))
s=u.a
r=s.c
x=3
return A.b(B.a5y(s.d,new B.dLZ(u),t,r),$async$Ya)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dM_(u))
if(q){s=u.c
s.toString
A.a4(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$Ya,w)},
a0i(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dM0(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.r3(r.a.c,q),$async$a0i)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dM1(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ab(r.a.d)>1?"NGMY Doc Share ("+J.ab(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ag8(p,m,l,j,k),$async$a0i)
case 8:o=e
if(r.c!=null)r.m(new B.dM2(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a8(h)
if(r.c!=null)r.m(new B.dM3(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dM4(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0i,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.ac9:D.aag,h=j?D.adz:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abm:C.aK
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.M(d).ax.a===C.H
w=J.ab(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bQ(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bQ(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.z(A.a([A.p(k,D.bEF,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a6(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eA,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fw,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a0I,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tX(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgu()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bo(k,k,k,C.Lc,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ag,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dM5(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lM,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.Kx(l.a.d,4)
m=A.B(new A.J(m,new B.dM6(x,new A.aEq(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ab(l.a.d)>4)m.push(new A.C(C.m5,A.d("+ "+(J.ab(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eu,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eEC)
else q.push(A.V(C.l5,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.df(k,A.z(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.iq,k,k,k,C.eN,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bp9,k,k,C.ai),1)
u=l.f?k:l.gcnB()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(L.a_a,D.ffv,u,A.dd(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ce,k,new A.b7(q,C.Y),new A.aA(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc1s()
t=A.bk(C.aD,k,k,0,C.c,k,C.mP,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cc(g,h,new A.an(C.W,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mM(new B.dM7(),A.v(A.a([e,new A.C(D.boE,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.ri:D.fdZ,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.WD,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgu.prototype={
o9(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h7(C.bt,v.length),C.aN)}}
B.TE.prototype={
T(){return new B.aBp()}}
B.aBp.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.ar(new A.bb(w,C.b1,C.aN),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.ar(new A.bb(x,C.b1,C.aN),v)
u.f!==$&&A.aQ()
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
ac_(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ac_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dKP(r))
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
return A.b(B.a5D(p,m,n,o,C.a.i(l).length===0?null:l),$async$ac_)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eJw)
s=[1]
x=4
break}p.I(y.q).f.R(D.eI9)
p=r.c
p.toString
A.a4(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dKQ(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ac_,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j_:C.pc,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f6R,s,s,s,1,s,!0),p=A.p(s,D.bhm,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.FN,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bLv,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bLq,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bLG,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc1t()
u=A.bk(C.aD,s,s,s,s,C.fJ,s,s,s,s,s,s)
return A.cc(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mp,A.bJ(t.r?C.ri:C.aOK,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a8,s,s,C.ai),s,!1,!1,s,s)}}
B.aas.prototype={}
B.bsR.prototype={
a2X(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cp(r.am1()))
x=3
return A.b(B.Q5(t,s),$async$a2X)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2X,w)},
gd7(){return this.a}}
B.Mp.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.XO.prototype={
T(){return new B.axr(new A.ar(C.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.axr.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.cZV(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c1z(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a_O(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.j_:v.a[0],p=A.m(24),o=A.I(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fI,32)],n),l=A.p(w,T.alj,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cw,16)],n),C.am6,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tX(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsv()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bo(w,w,w,C.Ey,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aUZ),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ag,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cZT(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lM,w,w,w,w)
f=f[1]
f=A.D(A.dW(C.na,new B.cZU(d),A.dd(w,w,w,w,w,w,w,w,w,s,w,w,C.ce,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cI,12)],n)
g=y.p
return A.eD(w,C.K,new A.cW(Q.Jg,A.bX(new A.C(C.x8,A.v(A.a([l,C.aO,k,C.P,j,C.e_,i,C.e_,A.z(A.a([f,C.aw,A.D(A.bX(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.dZx,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc1y(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ae),new A.o(w,w,w,h,n,K.N5,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Lk,C.d_,w,w,w)}}
B.bsv.prototype={
o9(d,e){return e.aiN(e.a.toUpperCase())}}
B.TF.prototype={
T(){return new B.aBq(A.a([],y.r),A.aX(y.N))},
gd7(){return this.c}}
B.aBq.prototype={
a_(){var x=this
x.a1()
x.ta()
x.w=A.dF(C.j3,new B.dLV(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.TO()
this.a2()},
a_a(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_a=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mo(u.a.c),$async$a_a)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A2(u.a.c),$async$a_a)
case 4:u.m(new s.dLi(u,e))
u.hQ("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_a,w)},
ta(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ta=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mo(u.a.c),$async$ta)
case 3:t=e
x=4
return A.b(B.A2(u.a.c),$async$ta)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLj(u,s))
if(t>0)u.hQ("Received "+A.t(t)+" file(s) via My Code.")
u.Mt(u.d)
B.AX(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ta,w)},
Mt(d){return this.by4(d)},
by4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Mt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5I(r,u.a.c),$async$Mt)
case 8:p=f
if(u.c==null){x=1
break}new B.dKS(u,r,p).$0()
u.c.e5()
case 7:if(!(C.a.a0(r.c,"video/")||r.ma(D.mi))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TM(r,u.a.c),$async$Mt)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A2(u.a.c),$async$Mt)
case 12:u.m(new o.dKT(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Mt,w)},
MQ(d){return this.bEb(d)},
bEb(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$MQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5I(d,u.a.c),$async$MQ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dKY(u,d,t))
x=6
return A.b(A.fH(new A.fA(t)),$async$MQ)
case 6:u.hQ("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fA(r.toUpperCase())),$async$MQ)
case 7:u.hQ("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$MQ,w)},
hQ(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tb(d,e){return this.cxK(d,e)},
cxK(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tb=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dLJ(r,e))
u=3
x=6
return A.b(d.$0(),$async$tb)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dLK(r))
$.eP.m5()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tb,w)},
gaSd(){var x=this.a
return x.f||x.r||x.w},
Hd(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaSd()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c4Y(s,n,r,q,o,t),$async$Hd)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hQ("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fpB(o,u.a.c),$async$Hd)
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
return A.b(B.Cl(s,o,r,q,n,t),$async$Hd)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
Zg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Zg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anw(u.a.c),$async$Zg)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hQ("No organization portal found.")
x=1
break}t=J.a7(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a4(t,!1).ci(A.eo(new B.dLf(u,r,q),!1,null,y.H)),$async$Zg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Zg,w)},
a_l(d){return this.chi(d)},
chh(){return this.a_l(1)},
chi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_l=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaSd()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ant(u.a.c),$async$a_l)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_l,w)},
aa1(d,e,f){return this.bUj(d,e,f)},
bUj(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aa1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hQ(e)
x=1
break}x=3
return A.b(u.tb(new B.dLc(u,d,null,e,f),"Uploading\u2026"),$async$aa1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aa1,w)},
byd(){B.hcY(!1,new B.dKW(this))
return},
cmc(){this.m(new B.dLn(this))},
aw8(){var x=0,w=A.j(y.H),v=this
var $async$aw8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.byd()
return A.h(null,w)}})
return A.i($async$aw8,w)},
a9Y(){var x=0,w=A.j(y.H),v=this
var $async$a9Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tb(new B.dL1(v),"Importing\u2026"),$async$a9Y)
case 2:return A.h(null,w)}})
return A.i($async$a9Y,w)},
QZ(d){return this.cxd(d)},
cxd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.ma(D.mi)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).ci(A.eo(new B.dLG(u,d),!1,null,y.H)),$async$QZ)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ma(D.P_)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).ci(A.eo(new B.dLH(u,d),!1,null,y.H)),$async$QZ)
case 8:x=1
break
case 7:x=u.bV0(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).ci(A.eo(new B.dLI(u,d),!1,null,y.H)),$async$QZ)
case 11:x=1
break
case 10:u.hQ("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$QZ,w)},
bV0(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.od(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cxa,C.a.b_(x,w+1).toLowerCase())},
adr(d){return this.c8r(d)},
c8r(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$adr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ma(D.mi)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).ci(A.eo(new B.dLd(u,d),!1,null,y.H)),$async$adr)
case 5:x=1
break
case 4:u.m(new B.dLe(u,d))
case 1:return A.h(v,w)}})
return A.i($async$adr,w)},
Qn(d){return this.cp2(d)},
cp2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hQ("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oQ(t,s.c,s.f),$async$Qn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tb(new B.dLz(u,d),"Preparing QR\u2026"),$async$Qn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Qn,w)},
ag5(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ag5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLA(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a1<1>")
r=A.B(new A.a1(t,new B.dLB(q),s),s.k("G.E"))
if(r.length===0){u.hQ("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Qn(r),$async$ag5)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ag5,w)},
afZ(d){return this.coC(d)},
coC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_O(r)
r=u.c
r.toString
x=3
return A.b(A.c_(C.K,null,new B.dLt(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afZ)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.QZ(d)
break
case"qr":u.Qn(A.a([d],y.r))
break
case"send_my_code":u.c92(A.a([d],y.r))
break
case"save":u.afk(d)
break
case"delete":u.HZ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afZ,w)},
W9(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$W9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dKZ(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a1<1>")
r=A.B(new A.a1(t,new B.dL_(q),s),s.k("G.E"))
if(r.length===0){u.hQ("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oQ(t,s.c,s.f),$async$W9)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tb(new B.dL0(u,r),"Preparing file\u2026"),$async$W9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W9,w)},
aex(d){return this.cfO(d)},
cfO(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aex=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdG(d,!1),$async$aex)
case 3:s=f
r=s==null
q=B.a5F(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hQ("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aex,w)},
adx(){var x=0,w=A.j(y.H),v=this,u
var $async$adx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fxc(u,v.a.c),$async$adx)
case 2:return A.h(null,w)}})
return A.i($async$adx,w)},
byc(){B.hcY(!1,new B.dKV(this,null))
return},
Ic(d,e){return this.c93(d,e)},
aXY(d){return this.Ic(null,d)},
c92(d){return this.Ic(d,null)},
c93(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Ic=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a1<1>")
k=A.B(new A.a1(p,new B.dLg(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wI.c3().alm(!0,C.Yo,!1),$async$Ic)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tb(new B.dLh(l,s,r),"Preparing\u2026"),$async$Ic)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a8(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hQ("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hQ("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bAP(p,l,e,s.a.c),$async$Ic)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hQ("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ic,w)},
Hs(d){return this.bU6(d)},
bU6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Hs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hrU(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aXY(t),$async$Hs)
case 8:x=6
break
case 7:u.hQ("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hQ("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tb(new B.dLa(u,d),"Receiving video\u2026"),$async$Hs)
case 11:x=1
break
case 10:x=12
return A.b(u.tb(new B.dLb(u,d),"Receiving\u2026"),$async$Hs)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Hs,w)},
Dq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Dq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cf()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aex(t),$async$Dq)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Hs(s),$async$Dq)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).ci(A.eo(new B.dLl(u),!1,null,y.N)),$async$Dq)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ta(),$async$Dq)
case 10:x=1
break
case 9:x=11
return A.b(u.Hs(C.a.i(r)),$async$Dq)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Dq,w)},
afk(d){return this.ckN(d)},
ckN(d){var x=0,w=A.j(y.H),v=this
var $async$afk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tb(new B.dLk(v,d),"Saving\u2026"),$async$afk)
case 2:return A.h(null,w)}})
return A.i($async$afk,w)},
HZ(d){return this.bGt(d)},
bGt(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$HZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kU(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$HZ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c50(t),$async$HZ)
case 6:case 5:s=d.a
x=7
return A.b(B.DO(u.a.c,s),$async$HZ)
case 7:u.r.W(0,s)
x=8
return A.b(u.ta(),$async$HZ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$HZ,w)},
agb(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_O(r)
r=u.c
r.toString
x=3
return A.b(A.c_(C.K,null,new B.dLF(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agb)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.adx()
break
case"import":u.a9Y()
break}case 1:return A.h(v,w)}})
return A.i($async$agb,w)},
c1w(d){var x=d.c
if(C.a.a0(x,"video/")||d.ma(D.mi))return C.pA
if(C.a.a0(x,"image/")||d.ma(D.P_))return C.tt
if(C.a.t(x,"pdf"))return E.MD
return D.aj8},
B(d){var x,w,v=this,u=null,t=B.a_O(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FF,u,u,u,new B.dLQ(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bFa,u,u,u,v.e?u:v.gc8L(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcmb()
n.push(A.aH(u,u,u,u,A.V(v.r.a===x?D.bzx:E.ajx,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_7,u,u,u,v.e?u:v.gc1x(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nI,u,u,u,v.e?u:v.gaZ2(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bGR,u,u,u,v.e?u:new B.dLR(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.ls(new B.dLS(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bQ(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bQ(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.M(d).ax.a===C.H?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mc(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axo(C.ja,s,!0,t,w?u:v.gcp3(),u),1)
x.push(new A.C(D.bnr,A.mM(new B.dLT(),A.z(A.a([s,C.aw,A.D(new B.axo(C.v6,"Export",!1,t,w?u:v.gbJT(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.ir,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbc(t,v.e?u:v.gaZ2(),u)
else s=A.jZ(!0,u,u,new B.dLU(v,t),s,u,D.bnj,u,u,!1,!1)
x.push(A.D(s,1))
return A.cc(q,r,new A.an(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axo.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aD,t,t,0,C.c,t,C.uR,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dd(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uR,t,new A.b7(s,C.Y),new A.aA(v,1,C.r,-1),t,t,t,t)
return A.ez(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eU,t,t,t),u.r,v)}}
B.bbc.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mM(new B.cZR(),new A.C(E.Xt,A.v(A.a([A.mM(new B.cZS(),A.p(x,A.V(C.xu,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a6(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.is,x,new A.bm(0.86,1,w),s),C.e_,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e_,A.dp(C.nI,D.fiO,this.d,A.bk(C.aD,x,x,x,C.c,x,C.Xo,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.Ae,x,new A.bm(0,1,w),s),x,x,x)}}
B.aaM.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dA(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aD.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.ma(D.mi))p=D.d2A
else{p=C.a.a0(p,"image/")||i.ma(D.P_)
n=y.O
p=p?A.a([C.cY,C.aD],n):A.a([C.aI.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a6(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.ganr()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.ma(D.mi))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.D(A.v(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.V(C.fH,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.ma(D.mi)))l.push(A.fHx(C.aD,!1,j,j,j,!1,j,j,new B.d_d(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.V(C.nF,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mM(new B.d_e(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.WX,A.z(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.r,-1)),j,j,C.ae),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.XQ.prototype={
T(){return new B.axt()},
gd7(){return this.c}}
B.axt.prototype={
a_(){this.a1()
this.xc()},
q(){B.hs8(this.e)
this.a2()},
xc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.r3(o.c,o.d),$async$xc)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hsb(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hsa(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_a(s))
x=1
break}s.m(new B.d_b(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a8(l)
if(s.c==null){x=1
break}s.m(new B.d_c(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xc,w)},
a0h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r3(t.c,t.d),$async$a0h)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eGC)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ag8(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0h)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0h,w)},
bU_(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ke(u,C.A,v,new B.d_8(w,t),C.fP,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fK(t,C.A,v,new B.d_9(w),C.fP,C.dt,!0,v,!1,v,v)
else return C.bH
return A.u5(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_O(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.B9,u,u,u,v.gb1M(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dm
else{q=v.r
if(q!=null)t=new A.C(C.ey,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ey,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.B9,D.f2v,v.gb1M(),A.bk(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bU_()}return A.cc(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.XN.prototype={
T(){return new B.axq(A.agW(),C.bw,C.bw)},
gd7(){return this.c}}
B.axq.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a2(w).k("fs<1>")).i1(new B.cZO(v))
x.gcKR().i1(new B.cZP(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a2(x).k("fs<1>"))}if(x==null)x=C.b03
x.i1(new B.cZQ(v))
v.xc()},
xc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r3(p.c,p.d),$async$xc)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cZH(s))
x=1
break}x=8
return A.b(s.d.Bq(0,new A.a1W(r,s.a.d.c)),$async$xc)
case 8:if(s.c==null){x=1
break}s.m(new B.cZI(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a8(n)
if(s.c==null){x=1
break}s.m(new B.cZJ(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xc,w)},
Yb(){var x=0,w=A.j(y.H),v=this,u
var $async$Yb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fX(0),$async$Yb)
case 5:x=3
break
case 4:x=6
return A.b(u.i4(0),$async$Yb)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Yb,w)},
aQ9(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_O(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dm
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bAx,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.N5,C.n),o,88,o,o,o,o,o,88)
t=A.kQ(C.aD,o,o,m,0,new B.cZK(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQ9(p.w)+" / "+p.aQ9(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aD,o,o,o,o,D.eD8,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.xF:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.km,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc1A(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cc(v,w,A.av(new A.C(C.th,x,o),o,o,o),o,!1,!1,o,o)}}
B.OA.prototype={
T(){return new B.axw()},
gd7(){return this.c}}
B.axw.prototype={
a_(){this.a1()
this.Om()},
Om(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Om=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fJJ(o.c,o.d,new B.d_r(s)),$async$Om)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_s(s))
x=1
break}s.e=r
q=O.hOJ(r)
if(q==null){s.m(new B.d_t(s))
x=1
break}s.d=q
q.aM(0,s.gaXM())
x=8
return A.b(q.i0(0).cL(0,C.qy),$async$Om)
case 8:if(s.c==null){x=1
break}s.m(new B.d_u(s))
x=9
return A.b(q.pp(0),$async$Om)
case 9:q.rO(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a8(m)
if(s.c==null){x=1
break}s.m(new B.d_v(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Om,w)},
c72(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_w(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ca(0,x.gaXM())
w=x.d
if(w!=null)w.q()
B.hYp(x.e)
x.a2()},
ac2(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ac2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXQ(u.c,u.d),$async$ac2)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ac2,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_O(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.ow,t,t,t,u.gc1u(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dm
else{q=u.r
if(q!=null)s=new A.C(C.ey,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agq(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.a9,C.q,A.a([new A.zz(s,t),A.aE(t,A.Cv(A.p(t,A.V(q?H.xF:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.c0,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_y(u),t,t,t,t,t,t,!1,C.aa)],o),t),t)}else s=C.bH}}return A.cc(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.XS.prototype={
T(){return new B.axu(new A.cs(null,y.A))}}
B.axu.prototype={
gcxu(){var x,w,v=this.a
if(v.e!==D.Qj)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcxb(){var x,w,v=this.a
if(v.e!==D.yz)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcxu()
if(x!=null){v.Po(x)
v.e=A.dF(R.Eq,new B.d_n(v,x))}w=v.gcxb()
if(w!=null){v.Pn(w)
v.f=A.dF(C.hf,new B.d_o(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
Pn(d){return this.ce1(d)},
ce1(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Pn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anB(d),$async$Pn)
case 3:t=f
x=4
return A.b(B.c5j(d),$async$Pn)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_f(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Pn,w)},
Po(d){return this.ce2(d)},
ce2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Po=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fxz(d),$async$Po)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.byK(t),$async$Po)
case 4:if(u.c==null){x=1
break}u.m(new B.d_g(u))
u.c.I(y.q).f.R(D.aLM)
case 1:return A.h(v,w)}})
return A.i($async$Po,w)},
gbYU(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc1v(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a03(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a03=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cf()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eJG)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).ci(A.eo(new B.d_h(),!1,null,y.N)),$async$a03)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.byK(s),$async$a03)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aLM)
case 1:return A.h(v,w)}})
return A.i($async$a03,w)},
a7X(d){return this.bEc(d)},
bEc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fA(C.d.aH(t,", "))),$async$a7X)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7X,w)},
ac0(d){return this.bDX(d)},
bDX(d){var x=0,w=A.j(y.H),v=this
var $async$ac0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fA(v.a.c)),$async$ac0)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eH4)
return A.h(null,w)}})
return A.i($async$ac0,w)},
a_Z(d){return this.ckP(d)},
ckP(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amF(s.d,4),$async$a_Z)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_doc_share_qr.png"),$async$a_Z)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a8(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_Z,w)},
gaTh(){var x,w=this.a
if(w.e!==D.GP)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a7U(d){return this.bE5(d)},
bE5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaTh()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a7U)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eIG)
case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
ac1(){var x=0,w=A.j(y.H),v=this,u
var $async$ac1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.TO(),$async$ac1)
case 2:u=v.c
if(u!=null)A.a4(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ac1,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_O(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.GP&&i!==D.Qj&&i!==D.yz
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.GP||t===D.Qj||t===D.yz?l:A.aH(l,l,l,l,C.kJ,l,l,l,m.gaVY(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pv(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbYU(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.GP){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m6,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc1v(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bKA,D.fbj,new B.d_i(m,d),l)],p))}if(m.a.e===D.GP&&m.gaTh()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bHa,D.f89,new B.d_j(m,d),l)],p))
if(m.a.e===D.yz){x=(m.w?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Dp:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m6,l,l,l)],p))}if(m.a.e===D.Qj){x=(m.r?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Dp:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m6,l,l,l),C.ac,A.dp(D.bCZ,D.feh,m.gclc(),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.o7(i,A.cc(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.z(A.a([A.D(A.ez(M.B8,C.SH,new B.d_k(m,d),l),1),C.aw,A.D(A.dp(C.y0,C.a6B,new B.d_l(m,d),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a5(1/0,l,A.bJ(C.z4,m.gaVY(),A.bk(C.aI,l,l,l,l,C.fJ,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_m(),y.C)}}
B.aaK.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.pv(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.by,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ai)
return A.eh(A.a([A.bJ(C.z5,new B.cZG(d),x)],u),x,x,C.mz,v,x,x,x,x,D.f1w,x)}}
B.XM.prototype={
T(){return new B.axp(A.yH(C.wR,C.nh,C.tD))}}
B.axp.prototype={
q(){this.d.q()
this.a2()},
auK(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a4(x,!1).N(t)
return}}},
B(d){var x=null
return A.cc(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.f8D,x,x,x,1,x,!0),C.w,A.yG(this.d,C.bQ,this.gauJ()),x,!1,!1,x,x)}}
B.XT.prototype={
T(){return new B.axv(A.yH(C.wR,C.nh,C.tD))},
gd7(){return this.c}}
B.axv.prototype={
bV2(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
adU(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$adU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.R3("text/plain"),$async$adU)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eJA)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$adU,w)},
a8I(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a8I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hdG(p,!0),$async$a8I)
case 3:t=e
p=t==null
s=B.a5F(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eGc)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
q(){this.d.q()
this.a2()},
auK(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bV2(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.akq,v,v,v,w.gbJr(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_e,v,v,v,w.gcbo(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.V(w.f?C.qJ:P.Mn,v,v,v,v,v),v,v,v,new B.d_q(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.ff4,v,v,v,1,v,!0)
u=A.yG(w.d,C.bQ,w.gauJ())
x=A.m(20)
return A.cc(t,C.w,new A.an(C.W,v,C.a9,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e43],s),v),v,!1,!1,v,v)}}
B.bbd.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oe
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oe:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Xy,A.z(A.a([u,C.bd,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ee,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ae)}}
B.a80.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.Ns.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.VW.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.Nr.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Ei.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgd.prototype={}
B.Eh.prototype={}
B.a8_.prototype={}
B.arT.prototype={}
B.VX.prototype={}
var z=a.updateTypes(["ax<~>()","R(je)","n(je)","TF(X)","~()","XP(X)","H(H,je)","OA(X)","~(lN)","cn(Eh)","ax<je?>(@)","TD(X)","TH(X)","C(je)","je(@)","a3<n,@>(je)","XO(X)","TE(X)","XQ(X)","XN(X)","XS(X)","aaK(X)","ak<je>()","XT(X)","aaM(X,H)","XM(X)","a3<n,aC>(je)","cn(VW)","cn(a8_)","ax<cn>(Eh)"])
B.cg9.prototype={
$1(d){var x=this.a
x.x=D.aJ4
x.y.J(0,D.aJ4)},
$S:70}
B.cga.prototype={
$1(d){var x=this.a
x.x=D.aJ3
x.y.J(0,D.aJ3)},
$S:70}
B.cgb.prototype={
$1(d){var x=this.a
x.afd(A.aN2(d.data)).bz(new B.cg8(x),y.b)},
$S:70}
B.cg8.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgc.prototype={
$1(d){},
$S:70}
B.cgf.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hwT(d.channel))},
$S:15}
B.cgg.prototype={
$1(d){},
$S:15}
B.cgh.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hPK(w.iceConnectionState)
x.cx=w
if($.fSk())switch(w.a){case 0:x.cy=D.aJ9
break
case 1:x.cy=D.aJa
break
case 3:x.cy=D.aJb
break
case 5:x.cy=D.aJ7
break
case 6:x.cy=D.aJ8
break
case 7:x.cy=D.a4i
break
default:break}},
$S:147}
B.cgi.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hPL(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.cgj.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hZU(w.signalingState)},
$S:147}
B.cgk.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hY8(w.connectionState)},
$S:147}
B.cgl.prototype={
$1(d){},
$S:147}
B.cgm.prototype={
$1(d){},
$S:15}
B.fbr.prototype={
$1(d){var x=y.F.a(new A.ro([],[]).pc(d.target.result,!1)),w=C.wS.t(x.objectStoreNames,"blobs")
if(!w)C.wO.JM(x,"blobs")},
$S:184}
B.fx0.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vi.f4(this.b)
$.eP.m5()
this.c.$1(d)},
$S:399}
B.fx2.prototype={
$1(d){return this.a.$1(B.hFI(this.b,this.c))},
$S:34}
B.fx1.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fx_.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fxf.prototype={
$1(d){var x=this
return B.h3l(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fxg.prototype={
$1(d){var x=this
return B.h3l(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fcM.prototype={
$1(d){var x=this
return B.c4V(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cZZ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cZW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4V(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cZY.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4V(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cZX.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4V(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_0.prototype={
$4(d,e,f,g){var x=null
return A.jy(A.z(A.a([A.aH(x,x,x,x,D.bBC,x,x,x,new B.d__(d),x,x,x,x,x,x),A.D(A.E3(D.OL,!0,x,C.Zi,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.OL,x,g,C.agl,0,e,f)},
$C:"$4",
$R:4,
$S:385}
B.d__.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.feL.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.bhF,C.f,v,v,D.aWC,v,v,v,v,D.agc,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bFJ,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.ED,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.akF,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.z(A.a([A.D(A.dW(C.dd,new B.feJ(d),v),1),C.aw,A.D(A.bJ(D.f7b,new B.feK(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.WU,v,v,v,v),v)},
$S:60}
B.feJ.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.feK.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eHj)
return}x=w.b.a.a
A.a4(w.c,!1).N(new B.aA1(v,x))},
$S:0}
B.ffe.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bhv,C.f,w,w,D.aY2,w,w,w,w,D.agc,w,w,1/0),new A.C(C.ED,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fOz(u,"Organization name",C.F3,w),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fOz(u,"Access code",C.mU,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fOz(u,"Member password",N.FA,w),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bJ(D.ff8,new B.ffd(r,q,p,d),A.bk(C.aD,w,w,w,w,C.fJ,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.WU,w,w,w,w),w)},
$S:60}
B.ffd.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eHo)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).N(new B.aDc(u,x,w))},
$S:0}
B.c4M.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a7(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cv(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.uV(p,null).cL(0,C.WC),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cp(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.AY(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a8(h)
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
B.c4S.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4T.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c4U.prototype={
$1(d){return d.b},
$S:z+2}
B.c4O.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4P.prototype={
$1(d){return d.b},
$S:z+2}
B.c4N.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:12}
B.c4Q.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c4R.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fxd.prototype={
$1(d){return new B.TD(this.a,null)},
$S:z+11}
B.fxe.prototype={
$1(d){return new B.TH(this.a,this.b,this.c,null)},
$S:z+12}
B.dKO.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dLX.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dLY.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dLZ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dLW(x,d))},
$S:2}
B.dLW.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dM_.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dM0.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dM1.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dM2.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dM3.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dM4.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dM7.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:108}
B.dM5.prototype={
$1(d){var x=this.a
return x.f?null:x.Ya()},
$S:2}
B.dM6.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ma(D.P_))s=C.tt
else s=C.a.a0(s,"video/")||d.ma(D.mi)?C.pA:D.aj8
x=this.b.a
w=y.p
return new A.C(C.kB,A.z(A.a([A.p(v,A.V(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.ganr(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dKP.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dKQ.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c4W.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:90}
B.c4X.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:90}
B.fxR.prototype={
$2(d,e){return e===this.a},
$S:299}
B.f8E.prototype={
$1(d){return J.k(d)},
$S:17}
B.fcY.prototype={
$1(d){var x=this.b
B.hDK(C.ER.ga4w(this.a)).bz(x.gcAr(x),y.H)},
$S:118}
B.fcZ.prototype={
$1(d){return this.a.d1(0,null)},
$S:118}
B.fd_.prototype={
$0(){return null},
$S:11}
B.c5a.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fd0.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.Q(Date.now(),0,!1).a5().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.je(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fgW.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fbF.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fbG.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5f.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mi)},
$S:z+1}
B.fBU.prototype={
$1(d){return new B.XO(this.a,null)},
$S:z+16}
B.cZV.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fD()},
$S:8}
B.cZT.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).N(x)
return null},
$S:2}
B.cZU.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.dLV.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_a()},
$S:14}
B.dLi.prototype={
$0(){var x=J.bBT(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLj.prototype={
$0(){var x=J.bBT(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dKS.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dKR(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBp(this.c)}},
$S:0}
B.dKR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dKT.prototype={
$0(){var x=J.bBT(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dKY.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dKX(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBp(this.c)}},
$S:0}
B.dKX.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLJ.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dLK.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLf.prototype={
$1(d){return new B.TE(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dLc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Hd(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TI(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ta(),$async$$0)
case 5:s=J.a7(t)
x=s.gck(t)?6:7
break
case 6:x=8
return A.b(r.a_l(s.gM(t)),$async$$0)
case 8:case 7:r.hQ(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKW.prototype={
$1(d){this.a.aa1(d,"No files selected.","Added")},
$S:399}
B.dLn.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dLm(),A.T(x).k("J<1,n>")))},
$S:0}
B.dLm.prototype={
$1(d){return d.a},
$S:z+2}
B.dL1.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wI.c3().cMO(C.Yo,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
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
p=A.a8(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hQ("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hQ("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anA(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hQ("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ta(),$async$$0)
case 9:o.hQ("Imported "+J.ab(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dLG.prototype={
$1(d){return new B.OA(this.a.a.c,this.b,null)},
$S:z+7}
B.dLH.prototype={
$1(d){return new B.XQ(this.a.a.c,this.b,null)},
$S:z+18}
B.dLI.prototype={
$1(d){return new B.XN(this.a.a.c,this.b,null)},
$S:z+19}
B.dLd.prototype={
$1(d){return new B.OA(this.a.a.c,this.b,null)},
$S:z+7}
B.dLe.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dLz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Hd(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5H(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hQ("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.chh(),$async$$0)
case 5:x=6
return A.b(p.ta(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dLv(p),r),new B.dLw(),r.k("J<aj.E,n>")).bY(0,new B.dLx())
q=A.B(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).ci(A.eo(new B.dLy(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oP(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.TO(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLv.prototype={
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dLu(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dLu.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLw.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dLx.prototype={
$1(d){return d.length!==0},
$S:3}
B.dLy.prototype={
$1(d){var x=this.a
return new B.XS(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dLA.prototype={
$1(d){return d.a},
$S:z+2}
B.dLB.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLt.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kA,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.ganr(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ma(D.mi)?C.tv:C.os
p=!x||p.ma(D.mi)?"Play video":"View"
return A.bX(A.bq(!0,new A.C(C.Ap,A.v(A.a([q,o,t,C.az,B.XR(!1,u,!1,w,p,new B.dLo(d),v),B.XR(!1,u,!1,C.ja,"Share via QR",new B.dLp(d),"Letters/numbers QR code"),B.XR(!1,u,!1,D.Zo,"Send to their Code",new B.dLq(d),"Enter someone else's personal code"),B.XR(!1,u,!1,C.hx,"Download / save",new B.dLr(d),v),C.ao,B.XR(!1,u,!0,C.ea,"Delete",new B.dLs(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.bT(new A.aA(r,1,C.r,-1),C.Y,C.Y,C.Y),C.ks,v,v,C.n),C.be)},
$S:700}
B.dLo.prototype={
$0(){A.a4(this.a,!1).N("view")
return null},
$S:0}
B.dLp.prototype={
$0(){A.a4(this.a,!1).N("qr")
return null},
$S:0}
B.dLq.prototype={
$0(){A.a4(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dLr.prototype={
$0(){A.a4(this.a,!1).N("save")
return null},
$S:0}
B.dLs.prototype={
$0(){A.a4(this.a,!1).N("delete")
return null},
$S:0}
B.dKZ.prototype={
$1(d){return d.a},
$S:z+2}
B.dL_.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dL0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5J(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FH(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oP(s.c,s.f),$async$$0)
case 4:u.hQ(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKV.prototype={
$1(d){var x=this.a
x.tb(new B.dKU(x,d,this.b),"Preparing\u2026")},
$S:399}
B.dKU.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hQ("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TI(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hQ("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bAP(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hQ("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLg.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fJM(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLa.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FE(new B.dL6(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hQ("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dL7(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dL8(s))
case 5:x=8
return A.b(r.b.i5(0,C.Em,new B.dL9()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gal(t)){s.hQ("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ta(),$async$$0)
case 9:s.hQ("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dL6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dL3(x,d,e))},
$S:126}
B.dL3.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dL7.prototype={
$1(d){return new B.aaK(this.a.a,null)},
$S:z+21}
B.dL8.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dL9.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dLb.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Hz(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5x(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aXY(B.Hz(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anA(new B.dL4(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fJL(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hQ(q)
x=1
break}x=10
return A.b(s.ta(),$async$$0)
case 10:o=J.cD(r)
p=o.eG(r,new B.dL5()).gM(0)
s.hQ(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dL4.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dL2(x,d,e))},
$S:126}
B.dL2.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dL5.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mi)},
$S:z+1}
B.dLl.prototype={
$1(d){return new B.XT(this.a.a.c,null)},
$S:z+23}
B.dLk.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aXQ(u.a.c,v.b),$async$$0)
case 2:t.hQ(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLF.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.bX(A.bq(!0,new A.C(C.Ap,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kA,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.XR(!0,w,!1,C.mU,"My Code",new B.dLC(d),"Your personal code & QR \u2014 others send docs to you"),B.XR(!1,w,!1,D.Zo,"Send to their Code",new B.dLD(this.a,d),"Enter someone else's 5-digit code + letter"),B.XR(!1,w,!1,S.xQ,"Import backup",new B.dLE(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.bT(new A.aA(t,1,C.r,-1),C.Y,C.Y,C.Y),C.ks,x,x,C.n),C.be)},
$S:700}
B.dLC.prototype={
$0(){A.a4(this.a,!1).N("my_code")
return null},
$S:0}
B.dLD.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.byc()},
$S:0}
B.dLE.prototype={
$0(){A.a4(this.a,!1).N("import")
return null},
$S:0}
B.dLS.prototype={
$4(d,e,f,g){var x=null
return A.z(A.a([A.HI(D.OL,x,C.Zi,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.OL).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:669}
B.dLQ.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.dLR.prototype={
$0(){this.a.agb()
return null},
$S:0}
B.dLT.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:108}
B.dLU.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aaM(e,w,v,this.b,x.e,x.c1w(w),new B.dLM(x,w),new B.dLN(x,v,w),new B.dLO(x,w),new B.dLP(x,w),null)},
$S:z+24}
B.dLM.prototype={
$0(){this.a.adr(this.b)
return null},
$S:0}
B.dLN.prototype={
$0(){var x=this.a
return x.m(new B.dLL(x,this.b,this.c))},
$S:0}
B.dLL.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dLO.prototype={
$0(){this.a.MQ(this.b)
return null},
$S:0}
B.dLP.prototype={
$0(){this.a.afZ(this.b)
return null},
$S:0}
B.cZR.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:108}
B.cZS.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:135}
B.d_e.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:108}
B.d_d.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_a.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_b.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_8.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fK(w,C.A,x,new B.d_6(this.a),C.fP,C.dt,!0,x,!1,x,x)
$.aU.x1$.push(new B.d_7(this.a))
return C.bH},
$S:136}
B.d_6.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_4(this.a))
return C.bH},
$S:186}
B.d_4.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_1(x))},
$S:8}
B.d_1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_7.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_3(x))},
$S:8}
B.d_3.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_9.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_5(this.a))
return C.bH},
$S:186}
B.d_5.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_2(x))},
$S:8}
B.d_2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cZO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZN(x,d))},
$S:1740}
B.cZN.prototype={
$0(){return this.a.f=this.b===C.tZ},
$S:0}
B.cZP.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZM(x,d))},
$S:8}
B.cZM.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cZQ.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZL(x,d))},
$S:8}
B.cZL.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cZH.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cZI.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cZJ.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cZK.prototype={
$1(d){return this.a.d.LR(0,A.dA(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_r.prototype={
$0(){var x=this.a.a
return B.r3(x.c,x.d)},
$S:1741}
B.d_s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_u.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_w.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_y.prototype={
$0(){var x=this.a
x.m(new B.d_x(x))},
$S:0}
B.d_x.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fX(0)
else x.pp(0)},
$S:0}
B.d_n.prototype={
$1(d){return this.a.Po(this.b)},
$S:14}
B.d_o.prototype={
$1(d){return this.a.Pn(this.b)},
$S:14}
B.d_f.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_g.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_h.prototype={
$1(d){return D.fz1},
$S:z+25}
B.d_m.prototype={
$2(d,e){if(d)B.TO()},
$S:120}
B.d_i.prototype={
$0(){return this.a.a7X(this.b)},
$S:0}
B.d_j.prototype={
$0(){return this.a.a7U(this.b)},
$S:0}
B.d_k.prototype={
$0(){return this.a.ac0(this.b)},
$S:0}
B.d_l.prototype={
$0(){return this.a.a_Z(this.b)},
$S:0}
B.cZG.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.d_q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pt(),$async$$0)
case 2:u.m(new B.d_p(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_p.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5h.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mi)},
$S:z+1}
B.c5i.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5g.prototype={
$2(d,e){return this.bfK(d,e)},
bfK(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.TP(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fgz.prototype={
$1(d){if(d===D.a4h&&(this.a.a.a&30)===0)this.a.fJ(0)},
$S:z+27}
B.fgA.prototype={
$0(){},
$S:11}
B.fh3.prototype={
bhi(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f5N(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fZv(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bhi(d,e)},
$S:474}
B.fh2.prototype={
$1(d){var x=this
d.b=new B.fh1(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fh1.prototype={
$1(d){return this.bhh(d)},
bhh(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aXR(n,m),$async$$1)
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
return A.b(B.f5N(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d1(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a8(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a5G(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d1(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axs.prototype,"gc8n","P_",0)
x(v,"gc9d","Id",0)
x(v,"gc8K","xl",0)
x(v=B.aBo.prototype,"gc1q","abZ",0)
x(v,"gc1r","Y9",0)
x(v,"gcnA","afG",0)
x(v=B.aBr.prototype,"gc1s","Ya",0)
x(v,"gcnB","a0i",0)
x(B.aBp.prototype,"gc1t","ac_",0)
x(B.axr.prototype,"gc1y","c1z",4)
x(v=B.aBq.prototype,"gc8L","Zg",0)
x(v,"gcmb","cmc",4)
x(v,"gaZ2","aw8",0)
x(v,"gcp3","ag5",0)
x(v,"gbJT","W9",0)
x(v,"gc1x","Dq",0)
x(B.axt.prototype,"gb1M","a0h",0)
x(B.axq.prototype,"gc1A","Yb",0)
x(v=B.axw.prototype,"gaXM","c72",4)
x(v,"gc1u","ac2",0)
x(v=B.axu.prototype,"gclc","a03",0)
x(v,"gaVY","ac1",0)
w(B.axp.prototype,"gauJ","auK",8)
x(v=B.axv.prototype,"gcbo","adU",0)
x(v,"gbJr","a8I",0)
w(v,"gauJ","auK",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgd,B.a8_,B.arT,B.aA1,B.aDc,B.je,B.aas,B.bsR,B.Eh,B.VX])
w(B.cge,B.cgd)
w(B.b1W,B.a8_)
x(A.i7,[B.cg9,B.cga,B.cgb,B.cg8,B.cgc,B.cgf,B.cgg,B.cgh,B.cgi,B.cgj,B.cgk,B.cgl,B.cgm,B.fbr,B.fx0,B.fx2,B.fx1,B.fxf,B.fxg,B.fcM,B.cZW,B.cZY,B.cZX,B.d_0,B.feL,B.ffe,B.c4M,B.c4T,B.c4U,B.c4P,B.c4N,B.c4Q,B.c4R,B.fxd,B.fxe,B.dLZ,B.dM7,B.dM5,B.dM6,B.f8E,B.fcY,B.fcZ,B.c5a,B.fd0,B.fgW,B.fbF,B.fbG,B.c5f,B.fBU,B.cZV,B.cZT,B.dLV,B.dKR,B.dKX,B.dLf,B.dKW,B.dLm,B.dLG,B.dLH,B.dLI,B.dLd,B.dLv,B.dLu,B.dLw,B.dLx,B.dLy,B.dLA,B.dLB,B.dLt,B.dKZ,B.dL_,B.dKV,B.dLg,B.dL7,B.dL5,B.dLl,B.dLF,B.dLS,B.dLT,B.cZR,B.cZS,B.d_e,B.d_d,B.d_8,B.d_6,B.d_4,B.d_7,B.d_9,B.d_5,B.cZO,B.cZP,B.cZQ,B.cZK,B.d_n,B.d_o,B.d_h,B.c5h,B.c5i,B.fgz,B.fh2,B.fh1])
w(B.b1X,B.arT)
x(A.jq,[B.fx_,B.cZZ,B.d__,B.feJ,B.feK,B.ffd,B.dKO,B.dLX,B.dLY,B.dLW,B.dM_,B.dM0,B.dM1,B.dM2,B.dM3,B.dM4,B.dKP,B.dKQ,B.fd_,B.cZU,B.dLi,B.dLj,B.dKS,B.dKT,B.dKY,B.dLJ,B.dLK,B.dLc,B.dLn,B.dL1,B.dLe,B.dLz,B.dLo,B.dLp,B.dLq,B.dLr,B.dLs,B.dL0,B.dKU,B.dLh,B.dLa,B.dL3,B.dL8,B.dL9,B.dLb,B.dL2,B.dLk,B.dLC,B.dLD,B.dLE,B.dLQ,B.dLR,B.dLM,B.dLN,B.dLL,B.dLO,B.dLP,B.d_a,B.d_b,B.d_c,B.d_1,B.d_3,B.d_2,B.cZN,B.cZM,B.cZL,B.cZH,B.cZI,B.cZJ,B.d_r,B.d_s,B.d_t,B.d_u,B.d_v,B.d_w,B.d_y,B.d_x,B.d_f,B.d_g,B.d_i,B.d_j,B.d_k,B.d_l,B.cZG,B.d_q,B.d_p,B.fgA])
x(A.mq,[B.aaL,B.Mp,B.a80,B.Ns,B.VW,B.Nr,B.Ei])
x(A.ag,[B.XP,B.TD,B.TH,B.TE,B.XO,B.TF,B.XQ,B.XN,B.OA,B.XS,B.XM,B.XT])
x(A.ah,[B.axs,B.aBo,B.aBr,B.aBp,B.axr,B.aBq,B.axt,B.axq,B.axw,B.axu,B.axp,B.axv])
x(A.au,[B.abd,B.axo,B.bbc,B.aaM,B.aaK,B.bbd])
x(A.kD,[B.c4S,B.c4O,B.c4W,B.c4X,B.fxR,B.dL6,B.dL4,B.dLU,B.d_m,B.c5g,B.fh3])
x(A.iN,[B.bgu,B.bsv])})()
A.kj(b.typeUniverse,JSON.parse('{"b1W":{"a8_":[]},"b1X":{"arT":[]},"XP":{"ag":[],"r":[]},"axs":{"ah":["XP"]},"abd":{"au":[],"r":[]},"TD":{"ag":[],"r":[]},"TH":{"ag":[],"r":[]},"aBo":{"ah":["TD"]},"aBr":{"ah":["TH"]},"bgu":{"iN":[]},"TE":{"ag":[],"r":[]},"aBp":{"ah":["TE"]},"XO":{"ag":[],"r":[]},"TF":{"ag":[],"r":[]},"aaM":{"au":[],"r":[]},"XQ":{"ag":[],"r":[]},"XN":{"ag":[],"r":[]},"OA":{"ag":[],"r":[]},"XS":{"ag":[],"r":[]},"aaK":{"au":[],"r":[]},"XM":{"ag":[],"r":[]},"XT":{"ag":[],"r":[]},"axr":{"ah":["XO"]},"bsv":{"iN":[]},"aBq":{"ah":["TF"]},"axo":{"au":[],"r":[]},"bbc":{"au":[],"r":[]},"axt":{"ah":["XQ"]},"axq":{"ah":["XN"]},"axw":{"ah":["OA"]},"axu":{"ah":["XS"]},"axp":{"ah":["XM"]},"axv":{"ah":["XT"]},"bbd":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tO"),k:x("KW()"),m:x("br<n,n>"),F:x("qG"),g:x("ax<je?>"),x:x("ax<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a3<n,R>>"),t:x("P<a3<n,@>>"),r:x("P<je>"),w:x("P<+file,name(ln,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iN>"),a:x("P<dB>"),p:x("P<r>"),Z:x("P<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ak<je>"),j:x("ak<@>"),I:x("ak<H>"),M:x("bu<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iI"),e:x("i2L"),af:x("Dw"),U:x("je"),b:x("cn"),C:x("aC"),aK:x("vH"),ab:x("Eh"),br:x("arT"),v:x("VX"),N:x("n"),X:x("bm<O>"),Q:x("ly"),D:x("dB"),aw:x("cz<n>"),cd:x("a1<a3<n,@>>"),c7:x("r"),ch:x("bR<ak<je>>"),aW:x("bR<dB?>"),aY:x("bR<~>"),cx:x("aaL"),b1:x("bg<ak<je>>"),cf:x("bg<dB?>"),d4:x("bg<~>"),c4:x("aA1"),bG:x("aDc"),q:x("mO"),B:x("p5<Eh>"),c6:x("p5<a80>"),y:x("R"),i:x("O"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ak<je>?"),aL:x("ak<@>?"),h:x("a3<n,@>?"),l:x("je?"),R:x("aC?"),c:x("VX?"),d:x("+answerQr,transfer(n,ax<ak<je>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Mp,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dB?"),cm:x("aas?"),bk:x("aA1?"),ag:x("aDc?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aUZ=new A.aA(C.aD,2,C.r,-1)
D.bO9=new A.a6(C.a3,C.a7,C.x,C.a0i,null,null)
D.aWC=new A.o(null,null,null,C.lR,null,D.bO9,C.n)
D.aY2=new A.o(null,null,null,C.lR,null,E.FN,C.n)
D.aag=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abm=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ac9=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.adz=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f2o=new A.x("Your team portal",null,C.dI,null,null,null,null,null,null,null,null,null)
D.fg0=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.I9,null,null,null,null,null,null,null,null,null)
D.cW9=x([D.f2o,C.ao,D.fg0],y.p)
D.bhm=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.cW9,null)
D.fk7=new A.x("Create your organization",null,C.ho,null,null,null,null,null,null,null,null,null)
D.f6t=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.I9,null,null,null,null,null,null,null,null,null)
D.d9w=x([D.fk7,C.ao,D.f6t],y.p)
D.bhv=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.d9w,null)
D.fgB=new A.x("Team Member sign-in",null,C.ho,null,null,null,null,null,null,null,null,null)
D.fa7=new A.x("Enter the access code and password from your organization.",null,G.I9,null,null,null,null,null,null,null,null,null)
D.d7y=x([D.fgB,C.ao,D.fa7],y.p)
D.bhF=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.d7y,null)
D.bnj=new A.N(16,10,16,28)
D.bnr=new A.N(16,14,16,4)
D.boE=new A.N(20,0,20,16)
D.bp9=new A.N(20,8,20,16)
D.agc=new A.N(24,22,24,20)
D.Zo=new A.a_(63394,"MaterialIcons",!1)
D.aj8=new A.a_(63515,"MaterialIcons",!1)
D.bzx=new A.a_(983813,"MaterialIcons",!1)
D.bwO=new A.a_(62867,"MaterialIcons",!1)
D.bAx=new A.ae(D.bwO,44,C.c,null,null,null)
D.bBC=new A.ae(C.qF,null,C.ad,null,null,null)
D.bCZ=new A.ae(C.iO,18,null,null,null,null)
D.bEF=new A.ae(D.Zo,26,C.c,null,null,null)
D.bFa=new A.ae(C.B1,null,null,null,null,null)
D.bFJ=new A.ae(C.xS,null,null,null,null,null)
D.bGR=new A.ae(W.MB,null,null,null,null,null)
D.bHa=new A.ae(C.hi,16,null,null,null,null)
D.bKA=new A.ae(C.qN,16,null,null,null,null)
D.bAP=new A.ae(C.mU,null,null,null,null,null)
D.bLq=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bAP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bGg=new A.ae(C.F3,null,null,null,null,null)
D.bLv=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bGg,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bB9=new A.ae(N.FA,null,null,null,null,null)
D.bLG=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bB9,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cxF=x([C.f6,C.aZ,C.aD],y.O)
D.bQ_=new A.a6(C.ax,C.aC,C.x,D.cxF,null,null)
D.cxa=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.OL=x([C.f6,C.aD],y.O)
D.P_=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mi=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d2A=x([C.p6,C.aD],y.O)
D.dTV={iceServers:0}
D.aDK={urls:0}
D.dd6=new A.br(D.aDK,["stun:stun.l.google.com:19302"],y.m)
D.dd5=new A.br(D.aDK,["stun:stun1.l.google.com:19302"],y.m)
D.cN4=x([D.dd6,D.dd5],A.az("P<a3<n,n>>"))
D.dcr=new A.br(D.dTV,[D.cN4],A.az("br<n,@>"))
D.GP=new B.Mp(0,"lanDirect")
D.Qi=new B.Mp(1,"cloudStash")
D.dnX=new B.Mp(2,"inlineInstant")
D.Qj=new B.Mp(3,"webrtcLink")
D.yz=new B.Mp(4,"videoCloud")
D.fg_=new A.x("Receive file",null,C.n9,null,null,null,null,null,null,null,null,null)
D.cnj=x([E.akO,C.ab,D.fg_],y.p)
D.ezb=new A.co(C.aU,C.b9,C.j,C.m,null,C.p,null,0,D.cnj,null)
D.dZx=new A.C(C.ce,D.ezb,null)
D.eUJ=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a0W,null,null,null)
D.f2W=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eUJ,null,C.L,null,null,null,null,null,null,null)
D.dYO=new A.C(C.Av,D.f2W,null)
D.b1g=new A.cq(C.A,null,null,D.dYO,null)
D.e43=new A.cK(0,null,0,28,null,null,D.b1g,null)
D.e4l=new B.a80(0,"RTCDataChannelConnecting")
D.aJ3=new B.a80(1,"RTCDataChannelOpen")
D.aJ4=new B.a80(3,"RTCDataChannelClosed")
D.e4m=new B.Ei(0,"RTCIceConnectionStateNew")
D.e4n=new B.Ei(1,"RTCIceConnectionStateChecking")
D.e4o=new B.Ei(2,"RTCIceConnectionStateCompleted")
D.e4p=new B.Ei(3,"RTCIceConnectionStateConnected")
D.e4q=new B.Ei(4,"RTCIceConnectionStateCount")
D.e4r=new B.Ei(5,"RTCIceConnectionStateFailed")
D.e4s=new B.Ei(6,"RTCIceConnectionStateDisconnected")
D.aJ5=new B.Ei(7,"RTCIceConnectionStateClosed")
D.aJ6=new B.VW(0,"RTCIceGatheringStateNew")
D.e4t=new B.VW(1,"RTCIceGatheringStateGathering")
D.a4h=new B.VW(2,"RTCIceGatheringStateComplete")
D.a4i=new B.Nr(0,"RTCPeerConnectionStateClosed")
D.aJ7=new B.Nr(1,"RTCPeerConnectionStateFailed")
D.aJ8=new B.Nr(2,"RTCPeerConnectionStateDisconnected")
D.aJ9=new B.Nr(3,"RTCPeerConnectionStateNew")
D.aJa=new B.Nr(4,"RTCPeerConnectionStateConnecting")
D.aJb=new B.Nr(5,"RTCPeerConnectionStateConnected")
D.e4u=new B.Ns(0,"RTCSignalingStateStable")
D.e4v=new B.Ns(1,"RTCSignalingStateHaveLocalOffer")
D.e4w=new B.Ns(2,"RTCSignalingStateHaveRemoteOffer")
D.e4x=new B.Ns(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e4y=new B.Ns(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJc=new B.Ns(5,"RTCSignalingStateClosed")
D.eD8=new A.at(160,48)
D.b2p=new A.fh(2,null,null,null,null,C.aD,null,null,null,null)
D.eEC=new A.a5(16,16,D.b2p,null)
D.f5V=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eG2=new A.b1(D.f5V,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fd0=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eG5=new A.b1(D.fd0,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fl8=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eGc=new A.b1(D.fl8,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f5y=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eGC=new A.b1(D.f5y,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fgK=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aLM=new A.b1(D.fgK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fi3=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eH4=new A.b1(D.fi3,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fmu=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eHj=new A.b1(D.fmu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fkA=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eHo=new A.b1(D.fkA,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.flK=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eI9=new A.b1(D.flK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f4f=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eIG=new A.b1(D.f4f,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.feL=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ0=new A.b1(D.feL,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8_=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eJw=new A.b1(D.f8_,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fmA=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eJA=new A.b1(D.fmA,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f4v=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eJG=new A.b1(D.f4v,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f3f=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eJV=new A.b1(D.f3f,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f0h=new A.x("NGMY DOC SHARE",null,C.aN1,null,null,null,null,null,null,null,null,null)
D.f1w=new A.x("Show this to sender",null,C.ko,null,null,null,null,null,null,null,null,null)
D.f2v=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f6R=new A.x("Organization settings",null,C.ct,null,null,null,null,null,null,null,null,null)
D.f7b=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f89=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.f8D=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fbj=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fdZ=new A.x("Send to their Doc Share",null,C.n7,null,null,null,null,null,null,null,null,null)
D.feh=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.feA=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.ff4=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.ffv=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eU,null,null,null,null,null,null,null,null,null)
D.fiv=new A.x("Share files & videos\nwith a scan.",null,C.aN2,null,null,null,null,null,null,null,null,null)
D.fiO=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fz1=new B.XM(null)
D.a7n=new B.aaL(0,"docShare")
D.a7o=new B.aaL(1,"gate")
D.Tb=new B.aaL(2,"gateNoIndividual")})();(function staticFields(){$.aLQ=null
$.f3B=function(){var x=y.N
return A.U(x,x)}()
$.Fr=A.U(y.N,y.D)
$.aeJ=A.U(y.N,A.az("ln"))
$.PR=A.U(y.N,y.D)
$.f48=A.U(y.N,A.az("aas"))
$.c59=A.U(y.S,A.az("bsR"))
$.fZu=1
$.hLz=null
$.hLy=null
$.hDa=null
$.fOL=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i3f","hfx",()=>new B.cge())
x($,"i1a","fSk",()=>C.a.t(A.bt(A.bt(A.bt(A.G0(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["4WqSVYs1Z19WQO2Kbf2RdzsNOW8="]=a.current})($__dart_deferred_initializers__);