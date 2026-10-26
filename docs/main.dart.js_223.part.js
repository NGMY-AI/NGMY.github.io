((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cdo:function cdo(){},
hn7(d){var x=null,w=new B.b0k(d,D.dQP,new A.oQ(x,x,y.c6),new A.oQ(x,x,y.B))
w.brV(d)
return w},
b0k:function b0k(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cdj:function cdj(d){this.a=d},
cdk:function cdk(d){this.a=d},
cdl:function cdl(d){this.a=d},
cdi:function cdi(d){this.a=d},
cdm:function cdm(d){this.a=d},
hn8(d,e){var x=y.N
x=new B.b0l(d,e,A.S(x,y.e),A.S(x,y.z))
x.brW(d,e)
return x},
b0l:function b0l(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cdp:function cdp(d){this.a=d},
cdq:function cdq(d){this.a=d},
cdr:function cdr(d){this.a=d},
cds:function cds(d){this.a=d},
cdt:function cdt(d){this.a=d},
cdu:function cdu(d){this.a=d},
cdv:function cdv(d){this.a=d},
cdw:function cdw(d){this.a=d},
fF6(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.P(A.b9("IndexedDB not available"))
return C.xk.Kl(x,"ngmy_doc_share_v1",new B.f3w(),1)},
htB(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cl(d))
if(y.J.b(d))return new Uint8Array(A.cl(J.eO(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cl(A.AZ(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cl(d))
if(typeof d=="string")try{x=C.cw.aF(d)
return x}catch(w){return v}return v},
Pc(d,e){return B.hI6(d,e)},
hI6(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pc=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aKl
x=7
return A.b(o==null?$.aKl=B.fF6():o,$async$Pc)
case 7:s=g
r=new Uint8Array(A.cl(e))
q=J.mg(s,"blobs","readwrite")
C.ip.lL(J.me(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$Pc)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$Pc,w)},
Pb(d){return B.hI5(d)},
hI5(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Pb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aKl
x=7
return A.b(o==null?$.aKl=B.fF6():o,$async$Pb)
case 7:s=f
r=J.mg(s,"blobs","readonly")
x=8
return A.b(C.ip.yw(J.me(r,"blobs"),d),$async$Pb)
case 8:q=f
x=9
return A.b(J.oY(r),$async$Pb)
case 9:o=B.htB(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$Pb,w)},
ael(d){return B.hI4(d)},
hI4(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ael=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aKl
x=7
return A.b(p==null?$.aKl=B.fF6():p,$async$ael)
case 7:s=f
r=J.mg(s,"blobs","readwrite")
C.ip.Eq(J.me(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ael)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ael,w)},
f3w:function f3w(){},
hvN(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bku(w,v))}return u},
h3k(d,e){var x,w={},v=A.aSt("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fog(w,v,e)
C.uG.xp(v,"change",new B.foi(w,v,!1))
C.uG.xp(v,"cancel",new B.foh(w))
$.eI.lU()
v.click()
A.bK(C.abF,new B.fof(w),y.H)},
fog:function fog(d,e,f){this.a=d
this.b=e
this.c=f},
foi:function foi(d,e,f){this.a=d
this.b=e
this.c=f},
foh:function foh(d){this.a=d},
fof:function fof(d){this.a=d},
BI(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$BI=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gRJ()?3:4
break
case 3:x=5
return A.b(B.fZz(e,d,s,!0,!1,f,g,h,!1,i),$async$BI)
case 5:x=1
break
case 4:x=6
return A.b(B.OQ(d,s,f,g,h,i),$async$BI)
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
return A.b(B.GN(s,d),$async$BI)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f_5(s,d),$async$BI)
case 14:x=12
return A.b(r.fZz(q,p,o,n,m,l,k,j,a1,i),$async$BI)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).cs(A.eH(new B.fow(s,i,d,f,g,h),!1,null,y.H)),$async$BI)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).cs(A.eH(new B.fox(s,i,d,f,g,h),!1,null,y.H)),$async$BI)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$BI,w)},
OQ(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$OQ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW7(e),$async$OQ)
case 3:u=k
x=4
return A.b(B.aml(d,e,!1),$async$OQ)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.GN(e,d),$async$OQ)
case 7:if(k){v=D.a55
x=1
break}x=8
return A.b(B.SL(e),$async$OQ)
case 8:v=t?D.Rt:D.a56
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aW5(d,e)){v=D.a55
x=1
break}x=11
return A.b(B.SL(e),$async$OQ)
case 11:v=t?D.Rt:D.a56
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fAm(d,e)){v=D.a55
x=1
break}x=14
return A.b(B.SL(e),$async$OQ)
case 14:v=D.Rt
x=1
break
case 13:v=t?D.Rt:D.a56
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OQ,w)},
f_5(d,e){var x=0,w=A.j(y.y),v
var $async$f_5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aW5(e,d)){v=!1
x=1
break}x=3
return A.b(B.aW7(d),$async$f_5)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f_5,w)},
fZz(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).cs(A.eH(new B.f4P(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
fUP(d,e,f,g,h,i,j){return new B.WT(e,j,d,g,h,i,f,null)},
f6L(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$f6L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f6O(A.L(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$f6L)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f6L,w)},
f7f(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$f7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.at()
t=new A.ao(C.aq,u)
s=new A.ao(C.aq,u)
r=new A.ao(C.aq,u)
x=3
return A.b(A.c0(C.K,null,new B.f7h(A.L(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$f7f)
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
return A.i($async$f7f,w)},
fFe(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bl(x,new A.b1(4,A.m(16),C.W),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fgT(d,e){var x=0,w=A.j(y.H),v
var $async$fgT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.SL(e),$async$fgT)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).eC()
case 1:return A.h(v,w)}})
return A.i($async$fgT,w)},
fow:function fow(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fox:function fox(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
a9L:function a9L(d,e){this.a=d
this.b=e},
f4P:function f4P(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
WT:function WT(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
awd:function awd(){this.c=this.a=this.d=null},
cWG:function cWG(d,e){this.a=d
this.b=e},
cWD:function cWD(d){this.a=d},
cWF:function cWF(d){this.a=d},
cWE:function cWE(d){this.a=d},
cWI:function cWI(){},
cWH:function cWH(d){this.a=d},
aac:function aac(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
ayH:function ayH(d,e){this.a=d
this.b=e},
aBO:function aBO(d,e,f){this.a=d
this.b=e
this.c=f},
f6O:function f6O(d,e,f){this.a=d
this.b=e
this.c=f},
f6M:function f6M(d){this.a=d},
f6N:function f6N(d,e,f){this.a=d
this.b=e
this.c=f},
f7h:function f7h(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
f7g:function f7g(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c24(d,e,f,g,h){return B.hi5(d,e,f,g,h)},
hi5(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c24=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a6(d)
q=r.gH(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iz(r.di(d,new B.c25(s,e,h,g,f,q),y.g),y.l),$async$c24)
case 3:r=p.aU(j)
case 4:if(!r.C()){x=5
break}t=r.gT(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c24,w)},
aW2(d,e,f,g,h){return B.hi6(d,e,f,g,h)},
hi6(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aW2=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.arz("GET",d)
o=A.fwT()
if(o==null)o=new A.K_(A.a([],y.W))
x=7
return A.b(o.eL(0,s).cJ(0,C.Dq),$async$aW2)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bc(),$async$aW2)
case 8:q=j
if(J.a9(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Ao(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
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
return A.i($async$aW2,w)},
aW1(d){return B.hi3(d)},
hi3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aW1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uw(d,null).cJ(0,C.ng),$async$aW1)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.Q.aE(0,A.io(A.im(p.e)).c6(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
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
return A.i($async$aW1,w)},
c23(d){return B.hi4(d)},
hi4(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c23=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uw(d,null).cJ(0,C.oV),$async$c23)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.io(A.im(q.e)).c6(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a4(o)
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
return A.i($async$c23,w)},
c25:function c25(d,e,f,g,h,i){var _=this
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
GL(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=A.ad("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hib(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.GL(C.a.aV(u,v.length))}return null},
hic(d){var x=B.GL(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hi7(){var x,w=$.oW(),v=J.dZ(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fM(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a4y(d){return B.hi8(d)},
hi8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a4y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eT(d,null,!1,C.bD),$async$a4y)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$a4y,w)},
a4z(d,e){return B.hi9(d,e)},
hi9(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a4z=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hr(d,e,!1,!1,C.cz,null),$async$a4z)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$a4z,w)},
An(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$An=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aw(),$async$An)
case 3:u=f
t=C.a.i(i)
s=A.aR(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.GL(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a4A(r),$async$An)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a4y("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$An)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.GL(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$An)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hi7()
x=14
return A.b(B.a4A(m),$async$An)
case 14:if(f!=null){x=12
break}l=new A.O(Date.now(),0,!1).a4().aa()
x=15
return A.b(B.a4z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$An)
case 15:k=f
x=16
return A.b(B.a4z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$An)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.an("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$An)
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
return A.i($async$An,w)},
a4A(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a4A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.GL(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a4y("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a4A)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
a4B(d,e,f,g){return B.hid(d,e,f,g)},
hid(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a4B=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a6(d)
if(g.gah(d)){v=!1
x=1
break}r=B.GL(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a4A(r),$async$a4B)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c2b())>1048576||g.bf(d,new B.c2c())){v=B.D6(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a4M("myCode",d,a0),$async$a4B)
case 4:u=a3
try{t=C.Q.aE(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ci(s)||J.a9(s)!==g.gH(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.a9(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.D6(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aWa(u,g.gH(d),a0),$async$a4B)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oW().aA(9999)
k=n.b
j=g.gH(d)
i=y.N
h=g.di(d,new B.c2d(),i)
h=A.A(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aW3(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],i,y.z),q),$async$a4B)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gH(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4B,w)},
D6(d,e,f,g,h){return B.hia(d,e,f,g,h)},
hia(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$D6=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$D6)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cB(a6)
k=l.cI(a6,0,new B.c27())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oW().aA(9999)
h=Date.now()
g=""+1000*h+"_"+C.cA.aA(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gag(a6),e=y.N,d=y.z
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
a1=B.GP(a9,q)
a0=new A.IC(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$D6)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.a9(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eM().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.op(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a82(a1.a,a4,"media",a1.d,a2).w4(m,n,new A.Cs(!0,q.c)),$async$D6)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$D6)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aMK(r),$async$D6)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gH(a6)
a1=l.di(a6,new B.c28(),e)
a1=A.A(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aW3(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.O(Date.now(),0,!1).a4().aa(),"status","pending"],e,d),a8),$async$D6)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aMK(r),$async$D6)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gH(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D6,w)},
aW3(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aW3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a4y(t),$async$aW3)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b4(r,new B.c26(),y.P)
r=A.A(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a4z(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW3,w)},
Lw(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Lw=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a4y("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Lw)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ci(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aU(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aW4(k,a0),$async$Lw)
case 8:i=a3
if(i>0){m+=i
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aW9(h),$async$Lw)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.SS(g,a0),$async$Lw)
case 10:f=a3
if(f!=null&&J.cs(f)){m+=J.a9(f)
k.m(0,"status","done")
k.m(0,"deliveredAt",new A.O(Date.now(),0,!1).a4().aa())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.A(new A.a5(r,new B.c29(),q),n)
d=A.A(new A.a5(r,new B.c2a(),q),n)
q=A.A(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a4z("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$Lw)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Lw,w)},
aW4(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aW4=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ci(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aU(h),r=y.f,q=0
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
j=o==null?null:C.k.L(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hLP(k,j)
C.d.v(s,i)
x=5
return A.b(B.BG(l,m,"Received via My Code",t,e,i),$async$aW4)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aMK(s),$async$aW4)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW4,w)},
c2b:function c2b(){},
c2c:function c2c(){},
c2d:function c2d(){},
c27:function c27(){},
c28:function c28(){},
c26:function c26(){},
c29:function c29(){},
c2a:function c2a(){},
fot(d,e){var x=0,w=A.j(y.H)
var $async$fot=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).cs(A.eH(new B.fou(e),!1,null,y.H)),$async$fot)
case 2:return A.h(null,w)}})
return A.i($async$fot,w)},
byY(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$byY=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ci(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).cs(A.eH(new B.fov(g,e,f),!1,null,y.y)),$async$byY)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$byY,w)},
fou:function fou(d){this.a=d},
fov:function fov(d,e,f){this.a=d
this.b=e
this.c=f},
SI:function SI(d,e){this.c=d
this.a=e},
aA3:function aA3(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dGe:function dGe(d,e){this.a=d
this.b=e},
SM:function SM(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA6:function aA6(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dHn:function dHn(d){this.a=d},
dHo:function dHo(d){this.a=d},
dHp:function dHp(d){this.a=d},
dHm:function dHm(d,e){this.a=d
this.b=e},
dHq:function dHq(d){this.a=d},
dHr:function dHr(d){this.a=d},
dHs:function dHs(d,e){this.a=d
this.b=e},
dHt:function dHt(d,e){this.a=d
this.b=e},
dHu:function dHu(d,e){this.a=d
this.b=e},
dHv:function dHv(d){this.a=d},
dHy:function dHy(){},
dHw:function dHw(d){this.a=d},
dHx:function dHx(d,e){this.a=d
this.b=e},
beR:function beR(){},
SJ:function SJ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aA4:function aA4(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dGf:function dGf(d){this.a=d},
dGg:function dGg(d){this.a=d},
fAn(d){var x=d.hC
if(x>=0)return C.o.L(x)
return 10},
hif(d){var x=d.k9
if(x>=0)return x
return 4.99},
hie(d){var x=d.kR,w=y.N
w=x.iD(x,new B.c2f(),w,w)
return w},
fPY(d){var x=d.ka,w=y.N
w=x.iD(x,new B.c2g(),w,w)
return w},
aW7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aW7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$aW7)
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
return A.i($async$aW7,w)},
a4D(d,e){var x=0,w=A.j(y.H),v,u
var $async$a4D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$a4D)
case 4:x=3
return A.b(g.an("String","ngmy_doc_share_path_"+u,e),$async$a4D)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a4D,w)},
SL(d){var x=0,w=A.j(y.H),v,u
var $async$SL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aw(),$async$SL)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$SL)
case 3:case 1:return A.h(v,w)}})
return A.i($async$SL,w)},
fAm(d,e){var x,w,v
if(B.hif(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hie(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bg(w)
return v!=null&&v.c8(new A.O(Date.now(),0,!1))},
aW5(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fPY(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bg(x)
return w!=null&&w.c8(new A.O(Date.now(),0,!1))},
fPZ(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.Z(B.fPY(d),x,x)
x=w.h(0,t)
v=A.bg(x==null?"":x)
u=v!=null&&v.c8(new A.O(Date.now(),0,!1))?v:new A.O(Date.now(),0,!1)
w.m(0,t,u.bL(A.dB(f,0,0,0,0,0).a).a4().aa())
d.ka=w},
amm(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$amm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.a9(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aw(),$async$amm)
case 7:s=f
r=A.t(p)
r=A.eW(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$amm,w)},
amn(d){var x=0,w=A.j(y.H),v,u,t
var $async$amn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.amm(d),$async$amn)
case 3:u=f
x=5
return A.b(A.aw(),$async$amn)
case 5:x=4
return A.b(f.an("Int","ngmy_doc_share_usage_"+t,u+1),$async$amn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$amn,w)},
aml(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aml=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fAn(d)
if(u<=0){v=!1
x=1
break}if(B.fAm(d,e)){v=!1
x=1
break}x=3
return A.b(B.amm(e),$async$aml)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aml,w)},
aW6(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aW6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.GN(e,d),$async$aW6)
case 3:if(g){v=-1
x=1
break}u=B.fAn(d)
if(u<=0){v=-1
x=1
break}if(B.fAm(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.amm(e),$async$aW6)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aW6,w)},
c2i(d,e,f){var x=0,w=A.j(y.y),v
var $async$c2i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.GN(e,d),$async$c2i)
case 3:if(h){v=!1
x=1
break}v=B.aml(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2i,w)},
c2h(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c2h=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c2i(d,u,i.gRJ()),$async$c2h)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2h,w)},
a4C(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a4C=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gRJ()){v=!0
x=1
break}if(B.aW5(d,u)){v=!0
x=1
break}x=5
return A.b(A.kZ(u,C.P5),$async$a4C)
case 5:x=k?3:4
break
case 3:B.fPZ(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a4C)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kE(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.P5,"Doc Share for Organizations"),$async$a4C)
case 7:if(!k){v=!1
x=1
break}B.fPZ(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a4C)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4C,w)},
c2f:function c2f(){},
c2g:function c2g(){},
foZ(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$foZ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$foZ)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.eWS.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hB([r],e.c))
s.toString
$.eWS.m(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foZ,w)},
hNW(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.eWS.bm($.eWS,new B.fp0(d))},
fp0:function fp0(d){this.a=d},
eYc(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$eYc=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aI(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hB([d],f))
s.toString
u=A.mH(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bK(C.jb,null,y.H),$async$eYc)
case 3:C.yy.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eI.lU()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eYc,w)},
ade(d,e,f){var x=0,w=A.j(y.H),v
var $async$ade=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.eXo.m(0,d,new B.a9s(A.bh(e,!0,v)))
x=3
return A.b(A.aw(),$async$ade)
case 3:x=2
return A.b(h.an("String",d+"_manifest",C.Q.aj(A.E(["parts",e,"size",f],v,y.C),null)),$async$ade)
case 2:return A.h(null,w)}})
return A.i($async$ade,w)},
ad8(d){return B.hxu(d)},
hxu(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ad8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.eXo.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aw(),$async$ad8)
case 3:u=j.aR(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.Q.aE(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ci(s)){v=null
x=1
break}o=J.b4(s,new B.f0J(),y.N)
n=A.A(o,o.$ti.k("ai.E"))
r=n
o=A.aQ(J.q(t,"size"))
m=o==null?null:C.k.L(o)
q=m==null?0:m
p=new B.a9s(r)
$.eXo.m(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ad8,w)},
OG(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$OG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cl(e))
$.EH.m(0,d,u)
x=3
return A.b(B.Pc(d,u),$async$OG)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OG,w)},
aKF(d){return B.hxs(d)},
hxs(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.EH.h(0,d)
if(n!=null&&!C.aE.gah(n)){v=n
x=1
break}x=3
return A.b(B.Pb(d),$async$aKF)
case 3:p=f
if(p!=null&&!C.aE.gah(p)){$.EH.m(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aw(),$async$aKF)
case 4:s=f
r=A.aR(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cw.aF(r)
x=!J.ci(q)?9:10
break
case 9:B.OG(d,q)
x=11
return A.b(J.hA(s,d),$async$aKF)
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
return A.i($async$aKF,w)},
htW(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.cl(J.eO(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.cl(A.AZ(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.cl(d)),y.K)
return A.f6(null,y.K)},
a_i(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bd($.bs,y.cf)
t=new A.bL(u,y.aW)
s=y.aK
A.fA(r,"loadend",new B.f50(r,t),!1,s)
A.fA(r,"error",new B.f51(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i0(0,C.Jz,new B.f52())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_i,w)},
aKZ(d,e,f){return B.hzG(d,e,f)},
hzG(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aKZ=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_i(i),$async$aKZ)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.a9(j)
x=11
return A.b(B.Pc(o,p),$async$aKZ)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.a9(j)===0){x=1
break}x=12
return A.b(B.ade(k,j,s),$async$aKZ)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a4(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKZ,w)},
aKY(d,e,f){return B.hzF(d,e,f)},
hzF(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aKY=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aKZ(d,e,f),$async$aKY)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_i(f),$async$aKY)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.EH.m(0,s,r)
$.OY.m(0,s,r)
x=11
return A.b(B.OG(s,r),$async$aKY)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a4(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aKY,w)},
Ao(d,e,f,g,h,i){return B.hio(d,e,f,g,h,i)},
hio(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Ao=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cA.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.j8(p,q,o,n,new A.O(Date.now(),0,!1).a4().aa(),a0,f,B.aWd(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.OG(s,d),$async$Ao)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aw(),$async$Ao)
case 10:r=a2
x=11
return A.b(r.an("String",s,C.cM.gcr().aF(d)),$async$Ao)
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
return A.b(B.zs(e),$async$Ao)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.ER(e,j),$async$Ao)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ao,w)},
SN(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$SN=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zs(d),$async$SN)
case 3:t=a1
s=e.length,r=J.cB(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cA.aA(99999)
n=p.b
l=o.type
l.toString
k=B.fQ0(n,null,l)
l=o.size
l.toString
j=new A.O(Date.now(),0,!1).a4().aa()
i=new B.j8(m,n,k,l,j,"From folder",null,B.aWd(),null)
$.adH.m(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_i(o),$async$SN)
case 7:g=a1
x=g!=null&&!C.aE.gah(g)?8:10
break
case 8:$.EH.m(0,h,g)
$.OY.m(0,h,g)
B.OG(h,g)
x=9
break
case 10:x=11
return A.b(B.aKY(d,m,o),$async$SN)
case 11:case 9:r.G(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.ER(d,t),$async$SN)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SN,w)},
fAr(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fAr=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fQ0(r,C.d.gai(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.GO(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aE.gah(s)){v=B.Ao(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAr,w)},
GO(d,e,f,g,h,i){return B.hin(d,e,f,g,h,i)},
hin(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$GO=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cA.aA(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.IC(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$GO)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ci(m)){x=6
break}J.fS(n,m)
o+=J.a9(m)
case 9:if(!(J.a9(n)>=1048576)){x=10
break}l=new Uint8Array(A.cl(J.PK(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.kn(0,1048576,J.a9(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Pc(k,l),$async$GO)
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
return A.b(j.a9(0),$async$GO)
case 12:x=s.pop()
break
case 5:x=J.a9(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Pc(k,new Uint8Array(A.cl(n))),$async$GO)
case 15:J.ch(q,k)
case 14:if(J.a9(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ade(r,q,g),$async$GO)
case 16:f=new B.j8(i,a1,a0,g,new A.O(Date.now(),0,!1).a4().aa(),a2,null,B.aWd(),null)
x=17
return A.b(B.zs(d),$async$GO)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.ER(d,e),$async$GO)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$GO,w)},
SP(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$SP=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.adH.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_i(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ad8(s),$async$SP)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Pb(u[o]),$async$SP)
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
v=A.AZ(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.OY.h(0,s)
if(i==null)i=$.EH.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qM(d,e),$async$SP)
case 12:i=a0
if(i!=null&&!C.aE.gah(i))$.OY.m(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.AZ(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SP,w)},
fQ0(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
qM(d,e){return B.hip(d,e)},
hip(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qM=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.OY.h(0,f)
if(e==null)e=$.EH.h(0,f)
if(e!=null&&!C.aE.gah(e)){v=e
x=1
break}s=$.adH.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_i(s),$async$qM)
case 9:r=a3
if(r!=null&&!C.aE.gah(r)){$.EH.m(0,f,r)
$.OY.m(0,f,r)
B.OG(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a4(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ad8(f),$async$qM)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.av1(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Pb(g[l]),$async$qM)
case 16:k=a3
if(k!=null&&!C.aE.gah(k))n.G(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.akR()
if(!C.aE.gah(r)){$.EH.m(0,f,r)
$.OY.m(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aKF(f),$async$qM)
case 17:j=a3
if(j!=null&&!C.aE.gah(j)){$.OY.m(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.SP(a0,a1,0,g),$async$qM)
case 20:i=a3
if(i!=null&&!C.aE.gah(i)){h=new Uint8Array(A.cl(i))
$.EH.m(0,f,h)
$.OY.m(0,f,h)
B.OG(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qM,w)},
his(d){var x,w,v=$.adH.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hit(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hB([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hiq(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
amt(d,e,f,g,h){return B.hir(d,e,f,g,h)},
hir(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$amt=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.adH.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_i(s),$async$amt)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qM(g,e),$async$amt)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.a9(r)/2|0,J.a9(r))
n=$.eM().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hV(d).w4(h,r,new A.Cs(!0,e.c)),$async$amt)
case 12:f.$2(J.a9(r),J.a9(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
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
return A.i($async$amt,w)},
fQ2(d,e,f,g,h){var x,w,v,u,t=$.fQ1
$.fQ1=t+1
x=Date.now()
w=""+1000*x+"_"+C.cA.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c2t.m(0,t,new B.br5(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.av1(u)))
return t},
fAs(d){var x=0,w=A.j(y.H)
var $async$fAs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAs,w)},
GP(d,e){var $async$GP=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.adH.h(0,h)
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
return A.py(B.SP(d,e,p,o<q?o:q),$async$GP,w)
case 8:n=a1
x=n!=null&&!C.aE.gah(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.py(A.Eg(n),$async$GP,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.py(B.ad8("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$GP,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.py(B.Pb(h[l]),$async$GP,w)
case 18:k=a1
x=k!=null&&!C.aE.gah(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.py(A.Eg(k),$async$GP,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.py(B.qM(d,e),$async$GP,w)
case 22:j=a1
x=j!=null&&!C.aE.gah(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.py(A.Eg(A.AZ(j,p,o<i?o:i)),$async$GP,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.py(null,0,w)
case 2:return A.py(t.at(-1),1,w)}})
var x=0,w=A.fYt($async$GP,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h_g(w)},
aWf(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aWf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c2t.h(0,d)
if(t==null||J.ci(e)){v=!1
x=1
break}u=t.x
u.G(0,e)
case 3:if(!(u.gH(u)>=1048576)){x=4
break}x=5
return A.b(t.a22(),$async$aWf)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWf,w)},
SO(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$SO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2t.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a22(),$async$SO)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ade(r.c,u,r.z),$async$SO)
case 4:t=new B.j8(r.b,r.d,r.e,r.z,new A.O(Date.now(),0,!1).a4().aa(),r.f,r.r,B.aWd(),null)
u=r.a
x=5
return A.b(B.zs(u),$async$SO)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.ER(u,s),$async$SO)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SO,w)},
a4J(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a4J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c2t.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ael(u[s]),$async$a4J)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a4J,w)},
c2v(d,e,f){var x=0,w=A.j(y.H)
var $async$c2v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw5(d,e,f),$async$c2v)
case 2:return A.h(null,w)}})
return A.i($async$c2v,w)},
c2w(d,e,f){var x=0,w=A.j(y.H)
var $async$c2w=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bw6(d,e,f),$async$c2w)
case 2:return A.h(null,w)}})
return A.i($async$c2w,w)},
D7(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$D7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zs(d),$async$D7)
case 2:p=g
J.n_(p,new B.c2u(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.EH.W(0,v)
$.adH.W(0,e)
x=3
return A.b(B.ad8(v),$async$D7)
case 3:u=g
$.eXo.W(0,v)
x=4
return A.b(A.aw(),$async$D7)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$D7)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$D7)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ael(s[q]),$async$D7)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ael(v),$async$D7)
case 13:x=14
return A.b(B.ER(d,p),$async$D7)
case 14:return A.h(null,w)}})
return A.i($async$D7,w)},
aWe(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aWe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qM(d,e),$async$aWe)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ad("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.eYc(t,A.aI(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWe,w)},
zs(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$zs)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aR(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.Q.aE(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b4(u,new B.f53(),y.U)
r=A.A(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zs,w)},
ER(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$ER=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aw(),$async$ER)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b4(e,new B.f8X(),y.P)
t=A.A(t,t.$ti.k("ai.E"))
x=3
return A.b(v.an("String","ngmy_doc_share_index_v1_"+u,C.Q.aj(t,null)),$async$ER)
case 3:return A.h(null,w)}})
return A.i($async$ER,w)},
bw5(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zs(d),$async$bw5)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3I(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).azR(f))
x=4
return A.b(B.ER(d,u),$async$bw5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw5,w)},
bw6(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bw6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zs(d),$async$bw6)
case 3:u=h
t=J.cB(u)
s=t.bg(u,new B.f3J(e))
if(s<0){x=1
break}t.m(u,s,t.h(u,s).cyA(f))
x=4
return A.b(B.ER(d,u),$async$bw6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bw6,w)},
a9s:function a9s(d){this.a=d},
f0J:function f0J(){},
f50:function f50(d,e){this.a=d
this.b=e},
f51:function f51(d){this.a=d},
f52:function f52(){},
c2u:function c2u(d){this.a=d},
br5:function br5(d,e,f,g,h,i,j,k,l){var _=this
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
f53:function f53(){},
f8X:function f8X(){},
f3I:function f3I(d){this.a=d},
f3J:function f3J(d){this.a=d},
a4K(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a4K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.bf(d,new B.c2z())?3:4
break
case 3:x=5
return A.b(B.aWg(d,e),$async$a4K)
case 5:u=g
if(u!=null){t=u.c
B.Ly(d,u.b,e,t)}v=u
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
return A.b(B.aWb(s),$async$a4K)
case 10:case 9:if(g){v=new A.O3(1,D.OJ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.SQ(d,e),$async$a4K)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.SV(!0,!0,d,e),$async$a4K)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ly(d,D.xQ,e,t)
v=new A.O3(p,D.xQ,t)
x=1
break}v=B.c2y(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4K,w)},
SQ(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$SQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a4M(null,d,e),$async$SQ)
case 3:p=g
try{u=C.Q.aE(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ci(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.a9(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aWa(p,d.length,e),$async$SQ)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c2w(e,C.d.gI(d).a,r.b),$async$SQ)
case 7:case 6:q=r.a
x=8
return A.b(B.Ly(d,D.OJ,e,q),$async$SQ)
case 8:v=new A.O3(d.length,D.OJ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SQ,w)},
SR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$SR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.lZ(D.m2)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a4L(d,e),$async$SR)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c2r(s,d,e,t),$async$SR)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aWb(t),$async$SR)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qM(e,d),$async$SR)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.SQ(A.a([d],y.r),e),$async$SR)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SR,w)},
ST(){var x=0,w=A.j(y.H)
var $async$ST=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fAl(),$async$ST)
case 2:x=3
return A.b(B.aN0(),$async$ST)
case 3:return A.h(null,w)}})
return A.i($async$ST,w)},
a4L(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a4L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aWd()
x=3
return A.b(B.c2v(e,d.a,u),$async$a4L)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4L,w)},
Ly(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ly=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.OJ&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a4L(p,f),$async$Ly)
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
return A.b(B.c2q(o,p,u,f),$async$Ly)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c2r(o,p,f,t),$async$Ly)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c2p(o,u,p,f),$async$Ly)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ly,w)},
aWg(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aWg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2x(e,d),$async$aWg)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.SV(!1,!0,d,e),$async$aWg)
case 4:u=g
if(u!=null){t=u.b
v=new A.O3(u.a,D.xQ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWg,w)},
c2x(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c2x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.SP(d,s,0,1),$async$c2x)
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
return A.i($async$c2x,w)},
c2y(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c2y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a4M(null,d,e),$async$c2y)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fQ_(u)
if(t.length>800){v=null
x=1
break}v=new A.O3(d.length,D.dda,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2y,w)},
amu(d,e,f){return B.hiw(d,e,f)},
hiw(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$amu=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cS(g,"\ufeff"))g=J.mf(g,1)
x=B.fAq(g)?3:4
break
case 3:x=5
return A.b(B.c2s(g),$async$amu)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cS(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mf(g,13))
try{k=B.D8(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a4(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cS(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mf(g,13))
u=9
x=12
return A.b(B.aW9(q),$async$amu)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SS(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a4(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cS(g,"NGMYDOCSYNC0|"))try{n=B.fAp(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.SS(n,a0)
v=k
x=1
break}catch(a1){m=A.a4(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cS(g,"N2|")){v=B.GQ(C.a.i(J.mf(g,3)),d,a0)
x=1
break}if(J.cS(g,"NGMYDOCSYNC2|")){v=B.GQ(C.a.i(J.mf(g,13)),d,a0)
x=1
break}i=A.ad("https?://\\S+",!0,!1,!1,!1).cz(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.al(k,0,k.length-1)
else h=k
v=B.GQ(h,d,a0)
x=1
break}if(J.eQ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.SS(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amu,w)},
GQ(d,e,f){return B.hiu(d,e,f)},
hiu(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GQ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ad("/+$",!0,!1,!1,!1)
e=A.aI(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.al(e,0,e.length-13)
f=A.ad("/+$",!0,!1,!1,!1)
j=A.aI(g,f,"")}else j=e
s=j
r=A.cq(A.t(s)+"/manifest.json",0,null)
q=A.cq(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aW1(r),$async$GQ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aW1(A.cq(s,0,null)),$async$GQ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ci(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c24(o,r,a1,n,a2),$async$GQ)
case 11:m=a4
x=J.ci(m)?12:13
break
case 12:x=14
return A.b(B.c23(q),$async$GQ)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.SS(l,a2),$async$GQ)
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
k=A.a4(d)
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
return A.i($async$GQ,w)},
a4M(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a4M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aU(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qM(f,r),$async$a4M)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cM.gcr().aF(q)],t,s))
x=3
break
case 4:u=A.S(t,y.C)
u.m(0,"marker","ngmyDocShareBundle")
u.m(0,"version",1)
u.m(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.m(0,"exportedAt",new A.O(Date.now(),0,!1).a4().aa())
if(d!=null&&d.length!==0)u.m(0,"deliveryVia",d)
u.m(0,"files",p)
v=C.Q.aj(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4M,w)},
SS(d,e){return B.hiv(d,e)},
hiv(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$SS=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.Q.aE(0,a2,null)
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
e=J.aU(r)
case 7:if(!e.C()){x=8
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.a9(j)===0){x=7
break}i=C.cw.aF(j)
d=J.a9(q)!==0?q:null
x=9
return A.b(B.Ao(i,a3,d,k,l,o),$async$SS)
case 9:h=a5
if(h!=null)J.ch(n,h)
x=7
break
case 8:f=J.a9(n)===0?null:n
v=f
x=1
break
u=2
x=6
break
case 4:u=3
a1=t.pop()
g=A.a4(a1)
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
return A.i($async$SS,w)},
Lx:function Lx(d,e){this.a=d
this.b=e},
c2z:function c2z(){},
ZT(d){var x=A.L(d).ax.a===C.H,w=x?D.a9A:D.a7V,v=x?D.aaY:C.c,u=x?C.aO:C.M,t=x?C.bP:C.al,s=x?D.a8T:C.aJ
return new A.aD_([w,s,v,u,t,x?C.eY:C.bR])},
h41(d,e){var x=e?C.w.j(0.72):C.aV
return A.ce(null,x,!0,null,new B.fsW(e),d,null,!0,!0,y.N)},
c2e(d,e,f,g,h,i,j,k,l){return new B.SK(e,l,d,f,k,j,g,h,i,null)},
WV(d,e,f,g,h,i,j){return new B.b9z(g,h,j,e,i,d,f,null)},
fsW:function fsW(d){this.a=d},
WS:function WS(d,e){this.c=d
this.a=e},
awc:function awc(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cWC:function cWC(d){this.a=d},
cWA:function cWA(d){this.a=d},
cWB:function cWB(d){this.a=d},
bqL:function bqL(){},
SK:function SK(d,e,f,g,h,i,j,k,l,m){var _=this
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
aA5:function aA5(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dHl:function dHl(d){this.a=d},
dGJ:function dGJ(d,e){this.a=d
this.b=e},
dGK:function dGK(d,e){this.a=d
this.b=e},
dGi:function dGi(d,e,f){this.a=d
this.b=e
this.c=f},
dGh:function dGh(d){this.a=d},
dGj:function dGj(d,e){this.a=d
this.b=e},
dGo:function dGo(d,e,f){this.a=d
this.b=e
this.c=f},
dGn:function dGn(d){this.a=d},
dH9:function dH9(d,e){this.a=d
this.b=e},
dHa:function dHa(d){this.a=d},
dGG:function dGG(d,e,f){this.a=d
this.b=e
this.c=f},
dGD:function dGD(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dGm:function dGm(d){this.a=d},
dGO:function dGO(d){this.a=d},
dGN:function dGN(){},
dGs:function dGs(d){this.a=d},
dH6:function dH6(d,e){this.a=d
this.b=e},
dH7:function dH7(d,e){this.a=d
this.b=e},
dH8:function dH8(d,e){this.a=d
this.b=e},
dGE:function dGE(d,e){this.a=d
this.b=e},
dGF:function dGF(d,e){this.a=d
this.b=e},
dH_:function dH_(d,e){this.a=d
this.b=e},
dGW:function dGW(d){this.a=d},
dGV:function dGV(d){this.a=d},
dGX:function dGX(){},
dGY:function dGY(){},
dGZ:function dGZ(d,e){this.a=d
this.b=e},
dH0:function dH0(){},
dH1:function dH1(d){this.a=d},
dGU:function dGU(d,e){this.a=d
this.b=e},
dGP:function dGP(d){this.a=d},
dGQ:function dGQ(d){this.a=d},
dGR:function dGR(d){this.a=d},
dGS:function dGS(d){this.a=d},
dGT:function dGT(d){this.a=d},
dGp:function dGp(){},
dGq:function dGq(d){this.a=d},
dGr:function dGr(d,e){this.a=d
this.b=e},
dGl:function dGl(d,e){this.a=d
this.b=e},
dGk:function dGk(d,e,f){this.a=d
this.b=e
this.c=f},
dGH:function dGH(d){this.a=d},
dGI:function dGI(d,e,f){this.a=d
this.b=e
this.c=f},
dGB:function dGB(d,e){this.a=d
this.b=e},
dGx:function dGx(d){this.a=d},
dGu:function dGu(d,e,f){this.a=d
this.b=e
this.c=f},
dGy:function dGy(d){this.a=d},
dGz:function dGz(d){this.a=d},
dGA:function dGA(){},
dGC:function dGC(d,e){this.a=d
this.b=e},
dGv:function dGv(d){this.a=d},
dGt:function dGt(d,e,f){this.a=d
this.b=e
this.c=f},
dGw:function dGw(){},
dGM:function dGM(d){this.a=d},
dGL:function dGL(d,e){this.a=d
this.b=e},
dH5:function dH5(d,e){this.a=d
this.b=e},
dH2:function dH2(d){this.a=d},
dH3:function dH3(d,e){this.a=d
this.b=e},
dH4:function dH4(d){this.a=d},
dHi:function dHi(d){this.a=d},
dHg:function dHg(d){this.a=d},
dHh:function dHh(d){this.a=d},
dHj:function dHj(){},
dHk:function dHk(d,e){this.a=d
this.b=e},
dHc:function dHc(d,e){this.a=d
this.b=e},
dHd:function dHd(d,e,f){this.a=d
this.b=e
this.c=f},
dHb:function dHb(d,e,f){this.a=d
this.b=e
this.c=f},
dHe:function dHe(d,e){this.a=d
this.b=e},
dHf:function dHf(d,e){this.a=d
this.b=e},
aw9:function aw9(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
b9y:function b9y(d,e,f){this.c=d
this.d=e
this.a=f},
cWy:function cWy(){},
cWz:function cWz(){},
a9M:function a9M(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cWW:function cWW(){},
cWV:function cWV(d){this.a=d},
WU:function WU(d,e,f){this.c=d
this.d=e
this.a=f},
awe:function awe(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cWS:function cWS(d){this.a=d},
cWT:function cWT(d,e,f){this.a=d
this.b=e
this.c=f},
cWU:function cWU(d,e){this.a=d
this.b=e},
cWQ:function cWQ(d,e){this.a=d
this.b=e},
cWO:function cWO(d){this.a=d},
cWM:function cWM(d){this.a=d},
cWJ:function cWJ(d){this.a=d},
cWP:function cWP(d){this.a=d},
cWL:function cWL(d){this.a=d},
cWR:function cWR(d){this.a=d},
cWN:function cWN(d){this.a=d},
cWK:function cWK(d){this.a=d},
WR:function WR(d,e,f){this.c=d
this.d=e
this.a=f},
awb:function awb(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cWv:function cWv(d){this.a=d},
cWu:function cWu(d,e){this.a=d
this.b=e},
cWw:function cWw(d){this.a=d},
cWt:function cWt(d,e){this.a=d
this.b=e},
cWx:function cWx(d){this.a=d},
cWs:function cWs(d,e){this.a=d
this.b=e},
cWo:function cWo(d){this.a=d},
cWp:function cWp(d){this.a=d},
cWq:function cWq(d,e){this.a=d
this.b=e},
cWr:function cWr(d){this.a=d},
NH:function NH(d,e,f){this.c=d
this.d=e
this.a=f},
awh:function awh(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cX8:function cX8(d){this.a=d},
cX9:function cX9(d){this.a=d},
cXa:function cXa(d){this.a=d},
cXb:function cXb(d){this.a=d},
cXc:function cXc(d,e){this.a=d
this.b=e},
cXd:function cXd(d){this.a=d},
cXf:function cXf(d){this.a=d},
cXe:function cXe(d){this.a=d},
WW:function WW(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
awf:function awf(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cX4:function cX4(d,e){this.a=d
this.b=e},
cX5:function cX5(d,e){this.a=d
this.b=e},
cWX:function cWX(d,e,f){this.a=d
this.b=e
this.c=f},
cWY:function cWY(d){this.a=d},
cWZ:function cWZ(){},
cX3:function cX3(){},
cX_:function cX_(d,e){this.a=d
this.b=e},
cX0:function cX0(d,e){this.a=d
this.b=e},
cX1:function cX1(d,e){this.a=d
this.b=e},
cX2:function cX2(d,e){this.a=d
this.b=e},
a9K:function a9K(d,e){this.c=d
this.a=e},
cWn:function cWn(d){this.a=d},
WQ:function WQ(d){this.a=d},
awa:function awa(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
WX:function WX(d,e){this.c=d
this.a=e},
awg:function awg(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cX7:function cX7(d){this.a=d},
cX6:function cX6(d){this.a=d},
b9z:function b9z(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hix(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.fM(v)},
Lz(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Lz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$Lz)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_video_relay_v1",null,!1,C.bD),$async$Lz)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
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
q=A.a4(n)
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Lz,w)},
a4N(d){return B.hiy(d)},
hiy(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a4N=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4N)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cz,null),$async$a4N)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4N,w)},
SU(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$SU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lz(),$async$SU)
case 3:s=g
r=J.a6(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.Z(q,u,t),u,t)
t.v(0,e)
t.m(0,"updatedAt",new A.O(Date.now(),0,!1).a4().aa())
r.m(s,d,t)
x=4
return A.b(B.a4N(s),$async$SU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$SU,w)},
SV(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$SV=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.bW(),$async$SV)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bh(f,!0,y.U)
else{t=A.T(f).k("a5<1>")
u=A.A(new A.a5(f,new B.c2B(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hix()
t=A.T(u).k("J<1,a0<n,aB>>")
r=A.A(new A.J(u,new B.c2C(s),t),t.k("ai.E"))
x=6
return A.b(B.Lz(),$async$SV)
case 6:q=i
J.aE(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=7
return A.b(B.a4N(q),$async$SV)
case 7:x=8
return A.b(B.a4O(r,u,g,s),$async$SV)
case 8:v=new A.bkW(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SV,w)},
amv(d){var x=0,w=A.j(y.y),v,u,t
var $async$amv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Lz(),$async$amv)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amv,w)},
c2D(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c2D=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Lz(),$async$c2D)
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
return A.i($async$c2D,w)},
a4O(d,e,f,g){return B.hiz(d,e,f,g)},
hiz(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a4O=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.a9(q)===0){x=8
break}x=10
return A.b(B.amt("media",r,new B.c2A(s,e,g),f,q),$async$a4O)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.SU(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a4O)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.SU(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$a4O)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a4(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.SU(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a4O)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4O,w)},
D8(d,e,f){return B.hiA(d,e,f)},
hiA(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$D8=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$D8)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.amv(b3),$async$D8)
case 7:if(c0){x=6
break}x=8
return A.b(A.bK(C.kV,null,g),$async$D8)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.amv(b3),$async$D8)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Lz(),$async$D8)
case 10:e=c0
g=J.a6(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a6(d)
a2=A.aQ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.L(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ci(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a6(a4)
r=a1.gH(a4)
q=0
p=A.a([],y.r)
a2=a1.gag(a4),a5=y.N,a6=b6==null
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
if(J.a9(m)===0){x=11
break}u=14
a8=$.eM().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.op(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a82(a8.a,b0,"media",a8.d,a9).Bw(m)
k=A.cq(l,0,null)
x=17
return A.b(B.aW2(k,n,o,s,b7),$async$D8)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a4(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
x=16
break
case 13:x=2
break
case 16:x=11
break
case 12:if(J.a9(p)===0){v=null
x=1
break}b2=a3-1
x=b2<=0?18:20
break
case 18:g.W(e,b3)
g=a1.gag(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.a9(h)!==0?25:26
break
case 25:u=28
a2=$.eM().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.op(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a82(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$D8)
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
a0=A.dR(A.Z(d,a5,a0),a5,a0)
a0.m(0,"usesRemaining",b2)
a0.m(0,"lastUsedAt",new A.O(Date.now(),0,!1).a4().aa())
g.m(e,b3,a0)
case 19:x=32
return A.b(B.a4N(e),$async$D8)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$D8,w)},
c2B:function c2B(){},
c2C:function c2C(d){this.a=d},
c2A:function c2A(d,e,f){this.a=d
this.b=e
this.c=f},
aN0(){var x=0,w=A.j(y.H),v,u
var $async$aN0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hto=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aN0)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aN0)
case 3:u=$.fFq
u=u==null?null:u.bx(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aN0)
case 4:$.fFq=$.hBq=$.hBr=null
return A.h(null,w)}})
return A.i($async$aN0,w)},
f8z(d){var x=0,w=A.j(y.H),v,u
var $async$f8z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a2c){x=1
break}u=new A.bd($.bs,y.d4)
d.c=new B.f8A(new A.bL(u,y.aY))
x=3
return A.b(u.i0(0,C.hs,new B.f8B()),$async$f8z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$f8z,w)},
hBo(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hih(x):x},
fFu(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.a_(u,"WR")){v=B.amx(u)
x=1
break}v=B.fAp(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFu,w)},
fFt(d){var x=0,w=A.j(y.T),v,u,t
var $async$fFt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.a_(u,"WR")){v=B.amy(u)
x=1
break}v=B.fAp(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFt,w)},
foK(d){var x=0,w=A.j(y.T),v
var $async$foK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amy(d),$async$foK)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$foK,w)},
bwX(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bwX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fFt(d),$async$bwX)
case 3:q=f
if(q==null){x=1
break}t=C.Q.aE(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a6(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.a9(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bwX,w)},
eZ0(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$eZ0=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.SO(g)
x=1
break}if(d.gH(d)<=0){v=null
x=1
break}v=B.Ao(d.akR(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$eZ0,w)},
ET(d,e,f){return B.hDD(d,e,f)},
hDD(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ET=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fFu(a1),$async$ET)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.Q.aE(0,e,null)
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
break}p=J.a9(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.h5P().aA5(D.d1X,null),$async$ET)
case 4:l=d.fFq=a4
f.a="file"
f.b="application/octet-stream"
k=new A.av1(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bd($.bs,y.b1)
l.y=new B.f93(f,k,new B.f94(f,a2,k,j,a0,p),a2,j,a0,p,new A.bL(t,y.ch))
x=5
return A.b(l.a4T(0,new B.V0(r,"offer")),$async$ET)
case 5:d=l
x=7
return A.b(l.ahL(0),$async$ET)
case 7:x=6
return A.b(d.a4L(0,a4),$async$ET)
case 6:x=8
return A.b(B.f8z(l),$async$ET)
case 8:x=9
return A.b(l.alB(),$async$ET)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hBo(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.Q.aj(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.amz(m,h),$async$ET)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fQ_(h)
case 11:v=new A.bke(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ET,w)},
f8A:function f8A(d){this.a=d},
f8B:function f8B(){},
f94:function f94(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
f93:function f93(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
f92:function f92(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hFp(d){switch(d){case"new":return D.dQQ
case"checking":return D.dQR
case"connected":return D.dQT
case"completed":return D.dQS
case"failed":return D.dQV
case"disconnected":return D.dQW
case"closed":return D.aFC
case"count":return D.dQU}return D.aFC},
hFq(d){switch(d){case"new":return D.aFD
case"gathering":return D.dQX
case"complete":return D.a2c}return D.aFD},
hPo(d){switch(d){case"stable":return D.dQY
case"have-local-offer":return D.dQZ
case"have-local-pranswer":return D.dR0
case"have-remote-offer":return D.dR_
case"have-remote-pranswer":return D.dR1
case"closed":return D.aFJ}return D.aFJ},
hNI(d){switch(d){case"new":return D.aFG
case"connecting":return D.aFH
case"connected":return D.aFI
case"closed":return D.a2d
case"disconnected":return D.aFF
case"failed":return D.aFE}return D.a2d},
a71:function a71(d,e){this.a=d
this.b=e},
Mz:function Mz(d,e){this.a=d
this.b=e},
V_:function V_(d,e){this.a=d
this.b=e},
My:function My(d,e){this.a=d
this.b=e},
DB:function DB(d,e){this.a=d
this.b=e},
cdn:function cdn(){},
fC5(d){var x=new B.DA()
x.a=d
x.b=!0
return x},
DA:function DA(){this.b=this.a=$},
a70:function a70(){},
aqK:function aqK(){},
V0:function V0(d,e){this.a=d
this.b=e},
fAl(){var x=0,w=A.j(y.H)
var $async$fAl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fAl,w)},
fAo(d,e,f){var x=0,w=A.j(y.T),v
var $async$fAo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.lZ(D.m2))){v=null
x=1
break}v=B.foZ(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAo,w)},
fQ_(d){var x,w=F.a7r.a1N(C.dB.aF(d),null)
if(w.length===0){x=C.dB.aF(d)
return C.cM.gcr().aF(x)}return C.cM.gcr().aF(w)},
hig(d){var x,w,v=C.cw.aF(d)
try{x=C.c0.c6(0,F.a7q.b76(v,!1))
return x}catch(w){x=C.c0.c6(0,v)
return x}},
fAp(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hig(C.a.aV(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aV(t,w.length)
try{v=C.c0.c6(0,C.cw.aF(x))
return v}catch(u){return x}}return null},
hih(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aG(s,"\n")},
hii(){var x,w=$.oW(),v=J.dZ(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fM(v)},
aW8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aW8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bD),$async$aW8)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$aW8,w)},
c2j(d,e){return B.hij(d,e)},
hij(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c2j=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.a9(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cz,null),$async$c2j)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$c2j,w)},
aWb(d){var x=0,w=A.j(y.y),v,u,t
var $async$aWb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aW8(d),$async$aWb)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWb,w)},
aWa(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aWa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hii()
r=C.a.i(f)
t=C.dB.aF(s)
x=3
return A.b(B.c2j(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cM.gcr().aF(t),"usesRemaining",999999,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$aWa)
case 3:if(!h){v=null
x=1
break}v=new A.YX("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWa,w)},
aW9(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aW9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.a9(o)===0){v=null
x=1
break}x=3
return A.b(B.aW8(o),$async$aW9)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.a9(u)===0){v=null
x=1
break}try{t=C.c0.c6(0,C.cw.aF(u))
if(J.iK(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a4(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aW9,w)},
c2k(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c2k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.a9(q)===0){x=1
break}u=4
x=7
return A.b(X.bxS("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cz),$async$c2k)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c2k,w)},
aWc(d){var x=0,w=A.j(y.h),v,u,t
var $async$aWc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.GM(),$async$aWc)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.Z(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aWc,w)},
amq(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$amq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amq)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aR(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aWc(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amq,w)},
amo(d,e){var x=0,w=A.j(y.H)
var $async$amo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amo)
case 3:x=2
return A.b(g.an("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$amo)
case 2:return A.h(null,w)}})
return A.i($async$amo,w)},
a4F(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a4F=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4F)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.GM(),$async$a4F)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.df(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.m(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.C))
x=5
return A.b(A.a4E(s),$async$a4F)
case 5:x=6
return A.b(B.amo(f,u),$async$a4F)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4F,w)},
a4G(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4G=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4G)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.GM(),$async$a4G)
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
return A.b(B.amo(g,q),$async$a4G)
case 8:x=6
break
case 7:s.m(u,t,p)
case 6:x=9
return A.b(A.a4E(u),$async$a4G)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4G,w)},
a4H(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a4H=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4H)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.GM(),$async$a4H)
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
s=B.aW5(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aw(),$async$a4H)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.an("String","ngmy_doc_share_school_session_"+s,C.Q.aj(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.O(Date.now(),0,!1).a4().aa()],p,p),null)),$async$a4H)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4H,w)},
c2l(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c2l=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.a9(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aw(),$async$c2l)
case 7:s=f
p=A.t(n)
r=A.aR(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.Q.aE(0,r,null)
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
return A.i($async$c2l,w)},
GN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$GN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c2l(d),$async$GN)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aWc(t),$async$GN)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.amp(d),$async$GN)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aW5(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.amp(d),$async$GN)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GN,w)},
amp(d){var x=0,w=A.j(y.H)
var $async$amp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aw(),$async$amp)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$amp)
case 2:return A.h(null,w)}})
return A.i($async$amp,w)},
aWd(){var x,w=$.oW(),v=J.dZ(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fM(v)},
a4I(d){var x=C.a.i(d),w=A.ad("[^A-Z0-9]",!0,!1,!1,!1),v=A.aI(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fAq(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ad("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ad("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c2o(d){return B.hil(d)},
hil(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c2o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a4I(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eT("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bD),$async$c2o)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$c2o,w)},
ams(d,e){return B.him(d,e)},
him(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ams=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a4I(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hr("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cz,null),$async$ams)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a4(o)
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
return A.i($async$ams,w)},
c2q(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4I(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ams(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2q)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2q,w)},
c2p(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c2p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4I(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ams(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z)),$async$c2p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c2p,w)},
c2r(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c2r=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a4I(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ams(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c2r,w)},
c2s(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c2s=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fAq(d)){v=null
x=1
break}x=3
return A.b(B.c2o(d),$async$c2s)
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
return A.i($async$c2s,w)},
a4P(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a4P=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$a4P)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eT("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bD),$async$a4P)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
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
q=A.a4(n)
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.S(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4P,w)},
amw(d){return B.hiB(d)},
hiB(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$amw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.bW(),$async$amw)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hr("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.O(Date.now(),0,!1).a4().aa()],y.N,y.z),!1,!1,C.cz,null),$async$amw)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a4(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$amw,w)},
amx(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$amx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.a9(j)===0||!J.cS(j,"WR")){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amx)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a4P(),$async$amx)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.a9(q)===0){v=null
x=1
break}u=6
p=C.c0.c6(0,C.cw.aF(q))
if(J.iK(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.Z(r,m,l),m,l)
J.aE(o,"offerConsumedAt",new A.O(Date.now(),0,!1).a4().aa())
J.aE(s,j,o)
x=9
return A.b(B.amw(s),$async$amx)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a4(i)
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
return A.i($async$amx,w)},
amz(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$amz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.bW(),$async$amz)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a4P(),$async$amz)
case 4:u=g
t=J.a6(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.Z(s,r,q),r,q)
r=C.dB.aF(C.a.i(e))
q.m(0,"answer",C.cM.gcr().aF(r))
q.m(0,"answerAt",new A.O(Date.now(),0,!1).a4().aa())
t.m(u,p,q)
x=5
return A.b(B.amw(u),$async$amz)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amz,w)},
amy(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$amy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.bW(),$async$amy)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a4P(),$async$amy)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.a9(u)===0){v=null
x=1
break}try{r=C.c0.c6(0,C.cw.aF(u))
v=r
x=1
break}catch(n){t=A.a4(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$amy,w)},
alz(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$alz=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.ae$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb3()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$alz)
case 3:r=g
u=4
x=7
return A.b(r.hf(C.fI),$async$alz)
case 7:q=g
o=q
o=o==null?null:J.f1(J.vZ(o))
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
return A.i($async$alz,w)},
hLP(d,e){var x,w,v=J.dZ(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fnn(d){return B.hLR(d)},
hLR(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fnn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").Je(d,3600),$async$fnn)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
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
return A.i($async$fnn,w)},
BG(d,e,f,g,h,i){var x=null
return B.hLO(d,e,f,g,h,i)},
hLO(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$BG=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fQ2(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fAs(r),$async$BG)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fnn(o),$async$BG)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a4J(r),$async$BG)
case 14:v=null
x=1
break
case 13:e=$.bs.h(0,C.aIs)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.K_(A.a([],g))
x=15
return A.b(d.eL(0,A.arz("GET",A.cq(n,0,null))).cJ(0,C.Dq),$async$BG)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a4J(r),$async$BG)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.IC(d)
u=19
case 22:x=24
return A.b(d.C(),$async$BG)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.a9(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aWf(r,k),$async$BG)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$BG)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.SO(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a4(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a4J(r),$async$BG)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BG,w)},
aMK(d){return B.hLQ(d)},
hLQ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aMK=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eM().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hV("media").W(0,d),$async$aMK)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a4(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMK,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[38]
F=c[210]
H=c[101]
P=c[191]
E=c[183]
G=c[83]
Q=c[155]
R=c[102]
S=c[189]
I=c[215]
K=c[221]
B=a.updateHolder(c[21],B)
D=c[219]
T=c[154]
L=c[173]
U=c[62]
V=c[222]
W=c[68]
X=c[53]
M=c[82]
Y=c[220]
N=c[112]
B.cdo.prototype={
aA5(d,e){return this.cA5(d,e)},
cA5(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aA5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.S(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.k2(A.ct(t)))
t=J.k(u)
v=B.hn8(C.cM.gcr().aF(new A.cX(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aA5,w)}}
B.b0k.prototype={
brV(d){var x=this,w=x.w
w.onclose=A.h6(new B.cdj(x))
w.onopen=A.h6(new B.cdk(x))
w.onmessage=A.h6(new B.cdl(x))
w.onbufferedamountlow=A.h6(new B.cdm(x))},
gdh(d){return this.x},
ae8(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ae8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.DA()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fC5(J.f1(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ea(d.arrayBuffer(),y.af),$async$ae8)
case 8:v=t.fC5(s.akN(f,0,null))
x=1
break
case 7:case 4:v=B.fC5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ae8,w)}}
B.b0l.prototype={
brW(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.h6(new B.cdp(x)))
w.addEventListener("icecandidate",A.h6(new B.cdq(x)))
w.addEventListener("iceconnectionstatechange",A.h6(new B.cdr(x)))
w.onicegatheringstatechange=A.h6(new B.cds(x))
w.addEventListener("signalingstatechange",A.h6(new B.cdt(x)))
if(!$.fIT())w.addEventListener("connectionstatechange",A.h6(new B.cdu(x)))
w.addEventListener("negotiationneeded",A.h6(new B.cdv(x)))
w.addEventListener("track",A.h6(new B.cdw(x)))},
ahL(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ahL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ea(s.createAnswer(A.k2(A.ct(A.S(y.N,y.z)))),y.aQ),$async$ahL)
case 3:t=f
v=new B.V0(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahL,w)},
a4L(d,e){return this.bhz(0,e)},
bhz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a4L)
case 2:return A.h(null,w)}})
return A.i($async$a4L,w)},
a4T(d,e){return this.bhP(0,e)},
bhP(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a4T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ea(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a4T)
case 2:return A.h(null,w)}})
return A.i($async$a4T,w)},
alB(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$alB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.V0(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alB,w)},
bx(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f6(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bx,w)}}
B.a9L.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.WT.prototype={
S(){return new B.awd()},
gd6(){return this.c}}
B.awd.prototype={
Z(){this.a0()
this.aaZ()},
aaZ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aaZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aW6(u.e,u.c),$async$aaZ)
case 2:t=e
if(v.c!=null)v.n(new B.cWG(v,t))
return A.h(null,w)}})
return A.i($async$aaZ,w)},
Ol(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ol=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aml(t.e,t.c,!1),$async$Ol)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.ese)
x=1
break}x=4
return A.b(B.a4D(u.a.c,"individual"),$async$Ol)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a3j(A.eH(new B.cWD(u),!1,null,y.H)),$async$Ol)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ol,w)},
HF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$HF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.f6L(o),$async$HF)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a4H(o.e,r,s,q),$async$HF)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.epj)
x=1
break}x=5
return A.b(B.a4D(u.a.c,"member"),$async$HF)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a3j(A.eH(new B.cWF(u),!1,null,y.H)),$async$HF)
case 6:case 1:return A.h(v,w)}})
return A.i($async$HF,w)},
wW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$wW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a4C(t.e,o,t.f,t.r,t.w,s),$async$wW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a4D(u.a.c,"org_owner"),$async$wW)
case 4:x=5
return A.b(B.amq(u.a.c),$async$wW)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.f7f(o),$async$wW)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a4F(s,t,o,q.c),$async$wW)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.F(y.q).f.P(D.epg)
x=1
break}x=10
return A.b(B.amq(u.a.c),$async$wW)
case 10:o=u.c
if(o==null){x=1
break}o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a3j(A.eH(new B.cWE(u),!1,null,y.H)),$async$wW)
case 11:case 1:return A.h(v,w)}})
return A.i($async$wW,w)},
B(d){var x,w,v,u=this,t=null,s=A.L(d).ax.a===C.H,r=s?C.iT:C.oO,q=B.fAn(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.fz,24)],y.V)
v=y.p
w=A.p(t,A.u(A.a([A.p(t,D.eK0,C.h,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h0,t,t,t),C.ay,D.f0v,C.T,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.h,t,t,new A.o(t,t,t,p,w,D.bHq,C.n),t,t,t,t,C.em,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lk(new B.cWI(),t),C.P,w,C.dW,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ar,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aQ:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ab)
if(!u.a.x)C.d.v(p,A.a([new B.aac(C.eG,C.asL,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc5g(),t),C.ab],v))
p.push(new B.aac(C.o5,C.Zi,"Team Member","Sign in with your organization access code + password",u.gc65(),t))
p.push(C.ab)
p.push(new B.aac(C.afW,C.a_E,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc5C(),t))
return A.cf(t,r,A.br(!0,A.cg(A.u(p,C.ad,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.adl,t,t,C.ah),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.aac.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.H(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aD(!1,C.X,!0,s,A.aH(!1,r,!0,A.eq(A.B(A.a([A.p(s,A.V(t.c,C.c,s,s,s,30),C.h,s,s,new A.o(s,s,s,v,s,new A.a8(C.a1,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.en,A.D(A.u(A.a([A.d(t.e,s,s,s,s,s,s,C.op,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.L(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.V(C.A4,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c1,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.h,C.K,0,s,s,s,s,s,C.ac)}}
B.ayH.prototype={}
B.aBO.prototype={}
B.j8.prototype={
lZ(d){var x=this.b,w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gamc(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ad(){var x,w=this,v=A.S(y.N,y.z)
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
b6D(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.j8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cyA(d){return this.b6D(null,d)},
azR(d){return this.b6D(d,null)}}
B.SI.prototype={
S(){return new B.aA3(new A.cn(null,y.A))},
gd6(){return this.c}}
B.aA3.prototype={
Z(){this.a0()
this.ab_()},
ab_(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ab_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.An(u.a.c),$async$ab_)
case 3:t=e
if(u.c==null){x=1
break}u.n(new B.dGe(u,t))
case 1:return A.h(v,w)}})
return A.i($async$ab_,w)},
ab0(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ab0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fB(new A.fu(s)),$async$ab0)
case 3:t=u.c
if(t!=null)t.F(y.q).f.P(D.et8)
case 1:return A.h(v,w)}})
return A.i($async$ab0,w)},
Xl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Xl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.alz(s.d,4),$async$Xl)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_my_code_"+m+".png"),$async$Xl)
case 8:q=e
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a4(l)
o=s.c
if(o!=null)o.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Xl,w)},
aeB(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a7C("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aeB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeB,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.L(d).ax.a===C.H,n=o?C.iT:C.oO,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.as(new A.C(C.em,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aB.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.H(C.aB.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.u(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.ZH,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ar,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.h,p,p,new A.o(p,p,u,v,p,new A.a8(C.a1,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.acW,p,p,1/0)
v=A.m(20)
u=A.a([new A.aa(0,C.G,C.aB.j(0.2),C.dl,24)],y.V)
s=q.e
s.toString
r=A.cg(A.u(A.a([x,C.ma,w,C.kb,new A.en(A.p(p,A.pi(p,p,!1,B.hic(s),p,!0,!0,220,!1,C.c),C.h,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c1,p,p,p),q.d),C.ab,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kb,A.B(A.a([A.D(A.ey(M.Aj,C.R_,q.gbZu(),p),1),C.av,A.D(A.dk(C.xj,C.a4s,q.gbZv(),A.bk(C.aB,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.T,new A.a3(1/0,p,A.ey(L.Ya,D.eXK,q.gckc(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.JZ,p,p,C.ah)
x=r}return A.cf(l,n,x,p,!1,!1,p,p)}}
B.SM.prototype={
S(){return new B.aA6(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.aA6.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.GL(x==null?"":x)
if(w!=null)this.d.saR(0,w)},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
Xm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.GL(u.d.a.a)
if(t==null){u.n(new B.dHn(u))
x=1
break}u.n(new B.dHo(u))
s=u.a
r=s.c
x=3
return A.b(B.a4B(s.d,new B.dHp(u),t,r),$async$Xm)
case 3:q=e
if(u.c==null){x=1
break}u.n(new B.dHq(u))
if(q){s=u.c
s.toString
A.a7(s,!1).K(!0)}case 1:return A.h(v,w)}})
return A.i($async$Xm,w)},
a_r(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a_r=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ci(r.a.d)){x=1
break}r.n(new B.dHr(r))
u=4
q=J.fg(r.a.d)
x=7
return A.b(B.qM(r.a.c,q),$async$a_r)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.n(new B.dHs(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.a9(r.a.d)>1?"NGMY Doc Share ("+J.a9(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.af4(p,m,l,j,k),$async$a_r)
case 8:o=e
if(r.c!=null)r.n(new B.dHt(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a4(h)
if(r.c!=null)r.n(new B.dHu(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.n(new B.dHv(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_r,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.L(d).ax.a===C.H,i=j?D.a9A:D.a7V,h=j?D.aaY:C.c,g=j?C.aO:C.M,f=j?C.bP:C.al,e=j?D.a8T:C.aJ
i=[i,e,h,g,f,j?C.eY:C.bR]
x=A.L(d).ax.a===C.H
w=J.a9(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e3(A.p(k,k,C.h,k,k,new A.o(k,k,k,k,k,new A.bS(C.B,0.5,C.x,k,0,A.a([C.aB.j(x?0.12:0.08),C.aB.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.H(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bwv,C.h,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aB],e),k,k),C.n),k,52,k,k,k,k,k,52),C.en,A.D(A.u(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.h,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.ZH,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tC(A.ad("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.beR()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aK(k,C.U,u==null,k,!0,C.q,k,A.aL(),l.d,k,k,k,k,k,2,A.bl(k,k,k,C.JS,k,k,"",k,!0,new A.b1(4,A.m(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b1(4,A.m(18),new A.ax(C.aB,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.af,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dHw(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lA,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.H(i[1],C.r,1)
m=J.JE(l.a.d,4)
m=A.A(new A.J(m,new B.dHx(x,new A.aD_(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.a9(l.a.d)>4)m.push(new A.C(C.nk,A.d("+ "+(J.a9(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a0,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bs,s,C.P,e,C.P,q,C.d1,p,C.P,A.p(k,A.u(m,C.m,k,C.e,C.j,0,C.p),C.h,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aB.j(x?0.16:0.1)
t=A.m(14)
s=A.H(C.aB.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.enR)
else q.push(A.V(C.kY,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dg(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.b9,new A.o(u,k,s,t,k,k,C.n),C.id,k,k,k,C.eF,k,k,k)],r))}e=A.D(A.cg(A.u(e,C.ad,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bhF,k,k,C.ah),1)
u=l.f?k:l.gckd()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ey(L.Ya,D.eYE,u,A.d9(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ca,k,new A.b5(q,C.W),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gbZw()
t=A.bk(C.aB,k,k,0,C.c,k,C.mw,k,new A.b5(A.m(16),C.W),k,k,k)
return A.cf(g,h,new A.am(C.V,k,C.a9,C.q,A.a([f,v,A.br(!0,A.mx(new B.dHy(),A.u(A.a([e,new A.C(D.bh9,A.u(A.a([s,C.P,i,C.ab,A.bH(l.f?C.qN:D.eX9,u,t)],r),C.ad,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.co,C.UE,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.beR.prototype={
nV(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.f3(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ad("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ad("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h0(C.bp,v.length),C.aL)}}
B.SJ.prototype={
S(){return new B.aA4()}}
B.aA4.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.at()
u.d!==$&&A.aO()
u.d=new A.ao(new A.bb(w,C.b_,C.aL),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ao(new A.bb(x,C.b_,C.aL),v)
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
ab1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ab1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.n(new B.dGf(r))
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
return A.b(B.a4G(p,m,n,o,C.a.i(l).length===0?null:l),$async$ab1)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.F(y.q).f.P(D.esK)
s=[1]
x=4
break}p.F(y.q).f.P(D.ern)
p=r.c
p.toString
A.a7(p,!1).K(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.n(new B.dGg(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ab1,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.L(d).ax.a===C.H?C.iT:C.oO,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.eQm,s,s,s,1,s,!0),p=A.p(s,D.baE,C.h,s,s,new A.o(s,s,s,A.m(22),s,E.ES,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),o,s,s,s,s,s,2,D.bDc,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),x,s,s,s,s,s,2,D.bD8,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aK(s,C.U,!1,s,!0,C.q,s,A.aL(),w,s,s,s,s,s,2,D.bDm,C.z,!0,s,!0,s,!1,s,C.af,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a6,s,C.am,s,s,s,s)
v=t.r?s:t.gbZx()
u=A.bk(C.aB,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cf(q,r,A.cg(A.u(A.a([p,C.d1,o,C.ab,x,C.ab,w,C.ma,A.bH(t.r?C.qN:C.aKY,v,u)],y.p),C.ad,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.ah),s,!1,!1,s,s)}}
B.a9s.prototype={}
B.br5.prototype={
a22(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a22=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gH(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cl(r.akR()))
x=3
return A.b(B.Pc(t,s),$async$a22)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a22,w)},
gd6(){return this.a}}
B.Lx.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.WS.prototype={
S(){return new B.awc(new A.ao(C.aq,$.at()),A.k6(!0,null,!0,!0,null,null,!1))}}
B.awc.prototype={
Z(){this.a0()
$.aS.x1$.push(new B.cWC(this))},
p(){var x=this.d
x.R$=$.at()
x.O$=0
this.e.p()
this.a2()},
bZD(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).K(x)
return null},
B(d){var x=this,w=null,v=B.ZT(d),u=x.a.c,t=u?C.hm:v.a[2],s=u?C.c:v.a[3],r=u?C.aQ:v.a[4],q=u?C.iT:v.a[0],p=A.m(24),o=A.H(C.aB.j(0.35),C.r,1),n=y.V,m=A.a([new A.aa(0,C.G,C.aB.j(u?0.25:0.12),C.fz,32)],n),l=A.p(w,T.aiw,C.h,w,w,new A.o(w,w,w,A.m(18),A.a([new A.aa(0,C.G,C.aB.j(0.4),C.cv,16)],n),C.aji,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tC(A.ad("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bqL()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aK(!1,C.U,!1,w,!0,C.q,w,A.aL(),x.d,w,w,w,w,w,2,A.bl(w,w,w,C.DC,w,w,"",w,!0,new A.b1(4,A.m(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b1(4,A.m(16),D.aPS),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.af,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cWA(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lA,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.mW,new B.cWB(d),A.d9(w,w,w,w,w,w,w,w,w,s,w,w,C.ca,w,new A.b5(A.m(14),C.W),new A.ax(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.aa(0,C.G,C.aB.j(0.35),C.cG,12)],n)
g=y.p
return A.ev(w,C.K,new A.cZ(Q.Ib,A.bQ(new A.C(C.wu,A.u(A.a([l,C.aN,k,C.P,j,C.dW,i,C.dW,A.B(A.a([f,C.av,A.D(A.bQ(A.aD(!1,C.X,!0,w,A.aH(!1,A.m(14),!0,D.dM4,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gbZC(),w,w,w,w,w,w,w),C.h,C.K,0,w,w,w,w,w,C.ac),new A.o(w,w,w,h,n,K.LD,C.n),C.b7),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.R,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.b7),w),w,w,w,C.K0,C.cX,w,w,w)}}
B.bqL.prototype={
nV(d,e){return e.ahG(e.a.toUpperCase())}}
B.SK.prototype={
S(){return new B.aA5(A.a([],y.r),A.aZ(y.N))},
gd6(){return this.c}}
B.aA5.prototype={
Z(){var x=this
x.a0()
x.rQ()
x.w=A.dD(C.iW,new B.dHl(x))},
p(){var x=this.w
if(x!=null)x.a9(0)
B.ST()
this.a2()},
Zj(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Zj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lw(u.a.c),$async$Zj)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zs(u.a.c),$async$Zj)
case 4:u.n(new s.dGJ(u,e))
u.hM("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$Zj,w)},
rQ(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$rQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Lw(u.a.c),$async$rQ)
case 3:t=e
x=4
return A.b(B.zs(u.a.c),$async$rQ)
case 4:s=e
if(u.c==null){x=1
break}u.n(new B.dGK(u,s))
if(t>0)u.hM("Received "+A.t(t)+" file(s) via My Code.")
u.LR(u.d)
B.An(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$rQ,w)},
LR(d){return this.bvL(d)},
bvL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$LR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a4L(r,u.a.c),$async$LR)
case 8:p=f
if(u.c==null){x=1
break}new B.dGi(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.lZ(D.m2))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.SR(r,u.a.c),$async$LR)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zs(u.a.c),$async$LR)
case 12:u.n(new o.dGj(u,f))
case 1:return A.h(v,w)}})
return A.i($async$LR,w)},
Md(d){return this.bBL(d)},
bBL(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Md=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a4L(d,u.a.c),$async$Md)
case 5:t=f
if(u.c==null){x=1
break}u.n(new B.dGo(u,d,t))
x=6
return A.b(A.fB(new A.fu(t)),$async$Md)
case 6:u.hM("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fB(new A.fu(r.toUpperCase())),$async$Md)
case 7:u.hM("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Md,w)},
hM(d){var x=null,w=this.c
if(w==null)return
w.F(y.q).f.P(A.b_(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.S,x,x,x,x,x,x,x,x,x,x))},
rR(d,e){return this.cuj(d,e)},
cuj(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$rR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.n(new B.dH9(r,e))
u=3
x=6
return A.b(d.$0(),$async$rR)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.n(new B.dHa(r))
$.eI.lU()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rR,w)},
gaQx(){var x=this.a
return x.f||x.r||x.w},
GH(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$GH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaQx()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c2h(s,n,r,q,o,t),$async$GH)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hM("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fgT(o,u.a.c),$async$GH)
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
return A.b(B.BI(s,o,r,q,n,t),$async$GH)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GH,w)},
Yq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Yq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.amq(u.a.c),$async$Yq)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hM("No organization portal found.")
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
return A.b(A.a7(t,!1).cs(A.eH(new B.dGG(u,r,q),!1,null,y.H)),$async$Yq)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yq,w)},
Zu(d){return this.ce0(d)},
ce_(){return this.Zu(1)},
ce0(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Zu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaQx()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.amn(u.a.c),$async$Zu)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Zu,w)},
a94(d,e,f){return this.bRP(d,e,f)},
bRP(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a94=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM(e)
x=1
break}x=3
return A.b(u.rR(new B.dGD(u,d,null,e,f),"Uploading\u2026"),$async$a94)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a94,w)},
bvU(){B.h3k(!1,new B.dGm(this))
return},
ciQ(){this.n(new B.dGO(this))},
auB(){var x=0,w=A.j(y.H),v=this
var $async$auB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bvU()
return A.h(null,w)}})
return A.i($async$auB,w)},
a90(){var x=0,w=A.j(y.H),v=this
var $async$a90=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGs(v),"Importing\u2026"),$async$a90)
case 2:return A.h(null,w)}})
return A.i($async$a90,w)},
Qj(d){return this.ctN(d)},
ctN(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dH6(u,d),!1,null,y.H)),$async$Qj)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.lZ(D.Nw)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).cs(A.eH(new B.dH7(u,d),!1,null,y.H)),$async$Qj)
case 8:x=1
break
case 7:x=u.bSw(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).cs(A.eH(new B.dH8(u,d),!1,null,y.H)),$async$Qj)
case 11:x=1
break
case 10:u.hM("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Qj,w)},
bSw(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.nZ(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.com,C.a.aV(x,w+1).toLowerCase())},
acl(d){return this.c5k(d)},
c5k(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.lZ(D.m2)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).cs(A.eH(new B.dGE(u,d),!1,null,y.H)),$async$acl)
case 5:x=1
break
case 4:u.n(new B.dGF(u,d))
case 1:return A.h(v,w)}})
return A.i($async$acl,w)},
PI(d){return this.clD(d)},
clD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hM("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$PI)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dH_(u,d),"Preparing QR\u2026"),$async$PI)
case 4:case 1:return A.h(v,w)}})
return A.i($async$PI,w)},
af_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$af_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dH0(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.A(new A.a5(t,new B.dH1(q),s),s.k("G.E"))
if(r.length===0){u.hM("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.PI(r),$async$af_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$af_,w)},
aeT(d){return this.clc(d)},
clc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZT(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dGU(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$aeT)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Qj(d)
break
case"qr":u.PI(A.a([d],y.r))
break
case"send_my_code":u.c5V(A.a([d],y.r))
break
case"save":u.aef(d)
break
case"delete":u.Hp(d)
break}case 1:return A.h(v,w)}})
return A.i($async$aeT,w)},
Vo(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Vo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dGp(),A.T(t).k("J<1,n>")).fG(0)}t=u.d
s=A.T(t).k("a5<1>")
r=A.A(new A.a5(t,new B.dGq(q),s),s.k("G.E"))
if(r.length===0){u.hM("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oA(t,s.c,s.f),$async$Vo)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.rR(new B.dGr(u,r),"Preparing file\u2026"),$async$Vo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
ads(d){return this.ccw(d)},
ccw(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ads=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h41(d,!1),$async$ads)
case 3:s=f
r=s==null
q=B.a4I(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hM("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ads,w)},
acr(){var x=0,w=A.j(y.H),v=this,u
var $async$acr=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fot(u,v.a.c),$async$acr)
case 2:return A.h(null,w)}})
return A.i($async$acr,w)},
bvT(){B.h3k(!1,new B.dGl(this,null))
return},
HE(d,e){return this.c5W(d,e)},
aW2(d){return this.HE(null,d)},
c5V(d){return this.HE(d,null)},
c5W(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$HE=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a5<1>")
k=A.A(new A.a5(p,new B.dGH(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wg.c2().akc(!0,C.Wj,!1),$async$HE)
case 10:r=g
if(r==null||J.ci(r.a)){x=1
break}x=11
return A.b(s.rR(new B.dGI(l,s,r),"Preparing\u2026"),$async$HE)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a4(j)
$.al.$1("[doc share send my code pick] "+A.t(q))
s.hM("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hM("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.byY(p,l,e,s.a.c),$async$HE)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HE,w)},
GW(d){return this.bRC(d)},
bRC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$GW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hib(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aW2(t),$async$GW)
case 8:x=6
break
case 7:u.hM("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ad("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hM("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.rR(new B.dGB(u,d),"Receiving video\u2026"),$async$GW)
case 11:x=1
break
case 10:x=12
return A.b(u.rR(new B.dGC(u,d),"Receiving\u2026"),$async$GW)
case 12:case 1:return A.h(v,w)}})
return A.i($async$GW,w)},
CY(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$CY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.BC()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ads(t),$async$CY)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.GW(s),$async$CY)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dGM(u),!1,null,y.N)),$async$CY)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.rQ(),$async$CY)
case 10:x=1
break
case 9:x=11
return A.b(u.GW(C.a.i(r)),$async$CY)
case 11:case 1:return A.h(v,w)}})
return A.i($async$CY,w)},
aef(d){return this.chr(d)},
chr(d){var x=0,w=A.j(y.H),v=this
var $async$aef=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.rR(new B.dGL(v,d),"Saving\u2026"),$async$aef)
case 2:return A.h(null,w)}})
return A.i($async$aef,w)},
Hp(d){return this.bE2(d)},
bE2(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Hp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kN(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Hp)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c2k(t),$async$Hp)
case 6:case 5:s=d.a
x=7
return A.b(B.D7(u.a.c,s),$async$Hp)
case 7:u.r.W(0,s)
x=8
return A.b(u.rQ(),$async$Hp)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Hp,w)},
af5(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$af5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.ZT(r)
r=u.c
r.toString
x=3
return A.b(A.c0(C.K,null,new B.dH5(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$af5)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.acr()
break
case"import":u.a90()
break}case 1:return A.h(v,w)}})
return A.i($async$af5,w)},
bZA(d){var x=d.c
if(C.a.a_(x,"video/")||d.lZ(D.m2))return C.pa
if(C.a.a_(x,"image/")||d.lZ(D.Nw))return C.rT
if(C.a.q(x,"pdf"))return E.Lc
return D.agl},
B(d){var x,w,v=this,u=null,t=B.ZT(d),s=t.a,r=s[0],q=s[3],p=A.aF(u,u,u,u,C.EL,u,u,u,new B.dHg(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aF(u,u,u,u,D.bx0,u,u,u,v.e?u:v.gc5D(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gciP()
n.push(A.aF(u,u,u,u,A.V(v.r.a===x?D.brq:E.agK,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aF(u,u,u,u,C.Y7,u,u,u,v.e?u:v.gbZB(),u,u,u,u,"Scan QR",u))
n.push(A.aF(u,u,u,u,C.ns,u,u,u,v.e?u:v.gaX5(),u,u,u,u,"Upload files",u))
n.push(A.aF(u,u,u,u,D.byF,u,u,u,v.e?u:new B.dHh(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lk(new B.dHi(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([p.j(A.L(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e3(A.p(u,u,C.h,u,u,new A.o(u,u,u,u,u,new A.bS(C.B,0.5,C.x,u,0,A.a([C.aB.j(A.L(d).ax.a===C.H?0.12:0.08),C.aB.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mR(s[1].j(0.5),u,C.aB,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.aw9(C.j0,s,!0,t,w?u:v.gclE(),u),1)
x.push(new A.C(D.bfW,A.mx(new B.dHj(),A.B(A.a([s,C.av,A.D(new B.aw9(C.ur,"Export",!1,t,w?u:v.gbHr(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.co,C.ig,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.b9y(t,v.e?u:v.gaX5(),u)
else s=A.jT(!0,u,u,new B.dHk(v,t),s,u,D.bfO,u,u,!1,!1)
x.push(A.D(s,1))
return A.cf(q,r,new A.am(C.V,u,C.a9,C.q,A.a([p,n,A.u(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aw9.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aB,t,t,0,C.c,t,C.ua,t,new A.b5(s,C.W),t,t,t)
return A.dk(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.d9(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.ua,t,new A.b5(s,C.W),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.ey(A.V(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eK,t,t,t),u.r,v)}}
B.b9y.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aB.j(0.16)],y.O),t=A.H(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.mx(new B.cWy(),new A.C(E.Vw,A.u(A.a([A.mx(new B.cWz(),A.p(x,A.V(C.wP,v[5],x,x,x,36),C.h,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ex,C.ih,x,new A.bm(0.86,1,w),s),C.dW,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.T,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dW,A.dk(C.ns,D.f0N,this.d,A.bk(C.aB,x,x,x,C.c,x,C.Vr,x,new A.b5(A.m(16),C.W),x,x,x))],y.p),C.m,x,C.e,C.R,0,C.p),x),C.co,C.zr,x,new A.bm(0,1,w),s),x,x,x)}}
B.a9M.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dB(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aB.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.lZ(D.m2))p=D.cTB
else{p=C.a.a_(p,"image/")||i.lZ(D.Nw)
n=y.O
p=p?A.a([C.cW,C.aB],n):A.a([C.aK.j(0.85),C.aB.j(0.7)],n)}p=A.p(j,A.V(k.w,C.c,j,j,j,22),C.h,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.Z,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gamc()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.lZ(D.m2))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.ba,A.D(A.u(A.a([q,C.au,A.d(C.d.aG(n," \xb7 "),j,2,C.Z,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aF(j,j,j,j,A.V(C.fx,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c6))
if(!(!o||i.lZ(D.m2)))l.push(A.fyc(C.aB,!1,j,j,j,!1,j,j,new B.cWV(k),j,j,new A.b5(A.m(5),C.W),j,j,!1,u))
x=A.V(C.np,x[4],j,j,j,j)
l.push(A.aF(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c6))
return A.mx(new B.cWW(),new A.C(C.dZ,A.aD(!1,C.X,!0,j,A.aH(!1,r,!0,new A.C(C.UY,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.h,w,0,j,j,new A.b5(v,new A.ax(t,s,C.r,-1)),j,j,C.ac),j),C.co,h,new A.cv("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.WU.prototype={
S(){return new B.awe()},
gd6(){return this.c}}
B.awe.prototype={
Z(){this.a0()
this.wN()},
p(){B.hiq(this.e)
this.a2()},
wN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$wN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qM(o.c,o.d),$async$wN)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aE.gah(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hit(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.his(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.n(new B.cWS(s))
x=1
break}s.n(new B.cWT(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a4(l)
if(s.c==null){x=1
break}s.n(new B.cWU(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wN,w)},
a_q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qM(t.c,t.d),$async$a_q)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(D.epQ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.af4(q,s,t.length===0?"image/jpeg":t,null,s),$async$a_q)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a_q,w)},
bRv(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.k7(u,C.B,v,new B.cWQ(w,t),C.fG,C.dn,!0,v,v,v,v)
else if(t!=null&&!C.aE.gah(t))x=A.fC(t,C.B,v,new B.cWR(w),C.fG,C.dn,!0,v,!1,v,v)
else return C.bF
return A.tL(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.ZT(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aF(u,u,u,u,C.Ak,u,u,u,v.gb_O(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Cw
else{q=v.r
if(q!=null)t=new A.C(C.em,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.em,A.u(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dk(C.Ak,D.eM8,v.gb_O(),A.bk(C.aB,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.R,0,C.p),u)
t=p}else t=v.bRv()}return A.cf(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.WR.prototype={
S(){return new B.awb(A.afQ(),C.bu,C.bu)},
gd6(){return this.c}}
B.awb.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fm(w,A.a2(w).k("fm<1>")).hX(new B.cWv(v))
x.gcHb().hX(new B.cWw(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fm(x,A.a2(x).k("fm<1>"))}if(x==null)x=C.aVH
x.hX(new B.cWx(v))
v.wN()},
wN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$wN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qM(p.c,p.d),$async$wN)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.n(new B.cWo(s))
x=1
break}x=8
return A.b(s.d.B0(0,new A.a11(r,s.a.d.c)),$async$wN)
case 8:if(s.c==null){x=1
break}s.n(new B.cWp(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a4(n)
if(s.c==null){x=1
break}s.n(new B.cWq(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$wN,w)},
Xn(){var x=0,w=A.j(y.H),v=this,u
var $async$Xn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fS(0),$async$Xn)
case 5:x=3
break
case 4:x=6
return A.b(u.i_(0),$async$Xn)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Xn,w)},
aOu(d){var x=d.a
return C.a.aT(C.o.u(C.o.ak(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.ak(x,1e6)%60),2,"0")},
p(){this.d.p()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.ZT(d),m=C.o.ak(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Cw
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bso,C.h,o,o,new A.o(o,o,o,A.m(24),o,K.LD,C.n),o,88,o,o,o,o,o,88)
t=A.m8(C.aB,o,o,m,0,new B.cWr(p),C.o.D(C.o.ak(p.w.a,1000),0,m))
x=A.d(p.aOu(p.w)+" / "+p.aOu(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a0,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aB,o,o,o,o,D.emq,o,o,o,o,o,o)
r=p.f
q=A.V(r?H.wZ:C.iG,o,o,o,o,o)
x=A.u(A.a([u,C.kb,t,x,C.d1,A.dk(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gbZE(),s)],y.p),C.m,o,C.e,C.R,0,C.p)}}return A.cf(v,w,A.as(new A.C(C.ue,x,o),o,o,o),o,!1,!1,o,o)}}
B.NH.prototype={
S(){return new B.awh()},
gd6(){return this.c}}
B.awh.prototype={
Z(){this.a0()
this.NH()},
NH(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$NH=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fAo(o.c,o.d,new B.cX8(s)),$async$NH)
case 7:r=e
if(r==null||r.length===0){s.n(new B.cX9(s))
x=1
break}s.e=r
q=O.hEr(r)
if(q==null){s.n(new B.cXa(s))
x=1
break}s.d=q
q.aJ(0,s.gaVS())
x=8
return A.b(q.hW(0).cJ(0,C.rz),$async$NH)
case 8:if(s.c==null){x=1
break}s.n(new B.cXb(s))
x=9
return A.b(q.p5(0),$async$NH)
case 9:q.rr(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a4(m)
if(s.c==null){x=1
break}s.n(new B.cXc(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NH,w)},
c3Z(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.n(new B.cXd(x))},
p(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.BJ(0,x.gaVS())
w=x.d
if(w!=null)w.p()
B.hNW(x.e)
x.a2()},
ab4(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ab4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aWe(u.c,u.d),$async$ab4)
case 2:t=e
u=v.c
if(u!=null)u.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ab4,w)},
B(d){var x,w,v,u=this,t=null,s=B.ZT(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aF(t,t,t,t,C.ob,t,t,t,u.gbZy(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.i6(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Cw
else{q=u.r
if(q!=null)s=new A.C(C.em,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.afk(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fM(x,new A.am(C.B,t,C.a9,C.q,A.a([new A.z_(s,t),A.aJ(t,A.Fm(A.p(t,A.V(q?H.wZ:C.iG,C.c,t,t,t,48),C.h,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c1,t,t,t),C.b9,C.X,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cXf(u),t,t,t,t,t,t,!1,C.ae)],o),t),t)}else s=C.bF}}return A.cf(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.WW.prototype={
S(){return new B.awf(new A.cn(null,y.A))}}
B.awf.prototype={
gcu3(){var x,w,v=this.a
if(v.e!==D.OK)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gctL(){var x,w,v=this.a
if(v.e!==D.xQ)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcu3()
if(x!=null){v.OK(x)
v.e=A.dD(R.Dt,new B.cX4(v,x))}w=v.gctL()
if(w!=null){v.OJ(w)
v.f=A.dD(C.h_,new B.cX5(v,w))}},
p(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
OJ(d){return this.caN(d)},
caN(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$OJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.amv(d),$async$OJ)
case 3:t=f
x=4
return A.b(B.c2D(d),$async$OJ)
case 4:s=f
if(u.c==null){x=1
break}u.n(new B.cWX(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$OJ,w)},
OK(d){return this.caO(d)},
caO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$OK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.foK(d),$async$OK)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bwX(t),$async$OK)
case 4:if(u.c==null){x=1
break}u.n(new B.cWY(u))
u.c.F(y.q).f.P(D.aI3)
case 1:return A.h(v,w)}})
return A.i($async$OK,w)},
gbWm(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gbZz(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_b(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_b=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.BC()){t=u.c
if(t!=null)t.F(y.q).f.P(D.esU)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).cs(A.eH(new B.cWZ(),!1,null,y.N)),$async$a_b)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bwX(s),$async$a_b)
case 4:t=u.c
if(t!=null)t.F(y.q).f.P(D.aI3)
case 1:return A.h(v,w)}})
return A.i($async$a_b,w)},
a70(d){return this.bBM(d)},
bBM(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a70=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fB(new A.fu(C.d.aG(t,", "))),$async$a70)
case 3:if(d.e!=null){t=d.F(y.q).f
t.P(A.b_(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a70,w)},
ab2(d){return this.bBw(d)},
bBw(d){var x=0,w=A.j(y.H),v=this
var $async$ab2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fB(new A.fu(v.a.c)),$async$ab2)
case 2:if(d.e!=null)d.F(y.q).f.P(D.eqi)
return A.h(null,w)}})
return A.i($async$ab2,w)},
a_6(d){return this.cht(d)},
cht(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.alz(s.d,4),$async$a_6)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rf(r,"ngmy_doc_share_qr.png"),$async$a_6)
case 8:q=f
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a4(n)
if(d.e!=null)d.F(y.q).f.P(A.b_(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.S,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_6,w)},
gaRA(){var x,w=this.a
if(w.e!==D.FT)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
a6Y(d){return this.bBF(d)},
bBF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a6Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaRA()
if(t==null){x=1
break}x=3
return A.b(A.fB(new A.fu(C.a.a_(t,"http")?t:"N2|"+t)),$async$a6Y)
case 3:if(d.e!=null)d.F(y.q).f.P(D.erU)
case 1:return A.h(v,w)}})
return A.i($async$a6Y,w)},
ab3(){var x=0,w=A.j(y.H),v=this,u
var $async$ab3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.ST(),$async$ab3)
case 2:u=v.c
if(u!=null)A.a7(u,!1).K(null)
return A.h(null,w)}})
return A.i($async$ab3,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.ZT(d),i=m.a,h=i.c
if(h.length>48)h=C.a.al(h,0,44)+"\u2026"
i=i.e
i=i!==D.FT&&i!==D.OK&&i!==D.xQ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.FT||t===D.OK||t===D.xQ?l:A.aF(l,l,l,l,C.kA,l,l,l,m.gaUa(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.H(C.aB.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pi(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bs,A.d(""+q.d+" file(s) \xb7 "+m.gbWm(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.FT){t=C.aB.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mx,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gbZz(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aG(t,", ")
C.d.v(q,A.a([C.T,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bCh,D.eUz,new B.cX_(m,d),l)],p))}if(m.a.e===D.FT&&m.gaRA()!=null)C.d.v(q,A.a([C.T,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a0,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hf(D.bz_,D.eRD,new B.cX0(m,d),l)],p))
if(m.a.e===D.xQ){x=(m.w?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Cz:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mx,l,l,l)],p))}if(m.a.e===D.OK){x=(m.r?C.dq:C.aB).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Cz:C.aB,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.h,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mx,l,l,l),C.ab,A.dk(D.buR,D.eXs,m.gchR(),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.nU(i,A.cf(v,w,new A.C(C.a8,A.u(A.a([A.D(A.p(l,A.u(q,C.m,l,C.b5,C.j,0,C.p),C.h,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.ab,A.B(A.a([A.D(A.ey(M.Aj,C.R_,new B.cX1(m,d),l),1),C.av,A.D(A.dk(C.xj,C.a4s,new B.cX2(m,d),A.bk(C.aB,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a3(1/0,l,A.bH(C.yj,m.gaUa(),A.bk(C.aK,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cX3(),y.C)}}
B.a9K.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cg(A.u(A.a([w,C.aN,A.p(x,A.pi(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.h,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.R,0,C.p),C.q,x,C.z,x,x,x,x,C.ah)
return A.eo(A.a([A.bH(C.BT,new B.cWn(d),x)],u),x,x,C.mj,v,x,x,x,x,D.eLc,x)}}
B.WQ.prototype={
S(){return new B.awa(A.y8(C.wb,C.n2,C.t2))}}
B.awa.prototype={
p(){this.d.p()
this.a2()},
atk(d){var x,w,v,u,t
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
return A.cf(A.eA(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.eS2,x,x,x,1,x,!0),C.w,A.y7(this.d,C.bN,this.gatj()),x,!1,!1,x,x)}}
B.WX.prototype={
S(){return new B.awg(A.y8(C.wb,C.n2,C.t2))},
gd6(){return this.c}}
B.awg.prototype={
bSy(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
acO(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$acO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Qa("text/plain"),$async$acO)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.F(y.q).f.P(D.esO)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).K(t)
case 1:return A.h(v,w)}})
return A.i($async$acO,w)},
a7L(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a7L=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h41(p,!0),$async$a7L)
case 3:t=e
p=t==null
s=B.a4I(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.F(y.q).f.P(D.epq)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).K(s)
case 1:return A.h(v,w)}})
return A.i($async$a7L,w)},
p(){this.d.p()
this.a2()},
atk(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bSy(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).K(t)
return}},
B(d){var x,w=this,v=null,u=A.aF(v,v,v,v,F.ahC,v,v,v,w.gbH_(),v,v,v,v,"Enter QR share code",v),t=A.aF(v,v,v,v,F.Ye,v,v,v,w.gc8d(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aF(v,v,v,v,A.V(w.f?C.rR:P.KY,v,v,v,v,v),v,v,v,new B.cX7(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.eYd,v,v,v,1,v,!0)
u=A.y7(w.d,C.bN,w.gatj())
x=A.m(20)
return A.cf(t,C.w,new A.am(C.V,v,C.a9,C.q,A.a([u,A.as(A.p(v,v,C.h,v,v,new A.o(v,v,A.H(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.dQx],s),v),v,!1,!1,v,v)}}
B.b9z.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.nW
else x=s.w?C.aB:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aB.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.V(s.c,x,r,r,r,22),C.h,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.nW:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aD(!1,C.X,!0,r,A.aH(!1,w,!0,new A.C(C.VC,A.B(A.a([u,C.ba,A.D(A.u(t,C.F,r,C.e,C.j,0,C.p),1),A.V(C.ek,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.h,C.K,0,r,r,r,r,r,C.ac)}}
B.a71.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.Mz.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.V_.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.My.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.DB.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cdn.prototype={}
B.DA.prototype={}
B.a70.prototype={}
B.aqK.prototype={}
B.V0.prototype={}
var z=a.updateTypes(["au<~>()","R(j8)","n(j8)","SK(X)","~()","WT(X)","I(I,j8)","NH(X)","~(lE)","co(DA)","au<j8?>(@)","SI(X)","SM(X)","C(j8)","j8(@)","a0<n,@>(j8)","WS(X)","SJ(X)","WU(X)","WR(X)","WW(X)","a9K(X)","ak<j8>()","WX(X)","a9M(X,I)","WQ(X)","a0<n,aB>(j8)","co(V_)","co(a70)","au<co>(DA)"])
B.cdj.prototype={
$1(d){var x=this.a
x.x=D.aFB
x.y.G(0,D.aFB)},
$S:68}
B.cdk.prototype={
$1(d){var x=this.a
x.x=D.aFA
x.y.G(0,D.aFA)},
$S:68}
B.cdl.prototype={
$1(d){var x=this.a
x.ae8(A.aLu(d.data)).bw(new B.cdi(x),y.b)},
$S:68}
B.cdi.prototype={
$1(d){var x=this.a
x.z.G(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cdm.prototype={
$1(d){},
$S:68}
B.cdp.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hn7(d.channel))},
$S:15}
B.cdq.prototype={
$1(d){},
$S:15}
B.cdr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFp(w.iceConnectionState)
x.cx=w
if($.fIT())switch(w.a){case 0:x.cy=D.aFG
break
case 1:x.cy=D.aFH
break
case 3:x.cy=D.aFI
break
case 5:x.cy=D.aFE
break
case 6:x.cy=D.aFF
break
case 7:x.cy=D.a2d
break
default:break}},
$S:142}
B.cds.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hFq(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:142}
B.cdt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hPo(w.signalingState)},
$S:142}
B.cdu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hNI(w.connectionState)},
$S:142}
B.cdv.prototype={
$1(d){},
$S:142}
B.cdw.prototype={
$1(d){},
$S:15}
B.f3w.prototype={
$1(d){var x=y.F.a(new A.r6([],[]).oP(d.target.result,!1)),w=C.wc.q(x.objectStoreNames,"blobs")
if(!w)C.w8.Jc(x,"blobs")},
$S:198}
B.fog.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.uG.f1(this.b)
$.eI.lU()
this.c.$1(d)},
$S:450}
B.foi.prototype={
$1(d){return this.a.$1(B.hvN(this.b,this.c))},
$S:31}
B.foh.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.fof.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fow.prototype={
$1(d){var x=this
return B.fUP(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fox.prototype={
$1(d){var x=this
return B.fUP(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f4P.prototype={
$1(d){var x=this
return B.c2e(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cWG.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cWD.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2e(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cWF.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2e(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cWE.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c2e(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cWI.prototype={
$4(d,e,f,g){var x=null
return A.jt(A.B(A.a([A.aF(x,x,x,x,D.btt,x,x,x,new B.cWH(d),x,x,x,x,x,x),A.D(A.Dm(D.Nj,!0,x,C.Xh,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Nj,x,g,C.adF,0,e,f)},
$C:"$4",
$R:4,
$S:431}
B.cWH.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6O.prototype={
$1(d){var x,w,v=null,u=A.aG(d,C.eo,y.o).w,t=this.a,s=t?C.hm:C.c,r=A.m(28),q=A.p(v,D.baX,C.h,v,v,D.aRu,v,v,v,v,D.adw,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),p,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bxz,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.C(new A.M(0,0,0,u.f.d),A.p(v,A.u(A.a([q,new A.C(C.zH,A.u(A.a([o,C.ab,A.aK(v,C.U,!1,v,!0,C.q,v,A.aL(),x,v,v,v,v,v,2,A.bl(v,new A.b1(4,A.m(16),C.W),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ahR,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.af,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a6,v,C.am,v,v,v,v),C.bs,A.B(A.a([A.D(A.dU(C.dd,new B.f6M(d),v),1),C.av,A.D(A.bH(D.eQG,new B.f6N(p,x,d),A.bk(C.aW,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.R,0,C.p),C.h,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.JH,v,v,v,v),v)},
$S:57}
B.f6M.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.f6N.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.F(y.q).f.P(D.eqx)
return}x=w.b.a.a
A.a7(w.c,!1).K(new B.ayH(v,x))},
$S:0}
B.f7h.prototype={
$1(d){var x=this,w=null,v=A.aG(d,C.eo,y.o).w,u=x.a,t=u?C.hm:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.M(0,0,0,v.f.d),A.p(w,A.u(A.a([A.p(w,D.baM,C.h,w,w,D.aSQ,w,w,w,w,D.adw,w,w,1/0),new A.C(C.zH,A.u(A.a([A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),r,w,w,w,w,w,2,B.fFe(u,"Organization name",C.E5,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),q,w,w,w,w,w,2,B.fFe(u,"Access code",C.mB,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.T,A.aK(w,C.U,!1,w,!0,C.q,w,A.aL(),p,w,w,w,w,w,2,B.fFe(u,"Member password",N.EG,w),C.z,!0,w,!0,w,!1,w,C.af,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a6,w,C.am,w,w,w,w),C.bs,A.bH(D.eYh,new B.f7g(r,q,p,d),A.bk(C.aB,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.R,0,C.p),C.h,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.JH,w,w,w,w),w)},
$S:57}
B.f7g.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.F(y.q).f.P(D.eqC)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).K(new B.aBO(u,x,w))},
$S:0}
B.c25.prototype={
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
p=C.a.a_(j,"http")?A.cq(j,0,null):s.b.aP(j)
u=4
x=7
return A.b(A.uw(p,null).cJ(0,C.UD),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cl(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Ao(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a4(h)
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
B.c2b.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c2c.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c2d.prototype={
$1(d){return d.b},
$S:z+2}
B.c27.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c28.prototype={
$1(d){return d.b},
$S:z+2}
B.c26.prototype={
$1(d){return A.Z(y.f.a(d),y.N,y.z)},
$S:12}
B.c29.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c2a.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fou.prototype={
$1(d){return new B.SI(this.a,null)},
$S:z+11}
B.fov.prototype={
$1(d){return new B.SM(this.a,this.b,this.c,null)},
$S:z+12}
B.dGe.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dHn.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dHo.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dHp.prototype={
$1(d){var x=this.a
if(x.c!=null)x.n(new B.dHm(x,d))},
$S:2}
B.dHm.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHq.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHr.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dHs.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dHt.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dHu.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dHv.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dHy.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.dHw.prototype={
$1(d){var x=this.a
return x.f?null:x.Xm()},
$S:2}
B.dHx.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aB.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.lZ(D.Nw))s=C.rT
else s=C.a.a_(s,"video/")||d.lZ(D.m2)?C.pa:D.agl
x=this.b.a
w=y.p
return new A.C(C.ll,A.B(A.a([A.p(v,A.V(s,C.aB,v,v,v,18),C.h,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.u(A.a([A.d(d.b,v,v,C.Z,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gamc(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dGf.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dGg.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c2f.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.c2g.prototype={
$2(d,e){return new A.bq(J.k(d),J.k(e),y.M)},
$S:95}
B.fp0.prototype={
$2(d,e){return e===this.a},
$S:316}
B.f0J.prototype={
$1(d){return J.k(d)},
$S:17}
B.f50.prototype={
$1(d){var x=this.b
B.htW(C.DT.ga3B(this.a)).bw(x.gcwY(x),y.H)},
$S:120}
B.f51.prototype={
$1(d){return this.a.d0(0,null)},
$S:120}
B.f52.prototype={
$0(){return null},
$S:11}
B.c2u.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f53.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.Z(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aQ(p.h(0,"sizeBytes"))
v=v==null?q:C.k.L(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.O(Date.now(),0,!1).a4().aa():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.j8(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.f8X.prototype={
$1(d){return d.ad()},
$S:z+15}
B.f3I.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f3J.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c2z.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.fsW.prototype={
$1(d){return new B.WS(this.a,null)},
$S:z+16}
B.cWC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.ft()},
$S:8}
B.cWA.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).K(x)
return null},
$S:2}
B.cWB.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHl.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.Zj()},
$S:14}
B.dGJ.prototype={
$0(){var x=J.bA_(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGK.prototype={
$0(){var x=J.bA_(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGi.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dGh(this.b))
if(w>=0){x=x.d
x[w]=x[w].azR(this.c)}},
$S:0}
B.dGh.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGj.prototype={
$0(){var x=J.bA_(this.b)
x=A.A(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dGo.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dGn(this.b))
if(w>=0){x=x.d
x[w]=x[w].azR(this.c)}},
$S:0}
B.dGn.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dH9.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dHa.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dGG.prototype={
$1(d){return new B.SJ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dGD.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.GH(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.SN(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.rQ(),$async$$0)
case 5:s=J.a6(t)
x=s.gcg(t)?6:7
break
case 6:x=8
return A.b(r.Zu(s.gH(t)),$async$$0)
case 8:case 7:r.hM(s.gah(t)?u.d:u.e+" "+s.gH(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGm.prototype={
$1(d){this.a.a94(d,"No files selected.","Added")},
$S:450}
B.dGO.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.J(x,new B.dGN(),A.T(x).k("J<1,n>")))},
$S:0}
B.dGN.prototype={
$1(d){return d.a},
$S:z+2}
B.dGs.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wg.c2().cJ5(C.Wj,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fg(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aE.gah(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jd(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a4(j)
$.al.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hM("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hM("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.amu(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ci(l)){o.hM("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.rQ(),$async$$0)
case 9:o.hM("Imported "+J.a9(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dH6.prototype={
$1(d){return new B.NH(this.a.a.c,this.b,null)},
$S:z+7}
B.dH7.prototype={
$1(d){return new B.WU(this.a.a.c,this.b,null)},
$S:z+18}
B.dH8.prototype={
$1(d){return new B.WR(this.a.a.c,this.b,null)},
$S:z+19}
B.dGE.prototype={
$1(d){return new B.NH(this.a.a.c,this.b,null)},
$S:z+7}
B.dGF.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.G(0,w)},
$S:0}
B.dH_.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.GH(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a4K(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hM("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ce_(),$async$$0)
case 5:x=6
return A.b(p.rQ(),$async$$0)
case 6:r=A.T(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dGW(p),r),new B.dGX(),r.k("J<ai.E,n>")).bZ(0,new B.dGY())
q=A.A(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).cs(A.eH(new B.dGZ(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oz(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.ST(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGW.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dGV(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dGV.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dGX.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dGY.prototype={
$1(d){return d.length!==0},
$S:3}
B.dGZ.prototype={
$1(d){var x=this.a
return new B.WW(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dH0.prototype={
$1(d){return d.a},
$S:z+2}
B.dH1.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGU.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aB.j(0.35),q=A.as(A.p(v,v,C.h,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kr,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.Z,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gamc(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.lZ(D.m2)?C.rV:C.o9
p=!x||p.lZ(D.m2)?"Play video":"View"
return A.bQ(A.br(!0,new A.C(C.zD,A.u(A.a([q,o,t,C.ay,B.WV(!1,u,!1,w,p,new B.dGP(d),v),B.WV(!1,u,!1,C.j0,"Share via QR",new B.dGQ(d),"Letters/numbers QR code"),B.WV(!1,u,!1,D.Xm,"Send to their Code",new B.dGR(d),"Enter someone else's personal code"),B.WV(!1,u,!1,C.hh,"Download / save",new B.dGS(d),v),C.ar,B.WV(!1,u,!0,C.e4,"Delete",new B.dGT(d),v)],y.p),C.ad,v,C.e,C.R,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.c1(new A.ax(r,1,C.r,-1),C.W,C.W,C.W),C.kh,v,v,C.n),C.b7)},
$S:684}
B.dGP.prototype={
$0(){A.a7(this.a,!1).K("view")
return null},
$S:0}
B.dGQ.prototype={
$0(){A.a7(this.a,!1).K("qr")
return null},
$S:0}
B.dGR.prototype={
$0(){A.a7(this.a,!1).K("send_my_code")
return null},
$S:0}
B.dGS.prototype={
$0(){A.a7(this.a,!1).K("save")
return null},
$S:0}
B.dGT.prototype={
$0(){A.a7(this.a,!1).K("delete")
return null},
$S:0}
B.dGp.prototype={
$1(d){return d.a},
$S:z+2}
B.dGq.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dGr.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a4M(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.EW(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oz(s.c,s.f),$async$$0)
case 4:u.hM(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGl.prototype={
$1(d){var x=this.a
x.rR(new B.dGk(x,d,this.b),"Preparing\u2026")},
$S:450}
B.dGk.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hM("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.SN(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ci(s)){t.hM("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.byY(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hM("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGH.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dGI.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aU(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fAr(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.G(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.ET(new B.dGx(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hM("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ce(null,null,!1,null,new B.dGy(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.n(new B.dGz(s))
case 5:x=8
return A.b(r.b.i0(0,C.Dq,new B.dGA()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a6(t)
if(q.gah(t)){s.hM("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.rQ(),$async$$0)
case 9:s.hM("Received "+q.gH(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGx.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGu(x,d,e))},
$S:132}
B.dGu.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGy.prototype={
$1(d){return new B.a9K(this.a.a,null)},
$S:z+21}
B.dGz.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dGA.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dGC.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.GL(o)!=null?3:4
break
case 3:x=5
return A.b(B.a4A(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aW2(B.GL(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.amu(new B.dGv(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ci(r)){if(B.fAq(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hM(q)
x=1
break}x=10
return A.b(s.rQ(),$async$$0)
case 10:o=J.cB(r)
p=o.eD(r,new B.dGw()).gH(0)
s.hM(p>0?"Received "+p+" video(s).":"Restored "+o.gH(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dGv.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.n(new B.dGt(x,d,e))},
$S:132}
B.dGt.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dGw.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.dGM.prototype={
$1(d){return new B.WX(this.a.a.c,null)},
$S:z+23}
B.dGL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aWe(u.a.c,v.b),$async$$0)
case 2:t.hM(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dH5.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aB.j(0.35)
return A.bQ(A.br(!0,new A.C(C.zD,A.u(A.a([A.as(A.p(x,x,C.h,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kr,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.WV(!0,w,!1,C.mB,"My Code",new B.dH2(d),"Your personal code & QR \u2014 others send docs to you"),B.WV(!1,w,!1,D.Xm,"Send to their Code",new B.dH3(this.a,d),"Enter someone else's 5-digit code + letter"),B.WV(!1,w,!1,S.x8,"Import backup",new B.dH4(d),".ngmydoc file from another device")],y.p),C.ad,x,C.e,C.R,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.c1(new A.ax(t,1,C.r,-1),C.W,C.W,C.W),C.kh,x,x,C.n),C.b7)},
$S:684}
B.dH2.prototype={
$0(){A.a7(this.a,!1).K("my_code")
return null},
$S:0}
B.dH3.prototype={
$0(){A.a7(this.b,!1).K(null)
this.a.bvT()},
$S:0}
B.dH4.prototype={
$0(){A.a7(this.a,!1).K("import")
return null},
$S:0}
B.dHi.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.GU(D.Nj,x,C.Xh,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cJ(C.d.gI(D.Nj).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:650}
B.dHg.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.dHh.prototype={
$0(){this.a.af5()
return null},
$S:0}
B.dHj.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*10)),e)},
$S:107}
B.dHk.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.a9M(e,w,v,this.b,x.e,x.bZA(w),new B.dHc(x,w),new B.dHd(x,v,w),new B.dHe(x,w),new B.dHf(x,w),null)},
$S:z+24}
B.dHc.prototype={
$0(){this.a.acl(this.b)
return null},
$S:0}
B.dHd.prototype={
$0(){var x=this.a
return x.n(new B.dHb(x,this.b,this.c))},
$S:0}
B.dHb.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.G(0,w)},
$S:0}
B.dHe.prototype={
$0(){this.a.Md(this.b)
return null},
$S:0}
B.dHf.prototype={
$0(){this.a.aeT(this.b)
return null},
$S:0}
B.cWy.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*18)),e)},
$S:107}
B.cWz.prototype={
$3(d,e,f){return A.e5(C.B,f,e,null,null)},
$S:134}
B.cWW.prototype={
$3(d,e,f){return A.d4(A.dO(f,new A.v(0,(1-e)*14)),e)},
$S:107}
B.cWV.prototype={
$1(d){return this.a.y.$0()},
$S:79}
B.cWS.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cWT.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cWU.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cWQ.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aE.gah(w))return A.fC(w,C.B,x,new B.cWO(this.a),C.fG,C.dn,!0,x,!1,x,x)
$.aS.x1$.push(new B.cWP(this.a))
return C.bF},
$S:140}
B.cWO.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWM(this.a))
return C.bF},
$S:186}
B.cWM.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWJ(x))},
$S:8}
B.cWJ.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWP.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWL(x))},
$S:8}
B.cWL.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWR.prototype={
$3(d,e,f){$.aS.x1$.push(new B.cWN(this.a))
return C.bF},
$S:186}
B.cWN.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.n(new B.cWK(x))},
$S:8}
B.cWK.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cWv.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWu(x,d))},
$S:1735}
B.cWu.prototype={
$0(){return this.a.f=this.b===C.tq},
$S:0}
B.cWw.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWt(x,d))},
$S:8}
B.cWt.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cWx.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.n(new B.cWs(x,d))},
$S:8}
B.cWs.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cWo.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cWp.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cWq.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cWr.prototype={
$1(d){return this.a.d.Lf(0,A.dB(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cX8.prototype={
$0(){var x=this.a.a
return B.qM(x.c,x.d)},
$S:1736}
B.cX9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cXa.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cXb.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cXc.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cXd.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cXf.prototype={
$0(){var x=this.a
x.n(new B.cXe(x))},
$S:0}
B.cXe.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fS(0)
else x.p5(0)},
$S:0}
B.cX4.prototype={
$1(d){return this.a.OK(this.b)},
$S:14}
B.cX5.prototype={
$1(d){return this.a.OJ(this.b)},
$S:14}
B.cWX.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cWY.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cWZ.prototype={
$1(d){return D.fao},
$S:z+25}
B.cX3.prototype={
$2(d,e){if(d)B.ST()},
$S:118}
B.cX_.prototype={
$0(){return this.a.a70(this.b)},
$S:0}
B.cX0.prototype={
$0(){return this.a.a6Y(this.b)},
$S:0}
B.cX1.prototype={
$0(){return this.a.ab2(this.b)},
$S:0}
B.cX2.prototype={
$0(){return this.a.a_6(this.b)},
$S:0}
B.cWn.prototype={
$0(){A.a7(this.a,!1).K(null)
return null},
$S:0}
B.cX7.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.p9(),$async$$0)
case 2:u.n(new B.cX6(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cX6.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c2B.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.lZ(D.m2)},
$S:z+1}
B.c2C.prototype={
$1(d){var x=d.b,w=A.ad("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aI(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c2A.prototype={
$2(d,e){return this.bdC(d,e)},
bdC(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.SU(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1737}
B.f8A.prototype={
$1(d){if(d===D.a2c&&(this.a.a.a&30)===0)this.a.fB(0)},
$S:z+27}
B.f8B.prototype={
$0(){},
$S:11}
B.f94.prototype={
bfa(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.eZ0(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fQ2(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bfa(d,e)},
$S:522}
B.f93.prototype={
$1(d){var x=this
d.b=new B.f92(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.f92.prototype={
$1(d){return this.bf9(d)},
bf9(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aWf(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.G(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.Q.aE(0,n,null)
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
return A.b(B.eZ0(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a4(j)
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a4J(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.awd.prototype,"gc5g","Ol",0)
x(v,"gc65","HF",0)
x(v,"gc5C","wW",0)
x(v=B.aA3.prototype,"gbZu","ab0",0)
x(v,"gbZv","Xl",0)
x(v,"gckc","aeB",0)
x(v=B.aA6.prototype,"gbZw","Xm",0)
x(v,"gckd","a_r",0)
x(B.aA4.prototype,"gbZx","ab1",0)
x(B.awc.prototype,"gbZC","bZD",4)
x(v=B.aA5.prototype,"gc5D","Yq",0)
x(v,"gciP","ciQ",4)
x(v,"gaX5","auB",0)
x(v,"gclE","af_",0)
x(v,"gbHr","Vo",0)
x(v,"gbZB","CY",0)
x(B.awe.prototype,"gb_O","a_q",0)
x(B.awb.prototype,"gbZE","Xn",0)
x(v=B.awh.prototype,"gaVS","c3Z",4)
x(v,"gbZy","ab4",0)
x(v=B.awf.prototype,"gchR","a_b",0)
x(v,"gaUa","ab3",0)
w(B.awa.prototype,"gatj","atk",8)
x(v=B.awg.prototype,"gc8d","acO",0)
x(v,"gbH_","a7L",0)
w(v,"gatj","atk",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aB,[B.cdn,B.a70,B.aqK,B.ayH,B.aBO,B.j8,B.a9s,B.br5,B.DA,B.V0])
w(B.cdo,B.cdn)
w(B.b0k,B.a70)
x(A.i2,[B.cdj,B.cdk,B.cdl,B.cdi,B.cdm,B.cdp,B.cdq,B.cdr,B.cds,B.cdt,B.cdu,B.cdv,B.cdw,B.f3w,B.fog,B.foi,B.foh,B.fow,B.fox,B.f4P,B.cWD,B.cWF,B.cWE,B.cWI,B.f6O,B.f7h,B.c25,B.c2c,B.c2d,B.c28,B.c26,B.c29,B.c2a,B.fou,B.fov,B.dHp,B.dHy,B.dHw,B.dHx,B.f0J,B.f50,B.f51,B.c2u,B.f53,B.f8X,B.f3I,B.f3J,B.c2z,B.fsW,B.cWC,B.cWA,B.dHl,B.dGh,B.dGn,B.dGG,B.dGm,B.dGN,B.dH6,B.dH7,B.dH8,B.dGE,B.dGW,B.dGV,B.dGX,B.dGY,B.dGZ,B.dH0,B.dH1,B.dGU,B.dGp,B.dGq,B.dGl,B.dGH,B.dGy,B.dGw,B.dGM,B.dH5,B.dHi,B.dHj,B.cWy,B.cWz,B.cWW,B.cWV,B.cWQ,B.cWO,B.cWM,B.cWP,B.cWR,B.cWN,B.cWv,B.cWw,B.cWx,B.cWr,B.cX4,B.cX5,B.cWZ,B.c2B,B.c2C,B.f8A,B.f93,B.f92])
w(B.b0l,B.aqK)
x(A.jk,[B.fof,B.cWG,B.cWH,B.f6M,B.f6N,B.f7g,B.dGe,B.dHn,B.dHo,B.dHm,B.dHq,B.dHr,B.dHs,B.dHt,B.dHu,B.dHv,B.dGf,B.dGg,B.f52,B.cWB,B.dGJ,B.dGK,B.dGi,B.dGj,B.dGo,B.dH9,B.dHa,B.dGD,B.dGO,B.dGs,B.dGF,B.dH_,B.dGP,B.dGQ,B.dGR,B.dGS,B.dGT,B.dGr,B.dGk,B.dGI,B.dGB,B.dGu,B.dGz,B.dGA,B.dGC,B.dGt,B.dGL,B.dH2,B.dH3,B.dH4,B.dHg,B.dHh,B.dHc,B.dHd,B.dHb,B.dHe,B.dHf,B.cWS,B.cWT,B.cWU,B.cWJ,B.cWL,B.cWK,B.cWu,B.cWt,B.cWs,B.cWo,B.cWp,B.cWq,B.cX8,B.cX9,B.cXa,B.cXb,B.cXc,B.cXd,B.cXf,B.cXe,B.cWX,B.cWY,B.cX_,B.cX0,B.cX1,B.cX2,B.cWn,B.cX7,B.cX6,B.f8B])
x(A.mb,[B.a9L,B.Lx,B.a71,B.Mz,B.V_,B.My,B.DB])
x(A.ae,[B.WT,B.SI,B.SM,B.SJ,B.WS,B.SK,B.WU,B.WR,B.NH,B.WW,B.WQ,B.WX])
x(A.ag,[B.awd,B.aA3,B.aA6,B.aA4,B.awc,B.aA5,B.awe,B.awb,B.awh,B.awf,B.awa,B.awg])
x(A.ar,[B.aac,B.aw9,B.b9y,B.a9M,B.a9K,B.b9z])
x(A.kx,[B.c2b,B.c27,B.c2f,B.c2g,B.fp0,B.dGx,B.dGv,B.dHk,B.cX3,B.c2A,B.f94])
x(A.iG,[B.beR,B.bqL])})()
A.kd(b.typeUniverse,JSON.parse('{"b0k":{"a70":[]},"b0l":{"aqK":[]},"WT":{"ae":[],"r":[]},"awd":{"ag":["WT"]},"aac":{"ar":[],"r":[]},"SI":{"ae":[],"r":[]},"SM":{"ae":[],"r":[]},"aA3":{"ag":["SI"]},"aA6":{"ag":["SM"]},"beR":{"iG":[]},"SJ":{"ae":[],"r":[]},"aA4":{"ag":["SJ"]},"WS":{"ae":[],"r":[]},"SK":{"ae":[],"r":[]},"a9M":{"ar":[],"r":[]},"WU":{"ae":[],"r":[]},"WR":{"ae":[],"r":[]},"NH":{"ae":[],"r":[]},"WW":{"ae":[],"r":[]},"a9K":{"ar":[],"r":[]},"WQ":{"ae":[],"r":[]},"WX":{"ae":[],"r":[]},"awc":{"ag":["WS"]},"bqL":{"iG":[]},"aA5":{"ag":["SK"]},"aw9":{"ar":[],"r":[]},"b9y":{"ar":[],"r":[]},"awe":{"ag":["WU"]},"awb":{"ag":["WR"]},"awh":{"ag":["NH"]},"awf":{"ag":["WW"]},"awa":{"ag":["WQ"]},"awg":{"ag":["WX"]},"b9z":{"ar":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tu"),k:x("K3()"),m:x("bt<n,n>"),F:x("qp"),g:x("au<j8?>"),x:x("au<~>"),V:x("N<aa>"),O:x("N<x>"),W:x("N<be>"),Y:x("N<a0<n,R>>"),t:x("N<a0<n,@>>"),r:x("N<j8>"),w:x("N<+file,name(lf,n)>"),u:x("N<cJ>"),s:x("N<n>"),E:x("N<iG>"),a:x("N<dz>"),p:x("N<r>"),Z:x("N<I>"),G:x("be"),A:x("cn<ag<ae>>"),n:x("ak<j8>"),j:x("ak<@>"),I:x("ak<I>"),M:x("bq<n,n>"),P:x("a0<n,@>"),f:x("a0<@,@>"),o:x("iA"),e:x("hTb"),af:x("CQ"),U:x("j8"),b:x("co"),C:x("aB"),aK:x("vg"),ab:x("DA"),br:x("aqK"),v:x("V0"),N:x("n"),X:x("bm<Q>"),Q:x("lq"),D:x("dz"),aw:x("cv<n>"),cd:x("a5<a0<n,@>>"),c7:x("r"),ch:x("bL<ak<j8>>"),aW:x("bL<dz?>"),aY:x("bL<~>"),cx:x("a9L"),b1:x("bd<ak<j8>>"),cf:x("bd<dz?>"),d4:x("bd<~>"),c4:x("ayH"),bG:x("aBO"),q:x("mz"),B:x("oQ<DA>"),c6:x("oQ<a71>"),y:x("R"),i:x("Q"),z:x("@"),S:x("I"),aQ:x("be?"),_:x("ak<j8>?"),aL:x("ak<@>?"),h:x("a0<n,@>?"),l:x("j8?"),R:x("aB?"),c:x("V0?"),d:x("+answerQr,transfer(n,au<ak<j8>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,I)?"),L:x("+fileCount,mode,qrPayload(I,Lx,n)?"),aX:x("+fileCount,qrPayload,token(I,n,n)?"),T:x("n?"),K:x("dz?"),cm:x("a9s?"),bk:x("ayH?"),ag:x("aBO?"),dd:x("Q?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aPS=new A.ax(C.aB,2,C.r,-1)
D.bFH=new A.a8(C.a1,C.a7,C.x,C.Zi,null,null)
D.aRu=new A.o(null,null,null,C.mg,null,D.bFH,C.n)
D.aSQ=new A.o(null,null,null,C.mg,null,E.ES,C.n)
D.a7V=new A.x(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.a8T=new A.x(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.a9A=new A.x(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aaY=new A.x(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eM2=new A.w("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.eZ8=new A.w("Share the access code and member password with your team. They only sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cMz=x([D.eM2,C.ar,D.eZ8],y.p)
D.baE=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cMz,null)
D.f23=new A.w("Create your organization",null,C.h9,null,null,null,null,null,null,null,null,null)
D.eQ_=new A.w("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.d_2=x([D.f23,C.ar,D.eQ_],y.p)
D.baM=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_2,null)
D.eZG=new A.w("Team Member sign-in",null,C.h9,null,null,null,null,null,null,null,null,null)
D.eTt=new A.w("Enter the access code and password from your organization.",null,G.Hb,null,null,null,null,null,null,null,null,null)
D.cYd=x([D.eZG,C.ar,D.eTt],y.p)
D.baX=new A.fj(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.cYd,null)
D.bfO=new A.M(16,10,16,28)
D.bfW=new A.M(16,14,16,4)
D.bh9=new A.M(20,0,20,16)
D.bhF=new A.M(20,8,20,16)
D.adw=new A.M(24,22,24,20)
D.Xm=new A.a_(63394,"MaterialIcons",!1)
D.agl=new A.a_(63515,"MaterialIcons",!1)
D.brq=new A.a_(983813,"MaterialIcons",!1)
D.boH=new A.a_(62867,"MaterialIcons",!1)
D.bso=new A.ac(D.boH,44,C.c,null,null,null)
D.btt=new A.ac(C.rN,null,C.aj,null,null,null)
D.buR=new A.ac(C.iH,18,null,null,null,null)
D.bwv=new A.ac(D.Xm,26,C.c,null,null,null)
D.bx0=new A.ac(C.Ew,null,null,null,null,null)
D.bxz=new A.ac(C.xa,null,null,null,null,null)
D.byF=new A.ac(W.Lb,null,null,null,null,null)
D.bz_=new A.ac(C.h4,16,null,null,null,null)
D.bCh=new A.ac(C.qk,16,null,null,null,null)
D.bsG=new A.ac(C.mB,null,null,null,null,null)
D.bD8=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bsG,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.by5=new A.ac(C.E5,null,null,null,null,null)
D.bDc=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.by5,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bt0=new A.ac(N.EG,null,null,null,null,null)
D.bDm=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bt0,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.coQ=x([C.eY,C.aW,C.aB],y.O)
D.bHq=new A.a8(C.ax,C.aC,C.x,D.coQ,null,null)
D.com=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Nj=x([C.eY,C.aB],y.O)
D.Nw=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.m2=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cTB=x([C.q2,C.aB],y.O)
D.dHL={iceServers:0}
D.aAy={urls:0}
D.d2C=new A.bt(D.aAy,["stun:stun.l.google.com:19302"],y.m)
D.d2B=new A.bt(D.aAy,["stun:stun1.l.google.com:19302"],y.m)
D.cDR=x([D.d2C,D.d2B],A.aA("N<a0<n,n>>"))
D.d1X=new A.bt(D.dHL,[D.cDR],A.aA("bt<n,@>"))
D.FT=new B.Lx(0,"lanDirect")
D.OJ=new B.Lx(1,"cloudStash")
D.dda=new B.Lx(2,"inlineInstant")
D.OK=new B.Lx(3,"webrtcLink")
D.xQ=new B.Lx(4,"videoCloud")
D.eZ7=new A.w("Receive file",null,C.mT,null,null,null,null,null,null,null,null,null)
D.ceC=x([E.ai_,C.aa,D.eZ7],y.p)
D.eiS=new A.cC(C.aY,C.b5,C.j,C.m,null,C.p,null,0,D.ceC,null)
D.dM4=new A.C(C.ca,D.eiS,null)
D.eDB=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.ZV,null,null,null)
D.eMy=new A.w("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eDB,null,C.L,null,null,null,null,null,null,null)
D.dLq=new A.C(C.zK,D.eMy,null)
D.aWQ=new A.cw(C.B,null,null,D.dLq,null)
D.dQx=new A.cE(0,null,0,28,null,null,D.aWQ,null)
D.dQP=new B.a71(0,"RTCDataChannelConnecting")
D.aFA=new B.a71(1,"RTCDataChannelOpen")
D.aFB=new B.a71(3,"RTCDataChannelClosed")
D.dQQ=new B.DB(0,"RTCIceConnectionStateNew")
D.dQR=new B.DB(1,"RTCIceConnectionStateChecking")
D.dQS=new B.DB(2,"RTCIceConnectionStateCompleted")
D.dQT=new B.DB(3,"RTCIceConnectionStateConnected")
D.dQU=new B.DB(4,"RTCIceConnectionStateCount")
D.dQV=new B.DB(5,"RTCIceConnectionStateFailed")
D.dQW=new B.DB(6,"RTCIceConnectionStateDisconnected")
D.aFC=new B.DB(7,"RTCIceConnectionStateClosed")
D.aFD=new B.V_(0,"RTCIceGatheringStateNew")
D.dQX=new B.V_(1,"RTCIceGatheringStateGathering")
D.a2c=new B.V_(2,"RTCIceGatheringStateComplete")
D.a2d=new B.My(0,"RTCPeerConnectionStateClosed")
D.aFE=new B.My(1,"RTCPeerConnectionStateFailed")
D.aFF=new B.My(2,"RTCPeerConnectionStateDisconnected")
D.aFG=new B.My(3,"RTCPeerConnectionStateNew")
D.aFH=new B.My(4,"RTCPeerConnectionStateConnecting")
D.aFI=new B.My(5,"RTCPeerConnectionStateConnected")
D.dQY=new B.Mz(0,"RTCSignalingStateStable")
D.dQZ=new B.Mz(1,"RTCSignalingStateHaveLocalOffer")
D.dR_=new B.Mz(2,"RTCSignalingStateHaveRemoteOffer")
D.dR0=new B.Mz(3,"RTCSignalingStateHaveLocalPrAnswer")
D.dR1=new B.Mz(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aFJ=new B.Mz(5,"RTCSignalingStateClosed")
D.emq=new A.ap(160,48)
D.aXY=new A.f9(2,null,null,null,null,C.aB,null,null,null,null)
D.enR=new A.a3(16,16,D.aXY,null)
D.ePr=new A.w("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.epg=new A.aY(D.ePr,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eWe=new A.w("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.epj=new A.aY(D.eWe,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f33=new A.w("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.epq=new A.aY(D.f33,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eP4=new A.w("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.epQ=new A.aY(D.eP4,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eZP=new A.w("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aI3=new A.aY(D.eZP,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f04=new A.w("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eqi=new A.aY(D.f04,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4l=new A.w("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eqx=new A.aY(D.f4l,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f2v=new A.w("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eqC=new A.aY(D.f2v,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f3D=new A.w("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ern=new A.aY(D.f3D,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eNO=new A.w("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.erU=new A.aY(D.eNO,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eXV=new A.w("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ese=new A.aY(D.eXV,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eRt=new A.w("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.esK=new A.aY(D.eRt,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.f4r=new A.w("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.esO=new A.aY(D.f4r,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eO3=new A.w("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.esU=new A.aY(D.eO3,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eMS=new A.w("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.et8=new A.aY(D.eMS,null,null,null,null,null,null,null,null,null,null,null,null,C.S,!1,null,null,null,C.q,null)
D.eK0=new A.w("NGMY DOC SHARE",null,C.aJj,null,null,null,null,null,null,null,null,null)
D.eLc=new A.w("Show this to sender",null,C.kd,null,null,null,null,null,null,null,null,null)
D.eM8=new A.w("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.eQm=new A.w("Organization settings",null,C.cq,null,null,null,null,null,null,null,null,null)
D.eQG=new A.w("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eRD=new A.w("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.eS2=new A.w("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eUz=new A.w("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.eX9=new A.w("Send to their Doc Share",null,C.mS,null,null,null,null,null,null,null,null,null)
D.eXs=new A.w("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.eXK=new A.w("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.eYd=new A.w("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.eYh=new A.w("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.eYE=new A.w("Share via AirDrop / Bluetooth / Nearby",null,C.eK,null,null,null,null,null,null,null,null,null)
D.f0v=new A.w("Share files & videos\nwith a scan.",null,C.aJk,null,null,null,null,null,null,null,null,null)
D.f0N=new A.w("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fao=new B.WQ(null)
D.a55=new B.a9L(0,"docShare")
D.a56=new B.a9L(1,"gate")
D.Rt=new B.a9L(2,"gateNoIndividual")})();(function staticFields(){$.aKl=null
$.eWS=function(){var x=y.N
return A.S(x,x)}()
$.EH=A.S(y.N,y.D)
$.adH=A.S(y.N,A.aA("lf"))
$.OY=A.S(y.N,y.D)
$.eXo=A.S(y.N,A.aA("a9s"))
$.c2t=A.S(y.S,A.aA("br5"))
$.fQ1=1
$.hBr=null
$.hBq=null
$.hto=null
$.fFq=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"hTG","h5P",()=>new B.cdo())
x($,"hRB","fIT",()=>C.a.q(A.bp(A.bp(A.bp(A.Fd(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["4pbxzxJi28Fx3pFW9DYPa8JVDds="]=a.current})($__dart_deferred_initializers__);