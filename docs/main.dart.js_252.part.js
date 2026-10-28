((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cgz:function cgz(){},
hzu(d){var x=null,w=new B.b2d(d,D.e6Z,new A.p9(x,x,y.c6),new A.p9(x,x,y.B))
w.bvd(d)
return w},
b2d:function b2d(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cgu:function cgu(d){this.a=d},
cgv:function cgv(d){this.a=d},
cgw:function cgw(d){this.a=d},
cgt:function cgt(d){this.a=d},
cgx:function cgx(d){this.a=d},
hzv(d,e){var x=y.N
x=new B.b2e(d,e,A.V(x,y.e),A.V(x,y.z))
x.bve(d,e)
return x},
b2e:function b2e(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgA:function cgA(d){this.a=d},
cgB:function cgB(d){this.a=d},
cgC:function cgC(d){this.a=d},
cgD:function cgD(d){this.a=d},
cgE:function cgE(d){this.a=d},
cgF:function cgF(d){this.a=d},
cgG:function cgG(d){this.a=d},
cgH:function cgH(d){this.a=d},
fR1(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.y9.Lh(x,"ngmy_doc_share_v1",new B.fdL(),1)},
hG_(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cp(d))
if(y.J.b(d))return new Uint8Array(A.cp(J.eW(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cp(A.BH(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cp(d))
if(typeof d=="string")try{x=C.cB.aI(d)
return x}catch(w){return v}return v},
Qf(d,e){return B.hV6(d,e)},
hV6(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qf=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aM2
x=7
return A.b(o==null?$.aM2=B.fR1():o,$async$Qf)
case 7:s=g
r=new Uint8Array(A.cp(e))
q=J.mv(s,"blobs","readwrite")
C.iz.m2(J.mt(q,"blobs"),r,d)
x=8
return A.b(J.pi(q),$async$Qf)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$Qf,w)},
Qe(d){return B.hV5(d)},
hV5(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aM2
x=7
return A.b(o==null?$.aM2=B.fR1():o,$async$Qe)
case 7:s=f
r=J.mv(s,"blobs","readonly")
x=8
return A.b(C.iz.z7(J.mt(r,"blobs"),d),$async$Qe)
case 8:q=f
x=9
return A.b(J.pi(r),$async$Qe)
case 9:o=B.hG_(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$Qe,w)},
afF(d){return B.hV4(d)},
hV4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aM2
x=7
return A.b(p==null?$.aM2=B.fR1():p,$async$afF)
case 7:s=f
r=J.mv(s,"blobs","readwrite")
C.iz.Fe(J.mt(r,"blobs"),d)
x=8
return A.b(J.pi(r),$async$afF)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afF,w)},
fdL:function fdL(){},
hIk(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmw(w,v))}return u},
hfz(d,e){var x,w={},v=A.aUl("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fzy(w,v,e)
C.vq.xZ(v,"change",new B.fzA(w,v,!1))
C.vq.xZ(v,"cancel",new B.fzz(w))
$.eQ.mb()
v.click()
A.bN(C.aeQ,new B.fzx(w),y.H)},
fzy:function fzy(d,e,f){this.a=d
this.b=e
this.c=f},
fzA:function fzA(d,e,f){this.a=d
this.b=e
this.c=f},
fzz:function fzz(d){this.a=d},
fzx:function fzx(d){this.a=d},
Ct(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ct=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdc()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSO()?3:4
break
case 3:x=5
return A.b(B.haL(e,d,s,!0,!1,f,g,h,!1,i),$async$Ct)
case 5:x=1
break
case 4:x=6
return A.b(B.PU(d,s,f,g,h,i),$async$Ct)
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
return A.b(B.HK(s,d),$async$Ct)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f9c(s,d),$async$Ct)
case 14:x=12
return A.b(r.haL(q,p,o,n,m,l,k,j,a1,i),$async$Ct)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).ce(A.ej(new B.fzN(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).ce(A.ej(new B.fzO(s,i,d,f,g,h),!1,null,y.H)),$async$Ct)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ct,w)},
PU(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aY_(e),$async$PU)
case 3:u=k
x=4
return A.b(B.anF(d,e,!1),$async$PU)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HK(e,d),$async$PU)
case 7:if(k){v=D.a7L
x=1
break}x=8
return A.b(B.TS(e),$async$PU)
case 8:v=t?D.Tu:D.a7M
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXY(d,e)){v=D.a7L
x=1
break}x=11
return A.b(B.TS(e),$async$PU)
case 11:v=t?D.Tu:D.a7M
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fMd(d,e)){v=D.a7L
x=1
break}x=14
return A.b(B.TS(e),$async$PU)
case 14:v=D.Tu
x=1
break
case 13:v=t?D.Tu:D.a7M
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PU,w)},
f9c(d,e){var x=0,w=A.j(y.y),v
var $async$f9c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXY(e,d)){v=!1
x=1
break}x=3
return A.b(B.aY_(d),$async$f9c)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9c,w)},
haL(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).ce(A.ej(new B.ff6(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h5W(d,e,f,g,h,i,j){return new B.Y6(e,j,d,g,h,i,f,null)},
fh2(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fh2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fh5(A.N(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fh2)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fh2,w)},
fhx(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fhx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fhz(A.N(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fhx)
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
return A.i($async$fhx,w)},
fRa(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fs8(d,e){var x=0,w=A.j(y.H),v
var $async$fs8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TS(e),$async$fs8)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eH()
case 1:return A.h(v,w)}})
return A.i($async$fs8,w)},
fzN:function fzN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fzO:function fzO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ab0:function ab0(d,e){this.a=d
this.b=e},
ff6:function ff6(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y6:function Y6(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axG:function axG(){this.c=this.a=this.d=null},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_j:function d_j(d){this.a=d},
d_l:function d_l(d){this.a=d},
d_k:function d_k(d){this.a=d},
d_o:function d_o(){},
d_n:function d_n(d){this.a=d},
abs:function abs(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAe:function aAe(d,e){this.a=d
this.b=e},
aDq:function aDq(d,e,f){this.a=d
this.b=e
this.c=f},
fh5:function fh5(d,e,f){this.a=d
this.b=e
this.c=f},
fh3:function fh3(d){this.a=d},
fh4:function fh4(d,e,f){this.a=d
this.b=e
this.c=f},
fhz:function fhz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fhy:function fhy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c54(d,e,f,g,h){return B.hup(d,e,f,g,h)},
hup(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c54=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iI(r.dt(d,new B.c55(s,e,h,g,f,q),y.g),y.l),$async$c54)
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
return A.i($async$c54,w)},
aXV(d,e,f,g,h){return B.huq(d,e,f,g,h)},
huq(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXV=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asX("GET",d)
o=A.fIL()
if(o==null)o=new A.L0(A.a([],y.W))
x=7
return A.b(o.eS(0,s).cN(0,C.EC),$async$aXV)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BS(),$async$aXV)
case 8:q=j
if(J.ac(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B4(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
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
return A.i($async$aXV,w)},
aXU(d){return B.hun(d)},
hun(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXU=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cN(0,C.nC),$async$aXU)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iv(A.iu(p.e)).c8(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
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
return A.i($async$aXU,w)},
c53(d){return B.huo(d)},
huo(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c53=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cN(0,C.pn),$async$c53)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iv(A.iu(q.e)).c8(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a9(o)
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
return A.i($async$c53,w)},
c55:function c55(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jf:function jf(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HI(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
huv(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HI(C.a.b_(u,v.length))}return null},
huw(d){var x=B.HI(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hur(){var x,w=$.pf(),v=J.e0(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fU(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a5M(d){return B.hus(d)},
hus(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5M=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bG),$async$a5M)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$a5M,w)},
a5N(d,e){return B.hut(d,e)},
hut(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5N=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hA(d,e,!1,!1,C.cF,null),$async$a5N)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$a5N,w)},
B3(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$B3)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HI(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5O(r),$async$B3)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5M("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B3)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HI(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B3)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hur()
x=14
return A.b(B.a5O(m),$async$B3)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5N("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B3)
case 15:k=f
x=16
return A.b(B.a5N("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B3)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B3)
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
return A.i($async$B3,w)},
a5O(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HI(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5M("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5O)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5O,w)},
a5P(d,e,f,g){return B.hux(d,e,f,g)},
hux(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5P=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gal(d)){v=!1
x=1
break}r=B.HI(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5O(r),$async$a5P)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.c5b())>1048576||g.b8(d,new B.c5c())){v=B.DX(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a6_("myCode",d,a0),$async$a5P)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ac(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ac(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.DX(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aY2(u,g.gM(d),a0),$async$a5P)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pf().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c5d(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aXW(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5P)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5P,w)},
DX(d,e,f,g,h){return B.huu(d,e,f,g,h)},
huu(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DX=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$DX)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cH(a6,0,new B.c57())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pf().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
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
a1=B.HM(a9,q)
a0=new A.JC(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DX)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ac(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eU().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oI(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9i(a1.a,a4,"media",a1.d,a2).wD(m,n,new A.Df(!0,q.c)),$async$DX)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DX)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOv(r),$async$DX)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c58(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aXW(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DX)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOv(r),$async$DX)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DX,w)},
aXW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5M(t),$async$aXW)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c56(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5N(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXW,w)},
MA(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MA=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5M("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MA)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
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
return A.b(B.aXX(k,a0),$async$MA)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aY1(h),$async$MA)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.TZ(g,a0),$async$MA)
case 10:f=a3
if(f!=null&&J.cw(f)){m+=J.ac(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("H.E")
e=A.B(new A.a2(r,new B.c59(),q),n)
d=A.B(new A.a2(r,new B.c5a(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.db(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5N("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$MA)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MA,w)},
aXX(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
if(!r.b(p)){x=3
break}o=J.a8(p)
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
break}i=B.hYT(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cr(l,m,"Received via My Code",t,e,i),$async$aXX)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOv(s),$async$aXX)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXX,w)},
c5b:function c5b(){},
c5c:function c5c(){},
c5d:function c5d(){},
c57:function c57(){},
c58:function c58(){},
c56:function c56(){},
c59:function c59(){},
c5a:function c5a(){},
fzK(d,e){var x=0,w=A.j(y.H)
var $async$fzK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).ce(A.ej(new B.fzL(e),!1,null,y.H)),$async$fzK)
case 2:return A.h(null,w)}})
return A.i($async$fzK,w)},
bBa(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).ce(A.ej(new B.fzM(g,e,f),!1,null,y.y)),$async$bBa)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBa,w)},
fzL:function fzL(d){this.a=d},
fzM:function fzM(d,e,f){this.a=d
this.b=e
this.c=f},
TP:function TP(d,e){this.c=d
this.a=e},
aBB:function aBB(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dLs:function dLs(d,e){this.a=d
this.b=e},
TT:function TT(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBE:function aBE(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dMB:function dMB(d){this.a=d},
dMC:function dMC(d){this.a=d},
dMD:function dMD(d){this.a=d},
dMA:function dMA(d,e){this.a=d
this.b=e},
dME:function dME(d){this.a=d},
dMF:function dMF(d){this.a=d},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMI:function dMI(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d){this.a=d},
dMM:function dMM(){},
dMK:function dMK(d){this.a=d},
dML:function dML(d,e){this.a=d
this.b=e},
bgP:function bgP(){},
TQ:function TQ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBC:function aBC(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dLt:function dLt(d){this.a=d},
dLu:function dLu(d){this.a=d},
fMe(d){var x=d.hJ
if(x>=0)return C.o.O(x)
return 10},
huz(d){var x=d.kr
if(x>=0)return x
return 4.99},
huy(d){var x=d.lb,w=y.N
w=x.iP(x,new B.c5f(),w,w)
return w},
h12(d){var x=d.ks,w=y.N
w=x.iP(x,new B.c5g(),w,w)
return w},
aY_(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aY_=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aY_)
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
return A.i($async$aY_,w)},
a5R(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a5R)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a5R)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5R,w)},
TS(d){var x=0,w=A.j(y.H),v,u
var $async$TS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$TS)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TS,w)},
fMd(d,e){var x,w,v
if(B.huz(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.huy(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ca(new A.S(Date.now(),0,!1))},
aXY(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h12(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ca(new A.S(Date.now(),0,!1))},
h13(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h12(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ca(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ac())
d.ks=w},
anG(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ac(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$anG)
case 7:s=f
r=A.t(p)
r=A.f4(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$anG,w)},
anH(d){var x=0,w=A.j(y.H),v,u,t
var $async$anH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anG(d),$async$anH)
case 3:u=f
x=5
return A.b(A.aA(),$async$anH)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anH)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anH,w)},
anF(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fMe(d)
if(u<=0){v=!1
x=1
break}if(B.fMd(d,e)){v=!1
x=1
break}x=3
return A.b(B.anG(e),$async$anF)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anF,w)},
aXZ(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HK(e,d),$async$aXZ)
case 3:if(g){v=-1
x=1
break}u=B.fMe(d)
if(u<=0){v=-1
x=1
break}if(B.fMd(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anG(e),$async$aXZ)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXZ,w)},
c5i(d,e,f){var x=0,w=A.j(y.y),v
var $async$c5i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HK(e,d),$async$c5i)
case 3:if(h){v=!1
x=1
break}v=B.anF(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5i,w)},
c5h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c5h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
x=3
return A.b(B.c5i(d,u,i.gSO()),$async$c5h)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5h,w)},
a5Q(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5Q=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
if(i.gSO()){v=!0
x=1
break}if(B.aXY(d,u)){v=!0
x=1
break}x=5
return A.b(A.l8(u,C.QY),$async$a5Q)
case 5:x=k?3:4
break
case 3:B.h13(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5Q)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kL(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.QY,"Doc Share for Organizations"),$async$a5Q)
case 7:if(!k){v=!1
x=1
break}B.h13(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5Q)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Q,w)},
c5f:function c5f(){},
c5g:function c5g(){},
fAm(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fAm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fAm)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f5W.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.f5W.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAm,w)},
i04(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f5W.bn($.f5W,new B.fAo(d))},
fAo:function fAo(d){this.a=d},
f7i(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f7i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mZ(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jn,null,y.H),$async$f7i)
case 3:C.zt.f6(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eQ.mb()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7i,w)},
aev(d,e,f){var x=0,w=A.j(y.H),v
var $async$aev=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f6t.n(0,d,new B.aaI(A.bl(e,!0,v)))
x=3
return A.b(A.aA(),$async$aev)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aev)
case 2:return A.h(null,w)}})
return A.i($async$aev,w)},
aep(d){return B.hK9(d)},
hK9(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aep=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f6t.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$aep)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.faY(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaI(r)
$.f6t.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aep,w)},
PK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cp(e))
$.Fz.n(0,d,u)
x=3
return A.b(B.Qf(d,u),$async$PK)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
aMn(d){return B.hK7(d)},
hK7(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Fz.h(0,d)
if(n!=null&&!C.aG.gal(n)){v=n
x=1
break}x=3
return A.b(B.Qe(d),$async$aMn)
case 3:p=f
if(p!=null&&!C.aG.gal(p)){$.Fz.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aMn)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aI(r)
x=!J.ck(q)?9:10
break
case 9:B.PK(d,q)
x=11
return A.b(J.hJ(s,d),$async$aMn)
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
return A.i($async$aMn,w)},
hGl(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cp(J.eW(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cp(A.BH(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cp(d)),y.K)
return A.fe(null,y.K)},
a0v(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.ffi(r,t),!1,s)
A.fH(r,"error",new B.ffj(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i7(0,C.Lc,new B.ffk())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0v,w)},
aMH(d,e,f){return B.hMo(d,e,f)},
hMo(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMH=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0v(i),$async$aMH)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ac(j)
x=11
return A.b(B.Qf(o,p),$async$aMH)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ac(j)===0){x=1
break}x=12
return A.b(B.aev(k,j,s),$async$aMH)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a9(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMH,w)},
aMG(d,e,f){return B.hMn(d,e,f)},
hMn(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMG=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMH(d,e,f),$async$aMG)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0v(f),$async$aMG)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Fz.n(0,s,r)
$.Q0.n(0,s,r)
x=11
return A.b(B.PK(s,r),$async$aMG)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a9(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMG,w)},
B4(d,e,f,g,h,i){return B.huI(d,e,f,g,h,i)},
huI(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B4=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jf(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aY5(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PK(s,d),$async$B4)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$B4)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcu().aI(d)),$async$B4)
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
return A.b(B.A8(e),$async$B4)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FL(e,j),$async$B4)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B4,w)},
TU(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TU=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A8(d),$async$TU)
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
k=B.h15(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jf(m,n,k,l,j,"From folder",null,B.aY5(),null)
$.aeY.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0v(o),$async$TU)
case 7:g=a1
x=g!=null&&!C.aG.gal(g)?8:10
break
case 8:$.Fz.n(0,h,g)
$.Q0.n(0,h,g)
B.PK(h,g)
x=9
break
case 10:x=11
return A.b(B.aMG(d,m,o),$async$TU)
case 11:case 9:r.J(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FL(d,t),$async$TU)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TU,w)},
fMi(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fMi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h15(r,C.d.gam(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HL(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gal(s)){v=B.B4(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fMi,w)},
HL(d,e,f,g,h,i){return B.huH(d,e,f,g,h,i)},
huH(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HL=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JC(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HL)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.h_(n,m)
o+=J.ac(m)
case 9:if(!(J.ac(n)>=1048576)){x=10
break}l=new Uint8Array(A.cp(J.QN(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kw(0,1048576,J.ac(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qf(k,l),$async$HL)
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
return A.b(j.a9(0),$async$HL)
case 12:x=s.pop()
break
case 5:x=J.ac(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qf(k,new Uint8Array(A.cp(n))),$async$HL)
case 15:J.cf(q,k)
case 14:if(J.ac(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aev(r,q,g),$async$HL)
case 16:f=new B.jf(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aY5(),null)
x=17
return A.b(B.A8(d),$async$HL)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FL(d,e),$async$HL)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HL,w)},
TW(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TW=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aeY.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0v(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aep(s),$async$TW)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qe(u[o]),$async$TW)
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
v=A.BH(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Q0.h(0,s)
if(i==null)i=$.Fz.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.r8(d,e),$async$TW)
case 12:i=a0
if(i!=null&&!C.aG.gal(i))$.Q0.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BH(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TW,w)},
h15(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
r8(d,e){return B.huJ(d,e)},
huJ(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$r8=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Q0.h(0,f)
if(e==null)e=$.Fz.h(0,f)
if(e!=null&&!C.aG.gal(e)){v=e
x=1
break}s=$.aeY.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0v(s),$async$r8)
case 9:r=a3
if(r!=null&&!C.aG.gal(r)){$.Fz.n(0,f,r)
$.Q0.n(0,f,r)
B.PK(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a9(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aep(f),$async$r8)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awu(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qe(g[l]),$async$r8)
case 16:k=a3
if(k!=null&&!C.aG.gal(k))n.J(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.amA()
if(!C.aG.gal(r)){$.Fz.n(0,f,r)
$.Q0.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMn(f),$async$r8)
case 17:j=a3
if(j!=null&&!C.aG.gal(j)){$.Q0.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TW(a0,a1,0,g),$async$r8)
case 20:i=a3
if(i!=null&&!C.aG.gal(i)){h=new Uint8Array(A.cp(i))
$.Fz.n(0,f,h)
$.Q0.n(0,f,h)
B.PK(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$r8,w)},
huM(d){var x,w,v=$.aeY.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
huN(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
huK(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anN(d,e,f,g,h){return B.huL(d,e,f,g,h)},
huL(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anN=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aeY.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0v(s),$async$anN)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.r8(g,e),$async$anN)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ac(r)/2|0,J.ac(r))
n=$.eU().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i1(d).wD(h,r,new A.Df(!0,e.c)),$async$anN)
case 12:f.$2(J.ac(r),J.ac(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
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
return A.i($async$anN,w)},
h17(d,e,f,g,h){var x,w,v,u,t=$.h16
$.h16=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c5t.n(0,t,new B.btb(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awu(u)))
return t},
fMj(d){var x=0,w=A.j(y.H)
var $async$fMj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fMj,w)},
HM(d,e){var $async$HM=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aeY.h(0,h)
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
return A.pQ(B.TW(d,e,p,o<q?o:q),$async$HM,w)
case 8:n=a1
x=n!=null&&!C.aG.gal(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pQ(A.F7(n),$async$HM,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pQ(B.aep("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HM,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pQ(B.Qe(h[l]),$async$HM,w)
case 18:k=a1
x=k!=null&&!C.aG.gal(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pQ(A.F7(k),$async$HM,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pQ(B.r8(d,e),$async$HM,w)
case 22:j=a1
x=j!=null&&!C.aG.gal(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pQ(A.F7(A.BH(j,p,o<i?o:i)),$async$HM,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pQ(null,0,w)
case 2:return A.pQ(t.at(-1),1,w)}})
var x=0,w=A.h9E($async$HM,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hbs(w)},
aY7(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aY7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c5t.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.J(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3p(),$async$aY7)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY7,w)},
TV(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5t.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3p(),$async$TV)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aev(r.c,u,r.z),$async$TV)
case 4:t=new B.jf(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aY5(),null)
u=r.a
x=5
return A.b(B.A8(u),$async$TV)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FL(u,s),$async$TV)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TV,w)},
a5X(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5X=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5t.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afF(u[s]),$async$a5X)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5X,w)},
c5v(d,e,f){var x=0,w=A.j(y.H)
var $async$c5v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byd(d,e,f),$async$c5v)
case 2:return A.h(null,w)}})
return A.i($async$c5v,w)},
c5w(d,e,f){var x=0,w=A.j(y.H)
var $async$c5w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bye(d,e,f),$async$c5w)
case 2:return A.h(null,w)}})
return A.i($async$c5w,w)},
DY(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$DY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A8(d),$async$DY)
case 2:p=g
J.ng(p,new B.c5u(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Fz.W(0,v)
$.aeY.W(0,e)
x=3
return A.b(B.aep(v),$async$DY)
case 3:u=g
$.f6t.W(0,v)
x=4
return A.b(A.aA(),$async$DY)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$DY)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$DY)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afF(s[q]),$async$DY)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afF(v),$async$DY)
case 13:x=14
return A.b(B.FL(d,p),$async$DY)
case 14:return A.h(null,w)}})
return A.i($async$DY,w)},
aY6(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aY6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.r8(d,e),$async$aY6)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f7i(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY6,w)},
A8(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$A8)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.ffl(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A8,w)},
FL(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$FL)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fjg(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FL)
case 3:return A.h(null,w)}})
return A.i($async$FL,w)},
byd(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A8(d),$async$byd)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fdZ(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aC0(f))
x=4
return A.b(B.FL(d,u),$async$byd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byd,w)},
bye(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bye=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A8(d),$async$bye)
case 3:u=h
t=J.cE(u)
s=t.bd(u,new B.fe_(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cDy(f))
x=4
return A.b(B.FL(d,u),$async$bye)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bye,w)},
aaI:function aaI(d){this.a=d},
faY:function faY(){},
ffi:function ffi(d,e){this.a=d
this.b=e},
ffj:function ffj(d){this.a=d},
ffk:function ffk(){},
c5u:function c5u(d){this.a=d},
btb:function btb(d,e,f,g,h,i,j,k,l){var _=this
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
ffl:function ffl(){},
fjg:function fjg(){},
fdZ:function fdZ(d){this.a=d},
fe_:function fe_(d){this.a=d},
a5Y(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5Y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5z())?3:4
break
case 3:x=5
return A.b(B.aY8(d,e),$async$a5Y)
case 5:u=g
if(u!=null){t=u.c
B.MC(d,u.b,e,t)}v=u
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
return A.b(B.aY3(s),$async$a5Y)
case 10:case 9:if(g){v=new A.P7(1,D.QB,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TX(d,e),$async$a5Y)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.U1(!0,!0,d,e),$async$a5Y)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MC(d,D.yI,e,t)
v=new A.P7(p,D.yI,t)
x=1
break}v=B.c5y(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Y,w)},
TX(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6_(null,d,e),$async$TX)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ac(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aY2(p,d.length,e),$async$TX)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5w(e,C.d.gL(d).a,r.b),$async$TX)
case 7:case 6:q=r.a
x=8
return A.b(B.MC(d,D.QB,e,q),$async$TX)
case 8:v=new A.P7(d.length,D.QB,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TX,w)},
TY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mg(D.mk)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5Z(d,e),$async$TY)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5r(s,d,e,t),$async$TY)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aY3(t),$async$TY)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.r8(e,d),$async$TY)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TX(A.a([d],y.r),e),$async$TY)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TY,w)},
U_(){var x=0,w=A.j(y.H)
var $async$U_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fMc(),$async$U_)
case 2:x=3
return A.b(B.aON(),$async$U_)
case 3:return A.h(null,w)}})
return A.i($async$U_,w)},
a5Z(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aY5()
x=3
return A.b(B.c5v(e,d.a,u),$async$a5Z)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Z,w)},
MC(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$MC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QB&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b_(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5Z(p,f),$async$MC)
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
return A.b(B.c5q(o,p,u,f),$async$MC)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5r(o,p,f,t),$async$MC)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5p(o,u,p,f),$async$MC)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MC,w)},
aY8(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aY8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5x(e,d),$async$aY8)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.U1(!1,!0,d,e),$async$aY8)
case 4:u=g
if(u!=null){t=u.b
v=new A.P7(u.a,D.yI,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY8,w)},
c5x(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TW(d,s,0,1),$async$c5x)
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
return A.i($async$c5x,w)},
c5y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6_(null,d,e),$async$c5y)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h14(u)
if(t.length>800){v=null
x=1
break}v=new A.P7(d.length,D.dqB,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5y,w)},
anO(d,e,f){return B.huQ(d,e,f)},
huQ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anO=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mu(g,1)
x=B.fMh(g)?3:4
break
case 3:x=5
return A.b(B.c5s(g),$async$anO)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mu(g,13))
try{k=B.DZ(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mu(g,13))
u=9
x=12
return A.b(B.aY1(q),$async$anO)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TZ(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a9(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fMg(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.TZ(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HN(C.a.i(J.mu(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HN(C.a.i(J.mu(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cC(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HN(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.TZ(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anO,w)},
HN(d,e,f){return B.huO(d,e,f)},
huO(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HN=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b_(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b_(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aXU(r),$async$HN)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXU(A.cv(s,0,null)),$async$HN)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c54(o,r,a1,n,a2),$async$HN)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c53(q),$async$HN)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.TZ(l,a2),$async$HN)
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
k=A.a9(d)
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
return A.i($async$HN,w)},
a6_(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.r8(f,r),$async$a6_)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcu().aI(q)],t,s))
x=3
break
case 4:u=A.V(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a5().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6_,w)},
TZ(d,e){return B.huP(d,e)},
huP(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$TZ=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
if(J.ac(j)===0){x=7
break}i=C.cB.aI(j)
d=J.ac(q)!==0?q:null
x=9
return A.b(B.B4(i,a3,d,k,l,o),$async$TZ)
case 9:h=a5
if(h!=null)J.cf(n,h)
x=7
break
case 8:f=J.ac(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a9(a1)
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
return A.i($async$TZ,w)},
MB:function MB(d,e){this.a=d
this.b=e},
c5z:function c5z(){},
a05(d){var x=A.N(d).ax.a===C.H,w=x?D.acA:D.aaF,v=x?D.ae2:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.abN:C.aL
return new A.aED([w,s,v,u,t,x?C.f6:C.bT])},
hgg(d,e){var x=e?C.w.j(0.72):C.aX
return A.c9(null,x,!0,null,new B.fEq(e),d,null,!0,!0,y.N)},
c5e(d,e,f,g,h,i,j,k,l){return new B.TR(e,l,d,f,k,j,g,h,i,null)},
Y8(d,e,f,g,h,i,j){return new B.bbw(g,h,j,e,i,d,f,null)},
fEq:function fEq(d){this.a=d},
Y5:function Y5(d,e){this.c=d
this.a=e},
axF:function axF(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_i:function d_i(d){this.a=d},
d_g:function d_g(d){this.a=d},
d_h:function d_h(d){this.a=d},
bsQ:function bsQ(){},
TR:function TR(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBD:function aBD(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dMz:function dMz(d){this.a=d},
dLX:function dLX(d,e){this.a=d
this.b=e},
dLY:function dLY(d,e){this.a=d
this.b=e},
dLw:function dLw(d,e,f){this.a=d
this.b=e
this.c=f},
dLv:function dLv(d){this.a=d},
dLx:function dLx(d,e){this.a=d
this.b=e},
dLC:function dLC(d,e,f){this.a=d
this.b=e
this.c=f},
dLB:function dLB(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMo:function dMo(d){this.a=d},
dLU:function dLU(d,e,f){this.a=d
this.b=e
this.c=f},
dLR:function dLR(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLA:function dLA(d){this.a=d},
dM1:function dM1(d){this.a=d},
dM0:function dM0(){},
dLG:function dLG(d){this.a=d},
dMk:function dMk(d,e){this.a=d
this.b=e},
dMl:function dMl(d,e){this.a=d
this.b=e},
dMm:function dMm(d,e){this.a=d
this.b=e},
dLS:function dLS(d,e){this.a=d
this.b=e},
dLT:function dLT(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e){this.a=d
this.b=e},
dM9:function dM9(d){this.a=d},
dM8:function dM8(d){this.a=d},
dMa:function dMa(){},
dMb:function dMb(){},
dMc:function dMc(d,e){this.a=d
this.b=e},
dMe:function dMe(){},
dMf:function dMf(d){this.a=d},
dM7:function dM7(d,e){this.a=d
this.b=e},
dM2:function dM2(d){this.a=d},
dM3:function dM3(d){this.a=d},
dM4:function dM4(d){this.a=d},
dM5:function dM5(d){this.a=d},
dM6:function dM6(d){this.a=d},
dLD:function dLD(){},
dLE:function dLE(d){this.a=d},
dLF:function dLF(d,e){this.a=d
this.b=e},
dLz:function dLz(d,e){this.a=d
this.b=e},
dLy:function dLy(d,e,f){this.a=d
this.b=e
this.c=f},
dLV:function dLV(d){this.a=d},
dLW:function dLW(d,e,f){this.a=d
this.b=e
this.c=f},
dLP:function dLP(d,e){this.a=d
this.b=e},
dLL:function dLL(d){this.a=d},
dLI:function dLI(d,e,f){this.a=d
this.b=e
this.c=f},
dLM:function dLM(d){this.a=d},
dLN:function dLN(d){this.a=d},
dLO:function dLO(){},
dLQ:function dLQ(d,e){this.a=d
this.b=e},
dLJ:function dLJ(d){this.a=d},
dLH:function dLH(d,e,f){this.a=d
this.b=e
this.c=f},
dLK:function dLK(){},
dM_:function dM_(d){this.a=d},
dLZ:function dLZ(d,e){this.a=d
this.b=e},
dMj:function dMj(d,e){this.a=d
this.b=e},
dMg:function dMg(d){this.a=d},
dMh:function dMh(d,e){this.a=d
this.b=e},
dMi:function dMi(d){this.a=d},
dMw:function dMw(d){this.a=d},
dMu:function dMu(d){this.a=d},
dMv:function dMv(d){this.a=d},
dMx:function dMx(){},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMq:function dMq(d,e){this.a=d
this.b=e},
dMr:function dMr(d,e,f){this.a=d
this.b=e
this.c=f},
dMp:function dMp(d,e,f){this.a=d
this.b=e
this.c=f},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMt:function dMt(d,e){this.a=d
this.b=e},
axC:function axC(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbv:function bbv(d,e,f){this.c=d
this.d=e
this.a=f},
d_e:function d_e(){},
d_f:function d_f(){},
ab1:function ab1(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_C:function d_C(){},
d_B:function d_B(d){this.a=d},
Y7:function Y7(d,e,f){this.c=d
this.d=e
this.a=f},
axH:function axH(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_y:function d_y(d){this.a=d},
d_z:function d_z(d,e,f){this.a=d
this.b=e
this.c=f},
d_A:function d_A(d,e){this.a=d
this.b=e},
d_w:function d_w(d,e){this.a=d
this.b=e},
d_u:function d_u(d){this.a=d},
d_s:function d_s(d){this.a=d},
d_p:function d_p(d){this.a=d},
d_v:function d_v(d){this.a=d},
d_r:function d_r(d){this.a=d},
d_x:function d_x(d){this.a=d},
d_t:function d_t(d){this.a=d},
d_q:function d_q(d){this.a=d},
Y4:function Y4(d,e,f){this.c=d
this.d=e
this.a=f},
axE:function axE(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d_b:function d_b(d){this.a=d},
d_a:function d_a(d,e){this.a=d
this.b=e},
d_c:function d_c(d){this.a=d},
d_9:function d_9(d,e){this.a=d
this.b=e},
d_d:function d_d(d){this.a=d},
d_8:function d_8(d,e){this.a=d
this.b=e},
d_4:function d_4(d){this.a=d},
d_5:function d_5(d){this.a=d},
d_6:function d_6(d,e){this.a=d
this.b=e},
d_7:function d_7(d){this.a=d},
OK:function OK(d,e,f){this.c=d
this.d=e
this.a=f},
axK:function axK(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d_P:function d_P(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
d_S:function d_S(d){this.a=d},
d_T:function d_T(d,e){this.a=d
this.b=e},
d_U:function d_U(d){this.a=d},
d_W:function d_W(d){this.a=d},
d_V:function d_V(d){this.a=d},
Y9:function Y9(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axI:function axI(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_M:function d_M(d,e){this.a=d
this.b=e},
d_D:function d_D(d,e,f){this.a=d
this.b=e
this.c=f},
d_E:function d_E(d){this.a=d},
d_F:function d_F(){},
d_K:function d_K(){},
d_G:function d_G(d,e){this.a=d
this.b=e},
d_H:function d_H(d,e){this.a=d
this.b=e},
d_I:function d_I(d,e){this.a=d
this.b=e},
d_J:function d_J(d,e){this.a=d
this.b=e},
ab_:function ab_(d,e){this.c=d
this.a=e},
d_3:function d_3(d){this.a=d},
Y3:function Y3(d){this.a=d},
axD:function axD(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Ya:function Ya(d,e){this.c=d
this.a=e},
axJ:function axJ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d_O:function d_O(d){this.a=d},
d_N:function d_N(d){this.a=d},
bbw:function bbw(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
huR(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fU(v)},
MD(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MD=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$MD)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MD)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
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
q=A.a9(n)
$.am.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$MD,w)},
a60(d){return B.huS(d)},
huS(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a60=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a60)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a60)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a60,w)},
U0(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$U0=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MD(),$async$U0)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dW(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a5().ac())
r.n(s,d,t)
x=4
return A.b(B.a60(s),$async$U0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$U0,w)},
U1(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$U1=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c1(),$async$U1)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c5B(),t),t.k("H.E"))}if(u.length===0){v=null
x=1
break}s=B.huR()
t=A.T(u).k("J<1,a4<n,aC>>")
r=A.B(new A.J(u,new B.c5C(s),t),t.k("aj.E"))
x=6
return A.b(B.MD(),$async$U1)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a60(q),$async$U1)
case 7:x=8
return A.b(B.a61(r,u,g,s),$async$U1)
case 8:v=new A.bmY(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U1,w)},
anP(d){var x=0,w=A.j(y.y),v,u,t
var $async$anP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MD(),$async$anP)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anP,w)},
c5D(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MD(),$async$c5D)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.y(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5D,w)},
a61(d,e,f,g){return B.huT(d,e,f,g)},
huT(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a61=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ac(q)===0){x=8
break}x=10
return A.b(B.anN("media",r,new B.c5A(s,e,g),f,q),$async$a61)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.U0(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a61)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.U0(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a61)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.U0(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a61)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a61,w)},
DZ(d,e,f){return B.huU(d,e,f)},
huU(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$DZ=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$DZ)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anP(b3),$async$DZ)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kC,null,g),$async$DZ)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anP(b3),$async$DZ)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MD(),$async$DZ)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
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
a1=J.a8(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gU(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ac(m)===0){x=11
break}u=14
a8=$.eU().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oI(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9i(a8.a,b0,"media",a8.d,a9).Cc(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXV(k,n,o,s,b7),$async$DZ)
case 17:j=c0
if(j!=null){J.cf(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a9(b4)
$.am.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.ac(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gU(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ac(h)!==0?25:26
break
case 25:u=28
a2=$.eU().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oI(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9i(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$DZ)
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
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a5().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a60(e),$async$DZ)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DZ,w)},
c5B:function c5B(){},
c5C:function c5C(d){this.a=d},
c5A:function c5A(d,e,f){this.a=d
this.b=e
this.c=f},
aON(){var x=0,w=A.j(y.H),v,u
var $async$aON=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hFM=null
v=y.H
u=A.dR(null,v)
x=2
return A.b(u,$async$aON)
case 2:u=A.dR(null,v)
x=3
return A.b(u,$async$aON)
case 3:u=$.fRm
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dR(u,v),$async$aON)
case 4:$.fRm=$.hOc=$.hOd=null
return A.h(null,w)}})
return A.i($async$aON,w)},
fiT(d){var x=0,w=A.j(y.H),v,u
var $async$fiT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4K){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fiU(new A.bS(u,y.aY))
x=3
return A.b(u.i7(0,C.hF,new B.fiV()),$async$fiT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fiT,w)},
hOa(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.huB(x):x},
fRq(d){var x=0,w=A.j(y.T),v,u,t
var $async$fRq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,13))
if(C.a.a0(u,"WR")){v=B.anR(u)
x=1
break}v=B.fMg(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRq,w)},
fRp(d){var x=0,w=A.j(y.T),v,u,t
var $async$fRp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b_(t,14))
if(C.a.a0(u,"WR")){v=B.anS(u)
x=1
break}v=B.fMg(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fRp,w)},
fA6(d){var x=0,w=A.j(y.T),v
var $async$fA6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anS(d),$async$fA6)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fA6,w)},
bz4(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bz4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fRp(d),$async$bz4)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ac(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bz4,w)},
f86(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f86=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TV(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B4(d.amA(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f86,w)},
FN(d,e,f){return B.hQy(d,e,f)},
hQy(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FN=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fRq(a1),$async$FN)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a8(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ac(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b_(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hi6().aCf(D.df9,null),$async$FN)
case 4:l=d.fRm=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awu(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fjq(f,k,new B.fjr(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a6h(0,new B.Wb(r,"offer")),$async$FN)
case 5:d=l
x=7
return A.b(l.ajr(0),$async$FN)
case 7:x=6
return A.b(d.a69(0,a4),$async$FN)
case 6:x=8
return A.b(B.fiT(l),$async$FN)
case 8:x=9
return A.b(l.anj(),$async$FN)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hOa(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anT(m,h),$async$FN)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h14(h)
case 11:v=new A.bmf(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FN,w)},
fiU:function fiU(d){this.a=d},
fiV:function fiV(){},
fjr:function fjr(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fjq:function fjq(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fjp:function fjp(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hSp(d){switch(d){case"new":return D.e7_
case"checking":return D.e70
case"connected":return D.e72
case"completed":return D.e71
case"failed":return D.e74
case"disconnected":return D.e75
case"closed":return D.aJJ
case"count":return D.e73}return D.aJJ},
hSq(d){switch(d){case"new":return D.aJK
case"gathering":return D.e76
case"complete":return D.a4K}return D.aJK},
i1y(d){switch(d){case"stable":return D.e77
case"have-local-offer":return D.e78
case"have-local-pranswer":return D.e7a
case"have-remote-offer":return D.e79
case"have-remote-pranswer":return D.e7b
case"closed":return D.aJQ}return D.aJQ},
i_O(d){switch(d){case"new":return D.aJN
case"connecting":return D.aJO
case"connected":return D.aJP
case"closed":return D.a4L
case"disconnected":return D.aJM
case"failed":return D.aJL}return D.a4L},
a8i:function a8i(d,e){this.a=d
this.b=e},
NC:function NC(d,e){this.a=d
this.b=e},
Wa:function Wa(d,e){this.a=d
this.b=e},
NB:function NB(d,e){this.a=d
this.b=e},
Er:function Er(d,e){this.a=d
this.b=e},
cgy:function cgy(){},
fO0(d){var x=new B.Eq()
x.a=d
x.b=!0
return x},
Eq:function Eq(){this.b=this.a=$},
a8h:function a8h(){},
as7:function as7(){},
Wb:function Wb(d,e){this.a=d
this.b=e},
fMc(){var x=0,w=A.j(y.H)
var $async$fMc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fMc,w)},
fMf(d,e,f){var x=0,w=A.j(y.T),v
var $async$fMf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mg(D.mk))){v=null
x=1
break}v=B.fAm(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fMf,w)},
h14(d){var x,w=F.aaa.a39(C.dH.aI(d),null)
if(w.length===0){x=C.dH.aI(d)
return C.cS.gcu().aI(x)}return C.cS.gcu().aI(w)},
huA(d){var x,w,v=C.cB.aI(d)
try{x=C.c4.c8(0,F.aa9.ba0(v,!1))
return x}catch(w){x=C.c4.c8(0,v)
return x}},
fMg(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.huA(C.a.b_(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b_(t,w.length)
try{v=C.c4.c8(0,C.cB.aI(x))
return v}catch(u){return x}}return null},
huB(d){var x,w,v,u,t,s=A.a([],y.s)
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
huC(){var x,w=$.pf(),v=J.e0(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fU(v)},
aY0(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aY0=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aY0)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$aY0,w)},
c5j(d,e){return B.huD(d,e)},
huD(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5j=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ac(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c5j)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$c5j,w)},
aY3(d){var x=0,w=A.j(y.y),v,u,t
var $async$aY3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aY0(d),$async$aY3)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY3,w)},
aY2(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aY2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.huC()
r=C.a.i(f)
t=C.dH.aI(s)
x=3
return A.b(B.c5j(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcu().aI(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aY2)
case 3:if(!h){v=null
x=1
break}v=new A.a_9("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY2,w)},
aY1(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aY1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ac(o)===0){v=null
x=1
break}x=3
return A.b(B.aY0(o),$async$aY1)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ac(u)===0){v=null
x=1
break}try{t=C.c4.c8(0,C.cB.aI(u))
if(J.iR(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aY1,w)},
c5k(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ac(q)===0){x=1
break}u=4
x=7
return A.b(X.bA1("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c5k)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c5k,w)},
aY4(d){var x=0,w=A.j(y.h),v,u,t
var $async$aY4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HJ(),$async$aY4)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY4,w)},
anK(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anK)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aY4(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anK,w)},
anI(d,e){var x=0,w=A.j(y.H)
var $async$anI=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anI)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anI)
case 2:return A.h(null,w)}})
return A.i($async$anI,w)},
a5T(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5T=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5T)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HJ(),$async$a5T)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5S(s),$async$a5T)
case 5:x=6
return A.b(B.anI(f,u),$async$a5T)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5T,w)},
a5U(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5U=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5U)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HJ(),$async$a5U)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
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
if(o!==t&&s.ah(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.anI(g,q),$async$a5U)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5S(u),$async$a5U)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5U,w)},
a5V(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5V)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HJ(),$async$a5V)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.y(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aXY(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a5V)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5V)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5V,w)},
c5l(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ac(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c5l)
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
return A.i($async$c5l,w)},
HK(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5l(d),$async$HK)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aY4(t),$async$HK)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anJ(d),$async$HK)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXY(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anJ(d),$async$HK)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HK,w)},
anJ(d){var x=0,w=A.j(y.H)
var $async$anJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anJ)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anJ)
case 2:return A.h(null,w)}})
return A.i($async$anJ,w)},
aY5(){var x,w=$.pf(),v=J.e0(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fU(v)},
a5W(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fMh(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5o(d){return B.huF(d)},
huF(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5W(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5o)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$c5o,w)},
anM(d,e){return B.huG(d,e)},
huG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$anM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5W(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hA("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$anM)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a9(o)
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
return A.i($async$anM,w)},
c5q(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5W(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.anM(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5q,w)},
c5p(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5W(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.anM(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5p,w)},
c5r(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5W(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.anM(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5r,w)},
c5s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fMh(d)){v=null
x=1
break}x=3
return A.b(B.c5o(d),$async$c5s)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a8(u)
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
return A.i($async$c5s,w)},
a62(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a62=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a62)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a62)
case 8:s=e
if(s==null){v=A.V(y.N,y.z)
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
q=A.a9(n)
$.am.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.V(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a62,w)},
anQ(d){return B.huV(d)},
huV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$anQ)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hA("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anQ)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a9(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anQ,w)},
anR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ac(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$anR)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a62(),$async$anR)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ac(q)===0){v=null
x=1
break}u=6
p=C.c4.c8(0,C.cB.aI(q))
if(J.iR(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anQ(s),$async$anR)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a9(i)
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
return A.i($async$anR,w)},
anT(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c1(),$async$anT)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a62(),$async$anT)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a1(s,r,q),r,q)
r=C.dH.aI(C.a.i(e))
q.n(0,"answer",C.cS.gcu().aI(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anQ(u),$async$anT)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anT,w)},
anS(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anS=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c1(),$async$anS)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a62(),$async$anS)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ac(u)===0){v=null
x=1
break}try{r=C.c4.c8(0,C.cB.aI(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anS,w)},
amT(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amT=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.ql)){v=null
x=1
break}x=3
return A.b(p.m6(e),$async$amT)
case 3:r=g
u=4
x=7
return A.b(r.hm(C.fS),$async$amT)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wv(o))
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
return A.i($async$amT,w)},
hYT(d,e){var x,w,v=J.e0(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fyF(d){return B.hYV(d)},
hYV(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fyF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eU().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i1("media").K8(d,3600),$async$fyF)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
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
return A.i($async$fyF,w)},
Cr(d,e,f,g,h,i){var x=null
return B.hYS(d,e,f,g,h,i)},
hYS(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cr=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h17(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fMj(r),$async$Cr)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fyF(o),$async$Cr)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5X(r),$async$Cr)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aMP)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.L0(A.a([],g))
x=15
return A.b(d.eS(0,A.asX("GET",A.cv(n,0,null))).cN(0,C.EC),$async$Cr)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5X(r),$async$Cr)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JC(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cr)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ac(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aY7(r,k),$async$Cr)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Cr)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.TV(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a9(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a5X(r),$async$Cr)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cr,w)},
aOv(d){return B.hYU(d)},
hYU(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eU().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i1("media").W(0,d),$async$aOv)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a9(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOv,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[137]
O=c[40]
F=c[233]
I=c[130]
P=c[213]
E=c[206]
G=c[86]
Q=c[178]
R=c[131]
S=c[211]
K=c[237]
L=c[244]
B=a.updateHolder(c[21],B)
D=c[242]
T=c[177]
M=c[196]
U=c[65]
V=c[245]
W=c[71]
X=c[55]
N=c[85]
Y=c[243]
B.cgz.prototype={
aCf(d,e){return this.cF3(d,e)},
cF3(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.V(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kb(A.cA(t)))
t=J.k(u)
v=B.hzv(C.cS.gcu().aI(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCf,w)}}
B.b2d.prototype={
bvd(d){var x=this,w=x.w
w.onclose=A.he(new B.cgu(x))
w.onopen=A.he(new B.cgv(x))
w.onmessage=A.he(new B.cgw(x))
w.onbufferedamountlow=A.he(new B.cgx(x))},
gda(d){return this.x},
afJ(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Eq()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fO0(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afJ)
case 8:v=t.fO0(s.am6(f,0,null))
x=1
break
case 7:case 4:v=B.fO0(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afJ,w)}}
B.b2e.prototype={
bve(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgA(x)))
w.addEventListener("icecandidate",A.he(new B.cgB(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgC(x)))
w.onicegatheringstatechange=A.he(new B.cgD(x))
w.addEventListener("signalingstatechange",A.he(new B.cgE(x)))
if(!$.fUV())w.addEventListener("connectionstatechange",A.he(new B.cgF(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgG(x)))
w.addEventListener("track",A.he(new B.cgH(x)))},
ajr(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kb(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajr)
case 3:t=f
v=new B.Wb(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajr,w)},
a69(d,e){return this.bkK(0,e)},
bkK(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a69=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a69)
case 2:return A.h(null,w)}})
return A.i($async$a69,w)},
a6h(d,e){return this.bl_(0,e)},
bl_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6h)
case 2:return A.h(null,w)}})
return A.i($async$a6h,w)},
anj(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wb(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anj,w)},
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
B.ab0.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Y6.prototype={
T(){return new B.axG()},
gdc(){return this.c}}
B.axG.prototype={
a_(){this.a1()
this.acs()},
acs(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acs=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXZ(u.e,u.c),$async$acs)
case 2:t=e
if(v.c!=null)v.m(new B.d_m(v,t))
return A.h(null,w)}})
return A.i($async$acs,w)},
Pm(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anF(t.e,t.c,!1),$async$Pm)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eM2)
x=1
break}x=4
return A.b(B.a5R(u.a.c,"individual"),$async$Pm)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4I(A.ej(new B.d_j(u),!1,null,y.H)),$async$Pm)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Pm,w)},
Iy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Iy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fh2(o),$async$Iy)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5V(o.e,r,s,q),$async$Iy)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eJ7)
x=1
break}x=5
return A.b(B.a5R(u.a.c,"member"),$async$Iy)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4I(A.ej(new B.d_l(u),!1,null,y.H)),$async$Iy)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Iy,w)},
xx(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5Q(t.e,o,t.f,t.r,t.w,s),$async$xx)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5R(u.a.c,"org_owner"),$async$xx)
case 4:x=5
return A.b(B.anK(u.a.c),$async$xx)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fhx(o),$async$xx)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5T(s,t,o,q.c),$async$xx)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eJ4)
x=1
break}x=10
return A.b(B.anK(u.a.c),$async$xx)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4I(A.ej(new B.d_k(u),!1,null,y.H)),$async$xx)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xx,w)},
B(d){var x,w,v,u=this,t=null,s=A.N(d).ax.a===C.H,r=s?C.j0:C.pe,q=B.fMe(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.fK,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f3q,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h1,t,t,t),C.az,D.flM,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bSl,C.n),t,t,t,t,C.eA,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lv(new B.d_o(),t),C.P,w,C.e0,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abs(C.eR,C.awx,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc9G(),t),C.ac],v))
p.push(new B.abs(C.os,C.a0M,"Team Member","Sign in with your organization access code + password",u.gcax(),t))
p.push(C.ac)
p.push(new B.abs(C.ajb,C.a2b,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gca2(),t))
return A.cb(t,r,A.bm(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.agv,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.abs.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.N(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oR,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.N(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.B1,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bU,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.af)}}
B.aAe.prototype={}
B.aDq.prototype={}
B.jf.prototype={
mg(d){var x=this.b,w=C.a.oi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b_(x,w+1).toLowerCase())},
ganY(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.V(y.N,y.z)
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
b9v(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jf(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cDy(d){return this.b9v(null,d)},
aC0(d){return this.b9v(d,null)}}
B.TP.prototype={
T(){return new B.aBB(new A.cs(null,y.A))},
gdc(){return this.c}}
B.aBB.prototype={
a_(){this.a1()
this.act()},
act(){var x=0,w=A.j(y.H),v,u=this,t
var $async$act=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B3(u.a.c),$async$act)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dLs(u,t))
case 1:return A.h(v,w)}})
return A.i($async$act,w)},
acu(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fA(s)),$async$acu)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eMX)
case 1:return A.h(v,w)}})
return A.i($async$acu,w)},
Yz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Yz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amT(s.d,4),$async$Yz)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rD(r,"ngmy_my_code_"+m+".png"),$async$Yz)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Yz,w)},
agb(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8S("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agb,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.N(d).ax.a===C.H,n=o?C.j0:C.pe,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lY
else if(q.e==null)x=A.av(new A.C(C.eA,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aI.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1b,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.ag5,p,p,1/0)
v=A.m(20)
u=A.a([new A.ad(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mr,w,C.ko,new A.et(A.p(p,A.pz(p,p,!1,B.huw(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bU,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.ko,A.A(A.a([A.D(A.ez(N.Bk,C.SZ,q.gc2J(),p),1),C.aw,A.D(A.dp(C.y8,C.a6Z,q.gc2K(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.ez(M.a_D,D.fhQ,q.gcoV(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.LD,p,p,C.ah)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.TT.prototype={
T(){return new B.aBE(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.aBE.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HI(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HI(u.d.a.a)
if(t==null){u.m(new B.dMB(u))
x=1
break}u.m(new B.dMC(u))
s=u.a
r=s.c
x=3
return A.b(B.a5P(s.d,new B.dMD(u),t,r),$async$YA)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dME(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$YA,w)},
a0K(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0K=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dMF(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.r8(r.a.c,q),$async$a0K)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dMG(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ac(r.a.d)>1?"NGMY Doc Share ("+J.ac(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ago(p,m,l,j,k),$async$a0K)
case 8:o=e
if(r.c!=null)r.m(new B.dMH(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dMI(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dMJ(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0K,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.N(d).ax.a===C.H,i=j?D.acA:D.aaF,h=j?D.ae2:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.abN:C.aL
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.N(d).ax.a===C.H
w=J.ac(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e3(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e3(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bGq,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fz,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1b,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u0(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgP()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.Lx,k,k,"",k,!0,new A.b4(4,A.m(18),new A.az(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.az(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dMK(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lQ,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.KG(l.a.d,4)
m=A.B(new A.J(m,new B.dML(x,new A.aED(i)),m.$ti.k("J<aj.E,r>")),y.c7)
if(J.ac(l.a.d)>4)m.push(new A.C(C.m8,A.d("+ "+(J.ac(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eHE)
else q.push(A.W(C.l9,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.ir,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bqn,k,k,C.ah),1)
u=l.f?k:l.gcoW()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(M.a_D,D.fiL,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.az(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc2L()
t=A.bk(C.aE,k,k,0,C.c,k,C.mT,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cb(g,h,new A.an(C.W,k,C.aa,C.q,A.a([f,v,A.bm(!0,A.mP(new B.dMM(),A.v(A.a([e,new A.C(D.bpS,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rj:D.fhe,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cq,C.X3,k,new A.bn(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgP.prototype={
oe(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.TQ.prototype={
T(){return new B.aBC()}}
B.aBC.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,C.b2,C.aN),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ar(new A.bb(x,C.b2,C.aN),v)
u.f!==$&&A.aO()
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
acv(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acv=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dLt(r))
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
return A.b(B.a5U(p,m,n,o,C.a.i(l).length===0?null:l),$async$acv)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eMy)
s=[1]
x=4
break}p.I(y.q).f.R(D.eLb)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dLu(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acv,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.N(d).ax.a===C.H?C.j0:C.pe,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fa3,s,s,s,1,s,!0),p=A.p(s,D.biB,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.G3,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bNg,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bNb,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bNr,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc2M()
u=A.bk(C.aE,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cb(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mr,A.bJ(t.r?C.rj:C.aPq,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.aaI.prototype={}
B.btb.prototype={
a3p(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cp(r.amA()))
x=3
return A.b(B.Qf(t,s),$async$a3p)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3p,w)},
gdc(){return this.a}}
B.MB.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Y5.prototype={
T(){return new B.axF(new A.ar(C.as,$.aw()),A.kg(!0,null,!0,!0,null,null,!1))}}
B.axF.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_i(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c2S(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a05(d),u=x.a.c,t=u?C.i3:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j0:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ad(0,C.G,C.aE.j(u?0.25:0.12),C.fK,32)],n),l=A.p(w,T.alT,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ad(0,C.G,C.aE.j(0.4),C.cy,16)],n),C.amG,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u0(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsQ()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.EP,w,w,"",w,!0,new A.b4(4,A.m(16),new A.az(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aVY),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_g(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lQ,w,w,w,w)
f=f[1]
f=A.D(A.dT(C.nf,new B.d_h(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.az(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ad(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eE(w,C.K,new A.cU(Q.Jy,A.bY(new A.C(C.xh,A.v(A.a([l,C.aO,k,C.P,j,C.e0,i,C.e0,A.A(A.a([f,C.aw,A.D(A.bY(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e18,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc2R(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.af),new A.o(w,w,w,h,n,L.No,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LF,C.d_,w,w,w)}}
B.bsQ.prototype={
oe(d,e){return e.ajm(e.a.toUpperCase())}}
B.TR.prototype={
T(){return new B.aBD(A.a([],y.r),A.aX(y.N))},
gdc(){return this.c}}
B.aBD.prototype={
a_(){var x=this
x.a1()
x.ti()
x.w=A.dC(C.j4,new B.dMz(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.U_()
this.a2()},
a_C(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MA(u.a.c),$async$a_C)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A8(u.a.c),$async$a_C)
case 4:u.m(new s.dLX(u,e))
u.hS("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_C,w)},
ti(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ti=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MA(u.a.c),$async$ti)
case 3:t=e
x=4
return A.b(B.A8(u.a.c),$async$ti)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dLY(u,s))
if(t>0)u.hS("Received "+A.t(t)+" file(s) via My Code.")
u.MP(u.d)
B.B3(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$ti,w)},
MP(d){return this.bza(d)},
bza(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5Z(r,u.a.c),$async$MP)
case 8:p=f
if(u.c==null){x=1
break}new B.dLw(u,r,p).$0()
u.c.e7()
case 7:if(!(C.a.a0(r.c,"video/")||r.mg(D.mk))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TY(r,u.a.c),$async$MP)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A8(u.a.c),$async$MP)
case 12:u.m(new o.dLx(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MP,w)},
Nb(d){return this.bFi(d)},
bFi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5Z(d,u.a.c),$async$Nb)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dLC(u,d,t))
x=6
return A.b(A.fI(new A.fA(t)),$async$Nb)
case 6:u.hS("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fA(r.toUpperCase())),$async$Nb)
case 7:u.hS("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nb,w)},
hS(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tj(d,e){return this.czc(d,e)},
czc(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tj=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dMn(r,e))
u=3
x=6
return A.b(d.$0(),$async$tj)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dMo(r))
$.eQ.mb()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tj,w)},
gaSZ(){var x=this.a
return x.f||x.r||x.w},
Hx(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaSZ()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c5h(s,n,r,q,o,t),$async$Hx)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hS("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fs8(o,u.a.c),$async$Hx)
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
return A.b(B.Ct(s,o,r,q,n,t),$async$Hx)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hx,w)},
ZG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anK(u.a.c),$async$ZG)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hS("No organization portal found.")
x=1
break}t=J.a8(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a5(t,!1).ce(A.ej(new B.dLU(u,r,q),!1,null,y.H)),$async$ZG)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZG,w)},
a_N(d){return this.ciD(d)},
ciC(){return this.a_N(1)},
ciD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_N=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaSZ()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anH(u.a.c),$async$a_N)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_N,w)},
aaw(d,e,f){return this.bVq(d,e,f)},
bVq(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hS(e)
x=1
break}x=3
return A.b(u.tj(new B.dLR(u,d,null,e,f),"Uploading\u2026"),$async$aaw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaw,w)},
bzj(){B.hfz(!1,new B.dLA(this))
return},
cny(){this.m(new B.dM1(this))},
awH(){var x=0,w=A.j(y.H),v=this
var $async$awH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bzj()
return A.h(null,w)}})
return A.i($async$awH,w)},
aas(){var x=0,w=A.j(y.H),v=this
var $async$aas=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tj(new B.dLG(v),"Importing\u2026"),$async$aas)
case 2:return A.h(null,w)}})
return A.i($async$aas,w)},
Rn(d){return this.cyF(d)},
cyF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mg(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ce(A.ej(new B.dMk(u,d),!1,null,y.H)),$async$Rn)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mg(D.Pi)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).ce(A.ej(new B.dMl(u,d),!1,null,y.H)),$async$Rn)
case 8:x=1
break
case 7:x=u.bW7(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).ce(A.ej(new B.dMm(u,d),!1,null,y.H)),$async$Rn)
case 11:x=1
break
case 10:u.hS("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
bW7(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oi(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.czw,C.a.b_(x,w+1).toLowerCase())},
adX(d){return this.c9K(d)},
c9K(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$adX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mg(D.mk)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ce(A.ej(new B.dLS(u,d),!1,null,y.H)),$async$adX)
case 5:x=1
break
case 4:u.m(new B.dLT(u,d))
case 1:return A.h(v,w)}})
return A.i($async$adX,w)},
QL(d){return this.cqm(d)},
cqm(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hS("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$QL)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tj(new B.dMd(u,d),"Preparing QR\u2026"),$async$QL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QL,w)},
agB(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dMe(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dMf(q),s),s.k("H.E"))
if(r.length===0){u.hS("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QL(r),$async$agB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agB,w)},
agu(d){return this.cpW(d)},
cpW(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a05(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dM7(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agu)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rn(d)
break
case"qr":u.QL(A.a([d],y.r))
break
case"send_my_code":u.cam(A.a([d],y.r))
break
case"save":u.afQ(d)
break
case"delete":u.Ij(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agu,w)},
Wy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Wy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dLD(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLE(q),s),s.k("H.E"))
if(r.length===0){u.hS("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oU(t,s.c,s.f),$async$Wy)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tj(new B.dLF(u,r),"Preparing file\u2026"),$async$Wy)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wy,w)},
af2(d){return this.ch6(d)},
ch6(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$af2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hgg(d,!1),$async$af2)
case 3:s=f
r=s==null
q=B.a5W(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hS("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$af2,w)},
ae2(){var x=0,w=A.j(y.H),v=this,u
var $async$ae2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fzK(u,v.a.c),$async$ae2)
case 2:return A.h(null,w)}})
return A.i($async$ae2,w)},
bzi(){B.hfz(!1,new B.dLz(this,null))
return},
Ix(d,e){return this.can(d,e)},
aYN(d){return this.Ix(null,d)},
cam(d){return this.Ix(d,null)},
can(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Ix=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dLV(s),o),o.k("H.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wN.c4().alW(!0,C.YR,!1),$async$Ix)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tj(new B.dLW(l,s,r),"Preparing\u2026"),$async$Ix)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hS("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hS("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bBa(p,l,e,s.a.c),$async$Ix)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hS("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ix,w)},
HM(d){return this.bVd(d)},
bVd(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.huv(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aYN(t),$async$HM)
case 8:x=6
break
case 7:u.hS("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hS("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tj(new B.dLP(u,d),"Receiving video\u2026"),$async$HM)
case 11:x=1
break
case 10:x=12
return A.b(u.tj(new B.dLQ(u,d),"Receiving\u2026"),$async$HM)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HM,w)},
DI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cn()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.af2(t),$async$DI)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HM(s),$async$DI)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).ce(A.ej(new B.dM_(u),!1,null,y.N)),$async$DI)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.ti(),$async$DI)
case 10:x=1
break
case 9:x=11
return A.b(u.HM(C.a.i(r)),$async$DI)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DI,w)},
afQ(d){return this.cm7(d)},
cm7(d){var x=0,w=A.j(y.H),v=this
var $async$afQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tj(new B.dLZ(v,d),"Saving\u2026"),$async$afQ)
case 2:return A.h(null,w)}})
return A.i($async$afQ,w)},
Ij(d){return this.bHA(d)},
bHA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ij=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kW(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ij)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5k(t),$async$Ij)
case 6:case 5:s=d.a
x=7
return A.b(B.DY(u.a.c,s),$async$Ij)
case 7:u.r.W(0,s)
x=8
return A.b(u.ti(),$async$Ij)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ij,w)},
agH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a05(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dMj(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agH)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ae2()
break
case"import":u.aas()
break}case 1:return A.h(v,w)}})
return A.i($async$agH,w)},
c2P(d){var x=d.c
if(C.a.a0(x,"video/")||d.mg(D.mk))return C.pD
if(C.a.a0(x,"image/")||d.mg(D.Pi))return C.ty
if(C.a.t(x,"pdf"))return E.MW
return D.ajE},
B(d){var x,w,v=this,u=null,t=B.a05(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.FW,u,u,u,new B.dMu(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bGW,u,u,u,v.e?u:v.gca3(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcnx()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bBj:E.ak4,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_A,u,u,u,v.e?u:v.gc2Q(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nM,u,u,u,v.e?u:v.gaZV(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bIC,u,u,u,v.e?u:new B.dMv(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lv(new B.dMw(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e3(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.N(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e3(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.N(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.me(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axC(C.jb,s,!0,t,w?u:v.gcqn(),u),1)
x.push(new A.C(D.boF,A.mP(new B.dMx(),A.A(A.a([s,C.aw,A.D(new B.axC(C.ve,"Export",!1,t,w?u:v.gbL_(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cq,C.is,u,new A.bn(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbv(t,v.e?u:v.gaZV(),u)
else s=A.k0(!0,u,u,new B.dMy(v,t),s,u,D.box,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.an(C.W,u,C.aa,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axC.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.uY,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uY,t,new A.b7(s,C.Y),new A.az(v,1,C.r,-1),t,t,t,t)
return A.ez(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbv.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mP(new B.d_e(),new A.C(E.XW,A.v(A.a([A.mP(new B.d_f(),A.p(x,A.W(C.xC,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.it,x,new A.bn(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e0,A.dp(C.nM,D.fm4,this.d,A.bk(C.aE,x,x,x,C.c,x,C.XR,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cq,C.Ar,x,new A.bn(0,1,w),s),x,x,x)}}
B.ab1.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mg(D.mk))p=D.d5e
else{p=C.a.a0(p,"image/")||i.mg(D.Pi)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aI.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.ganY()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mg(D.mk))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mg(D.mk)))l.push(A.fK4(C.aE,!1,j,j,j,!1,j,j,new B.d_B(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nK,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mP(new B.d_C(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.Xq,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.r,-1)),j,j,C.af),j),C.cq,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bn(0,1,y.X),y.i)}}
B.Y7.prototype={
T(){return new B.axH()},
gdc(){return this.c}}
B.axH.prototype={
a_(){this.a1()
this.xn()},
q(){B.huK(this.e)
this.a2()},
xn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.r8(o.c,o.d),$async$xn)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gal(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.huN(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.huM(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_y(s))
x=1
break}s.m(new B.d_z(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d_A(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xn,w)},
a0J(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.r8(t.c,t.d),$async$a0J)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eJE)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ago(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0J)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0J,w)},
bV6(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kh(u,C.A,v,new B.d_w(w,t),C.fQ,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gal(t))x=A.fL(t,C.A,v,new B.d_x(w),C.fQ,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ua(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a05(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bl,u,u,u,v.gb2F(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Dw
else{q=v.r
if(q!=null)t=new A.C(C.eA,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eA,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.Bl,D.f5F,v.gb2F(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bV6()}return A.cb(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Y4.prototype={
T(){return new B.axE(A.ahb(),C.bx,C.bx)},
gdc(){return this.c}}
B.axE.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a3(w).k("fs<1>")).i3(new B.d_b(v))
x.gcMk().i3(new B.d_c(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a3(x).k("fs<1>"))}if(x==null)x=C.b14
x.i3(new B.d_d(v))
v.xn()},
xn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.r8(p.c,p.d),$async$xn)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d_4(s))
x=1
break}x=8
return A.b(s.d.BG(0,new A.a2c(r,s.a.d.c)),$async$xn)
case 8:if(s.c==null){x=1
break}s.m(new B.d_5(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.d_6(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xn,w)},
YB(){var x=0,w=A.j(y.H),v=this,u
var $async$YB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fZ(0),$async$YB)
case 5:x=3
break
case 4:x=6
return A.b(u.i6(0),$async$YB)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YB,w)},
aQU(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a05(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Dw
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bCj,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.No,C.n),o,88,o,o,o,o,o,88)
t=A.kR(C.aE,o,o,m,0,new B.d_7(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aQU(p.w)+" / "+p.aQU(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eGa,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xN:C.iO,o,o,o,o,o)
x=A.v(A.a([u,C.ko,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc2T(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.av(new A.C(C.tm,x,o),o,o,o),o,!1,!1,o,o)}}
B.OK.prototype={
T(){return new B.axK()},
gdc(){return this.c}}
B.axK.prototype={
a_(){this.a1()
this.OJ()},
OJ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OJ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fMf(o.c,o.d,new B.d_P(s)),$async$OJ)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d_Q(s))
x=1
break}s.e=r
q=O.hRn(r)
if(q==null){s.m(new B.d_R(s))
x=1
break}s.d=q
q.aM(0,s.gaYB())
x=8
return A.b(q.i2(0).cN(0,C.qB),$async$OJ)
case 8:if(s.c==null){x=1
break}s.m(new B.d_S(s))
x=9
return A.b(q.pv(0),$async$OJ)
case 9:q.rW(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d_T(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OJ,w)},
c8l(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d_U(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cq(0,x.gaYB())
w=x.d
if(w!=null)w.q()
B.i04(x.e)
x.a2()},
acy(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY6(u.c,u.d),$async$acy)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acy,w)},
B(d){var x,w,v,u=this,t=null,s=B.a05(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oz,t,t,t,u.gc2N(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ic(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Dw
else{q=u.r
if(q!=null)s=new A.C(C.eA,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agG(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fF(x,new A.an(C.A,t,C.aa,C.q,A.a([new A.zF(s,t),A.aE(t,A.CF(A.p(t,A.W(q?I.xN:C.iO,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bU,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d_W(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.cb(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Y9.prototype={
T(){return new B.axI(new A.cs(null,y.A))}}
B.axI.prototype={
gcyW(){var x,w,v=this.a
if(v.e!==D.QC)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcyD(){var x,w,v=this.a
if(v.e!==D.yI)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b_(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcyW()
if(x!=null){v.PL(x)
v.e=A.dC(R.EF,new B.d_L(v,x))}w=v.gcyD()
if(w!=null){v.PK(w)
v.f=A.dC(C.hf,new B.d_M(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
PK(d){return this.cfj(d)},
cfj(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anP(d),$async$PK)
case 3:t=f
x=4
return A.b(B.c5D(d),$async$PK)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_D(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PK,w)},
PL(d){return this.cfk(d)},
cfk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fA6(d),$async$PL)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bz4(t),$async$PL)
case 4:if(u.c==null){x=1
break}u.m(new B.d_E(u))
u.c.I(y.q).f.R(D.aMq)
case 1:return A.h(v,w)}})
return A.i($async$PL,w)},
gc_2(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc2O(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0v(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cn()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eMI)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).ce(A.ej(new B.d_F(),!1,null,y.N)),$async$a0v)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bz4(s),$async$a0v)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aMq)
case 1:return A.h(v,w)}})
return A.i($async$a0v,w)},
a8r(d){return this.bFj(d)},
bFj(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fA(C.d.aH(t,", "))),$async$a8r)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8r,w)},
acw(d){return this.bF3(d)},
bF3(d){var x=0,w=A.j(y.H),v=this
var $async$acw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fA(v.a.c)),$async$acw)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eK6)
return A.h(null,w)}})
return A.i($async$acw,w)},
a0q(d){return this.cm9(d)},
cm9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amT(s.d,4),$async$a0q)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rD(r,"ngmy_doc_share_qr.png"),$async$a0q)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a9(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0q,w)},
gaU2(){var x,w=this.a
if(w.e!==D.H6)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b_(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b_(x,13))
return null},
a8o(d){return this.bFc(d)},
bFc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8o=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaU2()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fA(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8o)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eLI)
case 1:return A.h(v,w)}})
return A.i($async$a8o,w)},
acx(){var x=0,w=A.j(y.H),v=this,u
var $async$acx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.U_(),$async$acx)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acx,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a05(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.H6&&i!==D.QC&&i!==D.yI
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.H6||t===D.QC||t===D.yI?l:A.aH(l,l,l,l,C.kL,l,l,l,m.gaWN(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pz(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc_2(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.H6){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc2O(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bMl,D.fex,new B.d_G(m,d),l)],p))}if(m.a.e===D.H6&&m.gaU2()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bIW,D.fbl,new B.d_H(m,d),l)],p))
if(m.a.e===D.yI){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Dz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l)],p))}if(m.a.e===D.QC){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Dz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m9,l,l,l),C.ac,A.dp(D.bEK,D.fhx,m.gcmy(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oa(i,A.cb(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.ba,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(N.Bk,C.SZ,new B.d_I(m,d),l),1),C.aw,A.D(A.dp(C.y8,C.a6Z,new B.d_J(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zd,m.gaWN(),A.bk(C.aI,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d_K(),y.C)}}
B.ab_.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.pz(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ah)
return A.eh(A.a([A.bJ(C.ze,new B.d_3(d),x)],u),x,x,C.mC,v,x,x,x,x,D.f4G,x)}}
B.Y3.prototype={
T(){return new B.axD(A.yM(C.x_,C.nm,C.tK))}}
B.axD.prototype={
q(){this.d.q()
this.a2()},
avj(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a5(x,!1).N(t)
return}}},
B(d){var x=null
return A.cb(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fbP,x,x,x,1,x,!0),C.w,A.yL(this.d,C.bQ,this.gavi()),x,!1,!1,x,x)}}
B.Ya.prototype={
T(){return new B.axJ(A.yM(C.x_,C.nm,C.tK))},
gdc(){return this.c}}
B.axJ.prototype={
bW9(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aep(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aep=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Re("text/plain"),$async$aep)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eMC)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aep,w)},
a9c(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9c=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hgg(p,!0),$async$a9c)
case 3:t=e
p=t==null
s=B.a5W(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eJe)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a9c,w)},
q(){this.d.q()
this.a2()},
avj(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bW9(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.al_,v,v,v,w.gbKy(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_H,v,v,v,w.gccJ(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qL:P.MG,v,v,v,v,v),v,v,v,new B.d_O(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fik,v,v,v,1,v,!0)
u=A.yL(w.d,C.bQ,w.gavi())
x=A.m(20)
return A.cb(t,C.w,new A.an(C.W,v,C.aa,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e6G],s),v),v,!1,!1,v,v)}}
B.bbw.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oj
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oj:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Y0,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.eo,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.af)}}
B.a8i.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NC.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wa.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NB.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Er.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgy.prototype={}
B.Eq.prototype={}
B.a8h.prototype={}
B.as7.prototype={}
B.Wb.prototype={}
var z=a.updateTypes(["ay<~>()","R(jf)","n(jf)","TR(Y)","~()","Y6(Y)","G(G,jf)","OK(Y)","~(lP)","cn(Eq)","ay<jf?>(@)","TP(Y)","TT(Y)","C(jf)","jf(@)","a4<n,@>(jf)","Y5(Y)","TQ(Y)","Y7(Y)","Y4(Y)","Y9(Y)","ab_(Y)","ak<jf>()","Ya(Y)","ab1(Y,G)","Y3(Y)","a4<n,aC>(jf)","cn(Wa)","cn(a8h)","ay<cn>(Eq)"])
B.cgu.prototype={
$1(d){var x=this.a
x.x=D.aJI
x.y.J(0,D.aJI)},
$S:70}
B.cgv.prototype={
$1(d){var x=this.a
x.x=D.aJH
x.y.J(0,D.aJH)},
$S:70}
B.cgw.prototype={
$1(d){var x=this.a
x.afJ(A.aNf(d.data)).bz(new B.cgt(x),y.b)},
$S:70}
B.cgt.prototype={
$1(d){var x=this.a
x.z.J(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgx.prototype={
$1(d){},
$S:70}
B.cgA.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hzu(d.channel))},
$S:15}
B.cgB.prototype={
$1(d){},
$S:15}
B.cgC.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hSp(w.iceConnectionState)
x.cx=w
if($.fUV())switch(w.a){case 0:x.cy=D.aJN
break
case 1:x.cy=D.aJO
break
case 3:x.cy=D.aJP
break
case 5:x.cy=D.aJL
break
case 6:x.cy=D.aJM
break
case 7:x.cy=D.a4L
break
default:break}},
$S:148}
B.cgD.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hSq(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cgE.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i1y(w.signalingState)},
$S:148}
B.cgF.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i_O(w.connectionState)},
$S:148}
B.cgG.prototype={
$1(d){},
$S:148}
B.cgH.prototype={
$1(d){},
$S:15}
B.fdL.prototype={
$1(d){var x=y.F.a(new A.rt([],[]).ph(d.target.result,!1)),w=C.x0.t(x.objectStoreNames,"blobs")
if(!w)C.wX.K6(x,"blobs")},
$S:186}
B.fzy.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vq.f6(this.b)
$.eQ.mb()
this.c.$1(d)},
$S:453}
B.fzA.prototype={
$1(d){return this.a.$1(B.hIk(this.b,this.c))},
$S:33}
B.fzz.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.fzx.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fzN.prototype={
$1(d){var x=this
return B.h5W(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzO.prototype={
$1(d){var x=this
return B.h5W(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.ff6.prototype={
$1(d){var x=this
return B.c5e(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_m.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_j.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5e(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_l.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5e(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_k.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5e(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_o.prototype={
$4(d,e,f,g){var x=null
return A.jA(A.A(A.a([A.aH(x,x,x,x,D.bDn,x,x,x,new B.d_n(d),x,x,x,x,x,x),A.D(A.Ec(D.P3,!0,x,C.ZM,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.P3,x,g,C.agQ,0,e,f)},
$C:"$4",
$R:4,
$S:401}
B.d_n.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fh5.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i3:C.c,r=A.m(28),q=A.p(v,D.biU,C.f,v,v,D.aXD,v,v,v,v,D.agF,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bHu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.EU,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ale,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.D(A.dT(C.dd,new B.fh3(d),v),1),C.aw,A.D(A.bJ(D.fao,new B.fh4(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Xn,v,v,v,v),v)},
$S:59}
B.fh3.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fh4.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eKl)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAe(v,x))},
$S:0}
B.fhz.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i3:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.biK,C.f,w,w,D.aZ3,w,w,w,w,D.agF,w,w,1/0),new A.C(C.EU,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fRa(u,"Organization name",C.Fk,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fRa(u,"Access code",C.mY,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fRa(u,"Member password",H.FR,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.fio,new B.fhy(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Xn,w,w,w,w),w)},
$S:59}
B.fhy.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eKq)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDq(u,x,w))},
$S:0}
B.c55.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a8(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cv(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.uZ(p,null).cN(0,C.X2),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cp(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B4(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a9(h)
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
B.c5b.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5c.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c5d.prototype={
$1(d){return d.b},
$S:z+2}
B.c57.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c58.prototype={
$1(d){return d.b},
$S:z+2}
B.c56.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c59.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c5a.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fzL.prototype={
$1(d){return new B.TP(this.a,null)},
$S:z+11}
B.fzM.prototype={
$1(d){return new B.TT(this.a,this.b,this.c,null)},
$S:z+12}
B.dLs.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dMB.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dMC.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dMD.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dMA(x,d))},
$S:2}
B.dMA.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dME.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMF.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dMG.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dMH.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMI.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dMJ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMM.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.dMK.prototype={
$1(d){var x=this.a
return x.f?null:x.YA()},
$S:2}
B.dML.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mg(D.Pi))s=C.ty
else s=C.a.a0(s,"video/")||d.mg(D.mk)?C.pD:D.ajE
x=this.b.a
w=y.p
return new A.C(C.kE,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.ganY(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dLt.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dLu.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c5f.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.c5g.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.fAo.prototype={
$2(d,e){return e===this.a},
$S:305}
B.faY.prototype={
$1(d){return J.k(d)},
$S:17}
B.ffi.prototype={
$1(d){var x=this.b
B.hGl(C.F7.ga5_(this.a)).bz(x.gcBU(x),y.H)},
$S:123}
B.ffj.prototype={
$1(d){return this.a.d3(0,null)},
$S:123}
B.ffk.prototype={
$0(){return null},
$S:11}
B.c5u.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ffl.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
v=v==null?q:C.k.O(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.S(Date.now(),0,!1).a5().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jf(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fjg.prototype={
$1(d){return d.ad()},
$S:z+15}
B.fdZ.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fe_.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5z.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mg(D.mk)},
$S:z+1}
B.fEq.prototype={
$1(d){return new B.Y5(this.a,null)},
$S:z+16}
B.d_i.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fE()},
$S:8}
B.d_g.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_h.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMz.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_C()},
$S:14}
B.dLX.prototype={
$0(){var x=J.bCf(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLY.prototype={
$0(){var x=J.bCf(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLw.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dLv(this.b))
if(w>=0){x=x.d
x[w]=x[w].aC0(this.c)}},
$S:0}
B.dLv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLx.prototype={
$0(){var x=J.bCf(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dLC.prototype={
$0(){var x=this.a,w=C.d.bd(x.d,new B.dLB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aC0(this.c)}},
$S:0}
B.dLB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMn.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dMo.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dLU.prototype={
$1(d){return new B.TQ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dLR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Hx(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TU(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.ti(),$async$$0)
case 5:s=J.a8(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a_N(s.gM(t)),$async$$0)
case 8:case 7:r.hS(s.gal(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLA.prototype={
$1(d){this.a.aaw(d,"No files selected.","Added")},
$S:453}
B.dM1.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dM0(),A.T(x).k("J<1,n>")))},
$S:0}
B.dM0.prototype={
$1(d){return d.a},
$S:z+2}
B.dLG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wN.c4().cOh(C.YR,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gal(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jk(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a9(j)
$.am.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hS("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hS("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anO(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hS("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.ti(),$async$$0)
case 9:o.hS("Imported "+J.ac(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dMk.prototype={
$1(d){return new B.OK(this.a.a.c,this.b,null)},
$S:z+7}
B.dMl.prototype={
$1(d){return new B.Y7(this.a.a.c,this.b,null)},
$S:z+18}
B.dMm.prototype={
$1(d){return new B.Y4(this.a.a.c,this.b,null)},
$S:z+19}
B.dLS.prototype={
$1(d){return new B.OK(this.a.a.c,this.b,null)},
$S:z+7}
B.dLT.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.J(0,w)},
$S:0}
B.dMd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Hx(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5Y(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hS("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ciC(),$async$$0)
case 5:x=6
return A.b(p.ti(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dM9(p),r),new B.dMa(),r.k("J<aj.E,n>")).bZ(0,new B.dMb())
q=A.B(r,r.$ti.k("H.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).ce(A.ej(new B.dMc(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oT(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.U_(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM9.prototype={
$1(d){var x=this.a,w=C.d.bd(x.d,new B.dM8(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dM8.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMa.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dMb.prototype={
$1(d){return d.length!==0},
$S:3}
B.dMc.prototype={
$1(d){var x=this.a
return new B.Y9(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dMe.prototype={
$1(d){return d.a},
$S:z+2}
B.dMf.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dM7.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kD,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.ganY(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mg(D.mk)?C.tA:C.ow
p=!x||p.mg(D.mk)?"Play video":"View"
return A.bY(A.bm(!0,new A.C(C.AB,A.v(A.a([q,o,t,C.az,B.Y8(!1,u,!1,w,p,new B.dM2(d),v),B.Y8(!1,u,!1,C.jb,"Share via QR",new B.dM3(d),"Letters/numbers QR code"),B.Y8(!1,u,!1,D.ZS,"Send to their Code",new B.dM4(d),"Enter someone else's personal code"),B.Y8(!1,u,!1,C.hx,"Download / save",new B.dM5(d),v),C.ao,B.Y8(!1,u,!0,C.e4,"Delete",new B.dM6(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bP(new A.az(r,1,C.r,-1),C.Y,C.Y,C.Y),C.ku,v,v,C.n),C.bd)},
$S:688}
B.dM2.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dM3.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dM4.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dM5.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dM6.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dLD.prototype={
$1(d){return d.a},
$S:z+2}
B.dLE.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLF.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6_(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FQ(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oT(s.c,s.f),$async$$0)
case 4:u.hS(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLz.prototype={
$1(d){var x=this.a
x.tj(new B.dLy(x,d,this.b),"Preparing\u2026")},
$S:453}
B.dLy.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hS("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TU(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hS("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBa(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hS("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLV.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dLW.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fMi(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.J(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FN(new B.dLL(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hS("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dLM(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dLN(s))
case 5:x=8
return A.b(r.b.i7(0,C.EC,new B.dLO()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gal(t)){s.hS("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.ti(),$async$$0)
case 9:s.hS("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLL.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLI(x,d,e))},
$S:133}
B.dLI.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLM.prototype={
$1(d){return new B.ab_(this.a.a,null)},
$S:z+21}
B.dLN.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dLO.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dLQ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HI(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5O(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aYN(B.HI(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anO(new B.dLJ(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fMh(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hS(q)
x=1
break}x=10
return A.b(s.ti(),$async$$0)
case 10:o=J.cE(r)
p=o.eI(r,new B.dLK()).gM(0)
s.hS(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLJ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLH(x,d,e))},
$S:133}
B.dLH.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dLK.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mg(D.mk)},
$S:z+1}
B.dM_.prototype={
$1(d){return new B.Ya(this.a.a.c,null)},
$S:z+23}
B.dLZ.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aY6(u.a.c,v.b),$async$$0)
case 2:t.hS(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMj.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bY(A.bm(!0,new A.C(C.AB,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kD,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.Y8(!0,w,!1,C.mY,"My Code",new B.dMg(d),"Your personal code & QR \u2014 others send docs to you"),B.Y8(!1,w,!1,D.ZS,"Send to their Code",new B.dMh(this.a,d),"Enter someone else's 5-digit code + letter"),B.Y8(!1,w,!1,S.xY,"Import backup",new B.dMi(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bP(new A.az(t,1,C.r,-1),C.Y,C.Y,C.Y),C.ku,x,x,C.n),C.bd)},
$S:688}
B.dMg.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dMh.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.bzi()},
$S:0}
B.dMi.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dMw.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HR(D.P3,x,C.ZM,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.P3).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dMu.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMv.prototype={
$0(){this.a.agH()
return null},
$S:0}
B.dMx.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:107}
B.dMy.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ab1(e,w,v,this.b,x.e,x.c2P(w),new B.dMq(x,w),new B.dMr(x,v,w),new B.dMs(x,w),new B.dMt(x,w),null)},
$S:z+24}
B.dMq.prototype={
$0(){this.a.adX(this.b)
return null},
$S:0}
B.dMr.prototype={
$0(){var x=this.a
return x.m(new B.dMp(x,this.b,this.c))},
$S:0}
B.dMp.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.J(0,w)},
$S:0}
B.dMs.prototype={
$0(){this.a.Nb(this.b)
return null},
$S:0}
B.dMt.prototype={
$0(){this.a.agu(this.b)
return null},
$S:0}
B.d_e.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:107}
B.d_f.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:139}
B.d_C.prototype={
$3(d,e,f){return A.dc(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:107}
B.d_B.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d_y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_z.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_A.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_w.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gal(w))return A.fL(w,C.A,x,new B.d_u(this.a),C.fQ,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d_v(this.a))
return C.bH},
$S:129}
B.d_u.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_s(this.a))
return C.bH},
$S:187}
B.d_s.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_p(x))},
$S:8}
B.d_p.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_v.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_r(x))},
$S:8}
B.d_r.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_x.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_t(this.a))
return C.bH},
$S:187}
B.d_t.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_q(x))},
$S:8}
B.d_q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_b.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_a(x,d))},
$S:1740}
B.d_a.prototype={
$0(){return this.a.f=this.b===C.u6},
$S:0}
B.d_c.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_9(x,d))},
$S:8}
B.d_9.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_d.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_8(x,d))},
$S:8}
B.d_8.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d_4.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d_5.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d_6.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d_7.prototype={
$1(d){return this.a.d.Mc(0,A.dB(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d_P.prototype={
$0(){var x=this.a.a
return B.r8(x.c,x.d)},
$S:1741}
B.d_Q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d_R.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d_S.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d_T.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d_U.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d_W.prototype={
$0(){var x=this.a
x.m(new B.d_V(x))},
$S:0}
B.d_V.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fZ(0)
else x.pv(0)},
$S:0}
B.d_L.prototype={
$1(d){return this.a.PL(this.b)},
$S:14}
B.d_M.prototype={
$1(d){return this.a.PK(this.b)},
$S:14}
B.d_D.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_E.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_F.prototype={
$1(d){return D.fF1},
$S:z+25}
B.d_K.prototype={
$2(d,e){if(d)B.U_()},
$S:118}
B.d_G.prototype={
$0(){return this.a.a8r(this.b)},
$S:0}
B.d_H.prototype={
$0(){return this.a.a8o(this.b)},
$S:0}
B.d_I.prototype={
$0(){return this.a.acw(this.b)},
$S:0}
B.d_J.prototype={
$0(){return this.a.a0q(this.b)},
$S:0}
B.d_3.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d_O.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pz(),$async$$0)
case 2:u.m(new B.d_N(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d_N.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5B.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mg(D.mk)},
$S:z+1}
B.c5C.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5A.prototype={
$2(d,e){return this.bgJ(d,e)},
bgJ(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.U0(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fiU.prototype={
$1(d){if(d===D.a4K&&(this.a.a.a&30)===0)this.a.fL(0)},
$S:z+27}
B.fiV.prototype={
$0(){},
$S:11}
B.fjr.prototype={
bii(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f86(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h17(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bii(d,e)},
$S:730}
B.fjq.prototype={
$1(d){var x=this
d.b=new B.fjp(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fjp.prototype={
$1(d){return this.bih(d)},
bih(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aY7(n,m),$async$$1)
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
return A.b(B.f86(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a9(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a5X(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d3(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axG.prototype,"gc9G","Pm",0)
x(v,"gcax","Iy",0)
x(v,"gca2","xx",0)
x(v=B.aBB.prototype,"gc2J","acu",0)
x(v,"gc2K","Yz",0)
x(v,"gcoV","agb",0)
x(v=B.aBE.prototype,"gc2L","YA",0)
x(v,"gcoW","a0K",0)
x(B.aBC.prototype,"gc2M","acv",0)
x(B.axF.prototype,"gc2R","c2S",4)
x(v=B.aBD.prototype,"gca3","ZG",0)
x(v,"gcnx","cny",4)
x(v,"gaZV","awH",0)
x(v,"gcqn","agB",0)
x(v,"gbL_","Wy",0)
x(v,"gc2Q","DI",0)
x(B.axH.prototype,"gb2F","a0J",0)
x(B.axE.prototype,"gc2T","YB",0)
x(v=B.axK.prototype,"gaYB","c8l",4)
x(v,"gc2N","acy",0)
x(v=B.axI.prototype,"gcmy","a0v",0)
x(v,"gaWN","acx",0)
w(B.axD.prototype,"gavi","avj",8)
x(v=B.axJ.prototype,"gccJ","aep",0)
x(v,"gbKy","a9c",0)
w(v,"gavi","avj",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgy,B.a8h,B.as7,B.aAe,B.aDq,B.jf,B.aaI,B.btb,B.Eq,B.Wb])
w(B.cgz,B.cgy)
w(B.b2d,B.a8h)
x(A.hS,[B.cgu,B.cgv,B.cgw,B.cgt,B.cgx,B.cgA,B.cgB,B.cgC,B.cgD,B.cgE,B.cgF,B.cgG,B.cgH,B.fdL,B.fzy,B.fzA,B.fzz,B.fzN,B.fzO,B.ff6,B.d_j,B.d_l,B.d_k,B.d_o,B.fh5,B.fhz,B.c55,B.c5c,B.c5d,B.c58,B.c56,B.c59,B.c5a,B.fzL,B.fzM,B.dMD,B.dMM,B.dMK,B.dML,B.faY,B.ffi,B.ffj,B.c5u,B.ffl,B.fjg,B.fdZ,B.fe_,B.c5z,B.fEq,B.d_i,B.d_g,B.dMz,B.dLv,B.dLB,B.dLU,B.dLA,B.dM0,B.dMk,B.dMl,B.dMm,B.dLS,B.dM9,B.dM8,B.dMa,B.dMb,B.dMc,B.dMe,B.dMf,B.dM7,B.dLD,B.dLE,B.dLz,B.dLV,B.dLM,B.dLK,B.dM_,B.dMj,B.dMw,B.dMx,B.d_e,B.d_f,B.d_C,B.d_B,B.d_w,B.d_u,B.d_s,B.d_v,B.d_x,B.d_t,B.d_b,B.d_c,B.d_d,B.d_7,B.d_L,B.d_M,B.d_F,B.c5B,B.c5C,B.fiU,B.fjq,B.fjp])
w(B.b2e,B.as7)
x(A.j2,[B.fzx,B.d_m,B.d_n,B.fh3,B.fh4,B.fhy,B.dLs,B.dMB,B.dMC,B.dMA,B.dME,B.dMF,B.dMG,B.dMH,B.dMI,B.dMJ,B.dLt,B.dLu,B.ffk,B.d_h,B.dLX,B.dLY,B.dLw,B.dLx,B.dLC,B.dMn,B.dMo,B.dLR,B.dM1,B.dLG,B.dLT,B.dMd,B.dM2,B.dM3,B.dM4,B.dM5,B.dM6,B.dLF,B.dLy,B.dLW,B.dLP,B.dLI,B.dLN,B.dLO,B.dLQ,B.dLH,B.dLZ,B.dMg,B.dMh,B.dMi,B.dMu,B.dMv,B.dMq,B.dMr,B.dMp,B.dMs,B.dMt,B.d_y,B.d_z,B.d_A,B.d_p,B.d_r,B.d_q,B.d_a,B.d_9,B.d_8,B.d_4,B.d_5,B.d_6,B.d_P,B.d_Q,B.d_R,B.d_S,B.d_T,B.d_U,B.d_W,B.d_V,B.d_D,B.d_E,B.d_G,B.d_H,B.d_I,B.d_J,B.d_3,B.d_O,B.d_N,B.fiV])
x(A.m_,[B.ab0,B.MB,B.a8i,B.NC,B.Wa,B.NB,B.Er])
x(A.ag,[B.Y6,B.TP,B.TT,B.TQ,B.Y5,B.TR,B.Y7,B.Y4,B.OK,B.Y9,B.Y3,B.Ya])
x(A.ah,[B.axG,B.aBB,B.aBE,B.aBC,B.axF,B.aBD,B.axH,B.axE,B.axK,B.axI,B.axD,B.axJ])
x(A.au,[B.abs,B.axC,B.bbv,B.ab1,B.ab_,B.bbw])
x(A.kc,[B.c5b,B.c57,B.c5f,B.c5g,B.fAo,B.dLL,B.dLJ,B.dMy,B.d_K,B.c5A,B.fjr])
x(A.iN,[B.bgP,B.bsQ])})()
A.jR(b.typeUniverse,JSON.parse('{"b2d":{"a8h":[]},"b2e":{"as7":[]},"Y6":{"ag":[],"r":[]},"axG":{"ah":["Y6"]},"abs":{"au":[],"r":[]},"TP":{"ag":[],"r":[]},"TT":{"ag":[],"r":[]},"aBB":{"ah":["TP"]},"aBE":{"ah":["TT"]},"bgP":{"iN":[]},"TQ":{"ag":[],"r":[]},"aBC":{"ah":["TQ"]},"Y5":{"ag":[],"r":[]},"TR":{"ag":[],"r":[]},"ab1":{"au":[],"r":[]},"Y7":{"ag":[],"r":[]},"Y4":{"ag":[],"r":[]},"OK":{"ag":[],"r":[]},"Y9":{"ag":[],"r":[]},"ab_":{"au":[],"r":[]},"Y3":{"ag":[],"r":[]},"Ya":{"ag":[],"r":[]},"axF":{"ah":["Y5"]},"bsQ":{"iN":[]},"aBD":{"ah":["TR"]},"axC":{"au":[],"r":[]},"bbv":{"au":[],"r":[]},"axH":{"ah":["Y7"]},"axE":{"ah":["Y4"]},"axK":{"ah":["OK"]},"axI":{"ah":["Y9"]},"axD":{"ah":["Y3"]},"axJ":{"ah":["Ya"]},"bbw":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tS"),k:x("L4()"),m:x("bq<n,n>"),F:x("qL"),g:x("ay<jf?>"),x:x("ay<~>"),V:x("P<ad>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a4<n,R>>"),t:x("P<a4<n,@>>"),r:x("P<jf>"),w:x("P<+file,name(lq,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iN>"),a:x("P<dD>"),p:x("P<r>"),Z:x("P<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ak<jf>"),j:x("ak<@>"),I:x("ak<G>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iy"),e:x("i5q"),af:x("DG"),U:x("jf"),b:x("cn"),C:x("aC"),aK:x("vL"),ab:x("Eq"),br:x("as7"),v:x("Wb"),N:x("n"),X:x("bn<O>"),Q:x("lB"),D:x("dD"),aw:x("cz<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bS<ak<jf>>"),aW:x("bS<dD?>"),aY:x("bS<~>"),cx:x("ab0"),b1:x("bg<ak<jf>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAe"),bG:x("aDq"),q:x("mR"),B:x("p9<Eq>"),c6:x("p9<a8i>"),y:x("R"),i:x("O"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ak<jf>?"),aL:x("ak<@>?"),h:x("a4<n,@>?"),l:x("jf?"),R:x("aC?"),c:x("Wb?"),d:x("+answerQr,transfer(n,ay<ak<jf>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,MB,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaI?"),bk:x("aAe?"),ag:x("aDq?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aVY=new A.az(C.aE,2,C.r,-1)
D.bQu=new A.a7(C.a3,C.a7,C.x,C.a0M,null,null)
D.aXD=new A.o(null,null,null,C.lV,null,D.bQu,C.n)
D.aZ3=new A.o(null,null,null,C.lV,null,E.G3,C.n)
D.aaF=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.abN=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.acA=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.ae2=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f5y=new A.x("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.fjh=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Is,null,null,null,null,null,null,null,null,null)
D.cYI=x([D.f5y,C.ao,D.fjh],y.p)
D.biB=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYI,null)
D.fno=new A.x("Create your organization",null,C.ho,null,null,null,null,null,null,null,null,null)
D.f9G=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Is,null,null,null,null,null,null,null,null,null)
D.dce=x([D.fno,C.ao,D.f9G],y.p)
D.biK=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dce,null)
D.fjQ=new A.x("Team Member sign-in",null,C.ho,null,null,null,null,null,null,null,null,null)
D.fdl=new A.x("Enter the access code and password from your organization.",null,G.Is,null,null,null,null,null,null,null,null,null)
D.dad=x([D.fjQ,C.ao,D.fdl],y.p)
D.biU=new A.fl(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dad,null)
D.box=new A.Q(16,10,16,28)
D.boF=new A.Q(16,14,16,4)
D.bpS=new A.Q(20,0,20,16)
D.bqn=new A.Q(20,8,20,16)
D.agF=new A.Q(24,22,24,20)
D.ZS=new A.a0(63394,"MaterialIcons",!1)
D.ajE=new A.a0(63515,"MaterialIcons",!1)
D.bBj=new A.a0(983813,"MaterialIcons",!1)
D.byB=new A.a0(62867,"MaterialIcons",!1)
D.bCj=new A.ae(D.byB,44,C.c,null,null,null)
D.bDn=new A.ae(C.ps,null,C.ad,null,null,null)
D.bEK=new A.ae(C.iP,18,null,null,null,null)
D.bGq=new A.ae(D.ZS,26,C.c,null,null,null)
D.bGW=new A.ae(C.Bd,null,null,null,null,null)
D.bHu=new A.ae(C.y_,null,null,null,null,null)
D.bIC=new A.ae(W.MU,null,null,null,null,null)
D.bIW=new A.ae(C.hi,16,null,null,null,null)
D.bMl=new A.ae(C.qP,16,null,null,null,null)
D.bCA=new A.ae(C.mY,null,null,null,null,null)
D.bNb=new A.e_(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bI1=new A.ae(C.Fk,null,null,null,null,null)
D.bNg=new A.e_(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bI1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCV=new A.ae(H.FR,null,null,null,null,null)
D.bNr=new A.e_(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cA1=x([C.f6,C.aZ,C.aE],y.O)
D.bSl=new A.a7(C.ax,C.aD,C.x,D.cA1,null,null)
D.czw=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.P3=x([C.f6,C.aE],y.O)
D.Pi=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mk=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d5e=x([C.p8,C.aE],y.O)
D.dWz={iceServers:0}
D.aEn={urls:0}
D.dfP=new A.bq(D.aEn,["stun:stun.l.google.com:19302"],y.m)
D.dfO=new A.bq(D.aEn,["stun:stun1.l.google.com:19302"],y.m)
D.cPw=x([D.dfP,D.dfO],A.ax("P<a4<n,n>>"))
D.df9=new A.bq(D.dWz,[D.cPw],A.ax("bq<n,@>"))
D.H6=new B.MB(0,"lanDirect")
D.QB=new B.MB(1,"cloudStash")
D.dqB=new B.MB(2,"inlineInstant")
D.QC=new B.MB(3,"webrtcLink")
D.yI=new B.MB(4,"videoCloud")
D.fjg=new A.x("Receive file",null,C.ne,null,null,null,null,null,null,null,null,null)
D.cpF=x([E.aln,C.ab,D.fjg],y.p)
D.eCc=new A.co(C.aQ,C.ba,C.j,C.m,null,C.p,null,0,D.cpF,null)
D.e18=new A.C(C.cf,D.eCc,null)
D.eXQ=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1p,null,null,null)
D.f65=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eXQ,null,C.L,null,null,null,null,null,null,null)
D.e0s=new A.C(C.AH,D.f65,null)
D.b2h=new A.cq(C.A,null,null,D.e0s,null)
D.e6G=new A.cL(0,null,0,28,null,null,D.b2h,null)
D.e6Z=new B.a8i(0,"RTCDataChannelConnecting")
D.aJH=new B.a8i(1,"RTCDataChannelOpen")
D.aJI=new B.a8i(3,"RTCDataChannelClosed")
D.e7_=new B.Er(0,"RTCIceConnectionStateNew")
D.e70=new B.Er(1,"RTCIceConnectionStateChecking")
D.e71=new B.Er(2,"RTCIceConnectionStateCompleted")
D.e72=new B.Er(3,"RTCIceConnectionStateConnected")
D.e73=new B.Er(4,"RTCIceConnectionStateCount")
D.e74=new B.Er(5,"RTCIceConnectionStateFailed")
D.e75=new B.Er(6,"RTCIceConnectionStateDisconnected")
D.aJJ=new B.Er(7,"RTCIceConnectionStateClosed")
D.aJK=new B.Wa(0,"RTCIceGatheringStateNew")
D.e76=new B.Wa(1,"RTCIceGatheringStateGathering")
D.a4K=new B.Wa(2,"RTCIceGatheringStateComplete")
D.a4L=new B.NB(0,"RTCPeerConnectionStateClosed")
D.aJL=new B.NB(1,"RTCPeerConnectionStateFailed")
D.aJM=new B.NB(2,"RTCPeerConnectionStateDisconnected")
D.aJN=new B.NB(3,"RTCPeerConnectionStateNew")
D.aJO=new B.NB(4,"RTCPeerConnectionStateConnecting")
D.aJP=new B.NB(5,"RTCPeerConnectionStateConnected")
D.e77=new B.NC(0,"RTCSignalingStateStable")
D.e78=new B.NC(1,"RTCSignalingStateHaveLocalOffer")
D.e79=new B.NC(2,"RTCSignalingStateHaveRemoteOffer")
D.e7a=new B.NC(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e7b=new B.NC(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aJQ=new B.NC(5,"RTCSignalingStateClosed")
D.eGa=new A.at(160,48)
D.b3q=new A.fh(2,null,null,null,null,C.aE,null,null,null,null)
D.eHE=new A.a6(16,16,D.b3q,null)
D.f96=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ4=new A.b1(D.f96,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fgg=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eJ7=new A.b1(D.fgg,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.foq=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eJe=new A.b1(D.foq,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8K=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eJE=new A.b1(D.f8K,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjZ=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aMq=new A.b1(D.fjZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.flk=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eK6=new A.b1(D.flk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpO=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eKl=new A.b1(D.fpO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fnS=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eKq=new A.b1(D.fnS,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fp2=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eLb=new A.b1(D.fp2,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f7r=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eLI=new A.b1(D.f7r,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fi0=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eM2=new A.b1(D.fi0,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fbb=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eMy=new A.b1(D.fbb,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpU=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eMC=new A.b1(D.fpU,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f7H=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eMI=new A.b1(D.f7H,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f6p=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eMX=new A.b1(D.f6p,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f3q=new A.x("NGMY DOC SHARE",null,C.aNH,null,null,null,null,null,null,null,null,null)
D.f4G=new A.x("Show this to sender",null,C.kq,null,null,null,null,null,null,null,null,null)
D.f5F=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fa3=new A.x("Organization settings",null,C.cu,null,null,null,null,null,null,null,null,null)
D.fao=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fbl=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fbP=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fex=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fhe=new A.x("Send to their Doc Share",null,C.nc,null,null,null,null,null,null,null,null,null)
D.fhx=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhQ=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fik=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fio=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fiL=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.flM=new A.x("Share files & videos\nwith a scan.",null,C.aNI,null,null,null,null,null,null,null,null,null)
D.fm4=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fF1=new B.Y3(null)
D.a7L=new B.ab0(0,"docShare")
D.a7M=new B.ab0(1,"gate")
D.Tu=new B.ab0(2,"gateNoIndividual")})();(function staticFields(){$.aM2=null
$.f5W=function(){var x=y.N
return A.V(x,x)}()
$.Fz=A.V(y.N,y.D)
$.aeY=A.V(y.N,A.ax("lq"))
$.Q0=A.V(y.N,y.D)
$.f6t=A.V(y.N,A.ax("aaI"))
$.c5t=A.V(y.S,A.ax("btb"))
$.h16=1
$.hOd=null
$.hOc=null
$.hFM=null
$.fRm=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i5V","hi6",()=>new B.cgz())
x($,"i3Q","fUV",()=>C.a.t(A.bt(A.bt(A.bt(A.G9(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["UCsjdaTXY1yS3dp+Ez3UOp7199c="]=a.current})($__dart_deferred_initializers__);