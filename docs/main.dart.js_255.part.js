((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ch4:function ch4(){},
hBx(d){var x=null,w=new B.b2q(d,D.e9e,new A.pc(x,x,y.c6),new A.pc(x,x,y.B))
w.bvW(d)
return w},
b2q:function b2q(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ch_:function ch_(d){this.a=d},
ch0:function ch0(d){this.a=d},
ch1:function ch1(d){this.a=d},
cgZ:function cgZ(d){this.a=d},
ch2:function ch2(d){this.a=d},
hBy(d,e){var x=y.N
x=new B.b2r(d,e,A.V(x,y.e),A.V(x,y.z))
x.bvX(d,e)
return x},
b2r:function b2r(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ch5:function ch5(d){this.a=d},
ch6:function ch6(d){this.a=d},
ch7:function ch7(d){this.a=d},
ch8:function ch8(d){this.a=d},
ch9:function ch9(d){this.a=d},
cha:function cha(d){this.a=d},
chb:function chb(d){this.a=d},
chc:function chc(d){this.a=d},
fSU(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.yj.Ln(x,"ngmy_doc_share_v1",new B.ffd(),1)},
hI2(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cr(d))
if(y.J.b(d))return new Uint8Array(A.cr(J.eX(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cr(A.BK(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cr(d))
if(typeof d=="string")try{x=C.cD.aJ(d)
return x}catch(w){return v}return v},
Qo(d,e){return B.hXa(d,e)},
hXa(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qo=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMg
x=7
return A.b(o==null?$.aMg=B.fSU():o,$async$Qo)
case 7:s=g
r=new Uint8Array(A.cr(e))
q=J.mA(s,"blobs","readwrite")
C.iC.m9(J.my(q,"blobs"),r,d)
x=8
return A.b(J.pl(q),$async$Qo)
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
return A.i($async$Qo,w)},
Qn(d){return B.hX9(d)},
hX9(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMg
x=7
return A.b(o==null?$.aMg=B.fSU():o,$async$Qn)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iC.za(J.my(r,"blobs"),d),$async$Qn)
case 8:q=f
x=9
return A.b(J.pl(r),$async$Qn)
case 9:o=B.hI2(q)
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
return A.i($async$Qn,w)},
afT(d){return B.hX8(d)},
hX8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMg
x=7
return A.b(p==null?$.aMg=B.fSU():p,$async$afT)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iC.Fg(J.my(r,"blobs"),d)
x=8
return A.b(J.pl(r),$async$afT)
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
return A.i($async$afT,w)},
ffd:function ffd(){},
hKo(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmM(w,v))}return u},
hhz(d,e){var x,w={},v=A.aUy("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fBm(w,v,e)
C.vC.y0(v,"change",new B.fBo(w,v,!1))
C.vC.y0(v,"cancel",new B.fBn(w))
$.eS.mh()
v.click()
A.bN(C.afn,new B.fBl(w),y.H)},
fBm:function fBm(d,e,f){this.a=d
this.b=e
this.c=f},
fBo:function fBo(d,e,f){this.a=d
this.b=e
this.c=f},
fBn:function fBn(d){this.a=d},
fBl:function fBl(d){this.a=d},
Cy(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cy=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdc()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSX()?3:4
break
case 3:x=5
return A.b(B.hcK(e,d,s,!0,!1,f,g,h,!1,i),$async$Cy)
case 5:x=1
break
case 4:x=6
return A.b(B.Q2(d,s,f,g,h,i),$async$Cy)
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
return A.b(B.HS(s,d),$async$Cy)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.faF(s,d),$async$Cy)
case 14:x=12
return A.b(r.hcK(q,p,o,n,m,l,k,j,a1,i),$async$Cy)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c6(A.e6(new B.fBB(s,i,d,f,g,h),!1,null,y.H)),$async$Cy)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c6(A.e6(new B.fBC(s,i,d,f,g,h),!1,null,y.H)),$async$Cy)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cy,w)},
Q2(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Q2=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYc(e),$async$Q2)
case 3:u=k
x=4
return A.b(B.anU(d,e,!1),$async$Q2)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HS(e,d),$async$Q2)
case 7:if(k){v=D.a84
x=1
break}x=8
return A.b(B.U0(e),$async$Q2)
case 8:v=t?D.TJ:D.a85
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYa(d,e)){v=D.a84
x=1
break}x=11
return A.b(B.U0(e),$async$Q2)
case 11:v=t?D.TJ:D.a85
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fO6(d,e)){v=D.a84
x=1
break}x=14
return A.b(B.U0(e),$async$Q2)
case 14:v=D.TJ
x=1
break
case 13:v=t?D.TJ:D.a85
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q2,w)},
faF(d,e){var x=0,w=A.j(y.y),v
var $async$faF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYa(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYc(d),$async$faF)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$faF,w)},
hcK(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c6(A.e6(new B.fgQ(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h7S(d,e,f,g,h,i,j){return new B.Yf(e,j,d,g,h,i,f,null)},
fiM(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fiM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fiP(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fiM)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fiM,w)},
fjg(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fjg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fji(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fjg)
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
return A.i($async$fjg,w)},
fT3(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
ftX(d,e){var x=0,w=A.j(y.H),v
var $async$ftX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.U0(e),$async$ftX)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eI()
case 1:return A.h(v,w)}})
return A.i($async$ftX,w)},
fBB:function fBB(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBC:function fBC(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abd:function abd(d,e){this.a=d
this.b=e},
fgQ:function fgQ(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yf:function Yf(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axU:function axU(){this.c=this.a=this.d=null},
d_W:function d_W(d,e){this.a=d
this.b=e},
d_T:function d_T(d){this.a=d},
d_V:function d_V(d){this.a=d},
d_U:function d_U(d){this.a=d},
d_Y:function d_Y(){},
d_X:function d_X(d){this.a=d},
abG:function abG(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAs:function aAs(d,e){this.a=d
this.b=e},
aDE:function aDE(d,e,f){this.a=d
this.b=e
this.c=f},
fiP:function fiP(d,e,f){this.a=d
this.b=e
this.c=f},
fiN:function fiN(d){this.a=d},
fiO:function fiO(d,e,f){this.a=d
this.b=e
this.c=f},
fji:function fji(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjh:function fjh(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5B(d,e,f,g,h){return B.hws(d,e,f,g,h)},
hws(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c5B=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c5C(s,e,h,g,f,q),y.g),y.l),$async$c5B)
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
return A.i($async$c5B,w)},
aY7(d,e,f,g,h){return B.hwt(d,e,f,g,h)},
hwt(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aY7=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ata("GET",d)
o=A.fKD()
if(o==null)o=new A.L8(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.ES),$async$aY7)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BV(),$async$aY7)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B7(q,h,o,e,f,"Received via QR")
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
return A.i($async$aY7,w)},
aY6(d){return B.hwq(d)},
hwq(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aY6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v0(d,null).cM(0,C.nM),$async$aY6)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aH(0,A.iw(A.iv(p.e)).ca(0,p.w),null)
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
return A.i($async$aY6,w)},
c5A(d){return B.hwr(d)},
hwr(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c5A=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v0(d,null).cM(0,C.pA),$async$c5A)
case 7:s=f
if(s.b!==200){v=null
x=1
break}q=s
q=A.iw(A.iv(q.e)).ca(0,q.w)
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
return A.i($async$c5A,w)},
c5C:function c5C(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
jh:function jh(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
HQ(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hwy(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HQ(C.a.b0(u,v.length))}return null},
hwz(d){var x=B.HQ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hwu(){var x,w=$.pi(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fW(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a5W(d){return B.hwv(d)},
hwv(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f1(d,null,!1,C.bG),$async$a5W)
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
return A.i($async$a5W,w)},
a5X(d,e){return B.hww(d,e)},
hww(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a5X=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cG,null),$async$a5X)
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
return A.i($async$a5X,w)},
B6(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$B6)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HQ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a5Y(r),$async$B6)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5W("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B6)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HQ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B6)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hwu()
x=14
return A.b(B.a5Y(m),$async$B6)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a5X("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B6)
case 15:k=f
x=16
return A.b(B.a5X("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B6)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B6)
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
return A.i($async$B6,w)},
a5Y(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a5Y=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HQ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5W("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a5Y)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Y,w)},
a5Z(d,e,f,g){return B.hwA(d,e,f,g)},
hwA(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a5Z=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HQ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a5Y(r),$async$a5Z)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c5I())>1048576||g.b8(d,new B.c5J())){v=B.E1(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a69("myCode",d,a0),$async$a5Z)
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
v=B.E1(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYf(u,g.gM(d),a0),$async$a5Z)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pi().aA(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c5K(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aY8(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a5Z)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a5Z,w)},
E1(d,e,f,g,h){return B.hwx(d,e,f,g,h)},
hwx(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E1=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$E1)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c5E())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pi().aA(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aA(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
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
a1=B.HU(a9,q)
a0=new A.JJ(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$E1)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eV().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oM(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9v(a1.a,a4,"media",a1.d,a2).wE(m,n,new A.Dk(!0,q.c)),$async$E1)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a8(0),$async$E1)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOJ(r),$async$E1)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c5F(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aY8(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$E1)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOJ(r),$async$E1)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E1,w)},
aY8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aY8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5W(t),$async$aY8)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c5D(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a5X(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY8,w)},
MJ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MJ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5W("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MJ)
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
return A.b(B.aY9(k,a0),$async$MJ)
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
return A.b(B.aYe(h),$async$MJ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.U7(g,a0),$async$MJ)
case 10:f=a3
if(f!=null&&J.cx(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c5G(),q),n)
d=A.B(new A.a2(r,new B.c5H(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a5X("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MJ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MJ,w)},
aY9(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aY9=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.i_X(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cw(l,m,"Received via My Code",t,e,i),$async$aY9)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOJ(s),$async$aY9)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY9,w)},
c5I:function c5I(){},
c5J:function c5J(){},
c5K:function c5K(){},
c5E:function c5E(){},
c5F:function c5F(){},
c5D:function c5D(){},
c5G:function c5G(){},
c5H:function c5H(){},
fBy(d,e){var x=0,w=A.j(y.H)
var $async$fBy=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c6(A.e6(new B.fBz(e),!1,null,y.H)),$async$fBy)
case 2:return A.h(null,w)}})
return A.i($async$fBy,w)},
bBt(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBt=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c6(A.e6(new B.fBA(g,e,f),!1,null,y.y)),$async$bBt)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBt,w)},
fBz:function fBz(d){this.a=d},
fBA:function fBA(d,e,f){this.a=d
this.b=e
this.c=f},
TY:function TY(d,e){this.c=d
this.a=e},
aBP:function aBP(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dMr:function dMr(d,e){this.a=d
this.b=e},
U1:function U1(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBS:function aBS(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dNA:function dNA(d){this.a=d},
dNB:function dNB(d){this.a=d},
dNC:function dNC(d){this.a=d},
dNz:function dNz(d,e){this.a=d
this.b=e},
dND:function dND(d){this.a=d},
dNE:function dNE(d){this.a=d},
dNF:function dNF(d,e){this.a=d
this.b=e},
dNG:function dNG(d,e){this.a=d
this.b=e},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNI:function dNI(d){this.a=d},
dNL:function dNL(){},
dNJ:function dNJ(d){this.a=d},
dNK:function dNK(d,e){this.a=d
this.b=e},
bh3:function bh3(){},
TZ:function TZ(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBQ:function aBQ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dMs:function dMs(d){this.a=d},
dMt:function dMt(d){this.a=d},
fO7(d){var x=d.hN
if(x>=0)return C.o.O(x)
return 10},
hwC(d){var x=d.kz
if(x>=0)return x
return 4.99},
hwB(d){var x=d.li,w=y.N
w=x.iV(x,new B.c5M(),w,w)
return w},
h2X(d){var x=d.kA,w=y.N
w=x.iV(x,new B.c5N(),w,w)
return w},
aYc(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aYc)
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
return A.i($async$aYc,w)},
a60(d,e){var x=0,w=A.j(y.H),v,u
var $async$a60=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a60)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a60)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a60,w)},
U0(d){var x=0,w=A.j(y.H),v,u
var $async$U0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$U0)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$U0)
case 3:case 1:return A.h(v,w)}})
return A.i($async$U0,w)},
fO6(d,e){var x,w,v
if(B.hwC(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hwB(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYa(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h2X(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h2Y(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h2X(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kA=w},
anV(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anV=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$anV)
case 7:s=f
r=A.t(p)
r=A.f5(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$anV,w)},
anW(d){var x=0,w=A.j(y.H),v,u,t
var $async$anW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anV(d),$async$anW)
case 3:u=f
x=5
return A.b(A.az(),$async$anW)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anW)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anW,w)},
anU(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fO7(d)
if(u<=0){v=!1
x=1
break}if(B.fO6(d,e)){v=!1
x=1
break}x=3
return A.b(B.anV(e),$async$anU)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anU,w)},
aYb(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYb=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HS(e,d),$async$aYb)
case 3:if(g){v=-1
x=1
break}u=B.fO7(d)
if(u<=0){v=-1
x=1
break}if(B.fO6(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anV(e),$async$aYb)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYb,w)},
c5P(d,e,f){var x=0,w=A.j(y.y),v
var $async$c5P=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HS(e,d),$async$c5P)
case 3:if(h){v=!1
x=1
break}v=B.anU(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5P,w)},
c5O(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c5O=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
x=3
return A.b(B.c5P(d,u,i.gSX()),$async$c5O)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5O,w)},
a6_(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a6_=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
if(i.gSX()){v=!0
x=1
break}if(B.aYa(d,u)){v=!0
x=1
break}x=5
return A.b(A.la(u,C.Rb),$async$a6_)
case 5:x=k?3:4
break
case 3:B.h2Y(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a6_)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kO(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rb,"Doc Share for Organizations"),$async$a6_)
case 7:if(!k){v=!1
x=1
break}B.h2Y(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a6_)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6_,w)},
c5M:function c5M(){},
c5N:function c5N(){},
fCa(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fCa=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fCa)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f7n.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.f7n.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCa,w)},
i29(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f7n.bm($.f7n,new B.fCc(d))},
fCc:function fCc(d){this.a=d},
f8L(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f8L=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.ja,null,y.H),$async$f8L)
case 3:C.zE.f8(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eS.mh()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8L,w)},
aeJ(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f7V.n(0,d,new B.aaV(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeJ)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aeJ)
case 2:return A.h(null,w)}})
return A.i($async$aeJ,w)},
aeD(d){return B.hMd(d)},
hMd(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f7V.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aeD)
case 3:u=j.aU(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aH(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.ck(s)){v=null
x=1
break}o=J.b6(s,new B.fcq(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaV(r)
$.f7V.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeD,w)},
PT(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cr(e))
$.FG.n(0,d,u)
x=3
return A.b(B.Qo(d,u),$async$PT)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PT,w)},
aMB(d){return B.hMb(d)},
hMb(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FG.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qn(d),$async$aMB)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FG.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aMB)
case 4:s=f
r=A.aU(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cD.aJ(r)
x=!J.ck(q)?9:10
break
case 9:B.PT(d,q)
x=11
return A.b(J.hC(s,d),$async$aMB)
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
return A.i($async$aMB,w)},
hIp(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cr(J.eX(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cr(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cr(A.BK(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cr(d)),y.K)
return A.fb(null,y.K)},
a0E(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0E=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fh1(r,t),!1,s)
A.fH(r,"error",new B.fh2(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ia(0,C.Ln,new B.fh3())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0E,w)},
aMV(d,e,f){return B.hOs(d,e,f)},
hOs(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMV=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0E(i),$async$aMV)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qo(o,p),$async$aMV)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.cf(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aeJ(k,j,s),$async$aMV)
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
return A.i($async$aMV,w)},
aMU(d,e,f){return B.hOr(d,e,f)},
hOr(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMU=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMV(d,e,f),$async$aMU)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0E(f),$async$aMU)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FG.n(0,s,r)
$.Q9.n(0,s,r)
x=11
return A.b(B.PT(s,r),$async$aMU)
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
return A.i($async$aMU,w)},
B7(d,e,f,g,h,i){return B.hwL(d,e,f,g,h,i)},
hwL(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B7=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jh(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYi(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PT(s,d),$async$B7)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$B7)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcv().aJ(d)),$async$B7)
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
return A.b(B.Aa(e),$async$B7)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FS(e,j),$async$B7)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B7,w)},
U2(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U2=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Aa(d),$async$U2)
case 3:t=a1
s=e.length,r=J.cE(t),q=0
case 4:if(!(q<e.length)){x=6
break}p=e[q]
o=p.a
n=o.size
n.toString
if(n<=0){x=5
break}n=Date.now()
m=""+1000*n+"_"+C.cI.aA(99999)
n=p.b
l=o.type
l.toString
k=B.h3_(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jh(m,n,k,l,j,"From folder",null,B.aYi(),null)
$.afb.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0E(o),$async$U2)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FG.n(0,h,g)
$.Q9.n(0,h,g)
B.PT(h,g)
x=9
break
case 10:x=11
return A.b(B.aMU(d,m,o),$async$U2)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FS(d,t),$async$U2)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U2,w)},
fOb(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fOb=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h3_(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HT(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.B7(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOb,w)},
HT(d,e,f,g,h,i){return B.hwK(d,e,f,g,h,i)},
hwK(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HT=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aA(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JJ(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HT)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.ck(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cr(J.QW(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kA(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qo(k,l),$async$HT)
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
return A.b(j.a8(0),$async$HT)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qo(k,new Uint8Array(A.cr(n))),$async$HT)
case 15:J.cf(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeJ(r,q,g),$async$HT)
case 16:f=new B.jh(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYi(),null)
x=17
return A.b(B.Aa(d),$async$HT)
case 17:e=a6
J.cf(e,f)
x=18
return A.b(B.FS(d,e),$async$HT)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HT,w)},
U4(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$U4=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afb.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0E(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeD(s),$async$U4)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qn(u[o]),$async$U4)
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
v=A.BK(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Q9.h(0,s)
if(i==null)i=$.FG.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rc(d,e),$async$U4)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Q9.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BK(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U4,w)},
h3_(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rc(d,e){return B.hwM(d,e)},
hwM(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rc=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Q9.h(0,f)
if(e==null)e=$.FG.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afb.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0E(s),$async$rc)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FG.n(0,f,r)
$.Q9.n(0,f,r)
B.PT(f,r)
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
return A.b(B.aeD(f),$async$rc)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awI(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qn(g[l]),$async$rc)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.amV()
if(!C.aG.gam(r)){$.FG.n(0,f,r)
$.Q9.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMB(f),$async$rc)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Q9.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.U4(a0,a1,0,g),$async$rc)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.cr(i))
$.FG.n(0,f,h)
$.Q9.n(0,f,h)
B.PT(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rc,w)},
hwP(d){var x,w,v=$.afb.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hwQ(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hwN(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ao1(d,e,f,g,h){return B.hwO(d,e,f,g,h)},
hwO(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ao1=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afb.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0E(s),$async$ao1)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rc(g,e),$async$ao1)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eV().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i4(d).wE(h,r,new A.Dk(!0,e.c)),$async$ao1)
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
return A.i($async$ao1,w)},
h31(d,e,f,g,h){var x,w,v,u,t=$.h30
$.h30=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c6_.n(0,t,new B.btt(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awI(u)))
return t},
fOc(d){var x=0,w=A.j(y.H)
var $async$fOc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOc,w)},
HU(d,e){var $async$HU=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afb.h(0,h)
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
return A.pU(B.U4(d,e,p,o<q?o:q),$async$HU,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pU(A.Fe(n),$async$HU,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pU(B.aeD("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HU,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pU(B.Qn(h[l]),$async$HU,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pU(A.Fe(k),$async$HU,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pU(B.rc(d,e),$async$HU,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pU(A.Fe(A.BK(j,p,o<i?o:i)),$async$HU,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pU(null,0,w)
case 2:return A.pU(t.at(-1),1,w)}})
var x=0,w=A.hbD($async$HU,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hdr(w)},
aYk(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c6_.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3E(),$async$aYk)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYk,w)},
U3(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$U3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6_.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3E(),$async$U3)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeJ(r.c,u,r.z),$async$U3)
case 4:t=new B.jh(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYi(),null)
u=r.a
x=5
return A.b(B.Aa(u),$async$U3)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FS(u,s),$async$U3)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U3,w)},
a66(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a66=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6_.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afT(u[s]),$async$a66)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a66,w)},
c61(d,e,f){var x=0,w=A.j(y.H)
var $async$c61=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byv(d,e,f),$async$c61)
case 2:return A.h(null,w)}})
return A.i($async$c61,w)},
c62(d,e,f){var x=0,w=A.j(y.H)
var $async$c62=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byw(d,e,f),$async$c62)
case 2:return A.h(null,w)}})
return A.i($async$c62,w)},
E2(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Aa(d),$async$E2)
case 2:p=g
J.nj(p,new B.c60(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FG.W(0,v)
$.afb.W(0,e)
x=3
return A.b(B.aeD(v),$async$E2)
case 3:u=g
$.f7V.W(0,v)
x=4
return A.b(A.az(),$async$E2)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$E2)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$E2)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afT(s[q]),$async$E2)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afT(v),$async$E2)
case 13:x=14
return A.b(B.FS(d,p),$async$E2)
case 14:return A.h(null,w)}})
return A.i($async$E2,w)},
aYj(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYj=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rc(d,e),$async$aYj)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f8L(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYj,w)},
Aa(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Aa=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Aa)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aH(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fh4(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Aa,w)},
FS(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FS)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fl0(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FS)
case 3:return A.h(null,w)}})
return A.i($async$FS,w)},
byv(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byv=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aa(d),$async$byv)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffu(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCq(f))
x=4
return A.b(B.FS(d,u),$async$byv)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byv,w)},
byw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Aa(d),$async$byw)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffv(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cEH(f))
x=4
return A.b(B.FS(d,u),$async$byw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byw,w)},
aaV:function aaV(d){this.a=d},
fcq:function fcq(){},
fh1:function fh1(d,e){this.a=d
this.b=e},
fh2:function fh2(d){this.a=d},
fh3:function fh3(){},
c60:function c60(d){this.a=d},
btt:function btt(d,e,f,g,h,i,j,k,l){var _=this
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
fh4:function fh4(){},
fl0:function fl0(){},
ffu:function ffu(d){this.a=d},
ffv:function ffv(d){this.a=d},
a67(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a67=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c65())?3:4
break
case 3:x=5
return A.b(B.aYl(d,e),$async$a67)
case 5:u=g
if(u!=null){t=u.c
B.ML(d,u.b,e,t)}v=u
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
return A.b(B.aYg(s),$async$a67)
case 10:case 9:if(g){v=new A.Pg(1,D.QP,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.U5(d,e),$async$a67)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Ua(!0,!0,d,e),$async$a67)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.ML(d,D.yR,e,t)
v=new A.Pg(p,D.yR,t)
x=1
break}v=B.c64(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a67,w)},
U5(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$U5=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a69(null,d,e),$async$U5)
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
return A.b(B.aYf(p,d.length,e),$async$U5)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c62(e,C.d.gK(d).a,r.b),$async$U5)
case 7:case 6:q=r.a
x=8
return A.b(B.ML(d,D.QP,e,q),$async$U5)
case 8:v=new A.Pg(d.length,D.QP,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U5,w)},
U6(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$U6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mm(D.mr)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a68(d,e),$async$U6)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c5Y(s,d,e,t),$async$U6)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYg(t),$async$U6)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rc(e,d),$async$U6)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.U5(A.a([d],y.r),e),$async$U6)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U6,w)},
U8(){var x=0,w=A.j(y.H)
var $async$U8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fO5(),$async$U8)
case 2:x=3
return A.b(B.aP0(),$async$U8)
case 3:return A.h(null,w)}})
return A.i($async$U8,w)},
a68(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a68=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYi()
x=3
return A.b(B.c61(e,d.a,u),$async$a68)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a68,w)},
ML(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$ML=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QP&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a68(p,f),$async$ML)
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
return A.b(B.c5X(o,p,u,f),$async$ML)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c5Y(o,p,f,t),$async$ML)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5W(o,u,p,f),$async$ML)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ML,w)},
aYl(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c63(e,d),$async$aYl)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Ua(!1,!0,d,e),$async$aYl)
case 4:u=g
if(u!=null){t=u.b
v=new A.Pg(u.a,D.yR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYl,w)},
c63(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c63=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.U4(d,s,0,1),$async$c63)
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
return A.i($async$c63,w)},
c64(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c64=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a69(null,d,e),$async$c64)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h2Z(u)
if(t.length>800){v=null
x=1
break}v=new A.Pg(d.length,D.dsI,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c64,w)},
ao2(d,e,f){return B.hwT(d,e,f)},
hwT(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ao2=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mz(g,1)
x=B.fOa(g)?3:4
break
case 3:x=5
return A.b(B.c5Z(g),$async$ao2)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mz(g,13))
try{k=B.E3(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mz(g,13))
u=9
x=12
return A.b(B.aYe(q),$async$ao2)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U7(p,a0)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fO9(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U7(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HV(C.a.i(J.mz(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HV(C.a.i(J.mz(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HV(h,d,a0)
x=1
break}if(J.eZ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.U7(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao2,w)},
HV(d,e,f){return B.hwR(d,e,f)},
hwR(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HV=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aJ(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aJ(g,f,"")}else j=e
s=j
r=A.cv(A.t(s)+"/manifest.json",0,null)
q=A.cv(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aY6(r),$async$HV)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aY6(A.cv(s,0,null)),$async$HV)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c5B(o,r,a1,n,a2),$async$HV)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c5A(q),$async$HV)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.U7(l,a2),$async$HV)
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
return A.i($async$HV,w)},
a69(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a69=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.rc(f,r),$async$a69)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcv().aJ(q)],t,s))
x=3
break
case 4:u=A.V(t,y.C)
u.n(0,"marker","ngmyDocShareBundle")
u.n(0,"version",1)
u.n(0,"ownerEmail",C.a.i(f.toLowerCase()))
u.n(0,"exportedAt",new A.S(Date.now(),0,!1).a6().ac())
if(d!=null&&d.length!==0)u.n(0,"deliveryVia",d)
u.n(0,"files",p)
v=C.R.ao(u,null)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a69,w)},
U7(d,e){return B.hwS(d,e)},
hwS(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$U7=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
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
if(J.ad(j)===0){x=7
break}i=C.cD.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.B7(i,a3,d,k,l,o),$async$U7)
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
return A.i($async$U7,w)},
MK:function MK(d,e){this.a=d
this.b=e},
c65:function c65(){},
a0e(d){var x=A.O(d).ax.a===C.I,w=x?D.ad4:D.ab0,v=x?D.aey:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.acc:C.aL
return new A.aER([w,s,v,u,t,x?C.f7:C.bU])},
hig(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fGe(e),d,null,!0,!0,y.N)},
c5L(d,e,f,g,h,i,j,k,l){return new B.U_(e,l,d,f,k,j,g,h,i,null)},
Yh(d,e,f,g,h,i,j){return new B.bbK(g,h,j,e,i,d,f,null)},
fGe:function fGe(d){this.a=d},
Ye:function Ye(d,e){this.c=d
this.a=e},
axT:function axT(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_S:function d_S(d){this.a=d},
d_Q:function d_Q(d){this.a=d},
d_R:function d_R(d){this.a=d},
bt7:function bt7(){},
U_:function U_(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBR:function aBR(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dNy:function dNy(d){this.a=d},
dMW:function dMW(d,e){this.a=d
this.b=e},
dMX:function dMX(d,e){this.a=d
this.b=e},
dMv:function dMv(d,e,f){this.a=d
this.b=e
this.c=f},
dMu:function dMu(d){this.a=d},
dMw:function dMw(d,e){this.a=d
this.b=e},
dMB:function dMB(d,e,f){this.a=d
this.b=e
this.c=f},
dMA:function dMA(d){this.a=d},
dNm:function dNm(d,e){this.a=d
this.b=e},
dNn:function dNn(d){this.a=d},
dMT:function dMT(d,e,f){this.a=d
this.b=e
this.c=f},
dMQ:function dMQ(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dMz:function dMz(d){this.a=d},
dN0:function dN0(d){this.a=d},
dN_:function dN_(){},
dMF:function dMF(d){this.a=d},
dNj:function dNj(d,e){this.a=d
this.b=e},
dNk:function dNk(d,e){this.a=d
this.b=e},
dNl:function dNl(d,e){this.a=d
this.b=e},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMS:function dMS(d,e){this.a=d
this.b=e},
dNc:function dNc(d,e){this.a=d
this.b=e},
dN8:function dN8(d){this.a=d},
dN7:function dN7(d){this.a=d},
dN9:function dN9(){},
dNa:function dNa(){},
dNb:function dNb(d,e){this.a=d
this.b=e},
dNd:function dNd(){},
dNe:function dNe(d){this.a=d},
dN6:function dN6(d,e){this.a=d
this.b=e},
dN1:function dN1(d){this.a=d},
dN2:function dN2(d){this.a=d},
dN3:function dN3(d){this.a=d},
dN4:function dN4(d){this.a=d},
dN5:function dN5(d){this.a=d},
dMC:function dMC(){},
dMD:function dMD(d){this.a=d},
dME:function dME(d,e){this.a=d
this.b=e},
dMy:function dMy(d,e){this.a=d
this.b=e},
dMx:function dMx(d,e,f){this.a=d
this.b=e
this.c=f},
dMU:function dMU(d){this.a=d},
dMV:function dMV(d,e,f){this.a=d
this.b=e
this.c=f},
dMO:function dMO(d,e){this.a=d
this.b=e},
dMK:function dMK(d){this.a=d},
dMH:function dMH(d,e,f){this.a=d
this.b=e
this.c=f},
dML:function dML(d){this.a=d},
dMM:function dMM(d){this.a=d},
dMN:function dMN(){},
dMP:function dMP(d,e){this.a=d
this.b=e},
dMI:function dMI(d){this.a=d},
dMG:function dMG(d,e,f){this.a=d
this.b=e
this.c=f},
dMJ:function dMJ(){},
dMZ:function dMZ(d){this.a=d},
dMY:function dMY(d,e){this.a=d
this.b=e},
dNi:function dNi(d,e){this.a=d
this.b=e},
dNf:function dNf(d){this.a=d},
dNg:function dNg(d,e){this.a=d
this.b=e},
dNh:function dNh(d){this.a=d},
dNv:function dNv(d){this.a=d},
dNt:function dNt(d){this.a=d},
dNu:function dNu(d){this.a=d},
dNw:function dNw(){},
dNx:function dNx(d,e){this.a=d
this.b=e},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNq:function dNq(d,e,f){this.a=d
this.b=e
this.c=f},
dNo:function dNo(d,e,f){this.a=d
this.b=e
this.c=f},
dNr:function dNr(d,e){this.a=d
this.b=e},
dNs:function dNs(d,e){this.a=d
this.b=e},
axQ:function axQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbJ:function bbJ(d,e,f){this.c=d
this.d=e
this.a=f},
d_O:function d_O(){},
d_P:function d_P(){},
abe:function abe(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0b:function d0b(){},
d0a:function d0a(d){this.a=d},
Yg:function Yg(d,e,f){this.c=d
this.d=e
this.a=f},
axV:function axV(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d07:function d07(d){this.a=d},
d08:function d08(d,e,f){this.a=d
this.b=e
this.c=f},
d09:function d09(d,e){this.a=d
this.b=e},
d05:function d05(d,e){this.a=d
this.b=e},
d03:function d03(d){this.a=d},
d01:function d01(d){this.a=d},
d_Z:function d_Z(d){this.a=d},
d04:function d04(d){this.a=d},
d00:function d00(d){this.a=d},
d06:function d06(d){this.a=d},
d02:function d02(d){this.a=d},
d0_:function d0_(d){this.a=d},
Yd:function Yd(d,e,f){this.c=d
this.d=e
this.a=f},
axS:function axS(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d_L:function d_L(d){this.a=d},
d_K:function d_K(d,e){this.a=d
this.b=e},
d_M:function d_M(d){this.a=d},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_N:function d_N(d){this.a=d},
d_I:function d_I(d,e){this.a=d
this.b=e},
d_E:function d_E(d){this.a=d},
d_F:function d_F(d){this.a=d},
d_G:function d_G(d,e){this.a=d
this.b=e},
d_H:function d_H(d){this.a=d},
OU:function OU(d,e,f){this.c=d
this.d=e
this.a=f},
axY:function axY(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d0o:function d0o(d){this.a=d},
d0p:function d0p(d){this.a=d},
d0q:function d0q(d){this.a=d},
d0r:function d0r(d){this.a=d},
d0s:function d0s(d,e){this.a=d
this.b=e},
d0t:function d0t(d){this.a=d},
d0v:function d0v(d){this.a=d},
d0u:function d0u(d){this.a=d},
Yi:function Yi(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axW:function axW(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d0k:function d0k(d,e){this.a=d
this.b=e},
d0l:function d0l(d,e){this.a=d
this.b=e},
d0c:function d0c(d,e,f){this.a=d
this.b=e
this.c=f},
d0d:function d0d(d){this.a=d},
d0e:function d0e(){},
d0j:function d0j(){},
d0f:function d0f(d,e){this.a=d
this.b=e},
d0g:function d0g(d,e){this.a=d
this.b=e},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0i:function d0i(d,e){this.a=d
this.b=e},
abc:function abc(d,e){this.c=d
this.a=e},
d_D:function d_D(d){this.a=d},
Yc:function Yc(d){this.a=d},
axR:function axR(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yj:function Yj(d,e){this.c=d
this.a=e},
axX:function axX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d0n:function d0n(d){this.a=d},
d0m:function d0m(d){this.a=d},
bbK:function bbK(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hwU(){var x,w=$.pi(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"VT"+C.d.fW(v)},
MM(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$MM)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f1("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MM)
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
return A.i($async$MM,w)},
a6a(d){return B.hwV(d)},
hwV(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6a=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a6a)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6a)
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
return A.i($async$a6a,w)},
U9(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$U9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MM(),$async$U9)
case 3:s=g
r=J.a8(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dT(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6a(s),$async$U9)
case 4:case 1:return A.h(v,w)}})
return A.i($async$U9,w)},
Ua(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Ua=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c1(),$async$Ua)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c67(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hwU()
t=A.T(u).k("K<1,a3<n,aC>>")
r=A.B(new A.K(u,new B.c68(s),t),t.k("aj.E"))
x=6
return A.b(B.MM(),$async$Ua)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6a(q),$async$Ua)
case 7:x=8
return A.b(B.a6b(r,u,g,s),$async$Ua)
case 8:v=new A.bnd(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ua,w)},
ao3(d){var x=0,w=A.j(y.y),v,u,t
var $async$ao3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MM(),$async$ao3)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao3,w)},
c69(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c69=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MM(),$async$c69)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a8(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c69,w)},
a6b(d,e,f,g){return B.hwW(d,e,f,g)},
hwW(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6b=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ao1("media",r,new B.c66(s,e,g),f,q),$async$a6b)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.U9(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6b)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.U9(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6b)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.U9(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6b)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6b,w)},
E3(d,e,f){return B.hwX(d,e,f)},
hwX(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E3=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$E3)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ao3(b3),$async$E3)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kg,null,g),$async$E3)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ao3(b3),$async$E3)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MM(),$async$E3)
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
a2=a1.gaf(a4),a5=y.N,a6=b6==null
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
a8=$.eV().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oM(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9v(a8.a,b0,"media",a8.d,a9).Cf(m)
k=A.cv(l,0,null)
x=17
return A.b(B.aY7(k,n,o,s,b7),$async$E3)
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
g=a1.gaf(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gU(g)
x=a0.b(a7)?23:24
break
case 23:a2=J.q(a7,"storagePath")
h=J.k(a2==null?"":a2)
x=J.ad(h)!==0?25:26
break
case 25:u=28
a2=$.eV().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oM(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9v(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E3)
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
a0=A.dT(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6a(e),$async$E3)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E3,w)},
c67:function c67(){},
c68:function c68(d){this.a=d},
c66:function c66(d,e,f){this.a=d
this.b=e
this.c=f},
aP0(){var x=0,w=A.j(y.H),v,u
var $async$aP0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hHP=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aP0)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aP0)
case 3:u=$.fTf
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aP0)
case 4:$.fTf=$.hQg=$.hQh=null
return A.h(null,w)}})
return A.i($async$aP0,w)},
fkC(d){var x=0,w=A.j(y.H),v,u
var $async$fkC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a53){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fkD(new A.bS(u,y.aY))
x=3
return A.b(u.ia(0,C.hH,new B.fkE()),$async$fkC)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fkC,w)},
hQe(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hwE(x):x},
fTj(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.ao5(u)
x=1
break}v=B.fO9(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTj,w)},
fTi(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.ao6(u)
x=1
break}v=B.fO9(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTi,w)},
fBV(d){var x=0,w=A.j(y.T),v
var $async$fBV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao6(d),$async$fBV)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fBV,w)},
bzn(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fTi(d),$async$bzn)
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
return A.i($async$bzn,w)},
f9z(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f9z=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.U3(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B7(d.amV(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9z,w)},
FU(d,e,f){return B.hSC(d,e,f)},
hSC(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FU=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fTj(a1),$async$FU)
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
return A.b($.hk7().aCF(D.dhd,null),$async$FU)
case 4:l=d.fTf=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awI(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.fl9(f,k,new B.fla(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a6y(0,new B.Wk(r,"offer")),$async$FU)
case 5:d=l
x=7
return A.b(l.ajL(0),$async$FU)
case 7:x=6
return A.b(d.a6q(0,a4),$async$FU)
case 6:x=8
return A.b(B.fkC(l),$async$FU)
case 8:x=9
return A.b(l.anE(),$async$FU)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hQe(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ao7(m,h),$async$FU)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h2Z(h)
case 11:v=new A.bmv(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FU,w)},
fkD:function fkD(d){this.a=d},
fkE:function fkE(){},
fla:function fla(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fl9:function fl9(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fl8:function fl8(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hUt(d){switch(d){case"new":return D.e9f
case"checking":return D.e9g
case"connected":return D.e9i
case"completed":return D.e9h
case"failed":return D.e9k
case"disconnected":return D.e9l
case"closed":return D.aKm
case"count":return D.e9j}return D.aKm},
hUu(d){switch(d){case"new":return D.aKn
case"gathering":return D.e9m
case"complete":return D.a53}return D.aKn},
i3D(d){switch(d){case"stable":return D.e9n
case"have-local-offer":return D.e9o
case"have-local-pranswer":return D.e9q
case"have-remote-offer":return D.e9p
case"have-remote-pranswer":return D.e9r
case"closed":return D.aKt}return D.aKt},
i1T(d){switch(d){case"new":return D.aKq
case"connecting":return D.aKr
case"connected":return D.aKs
case"closed":return D.a54
case"disconnected":return D.aKp
case"failed":return D.aKo}return D.a54},
a8t:function a8t(d,e){this.a=d
this.b=e},
NM:function NM(d,e){this.a=d
this.b=e},
Wj:function Wj(d,e){this.a=d
this.b=e},
NL:function NL(d,e){this.a=d
this.b=e},
Ex:function Ex(d,e){this.a=d
this.b=e},
ch3:function ch3(){},
fPU(d){var x=new B.Ew()
x.a=d
x.b=!0
return x},
Ew:function Ew(){this.b=this.a=$},
a8s:function a8s(){},
asl:function asl(){},
Wk:function Wk(d,e){this.a=d
this.b=e},
fO5(){var x=0,w=A.j(y.H)
var $async$fO5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fO5,w)},
fO8(d,e,f){var x=0,w=A.j(y.T),v
var $async$fO8=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mm(D.mr))){v=null
x=1
break}v=B.fCa(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fO8,w)},
h2Z(d){var x,w=F.aau.a3o(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hwD(d){var x,w,v=C.cD.aJ(d)
try{x=C.c4.ca(0,F.aat.baG(v,!1))
return x}catch(w){x=C.c4.ca(0,v)
return x}},
fO9(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hwD(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c4.ca(0,C.cD.aJ(x))
return v}catch(u){return x}}return null},
hwE(d){var x,w,v,u,t,s=A.a([],y.s)
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
hwF(){var x,w=$.pi(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fW(v)},
aYd(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYd)
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
return A.i($async$aYd,w)},
c5Q(d,e){return B.hwG(d,e)},
hwG(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5Q=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c5Q)
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
return A.i($async$c5Q,w)},
aYg(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYg=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYd(d),$async$aYg)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYg,w)},
aYf(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYf=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hwF()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c5Q(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYf)
case 3:if(!h){v=null
x=1
break}v=new A.a_i("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYf,w)},
aYe(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYe=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYd(o),$async$aYe)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c4.ca(0,C.cD.aJ(u))
if(J.iS(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYe,w)},
c5R(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5R=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bAk("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c5R)
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
return A.i($async$c5R,w)},
aYh(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HR(),$async$aYh)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYh,w)},
anZ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anZ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYh(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anZ,w)},
anX(d,e){var x=0,w=A.j(y.H)
var $async$anX=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anX)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anX)
case 2:return A.h(null,w)}})
return A.i($async$anX,w)},
a62(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a62=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a62)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HR(),$async$a62)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a61(s),$async$a62)
case 5:x=6
return A.b(B.anX(f,u),$async$a62)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a62,w)},
a63(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a63=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a63)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HR(),$async$a63)
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
return A.b(B.anX(g,q),$async$a63)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a61(u),$async$a63)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a63,w)},
a64(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a64=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a64)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HR(),$async$a64)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a8(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYa(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a64)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a64)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a64,w)},
c5S(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5S=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c5S)
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
return A.i($async$c5S,w)},
HS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5S(d),$async$HS)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYh(t),$async$HS)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anY(d),$async$HS)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYa(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.anY(d),$async$HS)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HS,w)},
anY(d){var x=0,w=A.j(y.H)
var $async$anY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anY)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$anY)
case 2:return A.h(null,w)}})
return A.i($async$anY,w)},
aYi(){var x,w=$.pi(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fW(v)},
a65(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fOa(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5V(d){return B.hwI(d)},
hwI(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a65(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5V)
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
return A.i($async$c5V,w)},
ao0(d,e){return B.hwJ(d,e)},
hwJ(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ao0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a65(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$ao0)
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
return A.i($async$ao0,w)},
c5X(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5X=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a65(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ao0(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c5X)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5X,w)},
c5W(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5W=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a65(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ao0(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c5W)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5W,w)},
c5Y(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c5Y=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a65(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ao0(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5Y,w)},
c5Z(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c5Z=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fOa(d)){v=null
x=1
break}x=3
return A.b(B.c5V(d),$async$c5Z)
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
return A.i($async$c5Z,w)},
a6c(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6c=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a6c)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f1("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6c)
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
return A.i($async$a6c,w)},
ao4(d){return B.hwY(d)},
hwY(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ao4=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$ao4)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$ao4)
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
return A.i($async$ao4,w)},
ao5(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ao5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$ao5)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6c(),$async$ao5)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c4.ca(0,C.cD.aJ(q))
if(J.iS(p).length===0){v=null
x=1
break}m=y.N
l=y.z
o=A.dT(A.a1(r,m,l),m,l)
J.aG(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aG(s,j,o)
x=9
return A.b(B.ao4(s),$async$ao5)
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
return A.i($async$ao5,w)},
ao7(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ao7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c1(),$async$ao7)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6c(),$async$ao7)
case 4:u=g
t=J.a8(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dT(A.a1(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcv().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.ao4(u),$async$ao7)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao7,w)},
ao6(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ao6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c1(),$async$ao6)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6c(),$async$ao6)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c4.ca(0,C.cD.aJ(u))
v=r
x=1
break}catch(n){t=A.a9(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ao6,w)},
an7(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$an7=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aT.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.pL)){v=null
x=1
break}x=3
return A.b(p.lR(e),$async$an7)
case 3:r=g
u=4
x=7
return A.b(r.hp(C.fW),$async$an7)
case 7:q=g
o=q
o=o==null?null:J.fa(J.wx(o))
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
return A.i($async$an7,w)},
i_X(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fAt(d){return B.i_Z(d)},
i_Z(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fAt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eV().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").Kd(d,3600),$async$fAt)
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
return A.i($async$fAt,w)},
Cw(d,e,f,g,h,i){var x=null
return B.i_W(d,e,f,g,h,i)},
i_W(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cw=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h31(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fOc(r),$async$Cw)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fAt(o),$async$Cw)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a66(r),$async$Cw)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aNs)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.L8(A.a([],g))
x=15
return A.b(d.eT(0,A.ata("GET",A.cv(n,0,null))).cM(0,C.ES),$async$Cw)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a66(r),$async$Cw)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JJ(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cw)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYk(r,k),$async$Cw)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a8(0),$async$Cw)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.U3(r)
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
return A.b(B.a66(r),$async$Cw)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cw,w)},
aOJ(d){return B.i_Y(d)},
i_Y(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eV().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").W(0,d),$async$aOJ)
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
return A.i($async$aOJ,w)}},D,T,M,U,V,W,X,N,Y
J=c[1]
A=c[0]
C=c[2]
H=c[140]
O=c[40]
F=c[235]
I=c[132]
P=c[215]
E=c[208]
G=c[86]
Q=c[180]
R=c[133]
S=c[213]
K=c[239]
L=c[246]
B=a.updateHolder(c[21],B)
D=c[244]
T=c[179]
M=c[198]
U=c[65]
V=c[247]
W=c[71]
X=c[55]
N=c[85]
Y=c[245]
B.ch4.prototype={
aCF(d,e){return this.cGc(d,e)},
cGc(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCF=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.V(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dT(r,s,t)
t.v(0,d)
u=new q(A.kd(A.cA(t)))
t=J.k(u)
v=B.hBy(C.cS.gcv().aJ(new A.d3(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCF,w)}}
B.b2q.prototype={
bvW(d){var x=this,w=x.w
w.onclose=A.he(new B.ch_(x))
w.onopen=A.he(new B.ch0(x))
w.onmessage=A.he(new B.ch1(x))
w.onbufferedamountlow=A.he(new B.ch2(x))},
gda(d){return this.x},
ag0(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ag0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ew()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fPU(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$ag0)
case 8:v=t.fPU(s.aml(f,0,null))
x=1
break
case 7:case 4:v=B.fPU(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag0,w)}}
B.b2r.prototype={
bvX(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.ch5(x)))
w.addEventListener("icecandidate",A.he(new B.ch6(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.ch7(x)))
w.onicegatheringstatechange=A.he(new B.ch8(x))
w.addEventListener("signalingstatechange",A.he(new B.ch9(x)))
if(!$.fWP())w.addEventListener("connectionstatechange",A.he(new B.cha(x)))
w.addEventListener("negotiationneeded",A.he(new B.chb(x)))
w.addEventListener("track",A.he(new B.chc(x)))},
ajL(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kd(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajL)
case 3:t=f
v=new B.Wk(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajL,w)},
a6q(d,e){return this.bls(0,e)},
bls(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6q)
case 2:return A.h(null,w)}})
return A.i($async$a6q,w)},
a6y(d,e){return this.blI(0,e)},
blI(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6y=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6y)
case 2:return A.h(null,w)}})
return A.i($async$a6y,w)},
anE(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wk(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anE,w)},
bB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.fb(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB,w)}}
B.abd.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Yf.prototype={
T(){return new B.axU()},
gdc(){return this.c}}
B.axU.prototype={
a_(){this.a1()
this.acK()},
acK(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYb(u.e,u.c),$async$acK)
case 2:t=e
if(v.c!=null)v.m(new B.d_W(v,t))
return A.h(null,w)}})
return A.i($async$acK,w)},
Pv(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anU(t.e,t.c,!1),$async$Pv)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eOY)
x=1
break}x=4
return A.b(B.a60(u.a.c,"individual"),$async$Pv)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4Y(A.e6(new B.d_T(u),!1,null,y.H)),$async$Pv)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Pv,w)},
ID(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$ID=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fiM(o),$async$ID)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a64(o.e,r,s,q),$async$ID)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eM2)
x=1
break}x=5
return A.b(B.a60(u.a.c,"member"),$async$ID)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4Y(A.e6(new B.d_V(u),!1,null,y.H)),$async$ID)
case 6:case 1:return A.h(v,w)}})
return A.i($async$ID,w)},
xz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a6_(t.e,o,t.f,t.r,t.w,s),$async$xz)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a60(u.a.c,"org_owner"),$async$xz)
case 4:x=5
return A.b(B.anZ(u.a.c),$async$xz)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fjg(o),$async$xz)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a62(s,t,o,q.c),$async$xz)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eM_)
x=1
break}x=10
return A.b(B.anZ(u.a.c),$async$xz)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4Y(A.e6(new B.d_U(u),!1,null,y.H)),$async$xz)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xz,w)},
B(d){var x,w,v,u=this,t=null,s=A.O(d).ax.a===C.I,r=s?C.j6:C.pp,q=B.fO7(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fL,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f6p,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.foY,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bU4,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lx(new B.d_Y(),t),C.P,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abG(C.eR,C.ax7,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcaC(),t),C.ac],v))
p.push(new B.abG(C.oA,C.a11,"Team Member","Sign in with your organization access code + password",u.gcbt(),t))
p.push(C.ac)
p.push(new B.abG(C.ajL,C.a2v,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcaZ(),t))
return A.c8(t,r,A.bm(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ah3,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.abG.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ez(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p0,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Bd,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bW,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAs.prototype={}
B.aDE.prototype={}
B.jh.prototype={
mm(d){var x=this.b,w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gaoh(){var x=this.d
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
ba8(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jh(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cEH(d){return this.ba8(null,d)},
aCq(d){return this.ba8(d,null)}}
B.TY.prototype={
T(){return new B.aBP(new A.cq(null,y.A))},
gdc(){return this.c}}
B.aBP.prototype={
a_(){this.a1()
this.acL()},
acL(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B6(u.a.c),$async$acL)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dMr(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acL,w)},
acM(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fB(s)),$async$acM)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.ePS)
case 1:return A.h(v,w)}})
return A.i($async$acM,w)},
YM(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YM=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.an7(s.d,4),$async$YM)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$YM)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.a9(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$YM,w)},
agt(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agt=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a94("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agt)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agt,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.j6:C.pp,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
if(q.f)x=C.lz
else if(q.e==null)x=A.av(new A.C(C.ew,A.d("Could not create your code. Check internet and try again.",p,p,p,p,p,p,A.l(p,p,m.j(0.7),p,p,p,p,p,p,p,p,p,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),C.L,p,p),p),p,p,p)
else{x=A.d("Share this code or QR so anyone can send documents directly to your Doc Share.",p,p,p,p,p,p,A.l(p,p,m.j(0.65),p,p,p,p,p,p,p,p,14,p,p,p,p,1.45,!0,p,p,p,p,p,p,p,p),C.L,p,p)
w=C.aE.j(o?0.35:0.12)
w=A.a([w,C.aJ.j(o?0.2:0.08)],y.O)
v=A.m(20)
u=A.I(C.aE.j(0.4),C.q,1)
t=A.d("MY CODE",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,11,p,p,C.H,p,p,!0,p,1.2,p,p,p,p,p,p),p,p,p)
s=q.e
s.toString
r=y.p
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1s,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agE,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mz,w,C.kt,new A.es(A.p(p,A.pC(p,p,!1,B.hwz(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bW,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kt,A.A(A.a([A.D(A.eB(N.Bw,C.Tf,q.gc3E(),p),1),C.av,A.D(A.dp(C.yi,C.a7i,q.gc3F(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.eB(M.a_T,D.fkV,q.gcpU(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.LQ,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.U1.prototype={
T(){return new B.aBS(new A.ar(C.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
B.aBS.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HQ(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HQ(u.d.a.a)
if(t==null){u.m(new B.dNA(u))
x=1
break}u.m(new B.dNB(u))
s=u.a
r=s.c
x=3
return A.b(B.a5Z(s.d,new B.dNC(u),t,r),$async$YN)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dND(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$YN,w)},
a0Y(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0Y=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dNE(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rc(r.a.c,q),$async$a0Y)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dNF(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agC(p,m,l,j,k),$async$a0Y)
case 8:o=e
if(r.c!=null)r.m(new B.dNG(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dNH(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dNI(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0Y,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ad4:D.ab0,h=j?D.aey:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.acc:C.aL
i=[i,e,h,g,f,j?C.f7:C.bU]
x=A.O(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e0(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bR(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bI8,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fy,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1s,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u4(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bh3()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.r,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LK,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dNJ(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lX,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.KN(l.a.d,4)
m=A.B(new A.K(m,new B.dNK(x,new A.aER(i)),m.$ti.k("K<aj.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.mf,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bw,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eKz)
else q.push(A.W(C.lc,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.brz,k,k,C.ah),1)
u=l.f?k:l.gcpV()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eB(M.a_T,D.flS,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.aA(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc3G()
t=A.bk(C.aE,k,k,0,C.c,k,C.n3,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mw(new B.dNL(),A.v(A.a([e,new A.C(D.br3,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rv:D.fkj,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cr,C.Xk,k,k,new A.bn(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bh3.prototype={
oj(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.TZ.prototype={
T(){return new B.aBQ()}}
B.aBQ.prototype={
a_(){var x,w,v,u=this
u.a1()
x=u.a
w=x.e
v=$.aw()
u.d!==$&&A.aO()
u.d=new A.ar(new A.bb(w,C.b3,C.aN),v)
x=x.d
u.e!==$&&A.aO()
u.e=new A.ar(new A.bb(x,C.b3,C.aN),v)
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
acN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dMs(r))
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
return A.b(B.a63(p,m,n,o,C.a.i(l).length===0?null:l),$async$acN)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.ePt)
s=[1]
x=4
break}p.I(y.q).f.R(D.eO6)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dMt(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acN,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.j6:C.pp,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fd4,s,s,s,1,s,!0),p=A.p(s,D.bjO,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gh,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),o,s,s,s,s,s,2,D.bOZ,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),x,s,s,s,s,s,2,D.bOU,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),w,s,s,s,s,s,2,D.bP9,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc3H()
u=A.bk(C.aE,s,s,s,s,C.fM,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mz,A.bJ(t.r?C.rv:C.aQ4,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.aaV.prototype={}
B.btt.prototype={
a3E(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3E=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cr(r.amV()))
x=3
return A.b(B.Qo(t,s),$async$a3E)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3E,w)},
gdc(){return this.a}}
B.MK.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Ye.prototype={
T(){return new B.axT(new A.ar(C.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
B.axT.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_S(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c3N(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a0e(d),u=x.a.c,t=u?C.i6:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j6:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fL,32)],n),l=A.p(w,T.ams,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cv,16)],n),C.anf,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u4(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bt7()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.r,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F2,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aWT),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_Q(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lX,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.nq,new B.d_R(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eG(w,C.K,new A.cU(Q.JK,A.bZ(new A.C(C.xr,A.v(A.a([l,C.aP,k,C.P,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.D(A.bZ(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e3h,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc3M(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NB,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LS,C.d0,w,w,w)}}
B.bt7.prototype={
oj(d,e){return e.ajG(e.a.toUpperCase())}}
B.U_.prototype={
T(){return new B.aBR(A.a([],y.r),A.aX(y.N))},
gdc(){return this.c}}
B.aBR.prototype={
a_(){var x=this
x.a1()
x.tn()
x.w=A.dA(C.jb,new B.dNy(x))},
q(){var x=this.w
if(x!=null)x.a8(0)
B.U8()
this.a2()},
a_Q(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MJ(u.a.c),$async$a_Q)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Aa(u.a.c),$async$a_Q)
case 4:u.m(new s.dMW(u,e))
u.hW("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_Q,w)},
tn(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MJ(u.a.c),$async$tn)
case 3:t=e
x=4
return A.b(B.Aa(u.a.c),$async$tn)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dMX(u,s))
if(t>0)u.hW("Received "+A.t(t)+" file(s) via My Code.")
u.MV(u.d)
B.B6(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tn,w)},
MV(d){return this.bzU(d)},
bzU(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a68(r,u.a.c),$async$MV)
case 8:p=f
if(u.c==null){x=1
break}new B.dMv(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.mm(D.mr))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.U6(r,u.a.c),$async$MV)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Aa(u.a.c),$async$MV)
case 12:u.m(new o.dMw(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MV,w)},
Nh(d){return this.bG2(d)},
bG2(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a68(d,u.a.c),$async$Nh)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dMB(u,d,t))
x=6
return A.b(A.fI(new A.fB(t)),$async$Nh)
case 6:u.hW("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fB(r.toUpperCase())),$async$Nh)
case 7:u.hW("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nh,w)},
hW(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tp(d,e){return this.cAj(d,e)},
cAj(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dNm(r,e))
u=3
x=6
return A.b(d.$0(),$async$tp)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dNn(r))
$.eS.mh()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tp,w)},
gaTt(){var x=this.a
return x.f||x.r||x.w},
HA(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTt()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c5O(s,n,r,q,o,t),$async$HA)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hW("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.ftX(o,u.a.c),$async$HA)
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
return A.b(B.Cy(s,o,r,q,n,t),$async$HA)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HA,w)},
ZU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anZ(u.a.c),$async$ZU)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hW("No organization portal found.")
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
return A.b(A.a5(t,!1).c6(A.e6(new B.dMT(u,r,q),!1,null,y.H)),$async$ZU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZU,w)},
a00(d){return this.cjB(d)},
cjA(){return this.a00(1)},
cjB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a00=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTt()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anW(u.a.c),$async$a00)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a00,w)},
aaO(d,e,f){return this.bWh(d,e,f)},
bWh(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaO=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW(e)
x=1
break}x=3
return A.b(u.tp(new B.dMQ(u,d,null,e,f),"Uploading\u2026"),$async$aaO)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaO,w)},
bA1(){B.hhz(!1,new B.dMz(this))
return},
cox(){this.m(new B.dN0(this))},
ax4(){var x=0,w=A.j(y.H),v=this
var $async$ax4=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bA1()
return A.h(null,w)}})
return A.i($async$ax4,w)},
aaK(){var x=0,w=A.j(y.H),v=this
var $async$aaK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dMF(v),"Importing\u2026"),$async$aaK)
case 2:return A.h(null,w)}})
return A.i($async$aaK,w)},
Rw(d){return this.czK(d)},
czK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c6(A.e6(new B.dNj(u,d),!1,null,y.H)),$async$Rw)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mm(D.Pv)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c6(A.e6(new B.dNk(u,d),!1,null,y.H)),$async$Rw)
case 8:x=1
break
case 7:x=u.bWZ(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c6(A.e6(new B.dNl(u,d),!1,null,y.H)),$async$Rw)
case 11:x=1
break
case 10:u.hW("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rw,w)},
bWZ(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cBg,C.a.b0(x,w+1).toLowerCase())},
aee(d){return this.caG(d)},
caG(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aee=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c6(A.e6(new B.dMR(u,d),!1,null,y.H)),$async$aee)
case 5:x=1
break
case 4:u.m(new B.dMS(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aee,w)},
QU(d){return this.crm(d)},
crm(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$QU)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dNc(u,d),"Preparing QR\u2026"),$async$QU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QU,w)},
agT(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNd(),A.T(t).k("K<1,n>")).fI(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dNe(q),s),s.k("J.E"))
if(r.length===0){u.hW("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QU(r),$async$agT)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agT,w)},
agM(d){return this.cqW(d)},
cqW(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0e(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dN6(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agM)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rw(d)
break
case"qr":u.QU(A.a([d],y.r))
break
case"send_my_code":u.cbi(A.a([d],y.r))
break
case"save":u.ag7(d)
break
case"delete":u.Io(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agM,w)},
WK(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dMC(),A.T(t).k("K<1,n>")).fI(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dMD(q),s),s.k("J.E"))
if(r.length===0){u.hW("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$WK)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dME(u,r),"Preparing file\u2026"),$async$WK)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WK,w)},
afk(d){return this.ci4(d)},
ci4(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hig(d,!1),$async$afk)
case 3:s=f
r=s==null
q=B.a65(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hW("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afk,w)},
aek(){var x=0,w=A.j(y.H),v=this,u
var $async$aek=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fBy(u,v.a.c),$async$aek)
case 2:return A.h(null,w)}})
return A.i($async$aek,w)},
bA0(){B.hhz(!1,new B.dMy(this,null))
return},
IC(d,e){return this.cbj(d,e)},
aZm(d){return this.IC(null,d)},
cbi(d){return this.IC(d,null)},
cbj(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IC=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dMU(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wP.c5().amg(!0,C.Z5,!1),$async$IC)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tp(new B.dMV(l,s,r),"Preparing\u2026"),$async$IC)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hW("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hW("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bBt(p,l,e,s.a.c),$async$IC)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IC,w)},
HP(d){return this.bW4(d)},
bW4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hwy(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZm(t),$async$HP)
case 8:x=6
break
case 7:u.hW("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hW("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tp(new B.dMO(u,d),"Receiving video\u2026"),$async$HP)
case 11:x=1
break
case 10:x=12
return A.b(u.tp(new B.dMP(u,d),"Receiving\u2026"),$async$HP)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HP,w)},
DL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cs()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afk(t),$async$DL)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HP(s),$async$DL)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c6(A.e6(new B.dMZ(u),!1,null,y.N)),$async$DL)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tn(),$async$DL)
case 10:x=1
break
case 9:x=11
return A.b(u.HP(C.a.i(r)),$async$DL)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
ag7(d){return this.cn7(d)},
cn7(d){var x=0,w=A.j(y.H),v=this
var $async$ag7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dMY(v,d),"Saving\u2026"),$async$ag7)
case 2:return A.h(null,w)}})
return A.i($async$ag7,w)},
Io(d){return this.bIk(d)},
bIk(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Io=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kY(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Io)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5R(t),$async$Io)
case 6:case 5:s=d.a
x=7
return A.b(B.E2(u.a.c,s),$async$Io)
case 7:u.r.W(0,s)
x=8
return A.b(u.tn(),$async$Io)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Io,w)},
agZ(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agZ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0e(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNi(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$agZ)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aek()
break
case"import":u.aaK()
break}case 1:return A.h(v,w)}})
return A.i($async$agZ,w)},
c3K(d){var x=d.c
if(C.a.a0(x,"video/")||d.mm(D.mr))return C.pP
if(C.a.a0(x,"image/")||d.mm(D.Pv))return C.tL
if(C.a.t(x,"pdf"))return E.N8
return D.akd},
B(d){var x,w,v=this,u=null,t=B.a0e(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.G9,u,u,u,new B.dNt(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bIE,u,u,u,v.e?u:v.gcb_(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcow()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bD2:E.akE,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_Q,u,u,u,v.e?u:v.gc3L(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nW,u,u,u,v.e?u:v.gb_u(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bKk,u,u,u,v.e?u:new B.dNu(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lx(new B.dNv(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.O(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lX(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axQ(C.jj,s,!0,t,w?u:v.gcrn(),u),1)
x.push(new A.C(D.bpR,A.mw(new B.dNw(),A.A(A.a([s,C.av,A.D(new B.axQ(C.vq,"Export",!1,t,w?u:v.gbLO(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cr,C.iw,u,u,new A.bn(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbJ(t,v.e?u:v.gb_u(),u)
else s=A.k2(!0,u,u,new B.dNx(v,t),s,u,D.bpJ,u,u,!1,!1)
x.push(A.D(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axQ.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.v9,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.v9,t,new A.b7(s,C.Y),new A.aA(v,1,C.q,-1),t,t,t,t)
return A.eB(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbJ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mw(new B.d_O(),new A.C(E.Ya,A.v(A.a([A.mw(new B.d_P(),A.p(x,A.W(C.xM,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.i9,x,x,new A.bn(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.nW,D.fpg,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Y5,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cr,C.AB,x,x,new A.bn(0,1,w),s),x,x,x)}}
B.abe.prototype={
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l,k=this,j=null,i=k.d,h=i.w,g=C.a.i(h==null?"":h).toUpperCase()
h=A.dC(0,0,0,380+C.o.D(k.c*45,0,360),0,0)
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
if(!o||i.mm(D.mr))p=D.d7e
else{p=C.a.a0(p,"image/")||i.mm(D.Pv)
n=y.O
p=p?A.a([C.cZ,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoh()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mm(D.mr))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mm(D.mr)))l.push(A.fLX(C.aE,!1,j,j,j,!1,j,j,new B.d0a(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nU,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mw(new B.d0b(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.XG,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.q,-1)),j,j,C.ag),j),C.cr,h,new A.cw("docshare_row_"+i.a,y.aw),j,new A.bn(0,1,y.X),y.i)}}
B.Yg.prototype={
T(){return new B.axV()},
gdc(){return this.c}}
B.axV.prototype={
a_(){this.a1()
this.xp()},
q(){B.hwN(this.e)
this.a2()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.rc(o.c,o.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hwQ(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hwP(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d07(s))
x=1
break}s.m(new B.d08(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d09(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
a0X(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0X=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rc(t.c,t.d),$async$a0X)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eMz)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agC(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0X)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0X,w)},
bVY(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kj(u,C.A,v,new B.d05(w,t),C.fU,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d06(w),C.fU,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ud(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0e(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bx,u,u,u,v.gb3e(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DM
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dp(C.Bx,D.f8F,v.gb3e(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bVY()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yd.prototype={
T(){return new B.axS(A.ahp(),C.bx,C.bx)},
gdc(){return this.c}}
B.axS.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a4(w).k("ft<1>")).i6(new B.d_L(v))
x.gcNu().i6(new B.d_M(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a4(x).k("ft<1>"))}if(x==null)x=C.b2_
x.i6(new B.d_N(v))
v.xp()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rc(p.c,p.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d_E(s))
x=1
break}x=8
return A.b(s.d.BJ(0,new A.a2l(r,s.a.d.c)),$async$xp)
case 8:if(s.c==null){x=1
break}s.m(new B.d_F(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.d_G(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
YO(){var x=0,w=A.j(y.H),v=this,u
var $async$YO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h0(0),$async$YO)
case 5:x=3
break
case 4:x=6
return A.b(u.i9(0),$async$YO)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YO,w)},
aRo(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0e(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DM
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bE1,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NB,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.d_H(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRo(p.w)+" / "+p.aRo(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eJ4,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xX:C.iT,o,o,o,o,o)
x=A.v(A.a([u,C.kt,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc3O(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tz,x,o),o,o,o),o,!1,!1,o,o)}}
B.OU.prototype={
T(){return new B.axY()},
gdc(){return this.c}}
B.axY.prototype={
a_(){this.a1()
this.OS()},
OS(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OS=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fO8(o.c,o.d,new B.d0o(s)),$async$OS)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d0p(s))
x=1
break}s.e=r
q=O.hTr(r)
if(q==null){s.m(new B.d0q(s))
x=1
break}s.d=q
q.aM(0,s.gaZa())
x=8
return A.b(q.i5(0).cM(0,C.qL),$async$OS)
case 8:if(s.c==null){x=1
break}s.m(new B.d0r(s))
x=9
return A.b(q.py(0),$async$OS)
case 9:q.t0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d0s(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OS,w)},
c9h(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d0t(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ct(0,x.gaZa())
w=x.d
if(w!=null)w.q()
B.i29(x.e)
x.a2()},
acQ(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYj(u.c,u.d),$async$acQ)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acQ,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0e(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oH,t,t,t,u.gc3I(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.id(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DM
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agU(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zH(s,t),A.aE(t,A.CK(A.p(t,A.W(q?I.xX:C.iT,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bW,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d0v(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yi.prototype={
T(){return new B.axW(new A.cq(null,y.A))}}
B.axW.prototype={
gcA2(){var x,w,v=this.a
if(v.e!==D.QQ)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gczI(){var x,w,v=this.a
if(v.e!==D.yR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcA2()
if(x!=null){v.PU(x)
v.e=A.dA(R.EV,new B.d0k(v,x))}w=v.gczI()
if(w!=null){v.PT(w)
v.f=A.dA(C.h4,new B.d0l(v,w))}},
q(){var x=this.e
if(x!=null)x.a8(0)
x=this.f
if(x!=null)x.a8(0)
this.a2()},
PT(d){return this.cgg(d)},
cgg(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ao3(d),$async$PT)
case 3:t=f
x=4
return A.b(B.c69(d),$async$PT)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d0c(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PT,w)},
PU(d){return this.cgh(d)},
cgh(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fBV(d),$async$PU)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzn(t),$async$PU)
case 4:if(u.c==null){x=1
break}u.m(new B.d0d(u))
u.c.I(y.q).f.R(D.aN3)
case 1:return A.h(v,w)}})
return A.i($async$PU,w)},
gc_U(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc3J(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0J(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0J=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cs()){t=u.c
if(t!=null)t.I(y.q).f.R(D.ePD)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c6(A.e6(new B.d0e(),!1,null,y.N)),$async$a0J)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzn(s),$async$a0J)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aN3)
case 1:return A.h(v,w)}})
return A.i($async$a0J,w)},
a8I(d){return this.bG3(d)},
bG3(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fB(C.d.aI(t,", "))),$async$a8I)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
acO(d){return this.bFO(d)},
bFO(d){var x=0,w=A.j(y.H),v=this
var $async$acO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fB(v.a.c)),$async$acO)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eN1)
return A.h(null,w)}})
return A.i($async$acO,w)},
a0E(d){return this.cn9(d)},
cn9(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0E=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.an7(s.d,4),$async$a0E)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a0E)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.a9(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0E,w)},
gaUx(){var x,w=this.a
if(w.e!==D.Hk)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8F(d){return this.bFX(d)},
bFX(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8F=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaUx()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8F)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eOD)
case 1:return A.h(v,w)}})
return A.i($async$a8F,w)},
acP(){var x=0,w=A.j(y.H),v=this,u
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.U8(),$async$acP)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acP,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0e(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hk&&i!==D.QQ&&i!==D.yR
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hk||t===D.QQ||t===D.yR?l:A.aH(l,l,l,l,C.kP,l,l,l,m.gaXm(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.P,A.pC(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bw,A.d(""+q.d+" file(s) \xb7 "+m.gc_U(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hk){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc3J(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bO3,D.fhC,new B.d0f(m,d),l)],p))}if(m.a.e===D.Hk&&m.gaUx()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bKE,D.fen,new B.d0g(m,d),l)],p))
if(m.a.e===D.yR){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}if(m.a.e===D.QQ){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l),C.ac,A.dp(D.bGs,D.fkC,m.gcnx(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oe(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.eB(N.Bw,C.Tf,new B.d0h(m,d),l),1),C.av,A.D(A.dp(C.yi,C.a7i,new B.d0i(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zm,m.gaXm(),A.bk(C.aJ,l,l,l,l,C.fM,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0j(),y.C)}}
B.abc.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aP,A.p(x,A.pC(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ei(A.a([A.bJ(C.zn,new B.d_D(d),x)],u),x,x,C.mL,v,x,x,x,x,D.f7H,x)}}
B.Yc.prototype={
T(){return new B.axR(A.yO(C.xa,C.nx,C.tX))}}
B.axR.prototype={
q(){this.d.q()
this.a2()},
avH(d){var x,w,v,u,t
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
return A.c8(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.feR,x,x,x,1,x,!0),C.w,A.yN(this.d,C.bQ,this.gavG()),x,!1,!1,x,x)}}
B.Yj.prototype={
T(){return new B.axX(A.yO(C.xa,C.nx,C.tX))},
gdc(){return this.c}}
B.axX.prototype={
bX0(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeH(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rn("text/plain"),$async$aeH)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.ePx)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aeH,w)},
a9t(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9t=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hig(p,!0),$async$a9t)
case 3:t=e
p=t==null
s=B.a65(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eM9)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a9t,w)},
q(){this.d.q()
this.a2()},
avH(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bX0(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alz,v,v,v,w.gbLm(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_X,v,v,v,w.gcdG(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qW:P.MT,v,v,v,v,v),v,v,v,new B.d0n(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.flq,v,v,v,1,v,!0)
u=A.yN(w.d,C.bQ,w.gavG())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e8W],s),v),v,!1,!1,v,v)}}
B.bbK.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.or
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.or:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Yf,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8t.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NM.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wj.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NL.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Ex.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.ch3.prototype={}
B.Ew.prototype={}
B.a8s.prototype={}
B.asl.prototype={}
B.Wk.prototype={}
var z=a.updateTypes(["ay<~>()","R(jh)","n(jh)","U_(Y)","~()","Yf(Y)","H(H,jh)","OU(Y)","~(lS)","co(Ew)","ay<jh?>(@)","TY(Y)","U1(Y)","C(jh)","jh(@)","a3<n,@>(jh)","Ye(Y)","TZ(Y)","Yg(Y)","Yd(Y)","Yi(Y)","abc(Y)","ai<jh>()","Yj(Y)","abe(Y,H)","Yc(Y)","a3<n,aC>(jh)","co(Wj)","co(a8s)","ay<co>(Ew)"])
B.ch_.prototype={
$1(d){var x=this.a
x.x=D.aKl
x.y.L(0,D.aKl)},
$S:67}
B.ch0.prototype={
$1(d){var x=this.a
x.x=D.aKk
x.y.L(0,D.aKk)},
$S:67}
B.ch1.prototype={
$1(d){var x=this.a
x.ag0(A.aNt(d.data)).bz(new B.cgZ(x),y.b)},
$S:67}
B.cgZ.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ch2.prototype={
$1(d){},
$S:67}
B.ch5.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hBx(d.channel))},
$S:15}
B.ch6.prototype={
$1(d){},
$S:15}
B.ch7.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hUt(w.iceConnectionState)
x.cx=w
if($.fWP())switch(w.a){case 0:x.cy=D.aKq
break
case 1:x.cy=D.aKr
break
case 3:x.cy=D.aKs
break
case 5:x.cy=D.aKo
break
case 6:x.cy=D.aKp
break
case 7:x.cy=D.a54
break
default:break}},
$S:150}
B.ch8.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hUu(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:150}
B.ch9.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i3D(w.signalingState)},
$S:150}
B.cha.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i1T(w.connectionState)},
$S:150}
B.chb.prototype={
$1(d){},
$S:150}
B.chc.prototype={
$1(d){},
$S:15}
B.ffd.prototype={
$1(d){var x=y.F.a(new A.rx([],[]).pl(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"blobs")
if(!w)C.x7.Kb(x,"blobs")},
$S:196}
B.fBm.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vC.f8(this.b)
$.eS.mh()
this.c.$1(d)},
$S:429}
B.fBo.prototype={
$1(d){return this.a.$1(B.hKo(this.b,this.c))},
$S:34}
B.fBn.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fBl.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fBB.prototype={
$1(d){var x=this
return B.h7S(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBC.prototype={
$1(d){var x=this
return B.h7S(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fgQ.prototype={
$1(d){var x=this
return B.c5L(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_W.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_T.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5L(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_V.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5L(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_U.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5L(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d_Y.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bF5,x,x,x,new B.d_X(d),x,x,x,x,x,x),A.D(A.Eh(D.Pg,!0,x,C.a_1,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pg,x,g,C.aho,0,e,f)},
$C:"$4",
$R:4,
$S:400}
B.d_X.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fiP.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i6:C.c,r=A.m(28),q=A.p(v,D.bk6,C.f,v,v,D.aYy,v,v,v,v,D.ahe,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aL(v,C.T,!1,v,!0,C.r,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bJc,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.F7,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.r,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.alO,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bw,A.A(A.a([A.D(A.dU(C.de,new B.fiN(d),v),1),C.av,A.D(A.bJ(D.fdq,new B.fiO(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Lx,v,v,v,v),v)},
$S:60}
B.fiN.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fiO.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eNg)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAs(v,x))},
$S:0}
B.fji.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i6:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bjX,C.f,w,w,D.aZZ,w,w,w,w,D.ahe,w,w,1/0),new A.C(C.F7,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),r,w,w,w,w,w,2,B.fT3(u,"Organization name",C.Fy,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),q,w,w,w,w,w,2,B.fT3(u,"Access code",C.n8,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),p,w,w,w,w,w,2,B.fT3(u,"Member password",H.G4,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bw,A.bJ(D.flv,new B.fjh(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fM,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Lx,w,w,w,w),w)},
$S:60}
B.fjh.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eNl)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDE(u,x,w))},
$S:0}
B.c5C.prototype={
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
return A.b(A.v0(p,null).cM(0,C.Xj),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cr(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B7(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c5I.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5J.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c5K.prototype={
$1(d){return d.b},
$S:z+2}
B.c5E.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5F.prototype={
$1(d){return d.b},
$S:z+2}
B.c5D.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c5G.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c5H.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fBz.prototype={
$1(d){return new B.TY(this.a,null)},
$S:z+11}
B.fBA.prototype={
$1(d){return new B.U1(this.a,this.b,this.c,null)},
$S:z+12}
B.dMr.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dNA.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dNB.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dNC.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dNz(x,d))},
$S:2}
B.dNz.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dND.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dNE.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dNF.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dNG.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNH.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dNI.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dNL.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.dNJ.prototype={
$1(d){var x=this.a
return x.f?null:x.YN()},
$S:2}
B.dNK.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mm(D.Pv))s=C.tL
else s=C.a.a0(s,"video/")||d.mm(D.mr)?C.pP:D.akd
x=this.b.a
w=y.p
return new A.C(C.kI,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoh(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dMs.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dMt.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c5M.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.c5N.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.fCc.prototype={
$2(d,e){return e===this.a},
$S:279}
B.fcq.prototype={
$1(d){return J.k(d)},
$S:17}
B.fh1.prototype={
$1(d){var x=this.b
B.hIp(C.Fl.ga5f(this.a)).bz(x.gcD2(x),y.H)},
$S:124}
B.fh2.prototype={
$1(d){return this.a.d3(0,null)},
$S:124}
B.fh3.prototype={
$0(){return null},
$S:11}
B.c60.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fh4.prototype={
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
u=J.k(u==null?new A.S(Date.now(),0,!1).a6().ac():u)
t=p.h(0,"note")
t=t==null?q:J.k(t)
s=p.h(0,"fromSender")
s=s==null?q:J.k(s)
r=p.h(0,"shortCode")
r=r==null?q:J.k(r)
p=p.h(0,"stashToken")
return new B.jh(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.fl0.prototype={
$1(d){return d.ae()},
$S:z+15}
B.ffu.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ffv.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c65.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.fGe.prototype={
$1(d){return new B.Ye(this.a,null)},
$S:z+16}
B.d_S.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fG()},
$S:8}
B.d_Q.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_R.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dNy.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_Q()},
$S:13}
B.dMW.prototype={
$0(){var x=J.bCy(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dMX.prototype={
$0(){var x=J.bCy(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dMv.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMu(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCq(this.c)}},
$S:0}
B.dMu.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMw.prototype={
$0(){var x=J.bCy(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dMB.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMA(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCq(this.c)}},
$S:0}
B.dMA.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNm.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dNn.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dMT.prototype={
$1(d){return new B.TZ(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dMQ.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HA(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.U2(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tn(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a00(s.gM(t)),$async$$0)
case 8:case 7:r.hW(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMz.prototype={
$1(d){this.a.aaO(d,"No files selected.","Added")},
$S:429}
B.dN0.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dN_(),A.T(x).k("K<1,n>")))},
$S:0}
B.dN_.prototype={
$1(d){return d.a},
$S:z+2}
B.dMF.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wP.c5().cPr(C.Z5,!0),$async$$0)
case 7:r=e
o=r
q=o==null?null:J.fo(o.a)
o=q
if((o==null?null:o.c)!=null){o=q.c
o.toString
o=!C.aG.gam(o)}else o=!1
if(o){o=q.c
o.toString
k=A.jm(o,0,null)}u=2
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hW("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hW("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ao2(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hW("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tn(),$async$$0)
case 9:o.hW("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dNj.prototype={
$1(d){return new B.OU(this.a.a.c,this.b,null)},
$S:z+7}
B.dNk.prototype={
$1(d){return new B.Yg(this.a.a.c,this.b,null)},
$S:z+18}
B.dNl.prototype={
$1(d){return new B.Yd(this.a.a.c,this.b,null)},
$S:z+19}
B.dMR.prototype={
$1(d){return new B.OU(this.a.a.c,this.b,null)},
$S:z+7}
B.dMS.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HA(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a67(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hW("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cjA(),$async$$0)
case 5:x=6
return A.b(p.tn(),$async$$0)
case 6:r=A.T(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dN8(p),r),new B.dN9(),r.k("K<aj.E,n>")).c_(0,new B.dNa())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c6(A.e6(new B.dNb(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.U8(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN8.prototype={
$1(d){var x=this.a,w=C.d.ba(x.d,new B.dN7(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dN7.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dN9.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dNa.prototype={
$1(d){return d.length!==0},
$S:3}
B.dNb.prototype={
$1(d){var x=this.a
return new B.Yi(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dNd.prototype={
$1(d){return d.a},
$S:z+2}
B.dNe.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dN6.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoh(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mm(D.mr)?C.tN:C.oE
p=!x||p.mm(D.mr)?"Play video":"View"
return A.bZ(A.bm(!0,new A.C(C.AN,A.v(A.a([q,o,t,C.aA,B.Yh(!1,u,!1,w,p,new B.dN1(d),v),B.Yh(!1,u,!1,C.jj,"Share via QR",new B.dN2(d),"Letters/numbers QR code"),B.Yh(!1,u,!1,D.a_7,"Send to their Code",new B.dN3(d),"Enter someone else's personal code"),B.Yh(!1,u,!1,C.hz,"Download / save",new B.dN4(d),v),C.an,B.Yh(!1,u,!0,C.e4,"Delete",new B.dN5(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,v,v,C.n),C.bd)},
$S:688}
B.dN1.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dN2.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dN3.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dN4.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dN5.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dMC.prototype={
$1(d){return d.a},
$S:z+2}
B.dMD.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dME.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a69(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FX(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oW(s.c,s.f),$async$$0)
case 4:u.hW(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMy.prototype={
$1(d){var x=this.a
x.tp(new B.dMx(x,d,this.b),"Preparing\u2026")},
$S:429}
B.dMx.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hW("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.U2(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hW("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBt(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMU.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dMV.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fOb(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMO.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FU(new B.dMK(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hW("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dML(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dMM(s))
case 5:x=8
return A.b(r.b.ia(0,C.ES,new B.dMN()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gam(t)){s.hW("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tn(),$async$$0)
case 9:s.hW("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMK.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dMH(x,d,e))},
$S:127}
B.dMH.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dML.prototype={
$1(d){return new B.abc(this.a.a,null)},
$S:z+21}
B.dMM.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dMN.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dMP.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HQ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a5Y(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZm(B.HQ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ao2(new B.dMI(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fOa(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hW(q)
x=1
break}x=10
return A.b(s.tn(),$async$$0)
case 10:o=J.cE(r)
p=o.eJ(r,new B.dMJ()).gM(0)
s.hW(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMI.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dMG(x,d,e))},
$S:127}
B.dMG.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dMJ.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.dMZ.prototype={
$1(d){return new B.Yj(this.a.a.c,null)},
$S:z+23}
B.dMY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYj(u.a.c,v.b),$async$$0)
case 2:t.hW(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNi.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.bZ(A.bm(!0,new A.C(C.AN,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yh(!0,w,!1,C.n8,"My Code",new B.dNf(d),"Your personal code & QR \u2014 others send docs to you"),B.Yh(!1,w,!1,D.a_7,"Send to their Code",new B.dNg(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yh(!1,w,!1,S.y7,"Import backup",new B.dNh(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,x,x,C.n),C.bd)},
$S:688}
B.dNf.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dNg.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.bA0()},
$S:0}
B.dNh.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dNv.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HZ(D.Pg,x,C.a_1,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gK(D.Pg).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dNt.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dNu.prototype={
$0(){this.a.agZ()
return null},
$S:0}
B.dNw.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*10)),e)},
$S:102}
B.dNx.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abe(e,w,v,this.b,x.e,x.c3K(w),new B.dNp(x,w),new B.dNq(x,v,w),new B.dNr(x,w),new B.dNs(x,w),null)},
$S:z+24}
B.dNp.prototype={
$0(){this.a.aee(this.b)
return null},
$S:0}
B.dNq.prototype={
$0(){var x=this.a
return x.m(new B.dNo(x,this.b,this.c))},
$S:0}
B.dNo.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNr.prototype={
$0(){this.a.Nh(this.b)
return null},
$S:0}
B.dNs.prototype={
$0(){this.a.agM(this.b)
return null},
$S:0}
B.d_O.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*18)),e)},
$S:102}
B.d_P.prototype={
$3(d,e,f){return A.ea(C.A,f,e,null,null)},
$S:134}
B.d0b.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.d0a.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d07.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d08.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d09.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d05.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d03(this.a),C.fU,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d04(this.a))
return C.bH},
$S:137}
B.d03.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d01(this.a))
return C.bH},
$S:187}
B.d01.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d_Z(x))},
$S:8}
B.d_Z.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d04.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d00(x))},
$S:8}
B.d00.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d06.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d02(this.a))
return C.bH},
$S:187}
B.d02.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0_(x))},
$S:8}
B.d0_.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_L.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_K(x,d))},
$S:1740}
B.d_K.prototype={
$0(){return this.a.f=this.b===C.ui},
$S:0}
B.d_M.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_J(x,d))},
$S:8}
B.d_J.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_N.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_I(x,d))},
$S:8}
B.d_I.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d_E.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d_F.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d_G.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d_H.prototype={
$1(d){return this.a.d.Mi(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d0o.prototype={
$0(){var x=this.a.a
return B.rc(x.c,x.d)},
$S:1741}
B.d0p.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d0q.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d0r.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d0s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d0t.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d0v.prototype={
$0(){var x=this.a
x.m(new B.d0u(x))},
$S:0}
B.d0u.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h0(0)
else x.py(0)},
$S:0}
B.d0k.prototype={
$1(d){return this.a.PU(this.b)},
$S:13}
B.d0l.prototype={
$1(d){return this.a.PT(this.b)},
$S:13}
B.d0c.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d0d.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d0e.prototype={
$1(d){return D.fKb},
$S:z+25}
B.d0j.prototype={
$2(d,e){if(d)B.U8()},
$S:122}
B.d0f.prototype={
$0(){return this.a.a8I(this.b)},
$S:0}
B.d0g.prototype={
$0(){return this.a.a8F(this.b)},
$S:0}
B.d0h.prototype={
$0(){return this.a.acO(this.b)},
$S:0}
B.d0i.prototype={
$0(){return this.a.a0E(this.b)},
$S:0}
B.d_D.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d0n.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pC(),$async$$0)
case 2:u.m(new B.d0m(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d0m.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c67.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.c68.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c66.prototype={
$2(d,e){return this.bhr(d,e)},
bhr(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.U9(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fkD.prototype={
$1(d){if(d===D.a53&&(this.a.a.a&30)===0)this.a.fN(0)},
$S:z+27}
B.fkE.prototype={
$0(){},
$S:11}
B.fla.prototype={
bj0(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f9z(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h31(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bj0(d,e)},
$S:714}
B.fl9.prototype={
$1(d){var x=this
d.b=new B.fl8(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fl8.prototype={
$1(d){return this.bj_(d)},
bj_(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYk(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aH(0,n,null)
if(!y.f.b(r)){x=1
break}n=J.q(r,"type")
q=J.k(n==null?"":n)
x=J.z(q,"meta")?13:15
break
case 13:n=J.q(r,"name")
n=J.k(n==null?"file":n)
m=J.q(r,"mime")
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
return A.b(B.f9z(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
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
return A.b(B.a66(m),$async$$1)
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
x(v=B.axU.prototype,"gcaC","Pv",0)
x(v,"gcbt","ID",0)
x(v,"gcaZ","xz",0)
x(v=B.aBP.prototype,"gc3E","acM",0)
x(v,"gc3F","YM",0)
x(v,"gcpU","agt",0)
x(v=B.aBS.prototype,"gc3G","YN",0)
x(v,"gcpV","a0Y",0)
x(B.aBQ.prototype,"gc3H","acN",0)
x(B.axT.prototype,"gc3M","c3N",4)
x(v=B.aBR.prototype,"gcb_","ZU",0)
x(v,"gcow","cox",4)
x(v,"gb_u","ax4",0)
x(v,"gcrn","agT",0)
x(v,"gbLO","WK",0)
x(v,"gc3L","DL",0)
x(B.axV.prototype,"gb3e","a0X",0)
x(B.axS.prototype,"gc3O","YO",0)
x(v=B.axY.prototype,"gaZa","c9h",4)
x(v,"gc3I","acQ",0)
x(v=B.axW.prototype,"gcnx","a0J",0)
x(v,"gaXm","acP",0)
w(B.axR.prototype,"gavG","avH",8)
x(v=B.axX.prototype,"gcdG","aeH",0)
x(v,"gbLm","a9t",0)
w(v,"gavG","avH",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ch3,B.a8s,B.asl,B.aAs,B.aDE,B.jh,B.aaV,B.btt,B.Ew,B.Wk])
w(B.ch4,B.ch3)
w(B.b2q,B.a8s)
x(A.hT,[B.ch_,B.ch0,B.ch1,B.cgZ,B.ch2,B.ch5,B.ch6,B.ch7,B.ch8,B.ch9,B.cha,B.chb,B.chc,B.ffd,B.fBm,B.fBo,B.fBn,B.fBB,B.fBC,B.fgQ,B.d_T,B.d_V,B.d_U,B.d_Y,B.fiP,B.fji,B.c5C,B.c5J,B.c5K,B.c5F,B.c5D,B.c5G,B.c5H,B.fBz,B.fBA,B.dNC,B.dNL,B.dNJ,B.dNK,B.fcq,B.fh1,B.fh2,B.c60,B.fh4,B.fl0,B.ffu,B.ffv,B.c65,B.fGe,B.d_S,B.d_Q,B.dNy,B.dMu,B.dMA,B.dMT,B.dMz,B.dN_,B.dNj,B.dNk,B.dNl,B.dMR,B.dN8,B.dN7,B.dN9,B.dNa,B.dNb,B.dNd,B.dNe,B.dN6,B.dMC,B.dMD,B.dMy,B.dMU,B.dML,B.dMJ,B.dMZ,B.dNi,B.dNv,B.dNw,B.d_O,B.d_P,B.d0b,B.d0a,B.d05,B.d03,B.d01,B.d04,B.d06,B.d02,B.d_L,B.d_M,B.d_N,B.d_H,B.d0k,B.d0l,B.d0e,B.c67,B.c68,B.fkD,B.fl9,B.fl8])
w(B.b2r,B.asl)
x(A.j3,[B.fBl,B.d_W,B.d_X,B.fiN,B.fiO,B.fjh,B.dMr,B.dNA,B.dNB,B.dNz,B.dND,B.dNE,B.dNF,B.dNG,B.dNH,B.dNI,B.dMs,B.dMt,B.fh3,B.d_R,B.dMW,B.dMX,B.dMv,B.dMw,B.dMB,B.dNm,B.dNn,B.dMQ,B.dN0,B.dMF,B.dMS,B.dNc,B.dN1,B.dN2,B.dN3,B.dN4,B.dN5,B.dME,B.dMx,B.dMV,B.dMO,B.dMH,B.dMM,B.dMN,B.dMP,B.dMG,B.dMY,B.dNf,B.dNg,B.dNh,B.dNt,B.dNu,B.dNp,B.dNq,B.dNo,B.dNr,B.dNs,B.d07,B.d08,B.d09,B.d_Z,B.d00,B.d0_,B.d_K,B.d_J,B.d_I,B.d_E,B.d_F,B.d_G,B.d0o,B.d0p,B.d0q,B.d0r,B.d0s,B.d0t,B.d0v,B.d0u,B.d0c,B.d0d,B.d0f,B.d0g,B.d0h,B.d0i,B.d_D,B.d0n,B.d0m,B.fkE])
x(A.m3,[B.abd,B.MK,B.a8t,B.NM,B.Wj,B.NL,B.Ex])
x(A.ag,[B.Yf,B.TY,B.U1,B.TZ,B.Ye,B.U_,B.Yg,B.Yd,B.OU,B.Yi,B.Yc,B.Yj])
x(A.ah,[B.axU,B.aBP,B.aBS,B.aBQ,B.axT,B.aBR,B.axV,B.axS,B.axY,B.axW,B.axR,B.axX])
x(A.au,[B.abG,B.axQ,B.bbJ,B.abe,B.abc,B.bbK])
x(A.ke,[B.c5I,B.c5E,B.c5M,B.c5N,B.fCc,B.dMK,B.dMI,B.dNx,B.d0j,B.c66,B.fla])
x(A.iO,[B.bh3,B.bt7])})()
A.jT(b.typeUniverse,JSON.parse('{"b2q":{"a8s":[]},"b2r":{"asl":[]},"Yf":{"ag":[],"r":[]},"axU":{"ah":["Yf"]},"abG":{"au":[],"r":[]},"TY":{"ag":[],"r":[]},"U1":{"ag":[],"r":[]},"aBP":{"ah":["TY"]},"aBS":{"ah":["U1"]},"bh3":{"iO":[]},"TZ":{"ag":[],"r":[]},"aBQ":{"ah":["TZ"]},"Ye":{"ag":[],"r":[]},"U_":{"ag":[],"r":[]},"abe":{"au":[],"r":[]},"Yg":{"ag":[],"r":[]},"Yd":{"ag":[],"r":[]},"OU":{"ag":[],"r":[]},"Yi":{"ag":[],"r":[]},"abc":{"au":[],"r":[]},"Yc":{"ag":[],"r":[]},"Yj":{"ag":[],"r":[]},"axT":{"ah":["Ye"]},"bt7":{"iO":[]},"aBR":{"ah":["U_"]},"axQ":{"au":[],"r":[]},"bbJ":{"au":[],"r":[]},"axV":{"ah":["Yg"]},"axS":{"ah":["Yd"]},"axY":{"ah":["OU"]},"axW":{"ah":["Yi"]},"axR":{"ah":["Yc"]},"axX":{"ah":["Yj"]},"bbK":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tW"),k:x("Lc()"),m:x("bq<n,n>"),F:x("qP"),g:x("ay<jh?>"),x:x("ay<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a3<n,R>>"),t:x("P<a3<n,@>>"),r:x("P<jh>"),w:x("P<+file,name(ls,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iO>"),a:x("P<dD>"),p:x("P<r>"),Z:x("P<H>"),G:x("bh"),A:x("cq<ah<ag>>"),n:x("ai<jh>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bu<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iz"),e:x("i7v"),af:x("DL"),U:x("jh"),b:x("co"),C:x("aC"),aK:x("vN"),ab:x("Ew"),br:x("asl"),v:x("Wk"),N:x("n"),X:x("bn<N>"),Q:x("lD"),D:x("dD"),aw:x("cw<n>"),cd:x("a2<a3<n,@>>"),c7:x("r"),ch:x("bS<ai<jh>>"),aW:x("bS<dD?>"),aY:x("bS<~>"),cx:x("abd"),b1:x("bg<ai<jh>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAs"),bG:x("aDE"),q:x("mU"),B:x("pc<Ew>"),c6:x("pc<a8t>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jh>?"),aL:x("ai<@>?"),h:x("a3<n,@>?"),l:x("jh?"),R:x("aC?"),c:x("Wk?"),d:x("+answerQr,transfer(n,ay<ai<jh>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,MK,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaV?"),bk:x("aAs?"),ag:x("aDE?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aWT=new A.aA(C.aE,2,C.q,-1)
D.bSd=new A.a7(C.a3,C.a7,C.x,C.a11,null,null)
D.aYy=new A.o(null,null,null,C.m1,null,D.bSd,C.n)
D.aZZ=new A.o(null,null,null,C.m1,null,E.Gh,C.n)
D.ab0=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acc=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ad4=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aey=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f8y=new A.x("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.fmp=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.d_v=x([D.f8y,C.an,D.fmp],y.p)
D.bjO=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_v,null)
D.fqB=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fcH=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.dei=x([D.fqB,C.an,D.fcH],y.p)
D.bjX=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dei,null)
D.fmY=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fgp=new A.x("Enter the access code and password from your organization.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.dcg=x([D.fmY,C.an,D.fgp],y.p)
D.bk6=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dcg,null)
D.bpJ=new A.Q(16,10,16,28)
D.bpR=new A.Q(16,14,16,4)
D.br3=new A.Q(20,0,20,16)
D.brz=new A.Q(20,8,20,16)
D.ahe=new A.Q(24,22,24,20)
D.a_7=new A.a0(63394,"MaterialIcons",!1)
D.akd=new A.a0(63515,"MaterialIcons",!1)
D.bD2=new A.a0(983813,"MaterialIcons",!1)
D.bAk=new A.a0(62867,"MaterialIcons",!1)
D.bE1=new A.ae(D.bAk,44,C.c,null,null,null)
D.bF5=new A.ae(C.oz,null,C.ad,null,null,null)
D.bGs=new A.ae(C.iU,18,null,null,null,null)
D.bI8=new A.ae(D.a_7,26,C.c,null,null,null)
D.bIE=new A.ae(C.Bp,null,null,null,null,null)
D.bJc=new A.ae(C.y9,null,null,null,null,null)
D.bKk=new A.ae(W.N6,null,null,null,null,null)
D.bKE=new A.ae(C.hk,16,null,null,null,null)
D.bO3=new A.ae(C.r_,16,null,null,null,null)
D.bEi=new A.ae(C.n8,null,null,null,null,null)
D.bOU=new A.e1(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bEi,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJK=new A.ae(C.Fy,null,null,null,null,null)
D.bOZ=new A.e1(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJK,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bED=new A.ae(H.G4,null,null,null,null,null)
D.bP9=new A.e1(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bED,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cBM=x([C.f7,C.aZ,C.aE],y.O)
D.bU4=new A.a7(C.ax,C.aC,C.x,D.cBM,null,null)
D.cBg=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pg=x([C.f7,C.aE],y.O)
D.Pv=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mr=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d7e=x([C.pi,C.aE],y.O)
D.dYH={iceServers:0}
D.aF_={urls:0}
D.dhT=new A.bq(D.aF_,["stun:stun.l.google.com:19302"],y.m)
D.dhS=new A.bq(D.aF_,["stun:stun1.l.google.com:19302"],y.m)
D.cRj=x([D.dhT,D.dhS],A.ax("P<a3<n,n>>"))
D.dhd=new A.bq(D.dYH,[D.cRj],A.ax("bq<n,@>"))
D.Hk=new B.MK(0,"lanDirect")
D.QP=new B.MK(1,"cloudStash")
D.dsI=new B.MK(2,"inlineInstant")
D.QQ=new B.MK(3,"webrtcLink")
D.yR=new B.MK(4,"videoCloud")
D.fmo=new A.x("Receive file",null,C.np,null,null,null,null,null,null,null,null,null)
D.crq=x([E.alX,C.ab,D.fmo],y.p)
D.eF6=new A.cl(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.crq,null)
D.e3h=new A.C(C.cf,D.eF6,null)
D.f_O=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1H,null,null,null)
D.f95=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f_O,null,C.L,null,null,null,null,null,null,null)
D.e2A=new A.C(C.AT,D.f95,null)
D.b3d=new A.cp(C.A,null,null,D.e2A,null)
D.e8W=new A.cK(0,null,0,28,null,null,D.b3d,null)
D.e9e=new B.a8t(0,"RTCDataChannelConnecting")
D.aKk=new B.a8t(1,"RTCDataChannelOpen")
D.aKl=new B.a8t(3,"RTCDataChannelClosed")
D.e9f=new B.Ex(0,"RTCIceConnectionStateNew")
D.e9g=new B.Ex(1,"RTCIceConnectionStateChecking")
D.e9h=new B.Ex(2,"RTCIceConnectionStateCompleted")
D.e9i=new B.Ex(3,"RTCIceConnectionStateConnected")
D.e9j=new B.Ex(4,"RTCIceConnectionStateCount")
D.e9k=new B.Ex(5,"RTCIceConnectionStateFailed")
D.e9l=new B.Ex(6,"RTCIceConnectionStateDisconnected")
D.aKm=new B.Ex(7,"RTCIceConnectionStateClosed")
D.aKn=new B.Wj(0,"RTCIceGatheringStateNew")
D.e9m=new B.Wj(1,"RTCIceGatheringStateGathering")
D.a53=new B.Wj(2,"RTCIceGatheringStateComplete")
D.a54=new B.NL(0,"RTCPeerConnectionStateClosed")
D.aKo=new B.NL(1,"RTCPeerConnectionStateFailed")
D.aKp=new B.NL(2,"RTCPeerConnectionStateDisconnected")
D.aKq=new B.NL(3,"RTCPeerConnectionStateNew")
D.aKr=new B.NL(4,"RTCPeerConnectionStateConnecting")
D.aKs=new B.NL(5,"RTCPeerConnectionStateConnected")
D.e9n=new B.NM(0,"RTCSignalingStateStable")
D.e9o=new B.NM(1,"RTCSignalingStateHaveLocalOffer")
D.e9p=new B.NM(2,"RTCSignalingStateHaveRemoteOffer")
D.e9q=new B.NM(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e9r=new B.NM(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aKt=new B.NM(5,"RTCSignalingStateClosed")
D.eJ4=new A.at(160,48)
D.b4n=new A.fi(2,null,null,null,null,C.aE,null,null,null,null)
D.eKz=new A.a6(16,16,D.b4n,null)
D.fc6=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eM_=new A.b1(D.fc6,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fjl=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eM2=new A.b1(D.fjl,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frD=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eM9=new A.b1(D.frD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fbK=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eMz=new A.b1(D.fbK,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fn7=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aN3=new A.b1(D.fn7,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fow=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eN1=new A.b1(D.fow,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ft0=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eNg=new A.b1(D.ft0,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fr4=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eNl=new A.b1(D.fr4,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fse=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eO6=new A.b1(D.fse,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.far=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eOD=new A.b1(D.far,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fl5=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eOY=new A.b1(D.fl5,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fed=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ePt=new A.b1(D.fed,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ft6=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePx=new A.b1(D.ft6,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faH=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ePD=new A.b1(D.faH,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f9q=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.ePS=new A.b1(D.f9q,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f6p=new A.x("NGMY DOC SHARE",null,C.aOk,null,null,null,null,null,null,null,null,null)
D.f7H=new A.x("Show this to sender",null,C.kv,null,null,null,null,null,null,null,null,null)
D.f8F=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fd4=new A.x("Organization settings",null,C.cw,null,null,null,null,null,null,null,null,null)
D.fdq=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fen=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.feR=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhC=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fkj=new A.x("Send to their Doc Share",null,C.nn,null,null,null,null,null,null,null,null,null)
D.fkC=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fkV=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.flq=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.flv=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.flS=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.foY=new A.x("Share files & videos\nwith a scan.",null,C.aOl,null,null,null,null,null,null,null,null,null)
D.fpg=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fKb=new B.Yc(null)
D.a84=new B.abd(0,"docShare")
D.a85=new B.abd(1,"gate")
D.TJ=new B.abd(2,"gateNoIndividual")})();(function staticFields(){$.aMg=null
$.f7n=function(){var x=y.N
return A.V(x,x)}()
$.FG=A.V(y.N,y.D)
$.afb=A.V(y.N,A.ax("ls"))
$.Q9=A.V(y.N,y.D)
$.f7V=A.V(y.N,A.ax("aaV"))
$.c6_=A.V(y.S,A.ax("btt"))
$.h30=1
$.hQh=null
$.hQg=null
$.hHP=null
$.fTf=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i8_","hk7",()=>new B.ch4())
x($,"i5V","fWP",()=>C.a.t(A.bt(A.bt(A.bt(A.Gg(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["5v/YLJuU2CKCFwZ1OxVHhJ7QApA="]=a.current})($__dart_deferred_initializers__);