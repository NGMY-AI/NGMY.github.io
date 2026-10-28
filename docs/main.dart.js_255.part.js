((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={ch7:function ch7(){},
hBI(d){var x=null,w=new B.b2r(d,D.e9w,new A.pc(x,x,y.c6),new A.pc(x,x,y.B))
w.bvX(d)
return w},
b2r:function b2r(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
ch2:function ch2(d){this.a=d},
ch3:function ch3(d){this.a=d},
ch4:function ch4(d){this.a=d},
ch1:function ch1(d){this.a=d},
ch5:function ch5(d){this.a=d},
hBJ(d,e){var x=y.N
x=new B.b2s(d,e,A.V(x,y.e),A.V(x,y.z))
x.bvY(d,e)
return x},
b2s:function b2s(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
ch8:function ch8(d){this.a=d},
ch9:function ch9(d){this.a=d},
cha:function cha(d){this.a=d},
chb:function chb(d){this.a=d},
chc:function chc(d){this.a=d},
chd:function chd(d){this.a=d},
che:function che(d){this.a=d},
chf:function chf(d){this.a=d},
fT5(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.U(A.bd("IndexedDB not available"))
return C.yk.Ln(x,"ngmy_doc_share_v1",new B.ffj(),1)},
hId(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cr(d))
if(y.J.b(d))return new Uint8Array(A.cr(J.eX(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cr(A.BL(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cr(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
Qq(d,e){return B.hXl(d,e)},
hXl(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMg
x=7
return A.b(o==null?$.aMg=B.fT5():o,$async$Qq)
case 7:s=g
r=new Uint8Array(A.cr(e))
q=J.mA(s,"blobs","readwrite")
C.iD.m9(J.my(q,"blobs"),r,d)
x=8
return A.b(J.pl(q),$async$Qq)
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
return A.i($async$Qq,w)},
Qp(d){return B.hXk(d)},
hXk(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMg
x=7
return A.b(o==null?$.aMg=B.fT5():o,$async$Qp)
case 7:s=f
r=J.mA(s,"blobs","readonly")
x=8
return A.b(C.iD.za(J.my(r,"blobs"),d),$async$Qp)
case 8:q=f
x=9
return A.b(J.pl(r),$async$Qp)
case 9:o=B.hId(q)
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
return A.i($async$Qp,w)},
afT(d){return B.hXj(d)},
hXj(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afT=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMg
x=7
return A.b(p==null?$.aMg=B.fT5():p,$async$afT)
case 7:s=f
r=J.mA(s,"blobs","readwrite")
C.iD.Fg(J.my(r,"blobs"),d)
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
ffj:function ffj(){},
hKz(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmN(w,v))}return u},
hhK(d,e){var x,w={},v=A.aUz("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fBy(w,v,e)
C.vD.y0(v,"change",new B.fBA(w,v,!1))
C.vD.y0(v,"cancel",new B.fBz(w))
$.eS.mh()
v.click()
A.bN(C.afs,new B.fBx(w),y.H)},
fBy:function fBy(d,e,f){this.a=d
this.b=e
this.c=f},
fBA:function fBA(d,e,f){this.a=d
this.b=e
this.c=f},
fBz:function fBz(d){this.a=d},
fBx:function fBx(d){this.a=d},
Cz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdc()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSX()?3:4
break
case 3:x=5
return A.b(B.hcV(e,d,s,!0,!1,f,g,h,!1,i),$async$Cz)
case 5:x=1
break
case 4:x=6
return A.b(B.Q4(d,s,f,g,h,i),$async$Cz)
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
return A.b(B.HS(s,d),$async$Cz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.faL(s,d),$async$Cz)
case 14:x=12
return A.b(r.hcV(q,p,o,n,m,l,k,j,a1,i),$async$Cz)
case 12:x=8
break
case 10:x=15
return A.b(A.a5(e,!1).c6(A.e6(new B.fBN(s,i,d,f,g,h),!1,null,y.H)),$async$Cz)
case 15:x=8
break
case 11:x=16
return A.b(A.a5(e,!1).c6(A.e6(new B.fBO(s,i,d,f,g,h),!1,null,y.H)),$async$Cz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cz,w)},
Q4(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Q4=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYd(e),$async$Q4)
case 3:u=k
x=4
return A.b(B.anU(d,e,!1),$async$Q4)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HS(e,d),$async$Q4)
case 7:if(k){v=D.a86
x=1
break}x=8
return A.b(B.U2(e),$async$Q4)
case 8:v=t?D.TM:D.a87
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYb(d,e)){v=D.a86
x=1
break}x=11
return A.b(B.U2(e),$async$Q4)
case 11:v=t?D.TM:D.a87
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fOi(d,e)){v=D.a86
x=1
break}x=14
return A.b(B.U2(e),$async$Q4)
case 14:v=D.TM
x=1
break
case 13:v=t?D.TM:D.a87
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q4,w)},
faL(d,e){var x=0,w=A.j(y.y),v
var $async$faL=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYb(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYd(d),$async$faL)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$faL,w)},
hcV(d,e,f,g,h,i,j,k,l,m){return A.a5(d,!1).c6(A.e6(new B.fh_(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h82(d,e,f,g,h,i,j){return new B.Yi(e,j,d,g,h,i,f,null)},
fiW(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fiW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fiZ(A.O(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fiW)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fiW,w)},
fjq(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fjq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fjs(A.O(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fjq)
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
return A.i($async$fjq,w)},
fTe(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fu7(d,e){var x=0,w=A.j(y.H),v
var $async$fu7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.U2(e),$async$fu7)
case 3:if(d.e==null){x=1
break}A.a5(d,!1).eI()
case 1:return A.h(v,w)}})
return A.i($async$fu7,w)},
fBN:function fBN(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fBO:function fBO(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abd:function abd(d,e){this.a=d
this.b=e},
fh_:function fh_(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yi:function Yi(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axU:function axU(){this.c=this.a=this.d=null},
d_Z:function d_Z(d,e){this.a=d
this.b=e},
d_W:function d_W(d){this.a=d},
d_Y:function d_Y(d){this.a=d},
d_X:function d_X(d){this.a=d},
d00:function d00(){},
d0_:function d0_(d){this.a=d},
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
fiZ:function fiZ(d,e,f){this.a=d
this.b=e
this.c=f},
fiX:function fiX(d){this.a=d},
fiY:function fiY(d,e,f){this.a=d
this.b=e
this.c=f},
fjs:function fjs(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjr:function fjr(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5E(d,e,f,g,h){return B.hwD(d,e,f,g,h)},
hwD(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c5E=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a8(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c5F(s,e,h,g,f,q),y.g),y.l),$async$c5E)
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
return A.i($async$c5E,w)},
aY8(d,e,f,g,h){return B.hwE(d,e,f,g,h)},
hwE(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aY8=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.ata("GET",d)
o=A.fKP()
if(o==null)o=new A.L8(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.ET),$async$aY8)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BV(),$async$aY8)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B8(q,h,o,e,f,"Received via QR")
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
return A.i($async$aY8,w)},
aY7(d){return B.hwB(d)},
hwB(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aY7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v0(d,null).cM(0,C.nM),$async$aY7)
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
return A.i($async$aY7,w)},
c5D(d){return B.hwC(d)},
hwC(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c5D=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v0(d,null).cM(0,C.pA),$async$c5D)
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
return A.i($async$c5D,w)},
c5F:function c5F(d,e,f,g,h,i){var _=this
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
hwJ(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HQ(C.a.b0(u,v.length))}return null},
hwK(d){var x=B.HQ(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hwF(){var x,w=$.pi(),v=J.e2(5,y.S)
for(x=0;x<5;++x)v[x]=w.aA(10)
return C.d.fW(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(24)]},
a5Z(d){return B.hwG(d)},
hwG(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a5Z=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f1(d,null,!1,C.bG),$async$a5Z)
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
return A.i($async$a5Z,w)},
a6_(d,e){return B.hwH(d,e)},
hwH(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a6_=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cG,null),$async$a6_)
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
return A.i($async$a6_,w)},
B7(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$B7)
case 3:u=f
t=C.a.i(i)
s=A.aU(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HQ(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a60(r),$async$B7)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a5Z("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B7)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HQ(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B7)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hwF()
x=14
return A.b(B.a60(m),$async$B7)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a6_("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B7)
case 15:k=f
x=16
return A.b(B.a6_("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B7)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B7)
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
return A.i($async$B7,w)},
a60(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a60=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HQ(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a5Z("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a60)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a60,w)},
a61(d,e,f,g){return B.hwL(d,e,f,g)},
hwL(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a61=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a8(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HQ(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a60(r),$async$a61)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c5L())>1048576||g.b7(d,new B.c5M())){v=B.E2(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a6c("myCode",d,a0),$async$a61)
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
v=B.E2(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYg(u,g.gM(d),a0),$async$a61)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pi().aA(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c5N(),i)
h=A.B(h,h.$ti.k("aj.E"))
x=6
return A.b(B.aY9(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a61)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a61,w)},
E2(d,e,f,g,h){return B.hwI(d,e,f,g,h)},
hwI(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E2=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$E2)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c5H())
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
return A.b(a0.C(),$async$E2)
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
return A.b(new A.a9v(a1.a,a4,"media",a1.d,a2).wE(m,n,new A.Dl(!0,q.c)),$async$E2)
case 12:J.cf(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a8(0),$async$E2)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOJ(r),$async$E2)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c5I(),e)
a1=A.B(a1,a1.$ti.k("aj.E"))
x=19
return A.b(B.aY9(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$E2)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOJ(r),$async$E2)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E2,w)},
aY9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aY9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a5Z(t),$async$aY9)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c5G(),y.P)
r=A.B(r,r.$ti.k("aj.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a6_(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aY9,w)},
MJ(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MJ=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a5Z("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MJ)
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
return A.b(B.aYa(k,a0),$async$MJ)
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
return A.b(B.aYf(h),$async$MJ)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.U9(g,a0),$async$MJ)
case 10:f=a3
if(f!=null&&J.cx(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c5J(),q),n)
d=A.B(new A.a2(r,new B.c5K(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.T(d).c))
x=11
return A.b(B.a6_("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MJ)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MJ,w)},
aYa(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYa=A.e(function(f,g){if(f===1)return A.f(g,w)
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
break}i=B.i07(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cx(l,m,"Received via My Code",t,e,i),$async$aYa)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOJ(s),$async$aYa)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYa,w)},
c5L:function c5L(){},
c5M:function c5M(){},
c5N:function c5N(){},
c5H:function c5H(){},
c5I:function c5I(){},
c5G:function c5G(){},
c5J:function c5J(){},
c5K:function c5K(){},
fBK(d,e){var x=0,w=A.j(y.H)
var $async$fBK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a5(d,!1).c6(A.e6(new B.fBL(e),!1,null,y.H)),$async$fBK)
case 2:return A.h(null,w)}})
return A.i($async$fBK,w)},
bBu(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBu=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.ck(e)){v=!1
x=1
break}x=3
return A.b(A.a5(d,!1).c6(A.e6(new B.fBM(g,e,f),!1,null,y.y)),$async$bBu)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBu,w)},
fBL:function fBL(d){this.a=d},
fBM:function fBM(d,e,f){this.a=d
this.b=e
this.c=f},
U_:function U_(d,e){this.c=d
this.a=e},
aBP:function aBP(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dMu:function dMu(d,e){this.a=d
this.b=e},
U3:function U3(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBS:function aBS(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dND:function dND(d){this.a=d},
dNE:function dNE(d){this.a=d},
dNF:function dNF(d){this.a=d},
dNC:function dNC(d,e){this.a=d
this.b=e},
dNG:function dNG(d){this.a=d},
dNH:function dNH(d){this.a=d},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNK:function dNK(d,e){this.a=d
this.b=e},
dNL:function dNL(d){this.a=d},
dNO:function dNO(){},
dNM:function dNM(d){this.a=d},
dNN:function dNN(d,e){this.a=d
this.b=e},
bh4:function bh4(){},
U0:function U0(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBQ:function aBQ(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dMv:function dMv(d){this.a=d},
dMw:function dMw(d){this.a=d},
fOj(d){var x=d.hO
if(x>=0)return C.o.O(x)
return 10},
hwN(d){var x=d.kA
if(x>=0)return x
return 4.99},
hwM(d){var x=d.li,w=y.N
w=x.iV(x,new B.c5P(),w,w)
return w},
h37(d){var x=d.kB,w=y.N
w=x.iV(x,new B.c5Q(),w,w)
return w},
aYd(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYd=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aYd)
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
return A.i($async$aYd,w)},
a63(d,e){var x=0,w=A.j(y.H),v,u
var $async$a63=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a63)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a63)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a63,w)},
U2(d){var x=0,w=A.j(y.H),v,u
var $async$U2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$U2)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$U2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$U2,w)},
fOi(d,e){var x,w,v
if(B.hwN(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hwM(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYb(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h37(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h38(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h37(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kB=w},
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
break}u=B.fOj(d)
if(u<=0){v=!1
x=1
break}if(B.fOi(d,e)){v=!1
x=1
break}x=3
return A.b(B.anV(e),$async$anU)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anU,w)},
aYc(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HS(e,d),$async$aYc)
case 3:if(g){v=-1
x=1
break}u=B.fOj(d)
if(u<=0){v=-1
x=1
break}if(B.fOi(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anV(e),$async$aYc)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYc,w)},
c5S(d,e,f){var x=0,w=A.j(y.y),v
var $async$c5S=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HS(e,d),$async$c5S)
case 3:if(h){v=!1
x=1
break}v=B.anU(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5S,w)},
c5R(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c5R=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
x=3
return A.b(B.c5S(d,u,i.gSX()),$async$c5R)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5R,w)},
a62(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a62=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
if(i.gSX()){v=!0
x=1
break}if(B.aYb(d,u)){v=!0
x=1
break}x=5
return A.b(A.la(u,C.Rd),$async$a62)
case 5:x=k?3:4
break
case 3:B.h38(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a62)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kO(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rd,"Doc Share for Organizations"),$async$a62)
case 7:if(!k){v=!1
x=1
break}B.h38(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a62)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a62,w)},
c5P:function c5P(){},
c5Q:function c5Q(){},
fCm(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fCm=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fCm)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f7t.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hL([r],e.c))
s.toString
$.f7t.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCm,w)},
i2k(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f7t.bm($.f7t,new B.fCo(d))},
fCo:function fCo(d){this.a=d},
f8R(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f8R=A.e(function(g,h){if(g===1)return A.f(h,w)
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
return A.b(A.bN(C.ja,null,y.H),$async$f8R)
case 3:C.zG.f8(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eS.mh()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f8R,w)},
aeJ(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeJ=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f80.n(0,d,new B.aaV(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeJ)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aeJ)
case 2:return A.h(null,w)}})
return A.i($async$aeJ,w)},
aeD(d){return B.hMo(d)},
hMo(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f80.h(0,d)
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
break}o=J.b6(s,new B.fcw(),y.N)
n=A.B(o,o.$ti.k("aj.E"))
r=n
o=A.aN(J.q(t,"size"))
m=o==null?null:C.k.O(o)
q=m==null?0:m
p=new B.aaV(r)
$.f80.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeD,w)},
PV(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PV=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cr(e))
$.FG.n(0,d,u)
x=3
return A.b(B.Qq(d,u),$async$PV)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PV,w)},
aMB(d){return B.hMm(d)},
hMm(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMB=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FG.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qp(d),$async$aMB)
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
q=C.cE.aJ(r)
x=!J.ck(q)?9:10
break
case 9:B.PV(d,q)
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
hIA(d){if(d==null)return A.fb(null,y.K)
if(y.J.b(d))return A.fb(new Uint8Array(A.cr(J.eX(d,0,null))),y.K)
if(y.D.b(d))return A.fb(new Uint8Array(A.cr(d)),y.K)
if(y.Q.b(d))return A.fb(new Uint8Array(A.cr(A.BL(d,0,null))),y.K)
if(y.I.b(d))return A.fb(new Uint8Array(A.cr(d)),y.K)
return A.fb(null,y.K)},
a0H(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0H=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bS(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fhb(r,t),!1,s)
A.fH(r,"error",new B.fhc(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ib(0,C.Lp,new B.fhd())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0H,w)},
aMV(d,e,f){return B.hOD(d,e,f)},
hOD(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
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
return A.b(B.a0H(i),$async$aMV)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qq(o,p),$async$aMV)
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
aMU(d,e,f){return B.hOC(d,e,f)},
hOC(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
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
return A.b(B.a0H(f),$async$aMU)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FG.n(0,s,r)
$.Qb.n(0,s,r)
x=11
return A.b(B.PV(s,r),$async$aMU)
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
B8(d,e,f,g,h,i){return B.hwW(d,e,f,g,h,i)},
hwW(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B8=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aA(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jh(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYj(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PV(s,d),$async$B8)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$B8)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcv().aJ(d)),$async$B8)
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
return A.b(B.Ab(e),$async$B8)
case 12:j=a2
J.cf(j,m)
x=13
return A.b(B.FS(e,j),$async$B8)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B8,w)},
U4(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U4=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ab(d),$async$U4)
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
k=B.h3a(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jh(m,n,k,l,j,"From folder",null,B.aYj(),null)
$.afb.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0H(o),$async$U4)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FG.n(0,h,g)
$.Qb.n(0,h,g)
B.PV(h,g)
x=9
break
case 10:x=11
return A.b(B.aMU(d,m,o),$async$U4)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FS(d,t),$async$U4)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U4,w)},
fOn(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fOn=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h3a(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HT(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.B8(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOn,w)},
HT(d,e,f,g,h,i){return B.hwV(d,e,f,g,h,i)},
hwV(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
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
break}l=new Uint8Array(A.cr(J.QY(n,0,1048576)))
h=n
h.$flags&1&&A.ak(h,18)
A.kA(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qq(k,l),$async$HT)
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
return A.b(B.Qq(k,new Uint8Array(A.cr(n))),$async$HT)
case 15:J.cf(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeJ(r,q,g),$async$HT)
case 16:f=new B.jh(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYj(),null)
x=17
return A.b(B.Ab(d),$async$HT)
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
U6(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$U6=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afb.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0H(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeD(s),$async$U6)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qp(u[o]),$async$U6)
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
v=A.BL(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qb.h(0,s)
if(i==null)i=$.FG.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rc(d,e),$async$U6)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qb.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.BL(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U6,w)},
h3a(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rc(d,e){return B.hwX(d,e)},
hwX(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rc=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qb.h(0,f)
if(e==null)e=$.FG.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afb.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0H(s),$async$rc)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FG.n(0,f,r)
$.Qb.n(0,f,r)
B.PV(f,r)
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
return A.b(B.Qp(g[l]),$async$rc)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.amX()
if(!C.aG.gam(r)){$.FG.n(0,f,r)
$.Qb.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMB(f),$async$rc)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qb.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.U6(a0,a1,0,g),$async$rc)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.cr(i))
$.FG.n(0,f,h)
$.Qb.n(0,f,h)
B.PV(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rc,w)},
hx_(d){var x,w,v=$.afb.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hx0(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hL([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hwY(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ao1(d,e,f,g,h){return B.hwZ(d,e,f,g,h)},
hwZ(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
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
return A.b(B.a0H(s),$async$ao1)
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
return A.b(n.i5(d).wE(h,r,new A.Dl(!0,e.c)),$async$ao1)
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
h3c(d,e,f,g,h){var x,w,v,u,t=$.h3b
$.h3b=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aA(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c62.n(0,t,new B.btu(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awI(u)))
return t},
fOo(d){var x=0,w=A.j(y.H)
var $async$fOo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOo,w)},
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
return A.pU(B.U6(d,e,p,o<q?o:q),$async$HU,w)
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
return A.pU(B.Qp(h[l]),$async$HU,w)
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
return A.pU(A.Fe(A.BL(j,p,o<i?o:i)),$async$HU,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pU(null,0,w)
case 2:return A.pU(t.at(-1),1,w)}})
var x=0,w=A.hbO($async$HU,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hdC(w)},
aYl(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYl=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c62.h(0,d)
if(t==null||J.ck(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3F(),$async$aYl)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYl,w)},
U5(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$U5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c62.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3F(),$async$U5)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeJ(r.c,u,r.z),$async$U5)
case 4:t=new B.jh(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYj(),null)
u=r.a
x=5
return A.b(B.Ab(u),$async$U5)
case 5:s=f
J.cf(s,t)
x=6
return A.b(B.FS(u,s),$async$U5)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U5,w)},
a69(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a69=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c62.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afT(u[s]),$async$a69)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a69,w)},
c64(d,e,f){var x=0,w=A.j(y.H)
var $async$c64=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byw(d,e,f),$async$c64)
case 2:return A.h(null,w)}})
return A.i($async$c64,w)},
c65(d,e,f){var x=0,w=A.j(y.H)
var $async$c65=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byx(d,e,f),$async$c65)
case 2:return A.h(null,w)}})
return A.i($async$c65,w)},
E3(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ab(d),$async$E3)
case 2:p=g
J.nj(p,new B.c63(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FG.W(0,v)
$.afb.W(0,e)
x=3
return A.b(B.aeD(v),$async$E3)
case 3:u=g
$.f80.W(0,v)
x=4
return A.b(A.az(),$async$E3)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$E3)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$E3)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afT(s[q]),$async$E3)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afT(v),$async$E3)
case 13:x=14
return A.b(B.FS(d,p),$async$E3)
case 14:return A.h(null,w)}})
return A.i($async$E3,w)},
aYk(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rc(d,e),$async$aYk)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f8R(t,A.aJ(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYk,w)},
Ab(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ab=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ab)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aU(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aH(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fhe(),y.U)
r=A.B(r,r.$ti.k("aj.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ab,w)},
FS(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FS)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.fla(),y.P)
t=A.B(t,t.$ti.k("aj.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FS)
case 3:return A.h(null,w)}})
return A.i($async$FS,w)},
byw(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byw=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ab(d),$async$byw)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffA(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCr(f))
x=4
return A.b(B.FS(d,u),$async$byw)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byw,w)},
byx(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byx=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ab(d),$async$byx)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffB(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cEI(f))
x=4
return A.b(B.FS(d,u),$async$byx)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byx,w)},
aaV:function aaV(d){this.a=d},
fcw:function fcw(){},
fhb:function fhb(d,e){this.a=d
this.b=e},
fhc:function fhc(d){this.a=d},
fhd:function fhd(){},
c63:function c63(d){this.a=d},
btu:function btu(d,e,f,g,h,i,j,k,l){var _=this
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
fhe:function fhe(){},
fla:function fla(){},
ffA:function ffA(d){this.a=d},
ffB:function ffB(d){this.a=d},
a6a(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6a=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b7(d,new B.c68())?3:4
break
case 3:x=5
return A.b(B.aYm(d,e),$async$a6a)
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
return A.b(B.aYh(s),$async$a6a)
case 10:case 9:if(g){v=new A.Pi(1,D.QR,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.U7(d,e),$async$a6a)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Uc(!0,!0,d,e),$async$a6a)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.ML(d,D.yS,e,t)
v=new A.Pi(p,D.yS,t)
x=1
break}v=B.c67(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6a,w)},
U7(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$U7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6c(null,d,e),$async$U7)
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
return A.b(B.aYg(p,d.length,e),$async$U7)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c65(e,C.d.gK(d).a,r.b),$async$U7)
case 7:case 6:q=r.a
x=8
return A.b(B.ML(d,D.QR,e,q),$async$U7)
case 8:v=new A.Pi(d.length,D.QR,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U7,w)},
U8(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$U8=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mm(D.mr)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6b(d,e),$async$U8)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c60(s,d,e,t),$async$U8)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYh(t),$async$U8)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rc(e,d),$async$U8)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.U7(A.a([d],y.r),e),$async$U8)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U8,w)},
Ua(){var x=0,w=A.j(y.H)
var $async$Ua=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fOh(),$async$Ua)
case 2:x=3
return A.b(B.aP0(),$async$Ua)
case 3:return A.h(null,w)}})
return A.i($async$Ua,w)},
a6b(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6b=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYj()
x=3
return A.b(B.c64(e,d.a,u),$async$a6b)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6b,w)},
ML(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$ML=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QR&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6b(p,f),$async$ML)
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
return A.b(B.c6_(o,p,u,f),$async$ML)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c60(o,p,f,t),$async$ML)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c5Z(o,u,p,f),$async$ML)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$ML,w)},
aYm(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYm=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c66(e,d),$async$aYm)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Uc(!1,!0,d,e),$async$aYm)
case 4:u=g
if(u!=null){t=u.b
v=new A.Pi(u.a,D.yS,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYm,w)},
c66(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c66=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.U6(d,s,0,1),$async$c66)
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
return A.i($async$c66,w)},
c67(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c67=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6c(null,d,e),$async$c67)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h39(u)
if(t.length>800){v=null
x=1
break}v=new A.Pi(d.length,D.dsX,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c67,w)},
ao2(d,e,f){return B.hx3(d,e,f)},
hx3(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ao2=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mz(g,1)
x=B.fOm(g)?3:4
break
case 3:x=5
return A.b(B.c61(g),$async$ao2)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mz(g,13))
try{k=B.E4(d,a0,s)
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
return A.b(B.aYf(q),$async$ao2)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U9(p,a0)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fOl(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.U9(n,a0)
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
v=B.U9(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao2,w)},
HV(d,e,f){return B.hx1(d,e,f)},
hx1(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
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
return A.b(B.aY7(r),$async$HV)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aY7(A.cv(s,0,null)),$async$HV)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.ck(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c5E(o,r,a1,n,a2),$async$HV)
case 11:m=a4
x=J.ck(m)?12:13
break
case 12:x=14
return A.b(B.c5D(q),$async$HV)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.U9(l,a2),$async$HV)
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
a6c(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aW(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.rc(f,r),$async$a6c)
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
return A.i($async$a6c,w)},
U9(d,e){return B.hx2(d,e)},
hx2(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$U9=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}i=C.cE.aJ(j)
d=J.ad(q)!==0?q:null
x=9
return A.b(B.B8(i,a3,d,k,l,o),$async$U9)
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
return A.i($async$U9,w)},
MK:function MK(d,e){this.a=d
this.b=e},
c68:function c68(){},
a0h(d){var x=A.O(d).ax.a===C.I,w=x?D.ad7:D.ab2,v=x?D.aeC:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.acf:C.aL
return new A.aER([w,s,v,u,t,x?C.f7:C.bU])},
hir(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fGq(e),d,null,!0,!0,y.N)},
c5O(d,e,f,g,h,i,j,k,l){return new B.U1(e,l,d,f,k,j,g,h,i,null)},
Yk(d,e,f,g,h,i,j){return new B.bbL(g,h,j,e,i,d,f,null)},
fGq:function fGq(d){this.a=d},
Yh:function Yh(d,e){this.c=d
this.a=e},
axT:function axT(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d_V:function d_V(d){this.a=d},
d_T:function d_T(d){this.a=d},
d_U:function d_U(d){this.a=d},
bt8:function bt8(){},
U1:function U1(d,e,f,g,h,i,j,k,l,m){var _=this
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
dNB:function dNB(d){this.a=d},
dMZ:function dMZ(d,e){this.a=d
this.b=e},
dN_:function dN_(d,e){this.a=d
this.b=e},
dMy:function dMy(d,e,f){this.a=d
this.b=e
this.c=f},
dMx:function dMx(d){this.a=d},
dMz:function dMz(d,e){this.a=d
this.b=e},
dME:function dME(d,e,f){this.a=d
this.b=e
this.c=f},
dMD:function dMD(d){this.a=d},
dNp:function dNp(d,e){this.a=d
this.b=e},
dNq:function dNq(d){this.a=d},
dMW:function dMW(d,e,f){this.a=d
this.b=e
this.c=f},
dMT:function dMT(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dMC:function dMC(d){this.a=d},
dN3:function dN3(d){this.a=d},
dN2:function dN2(){},
dMI:function dMI(d){this.a=d},
dNm:function dNm(d,e){this.a=d
this.b=e},
dNn:function dNn(d,e){this.a=d
this.b=e},
dNo:function dNo(d,e){this.a=d
this.b=e},
dMU:function dMU(d,e){this.a=d
this.b=e},
dMV:function dMV(d,e){this.a=d
this.b=e},
dNf:function dNf(d,e){this.a=d
this.b=e},
dNb:function dNb(d){this.a=d},
dNa:function dNa(d){this.a=d},
dNc:function dNc(){},
dNd:function dNd(){},
dNe:function dNe(d,e){this.a=d
this.b=e},
dNg:function dNg(){},
dNh:function dNh(d){this.a=d},
dN9:function dN9(d,e){this.a=d
this.b=e},
dN4:function dN4(d){this.a=d},
dN5:function dN5(d){this.a=d},
dN6:function dN6(d){this.a=d},
dN7:function dN7(d){this.a=d},
dN8:function dN8(d){this.a=d},
dMF:function dMF(){},
dMG:function dMG(d){this.a=d},
dMH:function dMH(d,e){this.a=d
this.b=e},
dMB:function dMB(d,e){this.a=d
this.b=e},
dMA:function dMA(d,e,f){this.a=d
this.b=e
this.c=f},
dMX:function dMX(d){this.a=d},
dMY:function dMY(d,e,f){this.a=d
this.b=e
this.c=f},
dMR:function dMR(d,e){this.a=d
this.b=e},
dMN:function dMN(d){this.a=d},
dMK:function dMK(d,e,f){this.a=d
this.b=e
this.c=f},
dMO:function dMO(d){this.a=d},
dMP:function dMP(d){this.a=d},
dMQ:function dMQ(){},
dMS:function dMS(d,e){this.a=d
this.b=e},
dML:function dML(d){this.a=d},
dMJ:function dMJ(d,e,f){this.a=d
this.b=e
this.c=f},
dMM:function dMM(){},
dN1:function dN1(d){this.a=d},
dN0:function dN0(d,e){this.a=d
this.b=e},
dNl:function dNl(d,e){this.a=d
this.b=e},
dNi:function dNi(d){this.a=d},
dNj:function dNj(d,e){this.a=d
this.b=e},
dNk:function dNk(d){this.a=d},
dNy:function dNy(d){this.a=d},
dNw:function dNw(d){this.a=d},
dNx:function dNx(d){this.a=d},
dNz:function dNz(){},
dNA:function dNA(d,e){this.a=d
this.b=e},
dNs:function dNs(d,e){this.a=d
this.b=e},
dNt:function dNt(d,e,f){this.a=d
this.b=e
this.c=f},
dNr:function dNr(d,e,f){this.a=d
this.b=e
this.c=f},
dNu:function dNu(d,e){this.a=d
this.b=e},
dNv:function dNv(d,e){this.a=d
this.b=e},
axQ:function axQ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbK:function bbK(d,e,f){this.c=d
this.d=e
this.a=f},
d_R:function d_R(){},
d_S:function d_S(){},
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
d0e:function d0e(){},
d0d:function d0d(d){this.a=d},
Yj:function Yj(d,e,f){this.c=d
this.d=e
this.a=f},
axV:function axV(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d0a:function d0a(d){this.a=d},
d0b:function d0b(d,e,f){this.a=d
this.b=e
this.c=f},
d0c:function d0c(d,e){this.a=d
this.b=e},
d08:function d08(d,e){this.a=d
this.b=e},
d06:function d06(d){this.a=d},
d04:function d04(d){this.a=d},
d01:function d01(d){this.a=d},
d07:function d07(d){this.a=d},
d03:function d03(d){this.a=d},
d09:function d09(d){this.a=d},
d05:function d05(d){this.a=d},
d02:function d02(d){this.a=d},
Yg:function Yg(d,e,f){this.c=d
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
d_O:function d_O(d){this.a=d},
d_N:function d_N(d,e){this.a=d
this.b=e},
d_P:function d_P(d){this.a=d},
d_M:function d_M(d,e){this.a=d
this.b=e},
d_Q:function d_Q(d){this.a=d},
d_L:function d_L(d,e){this.a=d
this.b=e},
d_H:function d_H(d){this.a=d},
d_I:function d_I(d){this.a=d},
d_J:function d_J(d,e){this.a=d
this.b=e},
d_K:function d_K(d){this.a=d},
OW:function OW(d,e,f){this.c=d
this.d=e
this.a=f},
axY:function axY(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d0r:function d0r(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0t:function d0t(d){this.a=d},
d0u:function d0u(d){this.a=d},
d0v:function d0v(d,e){this.a=d
this.b=e},
d0w:function d0w(d){this.a=d},
d0y:function d0y(d){this.a=d},
d0x:function d0x(d){this.a=d},
Yl:function Yl(d,e,f,g,h){var _=this
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
d0n:function d0n(d,e){this.a=d
this.b=e},
d0o:function d0o(d,e){this.a=d
this.b=e},
d0f:function d0f(d,e,f){this.a=d
this.b=e
this.c=f},
d0g:function d0g(d){this.a=d},
d0h:function d0h(){},
d0m:function d0m(){},
d0i:function d0i(d,e){this.a=d
this.b=e},
d0j:function d0j(d,e){this.a=d
this.b=e},
d0k:function d0k(d,e){this.a=d
this.b=e},
d0l:function d0l(d,e){this.a=d
this.b=e},
abc:function abc(d,e){this.c=d
this.a=e},
d_G:function d_G(d){this.a=d},
Yf:function Yf(d){this.a=d},
axR:function axR(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Ym:function Ym(d,e){this.c=d
this.a=e},
axX:function axX(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d0q:function d0q(d){this.a=d},
d0p:function d0p(d){this.a=d},
bbL:function bbL(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hx4(){var x,w=$.pi(),v=J.e2(10,y.N)
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
a6d(d){return B.hx5(d)},
hx5(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a6d)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6d)
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
return A.i($async$a6d,w)},
Ub(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Ub=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MM(),$async$Ub)
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
return A.b(B.a6d(s),$async$Ub)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ub,w)},
Uc(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Uc=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c1(),$async$Uc)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.T(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c6a(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hx4()
t=A.T(u).k("K<1,a3<n,aC>>")
r=A.B(new A.K(u,new B.c6b(s),t),t.k("aj.E"))
x=6
return A.b(B.MM(),$async$Uc)
case 6:q=i
J.aG(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6d(q),$async$Uc)
case 7:x=8
return A.b(B.a6e(r,u,g,s),$async$Uc)
case 8:v=new A.bne(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uc,w)},
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
c6c(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c6c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MM(),$async$c6c)
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
return A.i($async$c6c,w)},
a6e(d,e,f,g){return B.hx6(d,e,f,g)},
hx6(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6e=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ao1("media",r,new B.c69(s,e,g),f,q),$async$a6e)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Ub(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6e)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Ub(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6e)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Ub(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6e)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6e,w)},
E4(d,e,f){return B.hx7(d,e,f)},
hx7(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E4=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c1(),$async$E4)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ao3(b3),$async$E4)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kg,null,g),$async$E4)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ao3(b3),$async$E4)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MM(),$async$E4)
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
return A.b(B.aY8(k,n,o,s,b7),$async$E4)
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
return A.b(new A.a9v(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E4)
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
return A.b(B.a6d(e),$async$E4)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E4,w)},
c6a:function c6a(){},
c6b:function c6b(d){this.a=d},
c69:function c69(d,e,f){this.a=d
this.b=e
this.c=f},
aP0(){var x=0,w=A.j(y.H),v,u
var $async$aP0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hI_=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aP0)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aP0)
case 3:u=$.fTq
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aP0)
case 4:$.fTq=$.hQr=$.hQs=null
return A.h(null,w)}})
return A.i($async$aP0,w)},
fkM(d){var x=0,w=A.j(y.H),v,u
var $async$fkM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a55){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fkN(new A.bS(u,y.aY))
x=3
return A.b(u.ib(0,C.hH,new B.fkO()),$async$fkM)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fkM,w)},
hQp(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hwP(x):x},
fTu(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.ao5(u)
x=1
break}v=B.fOl(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTu,w)},
fTt(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTt=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.ao6(u)
x=1
break}v=B.fOl(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTt,w)},
fC6(d){var x=0,w=A.j(y.T),v
var $async$fC6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao6(d),$async$fC6)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fC6,w)},
bzo(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fTt(d),$async$bzo)
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
return A.i($async$bzo,w)},
f9F(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$f9F=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.U5(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B8(d.amX(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9F,w)},
FU(d,e,f){return B.hSN(d,e,f)},
hSN(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FU=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fTu(a1),$async$FU)
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
return A.b($.hki().aCG(D.dhr,null),$async$FU)
case 4:l=d.fTq=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awI(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.flj(f,k,new B.flk(f,a2,k,j,a0,p),a2,j,a0,p,new A.bS(t,y.ch))
x=5
return A.b(l.a6z(0,new B.Wn(r,"offer")),$async$FU)
case 5:d=l
x=7
return A.b(l.ajM(0),$async$FU)
case 7:x=6
return A.b(d.a6r(0,a4),$async$FU)
case 6:x=8
return A.b(B.fkM(l),$async$FU)
case 8:x=9
return A.b(l.anG(),$async$FU)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hQp(f,s)
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
case 12:g="NGMYDOCSYNC3A|z|"+B.h39(h)
case 11:v=new A.bmw(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FU,w)},
fkN:function fkN(d){this.a=d},
fkO:function fkO(){},
flk:function flk(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
flj:function flj(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
fli:function fli(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hUE(d){switch(d){case"new":return D.e9x
case"checking":return D.e9y
case"connected":return D.e9A
case"completed":return D.e9z
case"failed":return D.e9C
case"disconnected":return D.e9D
case"closed":return D.aKu
case"count":return D.e9B}return D.aKu},
hUF(d){switch(d){case"new":return D.aKv
case"gathering":return D.e9E
case"complete":return D.a55}return D.aKv},
i3O(d){switch(d){case"stable":return D.e9F
case"have-local-offer":return D.e9G
case"have-local-pranswer":return D.e9I
case"have-remote-offer":return D.e9H
case"have-remote-pranswer":return D.e9J
case"closed":return D.aKB}return D.aKB},
i23(d){switch(d){case"new":return D.aKy
case"connecting":return D.aKz
case"connected":return D.aKA
case"closed":return D.a56
case"disconnected":return D.aKx
case"failed":return D.aKw}return D.a56},
a8v:function a8v(d,e){this.a=d
this.b=e},
NM:function NM(d,e){this.a=d
this.b=e},
Wm:function Wm(d,e){this.a=d
this.b=e},
NL:function NL(d,e){this.a=d
this.b=e},
Ex:function Ex(d,e){this.a=d
this.b=e},
ch6:function ch6(){},
fQ5(d){var x=new B.Ew()
x.a=d
x.b=!0
return x},
Ew:function Ew(){this.b=this.a=$},
a8u:function a8u(){},
asl:function asl(){},
Wn:function Wn(d,e){this.a=d
this.b=e},
fOh(){var x=0,w=A.j(y.H)
var $async$fOh=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOh,w)},
fOk(d,e,f){var x=0,w=A.j(y.T),v
var $async$fOk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mm(D.mr))){v=null
x=1
break}v=B.fCm(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOk,w)},
h39(d){var x,w=F.aaw.a3p(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hwO(d){var x,w,v=C.cE.aJ(d)
try{x=C.c4.ca(0,F.aav.baG(v,!1))
return x}catch(w){x=C.c4.ca(0,v)
return x}},
fOl(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hwO(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c4.ca(0,C.cE.aJ(x))
return v}catch(u){return x}}return null},
hwP(d){var x,w,v,u,t,s=A.a([],y.s)
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
hwQ(){var x,w=$.pi(),v=J.e2(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aA(32)]
return"DS"+C.d.fW(v)},
aYe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYe=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYe)
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
return A.i($async$aYe,w)},
c5T(d,e){return B.hwR(d,e)},
hwR(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c5T=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c5T)
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
return A.i($async$c5T,w)},
aYh(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYe(d),$async$aYh)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYh,w)},
aYg(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYg=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hwQ()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c5T(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYg)
case 3:if(!h){v=null
x=1
break}v=new A.a_l("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYg,w)},
aYf(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYf=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYe(o),$async$aYf)
case 3:r=f
if(r==null){v=null
x=1
break}q=J.q(r,"payload")
u=J.k(q==null?"":q)
if(J.ad(u)===0){v=null
x=1
break}try{t=C.c4.ca(0,C.cE.aJ(u))
if(J.iS(t).length===0){v=null
x=1
break}v=t
x=1
break}catch(n){s=A.a9(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYf,w)},
c5U(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c5U=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bAl("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c5U)
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
return A.i($async$c5U,w)},
aYi(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HR(),$async$aYi)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYi,w)},
anZ(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$anZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anZ)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aU(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYi(s)
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
a65(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a65=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a65)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HR(),$async$a65)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a64(s),$async$a65)
case 5:x=6
return A.b(B.anX(f,u),$async$a65)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a65,w)},
a66(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a66=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a66)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HR(),$async$a66)
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
return A.b(B.anX(g,q),$async$a66)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a64(u),$async$a66)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a66,w)},
a67(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a67=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a67)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HR(),$async$a67)
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
s=B.aYb(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a67)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a67)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a67,w)},
c5V(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c5V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c5V)
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
return A.i($async$c5V,w)},
HS(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HS=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c5V(d),$async$HS)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYi(t),$async$HS)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.anY(d),$async$HS)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYb(e,J.k(u==null?"":u))
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
aYj(){var x,w=$.pi(),v=J.e2(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aA(32)]
return C.d.fW(v)},
a68(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aJ(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fOm(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c5Y(d){return B.hwT(d)},
hwT(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c5Y=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a68(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c5Y)
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
return A.i($async$c5Y,w)},
ao0(d,e){return B.hwU(d,e)},
hwU(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ao0=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a68(d)
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
c6_(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6_=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a68(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ao0(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6_,w)},
c5Z(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c5Z=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a68(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ao0(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c5Z)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c5Z,w)},
c60(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c60=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a68(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ao0(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c60,w)},
c61(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c61=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fOm(d)){v=null
x=1
break}x=3
return A.b(B.c5Y(d),$async$c61)
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
return A.i($async$c61,w)},
a6f(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6f=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c1(),$async$a6f)
case 3:if(!e){v=A.V(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f1("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6f)
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
return A.i($async$a6f,w)},
ao4(d){return B.hx8(d)},
hx8(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
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
return A.b(B.a6f(),$async$ao5)
case 4:s=f
r=J.q(s,j)
if(!y.f.b(r)){v=null
x=1
break}m=J.q(r,"offer")
q=J.k(m==null?"":m)
if(J.ad(q)===0){v=null
x=1
break}u=6
p=C.c4.ca(0,C.cE.aJ(q))
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
return A.b(B.a6f(),$async$ao7)
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
return A.b(B.a6f(),$async$ao6)
case 4:s=o.q(f,p)
if(!y.f.b(s)){v=null
x=1
break}r=J.q(s,"answer")
u=J.k(r==null?"":r)
if(J.ad(u)===0){v=null
x=1
break}try{r=C.c4.ca(0,C.cE.aJ(u))
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
break}p=n.gb8()
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
o=o==null?null:J.fa(J.wy(o))
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
i07(d,e){var x,w,v=J.e2(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fAF(d){return B.i09(d)},
i09(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fAF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eV().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i5("media").Ke(d,3600),$async$fAF)
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
return A.i($async$fAF,w)},
Cx(d,e,f,g,h,i){var x=null
return B.i06(d,e,f,g,h,i)},
i06(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h3c(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fOo(r),$async$Cx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fAF(o),$async$Cx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a69(r),$async$Cx)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aNA)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.L8(A.a([],g))
x=15
return A.b(d.eT(0,A.ata("GET",A.cv(n,0,null))).cM(0,C.ET),$async$Cx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a69(r),$async$Cx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JJ(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cx)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYl(r,k),$async$Cx)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a8(0),$async$Cx)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.U5(r)
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
return A.b(B.a69(r),$async$Cx)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Cx,w)},
aOJ(d){return B.i08(d)},
i08(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOJ=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eV().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i5("media").W(0,d),$async$aOJ)
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
I=c[131]
P=c[215]
E=c[208]
G=c[86]
Q=c[180]
R=c[132]
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
B.ch7.prototype={
aCG(d,e){return this.cGd(d,e)},
cGd(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCG=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.V(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dT(r,s,t)
t.v(0,d)
u=new q(A.kd(A.cA(t)))
t=J.k(u)
v=B.hBJ(C.cS.gcv().aJ(new A.d3(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCG,w)}}
B.b2r.prototype={
bvX(d){var x=this,w=x.w
w.onclose=A.he(new B.ch2(x))
w.onopen=A.he(new B.ch3(x))
w.onmessage=A.he(new B.ch4(x))
w.onbufferedamountlow=A.he(new B.ch5(x))},
gda(d){return this.x},
ag1(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ag1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ew()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fQ5(J.fa(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eg(d.arrayBuffer(),y.af),$async$ag1)
case 8:v=t.fQ5(s.aml(f,0,null))
x=1
break
case 7:case 4:v=B.fQ5(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag1,w)}}
B.b2s.prototype={
bvY(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.ch8(x)))
w.addEventListener("icecandidate",A.he(new B.ch9(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cha(x)))
w.onicegatheringstatechange=A.he(new B.chb(x))
w.addEventListener("signalingstatechange",A.he(new B.chc(x)))
if(!$.fX_())w.addEventListener("connectionstatechange",A.he(new B.chd(x)))
w.addEventListener("negotiationneeded",A.he(new B.che(x)))
w.addEventListener("track",A.he(new B.chf(x)))},
ajM(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eg(s.createAnswer(A.kd(A.cA(A.V(y.N,y.z)))),y.aQ),$async$ajM)
case 3:t=f
v=new B.Wn(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajM,w)},
a6r(d,e){return this.blt(0,e)},
blt(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6r=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6r)
case 2:return A.h(null,w)}})
return A.i($async$a6r,w)},
a6z(d,e){return this.blJ(0,e)},
blJ(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6z=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eg(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6z)
case 2:return A.h(null,w)}})
return A.i($async$a6z,w)},
anG(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wn(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anG,w)},
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
B.Yi.prototype={
T(){return new B.axU()},
gdc(){return this.c}}
B.axU.prototype={
a_(){this.a1()
this.acL()},
acL(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYc(u.e,u.c),$async$acL)
case 2:t=e
if(v.c!=null)v.m(new B.d_Z(v,t))
return A.h(null,w)}})
return A.i($async$acL,w)},
Pv(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Pv=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anU(t.e,t.c,!1),$async$Pv)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.ePf)
x=1
break}x=4
return A.b(B.a63(u.a.c,"individual"),$async$Pv)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a5(t,!1).a4Z(A.e6(new B.d_W(u),!1,null,y.H)),$async$Pv)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Pv,w)},
IE(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fiW(o),$async$IE)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a67(o.e,r,s,q),$async$IE)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eMk)
x=1
break}x=5
return A.b(B.a63(u.a.c,"member"),$async$IE)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a5(o,!1).a4Z(A.e6(new B.d_Y(u),!1,null,y.H)),$async$IE)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IE,w)},
xz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a62(t.e,o,t.f,t.r,t.w,s),$async$xz)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a63(u.a.c,"org_owner"),$async$xz)
case 4:x=5
return A.b(B.anZ(u.a.c),$async$xz)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fjq(o),$async$xz)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a65(s,t,o,q.c),$async$xz)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eMh)
x=1
break}x=10
return A.b(B.anZ(u.a.c),$async$xz)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a5(o,!1).a4Z(A.e6(new B.d_X(u),!1,null,y.H)),$async$xz)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xz,w)},
B(d){var x,w,v,u=this,t=null,s=A.O(d).ax.a===C.I,r=s?C.j6:C.pq,q=B.fOj(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fM,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f6H,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.fpg,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bUj,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.lx(new B.d00(),t),C.P,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abG(C.eR,C.axd,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcaD(),t),C.ac],v))
p.push(new B.abG(C.oC,C.a13,"Team Member","Sign in with your organization access code + password",u.gcbu(),t))
p.push(C.ac)
p.push(new B.abG(C.ajQ,C.a2x,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcb_(),t))
return A.c8(t,r,A.bm(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ah8,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.abG.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aF(!1,C.a1,!0,s,A.aK(!1,r,!0,A.ez(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a7(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p1,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.O(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Bf,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bW,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAs.prototype={}
B.aDE.prototype={}
B.jh.prototype={
mm(d){var x=this.b,w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gaoi(){var x=this.d
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
ba9(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jh(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cEI(d){return this.ba9(null,d)},
aCr(d){return this.ba9(d,null)}}
B.U_.prototype={
T(){return new B.aBP(new A.cq(null,y.A))},
gdc(){return this.c}}
B.aBP.prototype={
a_(){this.a1()
this.acM()},
acM(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acM=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B7(u.a.c),$async$acM)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dMu(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acM,w)},
acN(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fB(s)),$async$acN)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eQ9)
case 1:return A.h(v,w)}})
return A.i($async$acN,w)},
YN(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YN=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.an7(s.d,4),$async$YN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$YN)
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
return A.i($async$YN,w)},
agu(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agu=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a94("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agu)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agu,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.O(d).ax.a===C.I,n=o?C.j6:C.pq,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1u,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a7(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agJ,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mz,w,C.kt,new A.es(A.p(p,A.pC(p,p,!1,B.hwK(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bW,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kt,A.A(A.a([A.D(A.eB(N.By,C.Ti,q.gc3F(),p),1),C.av,A.D(A.dp(C.yj,C.a7j,q.gc3G(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a6(1/0,p,A.eB(M.a_V,D.flc,q.gcpV(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.LS,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.U3.prototype={
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
YO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HQ(u.d.a.a)
if(t==null){u.m(new B.dND(u))
x=1
break}u.m(new B.dNE(u))
s=u.a
r=s.c
x=3
return A.b(B.a61(s.d,new B.dNF(u),t,r),$async$YO)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dNG(u))
if(q){s=u.c
s.toString
A.a5(s,!1).N(!0)}case 1:return A.h(v,w)}})
return A.i($async$YO,w)},
a0Z(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a0Z=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.ck(r.a.d)){x=1
break}r.m(new B.dNH(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rc(r.a.c,q),$async$a0Z)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dNI(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agC(p,m,l,j,k),$async$a0Z)
case 8:o=e
if(r.c!=null)r.m(new B.dNJ(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dNK(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dNL(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0Z,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.O(d).ax.a===C.I,i=j?D.ad7:D.ab2,h=j?D.aeC:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.acf:C.aL
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
t=A.p(k,A.A(A.a([A.p(k,D.bIn,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a7(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fz,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1u,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u4(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bh4()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aL(k,C.T,u==null,k,!0,C.r,k,A.aM(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LM,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dNM(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lX,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.KN(l.a.d,4)
m=A.B(new A.K(m,new B.dNN(x,new A.aER(i)),m.$ti.k("K<aj.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.mf,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bw,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eKR)
else q.push(A.W(C.lc,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.brO,k,k,C.ah),1)
u=l.f?k:l.gcpW()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eB(M.a_V,D.fma,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.aA(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc3H()
t=A.bk(C.aE,k,k,0,C.c,k,C.n3,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mw(new B.dNO(),A.v(A.a([e,new A.C(D.bri,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rv:D.fkB,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cr,C.Xm,k,k,new A.bn(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bh4.prototype={
oj(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.U0.prototype={
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
acO(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acO=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dMv(r))
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
return A.b(B.a66(p,m,n,o,C.a.i(l).length===0?null:l),$async$acO)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.ePL)
s=[1]
x=4
break}p.I(y.q).f.R(D.eOo)
p=r.c
p.toString
A.a5(p,!1).N(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dMw(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acO,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.O(d).ax.a===C.I?C.j6:C.pq,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fdm,s,s,s,1,s,!0),p=A.p(s,D.bk2,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gi,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),o,s,s,s,s,s,2,D.bPd,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),x,s,s,s,s,s,2,D.bP8,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aL(s,C.T,!1,s,!0,C.r,s,A.aM(),w,s,s,s,s,s,2,D.bPo,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc3I()
u=A.bk(C.aE,s,s,s,s,C.fN,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mz,A.bJ(t.r?C.rv:C.aQc,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.aaV.prototype={}
B.btu.prototype={
a3F(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3F=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cr(r.amX()))
x=3
return A.b(B.Qq(t,s),$async$a3F)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3F,w)},
gdc(){return this.a}}
B.MK.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yh.prototype={
T(){return new B.axT(new A.ar(C.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
B.axT.prototype={
a_(){this.a1()
$.aT.x1$.push(new B.d_V(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c3O(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a5(w,!1).N(x)
return null},
B(d){var x=this,w=null,v=B.a0h(d),u=x.a.c,t=u?C.i6:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j6:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fM,32)],n),l=A.p(w,T.amx,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cv,16)],n),C.ank,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u4(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bt8()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aL(!1,C.T,!1,w,!0,C.r,w,A.aM(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F3,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aX_),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d_T(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lX,w,w,w,w)
f=f[1]
f=A.D(A.dU(C.nq,new B.d_U(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eG(w,C.K,new A.cU(Q.JL,A.c_(new A.C(C.xs,A.v(A.a([l,C.aP,k,C.P,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.D(A.c_(A.aF(!1,C.a1,!0,w,A.aK(!1,A.m(14),!0,D.e3w,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc3N(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.ND,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LU,C.d0,w,w,w)}}
B.bt8.prototype={
oj(d,e){return e.ajH(e.a.toUpperCase())}}
B.U1.prototype={
T(){return new B.aBR(A.a([],y.r),A.aX(y.N))},
gdc(){return this.c}}
B.aBR.prototype={
a_(){var x=this
x.a1()
x.tn()
x.w=A.dA(C.jb,new B.dNB(x))},
q(){var x=this.w
if(x!=null)x.a8(0)
B.Ua()
this.a2()},
a_R(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_R=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MJ(u.a.c),$async$a_R)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ab(u.a.c),$async$a_R)
case 4:u.m(new s.dMZ(u,e))
u.hX("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_R,w)},
tn(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MJ(u.a.c),$async$tn)
case 3:t=e
x=4
return A.b(B.Ab(u.a.c),$async$tn)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dN_(u,s))
if(t>0)u.hX("Received "+A.t(t)+" file(s) via My Code.")
u.MV(u.d)
B.B7(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tn,w)},
MV(d){return this.bzV(d)},
bzV(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6b(r,u.a.c),$async$MV)
case 8:p=f
if(u.c==null){x=1
break}new B.dMy(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.mm(D.mr))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.U8(r,u.a.c),$async$MV)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ab(u.a.c),$async$MV)
case 12:u.m(new o.dMz(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MV,w)},
Nh(d){return this.bG3(d)},
bG3(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6b(d,u.a.c),$async$Nh)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dME(u,d,t))
x=6
return A.b(A.fI(new A.fB(t)),$async$Nh)
case 6:u.hX("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fB(r.toUpperCase())),$async$Nh)
case 7:u.hX("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nh,w)},
hX(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tp(d,e){return this.cAk(d,e)},
cAk(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dNp(r,e))
u=3
x=6
return A.b(d.$0(),$async$tp)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dNq(r))
$.eS.mh()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tp,w)},
gaTu(){var x=this.a
return x.f||x.r||x.w},
HB(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HB=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTu()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c5R(s,n,r,q,o,t),$async$HB)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hX("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fu7(o,u.a.c),$async$HB)
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
return A.b(B.Cz(s,o,r,q,n,t),$async$HB)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HB,w)},
ZV(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZV=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.anZ(u.a.c),$async$ZV)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hX("No organization portal found.")
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
return A.b(A.a5(t,!1).c6(A.e6(new B.dMW(u,r,q),!1,null,y.H)),$async$ZV)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZV,w)},
a01(d){return this.cjC(d)},
cjB(){return this.a01(1)},
cjC(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a01=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTu()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anW(u.a.c),$async$a01)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a01,w)},
aaP(d,e,f){return this.bWi(d,e,f)},
bWi(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaP=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hX(e)
x=1
break}x=3
return A.b(u.tp(new B.dMT(u,d,null,e,f),"Uploading\u2026"),$async$aaP)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaP,w)},
bA2(){B.hhK(!1,new B.dMC(this))
return},
coy(){this.m(new B.dN3(this))},
ax5(){var x=0,w=A.j(y.H),v=this
var $async$ax5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bA2()
return A.h(null,w)}})
return A.i($async$ax5,w)},
aaL(){var x=0,w=A.j(y.H),v=this
var $async$aaL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dMI(v),"Importing\u2026"),$async$aaL)
case 2:return A.h(null,w)}})
return A.i($async$aaL,w)},
Rw(d){return this.czL(d)},
czL(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rw=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c6(A.e6(new B.dNm(u,d),!1,null,y.H)),$async$Rw)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mm(D.Py)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a5(t,!1).c6(A.e6(new B.dNn(u,d),!1,null,y.H)),$async$Rw)
case 8:x=1
break
case 7:x=u.bX_(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a5(t,!1).c6(A.e6(new B.dNo(u,d),!1,null,y.H)),$async$Rw)
case 11:x=1
break
case 10:u.hX("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rw,w)},
bX_(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cBv,C.a.b0(x,w+1).toLowerCase())},
aef(d){return this.caH(d)},
caH(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aef=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a5(t,!1).c6(A.e6(new B.dMU(u,d),!1,null,y.H)),$async$aef)
case 5:x=1
break
case 4:u.m(new B.dMV(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aef,w)},
QU(d){return this.crn(d)},
crn(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hX("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$QU)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dNf(u,d),"Preparing QR\u2026"),$async$QU)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QU,w)},
agU(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agU=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNg(),A.T(t).k("K<1,n>")).fI(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dNh(q),s),s.k("J.E"))
if(r.length===0){u.hX("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QU(r),$async$agU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agU,w)},
agN(d){return this.cqX(d)},
cqX(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dN9(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agN)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rw(d)
break
case"qr":u.QU(A.a([d],y.r))
break
case"send_my_code":u.cbj(A.a([d],y.r))
break
case"save":u.ag8(d)
break
case"delete":u.Ip(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agN,w)},
WL(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dMF(),A.T(t).k("K<1,n>")).fI(0)}t=u.d
s=A.T(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dMG(q),s),s.k("J.E"))
if(r.length===0){u.hX("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$WL)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dMH(u,r),"Preparing file\u2026"),$async$WL)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WL,w)},
afl(d){return this.ci5(d)},
ci5(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hir(d,!1),$async$afl)
case 3:s=f
r=s==null
q=B.a68(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hX("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afl,w)},
ael(){var x=0,w=A.j(y.H),v=this,u
var $async$ael=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fBK(u,v.a.c),$async$ael)
case 2:return A.h(null,w)}})
return A.i($async$ael,w)},
bA1(){B.hhK(!1,new B.dMB(this,null))
return},
ID(d,e){return this.cbk(d,e)},
aZn(d){return this.ID(null,d)},
cbj(d){return this.ID(d,null)},
cbk(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$ID=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.T(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dMX(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wQ.c5().ami(!0,C.Z7,!1),$async$ID)
case 10:r=g
if(r==null||J.ck(r.a)){x=1
break}x=11
return A.b(s.tp(new B.dMY(l,s,r),"Preparing\u2026"),$async$ID)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.a9(j)
$.am.$1("[doc share send my code pick] "+A.t(q))
s.hX("Could not open file picker. Try again.")
x=1
break
x=9
break
case 6:x=2
break
case 9:l=l.a
if(l.length===0){s.hX("No files selected.")
x=1
break}x=4
break
case 5:l=p
case 4:p=s.c
p.toString
x=12
return A.b(B.bBu(p,l,e,s.a.c),$async$ID)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hX("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ID,w)},
HQ(d){return this.bW5(d)},
bW5(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hwJ(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZn(t),$async$HQ)
case 8:x=6
break
case 7:u.hX("Invalid My Code QR.")
case 6:x=1
break
case 4:s=A.af("^\\d{6}$",!0,!1,!1,!1)
if(s.b.test(r)){u.hX("NGMY Transfer is no longer available. Use My Code or Share via QR.")
x=1
break}x=C.a.a0(d,"NGMYDOCSYNC3|")||C.a.a0(d,"NGMYDOCSYNC3|z|")?9:10
break
case 9:x=11
return A.b(u.tp(new B.dMR(u,d),"Receiving video\u2026"),$async$HQ)
case 11:x=1
break
case 10:x=12
return A.b(u.tp(new B.dMS(u,d),"Receiving\u2026"),$async$HQ)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HQ,w)},
DL(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DL=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Ct()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afl(t),$async$DL)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HQ(s),$async$DL)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a5(t,!1).c6(A.e6(new B.dN1(u),!1,null,y.N)),$async$DL)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tn(),$async$DL)
case 10:x=1
break
case 9:x=11
return A.b(u.HQ(C.a.i(r)),$async$DL)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DL,w)},
ag8(d){return this.cn8(d)},
cn8(d){var x=0,w=A.j(y.H),v=this
var $async$ag8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dN0(v,d),"Saving\u2026"),$async$ag8)
case 2:return A.h(null,w)}})
return A.i($async$ag8,w)},
Ip(d){return this.bIl(d)},
bIl(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ip=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.kY(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ip)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c5U(t),$async$Ip)
case 6:case 5:s=d.a
x=7
return A.b(B.E3(u.a.c,s),$async$Ip)
case 7:u.r.W(0,s)
x=8
return A.b(u.tn(),$async$Ip)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ip,w)},
ah_(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0h(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNl(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ah_)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.ael()
break
case"import":u.aaL()
break}case 1:return A.h(v,w)}})
return A.i($async$ah_,w)},
c3L(d){var x=d.c
if(C.a.a0(x,"video/")||d.mm(D.mr))return C.pP
if(C.a.a0(x,"image/")||d.mm(D.Py))return C.tL
if(C.a.t(x,"pdf"))return E.Na
return D.aki},
B(d){var x,w,v=this,u=null,t=B.a0h(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.Ga,u,u,u,new B.dNw(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bIT,u,u,u,v.e?u:v.gcb0(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcox()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bDh:E.akJ,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_S,u,u,u,v.e?u:v.gc3M(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nW,u,u,u,v.e?u:v.gb_v(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bKz,u,u,u,v.e?u:new B.dNx(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.lx(new B.dNy(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([p.j(A.O(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e0(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bR(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.O(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lX(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axQ(C.jj,s,!0,t,w?u:v.gcro(),u),1)
x.push(new A.C(D.bq5,A.mw(new B.dNz(),A.A(A.a([s,C.av,A.D(new B.axQ(C.vr,"Export",!1,t,w?u:v.gbLP(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cr,C.iw,u,u,new A.bn(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbK(t,v.e?u:v.gb_v(),u)
else s=A.k2(!0,u,u,new B.dNA(v,t),s,u,D.bpY,u,u,!1,!1)
x.push(A.D(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axQ.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.va,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.va,t,new A.b7(s,C.Y),new A.aA(v,1,C.q,-1),t,t,t,t)
return A.eB(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbK.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mw(new B.d_R(),new A.C(E.Yc,A.v(A.a([A.mw(new B.d_S(),A.p(x,A.W(C.xN,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a7(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.i9,x,x,new A.bn(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.nW,D.fpz,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Y7,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cr,C.AD,x,x,new A.bn(0,1,w),s),x,x,x)}}
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
if(!o||i.mm(D.mr))p=D.d7u
else{p=C.a.a0(p,"image/")||i.mm(D.Py)
n=y.O
p=p?A.a([C.cZ,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a7(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoi()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mm(D.mr))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fL,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mm(D.mr)))l.push(A.fM8(C.aE,!1,j,j,j,!1,j,j,new B.d0d(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nU,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mw(new B.d0e(),new A.C(C.e3,A.aF(!1,C.a1,!0,j,A.aK(!1,r,!0,new A.C(C.XI,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.q,-1)),j,j,C.ag),j),C.cr,h,new A.cw("docshare_row_"+i.a,y.aw),j,new A.bn(0,1,y.X),y.i)}}
B.Yj.prototype={
T(){return new B.axV()},
gdc(){return this.c}}
B.axV.prototype={
a_(){this.a1()
this.xp()},
q(){B.hwY(this.e)
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
n=B.hx0(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hx_(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d0a(s))
x=1
break}s.m(new B.d0b(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d0c(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
a0Y(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rc(t.c,t.d),$async$a0Y)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eMR)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agC(q,s,t.length===0?"image/jpeg":t,null,s),$async$a0Y)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a0Y,w)},
bVZ(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kj(u,C.A,v,new B.d08(w,t),C.fU,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d09(w),C.fU,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ud(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0h(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bz,u,u,u,v.gb3f(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DN
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dp(C.Bz,D.f8X,v.gb3f(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bVZ()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yg.prototype={
T(){return new B.axS(A.ahp(),C.bx,C.bx)},
gdc(){return this.c}}
B.axS.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a4(w).k("ft<1>")).i7(new B.d_O(v))
x.gcNw().i7(new B.d_P(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a4(x).k("ft<1>"))}if(x==null)x=C.b26
x.i7(new B.d_Q(v))
v.xp()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rc(p.c,p.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d_H(s))
x=1
break}x=8
return A.b(s.d.BJ(0,new A.a2o(r,s.a.d.c)),$async$xp)
case 8:if(s.c==null){x=1
break}s.m(new B.d_I(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.d_J(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
YP(){var x=0,w=A.j(y.H),v=this,u
var $async$YP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h0(0),$async$YP)
case 5:x=3
break
case 4:x=6
return A.b(u.ia(0),$async$YP)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YP,w)},
aRp(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0h(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DN
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bEg,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.ND,C.n),o,88,o,o,o,o,o,88)
t=A.kT(C.aE,o,o,m,0,new B.d_K(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRp(p.w)+" / "+p.aRp(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eJm,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xY:C.iT,o,o,o,o,o)
x=A.v(A.a([u,C.kt,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc3P(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tz,x,o),o,o,o),o,!1,!1,o,o)}}
B.OW.prototype={
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
return A.b(B.fOk(o.c,o.d,new B.d0r(s)),$async$OS)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d0s(s))
x=1
break}s.e=r
q=O.hTC(r)
if(q==null){s.m(new B.d0t(s))
x=1
break}s.d=q
q.aM(0,s.gaZb())
x=8
return A.b(q.i6(0).cM(0,C.qL),$async$OS)
case 8:if(s.c==null){x=1
break}s.m(new B.d0u(s))
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
break}s.m(new B.d0v(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OS,w)},
c9i(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d0w(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ct(0,x.gaZb())
w=x.d
if(w!=null)w.q()
B.i2k(x.e)
x.a2()},
acR(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYk(u.c,u.d),$async$acR)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acR,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0h(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oJ,t,t,t,u.gc3J(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.id(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DN
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agU(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zI(s,t),A.aE(t,A.CL(A.p(t,A.W(q?I.xY:C.iT,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bW,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d0y(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yl.prototype={
T(){return new B.axW(new A.cq(null,y.A))}}
B.axW.prototype={
gcA3(){var x,w,v=this.a
if(v.e!==D.QS)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gczJ(){var x,w,v=this.a
if(v.e!==D.yS)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcA3()
if(x!=null){v.PU(x)
v.e=A.dA(R.EW,new B.d0n(v,x))}w=v.gczJ()
if(w!=null){v.PT(w)
v.f=A.dA(C.h4,new B.d0o(v,w))}},
q(){var x=this.e
if(x!=null)x.a8(0)
x=this.f
if(x!=null)x.a8(0)
this.a2()},
PT(d){return this.cgh(d)},
cgh(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ao3(d),$async$PT)
case 3:t=f
x=4
return A.b(B.c6c(d),$async$PT)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d0f(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PT,w)},
PU(d){return this.cgi(d)},
cgi(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PU=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fC6(d),$async$PU)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzo(t),$async$PU)
case 4:if(u.c==null){x=1
break}u.m(new B.d0g(u))
u.c.I(y.q).f.R(D.aNb)
case 1:return A.h(v,w)}})
return A.i($async$PU,w)},
gc_V(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc3K(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0K(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Ct()){t=u.c
if(t!=null)t.I(y.q).f.R(D.ePV)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a5(t,!1).c6(A.e6(new B.d0h(),!1,null,y.N)),$async$a0K)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzo(s),$async$a0K)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aNb)
case 1:return A.h(v,w)}})
return A.i($async$a0K,w)},
a8J(d){return this.bG4(d)},
bG4(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fB(C.d.aI(t,", "))),$async$a8J)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8J,w)},
acP(d){return this.bFP(d)},
bFP(d){var x=0,w=A.j(y.H),v=this
var $async$acP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fB(v.a.c)),$async$acP)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eNj)
return A.h(null,w)}})
return A.i($async$acP,w)},
a0F(d){return this.cna(d)},
cna(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0F=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.an7(s.d,4),$async$a0F)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a0F)
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
return A.i($async$a0F,w)},
gaUy(){var x,w=this.a
if(w.e!==D.Hl)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8G(d){return this.bFY(d)},
bFY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8G=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaUy()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fB(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8G)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eOV)
case 1:return A.h(v,w)}})
return A.i($async$a8G,w)},
acQ(){var x=0,w=A.j(y.H),v=this,u
var $async$acQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ua(),$async$acQ)
case 2:u=v.c
if(u!=null)A.a5(u,!1).N(null)
return A.h(null,w)}})
return A.i($async$acQ,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0h(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hl&&i!==D.QS&&i!==D.yS
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hl||t===D.QS||t===D.yS?l:A.aH(l,l,l,l,C.kP,l,l,l,m.gaXn(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.P,A.pC(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bw,A.d(""+q.d+" file(s) \xb7 "+m.gc_V(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hl){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc3K(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bOi,D.fhU,new B.d0i(m,d),l)],p))}if(m.a.e===D.Hl&&m.gaUy()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bKT,D.feF,new B.d0j(m,d),l)],p))
if(m.a.e===D.yS){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DQ:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}if(m.a.e===D.QS){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DQ:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l),C.ac,A.dp(D.bGH,D.fkU,m.gcny(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oe(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.eB(N.By,C.Ti,new B.d0k(m,d),l),1),C.av,A.D(A.dp(C.yj,C.a7j,new B.d0l(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a6(1/0,l,A.bJ(C.zn,m.gaXn(),A.bk(C.aJ,l,l,l,l,C.fN,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0m(),y.C)}}
B.abc.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aP,A.p(x,A.pC(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ei(A.a([A.bJ(C.zo,new B.d_G(d),x)],u),x,x,C.mL,v,x,x,x,x,D.f7Z,x)}}
B.Yf.prototype={
T(){return new B.axR(A.yP(C.xb,C.nx,C.tX))}}
B.axR.prototype={
q(){this.d.q()
this.a2()},
avI(d){var x,w,v,u,t
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
return A.c8(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.ff8,x,x,x,1,x,!0),C.w,A.yO(this.d,C.bQ,this.gavH()),x,!1,!1,x,x)}}
B.Ym.prototype={
T(){return new B.axX(A.yP(C.xb,C.nx,C.tX))},
gdc(){return this.c}}
B.axX.prototype={
bX1(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeI(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeI=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rp("text/plain"),$async$aeI)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.ePP)
x=1
break}s=u.c
if(s!=null)A.a5(s,!1).N(t)
case 1:return A.h(v,w)}})
return A.i($async$aeI,w)},
a9u(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hir(p,!0),$async$a9u)
case 3:t=e
p=t==null
s=B.a68(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eMr)
x=1
break}p=u.c
if(p!=null)A.a5(p,!1).N(s)
case 1:return A.h(v,w)}})
return A.i($async$a9u,w)},
q(){this.d.q()
this.a2()},
avI(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bX1(t))continue
s.e=!0
x=s.c
x.toString
A.a5(x,!1).N(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alE,v,v,v,w.gbLn(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_Z,v,v,v,w.gcdH(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qW:P.MV,v,v,v,v,v),v,v,v,new B.d0q(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.flI,v,v,v,1,v,!0)
u=A.yO(w.d,C.bQ,w.gavH())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e9d],s),v),v,!1,!1,v,v)}}
B.bbL.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.ot
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.ot:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aF(!1,C.a1,!0,r,A.aK(!1,w,!0,new A.C(C.Yh,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8v.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NM.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wm.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NL.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Ex.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.ch6.prototype={}
B.Ew.prototype={}
B.a8u.prototype={}
B.asl.prototype={}
B.Wn.prototype={}
var z=a.updateTypes(["ay<~>()","R(jh)","n(jh)","U1(Y)","~()","Yi(Y)","H(H,jh)","OW(Y)","~(lS)","co(Ew)","ay<jh?>(@)","U_(Y)","U3(Y)","C(jh)","jh(@)","a3<n,@>(jh)","Yh(Y)","U0(Y)","Yj(Y)","Yg(Y)","Yl(Y)","abc(Y)","ai<jh>()","Ym(Y)","abe(Y,H)","Yf(Y)","a3<n,aC>(jh)","co(Wm)","co(a8u)","ay<co>(Ew)"])
B.ch2.prototype={
$1(d){var x=this.a
x.x=D.aKt
x.y.L(0,D.aKt)},
$S:67}
B.ch3.prototype={
$1(d){var x=this.a
x.x=D.aKs
x.y.L(0,D.aKs)},
$S:67}
B.ch4.prototype={
$1(d){var x=this.a
x.ag1(A.aNt(d.data)).bz(new B.ch1(x),y.b)},
$S:67}
B.ch1.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.ch5.prototype={
$1(d){},
$S:67}
B.ch8.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hBI(d.channel))},
$S:15}
B.ch9.prototype={
$1(d){},
$S:15}
B.cha.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hUE(w.iceConnectionState)
x.cx=w
if($.fX_())switch(w.a){case 0:x.cy=D.aKy
break
case 1:x.cy=D.aKz
break
case 3:x.cy=D.aKA
break
case 5:x.cy=D.aKw
break
case 6:x.cy=D.aKx
break
case 7:x.cy=D.a56
break
default:break}},
$S:150}
B.chb.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hUF(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:150}
B.chc.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i3O(w.signalingState)},
$S:150}
B.chd.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i23(w.connectionState)},
$S:150}
B.che.prototype={
$1(d){},
$S:150}
B.chf.prototype={
$1(d){},
$S:15}
B.ffj.prototype={
$1(d){var x=y.F.a(new A.rx([],[]).pl(d.target.result,!1)),w=C.xc.t(x.objectStoreNames,"blobs")
if(!w)C.x8.Kc(x,"blobs")},
$S:196}
B.fBy.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vD.f8(this.b)
$.eS.mh()
this.c.$1(d)},
$S:429}
B.fBA.prototype={
$1(d){return this.a.$1(B.hKz(this.b,this.c))},
$S:34}
B.fBz.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:34}
B.fBx.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fBN.prototype={
$1(d){var x=this
return B.h82(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fBO.prototype={
$1(d){var x=this
return B.h82(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fh_.prototype={
$1(d){var x=this
return B.c5O(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d_Z.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d_W.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5O(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d_Y.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5O(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d_X.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c5O(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d00.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bFk,x,x,x,new B.d0_(d),x,x,x,x,x,x),A.D(A.Ei(D.Pi,!0,x,C.a_3,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pi,x,g,C.aht,0,e,f)},
$C:"$4",
$R:4,
$S:400}
B.d0_.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fiZ.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i6:C.c,r=A.m(28),q=A.p(v,D.bkl,C.f,v,v,D.aYF,v,v,v,v,D.ahj,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aL(v,C.T,!1,v,!0,C.r,v,A.aM(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bJr,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.F8,A.v(A.a([o,C.ac,A.aL(v,C.T,!1,v,!0,C.r,v,A.aM(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.alT,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bw,A.A(A.a([A.D(A.dU(C.de,new B.fiX(d),v),1),C.av,A.D(A.bJ(D.fdI,new B.fiY(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Lz,v,v,v,v),v)},
$S:60}
B.fiX.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.fiY.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eNy)
return}x=w.b.a.a
A.a5(w.c,!1).N(new B.aAs(v,x))},
$S:0}
B.fjs.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i6:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bkb,C.f,w,w,D.b_5,w,w,w,w,D.ahj,w,w,1/0),new A.C(C.F8,A.v(A.a([A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),r,w,w,w,w,w,2,B.fTe(u,"Organization name",C.Fz,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),q,w,w,w,w,w,2,B.fTe(u,"Access code",C.n8,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aL(w,C.T,!1,w,!0,C.r,w,A.aM(),p,w,w,w,w,w,2,B.fTe(u,"Member password",H.G5,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bw,A.bJ(D.flN,new B.fjr(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fN,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Lz,w,w,w,w),w)},
$S:60}
B.fjr.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eND)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a5(v.d,!1).N(new B.aDE(u,x,w))},
$S:0}
B.c5F.prototype={
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
return A.b(A.v0(p,null).cM(0,C.Xl),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cr(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B8(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c5L.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5M.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c5N.prototype={
$1(d){return d.b},
$S:z+2}
B.c5H.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c5I.prototype={
$1(d){return d.b},
$S:z+2}
B.c5G.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c5J.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c5K.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fBL.prototype={
$1(d){return new B.U_(this.a,null)},
$S:z+11}
B.fBM.prototype={
$1(d){return new B.U3(this.a,this.b,this.c,null)},
$S:z+12}
B.dMu.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dND.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dNE.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dNF.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dNC(x,d))},
$S:2}
B.dNC.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNG.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dNH.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dNI.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dNJ.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dNK.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dNL.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dNO.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.dNM.prototype={
$1(d){var x=this.a
return x.f?null:x.YO()},
$S:2}
B.dNN.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mm(D.Py))s=C.tL
else s=C.a.a0(s,"video/")||d.mm(D.mr)?C.pP:D.aki
x=this.b.a
w=y.p
return new A.C(C.kI,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoi(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dMv.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dMw.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c5P.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.c5Q.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:94}
B.fCo.prototype={
$2(d,e){return e===this.a},
$S:279}
B.fcw.prototype={
$1(d){return J.k(d)},
$S:17}
B.fhb.prototype={
$1(d){var x=this.b
B.hIA(C.Fm.ga5g(this.a)).bz(x.gcD3(x),y.H)},
$S:124}
B.fhc.prototype={
$1(d){return this.a.d3(0,null)},
$S:124}
B.fhd.prototype={
$0(){return null},
$S:11}
B.c63.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fhe.prototype={
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
B.fla.prototype={
$1(d){return d.ae()},
$S:z+15}
B.ffA.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ffB.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c68.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.fGq.prototype={
$1(d){return new B.Yh(this.a,null)},
$S:z+16}
B.d_V.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fG()},
$S:8}
B.d_T.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a5(w,!1).N(x)
return null},
$S:2}
B.d_U.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dNB.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_R()},
$S:13}
B.dMZ.prototype={
$0(){var x=J.bCz(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dN_.prototype={
$0(){var x=J.bCz(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dMy.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMx(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCr(this.c)}},
$S:0}
B.dMx.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMz.prototype={
$0(){var x=J.bCz(this.b)
x=A.B(x,x.$ti.k("aj.E"))
return this.a.d=x},
$S:0}
B.dME.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMD(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCr(this.c)}},
$S:0}
B.dMD.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNp.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dNq.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dMW.prototype={
$1(d){return new B.U0(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dMT.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HB(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.U4(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tn(),$async$$0)
case 5:s=J.a8(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a01(s.gM(t)),$async$$0)
case 8:case 7:r.hX(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMC.prototype={
$1(d){this.a.aaP(d,"No files selected.","Added")},
$S:429}
B.dN3.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dN2(),A.T(x).k("K<1,n>")))},
$S:0}
B.dN2.prototype={
$1(d){return d.a},
$S:z+2}
B.dMI.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wQ.c5().cPt(C.Z7,!0),$async$$0)
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
case 6:if(k==null||C.a.i(k).length===0){s.a.hX("Could not read file.")
x=1
break}m=C.a.i(k)
if(!C.a.t(m,"ngmyDocShareBundle")&&!C.a.a0(m,"NGMYDOCSYNC")&&!C.a.a0(m,"{")){s.a.hX("That is a regular file. Tap + Add to upload photos, videos, or documents.")
x=1
break}o=s.a
x=8
return A.b(B.ao2(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.ck(l)){o.hX("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tn(),$async$$0)
case 9:o.hX("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dNm.prototype={
$1(d){return new B.OW(this.a.a.c,this.b,null)},
$S:z+7}
B.dNn.prototype={
$1(d){return new B.Yj(this.a.a.c,this.b,null)},
$S:z+18}
B.dNo.prototype={
$1(d){return new B.Yg(this.a.a.c,this.b,null)},
$S:z+19}
B.dMU.prototype={
$1(d){return new B.OW(this.a.a.c,this.b,null)},
$S:z+7}
B.dMV.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNf.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HB(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6a(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hX("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cjB(),$async$$0)
case 5:x=6
return A.b(p.tn(),$async$$0)
case 6:r=A.T(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dNb(p),r),new B.dNc(),r.k("K<aj.E,n>")).c_(0,new B.dNd())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a5(t,!1).c6(A.e6(new B.dNe(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ua(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNb.prototype={
$1(d){var x=this.a,w=C.d.ba(x.d,new B.dNa(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dNa.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNc.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dNd.prototype={
$1(d){return d.length!==0},
$S:3}
B.dNe.prototype={
$1(d){var x=this.a
return new B.Yl(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dNg.prototype={
$1(d){return d.a},
$S:z+2}
B.dNh.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dN9.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoi(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mm(D.mr)?C.tN:C.oG
p=!x||p.mm(D.mr)?"Play video":"View"
return A.c_(A.bm(!0,new A.C(C.AP,A.v(A.a([q,o,t,C.aA,B.Yk(!1,u,!1,w,p,new B.dN4(d),v),B.Yk(!1,u,!1,C.jj,"Share via QR",new B.dN5(d),"Letters/numbers QR code"),B.Yk(!1,u,!1,D.a_9,"Send to their Code",new B.dN6(d),"Enter someone else's personal code"),B.Yk(!1,u,!1,C.hz,"Download / save",new B.dN7(d),v),C.an,B.Yk(!1,u,!0,C.e4,"Delete",new B.dN8(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,v,v,C.n),C.bd)},
$S:688}
B.dN4.prototype={
$0(){A.a5(this.a,!1).N("view")
return null},
$S:0}
B.dN5.prototype={
$0(){A.a5(this.a,!1).N("qr")
return null},
$S:0}
B.dN6.prototype={
$0(){A.a5(this.a,!1).N("send_my_code")
return null},
$S:0}
B.dN7.prototype={
$0(){A.a5(this.a,!1).N("save")
return null},
$S:0}
B.dN8.prototype={
$0(){A.a5(this.a,!1).N("delete")
return null},
$S:0}
B.dMF.prototype={
$1(d){return d.a},
$S:z+2}
B.dMG.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dMH.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6c(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FX(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oW(s.c,s.f),$async$$0)
case 4:u.hX(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMB.prototype={
$1(d){var x=this.a
x.tp(new B.dMA(x,d,this.b),"Preparing\u2026")},
$S:429}
B.dMA.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hX("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.U4(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.ck(s)){t.hX("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBu(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hX("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMX.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dMY.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aW(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fOn(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMR.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FU(new B.dMN(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hX("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dMO(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dMP(s))
case 5:x=8
return A.b(r.b.ib(0,C.ET,new B.dMQ()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a8(t)
if(q.gam(t)){s.hX("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tn(),$async$$0)
case 9:s.hX("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMN.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dMK(x,d,e))},
$S:127}
B.dMK.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dMO.prototype={
$1(d){return new B.abc(this.a.a,null)},
$S:z+21}
B.dMP.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dMQ.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dMS.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HQ(o)!=null?3:4
break
case 3:x=5
return A.b(B.a60(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZn(B.HQ(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ao2(new B.dML(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.ck(r)){if(B.fOm(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hX(q)
x=1
break}x=10
return A.b(s.tn(),$async$$0)
case 10:o=J.cE(r)
p=o.eJ(r,new B.dMM()).gM(0)
s.hX(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dML.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dMJ(x,d,e))},
$S:127}
B.dMJ.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dMM.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.dN1.prototype={
$1(d){return new B.Ym(this.a.a.c,null)},
$S:z+23}
B.dN0.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYk(u.a.c,v.b),$async$$0)
case 2:t.hX(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNl.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.C(C.AP,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yk(!0,w,!1,C.n8,"My Code",new B.dNi(d),"Your personal code & QR \u2014 others send docs to you"),B.Yk(!1,w,!1,D.a_9,"Send to their Code",new B.dNj(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yk(!1,w,!1,S.y8,"Import backup",new B.dNk(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,x,x,C.n),C.bd)},
$S:688}
B.dNi.prototype={
$0(){A.a5(this.a,!1).N("my_code")
return null},
$S:0}
B.dNj.prototype={
$0(){A.a5(this.b,!1).N(null)
this.a.bA1()},
$S:0}
B.dNk.prototype={
$0(){A.a5(this.a,!1).N("import")
return null},
$S:0}
B.dNy.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.HZ(D.Pi,x,C.a_3,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gK(D.Pi).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dNw.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.dNx.prototype={
$0(){this.a.ah_()
return null},
$S:0}
B.dNz.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*10)),e)},
$S:102}
B.dNA.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abe(e,w,v,this.b,x.e,x.c3L(w),new B.dNs(x,w),new B.dNt(x,v,w),new B.dNu(x,w),new B.dNv(x,w),null)},
$S:z+24}
B.dNs.prototype={
$0(){this.a.aef(this.b)
return null},
$S:0}
B.dNt.prototype={
$0(){var x=this.a
return x.m(new B.dNr(x,this.b,this.c))},
$S:0}
B.dNr.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNu.prototype={
$0(){this.a.Nh(this.b)
return null},
$S:0}
B.dNv.prototype={
$0(){this.a.agN(this.b)
return null},
$S:0}
B.d_R.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*18)),e)},
$S:102}
B.d_S.prototype={
$3(d,e,f){return A.ea(C.A,f,e,null,null)},
$S:134}
B.d0e.prototype={
$3(d,e,f){return A.db(A.dV(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.d0d.prototype={
$1(d){return this.a.y.$0()},
$S:82}
B.d0a.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d0b.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d0c.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d08.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d06(this.a),C.fU,C.dt,!0,x,!1,x,x)
$.aT.x1$.push(new B.d07(this.a))
return C.bH},
$S:137}
B.d06.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d04(this.a))
return C.bH},
$S:187}
B.d04.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d01(x))},
$S:8}
B.d01.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d07.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d03(x))},
$S:8}
B.d03.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d09.prototype={
$3(d,e,f){$.aT.x1$.push(new B.d05(this.a))
return C.bH},
$S:187}
B.d05.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d02(x))},
$S:8}
B.d02.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d_O.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_N(x,d))},
$S:1740}
B.d_N.prototype={
$0(){return this.a.f=this.b===C.ui},
$S:0}
B.d_P.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_M(x,d))},
$S:8}
B.d_M.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d_Q.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d_L(x,d))},
$S:8}
B.d_L.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d_H.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d_I.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d_J.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d_K.prototype={
$1(d){return this.a.d.Mi(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d0r.prototype={
$0(){var x=this.a.a
return B.rc(x.c,x.d)},
$S:1741}
B.d0s.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d0t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d0u.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d0v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d0w.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d0y.prototype={
$0(){var x=this.a
x.m(new B.d0x(x))},
$S:0}
B.d0x.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h0(0)
else x.py(0)},
$S:0}
B.d0n.prototype={
$1(d){return this.a.PU(this.b)},
$S:13}
B.d0o.prototype={
$1(d){return this.a.PT(this.b)},
$S:13}
B.d0f.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d0g.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d0h.prototype={
$1(d){return D.fKJ},
$S:z+25}
B.d0m.prototype={
$2(d,e){if(d)B.Ua()},
$S:122}
B.d0i.prototype={
$0(){return this.a.a8J(this.b)},
$S:0}
B.d0j.prototype={
$0(){return this.a.a8G(this.b)},
$S:0}
B.d0k.prototype={
$0(){return this.a.acP(this.b)},
$S:0}
B.d0l.prototype={
$0(){return this.a.a0F(this.b)},
$S:0}
B.d_G.prototype={
$0(){A.a5(this.a,!1).N(null)
return null},
$S:0}
B.d0q.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pC(),$async$$0)
case 2:u.m(new B.d0p(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d0p.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c6a.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.c6b.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aJ(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c69.prototype={
$2(d,e){return this.bhs(d,e)},
bhs(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Ub(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fkN.prototype={
$1(d){if(d===D.a55&&(this.a.a.a&30)===0)this.a.fN(0)},
$S:z+27}
B.fkO.prototype={
$0(){},
$S:11}
B.flk.prototype={
bj1(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.f9F(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h3c(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bj1(d,e)},
$S:714}
B.flj.prototype={
$1(d){var x=this
d.b=new B.fli(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.fli.prototype={
$1(d){return this.bj0(d)},
bj0(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYl(n,m),$async$$1)
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
return A.b(B.f9F(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a69(m),$async$$1)
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
x(v=B.axU.prototype,"gcaD","Pv",0)
x(v,"gcbu","IE",0)
x(v,"gcb_","xz",0)
x(v=B.aBP.prototype,"gc3F","acN",0)
x(v,"gc3G","YN",0)
x(v,"gcpV","agu",0)
x(v=B.aBS.prototype,"gc3H","YO",0)
x(v,"gcpW","a0Z",0)
x(B.aBQ.prototype,"gc3I","acO",0)
x(B.axT.prototype,"gc3N","c3O",4)
x(v=B.aBR.prototype,"gcb0","ZV",0)
x(v,"gcox","coy",4)
x(v,"gb_v","ax5",0)
x(v,"gcro","agU",0)
x(v,"gbLP","WL",0)
x(v,"gc3M","DL",0)
x(B.axV.prototype,"gb3f","a0Y",0)
x(B.axS.prototype,"gc3P","YP",0)
x(v=B.axY.prototype,"gaZb","c9i",4)
x(v,"gc3J","acR",0)
x(v=B.axW.prototype,"gcny","a0K",0)
x(v,"gaXn","acQ",0)
w(B.axR.prototype,"gavH","avI",8)
x(v=B.axX.prototype,"gcdH","aeI",0)
x(v,"gbLn","a9u",0)
w(v,"gavH","avI",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.ch6,B.a8u,B.asl,B.aAs,B.aDE,B.jh,B.aaV,B.btu,B.Ew,B.Wn])
w(B.ch7,B.ch6)
w(B.b2r,B.a8u)
x(A.hT,[B.ch2,B.ch3,B.ch4,B.ch1,B.ch5,B.ch8,B.ch9,B.cha,B.chb,B.chc,B.chd,B.che,B.chf,B.ffj,B.fBy,B.fBA,B.fBz,B.fBN,B.fBO,B.fh_,B.d_W,B.d_Y,B.d_X,B.d00,B.fiZ,B.fjs,B.c5F,B.c5M,B.c5N,B.c5I,B.c5G,B.c5J,B.c5K,B.fBL,B.fBM,B.dNF,B.dNO,B.dNM,B.dNN,B.fcw,B.fhb,B.fhc,B.c63,B.fhe,B.fla,B.ffA,B.ffB,B.c68,B.fGq,B.d_V,B.d_T,B.dNB,B.dMx,B.dMD,B.dMW,B.dMC,B.dN2,B.dNm,B.dNn,B.dNo,B.dMU,B.dNb,B.dNa,B.dNc,B.dNd,B.dNe,B.dNg,B.dNh,B.dN9,B.dMF,B.dMG,B.dMB,B.dMX,B.dMO,B.dMM,B.dN1,B.dNl,B.dNy,B.dNz,B.d_R,B.d_S,B.d0e,B.d0d,B.d08,B.d06,B.d04,B.d07,B.d09,B.d05,B.d_O,B.d_P,B.d_Q,B.d_K,B.d0n,B.d0o,B.d0h,B.c6a,B.c6b,B.fkN,B.flj,B.fli])
w(B.b2s,B.asl)
x(A.j3,[B.fBx,B.d_Z,B.d0_,B.fiX,B.fiY,B.fjr,B.dMu,B.dND,B.dNE,B.dNC,B.dNG,B.dNH,B.dNI,B.dNJ,B.dNK,B.dNL,B.dMv,B.dMw,B.fhd,B.d_U,B.dMZ,B.dN_,B.dMy,B.dMz,B.dME,B.dNp,B.dNq,B.dMT,B.dN3,B.dMI,B.dMV,B.dNf,B.dN4,B.dN5,B.dN6,B.dN7,B.dN8,B.dMH,B.dMA,B.dMY,B.dMR,B.dMK,B.dMP,B.dMQ,B.dMS,B.dMJ,B.dN0,B.dNi,B.dNj,B.dNk,B.dNw,B.dNx,B.dNs,B.dNt,B.dNr,B.dNu,B.dNv,B.d0a,B.d0b,B.d0c,B.d01,B.d03,B.d02,B.d_N,B.d_M,B.d_L,B.d_H,B.d_I,B.d_J,B.d0r,B.d0s,B.d0t,B.d0u,B.d0v,B.d0w,B.d0y,B.d0x,B.d0f,B.d0g,B.d0i,B.d0j,B.d0k,B.d0l,B.d_G,B.d0q,B.d0p,B.fkO])
x(A.m3,[B.abd,B.MK,B.a8v,B.NM,B.Wm,B.NL,B.Ex])
x(A.ag,[B.Yi,B.U_,B.U3,B.U0,B.Yh,B.U1,B.Yj,B.Yg,B.OW,B.Yl,B.Yf,B.Ym])
x(A.ah,[B.axU,B.aBP,B.aBS,B.aBQ,B.axT,B.aBR,B.axV,B.axS,B.axY,B.axW,B.axR,B.axX])
x(A.au,[B.abG,B.axQ,B.bbK,B.abe,B.abc,B.bbL])
x(A.ke,[B.c5L,B.c5H,B.c5P,B.c5Q,B.fCo,B.dMN,B.dML,B.dNA,B.d0m,B.c69,B.flk])
x(A.iO,[B.bh4,B.bt8])})()
A.jT(b.typeUniverse,JSON.parse('{"b2r":{"a8u":[]},"b2s":{"asl":[]},"Yi":{"ag":[],"r":[]},"axU":{"ah":["Yi"]},"abG":{"au":[],"r":[]},"U_":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"aBP":{"ah":["U_"]},"aBS":{"ah":["U3"]},"bh4":{"iO":[]},"U0":{"ag":[],"r":[]},"aBQ":{"ah":["U0"]},"Yh":{"ag":[],"r":[]},"U1":{"ag":[],"r":[]},"abe":{"au":[],"r":[]},"Yj":{"ag":[],"r":[]},"Yg":{"ag":[],"r":[]},"OW":{"ag":[],"r":[]},"Yl":{"ag":[],"r":[]},"abc":{"au":[],"r":[]},"Yf":{"ag":[],"r":[]},"Ym":{"ag":[],"r":[]},"axT":{"ah":["Yh"]},"bt8":{"iO":[]},"aBR":{"ah":["U1"]},"axQ":{"au":[],"r":[]},"bbK":{"au":[],"r":[]},"axV":{"ah":["Yj"]},"axS":{"ah":["Yg"]},"axY":{"ah":["OW"]},"axW":{"ah":["Yl"]},"axR":{"ah":["Yf"]},"axX":{"ah":["Ym"]},"bbL":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tW"),k:x("Lc()"),m:x("bo<n,n>"),F:x("qP"),g:x("ay<jh?>"),x:x("ay<~>"),V:x("P<ac>"),O:x("P<w>"),W:x("P<bh>"),Y:x("P<a3<n,R>>"),t:x("P<a3<n,@>>"),r:x("P<jh>"),w:x("P<+file,name(ls,n)>"),u:x("P<cP>"),s:x("P<n>"),E:x("P<iO>"),a:x("P<dD>"),p:x("P<r>"),Z:x("P<H>"),G:x("bh"),A:x("cq<ah<ag>>"),n:x("ai<jh>"),j:x("ai<@>"),I:x("ai<H>"),M:x("bu<n,n>"),P:x("a3<n,@>"),f:x("a3<@,@>"),o:x("iz"),e:x("i7G"),af:x("DM"),U:x("jh"),b:x("co"),C:x("aC"),aK:x("vO"),ab:x("Ew"),br:x("asl"),v:x("Wn"),N:x("n"),X:x("bn<N>"),Q:x("lD"),D:x("dD"),aw:x("cw<n>"),cd:x("a2<a3<n,@>>"),c7:x("r"),ch:x("bS<ai<jh>>"),aW:x("bS<dD?>"),aY:x("bS<~>"),cx:x("abd"),b1:x("bg<ai<jh>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAs"),bG:x("aDE"),q:x("mU"),B:x("pc<Ew>"),c6:x("pc<a8v>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("ai<jh>?"),aL:x("ai<@>?"),h:x("a3<n,@>?"),l:x("jh?"),R:x("aC?"),c:x("Wn?"),d:x("+answerQr,transfer(n,ay<ai<jh>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,MK,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaV?"),bk:x("aAs?"),ag:x("aDE?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aX_=new A.aA(C.aE,2,C.q,-1)
D.bSs=new A.a7(C.a3,C.a7,C.x,C.a13,null,null)
D.aYF=new A.o(null,null,null,C.m1,null,D.bSs,C.n)
D.b_5=new A.o(null,null,null,C.m1,null,E.Gi,C.n)
D.ab2=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.acf=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ad7=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeC=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f8Q=new A.x("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.fmI=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IG,null,null,null,null,null,null,null,null,null)
D.d_L=x([D.f8Q,C.an,D.fmI],y.p)
D.bk2=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_L,null)
D.fqU=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fcZ=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IG,null,null,null,null,null,null,null,null,null)
D.dew=x([D.fqU,C.an,D.fcZ],y.p)
D.bkb=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dew,null)
D.fng=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fgH=new A.x("Enter the access code and password from your organization.",null,G.IG,null,null,null,null,null,null,null,null,null)
D.dcv=x([D.fng,C.an,D.fgH],y.p)
D.bkl=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dcv,null)
D.bpY=new A.Q(16,10,16,28)
D.bq5=new A.Q(16,14,16,4)
D.bri=new A.Q(20,0,20,16)
D.brO=new A.Q(20,8,20,16)
D.ahj=new A.Q(24,22,24,20)
D.a_9=new A.a0(63394,"MaterialIcons",!1)
D.aki=new A.a0(63515,"MaterialIcons",!1)
D.bDh=new A.a0(983813,"MaterialIcons",!1)
D.bAz=new A.a0(62867,"MaterialIcons",!1)
D.bEg=new A.ae(D.bAz,44,C.c,null,null,null)
D.bFk=new A.ae(C.oB,null,C.ad,null,null,null)
D.bGH=new A.ae(C.iU,18,null,null,null,null)
D.bIn=new A.ae(D.a_9,26,C.c,null,null,null)
D.bIT=new A.ae(C.Br,null,null,null,null,null)
D.bJr=new A.ae(C.ya,null,null,null,null,null)
D.bKz=new A.ae(W.N8,null,null,null,null,null)
D.bKT=new A.ae(C.hk,16,null,null,null,null)
D.bOi=new A.ae(C.r_,16,null,null,null,null)
D.bEx=new A.ae(C.n8,null,null,null,null,null)
D.bP8=new A.e1(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bEx,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJZ=new A.ae(C.Fz,null,null,null,null,null)
D.bPd=new A.e1(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJZ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bES=new A.ae(H.G5,null,null,null,null,null)
D.bPo=new A.e1(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bES,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cC0=x([C.f7,C.aZ,C.aE],y.O)
D.bUj=new A.a7(C.ax,C.aC,C.x,D.cC0,null,null)
D.cBv=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pi=x([C.f7,C.aE],y.O)
D.Py=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mr=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d7u=x([C.pj,C.aE],y.O)
D.dYW={iceServers:0}
D.aF6={urls:0}
D.di6=new A.bo(D.aF6,["stun:stun.l.google.com:19302"],y.m)
D.di5=new A.bo(D.aF6,["stun:stun1.l.google.com:19302"],y.m)
D.cRz=x([D.di6,D.di5],A.ax("P<a3<n,n>>"))
D.dhr=new A.bo(D.dYW,[D.cRz],A.ax("bo<n,@>"))
D.Hl=new B.MK(0,"lanDirect")
D.QR=new B.MK(1,"cloudStash")
D.dsX=new B.MK(2,"inlineInstant")
D.QS=new B.MK(3,"webrtcLink")
D.yS=new B.MK(4,"videoCloud")
D.fmH=new A.x("Receive file",null,C.np,null,null,null,null,null,null,null,null,null)
D.crF=x([E.am1,C.ab,D.fmH],y.p)
D.eFo=new A.cl(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.crF,null)
D.e3w=new A.C(C.cf,D.eFo,null)
D.f05=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1J,null,null,null)
D.f9n=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f05,null,C.L,null,null,null,null,null,null,null)
D.e2P=new A.C(C.AV,D.f9n,null)
D.b3k=new A.cp(C.A,null,null,D.e2P,null)
D.e9d=new A.cK(0,null,0,28,null,null,D.b3k,null)
D.e9w=new B.a8v(0,"RTCDataChannelConnecting")
D.aKs=new B.a8v(1,"RTCDataChannelOpen")
D.aKt=new B.a8v(3,"RTCDataChannelClosed")
D.e9x=new B.Ex(0,"RTCIceConnectionStateNew")
D.e9y=new B.Ex(1,"RTCIceConnectionStateChecking")
D.e9z=new B.Ex(2,"RTCIceConnectionStateCompleted")
D.e9A=new B.Ex(3,"RTCIceConnectionStateConnected")
D.e9B=new B.Ex(4,"RTCIceConnectionStateCount")
D.e9C=new B.Ex(5,"RTCIceConnectionStateFailed")
D.e9D=new B.Ex(6,"RTCIceConnectionStateDisconnected")
D.aKu=new B.Ex(7,"RTCIceConnectionStateClosed")
D.aKv=new B.Wm(0,"RTCIceGatheringStateNew")
D.e9E=new B.Wm(1,"RTCIceGatheringStateGathering")
D.a55=new B.Wm(2,"RTCIceGatheringStateComplete")
D.a56=new B.NL(0,"RTCPeerConnectionStateClosed")
D.aKw=new B.NL(1,"RTCPeerConnectionStateFailed")
D.aKx=new B.NL(2,"RTCPeerConnectionStateDisconnected")
D.aKy=new B.NL(3,"RTCPeerConnectionStateNew")
D.aKz=new B.NL(4,"RTCPeerConnectionStateConnecting")
D.aKA=new B.NL(5,"RTCPeerConnectionStateConnected")
D.e9F=new B.NM(0,"RTCSignalingStateStable")
D.e9G=new B.NM(1,"RTCSignalingStateHaveLocalOffer")
D.e9H=new B.NM(2,"RTCSignalingStateHaveRemoteOffer")
D.e9I=new B.NM(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e9J=new B.NM(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aKB=new B.NM(5,"RTCSignalingStateClosed")
D.eJm=new A.at(160,48)
D.b4u=new A.fi(2,null,null,null,null,C.aE,null,null,null,null)
D.eKR=new A.a6(16,16,D.b4u,null)
D.fco=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eMh=new A.b1(D.fco,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fjD=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eMk=new A.b1(D.fjD,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frW=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eMr=new A.b1(D.frW,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fc1=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eMR=new A.b1(D.fc1,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnq=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNb=new A.b1(D.fnq,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foP=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eNj=new A.b1(D.foP,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftj=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eNy=new A.b1(D.ftj,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frn=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eND=new A.b1(D.frn,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsx=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.b1(D.fsx,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faJ=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eOV=new A.b1(D.faJ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fln=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ePf=new A.b1(D.fln,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fev=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ePL=new A.b1(D.fev,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftp=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePP=new A.b1(D.ftp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faZ=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ePV=new A.b1(D.faZ,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f9I=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eQ9=new A.b1(D.f9I,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f6H=new A.x("NGMY DOC SHARE",null,C.aOs,null,null,null,null,null,null,null,null,null)
D.f7Z=new A.x("Show this to sender",null,C.kv,null,null,null,null,null,null,null,null,null)
D.f8X=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fdm=new A.x("Organization settings",null,C.cw,null,null,null,null,null,null,null,null,null)
D.fdI=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.feF=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.ff8=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhU=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fkB=new A.x("Send to their Doc Share",null,C.nn,null,null,null,null,null,null,null,null,null)
D.fkU=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.flc=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.flI=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.flN=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fma=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fpg=new A.x("Share files & videos\nwith a scan.",null,C.aOt,null,null,null,null,null,null,null,null,null)
D.fpz=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fKJ=new B.Yf(null)
D.a86=new B.abd(0,"docShare")
D.a87=new B.abd(1,"gate")
D.TM=new B.abd(2,"gateNoIndividual")})();(function staticFields(){$.aMg=null
$.f7t=function(){var x=y.N
return A.V(x,x)}()
$.FG=A.V(y.N,y.D)
$.afb=A.V(y.N,A.ax("ls"))
$.Qb=A.V(y.N,y.D)
$.f80=A.V(y.N,A.ax("aaV"))
$.c62=A.V(y.S,A.ax("btu"))
$.h3b=1
$.hQs=null
$.hQr=null
$.hI_=null
$.fTq=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i8a","hki",()=>new B.ch7())
x($,"i65","fX_",()=>C.a.t(A.bt(A.bt(A.bt(A.Gg(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["0iKPR4T7YZyF0uFOoLH2uXVoN1Y="]=a.current})($__dart_deferred_initializers__);