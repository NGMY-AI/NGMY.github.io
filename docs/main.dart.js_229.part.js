((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cgc:function cgc(){},
hwI(d){var x=null,w=new B.b1U(d,D.e3C,new A.p5(x,x,y.c6),new A.p5(x,x,y.B))
w.bu5(d)
return w},
b1U:function b1U(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cg7:function cg7(d){this.a=d},
cg8:function cg8(d){this.a=d},
cg9:function cg9(d){this.a=d},
cg6:function cg6(d){this.a=d},
cga:function cga(d){this.a=d},
hwJ(d,e){var x=y.N
x=new B.b1V(d,e,A.U(x,y.e),A.U(x,y.z))
x.bu6(d,e)
return x},
b1V:function b1V(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgd:function cgd(d){this.a=d},
cge:function cge(d){this.a=d},
cgf:function cgf(d){this.a=d},
cgg:function cgg(d){this.a=d},
cgh:function cgh(d){this.a=d},
cgi:function cgi(d){this.a=d},
cgj:function cgj(d){this.a=d},
cgk:function cgk(d){this.a=d},
fOg(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.xV.KW(x,"ngmy_doc_share_v1",new B.fbh(),1)},
hDd(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.co(d))
if(y.J.b(d))return new Uint8Array(A.co(J.eU(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.co(A.By(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.co(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Q5(d,e){return B.hSg(d,e)},
hSg(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q5=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aLO
x=7
return A.b(o==null?$.aLO=B.fOg():o,$async$Q5)
case 7:s=g
r=new Uint8Array(A.co(e))
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
Q4(d){return B.hSf(d)},
hSf(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Q4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aLO
x=7
return A.b(o==null?$.aLO=B.fOg():o,$async$Q4)
case 7:s=f
r=J.mv(s,"blobs","readonly")
x=8
return A.b(C.iz.yV(J.mt(r,"blobs"),d),$async$Q4)
case 8:q=f
x=9
return A.b(J.pe(r),$async$Q4)
case 9:o=B.hDd(q)
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
afp(d){return B.hSe(d)},
hSe(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aLO
x=7
return A.b(p==null?$.aLO=B.fOg():p,$async$afp)
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
fbh:function fbh(){},
hFx(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bm9(w,v))}return u},
hcN(d,e){var x,w={},v=A.aU2("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fwR(w,v,e)
C.vf.xO(v,"change",new B.fwT(w,v,!1))
C.vf.xO(v,"cancel",new B.fwS(w))
$.eP.m5()
v.click()
A.bN(C.ael,new B.fwQ(w),y.H)},
fwR:function fwR(d,e,f){this.a=d
this.b=e
this.c=f},
fwT:function fwT(d,e,f){this.a=d
this.b=e
this.c=f},
fwS:function fwS(d){this.a=d},
fwQ:function fwQ(d){this.a=d},
Cj(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cj=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd7()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSo()?3:4
break
case 3:x=5
return A.b(B.h8_(e,d,s,!0,!1,f,g,h,!1,i),$async$Cj)
case 5:x=1
break
case 4:x=6
return A.b(B.PK(d,s,f,g,h,i),$async$Cj)
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
return A.b(B.Hz(s,d),$async$Cj)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f6I(s,d),$async$Cj)
case 14:x=12
return A.b(r.h8_(q,p,o,n,m,l,k,j,a1,i),$async$Cj)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).ci(A.eo(new B.fx5(s,i,d,f,g,h),!1,null,y.H)),$async$Cj)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).ci(A.eo(new B.fx6(s,i,d,f,g,h),!1,null,y.H)),$async$Cj)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cj,w)},
PK(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PK=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXH(e),$async$PK)
case 3:u=k
x=4
return A.b(B.anr(d,e,!1),$async$PK)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Hz(e,d),$async$PK)
case 7:if(k){v=D.a7m
x=1
break}x=8
return A.b(B.TG(e),$async$PK)
case 8:v=t?D.T7:D.a7n
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXF(d,e)){v=D.a7m
x=1
break}x=11
return A.b(B.TG(e),$async$PK)
case 11:v=t?D.T7:D.a7n
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fJx(d,e)){v=D.a7m
x=1
break}x=14
return A.b(B.TG(e),$async$PK)
case 14:v=D.T7
x=1
break
case 13:v=t?D.T7:D.a7n
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
f6I(d,e){var x=0,w=A.j(y.y),v
var $async$f6I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXF(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXH(d),$async$f6I)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6I,w)},
h8_(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).ci(A.eo(new B.fcC(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h3a(d,e,f,g,h,i,j){return new B.XQ(e,j,d,g,h,i,f,null)},
fey(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fey=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.aq(C.as,u)
s=new A.aq(C.as,u)
x=3
return A.b(A.c_(C.K,null,new B.feB(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fey)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fey,w)},
ff2(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$ff2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.aq(C.as,u)
s=new A.aq(C.as,u)
r=new A.aq(C.as,u)
x=3
return A.b(A.c_(C.K,null,new B.ff4(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$ff2)
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
return A.i($async$ff2,w)},
fOp(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.bo(x,new A.b4(4,A.m(16),C.Z),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fpr(d,e){var x=0,w=A.j(y.H),v
var $async$fpr=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TG(e),$async$fpr)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eF()
case 1:return A.h(v,w)}})
return A.i($async$fpr,w)},
fx5:function fx5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fx6:function fx6(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aaL:function aaL(d,e){this.a=d
this.b=e},
fcC:function fcC(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
XQ:function XQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axq:function axq(){this.c=this.a=this.d=null},
cZW:function cZW(d,e){this.a=d
this.b=e},
cZT:function cZT(d){this.a=d},
cZV:function cZV(d){this.a=d},
cZU:function cZU(d){this.a=d},
cZY:function cZY(){},
cZX:function cZX(d){this.a=d},
abd:function abd(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aA_:function aA_(d,e){this.a=d
this.b=e},
aDa:function aDa(d,e,f){this.a=d
this.b=e
this.c=f},
feB:function feB(d,e,f){this.a=d
this.b=e
this.c=f},
fez:function fez(d){this.a=d},
feA:function feA(d,e,f){this.a=d
this.b=e
this.c=f},
ff4:function ff4(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ff3:function ff3(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c4J(d,e,f,g,h){return B.hrD(d,e,f,g,h)},
hrD(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c4J=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iH(r.dr(d,new B.c4K(s,e,h,g,f,q),y.g),y.l),$async$c4J)
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
return A.i($async$c4J,w)},
aXC(d,e,f,g,h){return B.hrE(d,e,f,g,h)},
hrE(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXC=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asH("GET",d)
o=A.fG3()
if(o==null)o=new A.KR(A.a([],y.W))
x=7
return A.b(o.eO(0,s).cL(0,C.Eh),$async$aXC)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BC(),$async$aXC)
case 8:q=j
if(J.ab(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.AX(q,h,o,e,f,"Received via QR")
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
return A.i($async$aXC,w)},
aXB(d){return B.hrB(d)},
hrB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uV(d,null).cL(0,C.nu),$async$aXB)
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
return A.i($async$aXB,w)},
c4I(d){return B.hrC(d)},
hrC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c4I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uV(d,null).cL(0,C.pl),$async$c4I)
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
return A.i($async$c4I,w)},
c4K:function c4K(d,e,f,g,h,i){var _=this
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
Hx(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hrJ(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.Hx(C.a.b_(u,v.length))}return null},
hrK(d){var x=B.Hx(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hrF(){var x,w=$.pb(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aD(10)
return C.d.fS(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(24)]},
a5v(d){return B.hrG(d)},
hrG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
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
a5w(d,e){return B.hrH(d,e)},
hrH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
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
AW(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$AW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$AW)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Hx(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5x(r),$async$AW)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5v("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$AW)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Hx(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$AW)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hrF()
x=14
return A.b(B.a5x(m),$async$AW)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5w("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AW)
case 15:k=f
x=16
return A.b(B.a5w("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AW)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$AW)
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
return A.i($async$AW,w)},
a5x(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Hx(d)
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
a5y(d,e,f,g){return B.hrL(d,e,f,g)},
hrL(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5y=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gal(d)){v=!1
x=1
break}r=B.Hx(f)
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
break}if(g.cI(d,0,new B.c4Q())>1048576||g.b8(d,new B.c4R())){v=B.DM(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
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
v=B.DM(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXK(u,g.gM(d),a0),$async$a5y)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pb().aD(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dr(d,new B.c4S(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXD(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5y)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5y,w)},
DM(d,e,f,g,h){return B.hrI(d,e,f,g,h)},
hrI(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DM=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c0(),$async$DM)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.c4M())
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
a1=B.HB(a9,q)
a0=new A.Jq(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DM)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ab(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.eS().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oD(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a91(a1.a,a4,"media",a1.d,a2).wr(m,n,new A.D4(!0,q.c)),$async$DM)
case 12:J.ce(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DM)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOg(r),$async$DM)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dr(a6,new B.c4N(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXD(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DM)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOg(r),$async$DM)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DM,w)},
aXD(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5v(t),$async$aXD)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c4L(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5w(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXD,w)},
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
return A.b(B.aXE(k,a0),$async$Mo)
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
return A.b(B.aXJ(h),$async$Mo)
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
e=A.B(new A.a1(r,new B.c4O(),q),n)
d=A.B(new A.a1(r,new B.c4P(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.d9(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5w("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Mo)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Mo,w)},
aXE(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXE=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.hW2(k,j)
C.d.v(s,i)
x=5
return A.b(B.Ch(l,m,"Received via My Code",t,e,i),$async$aXE)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOg(s),$async$aXE)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXE,w)},
c4Q:function c4Q(){},
c4R:function c4R(){},
c4S:function c4S(){},
c4M:function c4M(){},
c4N:function c4N(){},
c4L:function c4L(){},
c4O:function c4O(){},
c4P:function c4P(){},
fx2(d,e){var x=0,w=A.j(y.H)
var $async$fx2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).ci(A.eo(new B.fx3(e),!1,null,y.H)),$async$fx2)
case 2:return A.h(null,w)}})
return A.i($async$fx2,w)},
bAO(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bAO=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).ci(A.eo(new B.fx4(g,e,f),!1,null,y.y)),$async$bAO)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAO,w)},
fx3:function fx3(d){this.a=d},
fx4:function fx4(d,e,f){this.a=d
this.b=e
this.c=f},
TD:function TD(d,e){this.c=d
this.a=e},
aBm:function aBm(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dKL:function dKL(d,e){this.a=d
this.b=e},
TH:function TH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBp:function aBp(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dLU:function dLU(d){this.a=d},
dLV:function dLV(d){this.a=d},
dLW:function dLW(d){this.a=d},
dLT:function dLT(d,e){this.a=d
this.b=e},
dLX:function dLX(d){this.a=d},
dLY:function dLY(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dM_:function dM_(d,e){this.a=d
this.b=e},
dM0:function dM0(d,e){this.a=d
this.b=e},
dM1:function dM1(d){this.a=d},
dM4:function dM4(){},
dM2:function dM2(d){this.a=d},
dM3:function dM3(d,e){this.a=d
this.b=e},
bgu:function bgu(){},
TE:function TE(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBn:function aBn(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dKM:function dKM(d){this.a=d},
dKN:function dKN(d){this.a=d},
fJy(d){var x=d.hH
if(x>=0)return C.o.O(x)
return 10},
hrN(d){var x=d.kq
if(x>=0)return x
return 4.99},
hrM(d){var x=d.l7,w=y.N
w=x.iM(x,new B.c4U(),w,w)
return w},
fZf(d){var x=d.kr,w=y.N
w=x.iM(x,new B.c4V(),w,w)
return w},
aXH(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aXH)
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
return A.i($async$aXH,w)},
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
fJx(d,e){var x,w,v
if(B.hrN(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hrM(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.c9(new A.Q(Date.now(),0,!1))},
aXF(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fZf(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.c9(new A.Q(Date.now(),0,!1))},
fZg(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.fZf(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.c9(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.n(0,t,u.bN(A.dA(f,0,0,0,0,0).a).a5().ac())
d.kr=w},
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
break}u=B.fJy(d)
if(u<=0){v=!1
x=1
break}if(B.fJx(d,e)){v=!1
x=1
break}x=3
return A.b(B.ans(e),$async$anr)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anr,w)},
aXG(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Hz(e,d),$async$aXG)
case 3:if(g){v=-1
x=1
break}u=B.fJy(d)
if(u<=0){v=-1
x=1
break}if(B.fJx(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.ans(e),$async$aXG)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXG,w)},
c4X(d,e,f){var x=0,w=A.j(y.y),v
var $async$c4X=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Hz(e,d),$async$c4X)
case 3:if(h){v=!1
x=1
break}v=B.anr(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4X,w)},
c4W(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c4W=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
x=3
return A.b(B.c4X(d,u,i.gSo()),$async$c4W)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4W,w)},
a5z(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5z=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd7()
if(i.gSo()){v=!0
x=1
break}if(B.aXF(d,u)){v=!0
x=1
break}x=5
return A.b(A.l5(u,C.QA),$async$a5z)
case 5:x=k?3:4
break
case 3:B.fZg(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5z)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kK(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QA,"Doc Share for Organizations"),$async$a5z)
case 7:if(!k){v=!1
x=1
break}B.fZg(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5z)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5z,w)},
c4U:function c4U(){},
c4V:function c4V(){},
fxF(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fxF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fxF)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f3q.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hI([r],e.c))
s.toString
$.f3q.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxF,w)},
hYe(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f3q.bn($.f3q,new B.fxH(d))},
fxH:function fxH(d){this.a=d},
f4O(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f4O=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hI([d],f))
s.toString
u=A.mV(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jl,null,y.H),$async$f4O)
case 3:C.zf.f4(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eP.m5()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f4O,w)},
aeg(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f3Y.n(0,d,new B.aas(A.bl(e,!0,v)))
x=3
return A.b(A.ay(),$async$aeg)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aeg)
case 2:return A.h(null,w)}})
return A.i($async$aeg,w)},
aea(d){return B.hHm(d)},
hHm(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aea=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f3Y.h(0,d)
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
break}o=J.b6(s,new B.f8u(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aas(r)
$.f3Y.n(0,d,p)
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
break}u=new Uint8Array(A.co(e))
$.Fp.n(0,d,u)
x=3
return A.b(B.Q5(d,u),$async$PA)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PA,w)},
aM8(d){return B.hHk(d)},
hHk(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aM8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fp.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Q4(d),$async$aM8)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fp.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aM8)
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
return A.b(J.hH(s,d),$async$aM8)
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
return A.i($async$aM8,w)},
hDz(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.co(J.eU(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.co(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.co(A.By(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.co(d)),y.K)
return A.fe(null,y.K)},
a0e(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bQ(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fcO(r,t),!1,s)
A.fG(r,"error",new B.fcP(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i5(0,C.KQ,new B.fcQ())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0e,w)},
aMs(d,e,f){return B.hJA(d,e,f)},
hJA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMs=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0e(i),$async$aMs)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ab(j)
x=11
return A.b(B.Q5(o,p),$async$aMs)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ce(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ab(j)===0){x=1
break}x=12
return A.b(B.aeg(k,j,s),$async$aMs)
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
return A.i($async$aMs,w)},
aMr(d,e,f){return B.hJz(d,e,f)},
hJz(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMr=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMs(d,e,f),$async$aMr)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0e(f),$async$aMr)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fp.n(0,s,r)
$.PR.n(0,s,r)
x=11
return A.b(B.PA(s,r),$async$aMr)
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
return A.i($async$aMr,w)},
AX(d,e,f,g,h,i){return B.hrW(d,e,f,g,h,i)},
hrW(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AX=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cH.aD(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.je(p,q,o,n,new A.Q(Date.now(),0,!1).a5().ac(),a0,f,B.aXN(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PA(s,d),$async$AX)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$AX)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cS.gct().aI(d)),$async$AX)
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
return A.b(B.A1(e),$async$AX)
case 12:j=a2
J.ce(j,m)
x=13
return A.b(B.FA(e,j),$async$AX)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AX,w)},
TI(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A1(d),$async$TI)
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
k=B.fZi(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a5().ac()
i=new B.je(m,n,k,l,j,"From folder",null,B.aXN(),null)
$.aeJ.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0e(o),$async$TI)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fp.n(0,h,g)
$.PR.n(0,h,g)
B.PA(h,g)
x=9
break
case 10:x=11
return A.b(B.aMr(d,m,o),$async$TI)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FA(d,t),$async$TI)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TI,w)},
fJC(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fJC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fZi(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HA(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.AX(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJC,w)},
HA(d,e,f,g,h,i){return B.hrV(d,e,f,g,h,i)},
hrV(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HA=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cH.aD(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Jq(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HA)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.fY(n,m)
o+=J.ab(m)
case 9:if(!(J.ab(n)>=1048576)){x=10
break}l=new Uint8Array(A.co(J.QD(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kt(0,1048576,J.ab(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Q5(k,l),$async$HA)
case 11:J.ce(q,k);++p
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
return A.b(j.a9(0),$async$HA)
case 12:x=s.pop()
break
case 5:x=J.ab(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Q5(k,new Uint8Array(A.co(n))),$async$HA)
case 15:J.ce(q,k)
case 14:if(J.ab(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeg(r,q,g),$async$HA)
case 16:f=new B.je(i,a1,a0,g,new A.Q(Date.now(),0,!1).a5().ac(),a2,null,B.aXN(),null)
x=17
return A.b(B.A1(d),$async$HA)
case 17:e=a6
J.ce(e,f)
x=18
return A.b(B.FA(d,e),$async$HA)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HA,w)},
TK(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TK=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeJ.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0e(u)
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
v=A.By(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.PR.h(0,s)
if(i==null)i=$.Fp.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r3(d,e),$async$TK)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.PR.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.By(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TK,w)},
fZi(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
r3(d,e){return B.hrX(d,e)},
hrX(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r3=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.PR.h(0,f)
if(e==null)e=$.Fp.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeJ.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0e(s),$async$r3)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fp.n(0,f,r)
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
case 11:n=new A.awe(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Q4(g[l]),$async$r3)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.alZ()
if(!C.aG.gal(r)){$.Fp.n(0,f,r)
$.PR.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aM8(f),$async$r3)
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
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.co(i))
$.Fp.n(0,f,h)
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
hs_(d){var x,w,v=$.aeJ.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hs0(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hI([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hrY(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anz(d,e,f,g,h){return B.hrZ(d,e,f,g,h)},
hrZ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
return A.b(B.a0e(s),$async$anz)
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
return A.b(n.i_(d).wr(h,r,new A.D4(!0,e.c)),$async$anz)
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
fZk(d,e,f,g,h){var x,w,v,u,t=$.fZj
$.fZj=t+1
x=Date.now()
w=""+1000*x+"_"+C.cH.aD(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c57.n(0,t,new B.bsQ(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awe(u)))
return t},
fJD(d){var x=0,w=A.j(y.H)
var $async$fJD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fJD,w)},
HB(d,e){var $async$HB=A.e(function(a0,a1){switch(a0){case 2:s=v
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
return A.pM(B.TK(d,e,p,o<q?o:q),$async$HB,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pM(A.EZ(n),$async$HB,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pM(B.aea("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HB,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pM(B.Q4(h[l]),$async$HB,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pM(A.EZ(k),$async$HB,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pM(B.r3(d,e),$async$HB,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pM(A.EZ(A.By(j,p,o<i?o:i)),$async$HB,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pM(null,0,w)
case 2:return A.pM(t.at(-1),1,w)}})
var x=0,w=A.h6T($async$HB,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h8H(w)},
aXP(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aXP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c57.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a2V(),$async$aXP)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXP,w)},
TJ(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c57.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2V(),$async$TJ)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeg(r.c,u,r.z),$async$TJ)
case 4:t=new B.je(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aXN(),null)
u=r.a
x=5
return A.b(B.A1(u),$async$TJ)
case 5:s=f
J.ce(s,t)
x=6
return A.b(B.FA(u,s),$async$TJ)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TJ,w)},
a5G(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c57.W(0,d)
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
c59(d,e,f){var x=0,w=A.j(y.H)
var $async$c59=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxS(d,e,f),$async$c59)
case 2:return A.h(null,w)}})
return A.i($async$c59,w)},
c5a(d,e,f){var x=0,w=A.j(y.H)
var $async$c5a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxT(d,e,f),$async$c5a)
case 2:return A.h(null,w)}})
return A.i($async$c5a,w)},
DN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A1(d),$async$DN)
case 2:p=g
J.nc(p,new B.c58(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fp.W(0,v)
$.aeJ.W(0,e)
x=3
return A.b(B.aea(v),$async$DN)
case 3:u=g
$.f3Y.W(0,v)
x=4
return A.b(A.ay(),$async$DN)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DN)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DN)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afp(s[q]),$async$DN)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afp(v),$async$DN)
case 13:x=14
return A.b(B.FA(d,p),$async$DN)
case 14:return A.h(null,w)}})
return A.i($async$DN,w)},
aXO(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aXO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r3(d,e),$async$aXO)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f4O(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXO,w)},
A1(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$A1)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fcR(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A1,w)},
FA(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FA=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$FA)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fgM(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FA)
case 3:return A.h(null,w)}})
return A.i($async$FA,w)},
bxS(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A1(d),$async$bxS)
case 3:u=h
t=J.cD(u)
s=t.bf(u,new B.fbv(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aBk(f))
x=4
return A.b(B.FA(d,u),$async$bxS)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxS,w)},
bxT(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A1(d),$async$bxT)
case 3:u=h
t=J.cD(u)
s=t.bf(u,new B.fbw(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cBR(f))
x=4
return A.b(B.FA(d,u),$async$bxT)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxT,w)},
aas:function aas(d){this.a=d},
f8u:function f8u(){},
fcO:function fcO(d,e){this.a=d
this.b=e},
fcP:function fcP(d){this.a=d},
fcQ:function fcQ(){},
c58:function c58(d){this.a=d},
bsQ:function bsQ(d,e,f,g,h,i,j,k,l){var _=this
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
fcR:function fcR(){},
fgM:function fgM(){},
fbv:function fbv(d){this.a=d},
fbw:function fbw(d){this.a=d},
a5H(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5d())?3:4
break
case 3:x=5
return A.b(B.aXQ(d,e),$async$a5H)
case 5:u=g
if(u!=null){t=u.c
B.Mq(d,u.b,e,t)}v=u
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
return A.b(B.aXL(s),$async$a5H)
case 10:case 9:if(g){v=new A.OY(1,D.Qd,"NGMYDOCSYNC1|"+s)
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
B.Mq(d,D.ys,e,t)
v=new A.OY(p,D.ys,t)
x=1
break}v=B.c5c(d,e)
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
return A.b(B.aXK(p,d.length,e),$async$TL)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5a(e,C.d.gK(d).a,r.b),$async$TL)
case 7:case 6:q=r.a
x=8
return A.b(B.Mq(d,D.Qd,e,q),$async$TL)
case 8:v=new A.OY(d.length,D.Qd,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TL,w)},
TM(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ma(D.mg)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5I(d,e),$async$TM)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c55(s,d,e,t),$async$TM)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXL(t),$async$TM)
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
return A.b(B.fJw(),$async$TO)
case 2:x=3
return A.b(B.aOx(),$async$TO)
case 3:return A.h(null,w)}})
return A.i($async$TO,w)},
a5I(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5I=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aXN()
x=3
return A.b(B.c59(e,d.a,u),$async$a5I)
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
t=e===D.Qd&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
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
return A.b(B.c54(o,p,u,f),$async$Mq)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c55(o,p,f,t),$async$Mq)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c53(o,u,p,f),$async$Mq)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Mq,w)},
aXQ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aXQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5b(e,d),$async$aXQ)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.TQ(!1,!0,d,e),$async$aXQ)
case 4:u=g
if(u!=null){t=u.b
v=new A.OY(u.a,D.ys,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXQ,w)},
c5b(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TK(d,s,0,1),$async$c5b)
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
return A.i($async$c5b,w)},
c5c(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5J(null,d,e),$async$c5c)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fZh(u)
if(t.length>800){v=null
x=1
break}v=new A.OY(d.length,D.dne,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5c,w)},
anA(d,e,f){return B.hs3(d,e,f)},
hs3(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anA=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mu(g,1)
x=B.fJB(g)?3:4
break
case 3:x=5
return A.b(B.c56(g),$async$anA)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mu(g,13))
try{k=B.DO(d,a0,s)
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
return A.b(B.aXJ(q),$async$anA)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fJA(g,"NGMYDOCSYNC0")
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
break}if(J.cZ(g,"N2|")){v=B.HC(C.a.i(J.mu(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HC(C.a.i(J.mu(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c8(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HC(h,d,a0)
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
HC(d,e,f){return B.hs1(d,e,f)},
hs1(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HC=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aXB(r),$async$HC)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXB(A.cv(s,0,null)),$async$HC)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c4J(o,r,a1,n,a2),$async$HC)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c4I(q),$async$HC)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TN(l,a2),$async$HC)
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
return A.i($async$HC,w)},
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
TN(d,e){return B.hs2(d,e)},
hs2(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
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
return A.b(B.AX(i,a3,d,k,l,o),$async$TN)
case 9:h=a5
if(h!=null)J.ce(n,h)
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
c5d:function c5d(){},
a_P(d){var x=A.M(d).ax.a===C.H,w=x?D.ac8:D.aag,v=x?D.ady:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abl:C.aK
return new A.aEo([w,s,v,u,t,x?C.f6:C.bT])},
hdv(d,e){var x=e?C.w.j(0.72):C.aW
return A.c9(null,x,!0,null,new B.fBK(e),d,null,!0,!0,y.N)},
c4T(d,e,f,g,h,i,j,k,l){return new B.TF(e,l,d,f,k,j,g,h,i,null)},
XS(d,e,f,g,h,i,j){return new B.bbd(g,h,j,e,i,d,f,null)},
fBK:function fBK(d){this.a=d},
XP:function XP(d,e){this.c=d
this.a=e},
axp:function axp(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cZS:function cZS(d){this.a=d},
cZQ:function cZQ(d){this.a=d},
cZR:function cZR(d){this.a=d},
bsu:function bsu(){},
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
aBo:function aBo(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dLS:function dLS(d){this.a=d},
dLf:function dLf(d,e){this.a=d
this.b=e},
dLg:function dLg(d,e){this.a=d
this.b=e},
dKP:function dKP(d,e,f){this.a=d
this.b=e
this.c=f},
dKO:function dKO(d){this.a=d},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKV:function dKV(d,e,f){this.a=d
this.b=e
this.c=f},
dKU:function dKU(d){this.a=d},
dLG:function dLG(d,e){this.a=d
this.b=e},
dLH:function dLH(d){this.a=d},
dLc:function dLc(d,e,f){this.a=d
this.b=e
this.c=f},
dL9:function dL9(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dKT:function dKT(d){this.a=d},
dLk:function dLk(d){this.a=d},
dLj:function dLj(){},
dKZ:function dKZ(d){this.a=d},
dLD:function dLD(d,e){this.a=d
this.b=e},
dLE:function dLE(d,e){this.a=d
this.b=e},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLa:function dLa(d,e){this.a=d
this.b=e},
dLb:function dLb(d,e){this.a=d
this.b=e},
dLw:function dLw(d,e){this.a=d
this.b=e},
dLs:function dLs(d){this.a=d},
dLr:function dLr(d){this.a=d},
dLt:function dLt(){},
dLu:function dLu(){},
dLv:function dLv(d,e){this.a=d
this.b=e},
dLx:function dLx(){},
dLy:function dLy(d){this.a=d},
dLq:function dLq(d,e){this.a=d
this.b=e},
dLl:function dLl(d){this.a=d},
dLm:function dLm(d){this.a=d},
dLn:function dLn(d){this.a=d},
dLo:function dLo(d){this.a=d},
dLp:function dLp(d){this.a=d},
dKW:function dKW(){},
dKX:function dKX(d){this.a=d},
dKY:function dKY(d,e){this.a=d
this.b=e},
dKS:function dKS(d,e){this.a=d
this.b=e},
dKR:function dKR(d,e,f){this.a=d
this.b=e
this.c=f},
dLd:function dLd(d){this.a=d},
dLe:function dLe(d,e,f){this.a=d
this.b=e
this.c=f},
dL7:function dL7(d,e){this.a=d
this.b=e},
dL3:function dL3(d){this.a=d},
dL0:function dL0(d,e,f){this.a=d
this.b=e
this.c=f},
dL4:function dL4(d){this.a=d},
dL5:function dL5(d){this.a=d},
dL6:function dL6(){},
dL8:function dL8(d,e){this.a=d
this.b=e},
dL1:function dL1(d){this.a=d},
dL_:function dL_(d,e,f){this.a=d
this.b=e
this.c=f},
dL2:function dL2(){},
dLi:function dLi(d){this.a=d},
dLh:function dLh(d,e){this.a=d
this.b=e},
dLC:function dLC(d,e){this.a=d
this.b=e},
dLz:function dLz(d){this.a=d},
dLA:function dLA(d,e){this.a=d
this.b=e},
dLB:function dLB(d){this.a=d},
dLP:function dLP(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLO:function dLO(d){this.a=d},
dLQ:function dLQ(){},
dLR:function dLR(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d,e){this.a=d
this.b=e},
dLK:function dLK(d,e,f){this.a=d
this.b=e
this.c=f},
dLI:function dLI(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d,e){this.a=d
this.b=e},
dLM:function dLM(d,e){this.a=d
this.b=e},
axm:function axm(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbc:function bbc(d,e,f){this.c=d
this.d=e
this.a=f},
cZO:function cZO(){},
cZP:function cZP(){},
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
d_b:function d_b(){},
d_a:function d_a(d){this.a=d},
XR:function XR(d,e,f){this.c=d
this.d=e
this.a=f},
axr:function axr(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_7:function d_7(d){this.a=d},
d_8:function d_8(d,e,f){this.a=d
this.b=e
this.c=f},
d_9:function d_9(d,e){this.a=d
this.b=e},
d_5:function d_5(d,e){this.a=d
this.b=e},
d_3:function d_3(d){this.a=d},
d_1:function d_1(d){this.a=d},
cZZ:function cZZ(d){this.a=d},
d_4:function d_4(d){this.a=d},
d_0:function d_0(d){this.a=d},
d_6:function d_6(d){this.a=d},
d_2:function d_2(d){this.a=d},
d__:function d__(d){this.a=d},
XO:function XO(d,e,f){this.c=d
this.d=e
this.a=f},
axo:function axo(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cZL:function cZL(d){this.a=d},
cZK:function cZK(d,e){this.a=d
this.b=e},
cZM:function cZM(d){this.a=d},
cZJ:function cZJ(d,e){this.a=d
this.b=e},
cZN:function cZN(d){this.a=d},
cZI:function cZI(d,e){this.a=d
this.b=e},
cZE:function cZE(d){this.a=d},
cZF:function cZF(d){this.a=d},
cZG:function cZG(d,e){this.a=d
this.b=e},
cZH:function cZH(d){this.a=d},
OA:function OA(d,e,f){this.c=d
this.d=e
this.a=f},
axu:function axu(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_o:function d_o(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_q:function d_q(d){this.a=d},
d_r:function d_r(d){this.a=d},
d_s:function d_s(d,e){this.a=d
this.b=e},
d_t:function d_t(d){this.a=d},
d_v:function d_v(d){this.a=d},
d_u:function d_u(d){this.a=d},
XT:function XT(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axs:function axs(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_k:function d_k(d,e){this.a=d
this.b=e},
d_l:function d_l(d,e){this.a=d
this.b=e},
d_c:function d_c(d,e,f){this.a=d
this.b=e
this.c=f},
d_d:function d_d(d){this.a=d},
d_e:function d_e(){},
d_j:function d_j(){},
d_f:function d_f(d,e){this.a=d
this.b=e},
d_g:function d_g(d,e){this.a=d
this.b=e},
d_h:function d_h(d,e){this.a=d
this.b=e},
d_i:function d_i(d,e){this.a=d
this.b=e},
aaK:function aaK(d,e){this.c=d
this.a=e},
cZD:function cZD(d){this.a=d},
XN:function XN(d){this.a=d},
axn:function axn(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
XU:function XU(d,e){this.c=d
this.a=e},
axt:function axt(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_n:function d_n(d){this.a=d},
d_m:function d_m(d){this.a=d},
bbd:function bbd(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hs4(){var x,w=$.pb(),v=J.e0(10,y.N)
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
a5K(d){return B.hs5(d)},
hs5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
u=A.B(new A.a1(f,new B.c5f(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hs4()
t=A.T(u).k("J<1,a3<n,aC>>")
r=A.B(new A.J(u,new B.c5g(s),t),t.k("aj.E"))
x=6
return A.b(B.Mr(),$async$TQ)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a5K(q),$async$TQ)
case 7:x=8
return A.b(B.a5L(r,u,g,s),$async$TQ)
case 8:v=new A.bmB(u.length,"NGMYDOCSYNC4|"+s,s)
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
c5h(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5h=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Mr(),$async$c5h)
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
return A.i($async$c5h,w)},
a5L(d,e,f,g){return B.hs6(d,e,f,g)},
hs6(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5L=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ab(q)===0){x=8
break}x=10
return A.b(B.anz("media",r,new B.c5e(s,e,g),f,q),$async$a5L)
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
DO(d,e,f){return B.hs7(d,e,f)},
hs7(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DO=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c0(),$async$DO)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anB(b3),$async$DO)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ky,null,g),$async$DO)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anB(b3),$async$DO)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Mr(),$async$DO)
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
b0=A.oD(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a91(a8.a,b0,"media",a8.d,a9).BX(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXC(k,n,o,s,b7),$async$DO)
case 17:j=c0
if(j!=null){J.ce(p,j);++q
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
a8=A.oD(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a91(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DO)
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
return A.b(B.a5K(e),$async$DO)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DO,w)},
c5f:function c5f(){},
c5g:function c5g(d){this.a=d},
c5e:function c5e(d,e,f){this.a=d
this.b=e
this.c=f},
aOx(){var x=0,w=A.j(y.H),v,u
var $async$aOx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hD_=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aOx)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aOx)
case 3:u=$.fOB
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aOx)
case 4:$.fOB=$.hLn=$.hLo=null
return A.h(null,w)}})
return A.i($async$aOx,w)},
fgo(d){var x=0,w=A.j(y.H),v,u
var $async$fgo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4e){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fgp(new A.bQ(u,y.aY))
x=3
return A.b(u.i5(0,C.hE,new B.fgq()),$async$fgo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fgo,w)},
hLl(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hrP(x):x},
fOF(d){var x=0,w=A.j(y.T),v,u,t
var $async$fOF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anD(u)
x=1
break}v=B.fJA(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOF,w)},
fOE(d){var x=0,w=A.j(y.T),v,u,t
var $async$fOE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anE(u)
x=1
break}v=B.fJA(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOE,w)},
fxp(d){var x=0,w=A.j(y.T),v
var $async$fxp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anE(d),$async$fxp)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fxp,w)},
byJ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$byJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fOE(d),$async$byJ)
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
return A.i($async$byJ,w)},
f5C(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f5C=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TJ(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.AX(d.alZ(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f5C,w)},
FC(d,e,f){return B.hNJ(d,e,f)},
hNJ(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FC=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fOF(a1),$async$FC)
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
return A.b($.hfm().aBz(D.dbK,null),$async$FC)
case 4:l=d.fOB=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awe(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fgT(f,k,new B.fgU(f,a2,k,j,a0,p),a2,j,a0,p,new A.bQ(t,y.ch))
x=5
return A.b(l.a5K(0,new B.VY(r,"offer")),$async$FC)
case 5:d=l
x=7
return A.b(l.aiP(0),$async$FC)
case 7:x=6
return A.b(d.a5C(0,a4),$async$FC)
case 6:x=8
return A.b(B.fgo(l),$async$FC)
case 8:x=9
return A.b(l.amK(),$async$FC)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hLl(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anF(m,h),$async$FC)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fZh(h)
case 11:v=new A.blT(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FC,w)},
fgp:function fgp(d){this.a=d},
fgq:function fgq(){},
fgU:function fgU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fgT:function fgT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fgS:function fgS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hPz(d){switch(d){case"new":return D.e3D
case"checking":return D.e3E
case"connected":return D.e3G
case"completed":return D.e3F
case"failed":return D.e3I
case"disconnected":return D.e3J
case"closed":return D.aJ4
case"count":return D.e3H}return D.aJ4},
hPA(d){switch(d){case"new":return D.aJ5
case"gathering":return D.e3K
case"complete":return D.a4e}return D.aJ5},
hZJ(d){switch(d){case"stable":return D.e3L
case"have-local-offer":return D.e3M
case"have-local-pranswer":return D.e3O
case"have-remote-offer":return D.e3N
case"have-remote-pranswer":return D.e3P
case"closed":return D.aJb}return D.aJb},
hXY(d){switch(d){case"new":return D.aJ8
case"connecting":return D.aJ9
case"connected":return D.aJa
case"closed":return D.a4f
case"disconnected":return D.aJ7
case"failed":return D.aJ6}return D.a4f},
a80:function a80(d,e){this.a=d
this.b=e},
Ns:function Ns(d,e){this.a=d
this.b=e},
VX:function VX(d,e){this.a=d
this.b=e},
Nr:function Nr(d,e){this.a=d
this.b=e},
Eg:function Eg(d,e){this.a=d
this.b=e},
cgb:function cgb(){},
fLh(d){var x=new B.Ef()
x.a=d
x.b=!0
return x},
Ef:function Ef(){this.b=this.a=$},
a8_:function a8_(){},
arS:function arS(){},
VY:function VY(d,e){this.a=d
this.b=e},
fJw(){var x=0,w=A.j(y.H)
var $async$fJw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fJw,w)},
fJz(d,e,f){var x=0,w=A.j(y.T),v
var $async$fJz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ma(D.mg))){v=null
x=1
break}v=B.fxF(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJz,w)},
fZh(d){var x,w=F.a9M.a2F(C.dF.aI(d),null)
if(w.length===0){x=C.dF.aI(d)
return C.cS.gct().aI(x)}return C.cS.gct().aI(w)},
hrO(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c7(0,F.a9L.b90(v,!1))
return x}catch(w){x=C.c4.c7(0,v)
return x}},
fJA(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hrO(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c7(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
hrP(d){var x,w,v,u,t,s=A.a([],y.s)
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
hrQ(){var x,w=$.pb(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aD(32)]
return"DS"+C.d.fS(v)},
aXI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bF),$async$aXI)
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
return A.i($async$aXI,w)},
c4Y(d,e){return B.hrR(d,e)},
hrR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c4Y=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hz("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c4Y)
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
return A.i($async$c4Y,w)},
aXL(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXI(d),$async$aXL)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXL,w)},
aXK(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hrQ()
r=C.a.i(f)
t=C.dF.aI(s)
x=3
return A.b(B.c4Y(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gct().aI(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aXK)
case 3:if(!h){v=null
x=1
break}v=new A.ZT("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXK,w)},
aXJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ab(o)===0){v=null
x=1
break}x=3
return A.b(B.aXI(o),$async$aXJ)
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
return A.i($async$aXJ,w)},
c4Z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c4Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ab(q)===0){x=1
break}u=4
x=7
return A.b(X.bzF("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c4Z)
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
return A.i($async$c4Z,w)},
aXM(d){var x=0,w=A.j(y.h),v,u,t
var $async$aXM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Hy(),$async$aXM)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXM,w)},
anw(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anw)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aXM(s)
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
return A.b(A.Hy(),$async$a5C)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dg(s)
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
return A.b(A.Hy(),$async$a5D)
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
return A.b(A.Hy(),$async$a5E)
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
s=B.aXF(d,J.k(s==null?"":s))
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
c5_(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ab(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c5_)
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
return A.i($async$c5_,w)},
Hz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Hz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5_(d),$async$Hz)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aXM(t),$async$Hz)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anv(d),$async$Hz)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXF(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anv(d),$async$Hz)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hz,w)},
anv(d){var x=0,w=A.j(y.H)
var $async$anv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$anv)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anv)
case 2:return A.h(null,w)}})
return A.i($async$anv,w)},
aXN(){var x,w=$.pb(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(32)]
return C.d.fS(v)},
a5F(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fJB(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c52(d){return B.hrT(d)},
hrT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c52=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5F(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bF),$async$c52)
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
return A.i($async$c52,w)},
any(d,e){return B.hrU(d,e)},
hrU(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
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
c54(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c54=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.any(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c54)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c54,w)},
c53(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c53=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.any(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c53)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c53,w)},
c55(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c55=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5F(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.any(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c55,w)},
c56(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c56=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fJB(d)){v=null
x=1
break}x=3
return A.b(B.c52(d),$async$c56)
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
return A.i($async$c56,w)},
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
anC(d){return B.hs8(d)},
hs8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
r=C.dF.aI(C.a.i(e))
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
return A.b(r.hj(C.fQ),$async$amF)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wo(o))
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
hW2(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fvY(d){return B.hW4(d)},
hW4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fvY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eS().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i_("media").JO(d,3600),$async$fvY)
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
return A.i($async$fvY,w)},
Ch(d,e,f,g,h,i){var x=null
return B.hW1(d,e,f,g,h,i)},
hW1(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ch=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fZk(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fJD(r),$async$Ch)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fvY(o),$async$Ch)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5G(r),$async$Ch)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aM9)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.KR(A.a([],g))
x=15
return A.b(d.eO(0,A.asH("GET",A.cv(n,0,null))).cL(0,C.Eh),$async$Ch)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5G(r),$async$Ch)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Jq(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Ch)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ab(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aXP(r,k),$async$Ch)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Ch)
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
return A.b(B.a5G(r),$async$Ch)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ch,w)},
aOg(d){return B.hW3(d)},
hW3(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eS().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i_("media").W(0,d),$async$aOg)
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
return A.i($async$aOg,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[39]
F=c[213]
H=c[104]
P=c[194]
E=c[187]
G=c[83]
Q=c[158]
R=c[105]
S=c[192]
I=c[217]
K=c[223]
B=a.updateHolder(c[21],B)
D=c[221]
T=c[157]
L=c[176]
U=c[63]
V=c[224]
W=c[69]
X=c[54]
M=c[82]
Y=c[222]
N=c[117]
B.cgc.prototype={
aBz(d,e){return this.cDn(d,e)},
cDn(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aBz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.U(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dV(r,s,t)
t.v(0,d)
u=new q(A.k9(A.cA(t)))
t=J.k(u)
v=B.hwJ(C.cS.gct().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aBz,w)}}
B.b1U.prototype={
bu5(d){var x=this,w=x.w
w.onclose=A.he(new B.cg7(x))
w.onopen=A.he(new B.cg8(x))
w.onmessage=A.he(new B.cg9(x))
w.onbufferedamountlow=A.he(new B.cga(x))},
gdj(d){return this.x},
afa(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ef()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fLh(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afa)
case 8:v=t.fLh(s.alT(f,0,null))
x=1
break
case 7:case 4:v=B.fLh(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afa,w)}}
B.b1V.prototype={
bu6(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgd(x)))
w.addEventListener("icecandidate",A.he(new B.cge(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgf(x)))
w.onicegatheringstatechange=A.he(new B.cgg(x))
w.addEventListener("signalingstatechange",A.he(new B.cgh(x)))
if(!$.fS9())w.addEventListener("connectionstatechange",A.he(new B.cgi(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgj(x)))
w.addEventListener("track",A.he(new B.cgk(x)))},
aiP(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aiP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.k9(A.cA(A.U(y.N,y.z)))),y.aQ),$async$aiP)
case 3:t=f
v=new B.VY(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiP,w)},
a5C(d,e){return this.bjF(0,e)},
bjF(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a5C)
case 2:return A.h(null,w)}})
return A.i($async$a5C,w)},
a5K(d,e){return this.bjV(0,e)},
bjV(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a5K)
case 2:return A.h(null,w)}})
return A.i($async$a5K,w)},
amK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$amK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.VY(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amK,w)},
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
B.XQ.prototype={
T(){return new B.axq()},
gd7(){return this.c}}
B.axq.prototype={
a_(){this.a1()
this.abV()},
abV(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXG(u.e,u.c),$async$abV)
case 2:t=e
if(v.c!=null)v.m(new B.cZW(v,t))
return A.h(null,w)}})
return A.i($async$abV,w)},
OZ(){var x=0,w=A.j(y.H),v,u=this,t
var $async$OZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anr(t.e,t.c,!1),$async$OZ)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eIc)
x=1
break}x=4
return A.b(B.a5A(u.a.c,"individual"),$async$OZ)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a4b(A.eo(new B.cZT(u),!1,null,y.H)),$async$OZ)
case 5:case 1:return A.h(v,w)}})
return A.i($async$OZ,w)},
Id(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Id=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fey(o),$async$Id)
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
break}if(!p){o.I(y.q).f.R(D.eFh)
x=1
break}x=5
return A.b(B.a5A(u.a.c,"member"),$async$Id)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a4b(A.eo(new B.cZV(u),!1,null,y.H)),$async$Id)
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
return A.b(B.ff2(o),$async$xl)
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
break}if(!p){o.I(y.q).f.R(D.eFe)
x=1
break}x=10
return A.b(B.anw(u.a.c),$async$xl)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a4b(A.eo(new B.cZU(u),!1,null,y.H)),$async$xl)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xl,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j_:C.pc,q=B.fJy(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fG,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f_k,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h1,t,t,t),C.ay,D.fhr,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bPp,C.n),t,t,t,t,C.ey,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lr(new B.cZY(),t),C.P,w,C.dZ,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abd(C.eO,C.avT,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc8c(),t),C.ac],v))
p.push(new B.abd(C.om,C.a0e,"Team Member","Sign in with your organization access code + password",u.gc92(),t))
p.push(C.ac)
p.push(new B.abd(C.aiE,C.a1G,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc8z(),t))
return A.cc(t,r,A.bq(!0,A.ci(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.ag0,t,t,C.ai),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.abd.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a6(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eA,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oO,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.AO,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c0,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ae)}}
B.aA_.prototype={}
B.aDa.prototype={}
B.je.prototype={
ma(d){var x=this.b,w=C.a.od(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
gano(){var x=this.d
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
b8w(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.je(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cBR(d){return this.b8w(null,d)},
aBk(d){return this.b8w(d,null)}}
B.TD.prototype={
T(){return new B.aBm(new A.cq(null,y.A))},
gd7(){return this.c}}
B.aBm.prototype={
a_(){this.a1()
this.abW()},
abW(){var x=0,w=A.j(y.H),v,u=this,t
var $async$abW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AW(u.a.c),$async$abW)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dKL(u,t))
case 1:return A.h(v,w)}})
return A.i($async$abW,w)},
abX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fA(s)),$async$abX)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eJ6)
case 1:return A.h(v,w)}})
return A.i($async$abX,w)},
Y7(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Y7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amF(s.d,4),$async$Y7)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_my_code_"+m+".png"),$async$Y7)
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
return A.i($async$Y7,w)},
afD(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8A("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$afD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afD,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j_:C.pc,m=o?C.c:C.M,l=A.eC(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lS
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
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a0E,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a6(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.afB,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ci(A.v(A.a([x,C.mo,w,C.kl,new A.eq(A.p(p,A.pv(p,p,!1,B.hrK(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c0,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kl,A.A(A.a([A.D(A.ez(M.B5,C.SD,q.gc1h(),p),1),C.aw,A.D(A.dp(C.xU,C.a6z,q.gc1i(),A.bk(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a5(1/0,p,A.ez(L.a_6,D.fdy,q.gcno(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.Lf,p,p,C.ai)
x=r}return A.cc(l,n,x,p,!1,!1,p,p)}}
B.TH.prototype={
T(){return new B.aBp(new A.aq(C.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.aBp.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.Hx(x==null?"":x)
if(w!=null)this.d.saU(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Y8(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Hx(u.d.a.a)
if(t==null){u.m(new B.dLU(u))
x=1
break}u.m(new B.dLV(u))
s=u.a
r=s.c
x=3
return A.b(B.a5y(s.d,new B.dLW(u),t,r),$async$Y8)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dLX(u))
if(q){s=u.c
s.toString
A.a4(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$Y8,w)},
a0g(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0g=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dLY(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.r3(r.a.c,q),$async$a0g)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dLZ(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ab(r.a.d)>1?"NGMY Doc Share ("+J.ab(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ag8(p,m,l,j,k),$async$a0g)
case 8:o=e
if(r.c!=null)r.m(new B.dM_(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a8(h)
if(r.c!=null)r.m(new B.dM0(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dM1(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0g,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.ac8:D.aag,h=j?D.ady:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abl:C.aK
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.M(d).ax.a===C.H
w=J.ab(l.a.d)
h=i[0]
g=i[3]
g=A.eC(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e2(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bE9,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a6(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eA,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a0E,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tX(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgu()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bo(k,k,k,C.L8,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ag,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dM2(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lJ,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.Kw(l.a.d,4)
m=A.B(new A.J(m,new B.dM3(x,new A.aEo(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ab(l.a.d)>4)m.push(new A.C(C.m2,A.d("+ "+(J.ab(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eu,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eDN)
else q.push(A.V(C.l5,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dh(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iq,k,k,k,C.eN,k,k,k)],r))}e=A.D(A.ci(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.boG,k,k,C.ai),1)
u=l.f?k:l.gcnp()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(L.a_6,D.fet,u,A.dd(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ce,k,new A.b7(q,C.Z),new A.aA(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc1j()
t=A.bk(C.aD,k,k,0,C.c,k,C.mN,k,new A.b7(A.m(16),C.Z),k,k,k)
return A.cc(g,h,new A.an(C.W,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mM(new B.dM4(),A.v(A.a([e,new A.C(D.boa,A.v(A.a([s,C.P,i,C.ac,A.bI(l.f?C.rg:D.fcY,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.Wx,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
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
T(){return new B.aBn()}}
B.aBn.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aQ()
u.d=new A.aq(new A.bb(w,C.b0,C.aN),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.aq(new A.bb(x,C.b0,C.aN),v)
u.f!==$&&A.aQ()
u.f=new A.aq(C.as,v)},
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
abY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$abY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dKM(r))
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
return A.b(B.a5D(p,m,n,o,C.a.i(l).length===0?null:l),$async$abY)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eII)
s=[1]
x=4
break}p.I(y.q).f.R(D.eHl)
p=r.c
p.toString
A.a4(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dKN(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$abY,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j_:C.pc,q=A.eC(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f5R,s,s,s,1,s,!0),p=A.p(s,D.bgS,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.FJ,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bKX,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bKS,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bL7,C.y,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc1k()
u=A.bk(C.aD,s,s,s,s,C.fH,s,s,s,s,s,s)
return A.cc(q,r,A.ci(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mo,A.bI(t.r?C.rg:C.aOG,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a8,s,s,C.ai),s,!1,!1,s,s)}}
B.aas.prototype={}
B.bsQ.prototype={
a2V(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.co(r.alZ()))
x=3
return A.b(B.Q5(t,s),$async$a2V)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2V,w)},
gd7(){return this.a}}
B.Mp.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.XP.prototype={
T(){return new B.axp(new A.aq(C.as,$.aw()),A.kd(!0,null,!0,!0,null,null,!1))}}
B.axp.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.cZS(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c1q(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a_P(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.j_:v.a[0],p=A.m(24),o=A.I(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fG,32)],n),l=A.p(w,T.alh,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cw,16)],n),C.am4,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tX(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsu()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bo(w,w,w,C.Et,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aUS),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ag,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cZQ(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lJ,w,w,w,w)
f=f[1]
f=A.D(A.dW(C.n7,new B.cZR(d),A.dd(w,w,w,w,w,w,w,w,w,s,w,w,C.ce,w,new A.b7(A.m(14),C.Z),new A.aA(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cI,12)],n)
g=y.p
return A.eD(w,C.K,new A.cW(Q.Jd,A.bX(new A.C(C.x4,A.v(A.a([l,C.aO,k,C.P,j,C.dZ,i,C.dZ,A.A(A.a([f,C.aw,A.D(A.bX(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.dYO,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc1p(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ae),new A.o(w,w,w,h,n,K.N1,C.n),C.be),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.be),w),w,w,w,C.Lh,C.cZ,w,w,w)}}
B.bsu.prototype={
o9(d,e){return e.aiK(e.a.toUpperCase())}}
B.TF.prototype={
T(){return new B.aBo(A.a([],y.r),A.aZ(y.N))},
gd7(){return this.c}}
B.aBo.prototype={
a_(){var x=this
x.a1()
x.tb()
x.w=A.dF(C.j3,new B.dLS(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.TO()
this.a2()},
a_8(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mo(u.a.c),$async$a_8)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A1(u.a.c),$async$a_8)
case 4:u.m(new s.dLf(u,e))
u.hQ("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_8,w)},
tb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Mo(u.a.c),$async$tb)
case 3:t=e
x=4
return A.b(B.A1(u.a.c),$async$tb)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLg(u,s))
if(t>0)u.hQ("Received "+A.t(t)+" file(s) via My Code.")
u.Mt(u.d)
B.AW(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tb,w)},
Mt(d){return this.bxZ(d)},
bxZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
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
break}new B.dKP(u,r,p).$0()
u.c.e4()
case 7:if(!(C.a.a0(r.c,"video/")||r.ma(D.mg))){q=r.x
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
return A.b(B.A1(u.a.c),$async$Mt)
case 12:u.m(new o.dKQ(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Mt,w)},
MQ(d){return this.bE4(d)},
bE4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$MQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5I(d,u.a.c),$async$MQ)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dKV(u,d,t))
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
tc(d,e){return this.cxx(d,e)},
cxx(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dLG(r,e))
u=3
x=6
return A.b(d.$0(),$async$tc)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dLH(r))
$.eP.m5()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tc,w)},
gaS9(){var x=this.a
return x.f||x.r||x.w},
Hd(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaS9()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c4W(s,n,r,q,o,t),$async$Hd)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hQ("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fpr(o,u.a.c),$async$Hd)
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
return A.b(B.Cj(s,o,r,q,n,t),$async$Hd)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hd,w)},
Ze(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Ze=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anw(u.a.c),$async$Ze)
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
return A.b(A.a4(t,!1).ci(A.eo(new B.dLc(u,r,q),!1,null,y.H)),$async$Ze)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ze,w)},
a_j(d){return this.ch7(d)},
ch6(){return this.a_j(1)},
ch7(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaS9()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ant(u.a.c),$async$a_j)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_j,w)},
a9Z(d,e,f){return this.bUb(d,e,f)},
bUb(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9Z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hQ(e)
x=1
break}x=3
return A.b(u.tc(new B.dL9(u,d,null,e,f),"Uploading\u2026"),$async$a9Z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9Z,w)},
by7(){B.hcN(!1,new B.dKT(this))
return},
cm0(){this.m(new B.dLk(this))},
aw3(){var x=0,w=A.j(y.H),v=this
var $async$aw3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.by7()
return A.h(null,w)}})
return A.i($async$aw3,w)},
a9V(){var x=0,w=A.j(y.H),v=this
var $async$a9V=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tc(new B.dKZ(v),"Importing\u2026"),$async$a9V)
case 2:return A.h(null,w)}})
return A.i($async$a9V,w)},
QY(d){return this.cx0(d)},
cx0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.ma(D.mg)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).ci(A.eo(new B.dLD(u,d),!1,null,y.H)),$async$QY)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ma(D.OW)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).ci(A.eo(new B.dLE(u,d),!1,null,y.H)),$async$QY)
case 8:x=1
break
case 7:x=u.bUT(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).ci(A.eo(new B.dLF(u,d),!1,null,y.H)),$async$QY)
case 11:x=1
break
case 10:u.hQ("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$QY,w)},
bUT(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.od(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cwx,C.a.b_(x,w+1).toLowerCase())},
ado(d){return this.c8g(d)},
c8g(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ado=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ma(D.mg)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).ci(A.eo(new B.dLa(u,d),!1,null,y.H)),$async$ado)
case 5:x=1
break
case 4:u.m(new B.dLb(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ado,w)},
Qm(d){return this.coR(d)},
coR(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hQ("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oP(t,s.c,s.f),$async$Qm)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tc(new B.dLw(u,d),"Preparing QR\u2026"),$async$Qm)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Qm,w)},
ag2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ag2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLx(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a1<1>")
r=A.B(new A.a1(t,new B.dLy(q),s),s.k("G.E"))
if(r.length===0){u.hQ("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Qm(r),$async$ag2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ag2,w)},
afW(d){return this.coq(d)},
coq(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_P(r)
r=u.c
r.toString
x=3
return A.b(A.c_(C.K,null,new B.dLq(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afW)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.QY(d)
break
case"qr":u.Qm(A.a([d],y.r))
break
case"send_my_code":u.c8S(A.a([d],y.r))
break
case"save":u.afh(d)
break
case"delete":u.HZ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afW,w)},
W7(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$W7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dKW(),A.T(t).k("J<1,n>")).fF(0)}t=u.d
s=A.T(t).k("a1<1>")
r=A.B(new A.a1(t,new B.dKX(q),s),s.k("G.E"))
if(r.length===0){u.hQ("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oP(t,s.c,s.f),$async$W7)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tc(new B.dKY(u,r),"Preparing file\u2026"),$async$W7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$W7,w)},
aeu(d){return this.cfD(d)},
cfD(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aeu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hdv(d,!1),$async$aeu)
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
return A.i($async$aeu,w)},
adu(){var x=0,w=A.j(y.H),v=this,u
var $async$adu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fx2(u,v.a.c),$async$adu)
case 2:return A.h(null,w)}})
return A.i($async$adu,w)},
by6(){B.hcN(!1,new B.dKS(this,null))
return},
Ic(d,e){return this.c8T(d,e)},
aXS(d){return this.Ic(null,d)},
c8S(d){return this.Ic(d,null)},
c8T(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Ic=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a1<1>")
k=A.B(new A.a1(p,new B.dLd(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wH.c3().ali(!0,C.Yk,!1),$async$Ic)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tc(new B.dLe(l,s,r),"Preparing\u2026"),$async$Ic)
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
return A.b(B.bAO(p,l,e,s.a.c),$async$Ic)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hQ("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ic,w)},
Ht(d){return this.bTZ(d)},
bTZ(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ht=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hrJ(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aXS(t),$async$Ht)
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
return A.b(u.tc(new B.dL7(u,d),"Receiving video\u2026"),$async$Ht)
case 11:x=1
break
case 10:x=12
return A.b(u.tc(new B.dL8(u,d),"Receiving\u2026"),$async$Ht)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ht,w)},
Dq(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Dq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cd()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aeu(t),$async$Dq)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ht(s),$async$Dq)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).ci(A.eo(new B.dLi(u),!1,null,y.N)),$async$Dq)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tb(),$async$Dq)
case 10:x=1
break
case 9:x=11
return A.b(u.Ht(C.a.i(r)),$async$Dq)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Dq,w)},
afh(d){return this.ckB(d)},
ckB(d){var x=0,w=A.j(y.H),v=this
var $async$afh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tc(new B.dLh(v,d),"Saving\u2026"),$async$afh)
case 2:return A.h(null,w)}})
return A.i($async$afh,w)},
HZ(d){return this.bGm(d)},
bGm(d){var x=0,w=A.j(y.H),v,u=this,t,s
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
return A.b(B.c4Z(t),$async$HZ)
case 6:case 5:s=d.a
x=7
return A.b(B.DN(u.a.c,s),$async$HZ)
case 7:u.r.W(0,s)
x=8
return A.b(u.tb(),$async$HZ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$HZ,w)},
ag8(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ag8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_P(r)
r=u.c
r.toString
x=3
return A.b(A.c_(C.K,null,new B.dLC(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ag8)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.adu()
break
case"import":u.a9V()
break}case 1:return A.h(v,w)}})
return A.i($async$ag8,w)},
c1n(d){var x=d.c
if(C.a.a0(x,"video/")||d.ma(D.mg))return C.pA
if(C.a.a0(x,"image/")||d.ma(D.OW))return C.tr
if(C.a.t(x,"pdf"))return E.Mz
return D.aj6},
B(d){var x,w,v=this,u=null,t=B.a_P(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FB,u,u,u,new B.dLN(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bEF,u,u,u,v.e?u:v.gc8A(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcm_()
n.push(A.aH(u,u,u,u,A.V(v.r.a===x?D.bz2:E.ajv,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_3,u,u,u,v.e?u:v.gc1o(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nG,u,u,u,v.e?u:v.gaYX(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bGl,u,u,u,v.e?u:new B.dLO(v),u,u,u,u,"More options",u))
q=A.eC(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lr(new B.dLP(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e2(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.M(d).ax.a===C.H?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mc(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axm(C.j9,s,!0,t,w?u:v.gcoS(),u),1)
x.push(new A.C(D.bmY,A.mM(new B.dLQ(),A.A(A.a([s,C.aw,A.D(new B.axm(C.v3,"Export",!1,t,w?u:v.gbJM(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.ir,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbc(t,v.e?u:v.gaYX(),u)
else s=A.jZ(!0,u,u,new B.dLR(v,t),s,u,D.bmQ,u,u,!1,!1)
x.push(A.D(s,1))
return A.cc(q,r,new A.an(C.W,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axm.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aD,t,t,0,C.c,t,C.uN,t,new A.b7(s,C.Z),t,t,t)
return A.dp(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dd(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uN,t,new A.b7(s,C.Z),new A.aA(v,1,C.r,-1),t,t,t,t)
return A.ez(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eT,t,t,t),u.r,v)}}
B.bbc.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mM(new B.cZO(),new A.C(E.Xo,A.v(A.a([A.mM(new B.cZP(),A.p(x,A.V(C.xo,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a6(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.is,x,new A.bm(0.86,1,w),s),C.dZ,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dZ,A.dp(C.nG,D.fhK,this.d,A.bk(C.aD,x,x,x,C.c,x,C.Xj,x,new A.b7(A.m(16),C.Z),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.A9,x,new A.bm(0,1,w),s),x,x,x)}}
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
if(!o||i.ma(D.mg))p=D.d1V
else{p=C.a.a0(p,"image/")||i.ma(D.OW)
n=y.O
p=p?A.a([C.cY,C.aD],n):A.a([C.aI.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a6(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gano()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.ma(D.mg))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.D(A.v(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.V(C.fF,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.ma(D.mg)))l.push(A.fHn(C.aD,!1,j,j,j,!1,j,j,new B.d_a(k),j,j,new A.b7(A.m(5),C.Z),j,j,!1,u))
x=A.V(C.nD,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mM(new B.d_b(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.WR,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.r,-1)),j,j,C.ae),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.XR.prototype={
T(){return new B.axr()},
gd7(){return this.c}}
B.axr.prototype={
a_(){this.a1()
this.xc()},
q(){B.hrY(this.e)
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
n=B.hs0(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hs_(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_7(s))
x=1
break}s.m(new B.d_8(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a8(l)
if(s.c==null){x=1
break}s.m(new B.d_9(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xc,w)},
a0f(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r3(t.c,t.d),$async$a0f)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eFO)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ag8(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0f)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0f,w)},
bTS(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ke(u,C.A,v,new B.d_5(w,t),C.fO,C.ds,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fK(t,C.A,v,new B.d_6(w),C.fO,C.ds,!0,v,!1,v,v)
else return C.bH
return A.u5(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_P(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.B6,u,u,u,v.gb1G(),u,u,u,u,"Share / save",u))
r=A.eC(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dh
else{q=v.r
if(q!=null)t=new A.C(C.ey,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c8(w,".heic")||C.a.c8(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ey,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.B6,D.f1x,v.gb1G(),A.bk(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bTS()}return A.cc(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.XO.prototype={
T(){return new B.axo(A.agW(),C.bw,C.bw)},
gd7(){return this.c}}
B.axo.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a2(w).k("fs<1>")).i1(new B.cZL(v))
x.gcKE().i1(new B.cZM(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a2(x).k("fs<1>"))}if(x==null)x=C.b_P
x.i1(new B.cZN(v))
v.xc()},
xc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r3(p.c,p.d),$async$xc)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cZE(s))
x=1
break}x=8
return A.b(s.d.Bq(0,new A.a1X(r,s.a.d.c)),$async$xc)
case 8:if(s.c==null){x=1
break}s.m(new B.cZF(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a8(n)
if(s.c==null){x=1
break}s.m(new B.cZG(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xc,w)},
Y9(){var x=0,w=A.j(y.H),v=this,u
var $async$Y9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fX(0),$async$Y9)
case 5:x=3
break
case 4:x=6
return A.b(u.i4(0),$async$Y9)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Y9,w)},
aQ5(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_P(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eC(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dh
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bA2,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.N1,C.n),o,88,o,o,o,o,o,88)
t=A.kQ(C.aD,o,o,m,0,new B.cZH(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQ5(p.w)+" / "+p.aQ5(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aD,o,o,o,o,D.eCj,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.xy:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.kl,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc1r(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cc(v,w,A.av(new A.C(C.tf,x,o),o,o,o),o,!1,!1,o,o)}}
B.OA.prototype={
T(){return new B.axu()},
gd7(){return this.c}}
B.axu.prototype={
a_(){this.a1()
this.Ol()},
Ol(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Ol=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fJz(o.c,o.d,new B.d_o(s)),$async$Ol)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_p(s))
x=1
break}s.e=r
q=O.hOy(r)
if(q==null){s.m(new B.d_q(s))
x=1
break}s.d=q
q.aM(0,s.gaXG())
x=8
return A.b(q.i0(0).cL(0,C.qw),$async$Ol)
case 8:if(s.c==null){x=1
break}s.m(new B.d_r(s))
x=9
return A.b(q.pp(0),$async$Ol)
case 9:q.rP(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a8(m)
if(s.c==null){x=1
break}s.m(new B.d_s(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ol,w)},
c6T(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_t(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ca(0,x.gaXG())
w=x.d
if(w!=null)w.q()
B.hYe(x.e)
x.a2()},
ac0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ac0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXO(u.c,u.d),$async$ac0)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ac0,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_P(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eC(A.a([A.aH(t,t,t,t,C.ou,t,t,t,u.gc1l(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dh
else{q=u.r
if(q!=null)s=new A.C(C.ey,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agq(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.a9,C.q,A.a([new A.zy(s,t),A.aE(t,A.Ct(A.p(t,A.V(q?H.xy:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.c0,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_v(u),t,t,t,t,t,t,!1,C.aa)],o),t),t)}else s=C.bH}}return A.cc(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.XT.prototype={
T(){return new B.axs(new A.cq(null,y.A))}}
B.axs.prototype={
gcxh(){var x,w,v=this.a
if(v.e!==D.Qe)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcwZ(){var x,w,v=this.a
if(v.e!==D.ys)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcxh()
if(x!=null){v.Pn(x)
v.e=A.dF(R.El,new B.d_k(v,x))}w=v.gcwZ()
if(w!=null){v.Pm(w)
v.f=A.dF(C.hd,new B.d_l(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
Pm(d){return this.cdR(d)},
cdR(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Pm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anB(d),$async$Pm)
case 3:t=f
x=4
return A.b(B.c5h(d),$async$Pm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_c(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Pm,w)},
Pn(d){return this.cdS(d)},
cdS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fxp(d),$async$Pn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.byJ(t),$async$Pn)
case 4:if(u.c==null){x=1
break}u.m(new B.d_d(u))
u.c.I(y.q).f.R(D.aLL)
case 1:return A.h(v,w)}})
return A.i($async$Pn,w)},
gbYL(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc1m(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a01(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cd()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eIS)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).ci(A.eo(new B.d_e(),!1,null,y.N)),$async$a01)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.byJ(s),$async$a01)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aLL)
case 1:return A.h(v,w)}})
return A.i($async$a01,w)},
a7U(d){return this.bE5(d)},
bE5(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7U=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fA(C.d.aH(t,", "))),$async$a7U)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7U,w)},
abZ(d){return this.bDQ(d)},
bDQ(d){var x=0,w=A.j(y.H),v=this
var $async$abZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fA(v.a.c)),$async$abZ)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eGg)
return A.h(null,w)}})
return A.i($async$abZ,w)},
a_X(d){return this.ckD(d)},
ckD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amF(s.d,4),$async$a_X)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.ry(r,"ngmy_doc_share_qr.png"),$async$a_X)
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
return A.i($async$a_X,w)},
gaTd(){var x,w=this.a
if(w.e!==D.GL)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a7R(d){return this.bDZ(d)},
bDZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7R=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaTd()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a7R)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eHS)
case 1:return A.h(v,w)}})
return A.i($async$a7R,w)},
ac_(){var x=0,w=A.j(y.H),v=this,u
var $async$ac_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.TO(),$async$ac_)
case 2:u=v.c
if(u!=null)A.a4(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ac_,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_P(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.GL&&i!==D.Qe&&i!==D.ys
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eC(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.GL||t===D.Qe||t===D.ys?l:A.aH(l,l,l,l,C.kK,l,l,l,m.gaVU(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pv(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbYL(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.GL){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m3,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc1m(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bK1,D.fai,new B.d_f(m,d),l)],p))}if(m.a.e===D.GL&&m.gaTd()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hb(D.bGF,D.f78,new B.d_g(m,d),l)],p))
if(m.a.e===D.ys){x=(m.w?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Dk:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m3,l,l,l)],p))}if(m.a.e===D.Qe){x=(m.r?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Dk:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m3,l,l,l),C.ac,A.dp(D.bCu,D.fdg,m.gcl0(),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.o7(i,A.cc(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(M.B5,C.SD,new B.d_h(m,d),l),1),C.aw,A.D(A.dp(C.xU,C.a6z,new B.d_i(m,d),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a5(1/0,l,A.bI(C.z_,m.gaVU(),A.bk(C.aI,l,l,l,l,C.fH,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_j(),y.C)}}
B.aaK.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ci(A.v(A.a([w,C.aO,A.p(x,A.pv(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.by,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ai)
return A.eh(A.a([A.bI(C.z0,new B.cZD(d),x)],u),x,x,C.mx,v,x,x,x,x,D.f0y,x)}}
B.XN.prototype={
T(){return new B.axn(A.yG(C.wN,C.ne,C.tB))}}
B.axn.prototype={
q(){this.d.q()
this.a2()},
auG(d){var x,w,v,u,t
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
return A.cc(A.eC(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.f7B,x,x,x,1,x,!0),C.w,A.yF(this.d,C.bQ,this.gauF()),x,!1,!1,x,x)}}
B.XU.prototype={
T(){return new B.axt(A.yG(C.wN,C.ne,C.tB))},
gd7(){return this.c}}
B.axt.prototype={
bUV(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
adR(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$adR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.R3("text/plain"),$async$adR)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eIM)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$adR,w)},
a8F(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a8F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hdv(p,!0),$async$a8F)
case 3:t=e
p=t==null
s=B.a5F(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eFo)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
q(){this.d.q()
this.a2()},
auG(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bUV(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ako,v,v,v,w.gbJk(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_a,v,v,v,w.gcbd(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eC(A.a([u,t,A.aH(v,v,v,v,A.V(w.f?C.qH:P.Mj,v,v,v,v,v),v,v,v,new B.d_n(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fe2,v,v,v,1,v,!0)
u=A.yF(w.d,C.bQ,w.gauF())
x=A.m(20)
return A.cc(t,C.w,new A.an(C.W,v,C.a9,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e3k],s),v),v,!1,!1,v,v)}}
B.bbd.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oc
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oc:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Xu,A.A(A.a([u,C.bd,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ed,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ae)}}
B.a80.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.Ns.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.VX.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.Nr.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Eg.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgb.prototype={}
B.Ef.prototype={}
B.a8_.prototype={}
B.arS.prototype={}
B.VY.prototype={}
var z=a.updateTypes(["ax<~>()","R(je)","n(je)","TF(X)","~()","XQ(X)","H(H,je)","OA(X)","~(lN)","cn(Ef)","ax<je?>(@)","TD(X)","TH(X)","C(je)","je(@)","a3<n,@>(je)","XP(X)","TE(X)","XR(X)","XO(X)","XT(X)","aaK(X)","ak<je>()","XU(X)","aaM(X,H)","XN(X)","a3<n,aC>(je)","cn(VX)","cn(a8_)","ax<cn>(Ef)"])
B.cg7.prototype={
$1(d){var x=this.a
x.x=D.aJ3
x.y.J(0,D.aJ3)},
$S:70}
B.cg8.prototype={
$1(d){var x=this.a
x.x=D.aJ2
x.y.J(0,D.aJ2)},
$S:70}
B.cg9.prototype={
$1(d){var x=this.a
x.afa(A.aN0(d.data)).bz(new B.cg6(x),y.b)},
$S:70}
B.cg6.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cga.prototype={
$1(d){},
$S:70}
B.cgd.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hwI(d.channel))},
$S:15}
B.cge.prototype={
$1(d){},
$S:15}
B.cgf.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hPz(w.iceConnectionState)
x.cx=w
if($.fS9())switch(w.a){case 0:x.cy=D.aJ8
break
case 1:x.cy=D.aJ9
break
case 3:x.cy=D.aJa
break
case 5:x.cy=D.aJ6
break
case 6:x.cy=D.aJ7
break
case 7:x.cy=D.a4f
break
default:break}},
$S:147}
B.cgg.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hPA(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:147}
B.cgh.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hZJ(w.signalingState)},
$S:147}
B.cgi.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hXY(w.connectionState)},
$S:147}
B.cgj.prototype={
$1(d){},
$S:147}
B.cgk.prototype={
$1(d){},
$S:15}
B.fbh.prototype={
$1(d){var x=y.F.a(new A.ro([],[]).pc(d.target.result,!1)),w=C.wO.t(x.objectStoreNames,"blobs")
if(!w)C.wK.JM(x,"blobs")},
$S:184}
B.fwR.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vf.f4(this.b)
$.eP.m5()
this.c.$1(d)},
$S:399}
B.fwT.prototype={
$1(d){return this.a.$1(B.hFx(this.b,this.c))},
$S:34}
B.fwS.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fwQ.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fx5.prototype={
$1(d){var x=this
return B.h3a(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fx6.prototype={
$1(d){var x=this
return B.h3a(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fcC.prototype={
$1(d){var x=this
return B.c4T(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cZW.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cZT.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4T(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cZV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4T(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cZU.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4T(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cZY.prototype={
$4(d,e,f,g){var x=null
return A.jy(A.A(A.a([A.aH(x,x,x,x,D.bB7,x,x,x,new B.cZX(d),x,x,x,x,x,x),A.D(A.E1(D.OH,!0,x,C.Ze,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.OH,x,g,C.agj,0,e,f)},
$C:"$4",
$R:4,
$S:385}
B.cZX.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.feB.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.bha,C.f,v,v,D.aWt,v,v,v,v,D.aga,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bFd,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.Ex,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.akD,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.D(A.dW(C.dd,new B.fez(d),v),1),C.aw,A.D(A.bI(D.f6b,new B.feA(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.WO,v,v,v,v),v)},
$S:60}
B.fez.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.feA.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eGv)
return}x=w.b.a.a
A.a4(w.c,!1).N(new B.aA_(v,x))},
$S:0}
B.ff4.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bh0,C.f,w,w,D.aXQ,w,w,w,w,D.aga,w,w,1/0),new A.C(C.Ex,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fOp(u,"Organization name",C.EZ,w),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fOp(u,"Access code",C.mR,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fOp(u,"Member password",N.Fw,w),C.y,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bI(D.fe6,new B.ff3(r,q,p,d),A.bk(C.aD,w,w,w,w,C.fH,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.WO,w,w,w,w),w)},
$S:60}
B.ff3.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eGA)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).N(new B.aDa(u,x,w))},
$S:0}
B.c4K.prototype={
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
return A.b(A.uV(p,null).cL(0,C.Ww),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.co(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.AX(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c4Q.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4R.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c4S.prototype={
$1(d){return d.b},
$S:z+2}
B.c4M.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4N.prototype={
$1(d){return d.b},
$S:z+2}
B.c4L.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:12}
B.c4O.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c4P.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fx3.prototype={
$1(d){return new B.TD(this.a,null)},
$S:z+11}
B.fx4.prototype={
$1(d){return new B.TH(this.a,this.b,this.c,null)},
$S:z+12}
B.dKL.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dLU.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dLV.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dLW.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dLT(x,d))},
$S:2}
B.dLT.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dLX.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dLY.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dLZ.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dM_.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dM0.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dM1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dM4.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:108}
B.dM2.prototype={
$1(d){var x=this.a
return x.f?null:x.Y8()},
$S:2}
B.dM3.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ma(D.OW))s=C.tr
else s=C.a.a0(s,"video/")||d.ma(D.mg)?C.pA:D.aj6
x=this.b.a
w=y.p
return new A.C(C.kA,A.A(A.a([A.p(v,A.V(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gano(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dKM.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dKN.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c4U.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:90}
B.c4V.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:90}
B.fxH.prototype={
$2(d,e){return e===this.a},
$S:299}
B.f8u.prototype={
$1(d){return J.k(d)},
$S:17}
B.fcO.prototype={
$1(d){var x=this.b
B.hDz(C.EM.ga4t(this.a)).bz(x.gcAe(x),y.H)},
$S:118}
B.fcP.prototype={
$1(d){return this.a.d1(0,null)},
$S:118}
B.fcQ.prototype={
$0(){return null},
$S:11}
B.c58.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fcR.prototype={
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
B.fgM.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fbv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fbw.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5d.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mg)},
$S:z+1}
B.fBK.prototype={
$1(d){return new B.XP(this.a,null)},
$S:z+16}
B.cZS.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fD()},
$S:8}
B.cZQ.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).N(x)
return null},
$S:2}
B.cZR.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.dLS.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_8()},
$S:14}
B.dLf.prototype={
$0(){var x=J.bBS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLg.prototype={
$0(){var x=J.bBS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dKP.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dKO(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBk(this.c)}},
$S:0}
B.dKO.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dKQ.prototype={
$0(){var x=J.bBS(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dKV.prototype={
$0(){var x=this.a,w=C.d.bf(x.d,new B.dKU(this.b))
if(w>=0){x=x.d
x[w]=x[w].aBk(this.c)}},
$S:0}
B.dKU.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLG.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dLH.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLc.prototype={
$1(d){return new B.TE(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dL9.prototype={
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
return A.b(r.tb(),$async$$0)
case 5:s=J.a7(t)
x=s.gck(t)?6:7
break
case 6:x=8
return A.b(r.a_j(s.gM(t)),$async$$0)
case 8:case 7:r.hQ(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKT.prototype={
$1(d){this.a.a9Z(d,"No files selected.","Added")},
$S:399}
B.dLk.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dLj(),A.T(x).k("J<1,n>")))},
$S:0}
B.dLj.prototype={
$1(d){return d.a},
$S:z+2}
B.dKZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wH.c3().cMC(C.Yk,!0),$async$$0)
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
return A.b(o.tb(),$async$$0)
case 9:o.hQ("Imported "+J.ab(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dLD.prototype={
$1(d){return new B.OA(this.a.a.c,this.b,null)},
$S:z+7}
B.dLE.prototype={
$1(d){return new B.XR(this.a.a.c,this.b,null)},
$S:z+18}
B.dLF.prototype={
$1(d){return new B.XO(this.a.a.c,this.b,null)},
$S:z+19}
B.dLa.prototype={
$1(d){return new B.OA(this.a.a.c,this.b,null)},
$S:z+7}
B.dLb.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dLw.prototype={
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
return A.b(p.ch6(),$async$$0)
case 5:x=6
return A.b(p.tb(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dLs(p),r),new B.dLt(),r.k("J<aj.E,n>")).bY(0,new B.dLu())
q=A.B(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).ci(A.eo(new B.dLv(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oO(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.TO(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLs.prototype={
$1(d){var x=this.a,w=C.d.bf(x.d,new B.dLr(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dLr.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLt.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dLu.prototype={
$1(d){return d.length!==0},
$S:3}
B.dLv.prototype={
$1(d){var x=this.a
return new B.XT(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dLx.prototype={
$1(d){return d.a},
$S:z+2}
B.dLy.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLq.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kz,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gano(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ma(D.mg)?C.tt:C.oq
p=!x||p.ma(D.mg)?"Play video":"View"
return A.bX(A.bq(!0,new A.C(C.Am,A.v(A.a([q,o,t,C.ay,B.XS(!1,u,!1,w,p,new B.dLl(d),v),B.XS(!1,u,!1,C.j9,"Share via QR",new B.dLm(d),"Letters/numbers QR code"),B.XS(!1,u,!1,D.Zk,"Send to their Code",new B.dLn(d),"Enter someone else's personal code"),B.XS(!1,u,!1,C.hw,"Download / save",new B.dLo(d),v),C.ao,B.XS(!1,u,!0,C.e9,"Delete",new B.dLp(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.bU(new A.aA(r,1,C.r,-1),C.Z,C.Z,C.Z),C.kr,v,v,C.n),C.be)},
$S:699}
B.dLl.prototype={
$0(){A.a4(this.a,!1).N("view")
return null},
$S:0}
B.dLm.prototype={
$0(){A.a4(this.a,!1).N("qr")
return null},
$S:0}
B.dLn.prototype={
$0(){A.a4(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dLo.prototype={
$0(){A.a4(this.a,!1).N("save")
return null},
$S:0}
B.dLp.prototype={
$0(){A.a4(this.a,!1).N("delete")
return null},
$S:0}
B.dKW.prototype={
$1(d){return d.a},
$S:z+2}
B.dKX.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dKY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5J(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FG(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oO(s.c,s.f),$async$$0)
case 4:u.hQ(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKS.prototype={
$1(d){var x=this.a
x.tc(new B.dKR(x,d,this.b),"Preparing\u2026")},
$S:399}
B.dKR.prototype={
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
return A.b(B.bAO(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hQ("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLd.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLe.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fJC(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dL7.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FC(new B.dL3(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hQ("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dL4(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dL5(s))
case 5:x=8
return A.b(r.b.i5(0,C.Eh,new B.dL6()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gal(t)){s.hQ("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tb(),$async$$0)
case 9:s.hQ("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dL3.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dL0(x,d,e))},
$S:126}
B.dL0.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dL4.prototype={
$1(d){return new B.aaK(this.a.a,null)},
$S:z+21}
B.dL5.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dL6.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dL8.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Hx(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5x(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aXS(B.Hx(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anA(new B.dL1(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fJB(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hQ(q)
x=1
break}x=10
return A.b(s.tb(),$async$$0)
case 10:o=J.cD(r)
p=o.eG(r,new B.dL2()).gM(0)
s.hQ(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dL1.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dL_(x,d,e))},
$S:126}
B.dL_.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dL2.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mg)},
$S:z+1}
B.dLi.prototype={
$1(d){return new B.XU(this.a.a.c,null)},
$S:z+23}
B.dLh.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aXO(u.a.c,v.b),$async$$0)
case 2:t.hQ(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLC.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.bX(A.bq(!0,new A.C(C.Am,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kz,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.XS(!0,w,!1,C.mR,"My Code",new B.dLz(d),"Your personal code & QR \u2014 others send docs to you"),B.XS(!1,w,!1,D.Zk,"Send to their Code",new B.dLA(this.a,d),"Enter someone else's 5-digit code + letter"),B.XS(!1,w,!1,S.xJ,"Import backup",new B.dLB(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.bU(new A.aA(t,1,C.r,-1),C.Z,C.Z,C.Z),C.kr,x,x,C.n),C.be)},
$S:699}
B.dLz.prototype={
$0(){A.a4(this.a,!1).N("my_code")
return null},
$S:0}
B.dLA.prototype={
$0(){A.a4(this.b,!1).N(null)
this.a.by6()},
$S:0}
B.dLB.prototype={
$0(){A.a4(this.a,!1).N("import")
return null},
$S:0}
B.dLP.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HG(D.OH,x,C.Ze,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gK(D.OH).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:669}
B.dLN.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.dLO.prototype={
$0(){this.a.ag8()
return null},
$S:0}
B.dLQ.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*10)),e)},
$S:108}
B.dLR.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aaM(e,w,v,this.b,x.e,x.c1n(w),new B.dLJ(x,w),new B.dLK(x,v,w),new B.dLL(x,w),new B.dLM(x,w),null)},
$S:z+24}
B.dLJ.prototype={
$0(){this.a.ado(this.b)
return null},
$S:0}
B.dLK.prototype={
$0(){var x=this.a
return x.m(new B.dLI(x,this.b,this.c))},
$S:0}
B.dLI.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dLL.prototype={
$0(){this.a.MQ(this.b)
return null},
$S:0}
B.dLM.prototype={
$0(){this.a.afW(this.b)
return null},
$S:0}
B.cZO.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*18)),e)},
$S:108}
B.cZP.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:135}
B.d_b.prototype={
$3(d,e,f){return A.db(A.dT(f,new A.u(0,(1-e)*14)),e)},
$S:108}
B.d_a.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_7.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_8.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_5.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fK(w,C.A,x,new B.d_3(this.a),C.fO,C.ds,!0,x,!1,x,x)
$.aU.x1$.push(new B.d_4(this.a))
return C.bH},
$S:136}
B.d_3.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_1(this.a))
return C.bH},
$S:186}
B.d_1.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cZZ(x))},
$S:8}
B.cZZ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_4.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_0(x))},
$S:8}
B.d_0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_6.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d_2(this.a))
return C.bH},
$S:186}
B.d_2.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d__(x))},
$S:8}
B.d__.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cZL.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZK(x,d))},
$S:1740}
B.cZK.prototype={
$0(){return this.a.f=this.b===C.tX},
$S:0}
B.cZM.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZJ(x,d))},
$S:8}
B.cZJ.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cZN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cZI(x,d))},
$S:8}
B.cZI.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cZE.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cZF.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cZG.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cZH.prototype={
$1(d){return this.a.d.LR(0,A.dA(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_o.prototype={
$0(){var x=this.a.a
return B.r3(x.c,x.d)},
$S:1741}
B.d_p.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_r.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_t.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_v.prototype={
$0(){var x=this.a
x.m(new B.d_u(x))},
$S:0}
B.d_u.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fX(0)
else x.pp(0)},
$S:0}
B.d_k.prototype={
$1(d){return this.a.Pn(this.b)},
$S:14}
B.d_l.prototype={
$1(d){return this.a.Pm(this.b)},
$S:14}
B.d_c.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_d.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_e.prototype={
$1(d){return D.fxS},
$S:z+25}
B.d_j.prototype={
$2(d,e){if(d)B.TO()},
$S:120}
B.d_f.prototype={
$0(){return this.a.a7U(this.b)},
$S:0}
B.d_g.prototype={
$0(){return this.a.a7R(this.b)},
$S:0}
B.d_h.prototype={
$0(){return this.a.abZ(this.b)},
$S:0}
B.d_i.prototype={
$0(){return this.a.a_X(this.b)},
$S:0}
B.cZD.prototype={
$0(){A.a4(this.a,!1).N(null)
return null},
$S:0}
B.d_n.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pt(),$async$$0)
case 2:u.m(new B.d_m(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_m.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5f.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ma(D.mg)},
$S:z+1}
B.c5g.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5e.prototype={
$2(d,e){return this.bfE(d,e)},
bfE(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
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
B.fgp.prototype={
$1(d){if(d===D.a4e&&(this.a.a.a&30)===0)this.a.fJ(0)},
$S:z+27}
B.fgq.prototype={
$0(){},
$S:11}
B.fgU.prototype={
bhc(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f5C(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fZk(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bhc(d,e)},
$S:474}
B.fgT.prototype={
$1(d){var x=this
d.b=new B.fgS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fgS.prototype={
$1(d){return this.bhb(d)},
bhb(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aXP(n,m),$async$$1)
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
return A.b(B.f5C(l,n.b,m,n.c,s.d),$async$$1)
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
x(v=B.axq.prototype,"gc8c","OZ",0)
x(v,"gc92","Id",0)
x(v,"gc8z","xl",0)
x(v=B.aBm.prototype,"gc1h","abX",0)
x(v,"gc1i","Y7",0)
x(v,"gcno","afD",0)
x(v=B.aBp.prototype,"gc1j","Y8",0)
x(v,"gcnp","a0g",0)
x(B.aBn.prototype,"gc1k","abY",0)
x(B.axp.prototype,"gc1p","c1q",4)
x(v=B.aBo.prototype,"gc8A","Ze",0)
x(v,"gcm_","cm0",4)
x(v,"gaYX","aw3",0)
x(v,"gcoS","ag2",0)
x(v,"gbJM","W7",0)
x(v,"gc1o","Dq",0)
x(B.axr.prototype,"gb1G","a0f",0)
x(B.axo.prototype,"gc1r","Y9",0)
x(v=B.axu.prototype,"gaXG","c6T",4)
x(v,"gc1l","ac0",0)
x(v=B.axs.prototype,"gcl0","a01",0)
x(v,"gaVU","ac_",0)
w(B.axn.prototype,"gauF","auG",8)
x(v=B.axt.prototype,"gcbd","adR",0)
x(v,"gbJk","a8F",0)
w(v,"gauF","auG",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgb,B.a8_,B.arS,B.aA_,B.aDa,B.je,B.aas,B.bsQ,B.Ef,B.VY])
w(B.cgc,B.cgb)
w(B.b1U,B.a8_)
x(A.i7,[B.cg7,B.cg8,B.cg9,B.cg6,B.cga,B.cgd,B.cge,B.cgf,B.cgg,B.cgh,B.cgi,B.cgj,B.cgk,B.fbh,B.fwR,B.fwT,B.fwS,B.fx5,B.fx6,B.fcC,B.cZT,B.cZV,B.cZU,B.cZY,B.feB,B.ff4,B.c4K,B.c4R,B.c4S,B.c4N,B.c4L,B.c4O,B.c4P,B.fx3,B.fx4,B.dLW,B.dM4,B.dM2,B.dM3,B.f8u,B.fcO,B.fcP,B.c58,B.fcR,B.fgM,B.fbv,B.fbw,B.c5d,B.fBK,B.cZS,B.cZQ,B.dLS,B.dKO,B.dKU,B.dLc,B.dKT,B.dLj,B.dLD,B.dLE,B.dLF,B.dLa,B.dLs,B.dLr,B.dLt,B.dLu,B.dLv,B.dLx,B.dLy,B.dLq,B.dKW,B.dKX,B.dKS,B.dLd,B.dL4,B.dL2,B.dLi,B.dLC,B.dLP,B.dLQ,B.cZO,B.cZP,B.d_b,B.d_a,B.d_5,B.d_3,B.d_1,B.d_4,B.d_6,B.d_2,B.cZL,B.cZM,B.cZN,B.cZH,B.d_k,B.d_l,B.d_e,B.c5f,B.c5g,B.fgp,B.fgT,B.fgS])
w(B.b1V,B.arS)
x(A.jq,[B.fwQ,B.cZW,B.cZX,B.fez,B.feA,B.ff3,B.dKL,B.dLU,B.dLV,B.dLT,B.dLX,B.dLY,B.dLZ,B.dM_,B.dM0,B.dM1,B.dKM,B.dKN,B.fcQ,B.cZR,B.dLf,B.dLg,B.dKP,B.dKQ,B.dKV,B.dLG,B.dLH,B.dL9,B.dLk,B.dKZ,B.dLb,B.dLw,B.dLl,B.dLm,B.dLn,B.dLo,B.dLp,B.dKY,B.dKR,B.dLe,B.dL7,B.dL0,B.dL5,B.dL6,B.dL8,B.dL_,B.dLh,B.dLz,B.dLA,B.dLB,B.dLN,B.dLO,B.dLJ,B.dLK,B.dLI,B.dLL,B.dLM,B.d_7,B.d_8,B.d_9,B.cZZ,B.d_0,B.d__,B.cZK,B.cZJ,B.cZI,B.cZE,B.cZF,B.cZG,B.d_o,B.d_p,B.d_q,B.d_r,B.d_s,B.d_t,B.d_v,B.d_u,B.d_c,B.d_d,B.d_f,B.d_g,B.d_h,B.d_i,B.cZD,B.d_n,B.d_m,B.fgq])
x(A.mq,[B.aaL,B.Mp,B.a80,B.Ns,B.VX,B.Nr,B.Eg])
x(A.ag,[B.XQ,B.TD,B.TH,B.TE,B.XP,B.TF,B.XR,B.XO,B.OA,B.XT,B.XN,B.XU])
x(A.ah,[B.axq,B.aBm,B.aBp,B.aBn,B.axp,B.aBo,B.axr,B.axo,B.axu,B.axs,B.axn,B.axt])
x(A.au,[B.abd,B.axm,B.bbc,B.aaM,B.aaK,B.bbd])
x(A.kD,[B.c4Q,B.c4M,B.c4U,B.c4V,B.fxH,B.dL3,B.dL1,B.dLR,B.d_j,B.c5e,B.fgU])
x(A.iN,[B.bgu,B.bsu])})()
A.kj(b.typeUniverse,JSON.parse('{"b1U":{"a8_":[]},"b1V":{"arS":[]},"XQ":{"ag":[],"r":[]},"axq":{"ah":["XQ"]},"abd":{"au":[],"r":[]},"TD":{"ag":[],"r":[]},"TH":{"ag":[],"r":[]},"aBm":{"ah":["TD"]},"aBp":{"ah":["TH"]},"bgu":{"iN":[]},"TE":{"ag":[],"r":[]},"aBn":{"ah":["TE"]},"XP":{"ag":[],"r":[]},"TF":{"ag":[],"r":[]},"aaM":{"au":[],"r":[]},"XR":{"ag":[],"r":[]},"XO":{"ag":[],"r":[]},"OA":{"ag":[],"r":[]},"XT":{"ag":[],"r":[]},"aaK":{"au":[],"r":[]},"XN":{"ag":[],"r":[]},"XU":{"ag":[],"r":[]},"axp":{"ah":["XP"]},"bsu":{"iN":[]},"aBo":{"ah":["TF"]},"axm":{"au":[],"r":[]},"bbc":{"au":[],"r":[]},"axr":{"ah":["XR"]},"axo":{"ah":["XO"]},"axu":{"ah":["OA"]},"axs":{"ah":["XT"]},"axn":{"ah":["XN"]},"axt":{"ah":["XU"]},"bbd":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.az
return{J:x("tO"),k:x("KV()"),m:x("br<n,n>"),F:x("qG"),g:x("ax<je?>"),x:x("ax<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a3<n,R>>"),t:x("P<a3<n,@>>"),r:x("P<je>"),w:x("P<+file,name(lm,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iN>"),a:x("P<dB>"),p:x("P<r>"),Z:x("P<H>"),G:x("bh"),A:x("cq<ah<ag>>"),n:x("ak<je>"),j:x("ak<@>"),I:x("ak<H>"),M:x("bu<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iI"),e:x("i2z"),af:x("Dv"),U:x("je"),b:x("cn"),C:x("aC"),aK:x("vG"),ab:x("Ef"),br:x("arS"),v:x("VY"),N:x("n"),X:x("bm<O>"),Q:x("lx"),D:x("dB"),aw:x("cz<n>"),cd:x("a1<a3<n,@>>"),c7:x("r"),ch:x("bQ<ak<je>>"),aW:x("bQ<dB?>"),aY:x("bQ<~>"),cx:x("aaL"),b1:x("bg<ak<je>>"),cf:x("bg<dB?>"),d4:x("bg<~>"),c4:x("aA_"),bG:x("aDa"),q:x("mO"),B:x("p5<Ef>"),c6:x("p5<a80>"),y:x("R"),i:x("O"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ak<je>?"),aL:x("ak<@>?"),h:x("a3<n,@>?"),l:x("je?"),R:x("aC?"),c:x("VY?"),d:x("+answerQr,transfer(n,ax<ak<je>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Mp,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dB?"),cm:x("aas?"),bk:x("aA_?"),ag:x("aDa?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aUS=new A.aA(C.aD,2,C.r,-1)
D.bNA=new A.a6(C.a3,C.a7,C.x,C.a0e,null,null)
D.aWt=new A.o(null,null,null,C.lO,null,D.bNA,C.n)
D.aXQ=new A.o(null,null,null,C.lO,null,E.FJ,C.n)
D.aag=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abl=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ac8=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ady=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f1q=new A.x("Your team portal",null,C.dI,null,null,null,null,null,null,null,null,null)
D.feZ=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.I6,null,null,null,null,null,null,null,null,null)
D.cVw=x([D.f1q,C.ao,D.feZ],y.p)
D.bgS=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.cVw,null)
D.fj2=new A.x("Create your organization",null,C.hm,null,null,null,null,null,null,null,null,null)
D.f5t=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.I6,null,null,null,null,null,null,null,null,null)
D.d8P=x([D.fj2,C.ao,D.f5t],y.p)
D.bh0=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.d8P,null)
D.ffz=new A.x("Team Member sign-in",null,C.hm,null,null,null,null,null,null,null,null,null)
D.f95=new A.x("Enter the access code and password from your organization.",null,G.I6,null,null,null,null,null,null,null,null,null)
D.d6R=x([D.ffz,C.ao,D.f95],y.p)
D.bha=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.d6R,null)
D.bmQ=new A.N(16,10,16,28)
D.bmY=new A.N(16,14,16,4)
D.boa=new A.N(20,0,20,16)
D.boG=new A.N(20,8,20,16)
D.aga=new A.N(24,22,24,20)
D.Zk=new A.a_(63394,"MaterialIcons",!1)
D.aj6=new A.a_(63515,"MaterialIcons",!1)
D.bz2=new A.a_(983813,"MaterialIcons",!1)
D.bwk=new A.a_(62867,"MaterialIcons",!1)
D.bA2=new A.ae(D.bwk,44,C.c,null,null,null)
D.bB7=new A.ae(C.qD,null,C.ad,null,null,null)
D.bCu=new A.ae(C.iO,18,null,null,null,null)
D.bE9=new A.ae(D.Zk,26,C.c,null,null,null)
D.bEF=new A.ae(C.Fo,null,null,null,null,null)
D.bFd=new A.ae(C.xL,null,null,null,null,null)
D.bGl=new A.ae(W.Mx,null,null,null,null,null)
D.bGF=new A.ae(C.hg,16,null,null,null,null)
D.bK1=new A.ae(C.qL,16,null,null,null,null)
D.bAk=new A.ae(C.mR,null,null,null,null,null)
D.bKS=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bAk,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFL=new A.ae(C.EZ,null,null,null,null,null)
D.bKX=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFL,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bAF=new A.ae(N.Fw,null,null,null,null,null)
D.bL7=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bAF,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cx1=x([C.f6,C.aZ,C.aD],y.O)
D.bPp=new A.a6(C.ax,C.aC,C.x,D.cx1,null,null)
D.cwx=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.OH=x([C.f6,C.aD],y.O)
D.OW=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mg=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d1V=x([C.p6,C.aD],y.O)
D.dTb={iceServers:0}
D.aDJ={urls:0}
D.dcp=new A.br(D.aDJ,["stun:stun.l.google.com:19302"],y.m)
D.dco=new A.br(D.aDJ,["stun:stun1.l.google.com:19302"],y.m)
D.cMr=x([D.dcp,D.dco],A.az("P<a3<n,n>>"))
D.dbK=new A.br(D.dTb,[D.cMr],A.az("br<n,@>"))
D.GL=new B.Mp(0,"lanDirect")
D.Qd=new B.Mp(1,"cloudStash")
D.dne=new B.Mp(2,"inlineInstant")
D.Qe=new B.Mp(3,"webrtcLink")
D.ys=new B.Mp(4,"videoCloud")
D.feY=new A.x("Receive file",null,C.n5,null,null,null,null,null,null,null,null,null)
D.cmH=x([E.akM,C.ab,D.feY],y.p)
D.eyn=new A.cs(C.aX,C.b9,C.j,C.m,null,C.p,null,0,D.cmH,null)
D.dYO=new A.C(C.ce,D.eyn,null)
D.eTP=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a0S,null,null,null)
D.f1Y=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eTP,null,C.L,null,null,null,null,null,null,null)
D.dY4=new A.C(C.As,D.f1Y,null)
D.b10=new A.ct(C.A,null,null,D.dY4,null)
D.e3k=new A.cJ(0,null,0,28,null,null,D.b10,null)
D.e3C=new B.a80(0,"RTCDataChannelConnecting")
D.aJ2=new B.a80(1,"RTCDataChannelOpen")
D.aJ3=new B.a80(3,"RTCDataChannelClosed")
D.e3D=new B.Eg(0,"RTCIceConnectionStateNew")
D.e3E=new B.Eg(1,"RTCIceConnectionStateChecking")
D.e3F=new B.Eg(2,"RTCIceConnectionStateCompleted")
D.e3G=new B.Eg(3,"RTCIceConnectionStateConnected")
D.e3H=new B.Eg(4,"RTCIceConnectionStateCount")
D.e3I=new B.Eg(5,"RTCIceConnectionStateFailed")
D.e3J=new B.Eg(6,"RTCIceConnectionStateDisconnected")
D.aJ4=new B.Eg(7,"RTCIceConnectionStateClosed")
D.aJ5=new B.VX(0,"RTCIceGatheringStateNew")
D.e3K=new B.VX(1,"RTCIceGatheringStateGathering")
D.a4e=new B.VX(2,"RTCIceGatheringStateComplete")
D.a4f=new B.Nr(0,"RTCPeerConnectionStateClosed")
D.aJ6=new B.Nr(1,"RTCPeerConnectionStateFailed")
D.aJ7=new B.Nr(2,"RTCPeerConnectionStateDisconnected")
D.aJ8=new B.Nr(3,"RTCPeerConnectionStateNew")
D.aJ9=new B.Nr(4,"RTCPeerConnectionStateConnecting")
D.aJa=new B.Nr(5,"RTCPeerConnectionStateConnected")
D.e3L=new B.Ns(0,"RTCSignalingStateStable")
D.e3M=new B.Ns(1,"RTCSignalingStateHaveLocalOffer")
D.e3N=new B.Ns(2,"RTCSignalingStateHaveRemoteOffer")
D.e3O=new B.Ns(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e3P=new B.Ns(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJb=new B.Ns(5,"RTCSignalingStateClosed")
D.eCj=new A.at(160,48)
D.b29=new A.fh(2,null,null,null,null,C.aD,null,null,null,null)
D.eDN=new A.a5(16,16,D.b29,null)
D.f4V=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eFe=new A.b1(D.f4V,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fc_=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eFh=new A.b1(D.fc_,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fk3=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eFo=new A.b1(D.fk3,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f4y=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eFO=new A.b1(D.f4y,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.ffI=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aLL=new A.b1(D.ffI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fh_=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eGg=new A.b1(D.fh_,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.flo=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eGv=new A.b1(D.flo,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjv=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eGA=new A.b1(D.fjv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fkF=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eHl=new A.b1(D.fkF,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f3g=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eHS=new A.b1(D.f3g,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fdJ=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eIc=new A.b1(D.fdJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f6Z=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eII=new A.b1(D.f6Z,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.flu=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eIM=new A.b1(D.flu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f3w=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eIS=new A.b1(D.f3w,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f2h=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eJ6=new A.b1(D.f2h,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f_k=new A.x("NGMY DOC SHARE",null,C.aN0,null,null,null,null,null,null,null,null,null)
D.f0y=new A.x("Show this to sender",null,C.kn,null,null,null,null,null,null,null,null,null)
D.f1x=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f5R=new A.x("Organization settings",null,C.ct,null,null,null,null,null,null,null,null,null)
D.f6b=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.f78=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.f7B=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fai=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fcY=new A.x("Send to their Doc Share",null,C.n4,null,null,null,null,null,null,null,null,null)
D.fdg=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fdy=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fe2=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fe6=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fet=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eT,null,null,null,null,null,null,null,null,null)
D.fhr=new A.x("Share files & videos\nwith a scan.",null,C.aN1,null,null,null,null,null,null,null,null,null)
D.fhK=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fxS=new B.XN(null)
D.a7m=new B.aaL(0,"docShare")
D.a7n=new B.aaL(1,"gate")
D.T7=new B.aaL(2,"gateNoIndividual")})();(function staticFields(){$.aLO=null
$.f3q=function(){var x=y.N
return A.U(x,x)}()
$.Fp=A.U(y.N,y.D)
$.aeJ=A.U(y.N,A.az("lm"))
$.PR=A.U(y.N,y.D)
$.f3Y=A.U(y.N,A.az("aas"))
$.c57=A.U(y.S,A.az("bsQ"))
$.fZj=1
$.hLo=null
$.hLn=null
$.hD_=null
$.fOB=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i33","hfm",()=>new B.cgc())
x($,"i0Z","fS9",()=>C.a.t(A.bs(A.bs(A.bs(A.G_(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["B7GC2RpbNAwPRkA8wII5YSnTAj0="]=a.current})($__dart_deferred_initializers__);