((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={cs8:function cs8(){},
i_7(d){var x=null,w=new B.b6h(d,D.ezK,new A.pQ(x,x,y.c6),new A.pQ(x,x,y.B))
w.bCe(d)
return w},
b6h:function b6h(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
cs3:function cs3(d){this.a=d},
cs4:function cs4(d){this.a=d},
cs5:function cs5(d){this.a=d},
cs2:function cs2(d){this.a=d},
cs6:function cs6(d){this.a=d},
i_8(d,e){var x=y.N
x=new B.b6i(d,e,A.T(x,y.e),A.T(x,y.z))
x.bCf(d,e)
return x},
b6i:function b6i(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
cs9:function cs9(d){this.a=d},
csa:function csa(d){this.a=d},
csb:function csb(d){this.a=d},
csc:function csc(d){this.a=d},
csd:function csd(d){this.a=d},
cse:function cse(d){this.a=d},
csf:function csf(d){this.a=d},
csg:function csg(d){this.a=d},
he6(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wS.GR(x,"ngmy_doc_share_v1",new B.fwL(),1)},
i5T(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cd(d))
if(y.J.b(d))return new Uint8Array(A.cd(J.eE(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cd(A.wS(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cM.aN(d)
return x}catch(w){return v}return v},
Sg(d,e){return B.ilX(d,e)},
ilX(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sg=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aPF
x=7
return A.b(o==null?$.aPF=B.he6():o,$async$Sg)
case 7:s=g
r=new Uint8Array(A.cd(e))
q=J.mj(s,"blobs","readwrite")
C.iE.md(J.mi(q,"blobs"),r,d)
x=8
return A.b(J.ov(q),$async$Sg)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sg,w)},
Sf(d){return B.ilW(d)},
ilW(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Sf=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aPF
x=7
return A.b(o==null?$.aPF=B.he6():o,$async$Sf)
case 7:s=f
r=J.mj(s,"blobs","readonly")
x=8
return A.b(C.iE.xO(J.mi(r,"blobs"),d),$async$Sf)
case 8:q=f
x=9
return A.b(J.ov(r),$async$Sf)
case 9:o=B.i5T(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$Sf,w)},
aic(d){return B.ilV(d)},
ilV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$aic=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aPF
x=7
return A.b(p==null?$.aPF=B.he6():p,$async$aic)
case 7:s=f
r=J.mj(s,"blobs","readwrite")
C.iE.Gn(J.mi(r,"blobs"),d)
x=8
return A.b(J.ov(r),$async$aic)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share idb delete] "+A.w(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aic,w)},
fwL:function fwL(){},
i8y(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.br6(w,v))}return u},
hFd(d,e){var x,w={},v=A.aYl("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fWg(w,v,e)
C.wU.za(v,"change",new B.fWi(w,v,!1))
C.wU.za(v,"cancel",new B.fWh(w))
$.eX.mE()
v.click()
A.bQ(C.al_,new B.fWf(w),y.H)},
fWg:function fWg(d,e,f){this.a=d
this.b=e
this.c=f},
fWi:function fWi(d,e,f){this.a=d
this.b=e
this.c=f},
fWh:function fWh(d){this.a=d},
fWf:function fWf(d){this.a=d},
DK(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$DK=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gd1()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gUx()?3:4
break
case 3:x=5
return A.b(B.hA_(e,d,s,!0,!1,f,g,h,!1,i),$async$DK)
case 5:x=1
break
case 4:x=6
return A.b(B.RU(d,s,f,g,h,i),$async$DK)
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
return A.b(B.Jq(s,d),$async$DK)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fsg(s,d),$async$DK)
case 14:x=12
return A.b(r.hA_(q,p,o,n,m,l,k,j,a1,i),$async$DK)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).ce(A.ec(new B.fWv(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).ce(A.ec(new B.fWw(s,i,d,f,g,h),!1,null,y.H)),$async$DK)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$DK,w)},
RU(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$RU=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b12(e),$async$RU)
case 3:u=k
x=4
return A.b(B.aqK(d,e,!1),$async$RU)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.Jq(e,d),$async$RU)
case 7:if(k){v=D.acF
x=1
break}x=8
return A.b(B.Wb(e),$async$RU)
case 8:v=t?D.Wx:D.acG
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.b10(d,e)){v=D.acF
x=1
break}x=11
return A.b(B.Wb(e),$async$RU)
case 11:v=t?D.Wx:D.acG
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.h9_(d,e)){v=D.acF
x=1
break}x=14
return A.b(B.Wb(e),$async$RU)
case 14:v=D.Wx
x=1
break
case 13:v=t?D.Wx:D.acG
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RU,w)},
fsg(d,e){var x=0,w=A.j(y.y),v
var $async$fsg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.b10(e,d)){v=!1
x=1
break}x=3
return A.b(B.b12(d),$async$fsg)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fsg,w)},
hA_(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).ce(A.ec(new B.fzr(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
huX(d,e,f,g,h,i,j){return new B.a_o(e,j,d,g,h,i,f,null)},
fBl(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fBl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBo(A.P(d).ax.a===C.H,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fBl)
case 3:r=f
t.U$=u
t.P$=0
s.U$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBl,w)},
fBQ(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fBQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.ax()
t=new A.au(C.ax,u)
s=new A.au(C.ax,u)
r=new A.au(C.ax,u)
x=3
return A.b(A.bU(C.L,null,new B.fBS(A.P(d).ax.a===C.H,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fBQ)
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
return A.i($async$fBQ,w)},
heh(d,e,f,g){var x=null,w=A.X(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aS
return A.bA(x,new A.b6(4,A.m(16),C.a1),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fOG(d,e){var x=0,w=A.j(y.H),v
var $async$fOG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Wb(e),$async$fOG)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eA()
case 1:return A.h(v,w)}})
return A.i($async$fOG,w)},
fWv:function fWv(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fWw:function fWw(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
adt:function adt(d,e){this.a=d
this.b=e},
fzr:function fzr(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
a_o:function a_o(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
aB6:function aB6(){this.c=this.a=this.d=null},
dcC:function dcC(d,e){this.a=d
this.b=e},
dcz:function dcz(d){this.a=d},
dcB:function dcB(d){this.a=d},
dcA:function dcA(d){this.a=d},
dcE:function dcE(){},
dcD:function dcD(d){this.a=d},
adX:function adX(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aDK:function aDK(d,e){this.a=d
this.b=e},
aGS:function aGS(d,e,f){this.a=d
this.b=e
this.c=f},
fBo:function fBo(d,e,f){this.a=d
this.b=e
this.c=f},
fBm:function fBm(d){this.a=d},
fBn:function fBn(d,e,f){this.a=d
this.b=e
this.c=f},
fBS:function fBS(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fBR:function fBR(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
cdS(d,e,f,g,h){return B.hUZ(d,e,f,g,h)},
hUZ(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$cdS=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a7(d)
q=r.gJ(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iB(r.dM(d,new B.cdT(s,e,h,g,f,q),y.g),y.l),$async$cdS)
case 3:r=p.aT(j)
case 4:if(!r.C()){x=5
break}t=r.gR(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cdS,w)},
b0Y(d,e,f,g,h){return B.hV_(d,e,f,g,h)},
hV_(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$b0Y=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.awf("GET",d)
o=A.h5p()
if(o==null)o=new A.MG(A.a([],y.W))
x=7
return A.b(o.fa(0,s).dh(0,C.GE),$async$b0Y)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.CU(),$async$b0Y)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Cl(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
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
return A.i($async$b0Y,w)},
b0X(d){return B.hUX(d)},
hUX(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$b0X=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.on),$async$b0X)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.X.aQ(0,A.mc(A.ma(p.e)).cJ(0,p.w),null)
p=y.P.b(r)?r:null
v=p
x=1
break
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
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
return A.i($async$b0X,w)},
cdR(d){return B.hUY(d)},
hUY(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$cdR=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.vS(d,null).dh(0,C.qz),$async$cdR)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.mc(A.ma(q.e)).cJ(0,q.w)
v=q
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
r=A.ac(o)
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
return A.i($async$cdR,w)},
cdT:function cdT(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jD:function jD(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Jo(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=A.ag("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hV4(d){var x,w,v,u,t=C.a.i(d).toUpperCase()
for(x=["|",":"],w=x.length,v=0;v<w;++v){u="NGMYDOCRCV"+x[v]
if(C.a.a_(t,u))return B.Jo(C.a.b2(t,u.length))}return null},
hV5(d){var x=B.Jo(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hV0(){var x,w=$.os(),v=J.e4(5,y.S)
for(x=0;x<5;++x)v[x]=w.az(10)
return C.d.he(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(24)]},
a81(d){return B.hV1(d)},
hV1(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a81=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f4(d,null,!1,C.bO),$async$a81)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$a81,w)},
a82(d,e){return B.hV2(d,e)},
hV2(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a82=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hJ(d,e,!1,!1,C.cP,null),$async$a82)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$a82,w)},
Ck(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ck=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.aA(),$async$Ck)
case 3:u=f
t=C.a.i(i)
s=A.aV(J.t(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.Jo(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a83(r),$async$Ck)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a81("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Ck)
case 7:q=f
s=q==null?null:J.t(q,"code")
p=B.Jo(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Ck)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hV0()
x=14
return A.b(B.a83(m),$async$Ck)
case 14:if(f!=null){x=12
break}l=new A.V(Date.now(),0,!1).aa().ag()
x=15
return A.b(B.a82("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 15:k=f
x=16
return A.b(B.a82("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.I(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Ck)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.aC("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Ck)
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
return A.i($async$Ck,w)},
a83(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a83=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.Jo(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a81("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a83)
case 3:u=f
t=u==null?null:J.t(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a83,w)},
a84(d,e,f,g){return B.hV6(d,e,f,g)},
hV6(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a84=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a7(d)
if(g.gau(d)){v=!1
x=1
break}r=B.Jo(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a83(r),$async$a84)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cG(d,0,new B.cdZ())>1048576||g.aV(d,new B.ce_())){v=B.Fl(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gH(q.split("@"))+"\u2026")
x=4
return A.b(B.a8f("myCode",d,a0),$async$a84)
case 4:u=a3
try{t=C.X.aQ(0,u,null)
if(y.f.b(t)){s=J.t(t,"files")
if(!y.j.b(s)||J.cs(s)||J.ad(s)!==g.gJ(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.Fl(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.b15(u,g.gJ(d),a0),$async$a84)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.os().az(9999)
k=n.b
j=g.gJ(d)
i=y.N
h=g.dM(d,new B.ce0(),i)
h=A.C(h,h.$ti.k("ak.E"))
x=6
return A.b(B.b0Z(A.I(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],i,y.z),q),$async$a84)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gJ(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a84,w)},
Fl(d,e,f,g,h){return B.hV3(d,e,f,g,h)},
hV3(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Fl=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Fl)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cC(a6)
k=l.cG(a6,0,new B.cdV())
if(k>524288e3){a7.$1("Too large to send by code ("+C.i.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.os().az(9999)
h=Date.now()
g=""+1000*h+"_"+C.cQ.az(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gR(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aL(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.Js(a9,q)
a0=new A.Lg(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$Fl)
case 11:if(!b1){x=10
break}n=a0.gR(0)
if(J.ad(n)===0){x=9
break}m=A.w(p)+".part"+C.a.b_(J.k(o),5,"0")
a1=$.f0().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.pn(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.abI(a1.a,a4,"media",a1.d,a2).xL(m,n,new A.Ez(!0,q.c)),$async$Fl)
case 12:J.c7(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a1(0),$async$Fl)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aSh(r),$async$Fl)
case 16:v=!1
x=1
break
case 15:f.push(A.I(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gJ(a6)
a1=l.dM(a6,new B.cdW(),e)
a1=A.C(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.b0Z(A.I(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.V(Date.now(),0,!1).aa().ag(),"status","pending"],e,d),a8),$async$Fl)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aSh(r),$async$Fl)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gJ(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fl,w)},
b0Z(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$b0Z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a81(t),$async$b0Z)
case 3:s=g
r=y.aL.a(J.t(s==null?A.I(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b8(r,new B.cdU(),y.P)
r=A.C(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a82(t,A.I(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b0Z,w)},
Oi(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$Oi=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a81("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$Oi)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.t(t,"deliveries")
if(!y.j.b(s)||J.cs(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aT(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.b1_(k,a0),$async$Oi)
case 8:i=a3
if(i>0){m+=i
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 7:j=k.h(0,"stashToken")
h=C.a.i(J.k(j==null?"":j))
if(h.length===0){r.push(k)
x=4
break}x=9
return A.b(B.b14(h),$async$Oi)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Wi(g,a0),$async$Oi)
case 10:f=a3
if(f!=null&&J.cJ(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.V(Date.now(),0,!1).aa().ag())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("M.E")
e=A.C(new A.Y(r,new B.cdX(),q),n)
d=A.C(new A.Y(r,new B.cdY(),q),n)
q=A.C(e,y.P)
C.d.v(q,A.cX(d,0,A.dB(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a82("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.I(["deliveries",q],p,o)),$async$Oi)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Oi,w)},
b1_(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$b1_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cs(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aT(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gR(u)
if(!r.b(p)){x=3
break}o=J.a7(p)
n=o.h(p,"name")
m=J.k(n==null?"file":n)
n=o.h(p,"mime")
l=J.k(n==null?"application/octet-stream":n)
n=o.h(p,"storageBase")
k=J.k(n==null?"":n)
o=A.aJ(o.h(p,"partCount"))
j=o==null?null:C.i.M(o)
if(j==null)j=0
if(k.length===0||j<=0){x=3
break}i=B.ipS(k,j)
C.d.v(s,i)
x=5
return A.b(B.DI(l,m,"Received via My Code",t,e,i),$async$b1_)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aSh(s),$async$b1_)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1_,w)},
cdZ:function cdZ(){},
ce_:function ce_(){},
ce0:function ce0(){},
cdV:function cdV(){},
cdW:function cdW(){},
cdU:function cdU(){},
cdX:function cdX(){},
cdY:function cdY(){},
fWs(d,e){var x=0,w=A.j(y.H)
var $async$fWs=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).ce(A.ec(new B.fWt(e),!1,null,y.H)),$async$fWs)
case 2:return A.h(null,w)}})
return A.i($async$fWs,w)},
bG5(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bG5=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cs(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).ce(A.ec(new B.fWu(g,e,f),!1,null,y.y)),$async$bG5)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bG5,w)},
fWt:function fWt(d){this.a=d},
fWu:function fWu(d,e,f){this.a=d
this.b=e
this.c=f},
W8:function W8(d,e){this.c=d
this.a=e},
aF5:function aF5(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dZa:function dZa(d,e){this.a=d
this.b=e},
Wc:function Wc(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF8:function aF8(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
e_j:function e_j(d){this.a=d},
e_k:function e_k(d){this.a=d},
e_l:function e_l(d){this.a=d},
e_i:function e_i(d,e){this.a=d
this.b=e},
e_m:function e_m(d){this.a=d},
e_n:function e_n(d){this.a=d},
e_o:function e_o(d,e){this.a=d
this.b=e},
e_p:function e_p(d,e){this.a=d
this.b=e},
e_q:function e_q(d,e){this.a=d
this.b=e},
e_r:function e_r(d){this.a=d},
e_u:function e_u(){},
e_s:function e_s(d){this.a=d},
e_t:function e_t(d,e){this.a=d
this.b=e},
blc:function blc(){},
W9:function W9(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aF6:function aF6(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dZb:function dZb(d){this.a=d},
dZc:function dZc(d){this.a=d},
h90(d){var x=d.i5
if(x>=0)return C.o.M(x)
return 10},
hV8(d){var x=d.l4
if(x>=0)return x
return 4.99},
hV7(d){var x=d.m6,w=y.N
w=x.jr(x,new B.ce2(),w,w)
return w},
hpY(d){var x=d.l5,w=y.N
w=x.jr(x,new B.ce3(),w,w)
return w},
b12(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$b12=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$b12)
case 7:s=f
r=A.w(p)
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
return A.i($async$b12,w)},
a86(d,e){var x=0,w=A.j(y.H),v,u
var $async$a86=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$a86)
case 4:x=3
return A.b(g.aC("String","ngmy_doc_share_path_"+u,e),$async$a86)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a86,w)},
Wb(d){var x=0,w=A.j(y.H),v,u
var $async$Wb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.aA(),$async$Wb)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$Wb)
case 3:case 1:return A.h(v,w)}})
return A.i($async$Wb,w)},
h9_(d,e){var x,w,v
if(B.hV8(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hV7(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bh(w)
return v!=null&&v.ca(new A.V(Date.now(),0,!1))},
b10(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.hpY(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bh(x)
return w!=null&&w.ca(new A.V(Date.now(),0,!1))},
hpZ(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a2(B.hpY(d),x,x)
x=w.h(0,t)
v=A.bh(x==null?"":x)
u=v!=null&&v.ca(new A.V(Date.now(),0,!1))?v:new A.V(Date.now(),0,!1)
w.n(0,t,u.bR(A.dw(f,0,0,0,0,0).a).aa().ag())
d.l5=w},
aqL(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$aqL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.aA(),$async$aqL)
case 7:s=f
r=A.w(p)
r=A.el(J.t(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$aqL,w)},
aqM(d){var x=0,w=A.j(y.H),v,u,t
var $async$aqM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.aqL(d),$async$aqM)
case 3:u=f
x=5
return A.b(A.aA(),$async$aqM)
case 5:x=4
return A.b(f.aC("Int","ngmy_doc_share_usage_"+t,u+1),$async$aqM)
case 4:case 1:return A.h(v,w)}})
return A.i($async$aqM,w)},
aqK(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$aqK=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.h90(d)
if(u<=0){v=!1
x=1
break}if(B.h9_(d,e)){v=!1
x=1
break}x=3
return A.b(B.aqL(e),$async$aqK)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqK,w)},
b11(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$b11=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Jq(e,d),$async$b11)
case 3:if(g){v=-1
x=1
break}u=B.h90(d)
if(u<=0){v=-1
x=1
break}if(B.h9_(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.aqL(e),$async$b11)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b11,w)},
ce5(d,e,f){var x=0,w=A.j(y.y),v
var $async$ce5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.Jq(e,d),$async$ce5)
case 3:if(h){v=!1
x=1
break}v=B.aqK(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce5,w)},
ce4(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$ce4=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
x=3
return A.b(B.ce5(d,u,i.gUx()),$async$ce4)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ce4,w)},
a85(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a85=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gd1()
if(i.gUx()){v=!0
x=1
break}if(B.b10(d,u)){v=!0
x=1
break}x=5
return A.b(A.ly(u,C.TP),$async$a85)
case 5:x=k?3:4
break
case 3:B.hpZ(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a85)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.ld(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.TP,"Doc Share for Organizations"),$async$a85)
case 7:if(!k){v=!1
x=1
break}B.hpZ(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a85)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a85,w)},
ce2:function ce2(){},
ce3:function ce3(){},
fXl(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fXl=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fXl)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.foF.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.foF.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fXl,w)},
isK(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.foF.br($.foF,new B.fXn(d))},
fXn:function fXn(d){this.a=d},
fqf(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$fqf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aL(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hL([d],f))
s.toString
u=A.n4(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bQ(C.jp,null,y.H),$async$fqf)
case 3:C.Bf.fs(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eX.mE()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fqf,w)},
ah6(d,e,f){var x=0,w=A.j(y.H),v
var $async$ah6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.fpj.n(0,d,new B.ada(A.bq(e,!0,v)))
x=3
return A.b(A.aA(),$async$ah6)
case 3:x=2
return A.b(h.aC("String",d+"_manifest",C.X.aw(A.I(["parts",e,"size",f],v,y.C),null)),$async$ah6)
case 2:return A.h(null,w)}})
return A.i($async$ah6,w)},
ah0(d){return B.iay(d)},
iay(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$ah0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.fpj.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.aA(),$async$ah0)
case 3:u=j.aV(i.t(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.X.aQ(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.t(t,"parts")
if(!y.j.b(s)||J.cs(s)){v=null
x=1
break}o=J.b8(s,new B.ftQ(),y.N)
n=A.C(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.t(t,"size"))
m=o==null?null:C.i.M(o)
q=m==null?0:m
p=new B.ada(r)
$.fpj.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ah0,w)},
RK(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$RK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cd(e))
$.H6.n(0,d,u)
x=3
return A.b(B.Sg(d,u),$async$RK)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$RK,w)},
aQ1(d){return B.iaw(d)},
iaw(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQ1=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.H6.h(0,d)
if(n!=null&&!C.aI.gau(n)){v=n
x=1
break}x=3
return A.b(B.Sf(d),$async$aQ1)
case 3:p=f
if(p!=null&&!C.aI.gau(p)){$.H6.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.aA(),$async$aQ1)
case 4:s=f
r=A.aV(J.t(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cM.aN(r)
x=!J.cs(q)?9:10
break
case 9:B.RK(d,q)
x=11
return A.b(J.h9(s,d),$async$aQ1)
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
return A.i($async$aQ1,w)},
i6l(d){if(d==null)return A.f3(null,y.K)
if(y.J.b(d))return A.f3(new Uint8Array(A.cd(J.eE(d,0,null))),y.K)
if(y.D.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
if(y.Q.b(d))return A.f3(new Uint8Array(A.cd(A.wS(d,0,null))),y.K)
if(y.I.b(d))return A.f3(new Uint8Array(A.cd(d)),y.K)
return A.f3(null,y.K)},
a2T(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a2T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bk($.bF,y.cf)
t=new A.c3(u,y.aW)
s=y.aK
A.fB(r,"loadend",new B.fzD(r,t),!1,s)
A.fB(r,"error",new B.fzE(t),!1,s)
r.readAsArrayBuffer(d)
v=u.iI(0,C.NR,new B.fzF())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a2T,w)},
aQl(d,e,f){return B.icV(d,e,f)},
icV(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aQl=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a2T(i),$async$aQl)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.w(r)+"-"+A.w(q)+" for "+e)
x=8
break}o=A.w(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Sg(o,p),$async$aQl)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.w(o))
x=8
break}J.c7(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.ah6(k,j,s),$async$aQl)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.ac(h)
$.am.$1("[doc share web persist chunked] "+A.w(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQl,w)},
aQk(d,e,f){return B.icU(d,e,f)},
icU(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aQk=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aQl(d,e,f),$async$aQk)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a2T(f),$async$aQk)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.H6.n(0,s,r)
$.S0.n(0,s,r)
x=11
return A.b(B.RK(s,r),$async$aQk)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.ac(m)
$.am.$1("[doc share web persist] "+A.w(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aQk,w)},
Cl(d,e,f,g,h,i){return B.hVh(d,e,f,g,h,i)},
hVh(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Cl=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cQ.az(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jD(p,q,o,n,new A.V(Date.now(),0,!1).aa().ag(),a0,f,B.b18(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.RK(s,d),$async$Cl)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.aA(),$async$Cl)
case 10:r=a2
x=11
return A.b(r.aC("String",s,C.cT.gcu().aN(d)),$async$Cl)
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
return A.b(B.Bj(e),$async$Cl)
case 12:j=a2
J.c7(j,m)
x=13
return A.b(B.Hg(e,j),$async$Cl)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cl,w)},
Wd(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$Wd=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Bj(d),$async$Wd)
case 3:t=a1
s=e.length,r=J.cC(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cQ.az(99999)
n=p.b
l=o.type
l.toString
k=B.hq0(n,null,l)
l=o.size
l.toString
j=new A.V(Date.now(),0,!1).aa().ag()
i=new B.jD(m,n,k,l,j,"From folder",null,B.b18(),null)
$.ahw.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a2T(o),$async$Wd)
case 7:g=a1
x=g!=null&&!C.aI.gau(g)?8:10
break
case 8:$.H6.n(0,h,g)
$.S0.n(0,h,g)
B.RK(h,g)
x=9
break
case 10:x=11
return A.b(B.aQk(d,m,o),$async$Wd)
case 11:case 9:r.I(t,i)
u.push(i)
case 5:e.length===s||(0,A.J)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.Hg(d,t),$async$Wd)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wd,w)},
h94(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$h94=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.hq0(r,C.d.gan(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.Jr(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aI.gau(s)){v=B.Cl(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h94,w)},
Jr(d,e,f,g,h,i){return B.hVg(d,e,f,g,h,i)},
hVg(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$Jr=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cQ.az(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.Lg(A.dB(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$Jr)
case 8:if(!a6){x=7
break}m=j.gR(0)
if(J.cs(m)){x=6
break}J.fW(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cd(J.SO(n,0,1048576)))
h=n
h.$flags&1&&A.aj(h,18)
A.kJ(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.w(r)+"_part_"+A.w(p)
x=11
return A.b(B.Sg(k,l),$async$Jr)
case 11:J.c7(q,k);++p
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
return A.b(j.a1(0),$async$Jr)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.w(r)+"_part_"+A.w(p)
x=15
return A.b(B.Sg(k,new Uint8Array(A.cd(n))),$async$Jr)
case 15:J.c7(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.ah6(r,q,g),$async$Jr)
case 16:f=new B.jD(i,a1,a0,g,new A.V(Date.now(),0,!1).aa().ag(),a2,null,B.b18(),null)
x=17
return A.b(B.Bj(d),$async$Jr)
case 17:e=a6
J.c7(e,f)
x=18
return A.b(B.Hg(d,e),$async$Jr)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Jr,w)},
Wf(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Wf=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.ahw.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a2T(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.ah0(s),$async$Wf)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Sf(u[o]),$async$Wf)
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
v=A.wS(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.J)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.S0.h(0,s)
if(i==null)i=$.H6.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rV(d,e),$async$Wf)
case 12:i=a0
if(i!=null&&!C.aI.gau(i))$.S0.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.wS(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wf,w)},
hq0(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
if(u.length!==0&&u!==v)return u
x=d.split(".")
if(e==null)w=x.length>1?C.d.gan(x):""
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
rV(d,e){return B.hVi(d,e)},
hVi(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rV=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.S0.h(0,f)
if(e==null)e=$.H6.h(0,f)
if(e!=null&&!C.aI.gau(e)){v=e
x=1
break}s=$.ahw.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a2T(s),$async$rV)
case 9:r=a3
if(r!=null&&!C.aI.gau(r)){$.H6.n(0,f,r)
$.S0.n(0,f,r)
B.RK(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.ac(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.w(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.ah0(f),$async$rV)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.azU(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Sf(g[l]),$async$rV)
case 16:k=a3
if(k!=null&&!C.aI.gau(k))n.I(0,k)
case 14:g.length===m||(0,A.J)(g),++l
x=13
break
case 15:r=n.apW()
if(!C.aI.gau(r)){$.H6.n(0,f,r)
$.S0.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aQ1(f),$async$rV)
case 17:j=a3
if(j!=null&&!C.aI.gau(j)){$.S0.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Wf(a0,a1,0,g),$async$rV)
case 20:i=a3
if(i!=null&&!C.aI.gau(i)){h=new Uint8Array(A.cd(i))
$.H6.n(0,f,h)
$.S0.n(0,f,h)
B.RK(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rV,w)},
hVl(d){var x,w,v=$.ahw.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hVm(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hVj(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
aqS(d,e,f,g,h){return B.hVk(d,e,f,g,h)},
hVk(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aqS=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.ahw.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a2T(s),$async$aqS)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rV(g,e),$async$aqS)
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
return A.b(n.iB(d).xL(h,r,new A.Ez(!0,e.c)),$async$aqS)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
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
return A.i($async$aqS,w)},
hq2(d,e,f,g,h){var x,w,v,u,t=$.hq1
$.hq1=t+1
x=Date.now()
w=""+1000*x+"_"+C.cQ.az(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.ceg.n(0,t,new B.by4(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.azU(u)))
return t},
h95(d){var x=0,w=A.j(y.H)
var $async$h95=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h95,w)},
Js(d,e){var $async$Js=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.ahw.h(0,h)
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
return A.qu(B.Wf(d,e,p,o<q?o:q),$async$Js,w)
case 8:n=a1
x=n!=null&&!C.aI.gau(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.qu(A.GE(n),$async$Js,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.qu(B.ah0("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$Js,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.qu(B.Sf(h[l]),$async$Js,w)
case 18:k=a1
x=k!=null&&!C.aI.gau(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.qu(A.GE(k),$async$Js,w)
case 21:case 20:case 16:h.length===r||(0,A.J)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.qu(B.rV(d,e),$async$Js,w)
case 22:j=a1
x=j!=null&&!C.aI.gau(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.qu(A.GE(A.wS(j,p,o<i?o:i)),$async$Js,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.qu(null,0,w)
case 2:return A.qu(t.at(-1),1,w)}})
var x=0,w=A.hyS($async$Js,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hAG(w)},
b1a(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$b1a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.ceg.h(0,d)
if(t==null||J.cs(e)){v=!1
x=1
break}u=t.x
u.I(0,e)
case 3:if(!(u.gJ(u)>=1048576)){x=4
break}x=5
return A.b(t.a5H(),$async$b1a)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1a,w)},
We(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$We=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceg.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a5H(),$async$We)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.ah6(r.c,u,r.z),$async$We)
case 4:t=new B.jD(r.b,r.d,r.e,r.z,new A.V(Date.now(),0,!1).aa().ag(),r.f,r.r,B.b18(),null)
u=r.a
x=5
return A.b(B.Bj(u),$async$We)
case 5:s=f
J.c7(s,t)
x=6
return A.b(B.Hg(u,s),$async$We)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$We,w)},
a8c(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a8c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.ceg.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.aic(u[s]),$async$a8c)
case 6:case 4:u.length===t||(0,A.J)(u),++s
x=3
break
case 5:r.x.a8(0)
case 1:return A.h(v,w)}})
return A.i($async$a8c,w)},
cei(d,e,f){var x=0,w=A.j(y.H)
var $async$cei=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bD5(d,e,f),$async$cei)
case 2:return A.h(null,w)}})
return A.i($async$cei,w)},
cej(d,e,f){var x=0,w=A.j(y.H)
var $async$cej=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.bD6(d,e,f),$async$cej)
case 2:return A.h(null,w)}})
return A.i($async$cej,w)},
Fm(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$Fm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Bj(d),$async$Fm)
case 2:p=g
J.nT(p,new B.ceh(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.H6.W(0,v)
$.ahw.W(0,e)
x=3
return A.b(B.ah0(v),$async$Fm)
case 3:u=g
$.fpj.W(0,v)
x=4
return A.b(A.aA(),$async$Fm)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$Fm)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$Fm)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.aic(s[q]),$async$Fm)
case 12:case 10:s.length===r||(0,A.J)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.aic(v),$async$Fm)
case 13:x=14
return A.b(B.Hg(d,p),$async$Fm)
case 14:return A.h(null,w)}})
return A.i($async$Fm,w)},
b19(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$b19=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rV(d,e),$async$b19)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.ag("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.fqf(t,A.aL(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b19,w)},
Bj(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Bj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$Bj)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aV(J.t(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.X.aQ(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b8(u,new B.fzG(),y.U)
r=A.C(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Bj,w)},
Hg(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$Hg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.aA(),$async$Hg)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b8(e,new B.fDS(),y.P)
t=A.C(t,t.$ti.k("ak.E"))
x=3
return A.b(v.aC("String","ngmy_doc_share_index_v1_"+u,C.X.aw(t,null)),$async$Hg)
case 3:return A.h(null,w)}})
return A.i($async$Hg,w)},
bD5(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bD5=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bD5)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxR(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aG2(f))
x=4
return A.b(B.Hg(d,u),$async$bD5)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bD5,w)},
bD6(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$bD6=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bj(d),$async$bD6)
case 3:u=h
t=J.cC(u)
s=t.bj(u,new B.fxS(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cOw(f))
x=4
return A.b(B.Hg(d,u),$async$bD6)
case 4:case 1:return A.h(v,w)}})
return A.i($async$bD6,w)},
ada:function ada(d){this.a=d},
ftQ:function ftQ(){},
fzD:function fzD(d,e){this.a=d
this.b=e},
fzE:function fzE(d){this.a=d},
fzF:function fzF(){},
ceh:function ceh(d){this.a=d},
by4:function by4(d,e,f,g,h,i,j,k,l){var _=this
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
fzG:function fzG(){},
fDS:function fDS(){},
fxR:function fxR(d){this.a=d},
fxS:function fxS(d){this.a=d},
a8d(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a8d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.aV(d,new B.cem())?3:4
break
case 3:x=5
return A.b(B.b1b(d,e),$async$a8d)
case 5:u=g
if(u!=null){t=u.c
B.Ok(d,u.b,e,t)}v=u
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
return A.b(B.b16(s),$async$a8d)
case 10:case 9:if(g){v=new A.R6(1,D.Ts,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Wg(d,e),$async$a8d)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Wl(!0,!0,d,e),$async$a8d)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.Ok(d,D.Ah,e,t)
v=new A.R6(p,D.Ah,t)
x=1
break}v=B.cel(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8d,w)},
Wg(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Wg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a8f(null,d,e),$async$Wg)
case 3:p=g
try{u=C.X.aQ(0,p,null)
t=y.f.b(u)?J.t(u,"files"):null
if(!y.j.b(t)||J.cs(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.b15(p,d.length,e),$async$Wg)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.cej(e,C.d.gH(d).a,r.b),$async$Wg)
case 7:case 6:q=r.a
x=8
return A.b(B.Ok(d,D.Ts,e,q),$async$Wg)
case 8:v=new A.R6(d.length,D.Ts,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wg,w)},
Wh(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Wh=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a_(d.c,"video/")||d.mL(D.n6)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a8e(d,e),$async$Wh)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.cee(s,d,e,t),$async$Wh)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.b16(t),$async$Wh)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rV(e,d),$async$Wh)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Wg(A.a([d],y.r),e),$async$Wh)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wh,w)},
Wj(){var x=0,w=A.j(y.H)
var $async$Wj=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.h8Z(),$async$Wj)
case 2:x=3
return A.b(B.aSD(),$async$Wj)
case 3:return A.h(null,w)}})
return A.i($async$Wj,w)},
a8e(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a8e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.b18()
x=3
return A.b(B.cei(e,d.a,u),$async$a8e)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8e,w)},
Ok(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$Ok=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.Ts&&C.a.a_(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b2(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a8e(p,f),$async$Ok)
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
return A.b(B.ced(o,p,u,f),$async$Ok)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.cee(o,p,f,t),$async$Ok)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.cec(o,u,p,f),$async$Ok)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.J)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$Ok,w)},
b1b(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$b1b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.cek(e,d),$async$b1b)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Wl(!1,!0,d,e),$async$b1b)
case 4:u=g
if(u!=null){t=u.b
v=new A.R6(u.a,D.Ah,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b1b,w)},
cek(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$cek=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Wf(d,s,0,1),$async$cek)
case 6:r=g
if(r==null||r.length===0){v=!1
x=1
break}case 4:e.length===u||(0,A.J)(e),++t
x=3
break
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cek,w)},
cel(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$cel=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gH(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a8f(null,d,e),$async$cel)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.hq_(u)
if(t.length>800){v=null
x=1
break}v=new A.R6(d.length,D.dQ7,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cel,w)},
aqT(d,e,f){return B.hVp(d,e,f)},
hVp(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$aqT=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d5(g,"\ufeff"))g=J.nq(g,1)
x=B.h93(g)?3:4
break
case 3:x=5
return A.b(B.cef(g),$async$aqT)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d5(g,"NGMYDOCSYNC4|")){s=C.a.i(J.nq(g,13))
try{k=B.Fn(d,a0,s)
v=k
x=1
break}catch(a1){r=A.ac(a1)
$.am.$1("[doc share video cloud import] "+A.w(r))
v=null
x=1
break}}x=J.d5(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.nq(g,13))
u=9
x=12
return A.b(B.b14(q),$async$aqT)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.ac(f)
$.am.$1("[doc share cloud qr] "+A.w(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d5(g,"NGMYDOCSYNC0|"))try{n=B.h92(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Wi(n,a0)
v=k
x=1
break}catch(a1){m=A.ac(a1)
$.am.$1("[doc share inline qr] "+A.w(m))
v=null
x=1
break}if(J.d5(g,"N2|")){v=B.Jt(C.a.i(J.nq(g,3)),d,a0)
x=1
break}if(J.d5(g,"NGMYDOCSYNC2|")){v=B.Jt(C.a.i(J.nq(g,13)),d,a0)
x=1
break}i=A.ag("https?://\\S+",!0,!1,!1,!1).cF(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.c7(k,"/"))h=C.a.aB(k,0,k.length-1)
else h=k
v=B.Jt(h,d,a0)
x=1
break}if(J.eI(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Wi(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqT,w)},
Jt(d,e,f){return B.hVn(d,e,f)},
hVn(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Jt=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.ag("/+$",!0,!1,!1,!1)
e=A.aL(g,f,"")
if(C.a.a_(e,"N2|"))e=C.a.i(C.a.b2(e,3))
if(C.a.a_(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b2(e,13))
if(!C.a.a_(e,"http://")&&!C.a.a_(e,"https://"))e="http://"+e
if(C.a.c7(e,"manifest.json")){g=C.a.aB(e,0,e.length-13)
f=A.ag("/+$",!0,!1,!1,!1)
j=A.aL(g,f,"")}else j=e
s=j
r=A.cD(A.w(s)+"/manifest.json",0,null)
q=A.cD(A.w(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.b0X(r),$async$Jt)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.b0X(A.cD(s,0,null)),$async$Jt)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.t(p,"files")
if(!y.j.b(o)||J.cs(o)){v=null
x=1
break}g=J.t(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.cdS(o,r,a1,n,a2),$async$Jt)
case 11:m=a4
x=J.cs(m)?12:13
break
case 12:x=14
return A.b(B.cdR(q),$async$Jt)
case 14:l=a4
x=l!=null&&C.a.q(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Wi(l,a2),$async$Jt)
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
k=A.ac(d)
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
return A.i($async$Jt,w)},
a8f(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a8f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aT(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gR(u)
x=5
return A.b(B.rV(f,r),$async$a8f)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.I(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cT.gcu().aN(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.V(Date.now(),0,!1).aa().ag())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.X.aw(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8f,w)},
Wi(d,e){return B.hVo(d,e)},
hVo(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Wi=A.e(function(a4,a5){if(a4===1){t.push(a5)
x=u}for(;;)switch(x){case 0:u=4
s=C.X.aQ(0,a2,null)
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
e=J.aT(r)
case 7:if(!e.C()){x=8
break}m=e.gR(e)
if(!f.b(m)){x=7
break}d=J.t(m,"name")
l=J.k(d==null?"file":d)
d=J.t(m,"mime")
k=J.k(d==null?"application/octet-stream":d)
d=J.t(m,"data")
j=J.k(d==null?"":d)
if(J.ad(j)===0){x=7
break}i=C.cM.aN(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.Cl(i,a3,d,k,l,o),$async$Wi)
case 9:h=a5
if(h!=null)J.c7(n,h)
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
g=A.ac(a1)
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
return A.i($async$Wi,w)},
Oj:function Oj(d,e){this.a=d
this.b=e},
cem:function cem(){},
a2s(d){var x=A.P(d).ax.a===C.H,w=x?D.aig:D.afO,v=x?D.ak2:C.c,u=x?C.aS:C.a_,t=x?C.bN:C.an,s=x?D.ahd:C.bl
return new A.aI7([w,s,v,u,t,x?C.fp:C.bQ])},
hG4(d,e){var x=e?C.w.j(0.72):C.b6
return A.cg(null,x,!0,null,new B.h0D(e),d,null,!0,!0,y.N)},
ce1(d,e,f,g,h,i,j,k,l){return new B.Wa(e,l,d,f,k,j,g,h,i,null)},
a_q(d,e,f,g,h,i,j){return new B.bfL(g,h,j,e,i,d,f,null)},
h0D:function h0D(d){this.a=d},
a_n:function a_n(d,e){this.c=d
this.a=e},
aB5:function aB5(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
dcy:function dcy(d){this.a=d},
dcw:function dcw(d){this.a=d},
dcx:function dcx(d){this.a=d},
bxH:function bxH(){},
Wa:function Wa(d,e,f,g,h,i,j,k,l,m){var _=this
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
aF7:function aF7(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
e_h:function e_h(d){this.a=d},
dZF:function dZF(d,e){this.a=d
this.b=e},
dZG:function dZG(d,e){this.a=d
this.b=e},
dZe:function dZe(d,e,f){this.a=d
this.b=e
this.c=f},
dZd:function dZd(d){this.a=d},
dZf:function dZf(d,e){this.a=d
this.b=e},
dZk:function dZk(d,e,f){this.a=d
this.b=e
this.c=f},
dZj:function dZj(d){this.a=d},
e_5:function e_5(d,e){this.a=d
this.b=e},
e_6:function e_6(d){this.a=d},
dZC:function dZC(d,e,f){this.a=d
this.b=e
this.c=f},
dZz:function dZz(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dZi:function dZi(d){this.a=d},
dZK:function dZK(d){this.a=d},
dZJ:function dZJ(){},
dZo:function dZo(d){this.a=d},
e_2:function e_2(d,e){this.a=d
this.b=e},
e_3:function e_3(d,e){this.a=d
this.b=e},
e_4:function e_4(d,e){this.a=d
this.b=e},
dZA:function dZA(d,e){this.a=d
this.b=e},
dZB:function dZB(d,e){this.a=d
this.b=e},
dZW:function dZW(d,e){this.a=d
this.b=e},
dZS:function dZS(d){this.a=d},
dZR:function dZR(d){this.a=d},
dZT:function dZT(){},
dZU:function dZU(){},
dZV:function dZV(d,e){this.a=d
this.b=e},
dZX:function dZX(){},
dZY:function dZY(d){this.a=d},
dZQ:function dZQ(d,e){this.a=d
this.b=e},
dZL:function dZL(d){this.a=d},
dZM:function dZM(d){this.a=d},
dZN:function dZN(d){this.a=d},
dZO:function dZO(d){this.a=d},
dZP:function dZP(d){this.a=d},
dZl:function dZl(){},
dZm:function dZm(d){this.a=d},
dZn:function dZn(d,e){this.a=d
this.b=e},
dZh:function dZh(d,e){this.a=d
this.b=e},
dZg:function dZg(d,e,f){this.a=d
this.b=e
this.c=f},
dZD:function dZD(d){this.a=d},
dZE:function dZE(d,e,f){this.a=d
this.b=e
this.c=f},
dZx:function dZx(d,e){this.a=d
this.b=e},
dZt:function dZt(d){this.a=d},
dZq:function dZq(d,e,f){this.a=d
this.b=e
this.c=f},
dZu:function dZu(d){this.a=d},
dZv:function dZv(d){this.a=d},
dZw:function dZw(){},
dZy:function dZy(d,e){this.a=d
this.b=e},
dZr:function dZr(d){this.a=d},
dZp:function dZp(d,e,f){this.a=d
this.b=e
this.c=f},
dZs:function dZs(){},
dZI:function dZI(d){this.a=d},
dZH:function dZH(d,e){this.a=d
this.b=e},
e_1:function e_1(d,e){this.a=d
this.b=e},
dZZ:function dZZ(d){this.a=d},
e__:function e__(d,e){this.a=d
this.b=e},
e_0:function e_0(d){this.a=d},
e_e:function e_e(d){this.a=d},
e_c:function e_c(d){this.a=d},
e_d:function e_d(d){this.a=d},
e_f:function e_f(){},
e_g:function e_g(d,e){this.a=d
this.b=e},
e_8:function e_8(d,e){this.a=d
this.b=e},
e_9:function e_9(d,e,f){this.a=d
this.b=e
this.c=f},
e_7:function e_7(d,e,f){this.a=d
this.b=e
this.c=f},
e_a:function e_a(d,e){this.a=d
this.b=e},
e_b:function e_b(d,e){this.a=d
this.b=e},
aB2:function aB2(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bfK:function bfK(d,e,f){this.c=d
this.d=e
this.a=f},
dcu:function dcu(){},
dcv:function dcv(){},
adu:function adu(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
dcS:function dcS(){},
dcR:function dcR(d){this.a=d},
a_p:function a_p(d,e,f){this.c=d
this.d=e
this.a=f},
aB7:function aB7(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
dcO:function dcO(d){this.a=d},
dcP:function dcP(d,e,f){this.a=d
this.b=e
this.c=f},
dcQ:function dcQ(d,e){this.a=d
this.b=e},
dcM:function dcM(d,e){this.a=d
this.b=e},
dcK:function dcK(d){this.a=d},
dcI:function dcI(d){this.a=d},
dcF:function dcF(d){this.a=d},
dcL:function dcL(d){this.a=d},
dcH:function dcH(d){this.a=d},
dcN:function dcN(d){this.a=d},
dcJ:function dcJ(d){this.a=d},
dcG:function dcG(d){this.a=d},
a_m:function a_m(d,e,f){this.c=d
this.d=e
this.a=f},
aB4:function aB4(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
dcr:function dcr(d){this.a=d},
dcq:function dcq(d,e){this.a=d
this.b=e},
dcs:function dcs(d){this.a=d},
dcp:function dcp(d,e){this.a=d
this.b=e},
dct:function dct(d){this.a=d},
dco:function dco(d,e){this.a=d
this.b=e},
dck:function dck(d){this.a=d},
dcl:function dcl(d){this.a=d},
dcm:function dcm(d,e){this.a=d
this.b=e},
dcn:function dcn(d){this.a=d},
QF:function QF(d,e,f){this.c=d
this.d=e
this.a=f},
aBa:function aBa(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
dd4:function dd4(d){this.a=d},
dd5:function dd5(d){this.a=d},
dd6:function dd6(d){this.a=d},
dd7:function dd7(d){this.a=d},
dd8:function dd8(d,e){this.a=d
this.b=e},
dd9:function dd9(d){this.a=d},
ddb:function ddb(d){this.a=d},
dda:function dda(d){this.a=d},
a_r:function a_r(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
aB8:function aB8(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
dd0:function dd0(d,e){this.a=d
this.b=e},
dd1:function dd1(d,e){this.a=d
this.b=e},
dcT:function dcT(d,e,f){this.a=d
this.b=e
this.c=f},
dcU:function dcU(d){this.a=d},
dcV:function dcV(){},
dd_:function dd_(){},
dcW:function dcW(d,e){this.a=d
this.b=e},
dcX:function dcX(d,e){this.a=d
this.b=e},
dcY:function dcY(d,e){this.a=d
this.b=e},
dcZ:function dcZ(d,e){this.a=d
this.b=e},
ads:function ads(d,e){this.c=d
this.a=e},
dcj:function dcj(d){this.a=d},
a_l:function a_l(d){this.a=d},
aB3:function aB3(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
a_s:function a_s(d,e){this.c=d
this.a=e},
aB9:function aB9(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
dd3:function dd3(d){this.a=d},
dd2:function dd2(d){this.a=d},
bfL:function bfL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hVq(){var x,w=$.os(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"VT"+C.d.he(v)},
Ol(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$Ol=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$Ol)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_video_relay_v1",null,!1,C.bO),$async$Ol)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"relays")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share video cloud] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Ol,w)},
a8g(d){return B.hVr(d)},
hVr(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a8g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8g)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_video_relay_v1",A.I(["relays",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$a8g)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share video cloud] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8g,w)},
Wk(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Wk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ol(),$async$Wk)
case 3:s=g
r=J.a7(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dJ(A.a2(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.V(Date.now(),0,!1).aa().ag())
r.n(s,d,t)
x=4
return A.b(B.a8g(s),$async$Wk)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Wk,w)},
Wl(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Wl=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c9(),$async$Wl)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bq(f,!0,y.U)
else{t=A.U(f).k("Y<1>")
u=A.C(new A.Y(f,new B.ceo(),t),t.k("M.E"))}if(u.length===0){v=null
x=1
break}s=B.hVq()
t=A.U(u).k("N<1,a9<n,aE>>")
r=A.C(new A.N(u,new B.cep(s),t),t.k("ak.E"))
x=6
return A.b(B.Ol(),$async$Wl)
case 6:q=i
J.aK(q,s,A.I(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=7
return A.b(B.a8g(q),$async$Wl)
case 7:x=8
return A.b(B.a8h(r,u,g,s),$async$Wl)
case 8:v=new A.brB(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Wl,w)},
aqU(d){var x=0,w=A.j(y.y),v,u,t
var $async$aqU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.Ol(),$async$aqU)
case 3:u=t.t(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.t(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqU,w)},
ceq(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$ceq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.Ol(),$async$ceq)
case 3:s=r.t(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a7(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ceq,w)},
a8h(d,e,f,g){return B.hVs(d,e,f,g)},
hVs(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a8h=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.t(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.aqS("media",r,new B.cen(s,e,g),f,q),$async$a8h)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Wk(g,A.I(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a8h)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Wk(g,A.I(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$a8h)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.ac(l)
$.am.$1("[doc share video cloud] upload: "+A.w(o))
x=15
return A.b(B.Wk(g,A.I(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a8h)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8h,w)},
Fn(d,e,f){return B.hVt(d,e,f)},
hVt(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$Fn=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a_(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$Fn)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.aqU(b3),$async$Fn)
case 7:if(c0){x=6
break}x=8
return A.b(A.bQ(C.iP,null,g),$async$Fn)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.aqU(b3),$async$Fn)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.Ol(),$async$Fn)
case 10:e=c0
g=J.a7(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a7(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.i.M(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cs(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a7(a4)
r=a1.gJ(a4)
q=0
p=A.a([],y.r)
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gR(a2)
if(!a0.b(a7)){x=11
break}a8=J.a7(a7)
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
b0=A.pn(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.abI(a8.a,b0,"media",a8.d,a9).Df(m)
k=A.cD(l,0,null)
x=17
return A.b(B.b0Y(k,n,o,s,b7),$async$Fn)
case 17:j=c0
if(j!=null){J.c7(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.ac(b4)
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
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gR(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.t(a7,"storagePath")
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
a8=A.pn(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.abI(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$Fn)
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
a0=A.dJ(A.a2(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.V(Date.now(),0,!1).aa().ag())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a8g(e),$async$Fn)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Fn,w)},
ceo:function ceo(){},
cep:function cep(d){this.a=d},
cen:function cen(d,e,f){this.a=d
this.b=e
this.c=f},
aSD(){var x=0,w=A.j(y.H),v,u
var $async$aSD=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.i5y=null
v=y.H
u=A.dM(null,v)
x=2
return A.b(u,$async$aSD)
case 2:u=A.dM(null,v)
x=3
return A.b(u,$async$aSD)
case 3:u=$.heu
u=u==null?null:u.bI(0)
x=4
return A.b(y.x.b(u)?u:A.dM(u,v),$async$aSD)
case 4:$.heu=$.ieH=$.ieI=null
return A.h(null,w)}})
return A.i($async$aSD,w)},
fDt(d){var x=0,w=A.j(y.H),v,u
var $async$fDt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a9k){x=1
break}u=new A.bk($.bF,y.d4)
d.c=new B.fDu(new A.c3(u,y.aY))
x=3
return A.b(u.iI(0,C.ih,new B.fDv()),$async$fDt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fDt,w)},
ieF(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hVa(x):x},
hey(d){var x=0,w=A.j(y.T),v,u,t
var $async$hey=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,13))
if(C.a.a_(u,"WR")){v=B.aqW(u)
x=1
break}v=B.h92(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hey,w)},
hex(d){var x=0,w=A.j(y.T),v,u,t
var $async$hex=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a_(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b2(t,14))
if(C.a.a_(u,"WR")){v=B.aqX(u)
x=1
break}v=B.h92(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$hex,w)},
fX4(d){var x=0,w=A.j(y.T),v
var $async$fX4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqX(d),$async$fX4)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fX4,w)},
bDZ(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bDZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hex(d),$async$bDZ)
case 3:q=f
if(q==null){x=1
break}t=C.X.aQ(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a7(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bDZ,w)},
fr6(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fr6=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.We(g)
x=1
break}if(d.gJ(d)<=0){v=null
x=1
break}v=B.Cl(d.apW(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fr6,w)},
Hi(d,e,f){return B.ih7(d,e,f)},
ih7(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$Hi=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.hey(a1),$async$Hi)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.X.aQ(0,e,null)
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
break}p=J.ad(q)
o=C.a.i(a1)
if(C.a.a_(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b2(o,13))
m=C.a.a_(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hI4().aGj(D.dE2,null),$async$Hi)
case 4:l=d.heu=a4
f.a="file"
f.b="application/octet-stream"
k=new A.azU(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bk($.bF,y.b1)
l.y=new B.fE4(f,k,new B.fE5(f,a2,k,j,a0,p),a2,j,a0,p,new A.c3(t,y.ch))
x=5
return A.b(l.a8K(0,new B.Yt(r,"offer")),$async$Hi)
case 5:d=l
x=7
return A.b(l.amm(0),$async$Hi)
case 7:x=6
return A.b(d.a8C(0,a4),$async$Hi)
case 6:x=8
return A.b(B.fDt(l),$async$Hi)
case 8:x=9
return A.b(l.aqI(),$async$Hi)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.ieF(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.X.aw(A.I(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aqY(m,h),$async$Hi)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.hq_(h)
case 11:v=new A.bqR(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Hi,w)},
fDu:function fDu(d){this.a=d},
fDv:function fDv(){},
fE5:function fE5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fE4:function fE4(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fE3:function fE3(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
ijc(d){switch(d){case"new":return D.ezL
case"checking":return D.ezM
case"connected":return D.ezO
case"completed":return D.ezN
case"failed":return D.ezQ
case"disconnected":return D.ezR
case"closed":return D.aR1
case"count":return D.ezP}return D.aR1},
ijd(d){switch(d){case"new":return D.aR2
case"gathering":return D.ezS
case"complete":return D.a9k}return D.aR2},
iui(d){switch(d){case"stable":return D.ezT
case"have-local-offer":return D.ezU
case"have-local-pranswer":return D.ezW
case"have-remote-offer":return D.ezV
case"have-remote-pranswer":return D.ezX
case"closed":return D.aR8}return D.aR8},
isr(d){switch(d){case"new":return D.aR5
case"connecting":return D.aR6
case"connected":return D.aR7
case"closed":return D.a9l
case"disconnected":return D.aR4
case"failed":return D.aR3}return D.a9l},
aaE:function aaE(d,e){this.a=d
this.b=e},
Pp:function Pp(d,e){this.a=d
this.b=e},
Ys:function Ys(d,e){this.a=d
this.b=e},
Po:function Po(d,e){this.a=d
this.b=e},
FR:function FR(d,e){this.a=d
this.b=e},
cs7:function cs7(){},
haO(d){var x=new B.FQ()
x.a=d
x.b=!0
return x},
FQ:function FQ(){this.b=this.a=$},
aaD:function aaD(){},
avq:function avq(){},
Yt:function Yt(d,e){this.a=d
this.b=e},
h8Z(){var x=0,w=A.j(y.H)
var $async$h8Z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$h8Z,w)},
h91(d,e,f){var x=0,w=A.j(y.T),v
var $async$h91=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a_(e.c,"video/")||e.mL(D.n6))){v=null
x=1
break}v=B.fXl(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$h91,w)},
hq_(d){var x,w=F.afc.a5q(C.dV.aN(d),null)
if(w.length===0){x=C.dV.aN(d)
return C.cT.gcu().aN(x)}return C.cT.gcu().aN(w)},
hV9(d){var x,w,v=C.cM.aN(d)
try{x=C.ca.cJ(0,F.afb.bfZ(v,!1))
return x}catch(w){x=C.ca.cJ(0,v)
return x}},
h92(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a_(t,s))return B.hV9(C.a.b2(t,s.length))
w=e+"|"
if(C.a.a_(t,w)){x=C.a.b2(t,w.length)
try{v=C.ca.cJ(0,C.cM.aN(x))
return v}catch(u){return x}}return null},
hVa(d){var x,w,v,u,t,s=A.a([],y.s)
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
if(C.a.a_(t,"a=candidate")){if(v>=2)continue;++v}s.push(t)}return C.d.aO(s,"\n")},
hVb(){var x,w=$.os(),v=J.e4(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.az(32)]
return"DS"+C.d.he(v)},
b13(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$b13=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bO),$async$b13)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$b13,w)},
ce6(d,e){return B.hVc(d,e)},
hVc(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ce6=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cP,null),$async$ce6)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$ce6,w)},
b16(d){var x=0,w=A.j(y.y),v,u,t
var $async$b16=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.b13(d),$async$b16)
case 3:t=f
if(t!=null){u=J.t(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b16,w)},
b15(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$b15=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hVb()
r=C.a.i(f)
t=C.dV.aN(s)
x=3
return A.b(B.ce6(u,A.I(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cT.gcu().aN(t),"usesRemaining",999999,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$b15)
case 3:if(!h){v=null
x=1
break}v=new A.a1s("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b15,w)},
b14(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$b14=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.b13(o),$async$b14)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.t(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.ca.cJ(0,C.cM.aN(u))
if(J.iZ(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.ac(n)
$.am.$1("[doc share qr stash] decode "+A.w(o)+": "+A.w(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$b14,w)},
ce7(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$ce7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bEW("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cP),$async$ce7)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[doc share qr stash] delete "+A.w(q)+": "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ce7,w)},
b17(d){var x=0,w=A.j(y.h),v,u,t
var $async$b17=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.Jp(),$async$b17)
case 3:u=t.t(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a2(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$b17,w)},
aqP(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$aqP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqP)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aV(J.t(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.b17(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqP,w)},
aqN(d,e){var x=0,w=A.j(y.H)
var $async$aqN=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqN)
case 3:x=2
return A.b(g.aC("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$aqN)
case 2:return A.h(null,w)}})
return A.i($async$aqN,w)},
a88(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a88=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a88)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a88)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dp(s)
if(q.al(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.I(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.C))
x=5
return A.b(A.a87(s),$async$a88)
case 5:x=6
return A.b(B.aqN(f,u),$async$a88)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a88,w)},
a89(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a89=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a89)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.Jp(),$async$a89)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a7(u)
r=s.h(u,t)
if(!y.f.b(r)){v=!1
x=1
break}q=J.t(r,"ownerEmail")
if(C.a.i(J.k(q==null?"":q).toLowerCase())!==C.a.i(g.toLowerCase())){v=!1
x=1
break}p=A.a2(r,y.N,y.z)
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
return A.b(B.aqN(g,q),$async$a89)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a87(u),$async$a89)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a89,w)},
a8a(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a8a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8a)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.Jp(),$async$a8a)
case 4:u=o.t(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a7(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.b10(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.aA(),$async$a8a)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.aC("String","ngmy_doc_share_school_session_"+s,C.X.aw(A.I(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.V(Date.now(),0,!1).aa().ag()],p,p),null)),$async$a8a)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a8a,w)},
ce8(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$ce8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.aA(),$async$ce8)
case 7:s=f
p=A.w(n)
r=A.aV(J.t(s.a,"ngmy_doc_share_school_session_"+p))
if(r==null||r.length===0){v=null
x=1
break}q=C.X.aQ(0,r,null)
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
return A.i($async$ce8,w)},
Jq(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$Jq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ce8(d),$async$Jq)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.t(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.b17(t),$async$Jq)
case 4:s=g
x=s==null||!J.z(J.t(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.aqO(d),$async$Jq)
case 7:v=!1
x=1
break
case 6:u=J.t(s,"ownerEmail")
u=B.b10(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.aqO(d),$async$Jq)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Jq,w)},
aqO(d){var x=0,w=A.j(y.H)
var $async$aqO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.aA(),$async$aqO)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$aqO)
case 2:return A.h(null,w)}})
return A.i($async$aqO,w)},
b18(){var x,w=$.os(),v=J.e4(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.az(32)]
return C.d.he(v)},
a8b(d){var x=C.a.i(d),w=A.ag("[^A-Z0-9]",!0,!1,!1,!1),v=A.aL(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
h93(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.q(w,"|")||C.a.q(w,":")||C.a.q(w,"/")||C.a.q(w,".")||C.a.q(w," "))return!1
x=A.ag("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.ag("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
ceb(d){return B.hVe(d)},
hVe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$ceb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a8b(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f4("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bO),$async$ceb)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$ceb,w)},
aqR(d,e){return B.hVf(d,e)},
hVf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$aqR=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a8b(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hJ("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cP,null),$async$aqR)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.ac(o)
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
return A.i($async$aqR,w)},
ced(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$ced=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.aqR(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$ced)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ced,w)},
cec(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$cec=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.aqR(u,A.I(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z)),$async$cec)
case 3:case 1:return A.h(v,w)}})
return A.i($async$cec,w)},
cee(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$cee=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a8b(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.aqR(u,A.I(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cee,w)},
cef(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$cef=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.h93(d)){v=null
x=1
break}x=3
return A.b(B.ceb(d),$async$cef)
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
return A.i($async$cef,w)},
a8i(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a8i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$a8i)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f4("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bO),$async$a8i)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
x=1
break}r=J.t(s,"signals")
if(y.f.b(r)){p=A.a2(r,y.N,y.z)
v=p
x=1
break}u=2
x=7
break
case 5:u=4
n=t.pop()
q=A.ac(n)
$.am.$1("[doc share webrtc stash] load: "+A.w(q))
x=7
break
case 4:x=2
break
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a8i,w)},
aqV(d){return B.hVu(d)},
hVu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$aqV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c9(),$async$aqV)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hJ("ngmy_doc_share_webrtc_signal_v1",A.I(["signals",d,"savedAt",new A.V(Date.now(),0,!1).aa().ag()],y.N,y.z),!1,!1,C.cP,null),$async$aqV)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.ac(q)
$.am.$1("[doc share webrtc stash] save: "+A.w(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aqV,w)},
aqW(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$aqW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d5(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqW)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a8i(),$async$aqW)
case 4:s=f
r=J.t(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.t(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.ca.cJ(0,C.cM.aN(q))
if(J.iZ(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dJ(A.a2(r,m,l),m,l)
J.aK(o,"offerConsumedAt",new A.V(Date.now(),0,!1).aa().ag())
J.aK(s,j,o)
x=9
return A.b(B.aqV(s),$async$aqW)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.ac(i)
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
return A.i($async$aqW,w)},
aqY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aqY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c9(),$async$aqY)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a8i(),$async$aqY)
case 4:u=g
t=J.a7(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dJ(A.a2(s,r,q),r,q)
r=C.dV.aN(C.a.i(e))
q.n(0,"answer",C.cT.gcu().aN(r))
q.n(0,"answerAt",new A.V(Date.now(),0,!1).aa().ag())
t.n(u,p,q)
x=5
return A.b(B.aqV(u),$async$aqY)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqY,w)},
aqX(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aqX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c9(),$async$aqX)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a8i(),$async$aqX)
case 4:s=o.t(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.t(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.ca.cJ(0,C.cM.aN(u))
v=r
x=1
break}catch(n){t=A.ac(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.w(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aqX,w)},
apQ(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$apQ=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aW.ap$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gbg()
if(!(p instanceof A.qk)){v=null
x=1
break}x=3
return A.b(p.mg(e),$async$apQ)
case 3:r=g
u=4
x=7
return A.b(r.hr(C.hl),$async$apQ)
case 7:q=g
o=q
o=o==null?null:J.eT(J.w1(o))
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
return A.i($async$apQ,w)},
ipS(d,e){var x,w,v=J.e4(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.b_(C.o.u(w),5,"0")
return v},
fVm(d){return B.ipU(d)},
ipU(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fVm=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").Lr(d,3600),$async$fVm)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
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
return A.i($async$fVm,w)},
DI(d,e,f,g,h,i){var x=null
return B.ipR(d,e,f,g,h,i)},
ipR(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$DI=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.hq2(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.h95(r),$async$DI)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fVm(o),$async$DI)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a8c(r),$async$DI)
case 14:v=null
x=1
break
case 13:e=$.bF.h(0,C.aUD)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.MG(A.a([],g))
x=15
return A.b(d.fa(0,A.awf("GET",A.cD(n,0,null))).dh(0,C.GE),$async$DI)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a8c(r),$async$DI)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.Lg(d)
u=19
case 22:x=24
return A.b(d.C(),$async$DI)
case 24:if(!b2){x=23
break}k=d.gR(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.b1a(r,k),$async$DI)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a1(0),$async$DI)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.J)(b0),++f
x=8
break
case 10:i=B.We(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.ac(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.w(j))
x=27
return A.b(B.a8c(r),$async$DI)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$DI,w)},
aSh(d){return B.ipT(d)},
ipT(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aSh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.f0().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.iB("media").W(0,d),$async$aSh)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.ac(p)
$.am.$1("[supabase remove paths]: "+A.w(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSh,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[161]
O=c[47]
F=c[267]
I=c[153]
P=c[237]
E=c[230]
G=c[95]
Q=c[200]
R=c[154]
S=c[235]
K=c[272]
L=c[280]
B=a.updateHolder(c[22],B)
D=c[278]
T=c[199]
M=c[220]
U=c[74]
V=c[261]
W=c[80]
X=c[62]
N=c[94]
Y=c[279]
B.cs8.prototype={
aGj(d,e){return this.cQ0(d,e)},
cQ0(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aGj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.I(["mandatory",A.T(t,t),"optional",A.a([A.I(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dJ(r,s,t)
t.v(0,d)
u=new q(A.ki(A.cv(t)))
t=J.k(u)
v=B.i_8(C.cT.gcu().aN(new A.d8(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aGj,w)}}
B.b6h.prototype={
bCe(d){var x=this,w=x.w
w.onclose=A.hq(new B.cs3(x))
w.onopen=A.hq(new B.cs4(x))
w.onmessage=A.hq(new B.cs5(x))
w.onbufferedamountlow=A.hq(new B.cs6(x))},
gd6(d){return this.x},
aiz(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$aiz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.FQ()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.haO(J.eT(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.ef(d.arrayBuffer(),y.af),$async$aiz)
case 8:v=t.haO(s.ap_(f,0,null))
x=1
break
case 7:case 4:v=B.haO(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aiz,w)}}
B.b6i.prototype={
bCf(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.hq(new B.cs9(x)))
w.addEventListener("icecandidate",A.hq(new B.csa(x)))
w.addEventListener("iceconnectionstatechange",A.hq(new B.csb(x)))
w.onicegatheringstatechange=A.hq(new B.csc(x))
w.addEventListener("signalingstatechange",A.hq(new B.csd(x)))
if(!$.hiu())w.addEventListener("connectionstatechange",A.hq(new B.cse(x)))
w.addEventListener("negotiationneeded",A.hq(new B.csf(x)))
w.addEventListener("track",A.hq(new B.csg(x)))},
amm(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$amm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.ef(s.createAnswer(A.ki(A.cv(A.T(y.N,y.z)))),y.aQ),$async$amm)
case 3:t=f
v=new B.Yt(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$amm,w)},
a8C(d,e){return this.bra(0,e)},
bra(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8C=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a8C)
case 2:return A.h(null,w)}})
return A.i($async$a8C,w)},
a8K(d,e){return this.brv(0,e)},
brv(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a8K=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.ef(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a8K)
case 2:return A.h(null,w)}})
return A.i($async$a8K,w)},
aqI(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$aqI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Yt(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aqI,w)},
bI(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bI=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f3(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bI,w)}}
B.adt.prototype={
a7(){return"_DocShareEntry."+this.b}}
B.a_o.prototype={
S(){return new B.aB6()},
gd1(){return this.c}}
B.aB6.prototype={
Y(){this.a4()
this.af8()},
af8(){var x=0,w=A.j(y.H),v=this,u,t
var $async$af8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b11(u.e,u.c),$async$af8)
case 2:t=e
if(v.c!=null)v.m(new B.dcC(v,t))
return A.h(null,w)}})
return A.i($async$af8,w)},
QX(){var x=0,w=A.j(y.H),v,u=this,t
var $async$QX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.aqK(t.e,t.c,!1),$async$QX)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fkO)
x=1
break}x=4
return A.b(B.a86(u.a.c,"individual"),$async$QX)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a7_(A.ec(new B.dcz(u),!1,null,y.H)),$async$QX)
case 5:case 1:return A.h(v,w)}})
return A.i($async$QX,w)},
JN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$JN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fBl(o),$async$JN)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a8a(o.e,r,s,q),$async$JN)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fhO)
x=1
break}x=5
return A.b(B.a86(u.a.c,"member"),$async$JN)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a7_(A.ec(new B.dcB(u),!1,null,y.H)),$async$JN)
case 6:case 1:return A.h(v,w)}})
return A.i($async$JN,w)},
yH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$yH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a85(t.e,o,t.f,t.r,t.w,s),$async$yH)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a86(u.a.c,"org_owner"),$async$yH)
case 4:x=5
return A.b(B.aqP(u.a.c),$async$yH)
case 5:r=e
x=r==null||!J.z(J.t(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fBQ(o),$async$yH)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a88(s,t,o,q.c),$async$yH)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.L(y.q).f.T(D.fhL)
x=1
break}x=10
return A.b(B.aqP(u.a.c),$async$yH)
case 10:o=u.c
if(o==null){x=1
break}o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a7_(A.ec(new B.dcA(u),!1,null,y.H)),$async$yH)
case 11:case 1:return A.h(v,w)}})
return A.i($async$yH,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H,q=r?C.nA:C.qm,p=B.h90(t.a.e),o=t.d
if(o==null)x="\u2026"
else x=o===-1||o>=999999?"Unlimited":A.w(o)+" of "+p+" free"
o=A.aF(d,C.dN,y.m).w
w=A.m(28)
v=A.a([new A.ab(0,C.G,C.aE.j(0.35),C.h7,24)],y.V)
u=y.p
v=A.q(s,A.x(A.a([A.q(s,D.fEU,C.f,s,s,new A.p(C.c.j(0.2),s,s,A.m(20),s,s,C.n),s,s,s,s,C.hf,s,s,s),C.aB,D.fYN,C.W,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",s,s,s,s,s,s,A.l(s,s,C.c.j(0.92),s,s,s,s,s,s,s,s,14,s,s,s,s,1.45,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),C.f,s,s,new A.p(s,s,s,w,v,D.c9X,C.n),s,s,s,s,C.ey,s,s,s)
w=t.a.x?"Choose how to continue":"Who are you?"
w=A.a([new A.lZ(new B.dcE(),s),C.T,v,C.e3,A.d(w,s,s,s,s,s,s,A.l(s,s,r?C.c:C.a_,s,s,s,s,s,s,s,s,16,s,s,C.u,s,s,!0,s,s,s,s,s,s,s,s),s,s,s)],u)
if(t.a.x)C.d.v(w,A.a([C.am,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",s,s,s,s,s,s,A.l(s,s,r?C.aR:C.an,s,s,s,s,s,s,s,s,13,s,s,s,s,1.4,!0,s,s,s,s,s,s,s,s),s,s,s)],u))
w.push(C.ae)
if(!t.a.x)C.d.v(w,A.a([new B.adX(C.f0,C.aDA,"Individual","Personal use \xb7 "+x+" uploads/shares",t.gcja(),s),C.ae],u))
w.push(new B.adX(C.pu,C.a5_,"Team Member","Sign in with your organization access code + password",t.gck1(),s))
w.push(C.ae)
w.push(new B.adX(C.apC,C.a6C,"Organization Owner","Subscribe for your team \xb7 create member logins",t.gcjx(),s))
return A.c4(s,q,A.bm(!0,A.ce(A.x(w,C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,new A.R(20,o.r.b+12,20,28),s,s,C.ah),!0,!1,C.ag,!0,!1),s,!1,!1,s,s)}}
B.adX.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.L(C.d.gH(x).j(0.35),C.r,1)
v=A.m(16)
u=y.p
return A.aH(!1,C.a3,!0,s,A.aP(!1,r,!0,A.eA(A.A(A.a([A.q(s,A.X(t.c,C.c,s,s,s,30),C.f,s,s,new A.p(s,s,s,v,s,new A.a8(C.a7,C.aa,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.ew,A.E(A.x(A.a([A.d(t.e,s,s,s,s,s,s,C.nf,s,s,s),C.aw,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.E,s,C.e,C.j,0,C.p),1),A.X(C.zc,C.d.gH(x).j(0.7),s,s,s,16)],u),C.l,s,C.e,C.j,0,s,s),s,new A.p(p,s,w,q,s,s,C.n),s,C.bS,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.L,0,s,s,s,s,s,C.aj)}}
B.aDK.prototype={}
B.aGS.prototype={}
B.jD.prototype={
mL(d){var x=this.b,w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(d,C.a.b2(x,w+1).toLowerCase())},
garp(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.i.ad(x/1024,1)+" KB"
if(x<1073741824)return C.i.ad(x/1048576,1)+" MB"
return C.i.ad(x/1073741824,2)+" GB"},
aj(){var x,w=this,v=A.T(y.N,y.z)
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
bfs(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jD(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cOw(d){return this.bfs(null,d)},
aG2(d){return this.bfs(d,null)}}
B.W8.prototype={
S(){return new B.aF5(new A.cw(null,y.A))},
gd1(){return this.c}}
B.aF5.prototype={
Y(){this.a4()
this.af9()},
af9(){var x=0,w=A.j(y.H),v,u=this,t
var $async$af9=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ck(u.a.c),$async$af9)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dZa(u,t))
case 1:return A.h(v,w)}})
return A.i($async$af9,w)},
afa(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$afa=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fF(new A.fw(s)),$async$afa)
case 3:t=u.c
if(t!=null)t.L(y.q).f.T(D.flJ)
case 1:return A.h(v,w)}})
return A.i($async$afa,w)},
a_B(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$a_B=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.apQ(s.d,4),$async$a_B)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_my_code_"+m+".png"),$async$a_B)
case 8:q=e
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
o=s.c
if(o!=null)o.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a_B,w)},
aj0(){var x=0,w=A.j(y.H),v,u=this,t
var $async$aj0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.abh("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$aj0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aj0,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.H,n=o?C.nA:C.qm,m=o?C.c:C.a_,l=A.eO(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.m2
else if(q.e==null)x=A.as(new A.D(C.ey,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.K,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.K,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aN.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.L(C.aE.j(0.4),C.r,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.I,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.q(p,A.x(A.a([t,C.T,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a5r,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.am,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.l,p,C.e,C.j,0,C.p),C.f,p,p,new A.p(p,p,u,v,p,new A.a8(C.a7,C.aa,C.x,w,p,p),C.n),p,p,p,p,Y.amd,p,p,1/0)
v=A.m(20)
u=A.a([new A.ab(0,C.G,C.aE.j(0.2),C.dp,24)],y.V)
s=q.e
s.toString
r=A.ce(A.x(A.a([x,C.nc,w,C.l4,new A.en(A.q(p,A.qc(p,p,!1,B.hV5(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.p(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bS,p,p,p),q.d),C.ae,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.K,p,p),C.l4,A.A(A.a([A.E(A.es(N.Dd,C.VU,q.gcbD(),p),1),C.au,A.E(A.dh(C.zC,C.abD,q.gcbE(),A.bp(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.l,p,C.e,C.j,0,p,p),C.W,new A.a5(1/0,p,A.es(M.a3K,D.fUm,q.gcyQ(),p),p)],r),C.l,p,C.e,C.j,0,C.p),C.t,p,C.y,p,U.amL,p,p,C.ah)
x=r}return A.c4(l,n,x,p,!1,!1,p,p)}}
B.Wc.prototype={
S(){return new B.aF8(new A.au(C.ax,$.ax()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aF8.prototype={
Y(){var x,w
this.a4()
x=this.a.e
w=B.Jo(x==null?"":x)
if(w!=null)this.d.sb1(0,w)},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
a_C(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a_C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.Jo(u.d.a.a)
if(t==null){u.m(new B.e_j(u))
x=1
break}u.m(new B.e_k(u))
s=u.a
r=s.c
x=3
return A.b(B.a84(s.d,new B.e_l(u),t,r),$async$a_C)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.e_m(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$a_C,w)},
a2R(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a2R=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cs(r.a.d)){x=1
break}r.m(new B.e_n(r))
u=4
q=J.fs(r.a.d)
x=7
return A.b(B.rV(r.a.c,q),$async$a2R)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.e_o(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.aiW(p,m,l,j,k),$async$a2R)
case 8:o=e
if(r.c!=null)r.m(new B.e_p(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.ac(h)
if(r.c!=null)r.m(new B.e_q(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.e_r(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2R,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.H,i=j?D.aig:D.afO,h=j?D.ak2:C.c,g=j?C.aS:C.a_,f=j?C.bN:C.an,e=j?D.ahd:C.bl
i=[i,e,h,g,f,j?C.fp:C.bQ]
x=A.P(d).ax.a===C.H
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eO(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.L,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ap(k,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),k),k,k,k,-50,-70,k)
v=A.ap(80,new A.du(!0,A.q(k,k,C.f,k,k,new A.p(k,k,k,k,k,new A.bY(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.L(i[1],C.r,1)
r=y.p
t=A.q(k,A.A(A.a([A.q(k,D.bY9,C.f,k,k,new A.p(k,k,k,A.m(16),k,new A.a8(C.aA,C.aF,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.ew,A.E(A.x(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.aw,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.E,k,C.e,C.j,0,C.p),1)],r),C.l,k,C.e,C.j,0,k,k),C.f,k,k,new A.p(u,k,s,t,k,k,C.n),k,k,k,k,C.ft,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a5r,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.uX(A.ag("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.blc()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.Z,u==null,k,!0,C.t,k,A.aO(),l.d,k,k,k,k,k,2,A.bA(k,k,k,C.Oc,k,k,"",k,!0,new A.b6(4,A.m(18),new A.ay(i[1],1,C.r,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b6(4,A.m(18),new A.ay(C.aE,1.7,C.r,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ak,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.e_s(l),k,!1,k,k,!1,k,!0,k,C.ad,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.K,k,C.my,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.K,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.I,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.L(i[1],C.r,1)
m=J.Mk(l.a.d,4)
m=A.C(new A.N(m,new B.e_t(x,new A.aI7(i)),m.$ti.k("N<ak.E,v>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.D(C.li,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a8,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bz,s,C.T,e,C.T,q,C.dc,p,C.T,A.q(k,A.x(m,C.l,k,C.e,C.j,0,C.p),C.f,k,k,new A.p(o,k,n,u,k,k,C.n),k,k,k,k,C.eH,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.L(C.aE.j(0.28),C.r,1)
q=A.a([],r)
if(l.f)q.push(D.fgi)
else q.push(A.X(C.lO,i[5],k,k,k,16))
q.push(C.au)
p=l.r
p.toString
q.push(A.E(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aO,A.cT(k,A.A(q,C.l,k,C.e,C.j,0,k,k),k,k,C.b_,new A.p(u,k,s,t,k,k,C.n),C.iO,k,k,k,k,C.f_,k,k,k)],r))}e=A.E(A.ce(A.x(e,C.al,k,C.e,C.j,0,C.p),C.t,k,C.y,k,D.bFK,k,k,C.ah),1)
u=l.f?k:l.gcyR()
t=i[3]
s=i[1]
q=A.m(16)
s=A.es(M.a3K,D.fVt,u,A.di(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cq,k,new A.b9(q,C.a1),new A.ay(s,1,C.r,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.K,k,k)
u=l.f?k:l.gcbF()
t=A.bp(C.aE,k,k,0,C.c,k,C.nF,k,new A.b9(A.m(16),C.a1),k,k,k)
return A.c4(g,h,new A.an(C.a0,k,C.ac,C.t,A.a([f,v,A.bm(!0,A.lB(new B.e_u(),A.x(A.a([e,new A.D(D.bFe,A.x(A.a([s,C.T,i,C.ae,A.bJ(l.f?C.tG:D.fTI,k,u,t)],r),C.al,k,C.e,C.j,0,C.p),k)],r),C.l,k,C.e,C.j,0,C.p),C.cw,C.a_Y,k,k,new A.br(0,1,y.X),y.i),!0,!1,C.ag,!0,!0)],r),k),k,!1,!1,k,k)}}
B.blc.prototype={
p_(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.ag("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.ag("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.ba(v,A.hh(C.bC,v.length),C.aP)}}
B.W9.prototype={
S(){return new B.aF6()}}
B.aF6.prototype={
Y(){var x,w,v,u=this
u.a4()
x=u.a
w=x.e
v=$.ax()
u.d!==$&&A.aQ()
u.d=new A.au(new A.ba(w,C.b5,C.aP),v)
x=x.d
u.e!==$&&A.aQ()
u.e=new A.au(new A.ba(x,C.b5,C.aP),v)
u.f!==$&&A.aQ()
u.f=new A.au(C.ax,v)},
t(){var x,w=this,v=w.d
v===$&&A.c()
x=v.U$=$.ax()
v.P$=0
v=w.e
v===$&&A.c()
v.U$=x
v.P$=0
v=w.f
v===$&&A.c()
v.U$=x
v.P$=0
w.a3()},
afb(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$afb=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dZb(r))
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
return A.b(B.a89(p,m,n,o,C.a.i(l).length===0?null:l),$async$afb)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.L(y.q).f.T(D.flk)
s=[1]
x=4
break}p.L(y.q).f.T(D.fjW)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dZc(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afb,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.H?C.nA:C.qm,q=A.eO(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fM4,s,s,s,1,s,!0),p=A.q(s,D.bxh,C.f,s,s,new A.p(s,s,s,A.m(22),s,E.I4,C.n),s,s,s,s,C.ad,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),o,s,s,s,s,s,2,D.c4q,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),x,s,s,s,s,s,2,D.c4l,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.Z,!1,s,!0,C.t,s,A.aO(),w,s,s,s,s,s,2,D.c4B,C.y,!0,s,!0,s,!1,s,C.ak,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.ad,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.ao,s,s,s,s)
v=t.r?s:t.gcbG()
u=A.bp(C.aE,s,s,s,s,C.h8,s,s,s,s,s,s)
return A.c4(q,r,A.ce(A.x(A.a([p,C.dc,o,C.ae,x,C.ae,w,C.nc,A.bJ(t.r?C.tG:C.aXv,s,v,u)],y.p),C.al,s,C.e,C.j,0,C.p),C.t,s,C.y,s,C.ad,s,s,C.ah),s,!1,!1,s,s)}}
B.ada.prototype={}
B.by4.prototype={
a5H(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a5H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gJ(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cd(r.apW()))
x=3
return A.b(B.Sg(t,s),$async$a5H)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a5H,w)},
gd1(){return this.a}}
B.Oj.prototype={
a7(){return"NgmyDocShareQrMode."+this.b}}
B.a_n.prototype={
S(){return new B.aB5(new A.au(C.ax,$.ax()),A.ka(!0,null,!0,!0,null,null,!1))}}
B.aB5.prototype={
Y(){this.a4()
$.aW.x1$.push(new B.dcy(this))},
t(){var x=this.d
x.U$=$.ax()
x.P$=0
this.e.t()
this.a3()},
cbM(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a2s(d),u=x.a.c,t=u?C.iJ:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.nA:v.a[0],p=A.m(24),o=A.L(C.aE.j(0.35),C.r,1),n=y.V,m=A.a([new A.ab(0,C.G,C.aE.j(u?0.25:0.12),C.h7,32)],n),l=A.q(w,T.asj,C.f,w,w,new A.p(w,w,w,A.m(18),A.a([new A.ab(0,C.G,C.aE.j(0.4),C.cC,16)],n),C.at7,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.K,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.K,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.I,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.uX(A.ag("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bxH()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.U,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.Z,!1,w,!0,C.t,w,A.aO(),x.d,w,w,w,w,w,2,A.bA(w,w,w,C.Cp,w,w,"",w,!0,new A.b6(4,A.m(16),new A.ay(f[1],1,C.r,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b6(4,A.m(16),D.b5E),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ak,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.dcw(x),w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.K,w,C.my,w,w,w,w)
f=f[1]
h=y.p
return A.eP(w,C.L,new A.cP(Q.LU,new A.bN(new A.p(t,w,o,p,m,w,C.n),C.bj,new A.D(C.yQ,A.x(A.a([l,C.aO,k,C.T,j,C.e3,i,C.e3,A.A(A.a([A.E(A.dU(C.o0,new B.dcx(d),A.di(w,w,w,w,w,w,w,w,w,s,w,w,C.cq,w,new A.b9(A.m(14),C.a1),new A.ay(f,1,C.r,-1),w,w,w,w)),1),C.au,A.E(new A.bN(new A.p(w,w,w,A.m(14),A.a([new A.ab(0,C.G,C.aE.j(0.35),C.cL,12)],n),L.Qa,C.n),C.bj,A.aH(!1,C.a3,!0,w,A.aP(!1,A.m(14),!0,D.et7,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gcbL(),w,w,w,w,w,w,w),C.f,C.L,0,w,w,w,w,w,C.aj),w),2)],h),C.l,w,C.e,C.j,0,w,w)],h),C.l,w,C.e,C.P,0,C.p),w),w),w),w,w,w,C.Oj,C.db,w,w,w)}}
B.bxH.prototype={
p_(d,e){return e.amg(e.a.toUpperCase())}}
B.Wa.prototype={
S(){return new B.aF7(A.a([],y.r),A.aR(y.N))},
gd1(){return this.c}}
B.aF7.prototype={
Y(){var x=this
x.a4()
x.uq()
x.w=A.dg(C.jE,new B.e_h(x))},
t(){var x=this.w
if(x!=null)x.a1(0)
B.Wj()
this.a3()},
a1J(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a1J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oi(u.a.c),$async$a1J)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Bj(u.a.c),$async$a1J)
case 4:u.m(new s.dZF(u,e))
u.ij("Received "+A.w(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a1J,w)},
uq(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$uq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Oi(u.a.c),$async$uq)
case 3:t=e
x=4
return A.b(B.Bj(u.a.c),$async$uq)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dZG(u,s))
if(t>0)u.ij("Received "+A.w(t)+" file(s) via My Code.")
u.Oa(u.d)
B.Ck(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$uq,w)},
Oa(d){return this.bGh(d)},
bGh(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$Oa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a8e(r,u.a.c),$async$Oa)
case 8:p=f
if(u.c==null){x=1
break}new B.dZe(u,r,p).$0()
u.c.eo()
case 7:if(!(C.a.a_(r.c,"video/")||r.mL(D.n6))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Wh(r,u.a.c),$async$Oa)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.J)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Bj(u.a.c),$async$Oa)
case 12:u.m(new o.dZf(u,f))
case 1:return A.h(v,w)}})
return A.i($async$Oa,w)},
Oz(d){return this.bMC(d)},
bMC(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Oz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a8e(d,u.a.c),$async$Oz)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dZk(u,d,t))
x=6
return A.b(A.fF(new A.fw(t)),$async$Oz)
case 6:u.ij("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fF(new A.fw(r.toUpperCase())),$async$Oz)
case 7:u.ij("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Oz,w)},
ij(d){var x=null,w=this.c
if(w==null)return
w.L(y.q).f.T(A.b3(x,x,x,x,x,C.t,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.Y,x,x,x,x,x,x,x,x,x,x))},
ur(d,e){return this.cJL(d,e)},
cJL(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$ur=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.e_5(r,e))
u=3
x=6
return A.b(d.$0(),$async$ur)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.e_6(r))
$.eX.mE()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ur,w)},
gaXO(){var x=this.a
return x.f||x.r||x.w},
IF(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$IF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaXO()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.ce4(s,n,r,q,o,t),$async$IF)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.ij("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fOG(o,u.a.c),$async$IF)
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
return A.b(B.DK(s,o,r,q,n,t),$async$IF)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$IF,w)},
a0N(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aqP(u.a.c),$async$a0N)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.ij("No organization portal found.")
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
return A.b(A.a6(t,!1).ce(A.ec(new B.dZC(u,r,q),!1,null,y.H)),$async$a0N)
case 4:case 1:return A.h(v,w)}})
return A.i($async$a0N,w)},
a1T(d){return this.cso(d)},
csn(){return this.a1T(1)},
cso(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a1T=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaXO()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.aqM(u.a.c),$async$a1T)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a1T,w)},
ad1(d,e,f){return this.c2C(d,e,f)},
c2C(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$ad1=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij(e)
x=1
break}x=3
return A.b(u.ur(new B.dZz(u,d,null,e,f),"Uploading\u2026"),$async$ad1)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ad1,w)},
bGq(){B.hFd(!1,new B.dZi(this))
return},
cxr(){this.m(new B.dZK(this))},
aAz(){var x=0,w=A.j(y.H),v=this
var $async$aAz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bGq()
return A.h(null,w)}})
return A.i($async$aAz,w)},
acY(){var x=0,w=A.j(y.H),v=this
var $async$acY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ur(new B.dZo(v),"Importing\u2026"),$async$acY)
case 2:return A.h(null,w)}})
return A.i($async$acY,w)},
T2(d){return this.cJ4(d)},
cJ4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$T2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a_(t,"video/")||d.mL(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.e_2(u,d),!1,null,y.H)),$async$T2)
case 5:x=1
break
case 4:x=C.a.a_(t,"image/")||d.mL(D.S8)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).ce(A.ec(new B.e_3(u,d),!1,null,y.H)),$async$T2)
case 8:x=1
break
case 7:x=u.c3k(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).ce(A.ec(new B.e_4(u,d),!1,null,y.H)),$async$T2)
case 11:x=1
break
case 10:u.ij("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$T2,w)},
c3k(d){var x,w
if(C.a.a_(d.c,"audio/"))return!0
x=d.b
w=C.a.p7(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.q(D.cT8,C.a.b2(x,w+1).toLowerCase())},
agJ(d){return this.cje(d)},
cje(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$agJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a_(d.c,"video/")||d.mL(D.n6)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).ce(A.ec(new B.dZA(u,d),!1,null,y.H)),$async$agJ)
case 5:x=1
break
case 4:u.m(new B.dZB(u,d))
case 1:return A.h(v,w)}})
return A.i($async$agJ,w)},
Sn(d){return this.cAk(d)},
cAk(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Sn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.ij("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.py(t,s.c,s.f),$async$Sn)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.ur(new B.dZW(u,d),"Preparing QR\u2026"),$async$Sn)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Sn,w)},
ajq(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ajq=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZX(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZY(q),s),s.k("M.E"))
if(r.length===0){u.ij("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.Sn(r),$async$ajq)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ajq,w)},
ajj(d){return this.czS(d)},
czS(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2s(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.dZQ(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$ajj)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.T2(d)
break
case"qr":u.Sn(A.a([d],y.r))
break
case"send_my_code":u.cjR(A.a([d],y.r))
break
case"save":u.aiH(d)
break
case"delete":u.Jx(d)
break}case 1:return A.h(v,w)}})
return A.i($async$ajj,w)},
Yp(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$Yp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.N(t,new B.dZl(),A.U(t).k("N<1,n>")).fM(0)}t=u.d
s=A.U(t).k("Y<1>")
r=A.C(new A.Y(t,new B.dZm(q),s),s.k("M.E"))
if(r.length===0){u.ij("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.py(t,s.c,s.f),$async$Yp)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.ur(new B.dZn(u,r),"Preparing file\u2026"),$async$Yp)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Yp,w)},
ahO(d){return this.cqJ(d)},
cqJ(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$ahO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hG4(d,!1),$async$ahO)
case 3:s=f
r=s==null
q=B.a8b(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.ij("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ahO,w)},
agP(){var x=0,w=A.j(y.H),v=this,u
var $async$agP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fWs(u,v.a.c),$async$agP)
case 2:return A.h(null,w)}})
return A.i($async$agP,w)},
bGp(){B.hFd(!1,new B.dZh(this,null))
return},
JM(d,e){return this.cjS(d,e)},
b3h(d){return this.JM(null,d)},
cjR(d){return this.JM(d,null)},
cjS(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$JM=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("Y<1>")
k=A.C(new A.Y(p,new B.dZD(s),o),o.k("M.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.xQ.cq().ap1(!0,C.a1L,!1),$async$JM)
case 10:r=g
if(r==null||J.cs(r.a)){x=1
break}x=11
return A.b(s.ur(new B.dZE(l,s,r),"Preparing\u2026"),$async$JM)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.ac(j)
$.am.$1("[doc share send my code pick] "+A.w(q))
s.ij("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.ij("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bG5(p,l,e,s.a.c),$async$JM)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$JM,w)},
IV(d){return this.c2p(d)},
c2p(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$IV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a_(q,"NGMYDOCRCV|")||C.a.a_(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hV4(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.b3h(t),$async$IV)
case 8:x=6
break
case 7:u.ij("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.ag("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.ij("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a_(d,"NGMYDOCSYNC3|")||C.a.a_(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.ur(new B.dZx(u,d),"Receiving video\u2026"),$async$IV)
case 11:x=1
break
case 10:x=12
return A.b(u.ur(new B.dZy(u,d),"Receiving\u2026"),$async$IV)
case 12:case 1:return A.h(v,w)}})
return A.i($async$IV,w)},
EN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$EN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.DE()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.ahO(t),$async$EN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.IV(s),$async$EN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZI(u),!1,null,y.N)),$async$EN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.uq(),$async$EN)
case 10:x=1
break
case 9:x=11
return A.b(u.IV(C.a.i(r)),$async$EN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$EN,w)},
aiH(d){return this.cvZ(d)},
cvZ(d){var x=0,w=A.j(y.H),v=this
var $async$aiH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.ur(new B.dZH(v,d),"Saving\u2026"),$async$aiH)
case 2:return A.h(null,w)}})
return A.i($async$aiH,w)},
Jx(d){return this.bOX(d)},
bOX(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Jx=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.ln(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Jx)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.ce7(t),$async$Jx)
case 6:case 5:s=d.a
x=7
return A.b(B.Fm(u.a.c,s),$async$Jx)
case 7:u.r.W(0,s)
x=8
return A.b(u.uq(),$async$Jx)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Jx,w)},
ajw(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ajw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a2s(r)
r=u.c
r.toString
x=3
return A.b(A.bU(C.L,null,new B.e_1(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ajw)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.agP()
break
case"import":u.acY()
break}case 1:return A.h(v,w)}})
return A.i($async$ajw,w)},
cbJ(d){var x=d.c
if(C.a.a_(x,"video/")||d.mL(D.n6))return C.qS
if(C.a.a_(x,"image/")||d.mL(D.S8))return C.uS
if(C.a.q(x,"pdf"))return E.PF
return D.aq2},
B(d){var x,w,v=this,u=null,t=B.a2s(d),s=t.a,r=s[0],q=s[3],p=A.aI(u,u,u,u,C.HY,u,u,u,new B.e_c(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aI(u,u,u,u,D.bYL,u,u,u,v.e?u:v.gcjy(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcxq()
n.push(A.aI(u,u,u,u,A.X(v.r.a===x?D.bSZ:E.aqs,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aI(u,u,u,u,C.a3H,u,u,u,v.e?u:v.gcbK(),u,u,u,u,"Scan QR",u))
n.push(A.aI(u,u,u,u,C.oH,u,u,u,v.e?u:v.gb4m(),u,u,u,u,"Upload files",u))
n.push(A.aI(u,u,u,u,D.c_x,u,u,u,v.e?u:new B.e_d(v),u,u,u,u,"More options",u))
q=A.eO(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.L,u,new A.lZ(new B.e_e(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ap(u,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.H?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),u),u,u,u,-60,-80,u)
n=A.ap(40,new A.du(!0,A.q(u,u,C.f,u,u,new A.p(u,u,u,u,u,new A.bY(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.H?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.kq(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.E(new B.aB2(C.jK,s,!0,t,w?u:v.gcAl(),u),1)
x.push(new A.D(D.bE_,A.lB(new B.e_f(),A.A(A.a([s,C.au,A.E(new B.aB2(C.uT,"Export",!1,t,w?u:v.gbSQ(),u),1)],o),C.l,u,C.e,C.j,0,u,u),C.cw,C.iz,u,u,new A.br(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bfK(t,v.e?u:v.gb4m(),u)
else s=A.kr(!0,u,u,new B.e_g(v,t),s,u,D.bDS,u,u,!1,!1)
x.push(A.E(s,1))
return A.c4(q,r,new A.an(C.a0,u,C.ac,C.t,A.a([p,n,A.x(x,C.l,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.aB2.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bp(C.aE,t,t,0,C.c,t,C.uz,t,new A.b9(s,C.a1),t,t,t)
return A.dh(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ci,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.di(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.uz,t,new A.b9(s,C.a1),new A.ay(v,1,C.r,-1),t,t,t,t)
return A.es(A.X(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.fb,t,t,t),u.r,v)}}
B.bfK.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.L(v[5].j(0.35),C.r,1),s=y.i
return A.as(A.lB(new B.dcu(),new A.D(E.a0S,A.x(A.a([A.lB(new B.dcv(),A.q(x,A.X(C.ze,v[5],x,x,x,36),C.f,x,x,new A.p(x,x,t,x,x,new A.a8(C.aA,C.aF,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.e2,C.hI,x,x,new A.br(0.86,1,w),s),C.e3,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.K,x,x),C.W,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.K,x,x),C.e3,A.dh(C.oH,D.fZ6,this.d,A.bp(C.aE,x,x,x,C.c,x,C.Oh,x,new A.b9(A.m(16),C.a1),x,x,x))],y.p),C.l,x,C.e,C.P,0,C.p),x),C.cw,C.Cc,x,x,new A.br(0,1,w),s),x,x,x)}}
B.adu.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dw(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
x=k.f.a
w=x[2]
v=A.m(18)
u=k.e
t=u?C.aE.j(0.85):x[1]
s=u?1.5:1
r=A.m(18)
q=A.m(14)
p=i.c
o=!C.a.a_(p,"video/")
if(!o||i.mL(D.n6))p=D.dt2
else{p=C.a.a_(p,"image/")||i.mL(D.S8)
n=y.O
p=p?A.a([C.cJ,C.aE],n):A.a([C.aN.j(0.85),C.aE.j(0.7)],n)}p=A.q(j,A.X(k.w,C.c,j,j,j,22),C.f,j,j,new A.p(j,j,j,q,j,new A.a8(C.aA,C.aF,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.I,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.garp()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mL(D.n6))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bc,A.E(A.x(A.a([q,C.aw,A.d(C.d.aO(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.E,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aI(j,j,j,j,A.X(C.fM,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.cg))
if(!(!o||i.mL(D.n6)))l.push(A.h6J(C.aE,!1,j,j,j,!1,j,j,new B.dcR(k),j,j,new A.b9(A.m(5),C.a1),j,j,!1,u))
x=A.X(C.oz,x[4],j,j,j,j)
l.push(A.aI(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.cg))
return A.lB(new B.dcS(),new A.D(C.en,A.aH(!1,C.a3,!0,j,A.aP(!1,r,!0,new A.D(C.a0j,A.A(l,C.l,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b9(v,new A.ay(t,s,C.r,-1)),j,j,C.aj),j),C.cw,h,new A.by("docshare_row_"+i.a,y.aw),j,new A.br(0,1,y.X),y.i)}}
B.a_p.prototype={
S(){return new B.aB7()},
gd1(){return this.c}}
B.aB7.prototype={
Y(){this.a4()
this.yx()},
t(){B.hVj(this.e)
this.a3()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rV(o.c,o.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aI.gau(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hVm(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hVl(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.dcO(s))
x=1
break}s.m(new B.dcP(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.ac(l)
if(s.c==null){x=1
break}s.m(new B.dcQ(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a2Q(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a2Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rV(t.c,t.d),$async$a2Q)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(D.fik)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.aiW(q,s,t.length===0?"image/jpeg":t,null,s),$async$a2Q)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a2Q,w)},
c2i(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kE(u,C.A,v,new B.dcM(w,t),C.hh,C.dE,!0,v,v,v,v)
else if(t!=null&&!C.aI.gau(t))x=A.fR(t,C.A,v,new B.dcN(w),C.hh,C.dE,!0,v,!1,v,v)
else return C.bM
return A.v2(C.ag,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a2s(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.I,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aI(u,u,u,u,C.De,u,u,u,v.gb88(),u,u,u,u,"Share / save",u))
r=A.eO(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.Fw
else{q=v.r
if(q!=null)t=new A.D(C.ey,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.K,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.q(x,"heic")||C.a.q(x,"heif")||C.a.c7(w,".heic")||C.a.c7(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.D(C.ey,A.x(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.K,u,u),C.aO,A.dh(C.De,D.fHj,v.gb88(),A.bp(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.l,u,C.e,C.P,0,C.p),u)
t=p}else t=v.c2i()}return A.c4(r,s,A.as(t,u,u,u),u,!1,!1,u,u)}}
B.a_m.prototype={
S(){return new B.aB4(A.ajQ(),C.bF,C.bF)},
gd1(){return this.c}}
B.aB4.prototype={
Y(){var x,w,v=this
v.a4()
x=v.d
w=x.CW
new A.fA(w,A.a4(w).k("fA<1>")).iC(new B.dcr(v))
x.gcXD().iC(new B.dcs(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.fA(x,A.a4(x).k("fA<1>"))}if(x==null)x=C.bc0
x.iC(new B.dct(v))
v.yx()},
yx(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$yx=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rV(p.c,p.d),$async$yx)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.dck(s))
x=1
break}x=8
return A.b(s.d.vu(0,new A.a4B(r,s.a.d.c)),$async$yx)
case 8:if(s.c==null){x=1
break}s.m(new B.dcl(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.ac(n)
if(s.c==null){x=1
break}s.m(new B.dcm(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$yx,w)},
a_D(){var x=0,w=A.j(y.H),v=this,u
var $async$a_D=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.hg(0),$async$a_D)
case 5:x=3
break
case 4:x=6
return A.b(u.iG(0),$async$a_D)
case 6:case 3:return A.h(null,w)}})
return A.i($async$a_D,w)},
aVC(d){var x=d.a
return C.a.b_(C.o.u(C.o.aq(x,6e7)%60),2,"0")+":"+C.a.b_(C.o.u(C.o.aq(x,1e6)%60),2,"0")},
t(){this.d.t()
this.a3()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a2s(d),m=C.o.aq(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eO(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.I,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.Fw
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.K,o,o)
else{u=A.q(o,D.bTX,C.f,o,o,new A.p(o,o,o,A.m(24),o,L.Qa,C.n),o,88,o,o,o,o,o,88)
t=A.kY(C.aE,o,o,m,0,new B.dcn(p),C.o.D(C.o.aq(p.w.a,1000),0,m))
x=A.d(p.aVC(p.w)+" / "+p.aVC(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a8,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bp(C.aE,o,o,o,o,D.feK,o,o,o,o,o,o)
r=p.f
q=A.X(r?I.uW:C.hi,o,o,o,o,o)
x=A.x(A.a([u,C.l4,t,x,C.dc,A.dh(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gcbN(),s)],y.p),C.l,o,C.e,C.P,0,C.p)}}return A.c4(v,w,A.as(new A.D(C.qE,x,o),o,o,o),o,!1,!1,o,o)}}
B.QF.prototype={
S(){return new B.aBa()},
gd1(){return this.c}}
B.aBa.prototype={
Y(){this.a4()
this.Qf()},
Qf(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$Qf=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.h91(o.c,o.d,new B.dd4(s)),$async$Qf)
case 7:r=e
if(r==null||r.length===0){s.m(new B.dd5(s))
x=1
break}s.e=r
q=O.ii2(r)
if(q==null){s.m(new B.dd6(s))
x=1
break}s.d=q
q.aW(0,s.gb34())
x=8
return A.b(q.iX(0).dh(0,C.rV),$async$Qf)
case 8:if(s.c==null){x=1
break}s.m(new B.dd7(s))
x=9
return A.b(q.qr(0),$async$Qf)
case 9:q.u_(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.ac(m)
if(s.c==null){x=1
break}s.m(new B.dd8(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Qf,w)},
chN(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.dd9(x))},
t(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Dw(0,x.gb34())
w=x.d
if(w!=null)w.t()
B.isK(x.e)
x.a3()},
afe(){var x=0,w=A.j(y.H),v=this,u,t
var $async$afe=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.b19(u.c,u.d),$async$afe)
case 2:t=e
u=v.c
if(u!=null)u.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$afe,w)},
B(d){var x,w,v,u=this,t=null,s=B.a2s(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.I,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eO(A.a([A.aI(t,t,t,t,C.oG,t,t,t,u.gcbH(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.iq(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.Fw
else{q=u.r
if(q!=null)s=new A.D(C.ey,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.K,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.aji(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fH(x,new A.an(C.A,t,C.ac,C.t,A.a([new A.AP(s,t),A.az(t,A.zn(A.q(t,A.X(q?I.uW:C.hi,C.c,t,t,t,48),C.f,t,t,new A.p(C.b6,t,t,v,t,t,C.n),t,t,t,t,C.bS,t,t,t),C.b_,C.a3,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.ddb(u),t,t,t,t,t,t,!1,C.a4)],o),t),t)}else s=C.bM}}return A.c4(p,r,A.as(s,t,t,t),t,!1,!1,t,t)}}
B.a_r.prototype={
S(){return new B.aB8(new A.cw(null,y.A))}}
B.aB8.prototype={
gcJs(){var x,w,v=this.a
if(v.e!==D.Tt)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"WR"))return w
return null},
gcJ2(){var x,w,v=this.a
if(v.e!==D.Ah)return null
x=C.a.i(v.c)
if(!C.a.a_(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b2(x,13))
if(C.a.a_(w,"VT"))return w
return null},
Y(){var x,w,v=this
v.a4()
x=v.gcJs()
if(x!=null){v.Rn(x)
v.e=A.dg(R.GH,new B.dd0(v,x))}w=v.gcJ2()
if(w!=null){v.Rm(w)
v.f=A.dg(C.fJ,new B.dd1(v,w))}},
t(){var x=this.e
if(x!=null)x.a1(0)
x=this.f
if(x!=null)x.a1(0)
this.a3()},
Rm(d){return this.coW(d)},
coW(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Rm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.aqU(d),$async$Rm)
case 3:t=f
x=4
return A.b(B.ceq(d),$async$Rm)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.dcT(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$Rm,w)},
Rn(d){return this.coX(d)},
coX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fX4(d),$async$Rn)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bDZ(t),$async$Rn)
case 4:if(u.c==null){x=1
break}u.m(new B.dcU(u))
u.c.L(y.q).f.T(D.aUe)
case 1:return A.h(v,w)}})
return A.i($async$Rn,w)},
gc7z(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gcbI(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a2C(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a2C=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.DE()){t=u.c
if(t!=null)t.L(y.q).f.T(D.flu)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).ce(A.ec(new B.dcV(),!1,null,y.N)),$async$a2C)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bDZ(s),$async$a2C)
case 4:t=u.c
if(t!=null)t.L(y.q).f.T(D.aUe)
case 1:return A.h(v,w)}})
return A.i($async$a2C,w)},
aaR(d){return this.bMD(d)},
bMD(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fF(new A.fw(C.d.aO(t,", "))),$async$aaR)
case 3:if(d.e!=null){t=d.L(y.q).f
t.T(A.b3(null,null,null,null,null,C.t,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$aaR,w)},
afc(d){return this.bMl(d)},
bMl(d){var x=0,w=A.j(y.H),v=this
var $async$afc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fF(new A.fw(v.a.c)),$async$afc)
case 2:if(d.e!=null)d.L(y.q).f.T(D.fiO)
return A.h(null,w)}})
return A.i($async$afc,w)},
a2w(d){return this.cw0(d)},
cw0(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a2w=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.apQ(s.d,4),$async$a2w)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.tq(r,"ngmy_doc_share_qr.png"),$async$a2w)
case 8:q=f
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.ac(n)
if(d.e!=null)d.L(y.q).f.T(A.b3(null,null,null,null,null,C.t,null,A.d("Could not save QR: "+A.w(p),null,null,null,null,null,null,null,null,null,null),null,C.Y,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a2w,w)},
gaZ4(){var x,w=this.a
if(w.e!==D.Jb)return null
x=C.a.i(w.c)
if(C.a.a_(x,"N2|"))return C.a.i(C.a.b2(x,3))
if(C.a.a_(x,"http://")||C.a.a_(x,"https://"))return x
if(C.a.a_(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b2(x,13))
return null},
aaO(d){return this.bMw(d)},
bMw(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aaO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaZ4()
if(t==null){x=1
break}x=3
return A.b(A.fF(new A.fw(C.a.a_(t,"http")?t:"N2|"+t)),$async$aaO)
case 3:if(d.e!=null)d.L(y.q).f.T(D.fkt)
case 1:return A.h(v,w)}})
return A.i($async$aaO,w)},
afd(){var x=0,w=A.j(y.H),v=this,u
var $async$afd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Wj(),$async$afd)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$afd,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a2s(d),i=m.a,h=i.c
if(h.length>48)h=C.a.aB(h,0,44)+"\u2026"
i=i.e
i=i!==D.Jb&&i!==D.Tt&&i!==D.Ah
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eO(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Jb||t===D.Tt||t===D.Ah?l:A.aI(l,l,l,l,C.lo,l,l,l,m.gb16(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.L(C.aE.j(0.35),C.r,1)
q=m.a
p=y.p
q=A.a([C.T,A.qc(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bz,A.d(""+q.d+" file(s) \xb7 "+m.gc7z(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Jb){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.T,A.q(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(t,l,l,o,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}q.push(C.aO)
q.push(A.d(m.gcbI(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.K,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gH(t):"Type-in codes: "+C.d.aO(t,", ")
C.d.v(q,A.a([C.W,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.U,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hp(D.c3t,D.fQT,new B.dcW(m,d),l)],p))}if(m.a.e===D.Jb&&m.gaZ4()!=null)C.d.v(q,A.a([C.W,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a8,l,l,!0,l,l,l,l,l,l,l,l),C.K,l,l),A.hp(D.c_T,D.fNs,new B.dcX(m,d),l)],p))
if(m.a.e===D.Ah){x=(m.w?C.dL:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.i.ad(C.i.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.T,A.q(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.Fz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l)],p))}if(m.a.e===D.Tt){x=(m.r?C.dL:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.T,A.q(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.Fz:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.I,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.p(x,l,l,t,l,l,C.n),l,l,l,l,C.mc,l,l,l),C.ae,A.dh(D.bWp,D.fU1,m.gcwn(),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oO(i,A.c4(v,w,new A.D(C.ad,A.x(A.a([A.E(A.q(l,A.x(q,C.l,l,C.ba,C.j,0,C.p),C.f,l,l,new A.p(u,l,r,s,l,l,C.n),l,l,l,l,C.ad,l,l,1/0),1),C.ae,A.A(A.a([A.E(A.es(N.Dd,C.VU,new B.dcY(m,d),l),1),C.au,A.E(A.dh(C.zC,C.abD,new B.dcZ(m,d),A.bp(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.l,l,C.e,C.j,0,l,l),C.T,new A.a5(1/0,l,A.bJ(C.AX,l,m.gb16(),A.bp(C.aN,l,l,l,l,C.h8,l,l,l,l,l,l)),l)],p),C.l,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.dd_(),y.C)}}
B.ads.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.K,x,x),v=A.m(16),u=y.p
v=A.ce(A.x(A.a([w,C.aO,A.q(x,A.qc(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.p(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bI,x,x,x)],u),C.l,x,C.e,C.P,0,C.p),C.t,x,C.y,x,x,x,x,C.ah)
return A.eg(A.a([A.bJ(C.AY,x,new B.dcj(d),x)],u),x,x,C.no,v,x,x,x,x,D.fGj,x)}}
B.a_l.prototype={
S(){return new B.aB3(A.zY(C.yv,C.o6,C.v9))}}
B.aB3.prototype={
t(){this.d.t()
this.a3()},
az6(d){var x,w,v,u,t
if(this.e)return
for(x=d.a,w=x.length,v=0;v<w;++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(C.a.a_(t,"NGMYDOCSYNC3A|")){this.e=!0
x=this.c
x.toString
A.a6(x,!1).O(t)
return}}},
B(d){var x=null
return A.c4(A.eO(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fO_,x,x,x,1,x,!0),C.w,A.zX(this.d,C.c_,this.gaz5()),x,!1,!1,x,x)}}
B.a_s.prototype={
S(){return new B.aB9(A.zY(C.yv,C.o6,C.v9))},
gd1(){return this.c}}
B.aB9.prototype={
c3m(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a_(x,"NGMYDOCSYNC")||C.a.a_(x,"N2|")||C.a.a_(x,"http://")||C.a.q(x,"ngmyDocShareBundle")},
ahb(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ahb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.MM("text/plain"),$async$ahb)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.L(y.q).f.T(D.flo)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$ahb,w)},
abF(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$abF=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hG4(p,!0),$async$abF)
case 3:t=e
p=t==null
s=B.a8b(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.L(y.q).f.T(D.fhV)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$abF,w)},
t(){this.d.t()
this.a3()},
az6(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.J)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.c3m(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aI(v,v,v,v,F.aro,v,v,v,w.gbSj(),v,v,v,v,"Enter QR share code",v),t=A.aI(v,v,v,v,F.a3O,v,v,v,w.gcmh(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eO(A.a([u,t,A.aI(v,v,v,v,A.X(w.f?C.uP:P.Po,v,v,v,v,v),v,v,v,new B.dd3(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fUZ,v,v,v,1,v,!0)
u=A.zX(w.d,C.c_,w.gaz5())
x=A.m(20)
return A.c4(t,C.w,new A.an(C.a0,v,C.ac,C.t,A.a([u,A.as(A.q(v,v,C.f,v,v,new A.p(v,v,A.L(C.aN,C.r,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.ezq],s),v),v,!1,!1,v,v)}}
B.bfL.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.pi
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.q(r,A.X(s.c,x,r,r,r,22),C.f,r,r,new A.p(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.pi:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.I,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aH(!1,C.a3,!0,r,A.aP(!1,w,!0,new A.D(C.a0Y,A.A(A.a([u,C.bc,A.E(A.x(t,C.E,r,C.e,C.j,0,C.p),1),A.X(C.eI,s.f.a[4],r,r,r,22)],v),C.l,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.L,0,r,r,r,r,r,C.aj)}}
B.aaE.prototype={
a7(){return"RTCDataChannelState."+this.b}}
B.Pp.prototype={
a7(){return"RTCSignalingState."+this.b}}
B.Ys.prototype={
a7(){return"RTCIceGatheringState."+this.b}}
B.Po.prototype={
a7(){return"RTCPeerConnectionState."+this.b}}
B.FR.prototype={
a7(){return"RTCIceConnectionState."+this.b}}
B.cs7.prototype={}
B.FQ.prototype={}
B.aaD.prototype={}
B.avq.prototype={}
B.Yt.prototype={}
var z=a.updateTypes(["aB<~>()","Q(jD)","n(jD)","Wa(Z)","~()","a_o(Z)","H(H,jD)","QF(Z)","~(ml)","ct(FQ)","aB<jD?>(@)","W8(Z)","Wc(Z)","D(jD)","jD(@)","a9<n,@>(jD)","a_n(Z)","W9(Z)","a_p(Z)","a_m(Z)","a_r(Z)","ads(Z)","ai<jD>()","a_s(Z)","adu(Z,H)","a_l(Z)","a9<n,aE>(jD)","ct(Ys)","ct(aaD)","aB<ct>(FQ)"])
B.cs3.prototype={
$1(d){var x=this.a
x.x=D.aR0
x.y.I(0,D.aR0)},
$S:74}
B.cs4.prototype={
$1(d){var x=this.a
x.x=D.aR_
x.y.I(0,D.aR_)},
$S:74}
B.cs5.prototype={
$1(d){var x=this.a
x.aiz(A.ahJ(d.data)).bG(new B.cs2(x),y.b)},
$S:74}
B.cs2.prototype={
$1(d){var x=this.a
x.z.I(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cs6.prototype={
$1(d){},
$S:74}
B.cs9.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.i_7(d.channel))},
$S:16}
B.csa.prototype={
$1(d){},
$S:16}
B.csb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijc(w.iceConnectionState)
x.cx=w
if($.hiu())switch(w.a){case 0:x.cy=D.aR5
break
case 1:x.cy=D.aR6
break
case 3:x.cy=D.aR7
break
case 5:x.cy=D.aR3
break
case 6:x.cy=D.aR4
break
case 7:x.cy=D.a9l
break
default:break}},
$S:104}
B.csc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.ijd(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:104}
B.csd.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.iui(w.signalingState)},
$S:104}
B.cse.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.isr(w.connectionState)},
$S:104}
B.csf.prototype={
$1(d){},
$S:104}
B.csg.prototype={
$1(d){},
$S:16}
B.fwL.prototype={
$1(d){var x=y.F.a(new A.qr([],[]).o_(d.target.result,!1)),w=C.wk.q(x.objectStoreNames,"blobs")
if(!w)C.wh.Gi(x,"blobs")},
$S:170}
B.fWg.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.wU.fs(this.b)
$.eX.mE()
this.c.$1(d)},
$S:464}
B.fWi.prototype={
$1(d){return this.a.$1(B.i8y(this.b,this.c))},
$S:30}
B.fWh.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:30}
B.fWf.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fWv.prototype={
$1(d){var x=this
return B.huX(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fWw.prototype={
$1(d){var x=this
return B.huX(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fzr.prototype={
$1(d){var x=this
return B.ce1(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.dcC.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.dcz.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ce1(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.dcB.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ce1(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.dcA.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.ce1(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.dcE.prototype={
$4(d,e,f,g){var x=null
return A.k1(A.A(A.a([A.aI(x,x,x,x,D.bV1,x,x,x,new B.dcD(d),x,x,x,x,x,x),A.E(A.FC(D.RT,!0,x,!1,C.a2P,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.l,x,C.e,C.j,0,x,x),D.RT,x,g,C.an2,0,e,f)},
$C:"$4",
$R:4,
$S:441}
B.dcD.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBo.prototype={
$1(d){var x,w,v=null,u=A.aF(d,C.eS,y.m).w,t=this.a,s=t?C.iJ:C.c,r=A.m(28),q=A.q(v,D.bxB,C.f,v,v,D.b7h,v,v,v,v,D.amS,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aS
o=A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),p,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bZl,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aS
w=y.p
return new A.D(new A.R(0,0,0,u.f.d),A.q(v,A.x(A.a([q,new A.D(C.GV,A.x(A.a([o,C.ae,A.aM(v,C.Z,!1,v,!0,C.t,v,A.aO(),x,v,v,v,v,v,2,A.bA(v,new A.b6(4,A.m(16),C.a1),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.arF,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ak,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.ad,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.ao,v,v,v,v),C.bz,A.A(A.a([A.E(A.dU(C.dt,new B.fBm(d),v),1),C.au,A.E(A.bJ(D.fMs,v,new B.fBn(p,x,d),A.bp(C.b3,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.l,v,C.e,C.j,0,v,v)],w),C.l,v,C.e,C.j,0,C.p),v)],w),C.l,v,C.e,C.P,0,C.p),C.f,v,v,new A.p(s,v,v,r,v,v,C.n),v,v,v,C.GK,v,v,v,v),v)},
$S:59}
B.fBm.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fBn.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.L(y.q).f.T(D.fj4)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aDK(v,x))},
$S:0}
B.fBS.prototype={
$1(d){var x=this,w=null,v=A.aF(d,C.eS,y.m).w,u=x.a,t=u?C.iJ:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.D(new A.R(0,0,0,v.f.d),A.q(w,A.x(A.a([A.q(w,D.bxr,C.f,w,w,D.b8M,w,w,w,w,D.amS,w,w,1/0),new A.D(C.GV,A.x(A.a([A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),r,w,w,w,w,w,2,B.heh(u,"Organization name",C.Hl,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),q,w,w,w,w,w,2,B.heh(u,"Access code",C.nK,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.W,A.aM(w,C.Z,!1,w,!0,C.t,w,A.aO(),p,w,w,w,w,w,2,B.heh(u,"Member password",H.HT,w),C.y,!0,w,!0,w,!1,w,C.ak,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.ad,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.ao,w,w,w,w),C.bz,A.bJ(D.fV5,w,new B.fBR(r,q,p,d),A.bp(C.aE,w,w,w,w,C.h8,w,w,w,w,w,w))],o),C.l,w,C.e,C.j,0,C.p),w)],o),C.l,w,C.e,C.P,0,C.p),C.f,w,w,new A.p(t,w,w,s,w,w,C.n),w,w,w,C.GK,w,w,w,w),w)},
$S:59}
B.fBR.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.L(y.q).f.T(D.fj9)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aGS(u,x,w))},
$S:0}
B.cdT.prototype={
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
p=C.a.a_(j,"http")?A.cD(j,0,null):s.b.aX(j)
u=4
x=7
return A.b(A.vS(p,null).dh(0,C.a_X),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cd(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Cl(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.ac(h)
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
B.cdZ.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.ce_.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.ce0.prototype={
$1(d){return d.b},
$S:z+2}
B.cdV.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.cdW.prototype={
$1(d){return d.b},
$S:z+2}
B.cdU.prototype={
$1(d){return A.a2(y.f.a(d),y.N,y.z)},
$S:13}
B.cdX.prototype={
$1(d){var x=J.t(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.cdY.prototype={
$1(d){var x=J.t(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fWt.prototype={
$1(d){return new B.W8(this.a,null)},
$S:z+11}
B.fWu.prototype={
$1(d){return new B.Wc(this.a,this.b,this.c,null)},
$S:z+12}
B.dZa.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.e_j.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.e_k.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.e_l.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.e_i(x,d))},
$S:2}
B.e_i.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_m.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_n.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.e_o.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.e_p.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.e_q.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.w(this.b)},
$S:0}
B.e_r.prototype={
$0(){return this.a.f=!1},
$S:0}
B.e_u.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.e_s.prototype={
$1(d){var x=this.a
return x.f?null:x.a_C()},
$S:2}
B.e_t.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a_(s,"image/")||d.mL(D.S8))s=C.uS
else s=C.a.a_(s,"video/")||d.mL(D.n6)?C.qS:D.aq2
x=this.b.a
w=y.p
return new A.D(C.kx,A.A(A.a([A.q(v,A.X(s,C.aE,v,v,v,18),C.f,v,v,new A.p(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.au,A.E(A.x(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.U,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.garp(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.E,v,C.e,C.j,0,C.p),1)],w),C.l,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dZb.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dZc.prototype={
$0(){return this.a.r=!1},
$S:0}
B.ce2.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:95}
B.ce3.prototype={
$2(d,e){return new A.bB(J.k(d),J.k(e),y.M)},
$S:95}
B.fXn.prototype={
$2(d,e){return e===this.a},
$S:297}
B.ftQ.prototype={
$1(d){return J.k(d)},
$S:17}
B.fzD.prototype={
$1(d){var x=this.b
B.i6l(C.H8.ga7k(this.a)).bG(x.gC4(x),y.H)},
$S:131}
B.fzE.prototype={
$1(d){return this.a.dd(0,null)},
$S:131}
B.fzF.prototype={
$0(){return null},
$S:12}
B.ceh.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fzG.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a2(y.f.a(d),y.N,y.z),o=p.h(0,"id")
o=J.k(o==null?"":o)
x=p.h(0,"name")
x=J.k(x==null?"file":x)
w=p.h(0,"mime")
w=J.k(w==null?"application/octet-stream":w)
v=A.aJ(p.h(0,"sizeBytes"))
v=v==null?q:C.i.M(v)
if(v==null)v=0
u=p.h(0,"createdAt")
u=J.k(u==null?new A.V(Date.now(),0,!1).aa().ag():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jD(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fDS.prototype={
$1(d){return d.aj()},
$S:z+15}
B.fxR.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fxS.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.cem.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n6)},
$S:z+1}
B.h0D.prototype={
$1(d){return new B.a_n(this.a,null)},
$S:z+16}
B.dcy.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fW()},
$S:7}
B.dcw.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.dcx.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_h.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a1J()},
$S:11}
B.dZF.prototype={
$0(){var x=J.bH9(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZG.prototype={
$0(){var x=J.bH9(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZe.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZd(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG2(this.c)}},
$S:0}
B.dZd.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZf.prototype={
$0(){var x=J.bH9(this.b)
x=A.C(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dZk.prototype={
$0(){var x=this.a,w=C.d.bj(x.d,new B.dZj(this.b))
if(w>=0){x=x.d
x[w]=x[w].aG2(this.c)}},
$S:0}
B.dZj.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.e_5.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.e_6.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dZC.prototype={
$1(d){return new B.W9(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dZz.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.IF(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.Wd(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.uq(),$async$$0)
case 5:s=J.a7(t)
x=s.gcm(t)?6:7
break
case 6:x=8
return A.b(r.a1T(s.gJ(t)),$async$$0)
case 8:case 7:r.ij(s.gau(t)?u.d:u.e+" "+s.gJ(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZi.prototype={
$1(d){this.a.ad1(d,"No files selected.","Added")},
$S:464}
B.dZK.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a8(0)
else w.v(0,new A.N(x,new B.dZJ(),A.U(x).k("N<1,n>")))},
$S:0}
B.dZJ.prototype={
$1(d){return d.a},
$S:z+2}
B.dZo.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.xQ.cq().cZB(C.a1L,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fs(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aI.gau(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jK(o,0,null)}u=2
x=6
break
case 4:u=3
j=t.pop()
p=A.ac(j)
$.am.$1("[doc share import] "+A.w(p))
x=6
break
case 3:x=2
break
case 6:if(k==null||C.a.i(k).length===0){s.a.ij("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.q(m,"ngmyDocShareBundle")&&!C.a.a_(m,"NGMYDOCSYNC")&&!C.a.a_(m,"{")){s.a.ij("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.aqT(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cs(l)){o.ij("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.uq(),$async$$0)
case 9:o.ij("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.e_2.prototype={
$1(d){return new B.QF(this.a.a.c,this.b,null)},
$S:z+7}
B.e_3.prototype={
$1(d){return new B.a_p(this.a.a.c,this.b,null)},
$S:z+18}
B.e_4.prototype={
$1(d){return new B.a_m(this.a.a.c,this.b,null)},
$S:z+19}
B.dZA.prototype={
$1(d){return new B.QF(this.a.a.c,this.b,null)},
$S:z+7}
B.dZB.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.q(0,w))x.W(0,w)
else x.I(0,w)},
$S:0}
B.dZW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.IF(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a8d(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.ij("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.csn(),$async$$0)
case 5:x=6
return A.b(p.uq(),$async$$0)
case 6:r=A.U(t).k("N<1,n>")
r=new A.N(new A.N(t,new B.dZS(p),r),new B.dZT(),r.k("N<ak.E,n>")).bY(0,new B.dZU())
q=A.C(r,r.$ti.k("M.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).ce(A.ec(new B.dZV(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.px(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Wj(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZS.prototype={
$1(d){var x=this.a,w=C.d.bj(x.d,new B.dZR(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dZR.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dZT.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dZU.prototype={
$1(d){return d.length!==0},
$S:3}
B.dZV.prototype={
$1(d){var x=this.a
return new B.a_r(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dZX.prototype={
$1(d){return d.a},
$S:z+2}
B.dZY.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZQ.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.as(A.q(v,v,C.f,v,v,new A.p(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kw,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.garp(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a_(p.c,"video/")
w=!x||p.mL(D.n6)?C.t9:C.pA
p=!x||p.mL(D.n6)?"Play video":"View"
return new A.bN(new A.p(s,v,new A.bH(new A.ay(r,1,C.r,-1),C.a1,C.a1,C.a1),C.l9,v,v,C.n),C.bj,A.bm(!0,new A.D(C.Cn,A.x(A.a([q,o,t,C.aB,B.a_q(!1,u,!1,w,p,new B.dZL(d),v),B.a_q(!1,u,!1,C.jK,"Share via QR",new B.dZM(d),"Letters/numbers QR code"),B.a_q(!1,u,!1,D.a2U,"Send to their Code",new B.dZN(d),"Enter someone else's personal code"),B.a_q(!1,u,!1,C.i3,"Download / save",new B.dZO(d),v),C.am,B.a_q(!1,u,!0,C.ej,"Delete",new B.dZP(d),v)],y.p),C.al,v,C.e,C.P,0,C.p),v),!0,!1,C.ag,!0,!0),v)},
$S:699}
B.dZL.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dZM.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dZN.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dZO.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dZP.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dZl.prototype={
$1(d){return d.a},
$S:z+2}
B.dZm.prototype={
$1(d){return this.a.q(0,d.a)},
$S:z+1}
B.dZn.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a8f(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.Hk(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.px(s.c,s.f),$async$$0)
case 4:u.ij(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZh.prototype={
$1(d){var x=this.a
x.ur(new B.dZg(x,d,this.b),"Preparing\u2026")},
$S:464}
B.dZg.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.ij("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.Wd(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cs(s)){t.ij("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bG5(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.ij("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZD.prototype={
$1(d){return this.a.r.q(0,d.a)},
$S:z+1}
B.dZE.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aT(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gR(s)
x=4
return A.b(B.h94(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.I(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZx.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.Hi(new B.dZt(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.ij("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.q(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.cg(null,null,!1,null,new B.dZu(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dZv(s))
case 5:x=8
return A.b(r.b.iI(0,C.GE,new B.dZw()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a7(t)
if(q.gau(t)){s.ij("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.uq(),$async$$0)
case 9:s.ij("Received "+q.gJ(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZt.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZq(x,d,e))},
$S:234}
B.dZq.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZu.prototype={
$1(d){return new B.ads(this.a.a,null)},
$S:z+21}
B.dZv.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dZw.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dZy.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.Jo(o)!=null?3:4
break
case 3:x=5
return A.b(B.a83(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.b3h(B.Jo(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.aqT(new B.dZr(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cs(r)){if(B.h93(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a_(o,"N2|")||C.a.q(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.ij(q)
x=1
break}x=10
return A.b(s.uq(),$async$$0)
case 10:o=J.cC(r)
p=o.eP(r,new B.dZs()).gJ(0)
s.ij(p>0?"Received "+p+" video(s).":"Restored "+o.gJ(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dZr.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dZp(x,d,e))},
$S:234}
B.dZp.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dZs.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n6)},
$S:z+1}
B.dZI.prototype={
$1(d){return new B.a_s(this.a.a.c,null)},
$S:z+23}
B.dZH.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.b19(u.a.c,v.b),$async$$0)
case 2:t.ij(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.e_1.prototype={
$1(d){var x=null,w=this.b,v=w.a
return new A.bN(new A.p(v[2],x,new A.bH(new A.ay(C.aE.j(0.35),1,C.r,-1),C.a1,C.a1,C.a1),C.l9,x,x,C.n),C.bj,A.bm(!0,new A.D(C.Cn,A.x(A.a([A.as(A.q(x,x,C.f,x,x,new A.p(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kw,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aB,B.a_q(!0,w,!1,C.nK,"My Code",new B.dZZ(d),"Your personal code & QR \u2014 others send docs to you"),B.a_q(!1,w,!1,D.a2U,"Send to their Code",new B.e__(this.a,d),"Enter someone else's 5-digit code + letter"),B.a_q(!1,w,!1,S.zt,"Import backup",new B.e_0(d),".ngmydoc file from another device")],y.p),C.al,x,C.e,C.P,0,C.p),x),!0,!1,C.ag,!0,!0),x)},
$S:699}
B.dZZ.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.e__.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bGp()},
$S:0}
B.e_0.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.e_e.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.Jy(D.RT,x,C.a2P,g,e,32),C.au,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cU(C.d.gH(D.RT).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.l,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:663}
B.e_c.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.e_d.prototype={
$0(){this.a.ajw()
return null},
$S:0}
B.e_f.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.o(0,(1-e)*10)),e)},
$S:101}
B.e_g.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.q(0,w.a)
return new B.adu(e,w,v,this.b,x.e,x.cbJ(w),new B.e_8(x,w),new B.e_9(x,v,w),new B.e_a(x,w),new B.e_b(x,w),null)},
$S:z+24}
B.e_8.prototype={
$0(){this.a.agJ(this.b)
return null},
$S:0}
B.e_9.prototype={
$0(){var x=this.a
return x.m(new B.e_7(x,this.b,this.c))},
$S:0}
B.e_7.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.I(0,w)},
$S:0}
B.e_a.prototype={
$0(){this.a.Oz(this.b)
return null},
$S:0}
B.e_b.prototype={
$0(){this.a.ajj(this.b)
return null},
$S:0}
B.dcu.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.o(0,(1-e)*18)),e)},
$S:101}
B.dcv.prototype={
$3(d,e,f){return A.e1(C.A,f,e,null,null)},
$S:112}
B.dcS.prototype={
$3(d,e,f){return A.d3(A.dO(f,new A.o(0,(1-e)*14)),e)},
$S:101}
B.dcR.prototype={
$1(d){return this.a.y.$0()},
$S:83}
B.dcO.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.dcP.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.dcQ.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.w(this.b)},
$S:0}
B.dcM.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aI.gau(w))return A.fR(w,C.A,x,new B.dcK(this.a),C.hh,C.dE,!0,x,!1,x,x)
$.aW.x1$.push(new B.dcL(this.a))
return C.bM},
$S:135}
B.dcK.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcI(this.a))
return C.bM},
$S:193}
B.dcI.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcF(x))},
$S:7}
B.dcF.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcL.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcH(x))},
$S:7}
B.dcH.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcN.prototype={
$3(d,e,f){$.aW.x1$.push(new B.dcJ(this.a))
return C.bM},
$S:193}
B.dcJ.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.dcG(x))},
$S:7}
B.dcG.prototype={
$0(){return this.a.w=!0},
$S:0}
B.dcr.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcq(x,d))},
$S:1767}
B.dcq.prototype={
$0(){return this.a.f=this.b===C.vw},
$S:0}
B.dcs.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dcp(x,d))},
$S:7}
B.dcp.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.dct.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.dco(x,d))},
$S:7}
B.dco.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.dck.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.dcl.prototype={
$0(){return this.a.e=!1},
$S:0}
B.dcm.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.w(this.b)},
$S:0}
B.dcn.prototype={
$1(d){return this.a.d.Nw(0,A.dw(0,0,0,C.i.V(d),0,0))},
$S:6}
B.dd4.prototype={
$0(){var x=this.a.a
return B.rV(x.c,x.d)},
$S:1768}
B.dd5.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.dd6.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.dd7.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dd8.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.w(this.b)},
$S:0}
B.dd9.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.ddb.prototype={
$0(){var x=this.a
x.m(new B.dda(x))},
$S:0}
B.dda.prototype={
$0(){var x=this.a.d
if(x.a.f)x.hg(0)
else x.qr(0)},
$S:0}
B.dd0.prototype={
$1(d){return this.a.Rn(this.b)},
$S:11}
B.dd1.prototype={
$1(d){return this.a.Rm(this.b)},
$S:11}
B.dcT.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.dcU.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dcV.prototype={
$1(d){return D.hv4},
$S:z+25}
B.dd_.prototype={
$2(d,e){if(d)B.Wj()},
$S:129}
B.dcW.prototype={
$0(){return this.a.aaR(this.b)},
$S:0}
B.dcX.prototype={
$0(){return this.a.aaO(this.b)},
$S:0}
B.dcY.prototype={
$0(){return this.a.afc(this.b)},
$S:0}
B.dcZ.prototype={
$0(){return this.a.a2w(this.b)},
$S:0}
B.dcj.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dd3.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.qv(),$async$$0)
case 2:u.m(new B.dd2(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dd2.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.ceo.prototype={
$1(d){return C.a.a_(d.c,"video/")||d.mL(D.n6)},
$S:z+1}
B.cep.prototype={
$1(d){var x=d.b,w=A.ag("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aL(x,w,"_"))
w=v.length===0?"file.bin":v
return A.I(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.cen.prototype={
$2(d,e){return this.bn_(d,e)},
bn_(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Wk(u.c,A.I(["uploadProgress",C.i.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1769}
B.fDu.prototype={
$1(d){if(d===D.a9k&&(this.a.a.a&30)===0)this.a.h_(0)},
$S:z+27}
B.fDv.prototype={
$0(){},
$S:12}
B.fE5.prototype={
boz(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fr6(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a8(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.hq2(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.boz(d,e)},
$S:511}
B.fE4.prototype={
$1(d){var x=this
d.b=new B.fE3(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fE3.prototype={
$1(d){return this.boy(d)},
boy(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.b1a(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.I(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.X.aQ(0,n,null)
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
return A.b(B.fr6(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a8(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.ac(j)
$.am.$1("[doc share webrtc recv] "+A.w(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a8c(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.dd(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.aB6.prototype,"gcja","QX",0)
x(v,"gck1","JN",0)
x(v,"gcjx","yH",0)
x(v=B.aF5.prototype,"gcbD","afa",0)
x(v,"gcbE","a_B",0)
x(v,"gcyQ","aj0",0)
x(v=B.aF8.prototype,"gcbF","a_C",0)
x(v,"gcyR","a2R",0)
x(B.aF6.prototype,"gcbG","afb",0)
x(B.aB5.prototype,"gcbL","cbM",4)
x(v=B.aF7.prototype,"gcjy","a0N",0)
x(v,"gcxq","cxr",4)
x(v,"gb4m","aAz",0)
x(v,"gcAl","ajq",0)
x(v,"gbSQ","Yp",0)
x(v,"gcbK","EN",0)
x(B.aB7.prototype,"gb88","a2Q",0)
x(B.aB4.prototype,"gcbN","a_D",0)
x(v=B.aBa.prototype,"gb34","chN",4)
x(v,"gcbH","afe",0)
x(v=B.aB8.prototype,"gcwn","a2C",0)
x(v,"gb16","afd",0)
w(B.aB3.prototype,"gaz5","az6",8)
x(v=B.aB9.prototype,"gcmh","ahb",0)
x(v,"gbSj","abF",0)
w(v,"gaz5","az6",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aE,[B.cs7,B.aaD,B.avq,B.aDK,B.aGS,B.jD,B.ada,B.by4,B.FQ,B.Yt])
w(B.cs8,B.cs7)
w(B.b6h,B.aaD)
x(A.hu,[B.cs3,B.cs4,B.cs5,B.cs2,B.cs6,B.cs9,B.csa,B.csb,B.csc,B.csd,B.cse,B.csf,B.csg,B.fwL,B.fWg,B.fWi,B.fWh,B.fWv,B.fWw,B.fzr,B.dcz,B.dcB,B.dcA,B.dcE,B.fBo,B.fBS,B.cdT,B.ce_,B.ce0,B.cdW,B.cdU,B.cdX,B.cdY,B.fWt,B.fWu,B.e_l,B.e_u,B.e_s,B.e_t,B.ftQ,B.fzD,B.fzE,B.ceh,B.fzG,B.fDS,B.fxR,B.fxS,B.cem,B.h0D,B.dcy,B.dcw,B.e_h,B.dZd,B.dZj,B.dZC,B.dZi,B.dZJ,B.e_2,B.e_3,B.e_4,B.dZA,B.dZS,B.dZR,B.dZT,B.dZU,B.dZV,B.dZX,B.dZY,B.dZQ,B.dZl,B.dZm,B.dZh,B.dZD,B.dZu,B.dZs,B.dZI,B.e_1,B.e_e,B.e_f,B.dcu,B.dcv,B.dcS,B.dcR,B.dcM,B.dcK,B.dcI,B.dcL,B.dcN,B.dcJ,B.dcr,B.dcs,B.dct,B.dcn,B.dd0,B.dd1,B.dcV,B.ceo,B.cep,B.fDu,B.fE4,B.fE3])
w(B.b6i,B.avq)
x(A.iJ,[B.fWf,B.dcC,B.dcD,B.fBm,B.fBn,B.fBR,B.dZa,B.e_j,B.e_k,B.e_i,B.e_m,B.e_n,B.e_o,B.e_p,B.e_q,B.e_r,B.dZb,B.dZc,B.fzF,B.dcx,B.dZF,B.dZG,B.dZe,B.dZf,B.dZk,B.e_5,B.e_6,B.dZz,B.dZK,B.dZo,B.dZB,B.dZW,B.dZL,B.dZM,B.dZN,B.dZO,B.dZP,B.dZn,B.dZg,B.dZE,B.dZx,B.dZq,B.dZv,B.dZw,B.dZy,B.dZp,B.dZH,B.dZZ,B.e__,B.e_0,B.e_c,B.e_d,B.e_8,B.e_9,B.e_7,B.e_a,B.e_b,B.dcO,B.dcP,B.dcQ,B.dcF,B.dcH,B.dcG,B.dcq,B.dcp,B.dco,B.dck,B.dcl,B.dcm,B.dd4,B.dd5,B.dd6,B.dd7,B.dd8,B.dd9,B.ddb,B.dda,B.dcT,B.dcU,B.dcW,B.dcX,B.dcY,B.dcZ,B.dcj,B.dd3,B.dd2,B.fDv])
x(A.lD,[B.adt,B.Oj,B.aaE,B.Pp,B.Ys,B.Po,B.FR])
x(A.af,[B.a_o,B.W8,B.Wc,B.W9,B.a_n,B.Wa,B.a_p,B.a_m,B.QF,B.a_r,B.a_l,B.a_s])
x(A.ah,[B.aB6,B.aF5,B.aF8,B.aF6,B.aB5,B.aF7,B.aB7,B.aB4,B.aBa,B.aB8,B.aB3,B.aB9])
x(A.aw,[B.adX,B.aB2,B.bfK,B.adu,B.ads,B.bfL])
x(A.jx,[B.cdZ,B.cdV,B.ce2,B.ce3,B.fXn,B.dZt,B.dZr,B.e_g,B.dd_,B.cen,B.fE5])
x(A.j4,[B.blc,B.bxH])})()
A.iT(b.typeUniverse,JSON.parse('{"b6h":{"aaD":[]},"b6i":{"avq":[]},"a_o":{"af":[],"v":[]},"aB6":{"ah":["a_o"]},"adX":{"aw":[],"v":[]},"W8":{"af":[],"v":[]},"Wc":{"af":[],"v":[]},"aF5":{"ah":["W8"]},"aF8":{"ah":["Wc"]},"blc":{"j4":[]},"W9":{"af":[],"v":[]},"aF6":{"ah":["W9"]},"a_n":{"af":[],"v":[]},"Wa":{"af":[],"v":[]},"adu":{"aw":[],"v":[]},"a_p":{"af":[],"v":[]},"a_m":{"af":[],"v":[]},"QF":{"af":[],"v":[]},"a_r":{"af":[],"v":[]},"ads":{"aw":[],"v":[]},"a_l":{"af":[],"v":[]},"a_s":{"af":[],"v":[]},"aB5":{"ah":["a_n"]},"bxH":{"j4":[]},"aF7":{"ah":["Wa"]},"aB2":{"aw":[],"v":[]},"bfK":{"aw":[],"v":[]},"aB7":{"ah":["a_p"]},"aB4":{"ah":["a_m"]},"aBa":{"ah":["QF"]},"aB8":{"ah":["a_r"]},"aB3":{"ah":["a_l"]},"aB9":{"ah":["a_s"]},"bfL":{"aw":[],"v":[]}}'))
var y=(function rtii(){var x=A.at
return{J:x("uN"),k:x("MK()"),o:x("bu<n,n>"),F:x("ru"),g:x("aB<jD?>"),x:x("aB<~>"),V:x("O<ab>"),O:x("O<u>"),W:x("O<bi>"),Y:x("O<a9<n,Q>>"),t:x("O<a9<n,@>>"),r:x("O<jD>"),w:x("O<+file,name(lT,n)>"),u:x("O<cU>"),s:x("O<n>"),E:x("O<j4>"),a:x("O<dL>"),p:x("O<v>"),Z:x("O<H>"),G:x("bi"),A:x("cw<ah<af>>"),n:x("ai<jD>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bB<n,n>"),P:x("a9<n,@>"),f:x("a9<@,@>"),m:x("iC"),e:x("iym"),af:x("F2"),U:x("jD"),b:x("ct"),C:x("aE"),aK:x("wG"),ab:x("FQ"),br:x("avq"),v:x("Yt"),N:x("n"),X:x("br<F>"),Q:x("m4"),D:x("dL"),aw:x("by<n>"),cd:x("Y<a9<n,@>>"),c7:x("v"),ch:x("c3<ai<jD>>"),aW:x("c3<dL?>"),aY:x("c3<~>"),cx:x("adt"),b1:x("bk<ai<jD>>"),cf:x("bk<dL?>"),d4:x("bk<~>"),c4:x("aDK"),bG:x("aGS"),q:x("mC"),B:x("pQ<FQ>"),c6:x("pQ<aaE>"),y:x("Q"),i:x("F"),z:x("@"),S:x("H"),aQ:x("bi?"),_:x("ai<jD>?"),aL:x("ai<@>?"),h:x("a9<n,@>?"),l:x("jD?"),R:x("aE?"),c:x("Yt?"),d:x("+answerQr,transfer(n,aB<ai<jD>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,Oj,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dL?"),cm:x("ada?"),bk:x("aDK?"),ag:x("aGS?"),dd:x("F?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.b5E=new A.ay(C.aE,2,C.r,-1)
D.c85=new A.a8(C.a7,C.aa,C.x,C.a5_,null,null)
D.b7h=new A.p(null,null,null,C.mE,null,D.c85,C.n)
D.b8M=new A.p(null,null,null,C.mE,null,E.I4,C.n)
D.afO=new A.u(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.q)
D.ahd=new A.u(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.q)
D.aig=new A.u(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.q)
D.ak2=new A.u(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.q)
D.fHc=new A.B("Your team portal",null,C.dq,null,null,null,null,null,null,null,null,null)
D.fW1=new A.B("Share the access code and member password with your team. They only sign in once.",null,G.EL,null,null,null,null,null,null,null,null,null)
D.dk2=x([D.fHc,C.am,D.fW1],y.p)
D.bxh=new A.fk(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dk2,null)
D.h_u=new A.B("Create your organization",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fLE=new A.B("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.EL,null,null,null,null,null,null,null,null,null)
D.dB1=x([D.h_u,C.am,D.fLE],y.p)
D.bxr=new A.fk(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dB1,null)
D.fWF=new A.B("Team Member sign-in",null,C.fR,null,null,null,null,null,null,null,null,null)
D.fPC=new A.B("Enter the access code and password from your organization.",null,G.EL,null,null,null,null,null,null,null,null,null)
D.dyN=x([D.fWF,C.am,D.fPC],y.p)
D.bxB=new A.fk(C.ah,C.e,C.j,C.E,null,C.p,null,0,D.dyN,null)
D.bDS=new A.R(16,10,16,28)
D.bE_=new A.R(16,14,16,4)
D.bFe=new A.R(20,0,20,16)
D.bFK=new A.R(20,8,20,16)
D.amS=new A.R(24,22,24,20)
D.a2U=new A.a0(63394,"MaterialIcons",!1)
D.aq2=new A.a0(63515,"MaterialIcons",!1)
D.bSZ=new A.a0(983813,"MaterialIcons",!1)
D.bQf=new A.a0(62867,"MaterialIcons",!1)
D.bTX=new A.ae(D.bQf,44,C.c,null,null,null)
D.bV1=new A.ae(C.k6,null,C.ab,null,null,null)
D.bWp=new A.ae(C.js,18,null,null,null,null)
D.bY9=new A.ae(D.a2U,26,C.c,null,null,null)
D.bYL=new A.ae(C.D2,null,null,null,null,null)
D.bZl=new A.ae(C.Da,null,null,null,null,null)
D.c_x=new A.ae(W.a34,null,null,null,null,null)
D.c_T=new A.ae(C.hQ,16,null,null,null,null)
D.c3t=new A.ae(C.t8,16,null,null,null,null)
D.bUe=new A.ae(C.nK,null,null,null,null,null)
D.c4l=new A.e6(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUe,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bZT=new A.ae(C.Hl,null,null,null,null,null)
D.c4q=new A.e6(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bZT,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bUz=new A.ae(H.HT,null,null,null,null,null)
D.c4B=new A.e6(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bUz,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cTH=x([C.fp,C.b3,C.aE],y.O)
D.c9X=new A.a8(C.aA,C.aF,C.x,D.cTH,null,null)
D.cT8=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.RT=x([C.fp,C.aE],y.O)
D.S8=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.n6=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.dt2=x([C.nv,C.aE],y.O)
D.elG={iceServers:0}
D.aLw={urls:0}
D.dEM=new A.bu(D.aLw,["stun:stun.l.google.com:19302"],y.o)
D.dEL=new A.bu(D.aLw,["stun:stun1.l.google.com:19302"],y.o)
D.d9v=x([D.dEM,D.dEL],A.at("O<a9<n,n>>"))
D.dE2=new A.bu(D.elG,[D.d9v],A.at("bu<n,@>"))
D.Jb=new B.Oj(0,"lanDirect")
D.Ts=new B.Oj(1,"cloudStash")
D.dQ7=new B.Oj(2,"inlineInstant")
D.Tt=new B.Oj(3,"webrtcLink")
D.Ah=new B.Oj(4,"videoCloud")
D.fW0=new A.B("Receive file",null,C.ng,null,null,null,null,null,null,null,null,null)
D.cIW=x([E.arO,C.af,D.fW0],y.p)
D.f9E=new A.c8(C.aL,C.ba,C.j,C.l,null,C.p,null,0,D.cIW,null)
D.et7=new A.D(C.cq,D.f9E,null)
D.fxG=new A.G(!0,C.c,null,null,null,null,null,C.U,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.IB,null,null,null)
D.fHL=new A.B("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.fxG,null,C.K,null,null,null,null,null,null,null)
D.esj=new A.D(C.Ct,D.fHL,null)
D.bdl=new A.ci(C.A,null,null,D.esj,null)
D.ezq=new A.cK(0,null,0,28,null,null,D.bdl,null)
D.ezK=new B.aaE(0,"RTCDataChannelConnecting")
D.aR_=new B.aaE(1,"RTCDataChannelOpen")
D.aR0=new B.aaE(3,"RTCDataChannelClosed")
D.ezL=new B.FR(0,"RTCIceConnectionStateNew")
D.ezM=new B.FR(1,"RTCIceConnectionStateChecking")
D.ezN=new B.FR(2,"RTCIceConnectionStateCompleted")
D.ezO=new B.FR(3,"RTCIceConnectionStateConnected")
D.ezP=new B.FR(4,"RTCIceConnectionStateCount")
D.ezQ=new B.FR(5,"RTCIceConnectionStateFailed")
D.ezR=new B.FR(6,"RTCIceConnectionStateDisconnected")
D.aR1=new B.FR(7,"RTCIceConnectionStateClosed")
D.aR2=new B.Ys(0,"RTCIceGatheringStateNew")
D.ezS=new B.Ys(1,"RTCIceGatheringStateGathering")
D.a9k=new B.Ys(2,"RTCIceGatheringStateComplete")
D.a9l=new B.Po(0,"RTCPeerConnectionStateClosed")
D.aR3=new B.Po(1,"RTCPeerConnectionStateFailed")
D.aR4=new B.Po(2,"RTCPeerConnectionStateDisconnected")
D.aR5=new B.Po(3,"RTCPeerConnectionStateNew")
D.aR6=new B.Po(4,"RTCPeerConnectionStateConnecting")
D.aR7=new B.Po(5,"RTCPeerConnectionStateConnected")
D.ezT=new B.Pp(0,"RTCSignalingStateStable")
D.ezU=new B.Pp(1,"RTCSignalingStateHaveLocalOffer")
D.ezV=new B.Pp(2,"RTCSignalingStateHaveRemoteOffer")
D.ezW=new B.Pp(3,"RTCSignalingStateHaveLocalPrAnswer")
D.ezX=new B.Pp(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aR8=new B.Pp(5,"RTCSignalingStateClosed")
D.feK=new A.av(160,48)
D.beA=new A.fj(2,null,null,null,null,C.aE,null,null,null,null)
D.fgi=new A.a5(16,16,D.beA,null)
D.fKZ=new A.B("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.fhL=new A.b1(D.fKZ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fSF=new A.B("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.fhO=new A.b1(D.fSF,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h0w=new A.B("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.fhV=new A.b1(D.h0w,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fKz=new A.B("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.fik=new A.b1(D.fKz,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fWQ=new A.B("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aUe=new A.b1(D.fWQ,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fYh=new A.B("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.fiO=new A.b1(D.fYh,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h2_=new A.B("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fj4=new A.b1(D.h2_,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h_X=new A.B("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.fj9=new A.b1(D.h_X,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h1a=new A.B("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.fjW=new A.b1(D.h1a,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fJa=new A.B("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.fkt=new A.b1(D.fJa,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fUA=new A.B("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.fkO=new A.b1(D.fUA,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fNi=new A.B("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.flk=new A.b1(D.fNi,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.h24=new A.B("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.flo=new A.b1(D.h24,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fJq=new A.B("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.flu=new A.b1(D.fJq,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fI6=new A.B("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.flJ=new A.b1(D.fI6,null,null,null,null,null,null,null,null,null,null,null,null,C.Y,!1,null,null,null,C.t,null)
D.fEU=new A.B("NGMY DOC SHARE",null,C.aVC,null,null,null,null,null,null,null,null,null)
D.fGj=new A.B("Show this to sender",null,C.iG,null,null,null,null,null,null,null,null,null)
D.fHj=new A.B("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fM4=new A.B("Organization settings",null,C.cG,null,null,null,null,null,null,null,null,null)
D.fMs=new A.B("Sign in",null,C.ci,null,null,null,null,null,null,null,null,null)
D.fNs=new A.B("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fO_=new A.B("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fQT=new A.B("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fTI=new A.B("Send to their Doc Share",null,C.nZ,null,null,null,null,null,null,null,null,null)
D.fU1=new A.B("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fUm=new A.B("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fUZ=new A.B("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fV5=new A.B("Create portal",null,C.ci,null,null,null,null,null,null,null,null,null)
D.fVt=new A.B("Share via AirDrop / Bluetooth / Nearby",null,C.fb,null,null,null,null,null,null,null,null,null)
D.fYN=new A.B("Share files & videos\nwith a scan.",null,C.aVF,null,null,null,null,null,null,null,null,null)
D.fZ6=new A.B("Add files",null,C.ci,null,null,null,null,null,null,null,null,null)
D.hv4=new B.a_l(null)
D.acF=new B.adt(0,"docShare")
D.acG=new B.adt(1,"gate")
D.Wx=new B.adt(2,"gateNoIndividual")})();(function staticFields(){$.aPF=null
$.foF=function(){var x=y.N
return A.T(x,x)}()
$.H6=A.T(y.N,y.D)
$.ahw=A.T(y.N,A.at("lT"))
$.S0=A.T(y.N,y.D)
$.fpj=A.T(y.N,A.at("ada"))
$.ceg=A.T(y.S,A.at("by4"))
$.hq1=1
$.ieI=null
$.ieH=null
$.i5y=null
$.heu=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"iyR","hI4",()=>new B.cs8())
x($,"iwL","hiu",()=>C.a.q(A.bC(A.bC(A.bC(A.HG(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["utbXEKcJRpbb2wL87hSBjUjmi1U="]=a.current})($__dart_deferred_initializers__);