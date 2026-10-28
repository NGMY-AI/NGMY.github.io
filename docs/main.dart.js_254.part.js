((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cgM:function cgM(){},
hAn(d){var x=null,w=new B.b2g(d,D.e87,new A.pb(x,x,y.c6),new A.pb(x,x,y.B))
w.bvr(d)
return w},
b2g:function b2g(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cgH:function cgH(d){this.a=d},
cgI:function cgI(d){this.a=d},
cgJ:function cgJ(d){this.a=d},
cgG:function cgG(d){this.a=d},
cgK:function cgK(d){this.a=d},
hAo(d,e){var x=y.N
x=new B.b2h(d,e,A.V(x,y.e),A.V(x,y.z))
x.bvs(d,e)
return x},
b2h:function b2h(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cgN:function cgN(d){this.a=d},
cgO:function cgO(d){this.a=d},
cgP:function cgP(d){this.a=d},
cgQ:function cgQ(d){this.a=d},
cgR:function cgR(d){this.a=d},
cgS:function cgS(d){this.a=d},
cgT:function cgT(d){this.a=d},
cgU:function cgU(d){this.a=d},
fRP(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.ye.Li(x,"ngmy_doc_share_v1",new B.feb(),1)},
hGT(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cr(d))
if(y.J.b(d))return new Uint8Array(A.cr(J.eW(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cr(A.BI(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cr(d))
if(typeof d=="string")try{x=C.cB.aJ(d)
return x}catch(w){return v}return v},
Qh(d,e){return B.hVZ(d,e)},
hVZ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aM5
x=7
return A.b(o==null?$.aM5=B.fRP():o,$async$Qh)
case 7:s=g
r=new Uint8Array(A.cr(e))
q=J.mz(s,"blobs","readwrite")
C.iA.m8(J.mx(q,"blobs"),r,d)
x=8
return A.b(J.pk(q),$async$Qh)
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
return A.i($async$Qh,w)},
Qg(d){return B.hVY(d)},
hVY(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aM5
x=7
return A.b(o==null?$.aM5=B.fRP():o,$async$Qg)
case 7:s=f
r=J.mz(s,"blobs","readonly")
x=8
return A.b(C.iA.z9(J.mx(r,"blobs"),d),$async$Qg)
case 8:q=f
x=9
return A.b(J.pk(r),$async$Qg)
case 9:o=B.hGT(q)
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
return A.i($async$Qg,w)},
afH(d){return B.hVX(d)},
hVX(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afH=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aM5
x=7
return A.b(p==null?$.aM5=B.fRP():p,$async$afH)
case 7:s=f
r=J.mz(s,"blobs","readwrite")
C.iA.Ff(J.mx(r,"blobs"),d)
x=8
return A.b(J.pk(r),$async$afH)
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
return A.i($async$afH,w)},
feb:function feb(){},
hJd(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmA(w,v))}return u},
hgr(d,e){var x,w={},v=A.aUo("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fAi(w,v,e)
C.vv.y_(v,"change",new B.fAk(w,v,!1))
C.vv.y_(v,"cancel",new B.fAj(w))
$.eQ.mg()
v.click()
A.bN(C.af5,new B.fAh(w),y.H)},
fAi:function fAi(d,e,f){this.a=d
this.b=e
this.c=f},
fAk:function fAk(d,e,f){this.a=d
this.b=e
this.c=f},
fAj:function fAj(d){this.a=d},
fAh:function fAh(d){this.a=d},
Cv(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cv=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdc()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSR()?3:4
break
case 3:x=5
return A.b(B.hbC(e,d,s,!0,!1,f,g,h,!1,i),$async$Cv)
case 5:x=1
break
case 4:x=6
return A.b(B.PW(d,s,f,g,h,i),$async$Cv)
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
return A.b(B.HN(s,d),$async$Cv)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f9D(s,d),$async$Cv)
case 14:x=12
return A.b(r.hbC(q,p,o,n,m,l,k,j,a1,i),$async$Cv)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).ce(A.ej(new B.fAx(s,i,d,f,g,h),!1,null,y.H)),$async$Cv)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).ce(A.ej(new B.fAy(s,i,d,f,g,h),!1,null,y.H)),$async$Cv)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cv,w)},
PW(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$PW=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aY2(e),$async$PW)
case 3:u=k
x=4
return A.b(B.anH(d,e,!1),$async$PW)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HN(e,d),$async$PW)
case 7:if(k){v=D.a7Y
x=1
break}x=8
return A.b(B.TT(e),$async$PW)
case 8:v=t?D.TD:D.a7Z
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aY0(d,e)){v=D.a7Y
x=1
break}x=11
return A.b(B.TT(e),$async$PW)
case 11:v=t?D.TD:D.a7Z
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fN1(d,e)){v=D.a7Y
x=1
break}x=14
return A.b(B.TT(e),$async$PW)
case 14:v=D.TD
x=1
break
case 13:v=t?D.TD:D.a7Z
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PW,w)},
f9D(d,e){var x=0,w=A.j(y.y),v
var $async$f9D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aY0(e,d)){v=!1
x=1
break}x=3
return A.b(B.aY2(d),$async$f9D)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9D,w)},
hbC(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).ce(A.ej(new B.ffO(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h6K(d,e,f,g,h,i,j){return new B.Y7(e,j,d,g,h,i,f,null)},
fhK(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fhK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bW(C.K,null,new B.fhN(A.O(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fhK)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fhK,w)},
fie(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fie=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bW(C.K,null,new B.fig(A.O(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fie)
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
return A.i($async$fie,w)},
fRY(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fsT(d,e){var x=0,w=A.j(y.H),v
var $async$fsT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.TT(e),$async$fsT)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eI()
case 1:return A.h(v,w)}})
return A.i($async$fsT,w)},
fAx:function fAx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fAy:function fAy(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ab2:function ab2(d,e){this.a=d
this.b=e},
ffO:function ffO(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Y7:function Y7(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axJ:function axJ(){this.c=this.a=this.d=null},
d_C:function d_C(d,e){this.a=d
this.b=e},
d_z:function d_z(d){this.a=d},
d_B:function d_B(d){this.a=d},
d_A:function d_A(d){this.a=d},
d_E:function d_E(){},
d_D:function d_D(d){this.a=d},
abu:function abu(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAh:function aAh(d,e){this.a=d
this.b=e},
aDt:function aDt(d,e,f){this.a=d
this.b=e
this.c=f},
fhN:function fhN(d,e,f){this.a=d
this.b=e
this.c=f},
fhL:function fhL(d){this.a=d},
fhM:function fhM(d,e,f){this.a=d
this.b=e
this.c=f},
fig:function fig(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fif:function fif(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5h(d,e,f,g,h){return B.hvi(d,e,f,g,h)},
hvi(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c5h=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c5i(s,e,h,g,f,q),y.g),y.l),$async$c5h)
case 3:r=p.aX(j)
case 4:if(!r.C()){x=5
break}t=r.gU(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5h,w)},
aXY(d,e,f,g,h){return B.hvj(d,e,f,g,h)},
hvj(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aXY=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.at_("GET",d)
o=A.fJz()
if(o==null)o=new A.L2(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.EH),$async$aXY)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BU(),$async$aXY)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B5(q,h,o,e,f,"Received via QR")
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
return A.i($async$aXY,w)},
aXX(d){return B.hvg(d)},
hvg(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aXX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cM(0,C.nF),$async$aXX)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aH(0,A.iw(A.iv(p.e)).c8(0,p.w),null)
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
return A.i($async$aXX,w)},
c5g(d){return B.hvh(d)},
hvh(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c5g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uZ(d,null).cM(0,C.pt),$async$c5g)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iw(A.iv(q.e)).c8(0,q.w)
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
return A.i($async$c5g,w)},
c5i:function c5i(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jg:function jg(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HL(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hvo(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HL(C.a.b0(u,v.length))}return null},
hvp(d){var x=B.HL(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hvk(){var x,w=$.ph(),v=J.e1(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fV(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a5O(d){return B.hvl(d)},
hvl(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5O=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f0(d,null,!1,C.bG),$async$a5O)
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
return A.i($async$a5O,w)},
a5P(d,e){return B.hvm(d,e)},
hvm(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5P=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cF,null),$async$a5P)
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
return A.i($async$a5P,w)},
B4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$B4)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HL(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5Q(r),$async$B4)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5O("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B4)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HL(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B4)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hvk()
x=14
return A.b(B.a5Q(m),$async$B4)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a5().ac()
x=15
return A.b(B.a5P("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 15:k=f
x=16
return A.b(B.a5P("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B4)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B4)
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
return A.i($async$B4,w)},
a5Q(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HL(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5O("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5Q)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Q,w)},
a5R(d,e,f,g){return B.hvq(d,e,f,g)},
hvq(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5R=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HL(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5Q(r),$async$a5R)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c5o())>1048576||g.b8(d,new B.c5p())){v=B.DZ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a61("myCode",d,a0),$async$a5R)
case 4:u=a3
try{t=C.R.aH(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.DZ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aY5(u,g.gM(d),a0),$async$a5R)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.ph().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c5q(),i)
h=A.B(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aXZ(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],i,y.z),q),$async$a5R)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5R,w)},
DZ(d,e,f,g,h){return B.hvn(d,e,f,g,h)},
hvn(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DZ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$DZ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c5k())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.ph().aB(9999)
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
a1=B.HP(a9,q)
a0=new A.JE(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$DZ)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eU().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oK(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9k(a1.a,a4,"media",a1.d,a2).wE(m,n,new A.Dh(!0,q.c)),$async$DZ)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a9(0),$async$DZ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOy(r),$async$DZ)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c5l(),e)
a1=A.B(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aXZ(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a5().ac(),"status","pending"],e,d),a8),$async$DZ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOy(r),$async$DZ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DZ,w)},
aXZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5O(t),$async$aXZ)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c5j(),y.P)
r=A.B(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5P(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXZ,w)},
MD(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MD=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5O("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MD)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aX(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aY_(k,a0),$async$MD)
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
return A.b(B.aY4(h),$async$MD)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.U_(g,a0),$async$MD)
case 10:f=a3
if(f!=null&&J.cx(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a5().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("H.E")
e=A.B(new A.a2(r,new B.c5m(),q),n)
d=A.B(new A.a2(r,new B.c5n(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5P("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$MD)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MD,w)},
aY_(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aY_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aX(h),r=y.f,q=0
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
break}i=B.hZL(k,j)
C.d.v(s,i)
x=5
return A.b(B.Ct(l,m,"Received via My Code",t,e,i),$async$aY_)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOy(s),$async$aY_)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY_,w)},
c5o:function c5o(){},
c5p:function c5p(){},
c5q:function c5q(){},
c5k:function c5k(){},
c5l:function c5l(){},
c5j:function c5j(){},
c5m:function c5m(){},
c5n:function c5n(){},
fAu(d,e){var x=0,w=A.j(y.H)
var $async$fAu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).ce(A.ej(new B.fAv(e),!1,null,y.H)),$async$fAu)
case 2:return A.h(null,w)}})
return A.i($async$fAu,w)},
bBh(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBh=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).ce(A.ej(new B.fAw(g,e,f),!1,null,y.y)),$async$bBh)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBh,w)},
fAv:function fAv(d){this.a=d},
fAw:function fAw(d,e,f){this.a=d
this.b=e
this.c=f},
TQ:function TQ(d,e){this.c=d
this.a=e},
aBE:function aBE(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dLI:function dLI(d,e){this.a=d
this.b=e},
TU:function TU(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBH:function aBH(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dMR:function dMR(d){this.a=d},
dMS:function dMS(d){this.a=d},
dMT:function dMT(d){this.a=d},
dMQ:function dMQ(d,e){this.a=d
this.b=e},
dMU:function dMU(d){this.a=d},
dMV:function dMV(d){this.a=d},
dMW:function dMW(d,e){this.a=d
this.b=e},
dMX:function dMX(d,e){this.a=d
this.b=e},
dMY:function dMY(d,e){this.a=d
this.b=e},
dMZ:function dMZ(d){this.a=d},
dN1:function dN1(){},
dN_:function dN_(d){this.a=d},
dN0:function dN0(d,e){this.a=d
this.b=e},
bgT:function bgT(){},
TR:function TR(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBF:function aBF(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dLJ:function dLJ(d){this.a=d},
dLK:function dLK(d){this.a=d},
fN2(d){var x=d.hL
if(x>=0)return C.o.O(x)
return 10},
hvs(d){var x=d.kx
if(x>=0)return x
return 4.99},
hvr(d){var x=d.lf,w=y.N
w=x.iT(x,new B.c5s(),w,w)
return w},
h1Q(d){var x=d.ky,w=y.N
w=x.iT(x,new B.c5t(),w,w)
return w},
aY2(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aY2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aY2)
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
return A.i($async$aY2,w)},
a5T(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a5T)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a5T)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5T,w)},
TT(d){var x=0,w=A.j(y.H),v,u
var $async$TT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$TT)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$TT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$TT,w)},
fN1(d,e){var x,w,v
if(B.hvs(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hvr(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ca(new A.S(Date.now(),0,!1))},
aY0(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h1Q(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ca(new A.S(Date.now(),0,!1))},
h1R(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h1Q(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ca(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bN(A.dB(f,0,0,0,0,0).a).a5().ac())
d.ky=w},
anI(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anI=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$anI)
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
return A.i($async$anI,w)},
anJ(d){var x=0,w=A.j(y.H),v,u,t
var $async$anJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anI(d),$async$anJ)
case 3:u=f
x=5
return A.b(A.aA(),$async$anJ)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anJ,w)},
anH(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fN2(d)
if(u<=0){v=!1
x=1
break}if(B.fN1(d,e)){v=!1
x=1
break}x=3
return A.b(B.anI(e),$async$anH)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anH,w)},
aY1(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aY1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HN(e,d),$async$aY1)
case 3:if(g){v=-1
x=1
break}u=B.fN2(d)
if(u<=0){v=-1
x=1
break}if(B.fN1(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anI(e),$async$aY1)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY1,w)},
c5v(d,e,f){var x=0,w=A.j(y.y),v
var $async$c5v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HN(e,d),$async$c5v)
case 3:if(h){v=!1
x=1
break}v=B.anH(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5v,w)},
c5u(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c5u=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
x=3
return A.b(B.c5v(d,u,i.gSR()),$async$c5u)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5u,w)},
a5S(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5S=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
if(i.gSR()){v=!0
x=1
break}if(B.aY0(d,u)){v=!0
x=1
break}x=5
return A.b(A.la(u,C.R1),$async$a5S)
case 5:x=k?3:4
break
case 3:B.h1R(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5S)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kN(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.R1,"Doc Share for Organizations"),$async$a5S)
case 7:if(!k){v=!1
x=1
break}B.h1R(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5S)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5S,w)},
c5s:function c5s(){},
c5t:function c5t(){},
fB6(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fB6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fB6)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f6l.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.f6l.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fB6,w)},
i0Y(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f6l.bn($.f6l,new B.fB8(d))},
fB8:function fB8(d){this.a=d},
f7J(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f7J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.n0(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.j5,null,y.H),$async$f7J)
case 3:C.zx.f7(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eQ.mg()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f7J,w)},
aex(d,e,f){var x=0,w=A.j(y.H),v
var $async$aex=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f6T.n(0,d,new B.aaK(A.bl(e,!0,v)))
x=3
return A.b(A.aA(),$async$aex)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.E(["parts",e,"size",f],v,y.C),null)),$async$aex)
case 2:return A.h(null,w)}})
return A.i($async$aex,w)},
aer(d){return B.hL2(d)},
hL2(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aer=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f6T.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$aer)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aH(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.fbo(),y.N)
n=A.B(o,o.$ti.k("ai.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaK(r)
$.f6T.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aer,w)},
PM(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PM=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cr(e))
$.FC.n(0,d,u)
x=3
return A.b(B.Qh(d,u),$async$PM)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PM,w)},
aMq(d){return B.hL0(d)},
hL0(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FC.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qg(d),$async$aMq)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FC.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aMq)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cB.aJ(r)
x=!J.ck(q)?9:10
break
case 9:B.PM(d,q)
x=11
return A.b(J.hK(s,d),$async$aMq)
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
return A.i($async$aMq,w)},
hHe(d){if(d==null)return A.fe(null,y.K)
if(y.J.b(d))return A.fe(new Uint8Array(A.cr(J.eW(d,0,null))),y.K)
if(y.D.b(d))return A.fe(new Uint8Array(A.cr(d)),y.K)
if(y.Q.b(d))return A.fe(new Uint8Array(A.cr(A.BI(d,0,null))),y.K)
if(y.I.b(d))return A.fe(new Uint8Array(A.cr(d)),y.K)
return A.fe(null,y.K)},
a0x(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fg_(r,t),!1,s)
A.fH(r,"error",new B.fg0(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ia(0,C.Lg,new B.fg1())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0x,w)},
aMK(d,e,f){return B.hNh(d,e,f)},
hNh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMK=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0x(i),$async$aMK)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qh(o,p),$async$aMK)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aex(k,j,s),$async$aMK)
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
return A.i($async$aMK,w)},
aMJ(d,e,f){return B.hNg(d,e,f)},
hNg(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMJ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMK(d,e,f),$async$aMJ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0x(f),$async$aMJ)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FC.n(0,s,r)
$.Q2.n(0,s,r)
x=11
return A.b(B.PM(s,r),$async$aMJ)
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
return A.i($async$aMJ,w)},
B5(d,e,f,g,h,i){return B.hvB(d,e,f,g,h,i)},
hvB(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B5=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jg(p,q,o,n,new A.S(Date.now(),0,!1).a5().ac(),a0,f,B.aY8(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PM(s,d),$async$B5)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$B5)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcv().aJ(d)),$async$B5)
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
return A.b(B.A8(e),$async$B5)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FO(e,j),$async$B5)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B5,w)},
TV(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$TV=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.A8(d),$async$TV)
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
k=B.h1T(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a5().ac()
i=new B.jg(m,n,k,l,j,"From folder",null,B.aY8(),null)
$.af_.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0x(o),$async$TV)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FC.n(0,h,g)
$.Q2.n(0,h,g)
B.PM(h,g)
x=9
break
case 10:x=11
return A.b(B.aMJ(d,m,o),$async$TV)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FO(d,t),$async$TV)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TV,w)},
fN6(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fN6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h1T(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HO(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.B5(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fN6,w)},
HO(d,e,f,g,h,i){return B.hvA(d,e,f,g,h,i)},
hvA(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HO=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JE(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HO)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cr(J.QP(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.ky(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qh(k,l),$async$HO)
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
return A.b(j.a9(0),$async$HO)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qh(k,new Uint8Array(A.cr(n))),$async$HO)
case 15:J.cf(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aex(r,q,g),$async$HO)
case 16:f=new B.jg(i,a1,a0,g,new A.S(Date.now(),0,!1).a5().ac(),a2,null,B.aY8(),null)
x=17
return A.b(B.A8(d),$async$HO)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FO(d,e),$async$HO)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HO,w)},
TX(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$TX=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.af_.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0x(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aer(s),$async$TX)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qg(u[o]),$async$TX)
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
v=A.BI(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Q2.h(0,s)
if(i==null)i=$.FC.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.ra(d,e),$async$TX)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Q2.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BI(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TX,w)},
h1T(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
ra(d,e){return B.hvC(d,e)},
hvC(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$ra=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Q2.h(0,f)
if(e==null)e=$.FC.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.af_.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0x(s),$async$ra)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FC.n(0,f,r)
$.Q2.n(0,f,r)
B.PM(f,r)
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
return A.b(B.aer(f),$async$ra)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awx(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qg(g[l]),$async$ra)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.K(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.amE()
if(!C.aG.gam(r)){$.FC.n(0,f,r)
$.Q2.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMq(f),$async$ra)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Q2.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.TX(a0,a1,0,g),$async$ra)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.cr(i))
$.FC.n(0,f,h)
$.Q2.n(0,f,h)
B.PM(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ra,w)},
hvF(d){var x,w,v=$.af_.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hvG(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hvD(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anP(d,e,f,g,h){return B.hvE(d,e,f,g,h)},
hvE(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anP=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.af_.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0x(s),$async$anP)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.ra(g,e),$async$anP)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eU().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i4(d).wE(h,r,new A.Dh(!0,e.c)),$async$anP)
case 12:f.$2(J.ad(r),J.ad(r))
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
return A.i($async$anP,w)},
h1V(d,e,f,g,h){var x,w,v,u,t=$.h1U
$.h1U=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c5G.n(0,t,new B.bth(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awx(u)))
return t},
fN7(d){var x=0,w=A.j(y.H)
var $async$fN7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fN7,w)},
HP(d,e){var $async$HP=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.af_.h(0,h)
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
return A.pT(B.TX(d,e,p,o<q?o:q),$async$HP,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pT(A.Fa(n),$async$HP,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pT(B.aer("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HP,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pT(B.Qg(h[l]),$async$HP,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pT(A.Fa(k),$async$HP,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pT(B.ra(d,e),$async$HP,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pT(A.Fa(A.BI(j,p,o<i?o:i)),$async$HP,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pT(null,0,w)
case 2:return A.pT(t.at(-1),1,w)}})
var x=0,w=A.hau($async$HP,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hcj(w)},
aYa(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c5G.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3t(),$async$aYa)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYa,w)},
TW(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$TW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5G.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3t(),$async$TW)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aex(r.c,u,r.z),$async$TW)
case 4:t=new B.jg(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a5().ac(),r.f,r.r,B.aY8(),null)
u=r.a
x=5
return A.b(B.A8(u),$async$TW)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FO(u,s),$async$TW)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TW,w)},
a5Z(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c5G.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afH(u[s]),$async$a5Z)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a5Z,w)},
c5I(d,e,f){var x=0,w=A.j(y.H)
var $async$c5I=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byj(d,e,f),$async$c5I)
case 2:return A.h(null,w)}})
return A.i($async$c5I,w)},
c5J(d,e,f){var x=0,w=A.j(y.H)
var $async$c5J=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byk(d,e,f),$async$c5J)
case 2:return A.h(null,w)}})
return A.i($async$c5J,w)},
E_(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.A8(d),$async$E_)
case 2:p=g
J.ni(p,new B.c5H(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FC.W(0,v)
$.af_.W(0,e)
x=3
return A.b(B.aer(v),$async$E_)
case 3:u=g
$.f6T.W(0,v)
x=4
return A.b(A.aA(),$async$E_)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$E_)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$E_)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afH(s[q]),$async$E_)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afH(v),$async$E_)
case 13:x=14
return A.b(B.FO(d,p),$async$E_)
case 14:return A.h(null,w)}})
return A.i($async$E_,w)},
aY9(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aY9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ra(d,e),$async$aY9)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f7J(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY9,w)},
A8(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$A8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$A8)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aH(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fg2(),y.U)
r=A.B(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$A8,w)},
FO(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$FO)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fjY(),y.P)
t=A.B(t,t.$ti.k("ai.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FO)
case 3:return A.h(null,w)}})
return A.i($async$FO,w)},
byj(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A8(d),$async$byj)
case 3:u=h
t=J.cE(u)
s=t.bc(u,new B.fes(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aC5(f))
x=4
return A.b(B.FO(d,u),$async$byj)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byj,w)},
byk(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.A8(d),$async$byk)
case 3:u=h
t=J.cE(u)
s=t.bc(u,new B.fet(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cDW(f))
x=4
return A.b(B.FO(d,u),$async$byk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byk,w)},
aaK:function aaK(d){this.a=d},
fbo:function fbo(){},
fg_:function fg_(d,e){this.a=d
this.b=e},
fg0:function fg0(d){this.a=d},
fg1:function fg1(){},
c5H:function c5H(d){this.a=d},
bth:function bth(d,e,f,g,h,i,j,k,l){var _=this
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
fg2:function fg2(){},
fjY:function fjY(){},
fes:function fes(d){this.a=d},
fet:function fet(d){this.a=d},
a6_(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c5M())?3:4
break
case 3:x=5
return A.b(B.aYb(d,e),$async$a6_)
case 5:u=g
if(u!=null){t=u.c
B.MF(d,u.b,e,t)}v=u
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
return A.b(B.aY6(s),$async$a6_)
case 10:case 9:if(g){v=new A.P9(1,D.QF,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.TY(d,e),$async$a6_)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.U2(!0,!0,d,e),$async$a6_)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MF(d,D.yM,e,t)
v=new A.P9(p,D.yM,t)
x=1
break}v=B.c5L(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6_,w)},
TY(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$TY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a61(null,d,e),$async$TY)
case 3:p=g
try{u=C.R.aH(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aY5(p,d.length,e),$async$TY)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c5J(e,C.d.gL(d).a,r.b),$async$TY)
case 7:case 6:q=r.a
x=8
return A.b(B.MF(d,D.QF,e,q),$async$TY)
case 8:v=new A.P9(d.length,D.QF,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TY,w)},
TZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$TZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.ml(D.mm)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a60(d,e),$async$TZ)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5E(s,d,e,t),$async$TZ)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aY6(t),$async$TZ)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.ra(e,d),$async$TZ)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.TY(A.a([d],y.r),e),$async$TZ)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$TZ,w)},
U0(){var x=0,w=A.j(y.H)
var $async$U0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fN0(),$async$U0)
case 2:x=3
return A.b(B.aOQ(),$async$U0)
case 3:return A.h(null,w)}})
return A.i($async$U0,w)},
a60(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a60=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aY8()
x=3
return A.b(B.c5I(e,d.a,u),$async$a60)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a60,w)},
MF(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$MF=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QF&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a60(p,f),$async$MF)
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
return A.b(B.c5D(o,p,u,f),$async$MF)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5E(o,p,f,t),$async$MF)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5C(o,u,p,f),$async$MF)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MF,w)},
aYb(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5K(e,d),$async$aYb)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.U2(!1,!0,d,e),$async$aYb)
case 4:u=g
if(u!=null){t=u.b
v=new A.P9(u.a,D.yM,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYb,w)},
c5K(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c5K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.TX(d,s,0,1),$async$c5K)
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
return A.i($async$c5K,w)},
c5L(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c5L=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a61(null,d,e),$async$c5L)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h1S(u)
if(t.length>800){v=null
x=1
break}v=new A.P9(d.length,D.drJ,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5L,w)},
anQ(d,e,f){return B.hvJ(d,e,f)},
hvJ(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anQ=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.my(g,1)
x=B.fN5(g)?3:4
break
case 3:x=5
return A.b(B.c5F(g),$async$anQ)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.my(g,13))
try{k=B.E0(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.my(g,13))
u=9
x=12
return A.b(B.aY4(q),$async$anQ)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U_(p,a0)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fN4(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U_(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HQ(C.a.i(J.my(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HQ(C.a.i(J.my(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HQ(h,d,a0)
x=1
break}if(J.eY(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.U_(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anQ,w)},
HQ(d,e,f){return B.hvH(d,e,f)},
hvH(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HQ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aXX(r),$async$HQ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aXX(A.cv(s,0,null)),$async$HQ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c5h(o,r,a1,n,a2),$async$HQ)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c5g(q),$async$HQ)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.U_(l,a2),$async$HQ)
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
return A.i($async$HQ,w)},
a61(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a61=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aX(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.ra(f,r),$async$a61)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcv().aJ(q)],t,s))
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
return A.i($async$a61,w)},
U_(d,e){return B.hvI(d,e)},
hvI(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$U_=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
o=J.y(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aX(r)
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
break}i=C.cB.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.B5(i,a3,d,k,l,o),$async$U_)
case 9:h=a5
if(h!=null)J.cf(n,h)
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
return A.i($async$U_,w)},
ME:function ME(d,e){this.a=d
this.b=e},
c5M:function c5M(){},
a06(d){var x=A.O(d).ax.a===C.H,w=x?D.acP:D.aaS,v=x?D.aeh:C.c,u=x?C.aP:C.M,t=x?C.bI:C.ak,s=x?D.ac1:C.aL
return new A.aEG([w,s,v,u,t,x?C.f6:C.bT])},
hh8(d,e){var x=e?C.w.j(0.72):C.aX
return A.c9(null,x,!0,null,new B.fFa(e),d,null,!0,!0,y.N)},
c5r(d,e,f,g,h,i,j,k,l){return new B.TS(e,l,d,f,k,j,g,h,i,null)},
Y9(d,e,f,g,h,i,j){return new B.bbA(g,h,j,e,i,d,f,null)},
fFa:function fFa(d){this.a=d},
Y6:function Y6(d,e){this.c=d
this.a=e},
axI:function axI(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_y:function d_y(d){this.a=d},
d_w:function d_w(d){this.a=d},
d_x:function d_x(d){this.a=d},
bsW:function bsW(){},
TS:function TS(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBG:function aBG(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dMP:function dMP(d){this.a=d},
dMc:function dMc(d,e){this.a=d
this.b=e},
dMd:function dMd(d,e){this.a=d
this.b=e},
dLM:function dLM(d,e,f){this.a=d
this.b=e
this.c=f},
dLL:function dLL(d){this.a=d},
dLN:function dLN(d,e){this.a=d
this.b=e},
dLS:function dLS(d,e,f){this.a=d
this.b=e
this.c=f},
dLR:function dLR(d){this.a=d},
dMD:function dMD(d,e){this.a=d
this.b=e},
dME:function dME(d){this.a=d},
dM9:function dM9(d,e,f){this.a=d
this.b=e
this.c=f},
dM6:function dM6(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dLQ:function dLQ(d){this.a=d},
dMh:function dMh(d){this.a=d},
dMg:function dMg(){},
dLW:function dLW(d){this.a=d},
dMA:function dMA(d,e){this.a=d
this.b=e},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMC:function dMC(d,e){this.a=d
this.b=e},
dM7:function dM7(d,e){this.a=d
this.b=e},
dM8:function dM8(d,e){this.a=d
this.b=e},
dMt:function dMt(d,e){this.a=d
this.b=e},
dMp:function dMp(d){this.a=d},
dMo:function dMo(d){this.a=d},
dMq:function dMq(){},
dMr:function dMr(){},
dMs:function dMs(d,e){this.a=d
this.b=e},
dMu:function dMu(){},
dMv:function dMv(d){this.a=d},
dMn:function dMn(d,e){this.a=d
this.b=e},
dMi:function dMi(d){this.a=d},
dMj:function dMj(d){this.a=d},
dMk:function dMk(d){this.a=d},
dMl:function dMl(d){this.a=d},
dMm:function dMm(d){this.a=d},
dLT:function dLT(){},
dLU:function dLU(d){this.a=d},
dLV:function dLV(d,e){this.a=d
this.b=e},
dLP:function dLP(d,e){this.a=d
this.b=e},
dLO:function dLO(d,e,f){this.a=d
this.b=e
this.c=f},
dMa:function dMa(d){this.a=d},
dMb:function dMb(d,e,f){this.a=d
this.b=e
this.c=f},
dM4:function dM4(d,e){this.a=d
this.b=e},
dM0:function dM0(d){this.a=d},
dLY:function dLY(d,e,f){this.a=d
this.b=e
this.c=f},
dM1:function dM1(d){this.a=d},
dM2:function dM2(d){this.a=d},
dM3:function dM3(){},
dM5:function dM5(d,e){this.a=d
this.b=e},
dLZ:function dLZ(d){this.a=d},
dLX:function dLX(d,e,f){this.a=d
this.b=e
this.c=f},
dM_:function dM_(){},
dMf:function dMf(d){this.a=d},
dMe:function dMe(d,e){this.a=d
this.b=e},
dMz:function dMz(d,e){this.a=d
this.b=e},
dMw:function dMw(d){this.a=d},
dMx:function dMx(d,e){this.a=d
this.b=e},
dMy:function dMy(d){this.a=d},
dMM:function dMM(d){this.a=d},
dMK:function dMK(d){this.a=d},
dML:function dML(d){this.a=d},
dMN:function dMN(){},
dMO:function dMO(d,e){this.a=d
this.b=e},
dMG:function dMG(d,e){this.a=d
this.b=e},
dMH:function dMH(d,e,f){this.a=d
this.b=e
this.c=f},
dMF:function dMF(d,e,f){this.a=d
this.b=e
this.c=f},
dMI:function dMI(d,e){this.a=d
this.b=e},
dMJ:function dMJ(d,e){this.a=d
this.b=e},
axF:function axF(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbz:function bbz(d,e,f){this.c=d
this.d=e
this.a=f},
d_u:function d_u(){},
d_v:function d_v(){},
ab3:function ab3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d_S:function d_S(){},
d_R:function d_R(d){this.a=d},
Y8:function Y8(d,e,f){this.c=d
this.d=e
this.a=f},
axK:function axK(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d_O:function d_O(d){this.a=d},
d_P:function d_P(d,e,f){this.a=d
this.b=e
this.c=f},
d_Q:function d_Q(d,e){this.a=d
this.b=e},
d_M:function d_M(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_L:function d_L(d){this.a=d},
d_H:function d_H(d){this.a=d},
d_N:function d_N(d){this.a=d},
d_J:function d_J(d){this.a=d},
d_G:function d_G(d){this.a=d},
Y5:function Y5(d,e,f){this.c=d
this.d=e
this.a=f},
axH:function axH(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d_r:function d_r(d){this.a=d},
d_q:function d_q(d,e){this.a=d
this.b=e},
d_s:function d_s(d){this.a=d},
d_p:function d_p(d,e){this.a=d
this.b=e},
d_t:function d_t(d){this.a=d},
d_o:function d_o(d,e){this.a=d
this.b=e},
d_k:function d_k(d){this.a=d},
d_l:function d_l(d){this.a=d},
d_m:function d_m(d,e){this.a=d
this.b=e},
d_n:function d_n(d){this.a=d},
ON:function ON(d,e,f){this.c=d
this.d=e
this.a=f},
axN:function axN(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d04:function d04(d){this.a=d},
d05:function d05(d){this.a=d},
d06:function d06(d){this.a=d},
d07:function d07(d){this.a=d},
d08:function d08(d,e){this.a=d
this.b=e},
d09:function d09(d){this.a=d},
d0b:function d0b(d){this.a=d},
d0a:function d0a(d){this.a=d},
Ya:function Ya(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axL:function axL(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d00:function d00(d,e){this.a=d
this.b=e},
d01:function d01(d,e){this.a=d
this.b=e},
d_T:function d_T(d,e,f){this.a=d
this.b=e
this.c=f},
d_U:function d_U(d){this.a=d},
d_V:function d_V(){},
d0_:function d0_(){},
d_W:function d_W(d,e){this.a=d
this.b=e},
d_X:function d_X(d,e){this.a=d
this.b=e},
d_Y:function d_Y(d,e){this.a=d
this.b=e},
d_Z:function d_Z(d,e){this.a=d
this.b=e},
ab1:function ab1(d,e){this.c=d
this.a=e},
d_j:function d_j(d){this.a=d},
Y4:function Y4(d){this.a=d},
axG:function axG(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yb:function Yb(d,e){this.c=d
this.a=e},
axM:function axM(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d03:function d03(d){this.a=d},
d02:function d02(d){this.a=d},
bbA:function bbA(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hvK(){var x,w=$.ph(),v=J.e1(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fV(v)},
MG(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$MG)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MG)
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
return A.i($async$MG,w)},
a62(d){return B.hvL(d)},
hvL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a62=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a62)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$a62)
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
return A.i($async$a62,w)},
U1(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$U1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MG(),$async$U1)
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
return A.b(B.a62(s),$async$U1)
case 4:case 1:return A.h(v,w)}})
return A.i($async$U1,w)},
U2(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$U2=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c1(),$async$U2)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c5O(),t),t.k("H.E"))}if(u.length===0){v=null
x=1
break}s=B.hvK()
t=A.T(u).k("K<1,a4<n,aC>>")
r=A.B(new A.K(u,new B.c5P(s),t),t.k("ai.E"))
x=6
return A.b(B.MG(),$async$U2)
case 6:q=i
J.aG(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=7
return A.b(B.a62(q),$async$U2)
case 7:x=8
return A.b(B.a63(r,u,g,s),$async$U2)
case 8:v=new A.bn1(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U2,w)},
anR(d){var x=0,w=A.j(y.y),v,u,t
var $async$anR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MG(),$async$anR)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anR,w)},
c5Q(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c5Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MG(),$async$c5Q)
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
return A.i($async$c5Q,w)},
a63(d,e,f,g){return B.hvM(d,e,f,g)},
hvM(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a63=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.anP("media",r,new B.c5N(s,e,g),f,q),$async$a63)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.U1(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a63)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.U1(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$a63)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.U1(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a63)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a63,w)},
E0(d,e,f){return B.hvN(d,e,f)},
hvN(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E0=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$E0)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.anR(b3),$async$E0)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kd,null,g),$async$E0)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.anR(b3),$async$E0)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MG(),$async$E0)
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
if(J.ad(m)===0){x=11
break}u=14
a8=$.eU().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oK(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9k(a8.a,b0,"media",a8.d,a9).Ce(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aXY(k,n,o,s,b7),$async$E0)
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
case 12:if(J.ad(p)===0){v=null
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
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eU().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oK(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9k(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E0)
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
return A.b(B.a62(e),$async$E0)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E0,w)},
c5O:function c5O(){},
c5P:function c5P(d){this.a=d},
c5N:function c5N(d,e,f){this.a=d
this.b=e
this.c=f},
aOQ(){var x=0,w=A.j(y.H),v,u
var $async$aOQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hGF=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aOQ)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aOQ)
case 3:u=$.fS9
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aOQ)
case 4:$.fS9=$.hP4=$.hP5=null
return A.h(null,w)}})
return A.i($async$aOQ,w)},
fjA(d){var x=0,w=A.j(y.H),v,u
var $async$fjA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a4X){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fjB(new A.bS(u,y.aY))
x=3
return A.b(u.ia(0,C.hG,new B.fjC()),$async$fjA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fjA,w)},
hP2(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hvu(x):x},
fSd(d){var x=0,w=A.j(y.T),v,u,t
var $async$fSd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.anT(u)
x=1
break}v=B.fN4(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSd,w)},
fSc(d){var x=0,w=A.j(y.T),v,u,t
var $async$fSc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.anU(u)
x=1
break}v=B.fN4(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fSc,w)},
fAR(d){var x=0,w=A.j(y.T),v
var $async$fAR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anU(d),$async$fAR)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fAR,w)},
bzb(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fSc(d),$async$bzb)
case 3:q=f
if(q==null){x=1
break}t=C.R.aH(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzb,w)},
f8x(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f8x=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.TW(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B5(d.amE(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8x,w)},
FQ(d,e,f){return B.hRq(d,e,f)},
hRq(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FQ=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fSd(a1),$async$FQ)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aH(0,e,null)
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
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b0(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hj_().aCk(D.dgf,null),$async$FQ)
case 4:l=d.fS9=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awx(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.fk6(f,k,new B.fk7(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a6m(0,new B.Wc(r,"offer")),$async$FQ)
case 5:d=l
x=7
return A.b(l.ajv(0),$async$FQ)
case 7:x=6
return A.b(d.a6e(0,a4),$async$FQ)
case 6:x=8
return A.b(B.fjA(l),$async$FQ)
case 8:x=9
return A.b(l.ann(),$async$FQ)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hP2(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anV(m,h),$async$FQ)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h1S(h)
case 11:v=new A.bmj(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FQ,w)},
fjB:function fjB(d){this.a=d},
fjC:function fjC(){},
fk7:function fk7(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fk6:function fk6(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fk5:function fk5(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hTh(d){switch(d){case"new":return D.e88
case"checking":return D.e89
case"connected":return D.e8b
case"completed":return D.e8a
case"failed":return D.e8d
case"disconnected":return D.e8e
case"closed":return D.aJZ
case"count":return D.e8c}return D.aJZ},
hTi(d){switch(d){case"new":return D.aK_
case"gathering":return D.e8f
case"complete":return D.a4X}return D.aK_},
i2r(d){switch(d){case"stable":return D.e8g
case"have-local-offer":return D.e8h
case"have-local-pranswer":return D.e8j
case"have-remote-offer":return D.e8i
case"have-remote-pranswer":return D.e8k
case"closed":return D.aK5}return D.aK5},
i0H(d){switch(d){case"new":return D.aK2
case"connecting":return D.aK3
case"connected":return D.aK4
case"closed":return D.a4Y
case"disconnected":return D.aK1
case"failed":return D.aK0}return D.a4Y},
a8k:function a8k(d,e){this.a=d
this.b=e},
NF:function NF(d,e){this.a=d
this.b=e},
Wb:function Wb(d,e){this.a=d
this.b=e},
NE:function NE(d,e){this.a=d
this.b=e},
Et:function Et(d,e){this.a=d
this.b=e},
cgL:function cgL(){},
fOP(d){var x=new B.Es()
x.a=d
x.b=!0
return x},
Es:function Es(){this.b=this.a=$},
a8j:function a8j(){},
asa:function asa(){},
Wc:function Wc(d,e){this.a=d
this.b=e},
fN0(){var x=0,w=A.j(y.H)
var $async$fN0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fN0,w)},
fN3(d,e,f){var x=0,w=A.j(y.T),v
var $async$fN3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.ml(D.mm))){v=null
x=1
break}v=B.fB6(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fN3,w)},
h1S(d){var x,w=F.aan.a3d(C.dI.aJ(d),null)
if(w.length===0){x=C.dI.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hvt(d){var x,w,v=C.cB.aJ(d)
try{x=C.c4.c8(0,F.aam.bac(v,!1))
return x}catch(w){x=C.c4.c8(0,v)
return x}},
fN4(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hvt(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c4.c8(0,C.cB.aJ(x))
return v}catch(u){return x}}return null},
hvu(d){var x,w,v,u,t,s=A.a([],y.s)
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
hvv(){var x,w=$.ph(),v=J.e1(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fV(v)},
aY3(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aY3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aY3)
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
return A.i($async$aY3,w)},
c5w(d,e){return B.hvw(d,e)},
hvw(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5w=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cF,null),$async$c5w)
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
return A.i($async$c5w,w)},
aY6(d){var x=0,w=A.j(y.y),v,u,t
var $async$aY6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aY3(d),$async$aY6)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY6,w)},
aY5(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aY5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hvv()
r=C.a.i(f)
t=C.dI.aJ(s)
x=3
return A.b(B.c5w(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$aY5)
case 3:if(!h){v=null
x=1
break}v=new A.a_a("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY5,w)},
aY4(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aY4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aY3(o),$async$aY4)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c4.c8(0,C.cB.aJ(u))
if(J.iS(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aY4,w)},
c5x(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bA8("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cF),$async$c5x)
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
return A.i($async$c5x,w)},
aY7(d){var x=0,w=A.j(y.h),v,u,t
var $async$aY7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HM(),$async$aY7)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY7,w)},
anM(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anM)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aY7(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anM,w)},
anK(d,e){var x=0,w=A.j(y.H)
var $async$anK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anK)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anK)
case 2:return A.h(null,w)}})
return A.i($async$anK,w)},
a5V(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5V=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5V)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HM(),$async$a5V)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.C))
x=5
return A.b(A.a5U(s),$async$a5V)
case 5:x=6
return A.b(B.anK(f,u),$async$a5V)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5V,w)},
a5W(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5W=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5W)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HM(),$async$a5W)
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
return A.b(B.anK(g,q),$async$a5W)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5U(u),$async$a5W)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5W,w)},
a5X(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5X=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a5X)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HM(),$async$a5X)
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
s=B.aY0(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a5X)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a5().ac()],p,p),null)),$async$a5X)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5X,w)},
c5y(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$c5y)
case 7:s=f
p=A.t(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aH(0,r,null)
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
return A.i($async$c5y,w)},
HN(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5y(d),$async$HN)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aY7(t),$async$HN)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anL(d),$async$HN)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aY0(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anL(d),$async$HN)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HN,w)},
anL(d){var x=0,w=A.j(y.H)
var $async$anL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$anL)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anL)
case 2:return A.h(null,w)}})
return A.i($async$anL,w)},
aY8(){var x,w=$.ph(),v=J.e1(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fV(v)},
a5Y(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fN5(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5B(d){return B.hvy(d)},
hvy(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5B=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5Y(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f0("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5B)
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
return A.i($async$c5B,w)},
anO(d,e){return B.hvz(d,e)},
hvz(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$anO=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5Y(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cF,null),$async$anO)
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
return A.i($async$anO,w)},
c5D(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5D=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Y(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.anO(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5D)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5D,w)},
c5C(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5C=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Y(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.anO(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z)),$async$c5C)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5C,w)},
c5E(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5E=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5Y(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.anO(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5E,w)},
c5F(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fN5(d)){v=null
x=1
break}x=3
return A.b(B.c5B(d),$async$c5F)
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
return A.i($async$c5F,w)},
a64(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a64=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a64)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f0("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a64)
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
return A.i($async$a64,w)},
anS(d){return B.hvO(d)},
hvO(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$anS=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$anS)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a5().ac()],y.N,y.z),!1,!1,C.cF,null),$async$anS)
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
return A.i($async$anS,w)},
anT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$anT)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a64(),$async$anT)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c4.c8(0,C.cB.aJ(q))
if(J.iS(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dW(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a5().ac())
J.aG(s,j,o)
x=9
return A.b(B.anS(s),$async$anT)
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
return A.i($async$anT,w)},
anV(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c1(),$async$anV)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a64(),$async$anV)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dW(A.a1(s,r,q),r,q)
r=C.dI.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcv().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a5().ac())
t.n(u,p,q)
x=5
return A.b(B.anS(u),$async$anV)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anV,w)},
anU(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$anU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c1(),$async$anU)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a64(),$async$anU)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c4.c8(0,C.cB.aJ(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$anU,w)},
amV(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amV=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.pK)){v=null
x=1
break}x=3
return A.b(p.lP(e),$async$amV)
case 3:r=g
u=4
x=7
return A.b(r.ho(C.fT),$async$amV)
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
return A.i($async$amV,w)},
hZL(d,e){var x,w,v=J.e1(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fzp(d){return B.hZN(d)},
hZN(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fzp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eU().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").K9(d,3600),$async$fzp)
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
return A.i($async$fzp,w)},
Ct(d,e,f,g,h,i){var x=null
return B.hZK(d,e,f,g,h,i)},
hZK(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ct=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h1V(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fN7(r),$async$Ct)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fzp(o),$async$Ct)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5Z(r),$async$Ct)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aN3)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.L2(A.a([],g))
x=15
return A.b(d.eT(0,A.at_("GET",A.cv(n,0,null))).cM(0,C.EH),$async$Ct)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5Z(r),$async$Ct)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JE(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Ct)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYa(r,k),$async$Ct)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a9(0),$async$Ct)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.TW(r)
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
return A.b(B.a5Z(r),$async$Ct)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ct,w)},
aOy(d){return B.hZM(d)},
hZM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOy=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eU().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").W(0,d),$async$aOy)
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
return A.i($async$aOy,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[138]
O=c[40]
F=c[234]
I=c[130]
P=c[214]
E=c[207]
G=c[86]
Q=c[179]
R=c[131]
S=c[212]
K=c[238]
L=c[245]
B=a.updateHolder(c[21],B)
D=c[243]
T=c[178]
M=c[197]
U=c[65]
V=c[246]
W=c[71]
X=c[55]
N=c[85]
Y=c[244]
B.cgM.prototype={
aCk(d,e){return this.cFr(d,e)},
cFr(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.V(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dW(r,s,t)
t.v(0,d)
u=new q(A.kc(A.cA(t)))
t=J.k(u)
v=B.hAo(C.cS.gcv().aJ(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCk,w)}}
B.b2g.prototype={
bvr(d){var x=this,w=x.w
w.onclose=A.he(new B.cgH(x))
w.onopen=A.he(new B.cgI(x))
w.onmessage=A.he(new B.cgJ(x))
w.onbufferedamountlow=A.he(new B.cgK(x))},
gda(d){return this.x},
afN(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$afN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Es()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fOP(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$afN)
case 8:v=t.fOP(s.am8(f,0,null))
x=1
break
case 7:case 4:v=B.fOP(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afN,w)}}
B.b2h.prototype={
bvs(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.cgN(x)))
w.addEventListener("icecandidate",A.he(new B.cgO(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cgP(x)))
w.onicegatheringstatechange=A.he(new B.cgQ(x))
w.addEventListener("signalingstatechange",A.he(new B.cgR(x)))
if(!$.fVI())w.addEventListener("connectionstatechange",A.he(new B.cgS(x)))
w.addEventListener("negotiationneeded",A.he(new B.cgT(x)))
w.addEventListener("track",A.he(new B.cgU(x)))},
ajv(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.kc(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajv)
case 3:t=f
v=new B.Wc(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajv,w)},
a6e(d,e){return this.bkZ(0,e)},
bkZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6e)
case 2:return A.h(null,w)}})
return A.i($async$a6e,w)},
a6m(d,e){return this.ble(0,e)},
ble(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6m)
case 2:return A.h(null,w)}})
return A.i($async$a6m,w)},
ann(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ann=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wc(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ann,w)},
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
B.ab2.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Y7.prototype={
T(){return new B.axJ()},
gdc(){return this.c}}
B.axJ.prototype={
a_(){this.a1()
this.acw()},
acw(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY1(u.e,u.c),$async$acw)
case 2:t=e
if(v.c!=null)v.m(new B.d_C(v,t))
return A.h(null,w)}})
return A.i($async$acw,w)},
Pp(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anH(t.e,t.c,!1),$async$Pp)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eNk)
x=1
break}x=4
return A.b(B.a5T(u.a.c,"individual"),$async$Pp)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4N(A.ej(new B.d_z(u),!1,null,y.H)),$async$Pp)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Pp,w)},
Iz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Iz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fhK(o),$async$Iz)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5X(o.e,r,s,q),$async$Iz)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eKp)
x=1
break}x=5
return A.b(B.a5T(u.a.c,"member"),$async$Iz)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4N(A.ej(new B.d_B(u),!1,null,y.H)),$async$Iz)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Iz,w)},
xy(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5S(t.e,o,t.f,t.r,t.w,s),$async$xy)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5T(u.a.c,"org_owner"),$async$xy)
case 4:x=5
return A.b(B.anM(u.a.c),$async$xy)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fie(o),$async$xy)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5V(s,t,o,q.c),$async$xy)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eKm)
x=1
break}x=10
return A.b(B.anM(u.a.c),$async$xy)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4N(A.ej(new B.d_A(u),!1,null,y.H)),$async$xy)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xy,w)},
B(d){var x,w,v,u=this,t=null,s=A.O(d).ax.a===C.H,r=s?C.j1:C.pk,q=B.fN2(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fK,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f4H,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h2,t,t,t),C.ay,D.fn3,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bTl,C.n),t,t,t,t,C.ez,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lx(new B.d_E(),t),C.P,w,C.e0,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.ao,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abu(C.eR,C.awN,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gca0(),t),C.ac],v))
p.push(new B.abu(C.ow,C.a0W,"Team Member","Sign in with your organization access code + password",u.gcaS(),t))
p.push(C.ac)
p.push(new B.abu(C.ajr,C.a2o,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcan(),t))
return A.cb(t,r,A.bn(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.q,t,C.y,t,F.agL,t,t,C.ai),!0,!1,C.ag,!0,!0),t,!1,!1,t,t)}}
B.abu.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ex(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oX,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.B5,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bW,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.af)}}
B.aAh.prototype={}
B.aDt.prototype={}
B.jg.prototype={
ml(d){var x=this.b,w=C.a.on(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gao0(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ae(){var x,w=this,v=A.V(y.N,y.z)
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
b9F(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jg(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cDW(d){return this.b9F(null,d)},
aC5(d){return this.b9F(d,null)}}
B.TQ.prototype={
T(){return new B.aBE(new A.cp(null,y.A))},
gdc(){return this.c}}
B.aBE.prototype={
a_(){this.a1()
this.acx()},
acx(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acx=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B4(u.a.c),$async$acx)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dLI(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acx,w)},
acy(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fB(s)),$async$acy)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eOe)
case 1:return A.h(v,w)}})
return A.i($async$acy,w)},
YC(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YC=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amV(s.d,4),$async$YC)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rF(r,"ngmy_my_code_"+m+".png"),$async$YC)
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
return A.i($async$YC,w)},
agf(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8U("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agf)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agf,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.H,n=o?C.j1:C.pk,m=o?C.c:C.M,l=A.eD(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m_
else if(q.e==null)x=A.av(new A.C(C.ez,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1m,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.ao,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agl,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mt,w,C.kq,new A.es(A.p(p,A.pB(p,p,!1,B.hvp(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bW,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kq,A.A(A.a([A.D(A.ez(N.Bo,C.T5,q.gc33(),p),1),C.aw,A.D(A.dp(C.yd,C.a7b,q.gc34(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.ez(M.a_O,D.fj6,q.gcpg(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.y,p,U.LH,p,p,C.ai)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.TU.prototype={
T(){return new B.aBH(new A.ar(C.as,$.aw()),A.kh(!0,null,!0,!0,null,null,!1))}}
B.aBH.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HL(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YD(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HL(u.d.a.a)
if(t==null){u.m(new B.dMR(u))
x=1
break}u.m(new B.dMS(u))
s=u.a
r=s.c
x=3
return A.b(B.a5R(s.d,new B.dMT(u),t,r),$async$YD)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dMU(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$YD,w)},
a0N(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0N=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dMV(r))
u=4
q=J.fn(r.a.d)
x=7
return A.b(B.ra(r.a.c,q),$async$a0N)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dMW(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agq(p,m,l,j,k),$async$a0N)
case 8:o=e
if(r.c!=null)r.m(new B.dMX(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dMY(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dMZ(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0N,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.H,i=j?D.acP:D.aaS,h=j?D.aeh:C.c,g=j?C.aP:C.M,f=j?C.bI:C.ak,e=j?D.ac1:C.aL
i=[i,e,h,g,f,j?C.f6:C.bT]
x=A.O(d).ax.a===C.H
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eD(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e_(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bHq,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aD,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fy,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1m,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u2(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bgT()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LB,k,k,"",k,!0,new A.b4(4,A.m(18),new A.az(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.az(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ah,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dN_(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lR,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.KI(l.a.d,4)
m=A.B(new A.K(m,new B.dN0(x,new A.aEG(i)),m.$ti.k("K<ai.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.ma,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.eIW)
else q.push(A.W(C.l9,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.it,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.q,k,C.y,k,D.bqV,k,k,C.ai),1)
u=l.f?k:l.gcph()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ez(M.a_O,D.fk1,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.az(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc35()
t=A.bk(C.aE,k,k,0,C.c,k,C.mW,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.cb(g,h,new A.an(C.W,k,C.aa,C.q,A.a([f,v,A.bn(!0,A.mv(new B.dN1(),A.v(A.a([e,new A.C(D.bqp,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rn:D.fiv,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cq,C.Xd,k,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bgT.prototype={
oi(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fc(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.TR.prototype={
T(){return new B.aBF()}}
B.aBF.prototype={
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
acz(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acz=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dLJ(r))
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
return A.b(B.a5W(p,m,n,o,C.a.i(l).length===0?null:l),$async$acz)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eNQ)
s=[1]
x=4
break}p.I(y.q).f.R(D.eMt)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dLK(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acz,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.H?C.j1:C.pk,q=A.eD(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fbi,s,s,s,1,s,!0),p=A.p(s,D.bj7,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.G8,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bOg,C.y,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bOb,C.y,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bOr,C.y,!0,s,!0,s,!1,s,C.ah,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc36()
u=A.bk(C.aE,s,s,s,s,C.fL,s,s,s,s,s,s)
return A.cb(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mt,A.bJ(t.r?C.rn:C.aPE,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.q,s,C.y,s,C.a9,s,s,C.ai),s,!1,!1,s,s)}}
B.aaK.prototype={}
B.bth.prototype={
a3t(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cr(r.amE()))
x=3
return A.b(B.Qh(t,s),$async$a3t)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3t,w)},
gdc(){return this.a}}
B.ME.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Y6.prototype={
T(){return new B.axI(new A.ar(C.as,$.aw()),A.kh(!0,null,!0,!0,null,null,!1))}}
B.axI.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_y(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c3c(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a06(d),u=x.a.c,t=u?C.i4:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j1:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fK,32)],n),l=A.p(w,T.am8,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cx,16)],n),C.amW,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u2(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bsW()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.EU,w,w,"",w,!0,new A.b4(4,A.m(16),new A.az(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aWi),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ah,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_w(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lR,w,w,w,w)
f=f[1]
f=A.D(A.dT(C.ni,new B.d_x(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.az(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eE(w,C.K,new A.cU(Q.JC,A.bZ(new A.C(C.xm,A.v(A.a([l,C.aO,k,C.P,j,C.e0,i,C.e0,A.A(A.a([f,C.aw,A.D(A.bZ(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e2h,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc3b(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.af),new A.o(w,w,w,h,n,L.Ns,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LJ,C.d0,w,w,w)}}
B.bsW.prototype={
oi(d,e){return e.ajq(e.a.toUpperCase())}}
B.TS.prototype={
T(){return new B.aBG(A.a([],y.r),A.aW(y.N))},
gdc(){return this.c}}
B.aBG.prototype={
a_(){var x=this
x.a1()
x.tm()
x.w=A.dC(C.j6,new B.dMP(x))},
q(){var x=this.w
if(x!=null)x.a9(0)
B.U0()
this.a2()},
a_F(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MD(u.a.c),$async$a_F)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.A8(u.a.c),$async$a_F)
case 4:u.m(new s.dMc(u,e))
u.hU("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_F,w)},
tm(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MD(u.a.c),$async$tm)
case 3:t=e
x=4
return A.b(B.A8(u.a.c),$async$tm)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dMd(u,s))
if(t>0)u.hU("Received "+A.t(t)+" file(s) via My Code.")
u.MQ(u.d)
B.B4(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tm,w)},
MQ(d){return this.bzp(d)},
bzp(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a60(r,u.a.c),$async$MQ)
case 8:p=f
if(u.c==null){x=1
break}new B.dLM(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.ml(D.mm))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.TZ(r,u.a.c),$async$MQ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.A8(u.a.c),$async$MQ)
case 12:u.m(new o.dLN(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MQ,w)},
Nc(d){return this.bFy(d)},
bFy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a60(d,u.a.c),$async$Nc)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dLS(u,d,t))
x=6
return A.b(A.fI(new A.fB(t)),$async$Nc)
case 6:u.hU("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fB(r.toUpperCase())),$async$Nc)
case 7:u.hU("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nc,w)},
hU(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tn(d,e){return this.czA(d,e)},
czA(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tn=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dMD(r,e))
u=3
x=6
return A.b(d.$0(),$async$tn)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dME(r))
$.eQ.mg()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tn,w)},
gaT4(){var x=this.a
return x.f||x.r||x.w},
Hy(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Hy=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaT4()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c5u(s,n,r,q,o,t),$async$Hy)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hU("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fsT(o,u.a.c),$async$Hy)
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
return A.b(B.Cv(s,o,r,q,n,t),$async$Hy)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hy,w)},
ZJ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anM(u.a.c),$async$ZJ)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hU("No organization portal found.")
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
return A.b(A.a5(t,!1).ce(A.ej(new B.dM9(u,r,q),!1,null,y.H)),$async$ZJ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZJ,w)},
a_Q(d){return this.ciZ(d)},
ciY(){return this.a_Q(1)},
ciZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_Q=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaT4()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anJ(u.a.c),$async$a_Q)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_Q,w)},
aaB(d,e,f){return this.bVL(d,e,f)},
bVL(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaB=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hU(e)
x=1
break}x=3
return A.b(u.tn(new B.dM6(u,d,null,e,f),"Uploading\u2026"),$async$aaB)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaB,w)},
bzy(){B.hgr(!1,new B.dLQ(this))
return},
cnU(){this.m(new B.dMh(this))},
awN(){var x=0,w=A.j(y.H),v=this
var $async$awN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bzy()
return A.h(null,w)}})
return A.i($async$awN,w)},
aax(){var x=0,w=A.j(y.H),v=this
var $async$aax=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tn(new B.dLW(v),"Importing\u2026"),$async$aax)
case 2:return A.h(null,w)}})
return A.i($async$aax,w)},
Rq(d){return this.cz2(d)},
cz2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.ml(D.mm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ce(A.ej(new B.dMA(u,d),!1,null,y.H)),$async$Rq)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.ml(D.Pm)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).ce(A.ej(new B.dMB(u,d),!1,null,y.H)),$async$Rq)
case 8:x=1
break
case 7:x=u.bWs(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).ce(A.ej(new B.dMC(u,d),!1,null,y.H)),$async$Rq)
case 11:x=1
break
case 10:u.hU("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rq,w)},
bWs(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.on(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cAw,C.a.b0(x,w+1).toLowerCase())},
ae0(d){return this.ca4(d)},
ca4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ae0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.ml(D.mm)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).ce(A.ej(new B.dM7(u,d),!1,null,y.H)),$async$ae0)
case 5:x=1
break
case 4:u.m(new B.dM8(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ae0,w)},
QO(d){return this.cqI(d)},
cqI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hU("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oW(t,s.c,s.f),$async$QO)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tn(new B.dMt(u,d),"Preparing QR\u2026"),$async$QO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QO,w)},
agF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dMu(),A.T(t).k("K<1,n>")).fH(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dMv(q),s),s.k("H.E"))
if(r.length===0){u.hU("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QO(r),$async$agF)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agF,w)},
agy(d){return this.cqh(d)},
cqh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a06(r)
r=u.c
r.toString
x=3
return A.b(A.bW(C.K,null,new B.dMn(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agy)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rq(d)
break
case"qr":u.QO(A.a([d],y.r))
break
case"send_my_code":u.caH(A.a([d],y.r))
break
case"save":u.afU(d)
break
case"delete":u.Ik(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agy,w)},
WC(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dLT(),A.T(t).k("K<1,n>")).fH(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dLU(q),s),s.k("H.E"))
if(r.length===0){u.hU("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oW(t,s.c,s.f),$async$WC)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tn(new B.dLV(u,r),"Preparing file\u2026"),$async$WC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WC,w)},
af6(d){return this.chs(d)},
chs(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$af6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hh8(d,!1),$async$af6)
case 3:s=f
r=s==null
q=B.a5Y(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hU("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
ae6(){var x=0,w=A.j(y.H),v=this,u
var $async$ae6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fAu(u,v.a.c),$async$ae6)
case 2:return A.h(null,w)}})
return A.i($async$ae6,w)},
bzx(){B.hgr(!1,new B.dLP(this,null))
return},
Iy(d,e){return this.caI(d,e)},
aYX(d){return this.Iy(null,d)},
caH(d){return this.Iy(d,null)},
caI(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Iy=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dMa(s),o),o.k("H.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wN.c4().am_(!0,C.Z0,!1),$async$Iy)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tn(new B.dMb(l,s,r),"Preparing\u2026"),$async$Iy)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hU("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hU("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bBh(p,l,e,s.a.c),$async$Iy)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hU("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iy,w)},
HN(d){return this.bVy(d)},
bVy(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hvo(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aYX(t),$async$HN)
case 8:x=6
break
case 7:u.hU("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hU("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tn(new B.dM4(u,d),"Receiving video\u2026"),$async$HN)
case 11:x=1
break
case 10:x=12
return A.b(u.tn(new B.dM5(u,d),"Receiving\u2026"),$async$HN)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HN,w)},
DK(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cp()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.af6(t),$async$DK)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HN(s),$async$DK)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).ce(A.ej(new B.dMf(u),!1,null,y.N)),$async$DK)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tm(),$async$DK)
case 10:x=1
break
case 9:x=11
return A.b(u.HN(C.a.i(r)),$async$DK)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DK,w)},
afU(d){return this.cmu(d)},
cmu(d){var x=0,w=A.j(y.H),v=this
var $async$afU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tn(new B.dMe(v,d),"Saving\u2026"),$async$afU)
case 2:return A.h(null,w)}})
return A.i($async$afU,w)},
Ik(d){return this.bHQ(d)},
bHQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ik=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kY(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ik)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5x(t),$async$Ik)
case 6:case 5:s=d.a
x=7
return A.b(B.E_(u.a.c,s),$async$Ik)
case 7:u.r.W(0,s)
x=8
return A.b(u.tm(),$async$Ik)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ik,w)},
agL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a06(r)
r=u.c
r.toString
x=3
return A.b(A.bW(C.K,null,new B.dMz(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agL)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ae6()
break
case"import":u.aax()
break}case 1:return A.h(v,w)}})
return A.i($async$agL,w)},
c39(d){var x=d.c
if(C.a.a0(x,"video/")||d.ml(D.mm))return C.pJ
if(C.a.a0(x,"image/")||d.ml(D.Pm))return C.tC
if(C.a.t(x,"pdf"))return E.N_
return D.ajU},
B(d){var x,w,v=this,u=null,t=B.a06(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.G0,u,u,u,new B.dMK(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bHW,u,u,u,v.e?u:v.gcao(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcnT()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bCk:E.akk,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_L,u,u,u,v.e?u:v.gc3a(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nP,u,u,u,v.e?u:v.gb_4(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bJC,u,u,u,v.e?u:new B.dML(v),u,u,u,u,"More options",u))
q=A.eD(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lx(new B.dMM(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e_(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.O(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.mh(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axF(C.jd,s,!0,t,w?u:v.gcqJ(),u),1)
x.push(new A.C(D.bpc,A.mv(new B.dMN(),A.A(A.a([s,C.aw,A.D(new B.axF(C.vj,"Export",!1,t,w?u:v.gbLj(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cq,C.iu,u,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbz(t,v.e?u:v.gb_4(),u)
else s=A.k1(!0,u,u,new B.dMO(v,t),s,u,D.bp4,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.an(C.W,u,C.aa,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axF.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.v1,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.v1,t,new A.b7(s,C.Y),new A.az(v,1,C.r,-1),t,t,t,t)
return A.ez(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbz.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.av(A.mv(new B.d_u(),new A.C(E.Y5,A.v(A.a([A.mv(new B.d_v(),A.p(x,A.W(C.xH,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aD,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.i7,x,x,new A.bm(0.86,1,w),s),C.e0,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e0,A.dp(C.nP,D.fnm,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Y0,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cq,C.Av,x,x,new A.bm(0,1,w),s),x,x,x)}}
B.ab3.prototype={
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
if(!o||i.ml(D.mm))p=D.d6i
else{p=C.a.a0(p,"image/")||i.ml(D.Pm)
n=y.O
p=p?A.a([C.cY,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aD,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gao0()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.ml(D.mm))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fJ,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.ml(D.mm)))l.push(A.fKT(C.aE,!1,j,j,j,!1,j,j,new B.d_R(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nN,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mv(new B.d_S(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.XA,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.r,-1)),j,j,C.af),j),C.cq,h,new A.cw("docshare_row_"+i.a,y.aw),j,new A.bm(0,1,y.X),y.i)}}
B.Y8.prototype={
T(){return new B.axK()},
gdc(){return this.c}}
B.axK.prototype={
a_(){this.a1()
this.xo()},
q(){B.hvD(this.e)
this.a2()},
xo(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xo=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.ra(o.c,o.d),$async$xo)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hvG(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hvF(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d_O(s))
x=1
break}s.m(new B.d_P(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d_Q(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xo,w)},
a0M(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.ra(t.c,t.d),$async$a0M)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eKW)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agq(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0M)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0M,w)},
bVr(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.ki(u,C.A,v,new B.d_M(w,t),C.fR,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d_N(w),C.fR,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ub(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a06(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bp,u,u,u,v.gb2O(),u,u,u,u,"Share / save",u))
r=A.eD(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DA
else{q=v.r
if(q!=null)t=new A.C(C.ez,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ez,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aO,A.dp(C.Bp,D.f6V,v.gb2O(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bVr()}return A.cb(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Y5.prototype={
T(){return new B.axH(A.ahd(),C.bx,C.bx)},
gdc(){return this.c}}
B.axH.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fs(w,A.a3(w).k("fs<1>")).i6(new B.d_r(v))
x.gcMH().i6(new B.d_s(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fs(x,A.a3(x).k("fs<1>"))}if(x==null)x=C.b1q
x.i6(new B.d_t(v))
v.xo()},
xo(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xo=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.ra(p.c,p.d),$async$xo)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d_k(s))
x=1
break}x=8
return A.b(s.d.BI(0,new A.a2e(r,s.a.d.c)),$async$xo)
case 8:if(s.c==null){x=1
break}s.m(new B.d_l(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.d_m(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xo,w)},
YE(){var x=0,w=A.j(y.H),v=this,u
var $async$YE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h_(0),$async$YE)
case 5:x=3
break
case 4:x=6
return A.b(u.i9(0),$async$YE)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YE,w)},
aR0(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a06(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eD(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DA
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bDj,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.Ns,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.d_n(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aR0(p.w)+" / "+p.aR0(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eHs,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xS:C.iP,o,o,o,o,o)
x=A.v(A.a([u,C.kq,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc3d(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.av(new A.C(C.tq,x,o),o,o,o),o,!1,!1,o,o)}}
B.ON.prototype={
T(){return new B.axN()},
gdc(){return this.c}}
B.axN.prototype={
a_(){this.a1()
this.OM()},
OM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fN3(o.c,o.d,new B.d04(s)),$async$OM)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d05(s))
x=1
break}s.e=r
q=O.hSf(r)
if(q==null){s.m(new B.d06(s))
x=1
break}s.d=q
q.aM(0,s.gaYL())
x=8
return A.b(q.i5(0).cM(0,C.qF),$async$OM)
case 8:if(s.c==null){x=1
break}s.m(new B.d07(s))
x=9
return A.b(q.py(0),$async$OM)
case 9:q.t0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d08(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OM,w)},
c8G(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d09(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cs(0,x.gaYL())
w=x.d
if(w!=null)w.q()
B.i0Y(x.e)
x.a2()},
acC(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aY9(u.c,u.d),$async$acC)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acC,w)},
B(d){var x,w,v,u=this,t=null,s=B.a06(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eD(A.a([A.aH(t,t,t,t,C.oD,t,t,t,u.gc37(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.id(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DA
else{q=u.r
if(q!=null)s=new A.C(C.ez,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agI(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.q,A.a([new A.zF(s,t),A.aE(t,A.CH(A.p(t,A.W(q?I.xS:C.iP,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bW,t,t,t),C.bb,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d0b(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.cb(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Ya.prototype={
T(){return new B.axL(new A.cp(null,y.A))}}
B.axL.prototype={
gczj(){var x,w,v=this.a
if(v.e!==D.QG)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcz0(){var x,w,v=this.a
if(v.e!==D.yM)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gczj()
if(x!=null){v.PO(x)
v.e=A.dC(R.EK,new B.d00(v,x))}w=v.gcz0()
if(w!=null){v.PN(w)
v.f=A.dC(C.hg,new B.d01(v,w))}},
q(){var x=this.e
if(x!=null)x.a9(0)
x=this.f
if(x!=null)x.a9(0)
this.a2()},
PN(d){return this.cfE(d)},
cfE(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.anR(d),$async$PN)
case 3:t=f
x=4
return A.b(B.c5Q(d),$async$PN)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d_T(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PN,w)},
PO(d){return this.cfF(d)},
cfF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fAR(d),$async$PO)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzb(t),$async$PO)
case 4:if(u.c==null){x=1
break}u.m(new B.d_U(u))
u.c.I(y.q).f.R(D.aMF)
case 1:return A.h(v,w)}})
return A.i($async$PO,w)},
gc_m(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc38(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0y(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cp()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eO_)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).ce(A.ej(new B.d_V(),!1,null,y.N)),$async$a0y)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzb(s),$async$a0y)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aMF)
case 1:return A.h(v,w)}})
return A.i($async$a0y,w)},
a8w(d){return this.bFz(d)},
bFz(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fB(C.d.aI(t,", "))),$async$a8w)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8w,w)},
acA(d){return this.bFj(d)},
bFj(d){var x=0,w=A.j(y.H),v=this
var $async$acA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fB(v.a.c)),$async$acA)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eLo)
return A.h(null,w)}})
return A.i($async$acA,w)},
a0t(d){return this.cmw(d)},
cmw(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0t=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amV(s.d,4),$async$a0t)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rF(r,"ngmy_doc_share_qr.png"),$async$a0t)
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
return A.i($async$a0t,w)},
gaU8(){var x,w=this.a
if(w.e!==D.Hb)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8t(d){return this.bFs(d)},
bFs(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaU8()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8t)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eN_)
case 1:return A.h(v,w)}})
return A.i($async$a8t,w)},
acB(){var x=0,w=A.j(y.H),v=this,u
var $async$acB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.U0(),$async$acB)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acB,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a06(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hb&&i!==D.QG&&i!==D.yM
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eD(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hb||t===D.QG||t===D.yM?l:A.aH(l,l,l,l,C.kM,l,l,l,m.gaWX(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pB(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc_m(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hb){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mb,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gc38(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bNl,D.ffP,new B.d_W(m,d),l)],p))}if(m.a.e===D.Hb&&m.gaU8()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bJW,D.fcB,new B.d_X(m,d),l)],p))
if(m.a.e===D.yM){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DD:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mb,l,l,l)],p))}if(m.a.e===D.QG){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DD:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mb,l,l,l),C.ac,A.dp(D.bFK,D.fiO,m.gcmU(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oc(i,A.cb(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.ba,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ez(N.Bo,C.T5,new B.d_Y(m,d),l),1),C.aw,A.D(A.dp(C.yd,C.a7b,new B.d_Z(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zh,m.gaWX(),A.bk(C.aJ,l,l,l,l,C.fL,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0_(),y.C)}}
B.ab1.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aO,A.p(x,A.pB(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.y,x,x,x,x,C.ai)
return A.eh(A.a([A.bJ(C.zi,new B.d_j(d),x)],u),x,x,C.mF,v,x,x,x,x,D.f5X,x)}}
B.Y4.prototype={
T(){return new B.axG(A.yM(C.x5,C.np,C.tO))}}
B.axG.prototype={
q(){this.d.q()
this.a2()},
avp(d){var x,w,v,u,t
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
return A.cb(A.eD(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fd4,x,x,x,1,x,!0),C.w,A.yL(this.d,C.bQ,this.gavo()),x,!1,!1,x,x)}}
B.Yb.prototype={
T(){return new B.axM(A.yM(C.x5,C.np,C.tO))},
gdc(){return this.c}}
B.axM.prototype={
bWu(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aet(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aet=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rg("text/plain"),$async$aet)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eNU)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aet,w)},
a9h(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9h=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hh8(p,!0),$async$a9h)
case 3:t=e
p=t==null
s=B.a5Y(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eKw)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
q(){this.d.q()
this.a2()},
avp(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bWu(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alf,v,v,v,w.gbKS(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_S,v,v,v,w.gcd3(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eD(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qP:P.MK,v,v,v,v,v),v,v,v,new B.d03(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fjB,v,v,v,1,v,!0)
u=A.yL(w.d,C.bQ,w.gavo())
x=A.m(20)
return A.cb(t,C.w,new A.an(C.W,v,C.aa,C.q,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e7P],s),v),v,!1,!1,v,v)}}
B.bbA.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.on
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.on:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Ya,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.eu,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.af)}}
B.a8k.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NF.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wb.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NE.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Et.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.cgL.prototype={}
B.Es.prototype={}
B.a8j.prototype={}
B.asa.prototype={}
B.Wc.prototype={}
var z=a.updateTypes(["ay<~>()","R(jg)","n(jg)","TS(Y)","~()","Y7(Y)","G(G,jg)","ON(Y)","~(lR)","cn(Es)","ay<jg?>(@)","TQ(Y)","TU(Y)","C(jg)","jg(@)","a4<n,@>(jg)","Y6(Y)","TR(Y)","Y8(Y)","Y5(Y)","Ya(Y)","ab1(Y)","ak<jg>()","Yb(Y)","ab3(Y,G)","Y4(Y)","a4<n,aC>(jg)","cn(Wb)","cn(a8j)","ay<cn>(Es)"])
B.cgH.prototype={
$1(d){var x=this.a
x.x=D.aJY
x.y.K(0,D.aJY)},
$S:70}
B.cgI.prototype={
$1(d){var x=this.a
x.x=D.aJX
x.y.K(0,D.aJX)},
$S:70}
B.cgJ.prototype={
$1(d){var x=this.a
x.afN(A.aNi(d.data)).bz(new B.cgG(x),y.b)},
$S:70}
B.cgG.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cgK.prototype={
$1(d){},
$S:70}
B.cgN.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hAn(d.channel))},
$S:15}
B.cgO.prototype={
$1(d){},
$S:15}
B.cgP.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hTh(w.iceConnectionState)
x.cx=w
if($.fVI())switch(w.a){case 0:x.cy=D.aK2
break
case 1:x.cy=D.aK3
break
case 3:x.cy=D.aK4
break
case 5:x.cy=D.aK0
break
case 6:x.cy=D.aK1
break
case 7:x.cy=D.a4Y
break
default:break}},
$S:152}
B.cgQ.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hTi(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:152}
B.cgR.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i2r(w.signalingState)},
$S:152}
B.cgS.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i0H(w.connectionState)},
$S:152}
B.cgT.prototype={
$1(d){},
$S:152}
B.cgU.prototype={
$1(d){},
$S:15}
B.feb.prototype={
$1(d){var x=y.F.a(new A.rv([],[]).pl(d.target.result,!1)),w=C.x6.t(x.objectStoreNames,"blobs")
if(!w)C.x2.K7(x,"blobs")},
$S:185}
B.fAi.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vv.f7(this.b)
$.eQ.mg()
this.c.$1(d)},
$S:425}
B.fAk.prototype={
$1(d){return this.a.$1(B.hJd(this.b,this.c))},
$S:32}
B.fAj.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fAh.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fAx.prototype={
$1(d){var x=this
return B.h6K(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fAy.prototype={
$1(d){var x=this
return B.h6K(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.ffO.prototype={
$1(d){var x=this
return B.c5r(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_C.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_z.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5r(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_B.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5r(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_A.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5r(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_E.prototype={
$4(d,e,f,g){var x=null
return A.jB(A.A(A.a([A.aH(x,x,x,x,D.bEn,x,x,x,new B.d_D(d),x,x,x,x,x,x),A.D(A.Ee(D.P7,!0,x,C.ZX,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.P7,x,g,C.ah5,0,e,f)},
$C:"$4",
$R:4,
$S:401}
B.d_D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fhN.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i4:C.c,r=A.m(28),q=A.p(v,D.bjq,C.f,v,v,D.aXY,v,v,v,v,D.agW,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bIu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ah,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.EZ,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.alu,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ah,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bv,A.A(A.a([A.D(A.dT(C.de,new B.fhL(d),v),1),C.aw,A.D(A.bJ(D.fbE,new B.fhM(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Xx,v,v,v,v),v)},
$S:58}
B.fhL.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fhM.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eLD)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAh(v,x))},
$S:0}
B.fig.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i4:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bjg,C.f,w,w,D.aZo,w,w,w,w,D.agW,w,w,1/0),new A.C(C.EZ,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fRY(u,"Organization name",C.Fp,w),C.y,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fRY(u,"Access code",C.n0,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fRY(u,"Member password",H.FW,w),C.y,!0,w,!0,w,!1,w,C.ah,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bv,A.bJ(D.fjF,new B.fif(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fL,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Xx,w,w,w,w),w)},
$S:58}
B.fif.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eLI)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDt(u,x,w))},
$S:0}
B.c5i.prototype={
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
return A.b(A.uZ(p,null).cM(0,C.Xc),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cr(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B5(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c5o.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5p.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c5q.prototype={
$1(d){return d.b},
$S:z+2}
B.c5k.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5l.prototype={
$1(d){return d.b},
$S:z+2}
B.c5j.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c5m.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c5n.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.fAv.prototype={
$1(d){return new B.TQ(this.a,null)},
$S:z+11}
B.fAw.prototype={
$1(d){return new B.TU(this.a,this.b,this.c,null)},
$S:z+12}
B.dLI.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dMR.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dMS.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dMT.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dMQ(x,d))},
$S:2}
B.dMQ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMU.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dMV.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dMW.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dMX.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dMY.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dMZ.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dN1.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dN_.prototype={
$1(d){var x=this.a
return x.f?null:x.YD()},
$S:2}
B.dN0.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.ml(D.Pm))s=C.tC
else s=C.a.a0(s,"video/")||d.ml(D.mm)?C.pJ:D.ajU
x=this.b.a
w=y.p
return new A.C(C.kF,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gao0(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dLJ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dLK.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c5s.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:96}
B.c5t.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:96}
B.fB8.prototype={
$2(d,e){return e===this.a},
$S:306}
B.fbo.prototype={
$1(d){return J.k(d)},
$S:17}
B.fg_.prototype={
$1(d){var x=this.b
B.hHe(C.Fc.ga54(this.a)).bz(x.gcCh(x),y.H)},
$S:123}
B.fg0.prototype={
$1(d){return this.a.d3(0,null)},
$S:123}
B.fg1.prototype={
$0(){return null},
$S:11}
B.c5H.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fg2.prototype={
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
return new B.jg(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fjY.prototype={
$1(d){return d.ae()},
$S:z+15}
B.fes.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fet.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c5M.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ml(D.mm)},
$S:z+1}
B.fFa.prototype={
$1(d){return new B.Y6(this.a,null)},
$S:z+16}
B.d_y.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fF()},
$S:8}
B.d_w.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_x.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dMP.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_F()},
$S:14}
B.dMc.prototype={
$0(){var x=J.bCm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dMd.prototype={
$0(){var x=J.bCm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dLM.prototype={
$0(){var x=this.a,w=C.d.bc(x.d,new B.dLL(this.b))
if(w>=0){x=x.d
x[w]=x[w].aC5(this.c)}},
$S:0}
B.dLL.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dLN.prototype={
$0(){var x=J.bCm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dLS.prototype={
$0(){var x=this.a,w=C.d.bc(x.d,new B.dLR(this.b))
if(w>=0){x=x.d
x[w]=x[w].aC5(this.c)}},
$S:0}
B.dLR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMD.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dME.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dM9.prototype={
$1(d){return new B.TR(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dM6.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Hy(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.TV(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tm(),$async$$0)
case 5:s=J.a8(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a_Q(s.gM(t)),$async$$0)
case 8:case 7:r.hU(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLQ.prototype={
$1(d){this.a.aaB(d,"No files selected.","Added")},
$S:425}
B.dMh.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.K(x,new B.dMg(),A.T(x).k("K<1,n>")))},
$S:0}
B.dMg.prototype={
$1(d){return d.a},
$S:z+2}
B.dLW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wN.c4().cOE(C.Z0,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fn(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jl(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hU("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hU("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anQ(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hU("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tm(),$async$$0)
case 9:o.hU("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dMA.prototype={
$1(d){return new B.ON(this.a.a.c,this.b,null)},
$S:z+7}
B.dMB.prototype={
$1(d){return new B.Y8(this.a.a.c,this.b,null)},
$S:z+18}
B.dMC.prototype={
$1(d){return new B.Y5(this.a.a.c,this.b,null)},
$S:z+19}
B.dM7.prototype={
$1(d){return new B.ON(this.a.a.c,this.b,null)},
$S:z+7}
B.dM8.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
$S:0}
B.dMt.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Hy(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6_(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hU("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.ciY(),$async$$0)
case 5:x=6
return A.b(p.tm(),$async$$0)
case 6:r=A.T(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dMp(p),r),new B.dMq(),r.k("K<ai.E,n>")).bZ(0,new B.dMr())
q=A.B(r,r.$ti.k("H.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).ce(A.ej(new B.dMs(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oV(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.U0(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMp.prototype={
$1(d){var x=this.a,w=C.d.bc(x.d,new B.dMo(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dMo.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMq.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dMr.prototype={
$1(d){return d.length!==0},
$S:3}
B.dMs.prototype={
$1(d){var x=this.a
return new B.Ya(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dMu.prototype={
$1(d){return d.a},
$S:z+2}
B.dMv.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dMn.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kE,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gao0(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.ml(D.mm)?C.tE:C.oA
p=!x||p.ml(D.mm)?"Play video":"View"
return A.bZ(A.bn(!0,new A.C(C.AF,A.v(A.a([q,o,t,C.ay,B.Y9(!1,u,!1,w,p,new B.dMi(d),v),B.Y9(!1,u,!1,C.jd,"Share via QR",new B.dMj(d),"Letters/numbers QR code"),B.Y9(!1,u,!1,D.a_2,"Send to their Code",new B.dMk(d),"Enter someone else's personal code"),B.Y9(!1,u,!1,C.hy,"Download / save",new B.dMl(d),v),C.ao,B.Y9(!1,u,!0,C.e4,"Delete",new B.dMm(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.ag,!0,!0),new A.o(s,v,new A.bP(new A.az(r,1,C.r,-1),C.Y,C.Y,C.Y),C.kw,v,v,C.n),C.bd)},
$S:688}
B.dMi.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dMj.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dMk.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dMl.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dMm.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dLT.prototype={
$1(d){return d.a},
$S:z+2}
B.dLU.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dLV.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a61(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FT(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oV(s.c,s.f),$async$$0)
case 4:u.hU(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLP.prototype={
$1(d){var x=this.a
x.tn(new B.dLO(x,d,this.b),"Preparing\u2026")},
$S:425}
B.dLO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hU("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.TV(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hU("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBh(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hU("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMa.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dMb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aX(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fN6(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM4.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FQ(new B.dM0(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hU("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.c9(null,null,!1,null,new B.dM1(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dM2(s))
case 5:x=8
return A.b(r.b.ia(0,C.EH,new B.dM3()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gam(t)){s.hU("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tm(),$async$$0)
case 9:s.hU("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dM0.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLY(x,d,e))},
$S:139}
B.dLY.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dM1.prototype={
$1(d){return new B.ab1(this.a.a,null)},
$S:z+21}
B.dM2.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dM3.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dM5.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HL(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5Q(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aYX(B.HL(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anQ(new B.dLZ(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fN5(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hU(q)
x=1
break}x=10
return A.b(s.tm(),$async$$0)
case 10:o=J.cE(r)
p=o.eJ(r,new B.dM_()).gM(0)
s.hU(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dLZ.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dLX(x,d,e))},
$S:139}
B.dLX.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dM_.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ml(D.mm)},
$S:z+1}
B.dMf.prototype={
$1(d){return new B.Yb(this.a.a.c,null)},
$S:z+23}
B.dMe.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aY9(u.a.c,v.b),$async$$0)
case 2:t.hU(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMz.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bZ(A.bn(!0,new A.C(C.AF,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kE,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.Y9(!0,w,!1,C.n0,"My Code",new B.dMw(d),"Your personal code & QR \u2014 others send docs to you"),B.Y9(!1,w,!1,D.a_2,"Send to their Code",new B.dMx(this.a,d),"Enter someone else's 5-digit code + letter"),B.Y9(!1,w,!1,S.y2,"Import backup",new B.dMy(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.ag,!0,!0),new A.o(u,x,new A.bP(new A.az(t,1,C.r,-1),C.Y,C.Y,C.Y),C.kw,x,x,C.n),C.bd)},
$S:688}
B.dMw.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dMx.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.bzx()},
$S:0}
B.dMy.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dMM.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HU(D.P7,x,C.ZX,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.P7).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:652}
B.dMK.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dML.prototype={
$0(){this.a.agL()
return null},
$S:0}
B.dMN.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dMO.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ab3(e,w,v,this.b,x.e,x.c39(w),new B.dMG(x,w),new B.dMH(x,v,w),new B.dMI(x,w),new B.dMJ(x,w),null)},
$S:z+24}
B.dMG.prototype={
$0(){this.a.ae0(this.b)
return null},
$S:0}
B.dMH.prototype={
$0(){var x=this.a
return x.m(new B.dMF(x,this.b,this.c))},
$S:0}
B.dMF.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dMI.prototype={
$0(){this.a.Nc(this.b)
return null},
$S:0}
B.dMJ.prototype={
$0(){this.a.agy(this.b)
return null},
$S:0}
B.d_u.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.d_v.prototype={
$3(d,e,f){return A.e9(C.A,f,e,null,null)},
$S:134}
B.d_S.prototype={
$3(d,e,f){return A.db(A.dU(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.d_R.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d_O.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d_P.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d_Q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d_M.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d_K(this.a),C.fR,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d_L(this.a))
return C.bH},
$S:131}
B.d_K.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_I(this.a))
return C.bH},
$S:178}
B.d_I.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_F(x))},
$S:8}
B.d_F.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_L.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_H(x))},
$S:8}
B.d_H.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_N.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d_J(this.a))
return C.bH},
$S:178}
B.d_J.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_G(x))},
$S:8}
B.d_G.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_r.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_q(x,d))},
$S:1740}
B.d_q.prototype={
$0(){return this.a.f=this.b===C.ua},
$S:0}
B.d_s.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_p(x,d))},
$S:8}
B.d_p.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_t.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_o(x,d))},
$S:8}
B.d_o.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d_k.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d_l.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d_m.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d_n.prototype={
$1(d){return this.a.d.Md(0,A.dB(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d04.prototype={
$0(){var x=this.a.a
return B.ra(x.c,x.d)},
$S:1741}
B.d05.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d06.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d07.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d08.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d09.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d0b.prototype={
$0(){var x=this.a
x.m(new B.d0a(x))},
$S:0}
B.d0a.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h_(0)
else x.py(0)},
$S:0}
B.d00.prototype={
$1(d){return this.a.PO(this.b)},
$S:14}
B.d01.prototype={
$1(d){return this.a.PN(this.b)},
$S:14}
B.d_T.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d_U.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d_V.prototype={
$1(d){return D.fH4},
$S:z+25}
B.d0_.prototype={
$2(d,e){if(d)B.U0()},
$S:121}
B.d_W.prototype={
$0(){return this.a.a8w(this.b)},
$S:0}
B.d_X.prototype={
$0(){return this.a.a8t(this.b)},
$S:0}
B.d_Y.prototype={
$0(){return this.a.acA(this.b)},
$S:0}
B.d_Z.prototype={
$0(){return this.a.a0t(this.b)},
$S:0}
B.d_j.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d03.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pC(),$async$$0)
case 2:u.m(new B.d02(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d02.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c5O.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.ml(D.mm)},
$S:z+1}
B.c5P.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c5N.prototype={
$2(d,e){return this.bgY(d,e)},
bgY(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.U1(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fjB.prototype={
$1(d){if(d===D.a4X&&(this.a.a.a&30)===0)this.a.fM(0)},
$S:z+27}
B.fjC.prototype={
$0(){},
$S:11}
B.fk7.prototype={
bix(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f8x(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h1V(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bix(d,e)},
$S:718}
B.fk6.prototype={
$1(d){var x=this
d.b=new B.fk5(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fk5.prototype={
$1(d){return this.biw(d)},
biw(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYa(n,m),$async$$1)
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
return A.b(B.f8x(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a5Z(m),$async$$1)
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
x(v=B.axJ.prototype,"gca0","Pp",0)
x(v,"gcaS","Iz",0)
x(v,"gcan","xy",0)
x(v=B.aBE.prototype,"gc33","acy",0)
x(v,"gc34","YC",0)
x(v,"gcpg","agf",0)
x(v=B.aBH.prototype,"gc35","YD",0)
x(v,"gcph","a0N",0)
x(B.aBF.prototype,"gc36","acz",0)
x(B.axI.prototype,"gc3b","c3c",4)
x(v=B.aBG.prototype,"gcao","ZJ",0)
x(v,"gcnT","cnU",4)
x(v,"gb_4","awN",0)
x(v,"gcqJ","agF",0)
x(v,"gbLj","WC",0)
x(v,"gc3a","DK",0)
x(B.axK.prototype,"gb2O","a0M",0)
x(B.axH.prototype,"gc3d","YE",0)
x(v=B.axN.prototype,"gaYL","c8G",4)
x(v,"gc37","acC",0)
x(v=B.axL.prototype,"gcmU","a0y",0)
x(v,"gaWX","acB",0)
w(B.axG.prototype,"gavo","avp",8)
x(v=B.axM.prototype,"gcd3","aet",0)
x(v,"gbKS","a9h",0)
w(v,"gavo","avp",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cgL,B.a8j,B.asa,B.aAh,B.aDt,B.jg,B.aaK,B.bth,B.Es,B.Wc])
w(B.cgM,B.cgL)
w(B.b2g,B.a8j)
x(A.hT,[B.cgH,B.cgI,B.cgJ,B.cgG,B.cgK,B.cgN,B.cgO,B.cgP,B.cgQ,B.cgR,B.cgS,B.cgT,B.cgU,B.feb,B.fAi,B.fAk,B.fAj,B.fAx,B.fAy,B.ffO,B.d_z,B.d_B,B.d_A,B.d_E,B.fhN,B.fig,B.c5i,B.c5p,B.c5q,B.c5l,B.c5j,B.c5m,B.c5n,B.fAv,B.fAw,B.dMT,B.dN1,B.dN_,B.dN0,B.fbo,B.fg_,B.fg0,B.c5H,B.fg2,B.fjY,B.fes,B.fet,B.c5M,B.fFa,B.d_y,B.d_w,B.dMP,B.dLL,B.dLR,B.dM9,B.dLQ,B.dMg,B.dMA,B.dMB,B.dMC,B.dM7,B.dMp,B.dMo,B.dMq,B.dMr,B.dMs,B.dMu,B.dMv,B.dMn,B.dLT,B.dLU,B.dLP,B.dMa,B.dM1,B.dM_,B.dMf,B.dMz,B.dMM,B.dMN,B.d_u,B.d_v,B.d_S,B.d_R,B.d_M,B.d_K,B.d_I,B.d_L,B.d_N,B.d_J,B.d_r,B.d_s,B.d_t,B.d_n,B.d00,B.d01,B.d_V,B.c5O,B.c5P,B.fjB,B.fk6,B.fk5])
w(B.b2h,B.asa)
x(A.j3,[B.fAh,B.d_C,B.d_D,B.fhL,B.fhM,B.fif,B.dLI,B.dMR,B.dMS,B.dMQ,B.dMU,B.dMV,B.dMW,B.dMX,B.dMY,B.dMZ,B.dLJ,B.dLK,B.fg1,B.d_x,B.dMc,B.dMd,B.dLM,B.dLN,B.dLS,B.dMD,B.dME,B.dM6,B.dMh,B.dLW,B.dM8,B.dMt,B.dMi,B.dMj,B.dMk,B.dMl,B.dMm,B.dLV,B.dLO,B.dMb,B.dM4,B.dLY,B.dM2,B.dM3,B.dM5,B.dLX,B.dMe,B.dMw,B.dMx,B.dMy,B.dMK,B.dML,B.dMG,B.dMH,B.dMF,B.dMI,B.dMJ,B.d_O,B.d_P,B.d_Q,B.d_F,B.d_H,B.d_G,B.d_q,B.d_p,B.d_o,B.d_k,B.d_l,B.d_m,B.d04,B.d05,B.d06,B.d07,B.d08,B.d09,B.d0b,B.d0a,B.d_T,B.d_U,B.d_W,B.d_X,B.d_Y,B.d_Z,B.d_j,B.d03,B.d02,B.fjC])
x(A.m1,[B.ab2,B.ME,B.a8k,B.NF,B.Wb,B.NE,B.Et])
x(A.ag,[B.Y7,B.TQ,B.TU,B.TR,B.Y6,B.TS,B.Y8,B.Y5,B.ON,B.Ya,B.Y4,B.Yb])
x(A.ah,[B.axJ,B.aBE,B.aBH,B.aBF,B.axI,B.aBG,B.axK,B.axH,B.axN,B.axL,B.axG,B.axM])
x(A.au,[B.abu,B.axF,B.bbz,B.ab3,B.ab1,B.bbA])
x(A.kd,[B.c5o,B.c5k,B.c5s,B.c5t,B.fB8,B.dM0,B.dLZ,B.dMO,B.d0_,B.c5N,B.fk7])
x(A.iO,[B.bgT,B.bsW])})()
A.jS(b.typeUniverse,JSON.parse('{"b2g":{"a8j":[]},"b2h":{"asa":[]},"Y7":{"ag":[],"r":[]},"axJ":{"ah":["Y7"]},"abu":{"au":[],"r":[]},"TQ":{"ag":[],"r":[]},"TU":{"ag":[],"r":[]},"aBE":{"ah":["TQ"]},"aBH":{"ah":["TU"]},"bgT":{"iO":[]},"TR":{"ag":[],"r":[]},"aBF":{"ah":["TR"]},"Y6":{"ag":[],"r":[]},"TS":{"ag":[],"r":[]},"ab3":{"au":[],"r":[]},"Y8":{"ag":[],"r":[]},"Y5":{"ag":[],"r":[]},"ON":{"ag":[],"r":[]},"Ya":{"ag":[],"r":[]},"ab1":{"au":[],"r":[]},"Y4":{"ag":[],"r":[]},"Yb":{"ag":[],"r":[]},"axI":{"ah":["Y6"]},"bsW":{"iO":[]},"aBG":{"ah":["TS"]},"axF":{"au":[],"r":[]},"bbz":{"au":[],"r":[]},"axK":{"ah":["Y8"]},"axH":{"ah":["Y5"]},"axN":{"ah":["ON"]},"axL":{"ah":["Ya"]},"axG":{"ah":["Y4"]},"axM":{"ah":["Yb"]},"bbA":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tU"),k:x("L6()"),m:x("bq<n,n>"),F:x("qN"),g:x("ay<jg?>"),x:x("ay<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a4<n,R>>"),t:x("P<a4<n,@>>"),r:x("P<jg>"),w:x("P<+file,name(ls,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iO>"),a:x("P<dD>"),p:x("P<r>"),Z:x("P<G>"),G:x("bh"),A:x("cp<ah<ag>>"),n:x("ak<jg>"),j:x("ak<@>"),I:x("ak<G>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iz"),e:x("i6j"),af:x("DI"),U:x("jg"),b:x("cn"),C:x("aC"),aK:x("vL"),ab:x("Es"),br:x("asa"),v:x("Wc"),N:x("n"),X:x("bm<N>"),Q:x("lD"),D:x("dD"),aw:x("cw<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bS<ak<jg>>"),aW:x("bS<dD?>"),aY:x("bS<~>"),cx:x("ab2"),b1:x("bg<ak<jg>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAh"),bG:x("aDt"),q:x("mU"),B:x("pb<Es>"),c6:x("pb<a8k>"),y:x("R"),i:x("N"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ak<jg>?"),aL:x("ak<@>?"),h:x("a4<n,@>?"),l:x("jg?"),R:x("aC?"),c:x("Wc?"),d:x("+answerQr,transfer(n,ay<ak<jg>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,G)?"),L:x("+fileCount,mode,qrPayload(G,ME,n)?"),aX:x("+fileCount,qrPayload,token(G,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaK?"),bk:x("aAh?"),ag:x("aDt?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aWi=new A.az(C.aE,2,C.r,-1)
D.bRv=new A.a7(C.a3,C.a7,C.x,C.a0W,null,null)
D.aXY=new A.o(null,null,null,C.lX,null,D.bRv,C.n)
D.aZo=new A.o(null,null,null,C.lX,null,E.G8,C.n)
D.aaS=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ac1=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.acP=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeh=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f6O=new A.x("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.fkz=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.Iw,null,null,null,null,null,null,null,null,null)
D.cZF=x([D.f6O,C.ao,D.fkz],y.p)
D.bj7=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.cZF,null)
D.foH=new A.x("Create your organization",null,C.hp,null,null,null,null,null,null,null,null,null)
D.faV=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.Iw,null,null,null,null,null,null,null,null,null)
D.ddk=x([D.foH,C.ao,D.faV],y.p)
D.bjg=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.ddk,null)
D.fl7=new A.x("Team Member sign-in",null,C.hp,null,null,null,null,null,null,null,null,null)
D.feD=new A.x("Enter the access code and password from your organization.",null,G.Iw,null,null,null,null,null,null,null,null,null)
D.dbj=x([D.fl7,C.ao,D.feD],y.p)
D.bjq=new A.fp(C.ai,C.e,C.j,C.F,null,C.p,null,0,D.dbj,null)
D.bp4=new A.Q(16,10,16,28)
D.bpc=new A.Q(16,14,16,4)
D.bqp=new A.Q(20,0,20,16)
D.bqV=new A.Q(20,8,20,16)
D.agW=new A.Q(24,22,24,20)
D.a_2=new A.a0(63394,"MaterialIcons",!1)
D.ajU=new A.a0(63515,"MaterialIcons",!1)
D.bCk=new A.a0(983813,"MaterialIcons",!1)
D.bzC=new A.a0(62867,"MaterialIcons",!1)
D.bDj=new A.ae(D.bzC,44,C.c,null,null,null)
D.bEn=new A.ae(C.py,null,C.ad,null,null,null)
D.bFK=new A.ae(C.iQ,18,null,null,null,null)
D.bHq=new A.ae(D.a_2,26,C.c,null,null,null)
D.bHW=new A.ae(C.Bh,null,null,null,null,null)
D.bIu=new A.ae(C.y4,null,null,null,null,null)
D.bJC=new A.ae(W.MY,null,null,null,null,null)
D.bJW=new A.ae(C.hj,16,null,null,null,null)
D.bNl=new A.ae(C.qT,16,null,null,null,null)
D.bDA=new A.ae(C.n0,null,null,null,null,null)
D.bOb=new A.e0(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bDA,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJ1=new A.ae(C.Fp,null,null,null,null,null)
D.bOg=new A.e0(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJ1,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bDV=new A.ae(H.FW,null,null,null,null,null)
D.bOr=new A.e0(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bDV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cB1=x([C.f6,C.aZ,C.aE],y.O)
D.bTl=new A.a7(C.ax,C.aD,C.x,D.cB1,null,null)
D.cAw=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.P7=x([C.f6,C.aE],y.O)
D.Pm=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mm=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d6i=x([C.pe,C.aE],y.O)
D.dXI={iceServers:0}
D.aED={urls:0}
D.dgV=new A.bq(D.aED,["stun:stun.l.google.com:19302"],y.m)
D.dgU=new A.bq(D.aED,["stun:stun1.l.google.com:19302"],y.m)
D.cQv=x([D.dgV,D.dgU],A.ax("P<a4<n,n>>"))
D.dgf=new A.bq(D.dXI,[D.cQv],A.ax("bq<n,@>"))
D.Hb=new B.ME(0,"lanDirect")
D.QF=new B.ME(1,"cloudStash")
D.drJ=new B.ME(2,"inlineInstant")
D.QG=new B.ME(3,"webrtcLink")
D.yM=new B.ME(4,"videoCloud")
D.fky=new A.x("Receive file",null,C.nh,null,null,null,null,null,null,null,null,null)
D.cqG=x([E.alD,C.ab,D.fky],y.p)
D.eDu=new A.co(C.aQ,C.ba,C.j,C.m,null,C.p,null,0,D.cqG,null)
D.e2h=new A.C(C.cf,D.eDu,null)
D.eZ6=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1A,null,null,null)
D.f7l=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.eZ6,null,C.L,null,null,null,null,null,null,null)
D.e1B=new A.C(C.AL,D.f7l,null)
D.b2D=new A.cq(C.A,null,null,D.e1B,null)
D.e7P=new A.cK(0,null,0,28,null,null,D.b2D,null)
D.e87=new B.a8k(0,"RTCDataChannelConnecting")
D.aJX=new B.a8k(1,"RTCDataChannelOpen")
D.aJY=new B.a8k(3,"RTCDataChannelClosed")
D.e88=new B.Et(0,"RTCIceConnectionStateNew")
D.e89=new B.Et(1,"RTCIceConnectionStateChecking")
D.e8a=new B.Et(2,"RTCIceConnectionStateCompleted")
D.e8b=new B.Et(3,"RTCIceConnectionStateConnected")
D.e8c=new B.Et(4,"RTCIceConnectionStateCount")
D.e8d=new B.Et(5,"RTCIceConnectionStateFailed")
D.e8e=new B.Et(6,"RTCIceConnectionStateDisconnected")
D.aJZ=new B.Et(7,"RTCIceConnectionStateClosed")
D.aK_=new B.Wb(0,"RTCIceGatheringStateNew")
D.e8f=new B.Wb(1,"RTCIceGatheringStateGathering")
D.a4X=new B.Wb(2,"RTCIceGatheringStateComplete")
D.a4Y=new B.NE(0,"RTCPeerConnectionStateClosed")
D.aK0=new B.NE(1,"RTCPeerConnectionStateFailed")
D.aK1=new B.NE(2,"RTCPeerConnectionStateDisconnected")
D.aK2=new B.NE(3,"RTCPeerConnectionStateNew")
D.aK3=new B.NE(4,"RTCPeerConnectionStateConnecting")
D.aK4=new B.NE(5,"RTCPeerConnectionStateConnected")
D.e8g=new B.NF(0,"RTCSignalingStateStable")
D.e8h=new B.NF(1,"RTCSignalingStateHaveLocalOffer")
D.e8i=new B.NF(2,"RTCSignalingStateHaveRemoteOffer")
D.e8j=new B.NF(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e8k=new B.NF(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aK5=new B.NF(5,"RTCSignalingStateClosed")
D.eHs=new A.at(160,48)
D.b3N=new A.fh(2,null,null,null,null,C.aE,null,null,null,null)
D.eIW=new A.a6(16,16,D.b3N,null)
D.fal=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eKm=new A.b1(D.fal,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fhx=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eKp=new A.b1(D.fhx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpJ=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eKw=new A.b1(D.fpJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f9Z=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eKW=new A.b1(D.f9Z,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.flg=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aMF=new A.b1(D.flg,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fmC=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eLo=new A.b1(D.fmC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fr5=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eLD=new A.b1(D.fr5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fpa=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eLI=new A.b1(D.fpa,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fqk=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eMt=new A.b1(D.fqk,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8G=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eN_=new A.b1(D.f8G,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fjh=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eNk=new A.b1(D.fjh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.fcr=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eNQ=new A.b1(D.fcr,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.frb=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eNU=new A.b1(D.frb,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f8W=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eO_=new A.b1(D.f8W,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f7F=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eOe=new A.b1(D.f7F,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.q,null)
D.f4H=new A.x("NGMY DOC SHARE",null,C.aNV,null,null,null,null,null,null,null,null,null)
D.f5X=new A.x("Show this to sender",null,C.ks,null,null,null,null,null,null,null,null,null)
D.f6V=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fbi=new A.x("Organization settings",null,C.cu,null,null,null,null,null,null,null,null,null)
D.fbE=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fcB=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.ffP=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fiv=new A.x("Send to their Doc Share",null,C.nf,null,null,null,null,null,null,null,null,null)
D.fiO=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fj6=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fjB=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fjF=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fk1=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fn3=new A.x("Share files & videos\nwith a scan.",null,C.aNW,null,null,null,null,null,null,null,null,null)
D.fnm=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fH4=new B.Y4(null)
D.a7Y=new B.ab2(0,"docShare")
D.a7Z=new B.ab2(1,"gate")
D.TD=new B.ab2(2,"gateNoIndividual")})();(function staticFields(){$.aM5=null
$.f6l=function(){var x=y.N
return A.V(x,x)}()
$.FC=A.V(y.N,y.D)
$.af_=A.V(y.N,A.ax("ls"))
$.Q2=A.V(y.N,y.D)
$.f6T=A.V(y.N,A.ax("aaK"))
$.c5G=A.V(y.S,A.ax("bth"))
$.h1U=1
$.hP5=null
$.hP4=null
$.hGF=null
$.fS9=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i6O","hj_",()=>new B.cgM())
x($,"i4J","fVI",()=>C.a.t(A.bt(A.bt(A.bt(A.Gc(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["13xDqWVkxd326ehr/qfJaaSdXlQ="]=a.current})($__dart_deferred_initializers__);