((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,O,I,P,Q,F,K,G,R,S,E,H,T,U,V,W,L,X,M,B={cw9:function cw9(){},
ifx(d){var x=null,w=new B.b8P(d,D.eRy,new A.q9(x,x,y.c6),new A.q9(x,x,y.B))
w.bFK(d)
return w},
b8P:function b8P(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cw4:function cw4(d){this.a=d},
cw5:function cw5(d){this.a=d},
cw6:function cw6(d){this.a=d},
cw3:function cw3(d){this.a=d},
cw7:function cw7(d){this.a=d},
ify(d,e){var x=y.N
x=new B.b8Q(d,e,A.S(x,y.e),A.S(x,y.z))
x.bFL(d,e)
return x},
b8Q:function b8Q(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cwa:function cwa(d){this.a=d},
cwb:function cwb(d){this.a=d},
cwc:function cwc(d){this.a=d},
cwd:function cwd(d){this.a=d},
cwe:function cwe(d){this.a=d},
cwf:function cwf(d){this.a=d},
cwg:function cwg(d){this.a=d},
cwh:function cwh(d){this.a=d},
hsr(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.be("IndexedDB not available"))
return C.xJ.HL(x,"ngmy_doc_share_v1",new B.fIm(),1)},
imp(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eC(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.w8(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aK(d)
return x}catch(w){return v}return v},
T4(d,e){return B.iCX(d,e)},
iCX(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T4=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aRR
x=7
return A.b(o==null?$.aRR=B.hsr():o,$async$T4)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mI(s,"blobs","readwrite")
C.iW.mu(J.mG(q,"blobs"),r,d)
x=8
return A.b(J.oY(q),$async$T4)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
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
return A.i($async$T4,w)},
T3(d){return B.iCW(d)},
iCW(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$T3=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aRR
x=7
return A.b(o==null?$.aRR=B.hsr():o,$async$T3)
case 7:s=f
r=J.mI(s,"blobs","readonly")
x=8
return A.b(C.iW.ym(J.mG(r,"blobs"),d),$async$T3)
case 8:q=f
x=9
return A.b(J.oY(r),$async$T3)
case 9:o=B.imp(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
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
return A.i($async$T3,w)},
ajw(d){return B.iCV(d)},
iCV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ajw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aRR
x=7
return A.b(p==null?$.aRR=B.hsr():p,$async$ajw)
case 7:s=f
r=J.mI(s,"blobs","readwrite")
C.iW.Hf(J.mG(r,"blobs"),d)
x=8
return A.b(J.oY(r),$async$ajw)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
$.an.$1("[doc share idb delete] "+A.v(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ajw,w)},
fIm:function fIm(){},
ip8(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.btX(w,v))}return u},
hUV(d,e){var x,w={},v=A.b_J("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.h8Y(w,v,e)
C.xL.xk(v,"change",new B.h9_(w,v,!1))
C.xL.xk(v,"cancel",new B.h8Z(w))
$.eY.mW()
v.click()
A.bM(C.anJ,new B.h8X(w),y.H)},
h8Y:function h8Y(d,e,f){this.a=d
this.b=e
this.c=f},
h9_:function h9_(d,e,f){this.a=d
this.b=e
this.c=f},
h8Z:function h8Z(d){this.a=d},
h8X:function h8X(d){this.a=d},
Ec(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Ec=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd8()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gVM()?3:4
break
case 3:x=5
return A.b(B.hPh(e,d,s,!0,!1,f,g,h,!1,i),$async$Ec)
case 5:x=1
break
case 4:x=6
return A.b(B.SH(d,s,f,g,h,i),$async$Ec)
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
return A.b(B.JR(s,d),$async$Ec)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fDD(s,d),$async$Ec)
case 14:x=12
return A.b(r.hPh(q,p,o,n,m,l,k,j,a1,i),$async$Ec)
case 12:x=8
break
case 10:x=15
return A.b(A.a7(e,!1).ca(A.e4(new B.h9c(s,i,d,f,g,h),!1,null,y.H)),$async$Ec)
case 15:x=8
break
case 11:x=16
return A.b(A.a7(e,!1).ca(A.e4(new B.h9d(s,i,d,f,g,h),!1,null,y.H)),$async$Ec)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ec,w)},
SH(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$SH=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3w(e),$async$SH)
case 3:u=k
x=4
return A.b(B.asq(d,e,!1),$async$SH)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.JR(e,d),$async$SH)
case 7:if(k){v=D.af3
x=1
break}x=8
return A.b(B.X0(e),$async$SH)
case 8:v=t?D.Ym:D.af4
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b3u(d,e)){v=D.af3
x=1
break}x=11
return A.b(B.X0(e),$async$SH)
case 11:v=t?D.Ym:D.af4
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.hn4(d,e)){v=D.af3
x=1
break}x=14
return A.b(B.X0(e),$async$SH)
case 14:v=D.Ym
x=1
break
case 13:v=t?D.Ym:D.af4
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
fDD(d,e){var x=0,w=A.j(y.y),v
var $async$fDD=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b3u(e,d)){v=!1
x=1
break}x=3
return A.b(B.b3w(d),$async$fDD)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fDD,w)},
hPh(d,e,f,g,h,i,j,k,l,m){return A.a7(d,!1).ca(A.e4(new B.fL2(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hJD(d,e,f,g,h,i,j){return new B.a0q(e,j,d,g,h,i,f,null)},
fN2(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fN2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fN5(A.Q(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fN2)
case 3:r=f
t.V$=u
t.W$=0
s.V$=u
s.W$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fN2,w)},
fNx(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fNx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ay()
t=new A.au(C.ay,u)
s=new A.au(C.ay,u)
r=new A.au(C.ay,u)
x=3
return A.b(A.bU(C.L,null,new B.fNz(A.Q(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fNx)
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
return A.i($async$fNx,w)},
hsE(d,e,f,g){var x=null,w=A.V(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bB(x,new A.b5(4,A.n(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
h0k(d,e){var x=0,w=A.j(y.H),v
var $async$h0k=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.X0(e),$async$h0k)
case 3:if(d.e==null){x=1
break}A.a7(d,!1).dZ()
case 1:return A.h(v,w)}})
return A.i($async$h0k,w)},
h9c:function h9c(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
h9d:function h9d(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
aeH:function aeH(d,e){this.a=d
this.b=e},
fL2:function fL2(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a0q:function a0q(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aCW:function aCW(){this.c=this.a=this.d=null},
dhY:function dhY(d,e){this.a=d
this.b=e},
dhV:function dhV(d){this.a=d},
dhX:function dhX(d){this.a=d},
dhW:function dhW(d){this.a=d},
di_:function di_(){},
dhZ:function dhZ(d){this.a=d},
afa:function afa(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aFC:function aFC(d,e){this.a=d
this.b=e},
aIT:function aIT(d,e,f){this.a=d
this.b=e
this.c=f},
fN5:function fN5(d,e,f){this.a=d
this.b=e
this.c=f},
fN3:function fN3(d){this.a=d},
fN4:function fN4(d,e,f){this.a=d
this.b=e
this.c=f},
fNz:function fNz(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fNy:function fNy(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
chv(d,e,f,g,h){return B.iad(d,e,f,g,h)},
iad(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$chv=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a1(d)
q=r.gI(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.hd(r.dS(d,new B.chw(s,e,h,g,f,q),y.g),y.l),$async$chv)
case 3:r=p.aN(j)
case 4:if(!r.B()){x=5
break}t=r.gP(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chv,w)},
b3r(d,e,f,g,h){return B.iae(d,e,f,g,h)},
iae(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b3r=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.axZ("GET",d)
o=A.bJX()
if(o==null)o=new A.Is(A.a([],y.W))
x=7
return A.b(o.fh(0,s).d9(0,C.HM),$async$b3r)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.DM(),$async$b3r)
case 8:q=j
if(J.ab(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.CI(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
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
return A.i($async$b3r,w)},
b3q(d){return B.iab(d)},
iab(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b3q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wk(d,null).d9(0,C.oZ),$async$b3q)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.T.aN(0,A.ma(A.m7(p.e)).cJ(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
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
return A.i($async$b3q,w)},
chu(d){return B.iac(d)},
iac(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$chu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.wk(d,null).d9(0,C.rk),$async$chu)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.ma(A.m7(q.e)).cJ(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ad(o)
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
return A.i($async$chu,w)},
chw:function chw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jW:function jW(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
JP(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
iaj(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.Y(t,u))return B.JP(C.a.aV(t,u.length))}return null},
iak(d){var x=B.JP(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
iaf(){var x,w=$.oh(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aw(10)
return C.d.hp(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(24)]},
a9c(d){return B.iag(d)},
iag(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a9c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f9(d,null,!1,C.bN),$async$a9c)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
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
return A.i($async$a9c,w)},
a9d(d,e){return B.iah(d,e)},
iah(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a9d=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.i2(d,e,!1,!1,C.cZ,null),$async$a9d)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
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
return A.i($async$a9d,w)},
CH(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$CH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aB(),$async$CH)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.JP(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a9e(r),$async$CH)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a9c("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$CH)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.JP(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$CH)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.iaf()
x=14
return A.b(B.a9e(m),$async$CH)
case 14:if(f!=null){x=12
break}l=new A.W(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a9d("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CH)
case 15:k=f
x=16
return A.b(B.a9d("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.J(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$CH)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aB("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$CH)
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
return A.i($async$CH,w)},
a9e(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a9e=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.JP(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a9c("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a9e)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9e,w)},
a9f(d,e,f,g){return B.ial(d,e,f,g)},
ial(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a9f=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a1(d)
if(g.gar(d)){v=!1
x=1
break}r=B.JP(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a9e(r),$async$a9f)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cH(d,0,new B.chC())>1048576||g.aR(d,new B.chD())){v=B.FQ(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a9q("myCode",d,a0),$async$a9f)
case 4:u=a3
try{t=C.T.aN(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.ch(s)||J.ab(s)!==g.gI(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ab(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.FQ(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b3z(u,g.gI(d),a0),$async$a9f)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.oh().aw(9999)
k=n.b
j=g.gI(d)
i=y.N
h=g.dS(d,new B.chE(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.b3s(A.J(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a9f)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gI(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9f,w)},
FQ(d,e,f,g,h){return B.iai(d,e,f,g,h)},
iai(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$FQ=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$FQ)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cK(a6)
k=l.cH(a6,0,new B.chy())
if(k>524288e3){a7.$1("Too large to send by code ("+C.h.S(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.oh().aw(9999)
h=Date.now()
g=""+1000*h+"_"+C.cW.aw(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.B()){x=5
break}q=h.gP(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aD(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.JT(a9,q)
a0=new A.LI(a1)
u=6
case 9:x=11
return A.b(a0.B(),$async$FQ)
case 11:if(!b1){x=10
break}n=a0.gP(0)
if(J.ab(n)===0){x=9
break}m=A.v(p)+".part"+C.a.aY(J.k(o),5,"0")
a1=$.f6().b
a1===$&&A.d()
a1=a1.at
a1===$&&A.d()
a2=a1.c
a2===$&&A.d()
a4=A.nW(null,null,e,e)
a4.u(0,a1.b)
x=12
return A.b(new A.acT(a1.a,a4,"media",a1.d,a2).yj(m,n,new A.F5(!0,q.c)),$async$FQ)
case 12:J.bX(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a2(0),$async$FQ)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aUG(r),$async$FQ)
case 16:v=!1
x=1
break
case 15:f.push(A.J(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gI(a6)
a1=l.dS(a6,new B.chz(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.b3s(A.J(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.W(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$FQ)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aUG(r),$async$FQ)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gI(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FQ,w)},
b3s(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b3s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a9c(t),$async$b3s)
case 3:s=g
r=y.aL.a(J.t(s==null?A.J(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.chx(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a9d(t,A.J(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3s,w)},
OX(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$OX=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a9c("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$OX)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.ch(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aN(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.B()){x=5
break}l=q.gP(q)
if(!n.b(l)){x=4
break}k=A.a0(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.b3t(k,a0),$async$OX)
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
return A.b(B.b3y(h),$async$OX)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.X7(g,a0),$async$OX)
case 10:f=a3
if(f!=null&&J.cM(f)){m+=J.ab(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.W(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.B(new A.X(r,new B.chA(),q),n)
d=A.B(new A.X(r,new B.chB(),q),n)
q=A.B(e,y.P)
C.d.u(q,A.cJ(d,0,A.dy(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a9d("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.J(["deliveries",q],p,o)),$async$OX)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$OX,w)},
b3t(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b3t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.ch(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aN(h),r=y.f,q=0
case 3:if(!u.B()){x=4
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
j=o==null?null:C.h.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.iHj(k,j)
C.d.u(s,i)
x=5
return A.b(B.Ea(l,m,"Received via My Code",t,e,i),$async$b3t)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aUG(s),$async$b3t)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3t,w)},
chC:function chC(){},
chD:function chD(){},
chE:function chE(){},
chy:function chy(){},
chz:function chz(){},
chx:function chx(){},
chA:function chA(){},
chB:function chB(){},
h99(d,e){var x=0,w=A.j(y.H)
var $async$h99=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a7(d,!1).ca(A.e4(new B.h9a(e),!1,null,y.H)),$async$h99)
case 2:return A.h(null,w)}})
return A.i($async$h99,w)},
bJq(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bJq=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ch(e)){v=!1
x=1
break}x=3
return A.b(A.a7(d,!1).ca(A.e4(new B.h9b(g,e,f),!1,null,y.y)),$async$bJq)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJq,w)},
h9a:function h9a(d){this.a=d},
h9b:function h9b(d,e,f){this.a=d
this.b=e
this.c=f},
WY:function WY(d,e){this.c=d
this.a=e},
aH0:function aH0(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
e4K:function e4K(d,e){this.a=d
this.b=e},
X1:function X1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH3:function aH3(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e5T:function e5T(d){this.a=d},
e5U:function e5U(d){this.a=d},
e5V:function e5V(d){this.a=d},
e5S:function e5S(d,e){this.a=d
this.b=e},
e5W:function e5W(d){this.a=d},
e5X:function e5X(d){this.a=d},
e5Y:function e5Y(d,e){this.a=d
this.b=e},
e5Z:function e5Z(d,e){this.a=d
this.b=e},
e6_:function e6_(d,e){this.a=d
this.b=e},
e60:function e60(d){this.a=d},
e63:function e63(){},
e61:function e61(d){this.a=d},
e62:function e62(d,e){this.a=d
this.b=e},
bnZ:function bnZ(){},
WZ:function WZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aH1:function aH1(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
e4L:function e4L(d){this.a=d},
e4M:function e4M(d){this.a=d},
hn5(d){var x=d.ig
if(x>=0)return C.n.M(x)
return 10},
ian(d){var x=d.la
if(x>=0)return x
return 4.99},
iam(d){var x=d.lV,w=y.N
w=x.j5(x,new B.chG(),w,w)
return w},
hEA(d){var x=d.kM,w=y.N
w=x.j5(x,new B.chH(),w,w)
return w},
b3w(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b3w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$b3w)
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
return A.i($async$b3w,w)},
a9h(d,e){var x=0,w=A.j(y.H),v,u
var $async$a9h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$a9h)
case 4:x=3
return A.b(g.aB("String","ngmy_doc_share_path_"+u,e),$async$a9h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a9h,w)},
X0(d){var x=0,w=A.j(y.H),v,u
var $async$X0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aB(),$async$X0)
case 4:x=3
return A.b(f.X(0,"ngmy_doc_share_path_"+u),$async$X0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$X0,w)},
hn4(d,e){var x,w,v
if(B.ian(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.iam(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bf(w)
return v!=null&&v.cb(new A.W(Date.now(),0,!1))},
b3u(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hEA(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bf(x)
return w!=null&&w.cb(new A.W(Date.now(),0,!1))},
hEB(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a0(B.hEA(d),x,x)
x=w.h(0,t)
v=A.bf(x==null?"":x)
u=v!=null&&v.cb(new A.W(Date.now(),0,!1))?v:new A.W(Date.now(),0,!1)
w.n(0,t,u.bM(A.dx(f,0,0,0,0,0).a).aa().ag())
d.kM=w},
asr(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$asr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ab(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aB(),$async$asr)
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
return A.i($async$asr,w)},
ass(d){var x=0,w=A.j(y.H),v,u,t
var $async$ass=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.asr(d),$async$ass)
case 3:u=f
x=5
return A.b(A.aB(),$async$ass)
case 5:x=4
return A.b(f.aB("Int","ngmy_doc_share_usage_"+t,u+1),$async$ass)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ass,w)},
asq(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$asq=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.hn5(d)
if(u<=0){v=!1
x=1
break}if(B.hn4(d,e)){v=!1
x=1
break}x=3
return A.b(B.asr(e),$async$asq)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asq,w)},
b3v(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b3v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.JR(e,d),$async$b3v)
case 3:if(g){v=-1
x=1
break}u=B.hn5(d)
if(u<=0){v=-1
x=1
break}if(B.hn4(d,e)){v=-1
x=1
break}t=C.n
s=u
x=4
return A.b(B.asr(e),$async$b3v)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3v,w)},
chJ(d,e,f){var x=0,w=A.j(y.y),v
var $async$chJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.JR(e,d),$async$chJ)
case 3:if(h){v=!1
x=1
break}v=B.asq(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chJ,w)},
chI(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$chI=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
x=3
return A.b(B.chJ(d,u,i.gVM()),$async$chI)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chI,w)},
a9g(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a9g=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd8()
if(i.gVM()){v=!0
x=1
break}if(B.b3u(d,u)){v=!0
x=1
break}x=5
return A.b(A.m_(u,C.VG),$async$a9g)
case 5:x=k?3:4
break
case 3:B.hEB(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a9g)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.lz(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.VG,"Doc Share for Organizations"),$async$a9g)
case 7:if(!k){v=!1
x=1
break}B.hEB(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a9g)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9g,w)},
chG:function chG(){},
chH:function chH(){},
ha9(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$ha9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$ha9)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fzL.X(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.i4([r],e.c))
s.toString
$.fzL.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ha9,w)},
iJC(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fzL.bs($.fzL,new B.hab(d))},
hab:function hab(d){this.a=d},
fBu(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fBu=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aD(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.i4([d],f))
s.toString
u=A.np(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bM(C.jC,null,y.H),$async$fBu)
case 3:C.C8.fq(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eY.mW()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBu,w)},
ais(d,e,f){var x=0,w=A.j(y.H),v
var $async$ais=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fAu.n(0,d,new B.aeo(A.bt(e,!0,v)))
x=3
return A.b(A.aB(),$async$ais)
case 3:x=2
return A.b(h.aB("String",d+"_manifest",C.T.au(A.J(["parts",e,"size",f],v,y.C),null)),$async$ais)
case 2:return A.h(null,w)}})
return A.i($async$ais,w)},
aim(d){return B.ira(d)},
ira(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aim=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fAu.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aB(),$async$aim)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.T.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.ch(s)){v=null
x=1
break}o=J.b8(s,new B.fFj(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aK(J.t(t,"size"))
m=o==null?null:C.h.M(o)
q=m==null?0:m
p=new B.aeo(r)
$.fAu.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aim,w)},
Sx(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Sx=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.HB.n(0,d,u)
x=3
return A.b(B.T4(d,u),$async$Sx)
case 3:t=g
if(!t)$.an.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Sx,w)},
aSb(d){return B.ir8(d)},
ir8(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.HB.h(0,d)
if(n!=null&&!C.aI.gar(n)){v=n
x=1
break}x=3
return A.b(B.T3(d),$async$aSb)
case 3:p=f
if(p!=null&&!C.aI.gar(p)){$.HB.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aB(),$async$aSb)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aK(r)
x=!J.ch(q)?9:10
break
case 9:B.Sx(d,q)
x=11
return A.b(J.fL(s,d),$async$aSb)
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
return A.i($async$aSb,w)},
imT(d){if(d==null)return A.fc(null,y.K)
if(y.J.b(d))return A.fc(new Uint8Array(A.cd(J.eC(d,0,null))),y.K)
if(y.D.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.fc(new Uint8Array(A.cd(A.w8(d,0,null))),y.K)
if(y.I.b(d))return A.fc(new Uint8Array(A.cd(d)),y.K)
return A.fc(null,y.K)},
a4_(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a4_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bo($.bG,y.cf)
t=new A.cc(u,y.aW)
s=y.aK
A.fJ(r,"loadend",new B.fLh(r,t),!1,s)
A.fJ(r,"error",new B.fLi(t),!1,s)
r.readAsArrayBuffer(d)
v=u.im(0,C.Pl,new B.fLj())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a4_,w)},
aSw(d,e,f){return B.itB(d,e,f)},
itB(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aSw=A.e(function(g,a0){if(g===1){t.push(a0)
x=u}for(;;)switch(x){case 0:k="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
j=A.a([],y.s)
i=f.size
i.toString
s=C.n.S(i)
if(s<=0){x=1
break}u=4
r=0
case 7:if(!(r<s)){x=9
break}q=r+1048576<s?r+1048576:s
i=f.slice(r,q)
i.toString
x=10
return A.b(B.a4_(i),$async$aSw)
case 10:p=a0
if(p==null||p.length===0){$.an.$1("[doc share web persist chunked] empty slice "+A.v(r)+"-"+A.v(q)+" for "+e)
x=8
break}o=A.v(k)+"_part_"+J.ab(j)
x=11
return A.b(B.T4(o,p),$async$aSw)
case 11:n=a0
if(!n){$.an.$1("[doc share web persist chunked] part write failed "+A.v(o))
x=8
break}J.bX(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ab(j)===0){x=1
break}x=12
return A.b(B.ais(k,j,s),$async$aSw)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ad(h)
$.an.$1("[doc share web persist chunked] "+A.v(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSw,w)},
aSv(d,e,f){return B.itA(d,e,f)},
itA(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aSv=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aSw(d,e,f),$async$aSv)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a4_(f),$async$aSv)
case 10:r=h
if(r==null||r.length===0){$.an.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.HB.n(0,s,r)
$.SR.n(0,s,r)
x=11
return A.b(B.Sx(s,r),$async$aSv)
case 11:q=h
if(!q)$.an.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ad(m)
$.an.$1("[doc share web persist] "+A.v(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSv,w)},
CI(d,e,f,g,h,i){return B.iaw(d,e,f,g,h,i)},
iaw(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$CI=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cW.aw(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jW(p,q,o,n,new A.W(Date.now(),0,!1).aa().ag(),a0,f,B.b3C(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Sx(s,d),$async$CI)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aB(),$async$CI)
case 10:r=a2
x=11
return A.b(r.aB("String",s,C.cS.gcp().aK(d)),$async$CI)
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
return A.b(B.BC(e),$async$CI)
case 12:j=a2
J.bX(j,m)
x=13
return A.b(B.HL(e,j),$async$CI)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CI,w)},
X2(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$X2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.BC(d),$async$X2)
case 3:t=a1
s=e.length,r=J.cK(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cW.aw(99999)
n=p.b
l=o.type
l.toString
k=B.hED(n,null,l)
l=o.size
l.toString
j=new A.W(Date.now(),0,!1).aa().ag()
i=new B.jW(m,n,k,l,j,"From folder",null,B.b3C(),null)
$.aiR.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a4_(o),$async$X2)
case 7:g=a1
x=g!=null&&!C.aI.gar(g)?8:10
break
case 8:$.HB.n(0,h,g)
$.SR.n(0,h,g)
B.Sx(h,g)
x=9
break
case 10:x=11
return A.b(B.aSv(d,m,o),$async$X2)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.I)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.HL(d,t),$async$X2)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X2,w)},
hn9(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$hn9=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hED(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.JS(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gar(s)){v=B.CI(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hn9,w)},
JS(d,e,f,g,h,i){return B.iav(d,e,f,g,h,i)},
iav(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$JS=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cW.aw(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.LI(A.dy(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.B(),$async$JS)
case 8:if(!a6){x=7
break}m=j.gP(0)
if(J.ch(m)){x=6
break}J.fX(n,m)
o+=J.ab(m)
case 9:if(!(J.ab(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.TF(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kB(0,1048576,J.ab(h),null,null)
h.splice(0,1048576)
k=A.v(r)+"_part_"+A.v(p)
x=11
return A.b(B.T4(k,l),$async$JS)
case 11:J.bX(q,k);++p
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
return A.b(j.a2(0),$async$JS)
case 12:x=s.pop()
break
case 5:x=J.ab(n)!==0?13:14
break
case 13:k=A.v(r)+"_part_"+A.v(p)
x=15
return A.b(B.T4(k,new Uint8Array(A.cd(n))),$async$JS)
case 15:J.bX(q,k)
case 14:if(J.ab(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ais(r,q,g),$async$JS)
case 16:f=new B.jW(i,a1,a0,g,new A.W(Date.now(),0,!1).aa().ag(),a2,null,B.b3C(),null)
x=17
return A.b(B.BC(d),$async$JS)
case 17:e=a6
J.bX(e,f)
x=18
return A.b(B.HL(d,e),$async$JS)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JS,w)},
X4(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$X4=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aiR.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a4_(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aim(s),$async$X4)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.T3(u[o]),$async$X4)
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
v=A.w8(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.I)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.SR.h(0,s)
if(i==null)i=$.HB.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.tf(d,e),$async$X4)
case 12:i=a0
if(i!=null&&!C.aI.gar(i))$.SR.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.w8(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X4,w)},
hED(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
tf(d,e){return B.iax(d,e)},
iax(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$tf=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.SR.h(0,f)
if(e==null)e=$.HB.h(0,f)
if(e!=null&&!C.aI.gar(e)){v=e
x=1
break}s=$.aiR.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a4_(s),$async$tf)
case 9:r=a3
if(r!=null&&!C.aI.gar(r)){$.HB.n(0,f,r)
$.SR.n(0,f,r)
B.Sx(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ad(d)
$.an.$1("[doc share readBytes webFile] "+a1.b+": "+A.v(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aim(f),$async$tf)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.aek(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.T3(g[l]),$async$tf)
case 16:k=a3
if(k!=null&&!C.aI.gar(k))n.K(0,k)
case 14:g.length===m||(0,A.I)(g),++l
x=13
break
case 15:r=n.a9b()
if(!C.aI.gar(r)){$.HB.n(0,f,r)
$.SR.n(0,f,r)
v=r
x=1
break}$.an.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aSb(f),$async$tf)
case 17:j=a3
if(j!=null&&!C.aI.gar(j)){$.SR.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.X4(a0,a1,0,g),$async$tf)
case 20:i=a3
if(i!=null&&!C.aI.gar(i)){h=new Uint8Array(A.cd(i))
$.HB.n(0,f,h)
$.SR.n(0,f,h)
B.Sx(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tf,w)},
iaA(d){var x,w,v=$.aiR.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
iaB(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.i4([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
iay(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
asy(d,e,f,g,h){return B.iaz(d,e,f,g,h)},
iaz(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$asy=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aiR.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a4_(s),$async$asy)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.tf(g,e),$async$asy)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ab(r)/2|0,J.ab(r))
n=$.f6().b
n===$&&A.d()
n=n.at
n===$&&A.d()
x=12
return A.b(n.iO(d).yj(h,r,new A.F5(!0,e.c)),$async$asy)
case 12:f.$2(J.ab(r),J.ab(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
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
return A.i($async$asy,w)},
hEF(d,e,f,g,h){var x,w,v,u,t=$.hEE
$.hEE=t+1
x=Date.now()
w=""+1000*x+"_"+C.cW.aw(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.chU.n(0,t,new B.bB3(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.aek(u)))
return t},
hna(d){var x=0,w=A.j(y.H)
var $async$hna=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hna,w)},
JT(d,e){var $async$JT=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aiR.h(0,h)
f=0
x=g!=null?3:4
break
case 3:r=g.size
r.toString
q=C.n.S(r)
p=0
case 5:if(!(p<q)){x=7
break}o=p+1048576
x=8
return A.qR(B.X4(d,e,p,o<q?o:q),$async$JT,w)
case 8:n=a1
x=n!=null&&!C.aI.gar(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qR(A.H7(n),$async$JT,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qR(B.aim("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$JT,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qR(B.T3(h[l]),$async$JT,w)
case 18:k=a1
x=k!=null&&!C.aI.gar(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qR(A.H7(k),$async$JT,w)
case 21:case 20:case 16:h.length===r||(0,A.I)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qR(B.tf(d,e),$async$JT,w)
case 22:j=a1
x=j!=null&&!C.aI.gar(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qR(A.H7(A.w8(j,p,o<i?o:i)),$async$JT,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qR(null,0,w)
case 2:return A.qR(t.at(-1),1,w)}})
var x=0,w=A.hNU($async$JT,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hQ3(w)},
b3E(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b3E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.chU.h(0,d)
if(t==null||J.ch(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gI(u)>=1048576)){x=4
break}x=5
return A.b(t.a7t(),$async$b3E)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3E,w)},
X3(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$X3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chU.X(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a7t(),$async$X3)
case 3:u=r.w
if(u.length===0||r.z<=0){$.an.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ais(r.c,u,r.z),$async$X3)
case 4:t=new B.jW(r.b,r.d,r.e,r.z,new A.W(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b3C(),null)
u=r.a
x=5
return A.b(B.BC(u),$async$X3)
case 5:s=f
J.bX(s,t)
x=6
return A.b(B.HL(u,s),$async$X3)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X3,w)},
a9n(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a9n=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.chU.X(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ajw(u[s]),$async$a9n)
case 6:case 4:u.length===t||(0,A.I)(u),++s
x=3
break
case 5:r.x.a7(0)
case 1:return A.h(v,w)}})
return A.i($async$a9n,w)},
chW(d,e,f){var x=0,w=A.j(y.H)
var $async$chW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGd(d,e,f),$async$chW)
case 2:return A.h(null,w)}})
return A.i($async$chW,w)},
chX(d,e,f){var x=0,w=A.j(y.H)
var $async$chX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bGe(d,e,f),$async$chX)
case 2:return A.h(null,w)}})
return A.i($async$chX,w)},
FR(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$FR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.BC(d),$async$FR)
case 2:p=g
J.mH(p,new B.chV(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.HB.X(0,v)
$.aiR.X(0,e)
x=3
return A.b(B.aim(v),$async$FR)
case 3:u=g
$.fAu.X(0,v)
x=4
return A.b(A.aB(),$async$FR)
case 4:t=g
x=5
return A.b(t.X(0,v),$async$FR)
case 5:x=6
return A.b(t.X(0,v+"_manifest"),$async$FR)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ajw(s[q]),$async$FR)
case 12:case 10:s.length===r||(0,A.I)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ajw(v),$async$FR)
case 13:x=14
return A.b(B.HL(d,p),$async$FR)
case 14:return A.h(null,w)}})
return A.i($async$FR,w)},
b3D(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b3D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.tf(d,e),$async$b3D)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fBu(t,A.aD(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3D,w)},
BC(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$BC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$BC)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.T.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fLk(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$BC,w)},
HL(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$HL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aB(),$async$HL)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fPJ(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.aB("String","ngmy_doc_share_index_v1_"+u,C.T.au(t,null)),$async$HL)
case 3:return A.h(null,w)}})
return A.i($async$HL,w)},
bGd(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGd=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BC(d),$async$bGd)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fJq(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aIB(f))
x=4
return A.b(B.HL(d,u),$async$bGd)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGd,w)},
bGe(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bGe=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BC(d),$async$bGe)
case 3:u=h
t=J.cK(u)
s=t.bn(u,new B.fJr(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cUa(f))
x=4
return A.b(B.HL(d,u),$async$bGe)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bGe,w)},
aeo:function aeo(d){this.a=d},
fFj:function fFj(){},
fLh:function fLh(d,e){this.a=d
this.b=e},
fLi:function fLi(d){this.a=d},
fLj:function fLj(){},
chV:function chV(d){this.a=d},
bB3:function bB3(d,e,f,g,h,i,j,k,l){var _=this
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
fLk:function fLk(){},
fPJ:function fPJ(){},
fJq:function fJq(d){this.a=d},
fJr:function fJr(d){this.a=d},
a9o(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a9o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aR(d,new B.ci_())?3:4
break
case 3:x=5
return A.b(B.b3F(d,e),$async$a9o)
case 5:u=g
if(u!=null){t=u.c
B.OZ(d,u.b,e,t)}v=u
x=1
break
case 4:x=d.length===1?6:7
break
case 6:t=C.d.gH(d).x
s=C.a.i(t==null?"":t)
o=s.length!==0
if(o){x=8
break}else g=o
x=9
break
case 8:x=10
return A.b(B.b3A(s),$async$a9o)
case 10:case 9:if(g){v=new A.RS(1,D.Vj,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.X5(d,e),$async$a9o)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Xa(!0,!0,d,e),$async$a9o)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.OZ(d,D.Bc,e,t)
v=new A.RS(p,D.Bc,t)
x=1
break}v=B.chZ(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9o,w)},
X5(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$X5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a9q(null,d,e),$async$X5)
case 3:p=g
try{u=C.T.aN(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.ch(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ab(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b3z(p,d.length,e),$async$X5)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.chX(e,C.d.gH(d).a,r.b),$async$X5)
case 7:case 6:q=r.a
x=8
return A.b(B.OZ(d,D.Vj,e,q),$async$X5)
case 8:v=new A.RS(d.length,D.Vj,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X5,w)},
X6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$X6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.Y(d.c,"video/")||d.n2(D.nv)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a9p(d,e),$async$X6)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.chS(s,d,e,t),$async$X6)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b3A(t),$async$X6)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.tf(e,d),$async$X6)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.X5(A.a([d],y.r),e),$async$X6)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$X6,w)},
X8(){var x=0,w=A.j(y.H)
var $async$X8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.hn3(),$async$X8)
case 2:x=3
return A.b(B.aV1(),$async$X8)
case 3:return A.h(null,w)}})
return A.i($async$X8,w)},
a9p(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a9p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b3C()
x=3
return A.b(B.chW(e,d.a,u),$async$a9p)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9p,w)},
OZ(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$OZ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Vj&&C.a.Y(u,"NGMYDOCSYNC1|")?C.a.i(C.a.aV(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a9p(p,f),$async$OZ)
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
return A.b(B.chR(o,p,u,f),$async$OZ)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.chS(o,p,f,t),$async$OZ)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.chQ(o,u,p,f),$async$OZ)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.I)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$OZ,w)},
b3F(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b3F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chY(e,d),$async$b3F)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Xa(!1,!0,d,e),$async$b3F)
case 4:u=g
if(u!=null){t=u.b
v=new A.RS(u.a,D.Bc,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3F,w)},
chY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$chY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.X4(d,s,0,1),$async$chY)
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
return A.i($async$chY,w)},
chZ(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$chZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a9q(null,d,e),$async$chZ)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hEC(u)
if(t.length>800){v=null
x=1
break}v=new A.RS(d.length,D.e6j,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chZ,w)},
asz(d,e,f){return B.iaE(d,e,f)},
iaE(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$asz=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.dc(g,"\ufeff"))g=J.no(g,1)
x=B.hn8(g)?3:4
break
case 3:x=5
return A.b(B.chT(g),$async$asz)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.dc(g,"NGMYDOCSYNC4|")){s=C.a.i(J.no(g,13))
try{k=B.FS(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ad(a1)
$.an.$1("[doc share video cloud import] "+A.v(r))
v=null
x=1
break}}x=J.dc(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.no(g,13))
u=9
x=12
return A.b(B.b3y(q),$async$asz)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X7(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ad(f)
$.an.$1("[doc share cloud qr] "+A.v(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.dc(g,"NGMYDOCSYNC0|"))try{n=B.hn7(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.X7(n,a0)
v=k
x=1
break}catch(a1){m=A.ad(a1)
$.an.$1("[doc share inline qr] "+A.v(m))
v=null
x=1
break}if(J.dc(g,"N2|")){v=B.JU(C.a.i(J.no(g,3)),d,a0)
x=1
break}if(J.dc(g,"NGMYDOCSYNC2|")){v=B.JU(C.a.i(J.no(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cG(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c4(k,"/"))h=C.a.av(k,0,k.length-1)
else h=k
v=B.JU(h,d,a0)
x=1
break}if(J.eH(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.X7(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asz,w)},
JU(d,e,f){return B.iaC(d,e,f)},
iaC(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$JU=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aD(g,f,"")
if(C.a.Y(e,"N2|"))e=C.a.i(C.a.aV(e,3))
if(C.a.Y(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.aV(e,13))
if(!C.a.Y(e,"http://")&&!C.a.Y(e,"https://"))e="http://"+e
if(C.a.c4(e,"manifest.json")){g=C.a.av(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aD(g,f,"")}else j=e
s=j
r=A.cH(A.v(s)+"/manifest.json",0,null)
q=A.cH(A.v(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b3q(r),$async$JU)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b3q(A.cH(s,0,null)),$async$JU)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.ch(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.chv(o,r,a1,n,a2),$async$JU)
case 11:m=a4
x=J.ch(m)?12:13
break
case 12:x=14
return A.b(B.chu(q),$async$JU)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.X7(l,a2),$async$JU)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.ch(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ad(d)
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
return A.i($async$JU,w)},
a9q(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a9q=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aN(e),t=y.N,s=y.z
case 3:if(!u.B()){x=4
break}r=u.gP(u)
x=5
return A.b(B.tf(f,r),$async$a9q)
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
v=C.T.au(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9q,w)},
X7(d,e){return B.iaD(d,e)},
iaD(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$X7=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.T.aN(0,a2,null)
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
e=J.aN(r)
case 7:if(!e.B()){x=8
break}m=e.gP(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ab(j)===0){x=7
break}i=C.cM.aK(j)
d=J.ab(q)!==0?q:null
x=9
return A.b(B.CI(i,a3,d,k,l,o),$async$X7)
case 9:h=a5
if(h!=null)J.bX(n,h)
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
g=A.ad(a1)
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
return A.i($async$X7,w)},
OY:function OY(d,e){this.a=d
this.b=e},
ci_:function ci_(){},
a3z(d){var x=A.Q(d).ax.a===C.I,w=x?D.akT:D.aik,v=x?D.amJ:C.c,u=x?C.aS:C.a_,t=x?C.bQ:C.an,s=x?D.ajQ:C.bo
return new A.aKa([w,s,v,u,t,x?C.fz:C.bU])},
hVZ(d,e){var x=e?C.v.j(0.72):C.bb
return A.cf(null,x,!0,null,new B.hev(e),d,null,!0,!0,y.N)},
chF(d,e,f,g,h,i,j,k,l){return new B.X_(e,l,d,f,k,j,g,h,i,null)},
a0s(d,e,f,g,h,i,j){return new B.biu(g,h,j,e,i,d,f,null)},
hev:function hev(d){this.a=d},
a0p:function a0p(d,e){this.c=d
this.a=e},
aCV:function aCV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dhU:function dhU(d){this.a=d},
dhS:function dhS(d){this.a=d},
dhT:function dhT(d){this.a=d},
bAF:function bAF(){},
X_:function X_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aH2:function aH2(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e5R:function e5R(d){this.a=d},
e5e:function e5e(d,e){this.a=d
this.b=e},
e5f:function e5f(d,e){this.a=d
this.b=e},
e4O:function e4O(d,e,f){this.a=d
this.b=e
this.c=f},
e4N:function e4N(d){this.a=d},
e4P:function e4P(d,e){this.a=d
this.b=e},
e4U:function e4U(d,e,f){this.a=d
this.b=e
this.c=f},
e4T:function e4T(d){this.a=d},
e5F:function e5F(d,e){this.a=d
this.b=e},
e5G:function e5G(d){this.a=d},
e5b:function e5b(d,e,f){this.a=d
this.b=e
this.c=f},
e58:function e58(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
e4S:function e4S(d){this.a=d},
e5j:function e5j(d){this.a=d},
e5i:function e5i(){},
e4Y:function e4Y(d){this.a=d},
e5C:function e5C(d,e){this.a=d
this.b=e},
e5D:function e5D(d,e){this.a=d
this.b=e},
e5E:function e5E(d,e){this.a=d
this.b=e},
e59:function e59(d,e){this.a=d
this.b=e},
e5a:function e5a(d,e){this.a=d
this.b=e},
e5v:function e5v(d,e){this.a=d
this.b=e},
e5r:function e5r(d){this.a=d},
e5q:function e5q(d){this.a=d},
e5s:function e5s(){},
e5t:function e5t(){},
e5u:function e5u(d,e){this.a=d
this.b=e},
e5w:function e5w(){},
e5x:function e5x(d){this.a=d},
e5p:function e5p(d,e){this.a=d
this.b=e},
e5k:function e5k(d){this.a=d},
e5l:function e5l(d){this.a=d},
e5m:function e5m(d){this.a=d},
e5n:function e5n(d){this.a=d},
e5o:function e5o(d){this.a=d},
e4V:function e4V(){},
e4W:function e4W(d){this.a=d},
e4X:function e4X(d,e){this.a=d
this.b=e},
e4R:function e4R(d,e){this.a=d
this.b=e},
e4Q:function e4Q(d,e,f){this.a=d
this.b=e
this.c=f},
e5c:function e5c(d){this.a=d},
e5d:function e5d(d,e,f){this.a=d
this.b=e
this.c=f},
e56:function e56(d,e){this.a=d
this.b=e},
e52:function e52(d){this.a=d},
e5_:function e5_(d,e,f){this.a=d
this.b=e
this.c=f},
e53:function e53(d){this.a=d},
e54:function e54(d){this.a=d},
e55:function e55(){},
e57:function e57(d,e){this.a=d
this.b=e},
e50:function e50(d){this.a=d},
e4Z:function e4Z(d,e,f){this.a=d
this.b=e
this.c=f},
e51:function e51(){},
e5h:function e5h(d){this.a=d},
e5g:function e5g(d,e){this.a=d
this.b=e},
e5B:function e5B(d,e){this.a=d
this.b=e},
e5y:function e5y(d){this.a=d},
e5z:function e5z(d,e){this.a=d
this.b=e},
e5A:function e5A(d){this.a=d},
e5O:function e5O(d){this.a=d},
e5M:function e5M(d){this.a=d},
e5N:function e5N(d){this.a=d},
e5P:function e5P(){},
e5Q:function e5Q(d,e){this.a=d
this.b=e},
e5I:function e5I(d,e){this.a=d
this.b=e},
e5J:function e5J(d,e,f){this.a=d
this.b=e
this.c=f},
e5H:function e5H(d,e,f){this.a=d
this.b=e
this.c=f},
e5K:function e5K(d,e){this.a=d
this.b=e},
e5L:function e5L(d,e){this.a=d
this.b=e},
aCS:function aCS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bit:function bit(d,e,f){this.c=d
this.d=e
this.a=f},
dhQ:function dhQ(){},
dhR:function dhR(){},
aeI:function aeI(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
did:function did(){},
dic:function dic(d){this.a=d},
a0r:function a0r(d,e,f){this.c=d
this.d=e
this.a=f},
aCX:function aCX(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
di9:function di9(d){this.a=d},
dia:function dia(d,e,f){this.a=d
this.b=e
this.c=f},
dib:function dib(d,e){this.a=d
this.b=e},
di7:function di7(d,e){this.a=d
this.b=e},
di5:function di5(d){this.a=d},
di3:function di3(d){this.a=d},
di0:function di0(d){this.a=d},
di6:function di6(d){this.a=d},
di2:function di2(d){this.a=d},
di8:function di8(d){this.a=d},
di4:function di4(d){this.a=d},
di1:function di1(d){this.a=d},
a0o:function a0o(d,e,f){this.c=d
this.d=e
this.a=f},
aCU:function aCU(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dhN:function dhN(d){this.a=d},
dhM:function dhM(d,e){this.a=d
this.b=e},
dhO:function dhO(d){this.a=d},
dhL:function dhL(d,e){this.a=d
this.b=e},
dhP:function dhP(d){this.a=d},
dhK:function dhK(d,e){this.a=d
this.b=e},
dhG:function dhG(d){this.a=d},
dhH:function dhH(d){this.a=d},
dhI:function dhI(d,e){this.a=d
this.b=e},
dhJ:function dhJ(d){this.a=d},
Rq:function Rq(d,e,f){this.c=d
this.d=e
this.a=f},
aD_:function aD_(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
diq:function diq(d){this.a=d},
dir:function dir(d){this.a=d},
dis:function dis(d){this.a=d},
dit:function dit(d){this.a=d},
diu:function diu(d,e){this.a=d
this.b=e},
div:function div(d){this.a=d},
dix:function dix(d){this.a=d},
diw:function diw(d){this.a=d},
a0t:function a0t(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aCY:function aCY(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dim:function dim(d,e){this.a=d
this.b=e},
din:function din(d,e){this.a=d
this.b=e},
die:function die(d,e,f){this.a=d
this.b=e
this.c=f},
dif:function dif(d){this.a=d},
dig:function dig(){},
dil:function dil(){},
dih:function dih(d,e){this.a=d
this.b=e},
dii:function dii(d,e){this.a=d
this.b=e},
dij:function dij(d,e){this.a=d
this.b=e},
dik:function dik(d,e){this.a=d
this.b=e},
aeG:function aeG(d,e){this.c=d
this.a=e},
dhF:function dhF(d){this.a=d},
a0n:function a0n(d){this.a=d},
aCT:function aCT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a0u:function a0u(d,e){this.c=d
this.a=e},
aCZ:function aCZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dip:function dip(d){this.a=d},
dio:function dio(d){this.a=d},
biu:function biu(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
iaF(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"VT"+C.d.hp(v)},
P_(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$P_=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$P_)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_video_relay_v1",null,!1,C.bN),$async$P_)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
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
return A.i($async$P_,w)},
a9r(d){return B.iaG(d)},
iaG(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a9r=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9r)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_video_relay_v1",A.J(["relays",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$a9r)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share video cloud] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9r,w)},
X9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$X9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.P_(),$async$X9)
case 3:s=g
r=J.a1(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dE(A.a0(q,u,t),u,t)
t.u(0,e)
t.n(0,"updatedAt",new A.W(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a9r(s),$async$X9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$X9,w)},
Xa(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Xa=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.ce(),$async$Xa)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bt(f,!0,y.U)
else{t=A.T(f).k("X<1>")
u=A.B(new A.X(f,new B.ci1(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.iaF()
t=A.T(u).k("O<1,a9<o,aH>>")
r=A.B(new A.O(u,new B.ci2(s),t),t.k("aj.E"))
x=6
return A.b(B.P_(),$async$Xa)
case 6:q=i
J.aL(q,s,A.J(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a9r(q),$async$Xa)
case 7:x=8
return A.b(B.a9s(r,u,g,s),$async$Xa)
case 8:v=new A.but(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Xa,w)},
asA(d){var x=0,w=A.j(y.y),v,u,t
var $async$asA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.P_(),$async$asA)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asA,w)},
ci3(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ci3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.P_(),$async$ci3)
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
return A.i($async$ci3,w)},
a9s(d,e,f,g){return B.iaH(d,e,f,g)},
iaH(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a9s=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ab(q)===0){x=8
break}x=10
return A.b(B.asy("media",r,new B.ci0(s,e,g),f,q),$async$a9s)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.X9(g,A.J(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a9s)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.X9(g,A.J(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a9s)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ad(l)
$.an.$1("[doc share video cloud] upload: "+A.v(o))
x=15
return A.b(B.X9(g,A.J(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a9s)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a9s,w)},
FS(d,e,f){return B.iaI(d,e,f)},
iaI(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$FS=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.Y(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$FS)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.asA(b3),$async$FS)
case 7:if(c0){x=6
break}x=8
return A.b(A.bM(C.j5,null,g),$async$FS)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.asA(b3),$async$FS)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.P_(),$async$FS)
case 10:e=c0
g=J.a1(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a1(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.h.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.ch(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a1(a4)
r=a1.gI(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.B()){x=12
break}a7=a2.gP(a2)
if(!a0.b(a7)){x=11
break}a8=J.a1(a7)
a9=a8.h(a7,"name")
o=J.k(a9==null?"video.mp4":a9)
a9=a8.h(a7,"mime")
n=J.k(a9==null?"video/mp4":a9)
a8=a8.h(a7,"storagePath")
m=J.k(a8==null?"":a8)
if(J.ab(m)===0){x=11
break}u=14
a8=$.f6().b
a8===$&&A.d()
a8=a8.at
a8===$&&A.d()
a9=a8.c
a9===$&&A.d()
b0=A.nW(null,null,a5,a5)
b0.u(0,a8.b)
l=new A.acT(a8.a,b0,"media",a8.d,a9).E6(m)
k=A.cH(l,0,null)
x=17
return A.b(B.b3r(k,n,o,s,b7),$async$FS)
case 17:j=c0
if(j!=null){J.bX(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ad(b4)
$.an.$1("[doc share video cloud] download "+A.v(o)+": "+A.v(i))
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
case 18:g.X(e,b3)
g=a1.gae(a4),a1=y.s
case 21:if(!g.B()){x=22
break}a7=g.gP(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ab(h)!==0?25:26
break
case 25:u=28
a2=$.f6().b
a2===$&&A.d()
a2=a2.at
a2===$&&A.d()
a6=a2.c
a6===$&&A.d()
a8=A.nW(null,null,a5,a5)
a8.u(0,a2.b)
x=31
return A.b(new A.acT(a2.a,a8,"media",a2.d,a6).X(0,A.a([h],a1)),$async$FS)
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
a0=A.dE(A.a0(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.W(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a9r(e),$async$FS)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$FS,w)},
ci1:function ci1(){},
ci2:function ci2(d){this.a=d},
ci0:function ci0(d,e,f){this.a=d
this.b=e
this.c=f},
aV1(){var x=0,w=A.j(y.H),v,u
var $async$aV1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.im9=null
v=y.H
u=A.dT(null,v)
x=2
return A.b(u,$async$aV1)
case 2:u=A.dT(null,v)
x=3
return A.b(u,$async$aV1)
case 3:u=$.hsR
u=u==null?null:u.bJ(0)
x=4
return A.b(y.x.b(u)?u:A.dT(u,v),$async$aV1)
case 4:$.hsR=$.ivC=$.ivD=null
return A.h(null,w)}})
return A.i($async$aV1,w)},
fPh(d){var x=0,w=A.j(y.H),v,u
var $async$fPh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.abB){x=1
break}u=new A.bo($.bG,y.d4)
d.c=new B.fPi(new A.cc(u,y.aY))
x=3
return A.b(u.im(0,C.he,new B.fPj()),$async$fPh)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fPh,w)},
ivy(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.iap(x):x},
hsW(d){var x=0,w=A.j(y.T),v,u,t
var $async$hsW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,13))
if(C.a.Y(u,"WR")){v=B.asC(u)
x=1
break}v=B.hn7(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hsW,w)},
hsV(d){var x=0,w=A.j(y.T),v,u,t
var $async$hsV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.Y(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.aV(t,14))
if(C.a.Y(u,"WR")){v=B.asD(u)
x=1
break}v=B.hn7(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hsV,w)},
h9T(d){var x=0,w=A.j(y.T),v
var $async$h9T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asD(d),$async$h9T)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h9T,w)},
bHb(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bHb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hsV(d),$async$bHb)
case 3:q=f
if(q==null){x=1
break}t=C.T.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a1(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ab(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bHb,w)},
fCk(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fCk=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.X3(g)
x=1
break}if(d.gI(d)<=0){v=null
x=1
break}v=B.CI(d.a9b(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCk,w)},
HM(d,e,f){return B.iy2(d,e,f)},
iy2(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HM=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hsW(a1),$async$HM)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.T.aN(0,e,null)
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
break}p=J.ab(q)
o=C.a.i(a1)
if(C.a.Y(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.aV(o,13))
m=C.a.Y(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hY0().aIU(D.dPA,null),$async$HM)
case 4:l=d.hsR=a4
f.a="file"
f.b="application/octet-stream"
k=new A.aek(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bo($.bG,y.b1)
l.y=new B.fPW(f,k,new B.fPX(f,a2,k,j,a0,p),a2,j,a0,p,new A.cc(t,y.ch))
x=5
return A.b(l.aaz(0,new B.Zo(r,"offer")),$async$HM)
case 5:d=l
x=7
return A.b(l.aot(0),$async$HM)
case 7:x=6
return A.b(d.aar(0,a4),$async$HM)
case 6:x=8
return A.b(B.fPh(l),$async$HM)
case 8:x=9
return A.b(l.asS(),$async$HM)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ivy(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.T.au(A.J(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.asE(m,h),$async$HM)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hEC(h)
case 11:v=new A.btH(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HM,w)},
fPi:function fPi(d){this.a=d},
fPj:function fPj(){},
fPX:function fPX(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fPW:function fPW(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fPV:function fPV(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
iA7(d){switch(d){case"new":return D.eRz
case"checking":return D.eRA
case"connected":return D.eRC
case"completed":return D.eRB
case"failed":return D.eRE
case"disconnected":return D.eRF
case"closed":return D.aUt
case"count":return D.eRD}return D.aUt},
iA8(d){switch(d){case"new":return D.aUu
case"gathering":return D.eRG
case"complete":return D.abB}return D.aUu},
iLf(d){switch(d){case"stable":return D.eRH
case"have-local-offer":return D.eRI
case"have-local-pranswer":return D.eRK
case"have-remote-offer":return D.eRJ
case"have-remote-pranswer":return D.eRL
case"closed":return D.aUA}return D.aUA},
iJj(d){switch(d){case"new":return D.aUx
case"connecting":return D.aUy
case"connected":return D.aUz
case"closed":return D.abC
case"disconnected":return D.aUw
case"failed":return D.aUv}return D.abC},
abQ:function abQ(d,e){this.a=d
this.b=e},
Q9:function Q9(d,e){this.a=d
this.b=e},
Zn:function Zn(d,e){this.a=d
this.b=e},
Q8:function Q8(d,e){this.a=d
this.b=e},
Gm:function Gm(d,e){this.a=d
this.b=e},
cw8:function cw8(){},
hp0(d){var x=new B.Gl()
x.a=d
x.b=!0
return x},
Gl:function Gl(){this.b=this.a=$},
abP:function abP(){},
axa:function axa(){},
Zo:function Zo(d,e){this.a=d
this.b=e},
hn3(){var x=0,w=A.j(y.H)
var $async$hn3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$hn3,w)},
hn6(d,e,f){var x=0,w=A.j(y.T),v
var $async$hn6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.Y(e.c,"video/")||e.n2(D.nv))){v=null
x=1
break}v=B.ha9(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hn6,w)},
hEC(d){var x,w=F.ahL.a7c(C.e5.aK(d),null)
if(w.length===0){x=C.e5.aK(d)
return C.cS.gcp().aK(x)}return C.cS.gcp().aK(w)},
iao(d){var x,w,v=C.cM.aK(d)
try{x=C.ch.cJ(0,F.ahK.bjf(v,!1))
return x}catch(w){x=C.ch.cJ(0,v)
return x}},
hn7(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.Y(t,s))return B.iao(C.a.aV(t,s.length))
w=e+"|"
if(C.a.Y(t,w)){x=C.a.aV(t,w.length)
try{v=C.ch.cJ(0,C.cM.aK(x))
return v}catch(u){return x}}return null},
iap(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.Y(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aJ(s,"\n")},
iaq(){var x,w=$.oh(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aw(32)]
return"DS"+C.d.hp(v)},
b3x(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b3x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bN),$async$b3x)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
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
return A.i($async$b3x,w)},
chK(d,e){return B.iar(d,e)},
iar(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$chK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ab(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cZ,null),$async$chK)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
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
return A.i($async$chK,w)},
b3A(d){var x=0,w=A.j(y.y),v,u,t
var $async$b3A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b3x(d),$async$b3A)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3A,w)},
b3z(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b3z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.iaq()
r=C.a.i(f)
t=C.e5.aK(s)
x=3
return A.b(B.chK(u,A.J(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcp().aK(t),"usesRemaining",999999,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b3z)
case 3:if(!h){v=null
x=1
break}v=new A.a2x("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3z,w)},
b3y(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b3y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ab(o)===0){v=null
x=1
break}x=3
return A.b(B.b3x(o),$async$b3y)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ab(u)===0){v=null
x=1
break}try{t=C.ch.cJ(0,C.cM.aK(u))
if(J.j_(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ad(n)
$.an.$1("[doc share qr stash] decode "+A.v(o)+": "+A.v(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b3y,w)},
chL(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$chL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ab(q)===0){x=1
break}u=4
x=7
return A.b(O.bIa("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cZ),$async$chL)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[doc share qr stash] delete "+A.v(q)+": "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$chL,w)},
b3B(d){var x=0,w=A.j(y.h),v,u,t
var $async$b3B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.JQ(),$async$b3B)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a0(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b3B,w)},
asv(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$asv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asv)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b3B(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asv,w)},
ast(d,e){var x=0,w=A.j(y.H)
var $async$ast=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$ast)
case 3:x=2
return A.b(g.aB("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ast)
case 2:return A.h(null,w)}})
return A.i($async$ast,w)},
a9j(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a9j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9j)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.JQ(),$async$a9j)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dz(s)
if(q.am(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.J(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a9i(s),$async$a9j)
case 5:x=6
return A.b(B.ast(f,u),$async$a9j)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9j,w)},
a9k(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9k=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9k)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.JQ(),$async$a9k)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a1(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a0(r,y.N,y.z)
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
return A.b(B.ast(g,q),$async$a9k)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a9i(u),$async$a9k)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9k,w)},
a9l(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a9l=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9l)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.JQ(),$async$a9l)
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
s=B.b3u(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aB(),$async$a9l)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aB("String","ngmy_doc_share_school_session_"+s,C.T.au(A.J(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.W(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a9l)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a9l,w)},
chM(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$chM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ab(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aB(),$async$chM)
case 7:s=f
p=A.v(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.T.aN(0,r,null)
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
return A.i($async$chM,w)},
JR(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$JR=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.chM(d),$async$JR)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b3B(t),$async$JR)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.asu(d),$async$JR)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b3u(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.asu(d),$async$JR)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JR,w)},
asu(d){var x=0,w=A.j(y.H)
var $async$asu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aB(),$async$asu)
case 3:x=2
return A.b(f.X(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$asu)
case 2:return A.h(null,w)}})
return A.i($async$asu,w)},
b3C(){var x,w=$.oh(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aw(32)]
return C.d.hp(v)},
a9m(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aD(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
hn8(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
chP(d){return B.iat(d)},
iat(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$chP=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a9m(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f9("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bN),$async$chP)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
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
return A.i($async$chP,w)},
asx(d,e){return B.iau(d,e)},
iau(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$asx=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a9m(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.i2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cZ,null),$async$asx)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ad(o)
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
return A.i($async$asx,w)},
chR(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9m(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.asx(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chR,w)},
chQ(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$chQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9m(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.asx(u,A.J(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$chQ)
case 3:case 1:return A.h(v,w)}})
return A.i($async$chQ,w)},
chS(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$chS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a9m(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.asx(u,A.J(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$chS,w)},
chT(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$chT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.hn8(d)){v=null
x=1
break}x=3
return A.b(B.chP(d),$async$chT)
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
return A.i($async$chT,w)},
a9t(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a9t=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$a9t)
case 3:if(!e){v=A.S(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f9("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bN),$async$a9t)
case 8:s=e
if(s==null){v=A.S(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a0(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ad(n)
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
return A.i($async$a9t,w)},
asB(d){return B.iaJ(d)},
iaJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$asB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.ce(),$async$asB)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.i2("ngmy_doc_share_webrtc_signal_v1",A.J(["signals",d,"savedAt",new A.W(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cZ,null),$async$asB)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ad(q)
$.an.$1("[doc share webrtc stash] save: "+A.v(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$asB,w)},
asC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$asC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ab(j)===0||!J.dc(j,"WR")){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asC)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a9t(),$async$asC)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ab(q)===0){v=null
x=1
break}u=6
p=C.ch.cJ(0,C.cM.aK(q))
if(J.j_(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dE(A.a0(r,m,l),m,l)
J.aL(o,"offerConsumedAt",new A.W(Date.now(),0,!1).aa().ag())
J.aL(s,j,o)
x=9
return A.b(B.asB(s),$async$asC)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ad(i)
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
return A.i($async$asC,w)},
asE(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$asE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.ce(),$async$asE)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a9t(),$async$asE)
case 4:u=g
t=J.a1(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dE(A.a0(s,r,q),r,q)
r=C.e5.aK(C.a.i(e))
q.n(0,"answer",C.cS.gcp().aK(r))
q.n(0,"answerAt",new A.W(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.asB(u),$async$asE)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asE,w)},
asD(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$asD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.ce(),$async$asD)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a9t(),$async$asD)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ab(u)===0){v=null
x=1
break}try{r=C.ch.cJ(0,C.cM.aK(u))
v=r
x=1
break}catch(n){t=A.ad(n)
$.an.$1("[doc share webrtc stash] answer decode: "+A.v(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$asD,w)},
ars(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ars=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aS.bl$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbf()
if(!(p instanceof A.oF)){v=null
x=1
break}x=3
return A.b(p.lF(e),$async$ars)
case 3:r=g
u=4
x=7
return A.b(r.hs(C.hr),$async$ars)
case 7:q=g
o=q
o=o==null?null:J.eU(J.tL(o))
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
return A.i($async$ars,w)},
iHj(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aY(C.n.v(w),5,"0")
return v},
h81(d){return B.iHl(d)},
iHl(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$h81=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").MC(d,3600),$async$h81)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
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
return A.i($async$h81,w)},
Ea(d,e,f,g,h,i){var x=null
return B.iHi(d,e,f,g,h,i)},
iHi(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Ea=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hEF(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.hna(r),$async$Ea)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.h81(o),$async$Ea)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a9n(r),$async$Ea)
case 14:v=null
x=1
break
case 13:e=$.bG.h(0,C.aYg)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Is(A.a([],g))
x=15
return A.b(d.fh(0,A.axZ("GET",A.cH(n,0,null))).d9(0,C.HM),$async$Ea)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a9n(r),$async$Ea)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.LI(d)
u=19
case 22:x=24
return A.b(d.B(),$async$Ea)
case 24:if(!b2){x=23
break}k=d.gP(0)
q+=J.ab(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b3E(r,k),$async$Ea)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a2(0),$async$Ea)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.I)(b0),++f
x=8
break
case 10:i=B.X3(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ad(a4)
$.an.$1("[supabase multipart download] "+a6+": "+A.v(j))
x=27
return A.b(B.a9n(r),$async$Ea)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ea,w)},
aUG(d){return B.iHk(d)},
iHk(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aUG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f6().b
r===$&&A.d()
r=r.at
r===$&&A.d()
x=7
return A.b(r.iO("media").X(0,d),$async$aUG)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ad(p)
$.an.$1("[supabase remove paths]: "+A.v(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aUG,w)}},D,Y,N,Z,A_
J=c[1]
A=c[0]
C=c[2]
O=c[67]
I=c[99]
P=c[313]
Q=c[53]
F=c[306]
K=c[185]
G=c[69]
R=c[271]
S=c[272]
E=c[263]
H=c[101]
T=c[237]
U=c[72]
V=c[186]
W=c[269]
L=c[251]
X=c[298]
M=c[314]
B=a.updateHolder(c[27],B)
D=c[312]
Y=c[236]
N=c[245]
Z=c[78]
A_=c[86]
B.cw9.prototype={
aIU(d,e){return this.cVI(d,e)},
cVI(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aIU=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.J(["mandatory",A.S(t,t),"optional",A.a([A.J(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dE(r,s,t)
t.u(0,d)
u=new q(A.kE(A.cz(t)))
t=J.k(u)
v=B.ify(C.cS.gcp().aK(new A.d1(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aIU,w)}}
B.b8P.prototype={
bFK(d){var x=this,w=x.w
w.onclose=A.hH(new B.cw4(x))
w.onopen=A.hH(new B.cw5(x))
w.onmessage=A.hH(new B.cw6(x))
w.onbufferedamountlow=A.hH(new B.cw7(x))},
gd6(d){return this.x},
akI(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$akI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Gl()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.hp0(J.eU(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.el(d.arrayBuffer(),y.af),$async$akI)
case 8:v=t.hp0(s.aqB(f,0,null))
x=1
break
case 7:case 4:v=B.hp0(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$akI,w)}}
B.b8Q.prototype={
bFL(d,e){var x=this,w=x.at
w===$&&A.d()
w.addEventListener("datachannel",A.hH(new B.cwa(x)))
w.addEventListener("icecandidate",A.hH(new B.cwb(x)))
w.addEventListener("iceconnectionstatechange",A.hH(new B.cwc(x)))
w.onicegatheringstatechange=A.hH(new B.cwd(x))
w.addEventListener("signalingstatechange",A.hH(new B.cwe(x)))
if(!$.hx9())w.addEventListener("connectionstatechange",A.hH(new B.cwf(x)))
w.addEventListener("negotiationneeded",A.hH(new B.cwg(x)))
w.addEventListener("track",A.hH(new B.cwh(x)))},
aot(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$aot=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.d()
x=3
return A.b(A.el(s.createAnswer(A.kE(A.cz(A.S(y.N,y.z)))),y.aQ),$async$aot)
case 3:t=f
v=new B.Zo(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aot,w)},
aar(d,e){return this.buE(0,e)},
buE(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aar=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setLocalDescription({type:u,sdp:t}),y.R),$async$aar)
case 2:return A.h(null,w)}})
return A.i($async$aar,w)},
aaz(d,e){return this.buZ(0,e)},
buZ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$aaz=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.d()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.el(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$aaz)
case 2:return A.h(null,w)}})
return A.i($async$aaz,w)},
asS(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$asS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.d()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Zo(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$asS,w)},
bJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.d()
t.close()
v=A.fc(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bJ,w)}}
B.aeH.prototype={
a9(){return"_DocShareEntry."+this.b}}
B.a0q.prototype={
R(){return new B.aCW()},
gd8(){return this.c}}
B.aCW.prototype={
Z(){this.a4()
this.ah9()},
ah9(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ah9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3v(u.e,u.c),$async$ah9)
case 2:t=e
if(v.c!=null)v.l(new B.dhY(v,t))
return A.h(null,w)}})
return A.i($async$ah9,w)},
Sh(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.asq(t.e,t.c,!1),$async$Sh)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fHp)
x=1
break}x=4
return A.b(B.a9h(u.a.c,"individual"),$async$Sh)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a7(t,!1).a8M(A.e4(new B.dhV(u),!1,null,y.H)),$async$Sh)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Sh,w)},
KS(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$KS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fN2(o),$async$KS)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a9l(o.e,r,s,q),$async$KS)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fEo)
x=1
break}x=5
return A.b(B.a9h(u.a.c,"member"),$async$KS)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a7(o,!1).a8M(A.e4(new B.dhX(u),!1,null,y.H)),$async$KS)
case 6:case 1:return A.h(v,w)}})
return A.i($async$KS,w)},
zi(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$zi=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a9g(t.e,o,t.f,t.r,t.w,s),$async$zi)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a9h(u.a.c,"org_owner"),$async$zi)
case 4:x=5
return A.b(B.asv(u.a.c),$async$zi)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fNx(o),$async$zi)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a9j(s,t,o,q.c),$async$zi)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fEk)
x=1
break}x=10
return A.b(B.asv(u.a.c),$async$zi)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a7(o,!1).a8M(A.e4(new B.dhW(u),!1,null,y.H)),$async$zi)
case 11:case 1:return A.h(v,w)}})
return A.i($async$zi,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I,q=r?C.o_:C.ni,p=B.hn5(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.v(o)+" of "+p+" free"
o=A.aE(d,C.dL,y.m).w
w=A.n(28)
v=A.a([new A.ac(0,C.G,C.aA.j(0.35),C.fF,24)],y.V)
u=y.p
v=A.q(s,A.w(A.a([A.q(s,D.h0T,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.n(20),s,s,C.m),s,s,s,s,C.hp,s,s,s),C.az,D.hlj,C.S,A.c("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.cfV,C.m),s,s,s,s,C.eA,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lW(new B.di_(),s),C.N,v,C.ee,A.c(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.u(w,A.a([C.aj,A.c("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.af)
if(!t.a.x)C.d.u(w,A.a([new B.afa(C.f9,C.aGN,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcnV(),s),C.af],u))
w.push(new B.afa(C.qb,C.a6T,"Team Member","Sign in with your organization access code + password",t.gcoQ(),s))
w.push(C.af)
w.push(new B.afa(C.asw,C.a8C,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcok(),s))
return A.c6(s,q,A.bm(!0,A.cb(A.w(w,C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.afa.prototype={
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.n(22)
q=A.n(22)
x=t.d
w=A.K(C.d.gH(x).j(0.35),C.r,1)
v=A.n(16)
u=y.p
return A.aG(!1,C.a3,!0,s,A.aM(!1,r,!0,A.eJ(A.A(A.a([A.q(s,A.V(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a6(C.a5,C.a9,C.w,x,s,s),C.m),s,56,s,s,s,s,s,56),C.eu,A.E(A.w(A.a([A.c(t.e,s,s,s,s,s,s,C.lS,s,s,s),C.at,A.c(t.f,s,s,s,s,s,s,A.l(s,s,A.Q(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.B,s,C.e,C.i,0,C.p),1),A.V(C.A6,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.i,0,s,s),s,new A.p(p,s,w,q,s,s,C.m),s,C.bR,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.ai)}}
B.aFC.prototype={}
B.aIT.prototype={}
B.jW.prototype={
n2(d){var x=this.b,w=C.a.ow(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.aV(x,w+1).toLowerCase())},
gaty(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.h.a1(x/1024,1)+" KB"
if(x<1073741824)return C.h.a1(x/1048576,1)+" MB"
return C.h.a1(x/1073741824,2)+" GB"},
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
biJ(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jW(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cUa(d){return this.biJ(null,d)},
aIB(d){return this.biJ(d,null)}}
B.WY.prototype={
R(){return new B.aH0(new A.cB(null,y.A))},
gd8(){return this.c}}
B.aH0.prototype={
Z(){this.a4()
this.aha()},
aha(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aha=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.CH(u.a.c),$async$aha)
case 3:t=e
if(u.c==null){x=1
break}u.l(new B.e4K(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aha,w)},
ahb(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$ahb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fQ(new A.fE(s)),$async$ahb)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.fIk)
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
a12(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a12=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ars(s.d,4),$async$a12)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$a12)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ad(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a12,w)},
al8(){var x=0,w=A.j(y.H),v,u=this,t
var $async$al8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.acs("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$al8)
case 3:case 1:return A.h(v,w)}})
return A.i($async$al8,w)},
C(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.Q(d).ax.a===C.I,n=o?C.o_:C.ni,m=o?C.c:C.a_,l=A.eQ(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.c("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.l3
else if(q.e==null)x=A.at(new A.C(C.eA,A.c("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.c("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aA.j(o?0.35:0.12)
w=A.a([w,C.aO.j(o?0.2:0.08)],y.O)
v=A.n(20)
u=A.K(C.aA.j(0.4),C.r,1)
t=A.c("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.C,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.w(A.a([t,C.N,A.c(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,L.AL,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.aj,A.c("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.i,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a6(C.a5,C.a9,C.w,w,p,p),C.m),p,p,p,p,P.aoZ,p,p,1/0)
v=A.n(20)
u=A.a([new A.ac(0,C.G,C.aA.j(0.2),C.dv,24)],y.V)
s=q.e
s.toString
r=A.cb(A.w(A.a([x,C.nB,w,C.lq,new A.ea(A.q(p,A.qx(p,p,!1,B.iak(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.m),p,p,p,p,C.bR,p,p,p),q.d),C.af,A.c("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.lq,A.A(A.a([A.E(A.eo(I.Ee,p,C.XJ,q.gcfQ(),p),1),C.ar,A.E(A.df(C.AA,p,C.ae1,q.gcfR(),A.bp(C.aA,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.i,0,p,p),C.S,new A.a4(1/0,p,A.eo(N.a5G,p,D.hgI,q.gcEa(),p),p)],r),C.l,p,C.e,C.i,0,C.p),C.t,p,C.y,p,p,Z.apA,p,p,C.ah)
x=r}return A.c6(l,n,x,p,!1,!1,p,p)}}
B.X1.prototype={
R(){return new B.aH3(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aH3.prototype={
Z(){var x,w
this.a4()
x=this.a.e
w=B.JP(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
a13(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a13=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.JP(u.d.a.a)
if(t==null){u.l(new B.e5T(u))
x=1
break}u.l(new B.e5U(u))
s=u.a
r=s.c
x=3
return A.b(B.a9f(s.d,new B.e5V(u),t,r),$async$a13)
case 3:q=e
if(u.c==null){x=1
break}u.l(new B.e5W(u))
if(q){s=u.c
s.toString
A.a7(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$a13,w)},
a4B(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a4B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ch(r.a.d)){x=1
break}r.l(new B.e5X(r))
u=4
q=J.ex(r.a.d)
x=7
return A.b(B.tf(r.a.c,q),$async$a4B)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.l(new B.e5Y(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ab(r.a.d)>1?"NGMY Doc Share ("+J.ab(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.akk(p,m,l,j,k),$async$a4B)
case 8:o=e
if(r.c!=null)r.l(new B.e5Z(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ad(h)
if(r.c!=null)r.l(new B.e6_(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.l(new B.e60(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4B,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.Q(d).ax.a===C.I,i=j?D.akT:D.aik,h=j?D.amJ:C.c,g=j?C.aS:C.a_,f=j?C.bQ:C.an,e=j?D.ajQ:C.bo
i=[i,e,h,g,f,j?C.fz:C.bU]
x=A.Q(d).ax.a===C.I
w=J.ab(l.a.d)
h=i[0]
g=i[3]
g=A.eQ(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.c("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bV(C.z,0.5,C.w,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ao(80,new A.dn(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bV(C.z,0.5,C.w,k,0,A.a([C.aA.j(x?0.12:0.08),C.aA.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.n(22)
s=A.K(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.c2K,C.f,k,k,new A.p(k,k,k,A.n(16),k,new A.a6(C.aw,C.aD,C.w,A.a([i[5].j(0.85),C.aA],e),k,k),C.m),k,52,k,k,k,k,k,52),C.eu,A.E(A.w(A.a([A.c("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.c("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.B,k,C.e,C.i,0,C.p),1)],r),C.l,k,C.e,C.i,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.m),k,k,k,k,C.f7,k,k,k)
s=A.c("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,L.AL,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.vj(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bnZ()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aO(k,C.M,u==null,k,!0,C.t,k,A.aP(),l.d,k,k,k,k,k,2,A.bB(k,k,k,C.PH,k,k,"",k,!0,new A.b5(4,A.n(18),new A.ax(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.n(18),new A.ax(C.aA,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.am,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e61(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.mS,k,k,k,k)
q=A.c("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.c("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.C,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.n(18)
n=A.K(i[1],C.r,1)
m=J.Ek(l.a.d,4)
m=A.B(new A.O(m,new B.e62(x,new A.aKa(i)),m.$ti.k("O<aj.E,x>")),y.c7)
if(J.ab(l.a.d)>4)m.push(new A.C(C.kP,A.c("+ "+(J.ab(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.N,e,C.N,q,C.df,p,C.N,A.q(k,A.w(m,C.l,k,C.e,C.i,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.m),k,k,k,k,C.es,k,k,k)],r)
if(l.r!=null){u=C.aA.j(x?0.16:0.1)
t=A.n(14)
s=A.K(C.aA.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fCP)
else q.push(A.V(C.kR,i[5],k,k,k,16))
q.push(C.ar)
p=l.r
p.toString
q.push(A.E(A.c(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.u(e,A.a([C.aN,A.cZ(k,A.A(q,C.l,k,C.e,C.i,0,k,k),k,k,C.b1,new A.p(u,k,s,t,k,k,C.m),C.iP,k,k,k,k,C.f3,k,k,k)],r))}e=A.E(A.cb(A.w(e,C.al,k,C.e,C.i,0,C.p),C.t,k,C.y,k,k,D.bKK,k,k,C.ah),1)
u=l.f?k:l.gcEb()
t=i[3]
s=i[1]
q=A.n(16)
s=A.eo(N.a5G,k,D.hhP,u,A.dj(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.bb(q,C.a1),new A.ax(s,1,C.r,-1),k,k,k,k))
i=A.c("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcfS()
t=A.bp(C.aA,k,k,0,C.c,k,C.o7,k,new A.bb(A.n(16),C.a1),k,k,k)
return A.c6(g,h,new A.am(C.a0,k,C.ab,C.t,A.a([f,v,A.bm(!0,A.l5(new B.e63(),A.w(A.a([e,new A.C(D.bKd,A.w(A.a([s,C.N,i,C.af,A.bI(l.f?C.uz:D.hg2,k,u,t)],r),C.al,k,C.e,C.i,0,C.p),k)],r),C.l,k,C.e,C.i,0,C.p),C.cn,C.a1U,k,k,new A.bq(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bnZ.prototype={
ps(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fa(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bd(v,A.hm(C.bB,v.length),C.aP)}}
B.WZ.prototype={
R(){return new B.aH1()}}
B.aH1.prototype={
Z(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ay()
u.d!==$&&A.aT()
u.d=new A.au(new A.bd(w,C.ba,C.aP),v)
x=x.d
u.e!==$&&A.aT()
u.e=new A.au(new A.bd(x,C.ba,C.aP),v)
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
w.a3()},
ahc(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$ahc=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.l(new B.e4L(r))
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
return A.b(B.a9k(p,m,n,o,C.a.i(l).length===0?null:l),$async$ahc)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.fHW)
s=[1]
x=4
break}p.L(y.q).f.T(D.fGx)
p=r.c
p.toString
A.a7(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.l(new B.e4M(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahc,w)},
C(d){var x,w,v,u,t=this,s=null,r=A.Q(d).ax.a===C.I?C.o_:C.ni,q=A.eQ(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.h8l,s,s,s,1,s,!0),p=A.q(s,D.bCf,C.f,s,s,new A.p(s,s,s,A.n(22),s,E.J8,C.m),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.d()
o=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),o,s,s,s,s,s,2,D.cae,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.d()
x=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),x,s,s,s,s,s,2,D.ca9,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.d()
w=A.aO(s,C.M,!1,s,!0,C.t,s,A.aP(),w,s,s,s,s,s,2,D.cap,C.y,!0,s,!0,s,!1,s,C.am,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a8,s,C.ao,s,s,s,s)
v=t.r?s:t.gcfT()
u=A.bp(C.aA,s,s,s,s,C.hu,s,s,s,s,s,s)
return A.c6(q,r,A.cb(A.w(A.a([p,C.df,o,C.af,x,C.af,w,C.nB,A.bI(t.r?C.uz:C.b0d,s,v,u)],y.p),C.al,s,C.e,C.i,0,C.p),C.t,s,C.y,s,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.aeo.prototype={}
B.bB3.prototype={
a7t(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a7t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gI(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.a9b()))
x=3
return A.b(B.T4(t,s),$async$a7t)
case 3:if(!e){$.an.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a7t,w)},
gd8(){return this.a}}
B.OY.prototype={
a9(){return"NgmyDocShareQrMode."+this.b}}
B.a0p.prototype={
R(){return new B.aCV(new A.au(C.ay,$.ay()),A.jI(!0,null,!0,!0,null,null,!1))}}
B.aCV.prototype={
Z(){this.a4()
$.aS.U$.push(new B.dhU(this))},
t(){var x=this.d
x.V$=$.ay()
x.W$=0
this.e.t()
this.a3()},
cfZ(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a7(w,!1).N(x)
return null},
C(d){var x=this,w=null,v=B.a3z(d),u=x.a.c,t=u?C.j_:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.o_:v.a[0],p=A.n(24),o=A.K(C.aA.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aA.j(u?0.25:0.12),C.fF,32)],n),l=A.q(w,Y.avj,C.f,w,w,new A.p(w,w,w,A.n(18),A.a([new A.ac(0,C.G,C.aA.j(0.4),C.cy,16)],n),C.awb,C.m),w,56,w,w,w,w,w,56),k=A.c("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.c("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.C,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.vj(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bAF()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aO(!1,C.M,!1,w,!0,C.t,w,A.aP(),x.d,w,w,w,w,w,2,A.bB(w,w,w,C.Dp,w,w,"",w,!0,new A.b5(4,A.n(16),new A.ax(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.n(16),D.b9N),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.am,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dhS(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.mS,w,w,w,w)
f=f[1]
h=y.p
return A.eD(w,C.L,new A.cS(T.Ng,new A.bP(new A.p(t,w,o,p,m,w,C.m),C.bn,new A.C(C.xj,A.w(A.a([l,C.aN,k,C.N,j,C.ee,i,C.ee,A.A(A.a([A.E(A.dV(C.oA,new B.dhT(d),A.dj(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.bb(A.n(14),C.a1),new A.ax(f,1,C.r,-1),w,w,w,w)),1),C.ar,A.E(new A.bP(new A.p(w,w,w,A.n(14),A.a([new A.ac(0,C.G,C.aA.j(0.35),C.cO,12)],n),M.RR,C.m),C.bn,A.aG(!1,C.a3,!0,w,A.aM(!1,A.n(14),!0,D.eKT,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcfY(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.ai),w),2)],h),C.l,w,C.e,C.i,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.PP,w,C.db,w,w,w)}}
B.bAF.prototype={
ps(d,e){return e.aon(e.a.toUpperCase())}}
B.X_.prototype={
R(){return new B.aH2(A.a([],y.r),A.aR(y.N))},
gd8(){return this.c}}
B.aH2.prototype={
Z(){var x=this
x.a4()
x.uP()
x.w=A.d5(C.jY,new B.e5R(x))},
t(){var x=this.w
if(x!=null)x.a2(0)
B.X8()
this.a3()},
a3p(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a3p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OX(u.a.c),$async$a3p)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.BC(u.a.c),$async$a3p)
case 4:u.l(new s.e5e(u,e))
u.iA("Received "+A.v(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a3p,w)},
uP(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.OX(u.a.c),$async$uP)
case 3:t=e
x=4
return A.b(B.BC(u.a.c),$async$uP)
case 4:s=e
if(u.c==null){x=1
break}u.l(new B.e5f(u,s))
if(t>0)u.iA("Received "+A.v(t)+" file(s) via My Code.")
u.Pj(u.d)
B.CH(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uP,w)},
Pj(d){return this.bJS(d)},
bJS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Pj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a9p(r,u.a.c),$async$Pj)
case 8:p=f
if(u.c==null){x=1
break}new B.e4O(u,r,p).$0()
u.c.ey()
case 7:if(!(C.a.Y(r.c,"video/")||r.n2(D.nv))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.X6(r,u.a.c),$async$Pj)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.I)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.BC(u.a.c),$async$Pj)
case 12:u.l(new o.e4P(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Pj,w)},
PJ(d){return this.bQj(d)},
bQj(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$PJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a9p(d,u.a.c),$async$PJ)
case 5:t=f
if(u.c==null){x=1
break}u.l(new B.e4U(u,d,t))
x=6
return A.b(A.fQ(new A.fE(t)),$async$PJ)
case 6:u.iA("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fQ(new A.fE(r.toUpperCase())),$async$PJ)
case 7:u.iA("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$PJ,w)},
iA(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b2(x,x,x,x,x,C.t,x,A.c(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
uQ(d,e){return this.cPp(d,e)},
cPp(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$uQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.l(new B.e5F(r,e))
u=3
x=6
return A.b(d.$0(),$async$uQ)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.l(new B.e5G(r))
$.eY.mW()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$uQ,w)},
gb_x(){var x=this.a
return x.f||x.r||x.w},
JC(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$JC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gb_x()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.chI(s,n,r,q,o,t),$async$JC)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.iA("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.h0k(o,u.a.c),$async$JC)
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
return A.b(B.Ec(s,o,r,q,n,t),$async$JC)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$JC,w)},
a2p(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a2p=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.asv(u.a.c),$async$a2p)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.iA("No organization portal found.")
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
return A.b(A.a7(t,!1).ca(A.e4(new B.e5b(u,r,q),!1,null,y.H)),$async$a2p)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a2p,w)},
a3A(d){return this.cxv(d)},
cxu(){return this.a3A(1)},
cxv(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a3A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gb_x()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.ass(u.a.c),$async$a3A)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a3A,w)},
aeY(d,e,f){return this.c6q(d,e,f)},
c6q(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aeY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA(e)
x=1
break}x=3
return A.b(u.uQ(new B.e58(u,d,null,e,f),"Uploading\u2026"),$async$aeY)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aeY,w)},
bK0(){B.hUV(!1,new B.e4S(this))
return},
cCG(){this.l(new B.e5j(this))},
aCZ(){var x=0,w=A.j(y.H),v=this
var $async$aCZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bK0()
return A.h(null,w)}})
return A.i($async$aCZ,w)},
aeU(){var x=0,w=A.j(y.H),v=this
var $async$aeU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uQ(new B.e4Y(v),"Importing\u2026"),$async$aeU)
case 2:return A.h(null,w)}})
return A.i($async$aeU,w)},
Ui(d){return this.cOG(d)},
cOG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Ui=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.Y(t,"video/")||d.n2(D.nv)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e5C(u,d),!1,null,y.H)),$async$Ui)
case 5:x=1
break
case 4:x=C.a.Y(t,"image/")||d.n2(D.TV)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a7(t,!1).ca(A.e4(new B.e5D(u,d),!1,null,y.H)),$async$Ui)
case 8:x=1
break
case 7:x=u.c78(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a7(t,!1).ca(A.e4(new B.e5E(u,d),!1,null,y.H)),$async$Ui)
case 11:x=1
break
case 10:u.iA("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Ui,w)},
c78(d){var x,w
if(C.a.Y(d.c,"audio/"))return!0
x=d.b
w=C.a.ow(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cZY,C.a.aV(x,w+1).toLowerCase())},
aiR(d){return this.cnZ(d)},
cnZ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aiR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.Y(d.c,"video/")||d.n2(D.nv)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a7(t,!1).ca(A.e4(new B.e59(u,d),!1,null,y.H)),$async$aiR)
case 5:x=1
break
case 4:u.l(new B.e5a(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aiR,w)},
TE(d){return this.cFF(d)},
cFF(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$TE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.iA("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$TE)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.uQ(new B.e5v(u,d),"Preparing QR\u2026"),$async$TE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$TE,w)},
alA(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$alA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e5w(),A.T(t).k("O<1,o>")).fH(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e5x(q),s),s.k("M.E"))
if(r.length===0){u.iA("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.TE(r),$async$alA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$alA,w)},
als(d){return this.cFc(d)},
cFc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$als=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3z(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5p(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$als)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Ui(d)
break
case"qr":u.TE(A.a([d],y.r))
break
case"send_my_code":u.coF(A.a([d],y.r))
break
case"save":u.akQ(d)
break
case"delete":u.Kx(d)
break}case 1:return A.h(v,w)}})
return A.i($async$als,w)},
ZL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ZL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.O(t,new B.e4V(),A.T(t).k("O<1,o>")).fH(0)}t=u.d
s=A.T(t).k("X<1>")
r=A.B(new A.X(t,new B.e4W(q),s),s.k("M.E"))
if(r.length===0){u.iA("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(G.pX(t,s.c,s.f),$async$ZL)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.uQ(new B.e4X(u,r),"Preparing file\u2026"),$async$ZL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZL,w)},
ajY(d){return this.cvM(d)},
cvM(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ajY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hVZ(d,!1),$async$ajY)
case 3:s=f
r=s==null
q=B.a9m(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.iA("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajY,w)},
aiX(){var x=0,w=A.j(y.H),v=this,u
var $async$aiX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.h99(u,v.a.c),$async$aiX)
case 2:return A.h(null,w)}})
return A.i($async$aiX,w)},
bK_(){B.hUV(!1,new B.e4R(this,null))
return},
KR(d,e){return this.coG(d,e)},
b6m(d){return this.KR(null,d)},
coF(d){return this.KR(d,null)},
coG(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$KR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("X<1>")
k=A.B(new A.X(p,new B.e5c(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.y9.cr().ara(!0,C.a3N,!1),$async$KR)
case 10:r=g
if(r==null||J.ch(r.a)){x=1
break}x=11
return A.b(s.uQ(new B.e5d(l,s,r),"Preparing\u2026"),$async$KR)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ad(j)
$.an.$1("[doc share send my code pick] "+A.v(q))
s.iA("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.iA("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bJq(p,l,e,s.a.c),$async$KR)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$KR,w)},
JT(d){return this.c6d(d)},
c6d(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$JT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.Y(q,"NGMYDOCRCV|")||C.a.Y(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.iaj(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b6m(t),$async$JT)
case 8:x=6
break
case 7:u.iA("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.iA("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.Y(d,"NGMYDOCSYNC3|")||C.a.Y(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.uQ(new B.e56(u,d),"Receiving video\u2026"),$async$JT)
case 11:x=1
break
case 10:x=12
return A.b(u.uQ(new B.e57(u,d),"Receiving\u2026"),$async$JT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$JT,w)},
FB(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$FB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.E6()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ajY(t),$async$FB)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.JT(s),$async$FB)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5h(u),!1,null,y.N)),$async$FB)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uP(),$async$FB)
case 10:x=1
break
case 9:x=11
return A.b(u.JT(C.a.i(r)),$async$FB)
case 11:case 1:return A.h(v,w)}})
return A.i($async$FB,w)},
akQ(d){return this.cB9(d)},
cB9(d){var x=0,w=A.j(y.H),v=this
var $async$akQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.uQ(new B.e5g(v,d),"Saving\u2026"),$async$akQ)
case 2:return A.h(null,w)}})
return A.i($async$akQ,w)},
Kx(d){return this.bSI(d)},
bSI(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Kx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lH(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Kx)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.chL(t),$async$Kx)
case 6:case 5:s=d.a
x=7
return A.b(B.FR(u.a.c,s),$async$Kx)
case 7:u.r.X(0,s)
x=8
return A.b(u.uP(),$async$Kx)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Kx,w)},
alG(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$alG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a3z(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e5B(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$alG)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aiX()
break
case"import":u.aeU()
break}case 1:return A.h(v,w)}})
return A.i($async$alG,w)},
cfW(d){var x=d.c
if(C.a.Y(x,"video/")||d.n2(D.nv))return C.rF
if(C.a.Y(x,"image/")||d.n2(D.TV))return C.vF
if(C.a.q(x,"pdf"))return S.IO
return D.asW},
C(d){var x,w,v=this,u=null,t=B.a3z(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.J0,u,u,u,new B.e5M(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.c3m,u,u,u,v.e?u:v.gcol(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcCF()
n.push(A.aI(u,u,u,u,A.V(v.r.a===x?D.bYi:E.atk,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a5C,u,u,u,v.e?u:v.gcfX(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.pb,u,u,u,v.e?u:v.gb7s(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c5b,u,u,u,v.e?u:new B.e5N(v),u,u,u,u,"More options",u))
q=A.eQ(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lW(new B.e5O(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bV(C.z,0.5,C.w,u,0,A.a([p.j(A.Q(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ao(40,new A.dn(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bV(C.z,0.5,C.w,u,0,A.a([C.aA.j(A.Q(d).ax.a===C.I?0.12:0.08),C.aA.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.jK(s[1].j(0.5),u,C.aA,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aCS(C.jI,s,!0,t,w?u:v.gcFG(),u),1)
x.push(new A.C(C.aoX,A.l5(new B.e5P(),A.A(A.a([s,C.ar,A.E(new B.aCS(C.tW,"Export",!1,t,w?u:v.gbWB(),u),1)],o),C.l,u,C.e,C.i,0,u,u),C.cn,C.iQ,u,u,new A.bq(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bit(t,v.e?u:v.gb7s(),u)
else s=A.ku(!0,u,u,new B.e5Q(v,t),s,u,D.bIQ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c6(q,r,new A.am(C.a0,u,C.ab,C.t,A.a([p,n,A.w(x,C.l,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aCS.prototype={
C(d){var x,w,v,u=this,t=null,s=A.n(16)
if(u.e){x=A.bp(C.aA,t,t,0,C.c,t,C.tM,t,new A.bb(s,C.a1),t,t,t)
return A.df(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.cg,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.dj(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.tM,t,new A.bb(s,C.a1),new A.ax(v,1,C.r,-1),t,t,t,t)
return A.eo(A.V(u.c,t,t,t,t,18),t,A.c(u.d,t,t,t,t,t,t,C.fk,t,t,t),u.r,v)}}
B.bit.prototype={
C(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aA.j(0.16)],y.O),t=A.K(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.l5(new B.dhQ(),new A.C(E.a2U,A.w(A.a([A.l5(new B.dhR(),A.q(x,A.V(C.Ab,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a6(C.aw,C.aD,C.w,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ek,C.hz,x,x,new A.bq(0.86,1,w),s),C.ee,A.c("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.S,A.c("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.ee,A.df(C.pb,x,D.hlD,this.d,A.bp(C.aA,x,x,x,C.c,x,C.PN,x,new A.bb(A.n(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cn,C.Da,x,x,new A.bq(0,1,w),s),x,x,x)}}
B.aeI.prototype={
C(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dx(0,0,0,380+C.n.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.n(18)
u=k.e
t=u?C.aA.j(0.85):x[1]
s=u?1.5:1
r=A.n(18)
q=A.n(14)
p=i.c
o=!C.a.Y(p,"video/")
if(!o||i.n2(D.nv))p=D.dDC
else{p=C.a.Y(p,"image/")||i.n2(D.TV)
n=y.O
p=p?A.a([C.cY,C.aA],n):A.a([C.aO.j(0.85),C.aA.j(0.7)],n)}p=A.q(j,A.V(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a6(C.aw,C.aD,C.w,p,j,j),C.m),j,48,j,j,j,j,j,48)
q=A.c(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.C,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaty()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.n2(D.nv))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.w(A.a([q,C.at,A.c(C.d.aJ(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.B,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.V(C.h3,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cp))
if(!(!o||i.n2(D.nv)))l.push(A.hkT(C.aA,!1,j,j,j,!1,j,j,new B.dic(k),j,j,new A.bb(A.n(5),C.a1),j,j,!1,u))
x=A.V(C.p7,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cp))
return A.l5(new B.did(),new A.C(C.dX,A.aG(!1,C.a3,!0,j,A.aM(!1,r,!0,new A.C(C.a2j,A.A(l,C.l,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.bb(v,new A.ax(t,s,C.r,-1)),j,j,C.ai),j),C.cn,h,new A.b9("docshare_row_"+i.a,y.aw),j,new A.bq(0,1,y.X),y.i)}}
B.a0r.prototype={
R(){return new B.aCX()},
gd8(){return this.c}}
B.aCX.prototype={
Z(){this.a4()
this.z6()},
t(){B.iay(this.e)
this.a3()},
z6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$z6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.tf(o.c,o.d),$async$z6)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gar(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.iaB(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.iaA(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.l(new B.di9(s))
x=1
break}s.l(new B.dia(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ad(l)
if(s.c==null){x=1
break}s.l(new B.dib(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z6,w)},
a4A(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a4A=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.tf(t.c,t.d),$async$a4A)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fEV)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.akk(q,s,t.length===0?"image/jpeg":t,null,s),$async$a4A)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a4A,w)},
c66(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kt(u,C.z,v,new B.di7(w,t),C.hg,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gar(t))x=A.ha(t,C.z,v,new B.di8(w),C.hg,C.dE,!0,v,!1,v,v)
else return C.bK
return A.u6(C.ag,x,!0,4,0.5,!0,!0,v)},
C(d){var x,w,v=this,u=null,t=B.a3z(d).a,s=t[0],r=t[3],q=A.c(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.C,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.Eh,u,u,u,v.gbbi(),u,u,u,u,"Share / save",u))
r=A.eQ(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.GE
else{q=v.r
if(q!=null)t=new A.C(C.eA,A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c4(w,".heic")||C.a.c4(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.eA,A.w(A.a([A.c(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aN,A.df(C.Eh,u,D.h3o,v.gbbi(),A.bp(C.aA,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c66()}return A.c6(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.a0o.prototype={
R(){return new B.aCU(A.alj(),C.bI,C.bI)},
gd8(){return this.c}}
B.aCU.prototype={
Z(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fI(w,A.a3(w).k("fI<1>")).iQ(new B.dhN(v))
x.gd2q().iQ(new B.dhO(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fI(x,A.a3(x).k("fI<1>"))}if(x==null)x=C.bg7
x.iQ(new B.dhP(v))
v.z6()},
z6(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$z6=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.tf(p.c,p.d),$async$z6)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.l(new B.dhG(s))
x=1
break}x=8
return A.b(s.d.vS(0,new A.a5N(r,s.a.d.c)),$async$z6)
case 8:if(s.c==null){x=1
break}s.l(new B.dhH(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ad(n)
if(s.c==null){x=1
break}s.l(new B.dhI(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$z6,w)},
a14(){var x=0,w=A.j(y.H),v=this,u
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hr(0),$async$a14)
case 5:x=3
break
case 4:x=6
return A.b(u.iT(0),$async$a14)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a14,w)},
aYn(d){var x=d.a
return C.a.aY(C.n.v(C.n.ao(x,6e7)%60),2,"0")+":"+C.a.aY(C.n.v(C.n.ao(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
C(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a3z(d),m=C.n.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eQ(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.c(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.C,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.GE
else{u=p.r
if(u!=null)x=A.c(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bZj,C.f,o,o,new A.p(o,o,o,A.n(24),o,M.RR,C.m),o,88,o,o,o,o,o,88)
t=A.kT(C.aA,o,o,o,m,0,o,new B.dhJ(p),C.n.D(C.n.ao(p.w.a,1000),0,m))
x=A.c(p.aYn(p.w)+" / "+p.aYn(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aA,o,o,o,o,D.fBg,o,o,o,o,o,o)
r=p.f
q=A.V(r?K.vI:C.fR,o,o,o,o,o)
x=A.w(A.a([u,C.lq,t,x,C.df,A.df(q,o,A.c(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcg_(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c6(v,w,A.at(new A.C(C.q1,x,o),o,o,o),o,!1,!1,o,o)}}
B.Rq.prototype={
R(){return new B.aD_()},
gd8(){return this.c}}
B.aD_.prototype={
Z(){this.a4()
this.Rw()},
Rw(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Rw=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.hn6(o.c,o.d,new B.diq(s)),$async$Rw)
case 7:r=e
if(r==null||r.length===0){s.l(new B.dir(s))
x=1
break}s.e=r
q=Q.iyY(r)
if(q==null){s.l(new B.dis(s))
x=1
break}s.d=q
q.aU(0,s.gb69())
x=8
return A.b(q.j4(0).d9(0,C.o6),$async$Rw)
case 8:if(s.c==null){x=1
break}s.l(new B.dit(s))
x=9
return A.b(q.qI(0),$async$Rw)
case 9:q.ur(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ad(m)
if(s.c==null){x=1
break}s.l(new B.diu(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rw,w)},
cmu(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.l(new B.div(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.El(0,x.gb69())
w=x.d
if(w!=null)w.t()
B.iJC(x.e)
x.a3()},
ahf(){var x=0,w=A.j(y.H),v=this,u,t
var $async$ahf=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b3D(u.c,u.d),$async$ahf)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$ahf,w)},
C(d){var x,w,v,u=this,t=null,s=B.a3z(d).a,r=s[0],q=s[3],p=A.c(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.C,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eQ(A.a([A.aI(t,t,t,t,C.om,t,t,t,u.gcfU(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iD(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.GE
else{q=u.r
if(q!=null)s=new A.C(C.eA,A.c(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.akI(q)
q=q.f
w=q?0:0.85
v=A.n(50)
s=new A.fM(x,new A.am(C.z,t,C.ab,C.t,A.a([new A.B7(s,t),A.aA(t,A.xT(A.q(t,A.V(q?K.vI:C.fR,C.c,t,t,t,48),C.f,t,t,new A.p(C.bb,t,t,v,t,t,C.m),t,t,t,t,C.bR,t,t,t),C.b1,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.dix(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bK}}return A.c6(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.a0t.prototype={
R(){return new B.aCY(new A.cB(null,y.A))}}
B.aCY.prototype={
gcP4(){var x,w,v=this.a
if(v.e!==D.Vk)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"WR"))return w
return null},
gcOE(){var x,w,v=this.a
if(v.e!==D.Bc)return null
x=C.a.i(v.c)
if(!C.a.Y(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.aV(x,13))
if(C.a.Y(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a4()
x=v.gcP4()
if(x!=null){v.SH(x)
v.e=A.d5(V.Dc,new B.dim(v,x))}w=v.gcOE()
if(w!=null){v.SG(w)
v.f=A.d5(C.fr,new B.din(v,w))}},
t(){var x=this.e
if(x!=null)x.a2(0)
x=this.f
if(x!=null)x.a2(0)
this.a3()},
SG(d){return this.ctX(d)},
ctX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$SG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.asA(d),$async$SG)
case 3:t=f
x=4
return A.b(B.ci3(d),$async$SG)
case 4:s=f
if(u.c==null){x=1
break}u.l(new B.die(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$SG,w)},
SH(d){return this.ctY(d)},
ctY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$SH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.h9T(d),$async$SH)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bHb(t),$async$SH)
case 4:if(u.c==null){x=1
break}u.l(new B.dif(u))
u.c.L(y.q).f.T(D.aXQ)
case 1:return A.h(v,w)}})
return A.i($async$SH,w)},
gcbF(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcfV(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a4j(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a4j=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.E6()){t=u.c
if(t!=null)t.L(y.q).f.T(D.fI5)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a7(t,!1).ca(A.e4(new B.dig(),!1,null,y.N)),$async$a4j)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bHb(s),$async$a4j)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aXQ)
case 1:return A.h(v,w)}})
return A.i($async$a4j,w)},
acK(d){return this.bQk(d)},
bQk(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acK=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fQ(new A.fE(C.d.aJ(t,", "))),$async$acK)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b2(null,null,null,null,null,C.t,null,A.c("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$acK,w)},
ahd(d){return this.bQ2(d)},
bQ2(d){var x=0,w=A.j(y.H),v=this
var $async$ahd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fQ(new A.fE(v.a.c)),$async$ahd)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fFo)
return A.h(null,w)}})
return A.i($async$ahd,w)},
a4d(d){return this.cBb(d)},
cBb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a4d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ars(s.d,4),$async$a4d)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a4d)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ad(n)
if(d.e!=null)d.L(y.q).f.T(A.b2(null,null,null,null,null,C.t,null,A.c("Could not save QR: "+A.v(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a4d,w)},
gb0N(){var x,w=this.a
if(w.e!==D.Kh)return null
x=C.a.i(w.c)
if(C.a.Y(x,"N2|"))return C.a.i(C.a.aV(x,3))
if(C.a.Y(x,"http://")||C.a.Y(x,"https://"))return x
if(C.a.Y(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.aV(x,13))
return null},
acH(d){return this.bQd(d)},
bQd(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$acH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gb0N()
if(t==null){x=1
break}x=3
return A.b(A.fQ(new A.fE(C.a.Y(t,"http")?t:"N2|"+t)),$async$acH)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fH4)
case 1:return A.h(v,w)}})
return A.i($async$acH,w)},
ahe(){var x=0,w=A.j(y.H),v=this,u
var $async$ahe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.X8(),$async$ahe)
case 2:u=v.c
if(u!=null)A.a7(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$ahe,w)},
C(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a3z(d),i=m.a,h=i.c
if(h.length>48)h=C.a.av(h,0,44)+"\u2026"
i=i.e
i=i!==D.Kh&&i!==D.Vk&&i!==D.Bc
x=j.a
w=x[0]
v=x[3]
u=A.c("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eQ(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Kh||t===D.Vk||t===D.Bc?l:A.aI(l,l,l,l,C.lK,l,l,l,m.gb3Y(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.n(24)
r=A.K(C.aA.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.N,A.qx(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.c(""+q.d+" file(s) \xb7 "+m.gcbF(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Kh){t=C.aA.j(0.12)
o=A.n(20)
C.d.u(q,A.a([C.N,A.q(l,A.c(k,l,l,l,l,l,l,A.l(l,l,C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.m),l,l,l,l,C.lF,l,l,l)],p))}q.push(C.aN)
q.push(A.c(m.gcfV(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aJ(t,", ")
C.d.u(q,A.a([C.S,A.c(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c9h,D.hdb,new B.dih(m,d),l)],p))}if(m.a.e===D.Kh&&m.gb0N()!=null)C.d.u(q,A.a([C.S,A.c("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hz(D.c5y,D.h9L,new B.dii(m,d),l)],p))
if(m.a.e===D.Bc){x=(m.w?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.w?"Ready to receive":"Uploading "+C.h.a1(C.h.D(m.x*100,0,99),0)+"%"
C.d.u(q,A.a([C.N,A.q(l,A.c(o,l,l,l,l,l,l,A.l(l,l,m.w?C.GI:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lF,l,l,l)],p))}if(m.a.e===D.Vk){x=(m.r?C.dT:C.aA).j(0.12)
t=A.n(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.u(q,A.a([C.N,A.q(l,A.c(n,l,l,l,l,l,l,A.l(l,l,o?C.GI:C.aA,l,l,l,l,l,l,l,l,12,l,l,C.C,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.m),l,l,l,l,C.lF,l,l,l),C.af,A.df(D.c0Q,l,D.hgm,m.gcBz(),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.pg(i,A.c6(v,w,new A.C(C.ad,A.w(A.a([A.E(A.q(l,A.w(q,C.l,l,C.bc,C.i,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.m),l,l,l,l,C.ad,l,l,1/0),1),C.af,A.A(A.a([A.E(A.eo(I.Ee,l,C.XJ,new B.dij(m,d),l),1),C.ar,A.E(A.df(C.AA,l,C.ae1,new B.dik(m,d),A.bp(C.aA,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.i,0,l,l),C.N,new A.a4(1/0,l,A.bI(U.BP,l,m.gb3Y(),A.bp(C.aO,l,l,l,l,C.hu,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.dil(),y.C)}}
B.aeG.prototype={
C(d){var x=null,w=A.c('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.n(16),u=y.p
v=A.cb(A.w(A.a([w,C.aN,A.q(x,A.qx(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.m),x,x,x,x,C.bD,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,x,C.ah)
return A.em(A.a([A.bI(C.BQ,x,new B.dhF(d),x)],u),x,x,C.nQ,v,x,x,x,x,D.h2k,x)}}
B.a0n.prototype={
R(){return new B.aCT(A.Ai(C.zs,C.oH,C.vU))}}
B.aCT.prototype={
t(){this.d.t()
this.a3()},
aBk(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.Y(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a7(x,!1).N(t)
return}}},
C(d){var x=null
return A.c6(A.eQ(x,x,x,!0,!0,C.v,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.hai,x,x,x,1,x,!0),C.v,A.Ah(this.d,C.c1,this.gaBj()),x,!1,!1,x,x)}}
B.a0u.prototype={
R(){return new B.aCZ(A.Ai(C.zs,C.oH,C.vU))},
gd8(){return this.c}}
B.aCZ.prototype={
c7a(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.Y(x,"NGMYDOCSYNC")||C.a.Y(x,"N2|")||C.a.Y(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ajl(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajl=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Nk("text/plain"),$async$ajl)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.fI_)
x=1
break}s=u.c
if(s!=null)A.a7(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$ajl,w)},
adz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$adz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hVZ(p,!0),$async$adz)
case 3:t=e
p=t==null
s=B.a9m(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fEv)
x=1
break}p=u.c
if(p!=null)A.a7(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$adz,w)},
t(){this.d.t()
this.a3()},
aBk(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.I)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c7a(t))continue
s.e=!0
x=s.c
x.toString
A.a7(x,!1).N(t)
return}},
C(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.aum,v,v,v,w.gbW4(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a5K,v,v,v,w.gcrb(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eQ(A.a([u,t,A.aI(v,v,v,v,A.V(w.f?C.ry:R.QZ,v,v,v,v,v),v,v,v,new B.dip(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.v,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.hhj,v,v,v,1,v,!0)
u=A.Ah(w.d,C.c1,w.gaBj())
x=A.n(20)
return A.c6(t,C.v,new A.am(C.a0,v,C.ab,C.t,A.a([u,A.at(A.q(v,v,C.f,v,v,new A.p(v,v,A.K(C.aO,C.r,4),x,v,v,C.m),v,300,v,v,v,v,v,300),v,v,v),D.eRe],s),v),v,!1,!1,v,v)}}
B.biu.prototype={
C(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pU
else x=s.w?C.aA:s.f.a[3].j(0.85)
w=A.n(14)
v=s.w?C.aA.j(0.12):s.f.a[0]
u=A.n(12)
u=A.q(r,A.V(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.m),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.c(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pU:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.C,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.c(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a3,!0,r,A.aM(!1,w,!0,new A.C(C.a3_,A.A(A.a([u,C.bd,A.E(A.w(t,C.B,r,C.e,C.i,0,C.p),1),A.V(C.eO,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.ai)}}
B.abQ.prototype={
a9(){return"RTCDataChannelState."+this.b}}
B.Q9.prototype={
a9(){return"RTCSignalingState."+this.b}}
B.Zn.prototype={
a9(){return"RTCIceGatheringState."+this.b}}
B.Q8.prototype={
a9(){return"RTCPeerConnectionState."+this.b}}
B.Gm.prototype={
a9(){return"RTCIceConnectionState."+this.b}}
B.cw8.prototype={}
B.Gl.prototype={}
B.abP.prototype={}
B.axa.prototype={}
B.Zo.prototype={}
var z=a.updateTypes(["az<~>()","P(jW)","o(jW)","X_(Z)","~()","a0q(Z)","F(F,jW)","Rq(Z)","~(lN)","cr(Gl)","az<jW?>(@)","WY(Z)","X1(Z)","C(jW)","jW(@)","a9<o,@>(jW)","a0p(Z)","WZ(Z)","a0r(Z)","a0o(Z)","a0t(Z)","aeG(Z)","ah<jW>()","a0u(Z)","aeI(Z,F)","a0n(Z)","a9<o,aH>(jW)","cr(Zn)","cr(abP)","az<cr>(Gl)"])
B.cw4.prototype={
$1(d){var x=this.a
x.x=D.aUs
x.y.K(0,D.aUs)},
$S:75}
B.cw5.prototype={
$1(d){var x=this.a
x.x=D.aUr
x.y.K(0,D.aUr)},
$S:75}
B.cw6.prototype={
$1(d){var x=this.a
x.akI(A.a4i(d.data)).bB(new B.cw3(x),y.b)},
$S:75}
B.cw3.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cw7.prototype={
$1(d){},
$S:75}
B.cwa.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.ifx(d.channel))},
$S:17}
B.cwb.prototype={
$1(d){},
$S:17}
B.cwc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iA7(w.iceConnectionState)
x.cx=w
if($.hx9())switch(w.a){case 0:x.cy=D.aUx
break
case 1:x.cy=D.aUy
break
case 3:x.cy=D.aUz
break
case 5:x.cy=D.aUv
break
case 6:x.cy=D.aUw
break
case 7:x.cy=D.abC
break
default:break}},
$S:109}
B.cwd.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
w=B.iA8(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:109}
B.cwe.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.ch=B.iLf(w.signalingState)},
$S:109}
B.cwf.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.d()
x.cy=B.iJj(w.connectionState)},
$S:109}
B.cwg.prototype={
$1(d){},
$S:109}
B.cwh.prototype={
$1(d){},
$S:17}
B.fIm.prototype={
$1(d){var x=y.F.a(new A.qO([],[]).ol(d.target.result,!1)),w=C.x9.q(x.objectStoreNames,"blobs")
if(!w)C.x6.H9(x,"blobs")},
$S:179}
B.h8Y.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.xL.fq(this.b)
$.eY.mW()
this.c.$1(d)},
$S:467}
B.h9_.prototype={
$1(d){return this.a.$1(B.ip8(this.b,this.c))},
$S:33}
B.h8Z.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.h8X.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.h9c.prototype={
$1(d){var x=this
return B.hJD(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.h9d.prototype={
$1(d){var x=this
return B.hJD(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fL2.prototype={
$1(d){var x=this
return B.chF(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dhY.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dhV.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chF(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dhX.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chF(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dhW.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.chF(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.di_.prototype={
$4(d,e,f,g){var x=null
return A.kj(A.A(A.a([A.aI(x,x,x,x,D.c_q,x,x,x,new B.dhZ(d),x,x,x,x,x,x),A.E(A.G7(D.TD,!0,x,!1,C.a4Q,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.i,0,x,x),D.TD,x,g,C.apV,0,e,f)},
$C:"$4",
$R:4,
$S:440}
B.dhZ.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fN5.prototype={
$1(d){var x,w,v=null,u=A.aE(d,C.eW,y.m).w,t=this.a,s=t?C.j_:C.c,r=A.n(28),q=A.q(v,D.bCz,C.f,v,v,D.bbo,v,v,v,v,D.apG,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),p,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.c3Y,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.C(new A.R(0,0,0,u.f.d),A.q(v,A.w(A.a([q,new A.C(C.Ds,A.w(A.a([o,C.af,A.aO(v,C.M,!1,v,!0,C.t,v,A.aP(),x,v,v,v,v,v,2,A.bB(v,new A.b5(4,A.n(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.auC,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.am,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a8,v,C.ao,v,v,v,v),C.bx,A.A(A.a([A.E(A.dV(C.dy,new B.fN3(d),v),1),C.ar,A.E(A.bI(D.h8J,v,new B.fN4(p,x,d),A.bp(C.b8,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.i,0,v,v)],w),C.l,v,C.e,C.i,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.m),v,v,v,C.HR,v,v,v,v),v)},
$S:61}
B.fN3.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.fN4.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fFF)
return}x=w.b.a.a
A.a7(w.c,!1).N(new B.aFC(v,x))},
$S:0}
B.fNz.prototype={
$1(d){var x=this,w=null,v=A.aE(d,C.eW,y.m).w,u=x.a,t=u?C.j_:C.c,s=A.n(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.R(0,0,0,v.f.d),A.q(w,A.w(A.a([A.q(w,D.bCp,C.f,w,w,D.bcT,w,w,w,w,D.apG,w,w,1/0),new A.C(C.Ds,A.w(A.a([A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),r,w,w,w,w,w,2,B.hsE(u,"Organization name",C.Io,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),q,w,w,w,w,w,2,B.hsE(u,"Access code",C.mC,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.S,A.aO(w,C.M,!1,w,!0,C.t,w,A.aP(),p,w,w,w,w,w,2,B.hsE(u,"Member password",C.Ed,w),C.y,!0,w,!0,w,!1,w,C.am,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a8,w,C.ao,w,w,w,w),C.bx,A.bI(D.hhq,w,new B.fNy(r,q,p,d),A.bp(C.aA,w,w,w,w,C.hu,w,w,w,w,w,w))],o),C.l,w,C.e,C.i,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.m),w,w,w,C.HR,w,w,w,w),w)},
$S:61}
B.fNy.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fFK)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a7(v.d,!1).N(new B.aIT(u,x,w))},
$S:0}
B.chw.prototype={
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
p=C.a.Y(j,"http")?A.cH(j,0,null):s.b.aZ(j)
u=4
x=7
return A.b(A.wk(p,null).d9(0,C.a1T),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.CI(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ad(h)
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
B.chC.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chD.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.chE.prototype={
$1(d){return d.b},
$S:z+2}
B.chy.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.chz.prototype={
$1(d){return d.b},
$S:z+2}
B.chx.prototype={
$1(d){return A.a0(y.f.a(d),y.N,y.z)},
$S:14}
B.chA.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.chB.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.h9a.prototype={
$1(d){return new B.WY(this.a,null)},
$S:z+11}
B.h9b.prototype={
$1(d){return new B.X1(this.a,this.b,this.c,null)},
$S:z+12}
B.e4K.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e5T.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e5U.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e5V.prototype={
$1(d){var x=this.a
if(x.c!=null)x.l(new B.e5S(x,d))},
$S:2}
B.e5S.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e5W.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e5X.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e5Y.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e5Z.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e6_.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.v(this.b)},
$S:0}
B.e60.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e63.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:92}
B.e61.prototype={
$1(d){var x=this.a
return x.f?null:x.a13()},
$S:2}
B.e62.prototype={
$1(d){var x,w,v=null,u=A.n(11),t=C.aA.j(this.a?0.22:0.12),s=d.c
if(C.a.Y(s,"image/")||d.n2(D.TV))s=C.vF
else s=C.a.Y(s,"video/")||d.n2(D.nv)?C.rF:D.asW
x=this.b.a
w=y.p
return new A.C(C.jZ,A.A(A.a([A.q(v,A.V(s,C.aA,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.m),v,36,v,v,v,v,v,36),C.ar,A.E(A.w(A.a([A.c(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.c(d.gaty(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.B,v,C.e,C.i,0,C.p),1)],w),C.l,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.e4L.prototype={
$0(){return this.a.r=!0},
$S:0}
B.e4M.prototype={
$0(){return this.a.r=!1},
$S:0}
B.chG.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.chH.prototype={
$2(d,e){return new A.bw(J.k(d),J.k(e),y.M)},
$S:99}
B.hab.prototype={
$2(d,e){return e===this.a},
$S:268}
B.fFj.prototype={
$1(d){return J.k(d)},
$S:15}
B.fLh.prototype={
$1(d){var x=this.b
B.imT(C.Ic.ga95(this.a)).bB(x.gCT(x),y.H)},
$S:136}
B.fLi.prototype={
$1(d){return this.a.di(0,null)},
$S:136}
B.fLj.prototype={
$0(){return null},
$S:12}
B.chV.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fLk.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a0(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.h.M(v)
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
return new B.jW(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fPJ.prototype={
$1(d){return d.ak()},
$S:z+15}
B.fJq.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fJr.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ci_.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n2(D.nv)},
$S:z+1}
B.hev.prototype={
$1(d){return new B.a0p(this.a,null)},
$S:z+16}
B.dhU.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fM()},
$S:7}
B.dhS.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a7(w,!1).N(x)
return null},
$S:2}
B.dhT.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5R.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a3p()},
$S:10}
B.e5e.prototype={
$0(){var x=J.bKw(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e5f.prototype={
$0(){var x=J.bKw(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4O.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4N(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIB(this.c)}},
$S:0}
B.e4N.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e4P.prototype={
$0(){var x=J.bKw(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.e4U.prototype={
$0(){var x=this.a,w=C.d.bn(x.d,new B.e4T(this.b))
if(w>=0){x=x.d
x[w]=x[w].aIB(this.c)}},
$S:0}
B.e4T.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5F.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e5G.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.e5b.prototype={
$1(d){return new B.WZ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.e58.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.JC(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.X2(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uP(),$async$$0)
case 5:s=J.a1(t)
x=s.gco(t)?6:7
break
case 6:x=8
return A.b(r.a3A(s.gI(t)),$async$$0)
case 8:case 7:r.iA(s.gar(t)?u.d:u.e+" "+s.gI(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4S.prototype={
$1(d){this.a.aeY(d,"No files selected.","Added")},
$S:467}
B.e5j.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a7(0)
else w.u(0,new A.O(x,new B.e5i(),A.T(x).k("O<1,o>")))},
$S:0}
B.e5i.prototype={
$1(d){return d.a},
$S:z+2}
B.e4Y.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.y9.cr().d4r(C.a3N,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.ex(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gar(o)}else o=!1
if(o){o=q.c
o.toString
k=A.k1(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ad(j)
$.an.$1("[doc share import] "+A.v(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.iA("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.Y(m,"NGMYDOCSYNC")&&!C.a.Y(m,"{")){s.a.iA("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.asz(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ch(l)){o.iA("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uP(),$async$$0)
case 9:o.iA("Imported "+J.ab(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e5C.prototype={
$1(d){return new B.Rq(this.a.a.c,this.b,null)},
$S:z+7}
B.e5D.prototype={
$1(d){return new B.a0r(this.a.a.c,this.b,null)},
$S:z+18}
B.e5E.prototype={
$1(d){return new B.a0o(this.a.a.c,this.b,null)},
$S:z+19}
B.e59.prototype={
$1(d){return new B.Rq(this.a.a.c,this.b,null)},
$S:z+7}
B.e5a.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5v.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.JC(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a9o(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.iA("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cxu(),$async$$0)
case 5:x=6
return A.b(p.uP(),$async$$0)
case 6:r=A.T(t).k("O<1,o>")
r=new A.O(new A.O(t,new B.e5r(p),r),new B.e5s(),r.k("O<aj.E,o>")).c2(0,new B.e5t())
q=A.B(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a7(t,!1).ca(A.e4(new B.e5u(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(G.pW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.X8(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5r.prototype={
$1(d){var x=this.a,w=C.d.bn(x.d,new B.e5q(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.e5q.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e5s.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:13}
B.e5t.prototype={
$1(d){return d.length!==0},
$S:3}
B.e5u.prototype={
$1(d){var x=this.a
return new B.a0t(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.e5w.prototype={
$1(d){return d.a},
$S:z+2}
B.e5x.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e5p.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aA.j(0.35),q=A.at(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.n(99),v,v,C.m),v,4,v,C.kM,v,v,v,40),v,v,v),p=this.b,o=A.c(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.c(p.gaty(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.Y(p.c,"video/")
w=!x||p.n2(D.nv)?C.u_:C.ok
p=!x||p.n2(D.nv)?"Play video":"View"
return new A.bP(new A.p(s,v,new A.bE(new A.ax(r,1,C.r,-1),C.a1,C.a1,C.a1),C.lv,v,v,C.m),C.bn,A.bm(!0,new A.C(C.Dn,A.w(A.a([q,o,t,C.az,B.a0s(!1,u,!1,w,p,new B.e5k(d),v),B.a0s(!1,u,!1,C.jI,"Share via QR",new B.e5l(d),"Letters/numbers QR code"),B.a0s(!1,u,!1,D.a4V,"Send to their Code",new B.e5m(d),"Enter someone else's personal code"),B.a0s(!1,u,!1,C.hP,"Download / save",new B.e5n(d),v),C.aj,B.a0s(!1,u,!0,C.et,"Delete",new B.e5o(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:721}
B.e5k.prototype={
$0(){A.a7(this.a,!1).N("view")
return null},
$S:0}
B.e5l.prototype={
$0(){A.a7(this.a,!1).N("qr")
return null},
$S:0}
B.e5m.prototype={
$0(){A.a7(this.a,!1).N("send_my_code")
return null},
$S:0}
B.e5n.prototype={
$0(){A.a7(this.a,!1).N("save")
return null},
$S:0}
B.e5o.prototype={
$0(){A.a7(this.a,!1).N("delete")
return null},
$S:0}
B.e4V.prototype={
$1(d){return d.a},
$S:z+2}
B.e4W.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.e4X.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a9q(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.HO(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(G.pW(s.c,s.f),$async$$0)
case 4:u.iA(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e4R.prototype={
$1(d){var x=this.a
x.uQ(new B.e4Q(x,d,this.b),"Preparing\u2026")},
$S:467}
B.e4Q.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.iA("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.X2(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ch(s)){t.iA("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bJq(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.iA("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5c.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.e5d.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aN(v.c.a),r=v.b,q=v.a
case 2:if(!s.B()){x=3
break}u=s.gP(s)
x=4
return A.b(B.hn9(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e56.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.HM(new B.e52(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.iA("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cf(null,null,!1,null,new B.e53(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.l(new B.e54(s))
case 5:x=8
return A.b(r.b.im(0,C.HM,new B.e55()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a1(t)
if(q.gar(t)){s.iA("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uP(),$async$$0)
case 9:s.iA("Received "+q.gI(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e52.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e5_(x,d,e))},
$S:183}
B.e5_.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e53.prototype={
$1(d){return new B.aeG(this.a.a,null)},
$S:z+21}
B.e54.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.e55.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.e57.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.JP(o)!=null?3:4
break
case 3:x=5
return A.b(B.a9e(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b6m(B.JP(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.asz(new B.e50(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ch(r)){if(B.hn8(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.Y(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.iA(q)
x=1
break}x=10
return A.b(s.uP(),$async$$0)
case 10:o=J.cK(r)
p=o.eX(r,new B.e51()).gI(0)
s.iA(p>0?"Received "+p+" video(s).":"Restored "+o.gI(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.e50.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.l(new B.e4Z(x,d,e))},
$S:183}
B.e4Z.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.e51.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n2(D.nv)},
$S:z+1}
B.e5h.prototype={
$1(d){return new B.a0u(this.a.a.c,null)},
$S:z+23}
B.e5g.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b3D(u.a.c,v.b),$async$$0)
case 2:t.iA(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e5B.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bP(new A.p(v[2],x,new A.bE(new A.ax(C.aA.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.lv,x,x,C.m),C.bn,A.bm(!0,new A.C(C.Dn,A.w(A.a([A.at(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.n(99),x,x,C.m),x,4,x,C.kM,x,x,x,40),x,x,x),A.c("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.az,B.a0s(!0,w,!1,C.mC,"My Code",new B.e5y(d),"Your personal code & QR \u2014 others send docs to you"),B.a0s(!1,w,!1,D.a4V,"Send to their Code",new B.e5z(this.a,d),"Enter someone else's 5-digit code + letter"),B.a0s(!1,w,!1,W.As,"Import backup",new B.e5A(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:721}
B.e5y.prototype={
$0(){A.a7(this.a,!1).N("my_code")
return null},
$S:0}
B.e5z.prototype={
$0(){A.a7(this.b,!1).N(null)
this.a.bK_()},
$S:0}
B.e5A.prototype={
$0(){A.a7(this.a,!1).N("import")
return null},
$S:0}
B.e5O.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.JZ(D.TD,x,C.a4Q,g,e,32),C.ar,A.c("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.d4(C.d.gH(D.TD).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:683}
B.e5M.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.e5N.prototype={
$0(){this.a.alG()
return null},
$S:0}
B.e5P.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*10)),e)},
$S:92}
B.e5Q.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.aeI(e,w,v,this.b,x.e,x.cfW(w),new B.e5I(x,w),new B.e5J(x,v,w),new B.e5K(x,w),new B.e5L(x,w),null)},
$S:z+24}
B.e5I.prototype={
$0(){this.a.aiR(this.b)
return null},
$S:0}
B.e5J.prototype={
$0(){var x=this.a
return x.l(new B.e5H(x,this.b,this.c))},
$S:0}
B.e5H.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.X(0,w)
else x.K(0,w)},
$S:0}
B.e5K.prototype={
$0(){this.a.PJ(this.b)
return null},
$S:0}
B.e5L.prototype={
$0(){this.a.als(this.b)
return null},
$S:0}
B.dhQ.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*18)),e)},
$S:92}
B.dhR.prototype={
$3(d,e,f){return A.e0(C.z,f,e,null,null)},
$S:107}
B.did.prototype={
$3(d,e,f){return A.d3(A.dQ(f,new A.m(0,(1-e)*14)),e)},
$S:92}
B.dic.prototype={
$1(d){return this.a.y.$0()},
$S:86}
B.di9.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dia.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dib.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.v(this.b)},
$S:0}
B.di7.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gar(w))return A.ha(w,C.z,x,new B.di5(this.a),C.hg,C.dE,!0,x,!1,x,x)
$.aS.U$.push(new B.di6(this.a))
return C.bK},
$S:149}
B.di5.prototype={
$3(d,e,f){$.aS.U$.push(new B.di3(this.a))
return C.bK},
$S:196}
B.di3.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.di0(x))},
$S:7}
B.di0.prototype={
$0(){return this.a.w=!0},
$S:0}
B.di6.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.di2(x))},
$S:7}
B.di2.prototype={
$0(){return this.a.w=!0},
$S:0}
B.di8.prototype={
$3(d,e,f){$.aS.U$.push(new B.di4(this.a))
return C.bK},
$S:196}
B.di4.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.l(new B.di1(x))},
$S:7}
B.di1.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dhN.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhM(x,d))},
$S:1833}
B.dhM.prototype={
$0(){return this.a.f=this.b===C.wh},
$S:0}
B.dhO.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhL(x,d))},
$S:7}
B.dhL.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dhP.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.l(new B.dhK(x,d))},
$S:7}
B.dhK.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dhG.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dhH.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dhI.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.v(this.b)},
$S:0}
B.dhJ.prototype={
$1(d){return this.a.d.OD(0,A.dx(0,0,0,C.h.S(d),0,0))},
$S:6}
B.diq.prototype={
$0(){var x=this.a.a
return B.tf(x.c,x.d)},
$S:1834}
B.dir.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dis.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dit.prototype={
$0(){return this.a.f=!1},
$S:0}
B.diu.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.v(this.b)},
$S:0}
B.div.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.dix.prototype={
$0(){var x=this.a
x.l(new B.diw(x))},
$S:0}
B.diw.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hr(0)
else x.qI(0)},
$S:0}
B.dim.prototype={
$1(d){return this.a.SH(this.b)},
$S:10}
B.din.prototype={
$1(d){return this.a.SG(this.b)},
$S:10}
B.die.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dif.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dig.prototype={
$1(d){return D.hTG},
$S:z+25}
B.dil.prototype={
$2(d,e){if(d)B.X8()},
$S:135}
B.dih.prototype={
$0(){return this.a.acK(this.b)},
$S:0}
B.dii.prototype={
$0(){return this.a.acH(this.b)},
$S:0}
B.dij.prototype={
$0(){return this.a.ahd(this.b)},
$S:0}
B.dik.prototype={
$0(){return this.a.a4d(this.b)},
$S:0}
B.dhF.prototype={
$0(){A.a7(this.a,!1).N(null)
return null},
$S:0}
B.dip.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qM(),$async$$0)
case 2:u.l(new B.dio(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dio.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ci1.prototype={
$1(d){return C.a.Y(d.c,"video/")||d.n2(D.nv)},
$S:z+1}
B.ci2.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aD(x,w,"_"))
w=v.length===0?"file.bin":v
return A.J(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.ci0.prototype={
$2(d,e){return this.bqn(d,e)},
bqn(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.X9(u.c,A.J(["uploadProgress",C.h.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1835}
B.fPi.prototype={
$1(d){if(d===D.abB&&(this.a.a.a&30)===0)this.a.h7(0)},
$S:z+27}
B.fPj.prototype={
$0(){},
$S:12}
B.fPX.prototype={
bs1(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fCk(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a7(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hEF(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bs1(d,e)},
$S:747}
B.fPW.prototype={
$1(d){var x=this
d.b=new B.fPV(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fPV.prototype={
$1(d){return this.bs0(d)},
bs0(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b3E(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.d()
s.b.K(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.d()
r=C.T.aN(0,n,null)
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
return A.b(B.fCk(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a7(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ad(j)
$.an.$1("[doc share webrtc recv] "+A.v(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a9n(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.di(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aCW.prototype,"gcnV","Sh",0)
x(v,"gcoQ","KS",0)
x(v,"gcok","zi",0)
x(v=B.aH0.prototype,"gcfQ","ahb",0)
x(v,"gcfR","a12",0)
x(v,"gcEa","al8",0)
x(v=B.aH3.prototype,"gcfS","a13",0)
x(v,"gcEb","a4B",0)
x(B.aH1.prototype,"gcfT","ahc",0)
x(B.aCV.prototype,"gcfY","cfZ",4)
x(v=B.aH2.prototype,"gcol","a2p",0)
x(v,"gcCF","cCG",4)
x(v,"gb7s","aCZ",0)
x(v,"gcFG","alA",0)
x(v,"gbWB","ZL",0)
x(v,"gcfX","FB",0)
x(B.aCX.prototype,"gbbi","a4A",0)
x(B.aCU.prototype,"gcg_","a14",0)
x(v=B.aD_.prototype,"gb69","cmu",4)
x(v,"gcfU","ahf",0)
x(v=B.aCY.prototype,"gcBz","a4j",0)
x(v,"gb3Y","ahe",0)
w(B.aCT.prototype,"gaBj","aBk",8)
x(v=B.aCZ.prototype,"gcrb","ajl",0)
x(v,"gbW4","adz",0)
w(v,"gaBj","aBk",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aH,[B.cw8,B.abP,B.axa,B.aFC,B.aIT,B.jW,B.aeo,B.bB3,B.Gl,B.Zo])
w(B.cw9,B.cw8)
w(B.b8P,B.abP)
x(A.hr,[B.cw4,B.cw5,B.cw6,B.cw3,B.cw7,B.cwa,B.cwb,B.cwc,B.cwd,B.cwe,B.cwf,B.cwg,B.cwh,B.fIm,B.h8Y,B.h9_,B.h8Z,B.h9c,B.h9d,B.fL2,B.dhV,B.dhX,B.dhW,B.di_,B.fN5,B.fNz,B.chw,B.chD,B.chE,B.chz,B.chx,B.chA,B.chB,B.h9a,B.h9b,B.e5V,B.e63,B.e61,B.e62,B.fFj,B.fLh,B.fLi,B.chV,B.fLk,B.fPJ,B.fJq,B.fJr,B.ci_,B.hev,B.dhU,B.dhS,B.e5R,B.e4N,B.e4T,B.e5b,B.e4S,B.e5i,B.e5C,B.e5D,B.e5E,B.e59,B.e5r,B.e5q,B.e5s,B.e5t,B.e5u,B.e5w,B.e5x,B.e5p,B.e4V,B.e4W,B.e4R,B.e5c,B.e53,B.e51,B.e5h,B.e5B,B.e5O,B.e5P,B.dhQ,B.dhR,B.did,B.dic,B.di7,B.di5,B.di3,B.di6,B.di8,B.di4,B.dhN,B.dhO,B.dhP,B.dhJ,B.dim,B.din,B.dig,B.ci1,B.ci2,B.fPi,B.fPW,B.fPV])
w(B.b8Q,B.axa)
x(A.j0,[B.h8X,B.dhY,B.dhZ,B.fN3,B.fN4,B.fNy,B.e4K,B.e5T,B.e5U,B.e5S,B.e5W,B.e5X,B.e5Y,B.e5Z,B.e6_,B.e60,B.e4L,B.e4M,B.fLj,B.dhT,B.e5e,B.e5f,B.e4O,B.e4P,B.e4U,B.e5F,B.e5G,B.e58,B.e5j,B.e4Y,B.e5a,B.e5v,B.e5k,B.e5l,B.e5m,B.e5n,B.e5o,B.e4X,B.e4Q,B.e5d,B.e56,B.e5_,B.e54,B.e55,B.e57,B.e4Z,B.e5g,B.e5y,B.e5z,B.e5A,B.e5M,B.e5N,B.e5I,B.e5J,B.e5H,B.e5K,B.e5L,B.di9,B.dia,B.dib,B.di0,B.di2,B.di1,B.dhM,B.dhL,B.dhK,B.dhG,B.dhH,B.dhI,B.diq,B.dir,B.dis,B.dit,B.diu,B.div,B.dix,B.diw,B.die,B.dif,B.dih,B.dii,B.dij,B.dik,B.dhF,B.dip,B.dio,B.fPj])
x(A.ln,[B.aeH,B.OY,B.abQ,B.Q9,B.Zn,B.Q8,B.Gm])
x(A.af,[B.a0q,B.WY,B.X1,B.WZ,B.a0p,B.X_,B.a0r,B.a0o,B.Rq,B.a0t,B.a0n,B.a0u])
x(A.ai,[B.aCW,B.aH0,B.aH3,B.aH1,B.aCV,B.aH2,B.aCX,B.aCU,B.aD_,B.aCY,B.aCT,B.aCZ])
x(A.aw,[B.afa,B.aCS,B.bit,B.aeI,B.aeG,B.biu])
x(A.j1,[B.chC,B.chy,B.chG,B.chH,B.hab,B.e52,B.e50,B.e5Q,B.dil,B.ci0,B.fPX])
x(A.jr,[B.bnZ,B.bAF])})()
A.jj(b.typeUniverse,JSON.parse('{"b8P":{"abP":[]},"b8Q":{"axa":[]},"a0q":{"af":[],"x":[]},"aCW":{"ai":["a0q"]},"afa":{"aw":[],"x":[]},"WY":{"af":[],"x":[]},"X1":{"af":[],"x":[]},"aH0":{"ai":["WY"]},"aH3":{"ai":["X1"]},"bnZ":{"jr":[]},"WZ":{"af":[],"x":[]},"aH1":{"ai":["WZ"]},"a0p":{"af":[],"x":[]},"X_":{"af":[],"x":[]},"aeI":{"aw":[],"x":[]},"a0r":{"af":[],"x":[]},"a0o":{"af":[],"x":[]},"Rq":{"af":[],"x":[]},"a0t":{"af":[],"x":[]},"aeG":{"aw":[],"x":[]},"a0n":{"af":[],"x":[]},"a0u":{"af":[],"x":[]},"aCV":{"ai":["a0p"]},"bAF":{"jr":[]},"aH2":{"ai":["X_"]},"aCS":{"aw":[],"x":[]},"bit":{"aw":[],"x":[]},"aCX":{"ai":["a0r"]},"aCU":{"ai":["a0o"]},"aD_":{"ai":["Rq"]},"aCY":{"ai":["a0t"]},"aCT":{"ai":["a0n"]},"aCZ":{"ai":["a0u"]},"biu":{"aw":[],"x":[]}}'))
var y=(function rtii(){var x=A.as
return{J:x("n0"),k:x("Ni()"),o:x("bl<o,o>"),F:x("rR"),g:x("az<jW?>"),x:x("az<~>"),V:x("N<ac>"),O:x("N<u>"),W:x("N<bn>"),Y:x("N<a9<o,P>>"),t:x("N<a9<o,@>>"),r:x("N<jW>"),w:x("N<+file,name(ml,o)>"),u:x("N<d4>"),s:x("N<o>"),E:x("N<jr>"),a:x("N<dG>"),p:x("N<x>"),Z:x("N<F>"),G:x("bn"),A:x("cB<ai<af>>"),n:x("ah<jW>"),j:x("ah<@>"),I:x("ah<F>"),M:x("bw<o,o>"),P:x("a9<o,@>"),f:x("a9<@,@>"),m:x("ip"),e:x("iPk"),af:x("Fy"),U:x("jW"),b:x("cr"),C:x("aH"),aK:x("x3"),ab:x("Gl"),br:x("axa"),v:x("Zo"),N:x("o"),X:x("bq<H>"),Q:x("mx"),D:x("dG"),aw:x("b9<o>"),cd:x("X<a9<o,@>>"),c7:x("x"),ch:x("cc<ah<jW>>"),aW:x("cc<dG?>"),aY:x("cc<~>"),cx:x("aeH"),b1:x("bo<ah<jW>>"),cf:x("bo<dG?>"),d4:x("bo<~>"),c4:x("aFC"),bG:x("aIT"),q:x("l6"),B:x("q9<Gl>"),c6:x("q9<abQ>"),y:x("P"),i:x("H"),z:x("@"),S:x("F"),aQ:x("bn?"),_:x("ah<jW>?"),aL:x("ah<@>?"),h:x("a9<o,@>?"),l:x("jW?"),R:x("aH?"),c:x("Zo?"),d:x("+answerQr,transfer(o,az<ah<jW>>)?"),cw:x("+qrPayload,token,usesRemaining(o,o,F)?"),L:x("+fileCount,mode,qrPayload(F,OY,o)?"),aX:x("+fileCount,qrPayload,token(F,o,o)?"),T:x("o?"),K:x("dG?"),cm:x("aeo?"),bk:x("aFC?"),ag:x("aIT?"),dd:x("H?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b9N=new A.ax(C.aA,2,C.r,-1)
D.cdX=new A.a6(C.a5,C.a9,C.w,C.a6T,null,null)
D.bbo=new A.p(null,null,null,C.n1,null,D.cdX,C.m)
D.bcT=new A.p(null,null,null,C.n1,null,E.J8,C.m)
D.aik=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ajQ=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.akT=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.amJ=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.h3g=new A.D("Your team portal",null,C.dw,null,null,null,null,null,null,null,null,null)
D.hip=new A.D("Share the access code and member password with your team. They only sign in once.",null,H.FT,null,null,null,null,null,null,null,null,null)
D.dtK=x([D.h3g,C.aj,D.hip],y.p)
D.bCf=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dtK,null)
D.hn4=new A.D("Create your organization",null,C.fT,null,null,null,null,null,null,null,null,null)
D.h7U=new A.D("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,H.FT,null,null,null,null,null,null,null,null,null)
D.dMy=x([D.hn4,C.aj,D.h7U],y.p)
D.bCp=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dMy,null)
D.hj4=new A.D("Team Member sign-in",null,C.fT,null,null,null,null,null,null,null,null,null)
D.hbV=new A.D("Enter the access code and password from your organization.",null,H.FT,null,null,null,null,null,null,null,null,null)
D.dK1=x([D.hj4,C.aj,D.hbV],y.p)
D.bCz=new A.fv(C.ah,C.e,C.i,C.B,null,C.p,null,0,D.dK1,null)
D.bIQ=new A.R(16,10,16,28)
D.bKd=new A.R(20,0,20,16)
D.bKK=new A.R(20,8,20,16)
D.apG=new A.R(24,22,24,20)
D.a4V=new A.a_(63394,"MaterialIcons",!1)
D.asW=new A.a_(63515,"MaterialIcons",!1)
D.bYi=new A.a_(983813,"MaterialIcons",!1)
D.bVo=new A.a_(62867,"MaterialIcons",!1)
D.bZj=new A.ae(D.bVo,44,C.c,null,null,null)
D.c_q=new A.ae(C.ko,null,C.ac,null,null,null)
D.c0Q=new A.ae(C.jJ,18,null,null,null,null)
D.c2K=new A.ae(D.a4V,26,C.c,null,null,null)
D.c3m=new A.ae(C.E4,null,null,null,null,null)
D.c3Y=new A.ae(C.Ea,null,null,null,null,null)
D.c5b=new A.ae(A_.a54,null,null,null,null,null)
D.c5y=new A.ae(C.i5,16,null,null,null,null)
D.c9h=new A.ae(C.tZ,16,null,null,null,null)
D.bZB=new A.ae(C.mC,null,null,null,null,null)
D.ca9=new A.ee(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZB,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.c4w=new A.ae(C.Io,null,null,null,null,null)
D.cae=new A.ee(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.c4w,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZY=new A.ae(C.Ed,null,null,null,null,null)
D.cap=new A.ee(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZY,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.d_D=x([C.fz,C.b8,C.aA],y.O)
D.cfV=new A.a6(C.aw,C.aD,C.w,D.d_D,null,null)
D.cZY=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.TD=x([C.fz,C.aA],y.O)
D.TV=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.nv=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dDC=x([C.nc,C.aA],y.O)
D.eDh={iceServers:0}
D.aOV={urls:0}
D.dQv=new A.bl(D.aOV,["stun:stun.l.google.com:19302"],y.o)
D.dQu=new A.bl(D.aOV,["stun:stun1.l.google.com:19302"],y.o)
D.dhY=x([D.dQv,D.dQu],A.as("N<a9<o,o>>"))
D.dPA=new A.bl(D.eDh,[D.dhY],A.as("bl<o,@>"))
D.Kh=new B.OY(0,"lanDirect")
D.Vj=new B.OY(1,"cloudStash")
D.e6j=new B.OY(2,"inlineInstant")
D.Vk=new B.OY(3,"webrtcLink")
D.Bc=new B.OY(4,"videoCloud")
D.hio=new A.D("Receive file",null,C.mW,null,null,null,null,null,null,null,null,null)
D.cPs=x([E.auL,C.aa,D.hio],y.p)
D.fw6=new A.c_(C.aJ,C.bc,C.i,C.l,null,C.p,null,0,D.cPs,null)
D.eKT=new A.C(C.cq,D.fw6,null)
D.fUt=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,X.JD,null,null,null)
D.h3U=new A.D("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fUt,null,C.K,null,null,null,null,null,null,null)
D.eK0=new A.C(C.zK,D.h3U,null)
D.bht=new A.cp(C.z,null,null,D.eK0,null)
D.eRe=new A.cR(0,null,0,28,null,null,D.bht,null)
D.eRy=new B.abQ(0,"RTCDataChannelConnecting")
D.aUr=new B.abQ(1,"RTCDataChannelOpen")
D.aUs=new B.abQ(3,"RTCDataChannelClosed")
D.eRz=new B.Gm(0,"RTCIceConnectionStateNew")
D.eRA=new B.Gm(1,"RTCIceConnectionStateChecking")
D.eRB=new B.Gm(2,"RTCIceConnectionStateCompleted")
D.eRC=new B.Gm(3,"RTCIceConnectionStateConnected")
D.eRD=new B.Gm(4,"RTCIceConnectionStateCount")
D.eRE=new B.Gm(5,"RTCIceConnectionStateFailed")
D.eRF=new B.Gm(6,"RTCIceConnectionStateDisconnected")
D.aUt=new B.Gm(7,"RTCIceConnectionStateClosed")
D.aUu=new B.Zn(0,"RTCIceGatheringStateNew")
D.eRG=new B.Zn(1,"RTCIceGatheringStateGathering")
D.abB=new B.Zn(2,"RTCIceGatheringStateComplete")
D.abC=new B.Q8(0,"RTCPeerConnectionStateClosed")
D.aUv=new B.Q8(1,"RTCPeerConnectionStateFailed")
D.aUw=new B.Q8(2,"RTCPeerConnectionStateDisconnected")
D.aUx=new B.Q8(3,"RTCPeerConnectionStateNew")
D.aUy=new B.Q8(4,"RTCPeerConnectionStateConnecting")
D.aUz=new B.Q8(5,"RTCPeerConnectionStateConnected")
D.eRH=new B.Q9(0,"RTCSignalingStateStable")
D.eRI=new B.Q9(1,"RTCSignalingStateHaveLocalOffer")
D.eRJ=new B.Q9(2,"RTCSignalingStateHaveRemoteOffer")
D.eRK=new B.Q9(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eRL=new B.Q9(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aUA=new B.Q9(5,"RTCSignalingStateClosed")
D.fBg=new A.av(160,48)
D.biK=new A.fp(2,null,null,null,null,C.aA,null,null,null,null)
D.fCP=new A.a4(16,16,D.biK,null)
D.h7e=new A.D("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fEk=new A.b3(D.h7e,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hf_=new A.D("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fEo=new A.b3(D.hf_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.ho8=new A.D("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fEv=new A.b3(D.ho8,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h6O=new A.D("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fEV=new A.b3(D.h6O,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hjg=new A.D("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aXQ=new A.b3(D.hjg,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hkM=new A.D("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fFo=new A.b3(D.hkM,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hpF=new A.D("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fFF=new A.b3(D.hpF,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hny=new A.D("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fFK=new A.b3(D.hny,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hoP=new A.D("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fGx=new A.b3(D.hoP,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5n=new A.D("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fH4=new A.b3(D.h5n,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hgW=new A.D("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fHp=new A.b3(D.hgW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h9A=new A.D("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fHW=new A.b3(D.h9A,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.hpK=new A.D("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.fI_=new A.b3(D.hpK,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h5D=new A.D("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.fI5=new A.b3(D.h5D,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h4g=new A.D("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fIk=new A.b3(D.h4g,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.h0T=new A.D("NGMY DOC SHARE",null,C.aZj,null,null,null,null,null,null,null,null,null)
D.h2k=new A.D("Show this to sender",null,C.iY,null,null,null,null,null,null,null,null,null)
D.h3o=new A.D("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.h8l=new A.D("Organization settings",null,C.cL,null,null,null,null,null,null,null,null,null)
D.h8J=new A.D("Sign in",null,C.cg,null,null,null,null,null,null,null,null,null)
D.h9L=new A.D("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.hai=new A.D("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hdb=new A.D("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.hg2=new A.D("Send to their Doc Share",null,C.mU,null,null,null,null,null,null,null,null,null)
D.hgm=new A.D("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.hgI=new A.D("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.hhj=new A.D("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.hhq=new A.D("Create portal",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hhP=new A.D("Share via AirDrop / Bluetooth / Nearby",null,C.fk,null,null,null,null,null,null,null,null,null)
D.hlj=new A.D("Share files & videos\nwith a scan.",null,C.aZm,null,null,null,null,null,null,null,null,null)
D.hlD=new A.D("Add files",null,C.cg,null,null,null,null,null,null,null,null,null)
D.hTG=new B.a0n(null)
D.af3=new B.aeH(0,"docShare")
D.af4=new B.aeH(1,"gate")
D.Ym=new B.aeH(2,"gateNoIndividual")})();(function staticFields(){$.aRR=null
$.fzL=function(){var x=y.N
return A.S(x,x)}()
$.HB=A.S(y.N,y.D)
$.aiR=A.S(y.N,A.as("ml"))
$.SR=A.S(y.N,y.D)
$.fAu=A.S(y.N,A.as("aeo"))
$.chU=A.S(y.S,A.as("bB3"))
$.hEE=1
$.ivD=null
$.ivC=null
$.im9=null
$.hsR=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iPQ","hY0",()=>new B.cw9())
x($,"iNJ","hx9",()=>C.a.q(A.by(A.by(A.by(A.I6(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["QW2xbt9H4OhseB16TI0jLprLfFM="]=a.current})($__dart_deferred_initializers__);