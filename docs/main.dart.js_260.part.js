((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cjp:function cjp(){},
hKf(d){var x=null,w=new B.b3L(d,D.eiq,new A.pr(x,x,y.c6),new A.pr(x,x,y.B))
w.by2(d)
return w},
b3L:function b3L(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cjk:function cjk(d){this.a=d},
cjl:function cjl(d){this.a=d},
cjm:function cjm(d){this.a=d},
cjj:function cjj(d){this.a=d},
cjn:function cjn(d){this.a=d},
hKg(d,e){var x=y.N
x=new B.b3M(d,e,A.U(x,y.e),A.U(x,y.z))
x.by3(d,e)
return x},
b3M:function b3M(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cjq:function cjq(d){this.a=d},
cjr:function cjr(d){this.a=d},
cjs:function cjs(d){this.a=d},
cjt:function cjt(d){this.a=d},
cju:function cju(d){this.a=d},
cjv:function cjv(d){this.a=d},
cjw:function cjw(d){this.a=d},
cjx:function cjx(d){this.a=d},
h06(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yJ.LT(x,"ngmy_doc_share_v1",new B.flF(),1)},
hQP(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.f1(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.A4(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cI.aL(d)
return x}catch(w){return v}return v},
QY(d,e){return B.i50(d,e)},
i50(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h06():o,$async$QY)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mK(s,"blobs","readwrite")
C.iM.mm(J.mI(q,"blobs"),r,d)
x=8
return A.b(J.pB(q),$async$QY)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.u(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QY,w)},
QX(d){return B.i5_(d)},
i5_(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$QX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aNp
x=7
return A.b(o==null?$.aNp=B.h06():o,$async$QX)
case 7:s=f
r=J.mK(s,"blobs","readonly")
x=8
return A.b(C.iM.zv(J.mI(r,"blobs"),d),$async$QX)
case 8:q=f
x=9
return A.b(J.pB(r),$async$QX)
case 9:o=B.hQP(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$QX,w)},
agL(d){return B.i4Z(d)},
i4Z(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$agL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aNp
x=7
return A.b(p==null?$.aNp=B.h06():p,$async$agL)
case 7:s=f
r=J.mK(s,"blobs","readwrite")
C.iM.FJ(J.mI(r,"blobs"),d)
x=8
return A.b(J.pB(r),$async$agL)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.u(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$agL,w)},
flF:function flF(){},
hT7(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.boi(w,v))}return u},
hq9(d,e){var x,w={},v=A.aVP("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fJa(w,v,e)
C.w4.yo(v,"change",new B.fJc(w,v,!1))
C.w4.yo(v,"cancel",new B.fJb(w))
$.eU.mt()
v.click()
A.bN(C.aha,new B.fJ9(w),y.H)},
fJa:function fJa(d,e,f){this.a=d
this.b=e
this.c=f},
fJc:function fJc(d,e,f){this.a=d
this.b=e
this.c=f},
fJb:function fJb(d){this.a=d},
fJ9:function fJ9(d){this.a=d},
CZ(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CZ=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdf()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gTs()?3:4
break
case 3:x=5
return A.b(B.hlf(e,d,s,!0,!1,f,g,h,!1,i),$async$CZ)
case 5:x=1
break
case 4:x=6
return A.b(B.QC(d,s,f,g,h,i),$async$CZ)
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
return A.b(B.Ip(s,d),$async$CZ)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fh6(s,d),$async$CZ)
case 14:x=12
return A.b(r.hlf(q,p,o,n,m,l,k,j,a1,i),$async$CZ)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).cm(A.ea(new B.fJp(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).cm(A.ea(new B.fJq(s,i,d,f,g,h),!1,null,y.H)),$async$CZ)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CZ,w)},
QC(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$QC=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZw(e),$async$QC)
case 3:u=k
x=4
return A.b(B.aoX(d,e,!1),$async$QC)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Ip(e,d),$async$QC)
case 7:if(k){v=D.a9F
x=1
break}x=8
return A.b(B.UJ(e),$async$QC)
case 8:v=t?D.UL:D.a9G
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aZu(d,e)){v=D.a9F
x=1
break}x=11
return A.b(B.UJ(e),$async$QC)
case 11:v=t?D.UL:D.a9G
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fWg(d,e)){v=D.a9F
x=1
break}x=14
return A.b(B.UJ(e),$async$QC)
case 14:v=D.UL
x=1
break
case 13:v=t?D.UL:D.a9G
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$QC,w)},
fh6(d,e){var x=0,w=A.j(y.y),v
var $async$fh6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aZu(e,d)){v=!1
x=1
break}x=3
return A.b(B.aZw(d),$async$fh6)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fh6,w)},
hlf(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).cm(A.ea(new B.fnT(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hgo(d,e,f,g,h,i,j){return new B.YX(e,j,d,g,h,i,f,null)},
fpQ(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fpQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fpT(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fpQ)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fpQ,w)},
fqk(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fqk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bS(C.K,null,new B.fqm(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fqk)
case 3:q=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
r.U$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqk,w)},
h0f(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.bs(x,new A.b4(4,A.n(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fBL(d,e){var x=0,w=A.j(y.H),v
var $async$fBL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.UJ(e),$async$fBL)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eE()
case 1:return A.h(v,w)}})
return A.i($async$fBL,w)},
fJp:function fJp(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fJq:function fJq(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
ac2:function ac2(d,e){this.a=d
this.b=e},
fnT:function fnT(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
YX:function YX(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
az_:function az_(){this.c=this.a=this.d=null},
d2M:function d2M(d,e){this.a=d
this.b=e},
d2J:function d2J(d){this.a=d},
d2L:function d2L(d){this.a=d},
d2K:function d2K(d){this.a=d},
d2O:function d2O(){},
d2N:function d2N(d){this.a=d},
acv:function acv(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aBx:function aBx(d,e){this.a=d
this.b=e},
aEJ:function aEJ(d,e,f){this.a=d
this.b=e
this.c=f},
fpT:function fpT(d,e,f){this.a=d
this.b=e
this.c=f},
fpR:function fpR(d){this.a=d},
fpS:function fpS(d,e,f){this.a=d
this.b=e
this.c=f},
fqm:function fqm(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fql:function fql(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c7V(d,e,f,g,h){return B.hFa(d,e,f,g,h)},
hFa(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c7V=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a4(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dz(d,new B.c7W(s,e,h,g,f,q),y.g),y.l),$async$c7V)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c7V,w)},
aZr(d,e,f,g,h){return B.hFb(d,e,f,g,h)},
hFb(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aZr=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.aue("GET",d)
o=A.fSG()
if(o==null)o=new A.LG(A.a([],y.W))
x=7
return A.b(o.eZ(0,s).d8(0,C.Fn),$async$aZr)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ch(),$async$aZr)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BE(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZr,w)},
aZq(d){return B.hF8(d)},
hF8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aZq=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.o_),$async$aZq)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.S.aK(0,A.lT(A.lQ(p.e)).cB(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share lan manifest web] "+A.u(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZq,w)},
c7U(d){return B.hF9(d)},
hF9(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c7U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vi(d,null).d8(0,C.pV),$async$c7U)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.lT(A.lQ(q.e)).cB(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.u(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c7U,w)},
c7W:function c7W(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jn:function jn(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
In(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hFg(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.In(C.a.b5(u,v.length))}return null},
hFh(d){var x=B.In(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hFc(){var x,w=$.py(),v=J.e5(5,y.S)
for(x=0;x<5;++x)v[x]=w.av(10)
return C.d.h2(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(24)]},
a6E(d){return B.hFd(d)},
hFd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a6E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f7(d,null,!1,C.bJ),$async$a6E)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share my code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6E,w)},
a6F(d,e){return B.hFe(d,e)},
hFe(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6F=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cH,null),$async$a6F)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share my code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6F,w)},
BD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.ay(),$async$BD)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.In(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a6G(r),$async$BD)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a6E("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BD)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.In(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BD)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hFc()
x=14
return A.b(B.a6G(m),$async$BD)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6F("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 15:k=f
x=16
return A.b(B.a6F("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BD)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aq("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BD)
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
return A.i($async$BD,w)},
a6G(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a6G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.In(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a6E("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a6G)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6G,w)},
a6H(d,e,f,g){return B.hFi(d,e,f,g)},
hFi(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a6H=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a4(d)
if(g.gam(d)){v=!1
x=1
break}r=B.In(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a6G(r),$async$a6H)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cJ(d,0,new B.c81())>1048576||g.b6(d,new B.c82())){v=B.Et(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a6S("myCode",d,a0),$async$a6H)
case 4:u=a3
try{t=C.S.aK(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cn(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Et(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aZz(u,g.gM(d),a0),$async$a6H)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.py().av(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dz(d,new B.c83(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aZs(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a6H)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6H,w)},
Et(d,e,f,g,h){return B.hFf(d,e,f,g,h)},
hFf(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Et=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Et)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cF(a6)
k=l.cJ(a6,0,new B.c7Y())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.py().av(9999)
h=Date.now()
g=""+1000*h+"_"+C.cG.av(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Ir(a9,q)
a0=new A.Kg(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Et)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.u(p)+".part"+C.a.aV(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p_(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aah(a1.a,a4,"media",a1.d,a2).wY(m,n,new A.DK(!0,q.c)),$async$Et)
case 12:J.ce(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a7(0),$async$Et)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aPV(r),$async$Et)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dz(a6,new B.c7Z(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aZs(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$Et)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aPV(r),$async$Et)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Et,w)},
aZs(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aZs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a6E(t),$async$aZs)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c7X(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6F(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZs,w)},
Ng(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Ng=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a6E("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Ng)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cn(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gR(q)
if(!n.b(l)){x=4
break}k=A.a2(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aZt(k,a0),$async$Ng)
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
return A.b(B.aZy(h),$async$Ng)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.UQ(g,a0),$async$Ng)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.C(new A.a_(r,new B.c8_(),q),n)
d=A.C(new A.a_(r,new B.c80(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.db(d,0,A.dI(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6F("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$Ng)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ng,w)},
aZt(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aZt=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cn(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a4(p)
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
break}i=B.i8N(k,j)
C.d.v(s,i)
x=5
return A.b(B.CX(l,m,"Received via My Code",t,e,i),$async$aZt)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aPV(s),$async$aZt)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZt,w)},
c81:function c81(){},
c82:function c82(){},
c83:function c83(){},
c7Y:function c7Y(){},
c7Z:function c7Z(){},
c7X:function c7X(){},
c8_:function c8_(){},
c80:function c80(){},
fJm(d,e){var x=0,w=A.j(y.H)
var $async$fJm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).cm(A.ea(new B.fJn(e),!1,null,y.H)),$async$fJm)
case 2:return A.h(null,w)}})
return A.i($async$fJm,w)},
bD0(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bD0=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cn(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).cm(A.ea(new B.fJo(g,e,f),!1,null,y.y)),$async$bD0)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bD0,w)},
fJn:function fJn(d){this.a=d},
fJo:function fJo(d,e,f){this.a=d
this.b=e
this.c=f},
UG:function UG(d,e){this.c=d
this.a=e},
aCU:function aCU(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dPy:function dPy(d,e){this.a=d
this.b=e},
UK:function UK(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCX:function aCX(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dQH:function dQH(d){this.a=d},
dQI:function dQI(d){this.a=d},
dQJ:function dQJ(d){this.a=d},
dQG:function dQG(d,e){this.a=d
this.b=e},
dQK:function dQK(d){this.a=d},
dQL:function dQL(d){this.a=d},
dQM:function dQM(d,e){this.a=d
this.b=e},
dQN:function dQN(d,e){this.a=d
this.b=e},
dQO:function dQO(d,e){this.a=d
this.b=e},
dQP:function dQP(d){this.a=d},
dQS:function dQS(){},
dQQ:function dQQ(d){this.a=d},
dQR:function dQR(d,e){this.a=d
this.b=e},
biv:function biv(){},
UH:function UH(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aCV:function aCV(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dPz:function dPz(d){this.a=d},
dPA:function dPA(d){this.a=d},
fWh(d){var x=d.hW
if(x>=0)return C.o.N(x)
return 10},
hFk(d){var x=d.kO
if(x>=0)return x
return 4.99},
hFj(d){var x=d.lr,w=y.N
w=x.jb(x,new B.c85(),w,w)
return w},
hbs(d){var x=d.kP,w=y.N
w=x.jb(x,new B.c86(),w,w)
return w},
aZw(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aZw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aZw)
case 7:s=f
r=A.u(p)
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
return A.i($async$aZw,w)},
a6J(d,e){var x=0,w=A.j(y.H),v,u
var $async$a6J=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$a6J)
case 4:x=3
return A.b(g.aq("String","ngmy_doc_share_path_"+u,e),$async$a6J)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a6J,w)},
UJ(d){var x=0,w=A.j(y.H),v,u
var $async$UJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.ay(),$async$UJ)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$UJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$UJ,w)},
fWg(d,e){var x,w,v
if(B.hFk(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hFj(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cd(new A.S(Date.now(),0,!1))},
aZu(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hbs(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cd(new A.S(Date.now(),0,!1))},
hbt(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hbs(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cd(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bR(A.dE(f,0,0,0,0,0).a).a6().ac())
d.kP=w},
aoY(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aoY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.ay(),$async$aoY)
case 7:s=f
r=A.u(p)
r=A.eP(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aoY,w)},
aoZ(d){var x=0,w=A.j(y.H),v,u,t
var $async$aoZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aoY(d),$async$aoZ)
case 3:u=f
x=5
return A.b(A.ay(),$async$aoZ)
case 5:x=4
return A.b(f.aq("Int","ngmy_doc_share_usage_"+t,u+1),$async$aoZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aoZ,w)},
aoX(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aoX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fWh(d)
if(u<=0){v=!1
x=1
break}if(B.fWg(d,e)){v=!1
x=1
break}x=3
return A.b(B.aoY(e),$async$aoX)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoX,w)},
aZv(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aZv=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ip(e,d),$async$aZv)
case 3:if(g){v=-1
x=1
break}u=B.fWh(d)
if(u<=0){v=-1
x=1
break}if(B.fWg(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aoY(e),$async$aZv)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZv,w)},
c88(d,e,f){var x=0,w=A.j(y.y),v
var $async$c88=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Ip(e,d),$async$c88)
case 3:if(h){v=!1
x=1
break}v=B.aoX(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c88,w)},
c87(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c87=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdf()
x=3
return A.b(B.c88(d,u,i.gTs()),$async$c87)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c87,w)},
a6I(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6I=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdf()
if(i.gTs()){v=!0
x=1
break}if(B.aZu(d,u)){v=!0
x=1
break}x=5
return A.b(A.lh(u,C.S9),$async$a6I)
case 5:x=k?3:4
break
case 3:B.hbt(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6I)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kW(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.S9,"Doc Share for Organizations"),$async$a6I)
case 7:if(!k){v=!1
x=1
break}B.hbt(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6I)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6I,w)},
c85:function c85(){},
c86:function c86(){},
fK1(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fK1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fK1)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fdQ.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hS([r],e.c))
s.toString
$.fdQ.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fK1,w)},
ib6(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fdQ.br($.fdQ,new B.fK3(d))},
fK3:function fK3(d){this.a=d},
ffb(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$ffb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hS([d],f))
s.toString
u=A.n9(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.jn,null,y.H),$async$ffb)
case 3:C.Aa.ff(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eU.mt()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ffb,w)},
afD(d,e,f){var x=0,w=A.j(y.H),v
var $async$afD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fej.n(0,d,new B.abK(A.bo(e,!0,v)))
x=3
return A.b(A.ay(),$async$afD)
case 3:x=2
return A.b(h.aq("String",d+"_manifest",C.S.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$afD)
case 2:return A.h(null,w)}})
return A.i($async$afD,w)},
afx(d){return B.hUY(d)},
hUY(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fej.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.ay(),$async$afx)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.S.aK(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cn(s)){v=null
x=1
break}o=J.b6(s,new B.fiS(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.abK(r)
$.fej.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afx,w)},
Qs(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Qs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.Gb.n(0,d,u)
x=3
return A.b(B.QY(d,u),$async$Qs)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Qs,w)},
aNL(d){return B.hUW(d)},
hUW(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aNL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gb.h(0,d)
if(n!=null&&!C.aH.gam(n)){v=n
x=1
break}x=3
return A.b(B.QX(d),$async$aNL)
case 3:p=f
if(p!=null&&!C.aH.gam(p)){$.Gb.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.ay(),$async$aNL)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cI.aL(r)
x=!J.cn(q)?9:10
break
case 9:B.Qs(d,q)
x=11
return A.b(J.hy(s,d),$async$aNL)
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
return A.i($async$aNL,w)},
hRb(d){if(d==null)return A.f9(null,y.K)
if(y.J.b(d))return A.f9(new Uint8Array(A.cf(J.f1(d,0,null))),y.K)
if(y.D.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f9(new Uint8Array(A.cf(A.A4(d,0,null))),y.K)
if(y.I.b(d))return A.f9(new Uint8Array(A.cf(d)),y.K)
return A.f9(null,y.K)},
a1p(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1p=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bz,y.cf)
t=new A.bX(u,y.aW)
s=y.aK
A.fM(r,"loadend",new B.fo4(r,t),!1,s)
A.fM(r,"error",new B.fo5(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ir(0,C.Mg,new B.fo6())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1p,w)},
aO4(d,e,f){return B.hXc(d,e,f)},
hXc(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aO4=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1p(i),$async$aO4)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.u(r)+"-"+A.u(q)+" for "+e)
x=8
break}o=A.u(k)+"_part_"+J.ad(j)
x=11
return A.b(B.QY(o,p),$async$aO4)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.u(o))
x=8
break}J.ce(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.afD(k,j,s),$async$aO4)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.u(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aO4,w)},
aO3(d,e,f){return B.hXb(d,e,f)},
hXb(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aO3=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aO4(d,e,f),$async$aO3)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1p(f),$async$aO3)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gb.n(0,s,r)
$.QJ.n(0,s,r)
x=11
return A.b(B.Qs(s,r),$async$aO3)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.u(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aO3,w)},
BE(d,e,f,g,h,i){return B.hFt(d,e,f,g,h,i)},
hFt(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BE=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cG.av(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jn(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aZC(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Qs(s,d),$async$BE)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.ay(),$async$BE)
case 10:r=a2
x=11
return A.b(r.aq("String",s,C.cR.gcw().aL(d)),$async$BE)
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
return A.b(B.AF(e),$async$BE)
case 12:j=a2
J.ce(j,m)
x=13
return A.b(B.Gn(e,j),$async$BE)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BE,w)},
UL(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$UL=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AF(d),$async$UL)
case 3:t=a1
s=e.length,r=J.cF(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cG.av(99999)
n=p.b
l=o.type
l.toString
k=B.hbv(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jn(m,n,k,l,j,"From folder",null,B.aZC(),null)
$.ag5.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1p(o),$async$UL)
case 7:g=a1
x=g!=null&&!C.aH.gam(g)?8:10
break
case 8:$.Gb.n(0,h,g)
$.QJ.n(0,h,g)
B.Qs(h,g)
x=9
break
case 10:x=11
return A.b(B.aO3(d,m,o),$async$UL)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.K)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Gn(d,t),$async$UL)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UL,w)},
fWl(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fWl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hbv(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Iq(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aH.gam(s)){v=B.BE(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWl,w)},
Iq(d,e,f,g,h,i){return B.hFs(d,e,f,g,h,i)},
hFs(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Iq=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cG.av(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Kg(A.dI(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Iq)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cn(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.Rw(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kI(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.u(r)+"_part_"+A.u(p)
x=11
return A.b(B.QY(k,l),$async$Iq)
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
return A.b(j.a7(0),$async$Iq)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.u(r)+"_part_"+A.u(p)
x=15
return A.b(B.QY(k,new Uint8Array(A.cf(n))),$async$Iq)
case 15:J.ce(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.afD(r,q,g),$async$Iq)
case 16:f=new B.jn(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aZC(),null)
x=17
return A.b(B.AF(d),$async$Iq)
case 17:e=a6
J.ce(e,f)
x=18
return A.b(B.Gn(d,e),$async$Iq)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Iq,w)},
UN(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$UN=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ag5.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1p(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afx(s),$async$UN)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.QX(u[o]),$async$UN)
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
v=A.A4(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.K)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.QJ.h(0,s)
if(i==null)i=$.Gb.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rr(d,e),$async$UN)
case 12:i=a0
if(i!=null&&!C.aH.gam(i))$.QJ.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.A4(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UN,w)},
hbv(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rr(d,e){return B.hFu(d,e)},
hFu(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rr=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.QJ.h(0,f)
if(e==null)e=$.Gb.h(0,f)
if(e!=null&&!C.aH.gam(e)){v=e
x=1
break}s=$.ag5.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1p(s),$async$rr)
case 9:r=a3
if(r!=null&&!C.aH.gam(r)){$.Gb.n(0,f,r)
$.QJ.n(0,f,r)
B.Qs(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.u(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afx(f),$async$rr)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.axN(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.QX(g[l]),$async$rr)
case 16:k=a3
if(k!=null&&!C.aH.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.K)(g),++l
x=13
break
case 15:r=n.anM()
if(!C.aH.gam(r)){$.Gb.n(0,f,r)
$.QJ.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aNL(f),$async$rr)
case 17:j=a3
if(j!=null&&!C.aH.gam(j)){$.QJ.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.UN(a0,a1,0,g),$async$rr)
case 20:i=a3
if(i!=null&&!C.aH.gam(i)){h=new Uint8Array(A.cf(i))
$.Gb.n(0,f,h)
$.QJ.n(0,f,h)
B.Qs(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rr,w)},
hFx(d){var x,w,v=$.ag5.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hFy(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hS([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hFv(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ap4(d,e,f,g,h){return B.hFw(d,e,f,g,h)},
hFw(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ap4=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ag5.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1p(s),$async$ap4)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rr(g,e),$async$ap4)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f0().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.ik(d).wY(h,r,new A.DK(!0,e.c)),$async$ap4)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share upload web] "+e.b+": "+A.u(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap4,w)},
hbx(d,e,f,g,h){var x,w,v,u,t=$.hbw
$.hbw=t+1
x=Date.now()
w=""+1000*x+"_"+C.cG.av(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c8j.n(0,t,new B.bv3(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.axN(u)))
return t},
fWm(d){var x=0,w=A.j(y.H)
var $async$fWm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fWm,w)},
Ir(d,e){var $async$Ir=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ag5.h(0,h)
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
return A.q9(B.UN(d,e,p,o<q?o:q),$async$Ir,w)
case 8:n=a1
x=n!=null&&!C.aH.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.q9(A.FJ(n),$async$Ir,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.q9(B.afx("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Ir,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.q9(B.QX(h[l]),$async$Ir,w)
case 18:k=a1
x=k!=null&&!C.aH.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.q9(A.FJ(k),$async$Ir,w)
case 21:case 20:case 16:h.length===r||(0,A.K)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.q9(B.rr(d,e),$async$Ir,w)
case 22:j=a1
x=j!=null&&!C.aH.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.q9(A.FJ(A.A4(j,p,o<i?o:i)),$async$Ir,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.q9(null,0,w)
case 2:return A.q9(t.at(-1),1,w)}})
var x=0,w=A.hk8($async$Ir,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hlY(w)},
aZE(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aZE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c8j.h(0,d)
if(t==null||J.cn(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a4j(),$async$aZE)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZE,w)},
UM(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$UM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8j.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a4j(),$async$UM)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.afD(r.c,u,r.z),$async$UM)
case 4:t=new B.jn(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aZC(),null)
u=r.a
x=5
return A.b(B.AF(u),$async$UM)
case 5:s=f
J.ce(s,t)
x=6
return A.b(B.Gn(u,s),$async$UM)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UM,w)},
a6P(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6P=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c8j.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.agL(u[s]),$async$a6P)
case 6:case 4:u.length===t||(0,A.K)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a6P,w)},
c8l(d,e,f){var x=0,w=A.j(y.H)
var $async$c8l=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bA3(d,e,f),$async$c8l)
case 2:return A.h(null,w)}})
return A.i($async$c8l,w)},
c8m(d,e,f){var x=0,w=A.j(y.H)
var $async$c8m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bA4(d,e,f),$async$c8m)
case 2:return A.h(null,w)}})
return A.i($async$c8m,w)},
Eu(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Eu=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AF(d),$async$Eu)
case 2:p=g
J.nt(p,new B.c8k(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gb.W(0,v)
$.ag5.W(0,e)
x=3
return A.b(B.afx(v),$async$Eu)
case 3:u=g
$.fej.W(0,v)
x=4
return A.b(A.ay(),$async$Eu)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Eu)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Eu)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.agL(s[q]),$async$Eu)
case 12:case 10:s.length===r||(0,A.K)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.agL(v),$async$Eu)
case 13:x=14
return A.b(B.Gn(d,p),$async$Eu)
case 14:return A.h(null,w)}})
return A.i($async$Eu,w)},
aZD(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aZD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rr(d,e),$async$aZD)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.ffb(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZD,w)},
AF(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$AF)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.S.aK(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fo7(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AF,w)},
Gn(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Gn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.ay(),$async$Gn)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fs7(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aq("String","ngmy_doc_share_index_v1_"+u,C.S.ao(t,null)),$async$Gn)
case 3:return A.h(null,w)}})
return A.i($async$Gn,w)},
bA3(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bA3=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bA3)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fmx(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aDw(f))
x=4
return A.b(B.Gn(d,u),$async$bA3)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bA3,w)},
bA4(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bA4=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AF(d),$async$bA4)
case 3:u=h
t=J.cF(u)
s=t.bg(u,new B.fmy(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cIq(f))
x=4
return A.b(B.Gn(d,u),$async$bA4)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bA4,w)},
abK:function abK(d){this.a=d},
fiS:function fiS(){},
fo4:function fo4(d,e){this.a=d
this.b=e},
fo5:function fo5(d){this.a=d},
fo6:function fo6(){},
c8k:function c8k(d){this.a=d},
bv3:function bv3(d,e,f,g,h,i,j,k,l){var _=this
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
fo7:function fo7(){},
fs7:function fs7(){},
fmx:function fmx(d){this.a=d},
fmy:function fmy(d){this.a=d},
a6Q(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6Q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b6(d,new B.c8p())?3:4
break
case 3:x=5
return A.b(B.aZF(d,e),$async$a6Q)
case 5:u=g
if(u!=null){t=u.c
B.Ni(d,u.b,e,t)}v=u
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
return A.b(B.aZA(s),$async$a6Q)
case 10:case 9:if(g){v=new A.PR(1,D.RN,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.UO(d,e),$async$a6Q)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.UT(!0,!0,d,e),$async$a6Q)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ni(d,D.zk,e,t)
v=new A.PR(p,D.zk,t)
x=1
break}v=B.c8o(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6Q,w)},
UO(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$UO=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6S(null,d,e),$async$UO)
case 3:p=g
try{u=C.S.aK(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cn(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aZz(p,d.length,e),$async$UO)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c8m(e,C.d.gI(d).a,r.b),$async$UO)
case 7:case 6:q=r.a
x=8
return A.b(B.Ni(d,D.RN,e,q),$async$UO)
case 8:v=new A.PR(d.length,D.RN,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UO,w)},
UP(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$UP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.my(D.mF)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6R(d,e),$async$UP)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c8h(s,d,e,t),$async$UP)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aZA(t),$async$UP)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rr(e,d),$async$UP)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.UO(A.a([d],y.r),e),$async$UP)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UP,w)},
UR(){var x=0,w=A.j(y.H)
var $async$UR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fWf(),$async$UR)
case 2:x=3
return A.b(B.aQb(),$async$UR)
case 3:return A.h(null,w)}})
return A.i($async$UR,w)},
a6R(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6R=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aZC()
x=3
return A.b(B.c8l(e,d.a,u),$async$a6R)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6R,w)},
Ni(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ni=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.RN&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b5(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6R(p,f),$async$Ni)
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
return A.b(B.c8g(o,p,u,f),$async$Ni)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c8h(o,p,f,t),$async$Ni)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c8f(o,u,p,f),$async$Ni)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.K)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ni,w)},
aZF(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aZF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8n(e,d),$async$aZF)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.UT(!1,!0,d,e),$async$aZF)
case 4:u=g
if(u!=null){t=u.b
v=new A.PR(u.a,D.zk,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZF,w)},
c8n(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c8n=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.UN(d,s,0,1),$async$c8n)
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
return A.i($async$c8n,w)},
c8o(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c8o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6S(null,d,e),$async$c8o)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hbu(u)
if(t.length>800){v=null
x=1
break}v=new A.PR(d.length,D.dBb,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8o,w)},
ap5(d,e,f){return B.hFB(d,e,f)},
hFB(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ap5=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d0(g,"\ufeff"))g=J.mJ(g,1)
x=B.fWk(g)?3:4
break
case 3:x=5
return A.b(B.c8i(g),$async$ap5)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d0(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mJ(g,13))
try{k=B.Ev(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.u(r))
v=null
x=1
break}}x=J.d0(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mJ(g,13))
u=9
x=12
return A.b(B.aZy(q),$async$ap5)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UQ(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.u(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d0(g,"NGMYDOCSYNC0|"))try{n=B.fWj(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.UQ(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.u(m))
v=null
x=1
break}if(J.d0(g,"N2|")){v=B.Is(C.a.i(J.mJ(g,3)),d,a0)
x=1
break}if(J.d0(g,"NGMYDOCSYNC2|")){v=B.Is(C.a.i(J.mJ(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.Is(h,d,a0)
x=1
break}if(J.f4(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.UQ(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap5,w)},
Is(d,e,f){return B.hFz(d,e,f)},
hFz(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Is=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b5(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b5(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cE(A.u(s)+"/manifest.json",0,null)
q=A.cE(A.u(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aZq(r),$async$Is)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aZq(A.cE(s,0,null)),$async$Is)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cn(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c7V(o,r,a1,n,a2),$async$Is)
case 11:m=a4
x=J.cn(m)?12:13
break
case 12:x=14
return A.b(B.c7U(q),$async$Is)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.UQ(l,a2),$async$Is)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cn(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.u(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Is,w)},
a6S(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rr(f,r),$async$a6S)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cR.gcw().aL(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.S.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6S,w)},
UQ(d,e){return B.hFA(d,e)},
hFA(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$UQ=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.S.aK(0,a2,null)
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
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aV(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.q(m,"name")
l=J.k(d==null?"file":d)
d=J.q(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.q(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cI.aL(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BE(i,a3,d,k,l,o),$async$UQ)
case 9:h=a5
if(h!=null)J.ce(n,h)
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
g=A.ab(a1)
$.am.$1("[doc share bundle] "+A.u(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$UQ,w)},
Nh:function Nh(d,e){this.a=d
this.b=e},
c8p:function c8p(){},
a0Z(d){var x=A.P(d).ax.a===C.I,w=x?D.aeR:D.acF,v=x?D.agi:C.c,u=x?C.aQ:C.M,t=x?C.bK:C.ak,s=x?D.adU:C.aL
return new A.aFX([w,s,v,u,t,x?C.fd:C.bT])},
hqS(d,e){var x=e?C.w.j(0.72):C.aW
return A.ca(null,x,!0,null,new B.fO9(e),d,null,!0,!0,y.N)},
c84(d,e,f,g,h,i,j,k,l){return new B.UI(e,l,d,f,k,j,g,h,i,null)},
YZ(d,e,f,g,h,i,j){return new B.bda(g,h,j,e,i,d,f,null)},
fO9:function fO9(d){this.a=d},
YW:function YW(d,e){this.c=d
this.a=e},
ayZ:function ayZ(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d2I:function d2I(d){this.a=d},
d2G:function d2G(d){this.a=d},
d2H:function d2H(d){this.a=d},
buI:function buI(){},
UI:function UI(d,e,f,g,h,i,j,k,l,m){var _=this
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
aCW:function aCW(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dQF:function dQF(d){this.a=d},
dQ2:function dQ2(d,e){this.a=d
this.b=e},
dQ3:function dQ3(d,e){this.a=d
this.b=e},
dPC:function dPC(d,e,f){this.a=d
this.b=e
this.c=f},
dPB:function dPB(d){this.a=d},
dPD:function dPD(d,e){this.a=d
this.b=e},
dPI:function dPI(d,e,f){this.a=d
this.b=e
this.c=f},
dPH:function dPH(d){this.a=d},
dQt:function dQt(d,e){this.a=d
this.b=e},
dQu:function dQu(d){this.a=d},
dQ_:function dQ_(d,e,f){this.a=d
this.b=e
this.c=f},
dPX:function dPX(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dPG:function dPG(d){this.a=d},
dQ7:function dQ7(d){this.a=d},
dQ6:function dQ6(){},
dPM:function dPM(d){this.a=d},
dQq:function dQq(d,e){this.a=d
this.b=e},
dQr:function dQr(d,e){this.a=d
this.b=e},
dQs:function dQs(d,e){this.a=d
this.b=e},
dPY:function dPY(d,e){this.a=d
this.b=e},
dPZ:function dPZ(d,e){this.a=d
this.b=e},
dQj:function dQj(d,e){this.a=d
this.b=e},
dQf:function dQf(d){this.a=d},
dQe:function dQe(d){this.a=d},
dQg:function dQg(){},
dQh:function dQh(){},
dQi:function dQi(d,e){this.a=d
this.b=e},
dQk:function dQk(){},
dQl:function dQl(d){this.a=d},
dQd:function dQd(d,e){this.a=d
this.b=e},
dQ8:function dQ8(d){this.a=d},
dQ9:function dQ9(d){this.a=d},
dQa:function dQa(d){this.a=d},
dQb:function dQb(d){this.a=d},
dQc:function dQc(d){this.a=d},
dPJ:function dPJ(){},
dPK:function dPK(d){this.a=d},
dPL:function dPL(d,e){this.a=d
this.b=e},
dPF:function dPF(d,e){this.a=d
this.b=e},
dPE:function dPE(d,e,f){this.a=d
this.b=e
this.c=f},
dQ0:function dQ0(d){this.a=d},
dQ1:function dQ1(d,e,f){this.a=d
this.b=e
this.c=f},
dPV:function dPV(d,e){this.a=d
this.b=e},
dPR:function dPR(d){this.a=d},
dPO:function dPO(d,e,f){this.a=d
this.b=e
this.c=f},
dPS:function dPS(d){this.a=d},
dPT:function dPT(d){this.a=d},
dPU:function dPU(){},
dPW:function dPW(d,e){this.a=d
this.b=e},
dPP:function dPP(d){this.a=d},
dPN:function dPN(d,e,f){this.a=d
this.b=e
this.c=f},
dPQ:function dPQ(){},
dQ5:function dQ5(d){this.a=d},
dQ4:function dQ4(d,e){this.a=d
this.b=e},
dQp:function dQp(d,e){this.a=d
this.b=e},
dQm:function dQm(d){this.a=d},
dQn:function dQn(d,e){this.a=d
this.b=e},
dQo:function dQo(d){this.a=d},
dQC:function dQC(d){this.a=d},
dQA:function dQA(d){this.a=d},
dQB:function dQB(d){this.a=d},
dQD:function dQD(){},
dQE:function dQE(d,e){this.a=d
this.b=e},
dQw:function dQw(d,e){this.a=d
this.b=e},
dQx:function dQx(d,e,f){this.a=d
this.b=e
this.c=f},
dQv:function dQv(d,e,f){this.a=d
this.b=e
this.c=f},
dQy:function dQy(d,e){this.a=d
this.b=e},
dQz:function dQz(d,e){this.a=d
this.b=e},
ayW:function ayW(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bd9:function bd9(d,e,f){this.c=d
this.d=e
this.a=f},
d2E:function d2E(){},
d2F:function d2F(){},
ac3:function ac3(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d31:function d31(){},
d30:function d30(d){this.a=d},
YY:function YY(d,e,f){this.c=d
this.d=e
this.a=f},
az0:function az0(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d2Y:function d2Y(d){this.a=d},
d2Z:function d2Z(d,e,f){this.a=d
this.b=e
this.c=f},
d3_:function d3_(d,e){this.a=d
this.b=e},
d2W:function d2W(d,e){this.a=d
this.b=e},
d2U:function d2U(d){this.a=d},
d2S:function d2S(d){this.a=d},
d2P:function d2P(d){this.a=d},
d2V:function d2V(d){this.a=d},
d2R:function d2R(d){this.a=d},
d2X:function d2X(d){this.a=d},
d2T:function d2T(d){this.a=d},
d2Q:function d2Q(d){this.a=d},
YV:function YV(d,e,f){this.c=d
this.d=e
this.a=f},
ayY:function ayY(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d2B:function d2B(d){this.a=d},
d2A:function d2A(d,e){this.a=d
this.b=e},
d2C:function d2C(d){this.a=d},
d2z:function d2z(d,e){this.a=d
this.b=e},
d2D:function d2D(d){this.a=d},
d2y:function d2y(d,e){this.a=d
this.b=e},
d2u:function d2u(d){this.a=d},
d2v:function d2v(d){this.a=d},
d2w:function d2w(d,e){this.a=d
this.b=e},
d2x:function d2x(d){this.a=d},
Pt:function Pt(d,e,f){this.c=d
this.d=e
this.a=f},
az3:function az3(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d3e:function d3e(d){this.a=d},
d3f:function d3f(d){this.a=d},
d3g:function d3g(d){this.a=d},
d3h:function d3h(d){this.a=d},
d3i:function d3i(d,e){this.a=d
this.b=e},
d3j:function d3j(d){this.a=d},
d3l:function d3l(d){this.a=d},
d3k:function d3k(d){this.a=d},
Z_:function Z_(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
az1:function az1(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d3a:function d3a(d,e){this.a=d
this.b=e},
d3b:function d3b(d,e){this.a=d
this.b=e},
d32:function d32(d,e,f){this.a=d
this.b=e
this.c=f},
d33:function d33(d){this.a=d},
d34:function d34(){},
d39:function d39(){},
d35:function d35(d,e){this.a=d
this.b=e},
d36:function d36(d,e){this.a=d
this.b=e},
d37:function d37(d,e){this.a=d
this.b=e},
d38:function d38(d,e){this.a=d
this.b=e},
ac1:function ac1(d,e){this.c=d
this.a=e},
d2t:function d2t(d){this.a=d},
YU:function YU(d){this.a=d},
ayX:function ayX(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Z0:function Z0(d,e){this.c=d
this.a=e},
az2:function az2(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d3d:function d3d(d){this.a=d},
d3c:function d3c(d){this.a=d},
bda:function bda(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hFC(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"VT"+C.d.h2(v)},
Nj(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Nj=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$Nj)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_video_relay_v1",null,!1,C.bJ),$async$Nj)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Nj,w)},
a6T(d){return B.hFD(d)},
hFD(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6T=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6T)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$a6T)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6T,w)},
US(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$US=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Nj(),$async$US)
case 3:s=g
r=J.a4(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dQ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6T(s),$async$US)
case 4:case 1:return A.h(v,w)}})
return A.i($async$US,w)},
UT(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$UT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$UT)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bo(f,!0,y.U)
else{t=A.T(f).k("a_<1>")
u=A.C(new A.a_(f,new B.c8r(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hFC()
t=A.T(u).k("M<1,a5<m,aD>>")
r=A.C(new A.M(u,new B.c8s(s),t),t.k("ak.E"))
x=6
return A.b(B.Nj(),$async$UT)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6T(q),$async$UT)
case 7:x=8
return A.b(B.a6U(r,u,g,s),$async$UT)
case 8:v=new A.boK(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$UT,w)},
ap6(d){var x=0,w=A.j(y.y),v,u,t
var $async$ap6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Nj(),$async$ap6)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap6,w)},
c8t(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c8t=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Nj(),$async$c8t)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a4(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8t,w)},
a6U(d,e,f,g){return B.hFE(d,e,f,g)},
hFE(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6U=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ap4("media",r,new B.c8q(s,e,g),f,q),$async$a6U)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.US(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6U)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.US(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6U)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.u(o))
x=15
return A.b(B.US(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6U)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6U,w)},
Ev(d,e,f){return B.hFF(d,e,f)},
hFF(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Ev=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$Ev)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ap6(b3),$async$Ev)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.ku,null,g),$async$Ev)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ap6(b3),$async$Ev)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Nj(),$async$Ev)
case 10:e=c0
g=J.a4(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a4(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cn(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a4(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a4(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ad(m)===0){x=11
break}u=14
a8=$.f0().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p_(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aah(a8.a,b0,"media",a8.d,a9).CC(m)
k=A.cE(l,0,null)
x=17
return A.b(B.aZr(k,n,o,s,b7),$async$Ev)
case 17:j=c0
if(j!=null){J.ce(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.u(o)+": "+A.u(i))
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
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f0().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p_(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aah(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Ev)
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
a0=A.dQ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6T(e),$async$Ev)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ev,w)},
c8r:function c8r(){},
c8s:function c8s(d){this.a=d},
c8q:function c8q(d,e,f){this.a=d
this.b=e
this.c=f},
aQb(){var x=0,w=A.j(y.H),v,u
var $async$aQb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hQA=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aQb)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aQb)
case 3:u=$.h0r
u=u==null?null:u.bH(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aQb)
case 4:$.h0r=$.hZ3=$.hZ4=null
return A.h(null,w)}})
return A.i($async$aQb,w)},
frJ(d){var x=0,w=A.j(y.H),v,u
var $async$frJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a6q){x=1
break}u=new A.bg($.bz,y.d4)
d.c=new B.frK(new A.bX(u,y.aY))
x=3
return A.b(u.ir(0,C.hO,new B.frL()),$async$frJ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$frJ,w)},
hZ1(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hFm(x):x},
h0v(d){var x=0,w=A.j(y.T),v,u,t
var $async$h0v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,13))
if(C.a.a0(u,"WR")){v=B.ap8(u)
x=1
break}v=B.fWj(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0v,w)},
h0u(d){var x=0,w=A.j(y.T),v,u,t
var $async$h0u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b5(t,14))
if(C.a.a0(u,"WR")){v=B.ap9(u)
x=1
break}v=B.fWj(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h0u,w)},
fJM(d){var x=0,w=A.j(y.T),v
var $async$fJM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap9(d),$async$fJM)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fJM,w)},
bAV(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bAV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h0u(d),$async$bAV)
case 3:q=f
if(q==null){x=1
break}t=C.S.aK(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a4(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bAV,w)},
fg_(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fg_=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.UM(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.BE(d.anM(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fg_,w)},
Gp(d,e,f){return B.i0r(d,e,f)},
i0r(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Gp=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h0v(a1),$async$Gp)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.S.aK(0,e,null)
if(!y.f.b(u)){v=null
x=1
break}t=J.a4(u)
s=t.h(u,"s")
if(s==null)s=t.h(u,"sdp")
r=J.k(s==null?"":s)
q=t.h(u,"f")
if(q==null)q=t.h(u,"manifest")
if(r.length===0||!y.j.b(q)){v=null
x=1
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b5(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hsL().aDL(D.dp8,null),$async$Gp)
case 4:l=d.h0r=a4
f.a="file"
f.b="application/octet-stream"
k=new A.axN(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bz,y.b1)
l.y=new B.fsg(f,k,new B.fsh(f,a2,k,j,a0,p),a2,j,a0,p,new A.bX(t,y.ch))
x=5
return A.b(l.a7i(0,new B.X1(r,"offer")),$async$Gp)
case 5:d=l
x=7
return A.b(l.akB(0),$async$Gp)
case 7:x=6
return A.b(d.a7a(0,a4),$async$Gp)
case 6:x=8
return A.b(B.frJ(l),$async$Gp)
case 8:x=9
return A.b(l.aov(),$async$Gp)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hZ1(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.S.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apa(m,h),$async$Gp)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hbu(h)
case 11:v=new A.bo1(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Gp,w)},
frK:function frK(d){this.a=d},
frL:function frL(){},
fsh:function fsh(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fsg:function fsg(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fsf:function fsf(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i2j(d){switch(d){case"new":return D.eir
case"checking":return D.eis
case"connected":return D.eiu
case"completed":return D.eit
case"failed":return D.eiw
case"disconnected":return D.eix
case"closed":return D.aMm
case"count":return D.eiv}return D.aMm},
i2k(d){switch(d){case"new":return D.aMn
case"gathering":return D.eiy
case"complete":return D.a6q}return D.aMn},
icA(d){switch(d){case"stable":return D.eiz
case"have-local-offer":return D.eiA
case"have-local-pranswer":return D.eiC
case"have-remote-offer":return D.eiB
case"have-remote-pranswer":return D.eiD
case"closed":return D.aMt}return D.aMt},
iaO(d){switch(d){case"new":return D.aMq
case"connecting":return D.aMr
case"connected":return D.aMs
case"closed":return D.a6r
case"disconnected":return D.aMp
case"failed":return D.aMo}return D.a6r},
a9d:function a9d(d,e){this.a=d
this.b=e},
Oj:function Oj(d,e){this.a=d
this.b=e},
X0:function X0(d,e){this.a=d
this.b=e},
Oi:function Oi(d,e){this.a=d
this.b=e},
EZ:function EZ(d,e){this.a=d
this.b=e},
cjo:function cjo(){},
fY3(d){var x=new B.EY()
x.a=d
x.b=!0
return x},
EY:function EY(){this.b=this.a=$},
a9c:function a9c(){},
atp:function atp(){},
X1:function X1(d,e){this.a=d
this.b=e},
fWf(){var x=0,w=A.j(y.H)
var $async$fWf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fWf,w)},
fWi(d,e,f){var x=0,w=A.j(y.T),v
var $async$fWi=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.my(D.mF))){v=null
x=1
break}v=B.fK1(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fWi,w)},
hbu(d){var x,w=F.ac6.a43(C.dK.aL(d),null)
if(w.length===0){x=C.dK.aL(d)
return C.cR.gcw().aL(x)}return C.cR.gcw().aL(w)},
hFl(d){var x,w,v=C.cI.aL(d)
try{x=C.cg.cB(0,F.ac5.bcy(v,!1))
return x}catch(w){x=C.cg.cB(0,v)
return x}},
fWj(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hFl(C.a.b5(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b5(t,w.length)
try{v=C.cg.cB(0,C.cI.aL(x))
return v}catch(u){return x}}return null},
hFm(d){var x,w,v,u,t,s=A.a([],y.s)
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
hFn(){var x,w=$.py(),v=J.e5(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.av(32)]
return"DS"+C.d.h2(v)},
aZx(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aZx=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bJ),$async$aZx)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share qr stash] load "+A.u(p)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aZx,w)},
c89(d,e){return B.hFo(d,e)},
hFo(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c89=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cH,null),$async$c89)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share qr stash] save "+A.u(p)+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c89,w)},
aZA(d){var x=0,w=A.j(y.y),v,u,t
var $async$aZA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aZx(d),$async$aZA)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZA,w)},
aZz(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aZz=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hFn()
r=C.a.i(f)
t=C.dK.aL(s)
x=3
return A.b(B.c89(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cR.gcw().aL(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aZz)
case 3:if(!h){v=null
x=1
break}v=new A.a01("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZz,w)},
aZy(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aZy=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aZx(o),$async$aZy)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cg.cB(0,C.cI.aL(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.u(o)+": "+A.u(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aZy,w)},
c8a(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c8a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bBS("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cH),$async$c8a)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.u(q)+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8a,w)},
aZB(d){var x=0,w=A.j(y.h),v,u,t
var $async$aZB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Io(),$async$aZB)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aZB,w)},
ap1(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ap1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap1)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aZB(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ap1,w)},
ap_(d,e){var x=0,w=A.j(y.H)
var $async$ap_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap_)
case 3:x=2
return A.b(g.aq("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ap_)
case 2:return A.h(null,w)}})
return A.i($async$ap_,w)},
a6L(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a6L=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6L)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Io(),$async$a6L)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dl(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a6K(s),$async$a6L)
case 5:x=6
return A.b(B.ap_(f,u),$async$a6L)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6L,w)},
a6M(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6M=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6M)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Io(),$async$a6M)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a4(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.q(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
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
return A.b(B.ap_(g,q),$async$a6M)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a6K(u),$async$a6M)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6M,w)},
a6N(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6N=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6N)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Io(),$async$a6N)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a4(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aZu(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.ay(),$async$a6N)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aq("String","ngmy_doc_share_school_session_"+s,C.S.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6N)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6N,w)},
c8b(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c8b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.ay(),$async$c8b)
case 7:s=f
p=A.u(n)
r=A.aU(J.q(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.S.aK(0,r,null)
if(!y.f.b(q)){v=null
x=1
break}p=A.a2(q,y.N,y.z)
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
return A.i($async$c8b,w)},
Ip(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Ip=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c8b(d),$async$Ip)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aZB(t),$async$Ip)
case 4:s=g
x=s==null||!J.A(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ap0(d),$async$Ip)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aZu(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ap0(d),$async$Ip)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ip,w)},
ap0(d){var x=0,w=A.j(y.H)
var $async$ap0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ay(),$async$ap0)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ap0)
case 2:return A.h(null,w)}})
return A.i($async$ap0,w)},
aZC(){var x,w=$.py(),v=J.e5(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.av(32)]
return C.d.h2(v)},
a6O(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fWk(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c8e(d){return B.hFq(d)},
hFq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c8e=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6O(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f7("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bJ),$async$c8e)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share short code] load "+d+": "+A.u(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c8e,w)},
ap3(d,e){return B.hFr(d,e)},
hFr(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ap3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6O(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cH,null),$async$ap3)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ab(o)
$.am.$1("[doc share short code] save "+d+": "+A.u(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap3,w)},
c8g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ap3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8g,w)},
c8f(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c8f=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ap3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c8f)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c8f,w)},
c8h(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c8h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6O(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ap3(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c8h,w)},
c8i(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c8i=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fWk(d)){v=null
x=1
break}x=3
return A.b(B.c8e(d),$async$c8i)
case 3:u=f
if(u==null){v=null
x=1
break}t=J.a4(u)
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
return A.i($async$c8i,w)},
a6V(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6V=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6V)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f7("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bJ),$async$a6V)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.q(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.u(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6V,w)},
ap7(d){return B.hFG(d)},
hFG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ap7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$ap7)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cH,null),$async$ap7)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.u(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap7,w)},
ap8(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ap8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d0(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap8)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6V(),$async$ap8)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cg.cB(0,C.cI.aL(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dQ(A.a2(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.ap7(s),$async$ap8)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.u(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ap8,w)},
apa(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$apa)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6V(),$async$apa)
case 4:u=g
t=J.a4(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dQ(A.a2(s,r,q),r,q)
r=C.dK.aL(C.a.i(e))
q.n(0,"answer",C.cR.gcw().aL(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.ap7(u),$async$apa)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apa,w)},
ap9(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ap9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ap9)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6V(),$async$ap9)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cg.cB(0,C.cI.aL(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.u(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ap9,w)},
ao4(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ao4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gba()
if(!(p instanceof A.q0)){v=null
x=1
break}x=3
return A.b(p.m1(e),$async$ao4)
case 3:r=g
u=4
x=7
return A.b(r.hw(C.h0),$async$ao4)
case 7:q=g
o=q
o=o==null?null:J.eX(J.vq(o))
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
return A.i($async$ao4,w)},
i8N(d,e){var x,w,v=J.e5(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aV(C.o.u(w),5,"0")
return v},
fIh(d){return B.i8P(d)},
i8P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fIh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").KI(d,3600),$async$fIh)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase signed url] "+d+": "+A.u(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fIh,w)},
CX(d,e,f,g,h,i){var x=null
return B.i8M(d,e,f,g,h,i)},
i8M(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CX=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hbx(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fWm(r),$async$CX)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fIh(o),$async$CX)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6P(r),$async$CX)
case 14:v=null
x=1
break
case 13:e=$.bz.h(0,C.aPB)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.LG(A.a([],g))
x=15
return A.b(d.eZ(0,A.aue("GET",A.cE(n,0,null))).d8(0,C.Fn),$async$CX)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6P(r),$async$CX)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Kg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CX)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aZE(r,k),$async$CX)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a7(0),$async$CX)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.K)(b0),++f
x=8
break
case 10:i=B.UM(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.u(j))
x=27
return A.b(B.a6P(r),$async$CX)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CX,w)},
aPV(d){return B.i8O(d)},
i8O(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aPV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.ik("media").W(0,d),$async$aPV)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.u(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPV,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[145]
O=c[40]
F=c[238]
I=c[137]
P=c[218]
E=c[211]
G=c[87]
Q=c[183]
R=c[138]
S=c[216]
K=c[242]
L=c[247]
B=a.updateHolder(c[21],B)
D=c[245]
T=c[182]
M=c[201]
U=c[65]
V=c[248]
W=c[71]
X=c[55]
N=c[86]
Y=c[246]
B.cjp.prototype={
aDL(d,e){return this.cJX(d,e)},
cJX(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aDL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.U(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dQ(r,s,t)
t.v(0,d)
u=new q(A.kl(A.cz(t)))
t=J.k(u)
v=B.hKg(C.cR.gcw().aL(new A.d5(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aDL,w)}}
B.b3L.prototype={
by2(d){var x=this,w=x.w
w.onclose=A.ho(new B.cjk(x))
w.onopen=A.ho(new B.cjl(x))
w.onmessage=A.ho(new B.cjm(x))
w.onbufferedamountlow=A.ho(new B.cjn(x))},
gde(d){return this.x},
agU(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$agU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.EY()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fY3(J.eX(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ek(d.arrayBuffer(),y.af),$async$agU)
case 8:v=t.fY3(s.ani(f,0,null))
x=1
break
case 7:case 4:v=B.fY3(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agU,w)}}
B.b3M.prototype={
by3(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.ho(new B.cjq(x)))
w.addEventListener("icecandidate",A.ho(new B.cjr(x)))
w.addEventListener("iceconnectionstatechange",A.ho(new B.cjs(x)))
w.onicegatheringstatechange=A.ho(new B.cjt(x))
w.addEventListener("signalingstatechange",A.ho(new B.cju(x)))
if(!$.h4c())w.addEventListener("connectionstatechange",A.ho(new B.cjv(x)))
w.addEventListener("negotiationneeded",A.ho(new B.cjw(x)))
w.addEventListener("track",A.ho(new B.cjx(x)))},
akB(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$akB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ek(s.createAnswer(A.kl(A.cz(A.U(y.N,y.z)))),y.aQ),$async$akB)
case 3:t=f
v=new B.X1(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akB,w)},
a7a(d,e){return this.bns(0,e)},
bns(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7a)
case 2:return A.h(null,w)}})
return A.i($async$a7a,w)},
a7i(d,e){return this.bnI(0,e)},
bnI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7i=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ek(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a7i)
case 2:return A.h(null,w)}})
return A.i($async$a7i,w)},
aov(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aov=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.X1(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aov,w)},
bH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f9(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bH,w)}}
B.ac2.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.YX.prototype={
T(){return new B.az_()},
gdf(){return this.c}}
B.az_.prototype={
Z(){this.a1()
this.adD()},
adD(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZv(u.e,u.c),$async$adD)
case 2:t=e
if(v.c!=null)v.m(new B.d2M(v,t))
return A.h(null,w)}})
return A.i($async$adD,w)},
Q0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Q0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aoX(t.e,t.c,!1),$async$Q0)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.f_K)
x=1
break}x=4
return A.b(B.a6J(u.a.c,"individual"),$async$Q0)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a5E(A.ea(new B.d2J(u),!1,null,y.H)),$async$Q0)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Q0,w)},
J4(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$J4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fpQ(o),$async$J4)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6N(o.e,r,s,q),$async$J4)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eXN)
x=1
break}x=5
return A.b(B.a6J(u.a.c,"member"),$async$J4)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a5E(A.ea(new B.d2L(u),!1,null,y.H)),$async$J4)
case 6:case 1:return A.h(v,w)}})
return A.i($async$J4,w)},
xU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6I(t.e,o,t.f,t.r,t.w,s),$async$xU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a6J(u.a.c,"org_owner"),$async$xU)
case 4:x=5
return A.b(B.ap1(u.a.c),$async$xU)
case 5:r=e
x=r==null||!J.A(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fqk(o),$async$xU)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a6L(s,t,o,q.c),$async$xU)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.J(y.q).f.S(D.eXK)
x=1
break}x=10
return A.b(B.ap1(u.a.c),$async$xU)
case 10:o=u.c
if(o==null){x=1
break}o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a5E(A.ea(new B.d2K(u),!1,null,y.H)),$async$xU)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xU,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.jh:C.pL,q=B.fWh(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.u(p)+" of "+q+" free"
p=A.n(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fQ,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.fiB,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.n(20),t,t,C.n),t,t,t,t,C.h7,t,t,t),C.aB,D.fBE,C.R,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bZA,C.n),t,t,t,t,C.ex,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lE(new B.d2O(),t),C.O,w,C.dY,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aS:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.acv(C.eT,C.az4,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcdH(),t),C.ac],v))
p.push(new B.acv(C.oV,C.a2h,"Team Member","Sign in with your organization access code + password",u.gcey(),t))
p.push(C.ac)
p.push(new B.acv(C.alz,C.a3Q,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gce3(),t))
return A.c6(t,r,A.bm(!0,A.cd(A.x(p,C.ai,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.aiP,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acv.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.I(C.d.gI(x).j(0.35),C.q,1)
v=A.n(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eH(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eo,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.or,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.X(C.BI,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aBx.prototype={}
B.aEJ.prototype={}
B.jn.prototype={
my(d){var x=this.b,w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b5(x,w+1).toLowerCase())},
gap9(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ab(x/1024,1)+" KB"
if(x<1073741824)return C.k.ab(x/1048576,1)+" MB"
return C.k.ab(x/1073741824,2)+" GB"},
ah(){var x,w=this,v=A.U(y.N,y.z)
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
bc1(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jn(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cIq(d){return this.bc1(null,d)},
aDw(d){return this.bc1(d,null)}}
B.UG.prototype={
T(){return new B.aCU(new A.cs(null,y.A))},
gdf(){return this.c}}
B.aCU.prototype={
Z(){this.a1()
this.adE()},
adE(){var x=0,w=A.j(y.H),v,u=this,t
var $async$adE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BD(u.a.c),$async$adE)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dPy(u,t))
case 1:return A.h(v,w)}})
return A.i($async$adE,w)},
adF(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$adF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fN(new A.fE(s)),$async$adF)
case 3:t=u.c
if(t!=null)t.J(y.q).f.S(D.f0E)
case 1:return A.h(v,w)}})
return A.i($async$adF,w)},
Zl(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$Zl=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ao4(s.d,4),$async$Zl)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_my_code_"+m+".png"),$async$Zl)
case 8:q=e
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Zl,w)},
ahm(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ahm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a9R("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ahm)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahm,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.jh:C.pL,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lH
else if(q.e==null)x=A.av(new A.D(C.ex,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a2J,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a8,C.x,w,p,p),C.n),p,p,p,p,Y.aip,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dn,24)],y.V)
s=q.e
s.toString
r=A.cd(A.x(A.a([x,C.mO,w,C.kF,new A.ex(A.p(p,A.pT(p,p,!1,B.hFh(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kF,A.B(A.a([A.E(A.eA(N.C5,C.Ud,q.gc6I(),p),1),C.at,A.E(A.dn(C.yI,C.a8L,q.gc6J(),A.bn(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.R,new A.a7(1/0,p,A.eA(M.a19,D.fxq,q.gctk(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.MJ,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.UK.prototype={
T(){return new B.aCX(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.aCX.prototype={
Z(){var x,w
this.a1()
x=this.a.e
w=B.In(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
Zm(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Zm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.In(u.d.a.a)
if(t==null){u.m(new B.dQH(u))
x=1
break}u.m(new B.dQI(u))
s=u.a
r=s.c
x=3
return A.b(B.a6H(s.d,new B.dQJ(u),t,r),$async$Zm)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dQK(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$Zm,w)},
a1x(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a1x=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cn(r.a.d)){x=1
break}r.m(new B.dQL(r))
u=4
q=J.fr(r.a.d)
x=7
return A.b(B.rr(r.a.c,q),$async$a1x)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dQM(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahv(p,m,l,j,k),$async$a1x)
case 8:o=e
if(r.c!=null)r.m(new B.dQN(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dQO(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dQP(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1x,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.aeR:D.acF,h=j?D.agi:C.c,g=j?C.aQ:C.M,f=j?C.bK:C.ak,e=j?D.adU:C.aL
i=[i,e,h,g,f,j?C.fd:C.bT]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a5),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a5),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bNc,C.f,k,k,new A.o(k,k,k,A.n(16),k,new A.a8(C.az,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eo,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fD,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a2J,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.ul(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.biv()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.U,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.bs(k,k,k,C.MD,k,k,"",k,!0,new A.b4(4,A.n(18),new A.az(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.n(18),new A.az(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dQQ(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.m5,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.I(i[1],C.q,1)
m=J.Lj(l.a.d,4)
m=A.C(new A.M(m,new B.dQR(x,new A.aFX(i)),m.$ti.k("M<ak.E,t>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.lP,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a6,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.by,s,C.O,e,C.O,q,C.d7,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ej,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.n(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eWj)
else q.push(A.X(C.lo,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aR,A.df(k,A.B(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iF,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.cd(A.x(e,C.ai,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bvH,k,k,C.ah),1)
u=l.f?k:l.gctl()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eA(M.a19,D.fyr,u,A.dg(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cm,k,new A.b7(q,C.Y),new A.az(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc6K()
t=A.bn(C.aE,k,k,0,C.c,k,C.ng,k,new A.b7(A.n(16),C.Y),k,k,k)
return A.c6(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mG(new B.dQS(),A.x(A.a([e,new A.D(D.bvc,A.x(A.a([s,C.O,i,C.ac,A.bG(l.f?C.rS:D.fwP,u,t)],r),C.ai,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cu,C.Yz,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.biv.prototype={
oz(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.ff(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hh(C.bw,v.length),C.aO)}}
B.UH.prototype={
T(){return new B.aCV()}}
B.aCV.prototype={
Z(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b5,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b5,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
q(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a2()},
adG(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$adG=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dPz(r))
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
return A.b(B.a6M(p,m,n,o,C.a.i(l).length===0?null:l),$async$adG)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.J(y.q).f.S(D.f0f)
s=[1]
x=4
break}p.J(y.q).f.S(D.eZT)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dPA(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$adG,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.jh:C.pL,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fpr,s,s,s,1,s,!0),p=A.p(s,D.bny,C.f,s,s,new A.o(s,s,s,A.n(22),s,E.GP,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bU8,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bU3,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.U,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bUj,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.an,s,s,s,s)
v=t.r?s:t.gc6L()
u=A.bn(C.aE,s,s,s,s,C.fR,s,s,s,s,s,s)
return A.c6(q,r,A.cd(A.x(A.a([p,C.d7,o,C.ac,x,C.ac,w,C.mO,A.bG(t.r?C.rS:C.aSi,v,u)],y.p),C.ai,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.abK.prototype={}
B.bv3.prototype={
a4j(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a4j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.anM()))
x=3
return A.b(B.QY(t,s),$async$a4j)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a4j,w)},
gdf(){return this.a}}
B.Nh.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.YW.prototype={
T(){return new B.ayZ(new A.as(C.as,$.aw()),A.jS(!0,null,!0,!0,null,null,!1))}}
B.ayZ.prototype={
Z(){this.a1()
$.aW.x1$.push(new B.d2I(this))},
q(){var x=this.d
x.U$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c6R(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0Z(d),u=x.a.c,t=u?C.id:v.a[2],s=u?C.c:v.a[3],r=u?C.aS:v.a[4],q=u?C.jh:v.a[0],p=A.n(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fQ,32)],n),l=A.p(w,T.aoc,C.f,w,w,new A.o(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cC,16)],n),C.ap_,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.ul(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.buI()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.U,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.bs(w,w,w,C.Fz,w,w,"",w,!0,new A.b4(4,A.n(16),new A.az(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.n(16),D.aZM),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d2G(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.m5,w,w,w,w)
f=f[1]
f=A.E(A.dW(C.nE,new B.d2H(d),A.dg(w,w,w,w,w,w,w,w,w,s,w,w,C.cm,w,new A.b7(A.n(14),C.Y),new A.az(f,1,C.q,-1),w,w,w,w)),1)
h=A.n(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eL(w,C.K,new A.cT(Q.Ku,A.c_(new A.D(C.xT,A.x(A.a([l,C.aR,k,C.O,j,C.dY,i,C.dY,A.B(A.a([f,C.at,A.E(A.c_(A.aF(!1,C.a1,!0,w,A.aL(!1,A.n(14),!0,D.ecm,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc6Q(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.Ou,C.n),C.bf),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.N,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bf),w),w,w,w,C.ML,C.d1,w,w,w)}}
B.buI.prototype={
oz(d,e){return e.akw(e.a.toUpperCase())}}
B.UI.prototype={
T(){return new B.aCW(A.a([],y.r),A.aX(y.N))},
gdf(){return this.c}}
B.aCW.prototype={
Z(){var x=this
x.a1()
x.tI()
x.w=A.dv(C.jo,new B.dQF(x))},
q(){var x=this.w
if(x!=null)x.a7(0)
B.UR()
this.a2()},
a0p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ng(u.a.c),$async$a0p)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AF(u.a.c),$async$a0p)
case 4:u.m(new s.dQ2(u,e))
u.i5("Received "+A.u(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a0p,w)},
tI(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ng(u.a.c),$async$tI)
case 3:t=e
x=4
return A.b(B.AF(u.a.c),$async$tI)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dQ3(u,s))
if(t>0)u.i5("Received "+A.u(t)+" file(s) via My Code.")
u.Nq(u.d)
B.BD(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tI,w)},
Nq(d){return this.bC0(d)},
bC0(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Nq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6R(r,u.a.c),$async$Nq)
case 8:p=f
if(u.c==null){x=1
break}new B.dPC(u,r,p).$0()
u.c.ef()
case 7:if(!(C.a.a0(r.c,"video/")||r.my(D.mF))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.UP(r,u.a.c),$async$Nq)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.K)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AF(u.a.c),$async$Nq)
case 12:u.m(new o.dPD(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Nq,w)},
NN(d){return this.bIj(d)},
bIj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$NN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6R(d,u.a.c),$async$NN)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dPI(u,d,t))
x=6
return A.b(A.fN(new A.fE(t)),$async$NN)
case 6:u.i5("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fN(new A.fE(r.toUpperCase())),$async$NN)
case 7:u.i5("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$NN,w)},
i5(d){var x=null,w=this.c
if(w==null)return
w.J(y.q).f.S(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.T,x,x,x,x,x,x,x,x,x,x))},
tJ(d,e){return this.cDV(d,e)},
cDV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dQt(r,e))
u=3
x=6
return A.b(d.$0(),$async$tJ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dQu(r))
$.eU.mt()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tJ,w)},
gaUS(){var x=this.a
return x.f||x.r||x.w},
I0(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$I0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaUS()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c87(s,n,r,q,o,t),$async$I0)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i5("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fBL(o,u.a.c),$async$I0)
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
return A.b(B.CZ(s,o,r,q,n,t),$async$I0)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$I0,w)},
a_t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a_t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ap1(u.a.c),$async$a_t)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i5("No organization portal found.")
x=1
break}t=J.a4(p)
s=t.h(p,"loginCode")
r=J.k(s==null?"":s)
s=t.h(p,"schoolName")
t=s==null?t.h(p,"organizationName"):s
q=J.k(t==null?"Organization":t)
t=u.c
t.toString
x=4
return A.b(A.a6(t,!1).cm(A.ea(new B.dQ_(u,r,q),!1,null,y.H)),$async$a_t)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a_t,w)},
a0A(d){return this.cmS(d)},
cmR(){return this.a0A(1)},
cmS(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a0A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaUS()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aoZ(u.a.c),$async$a0A)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a0A,w)},
abD(d,e,f){return this.bZ0(d,e,f)},
bZ0(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$abD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i5(e)
x=1
break}x=3
return A.b(u.tJ(new B.dPX(u,d,null,e,f),"Uploading\u2026"),$async$abD)
case 3:case 1:return A.h(v,w)}})
return A.i($async$abD,w)},
bC8(){B.hq9(!1,new B.dPG(this))
return},
crU(){this.m(new B.dQ7(this))},
ay1(){var x=0,w=A.j(y.H),v=this
var $async$ay1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bC8()
return A.h(null,w)}})
return A.i($async$ay1,w)},
abz(){var x=0,w=A.j(y.H),v=this
var $async$abz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dPM(v),"Importing\u2026"),$async$abz)
case 2:return A.h(null,w)}})
return A.i($async$abz,w)},
S1(d){return this.cDk(d)},
cDk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$S1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dQq(u,d),!1,null,y.H)),$async$S1)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.my(D.Qq)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).cm(A.ea(new B.dQr(u,d),!1,null,y.H)),$async$S1)
case 8:x=1
break
case 7:x=u.bZI(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).cm(A.ea(new B.dQs(u,d),!1,null,y.H)),$async$S1)
case 11:x=1
break
case 10:u.i5("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$S1,w)},
bZI(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oD(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cHc,C.a.b5(x,w+1).toLowerCase())},
af6(d){return this.cdL(d)},
cdL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$af6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.my(D.mF)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).cm(A.ea(new B.dPY(u,d),!1,null,y.H)),$async$af6)
case 5:x=1
break
case 4:u.m(new B.dPZ(u,d))
case 1:return A.h(v,w)}})
return A.i($async$af6,w)},
Ro(d){return this.cuQ(d)},
cuQ(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ro=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i5("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Ro)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dQj(u,d),"Preparing QR\u2026"),$async$Ro)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ro,w)},
ahM(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ahM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dQk(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dQl(q),s),s.k("J.E"))
if(r.length===0){u.i5("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Ro(r),$async$ahM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ahM,w)},
ahF(d){return this.cun(d)},
cun(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahF=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0Z(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQd(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ahF)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.S1(d)
break
case"qr":u.Ro(A.a([d],y.r))
break
case"send_my_code":u.cen(A.a([d],y.r))
break
case"save":u.ah0(d)
break
case"delete":u.IQ(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ahF,w)},
Xg(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Xg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.M(t,new B.dPJ(),A.T(t).k("M<1,m>")).fP(0)}t=u.d
s=A.T(t).k("a_<1>")
r=A.C(new A.a_(t,new B.dPK(q),s),s.k("J.E"))
if(r.length===0){u.i5("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pa(t,s.c,s.f),$async$Xg)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tJ(new B.dPL(u,r),"Preparing file\u2026"),$async$Xg)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Xg,w)},
agc(d){return this.clc(d)},
clc(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$agc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hqS(d,!1),$async$agc)
case 3:s=f
r=s==null
q=B.a6O(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i5("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$agc,w)},
afc(){var x=0,w=A.j(y.H),v=this,u
var $async$afc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fJm(u,v.a.c),$async$afc)
case 2:return A.h(null,w)}})
return A.i($async$afc,w)},
bC7(){B.hq9(!1,new B.dPF(this,null))
return},
J3(d,e){return this.ceo(d,e)},
b0_(d){return this.J3(null,d)},
cen(d){return this.J3(d,null)},
ceo(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$J3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a_<1>")
k=A.C(new A.a_(p,new B.dQ0(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xb.c7().an5(!0,C.a_p,!1),$async$J3)
case 10:r=g
if(r==null||J.cn(r.a)){x=1
break}x=11
return A.b(s.tJ(new B.dQ1(l,s,r),"Preparing\u2026"),$async$J3)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.u(q))
s.i5("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i5("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bD0(p,l,e,s.a.c),$async$J3)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i5("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$J3,w)},
Ih(d){return this.bYO(d)},
bYO(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Ih=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hFg(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b0_(t),$async$Ih)
case 8:x=6
break
case 7:u.i5("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i5("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tJ(new B.dPV(u,d),"Receiving video\u2026"),$async$Ih)
case 11:x=1
break
case 10:x=12
return A.b(u.tJ(new B.dPW(u,d),"Receiving\u2026"),$async$Ih)
case 12:case 1:return A.h(v,w)}})
return A.i($async$Ih,w)},
Ea(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ea=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.CT()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.agc(t),$async$Ea)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.Ih(s),$async$Ea)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQ5(u),!1,null,y.N)),$async$Ea)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tI(),$async$Ea)
case 10:x=1
break
case 9:x=11
return A.b(u.Ih(C.a.i(r)),$async$Ea)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ea,w)},
ah0(d){return this.cqs(d)},
cqs(d){var x=0,w=A.j(y.H),v=this
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tJ(new B.dQ4(v,d),"Saving\u2026"),$async$ah0)
case 2:return A.h(null,w)}})
return A.i($async$ah0,w)},
IQ(d){return this.bKD(d)},
bKD(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$IQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l5(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$IQ)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c8a(t),$async$IQ)
case 6:case 5:s=d.a
x=7
return A.b(B.Eu(u.a.c,s),$async$IQ)
case 7:u.r.W(0,s)
x=8
return A.b(u.tI(),$async$IQ)
case 8:case 1:return A.h(v,w)}})
return A.i($async$IQ,w)},
ahS(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0Z(r)
r=u.c
r.toString
x=3
return A.b(A.bS(C.K,null,new B.dQp(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ahS)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.afc()
break
case"import":u.abz()
break}case 1:return A.h(v,w)}})
return A.i($async$ahS,w)},
c6O(d){var x=d.c
if(C.a.a0(x,"video/")||d.my(D.mF))return C.qa
if(C.a.a0(x,"image/")||d.my(D.Qq))return C.u5
if(C.a.t(x,"pdf"))return E.O_
return D.am1},
B(d){var x,w,v=this,u=null,t=B.a0Z(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.GH,u,u,u,new B.dQA(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bNJ,u,u,u,v.e?u:v.gce4(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcrT()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bI2:E.amq,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a16,u,u,u,v.e?u:v.gc6P(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.o8,u,u,u,v.e?u:v.gb17(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bPr,u,u,u,v.e?u:new B.dQB(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lE(new B.dQC(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a5),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a5),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.m6(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.ayW(C.ju,s,!0,t,w?u:v.gcuR(),u),1)
x.push(new A.D(D.btZ,A.mG(new B.dQD(),A.B(A.a([s,C.at,A.E(new B.ayW(C.vS,"Export",!1,t,w?u:v.gbOj(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cu,C.iG,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bd9(t,v.e?u:v.gb17(),u)
else s=A.kb(!0,u,u,new B.dQE(v,t),s,u,D.btR,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.x(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.ayW.prototype={
B(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bn(C.aE,t,t,0,C.c,t,C.vz,t,new A.b7(s,C.Y),t,t,t)
return A.dn(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ck,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dg(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vz,t,new A.b7(s,C.Y),new A.az(v,1,C.q,-1),t,t,t,t)
return A.eA(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eX,t,t,t),u.r,v)}}
B.bd9.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mG(new B.d2E(),new A.D(E.Zt,A.x(A.a([A.mG(new B.d2F(),A.p(x,A.X(C.yd,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.az,C.aC,C.x,u,x,x),C.a5),x,88,x,x,x,x,x,88),C.ew,C.ii,x,x,new A.bq(0.86,1,w),s),C.dY,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.R,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dY,A.dn(C.o8,D.fBX,this.d,A.bn(C.aE,x,x,x,C.c,x,C.Zo,x,new A.b7(A.n(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.N,0,C.p),x),C.cu,C.B6,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.ac3.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.a0(p,"video/")
if(!o||i.my(D.mF))p=D.deB
else{p=C.a.a0(p,"image/")||i.my(D.Qq)
n=y.O
p=p?A.a([C.cT,C.aE],n):A.a([C.aK.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.az,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gap9()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.my(D.mF))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.be,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.ce))
if(!(!o||i.my(D.mF)))l.push(A.fU0(C.aE,!1,j,j,j,!1,j,j,new B.d30(k),j,j,new A.b7(A.n(5),C.Y),j,j,!1,u))
x=A.X(C.o6,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.ce))
return A.mG(new B.d31(),new A.D(C.e6,A.aF(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.D(C.YW,A.B(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.az(t,s,C.q,-1)),j,j,C.ag),j),C.cu,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.YY.prototype={
T(){return new B.az0()},
gdf(){return this.c}}
B.az0.prototype={
Z(){this.a1()
this.xK()},
q(){B.hFv(this.e)
this.a2()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rr(o.c,o.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aH.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hFy(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hFx(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d2Y(s))
x=1
break}s.m(new B.d2Z(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d3_(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
a1w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rr(t.c,t.d),$async$a1w)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(D.eYj)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahv(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1w)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1w,w)},
bYH(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kq(u,C.A,v,new B.d2W(w,t),C.fZ,C.dv,!0,v,v,v,v)
else if(t!=null&&!C.aH.gam(t))x=A.fP(t,C.A,v,new B.d2X(w),C.fZ,C.dv,!0,v,!1,v,v)
else return C.bI
return A.uu(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0Z(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.C6,u,u,u,v.gb4Y(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Ek
else{q=v.r
if(q!=null)t=new A.D(C.ex,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ex,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aR,A.dn(C.C6,D.fkS,v.gb4Y(),A.bn(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.N,0,C.p),u)
t=p}else t=v.bYH()}return A.c6(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.YV.prototype={
T(){return new B.ayY(A.aik(),C.bx,C.bx)},
gdf(){return this.c}}
B.ayY.prototype={
Z(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.fw(w,A.a3(w).k("fw<1>")).im(new B.d2B(v))
x.gcRj().im(new B.d2C(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a3(x).k("fw<1>"))}if(x==null)x=C.b4V
x.im(new B.d2D(v))
v.xK()},
xK(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xK=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rr(p.c,p.d),$async$xK)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d2u(s))
x=1
break}x=8
return A.b(s.d.C5(0,new A.a33(r,s.a.d.c)),$async$xK)
case 8:if(s.c==null){x=1
break}s.m(new B.d2v(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d2w(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xK,w)},
Zn(){var x=0,w=A.j(y.H),v=this,u
var $async$Zn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.ha(0),$async$Zn)
case 5:x=3
break
case 4:x=6
return A.b(u.iq(0),$async$Zn)
case 6:case 3:return A.h(null,w)}})
return A.i($async$Zn,w)},
aSJ(d){var x=d.a
return C.a.aV(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aV(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0Z(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Ek
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bJ1,C.f,o,o,new A.o(o,o,o,A.n(24),o,L.Ou,C.n),o,88,o,o,o,o,o,88)
t=A.l0(C.aE,o,o,m,0,new B.d2x(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aSJ(p.w)+" / "+p.aSJ(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a6,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bn(C.aE,o,o,o,o,D.eUO,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.yn:C.iJ,o,o,o,o,o)
x=A.x(A.a([u,C.kF,t,x,C.d7,A.dn(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc6S(),s)],y.p),C.m,o,C.e,C.N,0,C.p)}}return A.c6(v,w,A.av(new A.D(C.rb,x,o),o,o,o),o,!1,!1,o,o)}}
B.Pt.prototype={
T(){return new B.az3()},
gdf(){return this.c}}
B.az3.prototype={
Z(){this.a1()
this.Pn()},
Pn(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Pn=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fWi(o.c,o.d,new B.d3e(s)),$async$Pn)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d3f(s))
x=1
break}s.e=r
q=O.i1h(r)
if(q==null){s.m(new B.d3g(s))
x=1
break}s.d=q
q.aR(0,s.gb_O())
x=8
return A.b(q.il(0).d8(0,C.r7),$async$Pn)
case 8:if(s.c==null){x=1
break}s.m(new B.d3h(s))
x=9
return A.b(q.pT(0),$async$Pn)
case 9:q.tj(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d3i(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Pn,w)},
ccm(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d3j(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.CR(0,x.gb_O())
w=x.d
if(w!=null)w.q()
B.ib6(x.e)
x.a2()},
adJ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$adJ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aZD(u.c,u.d),$async$adJ)
case 2:t=e
u=v.c
if(u!=null)u.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$adJ,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0Z(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.p1,t,t,t,u.gc6M(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.io(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Ek
else{q=u.r
if(q!=null)s=new A.D(C.ex,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.ahO(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fK(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.A9(s,t),A.aC(t,A.D8(A.p(t,A.X(q?I.yn:C.iJ,C.c,t,t,t,48),C.f,t,t,new A.o(C.aW,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d3l(u),t,t,t,t,t,t,!1,C.a7)],o),t),t)}else s=C.bI}}return A.c6(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Z_.prototype={
T(){return new B.az1(new A.cs(null,y.A))}}
B.az1.prototype={
gcDE(){var x,w,v=this.a
if(v.e!==D.RO)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcDi(){var x,w,v=this.a
if(v.e!==D.zk)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b5(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a1()
x=v.gcDE()
if(x!=null){v.Qp(x)
v.e=A.dv(R.Fr,new B.d3a(v,x))}w=v.gcDi()
if(w!=null){v.Qo(w)
v.f=A.dv(C.fX,new B.d3b(v,w))}},
q(){var x=this.e
if(x!=null)x.a7(0)
x=this.f
if(x!=null)x.a7(0)
this.a2()},
Qo(d){return this.cjo(d)},
cjo(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Qo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ap6(d),$async$Qo)
case 3:t=f
x=4
return A.b(B.c8t(d),$async$Qo)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d32(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Qo,w)},
Qp(d){return this.cjp(d)},
cjp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fJM(d),$async$Qp)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bAV(t),$async$Qp)
case 4:if(u.c==null){x=1
break}u.m(new B.d33(u))
u.c.J(y.q).f.S(D.aPc)
case 1:return A.h(v,w)}})
return A.i($async$Qp,w)},
gc2K(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc6N(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a1i(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1i=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.CT()){t=u.c
if(t!=null)t.J(y.q).f.S(D.f0p)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).cm(A.ea(new B.d34(),!1,null,y.N)),$async$a1i)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bAV(s),$async$a1i)
case 4:t=u.c
if(t!=null)t.J(y.q).f.S(D.aPc)
case 1:return A.h(v,w)}})
return A.i($async$a1i,w)},
a9u(d){return this.bIk(d)},
bIk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fN(new A.fE(C.d.aH(t,", "))),$async$a9u)
case 3:if(d.e!=null){t=d.J(y.q).f
t.S(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a9u,w)},
adH(d){return this.bI4(d)},
bI4(d){var x=0,w=A.j(y.H),v=this
var $async$adH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fN(new A.fE(v.a.c)),$async$adH)
case 2:if(d.e!=null)d.J(y.q).f.S(D.eYN)
return A.h(null,w)}})
return A.i($async$adH,w)},
a1d(d){return this.cqu(d)},
cqu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ao4(s.d,4),$async$a1d)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t_(r,"ngmy_doc_share_qr.png"),$async$a1d)
case 8:q=f
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.J(y.q).f.S(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.u(p),null,null,null,null,null,null,null,null,null,null),null,C.T,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1d,w)},
gaW_(){var x,w=this.a
if(w.e!==D.HR)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b5(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b5(x,13))
return null},
a9r(d){return this.bId(d)},
bId(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a9r=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaW_()
if(t==null){x=1
break}x=3
return A.b(A.fN(new A.fE(C.a.a0(t,"http")?t:"N2|"+t)),$async$a9r)
case 3:if(d.e!=null)d.J(y.q).f.S(D.f_p)
case 1:return A.h(v,w)}})
return A.i($async$a9r,w)},
adI(){var x=0,w=A.j(y.H),v=this,u
var $async$adI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.UR(),$async$adI)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$adI,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0Z(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.HR&&i!==D.RO&&i!==D.zk
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.HR||t===D.RO||t===D.zk?l:A.aH(l,l,l,l,C.l2,l,l,l,m.gaYY(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pT(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.by,A.d(""+q.d+" file(s) \xb7 "+m.gc2K(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.HR){t=C.aE.j(0.12)
o=A.n(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}q.push(C.aR)
q.push(A.d(m.gc6N(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.R,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bTc,D.fu3,new B.d35(m,d),l)],p))}if(m.a.e===D.HR&&m.gaW_()!=null)C.d.v(q,A.a([C.R,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a6,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hn(D.bPL,D.fqO,new B.d36(m,d),l)],p))
if(m.a.e===D.zk){x=(m.w?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ab(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.En:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l)],p))}if(m.a.e===D.RO){x=(m.r?C.dA:C.aE).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.En:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.ms,l,l,l),C.ac,A.dn(D.bLv,D.fx7,m.gcqS(),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oo(i,A.c6(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b9,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.B(A.a([A.E(A.eA(N.C5,C.Ud,new B.d37(m,d),l),1),C.at,A.E(A.dn(C.yI,C.a8L,new B.d38(m,d),A.bn(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bG(C.zU,m.gaYY(),A.bn(C.aK,l,l,l,l,C.fR,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d39(),y.C)}}
B.ac1.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.n(16),u=y.p
v=A.cd(A.x(A.a([w,C.aR,A.p(x,A.pT(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.N,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.em(A.a([A.bG(C.zV,new B.d2t(d),x)],u),x,x,C.mX,v,x,x,x,x,D.fjT,x)}}
B.YU.prototype={
T(){return new B.ayX(A.ze(C.xA,C.nL,C.uj))}}
B.ayX.prototype={
q(){this.d.q()
this.a2()},
awE(d){var x,w,v,u,t
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
return A.c6(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.frh,x,x,x,1,x,!0),C.w,A.zd(this.d,C.bV,this.gawD()),x,!1,!1,x,x)}}
B.Z0.prototype={
T(){return new B.az2(A.ze(C.xA,C.nL,C.uj))},
gdf(){return this.c}}
B.az2.prototype={
bZK(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
afz(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$afz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.RZ("text/plain"),$async$afz)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.J(y.q).f.S(D.f0j)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$afz,w)},
aaf(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hqS(p,!0),$async$aaf)
case 3:t=e
p=t==null
s=B.a6O(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.J(y.q).f.S(D.eXU)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aaf,w)},
q(){this.d.q()
this.a2()},
awE(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.K)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bZK(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.anj,v,v,v,w.gbNQ(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a1d,v,v,v,w.gcgN(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.rh:P.NL,v,v,v,v,v),v,v,v,new B.d3d(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fxZ,v,v,v,1,v,!0)
u=A.zd(w.d,C.bV,w.gawD())
x=A.n(20)
return A.c6(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aK,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ei7],s),v),v,!1,!1,v,v)}}
B.bda.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oN
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.n(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oN:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.D(C.Zz,A.B(A.a([u,C.be,A.E(A.x(t,C.F,r,C.e,C.j,0,C.p),1),A.X(C.ey,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a9d.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.Oj.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.X0.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.Oi.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.EZ.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.cjo.prototype={}
B.EY.prototype={}
B.a9c.prototype={}
B.atp.prototype={}
B.X1.prototype={}
var z=a.updateTypes(["aA<~>()","R(jn)","m(jn)","UI(Y)","~()","YX(Y)","G(G,jn)","Pt(Y)","~(m0)","cr(EY)","aA<jn?>(@)","UG(Y)","UK(Y)","D(jn)","jn(@)","a5<m,@>(jn)","YW(Y)","UH(Y)","YY(Y)","YV(Y)","Z_(Y)","ac1(Y)","ai<jn>()","Z0(Y)","ac3(Y,G)","YU(Y)","a5<m,aD>(jn)","cr(X0)","cr(a9c)","aA<cr>(EY)"])
B.cjk.prototype={
$1(d){var x=this.a
x.x=D.aMl
x.y.L(0,D.aMl)},
$S:68}
B.cjl.prototype={
$1(d){var x=this.a
x.x=D.aMk
x.y.L(0,D.aMk)},
$S:68}
B.cjm.prototype={
$1(d){var x=this.a
x.agU(A.aOE(d.data)).bC(new B.cjj(x),y.b)},
$S:68}
B.cjj.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cjn.prototype={
$1(d){},
$S:68}
B.cjq.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hKf(d.channel))},
$S:15}
B.cjr.prototype={
$1(d){},
$S:15}
B.cjs.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2j(w.iceConnectionState)
x.cx=w
if($.h4c())switch(w.a){case 0:x.cy=D.aMq
break
case 1:x.cy=D.aMr
break
case 3:x.cy=D.aMs
break
case 5:x.cy=D.aMo
break
case 6:x.cy=D.aMp
break
case 7:x.cy=D.a6r
break
default:break}},
$S:148}
B.cjt.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i2k(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:148}
B.cju.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.icA(w.signalingState)},
$S:148}
B.cjv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.iaO(w.connectionState)},
$S:148}
B.cjw.prototype={
$1(d){},
$S:148}
B.cjx.prototype={
$1(d){},
$S:15}
B.flF.prototype={
$1(d){var x=y.F.a(new A.rP([],[]).pB(d.target.result,!1)),w=C.xB.t(x.objectStoreNames,"blobs")
if(!w)C.xx.KG(x,"blobs")},
$S:202}
B.fJa.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.w4.ff(this.b)
$.eU.mt()
this.c.$1(d)},
$S:460}
B.fJc.prototype={
$1(d){return this.a.$1(B.hT7(this.b,this.c))},
$S:35}
B.fJb.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:35}
B.fJ9.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fJp.prototype={
$1(d){var x=this
return B.hgo(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fJq.prototype={
$1(d){var x=this
return B.hgo(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fnT.prototype={
$1(d){var x=this
return B.c84(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d2M.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d2J.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d2L.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d2K.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c84(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d2O.prototype={
$4(d,e,f,g){var x=null
return A.jI(A.B(A.a([A.aH(x,x,x,x,D.bK6,x,x,x,new B.d2N(d),x,x,x,x,x,x),A.E(A.EK(D.Qa,!0,x,C.a0k,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Qa,x,g,C.aj9,0,e,f)},
$C:"$4",
$R:4,
$S:412}
B.d2N.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpT.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eG,y.o).w,t=this.a,s=t?C.id:C.c,r=A.n(28),q=A.p(v,D.bnS,C.f,v,v,D.b0q,v,v,v,v,D.aj_,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bOh,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.FE,A.x(A.a([o,C.ac,A.aM(v,C.U,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.bs(v,new A.b4(4,A.n(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.anz,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.an,v,v,v,v),C.by,A.B(A.a([A.E(A.dW(C.df,new B.fpR(d),v),1),C.at,A.E(A.bG(D.fpP,new B.fpS(p,x,d),A.bn(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.N,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Mr,v,v,v,v),v)},
$S:61}
B.fpR.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fpS.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.J(y.q).f.S(D.eZ1)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aBx(v,x))},
$S:0}
B.fqm.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eG,y.o).w,u=x.a,t=u?C.id:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bnI,C.f,w,w,D.b1T,w,w,w,w,D.aj_,w,w,1/0),new A.D(C.FE,A.x(A.a([A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.h0f(u,"Organization name",C.G5,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.h0f(u,"Access code",C.nl,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.R,A.aM(w,C.U,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.h0f(u,"Member password",H.GC,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.an,w,w,w,w),C.by,A.bG(D.fy4,new B.fql(r,q,p,d),A.bn(C.aE,w,w,w,w,C.fR,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.N,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Mr,w,w,w,w),w)},
$S:61}
B.fql.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.J(y.q).f.S(D.eZ6)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aEJ(u,x,w))},
$S:0}
B.c7W.prototype={
$1(d){var x=0,w=A.j(y.l),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j,i,h
var $async$$1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(!y.f.b(d)){v=null
x=1
break}l=J.a4(d)
k=l.h(d,"name")
r=J.k(k==null?"file":k)
k=l.h(d,"mime")
q=J.k(k==null?"application/octet-stream":k)
l=l.h(d,"url")
j=J.k(l==null?"":l)
p=C.a.a0(j,"http")?A.cE(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.vi(p,null).d8(0,C.Yy),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BE(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ab(h)
$.am.$1("[doc share lan web] "+A.u(r)+": "+A.u(m))
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
B.c81.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c82.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c83.prototype={
$1(d){return d.b},
$S:z+2}
B.c7Y.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c7Z.prototype={
$1(d){return d.b},
$S:z+2}
B.c7X.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.c8_.prototype={
$1(d){var x=J.q(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.c80.prototype={
$1(d){var x=J.q(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fJn.prototype={
$1(d){return new B.UG(this.a,null)},
$S:z+11}
B.fJo.prototype={
$1(d){return new B.UK(this.a,this.b,this.c,null)},
$S:z+12}
B.dPy.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dQH.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dQI.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dQJ.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dQG(x,d))},
$S:2}
B.dQG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQK.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQL.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dQM.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dQN.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dQO.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.u(this.b)},
$S:0}
B.dQP.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dQS.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.dQQ.prototype={
$1(d){var x=this.a
return x.f?null:x.Zm()},
$S:2}
B.dQR.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.my(D.Qq))s=C.u5
else s=C.a.a0(s,"video/")||d.my(D.mF)?C.qa:D.am1
x=this.b.a
w=y.p
return new A.D(C.kV,A.B(A.a([A.p(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gap9(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dPz.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dPA.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c85.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.c86.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:92}
B.fK3.prototype={
$2(d,e){return e===this.a},
$S:284}
B.fiS.prototype={
$1(d){return J.k(d)},
$S:17}
B.fo4.prototype={
$1(d){var x=this.b
B.hRb(C.FT.ga5Y(this.a)).bC(x.gcGJ(x),y.H)},
$S:124}
B.fo5.prototype={
$1(d){return this.a.d5(0,null)},
$S:124}
B.fo6.prototype={
$0(){return null},
$S:11}
B.c8k.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fo7.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jn(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fs7.prototype={
$1(d){return d.ah()},
$S:z+15}
B.fmx.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fmy.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c8p.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.fO9.prototype={
$1(d){return new B.YW(this.a,null)},
$S:z+16}
B.d2I.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fO()},
$S:8}
B.d2G.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d2H.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQF.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a0p()},
$S:12}
B.dQ2.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dQ3.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPC.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPB(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDw(this.c)}},
$S:0}
B.dPB.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dPD.prototype={
$0(){var x=J.bE4(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dPI.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dPH(this.b))
if(w>=0){x=x.d
x[w]=x[w].aDw(this.c)}},
$S:0}
B.dPH.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQt.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dQu.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dQ_.prototype={
$1(d){return new B.UH(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dPX.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.I0(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.UL(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tI(),$async$$0)
case 5:s=J.a4(t)
x=s.gcl(t)?6:7
break
case 6:x=8
return A.b(r.a0A(s.gM(t)),$async$$0)
case 8:case 7:r.i5(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPG.prototype={
$1(d){this.a.abD(d,"No files selected.","Added")},
$S:460}
B.dQ7.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.M(x,new B.dQ6(),A.T(x).k("M<1,m>")))},
$S:0}
B.dQ6.prototype={
$1(d){return d.a},
$S:z+2}
B.dPM.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xb.c7().cTg(C.a_p,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fr(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aH.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.js(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.u(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i5("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i5("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ap5(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cn(l)){o.i5("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tI(),$async$$0)
case 9:o.i5("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dQq.prototype={
$1(d){return new B.Pt(this.a.a.c,this.b,null)},
$S:z+7}
B.dQr.prototype={
$1(d){return new B.YY(this.a.a.c,this.b,null)},
$S:z+18}
B.dQs.prototype={
$1(d){return new B.YV(this.a.a.c,this.b,null)},
$S:z+19}
B.dPY.prototype={
$1(d){return new B.Pt(this.a.a.c,this.b,null)},
$S:z+7}
B.dPZ.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQj.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.I0(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6Q(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i5("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cmR(),$async$$0)
case 5:x=6
return A.b(p.tI(),$async$$0)
case 6:r=A.T(t).k("M<1,m>")
r=new A.M(new A.M(t,new B.dQf(p),r),new B.dQg(),r.k("M<ak.E,m>")).c0(0,new B.dQh())
q=A.C(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).cm(A.ea(new B.dQi(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.p9(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.UR(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQf.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dQe(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dQe.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dQg.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dQh.prototype={
$1(d){return d.length!==0},
$S:3}
B.dQi.prototype={
$1(d){var x=this.a
return new B.Z_(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dQk.prototype={
$1(d){return d.a},
$S:z+2}
B.dQl.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dQd.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.n(99),v,v,C.n),v,4,v,C.kU,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gap9(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.my(D.mF)?C.u7:C.oZ
p=!x||p.my(D.mF)?"Play video":"View"
return A.c_(A.bm(!0,new A.D(C.Bi,A.x(A.a([q,o,t,C.aB,B.YZ(!1,u,!1,w,p,new B.dQ8(d),v),B.YZ(!1,u,!1,C.ju,"Share via QR",new B.dQ9(d),"Letters/numbers QR code"),B.YZ(!1,u,!1,D.a0q,"Send to their Code",new B.dQa(d),"Enter someone else's personal code"),B.YZ(!1,u,!1,C.hC,"Download / save",new B.dQb(d),v),C.am,B.YZ(!1,u,!0,C.e7,"Delete",new B.dQc(d),v)],y.p),C.ai,v,C.e,C.N,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bO(new A.az(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,v,v,C.n),C.bf)},
$S:688}
B.dQ8.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dQ9.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dQa.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dQb.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dQc.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dPJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dPK.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dPL.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6S(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Gs(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.p9(s.c,s.f),$async$$0)
case 4:u.i5(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPF.prototype={
$1(d){var x=this.a
x.tJ(new B.dPE(x,d,this.b),"Preparing\u2026")},
$S:460}
B.dPE.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i5("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.UL(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cn(s)){t.i5("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bD0(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i5("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQ0.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dQ1.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.fWl(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Gp(new B.dPR(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i5("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dPS(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dPT(s))
case 5:x=8
return A.b(r.b.ir(0,C.Fn,new B.dPU()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a4(t)
if(q.gam(t)){s.i5("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tI(),$async$$0)
case 9:s.i5("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPR.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPO(x,d,e))},
$S:140}
B.dPO.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPS.prototype={
$1(d){return new B.ac1(this.a.a,null)},
$S:z+21}
B.dPT.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dPU.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dPW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.In(o)!=null?3:4
break
case 3:x=5
return A.b(B.a6G(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b0_(B.In(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ap5(new B.dPP(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cn(r)){if(B.fWk(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i5(q)
x=1
break}x=10
return A.b(s.tI(),$async$$0)
case 10:o=J.cF(r)
p=o.eP(r,new B.dPQ()).gM(0)
s.i5(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dPP.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dPN(x,d,e))},
$S:140}
B.dPN.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dPQ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.dQ5.prototype={
$1(d){return new B.Z0(this.a.a.c,null)},
$S:z+23}
B.dQ4.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aZD(u.a.c,v.b),$async$$0)
case 2:t.i5(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dQp.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.D(C.Bi,A.x(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.n(99),x,x,C.n),x,4,x,C.kU,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.YZ(!0,w,!1,C.nl,"My Code",new B.dQm(d),"Your personal code & QR \u2014 others send docs to you"),B.YZ(!1,w,!1,D.a0q,"Send to their Code",new B.dQn(this.a,d),"Enter someone else's 5-digit code + letter"),B.YZ(!1,w,!1,S.yx,"Import backup",new B.dQo(d),".ngmydoc file from another device")],y.p),C.ai,x,C.e,C.N,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bO(new A.az(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kL,x,x,C.n),C.bf)},
$S:688}
B.dQm.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dQn.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bC7()},
$S:0}
B.dQo.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dQC.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.Ix(D.Qa,x,C.a0k,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cR(C.d.gI(D.Qa).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dQA.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dQB.prototype={
$0(){this.a.ahS()
return null},
$S:0}
B.dQD.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*10)),e)},
$S:100}
B.dQE.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.ac3(e,w,v,this.b,x.e,x.c6O(w),new B.dQw(x,w),new B.dQx(x,v,w),new B.dQy(x,w),new B.dQz(x,w),null)},
$S:z+24}
B.dQw.prototype={
$0(){this.a.af6(this.b)
return null},
$S:0}
B.dQx.prototype={
$0(){var x=this.a
return x.m(new B.dQv(x,this.b,this.c))},
$S:0}
B.dQv.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dQy.prototype={
$0(){this.a.NN(this.b)
return null},
$S:0}
B.dQz.prototype={
$0(){this.a.ahF(this.b)
return null},
$S:0}
B.d2E.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*18)),e)},
$S:100}
B.d2F.prototype={
$3(d,e,f){return A.ef(C.A,f,e,null,null)},
$S:136}
B.d31.prototype={
$3(d,e,f){return A.de(A.dX(f,new A.v(0,(1-e)*14)),e)},
$S:100}
B.d30.prototype={
$1(d){return this.a.y.$0()},
$S:81}
B.d2Y.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d2Z.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d3_.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.u(this.b)},
$S:0}
B.d2W.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aH.gam(w))return A.fP(w,C.A,x,new B.d2U(this.a),C.fZ,C.dv,!0,x,!1,x,x)
$.aW.x1$.push(new B.d2V(this.a))
return C.bI},
$S:137}
B.d2U.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2S(this.a))
return C.bI},
$S:199}
B.d2S.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2P(x))},
$S:8}
B.d2P.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2V.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2R(x))},
$S:8}
B.d2R.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2X.prototype={
$3(d,e,f){$.aW.x1$.push(new B.d2T(this.a))
return C.bI},
$S:199}
B.d2T.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d2Q(x))},
$S:8}
B.d2Q.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d2B.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2A(x,d))},
$S:1743}
B.d2A.prototype={
$0(){return this.a.f=this.b===C.uE},
$S:0}
B.d2C.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2z(x,d))},
$S:8}
B.d2z.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d2D.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d2y(x,d))},
$S:8}
B.d2y.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d2u.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d2v.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d2w.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.u(this.b)},
$S:0}
B.d2x.prototype={
$1(d){return this.a.d.MO(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d3e.prototype={
$0(){var x=this.a.a
return B.rr(x.c,x.d)},
$S:1744}
B.d3f.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d3g.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d3h.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d3i.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.u(this.b)},
$S:0}
B.d3j.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d3l.prototype={
$0(){var x=this.a
x.m(new B.d3k(x))},
$S:0}
B.d3k.prototype={
$0(){var x=this.a.d
if(x.a.f)x.ha(0)
else x.pT(0)},
$S:0}
B.d3a.prototype={
$1(d){return this.a.Qp(this.b)},
$S:12}
B.d3b.prototype={
$1(d){return this.a.Qo(this.b)},
$S:12}
B.d32.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d33.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d34.prototype={
$1(d){return D.h2I},
$S:z+25}
B.d39.prototype={
$2(d,e){if(d)B.UR()},
$S:122}
B.d35.prototype={
$0(){return this.a.a9u(this.b)},
$S:0}
B.d36.prototype={
$0(){return this.a.a9r(this.b)},
$S:0}
B.d37.prototype={
$0(){return this.a.adH(this.b)},
$S:0}
B.d38.prototype={
$0(){return this.a.a1d(this.b)},
$S:0}
B.d2t.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d3d.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pX(),$async$$0)
case 2:u.m(new B.d3c(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d3c.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c8r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.my(D.mF)},
$S:z+1}
B.c8s.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c8q.prototype={
$2(d,e){return this.bjr(d,e)},
bjr(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.US(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1745}
B.frK.prototype={
$1(d){if(d===D.a6q&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.frL.prototype={
$0(){},
$S:11}
B.fsh.prototype={
bl_(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fg_(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hbx(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bl_(d,e)},
$S:731}
B.fsg.prototype={
$1(d){var x=this
d.b=new B.fsf(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fsf.prototype={
$1(d){return this.bkZ(d)},
bkZ(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aZE(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.S.aK(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
x=16
return A.b(s.c.$2(n,J.k(m==null?"application/octet-stream":m)),$async$$1)
case 16:x=14
break
case 15:x=J.A(q,"done")?17:18
break
case 17:n=s.a
m=n.a
l=s.b
x=19
return A.b(B.fg_(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d5(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.u(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6P(m),$async$$1)
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
x(v=B.az_.prototype,"gcdH","Q0",0)
x(v,"gcey","J4",0)
x(v,"gce3","xU",0)
x(v=B.aCU.prototype,"gc6I","adF",0)
x(v,"gc6J","Zl",0)
x(v,"gctk","ahm",0)
x(v=B.aCX.prototype,"gc6K","Zm",0)
x(v,"gctl","a1x",0)
x(B.aCV.prototype,"gc6L","adG",0)
x(B.ayZ.prototype,"gc6Q","c6R",4)
x(v=B.aCW.prototype,"gce4","a_t",0)
x(v,"gcrT","crU",4)
x(v,"gb17","ay1",0)
x(v,"gcuR","ahM",0)
x(v,"gbOj","Xg",0)
x(v,"gc6P","Ea",0)
x(B.az0.prototype,"gb4Y","a1w",0)
x(B.ayY.prototype,"gc6S","Zn",0)
x(v=B.az3.prototype,"gb_O","ccm",4)
x(v,"gc6M","adJ",0)
x(v=B.az1.prototype,"gcqS","a1i",0)
x(v,"gaYY","adI",0)
w(B.ayX.prototype,"gawD","awE",8)
x(v=B.az2.prototype,"gcgN","afz",0)
x(v,"gbNQ","aaf",0)
w(v,"gawD","awE",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.cjo,B.a9c,B.atp,B.aBx,B.aEJ,B.jn,B.abK,B.bv3,B.EY,B.X1])
w(B.cjp,B.cjo)
w(B.b3L,B.a9c)
x(A.i_,[B.cjk,B.cjl,B.cjm,B.cjj,B.cjn,B.cjq,B.cjr,B.cjs,B.cjt,B.cju,B.cjv,B.cjw,B.cjx,B.flF,B.fJa,B.fJc,B.fJb,B.fJp,B.fJq,B.fnT,B.d2J,B.d2L,B.d2K,B.d2O,B.fpT,B.fqm,B.c7W,B.c82,B.c83,B.c7Z,B.c7X,B.c8_,B.c80,B.fJn,B.fJo,B.dQJ,B.dQS,B.dQQ,B.dQR,B.fiS,B.fo4,B.fo5,B.c8k,B.fo7,B.fs7,B.fmx,B.fmy,B.c8p,B.fO9,B.d2I,B.d2G,B.dQF,B.dPB,B.dPH,B.dQ_,B.dPG,B.dQ6,B.dQq,B.dQr,B.dQs,B.dPY,B.dQf,B.dQe,B.dQg,B.dQh,B.dQi,B.dQk,B.dQl,B.dQd,B.dPJ,B.dPK,B.dPF,B.dQ0,B.dPS,B.dPQ,B.dQ5,B.dQp,B.dQC,B.dQD,B.d2E,B.d2F,B.d31,B.d30,B.d2W,B.d2U,B.d2S,B.d2V,B.d2X,B.d2T,B.d2B,B.d2C,B.d2D,B.d2x,B.d3a,B.d3b,B.d34,B.c8r,B.c8s,B.frK,B.fsg,B.fsf])
w(B.b3M,B.atp)
x(A.ja,[B.fJ9,B.d2M,B.d2N,B.fpR,B.fpS,B.fql,B.dPy,B.dQH,B.dQI,B.dQG,B.dQK,B.dQL,B.dQM,B.dQN,B.dQO,B.dQP,B.dPz,B.dPA,B.fo6,B.d2H,B.dQ2,B.dQ3,B.dPC,B.dPD,B.dPI,B.dQt,B.dQu,B.dPX,B.dQ7,B.dPM,B.dPZ,B.dQj,B.dQ8,B.dQ9,B.dQa,B.dQb,B.dQc,B.dPL,B.dPE,B.dQ1,B.dPV,B.dPO,B.dPT,B.dPU,B.dPW,B.dPN,B.dQ4,B.dQm,B.dQn,B.dQo,B.dQA,B.dQB,B.dQw,B.dQx,B.dQv,B.dQy,B.dQz,B.d2Y,B.d2Z,B.d3_,B.d2P,B.d2R,B.d2Q,B.d2A,B.d2z,B.d2y,B.d2u,B.d2v,B.d2w,B.d3e,B.d3f,B.d3g,B.d3h,B.d3i,B.d3j,B.d3l,B.d3k,B.d32,B.d33,B.d35,B.d36,B.d37,B.d38,B.d2t,B.d3d,B.d3c,B.frL])
x(A.md,[B.ac2,B.Nh,B.a9d,B.Oj,B.X0,B.Oi,B.EZ])
x(A.ag,[B.YX,B.UG,B.UK,B.UH,B.YW,B.UI,B.YY,B.YV,B.Pt,B.Z_,B.YU,B.Z0])
x(A.ah,[B.az_,B.aCU,B.aCX,B.aCV,B.ayZ,B.aCW,B.az0,B.ayY,B.az3,B.az1,B.ayX,B.az2])
x(A.au,[B.acv,B.ayW,B.bd9,B.ac3,B.ac1,B.bda])
x(A.km,[B.c81,B.c7Y,B.c85,B.c86,B.fK3,B.dPR,B.dPP,B.dQE,B.d39,B.c8q,B.fsh])
x(A.iU,[B.biv,B.buI])})()
A.k0(b.typeUniverse,JSON.parse('{"b3L":{"a9c":[]},"b3M":{"atp":[]},"YX":{"ag":[],"t":[]},"az_":{"ah":["YX"]},"acv":{"au":[],"t":[]},"UG":{"ag":[],"t":[]},"UK":{"ag":[],"t":[]},"aCU":{"ah":["UG"]},"aCX":{"ah":["UK"]},"biv":{"iU":[]},"UH":{"ag":[],"t":[]},"aCV":{"ah":["UH"]},"YW":{"ag":[],"t":[]},"UI":{"ag":[],"t":[]},"ac3":{"au":[],"t":[]},"YY":{"ag":[],"t":[]},"YV":{"ag":[],"t":[]},"Pt":{"ag":[],"t":[]},"Z_":{"ag":[],"t":[]},"ac1":{"au":[],"t":[]},"YU":{"ag":[],"t":[]},"Z0":{"ag":[],"t":[]},"ayZ":{"ah":["YW"]},"buI":{"iU":[]},"aCW":{"ah":["UI"]},"ayW":{"au":[],"t":[]},"bd9":{"au":[],"t":[]},"az0":{"ah":["YY"]},"ayY":{"ah":["YV"]},"az3":{"ah":["Pt"]},"az1":{"ah":["Z_"]},"ayX":{"ah":["YU"]},"az2":{"ah":["Z0"]},"bda":{"au":[],"t":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("ud"),k:x("LK()"),m:x("bk<m,m>"),F:x("r3"),g:x("aA<jn?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a5<m,R>>"),t:x("O<a5<m,@>>"),r:x("O<jn>"),w:x("O<+file,name(lz,m)>"),u:x("O<cR>"),s:x("O<m>"),E:x("O<iU>"),a:x("O<dL>"),p:x("O<t>"),Z:x("O<G>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("ai<jn>"),j:x("ai<@>"),I:x("ai<G>"),M:x("bv<m,m>"),P:x("a5<m,@>"),f:x("a5<@,@>"),o:x("iE"),e:x("igv"),af:x("Ea"),U:x("jn"),b:x("cr"),C:x("aD"),aK:x("w8"),ab:x("EY"),br:x("atp"),v:x("X1"),N:x("m"),X:x("bq<L>"),Q:x("lL"),D:x("dL"),aw:x("cx<m>"),cd:x("a_<a5<m,@>>"),c7:x("t"),ch:x("bX<ai<jn>>"),aW:x("bX<dL?>"),aY:x("bX<~>"),cx:x("ac2"),b1:x("bg<ai<jn>>"),cf:x("bg<dL?>"),d4:x("bg<~>"),c4:x("aBx"),bG:x("aEJ"),q:x("n2"),B:x("pr<EY>"),c6:x("pr<a9d>"),y:x("R"),i:x("L"),z:x("@"),S:x("G"),aQ:x("bh?"),_:x("ai<jn>?"),aL:x("ai<@>?"),h:x("a5<m,@>?"),l:x("jn?"),R:x("aD?"),c:x("X1?"),d:x("+answerQr,transfer(m,aA<ai<jn>>)?"),cw:x("+qrPayload,token,usesRemaining(m,m,G)?"),L:x("+fileCount,mode,qrPayload(G,Nh,m)?"),aX:x("+fileCount,qrPayload,token(G,m,m)?"),T:x("m?"),K:x("dL?"),cm:x("abK?"),bk:x("aBx?"),ag:x("aEJ?"),dd:x("L?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aZM=new A.az(C.aE,2,C.q,-1)
D.bXJ=new A.a8(C.a3,C.a8,C.x,C.a2h,null,null)
D.b0q=new A.o(null,null,null,C.mc,null,D.bXJ,C.n)
D.b1T=new A.o(null,null,null,C.mc,null,E.GP,C.n)
D.acF=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.adU=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.aeR=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.agi=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.fkL=new A.y("Your team portal",null,C.dj,null,null,null,null,null,null,null,null,null)
D.fz_=new A.y("Share the access code and member password with your team. They only sign in once.",null,G.DA,null,null,null,null,null,null,null,null,null)
D.d6i=x([D.fkL,C.am,D.fz_],y.p)
D.bny=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d6i,null)
D.fDk=new A.y("Create your organization",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fp2=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.DA,null,null,null,null,null,null,null,null,null)
D.dm5=x([D.fDk,C.am,D.fp2],y.p)
D.bnI=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dm5,null)
D.fzB=new A.y("Team Member sign-in",null,C.ft,null,null,null,null,null,null,null,null,null)
D.fsR=new A.y("Enter the access code and password from your organization.",null,G.DA,null,null,null,null,null,null,null,null,null)
D.djV=x([D.fzB,C.am,D.fsR],y.p)
D.bnS=new A.fm(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.djV,null)
D.btR=new A.Q(16,10,16,28)
D.btZ=new A.Q(16,14,16,4)
D.bvc=new A.Q(20,0,20,16)
D.bvH=new A.Q(20,8,20,16)
D.aj_=new A.Q(24,22,24,20)
D.a0q=new A.a0(63394,"MaterialIcons",!1)
D.am1=new A.a0(63515,"MaterialIcons",!1)
D.bI2=new A.a0(983813,"MaterialIcons",!1)
D.bFh=new A.a0(62867,"MaterialIcons",!1)
D.bJ1=new A.ae(D.bFh,44,C.c,null,null,null)
D.bK6=new A.ae(C.q0,null,C.ad,null,null,null)
D.bLv=new A.ae(C.j3,18,null,null,null,null)
D.bNc=new A.ae(D.a0q,26,C.c,null,null,null)
D.bNJ=new A.ae(C.BX,null,null,null,null,null)
D.bOh=new A.ae(C.yz,null,null,null,null,null)
D.bPr=new A.ae(W.NY,null,null,null,null,null)
D.bPL=new A.ae(C.hq,16,null,null,null,null)
D.bTc=new A.ae(C.rl,16,null,null,null,null)
D.bJj=new A.ae(C.nl,null,null,null,null,null)
D.bU3=new A.e4(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJj,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bOP=new A.ae(C.G5,null,null,null,null,null)
D.bU8=new A.e4(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOP,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJE=new A.ae(H.GC,null,null,null,null,null)
D.bUj=new A.e4(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJE,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cHJ=x([C.fd,C.aZ,C.aE],y.O)
D.bZA=new A.a8(C.az,C.aC,C.x,D.cHJ,null,null)
D.cHc=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Qa=x([C.fd,C.aE],y.O)
D.Qq=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mF=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.deB=x([C.pE,C.aE],y.O)
D.e6r={iceServers:0}
D.aH_={urls:0}
D.dpR=new A.bk(D.aH_,["stun:stun.l.google.com:19302"],y.m)
D.dpQ=new A.bk(D.aH_,["stun:stun1.l.google.com:19302"],y.m)
D.cXz=x([D.dpR,D.dpQ],A.ax("O<a5<m,m>>"))
D.dp8=new A.bk(D.e6r,[D.cXz],A.ax("bk<m,@>"))
D.HR=new B.Nh(0,"lanDirect")
D.RN=new B.Nh(1,"cloudStash")
D.dBb=new B.Nh(2,"inlineInstant")
D.RO=new B.Nh(3,"webrtcLink")
D.zk=new B.Nh(4,"videoCloud")
D.fyZ=new A.y("Receive file",null,C.nD,null,null,null,null,null,null,null,null,null)
D.cxd=x([E.anH,C.ab,D.fyZ],y.p)
D.eQj=new A.cl(C.aP,C.b9,C.j,C.m,null,C.p,null,0,D.cxd,null)
D.ecm=new A.D(C.cm,D.eQj,null)
D.fbT=new A.H(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a2X,null,null,null)
D.fli=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fbT,null,C.L,null,null,null,null,null,null,null)
D.ebE=new A.D(C.Bn,D.fli,null)
D.b68=new A.cp(C.A,null,null,D.ebE,null)
D.ei7=new A.cL(0,null,0,28,null,null,D.b68,null)
D.eiq=new B.a9d(0,"RTCDataChannelConnecting")
D.aMk=new B.a9d(1,"RTCDataChannelOpen")
D.aMl=new B.a9d(3,"RTCDataChannelClosed")
D.eir=new B.EZ(0,"RTCIceConnectionStateNew")
D.eis=new B.EZ(1,"RTCIceConnectionStateChecking")
D.eit=new B.EZ(2,"RTCIceConnectionStateCompleted")
D.eiu=new B.EZ(3,"RTCIceConnectionStateConnected")
D.eiv=new B.EZ(4,"RTCIceConnectionStateCount")
D.eiw=new B.EZ(5,"RTCIceConnectionStateFailed")
D.eix=new B.EZ(6,"RTCIceConnectionStateDisconnected")
D.aMm=new B.EZ(7,"RTCIceConnectionStateClosed")
D.aMn=new B.X0(0,"RTCIceGatheringStateNew")
D.eiy=new B.X0(1,"RTCIceGatheringStateGathering")
D.a6q=new B.X0(2,"RTCIceGatheringStateComplete")
D.a6r=new B.Oi(0,"RTCPeerConnectionStateClosed")
D.aMo=new B.Oi(1,"RTCPeerConnectionStateFailed")
D.aMp=new B.Oi(2,"RTCPeerConnectionStateDisconnected")
D.aMq=new B.Oi(3,"RTCPeerConnectionStateNew")
D.aMr=new B.Oi(4,"RTCPeerConnectionStateConnecting")
D.aMs=new B.Oi(5,"RTCPeerConnectionStateConnected")
D.eiz=new B.Oj(0,"RTCSignalingStateStable")
D.eiA=new B.Oj(1,"RTCSignalingStateHaveLocalOffer")
D.eiB=new B.Oj(2,"RTCSignalingStateHaveRemoteOffer")
D.eiC=new B.Oj(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eiD=new B.Oj(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aMt=new B.Oj(5,"RTCSignalingStateClosed")
D.eUO=new A.ar(160,48)
D.b7m=new A.fk(2,null,null,null,null,C.aE,null,null,null,null)
D.eWj=new A.a7(16,16,D.b7m,null)
D.foq=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eXK=new A.b1(D.foq,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fvO=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eXN=new A.b1(D.fvO,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fEo=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eXU=new A.b1(D.fEo,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fo0=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eYj=new A.b1(D.fo0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fzM=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aPc=new A.b1(D.fzM,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fB9=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eYN=new A.b1(D.fB9,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFN=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ1=new A.b1(D.fFN,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fDO=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eZ6=new A.b1(D.fDO,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fF0=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eZT=new A.b1(D.fF0,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmF=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f_p=new A.b1(D.fmF,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fxC=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.f_K=new A.b1(D.fxC,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fqE=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f0f=new A.b1(D.fqE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fFT=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.f0j=new A.b1(D.fFT,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fmV=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.f0p=new A.b1(D.fmV,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.flE=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f0E=new A.b1(D.flE,null,null,null,null,null,null,null,null,null,null,null,null,C.T,!1,null,null,null,C.r,null)
D.fiB=new A.y("NGMY DOC SHARE",null,C.aQw,null,null,null,null,null,null,null,null,null)
D.fjT=new A.y("Show this to sender",null,C.kf,null,null,null,null,null,null,null,null,null)
D.fkS=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fpr=new A.y("Organization settings",null,C.cD,null,null,null,null,null,null,null,null,null)
D.fpP=new A.y("Sign in",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fqO=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.frh=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fu3=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fwP=new A.y("Send to their Doc Share",null,C.nB,null,null,null,null,null,null,null,null,null)
D.fx7=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fxq=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fxZ=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fy4=new A.y("Create portal",null,C.ck,null,null,null,null,null,null,null,null,null)
D.fyr=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.eX,null,null,null,null,null,null,null,null,null)
D.fBE=new A.y("Share files & videos\nwith a scan.",null,C.aQx,null,null,null,null,null,null,null,null,null)
D.fBX=new A.y("Add files",null,C.ck,null,null,null,null,null,null,null,null,null)
D.h2I=new B.YU(null)
D.a9F=new B.ac2(0,"docShare")
D.a9G=new B.ac2(1,"gate")
D.UL=new B.ac2(2,"gateNoIndividual")})();(function staticFields(){$.aNp=null
$.fdQ=function(){var x=y.N
return A.U(x,x)}()
$.Gb=A.U(y.N,y.D)
$.ag5=A.U(y.N,A.ax("lz"))
$.QJ=A.U(y.N,y.D)
$.fej=A.U(y.N,A.ax("abK"))
$.c8j=A.U(y.S,A.ax("bv3"))
$.hbw=1
$.hZ4=null
$.hZ3=null
$.hQA=null
$.h0r=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ih_","hsL",()=>new B.cjp())
x($,"ieV","h4c",()=>C.a.t(A.bu(A.bu(A.bu(A.GN(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["797BCKledX/mZw6MaROnxnVV2HM="]=a.current})($__dart_deferred_initializers__);