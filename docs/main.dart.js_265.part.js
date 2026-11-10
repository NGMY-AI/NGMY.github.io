((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,G,N,F,H,O,E,P,Q,R,I,K,B={co9:function co9(){},
hOL(d){var x=null,w=new B.b4M(d,D.eri,new A.pw(x,x,y.c6),new A.pw(x,x,y.B))
w.bzA(d)
return w},
b4M:function b4M(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
co4:function co4(d){this.a=d},
co5:function co5(d){this.a=d},
co6:function co6(d){this.a=d},
co3:function co3(d){this.a=d},
co7:function co7(d){this.a=d},
hOM(d,e){var x=y.N
x=new B.b4N(d,e,A.U(x,y.e),A.U(x,y.z))
x.bzB(d,e)
return x},
b4N:function b4N(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
coa:function coa(d){this.a=d},
cob:function cob(d){this.a=d},
coc:function coc(d){this.a=d},
cod:function cod(d){this.a=d},
coe:function coe(d){this.a=d},
cof:function cof(d){this.a=d},
cog:function cog(d){this.a=d},
coh:function coh(d){this.a=d},
h47(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bd("IndexedDB not available"))
return C.z5.Mh(x,"ngmy_doc_share_v1",new B.fom(),1)},
hVk(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ck(d))
if(y.J.b(d))return new Uint8Array(A.ck(J.eG(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ck(A.yh(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ck(d))
if(typeof d=="string")try{x=C.cF.aM(d)
return x}catch(w){return v}return v},
Ru(d,e){return B.i9T(d,e)},
i9T(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Ru=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aOf
x=7
return A.b(o==null?$.aOf=B.h47():o,$async$Ru)
case 7:s=g
r=new Uint8Array(A.ck(e))
q=J.mP(s,"blobs","readwrite")
C.j_.mm(J.mO(q,"blobs"),r,d)
x=8
return A.b(J.pG(q),$async$Ru)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb put] "+A.w(p))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ru,w)},
Rt(d){return B.i9S(d)},
i9S(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Rt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aOf
x=7
return A.b(o==null?$.aOf=B.h47():o,$async$Rt)
case 7:s=f
r=J.mP(s,"blobs","readonly")
x=8
return A.b(C.j_.zE(J.mO(r,"blobs"),d),$async$Rt)
case 8:q=f
x=9
return A.b(J.pG(r),$async$Rt)
case 9:o=B.hVk(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Rt,w)},
ahc(d){return B.i9R(d)},
i9R(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$ahc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aOf
x=7
return A.b(p==null?$.aOf=B.h47():p,$async$ahc)
case 7:s=f
r=J.mP(s,"blobs","readwrite")
C.j_.G0(J.mO(r,"blobs"),d)
x=8
return A.b(J.pG(r),$async$ahc)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ahc,w)},
fom:function fom(){},
hXJ(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bpm(w,v))}return u},
hup(d,e){var x,w={},v=A.aWQ("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fMD(w,v,e)
C.wq.yC(v,"change",new B.fMF(w,v,!1))
C.wq.yC(v,"cancel",new B.fME(w))
$.eW.ms()
v.click()
A.bP(C.aiX,new B.fMC(w),y.H)},
fMD:function fMD(d,e,f){this.a=d
this.b=e
this.c=f},
fMF:function fMF(d,e,f){this.a=d
this.b=e
this.c=f},
fME:function fME(d){this.a=d},
fMC:function fMC(d){this.a=d},
Df(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Df=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gcZ()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gU0()?3:4
break
case 3:x=5
return A.b(B.hps(e,d,s,!0,!1,f,g,h,!1,i),$async$Df)
case 5:x=1
break
case 4:x=6
return A.b(B.R9(d,s,f,g,h,i),$async$Df)
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
return A.b(B.IL(s,d),$async$Df)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fjY(s,d),$async$Df)
case 14:x=12
return A.b(r.hps(q,p,o,n,m,l,k,j,a1,i),$async$Df)
case 12:x=8
break
case 10:x=15
return A.b(A.a4(e,!1).cc(A.dX(new B.fMS(s,i,d,f,g,h),!1,null,y.H)),$async$Df)
case 15:x=8
break
case 11:x=16
return A.b(A.a4(e,!1).cc(A.dX(new B.fMT(s,i,d,f,g,h),!1,null,y.H)),$async$Df)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Df,w)},
R9(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$R9=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_w(e),$async$R9)
case 3:u=k
x=4
return A.b(B.apC(d,e,!1),$async$R9)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.IL(e,d),$async$R9)
case 7:if(k){v=D.aaW
x=1
break}x=8
return A.b(B.Ve(e),$async$R9)
case 8:v=t?D.VC:D.aaX
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b_u(d,e)){v=D.aaW
x=1
break}x=11
return A.b(B.Ve(e),$async$R9)
case 11:v=t?D.VC:D.aaX
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h_9(d,e)){v=D.aaW
x=1
break}x=14
return A.b(B.Ve(e),$async$R9)
case 14:v=D.VC
x=1
break
case 13:v=t?D.VC:D.aaX
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R9,w)},
fjY(d,e){var x=0,w=A.j(y.y),v
var $async$fjY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b_u(e,d)){v=!1
x=1
break}x=3
return A.b(B.b_w(d),$async$fjY)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjY,w)},
hps(d,e,f,g,h,i,j,k,l,m){return A.a4(d,!1).cc(A.dX(new B.fqS(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
hkv(d,e,f,g,h,i,j){return new B.Zp(e,j,d,g,h,i,f,null)},
fsO(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fsO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.fsR(A.P(d).ax.a===C.J,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fsO)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsO,w)},
fti(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fti=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.as(C.as,u)
s=new A.as(C.as,u)
r=new A.as(C.as,u)
x=3
return A.b(A.bU(C.K,null,new B.ftk(A.P(d).ax.a===C.J,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fti)
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
return A.i($async$fti,w)},
h4g(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aP
return A.br(x,new A.b5(4,A.m(16),C.a0),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fF9(d,e){var x=0,w=A.j(y.H),v
var $async$fF9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ve(e),$async$fF9)
case 3:if(d.e==null){x=1
break}A.a4(d,!1).eM()
case 1:return A.h(v,w)}})
return A.i($async$fF9,w)},
fMS:function fMS(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fMT:function fMT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
acr:function acr(d,e){this.a=d
this.b=e},
fqS:function fqS(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Zp:function Zp(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
azS:function azS(){this.c=this.a=this.d=null},
d88:function d88(d,e){this.a=d
this.b=e},
d85:function d85(d){this.a=d},
d87:function d87(d){this.a=d},
d86:function d86(d){this.a=d},
d8a:function d8a(){},
d89:function d89(d){this.a=d},
acT:function acT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aCu:function aCu(d,e){this.a=d
this.b=e},
aFC:function aFC(d,e,f){this.a=d
this.b=e
this.c=f},
fsR:function fsR(d,e,f){this.a=d
this.b=e
this.c=f},
fsP:function fsP(d){this.a=d},
fsQ:function fsQ(d,e,f){this.a=d
this.b=e
this.c=f},
ftk:function ftk(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
ftj:function ftj(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cbw(d,e,f,g,h){return B.hJG(d,e,f,g,h)},
hJG(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cbw=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gL(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iP(r.dF(d,new B.cbx(s,e,h,g,f,q),y.g),y.l),$async$cbw)
case 3:r=p.aW(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbw,w)},
b_r(d,e,f,g,h){return B.hJH(d,e,f,g,h)},
hJH(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b_r=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.auY("GET",d)
o=A.fWy()
if(o==null)o=new A.M2(A.a([],y.W))
x=7
return A.b(o.f4(0,s).da(0,C.FU),$async$b_r)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.Ct(),$async$b_r)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.BS(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share pull url web] "+f+": "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b_r,w)},
b_q(d){return B.hJE(d)},
hJE(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b_q=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.oa),$async$b_q)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aN(0,A.m2(A.m0(p.e)).cA(0,p.w),null)
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
$.am.$1("[doc share lan manifest web] "+A.w(q))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b_q,w)},
cbv(d){return B.hJF(d)},
hJF(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cbv=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vr(d,null).da(0,C.q9),$async$cbv)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.m2(A.m0(q.e)).cA(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ab(o)
$.am.$1("[doc share lan text web] "+A.w(r))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cbv,w)},
cbx:function cbx(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jq:function jq(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
IJ(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hJM(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.IJ(C.a.b7(u,v.length))}return null},
hJN(d){var x=B.IJ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hJI(){var x,w=$.pE(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.au(10)
return C.d.hx(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(24)]},
a74(d){return B.hJJ(d)},
hJJ(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a74=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f6(d,null,!1,C.bK),$async$a74)
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
$.am.$1("[doc share my code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a74,w)},
a75(d,e){return B.hJK(d,e)},
hJK(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a75=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hI(d,e,!1,!1,C.cG,null),$async$a75)
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
$.am.$1("[doc share my code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a75,w)},
BR(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$BR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$BR)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.r(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.IJ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a76(r),$async$BR)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a74("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$BR)
case 7:q=f
s=q==null?null:J.r(q,"code")
p=B.IJ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$BR)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hJI()
x=14
return A.b(B.a76(m),$async$BR)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).a7().ae()
x=15
return A.b(B.a75("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BR)
case 15:k=f
x=16
return A.b(B.a75("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.G(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$BR)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$BR)
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
return A.i($async$BR,w)},
a76(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a76=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.IJ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a74("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a76)
case 3:u=f
t=u==null?null:J.r(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a76,w)},
a77(d,e,f,g){return B.hJO(d,e,f,g)},
hJO(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a77=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gan(d)){v=!1
x=1
break}r=B.IJ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a76(r),$async$a77)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.cbD())>1048576||g.b3(d,new B.cbE())){v=B.EM(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gI(q.split("@"))+"\u2026")
x=4
return A.b(B.a7i("myCode",d,a0),$async$a77)
case 4:u=a3
try{t=C.X.aN(0,u,null)
if(y.f.b(t)){s=J.r(t,"files")
if(!y.j.b(s)||J.cs(s)||J.ad(s)!==g.gL(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.EM(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b_z(u,g.gL(d),a0),$async$a77)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pE().au(9999)
k=n.b
j=g.gL(d)
i=y.N
h=g.dF(d,new B.cbF(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b_s(A.G(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],i,y.z),q),$async$a77)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gL(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a77,w)},
EM(d,e,f,g,h){return B.hJL(d,e,f,g,h)},
hJL(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$EM=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$EM)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cD(a6)
k=l.cI(a6,0,new B.cbz())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pE().au(9999)
h=Date.now()
g=""+1000*h+"_"+C.cZ.au(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.IN(a9,q)
a0=new A.KD(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$EM)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.aU(J.k(o),5,"0")
a1=$.f_().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.p4(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.aaH(a1.a,a4,"media",a1.d,a2).xd(m,n,new A.E2(!0,q.c)),$async$EM)
case 12:J.cc(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a4(0),$async$EM)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aQN(r),$async$EM)
case 16:v=!1
x=1
break
case 15:f.push(A.G(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gL(a6)
a1=l.dF(a6,new B.cbA(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b_s(A.G(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).a7().ae(),"status","pending"],e,d),a8),$async$EM)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aQN(r),$async$EM)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gL(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EM,w)},
b_s(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b_s=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a74(t),$async$b_s)
case 3:s=g
r=y.aL.a(J.r(s==null?A.G(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.cby(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a75(t,A.G(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_s,w)},
NF(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$NF=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a74("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$NF)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.r(t,"deliveries")
if(!y.j.b(s)||J.cs(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aW(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b_t(k,a0),$async$NF)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b_y(h),$async$NF)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Vl(g,a0),$async$NF)
case 10:f=a3
if(f!=null&&J.cL(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).a7().ae())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("L.E")
e=A.C(new A.Z(r,new B.cbB(),q),n)
d=A.C(new A.Z(r,new B.cbC(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.d0(d,0,A.dA(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a75("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.G(["deliveries",q],p,o)),$async$NF)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$NF,w)},
b_t(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b_t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cs(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aW(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aK(o.h(p,"partCount"))
j=o==null?null:C.k.N(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.idJ(k,j)
C.d.v(s,i)
x=5
return A.b(B.Dd(l,m,"Received via My Code",t,e,i),$async$b_t)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aQN(s),$async$b_t)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_t,w)},
cbD:function cbD(){},
cbE:function cbE(){},
cbF:function cbF(){},
cbz:function cbz(){},
cbA:function cbA(){},
cby:function cby(){},
cbB:function cbB(){},
cbC:function cbC(){},
fMP(d,e){var x=0,w=A.j(y.H)
var $async$fMP=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a4(d,!1).cc(A.dX(new B.fMQ(e),!1,null,y.H)),$async$fMP)
case 2:return A.h(null,w)}})
return A.i($async$fMP,w)},
bE6(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bE6=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cs(e)){v=!1
x=1
break}x=3
return A.b(A.a4(d,!1).cc(A.dX(new B.fMR(g,e,f),!1,null,y.y)),$async$bE6)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bE6,w)},
fMQ:function fMQ(d){this.a=d},
fMR:function fMR(d,e,f){this.a=d
this.b=e
this.c=f},
Vb:function Vb(d,e){this.c=d
this.a=e},
aDQ:function aDQ(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dTP:function dTP(d,e){this.a=d
this.b=e},
Vf:function Vf(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDT:function aDT(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dUY:function dUY(d){this.a=d},
dUZ:function dUZ(d){this.a=d},
dV_:function dV_(d){this.a=d},
dUX:function dUX(d,e){this.a=d
this.b=e},
dV0:function dV0(d){this.a=d},
dV1:function dV1(d){this.a=d},
dV2:function dV2(d,e){this.a=d
this.b=e},
dV3:function dV3(d,e){this.a=d
this.b=e},
dV4:function dV4(d,e){this.a=d
this.b=e},
dV5:function dV5(d){this.a=d},
dV8:function dV8(){},
dV6:function dV6(d){this.a=d},
dV7:function dV7(d,e){this.a=d
this.b=e},
bjF:function bjF(){},
Vc:function Vc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aDR:function aDR(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dTQ:function dTQ(d){this.a=d},
dTR:function dTR(d){this.a=d},
h_a(d){var x=d.hY
if(x>=0)return C.o.N(x)
return 10},
hJQ(d){var x=d.kU
if(x>=0)return x
return 4.99},
hJP(d){var x=d.lw,w=y.N
w=x.jg(x,new B.cbH(),w,w)
return w},
hfz(d){var x=d.kV,w=y.N
w=x.jg(x,new B.cbI(),w,w)
return w},
b_w(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b_w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$b_w)
case 7:s=f
r=A.w(p)
r=A.aU(J.r(s.a,"ngmy_doc_share_path_"+r))
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
return A.i($async$b_w,w)},
a79(d,e){var x=0,w=A.j(y.H),v,u
var $async$a79=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a79)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a79)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a79,w)},
Ve(d){var x=0,w=A.j(y.H),v,u
var $async$Ve=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$Ve)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Ve)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Ve,w)},
h_9(d,e){var x,w,v
if(B.hJQ(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hJP(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.ce(new A.V(Date.now(),0,!1))},
b_u(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hfz(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.ce(new A.V(Date.now(),0,!1))},
hfA(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hfz(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.ce(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bS(A.dE(f,0,0,0,0,0).a).a7().ae())
d.kV=w},
apD(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$apD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$apD)
case 7:s=f
r=A.w(p)
r=A.eA(J.r(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$apD,w)},
apE(d){var x=0,w=A.j(y.H),v,u,t
var $async$apE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.apD(d),$async$apE)
case 3:u=f
x=5
return A.b(A.az(),$async$apE)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$apE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$apE,w)},
apC(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$apC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h_a(d)
if(u<=0){v=!1
x=1
break}if(B.h_9(d,e)){v=!1
x=1
break}x=3
return A.b(B.apD(e),$async$apC)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apC,w)},
b_v(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b_v=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.IL(e,d),$async$b_v)
case 3:if(g){v=-1
x=1
break}u=B.h_a(d)
if(u<=0){v=-1
x=1
break}if(B.h_9(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.apD(e),$async$b_v)
case 4:v=t.E(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_v,w)},
cbK(d,e,f){var x=0,w=A.j(y.y),v
var $async$cbK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.IL(e,d),$async$cbK)
case 3:if(h){v=!1
x=1
break}v=B.apC(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbK,w)},
cbJ(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$cbJ=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
x=3
return A.b(B.cbK(d,u,i.gU0()),$async$cbJ)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbJ,w)},
a78(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a78=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gcZ()
if(i.gU0()){v=!0
x=1
break}if(B.b_u(d,u)){v=!0
x=1
break}x=5
return A.b(A.lq(u,C.SO),$async$a78)
case 5:x=k?3:4
break
case 3:B.hfA(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a78)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.l2(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.SO,"Doc Share for Organizations"),$async$a78)
case 7:if(!k){v=!1
x=1
break}B.hfA(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a78)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a78,w)},
cbH:function cbH(){},
cbI:function cbI(){},
fNH(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fNH=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fNH)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.fgy.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hK([r],e.c))
s.toString
$.fgy.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fNH,w)},
ig3(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.fgy.bs($.fgy,new B.fNJ(d))},
fNJ:function fNJ(d){this.a=d},
fi0(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fi0=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hK([d],f))
s.toString
u=A.mR(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bP(C.jw,null,y.H),$async$fi0)
case 3:C.AB.fl(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eW.ms()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fi0,w)},
ag2(d,e,f){var x=0,w=A.j(y.H),v
var $async$ag2=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fh6.n(0,d,new B.ac8(A.bq(e,!0,v)))
x=3
return A.b(A.az(),$async$ag2)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.X.ap(A.G(["parts",e,"size",f],v,y.C),null)),$async$ag2)
case 2:return A.h(null,w)}})
return A.i($async$ag2,w)},
afX(d){return B.hZG(d)},
hZG(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$afX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fh6.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$afX)
case 3:u=j.aU(i.r(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aN(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.r(t,"parts")
if(!y.j.b(s)||J.cs(s)){v=null
x=1
break}o=J.b6(s,new B.flx(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aK(J.r(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.ac8(r)
$.fh6.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$afX,w)},
R_(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$R_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ck(e))
$.Gv.n(0,d,u)
x=3
return A.b(B.Ru(d,u),$async$R_)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$R_,w)},
aOC(d){return B.hZE(d)},
hZE(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.Gv.h(0,d)
if(n!=null&&!C.aG.gan(n)){v=n
x=1
break}x=3
return A.b(B.Rt(d),$async$aOC)
case 3:p=f
if(p!=null&&!C.aG.gan(p)){$.Gv.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aOC)
case 4:s=f
r=A.aU(J.r(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cF.aM(r)
x=!J.cs(q)?9:10
break
case 9:B.R_(d,q)
x=11
return A.b(J.hz(s,d),$async$aOC)
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
return A.i($async$aOC,w)},
hVK(d){if(d==null)return A.f8(null,y.K)
if(y.J.b(d))return A.f8(new Uint8Array(A.ck(J.eG(d,0,null))),y.K)
if(y.D.b(d))return A.f8(new Uint8Array(A.ck(d)),y.K)
if(y.Q.b(d))return A.f8(new Uint8Array(A.ck(A.yh(d,0,null))),y.K)
if(y.I.b(d))return A.f8(new Uint8Array(A.ck(d)),y.K)
return A.f8(null,y.K)},
a1V(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a1V=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bh($.bB,y.cf)
t=new A.bY(u,y.aW)
s=y.aK
A.fG(r,"loadend",new B.fr3(r,t),!1,s)
A.fG(r,"error",new B.fr4(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iu(0,C.N1,new B.fr5())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a1V,w)},
aOW(d,e,f){return B.i0X(d,e,f)},
i0X(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aOW=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a1V(i),$async$aOW)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Ru(o,p),$async$aOW)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.cc(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ag2(k,j,s),$async$aOW)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ab(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOW,w)},
aOV(d,e,f){return B.i0W(d,e,f)},
i0W(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aOV=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aOW(d,e,f),$async$aOV)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a1V(f),$async$aOV)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.Gv.n(0,s,r)
$.Rg.n(0,s,r)
x=11
return A.b(B.R_(s,r),$async$aOV)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ab(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOV,w)},
BS(d,e,f,g,h,i){return B.hJZ(d,e,f,g,h,i)},
hJZ(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$BS=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cZ.au(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jq(p,q,o,n,new A.V(Date.now(),0,!1).a7().ae(),a0,f,B.b_C(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.R_(s,d),$async$BS)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$BS)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cJ.gct().aM(d)),$async$BS)
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
return A.b(B.AQ(e),$async$BS)
case 12:j=a2
J.cc(j,m)
x=13
return A.b(B.GG(e,j),$async$BS)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$BS,w)},
Vg(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Vg=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.AQ(d),$async$Vg)
case 3:t=a1
s=e.length,r=J.cD(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cZ.au(99999)
n=p.b
l=o.type
l.toString
k=B.hfC(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).a7().ae()
i=new B.jq(m,n,k,l,j,"From folder",null,B.b_C(),null)
$.agw.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a1V(o),$async$Vg)
case 7:g=a1
x=g!=null&&!C.aG.gan(g)?8:10
break
case 8:$.Gv.n(0,h,g)
$.Rg.n(0,h,g)
B.R_(h,g)
x=9
break
case 10:x=11
return A.b(B.aOV(d,m,o),$async$Vg)
case 11:case 9:r.M(t,i)
u.push(i)
case 5:e.length===s||(0,A.M)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.GG(d,t),$async$Vg)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vg,w)},
h_e(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h_e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hfC(r,C.d.gak(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.IM(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gan(s)){v=B.BS(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_e,w)},
IM(d,e,f,g,h,i){return B.hJY(d,e,f,g,h,i)},
hJY(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$IM=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cZ.au(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.KD(A.dA(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$IM)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cs(m)){x=6
break}J.h6(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ck(J.S3(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kB(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Ru(k,l),$async$IM)
case 11:J.cc(q,k);++p
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
return A.b(j.a4(0),$async$IM)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Ru(k,new Uint8Array(A.ck(n))),$async$IM)
case 15:J.cc(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ag2(r,q,g),$async$IM)
case 16:f=new B.jq(i,a1,a0,g,new A.V(Date.now(),0,!1).a7().ae(),a2,null,B.b_C(),null)
x=17
return A.b(B.AQ(d),$async$IM)
case 17:e=a6
J.cc(e,f)
x=18
return A.b(B.GG(d,e),$async$IM)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IM,w)},
Vi(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Vi=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.agw.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a1V(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.afX(s),$async$Vi)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Rt(u[o]),$async$Vi)
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
v=A.yh(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.M)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Rg.h(0,s)
if(i==null)i=$.Gv.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rz(d,e),$async$Vi)
case 12:i=a0
if(i!=null&&!C.aG.gan(i))$.Rg.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.yh(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vi,w)},
hfC(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rz(d,e){return B.hK_(d,e)},
hK_(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rz=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Rg.h(0,f)
if(e==null)e=$.Gv.h(0,f)
if(e!=null&&!C.aG.gan(e)){v=e
x=1
break}s=$.agw.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a1V(s),$async$rz)
case 9:r=a3
if(r!=null&&!C.aG.gan(r)){$.Gv.n(0,f,r)
$.Rg.n(0,f,r)
B.R_(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ab(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.afX(f),$async$rz)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.ayA(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Rt(g[l]),$async$rz)
case 16:k=a3
if(k!=null&&!C.aG.gan(k))n.M(0,k)
case 14:g.length===m||(0,A.M)(g),++l
x=13
break
case 15:r=n.aoI()
if(!C.aG.gan(r)){$.Gv.n(0,f,r)
$.Rg.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aOC(f),$async$rz)
case 17:j=a3
if(j!=null&&!C.aG.gan(j)){$.Rg.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Vi(a0,a1,0,g),$async$rz)
case 20:i=a3
if(i!=null&&!C.aG.gan(i)){h=new Uint8Array(A.ck(i))
$.Gv.n(0,f,h)
$.Rg.n(0,f,h)
B.R_(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rz,w)},
hK2(d){var x,w,v=$.agw.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hK3(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hK([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hK0(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
apK(d,e,f,g,h){return B.hK1(d,e,f,g,h)},
hK1(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$apK=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.agw.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a1V(s),$async$apK)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rz(g,e),$async$apK)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.f_().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.io(d).xd(h,r,new A.E2(!0,e.c)),$async$apK)
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
$.am.$1("[doc share upload web] "+e.b+": "+A.w(o))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apK,w)},
hfE(d,e,f,g,h){var x,w,v,u,t=$.hfD
$.hfD=t+1
x=Date.now()
w=""+1000*x+"_"+C.cZ.au(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.cbV.n(0,t,new B.bwc(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.ayA(u)))
return t},
h_f(d){var x=0,w=A.j(y.H)
var $async$h_f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h_f,w)},
IN(d,e){var $async$IN=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.agw.h(0,h)
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
return A.qg(B.Vi(d,e,p,o<q?o:q),$async$IN,w)
case 8:n=a1
x=n!=null&&!C.aG.gan(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qg(A.G2(n),$async$IN,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qg(B.afX("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$IN,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qg(B.Rt(h[l]),$async$IN,w)
case 18:k=a1
x=k!=null&&!C.aG.gan(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qg(A.G2(k),$async$IN,w)
case 21:case 20:case 16:h.length===r||(0,A.M)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qg(B.rz(d,e),$async$IN,w)
case 22:j=a1
x=j!=null&&!C.aG.gan(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qg(A.G2(A.yh(j,p,o<i?o:i)),$async$IN,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qg(null,0,w)
case 2:return A.qg(t.at(-1),1,w)}})
var x=0,w=A.hol($async$IN,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hqb(w)},
b_E(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b_E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.cbV.h(0,d)
if(t==null||J.cs(e)){v=!1
x=1
break}u=t.x
u.M(0,e)
case 3:if(!(u.gL(u)>=1048576)){x=4
break}x=5
return A.b(t.a52(),$async$b_E)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_E,w)},
Vh(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$Vh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbV.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a52(),$async$Vh)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ag2(r.c,u,r.z),$async$Vh)
case 4:t=new B.jq(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).a7().ae(),r.f,r.r,B.b_C(),null)
u=r.a
x=5
return A.b(B.AQ(u),$async$Vh)
case 5:s=f
J.cc(s,t)
x=6
return A.b(B.GG(u,s),$async$Vh)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vh,w)},
a7f(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a7f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.cbV.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.ahc(u[s]),$async$a7f)
case 6:case 4:u.length===t||(0,A.M)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a7f,w)},
cbX(d,e,f){var x=0,w=A.j(y.H)
var $async$cbX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bB7(d,e,f),$async$cbX)
case 2:return A.h(null,w)}})
return A.i($async$cbX,w)},
cbY(d,e,f){var x=0,w=A.j(y.H)
var $async$cbY=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bB8(d,e,f),$async$cbY)
case 2:return A.h(null,w)}})
return A.i($async$cbY,w)},
EN(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$EN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.AQ(d),$async$EN)
case 2:p=g
J.nz(p,new B.cbW(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.Gv.W(0,v)
$.agw.W(0,e)
x=3
return A.b(B.afX(v),$async$EN)
case 3:u=g
$.fh6.W(0,v)
x=4
return A.b(A.az(),$async$EN)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$EN)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$EN)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.ahc(s[q]),$async$EN)
case 12:case 10:s.length===r||(0,A.M)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.ahc(v),$async$EN)
case 13:x=14
return A.b(B.GG(d,p),$async$EN)
case 14:return A.h(null,w)}})
return A.i($async$EN,w)},
b_D(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b_D=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rz(d,e),$async$b_D)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fi0(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_D,w)},
AQ(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$AQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$AQ)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.r(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aN(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fr6(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$AQ,w)},
GG(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$GG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$GG)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fvc(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.X.ap(t,null)),$async$GG)
case 3:return A.h(null,w)}})
return A.i($async$GG,w)},
bB7(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bB7=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AQ(d),$async$bB7)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fpg(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aEv(f))
x=4
return A.b(B.GG(d,u),$async$bB7)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bB7,w)},
bB8(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bB8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.AQ(d),$async$bB8)
case 3:u=h
t=J.cD(u)
s=t.bg(u,new B.fph(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cKz(f))
x=4
return A.b(B.GG(d,u),$async$bB8)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bB8,w)},
ac8:function ac8(d){this.a=d},
flx:function flx(){},
fr3:function fr3(d,e){this.a=d
this.b=e},
fr4:function fr4(d){this.a=d},
fr5:function fr5(){},
cbW:function cbW(d){this.a=d},
bwc:function bwc(d,e,f,g,h,i,j,k,l){var _=this
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
fr6:function fr6(){},
fvc:function fvc(){},
fpg:function fpg(d){this.a=d},
fph:function fph(d){this.a=d},
a7g(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a7g=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b3(d,new B.cc0())?3:4
break
case 3:x=5
return A.b(B.b_F(d,e),$async$a7g)
case 5:u=g
if(u!=null){t=u.c
B.NH(d,u.b,e,t)}v=u
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
return A.b(B.b_A(s),$async$a7g)
case 10:case 9:if(g){v=new A.Qn(1,D.Sr,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Vj(d,e),$async$a7g)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Vo(!0,!0,d,e),$async$a7g)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.NH(d,D.zJ,e,t)
v=new A.Qn(p,D.zJ,t)
x=1
break}v=B.cc_(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7g,w)},
Vj(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Vj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a7i(null,d,e),$async$Vj)
case 3:p=g
try{u=C.X.aN(0,p,null)
t=y.f.b(u)?J.r(u,"files"):null
if(!y.j.b(t)||J.cs(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b_z(p,d.length,e),$async$Vj)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cbY(e,C.d.gI(d).a,r.b),$async$Vj)
case 7:case 6:q=r.a
x=8
return A.b(B.NH(d,D.Sr,e,q),$async$Vj)
case 8:v=new A.Qn(d.length,D.Sr,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vj,w)},
Vk(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Vk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mx(D.mO)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a7h(d,e),$async$Vk)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cbT(s,d,e,t),$async$Vk)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b_A(t),$async$Vk)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rz(e,d),$async$Vk)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Vj(A.a([d],y.r),e),$async$Vk)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vk,w)},
Vm(){var x=0,w=A.j(y.H)
var $async$Vm=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h_8(),$async$Vm)
case 2:x=3
return A.b(B.aR6(),$async$Vm)
case 3:return A.h(null,w)}})
return A.i($async$Vm,w)},
a7h(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a7h=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b_C()
x=3
return A.b(B.cbX(e,d.a,u),$async$a7h)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7h,w)},
NH(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$NH=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Sr&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b7(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a7h(p,f),$async$NH)
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
return A.b(B.cbS(o,p,u,f),$async$NH)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cbT(o,p,f,t),$async$NH)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cbR(o,u,p,f),$async$NH)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.M)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$NH,w)},
b_F(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b_F=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cbZ(e,d),$async$b_F)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Vo(!1,!0,d,e),$async$b_F)
case 4:u=g
if(u!=null){t=u.b
v=new A.Qn(u.a,D.zJ,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_F,w)},
cbZ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cbZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Vi(d,s,0,1),$async$cbZ)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.M)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbZ,w)},
cc_(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cc_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gI(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a7i(null,d,e),$async$cc_)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hfB(u)
if(t.length>800){v=null
x=1
break}v=new A.Qn(d.length,D.dIP,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cc_,w)},
apL(d,e,f){return B.hK6(d,e,f)},
hK6(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$apL=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d3(g,"\ufeff"))g=J.nf(g,1)
x=B.h_d(g)?3:4
break
case 3:x=5
return A.b(B.cbU(g),$async$apL)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d3(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nf(g,13))
try{k=B.EO(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ab(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d3(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nf(g,13))
u=9
x=12
return A.b(B.b_y(q),$async$apL)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vl(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ab(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d3(g,"NGMYDOCSYNC0|"))try{n=B.h_c(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Vl(n,a0)
v=k
x=1
break}catch(a1){m=A.ab(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d3(g,"N2|")){v=B.IO(C.a.i(J.nf(g,3)),d,a0)
x=1
break}if(J.d3(g,"NGMYDOCSYNC2|")){v=B.IO(C.a.i(J.nf(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cB(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c9(k,"/"))h=C.a.aq(k,0,k.length-1)
else h=k
v=B.IO(h,d,a0)
x=1
break}if(J.f0(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Vl(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apL,w)},
IO(d,e,f){return B.hK4(d,e,f)},
hK4(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$IO=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b7(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b7(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.c9(e,"manifest.json")){g=C.a.aq(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cG(A.w(s)+"/manifest.json",0,null)
q=A.cG(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b_q(r),$async$IO)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b_q(A.cG(s,0,null)),$async$IO)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.r(p,"files")
if(!y.j.b(o)||J.cs(o)){v=null
x=1
break}g=J.r(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cbw(o,r,a1,n,a2),$async$IO)
case 11:m=a4
x=J.cs(m)?12:13
break
case 12:x=14
return A.b(B.cbv(q),$async$IO)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Vl(l,a2),$async$IO)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cs(m)?null:m
v=g
x=1
break
u=2
x=6
break
case 4:u=3
d=t.pop()
k=A.ab(d)
$.am.$1("[doc share lan import] "+A.w(k))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IO,w)},
a7i(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a7i=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rz(f,r),$async$a7i)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.G(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cJ.gct().aM(q)],t,s))
x=3
break
case 4:u=A.U(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).a7().ae())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.ap(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7i,w)},
Vl(d,e){return B.hK5(d,e)},
hK5(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Vl=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aN(0,a2,null)
f=y.f
if(!f.b(s)){v=null
x=1
break}e=J.r(s,"marker")
if(J.k(e==null?"":e)!=="ngmyDocShareBundle"){v=null
x=1
break}r=J.r(s,"files")
if(!y.j.b(r)){v=null
x=1
break}e=J.r(s,"ownerEmail")
q=J.k(e==null?"":e)
e=J.r(s,"deliveryVia")
p=J.k(e==null?"":e)
o=J.A(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aW(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.r(m,"name")
l=J.k(d==null?"file":d)
d=J.r(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.r(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cF.aM(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.BS(i,a3,d,k,l,o),$async$Vl)
case 9:h=a5
if(h!=null)J.cc(n,h)
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
$.am.$1("[doc share bundle] "+A.w(g))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Vl,w)},
NG:function NG(d,e){this.a=d
this.b=e},
cc0:function cc0(){},
a1u(d){var x=A.P(d).ax.a===C.J,w=x?D.agn:D.ae5,v=x?D.ai_:C.c,u=x?C.aP:C.M,t=x?C.bM:C.al,s=x?D.afn:C.aL
return new A.aGS([w,s,v,u,t,x?C.ff:C.bP])},
hvg(d,e){var x=e?C.w.j(0.72):C.aT
return A.ci(null,x,!0,null,new B.fRQ(e),d,null,!0,!0,y.N)},
cbG(d,e,f,g,h,i,j,k,l){return new B.Vd(e,l,d,f,k,j,g,h,i,null)},
Zr(d,e,f,g,h,i,j){return new B.bei(g,h,j,e,i,d,f,null)},
fRQ:function fRQ(d){this.a=d},
Zo:function Zo(d,e){this.c=d
this.a=e},
azR:function azR(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d84:function d84(d){this.a=d},
d82:function d82(d){this.a=d},
d83:function d83(d){this.a=d},
bvP:function bvP(){},
Vd:function Vd(d,e,f,g,h,i,j,k,l,m){var _=this
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
aDS:function aDS(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dUW:function dUW(d){this.a=d},
dUj:function dUj(d,e){this.a=d
this.b=e},
dUk:function dUk(d,e){this.a=d
this.b=e},
dTT:function dTT(d,e,f){this.a=d
this.b=e
this.c=f},
dTS:function dTS(d){this.a=d},
dTU:function dTU(d,e){this.a=d
this.b=e},
dTZ:function dTZ(d,e,f){this.a=d
this.b=e
this.c=f},
dTY:function dTY(d){this.a=d},
dUK:function dUK(d,e){this.a=d
this.b=e},
dUL:function dUL(d){this.a=d},
dUg:function dUg(d,e,f){this.a=d
this.b=e
this.c=f},
dUd:function dUd(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dTX:function dTX(d){this.a=d},
dUo:function dUo(d){this.a=d},
dUn:function dUn(){},
dU2:function dU2(d){this.a=d},
dUH:function dUH(d,e){this.a=d
this.b=e},
dUI:function dUI(d,e){this.a=d
this.b=e},
dUJ:function dUJ(d,e){this.a=d
this.b=e},
dUe:function dUe(d,e){this.a=d
this.b=e},
dUf:function dUf(d,e){this.a=d
this.b=e},
dUA:function dUA(d,e){this.a=d
this.b=e},
dUw:function dUw(d){this.a=d},
dUv:function dUv(d){this.a=d},
dUx:function dUx(){},
dUy:function dUy(){},
dUz:function dUz(d,e){this.a=d
this.b=e},
dUB:function dUB(){},
dUC:function dUC(d){this.a=d},
dUu:function dUu(d,e){this.a=d
this.b=e},
dUp:function dUp(d){this.a=d},
dUq:function dUq(d){this.a=d},
dUr:function dUr(d){this.a=d},
dUs:function dUs(d){this.a=d},
dUt:function dUt(d){this.a=d},
dU_:function dU_(){},
dU0:function dU0(d){this.a=d},
dU1:function dU1(d,e){this.a=d
this.b=e},
dTW:function dTW(d,e){this.a=d
this.b=e},
dTV:function dTV(d,e,f){this.a=d
this.b=e
this.c=f},
dUh:function dUh(d){this.a=d},
dUi:function dUi(d,e,f){this.a=d
this.b=e
this.c=f},
dUb:function dUb(d,e){this.a=d
this.b=e},
dU7:function dU7(d){this.a=d},
dU4:function dU4(d,e,f){this.a=d
this.b=e
this.c=f},
dU8:function dU8(d){this.a=d},
dU9:function dU9(d){this.a=d},
dUa:function dUa(){},
dUc:function dUc(d,e){this.a=d
this.b=e},
dU5:function dU5(d){this.a=d},
dU3:function dU3(d,e,f){this.a=d
this.b=e
this.c=f},
dU6:function dU6(){},
dUm:function dUm(d){this.a=d},
dUl:function dUl(d,e){this.a=d
this.b=e},
dUG:function dUG(d,e){this.a=d
this.b=e},
dUD:function dUD(d){this.a=d},
dUE:function dUE(d,e){this.a=d
this.b=e},
dUF:function dUF(d){this.a=d},
dUT:function dUT(d){this.a=d},
dUR:function dUR(d){this.a=d},
dUS:function dUS(d){this.a=d},
dUU:function dUU(){},
dUV:function dUV(d,e){this.a=d
this.b=e},
dUN:function dUN(d,e){this.a=d
this.b=e},
dUO:function dUO(d,e,f){this.a=d
this.b=e
this.c=f},
dUM:function dUM(d,e,f){this.a=d
this.b=e
this.c=f},
dUP:function dUP(d,e){this.a=d
this.b=e},
dUQ:function dUQ(d,e){this.a=d
this.b=e},
azO:function azO(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
beh:function beh(d,e,f){this.c=d
this.d=e
this.a=f},
d80:function d80(){},
d81:function d81(){},
acs:function acs(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d8o:function d8o(){},
d8n:function d8n(d){this.a=d},
Zq:function Zq(d,e,f){this.c=d
this.d=e
this.a=f},
azT:function azT(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d8k:function d8k(d){this.a=d},
d8l:function d8l(d,e,f){this.a=d
this.b=e
this.c=f},
d8m:function d8m(d,e){this.a=d
this.b=e},
d8i:function d8i(d,e){this.a=d
this.b=e},
d8g:function d8g(d){this.a=d},
d8e:function d8e(d){this.a=d},
d8b:function d8b(d){this.a=d},
d8h:function d8h(d){this.a=d},
d8d:function d8d(d){this.a=d},
d8j:function d8j(d){this.a=d},
d8f:function d8f(d){this.a=d},
d8c:function d8c(d){this.a=d},
Zn:function Zn(d,e,f){this.c=d
this.d=e
this.a=f},
azQ:function azQ(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d7Y:function d7Y(d){this.a=d},
d7X:function d7X(d,e){this.a=d
this.b=e},
d7Z:function d7Z(d){this.a=d},
d7W:function d7W(d,e){this.a=d
this.b=e},
d8_:function d8_(d){this.a=d},
d7V:function d7V(d,e){this.a=d
this.b=e},
d7R:function d7R(d){this.a=d},
d7S:function d7S(d){this.a=d},
d7T:function d7T(d,e){this.a=d
this.b=e},
d7U:function d7U(d){this.a=d},
PX:function PX(d,e,f){this.c=d
this.d=e
this.a=f},
azW:function azW(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d8B:function d8B(d){this.a=d},
d8C:function d8C(d){this.a=d},
d8D:function d8D(d){this.a=d},
d8E:function d8E(d){this.a=d},
d8F:function d8F(d,e){this.a=d
this.b=e},
d8G:function d8G(d){this.a=d},
d8I:function d8I(d){this.a=d},
d8H:function d8H(d){this.a=d},
Zs:function Zs(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
azU:function azU(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d8x:function d8x(d,e){this.a=d
this.b=e},
d8y:function d8y(d,e){this.a=d
this.b=e},
d8p:function d8p(d,e,f){this.a=d
this.b=e
this.c=f},
d8q:function d8q(d){this.a=d},
d8r:function d8r(){},
d8w:function d8w(){},
d8s:function d8s(d,e){this.a=d
this.b=e},
d8t:function d8t(d,e){this.a=d
this.b=e},
d8u:function d8u(d,e){this.a=d
this.b=e},
d8v:function d8v(d,e){this.a=d
this.b=e},
acq:function acq(d,e){this.c=d
this.a=e},
d7Q:function d7Q(d){this.a=d},
Zm:function Zm(d){this.a=d},
azP:function azP(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Zt:function Zt(d,e){this.c=d
this.a=e},
azV:function azV(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d8A:function d8A(d){this.a=d},
d8z:function d8z(d){this.a=d},
bei:function bei(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hK7(){var x,w=$.pE(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"VT"+C.d.hx(v)},
NI(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$NI=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$NI)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_video_relay_v1",null,!1,C.bK),$async$NI)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$NI,w)},
a7j(d){return B.hK8(d)},
hK8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a7j=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7j)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_video_relay_v1",A.G(["relays",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$a7j)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7j,w)},
Vn(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Vn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NI(),$async$Vn)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dR(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).a7().ae())
r.n(s,d,t)
x=4
return A.b(B.a7j(s),$async$Vn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Vn,w)},
Vo(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Vo=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c8(),$async$Vo)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.T(f).k("Z<1>")
u=A.C(new A.Z(f,new B.cc2(),t),t.k("L.E"))}if(u.length===0){v=null
x=1
break}s=B.hK7()
t=A.T(u).k("N<1,a8<n,aD>>")
r=A.C(new A.N(u,new B.cc3(s),t),t.k("ak.E"))
x=6
return A.b(B.NI(),$async$Vo)
case 6:q=i
J.aI(q,s,A.G(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=7
return A.b(B.a7j(q),$async$Vo)
case 7:x=8
return A.b(B.a7k(r,u,g,s),$async$Vo)
case 8:v=new A.bpP(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Vo,w)},
apM(d){var x=0,w=A.j(y.y),v,u,t
var $async$apM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.NI(),$async$apM)
case 3:u=t.r(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.A(J.r(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apM,w)},
cc4(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$cc4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.NI(),$async$cc4)
case 3:s=r.r(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.A(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cc4,w)},
a7k(d,e,f,g){return B.hK9(d,e,f,g)},
hK9(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a7k=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.r(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.apK("media",r,new B.cc1(s,e,g),f,q),$async$a7k)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Vn(g,A.G(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a7k)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Vn(g,A.G(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$a7k)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ab(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Vn(g,A.G(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a7k)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7k,w)},
EO(d,e,f){return B.hKa(d,e,f)},
hKa(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$EO=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$EO)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.apM(b3),$async$EO)
case 7:if(c0){x=6
break}x=8
return A.b(A.bP(C.iU,null,g),$async$EO)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.apM(b3),$async$EO)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.NI(),$async$EO)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aK(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cs(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gL(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
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
a8=$.f_().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.p4(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.aaH(a8.a,b0,"media",a8.d,a9).CP(m)
k=A.cG(l,0,null)
x=17
return A.b(B.b_r(k,n,o,s,b7),$async$EO)
case 17:j=c0
if(j!=null){J.cc(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ab(b4)
$.am.$1("[doc share video cloud] download "+A.w(o)+": "+A.w(i))
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
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.r(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.f_().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.p4(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.aaH(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$EO)
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
a0=A.dR(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).a7().ae())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a7j(e),$async$EO)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$EO,w)},
cc2:function cc2(){},
cc3:function cc3(d){this.a=d},
cc1:function cc1(d,e,f){this.a=d
this.b=e
this.c=f},
aR6(){var x=0,w=A.j(y.H),v,u
var $async$aR6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hV5=null
v=y.H
u=A.dU(null,v)
x=2
return A.b(u,$async$aR6)
case 2:u=A.dU(null,v)
x=3
return A.b(u,$async$aR6)
case 3:u=$.h4t
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dU(u,v),$async$aR6)
case 4:$.h4t=$.i2P=$.i2Q=null
return A.h(null,w)}})
return A.i($async$aR6,w)},
fuO(d){var x=0,w=A.j(y.H),v,u
var $async$fuO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a7M){x=1
break}u=new A.bh($.bB,y.d4)
d.c=new B.fuP(new A.bY(u,y.aY))
x=3
return A.b(u.iu(0,C.hX,new B.fuQ()),$async$fuO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fuO,w)},
i2N(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hJS(x):x},
h4x(d){var x=0,w=A.j(y.T),v,u,t
var $async$h4x=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,13))
if(C.a.a0(u,"WR")){v=B.apO(u)
x=1
break}v=B.h_c(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4x,w)},
h4w(d){var x=0,w=A.j(y.T),v,u,t
var $async$h4w=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b7(t,14))
if(C.a.a0(u,"WR")){v=B.apP(u)
x=1
break}v=B.h_c(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h4w,w)},
fNr(d){var x=0,w=A.j(y.T),v
var $async$fNr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apP(d),$async$fNr)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fNr,w)},
bC0(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bC0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.h4w(d),$async$bC0)
case 3:q=f
if(q==null){x=1
break}t=C.X.aN(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bC0,w)},
fiP(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fiP=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.Vh(g)
x=1
break}if(d.gL(d)<=0){v=null
x=1
break}v=B.BS(d.aoI(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fiP,w)},
GI(d,e,f){return B.i5f(d,e,f)},
i5f(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$GI=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.h4x(a1),$async$GI)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aN(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b7(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hx9().aEK(D.dx9,null),$async$GI)
case 4:l=d.h4t=a4
f.a="file"
f.b="application/octet-stream"
k=new A.ayA(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bh($.bB,y.b1)
l.y=new B.fvl(f,k,new B.fvm(f,a2,k,j,a0,p),a2,j,a0,p,new A.bY(t,y.ch))
x=5
return A.b(l.a80(0,new B.Xr(r,"offer")),$async$GI)
case 5:d=l
x=7
return A.b(l.alo(0),$async$GI)
case 7:x=6
return A.b(d.a7T(0,a4),$async$GI)
case 6:x=8
return A.b(B.fuO(l),$async$GI)
case 8:x=9
return A.b(l.apt(),$async$GI)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.i2N(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.ap(A.G(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.apQ(m,h),$async$GI)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hfB(h)
case 11:v=new A.bp6(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$GI,w)},
fuP:function fuP(d){this.a=d},
fuQ:function fuQ(){},
fvm:function fvm(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fvl:function fvl(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fvk:function fvk(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
i79(d){switch(d){case"new":return D.erj
case"checking":return D.erk
case"connected":return D.erm
case"completed":return D.erl
case"failed":return D.ero
case"disconnected":return D.erp
case"closed":return D.aOi
case"count":return D.ern}return D.aOi},
i7a(d){switch(d){case"new":return D.aOj
case"gathering":return D.erq
case"complete":return D.a7M}return D.aOj},
ihy(d){switch(d){case"stable":return D.err
case"have-local-offer":return D.ers
case"have-local-pranswer":return D.eru
case"have-remote-offer":return D.ert
case"have-remote-pranswer":return D.erv
case"closed":return D.aOp}return D.aOp},
ifL(d){switch(d){case"new":return D.aOm
case"connecting":return D.aOn
case"connected":return D.aOo
case"closed":return D.a7N
case"disconnected":return D.aOl
case"failed":return D.aOk}return D.a7N},
a9E:function a9E(d,e){this.a=d
this.b=e},
OL:function OL(d,e){this.a=d
this.b=e},
Xq:function Xq(d,e){this.a=d
this.b=e},
OK:function OK(d,e){this.a=d
this.b=e},
Fg:function Fg(d,e){this.a=d
this.b=e},
co8:function co8(){},
h0Z(d){var x=new B.Ff()
x.a=d
x.b=!0
return x},
Ff:function Ff(){this.b=this.a=$},
a9D:function a9D(){},
au7:function au7(){},
Xr:function Xr(d,e){this.a=d
this.b=e},
h_8(){var x=0,w=A.j(y.H)
var $async$h_8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h_8,w)},
h_b(d,e,f){var x=0,w=A.j(y.T),v
var $async$h_b=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mx(D.mO))){v=null
x=1
break}v=B.fNH(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h_b,w)},
hfB(d){var x,w=F.adv.a4N(C.dN.aM(d),null)
if(w.length===0){x=C.dN.aM(d)
return C.cJ.gct().aM(x)}return C.cJ.gct().aM(w)},
hJR(d){var x,w,v=C.cF.aM(d)
try{x=C.cf.cA(0,F.adu.bdD(v,!1))
return x}catch(w){x=C.cf.cA(0,v)
return x}},
h_c(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hJR(C.a.b7(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b7(t,w.length)
try{v=C.cf.cA(0,C.cF.aM(x))
return v}catch(u){return x}}return null},
hJS(d){var x,w,v,u,t,s=A.a([],y.s)
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
hJT(){var x,w=$.pE(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.au(32)]
return"DS"+C.d.hx(v)},
b_x(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b_x=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bK),$async$b_x)
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
$.am.$1("[doc share qr stash] load "+A.w(p)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$b_x,w)},
cbL(d,e){return B.hJU(d,e)},
hJU(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$cbL=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$cbL)
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
$.am.$1("[doc share qr stash] save "+A.w(p)+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cbL,w)},
b_A(d){var x=0,w=A.j(y.y),v,u,t
var $async$b_A=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b_x(d),$async$b_A)
case 3:t=f
if(t!=null){u=J.r(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_A,w)},
b_z(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b_z=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hJT()
r=C.a.i(f)
t=C.dN.aM(s)
x=3
return A.b(B.cbL(u,A.G(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cJ.gct().aM(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$b_z)
case 3:if(!h){v=null
x=1
break}v=new A.a0v("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_z,w)},
b_y(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b_y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b_x(o),$async$b_y)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.r(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.cf.cA(0,C.cF.aM(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ab(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b_y,w)},
cbM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$cbM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(W.bCX("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$cbM)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cbM,w)},
b_B(d){var x=0,w=A.j(y.h),v,u,t
var $async$b_B=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.IK(),$async$b_B)
case 3:u=t.r(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b_B,w)},
apH(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$apH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apH)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.r(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b_B(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apH,w)},
apF(d,e){var x=0,w=A.j(y.H)
var $async$apF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apF)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$apF)
case 2:return A.h(null,w)}})
return A.i($async$apF,w)},
a7b(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a7b=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7b)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.IK(),$async$a7b)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dn(s)
if(q.aj(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.G(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.C))
x=5
return A.b(A.a7a(s),$async$a7b)
case 5:x=6
return A.b(B.apF(f,u),$async$a7b)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7b,w)},
a7c(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7c=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7c)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.IK(),$async$a7c)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.r(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
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
return A.b(B.apF(g,q),$async$a7c)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a7a(u),$async$a7c)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7c,w)},
a7d(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a7d=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7d)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.IK(),$async$a7d)
case 4:u=o.r(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.A(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b_u(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a7d)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.X.ap(A.G(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).a7().ae()],p,p),null)),$async$a7d)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a7d,w)},
cbN(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$cbN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$cbN)
case 7:s=f
p=A.w(n)
r=A.aU(J.r(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aN(0,r,null)
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
return A.i($async$cbN,w)},
IL(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$IL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cbN(d),$async$IL)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.r(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b_B(t),$async$IL)
case 4:s=g
x=s==null||!J.A(J.r(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.apG(d),$async$IL)
case 7:v=!1
x=1
break
case 6:u=J.r(s,"ownerEmail")
u=B.b_u(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.apG(d),$async$IL)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IL,w)},
apG(d){var x=0,w=A.j(y.H)
var $async$apG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$apG)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$apG)
case 2:return A.h(null,w)}})
return A.i($async$apG,w)},
b_C(){var x,w=$.pE(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.au(32)]
return C.d.hx(v)},
a7e(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h_d(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
cbQ(d){return B.hJW(d)},
hJW(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$cbQ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a7e(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f6("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bK),$async$cbQ)
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
$.am.$1("[doc share short code] load "+d+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$cbQ,w)},
apJ(d,e){return B.hJX(d,e)},
hJX(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$apJ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a7e(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hI("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$apJ)
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
$.am.$1("[doc share short code] save "+d+": "+A.w(s))
v=!1
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apJ,w)},
cbS(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbS=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7e(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.apJ(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbS)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbS,w)},
cbR(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cbR=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7e(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.apJ(u,A.G(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z)),$async$cbR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cbR,w)},
cbT(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cbT=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a7e(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.apJ(u,A.G(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cbT,w)},
cbU(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cbU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h_d(d)){v=null
x=1
break}x=3
return A.b(B.cbQ(d),$async$cbU)
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
return A.i($async$cbU,w)},
a7l(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a7l=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$a7l)
case 3:if(!e){v=A.U(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f6("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bK),$async$a7l)
case 8:s=e
if(s==null){v=A.U(y.N,y.z)
x=1
break}r=J.r(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ab(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.U(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a7l,w)},
apN(d){return B.hKb(d)},
hKb(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$apN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c8(),$async$apN)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hI("ngmy_doc_share_webrtc_signal_v1",A.G(["signals",d,"savedAt",new A.V(Date.now(),0,!1).a7().ae()],y.N,y.z),!1,!1,C.cG,null),$async$apN)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ab(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apN,w)},
apO(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$apO=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d3(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c8(),$async$apO)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a7l(),$async$apO)
case 4:s=f
r=J.r(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.r(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.cf.cA(0,C.cF.aM(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dR(A.a2(r,m,l),m,l)
J.aI(o,"offerConsumedAt",new A.V(Date.now(),0,!1).a7().ae())
J.aI(s,j,o)
x=9
return A.b(B.apN(s),$async$apO)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ab(i)
$.am.$1("[doc share webrtc stash] offer decode: "+A.w(n))
v=null
x=1
break
x=8
break
case 5:x=2
break
case 8:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$apO,w)},
apQ(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$apQ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c8(),$async$apQ)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a7l(),$async$apQ)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dR(A.a2(s,r,q),r,q)
r=C.dN.aM(C.a.i(e))
q.n(0,"answer",C.cJ.gct().aM(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).a7().ae())
t.n(u,p,q)
x=5
return A.b(B.apN(u),$async$apQ)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apQ,w)},
apP(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$apP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c8(),$async$apP)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a7l(),$async$apP)
case 4:s=o.r(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.r(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.cf.cA(0,C.cF.aM(u))
v=r
x=1
break}catch(n){t=A.ab(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$apP,w)},
aoK(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$aoK=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aV.al$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbd()
if(!(p instanceof A.q5)){v=null
x=1
break}x=3
return A.b(p.m4(e),$async$aoK)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.h8),$async$aoK)
case 7:q=g
o=q
o=o==null?null:J.eR(J.vA(o))
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
return A.i($async$aoK,w)},
idJ(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aU(C.o.u(w),5,"0")
return v},
fLJ(d){return B.idL(d)},
idL(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fLJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").L2(d,3600),$async$fLJ)
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
$.am.$1("[supabase signed url] "+d+": "+A.w(s))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$fLJ,w)},
Dd(d,e,f,g,h,i){var x=null
return B.idI(d,e,f,g,h,i)},
idI(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Dd=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hfE(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h_f(r),$async$Dd)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fLJ(o),$async$Dd)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a7f(r),$async$Dd)
case 14:v=null
x=1
break
case 13:e=$.bB.h(0,C.aRB)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.M2(A.a([],g))
x=15
return A.b(d.f4(0,A.auY("GET",A.cG(n,0,null))).da(0,C.FU),$async$Dd)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a7f(r),$async$Dd)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.KD(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Dd)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b_E(r,k),$async$Dd)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a4(0),$async$Dd)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.M)(b0),++f
x=8
break
case 10:i=B.Vh(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ab(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a7f(r),$async$Dd)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Dd,w)},
aQN(d){return B.idK(d)},
idK(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aQN=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f_().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.io("media").W(0,d),$async$aQN)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ab(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQN,w)}},D,S,L,T,U,V,W,M,X
J=c[1]
A=c[0]
C=c[2]
G=c[149]
N=c[43]
F=c[245]
H=c[138]
O=c[223]
E=c[216]
P=c[187]
Q=c[139]
R=c[221]
I=c[249]
K=c[254]
B=a.updateHolder(c[22],B)
D=c[252]
S=c[186]
L=c[206]
T=c[70]
U=c[239]
V=c[76]
W=c[59]
M=c[90]
X=c[253]
B.co9.prototype={
aEK(d,e){return this.cM5(d,e)},
cM5(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aEK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.G(["mandatory",A.U(t,t),"optional",A.a([A.G(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dR(r,s,t)
t.v(0,d)
u=new q(A.kq(A.cA(t)))
t=J.k(u)
v=B.hOM(C.cJ.gct().aM(new A.d7(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aEK,w)}}
B.b4M.prototype={
bzA(d){var x=this,w=x.w
w.onclose=A.hs(new B.co4(x))
w.onopen=A.hs(new B.co5(x))
w.onmessage=A.hs(new B.co6(x))
w.onbufferedamountlow=A.hs(new B.co7(x))},
gdc(d){return this.x},
ahH(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ahH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ff()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.h0Z(J.eR(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eb(d.arrayBuffer(),y.af),$async$ahH)
case 8:v=t.h0Z(s.anW(f,0,null))
x=1
break
case 7:case 4:v=B.h0Z(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahH,w)}}
B.b4N.prototype={
bzB(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hs(new B.coa(x)))
w.addEventListener("icecandidate",A.hs(new B.cob(x)))
w.addEventListener("iceconnectionstatechange",A.hs(new B.coc(x)))
w.onicegatheringstatechange=A.hs(new B.cod(x))
w.addEventListener("signalingstatechange",A.hs(new B.coe(x)))
if(!$.h8e())w.addEventListener("connectionstatechange",A.hs(new B.cof(x)))
w.addEventListener("negotiationneeded",A.hs(new B.cog(x)))
w.addEventListener("track",A.hs(new B.coh(x)))},
alo(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$alo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eb(s.createAnswer(A.kq(A.cA(A.U(y.N,y.z)))),y.aQ),$async$alo)
case 3:t=f
v=new B.Xr(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$alo,w)},
a7T(d,e){return this.boO(0,e)},
boO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a7T=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a7T)
case 2:return A.h(null,w)}})
return A.i($async$a7T,w)},
a80(d,e){return this.bp8(0,e)},
bp8(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a80=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eb(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a80)
case 2:return A.h(null,w)}})
return A.i($async$a80,w)},
apt(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$apt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Xr(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$apt,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f8(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.acr.prototype={
a5(){return"_DocShareEntry."+this.b}}
B.Zp.prototype={
T(){return new B.azS()},
gcZ(){return this.c}}
B.azS.prototype={
Z(){this.a2()
this.aeo()},
aeo(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeo=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_v(u.e,u.c),$async$aeo)
case 2:t=e
if(v.c!=null)v.m(new B.d88(v,t))
return A.h(null,w)}})
return A.i($async$aeo,w)},
Qw(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Qw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.apC(t.e,t.c,!1),$async$Qw)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.fai)
x=1
break}x=4
return A.b(B.a79(u.a.c,"individual"),$async$Qw)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a4(t,!1).a6n(A.dX(new B.d85(u),!1,null,y.H)),$async$Qw)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Qw,w)},
Jp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Jp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fsO(o),$async$Jp)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a7d(o.e,r,s,q),$async$Jp)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f7j)
x=1
break}x=5
return A.b(B.a79(u.a.c,"member"),$async$Jp)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a4(o,!1).a6n(A.dX(new B.d87(u),!1,null,y.H)),$async$Jp)
case 6:case 1:return A.h(v,w)}})
return A.i($async$Jp,w)},
y9(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$y9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a78(t.e,o,t.f,t.r,t.w,s),$async$y9)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a79(u.a.c,"org_owner"),$async$y9)
case 4:x=5
return A.b(B.apH(u.a.c),$async$y9)
case 5:r=e
x=r==null||!J.A(J.r(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fti(o),$async$y9)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a7b(s,t,o,q.c),$async$y9)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.K(y.q).f.U(D.f7g)
x=1
break}x=10
return A.b(B.apH(u.a.c),$async$y9)
case 10:o=u.c
if(o==null){x=1
break}o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a4(o,!1).a6n(A.dX(new B.d86(u),!1,null,y.H)),$async$y9)
case 11:case 1:return A.h(v,w)}})
return A.i($async$y9,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.J,r=s?C.js:C.pZ,q=B.h_a(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.w(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.fZ,24)],y.V)
v=y.p
w=A.p(t,A.x(A.a([A.p(t,D.ftW,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h4,t,t,t),C.aA,D.fNB,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.E,t,C.e,C.i,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.c4n,C.n),t,t,t,t,C.eu,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lO(new B.d8a(),t),C.O,w,C.dS,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.al,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ae)
if(!u.a.x)C.d.v(p,A.a([new B.acT(C.eY,C.aAV,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcfC(),t),C.ae],v))
p.push(new B.acT(C.p8,C.a3D,"Team Member","Sign in with your organization access code + password",u.gcgt(),t))
p.push(C.ae)
p.push(new B.acT(C.ang,C.a59,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcfZ(),t))
return A.c7(t,r,A.bl(!0,A.ce(A.x(p,C.ak,t,C.e,C.i,0,C.p),C.t,t,C.y,t,F.akC,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.acT.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.J(C.d.gI(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a2,!0,s,A.aO(!1,r,!0,A.eJ(A.B(A.a([A.p(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a9(C.a5,C.a8,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.er,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.oF,s,s,s),C.au,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.i,0,C.p),1),A.X(C.yF,C.d.gI(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.i,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bQ,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ai)}}
B.aCu.prototype={}
B.aFC.prototype={}
B.jq.prototype={
mx(d){var x=this.b,w=C.a.oM(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b7(x,w+1).toLowerCase())},
gaq9(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.ac(x/1024,1)+" KB"
if(x<1073741824)return C.k.ac(x/1048576,1)+" MB"
return C.k.ac(x/1073741824,2)+" GB"},
ag(){var x,w=this,v=A.U(y.N,y.z)
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
bd6(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jq(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cKz(d){return this.bd6(null,d)},
aEv(d){return this.bd6(d,null)}}
B.Vb.prototype={
T(){return new B.aDQ(new A.cB(null,y.A))},
gcZ(){return this.c}}
B.aDQ.prototype={
Z(){this.a2()
this.aep()},
aep(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aep=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.BR(u.a.c),$async$aep)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dTP(u,t))
case 1:return A.h(v,w)}})
return A.i($async$aep,w)},
aeq(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$aeq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fH(new A.fB(s)),$async$aeq)
case 3:t=u.c
if(t!=null)t.K(y.q).f.U(D.fbc)
case 1:return A.h(v,w)}})
return A.i($async$aeq,w)},
a_1(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_1=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.aoK(s.d,4),$async$a_1)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t4(r,"ngmy_my_code_"+m+".png"),$async$a_1)
case 8:q=e
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
o=s.c
if(o!=null)o.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_1,w)},
ai8(){var x=0,w=A.j(y.H),v,u=this,t
var $async$ai8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.aag("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$ai8)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ai8,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.J,n=o?C.js:C.pZ,m=o?C.c:C.M,l=A.eH(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.ms
else if(q.e==null)x=A.at(new A.D(C.eu,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aD.j(o?0.35:0.12)
w=A.a([w,C.aK.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.J(C.aD.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.x(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,I.a44,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.i,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a9(C.a5,C.a8,C.x,w,p,p),C.n),p,p,p,p,X.akb,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aD.j(0.2),C.dq,24)],y.V)
s=q.e
s.toString
r=A.ce(A.x(A.a([x,C.mX,w,C.kQ,new A.ex(A.p(p,A.pX(p,p,!1,B.hJN(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bQ,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kQ,A.B(A.a([A.E(A.et(M.Cx,C.V2,q.gc8w(),p),1),C.at,A.E(A.dl(C.z4,C.aa_,q.gc8x(),A.bo(C.aD,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.i,0,p,p),C.W,new A.a7(1/0,p,A.et(L.a2o,D.fJd,q.gcvg(),p),p)],r),C.m,p,C.e,C.i,0,C.p),C.t,p,C.y,p,T.Nu,p,p,C.ah)
x=r}return A.c7(l,n,x,p,!1,!1,p,p)}}
B.Vf.prototype={
T(){return new B.aDT(new A.as(C.as,$.aw()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.aDT.prototype={
Z(){var x,w
this.a2()
x=this.a.e
w=B.IJ(x==null?"":x)
if(w!=null)this.d.saX(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a1()},
a_2(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.IJ(u.d.a.a)
if(t==null){u.m(new B.dUY(u))
x=1
break}u.m(new B.dUZ(u))
s=u.a
r=s.c
x=3
return A.b(B.a77(s.d,new B.dV_(u),t,r),$async$a_2)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dV0(u))
if(q){s=u.c
s.toString
A.a4(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_2,w)},
a2e(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2e=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cs(r.a.d)){x=1
break}r.m(new B.dV1(r))
u=4
q=J.fq(r.a.d)
x=7
return A.b(B.rz(r.a.c,q),$async$a2e)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dV2(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.ahX(p,m,l,j,k),$async$a2e)
case 8:o=e
if(r.c!=null)r.m(new B.dV3(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ab(h)
if(r.c!=null)r.m(new B.dV4(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dV5(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2e,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.J,i=j?D.agn:D.ae5,h=j?D.ai_:C.c,g=j?C.aP:C.M,f=j?C.bM:C.al,e=j?D.afn:C.aL
i=[i,e,h,g,f,j?C.ff:C.bP]
x=A.P(d).ax.a===C.J
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eH(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c1(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.c1(C.A,0.5,C.x,k,0,A.a([C.aD.j(x?0.12:0.08),C.aD.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.J(i[1],C.r,1)
r=y.p
t=A.p(k,A.B(A.a([A.p(k,D.bSM,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a9(C.ay,C.aE,C.x,A.a([i[5].j(0.85),C.aD],e),k,k),C.n),k,52,k,k,k,k,k,52),C.er,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.au,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.i,0,C.p),1)],r),C.m,k,C.e,C.i,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fk,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,I.a44,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uw(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bjF()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Y,u==null,k,!0,C.t,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.Np,k,k,"",k,!0,new A.b5(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b5(4,A.m(18),new A.ay(C.aD,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.aj,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dV6(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.mj,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.J(i[1],C.r,1)
m=J.LG(l.a.d,4)
m=A.C(new A.N(m,new B.dV7(x,new A.aGS(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.l2,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a7,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bv,s,C.O,e,C.O,q,C.d4,p,C.O,A.p(k,A.x(m,C.m,k,C.e,C.i,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eA,k,k,k)],r)
if(l.r!=null){u=C.aD.j(x?0.16:0.1)
t=A.m(14)
s=A.J(C.aD.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.f5P)
else q.push(A.X(C.lD,i[5],k,k,k,16))
q.push(C.at)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aN,A.dd(k,A.B(q,C.m,k,C.e,C.i,0,k,k),k,k,C.b6,new A.o(u,k,s,t,k,k,C.n),C.iy,k,k,k,C.eR,k,k,k)],r))}e=A.E(A.ce(A.x(e,C.ak,k,C.e,C.i,0,C.p),C.t,k,C.y,k,D.bAT,k,k,C.ah),1)
u=l.f?k:l.gcvh()
t=i[3]
s=i[1]
q=A.m(16)
s=A.et(L.a2o,D.fKi,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.ck,k,new A.b7(q,C.a0),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc8y()
t=A.bo(C.aD,k,k,0,C.c,k,C.nn,k,new A.b7(A.m(16),C.a0),k,k,k)
return A.c7(g,h,new A.an(C.a_,k,C.ab,C.t,A.a([f,v,A.bl(!0,A.ls(new B.dV8(),A.x(A.a([e,new A.D(D.bAn,A.x(A.a([s,C.O,i,C.ae,A.bH(l.f?C.t5:D.fIz,k,u,t)],r),C.ak,k,C.e,C.i,0,C.p),k)],r),C.m,k,C.e,C.i,0,C.p),C.cu,C.ZG,k,k,new A.bp(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bjF.prototype={
oI(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fg(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.hk(C.bx,v.length),C.aO)}}
B.Vc.prototype={
T(){return new B.aDR()}}
B.aDR.prototype={
Z(){var x,w,v,u=this
u.a2()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aP()
u.d=new A.as(new A.bb(w,C.b3,C.aO),v)
x=x.d
u.e!==$&&A.aP()
u.e=new A.as(new A.bb(x,C.b3,C.aO),v)
u.f!==$&&A.aP()
u.f=new A.as(C.as,v)},
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
w.a1()},
aer(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$aer=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dTQ(r))
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
return A.b(B.a7c(p,m,n,o,C.a.i(l).length===0?null:l),$async$aer)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.K(y.q).f.U(D.faO)
s=[1]
x=4
break}p.K(y.q).f.U(D.f9r)
p=r.c
p.toString
A.a4(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dTR(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aer,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.J?C.js:C.pZ,q=A.eH(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fB2,s,s,s,1,s,!0),p=A.p(s,D.bsA,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Hq,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),o,s,s,s,s,s,2,D.bZT,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),x,s,s,s,s,s,2,D.bZO,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Y,!1,s,!0,C.t,s,A.aN(),w,s,s,s,s,s,2,D.c_3,C.y,!0,s,!0,s,!1,s,C.aj,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a3,s,C.ao,s,s,s,s)
v=t.r?s:t.gc8z()
u=A.bo(C.aD,s,s,s,s,C.h_,s,s,s,s,s,s)
return A.c7(q,r,A.ce(A.x(A.a([p,C.d4,o,C.ae,x,C.ae,w,C.mX,A.bH(t.r?C.t5:C.aUo,s,v,u)],y.p),C.ak,s,C.e,C.i,0,C.p),C.t,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.ac8.prototype={}
B.bwc.prototype={
a52(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a52=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gL(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ck(r.aoI()))
x=3
return A.b(B.Ru(t,s),$async$a52)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a52,w)},
gcZ(){return this.a}}
B.NG.prototype={
a5(){return"NgmyDocShareQrMode."+this.b}}
B.Zo.prototype={
T(){return new B.azR(new A.as(C.as,$.aw()),A.k2(!0,null,!0,!0,null,null,!1))}}
B.azR.prototype={
Z(){this.a2()
$.aV.x1$.push(new B.d84(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a1()},
c8F(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a4(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a1u(d),u=x.a.c,t=u?C.it:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.js:v.a[0],p=A.m(24),o=A.J(C.aD.j(0.35),C.r,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aD.j(u?0.25:0.12),C.fZ,32)],n),l=A.p(w,S.apV,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aD.j(0.4),C.cx,16)],n),C.aqH,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uw(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bvP()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Y,!1,w,!0,C.t,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.G4,w,w,"",w,!0,new A.b5(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b5(4,A.m(16),D.b1F),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.aj,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d82(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.mj,w,w,w,w)
f=f[1]
f=A.E(A.dI(C.nJ,new B.d83(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.ck,w,new A.b7(A.m(14),C.a0),new A.ay(f,1,C.r,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aD.j(0.35),C.cH,12)],n)
g=y.p
return A.eS(w,C.K,new A.cU(P.Lb,A.c2(new A.D(C.yi,A.x(A.a([l,C.aN,k,C.O,j,C.dS,i,C.dS,A.B(A.a([f,C.at,A.E(A.c2(A.aG(!1,C.a2,!0,w,A.aO(!1,A.m(14),!0,D.el4,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc8E(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ai),new A.o(w,w,w,h,n,K.P9,C.n),C.bg),2)],g),C.m,w,C.e,C.i,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bg),w),w,w,w,C.Nx,C.d8,w,w,w)}}
B.bvP.prototype={
oI(d,e){return e.ali(e.a.toUpperCase())}}
B.Vd.prototype={
T(){return new B.aDS(A.a([],y.r),A.aY(y.N))},
gcZ(){return this.c}}
B.aDS.prototype={
Z(){var x=this
x.a2()
x.tX()
x.w=A.dg(C.jx,new B.dUW(x))},
q(){var x=this.w
if(x!=null)x.a4(0)
B.Vm()
this.a1()},
a15(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a15=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NF(u.a.c),$async$a15)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.AQ(u.a.c),$async$a15)
case 4:u.m(new s.dUj(u,e))
u.i7("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a15,w)},
tX(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.NF(u.a.c),$async$tX)
case 3:t=e
x=4
return A.b(B.AQ(u.a.c),$async$tX)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dUk(u,s))
if(t>0)u.i7("Received "+A.w(t)+" file(s) via My Code.")
u.NQ(u.d)
B.BR(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tX,w)},
NQ(d){return this.bDz(d)},
bDz(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$NQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a7h(r,u.a.c),$async$NQ)
case 8:p=f
if(u.c==null){x=1
break}new B.dTT(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a0(r.c,"video/")||r.mx(D.mO))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Vk(r,u.a.c),$async$NQ)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.M)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.AQ(u.a.c),$async$NQ)
case 12:u.m(new o.dTU(u,f))
case 1:return A.h(v,w)}})
return A.i($async$NQ,w)},
Od(d){return this.bJP(d)},
bJP(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Od=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a7h(d,u.a.c),$async$Od)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dTZ(u,d,t))
x=6
return A.b(A.fH(new A.fB(t)),$async$Od)
case 6:u.i7("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fH(new A.fB(r.toUpperCase())),$async$Od)
case 7:u.i7("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Od,w)},
i7(d){var x=null,w=this.c
if(w==null)return
w.K(y.q).f.U(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Z,x,x,x,x,x,x,x,x,x,x))},
tY(d,e){return this.cFV(d,e)},
cFV(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tY=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dUK(r,e))
u=3
x=6
return A.b(d.$0(),$async$tY)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dUL(r))
$.eW.ms()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tY,w)},
gaVR(){var x=this.a
return x.f||x.r||x.w},
Ik(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$Ik=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaVR()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.cbJ(s,n,r,q,o,t),$async$Ik)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.i7("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fF9(o,u.a.c),$async$Ik)
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
return A.b(B.Df(s,o,r,q,n,t),$async$Ik)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ik,w)},
a09(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a09=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.apH(u.a.c),$async$a09)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.i7("No organization portal found.")
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
return A.b(A.a4(t,!1).cc(A.dX(new B.dUg(u,r,q),!1,null,y.H)),$async$a09)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a09,w)},
a1f(d){return this.coO(d)},
coN(){return this.a1f(1)},
coO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1f=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaVR()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.apE(u.a.c),$async$a1f)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1f,w)},
ack(d,e,f){return this.c_G(d,e,f)},
c_G(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ack=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7(e)
x=1
break}x=3
return A.b(u.tY(new B.dUd(u,d,null,e,f),"Uploading\u2026"),$async$ack)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ack,w)},
bDH(){B.hup(!1,new B.dTX(this))
return},
ctR(){this.m(new B.dUo(this))},
az0(){var x=0,w=A.j(y.H),v=this
var $async$az0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bDH()
return A.h(null,w)}})
return A.i($async$az0,w)},
acg(){var x=0,w=A.j(y.H),v=this
var $async$acg=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tY(new B.dU2(v),"Importing\u2026"),$async$acg)
case 2:return A.h(null,w)}})
return A.i($async$acg,w)},
Sz(d){return this.cFg(d)},
cFg(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Sz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mx(D.mO)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.dX(new B.dUH(u,d),!1,null,y.H)),$async$Sz)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mx(D.R5)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a4(t,!1).cc(A.dX(new B.dUI(u,d),!1,null,y.H)),$async$Sz)
case 8:x=1
break
case 7:x=u.c0m(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a4(t,!1).cc(A.dX(new B.dUJ(u,d),!1,null,y.H)),$async$Sz)
case 11:x=1
break
case 10:u.i7("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Sz,w)},
c0m(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oM(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cNm,C.a.b7(x,w+1).toLowerCase())},
afV(d){return this.cfG(d)},
cfG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$afV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mx(D.mO)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a4(t,!1).cc(A.dX(new B.dUe(u,d),!1,null,y.H)),$async$afV)
case 5:x=1
break
case 4:u.m(new B.dUf(u,d))
case 1:return A.h(v,w)}})
return A.i($async$afV,w)},
RV(d){return this.cwL(d)},
cwL(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$RV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.i7("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pf(t,s.c,s.f),$async$RV)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tY(new B.dUA(u,d),"Preparing QR\u2026"),$async$RV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$RV,w)},
aiz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$aiz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dUB(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dUC(q),s),s.k("L.E"))
if(r.length===0){u.i7("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.RV(r),$async$aiz)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aiz,w)},
ais(d){return this.cwi(d)},
cwi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ais=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1u(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dUu(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ais)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Sz(d)
break
case"qr":u.RV(A.a([d],y.r))
break
case"send_my_code":u.cgi(A.a([d],y.r))
break
case"save":u.ahO(d)
break
case"delete":u.J9(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ais,w)},
XU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$XU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dU_(),A.T(t).k("N<1,n>")).fH(0)}t=u.d
s=A.T(t).k("Z<1>")
r=A.C(new A.Z(t,new B.dU0(q),s),s.k("L.E"))
if(r.length===0){u.i7("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.pf(t,s.c,s.f),$async$XU)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tY(new B.dU1(u,r),"Preparing file\u2026"),$async$XU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$XU,w)},
ah_(d){return this.cn9(d)},
cn9(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ah_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hvg(d,!1),$async$ah_)
case 3:s=f
r=s==null
q=B.a7e(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.i7("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ah_,w)},
ag0(){var x=0,w=A.j(y.H),v=this,u
var $async$ag0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fMP(u,v.a.c),$async$ag0)
case 2:return A.h(null,w)}})
return A.i($async$ag0,w)},
bDG(){B.hup(!1,new B.dTW(this,null))
return},
Jo(d,e){return this.cgj(d,e)},
b13(d){return this.Jo(null,d)},
cgi(d){return this.Jo(d,null)},
cgj(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$Jo=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("Z<1>")
k=A.C(new A.Z(p,new B.dUh(s),o),o.k("L.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xq.ca().anZ(!0,C.a0t,!1),$async$Jo)
case 10:r=g
if(r==null||J.cs(r.a)){x=1
break}x=11
return A.b(s.tY(new B.dUi(l,s,r),"Preparing\u2026"),$async$Jo)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ab(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.i7("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.i7("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bE6(p,l,e,s.a.c),$async$Jo)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jo,w)},
IA(d){return this.c_t(d)},
c_t(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IA=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hJM(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b13(t),$async$IA)
case 8:x=6
break
case 7:u.i7("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.i7("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tY(new B.dUb(u,d),"Receiving video\u2026"),$async$IA)
case 11:x=1
break
case 10:x=12
return A.b(u.tY(new B.dUc(u,d),"Receiving\u2026"),$async$IA)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IA,w)},
Ep(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Ep=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.D9()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ah_(t),$async$Ep)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IA(s),$async$Ep)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.dX(new B.dUm(u),!1,null,y.N)),$async$Ep)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tX(),$async$Ep)
case 10:x=1
break
case 9:x=11
return A.b(u.IA(C.a.i(r)),$async$Ep)
case 11:case 1:return A.h(v,w)}})
return A.i($async$Ep,w)},
ahO(d){return this.csn(d)},
csn(d){var x=0,w=A.j(y.H),v=this
var $async$ahO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tY(new B.dUl(v,d),"Saving\u2026"),$async$ahO)
case 2:return A.h(null,w)}})
return A.i($async$ahO,w)},
J9(d){return this.bM9(d)},
bM9(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$J9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.lc(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$J9)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.cbM(t),$async$J9)
case 6:case 5:s=d.a
x=7
return A.b(B.EN(u.a.c,s),$async$J9)
case 7:u.r.W(0,s)
x=8
return A.b(u.tX(),$async$J9)
case 8:case 1:return A.h(v,w)}})
return A.i($async$J9,w)},
aiF(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aiF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a1u(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.K,null,new B.dUG(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$aiF)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ag0()
break
case"import":u.acg()
break}case 1:return A.h(v,w)}})
return A.i($async$aiF,w)},
c8C(d){var x=d.c
if(C.a.a0(x,"video/")||d.mx(D.mO))return C.qq
if(C.a.a0(x,"image/")||d.mx(D.R5))return C.ul
if(C.a.t(x,"pdf"))return E.OF
return D.anJ},
B(d){var x,w,v=this,u=null,t=B.a1u(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Hi,u,u,u,new B.dUR(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bTk,u,u,u,v.e?u:v.gcg_(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gctQ()
n.push(A.aH(u,u,u,u,A.X(v.r.a===x?D.bNx:E.ao7,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a2l,u,u,u,v.e?u:v.gc8D(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.on,u,u,u,v.e?u:v.gb29(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bV4,u,u,u,v.e?u:new B.dUS(v),u,u,u,u,"More options",u))
q=A.eH(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lO(new B.dUT(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c1(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.J?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.c1(C.A,0.5,C.x,u,0,A.a([C.aD.j(A.P(d).ax.a===C.J?0.12:0.08),C.aD.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.ll(s[1].j(0.5),u,C.aD,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.azO(C.jC,s,!0,t,w?u:v.gcwM(),u),1)
x.push(new A.D(D.bz6,A.ls(new B.dUU(),A.B(A.a([s,C.at,A.E(new B.azO(C.um,"Export",!1,t,w?u:v.gbPV(),u),1)],o),C.m,u,C.e,C.i,0,u,u),C.cu,C.iT,u,u,new A.bp(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.beh(t,v.e?u:v.gb29(),u)
else s=A.k4(!0,u,u,new B.dUV(v,t),s,u,D.byZ,u,u,!1,!1)
x.push(A.E(s,1))
return A.c7(q,r,new A.an(C.a_,u,C.ab,C.t,A.a([p,n,A.x(x,C.m,u,C.e,C.i,0,C.p)],o),u),u,!1,!1,u,u)}}
B.azO.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bo(C.aD,t,t,0,C.c,t,C.vS,t,new A.b7(s,C.a0),t,t,t)
return A.dl(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ch,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.vS,t,new A.b7(s,C.a0),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.et(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.f1,t,t,t),u.r,v)}}
B.beh.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aD.j(0.16)],y.O),t=A.J(v[5].j(0.35),C.r,1),s=y.i
return A.at(A.ls(new B.d80(),new A.D(E.a_y,A.x(A.a([A.ls(new B.d81(),A.p(x,A.X(C.yH,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a9(C.ay,C.aE,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.et,C.hr,x,x,new A.bp(0.86,1,w),s),C.dS,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.dS,A.dl(C.on,D.fNV,this.d,A.bo(C.aD,x,x,x,C.c,x,C.Nv,x,new A.b7(A.m(16),C.a0),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cu,C.BB,x,x,new A.bp(0,1,w),s),x,x,x)}}
B.acs.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dE(0,0,0,380+C.o.E(k.c*45,0,360),0,0)
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
if(!o||i.mx(D.mO))p=D.dmk
else{p=C.a.a0(p,"image/")||i.mx(D.R5)
n=y.O
p=p?A.a([C.cO,C.aD],n):A.a([C.aK.j(0.85),C.aD.j(0.7)],n)}p=A.p(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a9(C.ay,C.aE,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a1,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaq9()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mx(D.mO))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bd,A.E(A.x(A.a([q,C.au,A.d(C.d.aH(n," \xb7 "),j,2,C.a1,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.i,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.X(C.fP,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cd))
if(!(!o||i.mx(D.mO)))l.push(A.fXT(C.aD,!1,j,j,j,!1,j,j,new B.d8n(k),j,j,new A.b7(A.m(5),C.a0),j,j,!1,u))
x=A.X(C.oh,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cd))
return A.ls(new B.d8o(),new A.D(C.ec,A.aG(!1,C.a2,!0,j,A.aO(!1,r,!0,new A.D(C.a_1,A.B(l,C.m,j,C.e,C.i,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.ay(t,s,C.r,-1)),j,j,C.ai),j),C.cu,h,new A.c0("docshare_row_"+i.a,y.aw),j,new A.bp(0,1,y.X),y.i)}}
B.Zq.prototype={
T(){return new B.azT()},
gcZ(){return this.c}}
B.azT.prototype={
Z(){this.a2()
this.xY()},
q(){B.hK0(this.e)
this.a1()},
xY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rz(o.c,o.d),$async$xY)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gan(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hK3(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hK2(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d8k(s))
x=1
break}s.m(new B.d8l(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ab(l)
if(s.c==null){x=1
break}s.m(new B.d8m(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xY,w)},
a2d(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2d=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rz(t.c,t.d),$async$a2d)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(D.f7Q)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.ahX(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2d)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2d,w)},
c_m(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kv(u,C.A,v,new B.d8i(w,t),C.h6,C.dw,!0,v,v,v,v)
else if(t!=null&&!C.aG.gan(t))x=A.fQ(t,C.A,v,new B.d8j(w),C.h6,C.dw,!0,v,!1,v,v)
else return C.bJ
return A.uF(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a1u(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Cy,u,u,u,v.gb5V(),u,u,u,u,"Share / save",u))
r=A.eH(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.EM
else{q=v.r
if(q!=null)t=new A.D(C.eu,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.c9(w,".heic")||C.a.c9(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.eu,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aN,A.dl(C.Cy,D.fwl,v.gb5V(),A.bo(C.aD,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.c_m()}return A.c7(r,s,A.at(t,u,u,u),u,!1,!1,u,u)}}
B.Zn.prototype={
T(){return new B.azQ(A.aiL(),C.bF,C.bF)},
gcZ(){return this.c}}
B.azQ.prototype={
Z(){var x,w,v=this
v.a2()
x=v.d
w=x.CW
new A.fw(w,A.a6(w).k("fw<1>")).iq(new B.d7Y(v))
x.gcTz().iq(new B.d7Z(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fw(x,A.a6(x).k("fw<1>"))}if(x==null)x=C.b7S
x.iq(new B.d8_(v))
v.xY()},
xY(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xY=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rz(p.c,p.d),$async$xY)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d7R(s))
x=1
break}x=8
return A.b(s.d.Ch(0,new A.a3x(r,s.a.d.c)),$async$xY)
case 8:if(s.c==null){x=1
break}s.m(new B.d7S(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ab(n)
if(s.c==null){x=1
break}s.m(new B.d7T(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xY,w)},
a_3(){var x=0,w=A.j(y.H),v=this,u
var $async$a_3=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h8(0),$async$a_3)
case 5:x=3
break
case 4:x=6
return A.b(u.it(0),$async$a_3)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_3,w)},
aTG(d){var x=d.a
return C.a.aU(C.o.u(C.o.ao(x,6e7)%60),2,"0")+":"+C.a.aU(C.o.u(C.o.ao(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a1()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a1u(d),m=C.o.ao(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eH(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.EM
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bOA,C.f,o,o,new A.o(o,o,o,A.m(24),o,K.P9,C.n),o,88,o,o,o,o,o,88)
t=A.kO(C.aD,o,o,m,0,new B.d7U(p),C.o.E(C.o.ao(p.w.a,1000),0,m))
x=A.d(p.aTG(p.w)+" / "+p.aTG(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a7,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bo(C.aD,o,o,o,o,D.f4h,o,o,o,o,o,o)
r=p.f
q=A.X(r?H.yP:C.i1,o,o,o,o,o)
x=A.x(A.a([u,C.kQ,t,x,C.d4,A.dl(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc8G(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c7(v,w,A.at(new A.D(C.qd,x,o),o,o,o),o,!1,!1,o,o)}}
B.PX.prototype={
T(){return new B.azW()},
gcZ(){return this.c}}
B.azW.prototype={
Z(){this.a2()
this.PS()},
PS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$PS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h_b(o.c,o.d,new B.d8B(s)),$async$PS)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d8C(s))
x=1
break}s.e=r
q=N.i67(r)
if(q==null){s.m(new B.d8D(s))
x=1
break}s.d=q
q.aS(0,s.gb0R())
x=8
return A.b(q.ip(0).da(0,C.rl),$async$PS)
case 8:if(s.c==null){x=1
break}s.m(new B.d8E(s))
x=9
return A.b(q.q8(0),$async$PS)
case 9:q.tC(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ab(m)
if(s.c==null){x=1
break}s.m(new B.d8F(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$PS,w)},
ceg(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d8G(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.D5(0,x.gb0R())
w=x.d
if(w!=null)w.q()
B.ig3(x.e)
x.a1()},
aeu(){var x=0,w=A.j(y.H),v=this,u,t
var $async$aeu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b_D(u.c,u.d),$async$aeu)
case 2:t=e
u=v.c
if(u!=null)u.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$aeu,w)},
B(d){var x,w,v,u=this,t=null,s=B.a1u(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eH(A.a([A.aH(t,t,t,t,C.om,t,t,t,u.gc8A(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.il(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.EM
else{q=u.r
if(q!=null)s=new A.D(C.eu,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aif(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fD(x,new A.an(C.A,t,C.ab,C.t,A.a([new A.Al(s,t),A.aB(t,A.Dq(A.p(t,A.X(q?H.yP:C.i1,C.c,t,t,t,48),C.f,t,t,new A.o(C.aT,t,t,v,t,t,C.n),t,t,t,t,C.bQ,t,t,t),C.b6,C.a2,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d8I(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bJ}}return A.c7(p,r,A.at(s,t,t,t),t,!1,!1,t,t)}}
B.Zs.prototype={
T(){return new B.azU(new A.cB(null,y.A))}}
B.azU.prototype={
gcFC(){var x,w,v=this.a
if(v.e!==D.Ss)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcFe(){var x,w,v=this.a
if(v.e!==D.zJ)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b7(x,13))
if(C.a.a0(w,"VT"))return w
return null},
Z(){var x,w,v=this
v.a2()
x=v.gcFC()
if(x!=null){v.QW(x)
v.e=A.dg(Q.FX,new B.d8x(v,x))}w=v.gcFe()
if(w!=null){v.QV(w)
v.f=A.dg(C.fA,new B.d8y(v,w))}},
q(){var x=this.e
if(x!=null)x.a4(0)
x=this.f
if(x!=null)x.a4(0)
this.a1()},
QV(d){return this.cll(d)},
cll(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.apM(d),$async$QV)
case 3:t=f
x=4
return A.b(B.cc4(d),$async$QV)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d8p(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$QV,w)},
QW(d){return this.clm(d)},
clm(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$QW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fNr(d),$async$QW)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bC0(t),$async$QW)
case 4:if(u.c==null){x=1
break}u.m(new B.d8q(u))
u.c.K(y.q).f.U(D.aRc)
case 1:return A.h(v,w)}})
return A.i($async$QW,w)},
gc4s(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc8B(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2_(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.D9()){t=u.c
if(t!=null)t.K(y.q).f.U(D.faY)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a4(t,!1).cc(A.dX(new B.d8r(),!1,null,y.N)),$async$a2_)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bC0(s),$async$a2_)
case 4:t=u.c
if(t!=null)t.K(y.q).f.U(D.aRc)
case 1:return A.h(v,w)}})
return A.i($async$a2_,w)},
aab(d){return this.bJQ(d)},
bJQ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aab=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fH(new A.fB(C.d.aH(t,", "))),$async$aab)
case 3:if(d.e!=null){t=d.K(y.q).f
t.U(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aab,w)},
aes(d){return this.bJA(d)},
bJA(d){var x=0,w=A.j(y.H),v=this
var $async$aes=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fH(new A.fB(v.a.c)),$async$aes)
case 2:if(d.e!=null)d.K(y.q).f.U(D.f8j)
return A.h(null,w)}})
return A.i($async$aes,w)},
a1U(d){return this.csq(d)},
csq(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a1U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.aoK(s.d,4),$async$a1U)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.t4(r,"ngmy_doc_share_qr.png"),$async$a1U)
case 8:q=f
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ab(n)
if(d.e!=null)d.K(y.q).f.U(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Z,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a1U,w)},
gaX0(){var x,w=this.a
if(w.e!==D.Iu)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b7(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b7(x,13))
return null},
aa8(d){return this.bJJ(d)},
bJJ(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aa8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaX0()
if(t==null){x=1
break}x=3
return A.b(A.fH(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$aa8)
case 3:if(d.e!=null)d.K(y.q).f.U(D.f9Y)
case 1:return A.h(v,w)}})
return A.i($async$aa8,w)},
aet(){var x=0,w=A.j(y.H),v=this,u
var $async$aet=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Vm(),$async$aet)
case 2:u=v.c
if(u!=null)A.a4(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$aet,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a1u(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aq(h,0,44)+"\u2026"
i=i.e
i=i!==D.Iu&&i!==D.Ss&&i!==D.zJ
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eH(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Iu||t===D.Ss||t===D.zJ?l:A.aH(l,l,l,l,C.lc,l,l,l,m.gaZX(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.J(C.aD.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.O,A.pX(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bv,A.d(""+q.d+" file(s) \xb7 "+m.gc4s(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Iu){t=C.aD.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mG,l,l,l)],p))}q.push(C.aN)
q.push(A.d(m.gc8B(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gI(t):"Type-in codes: "+C.d.aH(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bYW,D.fFO,new B.d8s(m,d),l)],p))}if(m.a.e===D.Iu&&m.gaX0()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a7,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hr(D.bVo,D.fCq,new B.d8t(m,d),l)],p))
if(m.a.e===D.zJ){x=(m.w?C.dD:C.aD).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.ac(C.k.E(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.EP:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mG,l,l,l)],p))}if(m.a.e===D.Ss){x=(m.r?C.dD:C.aD).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.EP:C.aD,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mG,l,l,l),C.ae,A.dl(D.bR2,D.fIV,m.gcsO(),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.ow(i,A.c7(v,w,new A.D(C.a9,A.x(A.a([A.E(A.p(l,A.x(q,C.m,l,C.b8,C.i,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ae,A.B(A.a([A.E(A.et(M.Cx,C.V2,new B.d8u(m,d),l),1),C.at,A.E(A.dl(C.z4,C.aa_,new B.d8v(m,d),A.bo(C.aD,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.i,0,l,l),C.O,new A.a7(1/0,l,A.bH(C.Aj,l,m.gaZX(),A.bo(C.aK,l,l,l,l,C.h_,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.i,0,C.p),l),l,!1,!1,l,l),new B.d8w(),y.C)}}
B.acq.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.ce(A.x(A.a([w,C.aN,A.p(x,A.pX(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bB,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.en(A.a([A.bH(C.wX,x,new B.d7Q(d),x)],u),x,x,C.n5,v,x,x,x,x,D.fvk,x)}}
B.Zm.prototype={
T(){return new B.azP(A.zv(C.xZ,C.nP,C.uA))}}
B.azP.prototype={
q(){this.d.q()
this.a1()},
axF(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a0(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a4(x,!1).O(t)
return}}},
B(d){var x=null
return A.c7(A.eH(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fCW,x,x,x,1,x,!0),C.w,A.zu(this.d,C.bV,this.gaxE()),x,!1,!1,x,x)}}
B.Zt.prototype={
T(){return new B.azV(A.zv(C.xZ,C.nP,C.uA))},
gcZ(){return this.c}}
B.azV.prototype={
c0o(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
agn(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.M8("text/plain"),$async$agn)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.K(y.q).f.U(D.faS)
x=1
break}s=u.c
if(s!=null)A.a4(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$agn,w)},
aaY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$aaY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hvg(p,!0),$async$aaY)
case 3:t=e
p=t==null
s=B.a7e(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.K(y.q).f.U(D.f7q)
x=1
break}p=u.c
if(p!=null)A.a4(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$aaY,w)},
q(){this.d.q()
this.a1()},
axF(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.M)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c0o(t))continue
s.e=!0
x=s.c
x.toString
A.a4(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.ap1,v,v,v,w.gbPr(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a2s,v,v,v,w.gciJ(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eH(A.a([u,t,A.aH(v,v,v,v,A.X(w.f?C.uh:O.Ot,v,v,v,v,v),v,v,v,new B.d8A(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fJO,v,v,v,1,v,!0)
u=A.zu(w.d,C.bV,w.gaxE())
x=A.m(20)
return A.c7(t,C.w,new A.an(C.a_,v,C.ab,C.t,A.a([u,A.at(A.p(v,v,C.f,v,v,new A.o(v,v,A.J(C.aK,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.eqZ],s),v),v,!1,!1,v,v)}}
B.bei.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.oZ
else x=s.w?C.aD:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aD.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.oZ:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a2,!0,r,A.aO(!1,w,!0,new A.D(C.a_E,A.B(A.a([u,C.bd,A.E(A.x(t,C.E,r,C.e,C.i,0,C.p),1),A.X(C.eE,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.i,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ai)}}
B.a9E.prototype={
a5(){return"RTCDataChannelState."+this.b}}
B.OL.prototype={
a5(){return"RTCSignalingState."+this.b}}
B.Xq.prototype={
a5(){return"RTCIceGatheringState."+this.b}}
B.OK.prototype={
a5(){return"RTCPeerConnectionState."+this.b}}
B.Fg.prototype={
a5(){return"RTCIceConnectionState."+this.b}}
B.co8.prototype={}
B.Ff.prototype={}
B.a9D.prototype={}
B.au7.prototype={}
B.Xr.prototype={}
var z=a.updateTypes(["aA<~>()","R(jq)","n(jq)","Vd(Y)","~()","Zp(Y)","H(H,jq)","PX(Y)","~(m9)","cu(Ff)","aA<jq?>(@)","Vb(Y)","Vf(Y)","D(jq)","jq(@)","a8<n,@>(jq)","Zo(Y)","Vc(Y)","Zq(Y)","Zn(Y)","Zs(Y)","acq(Y)","ai<jq>()","Zt(Y)","acs(Y,H)","Zm(Y)","a8<n,aD>(jq)","cu(Xq)","cu(a9D)","aA<cu>(Ff)"])
B.co4.prototype={
$1(d){var x=this.a
x.x=D.aOh
x.y.M(0,D.aOh)},
$S:72}
B.co5.prototype={
$1(d){var x=this.a
x.x=D.aOg
x.y.M(0,D.aOg)},
$S:72}
B.co6.prototype={
$1(d){var x=this.a
x.ahH(A.aPv(d.data)).bM(new B.co3(x),y.b)},
$S:72}
B.co3.prototype={
$1(d){var x=this.a
x.z.M(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.co7.prototype={
$1(d){},
$S:72}
B.coa.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hOL(d.channel))},
$S:15}
B.cob.prototype={
$1(d){},
$S:15}
B.coc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i79(w.iceConnectionState)
x.cx=w
if($.h8e())switch(w.a){case 0:x.cy=D.aOm
break
case 1:x.cy=D.aOn
break
case 3:x.cy=D.aOo
break
case 5:x.cy=D.aOk
break
case 6:x.cy=D.aOl
break
case 7:x.cy=D.a7N
break
default:break}},
$S:149}
B.cod.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.i7a(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:149}
B.coe.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.ihy(w.signalingState)},
$S:149}
B.cof.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.ifL(w.connectionState)},
$S:149}
B.cog.prototype={
$1(d){},
$S:149}
B.coh.prototype={
$1(d){},
$S:15}
B.fom.prototype={
$1(d){var x=y.F.a(new A.rV([],[]).pN(d.target.result,!1)),w=C.y_.t(x.objectStoreNames,"blobs")
if(!w)C.xW.L0(x,"blobs")},
$S:192}
B.fMD.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wq.fl(this.b)
$.eW.ms()
this.c.$1(d)},
$S:445}
B.fMF.prototype={
$1(d){return this.a.$1(B.hXJ(this.b,this.c))},
$S:33}
B.fME.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:33}
B.fMC.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fMS.prototype={
$1(d){var x=this
return B.hkv(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fMT.prototype={
$1(d){var x=this
return B.hkv(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fqS.prototype={
$1(d){var x=this
return B.cbG(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d88.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d85.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbG(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d87.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbG(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d86.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.cbG(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d8a.prototype={
$4(d,e,f,g){var x=null
return A.jP(A.B(A.a([A.aH(x,x,x,x,D.bPF,x,x,x,new B.d89(d),x,x,x,x,x,x),A.E(A.F2(D.QP,!0,x,C.a1u,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.i,0,x,x),D.QP,x,g,C.akX,0,e,f)},
$C:"$4",
$R:4,
$S:414}
B.d89.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fsR.prototype={
$1(d){var x,w,v=null,u=A.aJ(d,C.eM,y.o).w,t=this.a,s=t?C.it:C.c,r=A.m(28),q=A.p(v,D.bsV,C.f,v,v,D.b3j,v,v,v,v,D.akN,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aP
o=A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bTU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aP
w=y.p
return new A.D(new A.Q(0,0,0,u.f.d),A.p(v,A.x(A.a([q,new A.D(C.G9,A.x(A.a([o,C.ae,A.aM(v,C.Y,!1,v,!0,C.t,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b5(4,A.m(16),C.a0),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.aph,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.aj,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a3,v,C.ao,v,v,v,v),C.bv,A.B(A.a([A.E(A.dI(C.di,new B.fsP(d),v),1),C.at,A.E(A.bH(D.fBr,v,new B.fsQ(p,x,d),A.bo(C.b_,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.i,0,v,v)],w),C.m,v,C.e,C.i,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Nc,v,v,v,v),v)},
$S:58}
B.fsP.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.fsQ.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.K(y.q).f.U(D.f8A)
return}x=w.b.a.a
A.a4(w.c,!1).O(new B.aCu(v,x))},
$S:0}
B.ftk.prototype={
$1(d){var x=this,w=null,v=A.aJ(d,C.eM,y.o).w,u=x.a,t=u?C.it:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.Q(0,0,0,v.f.d),A.p(w,A.x(A.a([A.p(w,D.bsK,C.f,w,w,D.b4N,w,w,w,w,D.akN,w,w,1/0),new A.D(C.G9,A.x(A.a([A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),r,w,w,w,w,w,2,B.h4g(u,"Organization name",C.GA,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),q,w,w,w,w,w,2,B.h4g(u,"Access code",C.nr,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Y,!1,w,!0,C.t,w,A.aN(),p,w,w,w,w,w,2,B.h4g(u,"Member password",G.Hd,w),C.y,!0,w,!0,w,!1,w,C.aj,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a3,w,C.ao,w,w,w,w),C.bv,A.bH(D.fJV,w,new B.ftj(r,q,p,d),A.bo(C.aD,w,w,w,w,C.h_,w,w,w,w,w,w))],o),C.m,w,C.e,C.i,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Nc,w,w,w,w),w)},
$S:58}
B.ftj.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.K(y.q).f.U(D.f8F)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a4(v.d,!1).O(new B.aFC(u,x,w))},
$S:0}
B.cbx.prototype={
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
p=C.a.a0(j,"http")?A.cG(j,0,null):s.b.aT(j)
u=4
x=7
return A.b(A.vr(p,null).da(0,C.ZF),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ck(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.BS(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
$.am.$1("[doc share lan web] "+A.w(r)+": "+A.w(m))
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
B.cbD.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cbE.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.cbF.prototype={
$1(d){return d.b},
$S:z+2}
B.cbz.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cbA.prototype={
$1(d){return d.b},
$S:z+2}
B.cby.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cbB.prototype={
$1(d){var x=J.r(d,"status")
return!J.A(x==null?"":x,"done")},
$S:4}
B.cbC.prototype={
$1(d){var x=J.r(d,"status")
return J.A(x==null?"":x,"done")},
$S:4}
B.fMQ.prototype={
$1(d){return new B.Vb(this.a,null)},
$S:z+11}
B.fMR.prototype={
$1(d){return new B.Vf(this.a,this.b,this.c,null)},
$S:z+12}
B.dTP.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dUY.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dUZ.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dV_.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dUX(x,d))},
$S:2}
B.dUX.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dV0.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dV1.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dV2.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dV3.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dV4.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.dV5.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dV8.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.dV6.prototype={
$1(d){var x=this.a
return x.f?null:x.a_2()},
$S:2}
B.dV7.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aD.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mx(D.R5))s=C.ul
else s=C.a.a0(s,"video/")||d.mx(D.mO)?C.qq:D.anJ
x=this.b.a
w=y.p
return new A.D(C.kF,A.B(A.a([A.p(v,A.X(s,C.aD,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.at,A.E(A.x(A.a([A.d(d.b,v,v,C.a1,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaq9(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.i,0,C.p),1)],w),C.m,v,C.e,C.i,0,v,v),v)},
$S:z+13}
B.dTQ.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dTR.prototype={
$0(){return this.a.r=!1},
$S:0}
B.cbH.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:98}
B.cbI.prototype={
$2(d,e){return new A.bz(J.k(d),J.k(e),y.M)},
$S:98}
B.fNJ.prototype={
$2(d,e){return e===this.a},
$S:292}
B.flx.prototype={
$1(d){return J.k(d)},
$S:17}
B.fr3.prototype={
$1(d){var x=this.b
B.hVK(C.Gn.ga6H(this.a)).bM(x.gaE7(x),y.H)},
$S:127}
B.fr4.prototype={
$1(d){return this.a.d8(0,null)},
$S:127}
B.fr5.prototype={
$0(){return null},
$S:12}
B.cbW.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fr6.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aK(p.h(0,"sizeBytes"))
v=v==null?q:C.k.N(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).a7().ae():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jq(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fvc.prototype={
$1(d){return d.ag()},
$S:z+15}
B.fpg.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fph.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cc0.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mO)},
$S:z+1}
B.fRQ.prototype={
$1(d){return new B.Zo(this.a,null)},
$S:z+16}
B.d84.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fP()},
$S:9}
B.d82.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a4(w,!1).O(x)
return null},
$S:2}
B.d83.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dUW.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a15()},
$S:11}
B.dUj.prototype={
$0(){var x=J.bFb(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dUk.prototype={
$0(){var x=J.bFb(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dTT.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dTS(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEv(this.c)}},
$S:0}
B.dTS.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dTU.prototype={
$0(){var x=J.bFb(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dTZ.prototype={
$0(){var x=this.a,w=C.d.bg(x.d,new B.dTY(this.b))
if(w>=0){x=x.d
x[w]=x[w].aEv(this.c)}},
$S:0}
B.dTY.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dUK.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dUL.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dUg.prototype={
$1(d){return new B.Vc(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dUd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.Ik(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Vg(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tX(),$async$$0)
case 5:s=J.a5(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1f(s.gL(t)),$async$$0)
case 8:case 7:r.i7(s.gan(t)?u.d:u.e+" "+s.gL(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTX.prototype={
$1(d){this.a.ack(d,"No files selected.","Added")},
$S:445}
B.dUo.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.N(x,new B.dUn(),A.T(x).k("N<1,n>")))},
$S:0}
B.dUn.prototype={
$1(d){return d.a},
$S:z+2}
B.dU2.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xq.ca().cVx(C.a0t,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fq(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gan(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jw(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ab(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.i7("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.i7("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.apL(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cs(l)){o.i7("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tX(),$async$$0)
case 9:o.i7("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dUH.prototype={
$1(d){return new B.PX(this.a.a.c,this.b,null)},
$S:z+7}
B.dUI.prototype={
$1(d){return new B.Zq(this.a.a.c,this.b,null)},
$S:z+18}
B.dUJ.prototype={
$1(d){return new B.Zn(this.a.a.c,this.b,null)},
$S:z+19}
B.dUe.prototype={
$1(d){return new B.PX(this.a.a.c,this.b,null)},
$S:z+7}
B.dUf.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.M(0,w)},
$S:0}
B.dUA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.Ik(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a7g(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.i7("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.coN(),$async$$0)
case 5:x=6
return A.b(p.tX(),$async$$0)
case 6:r=A.T(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dUw(p),r),new B.dUx(),r.k("N<ak.E,n>")).c0(0,new B.dUy())
q=A.C(r,r.$ti.k("L.E"))
t=p.c
t.toString
x=7
return A.b(A.a4(t,!1).cc(A.dX(new B.dUz(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.pe(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Vm(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUw.prototype={
$1(d){var x=this.a,w=C.d.bg(x.d,new B.dUv(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dUv.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dUx.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dUy.prototype={
$1(d){return d.length!==0},
$S:3}
B.dUz.prototype={
$1(d){var x=this.a
return new B.Zs(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dUB.prototype={
$1(d){return d.a},
$S:z+2}
B.dUC.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dUu.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aD.j(0.35),q=A.at(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kE,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a1,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaq9(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mx(D.mO)?C.ry:C.pb
p=!x||p.mx(D.mO)?"Play video":"View"
return A.c2(A.bl(!0,new A.D(C.BM,A.x(A.a([q,o,t,C.aA,B.Zr(!1,u,!1,w,p,new B.dUp(d),v),B.Zr(!1,u,!1,C.jC,"Share via QR",new B.dUq(d),"Letters/numbers QR code"),B.Zr(!1,u,!1,D.a1A,"Send to their Code",new B.dUr(d),"Enter someone else's personal code"),B.Zr(!1,u,!1,C.hM,"Download / save",new B.dUs(d),v),C.am,B.Zr(!1,u,!0,C.e9,"Delete",new B.dUt(d),v)],y.p),C.ak,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bK(new A.ay(r,1,C.r,-1),C.a0,C.a0,C.a0),C.kU,v,v,C.n),C.bg)},
$S:716}
B.dUp.prototype={
$0(){A.a4(this.a,!1).O("view")
return null},
$S:0}
B.dUq.prototype={
$0(){A.a4(this.a,!1).O("qr")
return null},
$S:0}
B.dUr.prototype={
$0(){A.a4(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dUs.prototype={
$0(){A.a4(this.a,!1).O("save")
return null},
$S:0}
B.dUt.prototype={
$0(){A.a4(this.a,!1).O("delete")
return null},
$S:0}
B.dU_.prototype={
$1(d){return d.a},
$S:z+2}
B.dU0.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dU1.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a7i(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.GK(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.pe(s.c,s.f),$async$$0)
case 4:u.i7(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dTW.prototype={
$1(d){var x=this.a
x.tY(new B.dTV(x,d,this.b),"Preparing\u2026")},
$S:445}
B.dTV.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.i7("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Vg(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cs(s)){t.i7("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bE6(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.i7("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUh.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dUi.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h_e(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.M(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUb.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.GI(new B.dU7(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.i7("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ci(null,null,!1,null,new B.dU8(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dU9(s))
case 5:x=8
return A.b(r.b.iu(0,C.FU,new B.dUa()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gan(t)){s.i7("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tX(),$async$$0)
case 9:s.i7("Received "+q.gL(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dU7.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dU4(x,d,e))},
$S:213}
B.dU4.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dU8.prototype={
$1(d){return new B.acq(this.a.a,null)},
$S:z+21}
B.dU9.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dUa.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dUc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.IJ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a76(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b13(B.IJ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.apL(new B.dU5(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cs(r)){if(B.h_d(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.i7(q)
x=1
break}x=10
return A.b(s.tX(),$async$$0)
case 10:o=J.cD(r)
p=o.eY(r,new B.dU6()).gL(0)
s.i7(p>0?"Received "+p+" video(s).":"Restored "+o.gL(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dU5.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dU3(x,d,e))},
$S:213}
B.dU3.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dU6.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mO)},
$S:z+1}
B.dUm.prototype={
$1(d){return new B.Zt(this.a.a.c,null)},
$S:z+23}
B.dUl.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b_D(u.a.c,v.b),$async$$0)
case 2:t.i7(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dUG.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aD.j(0.35)
return A.c2(A.bl(!0,new A.D(C.BM,A.x(A.a([A.at(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kE,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Zr(!0,w,!1,C.nr,"My Code",new B.dUD(d),"Your personal code & QR \u2014 others send docs to you"),B.Zr(!1,w,!1,D.a1A,"Send to their Code",new B.dUE(this.a,d),"Enter someone else's 5-digit code + letter"),B.Zr(!1,w,!1,R.yX,"Import backup",new B.dUF(d),".ngmydoc file from another device")],y.p),C.ak,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bK(new A.ay(t,1,C.r,-1),C.a0,C.a0,C.a0),C.kU,x,x,C.n),C.bg)},
$S:716}
B.dUD.prototype={
$0(){A.a4(this.a,!1).O("my_code")
return null},
$S:0}
B.dUE.prototype={
$0(){A.a4(this.b,!1).O(null)
this.a.bDG()},
$S:0}
B.dUF.prototype={
$0(){A.a4(this.a,!1).O("import")
return null},
$S:0}
B.dUT.prototype={
$4(d,e,f,g){var x=null
return A.B(A.a([A.IT(D.QP,x,C.a1u,g,e,32),C.at,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cX(C.d.gI(D.QP).j(0.4+e*0.2),C.I,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.i,0,x,x)},
$C:"$4",
$R:4,
$S:695}
B.dUR.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.dUS.prototype={
$0(){this.a.aiF()
return null},
$S:0}
B.dUU.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*10)),e)},
$S:100}
B.dUV.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.acs(e,w,v,this.b,x.e,x.c8C(w),new B.dUN(x,w),new B.dUO(x,v,w),new B.dUP(x,w),new B.dUQ(x,w),null)},
$S:z+24}
B.dUN.prototype={
$0(){this.a.afV(this.b)
return null},
$S:0}
B.dUO.prototype={
$0(){var x=this.a
return x.m(new B.dUM(x,this.b,this.c))},
$S:0}
B.dUM.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.M(0,w)},
$S:0}
B.dUP.prototype={
$0(){this.a.Od(this.b)
return null},
$S:0}
B.dUQ.prototype={
$0(){this.a.ais(this.b)
return null},
$S:0}
B.d80.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*18)),e)},
$S:100}
B.d81.prototype={
$3(d,e,f){return A.ed(C.A,f,e,null,null)},
$S:110}
B.d8o.prototype={
$3(d,e,f){return A.d9(A.dP(f,new A.t(0,(1-e)*14)),e)},
$S:100}
B.d8n.prototype={
$1(d){return this.a.y.$0()},
$S:84}
B.d8k.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d8l.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d8m.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.d8i.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gan(w))return A.fQ(w,C.A,x,new B.d8g(this.a),C.h6,C.dw,!0,x,!1,x,x)
$.aV.x1$.push(new B.d8h(this.a))
return C.bJ},
$S:135}
B.d8g.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8e(this.a))
return C.bJ},
$S:193}
B.d8e.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8b(x))},
$S:9}
B.d8b.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8h.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8d(x))},
$S:9}
B.d8d.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d8j.prototype={
$3(d,e,f){$.aV.x1$.push(new B.d8f(this.a))
return C.bJ},
$S:193}
B.d8f.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d8c(x))},
$S:9}
B.d8c.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d7Y.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d7X(x,d))},
$S:1750}
B.d7X.prototype={
$0(){return this.a.f=this.b===C.uY},
$S:0}
B.d7Z.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d7W(x,d))},
$S:9}
B.d7W.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d8_.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d7V(x,d))},
$S:9}
B.d7V.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d7R.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d7S.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d7T.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.d7U.prototype={
$1(d){return this.a.d.Nd(0,A.dE(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d8B.prototype={
$0(){var x=this.a.a
return B.rz(x.c,x.d)},
$S:1751}
B.d8C.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d8D.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d8E.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d8F.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.d8G.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d8I.prototype={
$0(){var x=this.a
x.m(new B.d8H(x))},
$S:0}
B.d8H.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h8(0)
else x.q8(0)},
$S:0}
B.d8x.prototype={
$1(d){return this.a.QW(this.b)},
$S:11}
B.d8y.prototype={
$1(d){return this.a.QV(this.b)},
$S:11}
B.d8p.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d8q.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d8r.prototype={
$1(d){return D.hgF},
$S:z+25}
B.d8w.prototype={
$2(d,e){if(d)B.Vm()},
$S:123}
B.d8s.prototype={
$0(){return this.a.aab(this.b)},
$S:0}
B.d8t.prototype={
$0(){return this.a.aa8(this.b)},
$S:0}
B.d8u.prototype={
$0(){return this.a.aes(this.b)},
$S:0}
B.d8v.prototype={
$0(){return this.a.a1U(this.b)},
$S:0}
B.d7Q.prototype={
$0(){A.a4(this.a,!1).O(null)
return null},
$S:0}
B.d8A.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qb(),$async$$0)
case 2:u.m(new B.d8z(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d8z.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.cc2.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mx(D.mO)},
$S:z+1}
B.cc3.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.G(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cc1.prototype={
$2(d,e){return this.bkG(d,e)},
bkG(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Vn(u.c,A.G(["uploadProgress",C.k.E(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1752}
B.fuP.prototype={
$1(d){if(d===D.a7M&&(this.a.a.a&30)===0)this.a.fU(0)},
$S:z+27}
B.fuQ.prototype={
$0(){},
$S:12}
B.fvm.prototype={
bmf(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fiP(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hfE(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bmf(d,e)},
$S:545}
B.fvl.prototype={
$1(d){var x=this
d.b=new B.fvk(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fvk.prototype={
$1(d){return this.bme(d)},
bme(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b_E(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.M(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aN(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.r(r,"type")
q=J.k(n==null?"":n)
x=J.A(q,"meta")?13:15
break
case 13:n=J.r(r,"name")
n=J.k(n==null?"file":n)
m=J.r(r,"mime")
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
return A.b(B.fiP(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ab(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a7f(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d8(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.azS.prototype,"gcfC","Qw",0)
x(v,"gcgt","Jp",0)
x(v,"gcfZ","y9",0)
x(v=B.aDQ.prototype,"gc8w","aeq",0)
x(v,"gc8x","a_1",0)
x(v,"gcvg","ai8",0)
x(v=B.aDT.prototype,"gc8y","a_2",0)
x(v,"gcvh","a2e",0)
x(B.aDR.prototype,"gc8z","aer",0)
x(B.azR.prototype,"gc8E","c8F",4)
x(v=B.aDS.prototype,"gcg_","a09",0)
x(v,"gctQ","ctR",4)
x(v,"gb29","az0",0)
x(v,"gcwM","aiz",0)
x(v,"gbPV","XU",0)
x(v,"gc8D","Ep",0)
x(B.azT.prototype,"gb5V","a2d",0)
x(B.azQ.prototype,"gc8G","a_3",0)
x(v=B.azW.prototype,"gb0R","ceg",4)
x(v,"gc8A","aeu",0)
x(v=B.azU.prototype,"gcsO","a2_",0)
x(v,"gaZX","aet",0)
w(B.azP.prototype,"gaxE","axF",8)
x(v=B.azV.prototype,"gciJ","agn",0)
x(v,"gbPr","aaY",0)
w(v,"gaxE","axF",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aD,[B.co8,B.a9D,B.au7,B.aCu,B.aFC,B.jq,B.ac8,B.bwc,B.Ff,B.Xr])
w(B.co9,B.co8)
w(B.b4M,B.a9D)
x(A.hL,[B.co4,B.co5,B.co6,B.co3,B.co7,B.coa,B.cob,B.coc,B.cod,B.coe,B.cof,B.cog,B.coh,B.fom,B.fMD,B.fMF,B.fME,B.fMS,B.fMT,B.fqS,B.d85,B.d87,B.d86,B.d8a,B.fsR,B.ftk,B.cbx,B.cbE,B.cbF,B.cbA,B.cby,B.cbB,B.cbC,B.fMQ,B.fMR,B.dV_,B.dV8,B.dV6,B.dV7,B.flx,B.fr3,B.fr4,B.cbW,B.fr6,B.fvc,B.fpg,B.fph,B.cc0,B.fRQ,B.d84,B.d82,B.dUW,B.dTS,B.dTY,B.dUg,B.dTX,B.dUn,B.dUH,B.dUI,B.dUJ,B.dUe,B.dUw,B.dUv,B.dUx,B.dUy,B.dUz,B.dUB,B.dUC,B.dUu,B.dU_,B.dU0,B.dTW,B.dUh,B.dU8,B.dU6,B.dUm,B.dUG,B.dUT,B.dUU,B.d80,B.d81,B.d8o,B.d8n,B.d8i,B.d8g,B.d8e,B.d8h,B.d8j,B.d8f,B.d7Y,B.d7Z,B.d8_,B.d7U,B.d8x,B.d8y,B.d8r,B.cc2,B.cc3,B.fuP,B.fvl,B.fvk])
w(B.b4N,B.au7)
x(A.jc,[B.fMC,B.d88,B.d89,B.fsP,B.fsQ,B.ftj,B.dTP,B.dUY,B.dUZ,B.dUX,B.dV0,B.dV1,B.dV2,B.dV3,B.dV4,B.dV5,B.dTQ,B.dTR,B.fr5,B.d83,B.dUj,B.dUk,B.dTT,B.dTU,B.dTZ,B.dUK,B.dUL,B.dUd,B.dUo,B.dU2,B.dUf,B.dUA,B.dUp,B.dUq,B.dUr,B.dUs,B.dUt,B.dU1,B.dTV,B.dUi,B.dUb,B.dU4,B.dU9,B.dUa,B.dUc,B.dU3,B.dUl,B.dUD,B.dUE,B.dUF,B.dUR,B.dUS,B.dUN,B.dUO,B.dUM,B.dUP,B.dUQ,B.d8k,B.d8l,B.d8m,B.d8b,B.d8d,B.d8c,B.d7X,B.d7W,B.d7V,B.d7R,B.d7S,B.d7T,B.d8B,B.d8C,B.d8D,B.d8E,B.d8F,B.d8G,B.d8I,B.d8H,B.d8p,B.d8q,B.d8s,B.d8t,B.d8u,B.d8v,B.d7Q,B.d8A,B.d8z,B.fuQ])
x(A.lZ,[B.acr,B.NG,B.a9E,B.OL,B.Xq,B.OK,B.Fg])
x(A.ag,[B.Zp,B.Vb,B.Vf,B.Vc,B.Zo,B.Vd,B.Zq,B.Zn,B.PX,B.Zs,B.Zm,B.Zt])
x(A.ah,[B.azS,B.aDQ,B.aDT,B.aDR,B.azR,B.aDS,B.azT,B.azQ,B.azW,B.azU,B.azP,B.azV])
x(A.ax,[B.acT,B.azO,B.beh,B.acs,B.acq,B.bei])
x(A.ke,[B.cbD,B.cbz,B.cbH,B.cbI,B.fNJ,B.dU7,B.dU5,B.dUV,B.d8w,B.cc1,B.fvm])
x(A.iU,[B.bjF,B.bvP])})()
A.jk(b.typeUniverse,JSON.parse('{"b4M":{"a9D":[]},"b4N":{"au7":[]},"Zp":{"ag":[],"v":[]},"azS":{"ah":["Zp"]},"acT":{"ax":[],"v":[]},"Vb":{"ag":[],"v":[]},"Vf":{"ag":[],"v":[]},"aDQ":{"ah":["Vb"]},"aDT":{"ah":["Vf"]},"bjF":{"iU":[]},"Vc":{"ag":[],"v":[]},"aDR":{"ah":["Vc"]},"Zo":{"ag":[],"v":[]},"Vd":{"ag":[],"v":[]},"acs":{"ax":[],"v":[]},"Zq":{"ag":[],"v":[]},"Zn":{"ag":[],"v":[]},"PX":{"ag":[],"v":[]},"Zs":{"ag":[],"v":[]},"acq":{"ax":[],"v":[]},"Zm":{"ag":[],"v":[]},"Zt":{"ag":[],"v":[]},"azR":{"ah":["Zo"]},"bvP":{"iU":[]},"aDS":{"ah":["Vd"]},"azO":{"ax":[],"v":[]},"beh":{"ax":[],"v":[]},"azT":{"ah":["Zq"]},"azQ":{"ah":["Zn"]},"azW":{"ah":["PX"]},"azU":{"ah":["Zs"]},"azP":{"ah":["Zm"]},"azV":{"ah":["Zt"]},"bei":{"ax":[],"v":[]}}'))
var y=(function rtii(){var x=A.av
return{J:x("uo"),k:x("M6()"),m:x("bw<n,n>"),F:x("rb"),g:x("aA<jq?>"),x:x("aA<~>"),V:x("O<ac>"),O:x("O<u>"),W:x("O<bg>"),Y:x("O<a8<n,R>>"),t:x("O<a8<n,@>>"),r:x("O<jq>"),w:x("O<+file,name(lJ,n)>"),u:x("O<cX>"),s:x("O<n>"),E:x("O<iU>"),a:x("O<dK>"),p:x("O<v>"),Z:x("O<H>"),G:x("bg"),A:x("cB<ah<ag>>"),n:x("ai<jq>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bz<n,n>"),P:x("a8<n,@>"),f:x("a8<@,@>"),o:x("iF"),e:x("ilu"),af:x("Et"),U:x("jq"),b:x("cu"),C:x("aD"),aK:x("wf"),ab:x("Ff"),br:x("au7"),v:x("Xr"),N:x("n"),X:x("bp<K>"),Q:x("lV"),D:x("dK"),aw:x("c0<n>"),cd:x("Z<a8<n,@>>"),c7:x("v"),ch:x("bY<ai<jq>>"),aW:x("bY<dK?>"),aY:x("bY<~>"),cx:x("acr"),b1:x("bh<ai<jq>>"),cf:x("bh<dK?>"),d4:x("bh<~>"),c4:x("aCu"),bG:x("aFC"),q:x("n7"),B:x("pw<Ff>"),c6:x("pw<a9E>"),y:x("R"),i:x("K"),z:x("@"),S:x("H"),aQ:x("bg?"),_:x("ai<jq>?"),aL:x("ai<@>?"),h:x("a8<n,@>?"),l:x("jq?"),R:x("aD?"),c:x("Xr?"),d:x("+answerQr,transfer(n,aA<ai<jq>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,NG,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dK?"),cm:x("ac8?"),bk:x("aCu?"),ag:x("aFC?"),dd:x("K?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b1F=new A.ay(C.aD,2,C.r,-1)
D.c2v=new A.a9(C.a5,C.a8,C.x,C.a3D,null,null)
D.b3j=new A.o(null,null,null,C.mp,null,D.c2v,C.n)
D.b4N=new A.o(null,null,null,C.mp,null,E.Hq,C.n)
D.ae5=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.afn=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.agn=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ai_=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fwe=new A.y("Your team portal",null,C.dd,null,null,null,null,null,null,null,null,null)
D.fKR=new A.y("Share the access code and member password with your team. They only sign in once.",null,C.Ag,null,null,null,null,null,null,null,null,null)
D.ddA=x([D.fwe,C.am,D.fKR],y.p)
D.bsA=new A.fi(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.ddA,null)
D.fPj=new A.y("Create your organization",null,C.fv,null,null,null,null,null,null,null,null,null)
D.fAC=new A.y("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,C.Ag,null,null,null,null,null,null,null,null,null)
D.dua=x([D.fPj,C.am,D.fAC],y.p)
D.bsK=new A.fi(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.dua,null)
D.fLt=new A.y("Team Member sign-in",null,C.fv,null,null,null,null,null,null,null,null,null)
D.fEw=new A.y("Enter the access code and password from your organization.",null,C.Ag,null,null,null,null,null,null,null,null,null)
D.drU=x([D.fLt,C.am,D.fEw],y.p)
D.bsV=new A.fi(C.ah,C.e,C.i,C.E,null,C.p,null,0,D.drU,null)
D.byZ=new A.Q(16,10,16,28)
D.bz6=new A.Q(16,14,16,4)
D.bAn=new A.Q(20,0,20,16)
D.bAT=new A.Q(20,8,20,16)
D.akN=new A.Q(24,22,24,20)
D.a1A=new A.a0(63394,"MaterialIcons",!1)
D.anJ=new A.a0(63515,"MaterialIcons",!1)
D.bNx=new A.a0(983813,"MaterialIcons",!1)
D.bKS=new A.a0(62867,"MaterialIcons",!1)
D.bOA=new A.ae(D.bKS,44,C.c,null,null,null)
D.bPF=new A.ae(C.l6,null,C.ad,null,null,null)
D.bR2=new A.ae(C.jf,18,null,null,null,null)
D.bSM=new A.ae(D.a1A,26,C.c,null,null,null)
D.bTk=new A.ae(C.Cl,null,null,null,null,null)
D.bTU=new A.ae(C.Cu,null,null,null,null,null)
D.bV4=new A.ae(V.a1N,null,null,null,null,null)
D.bVo=new A.ae(C.hw,16,null,null,null,null)
D.bYW=new A.ae(C.rx,16,null,null,null,null)
D.bOR=new A.ae(C.nr,null,null,null,null,null)
D.bZO=new A.e3(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bOR,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bUr=new A.ae(C.GA,null,null,null,null,null)
D.bZT=new A.e3(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUr,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bPc=new A.ae(G.Hd,null,null,null,null,null)
D.c_3=new A.e3(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bPc,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cNU=x([C.ff,C.b_,C.aD],y.O)
D.c4n=new A.a9(C.ay,C.aE,C.x,D.cNU,null,null)
D.cNm=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.QP=x([C.ff,C.aD],y.O)
D.R5=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mO=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dmk=x([C.oW,C.aD],y.O)
D.edO={iceServers:0}
D.aIP={urls:0}
D.dxR=new A.bw(D.aIP,["stun:stun.l.google.com:19302"],y.m)
D.dxQ=new A.bw(D.aIP,["stun:stun1.l.google.com:19302"],y.m)
D.d3l=x([D.dxR,D.dxQ],A.av("O<a8<n,n>>"))
D.dx9=new A.bw(D.edO,[D.d3l],A.av("bw<n,@>"))
D.Iu=new B.NG(0,"lanDirect")
D.Sr=new B.NG(1,"cloudStash")
D.dIP=new B.NG(2,"inlineInstant")
D.Ss=new B.NG(3,"webrtcLink")
D.zJ=new B.NG(4,"videoCloud")
D.fKQ=new A.y("Receive file",null,C.n_,null,null,null,null,null,null,null,null,null)
D.cDe=x([E.apq,C.ac,D.fKQ],y.p)
D.f_M=new A.cd(C.aM,C.b8,C.i,C.m,null,C.p,null,0,D.cDe,null)
D.el4=new A.D(C.ck,D.f_M,null)
D.fmS=new A.F(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,U.HS,null,null,null)
D.fwN=new A.y("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fmS,null,C.L,null,null,null,null,null,null,null)
D.ekj=new A.D(C.BR,D.fwN,null)
D.b99=new A.cg(C.A,null,null,D.ekj,null)
D.eqZ=new A.cN(0,null,0,28,null,null,D.b99,null)
D.eri=new B.a9E(0,"RTCDataChannelConnecting")
D.aOg=new B.a9E(1,"RTCDataChannelOpen")
D.aOh=new B.a9E(3,"RTCDataChannelClosed")
D.erj=new B.Fg(0,"RTCIceConnectionStateNew")
D.erk=new B.Fg(1,"RTCIceConnectionStateChecking")
D.erl=new B.Fg(2,"RTCIceConnectionStateCompleted")
D.erm=new B.Fg(3,"RTCIceConnectionStateConnected")
D.ern=new B.Fg(4,"RTCIceConnectionStateCount")
D.ero=new B.Fg(5,"RTCIceConnectionStateFailed")
D.erp=new B.Fg(6,"RTCIceConnectionStateDisconnected")
D.aOi=new B.Fg(7,"RTCIceConnectionStateClosed")
D.aOj=new B.Xq(0,"RTCIceGatheringStateNew")
D.erq=new B.Xq(1,"RTCIceGatheringStateGathering")
D.a7M=new B.Xq(2,"RTCIceGatheringStateComplete")
D.a7N=new B.OK(0,"RTCPeerConnectionStateClosed")
D.aOk=new B.OK(1,"RTCPeerConnectionStateFailed")
D.aOl=new B.OK(2,"RTCPeerConnectionStateDisconnected")
D.aOm=new B.OK(3,"RTCPeerConnectionStateNew")
D.aOn=new B.OK(4,"RTCPeerConnectionStateConnecting")
D.aOo=new B.OK(5,"RTCPeerConnectionStateConnected")
D.err=new B.OL(0,"RTCSignalingStateStable")
D.ers=new B.OL(1,"RTCSignalingStateHaveLocalOffer")
D.ert=new B.OL(2,"RTCSignalingStateHaveRemoteOffer")
D.eru=new B.OL(3,"RTCSignalingStateHaveLocalPrAnswer")
D.erv=new B.OL(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aOp=new B.OL(5,"RTCSignalingStateClosed")
D.f4h=new A.au(160,48)
D.bar=new A.fj(2,null,null,null,null,C.aD,null,null,null,null)
D.f5P=new A.a7(16,16,D.bar,null)
D.fzX=new A.y("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.f7g=new A.b2(D.fzX,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fHy=new A.y("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.f7j=new A.b2(D.fHy,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fQm=new A.y("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.f7q=new A.b2(D.fQm,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fzx=new A.y("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.f7Q=new A.b2(D.fzx,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fLE=new A.y("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aRc=new A.b2(D.fLE,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fN5=new A.y("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.f8j=new A.b2(D.fN5,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRQ=new A.y("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f8A=new A.b2(D.fRQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fPN=new A.y("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.f8F=new A.b2(D.fPN,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fR_=new A.y("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.f9r=new A.b2(D.fR_,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fy9=new A.y("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.f9Y=new A.b2(D.fy9,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fJp=new A.y("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fai=new A.b2(D.fJp,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fCg=new A.y("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.faO=new A.b2(D.fCg,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fRW=new A.y("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.faS=new A.b2(D.fRW,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fyp=new A.y("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.faY=new A.b2(D.fyp,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.fx8=new A.y("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fbc=new A.b2(D.fx8,null,null,null,null,null,null,null,null,null,null,null,null,C.Z,!1,null,null,null,C.t,null)
D.ftW=new A.y("NGMY DOC SHARE",null,C.aSz,null,null,null,null,null,null,null,null,null)
D.fvk=new A.y("Show this to sender",null,C.iK,null,null,null,null,null,null,null,null,null)
D.fwl=new A.y("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fB2=new A.y("Organization settings",null,C.cB,null,null,null,null,null,null,null,null,null)
D.fBr=new A.y("Sign in",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fCq=new A.y("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fCW=new A.y("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fFO=new A.y("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fIz=new A.y("Send to their Doc Share",null,C.nG,null,null,null,null,null,null,null,null,null)
D.fIV=new A.y("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fJd=new A.y("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fJO=new A.y("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fJV=new A.y("Create portal",null,C.ch,null,null,null,null,null,null,null,null,null)
D.fKi=new A.y("Share via AirDrop / Bluetooth / Nearby",null,C.f1,null,null,null,null,null,null,null,null,null)
D.fNB=new A.y("Share files & videos\nwith a scan.",null,C.aSC,null,null,null,null,null,null,null,null,null)
D.fNV=new A.y("Add files",null,C.ch,null,null,null,null,null,null,null,null,null)
D.hgF=new B.Zm(null)
D.aaW=new B.acr(0,"docShare")
D.aaX=new B.acr(1,"gate")
D.VC=new B.acr(2,"gateNoIndividual")})();(function staticFields(){$.aOf=null
$.fgy=function(){var x=y.N
return A.U(x,x)}()
$.Gv=A.U(y.N,y.D)
$.agw=A.U(y.N,A.av("lJ"))
$.Rg=A.U(y.N,y.D)
$.fh6=A.U(y.N,A.av("ac8"))
$.cbV=A.U(y.S,A.av("bwc"))
$.hfD=1
$.i2Q=null
$.i2P=null
$.hV5=null
$.h4t=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"ilZ","hx9",()=>new B.co9())
x($,"ijU","h8e",()=>C.a.t(A.by(A.by(A.by(A.H5(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["u91oE4d1ORMWkBBE/3bABVbb8s8="]=a.current})($__dart_deferred_initializers__);