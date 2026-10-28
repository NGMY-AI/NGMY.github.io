((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={chq:function chq(){},
hC6(d){var x=null,w=new B.b2u(d,D.e9v,new A.pc(x,x,y.c6),new A.pc(x,x,y.B))
w.bw1(d)
return w},
b2u:function b2u(d,e,f,g){var _=this
_.w=d
_.x=e
_.y=f
_.z=g
_.b=null},
chl:function chl(d){this.a=d},
chm:function chm(d){this.a=d},
chn:function chn(d){this.a=d},
chk:function chk(d){this.a=d},
cho:function cho(d){this.a=d},
hC7(d,e){var x=y.N
x=new B.b2v(d,e,A.T(x,y.e),A.T(x,y.z))
x.bw2(d,e)
return x},
b2v:function b2v(d,e,f,g){var _=this
_.as=d
_.at=e
_.ax=f
_.ay=g
_.y=_.c=_.cy=_.cx=_.CW=_.ch=null},
chr:function chr(d){this.a=d},
chs:function chs(d){this.a=d},
cht:function cht(d){this.a=d},
chu:function chu(d){this.a=d},
chv:function chv(d){this.a=d},
chw:function chw(d){this.a=d},
chx:function chx(d){this.a=d},
chy:function chy(d){this.a=d},
fTq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yj.Lq(x,"ngmy_doc_share_v1",new B.ffG(),1)},
hIC(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.cf(d))
if(y.J.b(d))return new Uint8Array(A.cf(J.eQ(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.cf(A.zD(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
Qv(d,e){return B.hXL(d,e)},
hXL(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qv=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMi
x=7
return A.b(o==null?$.aMi=B.fTq():o,$async$Qv)
case 7:s=g
r=new Uint8Array(A.cf(e))
q=J.mB(s,"blobs","readwrite")
C.iD.ma(J.mz(q,"blobs"),r,d)
x=8
return A.b(J.pl(q),$async$Qv)
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
return A.i($async$Qv,w)},
Qu(d){return B.hXK(d)},
hXK(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMi
x=7
return A.b(o==null?$.aMi=B.fTq():o,$async$Qu)
case 7:s=f
r=J.mB(s,"blobs","readonly")
x=8
return A.b(C.iD.za(J.mz(r,"blobs"),d),$async$Qu)
case 8:q=f
x=9
return A.b(J.pl(r),$async$Qu)
case 9:o=B.hIC(q)
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
return A.i($async$Qu,w)},
afW(d){return B.hXJ(d)},
hXJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afW=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMi
x=7
return A.b(p==null?$.aMi=B.fTq():p,$async$afW)
case 7:s=f
r=J.mB(s,"blobs","readwrite")
C.iD.Fj(J.mz(r,"blobs"),d)
x=8
return A.b(J.pl(r),$async$afW)
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
return A.i($async$afW,w)},
ffG:function ffG(){},
hKY(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmT(w,v))}return u},
hi6(d,e){var x,w={},v=A.aUC("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fBQ(w,v,e)
C.vC.y0(v,"change",new B.fBS(w,v,!1))
C.vC.y0(v,"cancel",new B.fBR(w))
$.eT.mh()
v.click()
A.bN(C.aft,new B.fBP(w),y.H)},
fBQ:function fBQ(d,e,f){this.a=d
this.b=e
this.c=f},
fBS:function fBS(d,e,f){this.a=d
this.b=e
this.c=f},
fBR:function fBR(d){this.a=d},
fBP:function fBP(d){this.a=d},
Cz(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$Cz=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdc()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gSZ()?3:4
break
case 3:x=5
return A.b(B.hdh(e,d,s,!0,!1,f,g,h,!1,i),$async$Cz)
case 5:x=1
break
case 4:x=6
return A.b(B.Q9(d,s,f,g,h,i),$async$Cz)
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
return A.b(B.HW(s,d),$async$Cz)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fb7(s,d),$async$Cz)
case 14:x=12
return A.b(r.hdh(q,p,o,n,m,l,k,j,a1,i),$async$Cz)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).c6(A.e7(new B.fC4(s,i,d,f,g,h),!1,null,y.H)),$async$Cz)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).c6(A.e7(new B.fC5(s,i,d,f,g,h),!1,null,y.H)),$async$Cz)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$Cz,w)},
Q9(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Q9=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYg(e),$async$Q9)
case 3:u=k
x=4
return A.b(B.anW(d,e,!1),$async$Q9)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HW(e,d),$async$Q9)
case 7:if(k){v=D.a87
x=1
break}x=8
return A.b(B.U6(e),$async$Q9)
case 8:v=t?D.TL:D.a88
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYe(d,e)){v=D.a87
x=1
break}x=11
return A.b(B.U6(e),$async$Q9)
case 11:v=t?D.TL:D.a88
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fOD(d,e)){v=D.a87
x=1
break}x=14
return A.b(B.U6(e),$async$Q9)
case 14:v=D.TL
x=1
break
case 13:v=t?D.TL:D.a88
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q9,w)},
fb7(d,e){var x=0,w=A.j(y.y),v
var $async$fb7=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYe(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYg(d),$async$fb7)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fb7,w)},
hdh(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).c6(A.e7(new B.fhi(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h8p(d,e,f,g,h,i,j){return new B.Ym(e,j,d,g,h,i,f,null)},
fje(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fje=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bX(C.K,null,new B.fjh(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fje)
case 3:r=f
t.S$=u
t.P$=0
s.S$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fje,w)},
fjJ(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fjJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bX(C.K,null,new B.fjL(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fjJ)
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
return A.i($async$fjJ,w)},
fTz(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fuq(d,e){var x=0,w=A.j(y.H),v
var $async$fuq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.U6(e),$async$fuq)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eI()
case 1:return A.h(v,w)}})
return A.i($async$fuq,w)},
fC4:function fC4(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fC5:function fC5(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abg:function abg(d,e){this.a=d
this.b=e},
fhi:function fhi(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Ym:function Ym(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axW:function axW(){this.c=this.a=this.d=null},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0e:function d0e(d){this.a=d},
d0g:function d0g(d){this.a=d},
d0f:function d0f(d){this.a=d},
d0j:function d0j(){},
d0i:function d0i(d){this.a=d},
abJ:function abJ(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAu:function aAu(d,e){this.a=d
this.b=e},
aDG:function aDG(d,e,f){this.a=d
this.b=e
this.c=f},
fjh:function fjh(d,e,f){this.a=d
this.b=e
this.c=f},
fjf:function fjf(d){this.a=d},
fjg:function fjg(d,e,f){this.a=d
this.b=e
this.c=f},
fjL:function fjL(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjK:function fjK(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5X(d,e,f,g,h){return B.hx1(d,e,f,g,h)},
hx1(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c5X=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c5Y(s,e,h,g,f,q),y.g),y.l),$async$c5X)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gU(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5X,w)},
aYb(d,e,f,g,h){return B.hx2(d,e,f,g,h)},
hx2(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYb=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atc("GET",d)
o=A.fL6()
if(o==null)o=new A.Lc(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.ES),$async$aYb)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BW(),$async$aYb)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.B9(q,h,o,e,f,"Received via QR")
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
return A.i($async$aYb,w)},
aYa(d){return B.hx_(d)},
hx_(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v1(d,null).cM(0,C.nM),$async$aYa)
case 7:s=f
if(s.b!==200){v=null
x=1
break}p=s
r=C.R.aG(0,A.iw(A.iv(p.e)).ca(0,p.w),null)
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
return A.i($async$aYa,w)},
c5W(d){return B.hx0(d)},
hx0(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c5W=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v1(d,null).cM(0,C.pB),$async$c5W)
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
return A.i($async$c5W,w)},
c5Y:function c5Y(d,e,f,g,h,i){var _=this
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
HU(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hx7(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HU(C.a.b0(u,v.length))}return null},
hx8(d){var x=B.HU(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hx3(){var x,w=$.pi(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fW(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a61(d){return B.hx4(d)},
hx4(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a61=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f1(d,null,!1,C.bG),$async$a61)
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
return A.i($async$a61,w)},
a62(d,e){return B.hx5(d,e)},
hx5(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a62=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cG,null),$async$a62)
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
return A.i($async$a62,w)},
B8(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$B8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$B8)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HU(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a63(r),$async$B8)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a61("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$B8)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HU(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$B8)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hx3()
x=14
return A.b(B.a63(m),$async$B8)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a62("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B8)
case 15:k=f
x=16
return A.b(B.a62("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$B8)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.ar("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$B8)
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
return A.i($async$B8,w)},
a63(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a63=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HU(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a61("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a63)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a63,w)},
a64(d,e,f,g){return B.hx9(d,e,f,g)},
hx9(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a64=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HU(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a63(r),$async$a64)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c63())>1048576||g.b7(d,new B.c64())){v=B.E2(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gK(q.split("@"))+"\u2026")
x=4
return A.b(B.a6f("myCode",d,a0),$async$a64)
case 4:u=a3
try{t=C.R.aG(0,u,null)
if(y.f.b(t)){s=J.q(t,"files")
if(!y.j.b(s)||J.cl(s)||J.ad(s)!==g.gM(d)){e.$1("Could not read file data. For large files use NGMY Transfer or try again.")
v=!1
x=1
break}}}catch(a1){e.$1("Could not prepare files for sending.")
v=!1
x=1
break}if(J.ad(u)>25165824){e.$1("Large file \u2014 switching to cloud storage\u2026")
v=B.E2(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYj(u,g.gM(d),a0),$async$a64)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pi().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c65(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYc(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a64)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a64,w)},
E2(d,e,f,g,h){return B.hx6(d,e,f,g,h)},
hx6(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E2=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$E2)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c6_())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pi().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gaf(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gU(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.HY(a9,q)
a0=new A.JN(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$E2)
case 11:if(!b1){x=10
break}n=a0.gU(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eW().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oM(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9y(a1.a,a4,"media",a1.d,a2).wE(m,n,new A.Dl(!0,q.c)),$async$E2)
case 12:J.ch(r,m);++o
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
return A.b(B.aOL(r),$async$E2)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c60(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYc(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$E2)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOL(r),$async$E2)
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
aYc(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a61(t),$async$aYc)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c5Z(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a62(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYc,w)},
MO(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MO=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a61("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MO)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cl(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
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
return A.b(B.aYd(k,a0),$async$MO)
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
return A.b(B.aYi(h),$async$MO)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ud(g,a0),$async$MO)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c61(),q),n)
d=A.B(new A.a2(r,new B.c62(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dc(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a62("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MO)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MO,w)},
aYd(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cl(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gU(u)
if(!r.b(p)){x=3
break}o=J.a5(p)
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
break}i=B.i0x(k,j)
C.d.v(s,i)
x=5
return A.b(B.Cx(l,m,"Received via My Code",t,e,i),$async$aYd)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOL(s),$async$aYd)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYd,w)},
c63:function c63(){},
c64:function c64(){},
c65:function c65(){},
c6_:function c6_(){},
c60:function c60(){},
c5Z:function c5Z(){},
c61:function c61(){},
c62:function c62(){},
fC1(d,e){var x=0,w=A.j(y.H)
var $async$fC1=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).c6(A.e7(new B.fC2(e),!1,null,y.H)),$async$fC1)
case 2:return A.h(null,w)}})
return A.i($async$fC1,w)},
bBB(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBB=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cl(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).c6(A.e7(new B.fC3(g,e,f),!1,null,y.y)),$async$bBB)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBB,w)},
fC2:function fC2(d){this.a=d},
fC3:function fC3(d,e,f){this.a=d
this.b=e
this.c=f},
U3:function U3(d,e){this.c=d
this.a=e},
aBR:function aBR(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dMQ:function dMQ(d,e){this.a=d
this.b=e},
U7:function U7(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBU:function aBU(d,e){var _=this
_.d=d
_.e=e
_.f=!1
_.c=_.a=_.r=null},
dNZ:function dNZ(d){this.a=d},
dO_:function dO_(d){this.a=d},
dO0:function dO0(d){this.a=d},
dNY:function dNY(d,e){this.a=d
this.b=e},
dO1:function dO1(d){this.a=d},
dO2:function dO2(d){this.a=d},
dO3:function dO3(d,e){this.a=d
this.b=e},
dO4:function dO4(d,e){this.a=d
this.b=e},
dO5:function dO5(d,e){this.a=d
this.b=e},
dO6:function dO6(d){this.a=d},
dO9:function dO9(){},
dO7:function dO7(d){this.a=d},
dO8:function dO8(d,e){this.a=d
this.b=e},
bha:function bha(){},
U4:function U4(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBS:function aBS(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dMR:function dMR(d){this.a=d},
dMS:function dMS(d){this.a=d},
fOE(d){var x=d.hN
if(x>=0)return C.o.N(x)
return 10},
hxb(d){var x=d.kA
if(x>=0)return x
return 4.99},
hxa(d){var x=d.li,w=y.N
w=x.iV(x,new B.c67(),w,w)
return w},
h3u(d){var x=d.kB,w=y.N
w=x.iV(x,new B.c68(),w,w)
return w},
aYg(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aYg)
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
return A.i($async$aYg,w)},
a66(d,e){var x=0,w=A.j(y.H),v,u
var $async$a66=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a66)
case 4:x=3
return A.b(g.ar("String","ngmy_doc_share_path_"+u,e),$async$a66)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a66,w)},
U6(d){var x=0,w=A.j(y.H),v,u
var $async$U6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$U6)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$U6)
case 3:case 1:return A.h(v,w)}})
return A.i($async$U6,w)},
fOD(d,e){var x,w,v
if(B.hxb(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hxa(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYe(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h3u(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h3v(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h3u(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kB=w},
anX(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$anX)
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
return A.i($async$anX,w)},
anY(d){var x=0,w=A.j(y.H),v,u,t
var $async$anY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anX(d),$async$anY)
case 3:u=f
x=5
return A.b(A.az(),$async$anY)
case 5:x=4
return A.b(f.ar("Int","ngmy_doc_share_usage_"+t,u+1),$async$anY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anY,w)},
anW(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fOE(d)
if(u<=0){v=!1
x=1
break}if(B.fOD(d,e)){v=!1
x=1
break}x=3
return A.b(B.anX(e),$async$anW)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anW,w)},
aYf(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HW(e,d),$async$aYf)
case 3:if(g){v=-1
x=1
break}u=B.fOE(d)
if(u<=0){v=-1
x=1
break}if(B.fOD(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anX(e),$async$aYf)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYf,w)},
c6a(d,e,f){var x=0,w=A.j(y.y),v
var $async$c6a=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HW(e,d),$async$c6a)
case 3:if(h){v=!1
x=1
break}v=B.anW(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6a,w)},
c69(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c69=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
x=3
return A.b(B.c6a(d,u,i.gSZ()),$async$c69)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c69,w)},
a65(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a65=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdc()
if(i.gSZ()){v=!0
x=1
break}if(B.aYe(d,u)){v=!0
x=1
break}x=5
return A.b(A.lc(u,C.Rc),$async$a65)
case 5:x=k?3:4
break
case 3:B.h3v(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a65)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kP(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rc,"Doc Share for Organizations"),$async$a65)
case 7:if(!k){v=!1
x=1
break}B.h3v(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a65)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a65,w)},
c67:function c67(){},
c68:function c68(){},
fCE(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fCE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fCE)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f7P.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hM([r],e.c))
s.toString
$.f7P.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCE,w)},
i2K(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f7P.bm($.f7P,new B.fCG(d))},
fCG:function fCG(d){this.a=d},
f9c(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f9c=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],f))
s.toString
u=A.n1(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.ja,null,y.H),$async$f9c)
case 3:C.zE.f8(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eT.mh()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9c,w)},
aeM(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeM=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f8m.n(0,d,new B.aaY(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeM)
case 3:x=2
return A.b(h.ar("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aeM)
case 2:return A.h(null,w)}})
return A.i($async$aeM,w)},
aeG(d){return B.hMN(d)},
hMN(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeG=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f8m.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aeG)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cl(s)){v=null
x=1
break}o=J.b6(s,new B.fcT(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.aaY(r)
$.f8m.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeG,w)},
Q_(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$Q_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.cf(e))
$.FH.n(0,d,u)
x=3
return A.b(B.Qv(d,u),$async$Q_)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q_,w)},
aMD(d){return B.hML(d)},
hML(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMD=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FH.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qu(d),$async$aMD)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FH.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aMD)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cE.aJ(r)
x=!J.cl(q)?9:10
break
case 9:B.Q_(d,q)
x=11
return A.b(J.hC(s,d),$async$aMD)
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
return A.i($async$aMD,w)},
hIZ(d){if(d==null)return A.f6(null,y.K)
if(y.J.b(d))return A.f6(new Uint8Array(A.cf(J.eQ(d,0,null))),y.K)
if(y.D.b(d))return A.f6(new Uint8Array(A.cf(d)),y.K)
if(y.Q.b(d))return A.f6(new Uint8Array(A.cf(A.zD(d,0,null))),y.K)
if(y.I.b(d))return A.f6(new Uint8Array(A.cf(d)),y.K)
return A.f6(null,y.K)},
a0L(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bU(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fhu(r,t),!1,s)
A.fH(r,"error",new B.fhv(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ia(0,C.Lo,new B.fhw())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0L,w)},
aMX(d,e,f){return B.hP1(d,e,f)},
hP1(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMX=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0L(i),$async$aMX)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qv(o,p),$async$aMX)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aeM(k,j,s),$async$aMX)
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
return A.i($async$aMX,w)},
aMW(d,e,f){return B.hP0(d,e,f)},
hP0(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMW=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMX(d,e,f),$async$aMW)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0L(f),$async$aMW)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FH.n(0,s,r)
$.Qg.n(0,s,r)
x=11
return A.b(B.Q_(s,r),$async$aMW)
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
return A.i($async$aMW,w)},
B9(d,e,f,g,h,i){return B.hxk(d,e,f,g,h,i)},
hxk(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$B9=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jh(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYm(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.Q_(s,d),$async$B9)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$B9)
case 10:r=a2
x=11
return A.b(r.ar("String",s,C.cS.gcv().aJ(d)),$async$B9)
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
return A.b(B.Ac(e),$async$B9)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.FT(e,j),$async$B9)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$B9,w)},
U8(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U8=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ac(d),$async$U8)
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
k=B.h3x(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jh(m,n,k,l,j,"From folder",null,B.aYm(),null)
$.afe.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0L(o),$async$U8)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FH.n(0,h,g)
$.Qg.n(0,h,g)
B.Q_(h,g)
x=9
break
case 10:x=11
return A.b(B.aMW(d,m,o),$async$U8)
case 11:case 9:r.L(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FT(d,t),$async$U8)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U8,w)},
fOI(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fOI=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h3x(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HX(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.B9(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOI,w)},
HX(d,e,f,g,h,i){return B.hxj(d,e,f,g,h,i)},
hxj(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HX=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JN(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HX)
case 8:if(!a6){x=7
break}m=j.gU(0)
if(J.cl(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.cf(J.R2(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kB(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qv(k,l),$async$HX)
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
return A.b(j.a8(0),$async$HX)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qv(k,new Uint8Array(A.cf(n))),$async$HX)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeM(r,q,g),$async$HX)
case 16:f=new B.jh(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYm(),null)
x=17
return A.b(B.Ac(d),$async$HX)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.FT(d,e),$async$HX)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HX,w)},
Ua(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Ua=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.afe.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0L(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeG(s),$async$Ua)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qu(u[o]),$async$Ua)
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
v=A.zD(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qg.h(0,s)
if(i==null)i=$.FH.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.rc(d,e),$async$Ua)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qg.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zD(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ua,w)},
h3x(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
rc(d,e){return B.hxl(d,e)},
hxl(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$rc=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qg.h(0,f)
if(e==null)e=$.FH.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.afe.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0L(s),$async$rc)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FH.n(0,f,r)
$.Qg.n(0,f,r)
B.Q_(f,r)
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
return A.b(B.aeG(f),$async$rc)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awK(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qu(g[l]),$async$rc)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.L(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.amY()
if(!C.aG.gam(r)){$.FH.n(0,f,r)
$.Qg.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aMD(f),$async$rc)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qg.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.Ua(a0,a1,0,g),$async$rc)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.cf(i))
$.FH.n(0,f,h)
$.Qg.n(0,f,h)
B.Q_(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$rc,w)},
hxo(d){var x,w,v=$.afe.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hxp(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hM([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hxm(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ao3(d,e,f,g,h){return B.hxn(d,e,f,g,h)},
hxn(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ao3=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.afe.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0L(s),$async$ao3)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.rc(g,e),$async$ao3)
case 11:p=j
if(p==null||p.length===0){v=!1
x=1
break}r=p
case 8:f.$2(J.ad(r)/2|0,J.ad(r))
n=$.eW().b
n===$&&A.c()
n=n.at
n===$&&A.c()
x=12
return A.b(n.i4(d).wE(h,r,new A.Dl(!0,e.c)),$async$ao3)
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
return A.i($async$ao3,w)},
h3z(d,e,f,g,h){var x,w,v,u,t=$.h3y
$.h3y=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c6l.n(0,t,new B.btA(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awK(u)))
return t},
fOJ(d){var x=0,w=A.j(y.H)
var $async$fOJ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOJ,w)},
HY(d,e){var $async$HY=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.afe.h(0,h)
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
return A.pU(B.Ua(d,e,p,o<q?o:q),$async$HY,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pU(A.Fe(n),$async$HY,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pU(B.aeG("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$HY,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pU(B.Qu(h[l]),$async$HY,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pU(A.Fe(k),$async$HY,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pU(B.rc(d,e),$async$HY,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pU(A.Fe(A.zD(j,p,o<i?o:i)),$async$HY,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pU(null,0,w)
case 2:return A.pU(t.at(-1),1,w)}})
var x=0,w=A.hca($async$HY,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hdZ(w)},
aYo(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c6l.h(0,d)
if(t==null||J.cl(e)){v=!1
x=1
break}u=t.x
u.L(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3H(),$async$aYo)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYo,w)},
U9(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$U9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6l.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3H(),$async$U9)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeM(r.c,u,r.z),$async$U9)
case 4:t=new B.jh(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYm(),null)
u=r.a
x=5
return A.b(B.Ac(u),$async$U9)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.FT(u,s),$async$U9)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U9,w)},
a6c(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6c=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6l.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afW(u[s]),$async$a6c)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6c,w)},
c6n(d,e,f){var x=0,w=A.j(y.H)
var $async$c6n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byC(d,e,f),$async$c6n)
case 2:return A.h(null,w)}})
return A.i($async$c6n,w)},
c6o(d,e,f){var x=0,w=A.j(y.H)
var $async$c6o=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byD(d,e,f),$async$c6o)
case 2:return A.h(null,w)}})
return A.i($async$c6o,w)},
E3(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E3=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ac(d),$async$E3)
case 2:p=g
J.nl(p,new B.c6m(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FH.W(0,v)
$.afe.W(0,e)
x=3
return A.b(B.aeG(v),$async$E3)
case 3:u=g
$.f8m.W(0,v)
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
return A.b(B.afW(s[q]),$async$E3)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afW(v),$async$E3)
case 13:x=14
return A.b(B.FT(d,p),$async$E3)
case 14:return A.h(null,w)}})
return A.i($async$E3,w)},
aYn(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYn=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.rc(d,e),$async$aYn)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f9c(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYn,w)},
Ac(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ac=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ac)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fhx(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ac,w)},
FT(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FT=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FT)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.flt(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.ar("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FT)
case 3:return A.h(null,w)}})
return A.i($async$FT,w)},
byC(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byC=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ac(d),$async$byC)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffX(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCs(f))
x=4
return A.b(B.FT(d,u),$async$byC)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byC,w)},
byD(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ac(d),$async$byD)
case 3:u=h
t=J.cE(u)
s=t.ba(u,new B.ffY(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cER(f))
x=4
return A.b(B.FT(d,u),$async$byD)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byD,w)},
aaY:function aaY(d){this.a=d},
fcT:function fcT(){},
fhu:function fhu(d,e){this.a=d
this.b=e},
fhv:function fhv(d){this.a=d},
fhw:function fhw(){},
c6m:function c6m(d){this.a=d},
btA:function btA(d,e,f,g,h,i,j,k,l){var _=this
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
fhx:function fhx(){},
flt:function flt(){},
ffX:function ffX(d){this.a=d},
ffY:function ffY(d){this.a=d},
a6d(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b7(d,new B.c6r())?3:4
break
case 3:x=5
return A.b(B.aYp(d,e),$async$a6d)
case 5:u=g
if(u!=null){t=u.c
B.MQ(d,u.b,e,t)}v=u
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
return A.b(B.aYk(s),$async$a6d)
case 10:case 9:if(g){v=new A.Pn(1,D.QQ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.Ub(d,e),$async$a6d)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Ug(!0,!0,d,e),$async$a6d)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MQ(d,D.yR,e,t)
v=new A.Pn(p,D.yR,t)
x=1
break}v=B.c6q(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6d,w)},
Ub(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$Ub=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6f(null,d,e),$async$Ub)
case 3:p=g
try{u=C.R.aG(0,p,null)
t=y.f.b(u)?J.q(u,"files"):null
if(!y.j.b(t)||J.cl(t)){v=null
x=1
break}}catch(o){v=null
x=1
break}if(J.ad(p)>25165824){v=null
x=1
break}x=4
return A.b(B.aYj(p,d.length,e),$async$Ub)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c6o(e,C.d.gK(d).a,r.b),$async$Ub)
case 7:case 6:q=r.a
x=8
return A.b(B.MQ(d,D.QQ,e,q),$async$Ub)
case 8:v=new A.Pn(d.length,D.QQ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ub,w)},
Uc(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Uc=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mm(D.mr)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6e(d,e),$async$Uc)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c6j(s,d,e,t),$async$Uc)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYk(t),$async$Uc)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.rc(e,d),$async$Uc)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.Ub(A.a([d],y.r),e),$async$Uc)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Uc,w)},
Ue(){var x=0,w=A.j(y.H)
var $async$Ue=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fOC(),$async$Ue)
case 2:x=3
return A.b(B.aP2(),$async$Ue)
case 3:return A.h(null,w)}})
return A.i($async$Ue,w)},
a6e(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6e=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYm()
x=3
return A.b(B.c6n(e,d.a,u),$async$a6e)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6e,w)},
MQ(d,e,f,g){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n
var $async$MQ=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:n=d.length
if(n===0||C.a.i(g).length===0){x=1
break}u=C.a.i(g)
t=e===D.QQ&&C.a.a0(u,"NGMYDOCSYNC1|")?C.a.i(C.a.b0(u,13)):null
s=e.a,r=t!=null,q=0
case 3:if(!(q<d.length)){x=5
break}p=d[q]
x=6
return A.b(B.a6e(p,f),$async$MQ)
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
return A.b(B.c6i(o,p,u,f),$async$MQ)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c6j(o,p,f,t),$async$MQ)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c6h(o,u,p,f),$async$MQ)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MQ,w)},
aYp(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6p(e,d),$async$aYp)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Ug(!1,!0,d,e),$async$aYp)
case 4:u=g
if(u!=null){t=u.b
v=new A.Pn(u.a,D.yR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYp,w)},
c6p(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c6p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.Ua(d,s,0,1),$async$c6p)
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
return A.i($async$c6p,w)},
c6q(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c6q=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gK(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6f(null,d,e),$async$c6q)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h3w(u)
if(t.length>800){v=null
x=1
break}v=new A.Pn(d.length,D.dsV,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6q,w)},
ao4(d,e,f){return B.hxs(d,e,f)},
hxs(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ao4=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.cZ(g,"\ufeff"))g=J.mA(g,1)
x=B.fOH(g)?3:4
break
case 3:x=5
return A.b(B.c6k(g),$async$ao4)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.cZ(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mA(g,13))
try{k=B.E4(d,a0,s)
v=k
x=1
break}catch(a1){r=A.a9(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.cZ(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mA(g,13))
u=9
x=12
return A.b(B.aYi(q),$async$ao4)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ud(p,a0)
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
case 11:case 7:if(J.cZ(g,"NGMYDOCSYNC0|"))try{n=B.fOG(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ud(n,a0)
v=k
x=1
break}catch(a1){m=A.a9(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.cZ(g,"N2|")){v=B.HZ(C.a.i(J.mA(g,3)),d,a0)
x=1
break}if(J.cZ(g,"NGMYDOCSYNC2|")){v=B.HZ(C.a.i(J.mA(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.HZ(h,d,a0)
x=1
break}if(J.eZ(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ud(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao4,w)},
HZ(d,e,f){return B.hxq(d,e,f)},
hxq(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$HZ=A.e(function(a3,a4){if(a3===1){t.push(a4)
x=u}for(;;)switch(x){case 0:g=C.a.i(a0)
f=A.af("/+$",!0,!1,!1,!1)
e=A.aK(g,f,"")
if(C.a.a0(e,"N2|"))e=C.a.i(C.a.b0(e,3))
if(C.a.a0(e,"NGMYDOCSYNC2|"))e=C.a.i(C.a.b0(e,13))
if(!C.a.a0(e,"http://")&&!C.a.a0(e,"https://"))e="http://"+e
if(C.a.cb(e,"manifest.json")){g=C.a.ap(e,0,e.length-13)
f=A.af("/+$",!0,!1,!1,!1)
j=A.aK(g,f,"")}else j=e
s=j
r=A.cw(A.t(s)+"/manifest.json",0,null)
q=A.cw(A.t(s)+"/bundle.json",0,null)
u=4
x=7
return A.b(B.aYa(r),$async$HZ)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYa(A.cw(s,0,null)),$async$HZ)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cl(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c5X(o,r,a1,n,a2),$async$HZ)
case 11:m=a4
x=J.cl(m)?12:13
break
case 12:x=14
return A.b(B.c5W(q),$async$HZ)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ud(l,a2),$async$HZ)
case 17:i=a4
m=i==null?A.a([],y.r):i
case 16:case 13:g=J.cl(m)?null:m
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
return A.i($async$HZ,w)},
a6f(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6f=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gU(u)
x=5
return A.b(B.rc(f,r),$async$a6f)
case 5:q=h
if(q==null||q.length===0){x=3
break}p.push(A.F(["name",r.b,"mime",r.c,"sizeBytes",r.d,"data",C.cS.gcv().aJ(q)],t,s))
x=3
break
case 4:u=A.T(t,y.C)
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
return A.i($async$a6f,w)},
Ud(d,e){return B.hxr(d,e)},
hxr(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ud=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
o=J.z(p,"myCode")?"Received via My Code":"Received via QR"
n=A.a([],y.r)
e=J.aV(r)
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
return A.b(B.B9(i,a3,d,k,l,o),$async$Ud)
case 9:h=a5
if(h!=null)J.ch(n,h)
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
return A.i($async$Ud,w)},
MP:function MP(d,e){this.a=d
this.b=e},
c6r:function c6r(){},
a0l(d){var x=A.P(d).ax.a===C.I,w=x?D.ad9:D.ab3,v=x?D.aeD:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.ach:C.aL
return new A.aET([w,s,v,u,t,x?C.f7:C.bU])},
hiO(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fGI(e),d,null,!0,!0,y.N)},
c66(d,e,f,g,h,i,j,k,l){return new B.U5(e,l,d,f,k,j,g,h,i,null)},
Yo(d,e,f,g,h,i,j){return new B.bbQ(g,h,j,e,i,d,f,null)},
fGI:function fGI(d){this.a=d},
Yl:function Yl(d,e){this.c=d
this.a=e},
axV:function axV(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d0d:function d0d(d){this.a=d},
d0b:function d0b(d){this.a=d},
d0c:function d0c(d){this.a=d},
bte:function bte(){},
U5:function U5(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBT:function aBT(d,e){var _=this
_.d=d
_.e=!1
_.f=null
_.r=e
_.c=_.a=_.w=null},
dNX:function dNX(d){this.a=d},
dNk:function dNk(d,e){this.a=d
this.b=e},
dNl:function dNl(d,e){this.a=d
this.b=e},
dMU:function dMU(d,e,f){this.a=d
this.b=e
this.c=f},
dMT:function dMT(d){this.a=d},
dMV:function dMV(d,e){this.a=d
this.b=e},
dN_:function dN_(d,e,f){this.a=d
this.b=e
this.c=f},
dMZ:function dMZ(d){this.a=d},
dNL:function dNL(d,e){this.a=d
this.b=e},
dNM:function dNM(d){this.a=d},
dNh:function dNh(d,e,f){this.a=d
this.b=e
this.c=f},
dNe:function dNe(d,e,f,g,h){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h},
dMY:function dMY(d){this.a=d},
dNp:function dNp(d){this.a=d},
dNo:function dNo(){},
dN3:function dN3(d){this.a=d},
dNI:function dNI(d,e){this.a=d
this.b=e},
dNJ:function dNJ(d,e){this.a=d
this.b=e},
dNK:function dNK(d,e){this.a=d
this.b=e},
dNf:function dNf(d,e){this.a=d
this.b=e},
dNg:function dNg(d,e){this.a=d
this.b=e},
dNB:function dNB(d,e){this.a=d
this.b=e},
dNx:function dNx(d){this.a=d},
dNw:function dNw(d){this.a=d},
dNy:function dNy(){},
dNz:function dNz(){},
dNA:function dNA(d,e){this.a=d
this.b=e},
dNC:function dNC(){},
dND:function dND(d){this.a=d},
dNv:function dNv(d,e){this.a=d
this.b=e},
dNq:function dNq(d){this.a=d},
dNr:function dNr(d){this.a=d},
dNs:function dNs(d){this.a=d},
dNt:function dNt(d){this.a=d},
dNu:function dNu(d){this.a=d},
dN0:function dN0(){},
dN1:function dN1(d){this.a=d},
dN2:function dN2(d,e){this.a=d
this.b=e},
dMX:function dMX(d,e){this.a=d
this.b=e},
dMW:function dMW(d,e,f){this.a=d
this.b=e
this.c=f},
dNi:function dNi(d){this.a=d},
dNj:function dNj(d,e,f){this.a=d
this.b=e
this.c=f},
dNc:function dNc(d,e){this.a=d
this.b=e},
dN8:function dN8(d){this.a=d},
dN5:function dN5(d,e,f){this.a=d
this.b=e
this.c=f},
dN9:function dN9(d){this.a=d},
dNa:function dNa(d){this.a=d},
dNb:function dNb(){},
dNd:function dNd(d,e){this.a=d
this.b=e},
dN6:function dN6(d){this.a=d},
dN4:function dN4(d,e,f){this.a=d
this.b=e
this.c=f},
dN7:function dN7(){},
dNn:function dNn(d){this.a=d},
dNm:function dNm(d,e){this.a=d
this.b=e},
dNH:function dNH(d,e){this.a=d
this.b=e},
dNE:function dNE(d){this.a=d},
dNF:function dNF(d,e){this.a=d
this.b=e},
dNG:function dNG(d){this.a=d},
dNU:function dNU(d){this.a=d},
dNS:function dNS(d){this.a=d},
dNT:function dNT(d){this.a=d},
dNV:function dNV(){},
dNW:function dNW(d,e){this.a=d
this.b=e},
dNO:function dNO(d,e){this.a=d
this.b=e},
dNP:function dNP(d,e,f){this.a=d
this.b=e
this.c=f},
dNN:function dNN(d,e,f){this.a=d
this.b=e
this.c=f},
dNQ:function dNQ(d,e){this.a=d
this.b=e},
dNR:function dNR(d,e){this.a=d
this.b=e},
axS:function axS(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbP:function bbP(d,e,f){this.c=d
this.d=e
this.a=f},
d09:function d09(){},
d0a:function d0a(){},
abh:function abh(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
d0x:function d0x(){},
d0w:function d0w(d){this.a=d},
Yn:function Yn(d,e,f){this.c=d
this.d=e
this.a=f},
axX:function axX(){var _=this
_.e=_.d=null
_.f=!0
_.r=null
_.w=!1
_.c=_.a=null},
d0t:function d0t(d){this.a=d},
d0u:function d0u(d,e,f){this.a=d
this.b=e
this.c=f},
d0v:function d0v(d,e){this.a=d
this.b=e},
d0r:function d0r(d,e){this.a=d
this.b=e},
d0p:function d0p(d){this.a=d},
d0n:function d0n(d){this.a=d},
d0k:function d0k(d){this.a=d},
d0q:function d0q(d){this.a=d},
d0m:function d0m(d){this.a=d},
d0s:function d0s(d){this.a=d},
d0o:function d0o(d){this.a=d},
d0l:function d0l(d){this.a=d},
Yk:function Yk(d,e,f){this.c=d
this.d=e
this.a=f},
axU:function axU(d,e,f){var _=this
_.d=d
_.e=!0
_.f=!1
_.r=null
_.w=e
_.x=f
_.c=_.a=null},
d06:function d06(d){this.a=d},
d05:function d05(d,e){this.a=d
this.b=e},
d07:function d07(d){this.a=d},
d04:function d04(d,e){this.a=d
this.b=e},
d08:function d08(d){this.a=d},
d03:function d03(d,e){this.a=d
this.b=e},
d0_:function d0_(d){this.a=d},
d00:function d00(d){this.a=d},
d01:function d01(d,e){this.a=d
this.b=e},
d02:function d02(d){this.a=d},
P0:function P0(d,e,f){this.c=d
this.d=e
this.a=f},
ay_:function ay_(){var _=this
_.e=_.d=null
_.f=!0
_.c=_.a=_.r=null},
d0K:function d0K(d){this.a=d},
d0L:function d0L(d){this.a=d},
d0M:function d0M(d){this.a=d},
d0N:function d0N(d){this.a=d},
d0O:function d0O(d,e){this.a=d
this.b=e},
d0P:function d0P(d){this.a=d},
d0R:function d0R(d){this.a=d},
d0Q:function d0Q(d){this.a=d},
Yp:function Yp(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axY:function axY(d){var _=this
_.d=d
_.f=_.e=null
_.w=_.r=!1
_.x=0
_.c=_.a=null},
d0G:function d0G(d,e){this.a=d
this.b=e},
d0H:function d0H(d,e){this.a=d
this.b=e},
d0y:function d0y(d,e,f){this.a=d
this.b=e
this.c=f},
d0z:function d0z(d){this.a=d},
d0A:function d0A(){},
d0F:function d0F(){},
d0B:function d0B(d,e){this.a=d
this.b=e},
d0C:function d0C(d,e){this.a=d
this.b=e},
d0D:function d0D(d,e){this.a=d
this.b=e},
d0E:function d0E(d,e){this.a=d
this.b=e},
abf:function abf(d,e){this.c=d
this.a=e},
d_Z:function d_Z(d){this.a=d},
Yj:function Yj(d){this.a=d},
axT:function axT(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yq:function Yq(d,e){this.c=d
this.a=e},
axZ:function axZ(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d0J:function d0J(d){this.a=d},
d0I:function d0I(d){this.a=d},
bbQ:function bbQ(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hxt(){var x,w=$.pi(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fW(v)},
MR(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$MR)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f1("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MR)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$MR,w)},
a6g(d){return B.hxu(d)},
hxu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6g)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6g)
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
return A.i($async$a6g,w)},
Uf(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Uf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MR(),$async$Uf)
case 3:s=g
r=J.a5(s)
q=r.h(s,d)
if(!y.f.b(q)){x=1
break}u=y.N
t=y.z
t=A.dU(A.a1(q,u,t),u,t)
t.v(0,e)
t.n(0,"updatedAt",new A.S(Date.now(),0,!1).a6().ac())
r.n(s,d,t)
x=4
return A.b(B.a6g(s),$async$Uf)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Uf,w)},
Ug(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Ug=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c2(),$async$Ug)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c6t(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hxt()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.B(new A.K(u,new B.c6u(s),t),t.k("ak.E"))
x=6
return A.b(B.MR(),$async$Ug)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6g(q),$async$Ug)
case 7:x=8
return A.b(B.a6h(r,u,g,s),$async$Ug)
case 8:v=new A.bnk(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ug,w)},
ao5(d){var x=0,w=A.j(y.y),v,u,t
var $async$ao5=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MR(),$async$ao5)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao5,w)},
c6v(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c6v=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MR(),$async$c6v)
case 3:s=r.q(f,C.a.i(d))
if(!y.f.b(s)){v=null
x=1
break}u=J.a5(s)
t=u.h(s,"uploadProgress")
if(typeof t=="number"){v=t
x=1
break}v=J.z(u.h(s,"ready"),!0)?1:0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6v,w)},
a6h(d,e,f,g){return B.hxv(d,e,f,g)},
hxv(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6h=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ao3("media",r,new B.c6s(s,e,g),f,q),$async$a6h)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Uf(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6h)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Uf(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6h)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.a9(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Uf(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6h)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6h,w)},
E4(d,e,f){return B.hxw(d,e,f)},
hxw(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E4=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c2(),$async$E4)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ao5(b3),$async$E4)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kg,null,g),$async$E4)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ao5(b3),$async$E4)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MR(),$async$E4)
case 10:e=c0
g=J.a5(e)
d=g.h(e,b3)
a0=y.f
if(!a0.b(d)){v=null
x=1
break}a1=J.a5(d)
a2=A.aJ(a1.h(d,"usesRemaining"))
a3=a2==null?null:C.k.N(a2)
if(a3==null)a3=0
if(a3<=0){v=null
x=1
break}a4=a1.h(d,"files")
if(!y.j.b(a4)||J.cl(a4)){v=null
x=1
break}a1=a1.h(d,"ownerEmail")
s=J.k(a1==null?"":a1)
a1=J.a5(a4)
r=a1.gM(a4)
q=0
p=A.a([],y.r)
a2=a1.gaf(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gU(a2)
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
a8=$.eW().b
a8===$&&A.c()
a8=a8.at
a8===$&&A.c()
a9=a8.c
a9===$&&A.c()
b0=A.oM(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9y(a8.a,b0,"media",a8.d,a9).Cg(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYb(k,n,o,s,b7),$async$E4)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
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
a2=$.eW().b
a2===$&&A.c()
a2=a2.at
a2===$&&A.c()
a6=a2.c
a6===$&&A.c()
a8=A.oM(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9y(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E4)
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
a0=A.dU(A.a1(d,a5,a0),a5,a0)
a0.n(0,"usesRemaining",b2)
a0.n(0,"lastUsedAt",new A.S(Date.now(),0,!1).a6().ac())
g.n(e,b3,a0)
case 19:x=32
return A.b(B.a6g(e),$async$E4)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E4,w)},
c6t:function c6t(){},
c6u:function c6u(d){this.a=d},
c6s:function c6s(d,e,f){this.a=d
this.b=e
this.c=f},
aP2(){var x=0,w=A.j(y.H),v,u
var $async$aP2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hIo=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aP2)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aP2)
case 3:u=$.fTL
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aP2)
case 4:$.fTL=$.hQR=$.hQS=null
return A.h(null,w)}})
return A.i($async$aP2,w)},
fl4(d){var x=0,w=A.j(y.H),v,u
var $async$fl4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a57){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.fl5(new A.bU(u,y.aY))
x=3
return A.b(u.ia(0,C.hH,new B.fl6()),$async$fl4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fl4,w)},
hQP(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hxd(x):x},
fTP(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.ao7(u)
x=1
break}v=B.fOG(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTP,w)},
fTO(d){var x=0,w=A.j(y.T),v,u,t
var $async$fTO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.ao8(u)
x=1
break}v=B.fOG(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fTO,w)},
fCo(d){var x=0,w=A.j(y.T),v
var $async$fCo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao8(d),$async$fCo)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCo,w)},
bzu(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzu=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fTO(d),$async$bzu)
case 3:q=f
if(q==null){x=1
break}t=C.R.aG(0,q,null)
if(!y.f.b(t)){x=1
break}s=J.a5(t)
r=s.h(t,"s")
s=r==null?s.h(t,"sdp"):r
u=J.k(s==null?"":s)
J.ad(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bzu,w)},
fa1(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fa1=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.U9(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.B9(d.amY(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fa1,w)},
FV(d,e,f){return B.hTc(d,e,f)},
hTc(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FV=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fTP(a1),$async$FV)
case 3:e=a4
if(e==null){v=null
x=1
break}u=C.R.aG(0,e,null)
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
if(C.a.a0(o,"NGMYDOCSYNC3|")){n=C.a.i(C.a.b0(o,13))
m=C.a.a0(n,"WR")?n:null}else m=null
d=$
x=4
return A.b($.hkF().aCH(D.dhp,null),$async$FV)
case 4:l=d.fTL=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awK(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.flC(f,k,new B.flD(f,a2,k,j,a0,p),a2,j,a0,p,new A.bU(t,y.ch))
x=5
return A.b(l.a6B(0,new B.Wr(r,"offer")),$async$FV)
case 5:d=l
x=7
return A.b(l.ajO(0),$async$FV)
case 7:x=6
return A.b(d.a6t(0,a4),$async$FV)
case 6:x=8
return A.b(B.fl4(l),$async$FV)
case 8:x=9
return A.b(l.anH(),$async$FV)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hQP(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.ao9(m,h),$async$FV)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h3w(h)
case 11:v=new A.bmC(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FV,w)},
fl5:function fl5(d){this.a=d},
fl6:function fl6(){},
flD:function flD(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
flC:function flC(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
flB:function flB(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hV3(d){switch(d){case"new":return D.e9w
case"checking":return D.e9x
case"connected":return D.e9z
case"completed":return D.e9y
case"failed":return D.e9B
case"disconnected":return D.e9C
case"closed":return D.aKu
case"count":return D.e9A}return D.aKu},
hV4(d){switch(d){case"new":return D.aKv
case"gathering":return D.e9D
case"complete":return D.a57}return D.aKv},
i4d(d){switch(d){case"stable":return D.e9E
case"have-local-offer":return D.e9F
case"have-local-pranswer":return D.e9H
case"have-remote-offer":return D.e9G
case"have-remote-pranswer":return D.e9I
case"closed":return D.aKB}return D.aKB},
i2t(d){switch(d){case"new":return D.aKy
case"connecting":return D.aKz
case"connected":return D.aKA
case"closed":return D.a58
case"disconnected":return D.aKx
case"failed":return D.aKw}return D.a58},
a8y:function a8y(d,e){this.a=d
this.b=e},
NR:function NR(d,e){this.a=d
this.b=e},
Wq:function Wq(d,e){this.a=d
this.b=e},
NQ:function NQ(d,e){this.a=d
this.b=e},
Ex:function Ex(d,e){this.a=d
this.b=e},
chp:function chp(){},
fQq(d){var x=new B.Ew()
x.a=d
x.b=!0
return x},
Ew:function Ew(){this.b=this.a=$},
a8x:function a8x(){},
asn:function asn(){},
Wr:function Wr(d,e){this.a=d
this.b=e},
fOC(){var x=0,w=A.j(y.H)
var $async$fOC=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOC,w)},
fOF(d,e,f){var x=0,w=A.j(y.T),v
var $async$fOF=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mm(D.mr))){v=null
x=1
break}v=B.fCE(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOF,w)},
h3w(d){var x,w=F.aax.a3r(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hxc(d){var x,w,v=C.cE.aJ(d)
try{x=C.c4.ca(0,F.aaw.baL(v,!1))
return x}catch(w){x=C.c4.ca(0,v)
return x}},
fOG(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hxc(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c4.ca(0,C.cE.aJ(x))
return v}catch(u){return x}}return null},
hxd(d){var x,w,v,u,t,s=A.a([],y.s)
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
hxe(){var x,w=$.pi(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fW(v)},
aYh(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYh)
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
return A.i($async$aYh,w)},
c6b(d,e){return B.hxf(d,e)},
hxf(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c6b=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c6b)
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
return A.i($async$c6b,w)},
aYk(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYh(d),$async$aYk)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYk,w)},
aYj(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYj=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hxe()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c6b(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYj)
case 3:if(!h){v=null
x=1
break}v=new A.a_p("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYj,w)},
aYi(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYi=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYh(o),$async$aYi)
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
return A.i($async$aYi,w)},
c6c(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c6c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bAr("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c6c)
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
return A.i($async$c6c,w)},
aYl(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HV(),$async$aYl)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYl,w)},
ao0(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ao0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao0)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYl(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao0,w)},
anZ(d,e){var x=0,w=A.j(y.H)
var $async$anZ=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$anZ)
case 3:x=2
return A.b(g.ar("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$anZ)
case 2:return A.h(null,w)}})
return A.i($async$anZ,w)},
a68(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a68=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a68)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HV(),$async$a68)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dj(s)
if(q.ah(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a67(s),$async$a68)
case 5:x=6
return A.b(B.anZ(f,u),$async$a68)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a68,w)},
a69(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a69=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a69)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HV(),$async$a69)
case 4:u=j
t=C.a.i(d.toLowerCase())
s=J.a5(u)
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
return A.b(B.anZ(g,q),$async$a69)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a67(u),$async$a69)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a69,w)},
a6a(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a6a=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6a)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HV(),$async$a6a)
case 4:u=o.q(i,C.a.i(e.toLowerCase()))
if(!y.f.b(u)){v=!1
x=1
break}t=J.a5(u)
if(!J.z(t.h(u,"active"),!0)){v=!1
x=1
break}s=t.h(u,"password")
if(J.k(s==null?"":s)!==C.a.i(g)){v=!1
x=1
break}s=t.h(u,"ownerEmail")
s=B.aYe(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a6a)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.ar("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a6a)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6a,w)},
c6d(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c6d=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c6d)
case 7:s=f
p=A.t(n)
r=A.aT(J.q(s.a,"ngmy_doc_share_school_session_"+p))
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
return A.i($async$c6d,w)},
HW(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6d(d),$async$HW)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYl(t),$async$HW)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ao_(d),$async$HW)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYe(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ao_(d),$async$HW)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HW,w)},
ao_(d){var x=0,w=A.j(y.H)
var $async$ao_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao_)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ao_)
case 2:return A.h(null,w)}})
return A.i($async$ao_,w)},
aYm(){var x,w=$.pi(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fW(v)},
a6b(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fOH(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c6g(d){return B.hxh(d)},
hxh(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c6g=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6b(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f1("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c6g)
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
return A.i($async$c6g,w)},
ao2(d,e){return B.hxi(d,e)},
hxi(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ao2=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6b(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$ao2)
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
return A.i($async$ao2,w)},
c6i(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ao2(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6i)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6i,w)},
c6h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ao2(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6h,w)},
c6j(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c6j=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6b(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ao2(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6j,w)},
c6k(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c6k=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fOH(d)){v=null
x=1
break}x=3
return A.b(B.c6g(d),$async$c6k)
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
return A.i($async$c6k,w)},
a6i(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6i=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$a6i)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f1("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6i)
case 8:s=e
if(s==null){v=A.T(y.N,y.z)
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
case 7:v=A.T(y.N,y.z)
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6i,w)},
ao6(d){return B.hxx(d)},
hxx(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ao6=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c2(),$async$ao6)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$ao6)
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
return A.i($async$ao6,w)},
ao7(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ao7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.cZ(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c2(),$async$ao7)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6i(),$async$ao7)
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
o=A.dU(A.a1(r,m,l),m,l)
J.aF(o,"offerConsumedAt",new A.S(Date.now(),0,!1).a6().ac())
J.aF(s,j,o)
x=9
return A.b(B.ao6(s),$async$ao7)
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
return A.i($async$ao7,w)},
ao9(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$ao9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c2(),$async$ao9)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6i(),$async$ao9)
case 4:u=g
t=J.a5(u)
s=t.h(u,p)
if(!y.f.b(s)){v=!1
x=1
break}r=y.N
q=y.z
q=A.dU(A.a1(s,r,q),r,q)
r=C.dJ.aJ(C.a.i(e))
q.n(0,"answer",C.cS.gcv().aJ(r))
q.n(0,"answerAt",new A.S(Date.now(),0,!1).a6().ac())
t.n(u,p,q)
x=5
return A.b(B.ao6(u),$async$ao9)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao9,w)},
ao8(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ao8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c2(),$async$ao8)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6i(),$async$ao8)
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
return A.i($async$ao8,w)},
an9(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$an9=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb8()
if(!(p instanceof A.pL)){v=null
x=1
break}x=3
return A.b(p.lR(e),$async$an9)
case 3:r=g
u=4
x=7
return A.b(r.hj(C.fW),$async$an9)
case 7:q=g
o=q
o=o==null?null:J.fb(J.wy(o))
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
return A.i($async$an9,w)},
i0x(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fAX(d){return B.i0z(d)},
i0z(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fAX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eW().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").Kh(d,3600),$async$fAX)
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
return A.i($async$fAX,w)},
Cx(d,e,f,g,h,i){var x=null
return B.i0w(d,e,f,g,h,i)},
i0w(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$Cx=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h3z(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fOJ(r),$async$Cx)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fAX(o),$async$Cx)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6c(r),$async$Cx)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aNA)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lc(A.a([],g))
x=15
return A.b(d.eT(0,A.atc("GET",A.cw(n,0,null))).cM(0,C.ES),$async$Cx)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6c(r),$async$Cx)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JN(d)
u=19
case 22:x=24
return A.b(d.C(),$async$Cx)
case 24:if(!b2){x=23
break}k=d.gU(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYo(r,k),$async$Cx)
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
case 10:i=B.U9(r)
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
return A.b(B.a6c(r),$async$Cx)
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
aOL(d){return B.i0y(d)},
i0y(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOL=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eW().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").W(0,d),$async$aOL)
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
return A.i($async$aOL,w)}},D,T,M,U,V,W,X,N,Y
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
B.chq.prototype={
aCH(d,e){return this.cGm(d,e)},
cGm(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCH=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dU(r,s,t)
t.v(0,d)
u=new q(A.kd(A.cA(t)))
t=J.k(u)
v=B.hC7(C.cS.gcv().aJ(new A.d3(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCH,w)}}
B.b2u.prototype={
bw1(d){var x=this,w=x.w
w.onclose=A.he(new B.chl(x))
w.onopen=A.he(new B.chm(x))
w.onmessage=A.he(new B.chn(x))
w.onbufferedamountlow=A.he(new B.cho(x))},
gda(d){return this.x},
ag3(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ag3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ew()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fQq(J.fb(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ag3)
case 8:v=t.fQq(s.amn(f,0,null))
x=1
break
case 7:case 4:v=B.fQq(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag3,w)}}
B.b2v.prototype={
bw2(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.chr(x)))
w.addEventListener("icecandidate",A.he(new B.chs(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cht(x)))
w.onicegatheringstatechange=A.he(new B.chu(x))
w.addEventListener("signalingstatechange",A.he(new B.chv(x)))
if(!$.fXk())w.addEventListener("connectionstatechange",A.he(new B.chw(x)))
w.addEventListener("negotiationneeded",A.he(new B.chx(x)))
w.addEventListener("track",A.he(new B.chy(x)))},
ajO(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajO=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kd(A.cA(A.T(y.N,y.z)))),y.aQ),$async$ajO)
case 3:t=f
v=new B.Wr(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajO,w)},
a6t(d,e){return this.bly(0,e)},
bly(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6t=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6t)
case 2:return A.h(null,w)}})
return A.i($async$a6t,w)},
a6B(d,e){return this.blO(0,e)},
blO(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6B=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6B)
case 2:return A.h(null,w)}})
return A.i($async$a6B,w)},
anH(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wr(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anH,w)},
bB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f6(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB,w)}}
B.abg.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Ym.prototype={
T(){return new B.axW()},
gdc(){return this.c}}
B.axW.prototype={
a_(){this.a1()
this.acN()},
acN(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYf(u.e,u.c),$async$acN)
case 2:t=e
if(v.c!=null)v.m(new B.d0h(v,t))
return A.h(null,w)}})
return A.i($async$acN,w)},
Py(){var x=0,w=A.j(y.H),v,u=this,t
var $async$Py=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anW(t.e,t.c,!1),$async$Py)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.ePe)
x=1
break}x=4
return A.b(B.a66(u.a.c,"individual"),$async$Py)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a50(A.e7(new B.d0e(u),!1,null,y.H)),$async$Py)
case 5:case 1:return A.h(v,w)}})
return A.i($async$Py,w)},
IH(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IH=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fje(o),$async$IH)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a6a(o.e,r,s,q),$async$IH)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eMj)
x=1
break}x=5
return A.b(B.a66(u.a.c,"member"),$async$IH)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a50(A.e7(new B.d0g(u),!1,null,y.H)),$async$IH)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IH,w)},
xz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a65(t.e,o,t.f,t.r,t.w,s),$async$xz)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a66(u.a.c,"org_owner"),$async$xz)
case 4:x=5
return A.b(B.ao0(u.a.c),$async$xz)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fjJ(o),$async$xz)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a68(s,t,o,q.c),$async$xz)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eMg)
x=1
break}x=10
return A.b(B.ao0(u.a.c),$async$xz)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a50(A.e7(new B.d0f(u),!1,null,y.H)),$async$xz)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xz,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j6:C.pq,q=B.fOE(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fL,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f6G,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.fpf,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bUf,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.ly(new B.d0j(),t),C.P,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abJ(C.eR,C.axe,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcaK(),t),C.ac],v))
p.push(new B.abJ(C.oB,C.a13,"Team Member","Sign in with your organization access code + password",u.gcbB(),t))
p.push(C.ac)
p.push(new B.abJ(C.ajR,C.a2x,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcb6(),t))
return A.c8(t,r,A.bm(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ah9,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.abJ.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gK(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.ez(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p1,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Bd,C.d.gK(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bW,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAu.prototype={}
B.aDG.prototype={}
B.jh.prototype={
mm(d){var x=this.b,w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gaoj(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
ae(){var x,w=this,v=A.T(y.N,y.z)
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
bad(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jh(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cER(d){return this.bad(null,d)},
aCs(d){return this.bad(d,null)}}
B.U3.prototype={
T(){return new B.aBR(new A.cr(null,y.A))},
gdc(){return this.c}}
B.aBR.prototype={
a_(){this.a1()
this.acO()},
acO(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.B8(u.a.c),$async$acO)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dMQ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acO,w)},
acP(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fC(s)),$async$acP)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eQ8)
case 1:return A.h(v,w)}})
return A.i($async$acP,w)},
YP(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YP=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.an9(s.d,4),$async$YP)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_my_code_"+m+".png"),$async$YP)
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
return A.i($async$YP,w)},
agw(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agw=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a97("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agw)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agw,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j6:C.pq,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.v(A.a([t,C.P,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1u,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agK,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mz,w,C.kt,new A.et(A.p(p,A.pC(p,p,!1,B.hx8(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bW,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kt,A.A(A.a([A.D(A.eB(N.Bw,C.Th,q.gc3M(),p),1),C.av,A.D(A.dq(C.yi,C.a7l,q.gc3N(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.eB(M.a_U,D.flb,q.gcq2(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.LR,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.U7.prototype={
T(){return new B.aBU(new A.ar(C.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
B.aBU.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HU(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YQ(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HU(u.d.a.a)
if(t==null){u.m(new B.dNZ(u))
x=1
break}u.m(new B.dO_(u))
s=u.a
r=s.c
x=3
return A.b(B.a64(s.d,new B.dO0(u),t,r),$async$YQ)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dO1(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$YQ,w)},
a10(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a10=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cl(r.a.d)){x=1
break}r.m(new B.dO2(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.rc(r.a.c,q),$async$a10)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dO3(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agF(p,m,l,j,k),$async$a10)
case 8:o=e
if(r.c!=null)r.m(new B.dO4(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.a9(h)
if(r.c!=null)r.m(new B.dO5(r,n))
s.push(6)
x=5
break
case 3:s=[2]
case 5:u=2
if(r.c!=null)r.m(new B.dO6(r))
x=s.pop()
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a10,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.ad9:D.ab3,h=j?D.aeD:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.ach:C.aL
i=[i,e,h,g,f,j?C.f7:C.bU]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bT(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bIj,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fy,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1u,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u4(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bha()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LL,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dO7(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lX,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.KR(l.a.d,4)
m=A.B(new A.K(m,new B.dO8(x,new A.aET(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.mf,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a4,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.P,e,C.P,q,C.d5,p,C.P,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.eh,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eKQ)
else q.push(A.W(C.lc,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.dg(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.brK,k,k,C.ah),1)
u=l.f?k:l.gcq3()
t=i[3]
s=i[1]
q=A.m(16)
s=A.eB(M.a_U,D.fm9,u,A.de(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cf,k,new A.b7(q,C.Y),new A.aA(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc3O()
t=A.bk(C.aE,k,k,0,C.c,k,C.n3,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bm(!0,A.mx(new B.dO9(),A.v(A.a([e,new A.C(D.bre,A.v(A.a([s,C.P,i,C.ac,A.bJ(l.f?C.rw:D.fkA,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cr,C.Xl,k,k,new A.bn(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bha.prototype={
oj(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.U4.prototype={
T(){return new B.aBS()}}
B.aBS.prototype={
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
acQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.r){x=1
break}r.m(new B.dMR(r))
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
return A.b(B.a69(p,m,n,o,C.a.i(l).length===0?null:l),$async$acQ)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.ePK)
s=[1]
x=4
break}p.I(y.q).f.R(D.eOn)
p=r.c
p.toString
A.a6(p,!1).O(!0)
s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null)r.m(new B.dMS(r))
x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$acQ,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j6:C.pq,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fdl,s,s,s,1,s,!0),p=A.p(s,D.bjZ,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gh,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bP9,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bP4,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bPk,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a5,s,C.am,s,s,s,s)
v=t.r?s:t.gc3P()
u=A.bk(C.aE,s,s,s,s,C.fM,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mz,A.bJ(t.r?C.rw:C.aQc,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.aaY.prototype={}
B.btA.prototype={
a3H(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3H=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.cf(r.amY()))
x=3
return A.b(B.Qv(t,s),$async$a3H)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3H,w)},
gdc(){return this.a}}
B.MP.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yl.prototype={
T(){return new B.axV(new A.ar(C.as,$.aw()),A.ki(!0,null,!0,!0,null,null,!1))}}
B.axV.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.d0d(this))},
q(){var x=this.d
x.S$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c3V(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0l(d),u=x.a.c,t=u?C.i6:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j6:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fL,32)],n),l=A.p(w,T.amy,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cw,16)],n),C.ank,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u4(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.bte()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.O,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F2,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aX0),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d0b(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lX,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.nq,new B.d0c(d),A.de(w,w,w,w,w,w,w,w,w,s,w,w,C.cf,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eG(w,C.K,new A.cU(Q.JK,A.c_(new A.C(C.xr,A.v(A.a([l,C.aP,k,C.P,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.D(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e3v,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc3U(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NC,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LT,C.d0,w,w,w)}}
B.bte.prototype={
oj(d,e){return e.ajJ(e.a.toUpperCase())}}
B.U5.prototype={
T(){return new B.aBT(A.a([],y.r),A.aX(y.N))},
gdc(){return this.c}}
B.aBT.prototype={
a_(){var x=this
x.a1()
x.tn()
x.w=A.dA(C.jb,new B.dNX(x))},
q(){var x=this.w
if(x!=null)x.a8(0)
B.Ue()
this.a2()},
a_T(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_T=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MO(u.a.c),$async$a_T)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ac(u.a.c),$async$a_T)
case 4:u.m(new s.dNk(u,e))
u.hW("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_T,w)},
tn(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tn=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MO(u.a.c),$async$tn)
case 3:t=e
x=4
return A.b(B.Ac(u.a.c),$async$tn)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dNl(u,s))
if(t>0)u.hW("Received "+A.t(t)+" file(s) via My Code.")
u.MY(u.d)
B.B8(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tn,w)},
MY(d){return this.bA_(d)},
bA_(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$MY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6e(r,u.a.c),$async$MY)
case 8:p=f
if(u.c==null){x=1
break}new B.dMU(u,r,p).$0()
u.c.e8()
case 7:if(!(C.a.a0(r.c,"video/")||r.mm(D.mr))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Uc(r,u.a.c),$async$MY)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ac(u.a.c),$async$MY)
case 12:u.m(new o.dMV(u,f))
case 1:return A.h(v,w)}})
return A.i($async$MY,w)},
Nk(d){return this.bG8(d)},
bG8(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nk=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6e(d,u.a.c),$async$Nk)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dN_(u,d,t))
x=6
return A.b(A.fI(new A.fC(t)),$async$Nk)
case 6:u.hW("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fC(r.toUpperCase())),$async$Nk)
case 7:u.hW("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nk,w)},
hW(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tp(d,e){return this.cAs(d,e)},
cAs(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tp=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dNL(r,e))
u=3
x=6
return A.b(d.$0(),$async$tp)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dNM(r))
$.eT.mh()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tp,w)},
gaTv(){var x=this.a
return x.f||x.r||x.w},
HE(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTv()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c69(s,n,r,q,o,t),$async$HE)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hW("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fuq(o,u.a.c),$async$HE)
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
return A.b(B.Cz(s,o,r,q,n,t),$async$HE)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
ZX(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao0(u.a.c),$async$ZX)
case 3:p=e
if(u.c==null){x=1
break}if(p==null){u.hW("No organization portal found.")
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
return A.b(A.a6(t,!1).c6(A.e7(new B.dNh(u,r,q),!1,null,y.H)),$async$ZX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZX,w)},
a03(d){return this.cjK(d)},
cjJ(){return this.a03(1)},
cjK(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a03=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTv()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anY(u.a.c),$async$a03)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a03,w)},
aaR(d,e,f){return this.bWp(d,e,f)},
bWp(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaR=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW(e)
x=1
break}x=3
return A.b(u.tp(new B.dNe(u,d,null,e,f),"Uploading\u2026"),$async$aaR)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaR,w)},
bA7(){B.hi6(!1,new B.dMY(this))
return},
coG(){this.m(new B.dNp(this))},
ax6(){var x=0,w=A.j(y.H),v=this
var $async$ax6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bA7()
return A.h(null,w)}})
return A.i($async$ax6,w)},
aaN(){var x=0,w=A.j(y.H),v=this
var $async$aaN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dN3(v),"Importing\u2026"),$async$aaN)
case 2:return A.h(null,w)}})
return A.i($async$aaN,w)},
Rz(d){return this.czT(d)},
czT(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$Rz=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c6(A.e7(new B.dNI(u,d),!1,null,y.H)),$async$Rz)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mm(D.Px)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).c6(A.e7(new B.dNJ(u,d),!1,null,y.H)),$async$Rz)
case 8:x=1
break
case 7:x=u.bX6(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).c6(A.e7(new B.dNK(u,d),!1,null,y.H)),$async$Rz)
case 11:x=1
break
case 10:u.hW("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$Rz,w)},
bX6(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oo(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cBt,C.a.b0(x,w+1).toLowerCase())},
aeh(d){return this.caO(d)},
caO(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$aeh=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mm(D.mr)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c6(A.e7(new B.dNf(u,d),!1,null,y.H)),$async$aeh)
case 5:x=1
break
case 4:u.m(new B.dNg(u,d))
case 1:return A.h(v,w)}})
return A.i($async$aeh,w)},
QX(d){return this.crv(d)},
crv(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$QX)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dNB(u,d),"Preparing QR\u2026"),$async$QX)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QX,w)},
agW(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$agW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNC(),A.U(t).k("K<1,n>")).fI(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dND(q),s),s.k("J.E"))
if(r.length===0){u.hW("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QX(r),$async$agW)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agW,w)},
agP(d){return this.cr4(d)},
cr4(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agP=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0l(r)
r=u.c
r.toString
x=3
return A.b(A.bX(C.K,null,new B.dNv(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agP)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.Rz(d)
break
case"qr":u.QX(A.a([d],y.r))
break
case"send_my_code":u.cbq(A.a([d],y.r))
break
case"save":u.aga(d)
break
case"delete":u.Is(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agP,w)},
WN(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dN0(),A.U(t).k("K<1,n>")).fI(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dN1(q),s),s.k("J.E"))
if(r.length===0){u.hW("Nothing to export.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oX(t,s.c,s.f),$async$WN)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tp(new B.dN2(u,r),"Preparing file\u2026"),$async$WN)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WN,w)},
afn(d){return this.cic(d)},
cic(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afn=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hiO(d,!1),$async$afn)
case 3:s=f
r=s==null
q=B.a6b(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hW("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afn,w)},
aen(){var x=0,w=A.j(y.H),v=this,u
var $async$aen=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fC1(u,v.a.c),$async$aen)
case 2:return A.h(null,w)}})
return A.i($async$aen,w)},
bA6(){B.hi6(!1,new B.dMX(this,null))
return},
IG(d,e){return this.cbr(d,e)},
aZo(d){return this.IG(null,d)},
cbq(d){return this.IG(d,null)},
cbr(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IG=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:l={}
k=d==null?A.a([],y.r):d
l.a=k
if(k.length===0&&s.r.a!==0){p=s.d
o=A.U(p).k("a2<1>")
k=A.B(new A.a2(p,new B.dNi(s),o),o.k("J.E"))
l.a=k
p=k}else p=k
x=p.length===0?3:5
break
case 3:u=7
x=10
return A.b($.wQ.c5().amj(!0,C.Z6,!1),$async$IG)
case 10:r=g
if(r==null||J.cl(r.a)){x=1
break}x=11
return A.b(s.tp(new B.dNj(l,s,r),"Preparing\u2026"),$async$IG)
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
return A.b(B.bBB(p,l,e,s.a.c),$async$IG)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IG,w)},
HT(d){return this.bWc(d)},
bWc(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hx7(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZo(t),$async$HT)
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
return A.b(u.tp(new B.dNc(u,d),"Receiving video\u2026"),$async$HT)
case 11:x=1
break
case 10:x=12
return A.b(u.tp(new B.dNd(u,d),"Receiving\u2026"),$async$HT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HT,w)},
DN(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DN=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Ct()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afn(t),$async$DN)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HT(s),$async$DN)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).c6(A.e7(new B.dNn(u),!1,null,y.N)),$async$DN)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tn(),$async$DN)
case 10:x=1
break
case 9:x=11
return A.b(u.HT(C.a.i(r)),$async$DN)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DN,w)},
aga(d){return this.cng(d)},
cng(d){var x=0,w=A.j(y.H),v=this
var $async$aga=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tp(new B.dNm(v,d),"Saving\u2026"),$async$aga)
case 2:return A.h(null,w)}})
return A.i($async$aga,w)},
Is(d){return this.bIq(d)},
bIq(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Is=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l_(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Is)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c6c(t),$async$Is)
case 6:case 5:s=d.a
x=7
return A.b(B.E3(u.a.c,s),$async$Is)
case 7:u.r.W(0,s)
x=8
return A.b(u.tn(),$async$Is)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Is,w)},
ah1(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah1=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0l(r)
r=u.c
r.toString
x=3
return A.b(A.bX(C.K,null,new B.dNH(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ah1)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aen()
break
case"import":u.aaN()
break}case 1:return A.h(v,w)}})
return A.i($async$ah1,w)},
c3S(d){var x=d.c
if(C.a.a0(x,"video/")||d.mm(D.mr))return C.pQ
if(C.a.a0(x,"image/")||d.mm(D.Px))return C.tM
if(C.a.t(x,"pdf"))return E.N9
return D.akj},
B(d){var x,w,v=this,u=null,t=B.a0l(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.G9,u,u,u,new B.dNS(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bIP,u,u,u,v.e?u:v.gcb7(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcoF()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bDd:E.akK,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_R,u,u,u,v.e?u:v.gc3T(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nW,u,u,u,v.e?u:v.gb_w(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bKv,u,u,u,v.e?u:new B.dNT(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.ly(new B.dNU(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bT(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lY(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axS(C.jj,s,!0,t,w?u:v.gcrw(),u),1)
x.push(new A.C(D.bq1,A.mx(new B.dNV(),A.A(A.a([s,C.av,A.D(new B.axS(C.vq,"Export",!1,t,w?u:v.gbLU(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cr,C.iw,u,u,new A.bn(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbP(t,v.e?u:v.gb_w(),u)
else s=A.k2(!0,u,u,new B.dNW(v,t),s,u,D.bpU,u,u,!1,!1)
x.push(A.D(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axS.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.v9,t,new A.b7(s,C.Y),t,t,t)
return A.dq(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.cc,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.de(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.v9,t,new A.b7(s,C.Y),new A.aA(v,1,C.q,-1),t,t,t,t)
return A.eB(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbP.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mx(new B.d09(),new A.C(E.Yb,A.v(A.a([A.mx(new B.d0a(),A.p(x,A.W(C.xM,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.i9,x,x,new A.bn(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dq(C.nW,D.fpy,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Y6,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cr,C.AB,x,x,new A.bn(0,1,w),s),x,x,x)}}
B.abh.prototype={
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
if(!o||i.mm(D.mr))p=D.d7s
else{p=C.a.a0(p,"image/")||i.mm(D.Px)
n=y.O
p=p?A.a([C.cZ,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaoj()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mm(D.mr))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c7))
if(!(!o||i.mm(D.mr)))l.push(A.fMq(C.aE,!1,j,j,j,!1,j,j,new B.d0w(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nU,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c7))
return A.mx(new B.d0x(),new A.C(C.e3,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.C(C.XH,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.q,-1)),j,j,C.ag),j),C.cr,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bn(0,1,y.X),y.i)}}
B.Yn.prototype={
T(){return new B.axX()},
gdc(){return this.c}}
B.axX.prototype={
a_(){this.a1()
this.xp()},
q(){B.hxm(this.e)
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
n=B.hxp(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hxo(s.a.d.a)
if(r==null||r.length===0)o=o==null||o.length===0
else o=!1
if(o){s.m(new B.d0t(s))
x=1
break}s.m(new B.d0u(p,s,r))
u=2
x=6
break
case 4:u=3
l=t.pop()
q=A.a9(l)
if(s.c==null){x=1
break}s.m(new B.d0v(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
a1_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a1_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.rc(t.c,t.d),$async$a1_)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eMQ)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agF(q,s,t.length===0?"image/jpeg":t,null,s),$async$a1_)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a1_,w)},
bW5(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kj(u,C.A,v,new B.d0r(w,t),C.fU,C.dt,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d0s(w),C.fU,C.dt,!0,v,!1,v,v)
else return C.bH
return A.ud(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0l(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.Bx,u,u,u,v.gb3h(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DM
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dq(C.Bx,D.f8W,v.gb3h(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bW5()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yk.prototype={
T(){return new B.axU(A.ahs(),C.bw,C.bw)},
gdc(){return this.c}}
B.axU.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).i6(new B.d06(v))
x.gcNG().i6(new B.d07(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b27
x.i6(new B.d08(v))
v.xp()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.rc(p.c,p.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d0_(s))
x=1
break}x=8
return A.b(s.d.BK(0,new A.a2r(r,s.a.d.c)),$async$xp)
case 8:if(s.c==null){x=1
break}s.m(new B.d00(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.a9(n)
if(s.c==null){x=1
break}s.m(new B.d01(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
YR(){var x=0,w=A.j(y.H),v=this,u
var $async$YR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h1(0),$async$YR)
case 5:x=3
break
case 4:x=6
return A.b(u.i9(0),$async$YR)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YR,w)},
aRq(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0l(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DM
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bEc,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NC,C.n),o,88,o,o,o,o,o,88)
t=A.kU(C.aE,o,o,m,0,new B.d02(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRq(p.w)+" / "+p.aRq(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a4,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eJl,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xX:C.iT,o,o,o,o,o)
x=A.v(A.a([u,C.kt,t,x,C.d5,A.dq(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc3W(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tA,x,o),o,o,o),o,!1,!1,o,o)}}
B.P0.prototype={
T(){return new B.ay_()},
gdc(){return this.c}}
B.ay_.prototype={
a_(){this.a1()
this.OV()},
OV(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OV=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fOF(o.c,o.d,new B.d0K(s)),$async$OV)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d0L(s))
x=1
break}s.e=r
q=O.hU1(r)
if(q==null){s.m(new B.d0M(s))
x=1
break}s.d=q
q.aM(0,s.gaZc())
x=8
return A.b(q.i5(0).cM(0,C.qM),$async$OV)
case 8:if(s.c==null){x=1
break}s.m(new B.d0N(s))
x=9
return A.b(q.pz(0),$async$OV)
case 9:q.t0(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.a9(m)
if(s.c==null){x=1
break}s.m(new B.d0O(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OV,w)},
c9p(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d0P(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Cu(0,x.gaZc())
w=x.d
if(w!=null)w.q()
B.i2K(x.e)
x.a2()},
acT(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYn(u.c,u.d),$async$acT)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acT,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0l(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oI,t,t,t,u.gc3Q(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.id(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DM
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agX(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zJ(s,t),A.aE(t,A.CL(A.p(t,A.W(q?I.xX:C.iT,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bW,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d0R(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yp.prototype={
T(){return new B.axY(new A.cr(null,y.A))}}
B.axY.prototype={
gcAb(){var x,w,v=this.a
if(v.e!==D.QR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gczR(){var x,w,v=this.a
if(v.e!==D.yR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcAb()
if(x!=null){v.PX(x)
v.e=A.dA(R.EV,new B.d0G(v,x))}w=v.gczR()
if(w!=null){v.PW(w)
v.f=A.dA(C.h4,new B.d0H(v,w))}},
q(){var x=this.e
if(x!=null)x.a8(0)
x=this.f
if(x!=null)x.a8(0)
this.a2()},
PW(d){return this.cgo(d)},
cgo(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PW=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ao5(d),$async$PW)
case 3:t=f
x=4
return A.b(B.c6v(d),$async$PW)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d0y(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PW,w)},
PX(d){return this.cgp(d)},
cgp(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fCo(d),$async$PX)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzu(t),$async$PX)
case 4:if(u.c==null){x=1
break}u.m(new B.d0z(u))
u.c.I(y.q).f.R(D.aNb)
case 1:return A.h(v,w)}})
return A.i($async$PX,w)},
gc01(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc3R(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0M(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0M=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Ct()){t=u.c
if(t!=null)t.I(y.q).f.R(D.ePU)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).c6(A.e7(new B.d0A(),!1,null,y.N)),$async$a0M)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzu(s),$async$a0M)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aNb)
case 1:return A.h(v,w)}})
return A.i($async$a0M,w)},
a8L(d){return this.bG9(d)},
bG9(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fC(C.d.aI(t,", "))),$async$a8L)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
acR(d){return this.bFU(d)},
bFU(d){var x=0,w=A.j(y.H),v=this
var $async$acR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fC(v.a.c)),$async$acR)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eNi)
return A.h(null,w)}})
return A.i($async$acR,w)},
a0H(d){return this.cni(d)},
cni(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0H=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.an9(s.d,4),$async$a0H)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rH(r,"ngmy_doc_share_qr.png"),$async$a0H)
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
return A.i($async$a0H,w)},
gaUz(){var x,w=this.a
if(w.e!==D.Hk)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8I(d){return this.bG2(d)},
bG2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8I=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaUz()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8I)
case 3:if(d.e!=null)d.I(y.q).f.R(D.eOU)
case 1:return A.h(v,w)}})
return A.i($async$a8I,w)},
acS(){var x=0,w=A.j(y.H),v=this,u
var $async$acS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ue(),$async$acS)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$acS,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0l(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hk&&i!==D.QR&&i!==D.yR
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hk||t===D.QR||t===D.yR?l:A.aH(l,l,l,l,C.kP,l,l,l,m.gaXo(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.P,A.pC(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc01(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hk){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.P,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc3R(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gK(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.O,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bOe,D.fhT,new B.d0B(m,d),l)],p))}if(m.a.e===D.Hk&&m.gaUz()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a4,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bKP,D.feE,new B.d0C(m,d),l)],p))
if(m.a.e===D.yR){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.P,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l)],p))}if(m.a.e===D.QR){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.P,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mg,l,l,l),C.ac,A.dq(D.bGD,D.fkT,m.gcnG(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.oe(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.eB(N.Bw,C.Th,new B.d0D(m,d),l),1),C.av,A.D(A.dq(C.yi,C.a7l,new B.d0E(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.P,new A.a7(1/0,l,A.bJ(C.zm,m.gaXo(),A.bk(C.aJ,l,l,l,l,C.fM,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0F(),y.C)}}
B.abf.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aP,A.p(x,A.pC(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bJ(C.zn,new B.d_Z(d),x)],u),x,x,C.mL,v,x,x,x,x,D.f7Y,x)}}
B.Yj.prototype={
T(){return new B.axT(A.yP(C.xa,C.nx,C.tY))}}
B.axT.prototype={
q(){this.d.q()
this.a2()},
avJ(d){var x,w,v,u,t
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
return A.c8(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.ff7,x,x,x,1,x,!0),C.w,A.yO(this.d,C.bQ,this.gavI()),x,!1,!1,x,x)}}
B.Yq.prototype={
T(){return new B.axZ(A.yP(C.xa,C.nx,C.tY))},
gdc(){return this.c}}
B.axZ.prototype={
bX8(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeK(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Ru("text/plain"),$async$aeK)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.ePO)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$aeK,w)},
a9w(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9w=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hiO(p,!0),$async$a9w)
case 3:t=e
p=t==null
s=B.a6b(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eMq)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9w,w)},
q(){this.d.q()
this.a2()},
avJ(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bX8(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alF,v,v,v,w.gbLs(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_Y,v,v,v,w.gcdO(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qX:P.MU,v,v,v,v,v),v,v,v,new B.d0J(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.flH,v,v,v,1,v,!0)
u=A.yO(w.d,C.bQ,w.gavI())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e9c],s),v),v,!1,!1,v,v)}}
B.bbQ.prototype={
B(d){var x,w,v,u,t,s=this,r=null,q=s.x
if(q)x=C.os
else x=s.w?C.aE:s.f.a[3].j(0.85)
w=A.m(14)
v=s.w?C.aE.j(0.12):s.f.a[0]
u=A.m(12)
u=A.p(r,A.W(s.c,x,r,r,r,22),C.f,r,r,new A.o(v,r,r,u,r,r,C.n),r,40,r,r,r,r,r,40)
v=y.p
t=A.a([A.d(s.d,r,r,r,r,r,r,A.l(r,r,q?C.os:s.f.a[3],r,r,r,r,r,r,r,r,14,r,r,C.H,r,r,!0,r,r,r,r,r,r,r,r),r,r,r)],v)
q=s.e
if(q!=null)t.push(A.d(q,r,r,r,r,r,r,A.l(r,r,s.f.a[4],r,r,r,r,r,r,r,r,11,r,r,r,r,1.3,!0,r,r,r,r,r,r,r,r),r,r,r))
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.C(C.Yg,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8y.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NR.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wq.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NQ.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.Ex.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.chp.prototype={}
B.Ew.prototype={}
B.a8x.prototype={}
B.asn.prototype={}
B.Wr.prototype={}
var z=a.updateTypes(["ay<~>()","R(jh)","n(jh)","U5(Y)","~()","Ym(Y)","H(H,jh)","P0(Y)","~(lT)","cp(Ew)","ay<jh?>(@)","U3(Y)","U7(Y)","C(jh)","jh(@)","a4<n,@>(jh)","Yl(Y)","U4(Y)","Yn(Y)","Yk(Y)","Yp(Y)","abf(Y)","aj<jh>()","Yq(Y)","abh(Y,H)","Yj(Y)","a4<n,aC>(jh)","cp(Wq)","cp(a8x)","ay<cp>(Ew)"])
B.chl.prototype={
$1(d){var x=this.a
x.x=D.aKt
x.y.L(0,D.aKt)},
$S:69}
B.chm.prototype={
$1(d){var x=this.a
x.x=D.aKs
x.y.L(0,D.aKs)},
$S:69}
B.chn.prototype={
$1(d){var x=this.a
x.ag3(A.aNv(d.data)).bz(new B.chk(x),y.b)},
$S:69}
B.chk.prototype={
$1(d){var x=this.a
x.z.L(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cho.prototype={
$1(d){},
$S:69}
B.chr.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hC6(d.channel))},
$S:15}
B.chs.prototype={
$1(d){},
$S:15}
B.cht.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hV3(w.iceConnectionState)
x.cx=w
if($.fXk())switch(w.a){case 0:x.cy=D.aKy
break
case 1:x.cy=D.aKz
break
case 3:x.cy=D.aKA
break
case 5:x.cy=D.aKw
break
case 6:x.cy=D.aKx
break
case 7:x.cy=D.a58
break
default:break}},
$S:153}
B.chu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hV4(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:153}
B.chv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i4d(w.signalingState)},
$S:153}
B.chw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i2t(w.connectionState)},
$S:153}
B.chx.prototype={
$1(d){},
$S:153}
B.chy.prototype={
$1(d){},
$S:15}
B.ffG.prototype={
$1(d){var x=y.F.a(new A.rx([],[]).pm(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"blobs")
if(!w)C.x7.Kf(x,"blobs")},
$S:192}
B.fBQ.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vC.f8(this.b)
$.eT.mh()
this.c.$1(d)},
$S:351}
B.fBS.prototype={
$1(d){return this.a.$1(B.hKY(this.b,this.c))},
$S:32}
B.fBR.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fBP.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fC4.prototype={
$1(d){var x=this
return B.h8p(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fC5.prototype={
$1(d){var x=this
return B.h8p(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fhi.prototype={
$1(d){var x=this
return B.c66(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d0h.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d0e.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c66(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d0g.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c66(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d0f.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c66(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d0j.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bFg,x,x,x,new B.d0i(d),x,x,x,x,x,x),A.D(A.Ei(D.Pi,!0,x,C.a_2,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pi,x,g,C.ahu,0,e,f)},
$C:"$4",
$R:4,
$S:445}
B.d0i.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fjh.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i6:C.c,r=A.m(28),q=A.p(v,D.bkh,C.f,v,v,D.aYG,v,v,v,v,D.ahk,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bJn,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.F7,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.alU,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a5,v,C.am,v,v,v,v),C.bx,A.A(A.a([A.D(A.dV(C.de,new B.fjf(d),v),1),C.av,A.D(A.bJ(D.fdH,new B.fjg(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Ly,v,v,v,v),v)},
$S:58}
B.fjf.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fjg.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eNx)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aAu(v,x))},
$S:0}
B.fjL.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i6:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bk7,C.f,w,w,D.b_6,w,w,w,w,D.ahk,w,w,1/0),new A.C(C.F7,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fTz(u,"Organization name",C.Fy,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fTz(u,"Access code",C.n8,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fTz(u,"Member password",H.G4,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a5,w,C.am,w,w,w,w),C.bx,A.bJ(D.flM,new B.fjK(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fM,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Ly,w,w,w,w),w)},
$S:58}
B.fjK.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eNC)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aDG(u,x,w))},
$S:0}
B.c5Y.prototype={
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
p=C.a.a0(j,"http")?A.cw(j,0,null):s.b.aS(j)
u=4
x=7
return A.b(A.v1(p,null).cM(0,C.Xk),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.cf(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.B9(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
B.c63.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c64.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c65.prototype={
$1(d){return d.b},
$S:z+2}
B.c6_.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c60.prototype={
$1(d){return d.b},
$S:z+2}
B.c5Z.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:13}
B.c61.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c62.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fC2.prototype={
$1(d){return new B.U3(this.a,null)},
$S:z+11}
B.fC3.prototype={
$1(d){return new B.U7(this.a,this.b,this.c,null)},
$S:z+12}
B.dMQ.prototype={
$0(){var x=this.a
x.e=this.b
x.f=!1},
$S:0}
B.dNZ.prototype={
$0(){return this.a.r="Enter their code \u2014 5 numbers then 1 letter (example: 48291K)."},
$S:0}
B.dO_.prototype={
$0(){var x=this.a
x.f=!0
x.r="Sending\u2026"},
$S:0}
B.dO0.prototype={
$1(d){var x=this.a
if(x.c!=null)x.m(new B.dNY(x,d))},
$S:2}
B.dNY.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dO1.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dO2.prototype={
$0(){var x=this.a
x.f=!0
x.r="Opening device share\u2026"},
$S:0}
B.dO3.prototype={
$0(){return this.a.r="Could not read "+this.b.b+". Try re-uploading."},
$S:0}
B.dO4.prototype={
$0(){return this.a.r=this.b},
$S:0}
B.dO5.prototype={
$0(){return this.a.r="Could not open share sheet: "+A.t(this.b)},
$S:0}
B.dO6.prototype={
$0(){return this.a.f=!1},
$S:0}
B.dO9.prototype={
$3(d,e,f){return A.db(A.dW(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.dO7.prototype={
$1(d){var x=this.a
return x.f?null:x.YQ()},
$S:2}
B.dO8.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mm(D.Px))s=C.tM
else s=C.a.a0(s,"video/")||d.mm(D.mr)?C.pQ:D.akj
x=this.b.a
w=y.p
return new A.C(C.kI,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.O,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaoj(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dMR.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dMS.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c67.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.c68.prototype={
$2(d,e){return new A.bu(J.k(d),J.k(e),y.M)},
$S:95}
B.fCG.prototype={
$2(d,e){return e===this.a},
$S:306}
B.fcT.prototype={
$1(d){return J.k(d)},
$S:17}
B.fhu.prototype={
$1(d){var x=this.b
B.hIZ(C.Fl.ga5i(this.a)).bz(x.gcDc(x),y.H)},
$S:119}
B.fhv.prototype={
$1(d){return this.a.d3(0,null)},
$S:119}
B.fhw.prototype={
$0(){return null},
$S:11}
B.c6m.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fhx.prototype={
$1(d){var x,w,v,u,t,s,r,q=null,p=A.a1(y.f.a(d),y.N,y.z),o=p.h(0,"id")
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
return new B.jh(o,x,w,v,u,t,s,r,p==null?q:J.k(p))},
$S:z+14}
B.flt.prototype={
$1(d){return d.ae()},
$S:z+15}
B.ffX.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.ffY.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c6r.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.fGI.prototype={
$1(d){return new B.Yl(this.a,null)},
$S:z+16}
B.d0d.prototype={
$1(d){var x=this.a
if(x.c!=null)x.e.fG()},
$S:8}
B.d0b.prototype={
$1(d){var x=this.a,w=x.c
w.toString
x=C.a.i(x.d.a.a)
A.a6(w,!1).O(x)
return null},
$S:2}
B.d0c.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dNX.prototype={
$1(d){var x=this.a
if(!x.e&&x.c!=null)x.a_T()},
$S:12}
B.dNk.prototype={
$0(){var x=J.bCG(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dNl.prototype={
$0(){var x=J.bCG(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dMU.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMT(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCs(this.c)}},
$S:0}
B.dMT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMV.prototype={
$0(){var x=J.bCG(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dN_.prototype={
$0(){var x=this.a,w=C.d.ba(x.d,new B.dMZ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCs(this.c)}},
$S:0}
B.dMZ.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNL.prototype={
$0(){var x=this.a
x.e=!0
x.f=this.b},
$S:0}
B.dNM.prototype={
$0(){var x=this.a
x.e=!1
x.f=null},
$S:0}
B.dNh.prototype={
$1(d){return new B.U4(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dNe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HE(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.U8(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tn(),$async$$0)
case 5:s=J.a5(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a03(s.gM(t)),$async$$0)
case 8:case 7:r.hW(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMY.prototype={
$1(d){this.a.aaR(d,"No files selected.","Added")},
$S:351}
B.dNp.prototype={
$0(){var x=this.a,w=x.r,v=w.a
x=x.d
if(v===x.length)w.a9(0)
else w.v(0,new A.K(x,new B.dNo(),A.U(x).k("K<1,n>")))},
$S:0}
B.dNo.prototype={
$1(d){return d.a},
$S:z+2}
B.dN3.prototype={
$0(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$$0=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:k=null
u=4
x=7
return A.b($.wQ.c5().cPD(C.Z6,!0),$async$$0)
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
return A.b(B.ao4(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cl(l)){o.hW("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tn(),$async$$0)
case 9:o.hW("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dNI.prototype={
$1(d){return new B.P0(this.a.a.c,this.b,null)},
$S:z+7}
B.dNJ.prototype={
$1(d){return new B.Yn(this.a.a.c,this.b,null)},
$S:z+18}
B.dNK.prototype={
$1(d){return new B.Yk(this.a.a.c,this.b,null)},
$S:z+19}
B.dNf.prototype={
$1(d){return new B.P0(this.a.a.c,this.b,null)},
$S:z+7}
B.dNg.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNB.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.a
x=3
return A.b(p.HE(),$async$$0)
case 3:if(!e){x=1
break}t=u.b
x=4
return A.b(B.a6d(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hW("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cjJ(),$async$$0)
case 5:x=6
return A.b(p.tn(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dNx(p),r),new B.dNy(),r.k("K<ak.E,n>")).c_(0,new B.dNz())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).c6(A.e7(new B.dNA(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oW(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Ue(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNx.prototype={
$1(d){var x=this.a,w=C.d.ba(x.d,new B.dNw(d))
x=w>=0?x.d[w].w:d.w
return x==null?"":x},
$S:z+2}
B.dNw.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dNy.prototype={
$1(d){return C.a.i(d).toUpperCase()},
$S:14}
B.dNz.prototype={
$1(d){return d.length!==0},
$S:3}
B.dNA.prototype={
$1(d){var x=this.a
return new B.Yp(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dNC.prototype={
$1(d){return d.a},
$S:z+2}
B.dND.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dNv.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaoj(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mm(D.mr)?C.tO:C.oF
p=!x||p.mm(D.mr)?"Play video":"View"
return A.c_(A.bm(!0,new A.C(C.AN,A.v(A.a([q,o,t,C.aA,B.Yo(!1,u,!1,w,p,new B.dNq(d),v),B.Yo(!1,u,!1,C.jj,"Share via QR",new B.dNr(d),"Letters/numbers QR code"),B.Yo(!1,u,!1,D.a_8,"Send to their Code",new B.dNs(d),"Enter someone else's personal code"),B.Yo(!1,u,!1,C.hz,"Download / save",new B.dNt(d),v),C.an,B.Yo(!1,u,!0,C.e4,"Delete",new B.dNu(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,v,v,C.n),C.bd)},
$S:688}
B.dNq.prototype={
$0(){A.a6(this.a,!1).O("view")
return null},
$S:0}
B.dNr.prototype={
$0(){A.a6(this.a,!1).O("qr")
return null},
$S:0}
B.dNs.prototype={
$0(){A.a6(this.a,!1).O("send_my_code")
return null},
$S:0}
B.dNt.prototype={
$0(){A.a6(this.a,!1).O("save")
return null},
$S:0}
B.dNu.prototype={
$0(){A.a6(this.a,!1).O("delete")
return null},
$S:0}
B.dN0.prototype={
$1(d){return d.a},
$S:z+2}
B.dN1.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dN2.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
r=A
x=3
return A.b(B.a6f(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.FY(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oW(s.c,s.f),$async$$0)
case 4:u.hW(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMX.prototype={
$1(d){var x=this.a
x.tp(new B.dMW(x,d,this.b),"Preparing\u2026")},
$S:351}
B.dMW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hW("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.U8(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cl(s)){t.hW("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBB(q,s,u.c,t.a.c),$async$$0)
case 4:r=e
if(t.c==null){x=1
break}if(r)t.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNi.prototype={
$1(d){return this.a.r.t(0,d.a)},
$S:z+1}
B.dNj.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=J.aV(v.c.a),r=v.b,q=v.a
case 2:if(!s.C()){x=3
break}u=s.gU(s)
x=4
return A.b(B.fOI(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.L(q.a,t)
x=2
break
case 3:return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNc.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.a
x=3
return A.b(B.FV(new B.dN8(s),u.b,s.a.c),$async$$0)
case 3:r=e
q=s.c
p=q!=null
if(!p||r==null){s.hW("Could not connect. Keep sender screen open and try again.")
x=1
break}x=!C.a.t(r.a,"|WR")?4:6
break
case 4:x=7
return A.b(A.ca(null,null,!1,null,new B.dN9(r),q,null,!0,!0,y.H),$async$$0)
case 7:x=5
break
case 6:if(p)s.m(new B.dNa(s))
case 5:x=8
return A.b(r.b.ia(0,C.ES,new B.dNb()),$async$$0)
case 8:t=e
if(s.c==null){x=1
break}q=J.a5(t)
if(q.gam(t)){s.hW("Video transfer incomplete. Sender must keep their QR screen open.")
x=1
break}x=9
return A.b(s.tn(),$async$$0)
case 9:s.hW("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN8.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dN5(x,d,e))},
$S:133}
B.dN5.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dN9.prototype={
$1(d){return new B.abf(this.a.a,null)},
$S:z+21}
B.dNa.prototype={
$0(){return this.a.f="Receiving video\u2026 keep both screens open"},
$S:0}
B.dNb.prototype={
$0(){return A.a([],y.r)},
$S:z+22}
B.dNd.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.b
x=B.HU(o)!=null?3:4
break
case 3:x=5
return A.b(B.a63(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZo(B.HU(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ao4(new B.dN6(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cl(r)){if(B.fOH(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hW(q)
x=1
break}x=10
return A.b(s.tn(),$async$$0)
case 10:o=J.cE(r)
p=o.eJ(r,new B.dN7()).gM(0)
s.hW(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dN4(x,d,e))},
$S:133}
B.dN4.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dN7.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.dNn.prototype={
$1(d){return new B.Yq(this.a.a.c,null)},
$S:z+23}
B.dNm.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYn(u.a.c,v.b),$async$$0)
case 2:t.hW(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNH.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bm(!0,new A.C(C.AN,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Yo(!0,w,!1,C.n8,"My Code",new B.dNE(d),"Your personal code & QR \u2014 others send docs to you"),B.Yo(!1,w,!1,D.a_8,"Send to their Code",new B.dNF(this.a,d),"Enter someone else's 5-digit code + letter"),B.Yo(!1,w,!1,S.y7,"Import backup",new B.dNG(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,x,x,C.n),C.bd)},
$S:688}
B.dNE.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dNF.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bA6()},
$S:0}
B.dNG.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dNU.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.I2(D.Pi,x,C.a_2,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gK(D.Pi).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dNS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dNT.prototype={
$0(){this.a.ah1()
return null},
$S:0}
B.dNV.prototype={
$3(d,e,f){return A.db(A.dW(f,new A.u(0,(1-e)*10)),e)},
$S:102}
B.dNW.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abh(e,w,v,this.b,x.e,x.c3S(w),new B.dNO(x,w),new B.dNP(x,v,w),new B.dNQ(x,w),new B.dNR(x,w),null)},
$S:z+24}
B.dNO.prototype={
$0(){this.a.aeh(this.b)
return null},
$S:0}
B.dNP.prototype={
$0(){var x=this.a
return x.m(new B.dNN(x,this.b,this.c))},
$S:0}
B.dNN.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.L(0,w)},
$S:0}
B.dNQ.prototype={
$0(){this.a.Nk(this.b)
return null},
$S:0}
B.dNR.prototype={
$0(){this.a.agP(this.b)
return null},
$S:0}
B.d09.prototype={
$3(d,e,f){return A.db(A.dW(f,new A.u(0,(1-e)*18)),e)},
$S:102}
B.d0a.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:139}
B.d0x.prototype={
$3(d,e,f){return A.db(A.dW(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.d0w.prototype={
$1(d){return this.a.y.$0()},
$S:80}
B.d0t.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image. Re-upload it with + and try again."},
$S:0}
B.d0u.prototype={
$0(){var x=this.b
x.d=this.c
x.e=this.a.a
x.w=x.f=!1
x.r=null},
$S:0}
B.d0v.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load image: "+A.t(this.b)},
$S:0}
B.d0r.prototype={
$3(d,e,f){var x=null,w=this.b
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d0p(this.a),C.fU,C.dt,!0,x,!1,x,x)
$.aU.x1$.push(new B.d0q(this.a))
return C.bH},
$S:131}
B.d0p.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d0n(this.a))
return C.bH},
$S:179}
B.d0n.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0k(x))},
$S:8}
B.d0k.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d0q.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0m(x))},
$S:8}
B.d0m.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d0s.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d0o(this.a))
return C.bH},
$S:179}
B.d0o.prototype={
$1(d){var x=this.a
if(x.c!=null&&!x.w)x.m(new B.d0l(x))},
$S:8}
B.d0l.prototype={
$0(){return this.a.w=!0},
$S:0}
B.d06.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d05(x,d))},
$S:1740}
B.d05.prototype={
$0(){return this.a.f=this.b===C.ui},
$S:0}
B.d07.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d04(x,d))},
$S:8}
B.d04.prototype={
$0(){return this.a.x=this.b},
$S:0}
B.d08.prototype={
$1(d){var x=this.a
if(x.c==null)return
x.m(new B.d03(x,d))},
$S:8}
B.d03.prototype={
$0(){return this.a.w=this.b},
$S:0}
B.d0_.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not load audio."},
$S:0}
B.d00.prototype={
$0(){return this.a.e=!1},
$S:0}
B.d01.prototype={
$0(){var x=this.a
x.e=!1
x.r="Could not play audio: "+A.t(this.b)},
$S:0}
B.d02.prototype={
$1(d){return this.a.d.Ml(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d0K.prototype={
$0(){var x=this.a.a
return B.rc(x.c,x.d)},
$S:1741}
B.d0L.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not load video."},
$S:0}
B.d0M.prototype={
$0(){var x=this.a
x.f=!1
x.r="Video playback not supported on this device."},
$S:0}
B.d0N.prototype={
$0(){return this.a.f=!1},
$S:0}
B.d0O.prototype={
$0(){var x=this.a
x.f=!1
x.r="Could not play video: "+A.t(this.b)},
$S:0}
B.d0P.prototype={
$0(){return this.a.r="Video playback error."},
$S:0}
B.d0R.prototype={
$0(){var x=this.a
x.m(new B.d0Q(x))},
$S:0}
B.d0Q.prototype={
$0(){var x=this.a.d
if(x.a.f)x.h1(0)
else x.pz(0)},
$S:0}
B.d0G.prototype={
$1(d){return this.a.PX(this.b)},
$S:12}
B.d0H.prototype={
$1(d){return this.a.PW(this.b)},
$S:12}
B.d0y.prototype={
$0(){var x,w=this.a,v=this.b
w.w=v
x=this.c
if(x==null)v=v?1:w.x
else v=x
w.x=v},
$S:0}
B.d0z.prototype={
$0(){return this.a.r=!0},
$S:0}
B.d0A.prototype={
$1(d){return D.fKt},
$S:z+25}
B.d0F.prototype={
$2(d,e){if(d)B.Ue()},
$S:120}
B.d0B.prototype={
$0(){return this.a.a8L(this.b)},
$S:0}
B.d0C.prototype={
$0(){return this.a.a8I(this.b)},
$S:0}
B.d0D.prototype={
$0(){return this.a.acR(this.b)},
$S:0}
B.d0E.prototype={
$0(){return this.a.a0H(this.b)},
$S:0}
B.d_Z.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.d0J.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(u.d.pD(),$async$$0)
case 2:u.m(new B.d0I(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d0I.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c6t.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mm(D.mr)},
$S:z+1}
B.c6u.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c6s.prototype={
$2(d,e){return this.bhx(d,e)},
bhx(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Uf(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.fl5.prototype={
$1(d){if(d===D.a57&&(this.a.a.a&30)===0)this.a.fN(0)},
$S:z+27}
B.fl6.prototype={
$0(){},
$S:11}
B.flD.prototype={
bj6(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fa1(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h3z(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bj6(d,e)},
$S:538}
B.flC.prototype={
$1(d){var x=this
d.b=new B.flB(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.flB.prototype={
$1(d){return this.bj5(d)},
bj5(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYo(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.L(0,m)
case 10:x=1
break
case 8:n=d.a
n===$&&A.c()
r=C.R.aG(0,n,null)
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
return A.b(B.fa1(l,n.b,m,n.c,s.d),$async$$1)
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
return A.b(B.a6c(m),$async$$1)
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
x(v=B.axW.prototype,"gcaK","Py",0)
x(v,"gcbB","IH",0)
x(v,"gcb6","xz",0)
x(v=B.aBR.prototype,"gc3M","acP",0)
x(v,"gc3N","YP",0)
x(v,"gcq2","agw",0)
x(v=B.aBU.prototype,"gc3O","YQ",0)
x(v,"gcq3","a10",0)
x(B.aBS.prototype,"gc3P","acQ",0)
x(B.axV.prototype,"gc3U","c3V",4)
x(v=B.aBT.prototype,"gcb7","ZX",0)
x(v,"gcoF","coG",4)
x(v,"gb_w","ax6",0)
x(v,"gcrw","agW",0)
x(v,"gbLU","WN",0)
x(v,"gc3T","DN",0)
x(B.axX.prototype,"gb3h","a1_",0)
x(B.axU.prototype,"gc3W","YR",0)
x(v=B.ay_.prototype,"gaZc","c9p",4)
x(v,"gc3Q","acT",0)
x(v=B.axY.prototype,"gcnG","a0M",0)
x(v,"gaXo","acS",0)
w(B.axT.prototype,"gavI","avJ",8)
x(v=B.axZ.prototype,"gcdO","aeK",0)
x(v,"gbLs","a9w",0)
w(v,"gavI","avJ",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.chp,B.a8x,B.asn,B.aAu,B.aDG,B.jh,B.aaY,B.btA,B.Ew,B.Wr])
w(B.chq,B.chp)
w(B.b2u,B.a8x)
x(A.hT,[B.chl,B.chm,B.chn,B.chk,B.cho,B.chr,B.chs,B.cht,B.chu,B.chv,B.chw,B.chx,B.chy,B.ffG,B.fBQ,B.fBS,B.fBR,B.fC4,B.fC5,B.fhi,B.d0e,B.d0g,B.d0f,B.d0j,B.fjh,B.fjL,B.c5Y,B.c64,B.c65,B.c60,B.c5Z,B.c61,B.c62,B.fC2,B.fC3,B.dO0,B.dO9,B.dO7,B.dO8,B.fcT,B.fhu,B.fhv,B.c6m,B.fhx,B.flt,B.ffX,B.ffY,B.c6r,B.fGI,B.d0d,B.d0b,B.dNX,B.dMT,B.dMZ,B.dNh,B.dMY,B.dNo,B.dNI,B.dNJ,B.dNK,B.dNf,B.dNx,B.dNw,B.dNy,B.dNz,B.dNA,B.dNC,B.dND,B.dNv,B.dN0,B.dN1,B.dMX,B.dNi,B.dN9,B.dN7,B.dNn,B.dNH,B.dNU,B.dNV,B.d09,B.d0a,B.d0x,B.d0w,B.d0r,B.d0p,B.d0n,B.d0q,B.d0s,B.d0o,B.d06,B.d07,B.d08,B.d02,B.d0G,B.d0H,B.d0A,B.c6t,B.c6u,B.fl5,B.flC,B.flB])
w(B.b2v,B.asn)
x(A.j3,[B.fBP,B.d0h,B.d0i,B.fjf,B.fjg,B.fjK,B.dMQ,B.dNZ,B.dO_,B.dNY,B.dO1,B.dO2,B.dO3,B.dO4,B.dO5,B.dO6,B.dMR,B.dMS,B.fhw,B.d0c,B.dNk,B.dNl,B.dMU,B.dMV,B.dN_,B.dNL,B.dNM,B.dNe,B.dNp,B.dN3,B.dNg,B.dNB,B.dNq,B.dNr,B.dNs,B.dNt,B.dNu,B.dN2,B.dMW,B.dNj,B.dNc,B.dN5,B.dNa,B.dNb,B.dNd,B.dN4,B.dNm,B.dNE,B.dNF,B.dNG,B.dNS,B.dNT,B.dNO,B.dNP,B.dNN,B.dNQ,B.dNR,B.d0t,B.d0u,B.d0v,B.d0k,B.d0m,B.d0l,B.d05,B.d04,B.d03,B.d0_,B.d00,B.d01,B.d0K,B.d0L,B.d0M,B.d0N,B.d0O,B.d0P,B.d0R,B.d0Q,B.d0y,B.d0z,B.d0B,B.d0C,B.d0D,B.d0E,B.d_Z,B.d0J,B.d0I,B.fl6])
x(A.m4,[B.abg,B.MP,B.a8y,B.NR,B.Wq,B.NQ,B.Ex])
x(A.ag,[B.Ym,B.U3,B.U7,B.U4,B.Yl,B.U5,B.Yn,B.Yk,B.P0,B.Yp,B.Yj,B.Yq])
x(A.ah,[B.axW,B.aBR,B.aBU,B.aBS,B.axV,B.aBT,B.axX,B.axU,B.ay_,B.axY,B.axT,B.axZ])
x(A.au,[B.abJ,B.axS,B.bbP,B.abh,B.abf,B.bbQ])
x(A.ke,[B.c63,B.c6_,B.c67,B.c68,B.fCG,B.dN8,B.dN6,B.dNW,B.d0F,B.c6s,B.flD])
x(A.iO,[B.bha,B.bte])})()
A.jT(b.typeUniverse,JSON.parse('{"b2u":{"a8x":[]},"b2v":{"asn":[]},"Ym":{"ag":[],"r":[]},"axW":{"ah":["Ym"]},"abJ":{"au":[],"r":[]},"U3":{"ag":[],"r":[]},"U7":{"ag":[],"r":[]},"aBR":{"ah":["U3"]},"aBU":{"ah":["U7"]},"bha":{"iO":[]},"U4":{"ag":[],"r":[]},"aBS":{"ah":["U4"]},"Yl":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"abh":{"au":[],"r":[]},"Yn":{"ag":[],"r":[]},"Yk":{"ag":[],"r":[]},"P0":{"ag":[],"r":[]},"Yp":{"ag":[],"r":[]},"abf":{"au":[],"r":[]},"Yj":{"ag":[],"r":[]},"Yq":{"ag":[],"r":[]},"axV":{"ah":["Yl"]},"bte":{"iO":[]},"aBT":{"ah":["U5"]},"axS":{"au":[],"r":[]},"bbP":{"au":[],"r":[]},"axX":{"ah":["Yn"]},"axU":{"ah":["Yk"]},"ay_":{"ah":["P0"]},"axY":{"ah":["Yp"]},"axT":{"ah":["Yj"]},"axZ":{"ah":["Yq"]},"bbQ":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tW"),k:x("Lg()"),m:x("bo<n,n>"),F:x("qP"),g:x("ay<jh?>"),x:x("ay<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jh>"),w:x("O<+file,name(lt,n)>"),u:x("O<cP>"),s:x("O<n>"),E:x("O<iO>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cr<ah<ag>>"),n:x("aj<jh>"),j:x("aj<@>"),I:x("aj<H>"),M:x("bu<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iz"),e:x("i85"),af:x("DM"),U:x("jh"),b:x("cp"),C:x("aC"),aK:x("vO"),ab:x("Ew"),br:x("asn"),v:x("Wr"),N:x("n"),X:x("bn<N>"),Q:x("lE"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bU<aj<jh>>"),aW:x("bU<dD?>"),aY:x("bU<~>"),cx:x("abg"),b1:x("bg<aj<jh>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAu"),bG:x("aDG"),q:x("mV"),B:x("pc<Ew>"),c6:x("pc<a8y>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("aj<jh>?"),aL:x("aj<@>?"),h:x("a4<n,@>?"),l:x("jh?"),R:x("aC?"),c:x("Wr?"),d:x("+answerQr,transfer(n,ay<aj<jh>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,MP,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaY?"),bk:x("aAu?"),ag:x("aDG?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aX0=new A.aA(C.aE,2,C.q,-1)
D.bSo=new A.a8(C.a3,C.a7,C.x,C.a13,null,null)
D.aYG=new A.o(null,null,null,C.m1,null,D.bSo,C.n)
D.b_6=new A.o(null,null,null,C.m1,null,E.Gh,C.n)
D.ab3=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.ach=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.ad9=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeD=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f8P=new A.x("Your team portal",null,C.du,null,null,null,null,null,null,null,null,null)
D.fmH=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.d_J=x([D.f8P,C.an,D.fmH],y.p)
D.bjZ=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d_J,null)
D.fqT=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fcY=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.deu=x([D.fqT,C.an,D.fcY],y.p)
D.bk7=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.deu,null)
D.fnf=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fgG=new A.x("Enter the access code and password from your organization.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.dct=x([D.fnf,C.an,D.fgG],y.p)
D.bkh=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dct,null)
D.bpU=new A.Q(16,10,16,28)
D.bq1=new A.Q(16,14,16,4)
D.bre=new A.Q(20,0,20,16)
D.brK=new A.Q(20,8,20,16)
D.ahk=new A.Q(24,22,24,20)
D.a_8=new A.a0(63394,"MaterialIcons",!1)
D.akj=new A.a0(63515,"MaterialIcons",!1)
D.bDd=new A.a0(983813,"MaterialIcons",!1)
D.bAv=new A.a0(62867,"MaterialIcons",!1)
D.bEc=new A.ae(D.bAv,44,C.c,null,null,null)
D.bFg=new A.ae(C.oA,null,C.ad,null,null,null)
D.bGD=new A.ae(C.iU,18,null,null,null,null)
D.bIj=new A.ae(D.a_8,26,C.c,null,null,null)
D.bIP=new A.ae(C.Bp,null,null,null,null,null)
D.bJn=new A.ae(C.y9,null,null,null,null,null)
D.bKv=new A.ae(W.N7,null,null,null,null,null)
D.bKP=new A.ae(C.hk,16,null,null,null,null)
D.bOe=new A.ae(C.r0,16,null,null,null,null)
D.bEt=new A.ae(C.n8,null,null,null,null,null)
D.bP4=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bEt,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bJV=new A.ae(C.Fy,null,null,null,null,null)
D.bP9=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bJV,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bEO=new A.ae(H.G4,null,null,null,null,null)
D.bPk=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bEO,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cBZ=x([C.f7,C.aZ,C.aE],y.O)
D.bUf=new A.a8(C.ax,C.aC,C.x,D.cBZ,null,null)
D.cBt=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pi=x([C.f7,C.aE],y.O)
D.Px=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.mr=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d7s=x([C.pj,C.aE],y.O)
D.dYV={iceServers:0}
D.aF7={urls:0}
D.di4=new A.bo(D.aF7,["stun:stun.l.google.com:19302"],y.m)
D.di3=new A.bo(D.aF7,["stun:stun1.l.google.com:19302"],y.m)
D.cRx=x([D.di4,D.di3],A.ax("O<a4<n,n>>"))
D.dhp=new A.bo(D.dYV,[D.cRx],A.ax("bo<n,@>"))
D.Hk=new B.MP(0,"lanDirect")
D.QQ=new B.MP(1,"cloudStash")
D.dsV=new B.MP(2,"inlineInstant")
D.QR=new B.MP(3,"webrtcLink")
D.yR=new B.MP(4,"videoCloud")
D.fmG=new A.x("Receive file",null,C.np,null,null,null,null,null,null,null,null,null)
D.crD=x([E.am2,C.ab,D.fmG],y.p)
D.eFn=new A.cm(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.crD,null)
D.e3v=new A.C(C.cf,D.eFn,null)
D.f04=new A.G(!0,C.c,null,null,null,null,null,C.O,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1J,null,null,null)
D.f9m=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f04,null,C.L,null,null,null,null,null,null,null)
D.e2O=new A.C(C.AT,D.f9m,null)
D.b3l=new A.cq(C.A,null,null,D.e2O,null)
D.e9c=new A.cK(0,null,0,28,null,null,D.b3l,null)
D.e9v=new B.a8y(0,"RTCDataChannelConnecting")
D.aKs=new B.a8y(1,"RTCDataChannelOpen")
D.aKt=new B.a8y(3,"RTCDataChannelClosed")
D.e9w=new B.Ex(0,"RTCIceConnectionStateNew")
D.e9x=new B.Ex(1,"RTCIceConnectionStateChecking")
D.e9y=new B.Ex(2,"RTCIceConnectionStateCompleted")
D.e9z=new B.Ex(3,"RTCIceConnectionStateConnected")
D.e9A=new B.Ex(4,"RTCIceConnectionStateCount")
D.e9B=new B.Ex(5,"RTCIceConnectionStateFailed")
D.e9C=new B.Ex(6,"RTCIceConnectionStateDisconnected")
D.aKu=new B.Ex(7,"RTCIceConnectionStateClosed")
D.aKv=new B.Wq(0,"RTCIceGatheringStateNew")
D.e9D=new B.Wq(1,"RTCIceGatheringStateGathering")
D.a57=new B.Wq(2,"RTCIceGatheringStateComplete")
D.a58=new B.NQ(0,"RTCPeerConnectionStateClosed")
D.aKw=new B.NQ(1,"RTCPeerConnectionStateFailed")
D.aKx=new B.NQ(2,"RTCPeerConnectionStateDisconnected")
D.aKy=new B.NQ(3,"RTCPeerConnectionStateNew")
D.aKz=new B.NQ(4,"RTCPeerConnectionStateConnecting")
D.aKA=new B.NQ(5,"RTCPeerConnectionStateConnected")
D.e9E=new B.NR(0,"RTCSignalingStateStable")
D.e9F=new B.NR(1,"RTCSignalingStateHaveLocalOffer")
D.e9G=new B.NR(2,"RTCSignalingStateHaveRemoteOffer")
D.e9H=new B.NR(3,"RTCSignalingStateHaveLocalPrAnswer")
D.e9I=new B.NR(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aKB=new B.NR(5,"RTCSignalingStateClosed")
D.eJl=new A.at(160,48)
D.b4v=new A.fi(2,null,null,null,null,C.aE,null,null,null,null)
D.eKQ=new A.a7(16,16,D.b4v,null)
D.fcn=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eMg=new A.b1(D.fcn,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fjC=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eMj=new A.b1(D.fjC,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frV=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eMq=new A.b1(D.frV,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fc0=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eMQ=new A.b1(D.fc0,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fnp=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNb=new A.b1(D.fnp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foO=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eNi=new A.b1(D.foO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fti=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eNx=new A.b1(D.fti,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.frm=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eNC=new A.b1(D.frm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsw=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.eOn=new A.b1(D.fsw,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faI=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.eOU=new A.b1(D.faI,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.flm=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.ePe=new A.b1(D.flm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.feu=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.ePK=new A.b1(D.feu,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fto=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.ePO=new A.b1(D.fto,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.faY=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.ePU=new A.b1(D.faY,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f9H=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eQ8=new A.b1(D.f9H,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f6G=new A.x("NGMY DOC SHARE",null,C.aOs,null,null,null,null,null,null,null,null,null)
D.f7Y=new A.x("Show this to sender",null,C.kv,null,null,null,null,null,null,null,null,null)
D.f8W=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fdl=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.fdH=new A.x("Sign in",null,C.cc,null,null,null,null,null,null,null,null,null)
D.feE=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.ff7=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fhT=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.fkA=new A.x("Send to their Doc Share",null,C.nn,null,null,null,null,null,null,null,null,null)
D.fkT=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.flb=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.flH=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.flM=new A.x("Create portal",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fm9=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fpf=new A.x("Share files & videos\nwith a scan.",null,C.aOt,null,null,null,null,null,null,null,null,null)
D.fpy=new A.x("Add files",null,C.cc,null,null,null,null,null,null,null,null,null)
D.fKt=new B.Yj(null)
D.a87=new B.abg(0,"docShare")
D.a88=new B.abg(1,"gate")
D.TL=new B.abg(2,"gateNoIndividual")})();(function staticFields(){$.aMi=null
$.f7P=function(){var x=y.N
return A.T(x,x)}()
$.FH=A.T(y.N,y.D)
$.afe=A.T(y.N,A.ax("lt"))
$.Qg=A.T(y.N,y.D)
$.f8m=A.T(y.N,A.ax("aaY"))
$.c6l=A.T(y.S,A.ax("btA"))
$.h3y=1
$.hQS=null
$.hQR=null
$.hIo=null
$.fTL=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i8A","hkF",()=>new B.chq())
x($,"i6v","fXk",()=>C.a.t(A.bt(A.bt(A.bt(A.Gh(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["exUzvso6+2zZDZUA+MU6UydoG40="]=a.current})($__dart_deferred_initializers__);