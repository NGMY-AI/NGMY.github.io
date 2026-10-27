((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,F,H,P,E,G,Q,R,S,I,K,B={cfo:function cfo(){},
hsZ(d){var x=null,w=new B.b1r(d,D.e_W,new A.p_(x,x,y.c6),new A.p_(x,x,y.B))
w.bth(d)
return w},
b1r:function b1r(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cfj:function cfj(d){this.a=d},
cfk:function cfk(d){this.a=d},
cfl:function cfl(d){this.a=d},
cfi:function cfi(d){this.a=d},
cfm:function cfm(d){this.a=d},
ht_(d,e){var x=y.N
x=new B.b1s(d,e,A.T(x,y.e),A.T(x,y.z))
x.bti(d,e)
return x},
b1s:function b1s(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cfp:function cfp(d){this.a=d},
cfq:function cfq(d){this.a=d},
cfr:function cfr(d){this.a=d},
cfs:function cfs(d){this.a=d},
cft:function cft(d){this.a=d},
cfu:function cfu(d){this.a=d},
cfv:function cfv(d){this.a=d},
cfw:function cfw(d){this.a=d},
fKF(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.S(A.bd("IndexedDB not available"))
return C.xJ.KM(x,"ngmy_doc_share_v1",new B.f8g(),1)},
hzs(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.co(d))
if(y.J.b(d))return new Uint8Array(A.co(J.eR(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.co(A.Bl(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.co(d))
if(typeof d=="string")try{x=C.cA.aG(d)
return x}catch(w){return v}return v},
PK(d,e){return B.hOu(d,e)},
hOu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$PK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aLl
x=7
return A.b(o==null?$.aLl=B.fKF():o,$async$PK)
case 7:s=g
r=new Uint8Array(A.co(e))
q=J.mq(s,"blobs","readwrite")
C.iy.lQ(J.mo(q,"blobs"),r,d)
x=8
return A.b(J.p8(q),$async$PK)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a7(m)
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
return A.i($async$PK,w)},
PJ(d){return B.hOt(d)},
hOt(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$PJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aLl
x=7
return A.b(o==null?$.aLl=B.fKF():o,$async$PJ)
case 7:s=f
r=J.mq(s,"blobs","readonly")
x=8
return A.b(C.iy.yN(J.mo(r,"blobs"),d),$async$PJ)
case 8:q=f
x=9
return A.b(J.p8(r),$async$PJ)
case 9:o=B.hzs(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a7(m)
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
return A.i($async$PJ,w)},
af2(d){return B.hOs(d)},
hOs(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$af2=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aLl
x=7
return A.b(p==null?$.aLl=B.fKF():p,$async$af2)
case 7:s=f
r=J.mq(s,"blobs","readwrite")
C.iy.EN(J.mo(r,"blobs"),d)
x=8
return A.b(J.p8(r),$async$af2)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a7(n)
$.al.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$af2,w)},
f8g:function f8g(){},
hBL(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.blF(w,v))}return u},
h94(d,e){var x,w={},v=A.aTA("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fts(w,v,e)
C.v4.xG(v,"change",new B.ftu(w,v,!1))
C.v4.xG(v,"cancel",new B.ftt(w))
$.eN.lZ()
v.click()
A.bO(C.adh,new B.ftr(w),y.H)},
fts:function fts(d,e,f){this.a=d
this.b=e
this.c=f},
ftu:function ftu(d,e,f){this.a=d
this.b=e
this.c=f},
ftt:function ftt(d){this.a=d},
ftr:function ftr(d){this.a=d},
C5(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$C5=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd6()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSc()?3:4
break
case 3:x=5
return A.b(B.h4i(e,d,s,!0,!1,f,g,h,!1,i),$async$C5)
case 5:x=1
break
case 4:x=6
return A.b(B.Pp(d,s,f,g,h,i),$async$C5)
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
return A.b(B.Hi(s,d),$async$C5)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.f3H(s,d),$async$C5)
case 14:x=12
return A.b(r.h4i(q,p,o,n,m,l,k,j,a1,i),$async$C5)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ck(A.eu(new B.ftH(s,i,d,f,g,h),!1,null,y.H)),$async$C5)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ck(A.eu(new B.ftI(s,i,d,f,g,h),!1,null,y.H)),$async$C5)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$C5,w)},
Pp(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Pp=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXe(e),$async$Pp)
case 3:u=k
x=4
return A.b(B.an3(d,e,!1),$async$Pp)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Hi(e,d),$async$Pp)
case 7:if(k){v=D.a6s
x=1
break}x=8
return A.b(B.Tk(e),$async$Pp)
case 8:v=t?D.Su:D.a6t
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aXc(d,e)){v=D.a6s
x=1
break}x=11
return A.b(B.Tk(e),$async$Pp)
case 11:v=t?D.Su:D.a6t
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fFV(d,e)){v=D.a6s
x=1
break}x=14
return A.b(B.Tk(e),$async$Pp)
case 14:v=D.Su
x=1
break
case 13:v=t?D.Su:D.a6t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Pp,w)},
f3H(d,e){var x=0,w=A.j(y.y),v
var $async$f3H=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aXc(e,d)){v=!1
x=1
break}x=3
return A.b(B.aXe(d),$async$f3H)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f3H,w)},
h4i(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ck(A.eu(new B.f9z(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h_x(d,e,f,g,h,i,j){return new B.Xt(e,j,d,g,h,i,f,null)},
fbv(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fbv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.fby(A.M(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fbv)
case 3:r=f
t.R$=u
t.O$=0
s.R$=u
s.O$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbv,w)},
fc_(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fc_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.av()
t=new A.ap(C.as,u)
s=new A.ap(C.as,u)
r=new A.ap(C.as,u)
x=3
return A.b(A.c2(C.K,null,new B.fc1(A.M(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fc_)
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
return A.i($async$fc_,w)},
fKN(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aO
return A.bo(x,new A.b4(4,A.m(16),C.Z),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fm1(d,e){var x=0,w=A.j(y.H),v
var $async$fm1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Tk(e),$async$fm1)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eD()
case 1:return A.h(v,w)}})
return A.i($async$fm1,w)},
ftH:function ftH(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ftI:function ftI(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aao:function aao(d,e){this.a=d
this.b=e},
f9z:function f9z(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Xt:function Xt(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
ax0:function ax0(){this.c=this.a=this.d=null},
cYK:function cYK(d,e){this.a=d
this.b=e},
cYH:function cYH(d){this.a=d},
cYJ:function cYJ(d){this.a=d},
cYI:function cYI(d){this.a=d},
cYM:function cYM(){},
cYL:function cYL(d){this.a=d},
aaR:function aaR(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
azA:function azA(d,e){this.a=d
this.b=e},
aCI:function aCI(d,e,f){this.a=d
this.b=e
this.c=f},
fby:function fby(d,e,f){this.a=d
this.b=e
this.c=f},
fbw:function fbw(d){this.a=d},
fbx:function fbx(d,e,f){this.a=d
this.b=e
this.c=f},
fc1:function fc1(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fc0:function fc0(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c43(d,e,f,g,h){return B.hnU(d,e,f,g,h)},
hnU(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c43=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iG(r.dn(d,new B.c44(s,e,h,g,f,q),y.g),y.l),$async$c43)
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
return A.i($async$c43,w)},
aX9(d,e,f,g,h){return B.hnV(d,e,f,g,h)},
hnV(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aX9=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.asi("GET",d)
o=A.fCs()
if(o==null)o=new A.Ky(A.a([],y.W))
x=7
return A.b(o.eM(0,s).cK(0,C.E8),$async$aX9)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Bu(),$async$aX9)
case 8:q=j
if(J.ab(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.AK(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a7(m)
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
return A.i($async$aX9,w)},
aX8(d){return B.hnS(d)},
hnS(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aX8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uL(d,null).cK(0,C.nq),$async$aX8)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aF(0,A.iu(A.it(p.e)).c6(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a7(n)
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
return A.i($async$aX8,w)},
c42(d){return B.hnT(d)},
hnT(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c42=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.uL(d,null).cK(0,C.pd),$async$c42)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iu(A.it(q.e)).c6(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.a7(o)
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
return A.i($async$c42,w)},
c44:function c44(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jd:function jd(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Hg(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.ae("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
ho_(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a_(u,v))return B.Hg(C.a.aY(u,v.length))}return null},
ho0(d){var x=B.Hg(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hnW(){var x,w=$.p5(),v=J.e1(5,y.S)
for(x=0;x<5;++x)v[x]=w.aD(10)
return C.d.fO(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(24)]},
a59(d){return B.hnX(d)},
hnX(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a59=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.eY(d,null,!1,C.bE),$async$a59)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a7(p)
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
return A.i($async$a59,w)},
a5a(d,e){return B.hnY(d,e)},
hnY(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5a=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hx(d,e,!1,!1,C.cE,null),$async$a5a)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a7(p)
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
return A.i($async$a5a,w)},
AJ(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$AJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$AJ)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Hg(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5b(r),$async$AJ)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a59("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$AJ)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.Hg(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$AJ)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hnW()
x=14
return A.b(B.a5b(m),$async$AJ)
case 14:if(f!=null){x=12
break}l=new A.Q(Date.now(),0,!1).a4().ab()
x=15
return A.b(B.a5a("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AJ)
case 15:k=f
x=16
return A.b(B.a5a("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.E(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$AJ)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ap("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$AJ)
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
return A.i($async$AJ,w)},
a5b(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Hg(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a59("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5b)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5b,w)},
a5c(d,e,f,g){return B.ho1(d,e,f,g)},
ho1(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5c=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gaj(d)){v=!1
x=1
break}r=B.Hg(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5b(r),$async$a5c)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.c4a())>1048576||g.ba(d,new B.c4b())){v=B.Dw(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a5n("myCode",d,a0),$async$a5c)
case 4:u=a3
try{t=C.R.aF(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.ck(s)||J.ab(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ab(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Dw(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aXh(u,g.gJ(d),a0),$async$a5c)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.p5().aD(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dn(d,new B.c4c(),i)
h=A.B(h,h.$ti.k("ai.E"))
x=6
return A.b(B.aXa(A.E(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],i,y.z),q),$async$a5c)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5c,w)},
Dw(d,e,f,g,h){return B.hnZ(d,e,f,g,h)},
hnZ(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dw=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$Dw)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cG(a6,0,new B.c46())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.U(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.p5().aD(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.aD(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gai(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gT(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aJ(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Hk(a9,q)
a0=new A.J9(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Dw)
case 11:if(!b1){x=10
break}n=a0.gT(0)
if(J.ab(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.eQ().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oy(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a8G(a1.a,a4,"media",a1.d,a2).wj(m,n,new A.CR(!0,q.c)),$async$Dw)
case 12:J.cd(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a8(0),$async$Dw)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aNP(r),$async$Dw)
case 16:v=!1
x=1
break
case 15:f.push(A.E(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dn(a6,new B.c47(),e)
a1=A.B(a1,a1.$ti.k("ai.E"))
x=19
return A.b(B.aXa(A.E(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.Q(Date.now(),0,!1).a4().ab(),"status","pending"],e,d),a8),$async$Dw)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aNP(r),$async$Dw)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dw,w)},
aXa(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aXa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a59(t),$async$aXa)
case 3:s=g
r=y.aL.a(J.q(s==null?A.E(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c45(),y.P)
r=A.B(r,r.$ti.k("ai.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5a(t,A.E(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXa,w)},
M4(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$M4=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a59("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$M4)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.ck(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gT(q)
if(!n.b(l)){x=4
break}k=A.a_(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aXb(k,a0),$async$M4)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.aXg(h),$async$M4)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Tr(g,a0),$async$M4)
case 10:f=a3
if(f!=null&&J.cu(f)){m+=J.ab(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.Q(Date.now(),0,!1).a4().ab())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("G.E")
e=A.B(new A.a3(r,new B.c48(),q),n)
d=A.B(new A.a3(r,new B.c49(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.d9(d,0,A.dI(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a5a("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.E(["deliveries",q],p,o)),$async$M4)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$M4,w)},
aXb(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aXb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ck(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gT(u)
if(!r.b(p)){x=3
break}o=J.a8(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aN(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.hSg(k,j)
C.d.v(s,i)
x=5
return A.b(B.C3(l,m,"Received via My Code",t,e,i),$async$aXb)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aNP(s),$async$aXb)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXb,w)},
c4a:function c4a(){},
c4b:function c4b(){},
c4c:function c4c(){},
c46:function c46(){},
c47:function c47(){},
c45:function c45(){},
c48:function c48(){},
c49:function c49(){},
ftE(d,e){var x=0,w=A.j(y.H)
var $async$ftE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ck(A.eu(new B.ftF(e),!1,null,y.H)),$async$ftE)
case 2:return A.h(null,w)}})
return A.i($async$ftE,w)},
bAj(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bAj=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ck(A.eu(new B.ftG(g,e,f),!1,null,y.y)),$async$bAj)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAj,w)},
ftF:function ftF(d){this.a=d},
ftG:function ftG(d,e,f){this.a=d
this.b=e
this.c=f},
Th:function Th(d,e){this.c=d
this.a=e},
aAX:function aAX(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dJA:function dJA(d,e){this.a=d
this.b=e},
Tl:function Tl(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aB_:function aB_(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dKJ:function dKJ(d){this.a=d},
dKK:function dKK(d){this.a=d},
dKL:function dKL(d){this.a=d},
dKI:function dKI(d,e){this.a=d
this.b=e},
dKM:function dKM(d){this.a=d},
dKN:function dKN(d){this.a=d},
dKO:function dKO(d,e){this.a=d
this.b=e},
dKP:function dKP(d,e){this.a=d
this.b=e},
dKQ:function dKQ(d,e){this.a=d
this.b=e},
dKR:function dKR(d){this.a=d},
dKU:function dKU(){},
dKS:function dKS(d){this.a=d},
dKT:function dKT(d,e){this.a=d
this.b=e},
bg_:function bg_(){},
Ti:function Ti(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aAY:function aAY(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dJB:function dJB(d){this.a=d},
dJC:function dJC(d){this.a=d},
fFW(d){var x=d.hE
if(x>=0)return C.o.N(x)
return 10},
ho3(d){var x=d.kh
if(x>=0)return x
return 4.99},
ho2(d){var x=d.l0,w=y.N
w=x.iI(x,new B.c4e(),w,w)
return w},
fVF(d){var x=d.ki,w=y.N
w=x.iI(x,new B.c4f(),w,w)
return w},
aXe(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aXe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aXe)
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
return A.i($async$aXe,w)},
a5e(d,e){var x=0,w=A.j(y.H),v,u
var $async$a5e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a5e)
case 4:x=3
return A.b(g.ap("String","ngmy_doc_share_path_"+u,e),$async$a5e)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a5e,w)},
Tk(d){var x=0,w=A.j(y.H),v,u
var $async$Tk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$Tk)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Tk)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Tk,w)},
fFV(d,e){var x,w,v
if(B.ho3(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.ho2(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.c8(new A.Q(Date.now(),0,!1))},
aXc(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.fVF(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.c8(new A.Q(Date.now(),0,!1))},
fVG(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a_(B.fVF(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.c8(new A.Q(Date.now(),0,!1))?v:new A.Q(Date.now(),0,!1)
w.n(0,t,u.bM(A.dA(f,0,0,0,0,0).a).a4().ab())
d.ki=w},
an4(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$an4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$an4)
case 7:s=f
r=A.t(p)
r=A.f0(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$an4,w)},
an5(d){var x=0,w=A.j(y.H),v,u,t
var $async$an5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.an4(d),$async$an5)
case 3:u=f
x=5
return A.b(A.ay(),$async$an5)
case 5:x=4
return A.b(f.ap("Int","ngmy_doc_share_usage_"+t,u+1),$async$an5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$an5,w)},
an3(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$an3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fFW(d)
if(u<=0){v=!1
x=1
break}if(B.fFV(d,e)){v=!1
x=1
break}x=3
return A.b(B.an4(e),$async$an3)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$an3,w)},
aXd(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aXd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Hi(e,d),$async$aXd)
case 3:if(g){v=-1
x=1
break}u=B.fFW(d)
if(u<=0){v=-1
x=1
break}if(B.fFV(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.an4(e),$async$aXd)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXd,w)},
c4h(d,e,f){var x=0,w=A.j(y.y),v
var $async$c4h=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Hi(e,d),$async$c4h)
case 3:if(h){v=!1
x=1
break}v=B.an3(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4h,w)},
c4g(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c4g=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
x=3
return A.b(B.c4h(d,u,i.gSc()),$async$c4g)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4g,w)},
a5d(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a5d=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd6()
if(i.gSc()){v=!0
x=1
break}if(B.aXc(d,u)){v=!0
x=1
break}x=5
return A.b(A.l4(u,C.Q6),$async$a5d)
case 5:x=k?3:4
break
case 3:B.fVG(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a5d)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kJ(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Q6,"Doc Share for Organizations"),$async$a5d)
case 7:if(!k){v=!1
x=1
break}B.fVG(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a5d)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5d,w)},
c4e:function c4e(){},
c4f:function c4f(){},
fud(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fud=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fud)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f0p.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hH([r],e.c))
s.toString
$.f0p.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fud,w)},
hUr(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f0p.bm($.f0p,new B.fuf(d))},
fuf:function fuf(d){this.a=d},
f1M(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f1M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aJ(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hH([d],f))
s.toString
u=A.mR(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bO(C.jk,null,y.H),$async$f1M)
case 3:C.z1.f1(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eN.lZ()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f1M,w)},
adU(d,e,f){var x=0,w=A.j(y.H),v
var $async$adU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f0W.n(0,d,new B.aa5(A.bl(e,!0,v)))
x=3
return A.b(A.ay(),$async$adU)
case 3:x=2
return A.b(h.ap("String",d+"_manifest",C.R.an(A.E(["parts",e,"size",f],v,y.C),null)),$async$adU)
case 2:return A.h(null,w)}})
return A.i($async$adU,w)},
adO(d){return B.hDA(d)},
hDA(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$adO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f0W.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$adO)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aF(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.f5t(),y.N)
n=A.B(o,o.$ti.k("ai.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.aa5(r)
$.f0W.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$adO,w)},
Pf(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Pf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.co(e))
$.F9.n(0,d,u)
x=3
return A.b(B.PK(d,u),$async$Pf)
case 3:t=g
if(!t)$.al.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Pf,w)},
aLG(d){return B.hDy(d)},
hDy(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.F9.h(0,d)
if(n!=null&&!C.aG.gaj(n)){v=n
x=1
break}x=3
return A.b(B.PJ(d),$async$aLG)
case 3:p=f
if(p!=null&&!C.aG.gaj(p)){$.F9.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aLG)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cA.aG(r)
x=!J.ck(q)?9:10
break
case 9:B.Pf(d,q)
x=11
return A.b(J.hG(s,d),$async$aLG)
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
return A.i($async$aLG,w)},
hzO(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.co(J.eR(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.co(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.co(A.Bl(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.co(d)),y.K)
return A.fc(null,y.K)},
a_T(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a_T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bw,y.cf)
t=new A.bQ(u,y.aW)
s=y.aK
A.fF(r,"loadend",new B.f9L(r,t),!1,s)
A.fF(r,"error",new B.f9M(t),!1,s)
r.readAsArrayBuffer(d)
v=u.i2(0,C.Kv,new B.f9N())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a_T,w)},
aM_(d,e,f){return B.hFN(d,e,f)},
hFN(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aM_=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a_T(i),$async$aM_)
case 10:p=a0
if(p==null||p.length===0){$.al.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ab(j)
x=11
return A.b(B.PK(o,p),$async$aM_)
case 11:n=a0
if(!n){$.al.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cd(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ab(j)===0){x=1
break}x=12
return A.b(B.adU(k,j,s),$async$aM_)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.a7(h)
$.al.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aM_,w)},
aLZ(d,e,f){return B.hFM(d,e,f)},
hFM(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aLZ=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aM_(d,e,f),$async$aLZ)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a_T(f),$async$aLZ)
case 10:r=h
if(r==null||r.length===0){$.al.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.F9.n(0,s,r)
$.Pw.n(0,s,r)
x=11
return A.b(B.Pf(s,r),$async$aLZ)
case 11:q=h
if(!q)$.al.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.a7(m)
$.al.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aLZ,w)},
AK(d,e,f,g,h,i){return B.hoc(d,e,f,g,h,i)},
hoc(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$AK=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.aD(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jd(p,q,o,n,new A.Q(Date.now(),0,!1).a4().ab(),a0,f,B.aXk(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Pf(s,d),$async$AK)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$AK)
case 10:r=a2
x=11
return A.b(r.ap("String",s,C.cS.gcs().aG(d)),$async$AK)
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
return A.b(B.zO(e),$async$AK)
case 12:j=a2
J.cd(j,m)
x=13
return A.b(B.Fk(e,j),$async$AK)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$AK,w)},
Tm(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Tm=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.zO(d),$async$Tm)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.aD(99999)
n=p.b
l=o.type
l.toString
k=B.fVI(n,null,l)
l=o.size
l.toString
j=new A.Q(Date.now(),0,!1).a4().ab()
i=new B.jd(m,n,k,l,j,"From folder",null,B.aXk(),null)
$.aem.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a_T(o),$async$Tm)
case 7:g=a1
x=g!=null&&!C.aG.gaj(g)?8:10
break
case 8:$.F9.n(0,h,g)
$.Pw.n(0,h,g)
B.Pf(h,g)
x=9
break
case 10:x=11
return A.b(B.aLZ(d,m,o),$async$Tm)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Fk(d,t),$async$Tm)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tm,w)},
fG_(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fG_=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.fVI(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Hj(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gaj(s)){v=B.AK(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fG_,w)},
Hj(d,e,f,g,h,i){return B.hob(d,e,f,g,h,i)},
hob(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Hj=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.aD(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.J9(A.dI(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Hj)
case 8:if(!a6){x=7
break}m=j.gT(0)
if(J.ck(m)){x=6
break}J.fW(n,m)
o+=J.ab(m)
case 9:if(!(J.ab(n)>=1048576)){x=10
break}l=new Uint8Array(A.co(J.Qh(n,0,1048576)))
h=n
h.$flags&1&&A.ah(h,18)
A.ks(0,1048576,J.ab(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.PK(k,l),$async$Hj)
case 11:J.cd(q,k);++p
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
return A.b(j.a8(0),$async$Hj)
case 12:x=s.pop()
break
case 5:x=J.ab(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.PK(k,new Uint8Array(A.co(n))),$async$Hj)
case 15:J.cd(q,k)
case 14:if(J.ab(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.adU(r,q,g),$async$Hj)
case 16:f=new B.jd(i,a1,a0,g,new A.Q(Date.now(),0,!1).a4().ab(),a2,null,B.aXk(),null)
x=17
return A.b(B.zO(d),$async$Hj)
case 17:e=a6
J.cd(e,f)
x=18
return A.b(B.Fk(d,e),$async$Hj)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Hj,w)},
To(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$To=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aem.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a_T(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.adO(s),$async$To)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.PJ(u[o]),$async$To)
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
v=A.Bl(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Pw.h(0,s)
if(i==null)i=$.F9.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.qX(d,e),$async$To)
case 12:i=a0
if(i!=null&&!C.aG.gaj(i))$.Pw.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.Bl(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$To,w)},
fVI(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gak(x):""
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
qX(d,e){return B.hod(d,e)},
hod(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$qX=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Pw.h(0,f)
if(e==null)e=$.F9.h(0,f)
if(e!=null&&!C.aG.gaj(e)){v=e
x=1
break}s=$.aem.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a_T(s),$async$qX)
case 9:r=a3
if(r!=null&&!C.aG.gaj(r)){$.F9.n(0,f,r)
$.Pw.n(0,f,r)
B.Pf(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.a7(d)
$.al.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.adO(f),$async$qX)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.avP(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.PJ(g[l]),$async$qX)
case 16:k=a3
if(k!=null&&!C.aG.gaj(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.alI()
if(!C.aG.gaj(r)){$.F9.n(0,f,r)
$.Pw.n(0,f,r)
v=r
x=1
break}$.al.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aLG(f),$async$qX)
case 17:j=a3
if(j!=null&&!C.aG.gaj(j)){$.Pw.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.To(a0,a1,0,g),$async$qX)
case 20:i=a3
if(i!=null&&!C.aG.gaj(i)){h=new Uint8Array(A.co(i))
$.F9.n(0,f,h)
$.Pw.n(0,f,h)
B.Pf(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$qX,w)},
hog(d){var x,w,v=$.aem.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hoh(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hH([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hoe(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
anb(d,e,f,g,h){return B.hof(d,e,f,g,h)},
hof(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$anb=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aem.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a_T(s),$async$anb)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.qX(g,e),$async$anb)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ab(r)/2|0,J.ab(r))
n=$.eQ().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.hX(d).wj(h,r,new A.CR(!0,e.c)),$async$anb)
case 12:f.$2(J.ab(r),J.ab(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a7(l)
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
return A.i($async$anb,w)},
fVK(d,e,f,g,h){var x,w,v,u,t=$.fVJ
$.fVJ=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.aD(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c4s.n(0,t,new B.bsm(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.avP(u)))
return t},
fG0(d){var x=0,w=A.j(y.H)
var $async$fG0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fG0,w)},
Hk(d,e){var $async$Hk=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aem.h(0,h)
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
return A.pG(B.To(d,e,p,o<q?o:q),$async$Hk,w)
case 8:n=a1
x=n!=null&&!C.aG.gaj(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pG(A.EI(n),$async$Hk,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pG(B.adO("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Hk,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pG(B.PJ(h[l]),$async$Hk,w)
case 18:k=a1
x=k!=null&&!C.aG.gaj(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pG(A.EI(k),$async$Hk,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pG(B.qX(d,e),$async$Hk,w)
case 22:j=a1
x=j!=null&&!C.aG.gaj(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pG(A.EI(A.Bl(j,p,o<i?o:i)),$async$Hk,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pG(null,0,w)
case 2:return A.pG(t.at(-1),1,w)}})
var x=0,w=A.h3c($async$Hk,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.h5_(w)},
aXm(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aXm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c4s.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a2H(),$async$aXm)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXm,w)},
Tn(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Tn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c4s.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a2H(),$async$Tn)
case 3:u=r.w
if(u.length===0||r.z<=0){$.al.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.adU(r.c,u,r.z),$async$Tn)
case 4:t=new B.jd(r.b,r.d,r.e,r.z,new A.Q(Date.now(),0,!1).a4().ab(),r.f,r.r,B.aXk(),null)
u=r.a
x=5
return A.b(B.zO(u),$async$Tn)
case 5:s=f
J.cd(s,t)
x=6
return A.b(B.Fk(u,s),$async$Tn)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tn,w)},
a5k(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a5k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c4s.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.af2(u[s]),$async$a5k)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a5k,w)},
c4u(d,e,f){var x=0,w=A.j(y.H)
var $async$c4u=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxn(d,e,f),$async$c4u)
case 2:return A.h(null,w)}})
return A.i($async$c4u,w)},
c4v(d,e,f){var x=0,w=A.j(y.H)
var $async$c4v=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bxo(d,e,f),$async$c4v)
case 2:return A.h(null,w)}})
return A.i($async$c4v,w)},
Dx(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Dx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.zO(d),$async$Dx)
case 2:p=g
J.n7(p,new B.c4t(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.F9.W(0,v)
$.aem.W(0,e)
x=3
return A.b(B.adO(v),$async$Dx)
case 3:u=g
$.f0W.W(0,v)
x=4
return A.b(A.ay(),$async$Dx)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Dx)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Dx)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.af2(s[q]),$async$Dx)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.af2(v),$async$Dx)
case 13:x=14
return A.b(B.Fk(d,p),$async$Dx)
case 14:return A.h(null,w)}})
return A.i($async$Dx,w)},
aXl(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aXl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.qX(d,e),$async$aXl)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ae("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f1M(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXl,w)},
zO(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$zO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$zO)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aF(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.f9O(),y.U)
r=A.B(r,r.$ti.k("ai.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$zO,w)},
Fk(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Fk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Fk)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fdM(),y.P)
t=A.B(t,t.$ti.k("ai.E"))
x=3
return A.b(v.ap("String","ngmy_doc_share_index_v1_"+u,C.R.an(t,null)),$async$Fk)
case 3:return A.h(null,w)}})
return A.i($async$Fk,w)},
bxn(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zO(d),$async$bxn)
case 3:u=h
t=J.cD(u)
s=t.bi(u,new B.f8s(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aAO(f))
x=4
return A.b(B.Fk(d,u),$async$bxn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxn,w)},
bxo(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bxo=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.zO(d),$async$bxo)
case 3:u=h
t=J.cD(u)
s=t.bi(u,new B.f8t(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cAs(f))
x=4
return A.b(B.Fk(d,u),$async$bxo)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bxo,w)},
aa5:function aa5(d){this.a=d},
f5t:function f5t(){},
f9L:function f9L(d,e){this.a=d
this.b=e},
f9M:function f9M(d){this.a=d},
f9N:function f9N(){},
c4t:function c4t(d){this.a=d},
bsm:function bsm(d,e,f,g,h,i,j,k,l){var _=this
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
f9O:function f9O(){},
fdM:function fdM(){},
f8s:function f8s(d){this.a=d},
f8t:function f8t(d){this.a=d},
a5l(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a5l=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.ba(d,new B.c4y())?3:4
break
case 3:x=5
return A.b(B.aXn(d,e),$async$a5l)
case 5:u=g
if(u!=null){t=u.c
B.M6(d,u.b,e,t)}v=u
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
return A.b(B.aXi(s),$async$a5l)
case 10:case 9:if(g){v=new A.OC(1,D.PK,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Tp(d,e),$async$a5l)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Tu(!0,!0,d,e),$async$a5l)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.M6(d,D.yg,e,t)
v=new A.OC(p,D.yg,t)
x=1
break}v=B.c4x(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5l,w)},
Tp(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Tp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a5n(null,d,e),$async$Tp)
case 3:p=g
try{u=C.R.aF(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.ck(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ab(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aXh(p,d.length,e),$async$Tp)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c4v(e,C.d.gK(d).a,r.b),$async$Tp)
case 7:case 6:q=r.a
x=8
return A.b(B.M6(d,D.PK,e,q),$async$Tp)
case 8:v=new A.OC(d.length,D.PK,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tp,w)},
Tq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Tq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.m3(D.mf)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a5m(d,e),$async$Tq)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c4q(s,d,e,t),$async$Tq)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aXi(t),$async$Tq)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.qX(e,d),$async$Tq)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Tp(A.a([d],y.r),e),$async$Tq)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tq,w)},
Ts(){var x=0,w=A.j(y.H)
var $async$Ts=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fFU(),$async$Ts)
case 2:x=3
return A.b(B.aO5(),$async$Ts)
case 3:return A.h(null,w)}})
return A.i($async$Ts,w)},
a5m(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a5m=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aXk()
x=3
return A.b(B.c4u(e,d.a,u),$async$a5m)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5m,w)},
M6(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$M6=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.PK&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aY(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a5m(p,f),$async$M6)
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
return A.b(B.c4p(o,p,u,f),$async$M6)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c4q(o,p,f,t),$async$M6)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c4o(o,u,p,f),$async$M6)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$M6,w)},
aXn(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aXn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c4w(e,d),$async$aXn)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Tu(!1,!0,d,e),$async$aXn)
case 4:u=g
if(u!=null){t=u.b
v=new A.OC(u.a,D.yg,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXn,w)},
c4w(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c4w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.To(d,s,0,1),$async$c4w)
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
return A.i($async$c4w,w)},
c4x(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c4x=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a5n(null,d,e),$async$c4x)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.fVH(u)
if(t.length>800){v=null
x=1
break}v=new A.OC(d.length,D.djX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4x,w)},
anc(d,e,f){return B.hok(d,e,f)},
hok(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$anc=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cY(g,"\ufeff"))g=J.mp(g,1)
x=B.fFZ(g)?3:4
break
case 3:x=5
return A.b(B.c4r(g),$async$anc)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cY(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mp(g,13))
try{k=B.Dy(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a7(a1)
$.al.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cY(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mp(g,13))
u=9
x=12
return A.b(B.aXg(q),$async$anc)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Tr(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.a7(f)
$.al.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.cY(g,"NGMYDOCSYNC0|"))try{n=B.fFY(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Tr(n,a0)
v=k
x=1
break}catch(a1){m=A.a7(a1)
$.al.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cY(g,"N2|")){v=B.Hl(C.a.i(J.mp(g,3)),d,a0)
x=1
break}if(J.cY(g,"NGMYDOCSYNC2|")){v=B.Hl(C.a.i(J.mp(g,13)),d,a0)
x=1
break}i=A.ae("https?://\\S+",!0,!1,!1,!1).cA(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.ao(k,0,k.length-1)
else h=k
v=B.Hl(h,d,a0)
x=1
break}if(J.eV(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Tr(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$anc,w)},
Hl(d,e,f){return B.hoi(d,e,f)},
hoi(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hl=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ae("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.aY(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aY(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.ao(e,0,e.length-13)
f=A.ae("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.ct(A.t(s)+"/manifest.json",0,null)
q=A.ct(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aX8(r),$async$Hl)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aX8(A.ct(s,0,null)),$async$Hl)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c43(o,r,a1,n,a2),$async$Hl)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c42(q),$async$Hl)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Tr(l,a2),$async$Hl)
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
k=A.a7(d)
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
return A.i($async$Hl,w)},
a5n(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a5n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gT(u)
x=5
return A.b(B.qX(f,r),$async$a5n)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.E(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcs().aG(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.Q(Date.now(),0,!1).a4().ab())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.an(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5n,w)},
Tr(d,e){return B.hoj(d,e)},
hoj(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Tr=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.R.aF(0,a2,null)
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
break}m=e.gT(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ab(j)===0){x=7
break}i=C.cA.aG(j)
d=J.ab(q)!==0?q:null
x=9
return A.b(B.AK(i,a3,d,k,l,o),$async$Tr)
case 9:h=a5
if(h!=null)J.cd(n,h)
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
g=A.a7(a1)
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
return A.i($async$Tr,w)},
M5:function M5(d,e){this.a=d
this.b=e},
c4y:function c4y(){},
a_t(d){var x=A.M(d).ax.a===C.H,w=x?D.aba:D.a9l,v=x?D.acv:C.c,u=x?C.aO:C.M,t=x?C.bI:C.ak,s=x?D.aao:C.aK
return new A.aDW([w,s,v,u,t,x?C.f5:C.bS])},
h9O(d,e){var x=e?C.w.j(0.72):C.aV
return A.cg(null,x,!0,null,new B.fyc(e),d,null,!0,!0,y.N)},
c4d(d,e,f,g,h,i,j,k,l){return new B.Tj(e,l,d,f,k,j,g,h,i,null)},
Xv(d,e,f,g,h,i,j){return new B.baJ(g,h,j,e,i,d,f,null)},
fyc:function fyc(d){this.a=d},
Xs:function Xs(d,e){this.c=d
this.a=e},
ax_:function ax_(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
cYG:function cYG(d){this.a=d},
cYE:function cYE(d){this.a=d},
cYF:function cYF(d){this.a=d},
bs0:function bs0(){},
Tj:function Tj(d,e,f,g,h,i,j,k,l,m){var _=this
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
aAZ:function aAZ(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dKH:function dKH(d){this.a=d},
dK4:function dK4(d,e){this.a=d
this.b=e},
dK5:function dK5(d,e){this.a=d
this.b=e},
dJE:function dJE(d,e,f){this.a=d
this.b=e
this.c=f},
dJD:function dJD(d){this.a=d},
dJF:function dJF(d,e){this.a=d
this.b=e},
dJK:function dJK(d,e,f){this.a=d
this.b=e
this.c=f},
dJJ:function dJJ(d){this.a=d},
dKv:function dKv(d,e){this.a=d
this.b=e},
dKw:function dKw(d){this.a=d},
dK1:function dK1(d,e,f){this.a=d
this.b=e
this.c=f},
dJZ:function dJZ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dJI:function dJI(d){this.a=d},
dK9:function dK9(d){this.a=d},
dK8:function dK8(){},
dJO:function dJO(d){this.a=d},
dKs:function dKs(d,e){this.a=d
this.b=e},
dKt:function dKt(d,e){this.a=d
this.b=e},
dKu:function dKu(d,e){this.a=d
this.b=e},
dK_:function dK_(d,e){this.a=d
this.b=e},
dK0:function dK0(d,e){this.a=d
this.b=e},
dKl:function dKl(d,e){this.a=d
this.b=e},
dKh:function dKh(d){this.a=d},
dKg:function dKg(d){this.a=d},
dKi:function dKi(){},
dKj:function dKj(){},
dKk:function dKk(d,e){this.a=d
this.b=e},
dKm:function dKm(){},
dKn:function dKn(d){this.a=d},
dKf:function dKf(d,e){this.a=d
this.b=e},
dKa:function dKa(d){this.a=d},
dKb:function dKb(d){this.a=d},
dKc:function dKc(d){this.a=d},
dKd:function dKd(d){this.a=d},
dKe:function dKe(d){this.a=d},
dJL:function dJL(){},
dJM:function dJM(d){this.a=d},
dJN:function dJN(d,e){this.a=d
this.b=e},
dJH:function dJH(d,e){this.a=d
this.b=e},
dJG:function dJG(d,e,f){this.a=d
this.b=e
this.c=f},
dK2:function dK2(d){this.a=d},
dK3:function dK3(d,e,f){this.a=d
this.b=e
this.c=f},
dJX:function dJX(d,e){this.a=d
this.b=e},
dJT:function dJT(d){this.a=d},
dJQ:function dJQ(d,e,f){this.a=d
this.b=e
this.c=f},
dJU:function dJU(d){this.a=d},
dJV:function dJV(d){this.a=d},
dJW:function dJW(){},
dJY:function dJY(d,e){this.a=d
this.b=e},
dJR:function dJR(d){this.a=d},
dJP:function dJP(d,e,f){this.a=d
this.b=e
this.c=f},
dJS:function dJS(){},
dK7:function dK7(d){this.a=d},
dK6:function dK6(d,e){this.a=d
this.b=e},
dKr:function dKr(d,e){this.a=d
this.b=e},
dKo:function dKo(d){this.a=d},
dKp:function dKp(d,e){this.a=d
this.b=e},
dKq:function dKq(d){this.a=d},
dKE:function dKE(d){this.a=d},
dKC:function dKC(d){this.a=d},
dKD:function dKD(d){this.a=d},
dKF:function dKF(){},
dKG:function dKG(d,e){this.a=d
this.b=e},
dKy:function dKy(d,e){this.a=d
this.b=e},
dKz:function dKz(d,e,f){this.a=d
this.b=e
this.c=f},
dKx:function dKx(d,e,f){this.a=d
this.b=e
this.c=f},
dKA:function dKA(d,e){this.a=d
this.b=e},
dKB:function dKB(d,e){this.a=d
this.b=e},
awX:function awX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
baI:function baI(d,e,f){this.c=d
this.d=e
this.a=f},
cYC:function cYC(){},
cYD:function cYD(){},
aap:function aap(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
cZ_:function cZ_(){},
cYZ:function cYZ(d){this.a=d},
Xu:function Xu(d,e,f){this.c=d
this.d=e
this.a=f},
ax1:function ax1(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
cYW:function cYW(d){this.a=d},
cYX:function cYX(d,e,f){this.a=d
this.b=e
this.c=f},
cYY:function cYY(d,e){this.a=d
this.b=e},
cYU:function cYU(d,e){this.a=d
this.b=e},
cYS:function cYS(d){this.a=d},
cYQ:function cYQ(d){this.a=d},
cYN:function cYN(d){this.a=d},
cYT:function cYT(d){this.a=d},
cYP:function cYP(d){this.a=d},
cYV:function cYV(d){this.a=d},
cYR:function cYR(d){this.a=d},
cYO:function cYO(d){this.a=d},
Xr:function Xr(d,e,f){this.c=d
this.d=e
this.a=f},
awZ:function awZ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
cYz:function cYz(d){this.a=d},
cYy:function cYy(d,e){this.a=d
this.b=e},
cYA:function cYA(d){this.a=d},
cYx:function cYx(d,e){this.a=d
this.b=e},
cYB:function cYB(d){this.a=d},
cYw:function cYw(d,e){this.a=d
this.b=e},
cYs:function cYs(d){this.a=d},
cYt:function cYt(d){this.a=d},
cYu:function cYu(d,e){this.a=d
this.b=e},
cYv:function cYv(d){this.a=d},
Oe:function Oe(d,e,f){this.c=d
this.d=e
this.a=f},
ax4:function ax4(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
cZc:function cZc(d){this.a=d},
cZd:function cZd(d){this.a=d},
cZe:function cZe(d){this.a=d},
cZf:function cZf(d){this.a=d},
cZg:function cZg(d,e){this.a=d
this.b=e},
cZh:function cZh(d){this.a=d},
cZj:function cZj(d){this.a=d},
cZi:function cZi(d){this.a=d},
Xw:function Xw(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
ax2:function ax2(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
cZ8:function cZ8(d,e){this.a=d
this.b=e},
cZ9:function cZ9(d,e){this.a=d
this.b=e},
cZ0:function cZ0(d,e,f){this.a=d
this.b=e
this.c=f},
cZ1:function cZ1(d){this.a=d},
cZ2:function cZ2(){},
cZ7:function cZ7(){},
cZ3:function cZ3(d,e){this.a=d
this.b=e},
cZ4:function cZ4(d,e){this.a=d
this.b=e},
cZ5:function cZ5(d,e){this.a=d
this.b=e},
cZ6:function cZ6(d,e){this.a=d
this.b=e},
aan:function aan(d,e){this.c=d
this.a=e},
cYr:function cYr(d){this.a=d},
Xq:function Xq(d){this.a=d},
awY:function awY(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Xx:function Xx(d,e){this.c=d
this.a=e},
ax3:function ax3(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
cZb:function cZb(d){this.a=d},
cZa:function cZa(d){this.a=d},
baJ:function baJ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hol(){var x,w=$.p5(),v=J.e1(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aD(32)]
return"VT"+C.d.fO(v)},
M7(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$M7=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$M7)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eY("ngmy_doc_share_video_relay_v1",null,!1,C.bE),$async$M7)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a7(n)
$.al.$1("[doc share video cloud] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$M7,w)},
a5o(d){return B.hom(d)},
hom(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a5o=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$a5o)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hx("ngmy_doc_share_video_relay_v1",A.E(["relays",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cE,null),$async$a5o)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a7(q)
$.al.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5o,w)},
Tt(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Tt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.M7(),$async$Tt)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dU(A.a_(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.Q(Date.now(),0,!1).a4().ab())
r.n(s,d,t)
x=4
return A.b(B.a5o(s),$async$Tt)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Tt,w)},
Tu(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Tu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c_(),$async$Tu)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.U(f).k("a3<1>")
u=A.B(new A.a3(f,new B.c4A(),t),t.k("G.E"))}if(u.length===0){v=null
x=1
break}s=B.hol()
t=A.U(u).k("J<1,a1<n,aC>>")
r=A.B(new A.J(u,new B.c4B(s),t),t.k("ai.E"))
x=6
return A.b(B.M7(),$async$Tu)
case 6:q=i
J.aF(q,s,A.E(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=7
return A.b(B.a5o(q),$async$Tu)
case 7:x=8
return A.b(B.a5p(r,u,g,s),$async$Tu)
case 8:v=new A.bm6(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Tu,w)},
and(d){var x=0,w=A.j(y.y),v,u,t
var $async$and=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.M7(),$async$and)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.y(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$and,w)},
c4C(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c4C=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.M7(),$async$c4C)
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
return A.i($async$c4C,w)},
a5p(d,e,f,g){return B.hon(d,e,f,g)},
hon(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a5p=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ab(q)===0){x=8
break}x=10
return A.b(B.anb("media",r,new B.c4z(s,e,g),f,q),$async$a5p)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Tt(g,A.E(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a5p)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Tt(g,A.E(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$a5p)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a7(l)
$.al.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Tt(g,A.E(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a5p)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5p,w)},
Dy(d,e,f){return B.hoo(d,e,f)},
hoo(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Dy=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c_(),$async$Dy)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.and(b3),$async$Dy)
case 7:if(c0){x=6
break}x=8
return A.b(A.bO(C.ky,null,g),$async$Dy)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.and(b3),$async$Dy)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.M7(),$async$Dy)
case 10:e=c0
g=J.a8(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a8(d)
a2=A.aN(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ck(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a8(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gai(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gT(a2)
if(!a0.b(a7)){x=11
break}a8=J.a8(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ab(m)===0){x=11
break}u=14
a8=$.eQ().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oy(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a8G(a8.a,b0,"media",a8.d,a9).BP(m)
k=A.ct(l,0,null)
x=17
return A.b(B.aX9(k,n,o,s,b7),$async$Dy)
case 17:j=c0
if(j!=null){J.cd(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.a7(b4)
$.al.$1("[doc share video cloud] download "+A.t(o)+": "+A.t(i))
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
g=a1.gai(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gT(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ab(h)!==0?25:26
break
case 25:u=28
a2=$.eQ().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oy(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a8G(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Dy)
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
a0=A.dU(A.a_(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.Q(Date.now(),0,!1).a4().ab())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a5o(e),$async$Dy)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dy,w)},
c4A:function c4A(){},
c4B:function c4B(d){this.a=d},
c4z:function c4z(d,e,f){this.a=d
this.b=e
this.c=f},
aO5(){var x=0,w=A.j(y.H),v,u
var $async$aO5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hzf=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aO5)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aO5)
case 3:u=$.fKZ
u=u==null?null:u.bA(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aO5)
case 4:$.fKZ=$.hHA=$.hHB=null
return A.h(null,w)}})
return A.i($async$aO5,w)},
fdo(d){var x=0,w=A.j(y.H),v,u
var $async$fdo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a3m){x=1
break}u=new A.bg($.bw,y.d4)
d.c=new B.fdp(new A.bQ(u,y.aY))
x=3
return A.b(u.i2(0,C.hC,new B.fdq()),$async$fdo)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fdo,w)},
hHy(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.ho5(x):x},
fL2(d){var x=0,w=A.j(y.T),v,u,t
var $async$fL2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,13))
if(C.a.a_(u,"WR")){v=B.anf(u)
x=1
break}v=B.fFY(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fL2,w)},
fL1(d){var x=0,w=A.j(y.T),v,u,t
var $async$fL1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aY(t,14))
if(C.a.a_(u,"WR")){v=B.ang(u)
x=1
break}v=B.fFY(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fL1,w)},
ftZ(d){var x=0,w=A.j(y.T),v
var $async$ftZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ang(d),$async$ftZ)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ftZ,w)},
bye(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bye=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fL1(d),$async$bye)
case 3:q=f
if(q==null){x=1
break}t=C.R.aF(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a8(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ab(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bye,w)},
f2A(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f2A=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Tn(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.AK(d.alI(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f2A,w)},
Fm(d,e,f){return B.hJW(d,e,f)},
hJW(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Fm=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fL2(a1),$async$Fm)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aF(0,e,null)
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
break}p=J.ab(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aY(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hbD().aB2(D.d8v,null),$async$Fm)
case 4:l=d.fKZ=a4
f.a="file"
f.b="application/octet-stream"
k=new A.avP(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bw,y.b1)
l.y=new B.fdT(f,k,new B.fdU(f,a2,k,j,a0,p),a2,j,a0,p,new A.bQ(t,y.ch))
x=5
return A.b(l.a5w(0,new B.VB(r,"offer")),$async$Fm)
case 5:d=l
x=7
return A.b(l.aiz(0),$async$Fm)
case 7:x=6
return A.b(d.a5o(0,a4),$async$Fm)
case 6:x=8
return A.b(B.fdo(l),$async$Fm)
case 8:x=9
return A.b(l.ams(),$async$Fm)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hHy(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.an(A.E(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.anh(m,h),$async$Fm)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.fVH(h)
case 11:v=new A.blo(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Fm,w)},
fdp:function fdp(d){this.a=d},
fdq:function fdq(){},
fdU:function fdU(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fdT:function fdT(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fdS:function fdS(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hLN(d){switch(d){case"new":return D.e_X
case"checking":return D.e_Y
case"connected":return D.e0_
case"completed":return D.e_Z
case"failed":return D.e01
case"disconnected":return D.e02
case"closed":return D.aHM
case"count":return D.e00}return D.aHM},
hLO(d){switch(d){case"new":return D.aHN
case"gathering":return D.e03
case"complete":return D.a3m}return D.aHN},
hVV(d){switch(d){case"stable":return D.e04
case"have-local-offer":return D.e05
case"have-local-pranswer":return D.e07
case"have-remote-offer":return D.e06
case"have-remote-pranswer":return D.e08
case"closed":return D.aHT}return D.aHT},
hUb(d){switch(d){case"new":return D.aHQ
case"connecting":return D.aHR
case"connected":return D.aHS
case"closed":return D.a3n
case"disconnected":return D.aHP
case"failed":return D.aHO}return D.a3n},
a7F:function a7F(d,e){this.a=d
this.b=e},
N6:function N6(d,e){this.a=d
this.b=e},
VA:function VA(d,e){this.a=d
this.b=e},
N5:function N5(d,e){this.a=d
this.b=e},
E0:function E0(d,e){this.a=d
this.b=e},
cfn:function cfn(){},
fHF(d){var x=new B.E_()
x.a=d
x.b=!0
return x},
E_:function E_(){this.b=this.a=$},
a7E:function a7E(){},
art:function art(){},
VB:function VB(d,e){this.a=d
this.b=e},
fFU(){var x=0,w=A.j(y.H)
var $async$fFU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fFU,w)},
fFX(d,e,f){var x=0,w=A.j(y.T),v
var $async$fFX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.m3(D.mf))){v=null
x=1
break}v=B.fud(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fFX,w)},
fVH(d){var x,w=F.a8R.a2r(C.dF.aG(d),null)
if(w.length===0){x=C.dF.aG(d)
return C.cS.gcs().aG(x)}return C.cS.gcs().aG(w)},
ho4(d){var x,w,v=C.cA.aG(d)
try{x=C.c4.c6(0,F.a8Q.b8j(v,!1))
return x}catch(w){x=C.c4.c6(0,v)
return x}},
fFY(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.ho4(C.a.aY(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.aY(t,w.length)
try{v=C.c4.c6(0,C.cA.aG(x))
return v}catch(u){return x}}return null},
ho5(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aH(s,"\n")},
ho6(){var x,w=$.p5(),v=J.e1(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aD(32)]
return"DS"+C.d.fO(v)},
aXf(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aXf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.eY("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bE),$async$aXf)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a7(o)
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
return A.i($async$aXf,w)},
c4i(d,e){return B.ho7(d,e)},
ho7(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c4i=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hx("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cE,null),$async$c4i)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a7(o)
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
return A.i($async$c4i,w)},
aXi(d){var x=0,w=A.j(y.y),v,u,t
var $async$aXi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aXf(d),$async$aXi)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXi,w)},
aXh(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aXh=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.ho6()
r=C.a.i(f)
t=C.dF.aG(s)
x=3
return A.b(B.c4i(u,A.E(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcs().aG(t),"usesRemaining",999999,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$aXh)
case 3:if(!h){v=null
x=1
break}v=new A.Zx("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXh,w)},
aXg(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aXg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ab(o)===0){v=null
x=1
break}x=3
return A.b(B.aXf(o),$async$aXg)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ab(u)===0){v=null
x=1
break}try{t=C.c4.c6(0,C.cA.aG(u))
if(J.iQ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a7(n)
$.al.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aXg,w)},
c4j(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c4j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ab(q)===0){x=1
break}u=4
x=7
return A.b(X.bza("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cE),$async$c4j)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a7(p)
$.al.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c4j,w)},
aXj(d){var x=0,w=A.j(y.h),v,u,t
var $async$aXj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Hh(),$async$aXj)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a_(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aXj,w)},
an8(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$an8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$an8)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aXj(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$an8,w)},
an6(d,e){var x=0,w=A.j(y.H)
var $async$an6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$an6)
case 3:x=2
return A.b(g.ap("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$an6)
case 2:return A.h(null,w)}})
return A.i($async$an6,w)},
a5g(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a5g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$a5g)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Hh(),$async$a5g)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dg(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.E(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.C))
x=5
return A.b(A.a5f(s),$async$a5g)
case 5:x=6
return A.b(B.an6(f,u),$async$a5g)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5g,w)},
a5h(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5h=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$a5h)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Hh(),$async$a5h)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a8(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a_(r,y.N,y.z)
q=C.a.i(f)
if(q.length!==0){p.n(0,"schoolName",q)
p.n(0,"organizationName",q)}if(h!=null&&C.a.i(h).length>=4)p.n(0,"password",C.a.i(h))
x=e!=null&&C.a.i(e).length!==0?5:7
break
case 5:o=C.a.i(e.toLowerCase())
if(o!==t&&s.al(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.an6(g,q),$async$a5h)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a5f(u),$async$a5h)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5h,w)},
a5i(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a5i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$a5i)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Hh(),$async$a5i)
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
s=B.aXc(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a5i)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ap("String","ngmy_doc_share_school_session_"+s,C.R.an(A.E(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.Q(Date.now(),0,!1).a4().ab()],p,p),null)),$async$a5i)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5i,w)},
c4k(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c4k=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ab(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c4k)
case 7:s=f
p=A.t(n)
r=A.aT(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.R.aF(0,r,null)
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
return A.i($async$c4k,w)},
Hi(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Hi=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c4k(d),$async$Hi)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aXj(t),$async$Hi)
case 4:s=g
x=s==null||!J.y(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.an7(d),$async$Hi)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aXc(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.an7(d),$async$Hi)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
an7(d){var x=0,w=A.j(y.H)
var $async$an7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$an7)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$an7)
case 2:return A.h(null,w)}})
return A.i($async$an7,w)},
aXk(){var x,w=$.p5(),v=J.e1(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aD(32)]
return C.d.fO(v)},
a5j(d){var x=C.a.i(d),w=A.ae("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fFZ(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.ae("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ae("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c4n(d){return B.ho9(d)},
ho9(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c4n=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a5j(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.eY("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bE),$async$c4n)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a7(o)
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
return A.i($async$c4n,w)},
ana(d,e){return B.hoa(d,e)},
hoa(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ana=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a5j(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hx("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cE,null),$async$ana)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.a7(o)
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
return A.i($async$ana,w)},
c4p(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c4p=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5j(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ana(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c4p)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c4p,w)},
c4o(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c4o=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5j(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ana(u,A.E(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z)),$async$c4o)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c4o,w)},
c4q(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c4q=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a5j(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ana(u,A.E(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c4q,w)},
c4r(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c4r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fFZ(d)){v=null
x=1
break}x=3
return A.b(B.c4n(d),$async$c4r)
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
return A.i($async$c4r,w)},
a5q(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a5q=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$a5q)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.eY("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bE),$async$a5q)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a_(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.a7(n)
$.al.$1("[doc share webrtc stash] load: "+A.t(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a5q,w)},
ane(d){return B.hop(d)},
hop(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ane=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c_(),$async$ane)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hx("ngmy_doc_share_webrtc_signal_v1",A.E(["signals",d,"savedAt",new A.Q(Date.now(),0,!1).a4().ab()],y.N,y.z),!1,!1,C.cE,null),$async$ane)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.a7(q)
$.al.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ane,w)},
anf(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$anf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ab(j)===0||!J.cY(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c_(),$async$anf)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a5q(),$async$anf)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ab(q)===0){v=null
x=1
break}u=6
p=C.c4.c6(0,C.cA.aG(q))
if(J.iQ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dU(A.a_(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.Q(Date.now(),0,!1).a4().ab())
J.aF(s,j,o)
x=9
return A.b(B.ane(s),$async$anf)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.a7(i)
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
return A.i($async$anf,w)},
anh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$anh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c_(),$async$anh)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a5q(),$async$anh)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dU(A.a_(s,r,q),r,q)
r=C.dF.aG(C.a.i(e))
q.n(0,"answer",C.cS.gcs().aG(r))
q.n(0,"answerAt",new A.Q(Date.now(),0,!1).a4().ab())
t.n(u,p,q)
x=5
return A.b(B.ane(u),$async$anh)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anh,w)},
ang(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ang=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c_(),$async$ang)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a5q(),$async$ang)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ab(u)===0){v=null
x=1
break}try{r=C.c4.c6(0,C.cA.aG(u))
v=r
x=1
break}catch(n){t=A.a7(n)
$.al.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ang,w)},
amh(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$amh=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ah$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb6()
if(!(p instanceof A.qa)){v=null
x=1
break}x=3
return A.b(p.lU(e),$async$amh)
case 3:r=g
u=4
x=7
return A.b(r.hg(C.fQ),$async$amh)
case 7:q=g
o=q
o=o==null?null:J.f8(J.we(o))
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
return A.i($async$amh,w)},
hSg(d,e){var x,w,v=J.e1(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fsz(d){return B.hSi(d)},
hSi(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fsz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eQ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hX("media").JE(d,3600),$async$fsz)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a7(p)
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
return A.i($async$fsz,w)},
C3(d,e,f,g,h,i){var x=null
return B.hSf(d,e,f,g,h,i)},
hSf(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$C3=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.fVK(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fG0(r),$async$C3)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fsz(o),$async$C3)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a5k(r),$async$C3)
case 14:v=null
x=1
break
case 13:e=$.bw.h(0,C.aKS)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Ky(A.a([],g))
x=15
return A.b(d.eM(0,A.asi("GET",A.ct(n,0,null))).cK(0,C.E8),$async$C3)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a5k(r),$async$C3)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.J9(d)
u=19
case 22:x=24
return A.b(d.C(),$async$C3)
case 24:if(!b2){x=23
break}k=d.gT(0)
q+=J.ab(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aXm(r,k),$async$C3)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a8(0),$async$C3)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.Tn(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.a7(a4)
$.al.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a5k(r),$async$C3)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$C3,w)},
aNP(d){return B.hSh(d)},
hSh(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aNP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eQ().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.hX("media").W(0,d),$async$aNP)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.a7(p)
$.al.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aNP,w)}},D,T,L,U,V,W,X,M,Y,N
J=c[1]
A=c[0]
C=c[2]
O=c[39]
F=c[212]
H=c[103]
P=c[193]
E=c[186]
G=c[83]
Q=c[157]
R=c[104]
S=c[191]
I=c[216]
K=c[222]
B=a.updateHolder(c[21],B)
D=c[220]
T=c[156]
L=c[175]
U=c[63]
V=c[223]
W=c[69]
X=c[54]
M=c[82]
Y=c[221]
N=c[116]
B.cfo.prototype={
aB2(d,e){return this.cBY(d,e)},
cBY(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aB2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.E(["mandatory",A.T(t,t),"optional",A.a([A.E(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dU(r,s,t)
t.v(0,d)
u=new q(A.k8(A.cA(t)))
t=J.k(u)
v=B.ht_(C.cS.gcs().aG(new A.d2(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aB2,w)}}
B.b1r.prototype={
bth(d){var x=this,w=x.w
w.onclose=A.hc(new B.cfj(x))
w.onopen=A.hc(new B.cfk(x))
w.onmessage=A.hc(new B.cfl(x))
w.onbufferedamountlow=A.hc(new B.cfm(x))},
gdh(d){return this.x},
aeV(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aeV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.E_()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fHF(J.f8(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ed(d.arrayBuffer(),y.af),$async$aeV)
case 8:v=t.fHF(s.alv(f,0,null))
x=1
break
case 7:case 4:v=B.fHF(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aeV,w)}}
B.b1s.prototype={
bti(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hc(new B.cfp(x)))
w.addEventListener("icecandidate",A.hc(new B.cfq(x)))
w.addEventListener("iceconnectionstatechange",A.hc(new B.cfr(x)))
w.onicegatheringstatechange=A.hc(new B.cfs(x))
w.addEventListener("signalingstatechange",A.hc(new B.cft(x)))
if(!$.fOy())w.addEventListener("connectionstatechange",A.hc(new B.cfu(x)))
w.addEventListener("negotiationneeded",A.hc(new B.cfv(x)))
w.addEventListener("track",A.hc(new B.cfw(x)))},
aiz(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aiz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ed(s.createAnswer(A.k8(A.cA(A.T(y.N,y.z)))),y.aQ),$async$aiz)
case 3:t=f
v=new B.VB(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiz,w)},
a5o(d,e){return this.biS(0,e)},
biS(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a5o)
case 2:return A.h(null,w)}})
return A.i($async$a5o,w)},
a5w(d,e){return this.bj7(0,e)},
bj7(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a5w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ed(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a5w)
case 2:return A.h(null,w)}})
return A.i($async$a5w,w)},
ams(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$ams=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.VB(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ams,w)},
bA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bA,w)}}
B.aao.prototype={
a3(){return"_DocShareEntry."+this.b}}
B.Xt.prototype={
S(){return new B.ax0()},
gd6(){return this.c}}
B.ax0.prototype={
Z(){this.a0()
this.abF()},
abF(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXd(u.e,u.c),$async$abF)
case 2:t=e
if(v.c!=null)v.m(new B.cYK(v,t))
return A.h(null,w)}})
return A.i($async$abF,w)},
OO(){var x=0,w=A.j(y.H),v,u=this,t
var $async$OO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.an3(t.e,t.c,!1),$async$OO)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.eEj)
x=1
break}x=4
return A.b(B.a5e(u.a.c,"individual"),$async$OO)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a3Y(A.eu(new B.cYH(u),!1,null,y.H)),$async$OO)
case 5:case 1:return A.h(v,w)}})
return A.i($async$OO,w)},
I4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$I4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fbv(o),$async$I4)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a5i(o.e,r,s,q),$async$I4)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.eBo)
x=1
break}x=5
return A.b(B.a5e(u.a.c,"member"),$async$I4)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a3Y(A.eu(new B.cYJ(u),!1,null,y.H)),$async$I4)
case 6:case 1:return A.h(v,w)}})
return A.i($async$I4,w)},
xd(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a5d(t.e,o,t.f,t.r,t.w,s),$async$xd)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a5e(u.a.c,"org_owner"),$async$xd)
case 4:x=5
return A.b(B.an8(u.a.c),$async$xd)
case 5:r=e
x=r==null||!J.y(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fc_(o),$async$xd)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a5g(s,t,o,q.c),$async$xd)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.P(D.eBl)
x=1
break}x=10
return A.b(B.an8(u.a.c),$async$xd)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a3Y(A.eu(new B.cYI(u),!1,null,y.H)),$async$xd)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xd,w)},
B(d){var x,w,v,u=this,t=null,s=A.M(d).ax.a===C.H,r=s?C.j_:C.p4,q=B.fFW(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fG,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.eWt,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h1,t,t,t),C.ay,D.fdd,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bMz,C.n),t,t,t,t,C.ey,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lq(new B.cYM(),t),C.P,w,C.e_,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.aq,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aP:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.aa)
if(!u.a.x)C.d.v(p,A.a([new B.aaR(C.eO,C.auJ,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gc70(),t),C.aa],v))
p.push(new B.aaR(C.oh,C.a_p,"Team Member","Sign in with your organization access code + password",u.gc7R(),t))
p.push(C.aa)
p.push(new B.aaR(C.ahy,C.a0O,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gc7n(),t))
return A.cb(t,r,A.bq(!0,A.ci(A.v(p,C.ai,t,C.e,C.j,0,C.p),C.q,t,C.z,t,F.aeX,t,t,C.aj),!0,!1,C.ah,!0,!0),t,!1,!1,t,t)}}
B.aaR.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aE(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ev(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a5(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eA,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.oH,s,s,s),C.av,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.M(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.AD,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.c2,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ad)}}
B.azA.prototype={}
B.aCI.prototype={}
B.jd.prototype={
m3(d){var x=this.b,w=C.a.o6(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.aY(x,w+1).toLowerCase())},
gan3(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.a9(x/1024,1)+" KB"
if(x<1073741824)return C.k.a9(x/1048576,1)+" MB"
return C.k.a9(x/1073741824,2)+" GB"},
ac(){var x,w=this,v=A.T(y.N,y.z)
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
b7M(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jd(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cAs(d){return this.b7M(null,d)},
aAO(d){return this.b7M(d,null)}}
B.Th.prototype={
S(){return new B.aAX(new A.cq(null,y.A))},
gd6(){return this.c}}
B.aAX.prototype={
Z(){this.a0()
this.abG()},
abG(){var x=0,w=A.j(y.H),v,u=this,t
var $async$abG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AJ(u.a.c),$async$abG)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dJA(u,t))
case 1:return A.h(v,w)}})
return A.i($async$abG,w)},
abH(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$abH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fG(new A.fz(s)),$async$abH)
case 3:t=u.c
if(t!=null)t.I(y.q).f.P(D.eFd)
case 1:return A.h(v,w)}})
return A.i($async$abH,w)},
XU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$XU=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.amh(s.d,4),$async$XU)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rq(r,"ngmy_my_code_"+m+".png"),$async$XU)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a7(l)
o=s.c
if(o!=null)o.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$XU,w)},
afn(){var x=0,w=A.j(y.H),v,u=this,t
var $async$afn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a8f("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$afn)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afn,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.M(d).ax.a===C.H,n=o?C.j_:C.p4,m=o?C.c:C.M,l=A.eA(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lS
else if(q.e==null)x=A.au(new A.C(C.ey,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aI.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a_P,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aq,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a5(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.aex,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ci(A.v(A.a([x,C.mn,w,C.kj,new A.en(A.p(p,A.pq(p,p,!1,B.ho0(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.c2,p,p,p),q.d),C.aa,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kj,A.A(A.a([A.D(A.ex(M.AV,C.S0,q.gc05(),p),1),C.aw,A.D(A.dp(C.xI,C.a5I,q.gc06(),A.bk(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a4(1/0,p,A.ex(L.Zh,D.f9r,q.gcm4(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.q,p,C.z,p,U.KT,p,p,C.aj)
x=r}return A.cb(l,n,x,p,!1,!1,p,p)}}
B.Tl.prototype={
S(){return new B.aB_(new A.ap(C.as,$.av()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.aB_.prototype={
Z(){var x,w
this.a0()
x=this.a.e
w=B.Hg(x==null?"":x)
if(w!=null)this.d.saT(0,w)},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a1()},
XV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Hg(u.d.a.a)
if(t==null){u.m(new B.dKJ(u))
x=1
break}u.m(new B.dKK(u))
s=u.a
r=s.c
x=3
return A.b(B.a5c(s.d,new B.dKL(u),t,r),$async$XV)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dKM(u))
if(q){s=u.c
s.toString
A.a6(s,!1).M(!0)}case 1:return A.h(v,w)}})
return A.i($async$XV,w)},
a02(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a02=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dKN(r))
u=4
q=J.fm(r.a.d)
x=7
return A.b(B.qX(r.a.c,q),$async$a02)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dKO(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ab(r.a.d)>1?"NGMY Doc Share ("+J.ab(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.afM(p,m,l,j,k),$async$a02)
case 8:o=e
if(r.c!=null)r.m(new B.dKP(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a7(h)
if(r.c!=null)r.m(new B.dKQ(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dKR(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a02,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.M(d).ax.a===C.H,i=j?D.aba:D.a9l,h=j?D.acv:C.c,g=j?C.aO:C.M,f=j?C.bI:C.ak,e=j?D.aao:C.aK
i=[i,e,h,g,f,j?C.f5:C.bS]
x=A.M(d).ax.a===C.H
w=J.ab(l.a.d)
h=i[0]
g=i[3]
g=A.eA(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.an(k,A.e3(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.an(80,A.e3(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.r,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bBj,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a5(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eA,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.av,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fv,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a_P,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.tO(A.ae("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bg_()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.U,u==null,k,!0,C.q,k,A.aM(),l.d,k,k,k,k,k,2,A.bo(k,k,k,C.KM,k,k,"",k,!0,new A.b4(4,A.m(18),new A.az(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.az(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.z,!0,k,!0,k,!1,l.e,C.ag,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dKS(l),k,!1,k,k,!1,k,!0,k,C.a8,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lJ,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.r,1)
m=J.Kd(l.a.d,4)
m=A.B(new A.J(m,new B.dKT(x,new A.aDW(i)),m.$ti.k("J<ai.E,r>")),y.c7)
if(J.ab(l.a.d)>4)m.push(new A.C(C.m1,A.d("+ "+(J.ab(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bu,s,C.P,e,C.P,q,C.d4,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eu,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.ezU)
else q.push(A.W(C.l5,i[5],k,k,k,16))
q.push(C.aw)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dh(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bb,new A.o(u,k,s,t,k,k,C.n),C.io,k,k,k,C.eN,k,k,k)],r))}e=A.D(A.ci(A.v(e,C.ai,k,C.e,C.j,0,C.p),C.q,k,C.z,k,D.bma,k,k,C.aj),1)
u=l.f?k:l.gcm5()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(L.Zh,D.fam,u,A.dd(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ce,k,new A.b7(q,C.Z),new A.az(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc07()
t=A.bk(C.aD,k,k,0,C.c,k,C.mL,k,new A.b7(A.m(16),C.Z),k,k,k)
return A.cb(g,h,new A.am(C.X,k,C.a9,C.q,A.a([f,v,A.bq(!0,A.mI(new B.dKU(),A.v(A.a([e,new A.C(D.blF,A.v(A.a([s,C.P,i,C.aa,A.bM(l.f?C.r1:D.f8R,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cp,C.VN,k,new A.bm(0,1,y.X),y.i),!0,!1,C.ah,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bg_.prototype={
o2(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ae("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ae("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h6(C.bt,v.length),C.aM)}}
B.Ti.prototype={
S(){return new B.aAY()}}
B.aAY.prototype={
Z(){var x,w,v,u=this
u.a0()
x=u.a
w=x.e
v=$.av()
u.d!==$&&A.aR()
u.d=new A.ap(new A.bb(w,C.b0,C.aM),v)
x=x.d
u.e!==$&&A.aR()
u.e=new A.ap(new A.bb(x,C.b0,C.aM),v)
u.f!==$&&A.aR()
u.f=new A.ap(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.R$=$.av()
v.O$=0
v=w.e
v===$&&A.c()
v.R$=x
v.O$=0
v=w.f
v===$&&A.c()
v.R$=x
v.O$=0
w.a1()},
abI(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$abI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dJB(r))
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
return A.b(B.a5h(p,m,n,o,C.a.i(l).length===0?null:l),$async$abI)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.P(D.eEP)
s=[1]
x=4
break}p.I(y.q).f.P(D.eDs)
p=r.c
p.toString
A.a6(p,!1).M(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dJC(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$abI,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.M(d).ax.a===C.H?C.j_:C.p4,q=A.eA(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.f1W,s,s,s,1,s,!0),p=A.p(s,D.bel,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Fy,C.n),s,s,s,s,C.a8,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.U,!1,s,!0,C.q,s,A.aM(),o,s,s,s,s,s,2,D.bI6,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.U,!1,s,!0,C.q,s,A.aM(),x,s,s,s,s,s,2,D.bI1,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.U,!1,s,!0,C.q,s,A.aM(),w,s,s,s,s,s,2,D.bIh,C.z,!0,s,!0,s,!1,s,C.ag,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a8,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc08()
u=A.bk(C.aD,s,s,s,s,C.fH,s,s,s,s,s,s)
return A.cb(q,r,A.ci(A.v(A.a([p,C.d4,o,C.aa,x,C.aa,w,C.mn,A.bM(t.r?C.r1:C.aNn,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.q,s,C.z,s,C.a8,s,s,C.aj),s,!1,!1,s,s)}}
B.aa5.prototype={}
B.bsm.prototype={
a2H(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a2H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.co(r.alI()))
x=3
return A.b(B.PK(t,s),$async$a2H)
case 3:if(!e){$.al.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a2H,w)},
gd6(){return this.a}}
B.M5.prototype={
a3(){return"NgmyDocShareQrMode."+this.b}}
B.Xs.prototype={
S(){return new B.ax_(new A.ap(C.as,$.av()),A.kc(!0,null,!0,!0,null,null,!1))}}
B.ax_.prototype={
Z(){this.a0()
$.aU.x1$.push(new B.cYG(this))},
q(){var x=this.d
x.R$=$.av()
x.O$=0
this.e.q()
this.a1()},
c0e(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).M(x)
return null},
B(d){var x=this,w=null,v=B.a_t(d),u=x.a.c,t=u?C.i3:v.a[2],s=u?C.c:v.a[3],r=u?C.aP:v.a[4],q=u?C.j_:v.a[0],p=A.m(24),o=A.I(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fG,32)],n),l=A.p(w,T.ak7,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cv,16)],n),C.akV,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.tO(A.ae("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bs0()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.U,!1,w,!0,C.q,w,A.aM(),x.d,w,w,w,w,w,2,A.bo(w,w,w,C.Ek,w,w,"",w,!0,new A.b4(4,A.m(16),new A.az(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aSQ),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.z,!0,w,!1,w,!1,x.e,C.ag,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.cYE(x),w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lJ,w,w,w,w)
f=f[1]
f=A.D(A.dX(C.n5,new B.cYF(d),A.dd(w,w,w,w,w,w,w,w,w,s,w,w,C.ce,w,new A.b7(A.m(14),C.Z),new A.az(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eB(w,C.K,new A.cZ(Q.J_,A.bW(new A.C(C.wS,A.v(A.a([l,C.aN,k,C.P,j,C.e_,i,C.e_,A.A(A.a([f,C.aw,A.D(A.bW(A.aE(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.dV9,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc0d(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ad),new A.o(w,w,w,h,n,K.MA,C.n),C.bc),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bc),w),w,w,w,C.KV,C.cZ,w,w,w)}}
B.bs0.prototype={
o2(d,e){return e.aiu(e.a.toUpperCase())}}
B.Tj.prototype={
S(){return new B.aAZ(A.a([],y.r),A.b0(y.N))},
gd6(){return this.c}}
B.aAZ.prototype={
Z(){var x=this
x.a0()
x.t3()
x.w=A.dF(C.j3,new B.dKH(x))},
q(){var x=this.w
if(x!=null)x.a8(0)
B.Ts()
this.a1()},
ZV(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ZV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.M4(u.a.c),$async$ZV)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.zO(u.a.c),$async$ZV)
case 4:u.m(new s.dK4(u,e))
u.hN("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$ZV,w)},
t3(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$t3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.M4(u.a.c),$async$t3)
case 3:t=e
x=4
return A.b(B.zO(u.a.c),$async$t3)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dK5(u,s))
if(t>0)u.hN("Received "+A.t(t)+" file(s) via My Code.")
u.Mj(u.d)
B.AJ(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$t3,w)},
Mj(d){return this.bx9(d)},
bx9(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Mj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a5m(r,u.a.c),$async$Mj)
case 8:p=f
if(u.c==null){x=1
break}new B.dJE(u,r,p).$0()
u.c.e3()
case 7:if(!(C.a.a_(r.c,"video/")||r.m3(D.mf))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Tq(r,u.a.c),$async$Mj)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.zO(u.a.c),$async$Mj)
case 12:u.m(new o.dJF(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Mj,w)},
MG(d){return this.bDc(d)},
bDc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$MG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a5m(d,u.a.c),$async$MG)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dJK(u,d,t))
x=6
return A.b(A.fG(new A.fz(t)),$async$MG)
case 6:u.hN("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fG(new A.fz(r.toUpperCase())),$async$MG)
case 7:u.hN("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$MG,w)},
hN(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.P(A.b2(x,x,x,x,x,C.q,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
t4(d,e){return this.cwb(d,e)},
cwb(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$t4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dKv(r,e))
u=3
x=6
return A.b(d.$0(),$async$t4)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dKw(r))
$.eN.lZ()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$t4,w)},
gaRx(){var x=this.a
return x.f||x.r||x.w},
H4(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$H4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaRx()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c4g(s,n,r,q,o,t),$async$H4)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hN("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fm1(o,u.a.c),$async$H4)
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
return A.b(B.C5(s,o,r,q,n,t),$async$H4)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$H4,w)},
Z0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$Z0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.an8(u.a.c),$async$Z0)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hN("No organization portal found.")
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
return A.b(A.a6(t,!1).ck(A.eu(new B.dK1(u,r,q),!1,null,y.H)),$async$Z0)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Z0,w)},
a_5(d){return this.cfQ(d)},
cfP(){return this.a_5(1)},
cfQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a_5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaRx()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.an5(u.a.c),$async$a_5)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a_5,w)},
a9M(d,e,f){return this.bTh(d,e,f)},
bTh(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$a9M=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hN(e)
x=1
break}x=3
return A.b(u.t4(new B.dJZ(u,d,null,e,f),"Uploading\u2026"),$async$a9M)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9M,w)},
bxi(){B.h94(!1,new B.dJI(this))
return},
ckI(){this.m(new B.dK9(this))},
avC(){var x=0,w=A.j(y.H),v=this
var $async$avC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bxi()
return A.h(null,w)}})
return A.i($async$avC,w)},
a9I(){var x=0,w=A.j(y.H),v=this
var $async$a9I=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.t4(new B.dJO(v),"Importing\u2026"),$async$a9I)
case 2:return A.h(null,w)}})
return A.i($async$a9I,w)},
QN(d){return this.cvF(d)},
cvF(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.m3(D.mf)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ck(A.eu(new B.dKs(u,d),!1,null,y.H)),$async$QN)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.m3(D.Ou)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ck(A.eu(new B.dKt(u,d),!1,null,y.H)),$async$QN)
case 8:x=1
break
case 7:x=u.bTZ(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ck(A.eu(new B.dKu(u,d),!1,null,y.H)),$async$QN)
case 11:x=1
break
case 10:u.hN("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$QN,w)},
bTZ(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.o6(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.ctF,C.a.aY(x,w+1).toLowerCase())},
ad7(d){return this.c74(d)},
c74(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ad7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.m3(D.mf)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ck(A.eu(new B.dK_(u,d),!1,null,y.H)),$async$ad7)
case 5:x=1
break
case 4:u.m(new B.dK0(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ad7,w)},
Qb(d){return this.cnx(d)},
cnx(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hN("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oK(t,s.c,s.f),$async$Qb)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.t4(new B.dKl(u,d),"Preparing QR\u2026"),$async$Qb)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Qb,w)},
afN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$afN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dKm(),A.U(t).k("J<1,n>")).fA(0)}t=u.d
s=A.U(t).k("a3<1>")
r=A.B(new A.a3(t,new B.dKn(q),s),s.k("G.E"))
if(r.length===0){u.hN("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Qb(r),$async$afN)
case 3:case 1:return A.h(v,w)}})
return A.i($async$afN,w)},
afG(d){return this.cn6(d)},
cn6(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_t(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dKf(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$afG)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.QN(d)
break
case"qr":u.Qb(A.a([d],y.r))
break
case"send_my_code":u.c7G(A.a([d],y.r))
break
case"save":u.af1(d)
break
case"delete":u.HQ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$afG,w)},
VW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$VW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.J(t,new B.dJL(),A.U(t).k("J<1,n>")).fA(0)}t=u.d
s=A.U(t).k("a3<1>")
r=A.B(new A.a3(t,new B.dJM(q),s),s.k("G.E"))
if(r.length===0){u.hN("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oK(t,s.c,s.f),$async$VW)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.t4(new B.dJN(u,r),"Preparing file\u2026"),$async$VW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$VW,w)},
aee(d){return this.cel(d)},
cel(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$aee=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h9O(d,!1),$async$aee)
case 3:s=f
r=s==null
q=B.a5j(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hN("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aee,w)},
ade(){var x=0,w=A.j(y.H),v=this,u
var $async$ade=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.ftE(u,v.a.c),$async$ade)
case 2:return A.h(null,w)}})
return A.i($async$ade,w)},
bxh(){B.h94(!1,new B.dJH(this,null))
return},
I3(d,e){return this.c7H(d,e)},
aX9(d){return this.I3(null,d)},
c7G(d){return this.I3(d,null)},
c7H(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$I3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a3<1>")
k=A.B(new A.a3(p,new B.dK2(s),o),o.k("G.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wx.c2().al1(!0,C.Xt,!1),$async$I3)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.t4(new B.dK3(l,s,r),"Preparing\u2026"),$async$I3)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a7(j)
$.al.$1("[doc share send my code pick] "+A.t(q))
s.hN("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hN("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bAj(p,l,e,s.a.c),$async$I3)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hN("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$I3,w)},
Hk(d){return this.bT4(d)},
bT4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Hk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.ho_(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aX9(t),$async$Hk)
case 8:x=6
break
case 7:u.hN("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ae("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hN("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.t4(new B.dJX(u,d),"Receiving video\u2026"),$async$Hk)
case 11:x=1
break
case 10:x=12
return A.b(u.t4(new B.dJY(u,d),"Receiving\u2026"),$async$Hk)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Hk,w)},
Dh(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Dh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.C_()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.aee(t),$async$Dh)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Hk(s),$async$Dh)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ck(A.eu(new B.dK7(u),!1,null,y.N)),$async$Dh)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.t3(),$async$Dh)
case 10:x=1
break
case 9:x=11
return A.b(u.Hk(C.a.i(r)),$async$Dh)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Dh,w)},
af1(d){return this.cji(d)},
cji(d){var x=0,w=A.j(y.H),v=this
var $async$af1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.t4(new B.dK6(v,d),"Saving\u2026"),$async$af1)
case 2:return A.h(null,w)}})
return A.i($async$af1,w)},
HQ(d){return this.bFu(d)},
bFu(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$HQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kT(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$HQ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c4j(t),$async$HQ)
case 6:case 5:s=d.a
x=7
return A.b(B.Dx(u.a.c,s),$async$HQ)
case 7:u.r.W(0,s)
x=8
return A.b(u.t3(),$async$HQ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$HQ,w)},
afT(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a_t(r)
r=u.c
r.toString
x=3
return A.b(A.c2(C.K,null,new B.dKr(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$afT)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ade()
break
case"import":u.a9I()
break}case 1:return A.h(v,w)}})
return A.i($async$afT,w)},
c0b(d){var x=d.c
if(C.a.a_(x,"video/")||d.m3(D.mf))return C.pt
if(C.a.a_(x,"image/")||d.m3(D.Ou))return C.td
if(C.a.t(x,"pdf"))return E.M8
return D.ahZ},
B(d){var x,w,v=this,u=null,t=B.a_t(d),s=t.a,r=s[0],q=s[3],p=A.aG(u,u,u,u,C.Fq,u,u,u,new B.dKC(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aG(u,u,u,u,D.bBP,u,u,u,v.e?u:v.gc7o(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gckH()
n.push(A.aG(u,u,u,u,A.W(v.r.a===x?D.bwd:E.ain,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aG(u,u,u,u,C.Ze,u,u,u,v.e?u:v.gc0c(),u,u,u,u,"Scan QR",u))
n.push(A.aG(u,u,u,u,C.nB,u,u,u,v.e?u:v.gaYe(),u,u,u,u,"Upload files",u))
n.push(A.aG(u,u,u,u,D.bDv,u,u,u,v.e?u:new B.dKD(v),u,u,u,u,"More options",u))
q=A.eA(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lq(new B.dKE(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.an(u,A.e3(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.M(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.an(40,A.e3(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.M(d).ax.a===C.H?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m7(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.awX(C.j9,s,!0,t,w?u:v.gcny(),u),1)
x.push(new A.C(D.bks,A.mI(new B.dKF(),A.A(A.a([s,C.aw,A.D(new B.awX(C.uS,"Export",!1,t,w?u:v.gbIU(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cp,C.ip,u,new A.bm(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.baI(t,v.e?u:v.gaYe(),u)
else s=A.jY(!0,u,u,new B.dKG(v,t),s,u,D.bkk,u,u,!1,!1)
x.push(A.D(s,1))
return A.cb(q,r,new A.am(C.X,u,C.a9,C.q,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.awX.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aD,t,t,0,C.c,t,C.uB,t,new A.b7(s,C.Z),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cb,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dd(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uB,t,new A.b7(s,C.Z),new A.az(v,1,C.r,-1),t,t,t,t)
return A.ex(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eT,t,t,t),u.r,v)}}
B.baI.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.r,1),s=y.i
return A.au(A.mI(new B.cYC(),new A.C(E.WG,A.v(A.a([A.mI(new B.cYD(),A.p(x,A.W(C.xb,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a5(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.iq,x,new A.bm(0.86,1,w),s),C.e_,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e_,A.dp(C.nB,D.fdv,this.d,A.bk(C.aD,x,x,x,C.c,x,C.WB,x,new A.b7(A.m(16),C.Z),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cp,C.zY,x,new A.bm(0,1,w),s),x,x,x)}}
B.aap.prototype={
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
o=!C.a.a_(p,"video/")
if(!o||i.m3(D.mf))p=D.cZS
else{p=C.a.a_(p,"image/")||i.m3(D.Ou)
n=y.O
p=p?A.a([C.cY,C.aD],n):A.a([C.aI.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a5(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gan3()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.m3(D.mf))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.D(A.v(A.a([q,C.av,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aG(j,j,j,j,A.W(C.fE,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.m3(D.mf)))l.push(A.fDL(C.aD,!1,j,j,j,!1,j,j,new B.cYZ(k),j,j,new A.b7(A.m(5),C.Z),j,j,!1,u))
x=A.W(C.ny,x[4],j,j,j,j)
l.push(A.aG(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mI(new B.cZ_(),new A.C(C.e3,A.aE(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.W8,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.r,-1)),j,j,C.ad),j),C.cp,h,new A.cz("docshare_row_"+i.a,y.aw),new A.bm(0,1,y.X),y.i)}}
B.Xu.prototype={
S(){return new B.ax1()},
gd6(){return this.c}}
B.ax1.prototype={
Z(){this.a0()
this.x4()},
q(){B.hoe(this.e)
this.a1()},
x4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$x4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.qX(o.c,o.d),$async$x4)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gaj(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hoh(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hog(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.cYW(s))
x=1
break}s.m(new B.cYX(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a7(l)
if(s.c==null){x=1
break}s.m(new B.cYY(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$x4,w)},
a01(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a01=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.qX(t.c,t.d),$async$a01)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(D.eBV)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.afM(q,s,t.length===0?"image/jpeg":t,null,s),$async$a01)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a01,w)},
bSY(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kd(u,C.A,v,new B.cYU(w,t),C.fO,C.ds,!0,v,v,v,v)
else if(t!=null&&!C.aG.gaj(t))x=A.fI(t,C.A,v,new B.cYV(w),C.fO,C.ds,!0,v,!1,v,v)
else return C.bG
return A.tX(C.ah,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a_t(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aG(u,u,u,u,C.AW,u,u,u,v.gb0X(),u,u,u,u,"Share / save",u))
r=A.eA(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.D5
else{q=v.r
if(q!=null)t=new A.C(C.ey,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ey,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dp(C.AW,D.eYE,v.gb0X(),A.bk(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bSY()}return A.cb(r,s,A.au(t,u,u,u),u,!1,!1,u,u)}}
B.Xr.prototype={
S(){return new B.awZ(A.agy(),C.bw,C.bw)},
gd6(){return this.c}}
B.awZ.prototype={
Z(){var x,w,v=this
v.a0()
x=v.d
w=x.CW
new A.fr(w,A.a2(w).k("fr<1>")).hZ(new B.cYz(v))
x.gcJ3().hZ(new B.cYA(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fr(x,A.a2(x).k("fr<1>"))}if(x==null)x=C.aYG
x.hZ(new B.cYB(v))
v.x4()},
x4(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$x4=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.qX(p.c,p.d),$async$x4)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.cYs(s))
x=1
break}x=8
return A.b(s.d.Bi(0,new A.a1B(r,s.a.d.c)),$async$x4)
case 8:if(s.c==null){x=1
break}s.m(new B.cYt(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a7(n)
if(s.c==null){x=1
break}s.m(new B.cYu(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$x4,w)},
XW(){var x=0,w=A.j(y.H),v=this,u
var $async$XW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.fT(0),$async$XW)
case 5:x=3
break
case 4:x=6
return A.b(u.i1(0),$async$XW)
case 6:case 3:return A.h(null,w)}})
return A.i($async$XW,w)},
aPu(d){var x=d.a
return C.a.aU(C.o.u(C.o.am(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.am(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a_t(d),m=C.o.am(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eA(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.D5
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bxc,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.MA,C.n),o,88,o,o,o,o,o,88)
t=A.kP(C.aD,o,o,m,0,new B.cYv(p),C.o.D(C.o.am(p.w.a,1000),0,m))
x=A.d(p.aPu(p.w)+" / "+p.aPu(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aD,o,o,o,o,D.eyq,o,o,o,o,o,o)
r=p.f
q=A.W(r?H.xm:C.iN,o,o,o,o,o)
x=A.v(A.a([u,C.kj,t,x,C.d4,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc0f(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.cb(v,w,A.au(new A.C(C.t_,x,o),o,o,o),o,!1,!1,o,o)}}
B.Oe.prototype={
S(){return new B.ax4()},
gd6(){return this.c}}
B.ax4.prototype={
Z(){this.a0()
this.Oa()},
Oa(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Oa=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fFX(o.c,o.d,new B.cZc(s)),$async$Oa)
case 7:r=e
if(r==null||r.length===0){s.m(new B.cZd(s))
x=1
break}s.e=r
q=O.hKL(r)
if(q==null){s.m(new B.cZe(s))
x=1
break}s.d=q
q.aL(0,s.gaWY())
x=8
return A.b(q.hY(0).cK(0,C.qp),$async$Oa)
case 8:if(s.c==null){x=1
break}s.m(new B.cZf(s))
x=9
return A.b(q.pg(0),$async$Oa)
case 9:q.rH(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a7(m)
if(s.c==null){x=1
break}s.m(new B.cZg(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Oa,w)},
c5H(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.cZh(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.C1(0,x.gaWY())
w=x.d
if(w!=null)w.q()
B.hUr(x.e)
x.a1()},
abL(){var x=0,w=A.j(y.H),v=this,u,t
var $async$abL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aXl(u.c,u.d),$async$abL)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$abL,w)},
B(d){var x,w,v,u=this,t=null,s=B.a_t(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eA(A.a([A.aG(t,t,t,t,C.oo,t,t,t,u.gc09(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ib(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.D5
else{q=u.r
if(q!=null)s=new A.C(C.ey,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ag2(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fE(x,new A.am(C.A,t,C.a9,C.q,A.a([new A.zk(s,t),A.aH(t,A.Cf(A.p(t,A.W(q?H.xm:C.iN,C.c,t,t,t,48),C.f,t,t,new A.o(C.aV,t,t,v,t,t,C.n),t,t,t,t,C.c2,t,t,t),C.bb,C.a1,w),C.z,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.cZj(u),t,t,t,t,t,t,!1,C.ac)],o),t),t)}else s=C.bG}}return A.cb(p,r,A.au(s,t,t,t),t,!1,!1,t,t)}}
B.Xw.prototype={
S(){return new B.ax2(new A.cq(null,y.A))}}
B.ax2.prototype={
gcvW(){var x,w,v=this.a
if(v.e!==D.PL)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcvD(){var x,w,v=this.a
if(v.e!==D.yg)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aY(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a0()
x=v.gcvW()
if(x!=null){v.Pc(x)
v.e=A.dF(R.Ec,new B.cZ8(v,x))}w=v.gcvD()
if(w!=null){v.Pb(w)
v.f=A.dF(C.hc,new B.cZ9(v,w))}},
q(){var x=this.e
if(x!=null)x.a8(0)
x=this.f
if(x!=null)x.a8(0)
this.a1()},
Pb(d){return this.ccz(d)},
ccz(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Pb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.and(d),$async$Pb)
case 3:t=f
x=4
return A.b(B.c4C(d),$async$Pb)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.cZ0(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Pb,w)},
Pc(d){return this.ccA(d)},
ccA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.ftZ(d),$async$Pc)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bye(t),$async$Pc)
case 4:if(u.c==null){x=1
break}u.m(new B.cZ1(u))
u.c.I(y.q).f.P(D.aKt)
case 1:return A.h(v,w)}})
return A.i($async$Pc,w)},
gbXP(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc0a(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a_O(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_O=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.C_()){t=u.c
if(t!=null)t.I(y.q).f.P(D.eEZ)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ck(A.eu(new B.cZ2(),!1,null,y.N)),$async$a_O)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bye(s),$async$a_O)
case 4:t=u.c
if(t!=null)t.I(y.q).f.P(D.aKt)
case 1:return A.h(v,w)}})
return A.i($async$a_O,w)},
a7H(d){return this.bDd(d)},
bDd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fG(new A.fz(C.d.aH(t,", "))),$async$a7H)
case 3:if(d.e!=null){t=d.I(y.q).f
t.P(A.b2(null,null,null,null,null,C.q,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a7H,w)},
abJ(d){return this.bCY(d)},
bCY(d){var x=0,w=A.j(y.H),v=this
var $async$abJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fG(new A.fz(v.a.c)),$async$abJ)
case 2:if(d.e!=null)d.I(y.q).f.P(D.eCn)
return A.h(null,w)}})
return A.i($async$abJ,w)},
a_J(d){return this.cjk(d)},
cjk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a_J=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.amh(s.d,4),$async$a_J)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rq(r,"ngmy_doc_share_qr.png"),$async$a_J)
case 8:q=f
if(d.e!=null)d.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a7(n)
if(d.e!=null)d.I(y.q).f.P(A.b2(null,null,null,null,null,C.q,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_J,w)},
gaSB(){var x,w=this.a
if(w.e!==D.Gz)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.aY(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aY(x,13))
return null},
a7E(d){return this.bD6(d)},
bD6(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a7E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaSB()
if(t==null){x=1
break}x=3
return A.b(A.fG(new A.fz(C.a.a_(t,"http")?t:"N2|"+t)),$async$a7E)
case 3:if(d.e!=null)d.I(y.q).f.P(D.eDZ)
case 1:return A.h(v,w)}})
return A.i($async$a7E,w)},
abK(){var x=0,w=A.j(y.H),v=this,u
var $async$abK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ts(),$async$abK)
case 2:u=v.c
if(u!=null)A.a6(u,!1).M(null)
return A.h(null,w)}})
return A.i($async$abK,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a_t(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ao(h,0,44)+"\u2026"
i=i.e
i=i!==D.Gz&&i!==D.PL&&i!==D.yg
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eA(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Gz||t===D.PL||t===D.yg?l:A.aG(l,l,l,l,C.kK,l,l,l,m.gaVb(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.P,A.pq(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bu,A.d(""+q.d+" file(s) \xb7 "+m.gbXP(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Gz){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.m2,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gc0a(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ha(D.bHb,D.f6f,new B.cZ3(m,d),l)],p))}if(m.a.e===D.Gz&&m.gaSB()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.ha(D.bDP,D.f3d,new B.cZ4(m,d),l)],p))
if(m.a.e===D.yg){x=(m.w?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.a9(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.D9:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m2,l,l,l)],p))}if(m.a.e===D.PL){x=(m.r?C.dv:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.D9:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.m2,l,l,l),C.aa,A.dp(D.bzE,D.f99,m.gcjI(),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.o2(i,A.cb(v,w,new A.C(C.a8,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.b7,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a8,l,l,1/0),1),C.aa,A.A(A.a([A.D(A.ex(M.AV,C.S0,new B.cZ5(m,d),l),1),C.aw,A.D(A.dp(C.xI,C.a5I,new B.cZ6(m,d),A.bk(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a4(1/0,l,A.bM(C.yM,m.gaVb(),A.bk(C.aI,l,l,l,l,C.fH,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.cZ7(),y.C)}}
B.aan.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ci(A.v(A.a([w,C.aN,A.p(x,A.pq(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bA,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.q,x,C.z,x,x,x,x,C.aj)
return A.eq(A.a([A.bM(C.yN,new B.cYr(d),x)],u),x,x,C.mw,v,x,x,x,x,D.eXG,x)}}
B.Xq.prototype={
S(){return new B.awY(A.ys(C.wC,C.nc,C.tp))}}
B.awY.prototype={
q(){this.d.q()
this.a1()},
auf(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).M(t)
return}}},
B(d){var x=null
return A.cb(A.eA(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.f3F,x,x,x,1,x,!0),C.w,A.yr(this.d,C.bQ,this.gaue()),x,!1,!1,x,x)}}
B.Xx.prototype={
S(){return new B.ax3(A.ys(C.wC,C.nc,C.tp))},
gd6(){return this.c}}
B.ax3.prototype={
bU0(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
adB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$adB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.QI("text/plain"),$async$adB)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.P(D.eET)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).M(t)
case 1:return A.h(v,w)}})
return A.i($async$adB,w)},
a8s(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a8s=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.h9O(p,!0),$async$a8s)
case 3:t=e
p=t==null
s=B.a5j(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.P(D.eBv)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).M(s)
case 1:return A.h(v,w)}})
return A.i($async$a8s,w)},
q(){this.d.q()
this.a1()},
auf(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bU0(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).M(t)
return}},
B(d){var x,w=this,v=null,u=A.aG(v,v,v,v,F.aje,v,v,v,w.gbIs(),v,v,v,v,"Enter QR share code",v),t=A.aG(v,v,v,v,F.Zl,v,v,v,w.gca_(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eA(A.a([u,t,A.aG(v,v,v,v,A.W(w.f?C.ta:P.LU,v,v,v,v,v),v,v,v,new B.cZb(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.f9W,v,v,v,1,v,!0)
u=A.yr(w.d,C.bQ,w.gaue())
x=A.m(20)
return A.cb(t,C.w,new A.am(C.X,v,C.a9,C.q,A.a([u,A.au(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aI,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e_E],s),v),v,!1,!1,v,v)}}
B.baJ.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.o7
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.o7:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aE(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.WM,A.A(A.a([u,C.be,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.en,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ad)}}
B.a7F.prototype={
a3(){return"RTCDataChannelState."+this.b}}
B.N6.prototype={
a3(){return"RTCSignalingState."+this.b}}
B.VA.prototype={
a3(){return"RTCIceGatheringState."+this.b}}
B.N5.prototype={
a3(){return"RTCPeerConnectionState."+this.b}}
B.E0.prototype={
a3(){return"RTCIceConnectionState."+this.b}}
B.cfn.prototype={}
B.E_.prototype={}
B.a7E.prototype={}
B.art.prototype={}
B.VB.prototype={}
var z=a.updateTypes(["ax<~>()","R(jd)","n(jd)","Tj(Y)","~()","Xt(Y)","H(H,jd)","Oe(Y)","~(lL)","cm(E_)","ax<jd?>(@)","Th(Y)","Tl(Y)","C(jd)","jd(@)","a1<n,@>(jd)","Xs(Y)","Ti(Y)","Xu(Y)","Xr(Y)","Xw(Y)","aan(Y)","ak<jd>()","Xx(Y)","aap(Y,H)","Xq(Y)","a1<n,aC>(jd)","cm(VA)","cm(a7E)","ax<cm>(E_)"])
B.cfj.prototype={
$1(d){var x=this.a
x.x=D.aHL
x.y.L(0,D.aHL)},
$S:69}
B.cfk.prototype={
$1(d){var x=this.a
x.x=D.aHK
x.y.L(0,D.aHK)},
$S:69}
B.cfl.prototype={
$1(d){var x=this.a
x.aeV(A.aMz(d.data)).by(new B.cfi(x),y.b)},
$S:69}
B.cfi.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cfm.prototype={
$1(d){},
$S:69}
B.cfp.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hsZ(d.channel))},
$S:15}
B.cfq.prototype={
$1(d){},
$S:15}
B.cfr.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hLN(w.iceConnectionState)
x.cx=w
if($.fOy())switch(w.a){case 0:x.cy=D.aHQ
break
case 1:x.cy=D.aHR
break
case 3:x.cy=D.aHS
break
case 5:x.cy=D.aHO
break
case 6:x.cy=D.aHP
break
case 7:x.cy=D.a3n
break
default:break}},
$S:146}
B.cfs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hLO(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:146}
B.cft.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.hVV(w.signalingState)},
$S:146}
B.cfu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.hUb(w.connectionState)},
$S:146}
B.cfv.prototype={
$1(d){},
$S:146}
B.cfw.prototype={
$1(d){},
$S:15}
B.f8g.prototype={
$1(d){var x=y.F.a(new A.rh([],[]).p0(d.target.result,!1)),w=C.wD.t(x.objectStoreNames,"blobs")
if(!w)C.wz.JC(x,"blobs")},
$S:189}
B.fts.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.v4.f1(this.b)
$.eN.lZ()
this.c.$1(d)},
$S:467}
B.ftu.prototype={
$1(d){return this.a.$1(B.hBL(this.b,this.c))},
$S:31}
B.ftt.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:31}
B.ftr.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.ftH.prototype={
$1(d){var x=this
return B.h_x(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.ftI.prototype={
$1(d){var x=this
return B.h_x(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.f9z.prototype={
$1(d){var x=this
return B.c4d(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.cYK.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.cYH.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4d(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.cYJ.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4d(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.cYI.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c4d(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.cYM.prototype={
$4(d,e,f,g){var x=null
return A.jx(A.A(A.a([A.aG(x,x,x,x,D.byh,x,x,x,new B.cYL(d),x,x,x,x,x,x),A.D(A.DM(D.Of,!0,x,C.Yp,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Of,x,g,C.aff,0,e,f)},
$C:"$4",
$R:4,
$S:378}
B.cYL.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
B.fby.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eC,y.o).w,t=this.a,s=t?C.i3:C.c,r=A.m(28),q=A.p(v,D.beE,C.f,v,v,D.aUr,v,v,v,v,D.af6,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aO
o=A.aL(v,C.U,!1,v,!0,C.q,v,A.aM(),p,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bCn,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aO
w=y.p
return new A.C(new A.N(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.Eo,A.v(A.a([o,C.aa,A.aL(v,C.U,!1,v,!0,C.q,v,A.aM(),x,v,v,v,v,v,2,A.bo(v,new A.b4(4,A.m(16),C.Z),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.ajt,v,v,v,v,v,v,v,v,v,v,v,v),C.z,!0,v,!0,v,!1,v,C.ag,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a8,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bu,A.A(A.a([A.D(A.dX(C.dd,new B.fbw(d),v),1),C.aw,A.D(A.bM(D.f2g,new B.fbx(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.W5,v,v,v,v),v)},
$S:60}
B.fbw.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
B.fbx.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.P(D.eCC)
return}x=w.b.a.a
A.a6(w.c,!1).M(new B.azA(v,x))},
$S:0}
B.fc1.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eC,y.o).w,u=x.a,t=u?C.i3:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.N(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.beu,C.f,w,w,D.aVO,w,w,w,w,D.af6,w,w,1/0),new A.C(C.Eo,A.v(A.a([A.aL(w,C.U,!1,w,!0,C.q,w,A.aM(),r,w,w,w,w,w,2,B.fKN(u,"Organization name",C.EQ,w),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.U,!1,w,!0,C.q,w,A.aM(),q,w,w,w,w,w,2,B.fKN(u,"Access code",C.mP,"e.g. acme-team"),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.U,!1,w,!0,C.q,w,A.aM(),p,w,w,w,w,w,2,B.fKN(u,"Member password",N.Fl,w),C.z,!0,w,!0,w,!1,w,C.ag,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a8,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bu,A.bM(D.fa_,new B.fc0(r,q,p,d),A.bk(C.aD,w,w,w,w,C.fH,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.W5,w,w,w,w),w)},
$S:60}
B.fc0.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.P(D.eCH)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).M(new B.aCI(u,x,w))},
$S:0}
B.c44.prototype={
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
p=C.a.a_(j,"http")?A.ct(j,0,null):s.b.aR(j)
u=4
x=7
return A.b(A.uL(p,null).cK(0,C.VM),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.co(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.AK(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.a7(h)
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
B.c4a.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c4b.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c4c.prototype={
$1(d){return d.b},
$S:z+2}
B.c46.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c47.prototype={
$1(d){return d.b},
$S:z+2}
B.c45.prototype={
$1(d){return A.a_(y.f.a(d),y.N,y.z)},
$S:12}
B.c48.prototype={
$1(d){var x=J.q(d,"status")
return!J.y(x==null?"":x,"done")},
$S:4}
B.c49.prototype={
$1(d){var x=J.q(d,"status")
return J.y(x==null?"":x,"done")},
$S:4}
B.ftF.prototype={
$1(d){return new B.Th(this.a,null)},
$S:z+11}
B.ftG.prototype={
$1(d){return new B.Tl(this.a,this.b,this.c,null)},
$S:z+12}
B.dJA.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dKJ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dKK.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dKL.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dKI(x,d))},
$S:2}
B.dKI.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dKM.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dKN.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dKO.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dKP.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dKQ.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dKR.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dKU.prototype={
$3(d,e,f){return A.db(A.dS(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.dKS.prototype={
$1(d){var x=this.a
return x.f?null:x.XV()},
$S:2}
B.dKT.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.m3(D.Ou))s=C.td
else s=C.a.a_(s,"video/")||d.m3(D.mf)?C.pt:D.ahZ
x=this.b.a
w=y.p
return new A.C(C.kA,A.A(A.a([A.p(v,A.W(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.aw,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gan3(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dJB.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dJC.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c4e.prototype={
$2(d,e){return new A.bt(J.k(d),J.k(e),y.M)},
$S:90}
B.c4f.prototype={
$2(d,e){return new A.bt(J.k(d),J.k(e),y.M)},
$S:90}
B.fuf.prototype={
$2(d,e){return e===this.a},
$S:322}
B.f5t.prototype={
$1(d){return J.k(d)},
$S:17}
B.f9L.prototype={
$1(d){var x=this.b
B.hzO(C.ED.ga4f(this.a)).by(x.gcyQ(x),y.H)},
$S:118}
B.f9M.prototype={
$1(d){return this.a.d0(0,null)},
$S:118}
B.f9N.prototype={
$0(){return null},
$S:11}
B.c4t.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f9O.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a_(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aN(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.Q(Date.now(),0,!1).a4().ab():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jd(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fdM.prototype={
$1(d){return d.ac()},
$S:z+15}
B.f8s.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.f8t.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c4y.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m3(D.mf)},
$S:z+1}
B.fyc.prototype={
$1(d){return new B.Xs(this.a,null)},
$S:z+16}
B.cYG.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fw()},
$S:8}
B.cYE.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).M(x)
return null},
$S:2}
B.cYF.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
B.dKH.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.ZV()},
$S:14}
B.dK4.prototype={
$0(){var x=J.bBm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dK5.prototype={
$0(){var x=J.bBm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dJE.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dJD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAO(this.c)}},
$S:0}
B.dJD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dJF.prototype={
$0(){var x=J.bBm(this.b)
x=A.B(x,x.$ti.k("ai.E"))
return this.a.d=x},
$S:0}
B.dJK.prototype={
$0(){var x=this.a,w=C.d.bi(x.d,new B.dJJ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aAO(this.c)}},
$S:0}
B.dJJ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dKv.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dKw.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dK1.prototype={
$1(d){return new B.Ti(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dJZ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.H4(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Tm(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.t3(),$async$$0)
case 5:s=J.a8(t)
x=s.gci(t)?6:7
break
case 6:x=8
return A.b(r.a_5(s.gJ(t)),$async$$0)
case 8:case 7:r.hN(s.gaj(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dJI.prototype={
$1(d){this.a.a9M(d,"No files selected.","Added")},
$S:467}
B.dK9.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.v(0,new A.J(x,new B.dK8(),A.U(x).k("J<1,n>")))},
$S:0}
B.dK8.prototype={
$1(d){return d.a},
$S:z+2}
B.dJO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wx.c2().cL_(C.Xt,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fm(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gaj(o)}else o=!1
if(o){o=q.c
o.toString
k=A.ji(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.a7(j)
$.al.$1("[doc share import] "+A.t(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.hN("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.hN("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.anc(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hN("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.t3(),$async$$0)
case 9:o.hN("Imported "+J.ab(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dKs.prototype={
$1(d){return new B.Oe(this.a.a.c,this.b,null)},
$S:z+7}
B.dKt.prototype={
$1(d){return new B.Xu(this.a.a.c,this.b,null)},
$S:z+18}
B.dKu.prototype={
$1(d){return new B.Xr(this.a.a.c,this.b,null)},
$S:z+19}
B.dK_.prototype={
$1(d){return new B.Oe(this.a.a.c,this.b,null)},
$S:z+7}
B.dK0.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dKl.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.H4(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a5l(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hN("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cfP(),$async$$0)
case 5:x=6
return A.b(p.t3(),$async$$0)
case 6:r=A.U(t).k("J<1,n>")
r=new A.J(new A.J(t,new B.dKh(p),r),new B.dKi(),r.k("J<ai.E,n>")).bX(0,new B.dKj())
q=A.B(r,r.$ti.k("G.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ck(A.eu(new B.dKk(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oJ(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ts(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKh.prototype={
$1(d){var x=this.a,w=C.d.bi(x.d,new B.dKg(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dKg.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dKi.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.dKj.prototype={
$1(d){return d.length!==0},
$S:3}
B.dKk.prototype={
$1(d){var x=this.a
return new B.Xw(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dKm.prototype={
$1(d){return d.a},
$S:z+2}
B.dKn.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dKf.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.au(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kz,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gan3(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.m3(D.mf)?C.tf:C.ol
p=!x||p.m3(D.mf)?"Play video":"View"
return A.bW(A.bq(!0,new A.C(C.Ab,A.v(A.a([q,o,t,C.ay,B.Xv(!1,u,!1,w,p,new B.dKa(d),v),B.Xv(!1,u,!1,C.j9,"Share via QR",new B.dKb(d),"Letters/numbers QR code"),B.Xv(!1,u,!1,D.Yu,"Send to their Code",new B.dKc(d),"Enter someone else's personal code"),B.Xv(!1,u,!1,C.hu,"Download / save",new B.dKd(d),v),C.aq,B.Xv(!1,u,!0,C.e8,"Delete",new B.dKe(d),v)],y.p),C.ai,v,C.e,C.Q,0,C.p),v),!0,!1,C.ah,!0,!0),new A.o(s,v,new A.bY(new A.az(r,1,C.r,-1),C.Z,C.Z,C.Z),C.kp,v,v,C.n),C.bc)},
$S:733}
B.dKa.prototype={
$0(){A.a6(this.a,!1).M("view")
return null},
$S:0}
B.dKb.prototype={
$0(){A.a6(this.a,!1).M("qr")
return null},
$S:0}
B.dKc.prototype={
$0(){A.a6(this.a,!1).M("send_my_code")
return null},
$S:0}
B.dKd.prototype={
$0(){A.a6(this.a,!1).M("save")
return null},
$S:0}
B.dKe.prototype={
$0(){A.a6(this.a,!1).M("delete")
return null},
$S:0}
B.dJL.prototype={
$1(d){return d.a},
$S:z+2}
B.dJM.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dJN.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a5n(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Fp(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oJ(s.c,s.f),$async$$0)
case 4:u.hN(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dJH.prototype={
$1(d){var x=this.a
x.t4(new B.dJG(x,d,this.b),"Preparing\u2026")},
$S:467}
B.dJG.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hN("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Tm(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hN("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bAj(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hN("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dK2.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dK3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gT(s)
x=4
return A.b(B.fG_(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dJX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Fm(new B.dJT(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hN("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dJU(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dJV(s))
case 5:x=8
return A.b(r.b.i2(0,C.E8,new B.dJW()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gaj(t)){s.hN("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.t3(),$async$$0)
case 9:s.hN("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dJT.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dJQ(x,d,e))},
$S:139}
B.dJQ.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dJU.prototype={
$1(d){return new B.aan(this.a.a,null)},
$S:z+21}
B.dJV.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dJW.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dJY.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Hg(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5b(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aX9(B.Hg(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.anc(new B.dJR(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fFZ(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hN(q)
x=1
break}x=10
return A.b(s.t3(),$async$$0)
case 10:o=J.cD(r)
p=o.eE(r,new B.dJS()).gJ(0)
s.hN(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dJR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dJP(x,d,e))},
$S:139}
B.dJP.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dJS.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m3(D.mf)},
$S:z+1}
B.dK7.prototype={
$1(d){return new B.Xx(this.a.a.c,null)},
$S:z+23}
B.dK6.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aXl(u.a.c,v.b),$async$$0)
case 2:t.hN(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dKr.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.bW(A.bq(!0,new A.C(C.Ab,A.v(A.a([A.au(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kz,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.ay,B.Xv(!0,w,!1,C.mP,"My Code",new B.dKo(d),"Your personal code & QR \u2014 others send docs to you"),B.Xv(!1,w,!1,D.Yu,"Send to their Code",new B.dKp(this.a,d),"Enter someone else's 5-digit code + letter"),B.Xv(!1,w,!1,S.xx,"Import backup",new B.dKq(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.Q,0,C.p),x),!0,!1,C.ah,!0,!0),new A.o(u,x,new A.bY(new A.az(t,1,C.r,-1),C.Z,C.Z,C.Z),C.kp,x,x,C.n),C.bc)},
$S:733}
B.dKo.prototype={
$0(){A.a6(this.a,!1).M("my_code")
return null},
$S:0}
B.dKp.prototype={
$0(){A.a6(this.b,!1).M(null)
this.a.bxh()},
$S:0}
B.dKq.prototype={
$0(){A.a6(this.a,!1).M("import")
return null},
$S:0}
B.dKE.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Hp(D.Of,x,C.Yp,g,e,32),C.aw,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cO(C.d.gK(D.Of).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:655}
B.dKC.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
B.dKD.prototype={
$0(){this.a.afT()
return null},
$S:0}
B.dKF.prototype={
$3(d,e,f){return A.db(A.dS(f,new A.u(0,(1-e)*10)),e)},
$S:105}
B.dKG.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.aap(e,w,v,this.b,x.e,x.c0b(w),new B.dKy(x,w),new B.dKz(x,v,w),new B.dKA(x,w),new B.dKB(x,w),null)},
$S:z+24}
B.dKy.prototype={
$0(){this.a.ad7(this.b)
return null},
$S:0}
B.dKz.prototype={
$0(){var x=this.a
return x.m(new B.dKx(x,this.b,this.c))},
$S:0}
B.dKx.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dKA.prototype={
$0(){this.a.MG(this.b)
return null},
$S:0}
B.dKB.prototype={
$0(){this.a.afG(this.b)
return null},
$S:0}
B.cYC.prototype={
$3(d,e,f){return A.db(A.dS(f,new A.u(0,(1-e)*18)),e)},
$S:105}
B.cYD.prototype={
$3(d,e,f){return A.e8(C.A,f,e,null,null)},
$S:128}
B.cZ_.prototype={
$3(d,e,f){return A.db(A.dS(f,new A.u(0,(1-e)*14)),e)},
$S:105}
B.cYZ.prototype={
$1(d){return this.a.y.$0()},
$S:78}
B.cYW.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.cYX.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.cYY.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.cYU.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gaj(w))return A.fI(w,C.A,x,new B.cYS(this.a),C.fO,C.ds,!0,x,!1,x,x)
$.aU.x1$.push(new B.cYT(this.a))
return C.bG},
$S:131}
B.cYS.prototype={
$3(d,e,f){$.aU.x1$.push(new B.cYQ(this.a))
return C.bG},
$S:192}
B.cYQ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cYN(x))},
$S:8}
B.cYN.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cYT.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cYP(x))},
$S:8}
B.cYP.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cYV.prototype={
$3(d,e,f){$.aU.x1$.push(new B.cYR(this.a))
return C.bG},
$S:192}
B.cYR.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.cYO(x))},
$S:8}
B.cYO.prototype={
$0(){return this.a.w=!0},
$S:0}
B.cYz.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cYy(x,d))},
$S:1740}
B.cYy.prototype={
$0(){return this.a.f=this.b===C.tL},
$S:0}
B.cYA.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cYx(x,d))},
$S:8}
B.cYx.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.cYB.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.cYw(x,d))},
$S:8}
B.cYw.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.cYs.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.cYt.prototype={
$0(){return this.a.e=!1},
$S:0}
B.cYu.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.cYv.prototype={
$1(d){return this.a.d.LI(0,A.dA(0,0,0,C.k.U(d),0,0))},
$S:6}
B.cZc.prototype={
$0(){var x=this.a.a
return B.qX(x.c,x.d)},
$S:1741}
B.cZd.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.cZe.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.cZf.prototype={
$0(){return this.a.f=!1},
$S:0}
B.cZg.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.cZh.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.cZj.prototype={
$0(){var x=this.a
x.m(new B.cZi(x))},
$S:0}
B.cZi.prototype={
$0(){var x=this.a.d
if(x.a.f)x.fT(0)
else x.pg(0)},
$S:0}
B.cZ8.prototype={
$1(d){return this.a.Pc(this.b)},
$S:14}
B.cZ9.prototype={
$1(d){return this.a.Pb(this.b)},
$S:14}
B.cZ0.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.cZ1.prototype={
$0(){return this.a.r=!0},
$S:0}
B.cZ2.prototype={
$1(d){return D.frV},
$S:z+25}
B.cZ7.prototype={
$2(d,e){if(d)B.Ts()},
$S:121}
B.cZ3.prototype={
$0(){return this.a.a7H(this.b)},
$S:0}
B.cZ4.prototype={
$0(){return this.a.a7E(this.b)},
$S:0}
B.cZ5.prototype={
$0(){return this.a.abJ(this.b)},
$S:0}
B.cZ6.prototype={
$0(){return this.a.a_J(this.b)},
$S:0}
B.cYr.prototype={
$0(){A.a6(this.a,!1).M(null)
return null},
$S:0}
B.cZb.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pk(),$async$$0)
case 2:u.m(new B.cZa(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.cZa.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c4A.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.m3(D.mf)},
$S:z+1}
B.c4B.prototype={
$1(d){var x=d.b,w=A.ae("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.E(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c4z.prototype={
$2(d,e){return this.beU(d,e)},
beU(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Tt(u.c,A.E(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fdp.prototype={
$1(d){if(d===D.a3m&&(this.a.a.a&30)===0)this.a.fF(0)},
$S:z+27}
B.fdq.prototype={
$0(){},
$S:11}
B.fdU.prototype={
bgs(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f2A(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.fVK(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bgs(d,e)},
$S:713}
B.fdT.prototype={
$1(d){var x=this
d.b=new B.fdS(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fdS.prototype={
$1(d){return this.bgr(d)},
bgr(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aXm(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aF(0,n,null)
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
return A.b(B.f2A(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d0(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.a7(j)
$.al.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a5k(m),$async$$1)
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
x(v=B.ax0.prototype,"gc70","OO",0)
x(v,"gc7R","I4",0)
x(v,"gc7n","xd",0)
x(v=B.aAX.prototype,"gc05","abH",0)
x(v,"gc06","XU",0)
x(v,"gcm4","afn",0)
x(v=B.aB_.prototype,"gc07","XV",0)
x(v,"gcm5","a02",0)
x(B.aAY.prototype,"gc08","abI",0)
x(B.ax_.prototype,"gc0d","c0e",4)
x(v=B.aAZ.prototype,"gc7o","Z0",0)
x(v,"gckH","ckI",4)
x(v,"gaYe","avC",0)
x(v,"gcny","afN",0)
x(v,"gbIU","VW",0)
x(v,"gc0c","Dh",0)
x(B.ax1.prototype,"gb0X","a01",0)
x(B.awZ.prototype,"gc0f","XW",0)
x(v=B.ax4.prototype,"gaWY","c5H",4)
x(v,"gc09","abL",0)
x(v=B.ax2.prototype,"gcjI","a_O",0)
x(v,"gaVb","abK",0)
w(B.awY.prototype,"gaue","auf",8)
x(v=B.ax3.prototype,"gca_","adB",0)
x(v,"gbIs","a8s",0)
w(v,"gaue","auf",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.cfn,B.a7E,B.art,B.azA,B.aCI,B.jd,B.aa5,B.bsm,B.E_,B.VB])
w(B.cfo,B.cfn)
w(B.b1r,B.a7E)
x(A.i6,[B.cfj,B.cfk,B.cfl,B.cfi,B.cfm,B.cfp,B.cfq,B.cfr,B.cfs,B.cft,B.cfu,B.cfv,B.cfw,B.f8g,B.fts,B.ftu,B.ftt,B.ftH,B.ftI,B.f9z,B.cYH,B.cYJ,B.cYI,B.cYM,B.fby,B.fc1,B.c44,B.c4b,B.c4c,B.c47,B.c45,B.c48,B.c49,B.ftF,B.ftG,B.dKL,B.dKU,B.dKS,B.dKT,B.f5t,B.f9L,B.f9M,B.c4t,B.f9O,B.fdM,B.f8s,B.f8t,B.c4y,B.fyc,B.cYG,B.cYE,B.dKH,B.dJD,B.dJJ,B.dK1,B.dJI,B.dK8,B.dKs,B.dKt,B.dKu,B.dK_,B.dKh,B.dKg,B.dKi,B.dKj,B.dKk,B.dKm,B.dKn,B.dKf,B.dJL,B.dJM,B.dJH,B.dK2,B.dJU,B.dJS,B.dK7,B.dKr,B.dKE,B.dKF,B.cYC,B.cYD,B.cZ_,B.cYZ,B.cYU,B.cYS,B.cYQ,B.cYT,B.cYV,B.cYR,B.cYz,B.cYA,B.cYB,B.cYv,B.cZ8,B.cZ9,B.cZ2,B.c4A,B.c4B,B.fdp,B.fdT,B.fdS])
w(B.b1s,B.art)
x(A.jp,[B.ftr,B.cYK,B.cYL,B.fbw,B.fbx,B.fc0,B.dJA,B.dKJ,B.dKK,B.dKI,B.dKM,B.dKN,B.dKO,B.dKP,B.dKQ,B.dKR,B.dJB,B.dJC,B.f9N,B.cYF,B.dK4,B.dK5,B.dJE,B.dJF,B.dJK,B.dKv,B.dKw,B.dJZ,B.dK9,B.dJO,B.dK0,B.dKl,B.dKa,B.dKb,B.dKc,B.dKd,B.dKe,B.dJN,B.dJG,B.dK3,B.dJX,B.dJQ,B.dJV,B.dJW,B.dJY,B.dJP,B.dK6,B.dKo,B.dKp,B.dKq,B.dKC,B.dKD,B.dKy,B.dKz,B.dKx,B.dKA,B.dKB,B.cYW,B.cYX,B.cYY,B.cYN,B.cYP,B.cYO,B.cYy,B.cYx,B.cYw,B.cYs,B.cYt,B.cYu,B.cZc,B.cZd,B.cZe,B.cZf,B.cZg,B.cZh,B.cZj,B.cZi,B.cZ0,B.cZ1,B.cZ3,B.cZ4,B.cZ5,B.cZ6,B.cYr,B.cZb,B.cZa,B.fdq])
x(A.ml,[B.aao,B.M5,B.a7F,B.N6,B.VA,B.N5,B.E0])
x(A.af,[B.Xt,B.Th,B.Tl,B.Ti,B.Xs,B.Tj,B.Xu,B.Xr,B.Oe,B.Xw,B.Xq,B.Xx])
x(A.ag,[B.ax0,B.aAX,B.aB_,B.aAY,B.ax_,B.aAZ,B.ax1,B.awZ,B.ax4,B.ax2,B.awY,B.ax3])
x(A.at,[B.aaR,B.awX,B.baI,B.aap,B.aan,B.baJ])
x(A.kC,[B.c4a,B.c46,B.c4e,B.c4f,B.fuf,B.dJT,B.dJR,B.dKG,B.cZ7,B.c4z,B.fdU])
x(A.iM,[B.bg_,B.bs0])})()
A.ki(b.typeUniverse,JSON.parse('{"b1r":{"a7E":[]},"b1s":{"art":[]},"Xt":{"af":[],"r":[]},"ax0":{"ag":["Xt"]},"aaR":{"at":[],"r":[]},"Th":{"af":[],"r":[]},"Tl":{"af":[],"r":[]},"aAX":{"ag":["Th"]},"aB_":{"ag":["Tl"]},"bg_":{"iM":[]},"Ti":{"af":[],"r":[]},"aAY":{"ag":["Ti"]},"Xs":{"af":[],"r":[]},"Tj":{"af":[],"r":[]},"aap":{"at":[],"r":[]},"Xu":{"af":[],"r":[]},"Xr":{"af":[],"r":[]},"Oe":{"af":[],"r":[]},"Xw":{"af":[],"r":[]},"aan":{"at":[],"r":[]},"Xq":{"af":[],"r":[]},"Xx":{"af":[],"r":[]},"ax_":{"ag":["Xs"]},"bs0":{"iM":[]},"aAZ":{"ag":["Tj"]},"awX":{"at":[],"r":[]},"baI":{"at":[],"r":[]},"ax1":{"ag":["Xu"]},"awZ":{"ag":["Xr"]},"ax4":{"ag":["Oe"]},"ax2":{"ag":["Xw"]},"awY":{"ag":["Xq"]},"ax3":{"ag":["Xx"]},"baJ":{"at":[],"r":[]}}'))
var y=(function rtii(){var x=A.aA
return{J:x("tG"),k:x("KC()"),m:x("bs<n,n>"),F:x("qA"),g:x("ax<jd?>"),x:x("ax<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a1<n,R>>"),t:x("P<a1<n,@>>"),r:x("P<jd>"),w:x("P<+file,name(ll,n)>"),u:x("P<cO>"),s:x("P<n>"),E:x("P<iM>"),a:x("P<dB>"),p:x("P<r>"),Z:x("P<H>"),G:x("bh"),A:x("cq<ag<af>>"),n:x("ak<jd>"),j:x("ak<@>"),I:x("ak<H>"),M:x("bt<n,n>"),P:x("a1<n,@>"),f:x("a1<@,@>"),o:x("iH"),e:x("hZN"),af:x("Df"),U:x("jd"),b:x("cm"),C:x("aC"),aK:x("vw"),ab:x("E_"),br:x("art"),v:x("VB"),N:x("n"),X:x("bm<O>"),Q:x("lw"),D:x("dB"),aw:x("cz<n>"),cd:x("a3<a1<n,@>>"),c7:x("r"),ch:x("bQ<ak<jd>>"),aW:x("bQ<dB?>"),aY:x("bQ<~>"),cx:x("aao"),b1:x("bg<ak<jd>>"),cf:x("bg<dB?>"),d4:x("bg<~>"),c4:x("azA"),bG:x("aCI"),q:x("mK"),B:x("p_<E_>"),c6:x("p_<a7F>"),y:x("R"),i:x("O"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ak<jd>?"),aL:x("ak<@>?"),h:x("a1<n,@>?"),l:x("jd?"),R:x("aC?"),c:x("VB?"),d:x("+answerQr,transfer(n,ax<ak<jd>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,M5,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dB?"),cm:x("aa5?"),bk:x("azA?"),ag:x("aCI?"),dd:x("O?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aSQ=new A.az(C.aD,2,C.r,-1)
D.bKK=new A.a5(C.a3,C.a7,C.x,C.a_p,null,null)
D.aUr=new A.o(null,null,null,C.lO,null,D.bKK,C.n)
D.aVO=new A.o(null,null,null,C.lO,null,E.Fy,C.n)
D.a9l=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.aao=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aba=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.acv=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.eYy=new A.x("Your team portal",null,C.dP,null,null,null,null,null,null,null,null,null)
D.faR=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.HT,null,null,null,null,null,null,null,null,null)
D.cSv=x([D.eYy,C.aq,D.faR],y.p)
D.bel=new A.fo(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.cSv,null)
D.feN=new A.x("Create your organization",null,C.hl,null,null,null,null,null,null,null,null,null)
D.f1y=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.HT,null,null,null,null,null,null,null,null,null)
D.d5B=x([D.feN,C.aq,D.f1y],y.p)
D.beu=new A.fo(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.d5B,null)
D.fbo=new A.x("Team Member sign-in",null,C.hl,null,null,null,null,null,null,null,null,null)
D.f55=new A.x("Enter the access code and password from your organization.",null,G.HT,null,null,null,null,null,null,null,null,null)
D.d3G=x([D.fbo,C.aq,D.f55],y.p)
D.beE=new A.fo(C.aj,C.e,C.j,C.F,null,C.p,null,0,D.d3G,null)
D.bkk=new A.N(16,10,16,28)
D.bks=new A.N(16,14,16,4)
D.blF=new A.N(20,0,20,16)
D.bma=new A.N(20,8,20,16)
D.af6=new A.N(24,22,24,20)
D.Yu=new A.a0(63394,"MaterialIcons",!1)
D.ahZ=new A.a0(63515,"MaterialIcons",!1)
D.bwd=new A.a0(983813,"MaterialIcons",!1)
D.btv=new A.a0(62867,"MaterialIcons",!1)
D.bxc=new A.ad(D.btv,44,C.c,null,null,null)
D.byh=new A.ad(C.t6,null,C.af,null,null,null)
D.bzE=new A.ad(C.iO,18,null,null,null,null)
D.bBj=new A.ad(D.Yu,26,C.c,null,null,null)
D.bBP=new A.ad(C.Fc,null,null,null,null,null)
D.bCn=new A.ad(C.xz,null,null,null,null,null)
D.bDv=new A.ad(W.M6,null,null,null,null,null)
D.bDP=new A.ad(C.hf,16,null,null,null,null)
D.bHb=new A.ad(C.qy,16,null,null,null,null)
D.bxu=new A.ad(C.mP,null,null,null,null,null)
D.bI1=new A.dZ(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxu,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bCV=new A.ad(C.EQ,null,null,null,null,null)
D.bI6=new A.dZ(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bCV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bxP=new A.ad(N.Fl,null,null,null,null,null)
D.bIh=new A.dZ(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bxP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cua=x([C.f5,C.aZ,C.aD],y.O)
D.bMz=new A.a5(C.ax,C.aC,C.x,D.cua,null,null)
D.ctF=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Of=x([C.f5,C.aD],y.O)
D.Ou=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mf=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.cZS=x([C.p_,C.aD],y.O)
D.dPG={iceServers:0}
D.aCy={urls:0}
D.d9a=new A.bs(D.aCy,["stun:stun.l.google.com:19302"],y.m)
D.d99=new A.bs(D.aCy,["stun:stun1.l.google.com:19302"],y.m)
D.cJv=x([D.d9a,D.d99],A.aA("P<a1<n,n>>"))
D.d8v=new A.bs(D.dPG,[D.cJv],A.aA("bs<n,@>"))
D.Gz=new B.M5(0,"lanDirect")
D.PK=new B.M5(1,"cloudStash")
D.djX=new B.M5(2,"inlineInstant")
D.PL=new B.M5(3,"webrtcLink")
D.yg=new B.M5(4,"videoCloud")
D.faQ=new A.x("Receive file",null,C.n3,null,null,null,null,null,null,null,null,null)
D.cjQ=x([E.ajC,C.ab,D.faQ],y.p)
D.euu=new A.cx(C.aX,C.b7,C.j,C.m,null,C.p,null,0,D.cjQ,null)
D.dV9=new A.C(C.ce,D.euu,null)
D.ePX=new A.F(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a01,null,null,null)
D.eZ3=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.ePX,null,C.L,null,null,null,null,null,null,null)
D.dUt=new A.C(C.Ah,D.eZ3,null)
D.aZR=new A.cv(C.A,null,null,D.dUt,null)
D.e_E=new A.cI(0,null,0,28,null,null,D.aZR,null)
D.e_W=new B.a7F(0,"RTCDataChannelConnecting")
D.aHK=new B.a7F(1,"RTCDataChannelOpen")
D.aHL=new B.a7F(3,"RTCDataChannelClosed")
D.e_X=new B.E0(0,"RTCIceConnectionStateNew")
D.e_Y=new B.E0(1,"RTCIceConnectionStateChecking")
D.e_Z=new B.E0(2,"RTCIceConnectionStateCompleted")
D.e0_=new B.E0(3,"RTCIceConnectionStateConnected")
D.e00=new B.E0(4,"RTCIceConnectionStateCount")
D.e01=new B.E0(5,"RTCIceConnectionStateFailed")
D.e02=new B.E0(6,"RTCIceConnectionStateDisconnected")
D.aHM=new B.E0(7,"RTCIceConnectionStateClosed")
D.aHN=new B.VA(0,"RTCIceGatheringStateNew")
D.e03=new B.VA(1,"RTCIceGatheringStateGathering")
D.a3m=new B.VA(2,"RTCIceGatheringStateComplete")
D.a3n=new B.N5(0,"RTCPeerConnectionStateClosed")
D.aHO=new B.N5(1,"RTCPeerConnectionStateFailed")
D.aHP=new B.N5(2,"RTCPeerConnectionStateDisconnected")
D.aHQ=new B.N5(3,"RTCPeerConnectionStateNew")
D.aHR=new B.N5(4,"RTCPeerConnectionStateConnecting")
D.aHS=new B.N5(5,"RTCPeerConnectionStateConnected")
D.e04=new B.N6(0,"RTCSignalingStateStable")
D.e05=new B.N6(1,"RTCSignalingStateHaveLocalOffer")
D.e06=new B.N6(2,"RTCSignalingStateHaveRemoteOffer")
D.e07=new B.N6(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e08=new B.N6(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aHT=new B.N6(5,"RTCSignalingStateClosed")
D.eyq=new A.as(160,48)
D.b0_=new A.fg(2,null,null,null,null,C.aD,null,null,null,null)
D.ezU=new A.a4(16,16,D.b0_,null)
D.f1_=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eBl=new A.b1(D.f1_,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f7V=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eBo=new A.b1(D.f7V,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.ffO=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eBv=new A.b1(D.ffO,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f0D=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eBV=new A.b1(D.f0D,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fbx=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aKt=new A.b1(D.fbx,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fcO=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eCn=new A.b1(D.fcO,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fh7=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eCC=new A.b1(D.fh7,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fff=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eCH=new A.b1(D.fff,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fgp=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eDs=new A.b1(D.fgp,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f_l=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eDZ=new A.b1(D.f_l,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f9C=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eEj=new A.b1(D.f9C,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f33=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eEP=new A.b1(D.f33,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.fhd=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eET=new A.b1(D.fhd,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.f_B=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eEZ=new A.b1(D.f_B,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eZn=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eFd=new A.b1(D.eZn,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.q,null)
D.eWt=new A.x("NGMY DOC SHARE",null,C.aLI,null,null,null,null,null,null,null,null,null)
D.eXG=new A.x("Show this to sender",null,C.kl,null,null,null,null,null,null,null,null,null)
D.eYE=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.f1W=new A.x("Organization settings",null,C.cs,null,null,null,null,null,null,null,null,null)
D.f2g=new A.x("Sign in",null,C.cb,null,null,null,null,null,null,null,null,null)
D.f3d=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.f3F=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f6f=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.f8R=new A.x("Send to their Doc Share",null,C.n2,null,null,null,null,null,null,null,null,null)
D.f99=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.f9W=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fa_=new A.x("Create portal",null,C.cb,null,null,null,null,null,null,null,null,null)
D.fam=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eT,null,null,null,null,null,null,null,null,null)
D.fdd=new A.x("Share files & videos\nwith a scan.",null,C.aLJ,null,null,null,null,null,null,null,null,null)
D.fdv=new A.x("Add files",null,C.cb,null,null,null,null,null,null,null,null,null)
D.frV=new B.Xq(null)
D.a6s=new B.aao(0,"docShare")
D.a6t=new B.aao(1,"gate")
D.Su=new B.aao(2,"gateNoIndividual")})();(function staticFields(){$.aLl=null
$.f0p=function(){var x=y.N
return A.T(x,x)}()
$.F9=A.T(y.N,y.D)
$.aem=A.T(y.N,A.aA("ll"))
$.Pw=A.T(y.N,y.D)
$.f0W=A.T(y.N,A.aA("aa5"))
$.c4s=A.T(y.S,A.aA("bsm"))
$.fVJ=1
$.hHB=null
$.hHA=null
$.hzf=null
$.fKZ=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i_h","hbD",()=>new B.cfo())
x($,"hYc","fOy",()=>C.a.t(A.br(A.br(A.br(A.FI(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["/9hHWoC/hPC+jqDHldrtGONXJW8="]=a.current})($__dart_deferred_initializers__);