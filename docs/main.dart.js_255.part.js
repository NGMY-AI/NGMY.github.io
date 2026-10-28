((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,H,O,F,I,P,E,G,Q,R,S,K,L,B={chq:function chq(){},
hCm(d){var x=null,w=new B.b2v(d,D.ea5,new A.pe(x,x,y.c6),new A.pe(x,x,y.B))
w.bwa(d)
return w},
b2v:function b2v(d,e,f,g){var _=this
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
hCn(d,e){var x=y.N
x=new B.b2w(d,e,A.T(x,y.e),A.T(x,y.z))
x.bwb(d,e)
return x},
b2w:function b2w(d,e,f,g){var _=this
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
fTF(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yj.Ls(x,"ngmy_doc_share_v1",new B.ffT(),1)},
hIS(d){var x,w,v=null
if(d==null)return v
if(y.D.b(d))return new Uint8Array(A.ce(d))
if(y.J.b(d))return new Uint8Array(A.ce(J.eX(d,0,null)))
if(y.Q.b(d))return new Uint8Array(A.ce(A.zE(d,0,v)))
if(y.I.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cE.aJ(d)
return x}catch(w){return v}return v},
Qt(d,e){return B.hY0(d,e)},
hY0(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qt=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=!1
x=1
break}u=4
o=$.aMj
x=7
return A.b(o==null?$.aMj=B.fTF():o,$async$Qt)
case 7:s=g
r=new Uint8Array(A.ce(e))
q=J.mD(s,"blobs","readwrite")
C.iE.mc(J.mB(q,"blobs"),r,d)
x=8
return A.b(J.pn(q),$async$Qt)
case 8:v=!0
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Qt,w)},
Qs(d){return B.hY_(d)},
hY_(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$Qs=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}u=4
o=$.aMj
x=7
return A.b(o==null?$.aMj=B.fTF():o,$async$Qs)
case 7:s=f
r=J.mD(s,"blobs","readonly")
x=8
return A.b(C.iE.zb(J.mB(r,"blobs"),d),$async$Qs)
case 8:q=f
x=9
return A.b(J.pn(r),$async$Qs)
case 9:o=B.hIS(q)
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$Qs,w)},
afX(d){return B.hXZ(d)},
hXZ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n
var $async$afX=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){x=1
break}u=4
p=$.aMj
x=7
return A.b(p==null?$.aMj=B.fTF():p,$async$afX)
case 7:s=f
r=J.mD(s,"blobs","readwrite")
C.iE.Fl(J.mB(r,"blobs"),d)
x=8
return A.b(J.pn(r),$async$afX)
case 8:u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
$.am.$1("[doc share idb delete] "+A.t(q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$afX,w)},
ffT:function ffT(){},
hLd(d,e){var x,w,v,u=A.a([],y.w),t=d.files
if(t==null)return u
for(x=0;x<t.length;++x){w=t[x]
v=w.name
v.toString
if(C.a.i(v).length===0)continue
u.push(new A.bmU(w,v))}return u},
hil(d,e){var x,w={},v=A.aUD("file")
v.multiple=!0
v.accept="*/*"
x=v.style
x.display="none"
x=document.body
if(x!=null)x.appendChild(v).toString
w.a=!1
w=new B.fC3(w,v,e)
C.vD.y0(v,"change",new B.fC5(w,v,!1))
C.vD.y0(v,"cancel",new B.fC4(w))
$.eT.mj()
v.click()
A.bN(C.afx,new B.fC2(w),y.H)},
fC3:function fC3(d,e,f){this.a=d
this.b=e
this.c=f},
fC5:function fC5(d,e,f){this.a=d
this.b=e
this.c=f},
fC4:function fC4(d){this.a=d},
fC2:function fC2(d){this.a=d},
CC(d,e,f,g,h,i){var x=0,w=A.j(y.H),v,u,t,s,r,q,p,o,n,m,l,k,j
var $async$CC=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:t=i.gdd()
s=C.a.i(t)
if(s.length===0){x=1
break}x=i.gT_()?3:4
break
case 3:x=5
return A.b(B.hdy(e,d,s,!0,!1,f,g,h,!1,i),$async$CC)
case 5:x=1
break
case 4:x=6
return A.b(B.Q7(d,s,f,g,h,i),$async$CC)
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
return A.b(B.HY(s,d),$async$CC)
case 13:m=a1
l=f
k=g
j=h
x=14
return A.b(B.fbk(s,d),$async$CC)
case 14:x=12
return A.b(r.hdy(q,p,o,n,m,l,k,j,a1,i),$async$CC)
case 12:x=8
break
case 10:x=15
return A.b(A.a6(e,!1).c8(A.e8(new B.fCi(s,i,d,f,g,h),!1,null,y.H)),$async$CC)
case 15:x=8
break
case 11:x=16
return A.b(A.a6(e,!1).c8(A.e8(new B.fCj(s,i,d,f,g,h),!1,null,y.H)),$async$CC)
case 16:x=8
break
case 8:case 1:return A.h(v,w)}})
return A.i($async$CC,w)},
Q7(d,e,f,g,h,i){var x=0,w=A.j(y.cx),v,u,t
var $async$Q7=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYh(e),$async$Q7)
case 3:u=k
x=4
return A.b(B.anX(d,e,!1),$async$Q7)
case 4:t=k
x=u==="member"?5:6
break
case 5:x=7
return A.b(B.HY(e,d),$async$Q7)
case 7:if(k){v=D.a86
x=1
break}x=8
return A.b(B.U4(e),$async$Q7)
case 8:v=t?D.TL:D.a87
x=1
break
case 6:x=u==="org_owner"?9:10
break
case 9:if(B.aYf(d,e)){v=D.a86
x=1
break}x=11
return A.b(B.U4(e),$async$Q7)
case 11:v=t?D.TL:D.a87
x=1
break
case 10:x=u==="individual"?12:13
break
case 12:if(!t||B.fOR(d,e)){v=D.a86
x=1
break}x=14
return A.b(B.U4(e),$async$Q7)
case 14:v=D.TL
x=1
break
case 13:v=t?D.TL:D.a87
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Q7,w)},
fbk(d,e){var x=0,w=A.j(y.y),v
var $async$fbk=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(!B.aYf(e,d)){v=!1
x=1
break}x=3
return A.b(B.aYh(d),$async$fbk)
case 3:v=g==="org_owner"
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fbk,w)},
hdy(d,e,f,g,h,i,j,k,l,m){return A.a6(d,!1).c8(A.e8(new B.fhw(f,m,e,g,h,l,i,j,k),!1,null,y.H))},
h8G(d,e,f,g,h,i,j){return new B.Yk(e,j,d,g,h,i,f,null)},
fjs(d){var x=0,w=A.j(y.bk),v,u,t,s,r
var $async$fjs=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fjv(A.P(d).ax.a===C.I,t,s),d,!0,!0,!0,null,!1,!1,y.c4),$async$fjs)
case 3:r=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
v=r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjs,w)},
fjX(d){var x=0,w=A.j(y.ag),v,u,t,s,r,q
var $async$fjX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=$.aw()
t=new A.ar(C.as,u)
s=new A.ar(C.as,u)
r=new A.ar(C.as,u)
x=3
return A.b(A.bV(C.K,null,new B.fjZ(A.P(d).ax.a===C.I,t,s,r),d,!1,!1,!0,null,!1,!1,y.bG),$async$fjX)
case 3:q=f
t.T$=u
t.P$=0
s.T$=u
s.P$=0
r.T$=u
r.P$=0
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fjX,w)},
fTO(d,e,f,g){var x=null,w=A.W(f,x,x,x,x,x),v=d?C.c.j(0.06):C.aQ
return A.br(x,new A.b4(4,A.m(16),C.Y),x,x,x,x,x,x,!0,x,x,x,x,x,x,v,!0,x,x,x,x,x,x,x,x,x,x,x,x,x,x,g,x,x,x,x,x,x,x,x,e,!0,!0,!1,x,w,x,x,x,x,x,x,x,x,x,x,x,x)},
fuE(d,e){var x=0,w=A.j(y.H),v
var $async$fuE=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.U4(e),$async$fuE)
case 3:if(d.e==null){x=1
break}A.a6(d,!1).eJ()
case 1:return A.h(v,w)}})
return A.i($async$fuE,w)},
fCi:function fCi(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
fCj:function fCj(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
abh:function abh(d,e){this.a=d
this.b=e},
fhw:function fhw(d,e,f,g,h,i,j,k,l){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k
_.x=l},
Yk:function Yk(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
axX:function axX(){this.c=this.a=this.d=null},
d0h:function d0h(d,e){this.a=d
this.b=e},
d0e:function d0e(d){this.a=d},
d0g:function d0g(d){this.a=d},
d0f:function d0f(d){this.a=d},
d0j:function d0j(){},
d0i:function d0i(d){this.a=d},
abK:function abK(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
aAv:function aAv(d,e){this.a=d
this.b=e},
aDH:function aDH(d,e,f){this.a=d
this.b=e
this.c=f},
fjv:function fjv(d,e,f){this.a=d
this.b=e
this.c=f},
fjt:function fjt(d){this.a=d},
fju:function fju(d,e,f){this.a=d
this.b=e
this.c=f},
fjZ:function fjZ(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
fjY:function fjY(d,e,f,g){var _=this
_.a=d
_.b=e
_.c=f
_.d=g},
c5W(d,e,f,g,h){return B.hxg(d,e,f,g,h)},
hxg(d,e,f,g,h){var x=0,w=A.j(y.n),v,u,t,s,r,q,p
var $async$c5W=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:s={}
r=J.a5(d)
q=r.gM(d)
s.a=0
u=A.a([],y.r)
p=J
x=3
return A.b(A.iJ(r.dt(d,new B.c5X(s,e,h,g,f,q),y.g),y.l),$async$c5W)
case 3:r=p.aV(j)
case 4:if(!r.C()){x=5
break}t=r.gS(r)
if(t!=null)u.push(t)
x=4
break
case 5:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c5W,w)},
aYc(d,e,f,g,h){return B.hxh(d,e,f,g,h)},
hxh(d,e,f,g,h){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aYc=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=A.atd("GET",d)
o=A.fLk()
if(o==null)o=new A.Lc(A.a([],y.W))
x=7
return A.b(o.eT(0,s).cM(0,C.ES),$async$aYc)
case 7:r=j
if(r.b!==200){v=null
x=1
break}x=8
return A.b(r.w.BV(),$async$aYc)
case 8:q=j
if(J.ad(q)===0){v=null
x=1
break}o=g.length!==0?g:null
o=B.Bc(q,h,o,e,f,"Received via QR")
v=o
x=1
break
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
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
return A.i($async$aYc,w)},
aYb(d){return B.hxe(d)},
hxe(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n
var $async$aYb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v2(d,null).cM(0,C.nM),$async$aYb)
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
q=A.aa(n)
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
return A.i($async$aYb,w)},
c5V(d){return B.hxf(d)},
hxf(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$c5V=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.v2(d,null).cM(0,C.pD),$async$c5V)
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
r=A.aa(o)
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
return A.i($async$c5V,w)},
c5X:function c5X(d,e,f,g,h,i){var _=this
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
HW(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=A.af("^\\d{5}[A-Z]$",!0,!1,!1,!1)
if(!x.b.test(v))return null
return v},
hxm(d){var x,w,v,u=C.a.i(d).toUpperCase()
for(x=["|",":"],w=0;w<2;++w){v="NGMYDOCRCV"+x[w]
if(C.a.a0(u,v))return B.HW(C.a.b0(u,v.length))}return null},
hxn(d){var x=B.HW(d)
if(x==null)return""
return"NGMYDOCRCV|"+x},
hxi(){var x,w=$.pk(),v=J.e3(5,y.S)
for(x=0;x<5;++x)v[x]=w.aB(10)
return C.d.fW(v)+"ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(24)]},
a60(d){return B.hxj(d)},
hxj(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p
var $async$a60=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.f2(d,null,!1,C.bG),$async$a60)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a60,w)},
a61(d,e){return B.hxk(d,e)},
hxk(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p
var $async$a61=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(A.hB(d,e,!1,!1,C.cG,null),$async$a61)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$a61,w)},
Bb(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$Bb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:i=C.a.i(d).toLowerCase()
if(i.length===0){v=null
x=1
break}x=3
return A.b(A.az(),$async$Bb)
case 3:u=f
t=C.a.i(i)
s=A.aT(J.q(u.a,"ngmy_doc_share_my_code_local_v1_"+t.toLowerCase()))
r=B.HW(s==null?"":s)
x=r!=null?4:5
break
case 4:x=6
return A.b(B.a62(r),$async$Bb)
case 6:if(f===i){v=r
x=1
break}case 5:x=7
return A.b(B.a60("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase()),$async$Bb)
case 7:q=f
s=q==null?null:J.q(q,"code")
p=B.HW(J.k(s==null?"":s))
x=p!=null?8:9
break
case 8:x=10
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),p),$async$Bb)
case 10:v=p
x=1
break
case 9:s=y.N,o=y.z,n=0
case 11:if(!(n<12)){x=13
break}m=B.hxi()
x=14
return A.b(B.a62(m),$async$Bb)
case 14:if(f!=null){x=12
break}l=new A.S(Date.now(),0,!1).a6().ac()
x=15
return A.b(B.a61("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(m).toUpperCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bb)
case 15:k=f
x=16
return A.b(B.a61("ngmy_doc_share_my_code_user_v1_"+t.toLowerCase(),A.F(["code",m,"ownerEmail",i,"createdAt",l],s,o)),$async$Bb)
case 16:j=f
x=k&&j?17:18
break
case 17:x=19
return A.b(u.au("String","ngmy_doc_share_my_code_local_v1_"+t.toLowerCase(),m),$async$Bb)
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
return A.i($async$Bb,w)},
a62(d){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$a62=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=B.HW(d)
if(r==null){v=null
x=1
break}x=3
return A.b(B.a60("ngmy_doc_share_my_code_lookup_v1_"+C.a.i(r).toUpperCase()),$async$a62)
case 3:u=f
t=u==null?null:J.q(u,"ownerEmail")
s=C.a.i(J.k(t==null?"":t)).toLowerCase()
v=s.length===0?null:s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a62,w)},
a63(d,e,f,g){return B.hxo(d,e,f,g)},
hxo(d,e,f,a0){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$a63=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:g=J.a5(d)
if(g.gam(d)){v=!1
x=1
break}r=B.HW(f)
if(r==null){v=!1
x=1
break}x=3
return A.b(B.a62(r),$async$a63)
case 3:q=a3
if(q==null){e.$1("Code not found. Check the 5 numbers and letter.")
v=!1
x=1
break}p=C.a.i(a0)
if(q===p.toLowerCase()){e.$1("That is your own code. Share it with others so they can send to you.")
v=!1
x=1
break}if(g.cI(d,0,new B.c62())>1048576||g.b8(d,new B.c63())){v=B.E5(r,d,e,q,a0)
x=1
break}e.$1("Uploading to "+C.d.gL(q.split("@"))+"\u2026")
x=4
return A.b(B.a6e("myCode",d,a0),$async$a63)
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
v=B.E5(r,d,e,q,a0)
x=1
break}x=5
return A.b(B.aYk(u,g.gM(d),a0),$async$a63)
case 5:n=a3
if(n==null){e.$1("Could not upload. Check connection and try again.")
v=!1
x=1
break}m=Date.now()
l=$.pk().aB(9999)
k=n.b
j=g.gM(d)
i=y.N
h=g.dt(d,new B.c64(),i)
h=A.B(h,h.$ti.k("ak.E"))
x=6
return A.b(B.aYd(A.F(["id","mc_"+m+"_"+l,"type","stash","stashToken",k,"senderEmail",p.toLowerCase(),"fileCount",j,"fileNames",h,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],i,y.z),q),$async$a63)
case 6:if(!a3){e.$1("Delivery failed. Try again.")
v=!1
x=1
break}e.$1("Sent "+g.gM(d)+" file(s) to code "+r+".")
v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a63,w)},
E5(d,e,f,g,h){return B.hxl(d,e,f,g,h)},
hxl(a5,a6,a7,a8,a9){var x=0,w=A.j(y.y),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$E5=A.e(function(b0,b1){if(b0===1){t.push(b1)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$E5)
case 3:if(!b1){a7.$1("No internet. Large files need a connection to send via My Code.")
v=!1
x=1
break}l=J.cE(a6)
k=l.cI(a6,0,new B.c5Z())
if(k>524288e3){a7.$1("Too large to send by code ("+C.k.V(k/1048576)+" MB). The limit is 500 MB \u2014 send fewer or smaller files, or use a direct/nearby transfer.")
v=!1
x=1
break}j=Date.now()
i=$.pk().aB(9999)
h=Date.now()
g=""+1000*h+"_"+C.cI.aB(99999)
f=A.a([],y.t)
r=A.a([],y.s)
h=l.gae(a6),e=y.N,d=y.z
case 4:if(!h.C()){x=5
break}q=h.gS(h)
a7.$1("Uploading "+q.b+"\u2026")
a0=C.a.i(a8)
a1=q.b
a2=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
a3=C.a.i(A.aK(a1,a2,"_"))
a1=a3.length===0?"file":a3
p="my-code-inbox/"+a0+"/"+g+"/"+a1
o=0
a1=B.I_(a9,q)
a0=new A.JO(a1)
u=6
case 9:x=11
return A.b(a0.C(),$async$E5)
case 11:if(!b1){x=10
break}n=a0.gS(0)
if(J.ad(n)===0){x=9
break}m=A.t(p)+".part"+C.a.aT(J.k(o),5,"0")
a1=$.eW().b
a1===$&&A.c()
a1=a1.at
a1===$&&A.c()
a2=a1.c
a2===$&&A.c()
a4=A.oO(null,null,e,e)
a4.v(0,a1.b)
x=12
return A.b(new A.a9z(a1.a,a4,"media",a1.d,a2).wE(m,n,new A.Do(!0,q.c)),$async$E5)
case 12:J.ch(r,m);++o
x=9
break
case 10:s.push(8)
x=7
break
case 6:s=[2]
case 7:u=2
x=13
return A.b(a0.a8(0),$async$E5)
case 13:x=s.pop()
break
case 8:x=o<=0?14:15
break
case 14:a7.$1("Could not read "+q.b+". Re-upload the file and try again.")
x=16
return A.b(B.aOM(r),$async$E5)
case 16:v=!1
x=1
break
case 15:f.push(A.F(["name",q.b,"mime",q.c,"sizeBytes",q.d,"storageBase",p,"partCount",o],e,d))
x=4
break
case 5:h=C.a.i(a9)
a0=l.gM(a6)
a1=l.dt(a6,new B.c6_(),e)
a1=A.B(a1,a1.$ti.k("ak.E"))
x=19
return A.b(B.aYd(A.F(["id","mc_"+j+"_"+i,"type","storage","senderEmail",h.toLowerCase(),"fileCount",a0,"fileNames",a1,"files",f,"createdAt",new A.S(Date.now(),0,!1).a6().ac(),"status","pending"],e,d),a8),$async$E5)
case 19:x=!b1?17:18
break
case 17:a7.$1("Delivery failed. Try again.")
x=20
return A.b(B.aOM(r),$async$E5)
case 20:v=!1
x=1
break
case 18:a7.$1("Sent "+l.gM(a6)+" large file(s) to code "+a5+".")
v=!0
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E5,w)},
aYd(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$aYd=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t="ngmy_doc_share_inbox_v1_"+C.a.i(e).toLowerCase()
x=3
return A.b(B.a60(t),$async$aYd)
case 3:s=g
r=y.aL.a(J.q(s==null?A.F(["deliveries",[]],y.N,y.z):s,"deliveries"))
if(r==null)u=null
else{r=J.b6(r,new B.c5Y(),y.P)
r=A.B(r,r.$ti.k("ak.E"))
u=r}if(u==null)u=A.a([],y.t)
u.push(d)
v=B.a61(t,A.F(["deliveries",u],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYd,w)},
MO(a1){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0
var $async$MO=A.e(function(a2,a3){if(a2===1)return A.f(a3,w)
for(;;)switch(x){case 0:a0=C.a.i(a1).toLowerCase()
if(a0.length===0){v=0
x=1
break}u=C.a.i(a0)
x=3
return A.b(B.a60("ngmy_doc_share_inbox_v1_"+u.toLowerCase()),$async$MO)
case 3:t=a3
if(t==null){v=0
x=1
break}s=J.q(t,"deliveries")
if(!y.j.b(s)||J.cl(s)){v=0
x=1
break}r=A.a([],y.t)
q=J.aV(s),p=y.N,o=y.z,n=y.f,m=0
case 4:if(!q.C()){x=5
break}l=q.gS(q)
if(!n.b(l)){x=4
break}k=A.a1(l,p,o)
j=k.h(0,"status")
if(J.k(j==null?"":j)==="done"){r.push(k)
x=4
break}j=k.h(0,"type")
x=J.k(j==null?"stash":j)==="storage"?6:7
break
case 6:x=8
return A.b(B.aYe(k,a0),$async$MO)
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
return A.b(B.aYj(h),$async$MO)
case 9:g=a3
if(g==null||g.length===0){r.push(k)
x=4
break}x=10
return A.b(B.Ub(g,a0),$async$MO)
case 10:f=a3
if(f!=null&&J.cy(f)){m+=J.ad(f)
k.n(0,"status","done")
k.n(0,"deliveredAt",new A.S(Date.now(),0,!1).a6().ac())}r.push(k)
x=4
break
case 5:q=y.cd
n=q.k("J.E")
e=A.B(new A.a2(r,new B.c60(),q),n)
d=A.B(new A.a2(r,new B.c61(),q),n)
q=A.B(e,y.P)
C.d.v(q,A.dd(d,0,A.dJ(50,"count",y.S),A.U(d).c))
x=11
return A.b(B.a61("ngmy_doc_share_inbox_v1_"+u.toLowerCase(),A.F(["deliveries",q],p,o)),$async$MO)
case 11:v=m
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$MO,w)},
aYe(d,e){var x=0,w=A.j(y.S),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h
var $async$aYe=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:h=d.h(0,"files")
if(!y.j.b(h)||J.cl(h)){v=0
x=1
break}u=d.h(0,"senderEmail")
t=J.k(u==null?"":u)
s=A.a([],y.s)
u=J.aV(h),r=y.f,q=0
case 3:if(!u.C()){x=4
break}p=u.gS(u)
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
break}i=B.i0N(k,j)
C.d.v(s,i)
x=5
return A.b(B.CA(l,m,"Received via My Code",t,e,i),$async$aYe)
case 5:if(g!=null)++q
x=3
break
case 4:x=q>0?6:7
break
case 6:x=8
return A.b(B.aOM(s),$async$aYe)
case 8:case 7:v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYe,w)},
c62:function c62(){},
c63:function c63(){},
c64:function c64(){},
c5Z:function c5Z(){},
c6_:function c6_(){},
c5Y:function c5Y(){},
c60:function c60(){},
c61:function c61(){},
fCf(d,e){var x=0,w=A.j(y.H)
var $async$fCf=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.a6(d,!1).c8(A.e8(new B.fCg(e),!1,null,y.H)),$async$fCf)
case 2:return A.h(null,w)}})
return A.i($async$fCf,w)},
bBC(d,e,f,g){var x=0,w=A.j(y.y),v
var $async$bBC=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:if(J.cl(e)){v=!1
x=1
break}x=3
return A.b(A.a6(d,!1).c8(A.e8(new B.fCh(g,e,f),!1,null,y.y)),$async$bBC)
case 3:v=i===!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bBC,w)},
fCg:function fCg(d){this.a=d},
fCh:function fCh(d,e,f){this.a=d
this.b=e
this.c=f},
U1:function U1(d,e){this.c=d
this.a=e},
aBS:function aBS(d){var _=this
_.d=d
_.e=null
_.f=!0
_.c=_.a=null},
dMQ:function dMQ(d,e){this.a=d
this.b=e},
U5:function U5(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBV:function aBV(d,e){var _=this
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
bhb:function bhb(){},
U2:function U2(d,e,f,g){var _=this
_.c=d
_.d=e
_.e=f
_.a=g},
aBT:function aBT(){var _=this
_.f=_.e=_.d=$
_.r=!1
_.c=_.a=null},
dMR:function dMR(d){this.a=d},
dMS:function dMS(d){this.a=d},
fOS(d){var x=d.hN
if(x>=0)return C.o.N(x)
return 10},
hxq(d){var x=d.kB
if(x>=0)return x
return 4.99},
hxp(d){var x=d.lj,w=y.N
w=x.iV(x,new B.c66(),w,w)
return w},
h3L(d){var x=d.kC,w=y.N
w=x.iV(x,new B.c67(),w,w)
return w},
aYh(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o
var $async$aYh=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$aYh)
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
return A.i($async$aYh,w)},
a65(d,e){var x=0,w=A.j(y.H),v,u
var $async$a65=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$a65)
case 4:x=3
return A.b(g.au("String","ngmy_doc_share_path_"+u,e),$async$a65)
case 3:case 1:return A.h(v,w)}})
return A.i($async$a65,w)},
U4(d){var x=0,w=A.j(y.H),v,u
var $async$U4=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=C.a.i(d.toLowerCase())
if(u.length===0){x=1
break}x=4
return A.b(A.az(),$async$U4)
case 4:x=3
return A.b(f.W(0,"ngmy_doc_share_path_"+u),$async$U4)
case 3:case 1:return A.h(v,w)}})
return A.i($async$U4,w)},
fOR(d,e){var x,w,v
if(B.hxq(d)<=0)return!0
x=C.a.i(e.toLowerCase())
if(x.length===0)return!1
w=B.hxp(d).h(0,x)
if(w==null||w.length===0)return!1
v=A.bi(w)
return v!=null&&v.cc(new A.S(Date.now(),0,!1))},
aYf(d,e){var x,w,v=C.a.i(e.toLowerCase())
if(v.length===0)return!1
x=B.h3L(d).h(0,v)
if(x==null||x.length===0)return!1
w=A.bi(x)
return w!=null&&w.cc(new A.S(Date.now(),0,!1))},
h3M(d,e,f){var x,w,v,u,t=C.a.i(e.toLowerCase())
if(t.length===0)return
x=y.N
w=A.a1(B.h3L(d),x,x)
x=w.h(0,t)
v=A.bi(x==null?"":x)
u=v!=null&&v.cc(new A.S(Date.now(),0,!1))?v:new A.S(Date.now(),0,!1)
w.n(0,t,u.bP(A.dC(f,0,0,0,0,0).a).a6().ac())
d.kC=w},
anY(d){var x=0,w=A.j(y.S),v,u=2,t=[],s,r,q,p,o
var $async$anY=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d.toLowerCase())
if(J.ad(p)===0){v=0
x=1
break}u=4
x=7
return A.b(A.az(),$async$anY)
case 7:s=f
r=A.t(p)
r=A.f6(J.q(s.a,"ngmy_doc_share_usage_"+r))
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
return A.i($async$anY,w)},
anZ(d){var x=0,w=A.j(y.H),v,u,t
var $async$anZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d.toLowerCase())
if(t.length===0){x=1
break}x=3
return A.b(B.anY(d),$async$anZ)
case 3:u=f
x=5
return A.b(A.az(),$async$anZ)
case 5:x=4
return A.b(f.au("Int","ngmy_doc_share_usage_"+t,u+1),$async$anZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$anZ,w)},
anX(d,e,f){var x=0,w=A.j(y.y),v,u
var $async$anX=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}u=B.fOS(d)
if(u<=0){v=!1
x=1
break}if(B.fOR(d,e)){v=!1
x=1
break}x=3
return A.b(B.anY(e),$async$anX)
case 3:v=h>=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anX,w)},
aYg(d,e){var x=0,w=A.j(y.S),v,u,t,s
var $async$aYg=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.HY(e,d),$async$aYg)
case 3:if(g){v=-1
x=1
break}u=B.fOS(d)
if(u<=0){v=-1
x=1
break}if(B.fOR(d,e)){v=-1
x=1
break}t=C.o
s=u
x=4
return A.b(B.anY(e),$async$aYg)
case 4:v=t.D(s-g,0,u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYg,w)},
c69(d,e,f){var x=0,w=A.j(y.y),v
var $async$c69=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(f){v=!1
x=1
break}x=3
return A.b(B.HY(e,d),$async$c69)
case 3:if(h){v=!1
x=1
break}v=B.anX(d,e,!1)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c69,w)},
c68(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$c68=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
x=3
return A.b(B.c69(d,u,i.gT_()),$async$c68)
case 3:if(!k){v=!0
x=1
break}v=!1
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c68,w)},
a64(d,e,f,g,h,i){var x=0,w=A.j(y.y),v,u
var $async$a64=A.e(function(j,k){if(j===1)return A.f(k,w)
for(;;)switch(x){case 0:u=i.gdd()
if(i.gT_()){v=!0
x=1
break}if(B.aYf(d,u)){v=!0
x=1
break}x=5
return A.b(A.lc(u,C.Rc),$async$a64)
case 5:x=k?3:4
break
case 3:B.h3M(d,u,30)
g.$0()
x=6
return A.b(h.$0(),$async$a64)
case 6:v=!0
x=1
break
case 4:x=7
return A.b(A.kP(!1,e,u,!1,"Subscribe for your organization license \u2014 create team access codes (30 days).",C.Rc,"Doc Share for Organizations"),$async$a64)
case 7:if(!k){v=!1
x=1
break}B.h3M(d,u,30)
g.$0()
x=8
return A.b(h.$0(),$async$a64)
case 8:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a64,w)},
c66:function c66(){},
c67:function c67(){},
fCS(d,e,f){var x=0,w=A.j(y.T),v,u,t,s,r
var $async$fCS=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(f.$0(),$async$fCS)
case 3:r=h
if(r==null||r.length===0){v=null
x=1
break}u=C.a.i(d.toLowerCase())+"_"+e.a
t=$.f81.W(0,u)
if(t!=null)(self.URL||self.webkitURL).revokeObjectURL(t)
s=(self.URL||self.webkitURL).createObjectURL(A.hM([r],e.c))
s.toString
$.f81.n(0,u,s)
v=s
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCS,w)},
i31(d){if(d==null||d.length===0)return;(self.URL||self.webkitURL).revokeObjectURL(d)
$.f81.bn($.f81,new B.fCU(d))},
fCU:function fCU(d){this.a=d},
f9p(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r
var $async$f9p=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
r=A.aK(e,s,"_")
s=(self.URL||self.webkitURL).createObjectURL(A.hM([d],f))
s.toString
u=A.n3(s)
u.download=r
t=u.style
t.display="none"
t=document.body
if(t!=null)t.appendChild(u).toString
u.click()
x=3
return A.b(A.bN(C.ja,null,y.H),$async$f9p)
case 3:C.zF.f8(u);(self.URL||self.webkitURL).revokeObjectURL(s)
$.eT.mj()
v="Downloaded "+r
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$f9p,w)},
aeN(d,e,f){var x=0,w=A.j(y.H),v
var $async$aeN=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:v=y.N
$.f8z.n(0,d,new B.aaZ(A.bl(e,!0,v)))
x=3
return A.b(A.az(),$async$aeN)
case 3:x=2
return A.b(h.au("String",d+"_manifest",C.R.ao(A.F(["parts",e,"size",f],v,y.C),null)),$async$aeN)
case 2:return A.h(null,w)}})
return A.i($async$aeN,w)},
aeH(d){return B.hN2(d)},
hN2(d){var x=0,w=A.j(y.cm),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$aeH=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:k=$.f8z.h(0,d)
if(k!=null){v=k
x=1
break}j=A
i=J
x=3
return A.b(A.az(),$async$aeH)
case 3:u=j.aT(i.q(f.a,d+"_manifest"))
if(u==null||u.length===0){v=null
x=1
break}try{t=C.R.aG(0,u,null)
if(!y.f.b(t)){v=null
x=1
break}s=J.q(t,"parts")
if(!y.j.b(s)||J.cl(s)){v=null
x=1
break}o=J.b6(s,new B.fd5(),y.N)
n=A.B(o,o.$ti.k("ak.E"))
r=n
o=A.aJ(J.q(t,"size"))
m=o==null?null:C.k.N(o)
q=m==null?0:m
p=new B.aaZ(r)
$.f8z.n(0,d,p)
v=p
x=1
break}catch(h){v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aeH,w)},
PY(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$PY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e.length===0){v=!1
x=1
break}u=new Uint8Array(A.ce(e))
$.FK.n(0,d,u)
x=3
return A.b(B.Qt(d,u),$async$PY)
case 3:t=g
if(!t)$.am.$1("[doc share persist] IndexedDB write failed for "+d+" ("+u.length+" bytes)")
v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$PY,w)},
aME(d){return B.hN0(d)},
hN0(d){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aME=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=$.FK.h(0,d)
if(n!=null&&!C.aG.gam(n)){v=n
x=1
break}x=3
return A.b(B.Qs(d),$async$aME)
case 3:p=f
if(p!=null&&!C.aG.gam(p)){$.FK.n(0,d,p)
v=p
x=1
break}x=4
return A.b(A.az(),$async$aME)
case 4:s=f
r=A.aT(J.q(s.a,d))
if(r==null||r.length===0){v=null
x=1
break}u=6
q=C.cE.aJ(r)
x=!J.cl(q)?9:10
break
case 9:B.PY(d,q)
x=11
return A.b(J.hC(s,d),$async$aME)
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
return A.i($async$aME,w)},
hJe(d){if(d==null)return A.f7(null,y.K)
if(y.J.b(d))return A.f7(new Uint8Array(A.ce(J.eX(d,0,null))),y.K)
if(y.D.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
if(y.Q.b(d))return A.f7(new Uint8Array(A.ce(A.zE(d,0,null))),y.K)
if(y.I.b(d))return A.f7(new Uint8Array(A.ce(d)),y.K)
return A.f7(null,y.K)},
a0J(d){var x=0,w=A.j(y.K),v,u,t,s,r
var $async$a0J=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=new FileReader()
r.toString
u=new A.bg($.bx,y.cf)
t=new A.bW(u,y.aW)
s=y.aK
A.fH(r,"loadend",new B.fhI(r,t),!1,s)
A.fH(r,"error",new B.fhJ(t),!1,s)
r.readAsArrayBuffer(d)
v=u.ia(0,C.Ln,new B.fhK())
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a0J,w)},
aMY(d,e,f){return B.hPh(d,e,f)},
hPh(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h
var $async$aMY=A.e(function(g,a0){if(g===1){t.push(a0)
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
return A.b(B.a0J(i),$async$aMY)
case 10:p=a0
if(p==null||p.length===0){$.am.$1("[doc share web persist chunked] empty slice "+A.t(r)+"-"+A.t(q)+" for "+e)
x=8
break}o=A.t(k)+"_part_"+J.ad(j)
x=11
return A.b(B.Qt(o,p),$async$aMY)
case 11:n=a0
if(!n){$.am.$1("[doc share web persist chunked] part write failed "+A.t(o))
x=8
break}J.ch(j,o)
case 8:r+=1048576
x=7
break
case 9:if(J.ad(j)===0){x=1
break}x=12
return A.b(B.aeN(k,j,s),$async$aMY)
case 12:u=2
x=6
break
case 4:u=3
h=t.pop()
m=A.aa(h)
$.am.$1("[doc share web persist chunked] "+A.t(m))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMY,w)},
aMX(d,e,f){return B.hPg(d,e,f)},
hPg(d,e,f){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m
var $async$aMX=A.e(function(g,h){if(g===1){t.push(h)
x=u}for(;;)switch(x){case 0:n=f.size
n.toString
x=n>33554432?3:4
break
case 3:x=5
return A.b(B.aMY(d,e,f),$async$aMX)
case 5:x=1
break
case 4:s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
u=7
x=10
return A.b(B.a0J(f),$async$aMX)
case 10:r=h
if(r==null||r.length===0){$.am.$1("[doc share web persist] empty read for "+e+" \u2014 keeping live file ref")
x=1
break}$.FK.n(0,s,r)
$.Qe.n(0,s,r)
x=11
return A.b(B.PY(s,r),$async$aMX)
case 11:q=h
if(!q)$.am.$1("[doc share web persist] durable write failed for "+e+" \u2014 kept memory + live file")
u=2
x=9
break
case 7:u=6
m=t.pop()
p=A.aa(m)
$.am.$1("[doc share web persist] "+A.t(p))
x=9
break
case 6:x=2
break
case 9:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aMX,w)},
Bc(d,e,f,g,h,i){return B.hxz(d,e,f,g,h,i)},
hxz(d,e,f,g,h,a0){var x=0,w=A.j(y.l),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$Bc=A.e(function(a1,a2){if(a1===1){t.push(a2)
x=u}for(;;)switch(x){case 0:if(C.a.i(e).length===0||d.length===0){v=null
x=1
break}q=Date.now()
p=""+1000*q+"_"+C.cI.aB(99999)
q=C.a.i(h)
if(q.length===0)q="file"
o=C.a.i(g)
if(o.length===0)o="application/octet-stream"
n=d.length
m=new B.jh(p,q,o,n,new A.S(Date.now(),0,!1).a6().ac(),a0,f,B.aYn(),null)
s="ngmy_doc_share_blob_"+C.a.i(e.toLowerCase())+"_"+p
x=3
return A.b(B.PY(s,d),$async$Bc)
case 3:l=a2
x=n<=524288?4:5
break
case 4:u=7
x=10
return A.b(A.az(),$async$Bc)
case 10:r=a2
x=11
return A.b(r.au("String",s,C.cS.gcv().aJ(d)),$async$Bc)
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
return A.b(B.Ae(e),$async$Bc)
case 12:j=a2
J.ch(j,m)
x=13
return A.b(B.FW(e,j),$async$Bc)
case 13:v=m
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$Bc,w)},
U6(d,e,f){var x=0,w=A.j(y.n),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g
var $async$U6=A.e(function(a0,a1){if(a0===1)return A.f(a1,w)
for(;;)switch(x){case 0:if(C.a.i(d).length===0||e.length===0){v=A.a([],y.r)
x=1
break}u=A.a([],y.r)
x=3
return A.b(B.Ae(d),$async$U6)
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
k=B.h3O(n,null,l)
l=o.size
l.toString
j=new A.S(Date.now(),0,!1).a6().ac()
i=new B.jh(m,n,k,l,j,"From folder",null,B.aYn(),null)
$.aff.n(0,m,o)
h="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+m
x=7
return A.b(B.a0J(o),$async$U6)
case 7:g=a1
x=g!=null&&!C.aG.gam(g)?8:10
break
case 8:$.FK.n(0,h,g)
$.Qe.n(0,h,g)
B.PY(h,g)
x=9
break
case 10:x=11
return A.b(B.aMX(d,m,o),$async$U6)
case 11:case 9:r.K(t,i)
u.push(i)
case 5:e.length===s||(0,A.L)(e),++q
x=4
break
case 6:x=u.length!==0?12:13
break
case 12:x=14
return A.b(B.FW(d,t),$async$U6)
case 14:case 13:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U6,w)},
fOW(d,e,f){var x=0,w=A.j(y.l),v,u,t,s,r,q,p
var $async$fOW=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:r=e.b
q=B.h3O(r,C.d.gal(r.split(".")),null)
p=C.a.i(r)
if(p.length===0)p="file"
u=e.e
if(u<=0){v=null
x=1
break}t=e.d
if(t!=null){v=B.HZ(d,q,p,f,u,t)
x=1
break}s=e.c
if(s!=null&&!C.aG.gam(s)){v=B.Bc(s,d,null,q,p,f)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOW,w)},
HZ(d,e,f,g,h,i){return B.hxy(d,e,f,g,h,i)},
hxy(d,a0,a1,a2,a3,a4){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e
var $async$HZ=A.e(function(a5,a6){if(a5===1){t.push(a6)
x=u}for(;;)switch(x){case 0:if(C.a.i(d).length===0){v=null
x=1
break}j=Date.now()
i=""+1000*j+"_"+C.cI.aB(99999)
r="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+i
q=A.a([],y.s)
p=0
o=0
n=A.a([],y.Z)
j=new A.JO(A.dJ(a4,"stream",y.C))
u=3
case 6:x=8
return A.b(j.C(),$async$HZ)
case 8:if(!a6){x=7
break}m=j.gS(0)
if(J.cl(m)){x=6
break}J.h_(n,m)
o+=J.ad(m)
case 9:if(!(J.ad(n)>=1048576)){x=10
break}l=new Uint8Array(A.ce(J.R0(n,0,1048576)))
h=n
h.$flags&1&&A.ai(h,18)
A.kB(0,1048576,J.ad(h),null,null)
h.splice(0,1048576)
k=A.t(r)+"_part_"+A.t(p)
x=11
return A.b(B.Qt(k,l),$async$HZ)
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
return A.b(j.a8(0),$async$HZ)
case 12:x=s.pop()
break
case 5:x=J.ad(n)!==0?13:14
break
case 13:k=A.t(r)+"_part_"+A.t(p)
x=15
return A.b(B.Qt(k,new Uint8Array(A.ce(n))),$async$HZ)
case 15:J.ch(q,k)
case 14:if(J.ad(q)===0){v=null
x=1
break}g=o>0?o:a3
x=16
return A.b(B.aeN(r,q,g),$async$HZ)
case 16:f=new B.jh(i,a1,a0,g,new A.S(Date.now(),0,!1).a6().ac(),a2,null,B.aYn(),null)
x=17
return A.b(B.Ae(d),$async$HZ)
case 17:e=a6
J.ch(e,f)
x=18
return A.b(B.FW(d,e),$async$HZ)
case 18:v=f
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$HZ,w)},
U8(d,e,f,g){var x=0,w=A.j(y.K),v,u,t,s,r,q,p,o,n,m,l,k,j,i
var $async$U8=A.e(function(h,a0){if(h===1)return A.f(a0,w)
for(;;)switch(x){case 0:if(g<=f){v=new Uint8Array(0)
x=1
break}u=e.a
t=$.aff.h(0,u)
if(t!=null){u=t.slice(f,g)
u.toString
v=B.a0J(u)
x=1
break}s="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+u
x=3
return A.b(B.aeH(s),$async$U8)
case 3:r=a0
x=r!=null?4:5
break
case 4:u=r.a,q=u.length,p=0,o=0
case 6:if(!(o<u.length)){x=8
break}x=9
return A.b(B.Qs(u[o]),$async$U8)
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
v=A.zE(n,k,j>m?m:j)
x=1
break
case 7:u.length===q||(0,A.L)(u),++o
x=6
break
case 8:v=null
x=1
break
case 5:i=$.Qe.h(0,s)
if(i==null)i=$.FK.h(0,s)
x=i==null?10:11
break
case 10:x=12
return A.b(B.re(d,e),$async$U8)
case 12:i=a0
if(i!=null&&!C.aG.gam(i))$.Qe.n(0,s,i)
case 11:if(i==null||f>=i.length){v=null
x=1
break}m=i.length
v=A.zE(i,f,g>m?m:g)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U8,w)},
h3O(d,e,f){var x,w,v="application/octet-stream",u=C.a.i(f==null?"":f).toLowerCase()
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
re(d,e){return B.hxA(d,e)},
hxA(a0,a1){var x=0,w=A.j(y.K),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$re=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=a1.a
f="ngmy_doc_share_blob_"+C.a.i(a0.toLowerCase())+"_"+g
e=$.Qe.h(0,f)
if(e==null)e=$.FK.h(0,f)
if(e!=null&&!C.aG.gam(e)){v=e
x=1
break}s=$.aff.h(0,g)
x=s!=null?3:4
break
case 3:u=6
x=9
return A.b(B.a0J(s),$async$re)
case 9:r=a3
if(r!=null&&!C.aG.gam(r)){$.FK.n(0,f,r)
$.Qe.n(0,f,r)
B.PY(f,r)
v=r
x=1
break}u=2
x=8
break
case 6:u=5
d=t.pop()
q=A.aa(d)
$.am.$1("[doc share readBytes webFile] "+a1.b+": "+A.t(q))
x=8
break
case 5:x=2
break
case 8:case 4:x=10
return A.b(B.aeH(f),$async$re)
case 10:o=a3
x=o!=null&&o.a.length!==0?11:12
break
case 11:n=new A.awL(A.a([],y.a))
g=o.a,m=g.length,l=0
case 13:if(!(l<g.length)){x=15
break}x=16
return A.b(B.Qs(g[l]),$async$re)
case 16:k=a3
if(k!=null&&!C.aG.gam(k))n.K(0,k)
case 14:g.length===m||(0,A.L)(g),++l
x=13
break
case 15:r=n.an0()
if(!C.aG.gam(r)){$.FK.n(0,f,r)
$.Qe.n(0,f,r)
v=r
x=1
break}$.am.$1("[doc share readBytes] incomplete chunks for "+a1.b)
case 12:x=17
return A.b(B.aME(f),$async$re)
case 17:j=a3
if(j!=null&&!C.aG.gam(j)){$.Qe.n(0,f,j)
v=j
x=1
break}x=s!=null?18:19
break
case 18:g=s.size
g.toString
x=20
return A.b(B.U8(a0,a1,0,g),$async$re)
case 20:i=a3
if(i!=null&&!C.aG.gam(i)){h=new Uint8Array(A.ce(i))
$.FK.n(0,f,h)
$.Qe.n(0,f,h)
B.PY(f,h)
v=h
x=1
break}case 19:v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$re,w)},
hxD(d){var x,w,v=$.aff.h(0,d)
if(v==null)return null
try{x=(self.URL||self.webkitURL).createObjectURL(v)
x.toString
return x}catch(w){return null}},
hxE(d,e){var x,w,v
if(d.length===0)return null
try{w=e.length===0?"application/octet-stream":e
x=A.hM([d],w)
w=(self.URL||self.webkitURL).createObjectURL(x)
w.toString
return w}catch(v){return null}},
hxB(d){var x
if(d==null||d.length===0)return
try{(self.URL||self.webkitURL).revokeObjectURL(d)}catch(x){}},
ao4(d,e,f,g,h){return B.hxC(d,e,f,g,h)},
hxC(d,e,f,g,h){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$ao4=A.e(function(i,j){if(i===1){t.push(j)
x=u}for(;;)switch(x){case 0:u=4
s=$.aff.h(0,e.a)
r=null
x=s!=null?7:9
break
case 7:n=s.size
n.toString
f.$2(0,n)
x=10
return A.b(B.a0J(s),$async$ao4)
case 10:q=j
if(q==null||q.length===0){v=!1
x=1
break}r=q
x=8
break
case 9:x=11
return A.b(B.re(g,e),$async$ao4)
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
return A.b(n.i4(d).wE(h,r,new A.Do(!0,e.c)),$async$ao4)
case 12:f.$2(J.ad(r),J.ad(r))
v=!0
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
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
return A.i($async$ao4,w)},
h3Q(d,e,f,g,h){var x,w,v,u,t=$.h3P
$.h3P=t+1
x=Date.now()
w=""+1000*x+"_"+C.cI.aB(99999)
x=C.a.i(d.toLowerCase())
v=A.a([],y.s)
u=A.a([],y.a)
$.c6k.n(0,t,new B.btB(d,w,"ngmy_doc_share_blob_"+x+"_"+w,g,f,h,e,v,new A.awL(u)))
return t},
fOX(d){var x=0,w=A.j(y.H)
var $async$fOX=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOX,w)},
I_(d,e){var $async$I_=A.e(function(a0,a1){switch(a0){case 2:s=v
x=s.pop()
break
case 1:t.push(a1)
x=u}for(;;)switch(x){case 0:h=e.a
g=$.aff.h(0,h)
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
return A.pW(B.U8(d,e,p,o<q?o:q),$async$I_,w)
case 8:n=a1
x=n!=null&&!C.aG.gam(n)?9:10
break
case 9:f+=n.length
x=11
v=[1]
return A.pW(A.Fh(n),$async$I_,w)
case 11:case 10:case 6:p=o
x=5
break
case 7:if(f>0){x=1
break}case 4:x=12
return A.pW(B.aeH("ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+h),$async$I_,w)
case 12:m=a1
x=m!=null?13:14
break
case 13:h=m.a,r=h.length,l=0
case 15:if(!(l<h.length)){x=17
break}x=18
return A.pW(B.Qs(h[l]),$async$I_,w)
case 18:k=a1
x=k!=null&&!C.aG.gam(k)?19:20
break
case 19:f+=k.length
x=21
v=[1]
return A.pW(A.Fh(k),$async$I_,w)
case 21:case 20:case 16:h.length===r||(0,A.L)(h),++l
x=15
break
case 17:if(f>0){x=1
break}case 14:x=22
return A.pW(B.re(d,e),$async$I_,w)
case 22:j=a1
x=j!=null&&!C.aG.gam(j)?23:24
break
case 23:i=j.length,p=0
case 25:if(!(p<i)){x=27
break}o=p+1048576
x=28
v=[1]
return A.pW(A.Fh(A.zE(j,p,o<i?o:i)),$async$I_,w)
case 28:case 26:p=o
x=25
break
case 27:case 24:case 1:return A.pW(null,0,w)
case 2:return A.pW(t.at(-1),1,w)}})
var x=0,w=A.hcr($async$I_,y.D),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f
return A.hef(w)},
aYp(d,e){var x=0,w=A.j(y.y),v,u,t
var $async$aYp=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=$.c6k.h(0,d)
if(t==null||J.cl(e)){v=!1
x=1
break}u=t.x
u.K(0,e)
case 3:if(!(u.gM(u)>=1048576)){x=4
break}x=5
return A.b(t.a3K(),$async$aYp)
case 5:x=3
break
case 4:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYp,w)},
U7(d){var x=0,w=A.j(y.l),v,u,t,s,r
var $async$U7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6k.W(0,d)
if(r==null){v=null
x=1
break}x=3
return A.b(r.a3K(),$async$U7)
case 3:u=r.w
if(u.length===0||r.z<=0){$.am.$1("[doc share web recv] empty receive id="+d)
v=null
x=1
break}x=4
return A.b(B.aeN(r.c,u,r.z),$async$U7)
case 4:t=new B.jh(r.b,r.d,r.e,r.z,new A.S(Date.now(),0,!1).a6().ac(),r.f,r.r,B.aYn(),null)
u=r.a
x=5
return A.b(B.Ae(u),$async$U7)
case 5:s=f
J.ch(s,t)
x=6
return A.b(B.FW(u,s),$async$U7)
case 6:v=t
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U7,w)},
a6b(d){var x=0,w=A.j(y.H),v,u,t,s,r
var $async$a6b=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=$.c6k.W(0,d)
if(r==null){x=1
break}u=r.w,t=u.length,s=0
case 3:if(!(s<u.length)){x=5
break}x=6
return A.b(B.afX(u[s]),$async$a6b)
case 6:case 4:u.length===t||(0,A.L)(u),++s
x=3
break
case 5:r.x.a9(0)
case 1:return A.h(v,w)}})
return A.i($async$a6b,w)},
c6m(d,e,f){var x=0,w=A.j(y.H)
var $async$c6m=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byD(d,e,f),$async$c6m)
case 2:return A.h(null,w)}})
return A.i($async$c6m,w)},
c6n(d,e,f){var x=0,w=A.j(y.H)
var $async$c6n=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=2
return A.b(B.byE(d,e,f),$async$c6n)
case 2:return A.h(null,w)}})
return A.i($async$c6n,w)},
E6(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q,p
var $async$E6=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Ae(d),$async$E6)
case 2:p=g
J.nn(p,new B.c6l(e))
v="ngmy_doc_share_blob_"+C.a.i(d.toLowerCase())+"_"+e
$.FK.W(0,v)
$.aff.W(0,e)
x=3
return A.b(B.aeH(v),$async$E6)
case 3:u=g
$.f8z.W(0,v)
x=4
return A.b(A.az(),$async$E6)
case 4:t=g
x=5
return A.b(t.W(0,v),$async$E6)
case 5:x=6
return A.b(t.W(0,v+"_manifest"),$async$E6)
case 6:x=u!=null?7:8
break
case 7:s=u.a,r=s.length,q=0
case 9:if(!(q<s.length)){x=11
break}x=12
return A.b(B.afX(s[q]),$async$E6)
case 12:case 10:s.length===r||(0,A.L)(s),++q
x=9
break
case 11:case 8:x=13
return A.b(B.afX(v),$async$E6)
case 13:x=14
return A.b(B.FW(d,p),$async$E6)
case 14:return A.h(null,w)}})
return A.i($async$E6,w)},
aYo(d,e){var x=0,w=A.j(y.N),v,u,t
var $async$aYo=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.re(d,e),$async$aYo)
case 3:t=g
if(t==null||t.length===0){v="File not found on this device."
x=1
break}u=A.af("[^\\w\\-.]+",!0,!1,!1,!1)
v=B.f9p(t,A.aK(e.b,u,"_"),e.c)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYo,w)},
Ae(d){var x=0,w=A.j(y.n),v,u,t,s,r,q
var $async$Ae=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$Ae)
case 3:s=f
r=C.a.i(d.toLowerCase())
q=A.aT(J.q(s.a,"ngmy_doc_share_index_v1_"+r))
if(q==null||q.length===0){v=A.a([],y.r)
x=1
break}try{u=C.R.aG(0,q,null)
if(!y.j.b(u)){r=A.a([],y.r)
v=r
x=1
break}r=J.b6(u,new B.fhL(),y.U)
r=A.B(r,r.$ti.k("ak.E"))
v=r
x=1
break}catch(p){r=A.a([],y.r)
v=r
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$Ae,w)},
FW(d,e){var x=0,w=A.j(y.H),v,u,t
var $async$FW=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=2
return A.b(A.az(),$async$FW)
case 2:v=g
u=C.a.i(d.toLowerCase())
t=J.b6(e,new B.flH(),y.P)
t=A.B(t,t.$ti.k("ak.E"))
x=3
return A.b(v.au("String","ngmy_doc_share_index_v1_"+u,C.R.ao(t,null)),$async$FW)
case 3:return A.h(null,w)}})
return A.i($async$FW,w)},
byD(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byD=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ae(d),$async$byD)
case 3:u=h
t=J.cE(u)
s=t.bc(u,new B.fga(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).aCv(f))
x=4
return A.b(B.FW(d,u),$async$byD)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byD,w)},
byE(d,e,f){var x=0,w=A.j(y.H),v,u,t,s
var $async$byE=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Ae(d),$async$byE)
case 3:u=h
t=J.cE(u)
s=t.bc(u,new B.fgb(e))
if(s<0){x=1
break}t.n(u,s,t.h(u,s).cF3(f))
x=4
return A.b(B.FW(d,u),$async$byE)
case 4:case 1:return A.h(v,w)}})
return A.i($async$byE,w)},
aaZ:function aaZ(d){this.a=d},
fd5:function fd5(){},
fhI:function fhI(d,e){this.a=d
this.b=e},
fhJ:function fhJ(d){this.a=d},
fhK:function fhK(){},
c6l:function c6l(d){this.a=d},
btB:function btB(d,e,f,g,h,i,j,k,l){var _=this
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
fhL:function fhL(){},
flH:function flH(){},
fga:function fga(d){this.a=d},
fgb:function fgb(d){this.a=d},
a6c(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p,o
var $async$a6c=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length===0){v=null
x=1
break}x=C.d.b8(d,new B.c6q())?3:4
break
case 3:x=5
return A.b(B.aYq(d,e),$async$a6c)
case 5:u=g
if(u!=null){t=u.c
B.MQ(d,u.b,e,t)}v=u
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
return A.b(B.aYl(s),$async$a6c)
case 10:case 9:if(g){v=new A.Pl(1,D.QQ,"NGMYDOCSYNC1|"+s)
x=1
break}case 7:x=11
return A.b(B.U9(d,e),$async$a6c)
case 11:r=g
if(r!=null){v=r
x=1
break}x=12
return A.b(B.Ue(!0,!0,d,e),$async$a6c)
case 12:q=g
if(q!=null){t=q.b
p=q.a
B.MQ(d,D.yR,e,t)
v=new A.Pl(p,D.yR,t)
x=1
break}v=B.c6p(d,e)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6c,w)},
U9(d,e){var x=0,w=A.j(y.L),v,u,t,s,r,q,p
var $async$U9=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.a6e(null,d,e),$async$U9)
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
return A.b(B.aYk(p,d.length,e),$async$U9)
case 4:r=g
if(r==null){v=null
x=1
break}x=d.length===1?5:6
break
case 5:x=7
return A.b(B.c6n(e,C.d.gL(d).a,r.b),$async$U9)
case 7:case 6:q=r.a
x=8
return A.b(B.MQ(d,D.QQ,e,q),$async$U9)
case 8:v=new A.Pl(d.length,D.QQ,q)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$U9,w)},
Ua(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q
var $async$Ua=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(C.a.a0(d.c,"video/")||d.mo(D.ms)){v=!1
x=1
break}u=d.x
t=C.a.i(u==null?"":u)
x=3
return A.b(B.a6d(d,e),$async$Ua)
case 3:s=g
x=t.length!==0?4:5
break
case 4:x=8
return A.b(B.c6i(s,d,e,t),$async$Ua)
case 8:q=g
if(q){x=6
break}else g=q
x=7
break
case 6:x=9
return A.b(B.aYl(t),$async$Ua)
case 9:case 7:v=g
x=1
break
case 5:x=10
return A.b(B.re(e,d),$async$Ua)
case 10:r=g
if(r==null||r.length===0){v=!1
x=1
break}x=11
return A.b(B.U9(A.a([d],y.r),e),$async$Ua)
case 11:v=g!=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ua,w)},
Uc(){var x=0,w=A.j(y.H)
var $async$Uc=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.fOQ(),$async$Uc)
case 2:x=3
return A.b(B.aP2(),$async$Uc)
case 3:return A.h(null,w)}})
return A.i($async$Uc,w)},
a6d(d,e){var x=0,w=A.j(y.N),v,u,t,s
var $async$a6d=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=d.w
s=C.a.i(t==null?"":t)
if(s.length!==0){v=s.toUpperCase()
x=1
break}u=B.aYn()
x=3
return A.b(B.c6m(e,d.a,u),$async$a6d)
case 3:v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a6d,w)},
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
return A.b(B.a6d(p,f),$async$MQ)
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
return A.b(B.c6h(o,p,u,f),$async$MQ)
case 14:x=8
break
case 10:x=r&&t.length!==0?15:16
break
case 15:x=17
return A.b(B.c6i(o,p,f,t),$async$MQ)
case 17:case 16:x=8
break
case 11:x=18
return A.b(B.c6g(o,u,p,f),$async$MQ)
case 18:x=8
break
case 12:case 13:x=8
break
case 8:case 4:d.length===n||(0,A.L)(d),++q
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$MQ,w)},
aYq(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$aYq=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6o(e,d),$async$aYq)
case 3:if(!g){v=null
x=1
break}x=4
return A.b(B.Ue(!1,!0,d,e),$async$aYq)
case 4:u=g
if(u!=null){t=u.b
v=new A.Pl(u.a,D.yR,t)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYq,w)},
c6o(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$c6o=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:u=e.length,t=0
case 3:if(!(t<e.length)){x=5
break}s=e[t]
if(s.d<=0){v=!1
x=1
break}x=6
return A.b(B.U8(d,s,0,1),$async$c6o)
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
return A.i($async$c6o,w)},
c6p(d,e){var x=0,w=A.j(y.L),v,u,t
var $async$c6p=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(d.length!==1){v=null
x=1
break}if(C.d.gL(d).d>2048){v=null
x=1
break}x=3
return A.b(B.a6e(null,d,e),$async$c6p)
case 3:u=g
t="NGMYDOCSYNC0|z|"+B.h3N(u)
if(t.length>800){v=null
x=1
break}v=new A.Pl(d.length,D.dtt,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6p,w)},
ao5(d,e,f){return B.hxH(d,e,f)},
hxH(d,e,a0){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f
var $async$ao5=A.e(function(a2,a3){if(a2===1){t.push(a3)
x=u}for(;;)switch(x){case 0:g=C.a.i(e)
if(J.d_(g,"\ufeff"))g=J.mC(g,1)
x=B.fOV(g)?3:4
break
case 3:x=5
return A.b(B.c6j(g),$async$ao5)
case 5:l=a3
if(l!=null&&l.length!==0)g=l
else{v=null
x=1
break}case 4:if(J.d_(g,"NGMYDOCSYNC4|")){s=C.a.i(J.mC(g,13))
try{k=B.E7(d,a0,s)
v=k
x=1
break}catch(a1){r=A.aa(a1)
$.am.$1("[doc share video cloud import] "+A.t(r))
v=null
x=1
break}}x=J.d_(g,"NGMYDOCSYNC1|")?6:7
break
case 6:q=C.a.i(J.mC(g,13))
u=9
x=12
return A.b(B.aYj(q),$async$ao5)
case 12:p=a3
if(p==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ub(p,a0)
v=k
x=1
break
u=2
x=11
break
case 9:u=8
f=t.pop()
o=A.aa(f)
$.am.$1("[doc share cloud qr] "+A.t(o))
v=null
x=1
break
x=11
break
case 8:x=2
break
case 11:case 7:if(J.d_(g,"NGMYDOCSYNC0|"))try{n=B.fOU(g,"NGMYDOCSYNC0")
if(n==null){v=null
x=1
break}if(d!=null)d.$2(1,1)
k=B.Ub(n,a0)
v=k
x=1
break}catch(a1){m=A.aa(a1)
$.am.$1("[doc share inline qr] "+A.t(m))
v=null
x=1
break}if(J.d_(g,"N2|")){v=B.I0(C.a.i(J.mC(g,3)),d,a0)
x=1
break}if(J.d_(g,"NGMYDOCSYNC2|")){v=B.I0(C.a.i(J.mC(g,13)),d,a0)
x=1
break}i=A.af("https?://\\S+",!0,!1,!1,!1).cD(g)
if(i!=null){k=i.b[0]
k.toString
if(C.a.cb(k,"/"))h=C.a.ap(k,0,k.length-1)
else h=k
v=B.I0(h,d,a0)
x=1
break}if(J.f_(g,"ngmyDocShareBundle")){if(d!=null)d.$2(1,1)
v=B.Ub(g,a0)
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao5,w)},
I0(d,e,f){return B.hxF(d,e,f)},
hxF(a0,a1,a2){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$I0=A.e(function(a3,a4){if(a3===1){t.push(a4)
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
return A.b(B.aYb(r),$async$I0)
case 7:p=a4
x=p==null?8:9
break
case 8:x=10
return A.b(B.aYb(A.cw(s,0,null)),$async$I0)
case 10:p=a4
case 9:if(p==null){v=null
x=1
break}o=J.q(p,"files")
if(!y.j.b(o)||J.cl(o)){v=null
x=1
break}g=J.q(p,"ownerEmail")
n=J.k(g==null?"":g)
x=11
return A.b(B.c5W(o,r,a1,n,a2),$async$I0)
case 11:m=a4
x=J.cl(m)?12:13
break
case 12:x=14
return A.b(B.c5V(q),$async$I0)
case 14:l=a4
x=l!=null&&C.a.t(l,"ngmyDocShareBundle")?15:16
break
case 15:if(a1!=null)a1.$2(1,1)
x=17
return A.b(B.Ub(l,a2),$async$I0)
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
k=A.aa(d)
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
return A.i($async$I0,w)},
a6e(d,e,f){var x=0,w=A.j(y.N),v,u,t,s,r,q,p
var $async$a6e=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:p=A.a([],y.t)
u=J.aV(e),t=y.N,s=y.z
case 3:if(!u.C()){x=4
break}r=u.gS(u)
x=5
return A.b(B.re(f,r),$async$a6e)
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
return A.i($async$a6e,w)},
Ub(d,e){return B.hxG(d,e)},
hxG(a2,a3){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1
var $async$Ub=A.e(function(a4,a5){if(a4===1){t.push(a5)
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
break}m=e.gS(e)
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
return A.b(B.Bc(i,a3,d,k,l,o),$async$Ub)
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
g=A.aa(a1)
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
return A.i($async$Ub,w)},
MP:function MP(d,e){this.a=d
this.b=e},
c6q:function c6q(){},
a0j(d){var x=A.P(d).ax.a===C.I,w=x?D.adc:D.ab4,v=x?D.aeH:C.c,u=x?C.aQ:C.M,t=x?C.bJ:C.ak,s=x?D.aci:C.aL
return new A.aEU([w,s,v,u,t,x?C.f7:C.bW])},
hj2(d,e){var x=e?C.w.j(0.72):C.aX
return A.ca(null,x,!0,null,new B.fGW(e),d,null,!0,!0,y.N)},
c65(d,e,f,g,h,i,j,k,l){return new B.U3(e,l,d,f,k,j,g,h,i,null)},
Ym(d,e,f,g,h,i,j){return new B.bbR(g,h,j,e,i,d,f,null)},
fGW:function fGW(d){this.a=d},
Yj:function Yj(d,e){this.c=d
this.a=e},
axW:function axW(d,e){var _=this
_.d=d
_.e=e
_.c=_.a=null},
d0d:function d0d(d){this.a=d},
d0b:function d0b(d){this.a=d},
d0c:function d0c(d){this.a=d},
btf:function btf(){},
U3:function U3(d,e,f,g,h,i,j,k,l,m){var _=this
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
aBU:function aBU(d,e){var _=this
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
axT:function axT(d,e,f,g,h,i){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.a=i},
bbQ:function bbQ(d,e,f){this.c=d
this.d=e
this.a=f},
d09:function d09(){},
d0a:function d0a(){},
abi:function abi(d,e,f,g,h,i,j,k,l,m,n){var _=this
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
Yl:function Yl(d,e,f){this.c=d
this.d=e
this.a=f},
axY:function axY(){var _=this
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
Yi:function Yi(d,e,f){this.c=d
this.d=e
this.a=f},
axV:function axV(d,e,f){var _=this
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
OZ:function OZ(d,e,f){this.c=d
this.d=e
this.a=f},
ay0:function ay0(){var _=this
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
Yn:function Yn(d,e,f,g,h){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.a=h},
axZ:function axZ(d){var _=this
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
abg:function abg(d,e){this.c=d
this.a=e},
d_Z:function d_Z(d){this.a=d},
Yh:function Yh(d){this.a=d},
axU:function axU(d){var _=this
_.d=d
_.e=!1
_.c=_.a=null},
Yo:function Yo(d,e){this.c=d
this.a=e},
ay_:function ay_(d){var _=this
_.d=d
_.f=_.e=!1
_.c=_.a=null},
d0J:function d0J(d){this.a=d},
d0I:function d0I(d){this.a=d},
bbR:function bbR(d,e,f,g,h,i,j,k){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.x=j
_.a=k},
hxI(){var x,w=$.pk(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"VT"+C.d.fW(v)},
MR(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$MR=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$MR)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f2("ngmy_doc_share_video_relay_v1",null,!1,C.bG),$async$MR)
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
q=A.aa(n)
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
a6f(d){return B.hxJ(d)},
hxJ(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$a6f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6f)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_video_relay_v1",A.F(["relays",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$a6f)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share video cloud] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6f,w)},
Ud(d,e){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$Ud=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MR(),$async$Ud)
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
return A.b(B.a6f(s),$async$Ud)
case 4:case 1:return A.h(v,w)}})
return A.i($async$Ud,w)},
Ue(d,e,f,g){var x=0,w=A.j(y.aX),v,u,t,s,r,q,p
var $async$Ue=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:p=f.length===0
if(p)i=p
else{x=3
break}x=4
break
case 3:x=5
return A.b(A.c3(),$async$Ue)
case 5:i=!i
case 4:if(i){v=null
x=1
break}if(d)u=A.bl(f,!0,y.U)
else{t=A.U(f).k("a2<1>")
u=A.B(new A.a2(f,new B.c6s(),t),t.k("J.E"))}if(u.length===0){v=null
x=1
break}s=B.hxI()
t=A.U(u).k("K<1,a4<n,aC>>")
r=A.B(new A.K(u,new B.c6t(s),t),t.k("ak.E"))
x=6
return A.b(B.MR(),$async$Ue)
case 6:q=i
J.aF(q,s,A.F(["ownerEmail",C.a.i(g).toLowerCase(),"ready",!1,"uploading",!0,"files",r,"usesRemaining",8,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=7
return A.b(B.a6f(q),$async$Ue)
case 7:x=8
return A.b(B.a6g(r,u,g,s),$async$Ue)
case 8:v=new A.bnl(u.length,"NGMYDOCSYNC4|"+s,s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$Ue,w)},
ao6(d){var x=0,w=A.j(y.y),v,u,t
var $async$ao6=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(B.MR(),$async$ao6)
case 3:u=t.q(f,C.a.i(d))
if(!y.f.b(u)){v=!1
x=1
break}v=J.z(J.q(u,"ready"),!0)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao6,w)},
c6u(d){var x=0,w=A.j(y.dd),v,u,t,s,r
var $async$c6u=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=J
x=3
return A.b(B.MR(),$async$c6u)
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
return A.i($async$c6u,w)},
a6g(d,e,f,g){return B.hxK(d,e,f,g)},
hxK(d,e,f,g){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$a6g=A.e(function(h,i){if(h===1){t.push(i)
x=u}for(;;)switch(x){case 0:u=4
s=0
case 7:if(!(s<e.length)){x=9
break}r=e[s]
n=J.q(d[s],"storagePath")
q=J.k(n==null?"":n)
if(J.ad(q)===0){x=8
break}x=10
return A.b(B.ao4("media",r,new B.c6r(s,e,g),f,q),$async$a6g)
case 10:p=i
x=!p?11:12
break
case 11:x=13
return A.b(B.Ud(g,A.F(["ready",!1,"uploading",!1,"error","Upload failed for "+r.b],y.N,y.z)),$async$a6g)
case 13:x=1
break
case 12:case 8:++s
x=7
break
case 9:x=14
return A.b(B.Ud(g,A.F(["ready",!0,"uploading",!1,"uploadProgress",1,"readyAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$a6g)
case 14:u=2
x=6
break
case 4:u=3
l=t.pop()
o=A.aa(l)
$.am.$1("[doc share video cloud] upload: "+A.t(o))
x=15
return A.b(B.Ud(g,A.F(["ready",!1,"uploading",!1,"error",J.k(o)],y.N,y.z)),$async$a6g)
case 15:x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a6g,w)},
E7(d,e,f){return B.hxL(d,e,f)},
hxL(b6,b7,b8){var x=0,w=A.j(y._),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4,a5,a6,a7,a8,a9,b0,b1,b2,b3,b4,b5
var $async$E7=A.e(function(b9,c0){if(b9===1){t.push(c0)
x=u}for(;;)switch(x){case 0:b3=C.a.i(b8)
if(b3.length===0||!C.a.a0(b3,"VT")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$E7)
case 3:if(!c0){v=null
x=1
break}g=y.H,f=0
case 4:if(!(f<7200)){x=6
break}x=7
return A.b(B.ao6(b3),$async$E7)
case 7:if(c0){x=6
break}x=8
return A.b(A.bN(C.kg,null,g),$async$E7)
case 8:case 5:++f
x=4
break
case 6:x=9
return A.b(B.ao6(b3),$async$E7)
case 9:if(!c0){v=null
x=1
break}x=10
return A.b(B.MR(),$async$E7)
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
a2=a1.gae(a4),a5=y.N,a6=b6==null
case 11:if(!a2.C()){x=12
break}a7=a2.gS(a2)
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
b0=A.oO(null,null,a5,a5)
b0.v(0,a8.b)
l=new A.a9z(a8.a,b0,"media",a8.d,a9).Cf(m)
k=A.cw(l,0,null)
x=17
return A.b(B.aYc(k,n,o,s,b7),$async$E7)
case 17:j=c0
if(j!=null){J.ch(p,j);++q
if(!a6)b6.$2(q,r)}u=2
x=16
break
case 14:u=13
b4=t.pop()
i=A.aa(b4)
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
g=a1.gae(a4),a1=y.s
case 21:if(!g.C()){x=22
break}a7=g.gS(g)
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
a8=A.oO(null,null,a5,a5)
a8.v(0,a2.b)
x=31
return A.b(new A.a9z(a2.a,a8,"media",a2.d,a6).W(0,A.a([h],a1)),$async$E7)
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
return A.b(B.a6f(e),$async$E7)
case 32:v=p
x=1
break
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$E7,w)},
c6s:function c6s(){},
c6t:function c6t(d){this.a=d},
c6r:function c6r(d,e,f){this.a=d
this.b=e
this.c=f},
aP2(){var x=0,w=A.j(y.H),v,u
var $async$aP2=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:$.hIE=null
v=y.H
u=A.dP(null,v)
x=2
return A.b(u,$async$aP2)
case 2:u=A.dP(null,v)
x=3
return A.b(u,$async$aP2)
case 3:u=$.fU_
u=u==null?null:u.bB(0)
x=4
return A.b(y.x.b(u)?u:A.dP(u,v),$async$aP2)
case 4:$.fU_=$.hR6=$.hR7=null
return A.h(null,w)}})
return A.i($async$aP2,w)},
fli(d){var x=0,w=A.j(y.H),v,u
var $async$fli=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.CW===D.a56){x=1
break}u=new A.bg($.bx,y.d4)
d.c=new B.flj(new A.bW(u,y.aY))
x=3
return A.b(u.ia(0,C.hH,new B.flk()),$async$fli)
case 3:case 1:return A.h(v,w)}})
return A.i($async$fli,w)},
hR4(d,e){var x=C.a.i(d==null?"":d)
if(x.length===0)return""
return e?B.hxs(x):x},
fU3(d){var x=0,w=A.j(y.T),v,u,t
var $async$fU3=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,13))
if(C.a.a0(u,"WR")){v=B.ao8(u)
x=1
break}v=B.fOU(t,"NGMYDOCSYNC3")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fU3,w)},
fU2(d){var x=0,w=A.j(y.T),v,u,t
var $async$fU2=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=C.a.i(d)
if(!C.a.a0(t,"NGMYDOCSYNC3A|")){v=null
x=1
break}u=C.a.i(C.a.b0(t,14))
if(C.a.a0(u,"WR")){v=B.ao9(u)
x=1
break}v=B.fOU(t,"NGMYDOCSYNC3A")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fU2,w)},
fCC(d){var x=0,w=A.j(y.T),v
var $async$fCC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao9(d),$async$fCC)
case 3:if(f==null){v=null
x=1
break}v="NGMYDOCSYNC3A|"+d
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fCC,w)},
bzv(d){var x=0,w=A.j(y.H),v,u,t,s,r,q
var $async$bzv=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.fU2(d),$async$bzv)
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
return A.i($async$bzv,w)},
fae(d,e,f,g,h){var x=0,w=A.j(y.l),v
var $async$fae=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:if(g!=null){v=B.U7(g)
x=1
break}if(d.gM(d)<=0){v=null
x=1
break}v=B.Bc(d.an0(),h,null,e,f,"Received via QR")
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fae,w)},
FY(d,e,f){return B.hTs(d,e,f)},
hTs(a0,a1,a2){var x=0,w=A.j(y.d),v,u,t,s,r,q,p,o,n,m,l,k,j,i,h,g,f,e,d
var $async$FY=A.e(function(a3,a4){if(a3===1)return A.f(a4,w)
for(;;)switch(x){case 0:f={}
x=3
return A.b(B.fU3(a1),$async$FY)
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
return A.b($.hkU().aCK(D.dhV,null),$async$FY)
case 4:l=d.fU_=a4
f.a="file"
f.b="application/octet-stream"
k=new A.awL(A.a([],y.a))
f.c=null
j=A.a([],y.r)
f.d=0
t=new A.bg($.bx,y.b1)
l.y=new B.flQ(f,k,new B.flR(f,a2,k,j,a0,p),a2,j,a0,p,new A.bW(t,y.ch))
x=5
return A.b(l.a6E(0,new B.Wp(r,"offer")),$async$FY)
case 5:d=l
x=7
return A.b(l.ajR(0),$async$FY)
case 7:x=6
return A.b(d.a6w(0,a4),$async$FY)
case 6:x=8
return A.b(B.fli(l),$async$FY)
case 8:x=9
return A.b(l.anK(),$async$FY)
case 9:f=a4
f=f==null?null:f.a
s=m==null
i=B.hR4(f,s)
if(i.length===0){v=null
x=1
break}f=y.N
h=C.R.ao(A.F(["s",i],f,f),null)
x=!s?10:12
break
case 10:x=13
return A.b(B.aoa(m,h),$async$FY)
case 13:g="NGMYDOCSYNC3A|"+m
x=11
break
case 12:g="NGMYDOCSYNC3A|z|"+B.h3N(h)
case 11:v=new A.bmD(g,t)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$FY,w)},
flj:function flj(d){this.a=d},
flk:function flk(){},
flR:function flR(d,e,f,g,h,i){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i},
flQ:function flQ(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
flP:function flP(d,e,f,g,h,i,j,k){var _=this
_.a=d
_.b=e
_.c=f
_.d=g
_.e=h
_.f=i
_.r=j
_.w=k},
hVj(d){switch(d){case"new":return D.ea6
case"checking":return D.ea7
case"connected":return D.ea9
case"completed":return D.ea8
case"failed":return D.eab
case"disconnected":return D.eac
case"closed":return D.aKz
case"count":return D.eaa}return D.aKz},
hVk(d){switch(d){case"new":return D.aKA
case"gathering":return D.ead
case"complete":return D.a56}return D.aKA},
i4v(d){switch(d){case"stable":return D.eae
case"have-local-offer":return D.eaf
case"have-local-pranswer":return D.eah
case"have-remote-offer":return D.eag
case"have-remote-pranswer":return D.eai
case"closed":return D.aKG}return D.aKG},
i2L(d){switch(d){case"new":return D.aKD
case"connecting":return D.aKE
case"connected":return D.aKF
case"closed":return D.a57
case"disconnected":return D.aKC
case"failed":return D.aKB}return D.a57},
a8x:function a8x(d,e){this.a=d
this.b=e},
NR:function NR(d,e){this.a=d
this.b=e},
Wo:function Wo(d,e){this.a=d
this.b=e},
NQ:function NQ(d,e){this.a=d
this.b=e},
EA:function EA(d,e){this.a=d
this.b=e},
chp:function chp(){},
fQF(d){var x=new B.Ez()
x.a=d
x.b=!0
return x},
Ez:function Ez(){this.b=this.a=$},
a8w:function a8w(){},
aso:function aso(){},
Wp:function Wp(d,e){this.a=d
this.b=e},
fOQ(){var x=0,w=A.j(y.H)
var $async$fOQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:return A.h(null,w)}})
return A.i($async$fOQ,w)},
fOT(d,e,f){var x=0,w=A.j(y.T),v
var $async$fOT=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(!(C.a.a0(e.c,"video/")||e.mo(D.ms))){v=null
x=1
break}v=B.fCS(d,e,f)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$fOT,w)},
h3N(d){var x,w=F.aaw.a3u(C.dJ.aJ(d),null)
if(w.length===0){x=C.dJ.aJ(d)
return C.cS.gcv().aJ(x)}return C.cS.gcv().aJ(w)},
hxr(d){var x,w,v=C.cE.aJ(d)
try{x=C.c4.ca(0,F.aav.baS(v,!1))
return x}catch(w){x=C.c4.ca(0,v)
return x}},
fOU(d,e){var x,w,v,u,t=C.a.i(d),s=e+"|z|"
if(C.a.a0(t,s))return B.hxr(C.a.b0(t,s.length))
w=e+"|"
if(C.a.a0(t,w)){x=C.a.b0(t,w.length)
try{v=C.c4.ca(0,C.cE.aJ(x))
return v}catch(u){return x}}return null},
hxs(d){var x,w,v,u,t,s=A.a([],y.s)
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
hxt(){var x,w=$.pk(),v=J.e3(10,y.N)
for(x=0;x<10;++x)v[x]="ABCDEFGHJKLMNPQRSTUVWXYZ23456789"[w.aB(32)]
return"DS"+C.d.fW(v)},
aYi(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$aYi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=null
x=1
break}u=4
x=7
return A.b(A.f2("ngmy_doc_share_stash_v2_"+C.a.i(p),null,!1,C.bG),$async$aYi)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$aYi,w)},
c6a(d,e){return B.hxu(d,e)},
hxu(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$c6a=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=C.a.i(d)
if(J.ad(p)===0){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_stash_v2_"+C.a.i(p),e,!1,!1,C.cG,null),$async$c6a)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$c6a,w)},
aYl(d){var x=0,w=A.j(y.y),v,u,t
var $async$aYl=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.aYi(d),$async$aYl)
case 3:t=f
if(t!=null){u=J.q(t,"payload")
u=J.k(u==null?"":u).length!==0}else u=!1
v=u
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYl,w)},
aYk(d,e,f){var x=0,w=A.j(y.cw),v,u,t,s,r
var $async$aYk=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:s=C.a.i(d)
r=s.length
if(r===0||r>25165824){v=null
x=1
break}u=B.hxt()
r=C.a.i(f)
t=C.dJ.aJ(s)
x=3
return A.b(B.c6a(u,A.F(["ownerEmail",r.toLowerCase(),"fileCount",e,"payload",C.cS.gcv().aJ(t),"usesRemaining",999999,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$aYk)
case 3:if(!h){v=null
x=1
break}v=new A.a_n("NGMYDOCSYNC1|"+u,u,999999)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYk,w)},
aYj(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$aYj=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:o=C.a.i(d)
if(J.ad(o)===0){v=null
x=1
break}x=3
return A.b(B.aYi(o),$async$aYj)
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
break}catch(n){s=A.aa(n)
$.am.$1("[doc share qr stash] decode "+A.t(o)+": "+A.t(s))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$aYj,w)},
c6b(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$c6b=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:q=C.a.i(d)
if(J.ad(q)===0){x=1
break}u=4
x=7
return A.b(X.bAs("ngmy_doc_share_stash_v2_"+C.a.i(q),C.cG),$async$c6b)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[doc share qr stash] delete "+A.t(q)+": "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$c6b,w)},
aYm(d){var x=0,w=A.j(y.h),v,u,t
var $async$aYm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=J
x=3
return A.b(A.HX(),$async$aYm)
case 3:u=t.q(f,C.a.i(d.toLowerCase()))
if(!y.f.b(u)){v=null
x=1
break}v=A.a1(u,y.N,y.z)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aYm,w)},
ao1(d){var x=0,w=A.j(y.h),v,u,t,s
var $async$ao1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao1)
case 3:u=f
t=C.a.i(d.toLowerCase())
s=A.aT(J.q(u.a,"ngmy_doc_share_org_owner_portal_"+t))
if(s==null||s.length===0){v=null
x=1
break}v=B.aYm(s)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ao1,w)},
ao_(d,e){var x=0,w=A.j(y.H)
var $async$ao_=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao_)
case 3:x=2
return A.b(g.au("String","ngmy_doc_share_org_owner_portal_"+C.a.i(d.toLowerCase()),C.a.i(e)),$async$ao_)
case 2:return A.h(null,w)}})
return A.i($async$ao_,w)},
a67(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$a67=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a67)
case 3:if(!i){v=!1
x=1
break}u=C.a.i(d)
t=C.a.i(g)
if(u.length<3||t.length<4){v=!1
x=1
break}x=4
return A.b(A.HX(),$async$a67)
case 4:s=i
r=C.a.i(u.toLowerCase())
q=J.dk(s)
if(q.ai(s,r)){v=!1
x=1
break}p=C.a.i(e)
q.n(s,r,A.F(["schoolName",p,"organizationName",p,"loginCode",u,"password",t,"ownerEmail",C.a.i(f.toLowerCase()),"active",!0,"createdAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.C))
x=5
return A.b(A.a66(s),$async$a67)
case 5:x=6
return A.b(B.ao_(f,u),$async$a67)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a67,w)},
a68(d,e,f,g,h){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a68=A.e(function(i,j){if(i===1)return A.f(j,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a68)
case 3:if(!j){v=!1
x=1
break}x=4
return A.b(A.HX(),$async$a68)
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
if(o!==t&&s.ai(u,o)){v=!1
x=1
break}q=C.a.i(e)
p.n(0,"loginCode",q)
s.W(u,t)
s.n(u,o,p)
x=8
return A.b(B.ao_(g,q),$async$a68)
case 8:x=6
break
case 7:s.n(u,t,p)
case 6:x=9
return A.b(A.a66(u),$async$a68)
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a68,w)},
a69(d,e,f,g){var x=0,w=A.j(y.y),v,u,t,s,r,q,p,o
var $async$a69=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a69)
case 3:if(!i){v=!1
x=1
break}o=J
x=4
return A.b(A.HX(),$async$a69)
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
s=B.aYf(d,J.k(s==null?"":s))
if(!s){v=!1
x=1
break}x=5
return A.b(A.az(),$async$a69)
case 5:r=i
s=C.a.i(f.toLowerCase())
q=C.a.i(e)
p=t.h(u,"schoolName")
t=p==null?t.h(u,"organizationName"):p
p=y.N
x=6
return A.b(r.au("String","ngmy_doc_share_school_session_"+s,C.R.ao(A.F(["loginCode",q,"schoolName",J.k(t==null?"Organization":t),"loginAt",new A.S(Date.now(),0,!1).a6().ac()],p,p),null)),$async$a69)
case 6:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$a69,w)},
c6c(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o,n,m
var $async$c6c=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:n=C.a.i(d.toLowerCase())
if(J.ad(n)===0){v=null
x=1
break}u=4
x=7
return A.b(A.az(),$async$c6c)
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
return A.i($async$c6c,w)},
HY(d,e){var x=0,w=A.j(y.y),v,u,t,s,r
var $async$HY=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:x=3
return A.b(B.c6c(d),$async$HY)
case 3:r=g
if(r==null){v=!1
x=1
break}u=J.q(r,"loginCode")
t=J.k(u==null?"":u)
if(t.length===0){v=!1
x=1
break}x=4
return A.b(B.aYm(t),$async$HY)
case 4:s=g
x=s==null||!J.z(J.q(s,"active"),!0)?5:6
break
case 5:x=7
return A.b(B.ao0(d),$async$HY)
case 7:v=!1
x=1
break
case 6:u=J.q(s,"ownerEmail")
u=B.aYf(e,J.k(u==null?"":u))
x=!u?8:9
break
case 8:x=10
return A.b(B.ao0(d),$async$HY)
case 10:v=!1
x=1
break
case 9:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HY,w)},
ao0(d){var x=0,w=A.j(y.H)
var $async$ao0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(A.az(),$async$ao0)
case 3:x=2
return A.b(f.W(0,"ngmy_doc_share_school_session_"+C.a.i(d.toLowerCase())),$async$ao0)
case 2:return A.h(null,w)}})
return A.i($async$ao0,w)},
aYn(){var x,w=$.pk(),v=J.e3(6,y.N)
for(x=0;x<6;++x)v[x]="23456789ABCDEFGHJKLMNPQRSTUVWXYZ"[w.aB(32)]
return C.d.fW(v)},
a6a(d){var x=C.a.i(d),w=A.af("[^A-Z0-9]",!0,!1,!1,!1),v=A.aK(x.toUpperCase(),w,"")
x=v.length
if(x<5||x>6)return null
return v},
fOV(d){var x,w=C.a.i(d)
if(w.length===0)return!1
if(C.a.t(w,"|")||C.a.t(w,":")||C.a.t(w,"/")||C.a.t(w,".")||C.a.t(w," "))return!1
x=A.af("^(NGMY|N2|HTTP)",!1,!1,!1,!1)
if(x.b.test(w))return!1
x=A.af("^[A-Za-z0-9]{5,6}$",!0,!1,!1,!1)
return x.b.test(w)},
c6f(d){return B.hxw(d)},
hxw(d){var x=0,w=A.j(y.h),v,u=2,t=[],s,r,q,p,o
var $async$c6f=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:p=B.a6a(d)
if(p==null){v=null
x=1
break}u=4
x=7
return A.b(A.f2("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),null,!1,C.bG),$async$c6f)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$c6f,w)},
ao3(d,e){return B.hxx(d,e)},
hxx(d,e){var x=0,w=A.j(y.y),v,u=2,t=[],s,r,q,p,o
var $async$ao3=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:p=B.a6a(d)
if(p==null){v=!1
x=1
break}u=4
x=7
return A.b(A.hB("ngmy_doc_share_code_v2_"+C.a.i(p).toUpperCase(),e,!1,!1,C.cG,null),$async$ao3)
case 7:r=g
v=r
x=1
break
u=2
x=6
break
case 4:u=3
o=t.pop()
s=A.aa(o)
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
return A.i($async$ao3,w)},
c6h(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6h=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6a(d)
if(u==null||C.a.i(f).length===0){x=1
break}x=3
return A.b(B.ao3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",e.a,"itemName",e.b,"lanPayload",C.a.i(f),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6h)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6h,w)},
c6g(d,e,f,g){var x=0,w=A.j(y.H),v,u
var $async$c6g=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6a(d)
if(u==null||C.a.i(e).length===0){x=1
break}x=3
return A.b(B.ao3(u,A.F(["ownerEmail",C.a.i(g.toLowerCase()),"itemId",f.a,"itemName",f.b,"inlinePayload",C.a.i(e),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z)),$async$c6g)
case 3:case 1:return A.h(v,w)}})
return A.i($async$c6g,w)},
c6i(d,e,f,g){var x=0,w=A.j(y.y),v,u
var $async$c6i=A.e(function(h,i){if(h===1)return A.f(i,w)
for(;;)switch(x){case 0:u=B.a6a(d)
if(u==null||C.a.i(g).length===0){v=!1
x=1
break}v=B.ao3(u,A.F(["ownerEmail",C.a.i(f.toLowerCase()),"itemId",e.a,"itemName",e.b,"stashToken",C.a.i(g),"updatedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$c6i,w)},
c6j(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p
var $async$c6j=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(!B.fOV(d)){v=null
x=1
break}x=3
return A.b(B.c6f(d),$async$c6j)
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
return A.i($async$c6j,w)},
a6h(){var x=0,w=A.j(y.P),v,u=2,t=[],s,r,q,p,o,n
var $async$a6h=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$a6h)
case 3:if(!e){v=A.T(y.N,y.z)
x=1
break}u=5
x=8
return A.b(A.f2("ngmy_doc_share_webrtc_signal_v1",null,!1,C.bG),$async$a6h)
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
q=A.aa(n)
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
return A.i($async$a6h,w)},
ao7(d){return B.hxM(d)},
hxM(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q
var $async$ao7=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:x=3
return A.b(A.c3(),$async$ao7)
case 3:if(!f){x=1
break}u=5
x=8
return A.b(A.hB("ngmy_doc_share_webrtc_signal_v1",A.F(["signals",d,"savedAt",new A.S(Date.now(),0,!1).a6().ac()],y.N,y.z),!1,!1,C.cG,null),$async$ao7)
case 8:u=2
x=7
break
case 5:u=4
q=t.pop()
s=A.aa(q)
$.am.$1("[doc share webrtc stash] save: "+A.t(s))
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$ao7,w)},
ao8(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p,o,n,m,l,k,j,i
var $async$ao8=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:j=C.a.i(d)
if(J.ad(j)===0||!J.d_(j,"WR")){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ao8)
case 3:if(!f){v=null
x=1
break}x=4
return A.b(B.a6h(),$async$ao8)
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
return A.b(B.ao7(s),$async$ao8)
case 9:v=p
x=1
break
u=2
x=8
break
case 6:u=5
i=t.pop()
n=A.aa(i)
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
return A.i($async$ao8,w)},
aoa(d,e){var x=0,w=A.j(y.y),v,u,t,s,r,q,p
var $async$aoa=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=!1
x=1
break}x=3
return A.b(A.c3(),$async$aoa)
case 3:if(!g){v=!1
x=1
break}x=4
return A.b(B.a6h(),$async$aoa)
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
return A.b(B.ao7(u),$async$aoa)
case 5:v=!0
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aoa,w)},
ao9(d){var x=0,w=A.j(y.T),v,u,t,s,r,q,p,o
var $async$ao9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:p=C.a.i(d)
if(p.length===0){v=null
x=1
break}x=3
return A.b(A.c3(),$async$ao9)
case 3:if(!f){v=null
x=1
break}o=J
x=4
return A.b(B.a6h(),$async$ao9)
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
break}catch(n){t=A.aa(n)
$.am.$1("[doc share webrtc stash] answer decode: "+A.t(t))
v=null
x=1
break}case 1:return A.h(v,w)}})
return A.i($async$ao9,w)},
ana(d,e){var x=0,w=A.j(y.K),v,u=2,t=[],s=[],r,q,p,o,n
var $async$ana=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:n=$.aU.ak$.x.h(0,d)
if(n==null){v=null
x=1
break}p=n.gb7()
if(!(p instanceof A.pN)){v=null
x=1
break}x=3
return A.b(p.lT(e),$async$ana)
case 3:r=g
u=4
x=7
return A.b(r.hp(C.fW),$async$ana)
case 7:q=g
o=q
o=o==null?null:J.eQ(J.va(o))
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
return A.i($async$ana,w)},
i0N(d,e){var x,w,v=J.e3(e,y.N)
for(x=d+".part",w=0;w<e;++w)v[w]=x+C.a.aT(C.o.u(w),5,"0")
return v},
fBa(d){return B.i0P(d)},
i0P(d){var x=0,w=A.j(y.T),v,u=2,t=[],s,r,q,p
var $async$fBa=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
r=$.eW().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").Kg(d,3600),$async$fBa)
case 7:r=f
v=r
x=1
break
u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
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
return A.i($async$fBa,w)},
CA(d,e,f,g,h,i){var x=null
return B.i0M(d,e,f,g,h,i)},
i0M(a5,a6,a7,a8,a9,b0){var x=0,w=A.j(y.l),v,u=2,t=[],s=[],r,q,p,o,n,m,l,k,j,i,h,g,f,e,d,a0,a1,a2,a3,a4
var $async$CA=A.e(function(b1,b2){if(b1===1){t.push(b2)
x=u}for(;;)switch(x){case 0:a3=null
if(b0.length===0){v=null
x=1
break}r=B.h3Q(a9,a8.length!==0?a8:null,a5,a6,a7)
x=3
return A.b(B.fOX(r),$async$CA)
case 3:q=0
p=0
u=5
i=b0.length,h=y.k,g=y.W,f=0
case 8:if(!(f<b0.length)){x=10
break}o=b0[f]
x=11
return A.b(B.fBa(o),$async$CA)
case 11:n=b2
x=n==null||n.length===0?12:13
break
case 12:x=14
return A.b(B.a6b(r),$async$CA)
case 14:v=null
x=1
break
case 13:e=$.bx.h(0,C.aNF)
d=e==null?null:h.a(e).$0()
if(d==null)d=new A.Lc(A.a([],g))
x=15
return A.b(d.eT(0,A.atd("GET",A.cw(n,0,null))).cM(0,C.ES),$async$CA)
case 15:m=b2
x=m.b!==200?16:17
break
case 16:x=18
return A.b(B.a6b(r),$async$CA)
case 18:v=null
x=1
break
case 17:l=m.d
if(l!=null&&l>0)p+=l
d=m.w
d=new A.JO(d)
u=19
case 22:x=24
return A.b(d.C(),$async$CA)
case 24:if(!b2){x=23
break}k=d.gS(0)
q+=J.ad(k)
a0=a3
if(a0!=null){a1=q
a0.$2(a1,p>0?p:null)}x=25
return A.b(B.aYp(r,k),$async$CA)
case 25:x=22
break
case 23:s.push(21)
x=20
break
case 19:s=[5]
case 20:u=5
x=26
return A.b(d.a8(0),$async$CA)
case 26:x=s.pop()
break
case 21:case 9:b0.length===i||(0,A.L)(b0),++f
x=8
break
case 10:i=B.U7(r)
v=i
x=1
break
u=2
x=7
break
case 5:u=4
a4=t.pop()
j=A.aa(a4)
$.am.$1("[supabase multipart download] "+a6+": "+A.t(j))
x=27
return A.b(B.a6b(r),$async$CA)
case 27:v=null
x=1
break
x=7
break
case 4:x=2
break
case 7:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$CA,w)},
aOM(d){return B.i0O(d)},
i0O(d){var x=0,w=A.j(y.H),v,u=2,t=[],s,r,q,p
var $async$aOM=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:if(d.length===0){x=1
break}u=4
r=$.eW().b
r===$&&A.c()
r=r.at
r===$&&A.c()
x=7
return A.b(r.i4("media").W(0,d),$async$aOM)
case 7:u=2
x=6
break
case 4:u=3
p=t.pop()
s=A.aa(p)
$.am.$1("[supabase remove paths]: "+A.t(s))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aOM,w)}},D,T,M,U,V,W,X,N,Y
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
aCK(d,e){return this.cGz(d,e)},
cGz(d,e){var x=0,w=A.j(y.br),v,u,t,s,r,q
var $async$aCK=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:t=y.z
s=y.N
r=A.F(["mandatory",A.T(t,t),"optional",A.a([A.F(["DtlsSrtpKeyAgreement",!0],s,y.y)],y.Y)],s,y.C)
q=b.G.RTCPeerConnection
t=A.dU(r,s,t)
t.v(0,d)
u=new q(A.kd(A.cA(t)))
t=J.k(u)
v=B.hCn(C.cS.gcv().aJ(new A.d4(t)),u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$aCK,w)}}
B.b2v.prototype={
bwa(d){var x=this,w=x.w
w.onclose=A.he(new B.chl(x))
w.onopen=A.he(new B.chm(x))
w.onmessage=A.he(new B.chn(x))
w.onbufferedamountlow=A.he(new B.cho(x))},
gdc(d){return this.x},
ag7(d){var x=0,w=A.j(y.ab),v,u,t,s
var $async$ag7=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(typeof d=="string"){u=new B.Ez()
u.a=d
u.b=!1
v=u
x=1
break}x=y.J.b(d)?3:5
break
case 3:v=B.fQF(J.eQ(d))
x=1
break
x=4
break
case 5:x=y.G.b(d)?6:7
break
case 6:t=B
s=A
x=8
return A.b(A.eh(d.arrayBuffer(),y.af),$async$ag7)
case 8:v=t.fQF(s.amo(f,0,null))
x=1
break
case 7:case 4:v=B.fQF(new Uint8Array(0))
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ag7,w)}}
B.b2w.prototype={
bwb(d,e){var x=this,w=x.at
w===$&&A.c()
w.addEventListener("datachannel",A.he(new B.chr(x)))
w.addEventListener("icecandidate",A.he(new B.chs(x)))
w.addEventListener("iceconnectionstatechange",A.he(new B.cht(x)))
w.onicegatheringstatechange=A.he(new B.chu(x))
w.addEventListener("signalingstatechange",A.he(new B.chv(x)))
if(!$.fXB())w.addEventListener("connectionstatechange",A.he(new B.chw(x)))
w.addEventListener("negotiationneeded",A.he(new B.chx(x)))
w.addEventListener("track",A.he(new B.chy(x)))},
ajR(d){var x=0,w=A.j(y.v),v,u=this,t,s
var $async$ajR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.at
s===$&&A.c()
x=3
return A.b(A.eh(s.createAnswer(A.kd(A.cA(A.T(y.N,y.z)))),y.aQ),$async$ajR)
case 3:t=f
v=new B.Wp(t.sdp,t.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$ajR,w)},
a6w(d,e){return this.blH(0,e)},
blH(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6w=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setLocalDescription({type:u,sdp:t}),y.R),$async$a6w)
case 2:return A.h(null,w)}})
return A.i($async$a6w,w)},
a6E(d,e){return this.blX(0,e)},
blX(d,e){var x=0,w=A.j(y.H),v=this,u,t,s
var $async$a6E=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:s=v.at
s===$&&A.c()
u=e.b
u.toString
t=e.a
t.toString
x=2
return A.b(A.eh(s.setRemoteDescription({type:u,sdp:t}),y.R),$async$a6E)
case 2:return A.h(null,w)}})
return A.i($async$a6E,w)},
anK(){var x=0,w=A.j(y.c),v,u=this,t,s,r
var $async$anK=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.at
r===$&&A.c()
if(r.localDescription==null){v=null
x=1
break}r=r.localDescription
t=r==null
s=t?null:r.sdp
v=new B.Wp(s,t?null:r.type)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$anK,w)},
bB(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$bB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.at
t===$&&A.c()
t.close()
v=A.f7(null,y.H)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$bB,w)}}
B.abh.prototype={
a4(){return"_DocShareEntry."+this.b}}
B.Yk.prototype={
U(){return new B.axX()},
gdd(){return this.c}}
B.axX.prototype={
a_(){this.a1()
this.acR()},
acR(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYg(u.e,u.c),$async$acR)
case 2:t=e
if(v.c!=null)v.m(new B.d0h(v,t))
return A.h(null,w)}})
return A.i($async$acR,w)},
PA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$PA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.a
x=3
return A.b(B.anX(t.e,t.c,!1),$async$PA)
case 3:if(e){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eQ5)
x=1
break}x=4
return A.b(B.a65(u.a.c,"individual"),$async$PA)
case 4:t=u.c
if(t==null){x=1
break}x=5
return A.b(A.a6(t,!1).a53(A.e8(new B.d0e(u),!1,null,y.H)),$async$PA)
case 5:case 1:return A.h(v,w)}})
return A.i($async$PA,w)},
IG(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$IG=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
x=3
return A.b(B.fjs(o),$async$IG)
case 3:t=e
if(t==null||u.c==null){x=1
break}o=u.a
s=o.c
r=t.a
q=t.b
x=4
return A.b(B.a69(o.e,r,s,q),$async$IG)
case 4:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eNa)
x=1
break}x=5
return A.b(B.a65(u.a.c,"member"),$async$IG)
case 5:o=u.c
if(o==null){x=1
break}x=6
return A.b(A.a6(o,!1).a53(A.e8(new B.d0g(u),!1,null,y.H)),$async$IG)
case 6:case 1:return A.h(v,w)}})
return A.i($async$IG,w)},
xz(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$xz=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.c
o.toString
t=u.a
s=t.d
x=3
return A.b(B.a64(t.e,o,t.f,t.r,t.w,s),$async$xz)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(B.a65(u.a.c,"org_owner"),$async$xz)
case 4:x=5
return A.b(B.ao1(u.a.c),$async$xz)
case 5:r=e
x=r==null||!J.z(J.q(r,"active"),!0)?6:7
break
case 6:o=u.c
if(o==null){x=1
break}x=8
return A.b(B.fjX(o),$async$xz)
case 8:q=e
if(q==null||u.c==null){x=1
break}o=u.a.c
t=q.a
s=q.b
x=9
return A.b(B.a67(s,t,o,q.c),$async$xz)
case 9:p=e
o=u.c
if(o==null){x=1
break}if(!p){o.I(y.q).f.R(D.eN7)
x=1
break}x=10
return A.b(B.ao1(u.a.c),$async$xz)
case 10:o=u.c
if(o==null){x=1
break}o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d('Portal ready. Share code "'+s+'" and your member password.',null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 7:o=u.c
if(o==null){x=1
break}x=11
return A.b(A.a6(o,!1).a53(A.e8(new B.d0f(u),!1,null,y.H)),$async$xz)
case 11:case 1:return A.h(v,w)}})
return A.i($async$xz,w)},
B(d){var x,w,v,u=this,t=null,s=A.P(d).ax.a===C.I,r=s?C.j6:C.ps,q=B.fOS(u.a.e),p=u.d
if(p==null)x="\u2026"
else x=p===-1||p>=999999?"Unlimited":A.t(p)+" of "+q+" free"
p=A.m(28)
w=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.fL,24)],y.V)
v=y.p
w=A.p(t,A.v(A.a([A.p(t,D.f7x,C.f,t,t,new A.o(C.c.j(0.2),t,t,A.m(20),t,t,C.n),t,t,t,t,C.h5,t,t,t),C.aA,D.fq8,C.S,A.d("Photos, documents, long videos \u2014 share with My Code or QR.",t,t,t,t,t,t,A.l(t,t,C.c.j(0.92),t,t,t,t,t,t,t,t,14,t,t,t,t,1.45,!0,t,t,t,t,t,t,t,t),t,t,t)],v),C.F,t,C.e,C.j,0,C.p),C.f,t,t,new A.o(t,t,t,p,w,D.bUF,C.n),t,t,t,t,C.ew,t,t,t)
p=u.a.x?"Choose how to continue":"Who are you?"
p=A.a([new A.ly(new B.d0j(),t),C.O,w,C.e1,A.d(p,t,t,t,t,t,t,A.l(t,t,s?C.c:C.M,t,t,t,t,t,t,t,t,16,t,t,C.u,t,t,!0,t,t,t,t,t,t,t,t),t,t,t)],v)
if(u.a.x)C.d.v(p,A.a([C.an,A.d("Your free personal uploads are used up. Join a team or subscribe for your organization.",t,t,t,t,t,t,A.l(t,t,s?C.aR:C.ak,t,t,t,t,t,t,t,t,13,t,t,t,t,1.4,!0,t,t,t,t,t,t,t,t),t,t,t)],v))
p.push(C.ac)
if(!u.a.x)C.d.v(p,A.a([new B.abK(C.eR,C.axk,"Individual","Personal use \xb7 "+x+" uploads/shares",u.gcaU(),t),C.ac],v))
p.push(new B.abK(C.oB,C.a12,"Team Member","Sign in with your organization access code + password",u.gcbL(),t))
p.push(C.ac)
p.push(new B.abK(C.ajV,C.a2w,"Organization Owner","Subscribe for your team \xb7 create member logins",u.gcbg(),t))
return A.c8(t,r,A.bn(!0,A.cd(A.v(p,C.aj,t,C.e,C.j,0,C.p),C.r,t,C.y,t,F.ahd,t,t,C.ah),!0,!1,C.af,!0,!0),t,!1,!1,t,t)}}
B.abK.prototype={
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax,q=r.RG,p=(q==null?r.k2:q).j(0.55)
r=A.m(22)
q=A.m(22)
x=t.d
w=A.I(C.d.gL(x).j(0.35),C.q,1)
v=A.m(16)
u=y.p
return A.aG(!1,C.a1,!0,s,A.aL(!1,r,!0,A.eA(A.A(A.a([A.p(s,A.W(t.c,C.c,s,s,s,30),C.f,s,s,new A.o(s,s,s,v,s,new A.a8(C.a3,C.a7,C.x,x,s,s),C.n),s,56,s,s,s,s,s,56),C.eB,A.D(A.v(A.a([A.d(t.e,s,s,s,s,s,s,C.p1,s,s,s),C.at,A.d(t.f,s,s,s,s,s,s,A.l(s,s,A.P(d).ax.k3.j(0.65),s,s,s,s,s,s,s,s,12,s,s,s,s,1.35,!0,s,s,s,s,s,s,s,s),s,s,s)],u),C.F,s,C.e,C.j,0,C.p),1),A.W(C.Be,C.d.gL(x).j(0.7),s,s,s,16)],u),C.m,s,C.e,C.j,0,s,s),s,new A.o(p,s,w,q,s,s,C.n),s,C.bV,s),s,!0,s,s,s,s,s,s,s,s,s,s,s,t.r,s,s,s,s,s,s,s),C.f,C.K,0,s,s,s,s,s,C.ag)}}
B.aAv.prototype={}
B.aDH.prototype={}
B.jh.prototype={
mo(d){var x=this.b,w=C.a.oq(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(d,C.a.b0(x,w+1).toLowerCase())},
gaom(){var x=this.d
if(x<1024)return""+x+" B"
if(x<1048576)return C.k.aa(x/1024,1)+" KB"
if(x<1073741824)return C.k.aa(x/1048576,1)+" MB"
return C.k.aa(x/1073741824,2)+" GB"},
af(){var x,w=this,v=A.T(y.N,y.z)
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
bak(d,e){var x=this,w=d==null?x.w:d,v=e==null?x.x:e
return new B.jh(x.a,x.b,x.c,x.d,x.e,x.f,x.r,w,v)},
cF3(d){return this.bak(null,d)},
aCv(d){return this.bak(d,null)}}
B.U1.prototype={
U(){return new B.aBS(new A.cs(null,y.A))},
gdd(){return this.c}}
B.aBS.prototype={
a_(){this.a1()
this.acS()},
acS(){var x=0,w=A.j(y.H),v,u=this,t
var $async$acS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.Bb(u.a.c),$async$acS)
case 3:t=e
if(u.c==null){x=1
break}u.m(new B.dMQ(u,t))
case 1:return A.h(v,w)}})
return A.i($async$acS,w)},
acT(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$acT=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:s=u.e
if(s==null){x=1
break}x=3
return A.b(A.fI(new A.fC(s)),$async$acT)
case 3:t=u.c
if(t!=null)t.I(y.q).f.R(D.eR_)
case 1:return A.h(v,w)}})
return A.i($async$acT,w)},
YQ(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$YQ=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:m=s.e
if(m==null){x=1
break}u=4
x=7
return A.b(B.ana(s.d,4),$async$YQ)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rJ(r,"ngmy_my_code_"+m+".png"),$async$YQ)
case 8:q=e
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
o=s.c
if(o!=null)o.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$YQ,w)},
agA(){var x=0,w=A.j(y.H),v,u=this,t
var $async$agA=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:t=u.e
if(t==null){x=1
break}x=3
return A.b(A.a98("Send me documents on NGMY Doc Share using My Code: "+t+"\nOr scan my QR in Doc Share \u2192 Scan QR.",null),$async$agA)
case 3:case 1:return A.h(v,w)}})
return A.i($async$agA,w)},
B(d){var x,w,v,u,t,s,r,q=this,p=null,o=A.P(d).ax.a===C.I,n=o?C.j6:C.ps,m=o?C.c:C.M,l=A.eF(p,p,p,!0,!0,n,p,1,p,p,0,!1,p,!1,m,p,p,p,!0,p,p,p,p,p,A.d("My Code",p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,p,p,p,p,C.u,p,p,!0,p,p,p,p,p,p,p,p),p,p,p),p,p,p,1,p,!0)
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
w=A.p(p,A.v(A.a([t,C.O,A.d(s,p,p,p,p,p,p,A.l(p,p,m,p,p,p,p,p,p,p,K.a1t,36,p,p,C.u,p,p,!0,p,6,p,p,p,p,p,p),p,p,p),C.an,A.d("5 numbers + 1 letter",p,p,p,p,p,p,A.l(p,p,m.j(0.5),p,p,p,p,p,p,p,p,12,p,p,p,p,p,!0,p,p,p,p,p,p,p,p),p,p,p)],r),C.m,p,C.e,C.j,0,C.p),C.f,p,p,new A.o(p,p,u,v,p,new A.a8(C.a3,C.a7,C.x,w,p,p),C.n),p,p,p,p,Y.agO,p,p,1/0)
v=A.m(20)
u=A.a([new A.ac(0,C.G,C.aE.j(0.2),C.dk,24)],y.V)
s=q.e
s.toString
r=A.cd(A.v(A.a([x,C.mA,w,C.kt,new A.et(A.p(p,A.pE(p,p,!1,B.hxn(s),p,!0,!0,220,!1,C.c),C.f,p,p,new A.o(C.c,p,p,v,u,p,C.n),p,p,p,p,C.bV,p,p,p),q.d),C.ac,A.d("Others scan this in Doc Share \u2192 Scan QR to send you a file.",p,p,p,p,p,p,A.l(p,p,m.j(0.55),p,p,p,p,p,p,p,p,12,p,p,p,p,1.4,!0,p,p,p,p,p,p,p,p),C.L,p,p),C.kt,A.A(A.a([A.D(A.ex(N.Bx,C.Th,q.gc3W(),p),1),C.av,A.D(A.dp(C.yi,C.a7k,q.gc3X(),A.bk(C.aE,p,p,p,p,p,p,p,p,p,p,p)),1)],r),C.m,p,C.e,C.j,0,p,p),C.S,new A.a7(1/0,p,A.ex(M.a_U,D.fm4,q.gcqe(),p),p)],r),C.m,p,C.e,C.j,0,C.p),C.r,p,C.y,p,U.LQ,p,p,C.ah)
x=r}return A.c8(l,n,x,p,!1,!1,p,p)}}
B.U5.prototype={
U(){return new B.aBV(new A.ar(C.as,$.aw()),A.kj(!0,null,!0,!0,null,null,!1))}}
B.aBV.prototype={
a_(){var x,w
this.a1()
x=this.a.e
w=B.HW(x==null?"":x)
if(w!=null)this.d.saV(0,w)},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
YR(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$YR=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(u.f){x=1
break}t=B.HW(u.d.a.a)
if(t==null){u.m(new B.dNZ(u))
x=1
break}u.m(new B.dO_(u))
s=u.a
r=s.c
x=3
return A.b(B.a63(s.d,new B.dO0(u),t,r),$async$YR)
case 3:q=e
if(u.c==null){x=1
break}u.m(new B.dO1(u))
if(q){s=u.c
s.toString
A.a6(s,!1).O(!0)}case 1:return A.h(v,w)}})
return A.i($async$YR,w)},
a11(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l,k,j,i,h
var $async$a11=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:if(r.f||J.cl(r.a.d)){x=1
break}r.m(new B.dO2(r))
u=4
q=J.fo(r.a.d)
x=7
return A.b(B.re(r.a.c,q),$async$a11)
case 7:p=e
if(p==null||p.length===0){if(r.c!=null)r.m(new B.dO3(r,q))
s=[1]
x=5
break}m=q.b
l=q.c.length===0?"application/octet-stream":q.c
k=q.b
j=J.ad(r.a.d)>1?"NGMY Doc Share ("+J.ad(r.a.d)+" files \u2014 sharing first)":"Shared from NGMY Doc Share"
x=8
return A.b(A.agG(p,m,l,j,k),$async$a11)
case 8:o=e
if(r.c!=null)r.m(new B.dO4(r,o))
s.push(6)
x=5
break
case 4:u=3
h=t.pop()
n=A.aa(h)
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
return A.i($async$a11,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m,l=this,k=null,j=A.P(d).ax.a===C.I,i=j?D.adc:D.ab4,h=j?D.aeH:C.c,g=j?C.aQ:C.M,f=j?C.bJ:C.ak,e=j?D.aci:C.aL
i=[i,e,h,g,f,j?C.f7:C.bW]
x=A.P(d).ax.a===C.I
w=J.ad(l.a.d)
h=i[0]
g=i[3]
g=A.eF(k,k,k,!0,!0,h,k,1,k,k,0,!1,k,!1,g,k,k,k,!0,k,k,k,C.K,k,A.d("Send to their Code",k,k,k,k,k,k,A.l(k,k,g,k,k,k,k,k,k,k,k,k,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k,k,k,1,k,!0)
f=i[5]
e=y.O
f=A.ao(k,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([f.j(x?0.18:0.12),i[5].j(0)],e),k,k),C.a6),k,200,k,k,k,k,k,200),!0,k),k,k,k,-50,-70,k)
v=A.ao(80,A.e1(A.p(k,k,C.f,k,k,new A.o(k,k,k,k,k,new A.bS(C.A,0.5,C.x,k,0,A.a([C.aE.j(x?0.12:0.08),C.aE.j(0)],e),k,k),C.a6),k,170,k,k,k,k,k,170),!0,k),k,k,-60,k,k,k)
u=i[2]
t=A.m(22)
s=A.I(i[1],C.q,1)
r=y.p
t=A.p(k,A.A(A.a([A.p(k,D.bIH,C.f,k,k,new A.o(k,k,k,A.m(16),k,new A.a8(C.ax,C.aC,C.x,A.a([i[5].j(0.85),C.aE],e),k,k),C.n),k,52,k,k,k,k,k,52),C.eB,A.D(A.v(A.a([A.d("Send to someone else",k,k,k,k,k,k,A.l(k,k,i[3],k,k,k,k,k,k,k,k,16,k,k,C.u,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),C.at,A.d("Enter their personal Doc Share code \u2014 not your own My Code.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k)],r),C.F,k,C.e,C.j,0,C.p),1)],r),C.m,k,C.e,C.j,0,k,k),C.f,k,k,new A.o(u,k,s,t,k,k,C.n),k,k,k,k,C.fy,k,k,k)
s=A.d("THEIR CODE",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
u=l.a.e
e=A.l(k,k,i[3],k,k,k,k,k,k,k,K.a1t,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
q=A.a([new A.u5(A.af("[0-9A-Za-z]",!0,!1,!1,!1),!0,""),new B.bhb()],y.E)
p=A.l(k,k,i[4].j(0.45),k,k,k,k,k,k,k,k,28,k,k,C.u,k,k,!0,k,6,k,k,k,k,k,k)
o=i[2]
e=A.aM(k,C.T,u==null,k,!0,C.r,k,A.aN(),l.d,k,k,k,k,k,2,A.br(k,k,k,C.LK,k,k,"",k,!0,new A.b4(4,A.m(18),new A.aA(i[1],1,C.q,-1)),k,k,k,k,k,o,!0,k,k,k,k,new A.b4(4,A.m(18),new A.aA(C.aE,1.7,C.q,-1)),k,k,k,k,k,k,k,k,p,"12345A",k,k,k,k,k,k,k,k,k,!0,!0,!1,k,k,k,k,k,k,k,k,k,k,k,k,k,k),C.y,!0,k,!0,k,!1,l.e,C.ai,k,k,q,k,k,k,k,6,k,1,k,k,!1,"\u2022",k,k,k,new B.dO7(l),k,!1,k,k,!1,k,!0,k,C.a9,k,k,k,k,k,k,k,k,k,k,k,e,!0,C.L,k,C.lX,k,k,k,k)
q=A.d("5 numbers + 1 letter",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,k,k,k,!0,k,k,k,k,k,k,k,k),C.L,k,k)
p=A.d("FILES ("+w+")",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,C.H,k,k,!0,k,1.1,k,k,k,k,k,k),k,k,k)
o=i[2]
u=A.m(18)
n=A.I(i[1],C.q,1)
m=J.KR(l.a.d,4)
m=A.B(new A.K(m,new B.dO8(x,new A.aEU(i)),m.$ti.k("K<ak.E,r>")),y.c7)
if(J.ad(l.a.d)>4)m.push(new A.C(C.mg,A.d("+ "+(J.ad(l.a.d)-4)+" more",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,12,k,k,C.a5,k,k,!0,k,k,k,k,k,k,k,k),k,k,k),k))
e=A.a([t,C.bx,s,C.O,e,C.O,q,C.d5,p,C.O,A.p(k,A.v(m,C.m,k,C.e,C.j,0,C.p),C.f,k,k,new A.o(o,k,n,u,k,k,C.n),k,k,k,k,C.ei,k,k,k)],r)
if(l.r!=null){u=C.aE.j(x?0.16:0.1)
t=A.m(14)
s=A.I(C.aE.j(0.28),C.q,1)
q=A.a([],r)
if(l.f)q.push(D.eLH)
else q.push(A.W(C.le,i[5],k,k,k,16))
q.push(C.av)
p=l.r
p.toString
q.push(A.D(A.d(p,k,k,k,k,k,k,A.l(k,k,i[3].j(0.85),k,k,k,k,k,k,k,k,13,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),k,k,k),1))
C.d.v(e,A.a([C.aP,A.dh(k,A.A(q,C.m,k,C.e,C.j,0,k,k),k,k,C.bc,new A.o(u,k,s,t,k,k,C.n),C.iv,k,k,k,C.eP,k,k,k)],r))}e=A.D(A.cd(A.v(e,C.aj,k,C.e,C.j,0,C.p),C.r,k,C.y,k,D.bs1,k,k,C.ah),1)
u=l.f?k:l.gcqf()
t=i[3]
s=i[1]
q=A.m(16)
s=A.ex(M.a_U,D.fn2,u,A.df(k,k,i[2].j(0.75),k,k,k,k,k,k,t,k,k,C.cg,k,new A.b7(q,C.Y),new A.aA(s,1,C.q,-1),k,k,k,k))
i=A.d("Device share sheet when available. Or send in-app with their code below.",k,k,k,k,k,k,A.l(k,k,i[4],k,k,k,k,k,k,k,k,11,k,k,k,k,1.35,!0,k,k,k,k,k,k,k,k),C.L,k,k)
u=l.f?k:l.gc3Y()
t=A.bk(C.aE,k,k,0,C.c,k,C.n2,k,new A.b7(A.m(16),C.Y),k,k,k)
return A.c8(g,h,new A.an(C.W,k,C.aa,C.r,A.a([f,v,A.bn(!0,A.mz(new B.dO9(),A.v(A.a([e,new A.C(D.brw,A.v(A.a([s,C.O,i,C.ac,A.bJ(l.f?C.ry:D.flt,u,t)],r),C.aj,k,C.e,C.j,0,C.p),k)],r),C.m,k,C.e,C.j,0,C.p),C.cr,C.Xm,k,k,new A.bo(0,1,y.X),y.i),!0,!1,C.af,!0,!0)],r),k),k,!1,!1,k,k)}}
B.bhb.prototype={
om(d,e){var x,w,v,u=e.a.toUpperCase(),t=new A.fd(""),s=u.length,r=0
for(;;){if(!(r<s&&r<6))break
x=u[r]
if(r<5){w=A.af("\\d",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}else{w=A.af("[A-Z]",!0,!1,!1,!1)
if(w.b.test(x))t.a+=x}++r}s=t.a
v=s.charCodeAt(0)==0?s:s
return new A.bb(v,A.h8(C.bu,v.length),C.aN)}}
B.U2.prototype={
U(){return new B.aBT()}}
B.aBT.prototype={
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
x=v.T$=$.aw()
v.P$=0
v=w.e
v===$&&A.c()
v.T$=x
v.P$=0
v=w.f
v===$&&A.c()
v.T$=x
v.P$=0
w.a2()},
acU(){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this,q,p,o,n,m,l
var $async$acU=A.e(function(d,e){if(d===1){t.push(e)
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
return A.b(B.a68(p,m,n,o,C.a.i(l).length===0?null:l),$async$acU)
case 6:q=e
p=r.c
if(p==null){s=[1]
x=4
break}if(!q){p.I(y.q).f.R(D.eQB)
s=[1]
x=4
break}p.I(y.q).f.R(D.ePe)
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
return A.i($async$acU,w)},
B(d){var x,w,v,u,t=this,s=null,r=A.P(d).ax.a===C.I?C.j6:C.ps,q=A.eF(s,s,s,!0,!0,r,s,1,s,s,0,!1,s,!1,s,s,s,s,!0,s,s,s,s,s,D.fec,s,s,s,1,s,!0),p=A.p(s,D.bkg,C.f,s,s,new A.o(s,s,s,A.m(22),s,E.Gh,C.n),s,s,s,s,C.a9,s,s,s),o=t.d
o===$&&A.c()
o=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),o,s,s,s,s,s,2,D.bPy,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
x=t.e
x===$&&A.c()
x=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),x,s,s,s,s,s,2,D.bPt,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!1,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
w=t.f
w===$&&A.c()
w=A.aM(s,C.T,!1,s,!0,C.r,s,A.aN(),w,s,s,s,s,s,2,D.bPJ,C.y,!0,s,!0,s,!1,s,C.ai,s,s,s,s,s,s,s,s,s,1,s,s,!0,"\u2022",s,s,s,s,s,!1,s,s,!1,s,!0,s,C.a9,s,s,s,s,s,s,s,s,s,s,s,s,!0,C.a4,s,C.am,s,s,s,s)
v=t.r?s:t.gc3Z()
u=A.bk(C.aE,s,s,s,s,C.fM,s,s,s,s,s,s)
return A.c8(q,r,A.cd(A.v(A.a([p,C.d5,o,C.ac,x,C.ac,w,C.mA,A.bJ(t.r?C.ry:C.aQh,v,u)],y.p),C.aj,s,C.e,C.j,0,C.p),C.r,s,C.y,s,C.a9,s,s,C.ah),s,!1,!1,s,s)}}
B.aaZ.prototype={}
B.btB.prototype={
a3K(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$a3K=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.x
if(r.gM(r)<=0){x=1
break}t=u.c+"_rx_"+u.y
s=new Uint8Array(A.ce(r.an0()))
x=3
return A.b(B.Qt(t,s),$async$a3K)
case 3:if(!e){$.am.$1("[doc share web recv] part write failed "+t)
x=1
break}u.w.push(t)
u.z=u.z+s.length;++u.y
case 1:return A.h(v,w)}})
return A.i($async$a3K,w)},
gdd(){return this.a}}
B.MP.prototype={
a4(){return"NgmyDocShareQrMode."+this.b}}
B.Yj.prototype={
U(){return new B.axW(new A.ar(C.as,$.aw()),A.kj(!0,null,!0,!0,null,null,!1))}}
B.axW.prototype={
a_(){this.a1()
$.aU.x1$.push(new B.d0d(this))},
q(){var x=this.d
x.T$=$.aw()
x.P$=0
this.e.q()
this.a2()},
c44(){var x,w=this.c
w.toString
x=C.a.i(this.d.a.a)
A.a6(w,!1).O(x)
return null},
B(d){var x=this,w=null,v=B.a0j(d),u=x.a.c,t=u?C.i6:v.a[2],s=u?C.c:v.a[3],r=u?C.aR:v.a[4],q=u?C.j6:v.a[0],p=A.m(24),o=A.I(C.aE.j(0.35),C.q,1),n=y.V,m=A.a([new A.ac(0,C.G,C.aE.j(u?0.25:0.12),C.fL,32)],n),l=A.p(w,T.amC,C.f,w,w,new A.o(w,w,w,A.m(18),A.a([new A.ac(0,C.G,C.aE.j(0.4),C.cw,16)],n),C.anp,C.n),w,56,w,w,w,w,w,56),k=A.d("Enter share code",w,w,w,w,w,w,A.l(w,w,s,w,w,w,w,w,w,w,w,20,w,w,C.u,w,w,!0,w,-0.3,w,w,w,w,w,w),C.L,w,w),j=A.d("Type the 5\u20136 character code shown under the sender's file.",w,w,w,w,w,w,A.l(w,w,r,w,w,w,w,w,w,w,w,13,w,w,w,w,1.45,!0,w,w,w,w,w,w,w,w),C.L,w,w),i=A.l(w,w,s,w,w,w,w,w,w,w,w,28,w,w,C.H,w,w,!0,w,8,w,w,w,w,w,w),h=A.a([new A.u5(A.af("[A-Za-z0-9]",!0,!1,!1,!1),!0,""),new B.btf()],y.E),g=A.l(w,w,r.j(0.45),w,w,w,w,w,w,w,w,28,w,w,C.P,w,w,!0,w,8,w,w,w,w,w,w),f=v.a
i=A.aM(!1,C.T,!1,w,!0,C.r,w,A.aN(),x.d,w,w,w,w,w,2,A.br(w,w,w,C.F2,w,w,"",w,!0,new A.b4(4,A.m(16),new A.aA(f[1],1,C.q,-1)),w,w,w,w,w,q,!0,w,w,w,w,new A.b4(4,A.m(16),D.aX5),w,w,w,w,w,w,w,w,g,"A3K9P2",w,w,w,w,w,w,w,w,w,!0,!0,!1,w,w,w,w,w,w,w,w,w,w,w,w,w,w),C.y,!0,w,!1,w,!1,x.e,C.ai,w,w,h,w,w,w,w,6,w,1,w,w,!1,"\u2022",w,w,w,new B.d0b(x),w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,i,!0,C.L,w,C.lX,w,w,w,w)
f=f[1]
f=A.D(A.dV(C.np,new B.d0c(d),A.df(w,w,w,w,w,w,w,w,w,s,w,w,C.cg,w,new A.b7(A.m(14),C.Y),new A.aA(f,1,C.q,-1),w,w,w,w)),1)
h=A.m(14)
n=A.a([new A.ac(0,C.G,C.aE.j(0.35),C.cJ,12)],n)
g=y.p
return A.eG(w,C.K,new A.cV(Q.JK,A.c_(new A.C(C.xr,A.v(A.a([l,C.aP,k,C.O,j,C.e1,i,C.e1,A.A(A.a([f,C.av,A.D(A.c_(A.aG(!1,C.a1,!0,w,A.aL(!1,A.m(14),!0,D.e45,w,!0,w,w,w,w,w,w,w,w,w,w,w,x.gc43(),w,w,w,w,w,w,w),C.f,C.K,0,w,w,w,w,w,C.ag),new A.o(w,w,w,h,n,L.NC,C.n),C.bd),2)],g),C.m,w,C.e,C.j,0,w,w)],g),C.m,w,C.e,C.Q,0,C.p),w),new A.o(t,w,o,p,m,w,C.n),C.bd),w),w,w,w,C.LS,C.d0,w,w,w)}}
B.btf.prototype={
om(d,e){return e.ajM(e.a.toUpperCase())}}
B.U3.prototype={
U(){return new B.aBU(A.a([],y.r),A.aX(y.N))},
gdd(){return this.c}}
B.aBU.prototype={
a_(){var x=this
x.a1()
x.tp()
x.w=A.dA(C.jb,new B.dNX(x))},
q(){var x=this.w
if(x!=null)x.a8(0)
B.Uc()
this.a2()},
a_U(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a_U=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MO(u.a.c),$async$a_U)
case 3:t=e
if(u.c==null||t<=0){x=1
break}s=B
x=4
return A.b(B.Ae(u.a.c),$async$a_U)
case 4:u.m(new s.dNk(u,e))
u.hW("Received "+A.t(t)+" file(s) via My Code.")
case 1:return A.h(v,w)}})
return A.i($async$a_U,w)},
tp(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$tp=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.MO(u.a.c),$async$tp)
case 3:t=e
x=4
return A.b(B.Ae(u.a.c),$async$tp)
case 4:s=e
if(u.c==null){x=1
break}u.m(new B.dNl(u,s))
if(t>0)u.hW("Received "+A.t(t)+" file(s) via My Code.")
u.N_(u.d)
B.Bb(u.a.c)
case 1:return A.h(v,w)}})
return A.i($async$tp,w)},
N_(d){return this.bA7(d)},
bA7(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p,o
var $async$N_=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.length,s=0
case 3:if(!(s<d.length)){x=5
break}r=d[s]
q=r.w
x=C.a.i(q==null?"":q).length===0?6:7
break
case 6:x=8
return A.b(B.a6d(r,u.a.c),$async$N_)
case 8:p=f
if(u.c==null){x=1
break}new B.dMU(u,r,p).$0()
u.c.e9()
case 7:if(!(C.a.a0(r.c,"video/")||r.mo(D.ms))){q=r.x
q=C.a.i(q==null?"":q).length===0}else q=!1
x=q?9:10
break
case 9:x=11
return A.b(B.Ua(r,u.a.c),$async$N_)
case 11:if(u.c==null){x=1
break}case 10:case 4:d.length===t||(0,A.L)(d),++s
x=3
break
case 5:if(u.c==null){x=1
break}o=B
x=12
return A.b(B.Ae(u.a.c),$async$N_)
case 12:u.m(new o.dMV(u,f))
case 1:return A.h(v,w)}})
return A.i($async$N_,w)},
Nm(d){return this.bGi(d)},
bGi(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$Nm=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=d.w
r=C.a.i(s==null?"":s)
x=r.length===0?3:4
break
case 3:x=5
return A.b(B.a6d(d,u.a.c),$async$Nm)
case 5:t=f
if(u.c==null){x=1
break}u.m(new B.dN_(u,d,t))
x=6
return A.b(A.fI(new A.fC(t)),$async$Nm)
case 6:u.hW("Code "+t+" copied")
x=1
break
case 4:x=7
return A.b(A.fI(new A.fC(r.toUpperCase())),$async$Nm)
case 7:u.hW("Code "+r.toUpperCase()+" copied")
case 1:return A.h(v,w)}})
return A.i($async$Nm,w)},
hW(d){var x=null,w=this.c
if(w==null)return
w.I(y.q).f.R(A.b2(x,x,x,x,x,C.r,x,A.d(d,x,x,x,x,x,x,x,x,x,x),x,C.U,x,x,x,x,x,x,x,x,x,x))},
tq(d,e){return this.cAC(d,e)},
cAC(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=[],r=this
var $async$tq=A.e(function(f,g){if(f===1){t.push(g)
x=u}for(;;)switch(x){case 0:if(r.e){x=1
break}r.m(new B.dNL(r,e))
u=3
x=6
return A.b(d.$0(),$async$tq)
case 6:s.push(5)
x=4
break
case 3:s=[2]
case 4:u=2
if(r.c!=null){r.m(new B.dNM(r))
$.eT.mj()}x=s.pop()
break
case 5:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$tq,w)},
gaTy(){var x=this.a
return x.f||x.r||x.w},
HE(){var x=0,w=A.j(y.y),v,u=this,t,s,r,q,p,o,n
var $async$HE=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:o=u.a
n=o.f
if(n){v=!0
x=1
break}if(u.gaTy()){v=!0
x=1
break}n=u.c
n.toString
t=o.d
s=o.e
r=o.x
q=o.y
o=o.z
x=3
return A.b(B.c68(s,n,r,q,o,t),$async$HE)
case 3:p=e
x=!p&&u.c!=null?4:5
break
case 4:u.hW("Free uploads used up. Choose Team Member or Organization Owner.")
o=u.c
o.toString
x=6
return A.b(B.fuE(o,u.a.c),$async$HE)
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
return A.b(B.CC(s,o,r,q,n,t),$async$HE)
case 7:case 5:v=p
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$HE,w)},
ZY(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$ZY=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(B.ao1(u.a.c),$async$ZY)
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
return A.b(A.a6(t,!1).c8(A.e8(new B.dNh(u,r,q),!1,null,y.H)),$async$ZY)
case 4:case 1:return A.h(v,w)}})
return A.i($async$ZY,w)},
a04(d){return this.cjV(d)},
cjU(){return this.a04(1)},
cjV(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a04=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.gaTy()){x=1
break}t=0
case 3:if(!(t<d)){x=5
break}x=6
return A.b(B.anZ(u.a.c),$async$a04)
case 6:case 4:++t
x=3
break
case 5:case 1:return A.h(v,w)}})
return A.i($async$a04,w)},
aaU(d,e,f){return this.bWA(d,e,f)},
bWA(d,e,f){var x=0,w=A.j(y.H),v,u=this
var $async$aaU=A.e(function(g,h){if(g===1)return A.f(h,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW(e)
x=1
break}x=3
return A.b(u.tq(new B.dNe(u,d,null,e,f),"Uploading\u2026"),$async$aaU)
case 3:case 1:return A.h(v,w)}})
return A.i($async$aaU,w)},
bAf(){B.hil(!1,new B.dMY(this))
return},
coS(){this.m(new B.dNp(this))},
ax8(){var x=0,w=A.j(y.H),v=this
var $async$ax8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:v.bAf()
return A.h(null,w)}})
return A.i($async$ax8,w)},
aaQ(){var x=0,w=A.j(y.H),v=this
var $async$aaQ=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tq(new B.dN3(v),"Importing\u2026"),$async$aaQ)
case 2:return A.h(null,w)}})
return A.i($async$aaQ,w)},
RB(d){return this.cA2(d)},
cA2(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$RB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=d.c
x=C.a.a0(t,"video/")||d.mo(D.ms)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c8(A.e8(new B.dNI(u,d),!1,null,y.H)),$async$RB)
case 5:x=1
break
case 4:x=C.a.a0(t,"image/")||d.mo(D.Px)?6:7
break
case 6:t=u.c
t.toString
x=8
return A.b(A.a6(t,!1).c8(A.e8(new B.dNJ(u,d),!1,null,y.H)),$async$RB)
case 8:x=1
break
case 7:x=u.bXh(d)?9:10
break
case 9:t=u.c
t.toString
x=11
return A.b(A.a6(t,!1).c8(A.e8(new B.dNK(u,d),!1,null,y.H)),$async$RB)
case 11:x=1
break
case 10:u.hW("Preview not available for this file type. Try Download / save.")
case 1:return A.h(v,w)}})
return A.i($async$RB,w)},
bXh(d){var x,w
if(C.a.a0(d.c,"audio/"))return!0
x=d.b
w=C.a.oq(x,".")
if(w<0||w>=x.length-1)return!1
return C.d.t(D.cBU,C.a.b0(x,w+1).toLowerCase())},
ael(d){return this.caY(d)},
caY(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$ael=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=C.a.a0(d.c,"video/")||d.mo(D.ms)?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(A.a6(t,!1).c8(A.e8(new B.dNf(u,d),!1,null,y.H)),$async$ael)
case 5:x=1
break
case 4:u.m(new B.dNg(u,d))
case 1:return A.h(v,w)}})
return A.i($async$ael,w)},
QZ(d){return this.crH(d)},
crH(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$QZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(d.length===0){u.hW("Nothing selected to share.")
x=1
break}t=u.c
t.toString
s=u.a
x=3
return A.b(A.oZ(t,s.c,s.f),$async$QZ)
case 3:if(!f||u.c==null){x=1
break}x=4
return A.b(u.tq(new B.dNB(u,d),"Preparing QR\u2026"),$async$QZ)
case 4:case 1:return A.h(v,w)}})
return A.i($async$QZ,w)},
ah_(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$ah_=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.r
if(q.a===0){t=u.d
q=new A.K(t,new B.dNC(),A.U(t).k("K<1,n>")).fI(0)}t=u.d
s=A.U(t).k("a2<1>")
r=A.B(new A.a2(t,new B.dND(q),s),s.k("J.E"))
if(r.length===0){u.hW("Add files first, then share via QR.")
x=1
break}x=3
return A.b(u.QZ(r),$async$ah_)
case 3:case 1:return A.h(v,w)}})
return A.i($async$ah_,w)},
agT(d){return this.crg(d)},
crg(d){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$agT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0j(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNv(t,d),r,!0,!0,!1,null,!1,!1,y.N),$async$agT)
case 3:s=f
if(u.c==null||s==null){x=1
break}switch(s){case"view":u.RB(d)
break
case"qr":u.QZ(A.a([d],y.r))
break
case"send_my_code":u.cbA(A.a([d],y.r))
break
case"save":u.age(d)
break
case"delete":u.Ir(d)
break}case 1:return A.h(v,w)}})
return A.i($async$agT,w)},
WO(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$WO=A.e(function(d,e){if(d===1)return A.f(e,w)
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
return A.b(A.oZ(t,s.c,s.f),$async$WO)
case 3:if(!e||u.c==null){x=1
break}x=4
return A.b(u.tq(new B.dN2(u,r),"Preparing file\u2026"),$async$WO)
case 4:case 1:return A.h(v,w)}})
return A.i($async$WO,w)},
afr(d){return this.cin(d)},
cin(d){var x=0,w=A.j(y.T),v,u=this,t,s,r,q
var $async$afr=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=3
return A.b(B.hj2(d,!1),$async$afr)
case 3:s=f
r=s==null
q=B.a6a(r?"":s)
if(q==null){t=C.a.i(r?"":s).length!==0
r=t}else r=!1
if(r)u.hW("Enter a valid 5\u20136 character code.")
v=q
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$afr,w)},
aer(){var x=0,w=A.j(y.H),v=this,u
var $async$aer=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.c
u.toString
x=2
return A.b(B.fCf(u,v.a.c),$async$aer)
case 2:return A.h(null,w)}})
return A.i($async$aer,w)},
bAe(){B.hil(!1,new B.dMX(this,null))
return},
IF(d,e){return this.cbB(d,e)},
aZt(d){return this.IF(null,d)},
cbA(d){return this.IF(d,null)},
cbB(d,e){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
var $async$IF=A.e(function(f,g){if(f===1){t.push(g)
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
return A.b($.wR.c5().amm(!0,C.Z7,!1),$async$IF)
case 10:r=g
if(r==null||J.cl(r.a)){x=1
break}x=11
return A.b(s.tq(new B.dNj(l,s,r),"Preparing\u2026"),$async$IF)
case 11:u=2
x=9
break
case 7:u=6
j=t.pop()
q=A.aa(j)
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
return A.b(B.bBC(p,l,e,s.a.c),$async$IF)
case 12:m=g
if(s.c==null){x=1
break}if(m)s.hW("Document sent to their Doc Share.")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$IF,w)},
HT(d){return this.bWn(d)},
bWn(d){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$HT=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:r=C.a.i(d)
q=r.toUpperCase()
x=C.a.a0(q,"NGMYDOCRCV|")||C.a.a0(q,"NGMYDOCRCV:")?3:4
break
case 3:t=B.hxm(d)
x=t!=null?5:7
break
case 5:x=8
return A.b(u.aZt(t),$async$HT)
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
return A.b(u.tq(new B.dNc(u,d),"Receiving video\u2026"),$async$HT)
case 11:x=1
break
case 10:x=12
return A.b(u.tq(new B.dNd(u,d),"Receiving\u2026"),$async$HT)
case 12:case 1:return A.h(v,w)}})
return A.i($async$HT,w)},
DP(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$DP=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=!A.Cw()?3:4
break
case 3:t=u.c
t.toString
x=5
return A.b(u.afr(t),$async$DP)
case 5:s=e
if(s==null||s.length===0){x=1
break}x=6
return A.b(u.HT(s),$async$DP)
case 6:x=1
break
case 4:t=u.c
t.toString
x=7
return A.b(A.a6(t,!1).c8(A.e8(new B.dNn(u),!1,null,y.N)),$async$DP)
case 7:r=e
if(r==null||r.length===0){x=1
break}x=r==="transfer:done"?8:9
break
case 8:x=10
return A.b(u.tp(),$async$DP)
case 10:x=1
break
case 9:x=11
return A.b(u.HT(C.a.i(r)),$async$DP)
case 11:case 1:return A.h(v,w)}})
return A.i($async$DP,w)},
age(d){return this.cns(d)},
cns(d){var x=0,w=A.j(y.H),v=this
var $async$age=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(v.tq(new B.dNm(v,d),"Saving\u2026"),$async$age)
case 2:return A.h(null,w)}})
return A.i($async$age,w)},
Ir(d){return this.bIA(d)},
bIA(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$Ir=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=u.c
s.toString
x=3
return A.b(A.l_(s,"Cancel","Delete",d.b+"\n\nRemoves it from this device and clears any shared cloud copy.","Delete this file?"),$async$Ir)
case 3:if(!f){x=1
break}s=d.x
t=C.a.i(s==null?"":s)
x=t.length!==0?4:5
break
case 4:x=6
return A.b(B.c6b(t),$async$Ir)
case 6:case 5:s=d.a
x=7
return A.b(B.E6(u.a.c,s),$async$Ir)
case 7:u.r.W(0,s)
x=8
return A.b(u.tp(),$async$Ir)
case 8:case 1:return A.h(v,w)}})
return A.i($async$Ir,w)},
ah5(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$ah5=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.c
r.toString
t=B.a0j(r)
r=u.c
r.toString
x=3
return A.b(A.bV(C.K,null,new B.dNH(u,t),r,!0,!0,!1,null,!1,!1,y.N),$async$ah5)
case 3:s=e
if(u.c==null||s==null){x=1
break}switch(s){case"my_code":u.aer()
break
case"import":u.aaQ()
break}case 1:return A.h(v,w)}})
return A.i($async$ah5,w)},
c41(d){var x=d.c
if(C.a.a0(x,"video/")||d.mo(D.ms))return C.pS
if(C.a.a0(x,"image/")||d.mo(D.Px))return C.tM
if(C.a.t(x,"pdf"))return E.N9
return D.akn},
B(d){var x,w,v=this,u=null,t=B.a0j(d),s=t.a,r=s[0],q=s[3],p=A.aH(u,u,u,u,C.G9,u,u,u,new B.dNS(d),u,u,u,u,u,u),o=y.p,n=A.a([],o)
if(v.a.w)n.push(A.aH(u,u,u,u,D.bJc,u,u,u,v.e?u:v.gcbh(),u,u,u,u,"Organization settings",u))
x=v.d.length
if(x!==0){w=v.e?u:v.gcoR()
n.push(A.aH(u,u,u,u,A.W(v.r.a===x?D.bDA:E.akO,u,u,u,u,u),u,u,u,w,u,u,u,u,"Select all",u))}n.push(A.aH(u,u,u,u,C.a_R,u,u,u,v.e?u:v.gc42(),u,u,u,u,"Scan QR",u))
n.push(A.aH(u,u,u,u,C.nW,u,u,u,v.e?u:v.gb_B(),u,u,u,u,"Upload files",u))
n.push(A.aH(u,u,u,u,D.bKT,u,u,u,v.e?u:new B.dNT(v),u,u,u,u,"More options",u))
q=A.eF(n,u,u,!0,!0,r,u,1,u,u,0,!1,u,!1,q,u,p,u,!0,u,u,u,C.K,u,new A.ly(new B.dNU(t),u),u,u,u,1,u,!0)
p=s[5]
n=y.O
p=A.ao(u,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([p.j(A.P(d).ax.a===C.I?0.18:0.12),s[5].j(0)],n),u,u),C.a6),u,220,u,u,u,u,u,220),!0,u),u,u,u,-60,-80,u)
n=A.ao(40,A.e1(A.p(u,u,C.f,u,u,new A.o(u,u,u,u,u,new A.bS(C.A,0.5,C.x,u,0,A.a([C.aE.j(A.P(d).ax.a===C.I?0.12:0.08),C.aE.j(0)],n),u,u),C.a6),u,180,u,u,u,u,u,180),!0,u),u,u,-70,u,u,u)
x=A.a([],o)
if(v.f!=null)x.push(A.lZ(s[1].j(0.5),u,C.aE,2.5,u,u,u))
if(v.d.length!==0){s=v.r.a
s=s===0?"Share QR":"QR ("+s+")"
w=v.e
s=A.D(new B.axT(C.jj,s,!0,t,w?u:v.gcrI(),u),1)
x.push(new A.C(D.bqj,A.mz(new B.dNV(),A.A(A.a([s,C.av,A.D(new B.axT(C.vr,"Export",!1,t,w?u:v.gbM4(),u),1)],o),C.m,u,C.e,C.j,0,u,u),C.cr,C.iw,u,u,new A.bo(0,1,y.X),y.i),u))}s=v.d.length
if(s===0)s=new B.bbQ(t,v.e?u:v.gb_B(),u)
else s=A.k2(!0,u,u,new B.dNW(v,t),s,u,D.bqb,u,u,!1,!1)
x.push(A.D(s,1))
return A.c8(q,r,new A.an(C.W,u,C.aa,C.r,A.a([p,n,A.v(x,C.m,u,C.e,C.j,0,C.p)],o),u),u,!1,!1,u,u)}}
B.axT.prototype={
B(d){var x,w,v,u=this,t=null,s=A.m(16)
if(u.e){x=A.bk(C.aE,t,t,0,C.c,t,C.va,t,new A.b7(s,C.Y),t,t,t)
return A.dp(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.ce,t,t,t),u.r,x)}x=u.f.a
w=x[3]
v=x[1]
v=A.df(t,t,x[2].j(0.7),t,t,t,t,t,t,w,t,t,C.va,t,new A.b7(s,C.Y),new A.aA(v,1,C.q,-1),t,t,t,t)
return A.ex(A.W(u.c,t,t,t,t,18),A.d(u.d,t,t,t,t,t,t,C.eV,t,t,t),u.r,v)}}
B.bbQ.prototype={
B(d){var x=null,w=y.X,v=this.c.a,u=A.a([v[5].j(0.22),C.aE.j(0.16)],y.O),t=A.I(v[5].j(0.35),C.q,1),s=y.i
return A.av(A.mz(new B.d09(),new A.C(E.Yc,A.v(A.a([A.mz(new B.d0a(),A.p(x,A.W(C.xM,v[5],x,x,x,36),C.f,x,x,new A.o(x,x,t,x,x,new A.a8(C.ax,C.aC,C.x,u,x,x),C.a6),x,88,x,x,x,x,x,88),C.ev,C.i9,x,x,new A.bo(0.86,1,w),s),C.e1,A.d("Your Doc Share is empty",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,20,x,x,C.u,x,x,!0,x,-0.2,x,x,x,x,x,x),C.L,x,x),C.S,A.d("Add photos, videos, or documents \u2014 then share with a QR or Send to their Code.",x,x,x,x,x,x,A.l(x,x,v[4],x,x,x,x,x,x,x,x,14,x,x,x,x,1.5,!0,x,x,x,x,x,x,x,x),C.L,x,x),C.e1,A.dp(C.nW,D.fqr,this.d,A.bk(C.aE,x,x,x,C.c,x,C.Y7,x,new A.b7(A.m(16),C.Y),x,x,x))],y.p),C.m,x,C.e,C.Q,0,C.p),x),C.cr,C.AC,x,x,new A.bo(0,1,w),s),x,x,x)}}
B.abi.prototype={
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
if(!o||i.mo(D.ms))p=D.d7X
else{p=C.a.a0(p,"image/")||i.mo(D.Px)
n=y.O
p=p?A.a([C.cZ,C.aE],n):A.a([C.aJ.j(0.85),C.aE.j(0.7)],n)}p=A.p(j,A.W(k.w,C.c,j,j,j,22),C.f,j,j,new A.o(j,j,j,q,j,new A.a8(C.ax,C.aC,C.x,p,j,j),C.n),j,48,j,j,j,j,j,48)
q=A.d(i.b,j,2,C.a2,j,j,j,A.l(j,j,x[3],j,j,j,j,j,j,j,j,14,j,j,C.H,j,j,!0,j,j,j,j,j,j,j,j),j,j,j)
n=A.a([i.gaom()],y.s)
m=g.length!==0
if(m)n.push("Code "+g)
if(!o||i.mo(D.ms))n.push("Tap to play")
l=i.r
if(l!=null)n.push("from "+l)
l=y.p
l=A.a([p,C.bf,A.D(A.v(A.a([q,C.at,A.d(C.d.aI(n," \xb7 "),j,2,C.a2,j,j,j,A.l(j,j,x[4],j,j,j,j,j,j,j,j,11.5,j,j,j,j,1.25,!0,j,j,j,j,j,j,j,j),j,j,j)],l),C.F,j,C.e,C.j,0,C.p),1)],l)
if(m)l.push(A.aH(j,j,j,j,A.W(C.fK,x[4],j,j,j,17),j,j,j,k.z,j,j,j,j,"Copy QR share code",C.c8))
if(!(!o||i.mo(D.ms)))l.push(A.fME(C.aE,!1,j,j,j,!1,j,j,new B.d0w(k),j,j,new A.b7(A.m(5),C.Y),j,j,!1,u))
x=A.W(C.nU,x[4],j,j,j,j)
l.push(A.aH(j,j,j,j,x,j,j,j,k.r?j:k.Q,j,j,j,j,"Options",C.c8))
return A.mz(new B.d0x(),new A.C(C.e3,A.aG(!1,C.a1,!0,j,A.aL(!1,r,!0,new A.C(C.XI,A.A(l,C.m,j,C.e,C.j,0,j,j),j),j,!0,j,j,j,j,j,j,j,j,j,j,k.y,k.x,j,j,j,j,j,j,j),C.f,w,0,j,j,new A.b7(v,new A.aA(t,s,C.q,-1)),j,j,C.ag),j),C.cr,h,new A.cx("docshare_row_"+i.a,y.aw),j,new A.bo(0,1,y.X),y.i)}}
B.Yl.prototype={
U(){return new B.axY()},
gdd(){return this.c}}
B.axY.prototype={
a_(){this.a1()
this.xp()},
q(){B.hxB(this.e)
this.a2()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m,l
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p={}
o=s.a
x=7
return A.b(B.re(o.c,o.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}p.a=null
if(r!=null&&!C.aG.gam(r)){o=s.a.d.c
if(o.length===0)o="image/jpeg"
n=B.hxE(r,o)
p.a=n
o=n}else o=null
if(o==null)o=p.a=B.hxD(s.a.d.a)
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
q=A.aa(l)
if(s.c==null){x=1
break}s.m(new B.d0v(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
a10(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$a10=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.d
x=q==null?3:4
break
case 3:t=u.a
x=5
return A.b(B.re(t.c,t.d),$async$a10)
case 5:q=e
case 4:if(q==null||q.length===0){t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(D.eNH)
x=1
break}t=u.a.d
s=t.b
t=t.c
x=6
return A.b(A.agG(q,s,t.length===0?"image/jpeg":t,null,s),$async$a10)
case 6:r=e
t=u.c
if(t==null){x=1
break}t.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(r,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
case 1:return A.h(v,w)}})
return A.i($async$a10,w)},
bWg(){var x,w=this,v=null,u=w.e,t=w.d
if(u!=null&&u.length!==0)x=A.kk(u,C.A,v,new B.d0r(w,t),C.fU,C.du,!0,v,v,v,v)
else if(t!=null&&!C.aG.gam(t))x=A.fL(t,C.A,v,new B.d0s(w),C.fU,C.du,!0,v,!1,v,v)
else return C.bH
return A.ue(C.af,x,!0,4,0.5,!0,!0,v)},
B(d){var x,w,v=this,u=null,t=B.a0j(d).a,s=t[0],r=t[3],q=A.d(v.a.d.b,u,u,u,u,u,u,A.l(u,u,r,u,u,u,u,u,u,u,u,15,u,u,C.H,u,u,!0,u,u,u,u,u,u,u,u),u,u,u),p=y.p,o=A.a([],p)
if(v.d!=null||v.e!=null)o.push(A.aH(u,u,u,u,C.By,u,u,u,v.gb3l(),u,u,u,u,"Share / save",u))
r=A.eF(o,u,u,!0,!0,s,u,1,u,u,0,!1,u,!1,r,u,u,u,!0,u,u,u,u,u,q,u,u,u,1,u,!0)
if(v.f)t=C.DM
else{q=v.r
if(q!=null)t=new A.C(C.ew,A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,u,!0,u,u,u,u,u,u,u,u),C.L,u,u),u)
else if(v.w){q=v.a.d
x=q.c.toLowerCase()
w=q.b.toLowerCase()
q=C.a.t(x,"heic")||C.a.t(x,"heif")||C.a.cb(w,".heic")||C.a.cb(w,".heif")?"This HEIC/HEIF photo cannot be previewed here. Use Share to open it in Photos or AirDrop it.":"Could not display this image in-app. Use Share to open or save it on your device."
p=new A.C(C.ew,A.v(A.a([A.d(q,u,u,u,u,u,u,A.l(u,u,t[4],u,u,u,u,u,u,u,u,u,u,u,u,u,1.4,!0,u,u,u,u,u,u,u,u),C.L,u,u),C.aP,A.dp(C.By,D.f9N,v.gb3l(),A.bk(C.aE,u,u,u,u,u,u,u,u,u,u,u))],p),C.m,u,C.e,C.Q,0,C.p),u)
t=p}else t=v.bWg()}return A.c8(r,s,A.av(t,u,u,u),u,!1,!1,u,u)}}
B.Yi.prototype={
U(){return new B.axV(A.ahu(),C.bw,C.bw)},
gdd(){return this.c}}
B.axV.prototype={
a_(){var x,w,v=this
v.a1()
x=v.d
w=x.CW
new A.ft(w,A.a3(w).k("ft<1>")).i6(new B.d06(v))
x.gcNU().i6(new B.d07(v))
x=x.Q
if(x==null)x=null
else{x=x.b
x=new A.ft(x,A.a3(x).k("ft<1>"))}if(x==null)x=C.b2c
x.i6(new B.d08(v))
v.xp()},
xp(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$xp=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
p=s.a
x=7
return A.b(B.re(p.c,p.d),$async$xp)
case 7:r=e
if(s.c==null){x=1
break}if(r==null||r.length===0){s.m(new B.d0_(s))
x=1
break}x=8
return A.b(s.d.BJ(0,new A.a2p(r,s.a.d.c)),$async$xp)
case 8:if(s.c==null){x=1
break}s.m(new B.d00(s))
u=2
x=6
break
case 4:u=3
n=t.pop()
q=A.aa(n)
if(s.c==null){x=1
break}s.m(new B.d01(s,q))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$xp,w)},
YS(){var x=0,w=A.j(y.H),v=this,u
var $async$YS=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.d
x=v.f?2:4
break
case 2:x=5
return A.b(u.h1(0),$async$YS)
case 5:x=3
break
case 4:x=6
return A.b(u.i9(0),$async$YS)
case 6:case 3:return A.h(null,w)}})
return A.i($async$YS,w)},
aRt(d){var x=d.a
return C.a.aT(C.o.u(C.o.an(x,6e7)%60),2,"0")+":"+C.a.aT(C.o.u(C.o.an(x,1e6)%60),2,"0")},
q(){this.d.q()
this.a2()},
B(d){var x,w,v,u,t,s,r,q,p=this,o=null,n=B.a0j(d),m=C.o.an(p.x.a,1000)
m=m>0?m:1
x=n.a
w=x[0]
v=x[3]
v=A.eF(o,o,o,!0,!0,w,o,1,o,o,0,!1,o,!1,v,o,o,o,!0,o,o,o,o,o,A.d(p.a.d.b,o,o,o,o,o,o,A.l(o,o,v,o,o,o,o,o,o,o,o,15,o,o,C.H,o,o,!0,o,o,o,o,o,o,o,o),o,o,o),o,o,o,1,o,!0)
if(p.e)x=C.DM
else{u=p.r
if(u!=null)x=A.d(u,o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,o,o,o,!0,o,o,o,o,o,o,o,o),C.L,o,o)
else{u=A.p(o,D.bEz,C.f,o,o,new A.o(o,o,o,A.m(24),o,L.NC,C.n),o,88,o,o,o,o,o,88)
t=A.kU(C.aE,o,o,m,0,new B.d02(p),C.o.D(C.o.an(p.w.a,1000),0,m))
x=A.d(p.aRt(p.w)+" / "+p.aRt(p.x),o,o,o,o,o,o,A.l(o,o,x[4],o,o,o,o,o,o,o,o,o,o,o,C.a5,o,o,!0,o,o,o,o,o,o,o,o),o,o,o)
s=A.bk(C.aE,o,o,o,o,D.eKc,o,o,o,o,o,o)
r=p.f
q=A.W(r?I.xX:C.iT,o,o,o,o,o)
x=A.v(A.a([u,C.kt,t,x,C.d5,A.dp(q,A.d(r?"Pause":"Play",o,o,o,o,o,o,o,o,o,o),p.gc45(),s)],y.p),C.m,o,C.e,C.Q,0,C.p)}}return A.c8(v,w,A.av(new A.C(C.tA,x,o),o,o,o),o,!1,!1,o,o)}}
B.OZ.prototype={
U(){return new B.ay0()},
gdd(){return this.c}}
B.ay0.prototype={
a_(){this.a1()
this.OX()},
OX(){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n,m
var $async$OX=A.e(function(d,e){if(d===1){t.push(e)
x=u}for(;;)switch(x){case 0:u=4
o=s.a
x=7
return A.b(B.fOT(o.c,o.d,new B.d0K(s)),$async$OX)
case 7:r=e
if(r==null||r.length===0){s.m(new B.d0L(s))
x=1
break}s.e=r
q=O.hUh(r)
if(q==null){s.m(new B.d0M(s))
x=1
break}s.d=q
q.aN(0,s.gaZh())
x=8
return A.b(q.i5(0).cM(0,C.qO),$async$OX)
case 8:if(s.c==null){x=1
break}s.m(new B.d0N(s))
x=9
return A.b(q.pC(0),$async$OX)
case 9:q.t1(!0)
u=2
x=6
break
case 4:u=3
m=t.pop()
p=A.aa(m)
if(s.c==null){x=1
break}s.m(new B.d0O(s,p))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$OX,w)},
c9z(){var x=this
if(x.c==null||x.d==null)return
if(x.d.a.z!=null&&x.r==null)x.m(new B.d0P(x))},
q(){var x=this,w=x.d
if(w!=null)if(!w.cx)w.Ct(0,x.gaZh())
w=x.d
if(w!=null)w.q()
B.i31(x.e)
x.a2()},
acX(){var x=0,w=A.j(y.H),v=this,u,t
var $async$acX=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
x=2
return A.b(B.aYo(u.c,u.d),$async$acX)
case 2:t=e
u=v.c
if(u!=null)u.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(t,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
return A.h(null,w)}})
return A.i($async$acX,w)},
B(d){var x,w,v,u=this,t=null,s=B.a0j(d).a,r=s[0],q=s[3],p=A.d(u.a.d.b,t,t,t,t,t,t,A.l(t,t,q,t,t,t,t,t,t,t,t,15,t,t,C.H,t,t,!0,t,t,t,t,t,t,t,t),t,t,t),o=y.p
p=A.eF(A.a([A.aH(t,t,t,t,C.oI,t,t,t,u.gc4_(),t,t,t,t,"Download",t)],o),t,t,!0,!0,r,t,1,t,t,0,!1,t,!1,q,new A.ie(t,t,t,t,t,q,t,t,t),t,t,!0,t,t,t,t,t,p,t,t,t,1,t,!0)
if(u.f)s=C.DM
else{q=u.r
if(q!=null)s=new A.C(C.ew,A.d(q,t,t,t,t,t,t,A.l(t,t,s[4],t,t,t,t,t,t,t,t,t,t,t,t,t,t,!0,t,t,t,t,t,t,t,t),C.L,t,t),t)
else{s=u.d
if(s!=null&&s.a.ax){q=s.a
x=J.agY(q)
q=q.f
w=q?0:0.85
v=A.m(50)
s=new A.fG(x,new A.an(C.A,t,C.aa,C.r,A.a([new A.zK(s,t),A.aE(t,A.CO(A.p(t,A.W(q?I.xX:C.iT,C.c,t,t,t,48),C.f,t,t,new A.o(C.aX,t,t,v,t,t,C.n),t,t,t,t,C.bV,t,t,t),C.bc,C.a1,w),C.y,!1,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,t,new B.d0R(u),t,t,t,t,t,t,!1,C.a8)],o),t),t)}else s=C.bH}}return A.c8(p,r,A.av(s,t,t,t),t,!1,!1,t,t)}}
B.Yn.prototype={
U(){return new B.axZ(new A.cs(null,y.A))}}
B.axZ.prototype={
gcAl(){var x,w,v=this.a
if(v.e!==D.QR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC3|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"WR"))return w
return null},
gcA0(){var x,w,v=this.a
if(v.e!==D.yR)return null
x=C.a.i(v.c)
if(!C.a.a0(x,"NGMYDOCSYNC4|"))return null
w=C.a.i(C.a.b0(x,13))
if(C.a.a0(w,"VT"))return w
return null},
a_(){var x,w,v=this
v.a1()
x=v.gcAl()
if(x!=null){v.PZ(x)
v.e=A.dA(R.EV,new B.d0G(v,x))}w=v.gcA0()
if(w!=null){v.PY(w)
v.f=A.dA(C.h4,new B.d0H(v,w))}},
q(){var x=this.e
if(x!=null)x.a8(0)
x=this.f
if(x!=null)x.a8(0)
this.a2()},
PY(d){return this.cgz(d)},
cgz(d){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$PY=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.c==null){x=1
break}x=3
return A.b(B.ao6(d),$async$PY)
case 3:t=f
x=4
return A.b(B.c6u(d),$async$PY)
case 4:s=f
if(u.c==null){x=1
break}u.m(new B.d0y(u,t,s))
case 1:return A.h(v,w)}})
return A.i($async$PY,w)},
PZ(d){return this.cgA(d)},
cgA(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$PZ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:if(u.r||u.c==null){x=1
break}x=3
return A.b(B.fCC(d),$async$PZ)
case 3:t=f
if(t==null||u.c==null){x=1
break}x=4
return A.b(B.bzv(t),$async$PZ)
case 4:if(u.c==null){x=1
break}u.m(new B.d0z(u))
u.c.I(y.q).f.R(D.aNg)
case 1:return A.h(v,w)}})
return A.i($async$PZ,w)},
gc0c(){switch(this.a.e.a){case 1:return"Share QR"
case 2:return"Instant restore"
case 0:return"Direct transfer"
case 3:return"Direct link"
case 4:return"Video share"}},
gc40(){switch(this.a.e.a){case 1:return"Receiver scans once \u2014 files restore to their Doc Share library."
case 2:return"Receiver scans once \u2014 files restore instantly."
case 0:return"Keep this screen open until the other phone finishes. They scan with Doc Share \u2192 Scan QR."
case 3:return"Receiver scans this QR. Connection completes automatically when they accept."
case 4:return this.w?"Video is ready. Receiver scans with Doc Share \u2192 Scan QR.":"Uploading video to cloud\u2026 keep this screen open until ready."}},
a0N(){var x=0,w=A.j(y.H),v,u=this,t,s
var $async$a0N=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:if(!A.Cw()){t=u.c
if(t!=null)t.I(y.q).f.R(D.eQL)
x=1
break}t=u.c
t.toString
x=3
return A.b(A.a6(t,!1).c8(A.e8(new B.d0A(),!1,null,y.N)),$async$a0N)
case 3:s=e
if(s==null||s.length===0){x=1
break}x=4
return A.b(B.bzv(s),$async$a0N)
case 4:t=u.c
if(t!=null)t.I(y.q).f.R(D.aNg)
case 1:return A.h(v,w)}})
return A.i($async$a0N,w)},
a8O(d){return this.bGj(d)},
bGj(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8O=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.a.f
if(t.length===0){x=1
break}x=3
return A.b(A.fI(new A.fC(C.d.aI(t,", "))),$async$a8O)
case 3:if(d.e!=null){t=d.I(y.q).f
t.R(A.b2(null,null,null,null,null,C.r,null,A.d("Type-in code"+(u.a.f.length>1?"s":"")+" copied",null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))}case 1:return A.h(v,w)}})
return A.i($async$a8O,w)},
acV(d){return this.bG3(d)},
bG3(d){var x=0,w=A.j(y.H),v=this
var $async$acV=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:x=2
return A.b(A.fI(new A.fC(v.a.c)),$async$acV)
case 2:if(d.e!=null)d.I(y.q).f.R(D.eO9)
return A.h(null,w)}})
return A.i($async$acV,w)},
a0I(d){return this.cnu(d)},
cnu(d){var x=0,w=A.j(y.H),v,u=2,t=[],s=this,r,q,p,o,n
var $async$a0I=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:u=4
x=7
return A.b(B.ana(s.d,4),$async$a0I)
case 7:r=f
if(r==null||r.length===0){x=1
break}x=8
return A.b(A.rJ(r,"ngmy_doc_share_qr.png"),$async$a0I)
case 8:q=f
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d(q,null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
u=2
x=6
break
case 4:u=3
n=t.pop()
p=A.aa(n)
if(d.e!=null)d.I(y.q).f.R(A.b2(null,null,null,null,null,C.r,null,A.d("Could not save QR: "+A.t(p),null,null,null,null,null,null,null,null,null,null),null,C.U,null,null,null,null,null,null,null,null,null,null))
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$a0I,w)},
gaUC(){var x,w=this.a
if(w.e!==D.Hk)return null
x=C.a.i(w.c)
if(C.a.a0(x,"N2|"))return C.a.i(C.a.b0(x,3))
if(C.a.a0(x,"http://")||C.a.a0(x,"https://"))return x
if(C.a.a0(x,"NGMYDOCSYNC2|"))return C.a.i(C.a.b0(x,13))
return null},
a8L(d){return this.bGc(d)},
bGc(d){var x=0,w=A.j(y.H),v,u=this,t
var $async$a8L=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:t=u.gaUC()
if(t==null){x=1
break}x=3
return A.b(A.fI(new A.fC(C.a.a0(t,"http")?t:"N2|"+t)),$async$a8L)
case 3:if(d.e!=null)d.I(y.q).f.R(D.ePL)
case 1:return A.h(v,w)}})
return A.i($async$a8L,w)},
acW(){var x=0,w=A.j(y.H),v=this,u
var $async$acW=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.Uc(),$async$acW)
case 2:u=v.c
if(u!=null)A.a6(u,!1).O(null)
return A.h(null,w)}})
return A.i($async$acW,w)},
B(d){var x,w,v,u,t,s,r,q,p,o,n,m=this,l=null,k="Keep screen open",j=B.a0j(d),i=m.a,h=i.c
if(h.length>48)h=C.a.ap(h,0,44)+"\u2026"
i=i.e
i=i!==D.Hk&&i!==D.QR&&i!==D.yR
x=j.a
w=x[0]
v=x[3]
u=A.d("Share via QR",l,l,l,l,l,l,A.l(l,l,v,l,l,l,l,l,l,l,l,l,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)
t=m.a.e
v=A.eF(l,l,l,!0,!0,w,l,1,!0,l,0,!1,l,!1,v,l,t===D.Hk||t===D.QR||t===D.yR?l:A.aH(l,l,l,l,C.kP,l,l,l,m.gaXt(),l,l,l,l,l,l),l,!0,l,l,l,l,l,u,l,l,l,1,l,!0)
u=x[2]
s=A.m(24)
r=A.I(C.aE.j(0.35),C.q,1)
q=m.a
p=y.p
q=A.a([C.O,A.pE(l,m.d,!1,q.c,l,!0,!0,l,!1,C.c),C.bx,A.d(""+q.d+" file(s) \xb7 "+m.gc0c(),l,l,l,l,l,l,A.l(l,l,x[3],l,l,l,l,l,l,l,l,14,l,l,C.u,l,l,!0,l,l,l,l,l,l,l,l),l,l,l)],p)
if(m.a.e===D.Hk){t=C.aE.j(0.12)
o=A.m(20)
C.d.v(q,A.a([C.O,A.p(l,A.d(k,l,l,l,l,l,l,A.l(l,l,C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(t,l,l,o,l,l,C.n),l,l,l,l,C.mh,l,l,l)],p))}q.push(C.aP)
q.push(A.d(m.gc40(),l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,12,l,l,l,l,1.45,!0,l,l,l,l,l,l,l,l),C.L,l,l))
t=m.a.f
o=t.length
if(o!==0){t=o===1?"Type-in code: "+C.d.gL(t):"Type-in codes: "+C.d.aI(t,", ")
C.d.v(q,A.a([C.S,A.d(t,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.P,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bOD,D.fiM,new B.d0B(m,d),l)],p))}if(m.a.e===D.Hk&&m.gaUC()!=null)C.d.v(q,A.a([C.S,A.d("Code: "+h,l,l,l,l,l,l,A.l(l,l,x[4],l,l,l,l,l,l,l,l,11,l,l,C.a5,l,l,!0,l,l,l,l,l,l,l,l),C.L,l,l),A.hc(D.bLc,D.ffw,new B.d0C(m,d),l)],p))
if(m.a.e===D.yR){x=(m.w?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.w?"Ready to receive":"Uploading "+C.k.aa(C.k.D(m.x*100,0,99),0)+"%"
C.d.v(q,A.a([C.O,A.p(l,A.d(o,l,l,l,l,l,l,A.l(l,l,m.w?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mh,l,l,l)],p))}if(m.a.e===D.QR){x=(m.r?C.dw:C.aE).j(0.12)
t=A.m(20)
o=m.r
n=o?"Connected \u2014 sending\u2026":k
C.d.v(q,A.a([C.O,A.p(l,A.d(n,l,l,l,l,l,l,A.l(l,l,o?C.DP:C.aE,l,l,l,l,l,l,l,l,12,l,l,C.H,l,l,!0,l,l,l,l,l,l,l,l),l,l,l),C.f,l,l,new A.o(x,l,l,t,l,l,C.n),l,l,l,l,C.mh,l,l,l),C.ac,A.dp(D.bH0,D.flM,m.gcnS(),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l))],p))}return A.og(i,A.c8(v,w,new A.C(C.a9,A.v(A.a([A.D(A.p(l,A.v(q,C.m,l,C.bb,C.j,0,C.p),C.f,l,l,new A.o(u,l,r,s,l,l,C.n),l,l,l,l,C.a9,l,l,1/0),1),C.ac,A.A(A.a([A.D(A.ex(N.Bx,C.Th,new B.d0D(m,d),l),1),C.av,A.D(A.dp(C.yi,C.a7k,new B.d0E(m,d),A.bk(C.aE,l,l,l,l,l,l,l,l,l,l,l)),1)],p),C.m,l,C.e,C.j,0,l,l),C.O,new A.a7(1/0,l,A.bJ(C.zn,m.gaXt(),A.bk(C.aJ,l,l,l,l,C.fM,l,l,l,l,l,l)),l)],p),C.m,l,C.e,C.j,0,C.p),l),l,!1,!1,l,l),new B.d0F(),y.C)}}
B.abg.prototype={
B(d){var x=null,w=A.d('Sender taps "Scan receiver answer QR" and points at this code.',x,x,x,x,x,x,A.l(x,x,C.c.j(0.7),x,x,x,x,x,x,x,x,12,x,x,x,x,1.4,!0,x,x,x,x,x,x,x,x),C.L,x,x),v=A.m(16),u=y.p
v=A.cd(A.v(A.a([w,C.aP,A.p(x,A.pE(x,x,!1,this.c,x,!0,!0,x,!1,C.c),C.f,x,x,new A.o(C.c,x,x,v,x,x,C.n),x,x,x,x,C.bC,x,x,x)],u),C.m,x,C.e,C.Q,0,C.p),C.r,x,C.y,x,x,x,x,C.ah)
return A.ej(A.a([A.bJ(C.zo,new B.d_Z(d),x)],u),x,x,C.mM,v,x,x,x,x,D.f8P,x)}}
B.Yh.prototype={
U(){return new B.axU(A.yQ(C.xa,C.nw,C.tY))}}
B.axU.prototype={
q(){this.d.q()
this.a2()},
avL(d){var x,w,v,u,t
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
return A.c8(A.eF(x,x,x,!0,!0,C.w,x,1,x,x,x,!1,x,!1,C.c,x,x,x,!0,x,x,x,x,x,D.fg_,x,x,x,1,x,!0),C.w,A.yP(this.d,C.bQ,this.gavK()),x,!1,!1,x,x)}}
B.Yo.prototype={
U(){return new B.ay_(A.yQ(C.xa,C.nw,C.tY))},
gdd(){return this.c}}
B.ay_.prototype={
bXj(d){var x=C.a.i(d)
if(x.length===0)return!1
return C.a.a0(x,"NGMYDOCSYNC")||C.a.a0(x,"N2|")||C.a.a0(x,"http://")||C.a.t(x,"ngmyDocShareBundle")},
aeO(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$aeO=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=3
return A.b(A.Rt("text/plain"),$async$aeO)
case 3:r=e
if(r==null)t=null
else{s=C.a.i(r.a)
t=s}if(t==null)t=""
if(t.length===0){s=u.c
if(s!=null)s.I(y.q).f.R(D.eQF)
x=1
break}s=u.c
if(s!=null)A.a6(s,!1).O(t)
case 1:return A.h(v,w)}})
return A.i($async$aeO,w)},
a9z(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q,p
var $async$a9z=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:p=u.c
p.toString
x=3
return A.b(B.hj2(p,!0),$async$a9z)
case 3:t=e
p=t==null
s=B.a6a(p?"":t)
if(s==null){r=u.c
if(r!=null){q=C.a.i(p?"":t).length!==0
p=q}else p=!1
if(p)r.I(y.q).f.R(D.eNh)
x=1
break}p=u.c
if(p!=null)A.a6(p,!1).O(s)
case 1:return A.h(v,w)}})
return A.i($async$a9z,w)},
q(){this.d.q()
this.a2()},
avL(d){var x,w,v,u,t,s=this
if(s.e)return
for(x=d.a,w=x.length,v=0;v<x.length;x.length===w||(0,A.L)(x),++v){u=x[v].z
t=u==null?null:C.a.i(u)
if(t==null)t=""
if(!s.bXj(t))continue
s.e=!0
x=s.c
x.toString
A.a6(x,!1).O(t)
return}},
B(d){var x,w=this,v=null,u=A.aH(v,v,v,v,F.alJ,v,v,v,w.gbLD(),v,v,v,v,"Enter QR share code",v),t=A.aH(v,v,v,v,F.a_Y,v,v,v,w.gcdZ(),v,v,v,v,"Paste Wi\u2011Fi link",v),s=y.p
t=A.eF(A.a([u,t,A.aH(v,v,v,v,A.W(w.f?C.qZ:P.MT,v,v,v,v,v),v,v,v,new B.d0J(w),v,v,v,v,v,v)],s),v,v,!0,!0,C.w,v,1,v,v,v,!1,v,!1,C.c,v,v,v,!0,v,v,v,v,v,D.fmA,v,v,v,1,v,!0)
u=A.yP(w.d,C.bQ,w.gavK())
x=A.m(20)
return A.c8(t,C.w,new A.an(C.W,v,C.aa,C.r,A.a([u,A.av(A.p(v,v,C.f,v,v,new A.o(v,v,A.I(C.aJ,C.q,4),x,v,v,C.n),v,300,v,v,v,v,v,300),v,v,v),D.e9N],s),v),v,!1,!1,v,v)}}
B.bbR.prototype={
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
return A.aG(!1,C.a1,!0,r,A.aL(!1,w,!0,new A.C(C.Yh,A.A(A.a([u,C.bf,A.D(A.v(t,C.F,r,C.e,C.j,0,C.p),1),A.W(C.ex,s.f.a[4],r,r,r,22)],v),C.m,r,C.e,C.j,0,r,r),r),r,!0,r,r,r,r,r,r,r,r,r,r,r,s.r,r,r,r,r,r,r,r),C.f,C.K,0,r,r,r,r,r,C.ag)}}
B.a8x.prototype={
a4(){return"RTCDataChannelState."+this.b}}
B.NR.prototype={
a4(){return"RTCSignalingState."+this.b}}
B.Wo.prototype={
a4(){return"RTCIceGatheringState."+this.b}}
B.NQ.prototype={
a4(){return"RTCPeerConnectionState."+this.b}}
B.EA.prototype={
a4(){return"RTCIceConnectionState."+this.b}}
B.chp.prototype={}
B.Ez.prototype={}
B.a8w.prototype={}
B.aso.prototype={}
B.Wp.prototype={}
var z=a.updateTypes(["ay<~>()","R(jh)","n(jh)","U3(Y)","~()","Yk(Y)","H(H,jh)","OZ(Y)","~(lU)","cq(Ez)","ay<jh?>(@)","U1(Y)","U5(Y)","C(jh)","jh(@)","a4<n,@>(jh)","Yj(Y)","U2(Y)","Yl(Y)","Yi(Y)","Yn(Y)","abg(Y)","aj<jh>()","Yo(Y)","abi(Y,H)","Yh(Y)","a4<n,aC>(jh)","cq(Wo)","cq(a8w)","ay<cq>(Ez)"])
B.chl.prototype={
$1(d){var x=this.a
x.x=D.aKy
x.y.K(0,D.aKy)},
$S:69}
B.chm.prototype={
$1(d){var x=this.a
x.x=D.aKx
x.y.K(0,D.aKx)},
$S:69}
B.chn.prototype={
$1(d){var x=this.a
x.ag7(A.aNw(d.data)).bz(new B.chk(x),y.b)},
$S:69}
B.chk.prototype={
$1(d){var x=this.a
x.z.K(0,d)
x=x.b
if(x!=null)x.$1(d)},
$S:z+9}
B.cho.prototype={
$1(d){},
$S:69}
B.chr.prototype={
$1(d){var x=this.a.y
if(x!=null)x.$1(B.hCm(d.channel))},
$S:15}
B.chs.prototype={
$1(d){},
$S:15}
B.cht.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hVj(w.iceConnectionState)
x.cx=w
if($.fXB())switch(w.a){case 0:x.cy=D.aKD
break
case 1:x.cy=D.aKE
break
case 3:x.cy=D.aKF
break
case 5:x.cy=D.aKB
break
case 6:x.cy=D.aKC
break
case 7:x.cy=D.a57
break
default:break}},
$S:151}
B.chu.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
w=B.hVk(w.iceGatheringState)
x.CW=w
x=x.c
if(x!=null)x.$1(w)},
$S:151}
B.chv.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.ch=B.i4v(w.signalingState)},
$S:151}
B.chw.prototype={
$1(d){var x=this.a,w=x.at
w===$&&A.c()
x.cy=B.i2L(w.connectionState)},
$S:151}
B.chx.prototype={
$1(d){},
$S:151}
B.chy.prototype={
$1(d){},
$S:15}
B.ffT.prototype={
$1(d){var x=y.F.a(new A.rz([],[]).po(d.target.result,!1)),w=C.xb.t(x.objectStoreNames,"blobs")
if(!w)C.x7.Ke(x,"blobs")},
$S:179}
B.fC3.prototype={
$1(d){var x=this.a
if(x.a)return
x.a=!0
C.vD.f8(this.b)
$.eT.mj()
this.c.$1(d)},
$S:409}
B.fC5.prototype={
$1(d){return this.a.$1(B.hLd(this.b,this.c))},
$S:32}
B.fC4.prototype={
$1(d){return this.a.$1(A.a([],y.w))},
$S:32}
B.fC2.prototype={
$0(){return this.a.$1(A.a([],y.w))},
$S:0}
B.fCi.prototype={
$1(d){var x=this
return B.h8G(x.c,x.a,!1,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fCj.prototype={
$1(d){var x=this
return B.h8G(x.c,x.a,!0,x.d,x.e,x.f,x.b)},
$S:z+5}
B.fhw.prototype={
$1(d){var x=this
return B.c65(x.c,x.a,x.d,x.r,x.w,x.x,x.f,x.e,x.b)},
$S:z+3}
B.d0h.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.d0e.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c65(x.e,w,!1,x.f,x.r,x.w,!1,!1,v)},
$S:z+3}
B.d0g.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c65(x.e,w,!1,x.f,x.r,x.w,!1,!0,v)},
$S:z+3}
B.d0f.prototype={
$1(d){var x=this.a.a,w=x.c,v=x.d
return B.c65(x.e,w,!1,x.f,x.r,x.w,!0,!1,v)},
$S:z+3}
B.d0j.prototype={
$4(d,e,f,g){var x=null
return A.jC(A.A(A.a([A.aH(x,x,x,x,D.bFD,x,x,x,new B.d0i(d),x,x,x,x,x,x),A.D(A.El(D.Pi,!0,x,C.a_3,x,x,g,e,"Upload \xb7 share \xb7 sync","Doc Share",x),1)],y.p),C.m,x,C.e,C.j,0,x,x),D.Pi,x,g,C.ahy,0,e,f)},
$C:"$4",
$R:4,
$S:392}
B.d0i.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fjv.prototype={
$1(d){var x,w,v=null,u=A.aI(d,C.eD,y.o).w,t=this.a,s=t?C.i6:C.c,r=A.m(28),q=A.p(v,D.bkz,C.f,v,v,D.aYL,v,v,v,v,D.aho,v,v,1/0),p=this.b,o=t?C.c.j(0.06):C.aQ
o=A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),p,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,o,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"From your manager or admin",v,v,v,v,v,v,v,v,"Access code",!0,!0,!1,v,D.bJL,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!1,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v)
x=this.c
t=t?C.c.j(0.06):C.aQ
w=y.p
return new A.C(new A.Q(0,0,0,u.f.d),A.p(v,A.v(A.a([q,new A.C(C.F7,A.v(A.a([o,C.ac,A.aM(v,C.T,!1,v,!0,C.r,v,A.aN(),x,v,v,v,v,v,2,A.br(v,new A.b4(4,A.m(16),C.Y),v,v,v,v,v,v,!0,v,v,v,v,v,v,t,!0,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,v,"Password",!0,!0,!1,v,C.alY,v,v,v,v,v,v,v,v,v,v,v,v),C.y,!0,v,!0,v,!1,v,C.ai,v,v,v,v,v,v,v,v,v,1,v,v,!0,"\u2022",v,v,v,v,v,!1,v,v,!1,v,!0,v,C.a9,v,v,v,v,v,v,v,v,v,v,v,v,!0,C.a4,v,C.am,v,v,v,v),C.bx,A.A(A.a([A.D(A.dV(C.de,new B.fjt(d),v),1),C.av,A.D(A.bJ(D.fey,new B.fju(p,x,d),A.bk(C.aZ,v,v,v,v,v,v,v,v,v,v,v)),2)],w),C.m,v,C.e,C.j,0,v,v)],w),C.m,v,C.e,C.j,0,C.p),v)],w),C.m,v,C.e,C.Q,0,C.p),C.f,v,v,new A.o(s,v,v,r,v,v,C.n),v,v,v,C.Lx,v,v,v,v),v)},
$S:60}
B.fjt.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.fju.prototype={
$0(){var x,w=this,v=C.a.i(w.a.a.a)
if(v.length<3||C.a.i(w.b.a.a).length<4){w.c.I(y.q).f.R(D.eOo)
return}x=w.b.a.a
A.a6(w.c,!1).O(new B.aAv(v,x))},
$S:0}
B.fjZ.prototype={
$1(d){var x=this,w=null,v=A.aI(d,C.eD,y.o).w,u=x.a,t=u?C.i6:C.c,s=A.m(28),r=x.b,q=x.c,p=x.d,o=y.p
return new A.C(new A.Q(0,0,0,v.f.d),A.p(w,A.v(A.a([A.p(w,D.bkp,C.f,w,w,D.b_b,w,w,w,w,D.aho,w,w,1/0),new A.C(C.F7,A.v(A.a([A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),r,w,w,w,w,w,2,B.fTO(u,"Organization name",C.Fy,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),q,w,w,w,w,w,2,B.fTO(u,"Access code",C.n7,"e.g. acme-team"),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!1,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.S,A.aM(w,C.T,!1,w,!0,C.r,w,A.aN(),p,w,w,w,w,w,2,B.fTO(u,"Member password",H.G4,w),C.y,!0,w,!0,w,!1,w,C.ai,w,w,w,w,w,w,w,w,w,1,w,w,!0,"\u2022",w,w,w,w,w,!1,w,w,!1,w,!0,w,C.a9,w,w,w,w,w,w,w,w,w,w,w,w,!0,C.a4,w,C.am,w,w,w,w),C.bx,A.bJ(D.fmF,new B.fjY(r,q,p,d),A.bk(C.aE,w,w,w,w,C.fM,w,w,w,w,w,w))],o),C.m,w,C.e,C.j,0,C.p),w)],o),C.m,w,C.e,C.Q,0,C.p),C.f,w,w,new A.o(t,w,w,s,w,w,C.n),w,w,w,C.Lx,w,w,w,w),w)},
$S:60}
B.fjY.prototype={
$0(){var x,w,v=this,u=C.a.i(v.a.a.a)
if(u.length===0||C.a.i(v.b.a.a).length<3||C.a.i(v.c.a.a).length<4){v.d.I(y.q).f.R(D.eOt)
return}x=C.a.i(v.b.a.a)
w=C.a.i(v.c.a.a)
A.a6(v.d,!1).O(new B.aDH(u,x,w))},
$S:0}
B.c5X.prototype={
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
return A.b(A.v2(p,null).cM(0,C.Xl),$async$$1)
case 7:o=f
if(o.b!==200||o.w.length===0){v=null
x=1
break}l=new Uint8Array(A.ce(o.w))
k=s.d
k=k.length!==0?k:null
x=8
return A.b(B.Bc(l,s.c,k,q,r,"Received via QR"),$async$$1)
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
m=A.aa(h)
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
B.c62.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c63.prototype={
$1(d){return d.d>1048576},
$S:z+1}
B.c64.prototype={
$1(d){return d.b},
$S:z+2}
B.c5Z.prototype={
$2(d,e){return d+e.d},
$S:z+6}
B.c6_.prototype={
$1(d){return d.b},
$S:z+2}
B.c5Y.prototype={
$1(d){return A.a1(y.f.a(d),y.N,y.z)},
$S:12}
B.c60.prototype={
$1(d){var x=J.q(d,"status")
return!J.z(x==null?"":x,"done")},
$S:4}
B.c61.prototype={
$1(d){var x=J.q(d,"status")
return J.z(x==null?"":x,"done")},
$S:4}
B.fCg.prototype={
$1(d){return new B.U1(this.a,null)},
$S:z+11}
B.fCh.prototype={
$1(d){return new B.U5(this.a,this.b,this.c,null)},
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
$3(d,e,f){return A.dc(A.dW(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.dO7.prototype={
$1(d){var x=this.a
return x.f?null:x.YR()},
$S:2}
B.dO8.prototype={
$1(d){var x,w,v=null,u=A.m(11),t=C.aE.j(this.a?0.22:0.12),s=d.c
if(C.a.a0(s,"image/")||d.mo(D.Px))s=C.tM
else s=C.a.a0(s,"video/")||d.mo(D.ms)?C.pS:D.akn
x=this.b.a
w=y.p
return new A.C(C.kI,A.A(A.a([A.p(v,A.W(s,C.aE,v,v,v,18),C.f,v,v,new A.o(t,v,v,u,v,v,C.n),v,36,v,v,v,v,v,36),C.av,A.D(A.v(A.a([A.d(d.b,v,v,C.a2,v,v,v,A.l(v,v,x[3],v,v,v,v,v,v,v,v,13,v,v,C.P,v,v,!0,v,v,v,v,v,v,v,v),v,v,v),A.d(d.gaom(),v,v,v,v,v,v,A.l(v,v,x[4],v,v,v,v,v,v,v,v,11,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)],w),C.F,v,C.e,C.j,0,C.p),1)],w),C.m,v,C.e,C.j,0,v,v),v)},
$S:z+13}
B.dMR.prototype={
$0(){return this.a.r=!0},
$S:0}
B.dMS.prototype={
$0(){return this.a.r=!1},
$S:0}
B.c66.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:95}
B.c67.prototype={
$2(d,e){return new A.bv(J.k(d),J.k(e),y.M)},
$S:95}
B.fCU.prototype={
$2(d,e){return e===this.a},
$S:288}
B.fd5.prototype={
$1(d){return J.k(d)},
$S:17}
B.fhI.prototype={
$1(d){var x=this.b
B.hJe(C.Fl.ga5l(this.a)).bz(x.gcDm(x),y.H)},
$S:121}
B.fhJ.prototype={
$1(d){return this.a.d4(0,null)},
$S:121}
B.fhK.prototype={
$0(){return null},
$S:11}
B.c6l.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fhL.prototype={
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
B.flH.prototype={
$1(d){return d.af()},
$S:z+15}
B.fga.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.fgb.prototype={
$1(d){return d.a===this.a},
$S:z+1}
B.c6q.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.ms)},
$S:z+1}
B.fGW.prototype={
$1(d){return new B.Yj(this.a,null)},
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
if(!x.e&&x.c!=null)x.a_U()},
$S:13}
B.dNk.prototype={
$0(){var x=J.bCI(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dNl.prototype={
$0(){var x=J.bCI(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dMU.prototype={
$0(){var x=this.a,w=C.d.bc(x.d,new B.dMT(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCv(this.c)}},
$S:0}
B.dMT.prototype={
$1(d){return d.a===this.a.a},
$S:z+1}
B.dMV.prototype={
$0(){var x=J.bCI(this.b)
x=A.B(x,x.$ti.k("ak.E"))
return this.a.d=x},
$S:0}
B.dN_.prototype={
$0(){var x=this.a,w=C.d.bc(x.d,new B.dMZ(this.b))
if(w>=0){x=x.d
x[w]=x[w].aCv(this.c)}},
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
$1(d){return new B.U2(this.a.a.c,this.b,this.c,null)},
$S:z+17}
B.dNe.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:r=u.a
x=3
return A.b(r.HE(),$async$$0)
case 3:if(!e){x=1
break}x=4
return A.b(B.U6(r.a.c,u.b,u.c),$async$$0)
case 4:t=e
x=5
return A.b(r.tp(),$async$$0)
case 5:s=J.a5(t)
x=s.gcn(t)?6:7
break
case 6:x=8
return A.b(r.a04(s.gM(t)),$async$$0)
case 8:case 7:r.hW(s.gam(t)?u.d:u.e+" "+s.gM(t)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMY.prototype={
$1(d){this.a.aaU(d,"No files selected.","Added")},
$S:409}
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
return A.b($.wR.c5().cPR(C.Z7,!0),$async$$0)
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
p=A.aa(j)
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
return A.b(B.ao5(null,m,o.a.c),$async$$0)
case 8:l=e
if(l==null||J.cl(l)){o.hW("Could not import \u2014 use a Doc Share file or scan a QR code.")
x=1
break}x=9
return A.b(o.tp(),$async$$0)
case 9:o.hW("Imported "+J.ad(l)+" file(s).")
case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$0,w)},
$S:1}
B.dNI.prototype={
$1(d){return new B.OZ(this.a.a.c,this.b,null)},
$S:z+7}
B.dNJ.prototype={
$1(d){return new B.Yl(this.a.a.c,this.b,null)},
$S:z+18}
B.dNK.prototype={
$1(d){return new B.Yi(this.a.a.c,this.b,null)},
$S:z+19}
B.dNf.prototype={
$1(d){return new B.OZ(this.a.a.c,this.b,null)},
$S:z+7}
B.dNg.prototype={
$0(){var x=this.a.r,w=this.b.a
if(x.t(0,w))x.W(0,w)
else x.K(0,w)},
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
return A.b(B.a6c(t,p.a.c),$async$$0)
case 4:s=e
if(p.c==null){x=1
break}if(s==null){p.hW("Could not create share QR. Check your connection and try again.")
x=1
break}x=5
return A.b(p.cjU(),$async$$0)
case 5:x=6
return A.b(p.tp(),$async$$0)
case 6:r=A.U(t).k("K<1,n>")
r=new A.K(new A.K(t,new B.dNx(p),r),new B.dNy(),r.k("K<ak.E,n>")).c_(0,new B.dNz())
q=A.B(r,r.$ti.k("J.E"))
t=p.c
t.toString
x=7
return A.b(A.a6(t,!1).c8(A.e8(new B.dNA(s,q),!0,null,y.H)),$async$$0)
case 7:p=p.a
x=8
return A.b(A.oY(p.c,p.f),$async$$0)
case 8:x=9
return A.b(B.Uc(),$async$$0)
case 9:case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNx.prototype={
$1(d){var x=this.a,w=C.d.bc(x.d,new B.dNw(d))
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
return new B.Yn(x.c,x.a,x.b,this.b,null)},
$S:z+20}
B.dNC.prototype={
$1(d){return d.a},
$S:z+2}
B.dND.prototype={
$1(d){return this.a.t(0,d.a)},
$S:z+1}
B.dNv.prototype={
$1(d){var x,w,v=null,u=this.a,t=u.a,s=t[2],r=C.aE.j(0.35),q=A.av(A.p(v,v,C.f,v,v,new A.o(t[4].j(0.35),v,v,A.m(99),v,v,C.n),v,4,v,C.kH,v,v,v,40),v,v,v),p=this.b,o=A.d(p.b,v,2,C.a2,v,v,v,A.l(v,v,t[3],v,v,v,v,v,v,v,v,15,v,v,C.u,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
t=A.d(p.gaom(),v,v,v,v,v,v,A.l(v,v,t[4],v,v,v,v,v,v,v,v,12,v,v,v,v,v,!0,v,v,v,v,v,v,v,v),v,v,v)
x=!C.a.a0(p.c,"video/")
w=!x||p.mo(D.ms)?C.tO:C.oF
p=!x||p.mo(D.ms)?"Play video":"View"
return A.c_(A.bn(!0,new A.C(C.AO,A.v(A.a([q,o,t,C.aA,B.Ym(!1,u,!1,w,p,new B.dNq(d),v),B.Ym(!1,u,!1,C.jj,"Share via QR",new B.dNr(d),"Letters/numbers QR code"),B.Ym(!1,u,!1,D.a_9,"Send to their Code",new B.dNs(d),"Enter someone else's personal code"),B.Ym(!1,u,!1,C.hz,"Download / save",new B.dNt(d),v),C.an,B.Ym(!1,u,!0,C.e4,"Delete",new B.dNu(d),v)],y.p),C.aj,v,C.e,C.Q,0,C.p),v),!0,!1,C.af,!0,!0),new A.o(s,v,new A.bP(new A.aA(r,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,v,v,C.n),C.bd)},
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
return A.b(B.a6e(null,v.b,u.a.c),$async$$0)
case 3:x=2
return A.b(r.G0(e,"ngmy_doc_share_"+Date.now()+".ngmydoc",!1),$async$$0)
case 2:t=e
s=u.a
x=4
return A.b(A.oY(s.c,s.f),$async$$0)
case 4:u.hW(t)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dMX.prototype={
$1(d){var x=this.a
x.tq(new B.dMW(x,d,this.b),"Preparing\u2026")},
$S:409}
B.dMW.prototype={
$0(){var x=0,w=A.j(y.H),v,u=this,t,s,r,q
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:q=u.b
if(q.length===0){u.a.hW("No files selected.")
x=1
break}t=u.a
x=3
return A.b(B.U6(t.a.c,q,null),$async$$0)
case 3:s=e
if(J.cl(s)){t.hW("Could not read selected file(s). Try again.")
x=1
break}q=t.c
if(q==null){x=1
break}x=4
return A.b(B.bBC(q,s,u.c,t.a.c),$async$$0)
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
break}u=s.gS(s)
x=4
return A.b(B.fOW(r.a.c,u,null),$async$$0)
case 4:t=e
if(t!=null)C.d.K(q.a,t)
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
return A.b(B.FY(new B.dN8(s),u.b,s.a.c),$async$$0)
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
return A.b(s.tp(),$async$$0)
case 9:s.hW("Received "+q.gM(t)+" video(s) to this phone.")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN8.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dN5(x,d,e))},
$S:128}
B.dN5.prototype={
$0(){return this.a.f="Receiving video "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dN9.prototype={
$1(d){return new B.abg(this.a.a,null)},
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
x=B.HW(o)!=null?3:4
break
case 3:x=5
return A.b(B.a62(o),$async$$0)
case 5:t=e
x=t!=null&&t!==C.a.i(u.a.a.c).toLowerCase()?6:7
break
case 6:x=8
return A.b(u.a.aZt(B.HW(o)),$async$$0)
case 8:x=1
break
case 7:case 4:s=u.a
x=9
return A.b(B.ao5(new B.dN6(s),o,s.a.c),$async$$0)
case 9:r=e
if(r==null||J.cl(r)){if(B.fOV(o))q="Invalid code or file no longer shared. Ask sender to re-upload the file."
else q=C.a.a0(o,"N2|")||C.a.t(o,"http://")?"File did not arrive. Same Wi\u2011Fi or hotspot, keep sender screen open, then try again.":"Could not restore files. Ask sender to upload again, then scan or paste the new QR code."
s.hW(q)
x=1
break}x=10
return A.b(s.tp(),$async$$0)
case 10:o=J.cE(r)
p=o.eK(r,new B.dN7()).gM(0)
s.hW(p>0?"Received "+p+" video(s).":"Restored "+o.gM(r)+" file(s).")
case 1:return A.h(v,w)}})
return A.i($async$$0,w)},
$S:1}
B.dN6.prototype={
$2(d,e){var x=this.a
if(x.c!=null)x.m(new B.dN4(x,d,e))},
$S:128}
B.dN4.prototype={
$0(){return this.a.f="Receiving "+this.b+" of "+this.c+"\u2026"},
$S:0}
B.dN7.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.ms)},
$S:z+1}
B.dNn.prototype={
$1(d){return new B.Yo(this.a.a.c,null)},
$S:z+23}
B.dNm.prototype={
$0(){var x=0,w=A.j(y.H),v=this,u,t
var $async$$0=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:u=v.a
t=u
x=2
return A.b(B.aYo(u.a.c,v.b),$async$$0)
case 2:t.hW(e)
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.dNH.prototype={
$1(d){var x=null,w=this.b,v=w.a,u=v[2],t=C.aE.j(0.35)
return A.c_(A.bn(!0,new A.C(C.AO,A.v(A.a([A.av(A.p(x,x,C.f,x,x,new A.o(v[4].j(0.35),x,x,A.m(99),x,x,C.n),x,4,x,C.kH,x,x,x,40),x,x,x),A.d("Doc Share options",x,x,x,x,x,x,A.l(x,x,v[3],x,x,x,x,x,x,x,x,16,x,x,C.u,x,x,!0,x,x,x,x,x,x,x,x),x,x,x),C.aA,B.Ym(!0,w,!1,C.n7,"My Code",new B.dNE(d),"Your personal code & QR \u2014 others send docs to you"),B.Ym(!1,w,!1,D.a_9,"Send to their Code",new B.dNF(this.a,d),"Enter someone else's 5-digit code + letter"),B.Ym(!1,w,!1,S.y7,"Import backup",new B.dNG(d),".ngmydoc file from another device")],y.p),C.aj,x,C.e,C.Q,0,C.p),x),!0,!1,C.af,!0,!0),new A.o(u,x,new A.bP(new A.aA(t,1,C.q,-1),C.Y,C.Y,C.Y),C.kz,x,x,C.n),C.bd)},
$S:688}
B.dNE.prototype={
$0(){A.a6(this.a,!1).O("my_code")
return null},
$S:0}
B.dNF.prototype={
$0(){A.a6(this.b,!1).O(null)
this.a.bAe()},
$S:0}
B.dNG.prototype={
$0(){A.a6(this.a,!1).O("import")
return null},
$S:0}
B.dNU.prototype={
$4(d,e,f,g){var x=null
return A.A(A.a([A.I4(D.Pi,x,C.a_3,g,e,32),C.av,A.d("Doc Share",x,x,x,x,x,x,A.l(x,x,this.a.a[3],x,x,x,x,x,x,x,x,x,x,x,C.u,x,x,!0,x,x,x,x,x,A.a([new A.cP(C.d.gL(D.Pi).j(0.4+e*0.2),C.J,10)],y.u),x,x),x,x,x)],y.p),C.m,x,C.e,C.j,0,x,x)},
$C:"$4",
$R:4,
$S:651}
B.dNS.prototype={
$0(){A.a6(this.a,!1).O(null)
return null},
$S:0}
B.dNT.prototype={
$0(){this.a.ah5()
return null},
$S:0}
B.dNV.prototype={
$3(d,e,f){return A.dc(A.dW(f,new A.u(0,(1-e)*10)),e)},
$S:102}
B.dNW.prototype={
$2(d,e){var x=this.a,w=x.d[e],v=x.r.t(0,w.a)
return new B.abi(e,w,v,this.b,x.e,x.c41(w),new B.dNO(x,w),new B.dNP(x,v,w),new B.dNQ(x,w),new B.dNR(x,w),null)},
$S:z+24}
B.dNO.prototype={
$0(){this.a.ael(this.b)
return null},
$S:0}
B.dNP.prototype={
$0(){var x=this.a
return x.m(new B.dNN(x,this.b,this.c))},
$S:0}
B.dNN.prototype={
$0(){var x=this.a.r,w=this.c.a
if(this.b)x.W(0,w)
else x.K(0,w)},
$S:0}
B.dNQ.prototype={
$0(){this.a.Nm(this.b)
return null},
$S:0}
B.dNR.prototype={
$0(){this.a.agT(this.b)
return null},
$S:0}
B.d09.prototype={
$3(d,e,f){return A.dc(A.dW(f,new A.u(0,(1-e)*18)),e)},
$S:102}
B.d0a.prototype={
$3(d,e,f){return A.eb(C.A,f,e,null,null)},
$S:140}
B.d0x.prototype={
$3(d,e,f){return A.dc(A.dW(f,new A.u(0,(1-e)*14)),e)},
$S:102}
B.d0w.prototype={
$1(d){return this.a.y.$0()},
$S:81}
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
if(w!=null&&!C.aG.gam(w))return A.fL(w,C.A,x,new B.d0p(this.a),C.fU,C.du,!0,x,!1,x,x)
$.aU.x1$.push(new B.d0q(this.a))
return C.bH},
$S:141}
B.d0p.prototype={
$3(d,e,f){$.aU.x1$.push(new B.d0n(this.a))
return C.bH},
$S:182}
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
$S:182}
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
$1(d){return this.a.d.Mn(0,A.dC(0,0,0,C.k.V(d),0,0))},
$S:6}
B.d0K.prototype={
$0(){var x=this.a.a
return B.re(x.c,x.d)},
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
else x.pC(0)},
$S:0}
B.d0G.prototype={
$1(d){return this.a.PZ(this.b)},
$S:13}
B.d0H.prototype={
$1(d){return this.a.PY(this.b)},
$S:13}
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
$1(d){return D.fLm},
$S:z+25}
B.d0F.prototype={
$2(d,e){if(d)B.Uc()},
$S:119}
B.d0B.prototype={
$0(){return this.a.a8O(this.b)},
$S:0}
B.d0C.prototype={
$0(){return this.a.a8L(this.b)},
$S:0}
B.d0D.prototype={
$0(){return this.a.acV(this.b)},
$S:0}
B.d0E.prototype={
$0(){return this.a.a0I(this.b)},
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
return A.b(u.d.pG(),$async$$0)
case 2:u.m(new B.d0I(u))
return A.h(null,w)}})
return A.i($async$$0,w)},
$S:1}
B.d0I.prototype={
$0(){var x=this.a
return x.f=!x.f},
$S:0}
B.c6s.prototype={
$1(d){return C.a.a0(d.c,"video/")||d.mo(D.ms)},
$S:z+1}
B.c6t.prototype={
$1(d){var x=d.b,w=A.af("[^\\w\\-.]+",!0,!1,!1,!1),v=C.a.i(A.aK(x,w,"_"))
w=v.length===0?"file.bin":v
return A.F(["id",d.a,"name",x,"mime",d.c,"sizeBytes",d.d,"storagePath","doc-share-relay/"+this.a+"/"+w],y.N,y.C)},
$S:z+26}
B.c6r.prototype={
$2(d,e){return this.bhF(d,e)},
bhF(d,e){var x=0,w=A.j(y.H),v,u=this,t,s,r
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:if(e<=0){x=1
break}r=u.b.length
t=u.a/r
s=d/e/r
x=3
return A.b(B.Ud(u.c,A.F(["uploadProgress",C.k.D(t+s,0,0.99)],y.N,y.z)),$async$$2)
case 3:case 1:return A.h(v,w)}})
return A.i($async$$2,w)},
$S:1742}
B.flj.prototype={
$1(d){if(d===D.a56&&(this.a.a.a&30)===0)this.a.fN(0)},
$S:z+27}
B.flk.prototype={
$0(){},
$S:11}
B.flR.prototype={
bje(d,e){var x=0,w=A.j(y.H),v=this,u,t,s,r,q
var $async$$2=A.e(function(f,g){if(f===1)return A.f(g,w)
for(;;)switch(x){case 0:r=v.a
q=r.c
x=q!=null?2:3
break
case 2:u=r.a
t=v.c
x=4
return A.b(B.fae(t,r.b,u,q,v.b),$async$$2)
case 4:s=g
r.c=null
t.a9(0)
if(s!=null){v.d.push(s)
v.e.$2(++r.d,v.f)}case 3:r.a=d
r.b=e
r.c=B.h3Q(v.b,null,e,d,"NGMY Transfer")
return A.h(null,w)}})
return A.i($async$$2,w)},
$2(d,e){return this.bje(d,e)},
$S:537}
B.flQ.prototype={
$1(d){var x=this
d.b=new B.flP(x.a,x.b,x.c,x.d,x.e,x.f,x.r,x.w)},
$S:z+28}
B.flP.prototype={
$1(d){return this.bjd(d)},
bjd(d){var x=0,w=A.j(y.b),v,u=2,t=[],s=this,r,q,p,o,n,m,l,k,j
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
return A.b(B.aYp(n,m),$async$$1)
case 12:x=10
break
case 11:m===$&&A.c()
s.b.K(0,m)
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
return A.b(B.fae(l,n.b,m,n.c,s.d),$async$$1)
case 19:p=f
n.c=null
l.a9(0)
if(p!=null){s.e.push(p)
s.f.$2(++n.d,s.r)}n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
case 18:case 14:u=2
x=6
break
case 4:u=3
j=t.pop()
o=A.aa(j)
$.am.$1("[doc share webrtc recv] "+A.t(o))
n=s.a
m=n.c
x=m!=null?20:21
break
case 20:x=22
return A.b(B.a6b(m),$async$$1)
case 22:n.c=null
case 21:n=s.w
if((n.a.a&30)===0)n.d4(0,s.e)
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$$1,w)},
$S:z+29};(function installTearOffs(){var x=a._instance_0u,w=a._instance_1u
var v
x(v=B.axX.prototype,"gcaU","PA",0)
x(v,"gcbL","IG",0)
x(v,"gcbg","xz",0)
x(v=B.aBS.prototype,"gc3W","acT",0)
x(v,"gc3X","YQ",0)
x(v,"gcqe","agA",0)
x(v=B.aBV.prototype,"gc3Y","YR",0)
x(v,"gcqf","a11",0)
x(B.aBT.prototype,"gc3Z","acU",0)
x(B.axW.prototype,"gc43","c44",4)
x(v=B.aBU.prototype,"gcbh","ZY",0)
x(v,"gcoR","coS",4)
x(v,"gb_B","ax8",0)
x(v,"gcrI","ah_",0)
x(v,"gbM4","WO",0)
x(v,"gc42","DP",0)
x(B.axY.prototype,"gb3l","a10",0)
x(B.axV.prototype,"gc45","YS",0)
x(v=B.ay0.prototype,"gaZh","c9z",4)
x(v,"gc4_","acX",0)
x(v=B.axZ.prototype,"gcnS","a0N",0)
x(v,"gaXt","acW",0)
w(B.axU.prototype,"gavK","avL",8)
x(v=B.ay_.prototype,"gcdZ","aeO",0)
x(v,"gbLD","a9z",0)
w(v,"gavK","avL",8)})();(function inheritance(){var x=a.inheritMany,w=a.inherit
x(A.aC,[B.chp,B.a8w,B.aso,B.aAv,B.aDH,B.jh,B.aaZ,B.btB,B.Ez,B.Wp])
w(B.chq,B.chp)
w(B.b2v,B.a8w)
x(A.hT,[B.chl,B.chm,B.chn,B.chk,B.cho,B.chr,B.chs,B.cht,B.chu,B.chv,B.chw,B.chx,B.chy,B.ffT,B.fC3,B.fC5,B.fC4,B.fCi,B.fCj,B.fhw,B.d0e,B.d0g,B.d0f,B.d0j,B.fjv,B.fjZ,B.c5X,B.c63,B.c64,B.c6_,B.c5Y,B.c60,B.c61,B.fCg,B.fCh,B.dO0,B.dO9,B.dO7,B.dO8,B.fd5,B.fhI,B.fhJ,B.c6l,B.fhL,B.flH,B.fga,B.fgb,B.c6q,B.fGW,B.d0d,B.d0b,B.dNX,B.dMT,B.dMZ,B.dNh,B.dMY,B.dNo,B.dNI,B.dNJ,B.dNK,B.dNf,B.dNx,B.dNw,B.dNy,B.dNz,B.dNA,B.dNC,B.dND,B.dNv,B.dN0,B.dN1,B.dMX,B.dNi,B.dN9,B.dN7,B.dNn,B.dNH,B.dNU,B.dNV,B.d09,B.d0a,B.d0x,B.d0w,B.d0r,B.d0p,B.d0n,B.d0q,B.d0s,B.d0o,B.d06,B.d07,B.d08,B.d02,B.d0G,B.d0H,B.d0A,B.c6s,B.c6t,B.flj,B.flQ,B.flP])
w(B.b2w,B.aso)
x(A.j3,[B.fC2,B.d0h,B.d0i,B.fjt,B.fju,B.fjY,B.dMQ,B.dNZ,B.dO_,B.dNY,B.dO1,B.dO2,B.dO3,B.dO4,B.dO5,B.dO6,B.dMR,B.dMS,B.fhK,B.d0c,B.dNk,B.dNl,B.dMU,B.dMV,B.dN_,B.dNL,B.dNM,B.dNe,B.dNp,B.dN3,B.dNg,B.dNB,B.dNq,B.dNr,B.dNs,B.dNt,B.dNu,B.dN2,B.dMW,B.dNj,B.dNc,B.dN5,B.dNa,B.dNb,B.dNd,B.dN4,B.dNm,B.dNE,B.dNF,B.dNG,B.dNS,B.dNT,B.dNO,B.dNP,B.dNN,B.dNQ,B.dNR,B.d0t,B.d0u,B.d0v,B.d0k,B.d0m,B.d0l,B.d05,B.d04,B.d03,B.d0_,B.d00,B.d01,B.d0K,B.d0L,B.d0M,B.d0N,B.d0O,B.d0P,B.d0R,B.d0Q,B.d0y,B.d0z,B.d0B,B.d0C,B.d0D,B.d0E,B.d_Z,B.d0J,B.d0I,B.flk])
x(A.m5,[B.abh,B.MP,B.a8x,B.NR,B.Wo,B.NQ,B.EA])
x(A.ag,[B.Yk,B.U1,B.U5,B.U2,B.Yj,B.U3,B.Yl,B.Yi,B.OZ,B.Yn,B.Yh,B.Yo])
x(A.ah,[B.axX,B.aBS,B.aBV,B.aBT,B.axW,B.aBU,B.axY,B.axV,B.ay0,B.axZ,B.axU,B.ay_])
x(A.au,[B.abK,B.axT,B.bbQ,B.abi,B.abg,B.bbR])
x(A.kf,[B.c62,B.c5Z,B.c66,B.c67,B.fCU,B.dN8,B.dN6,B.dNW,B.d0F,B.c6r,B.flR])
x(A.iO,[B.bhb,B.btf])})()
A.jT(b.typeUniverse,JSON.parse('{"b2v":{"a8w":[]},"b2w":{"aso":[]},"Yk":{"ag":[],"r":[]},"axX":{"ah":["Yk"]},"abK":{"au":[],"r":[]},"U1":{"ag":[],"r":[]},"U5":{"ag":[],"r":[]},"aBS":{"ah":["U1"]},"aBV":{"ah":["U5"]},"bhb":{"iO":[]},"U2":{"ag":[],"r":[]},"aBT":{"ah":["U2"]},"Yj":{"ag":[],"r":[]},"U3":{"ag":[],"r":[]},"abi":{"au":[],"r":[]},"Yl":{"ag":[],"r":[]},"Yi":{"ag":[],"r":[]},"OZ":{"ag":[],"r":[]},"Yn":{"ag":[],"r":[]},"abg":{"au":[],"r":[]},"Yh":{"ag":[],"r":[]},"Yo":{"ag":[],"r":[]},"axW":{"ah":["Yj"]},"btf":{"iO":[]},"aBU":{"ah":["U3"]},"axT":{"au":[],"r":[]},"bbQ":{"au":[],"r":[]},"axY":{"ah":["Yl"]},"axV":{"ah":["Yi"]},"ay0":{"ah":["OZ"]},"axZ":{"ah":["Yn"]},"axU":{"ah":["Yh"]},"ay_":{"ah":["Yo"]},"bbR":{"au":[],"r":[]}}'))
var y=(function rtii(){var x=A.ax
return{J:x("tX"),k:x("Lg()"),m:x("bm<n,n>"),F:x("qR"),g:x("ay<jh?>"),x:x("ay<~>"),V:x("O<ac>"),O:x("O<w>"),W:x("O<bh>"),Y:x("O<a4<n,R>>"),t:x("O<a4<n,@>>"),r:x("O<jh>"),w:x("O<+file,name(lt,n)>"),u:x("O<cP>"),s:x("O<n>"),E:x("O<iO>"),a:x("O<dD>"),p:x("O<r>"),Z:x("O<H>"),G:x("bh"),A:x("cs<ah<ag>>"),n:x("aj<jh>"),j:x("aj<@>"),I:x("aj<H>"),M:x("bv<n,n>"),P:x("a4<n,@>"),f:x("a4<@,@>"),o:x("iz"),e:x("i8n"),af:x("DP"),U:x("jh"),b:x("cq"),C:x("aC"),aK:x("vQ"),ab:x("Ez"),br:x("aso"),v:x("Wp"),N:x("n"),X:x("bo<N>"),Q:x("lE"),D:x("dD"),aw:x("cx<n>"),cd:x("a2<a4<n,@>>"),c7:x("r"),ch:x("bW<aj<jh>>"),aW:x("bW<dD?>"),aY:x("bW<~>"),cx:x("abh"),b1:x("bg<aj<jh>>"),cf:x("bg<dD?>"),d4:x("bg<~>"),c4:x("aAv"),bG:x("aDH"),q:x("mX"),B:x("pe<Ez>"),c6:x("pe<a8x>"),y:x("R"),i:x("N"),z:x("@"),S:x("H"),aQ:x("bh?"),_:x("aj<jh>?"),aL:x("aj<@>?"),h:x("a4<n,@>?"),l:x("jh?"),R:x("aC?"),c:x("Wp?"),d:x("+answerQr,transfer(n,ay<aj<jh>>)?"),cw:x("+qrPayload,token,usesRemaining(n,n,H)?"),L:x("+fileCount,mode,qrPayload(H,MP,n)?"),aX:x("+fileCount,qrPayload,token(H,n,n)?"),T:x("n?"),K:x("dD?"),cm:x("aaZ?"),bk:x("aAv?"),ag:x("aDH?"),dd:x("N?"),H:x("~")}})();(function constants(){var x=a.makeConstList
D.aX5=new A.aA(C.aE,2,C.q,-1)
D.bSN=new A.a8(C.a3,C.a7,C.x,C.a12,null,null)
D.aYL=new A.o(null,null,null,C.m1,null,D.bSN,C.n)
D.b_b=new A.o(null,null,null,C.m1,null,E.Gh,C.n)
D.ab4=new A.w(1,0.9529411764705882,0.9686274509803922,0.984313725490196,C.t)
D.aci=new A.w(1,0.1411764705882353,0.18823529411764706,0.2549019607843137,C.t)
D.adc=new A.w(1,0.03137254901960784,0.06274509803921569,0.09411764705882353,C.t)
D.aeH=new A.w(1,0.07058823529411765,0.10196078431372549,0.14901960784313725,C.t)
D.f9G=new A.x("Your team portal",null,C.ds,null,null,null,null,null,null,null,null,null)
D.fnA=new A.x("Share the access code and member password with your team. They only sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.d0d=x([D.f9G,C.an,D.fnA],y.p)
D.bkg=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.d0d,null)
D.frM=new A.x("Create your organization",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fdP=new A.x("Set an access code and member password. Share them with your team \u2014 they sign in once.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.df_=x([D.frM,C.an,D.fdP],y.p)
D.bkp=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.df_,null)
D.fo8=new A.x("Team Member sign-in",null,C.hq,null,null,null,null,null,null,null,null,null)
D.fhz=new A.x("Enter the access code and password from your organization.",null,G.IF,null,null,null,null,null,null,null,null,null)
D.dcZ=x([D.fo8,C.an,D.fhz],y.p)
D.bkz=new A.fq(C.ah,C.e,C.j,C.F,null,C.p,null,0,D.dcZ,null)
D.bqb=new A.Q(16,10,16,28)
D.bqj=new A.Q(16,14,16,4)
D.brw=new A.Q(20,0,20,16)
D.bs1=new A.Q(20,8,20,16)
D.aho=new A.Q(24,22,24,20)
D.a_9=new A.a_(63394,"MaterialIcons",!1)
D.akn=new A.a_(63515,"MaterialIcons",!1)
D.bDA=new A.a_(983813,"MaterialIcons",!1)
D.bAS=new A.a_(62867,"MaterialIcons",!1)
D.bEz=new A.ae(D.bAS,44,C.c,null,null,null)
D.bFD=new A.ae(C.oA,null,C.ad,null,null,null)
D.bH0=new A.ae(C.iU,18,null,null,null,null)
D.bIH=new A.ae(D.a_9,26,C.c,null,null,null)
D.bJc=new A.ae(C.Bq,null,null,null,null,null)
D.bJL=new A.ae(C.y9,null,null,null,null,null)
D.bKT=new A.ae(W.N7,null,null,null,null,null)
D.bLc=new A.ae(C.hk,16,null,null,null,null)
D.bOD=new A.ae(C.r2,16,null,null,null,null)
D.bEQ=new A.ae(C.n7,null,null,null,null,null)
D.bPt=new A.e2(null,null,null,"Access code",null,null,null,"Team members enter this code to sign in",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bEQ,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bKi=new A.ae(C.Fy,null,null,null,null,null)
D.bPy=new A.e2(null,null,null,"Organization name",null,null,null,null,null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bKi,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.bFa=new A.ae(H.G4,null,null,null,null,null)
D.bPJ=new A.e2(null,null,null,"New member password (optional)",null,null,null,"Leave blank to keep current password",null,null,null,null,null,null,null,null,!0,!0,!1,null,null,null,null,null,null,null,null,null,D.bFa,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,null,!0,null,null,null,null)
D.cCp=x([C.f7,C.aZ,C.aE],y.O)
D.bUF=new A.a8(C.ax,C.aC,C.x,D.cCp,null,null)
D.cBU=x(["mp3","wav","m4a","aac","ogg","flac","opus","wma","weba"],y.s)
D.Pi=x([C.f7,C.aE],y.O)
D.Px=x(["jpg","jpeg","jfif","png","gif","webp","heic","heif","bmp","tif","tiff"],y.s)
D.ms=x(["mp4","mov","m4v","webm","avi","mkv","3gp"],y.s)
D.d7X=x([C.pl,C.aE],y.O)
D.dZt={iceServers:0}
D.aFc={urls:0}
D.diA=new A.bm(D.aFc,["stun:stun.l.google.com:19302"],y.m)
D.diz=new A.bm(D.aFc,["stun:stun1.l.google.com:19302"],y.m)
D.cS0=x([D.diA,D.diz],A.ax("O<a4<n,n>>"))
D.dhV=new A.bm(D.dZt,[D.cS0],A.ax("bm<n,@>"))
D.Hk=new B.MP(0,"lanDirect")
D.QQ=new B.MP(1,"cloudStash")
D.dtt=new B.MP(2,"inlineInstant")
D.QR=new B.MP(3,"webrtcLink")
D.yR=new B.MP(4,"videoCloud")
D.fnz=new A.x("Receive file",null,C.no,null,null,null,null,null,null,null,null,null)
D.cs2=x([E.am6,C.ab,D.fnz],y.p)
D.eGe=new A.cm(C.aO,C.bb,C.j,C.m,null,C.p,null,0,D.cs2,null)
D.e45=new A.C(C.cg,D.eGe,null)
D.f0W=new A.G(!0,C.c,null,null,null,null,null,C.P,null,null,null,null,null,null,null,null,null,null,null,null,null,null,V.a1I,null,null,null)
D.fad=new A.x("Fill the frame \xb7 bright screen \xb7 Paste link or tap # to type code",null,D.f0W,null,C.L,null,null,null,null,null,null,null)
D.e3o=new A.C(C.AU,D.fad,null)
D.b3q=new A.cr(C.A,null,null,D.e3o,null)
D.e9N=new A.cL(0,null,0,28,null,null,D.b3q,null)
D.ea5=new B.a8x(0,"RTCDataChannelConnecting")
D.aKx=new B.a8x(1,"RTCDataChannelOpen")
D.aKy=new B.a8x(3,"RTCDataChannelClosed")
D.ea6=new B.EA(0,"RTCIceConnectionStateNew")
D.ea7=new B.EA(1,"RTCIceConnectionStateChecking")
D.ea8=new B.EA(2,"RTCIceConnectionStateCompleted")
D.ea9=new B.EA(3,"RTCIceConnectionStateConnected")
D.eaa=new B.EA(4,"RTCIceConnectionStateCount")
D.eab=new B.EA(5,"RTCIceConnectionStateFailed")
D.eac=new B.EA(6,"RTCIceConnectionStateDisconnected")
D.aKz=new B.EA(7,"RTCIceConnectionStateClosed")
D.aKA=new B.Wo(0,"RTCIceGatheringStateNew")
D.ead=new B.Wo(1,"RTCIceGatheringStateGathering")
D.a56=new B.Wo(2,"RTCIceGatheringStateComplete")
D.a57=new B.NQ(0,"RTCPeerConnectionStateClosed")
D.aKB=new B.NQ(1,"RTCPeerConnectionStateFailed")
D.aKC=new B.NQ(2,"RTCPeerConnectionStateDisconnected")
D.aKD=new B.NQ(3,"RTCPeerConnectionStateNew")
D.aKE=new B.NQ(4,"RTCPeerConnectionStateConnecting")
D.aKF=new B.NQ(5,"RTCPeerConnectionStateConnected")
D.eae=new B.NR(0,"RTCSignalingStateStable")
D.eaf=new B.NR(1,"RTCSignalingStateHaveLocalOffer")
D.eag=new B.NR(2,"RTCSignalingStateHaveRemoteOffer")
D.eah=new B.NR(3,"RTCSignalingStateHaveLocalPrAnswer")
D.eai=new B.NR(4,"RTCSignalingStateHaveRemotePrAnswer")
D.aKG=new B.NR(5,"RTCSignalingStateClosed")
D.eKc=new A.at(160,48)
D.b4D=new A.fi(2,null,null,null,null,C.aE,null,null,null,null)
D.eLH=new A.a7(16,16,D.b4D,null)
D.fde=new A.x("Could not create portal. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eN7=new A.b1(D.fde,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fkv=new A.x("Access code or password incorrect, or organization subscription expired.",null,null,null,null,null,null,null,null,null,null,null)
D.eNa=new A.b1(D.fkv,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsO=new A.x("Enter a valid 5\u20136 character code.",null,null,null,null,null,null,null,null,null,null,null)
D.eNh=new A.b1(D.fsO,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fcS=new A.x("Could not read this image to share.",null,null,null,null,null,null,null,null,null,null,null)
D.eNH=new A.b1(D.fcS,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.foi=new A.x("Connected \u2014 sending files now\u2026",null,null,null,null,null,null,null,null,null,null,null)
D.aNg=new A.b1(D.foi,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fpH=new A.x("Share code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eO9=new A.b1(D.fpH,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fub=new A.x("Enter a valid access code and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eOo=new A.b1(D.fub,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fsf=new A.x("Fill in organization name, access code, and password.",null,null,null,null,null,null,null,null,null,null,null)
D.eOt=new A.b1(D.fsf,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ftp=new A.x("Organization settings saved.",null,null,null,null,null,null,null,null,null,null,null)
D.ePe=new A.b1(D.ftp,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fbz=new A.x("Link copied",null,null,null,null,null,null,null,null,null,null,null)
D.ePL=new A.b1(D.fbz,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fmf=new A.x("Free uploads used up. Join an organization or subscribe as an owner.",null,null,null,null,null,null,null,null,null,null,null)
D.eQ5=new A.b1(D.fmf,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.ffm=new A.x("Could not save. Access code may already be in use.",null,null,null,null,null,null,null,null,null,null,null)
D.eQB=new A.b1(D.ffm,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fuh=new A.x("Copy the share code or Wi\u2011Fi link from sender first.",null,null,null,null,null,null,null,null,null,null,null)
D.eQF=new A.b1(D.fuh,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fbP=new A.x("Use the phone app camera to scan the answer QR.",null,null,null,null,null,null,null,null,null,null,null)
D.eQL=new A.b1(D.fbP,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.fay=new A.x("My Code copied",null,null,null,null,null,null,null,null,null,null,null)
D.eR_=new A.b1(D.fay,null,null,null,null,null,null,null,null,null,null,null,null,C.U,!1,null,null,null,C.r,null)
D.f7x=new A.x("NGMY DOC SHARE",null,C.aOx,null,null,null,null,null,null,null,null,null)
D.f8P=new A.x("Show this to sender",null,C.kv,null,null,null,null,null,null,null,null,null)
D.f9N=new A.x("Share / save",null,null,null,null,null,null,null,null,null,null,null)
D.fec=new A.x("Organization settings",null,C.cx,null,null,null,null,null,null,null,null,null)
D.fey=new A.x("Sign in",null,C.ce,null,null,null,null,null,null,null,null,null)
D.ffw=new A.x("Copy link for Paste",null,null,null,null,null,null,null,null,null,null,null)
D.fg_=new A.x("Scan answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fiM=new A.x("Copy 6-digit code",null,null,null,null,null,null,null,null,null,null,null)
D.flt=new A.x("Send to their Doc Share",null,C.nm,null,null,null,null,null,null,null,null,null)
D.flM=new A.x("Scan receiver answer QR",null,null,null,null,null,null,null,null,null,null,null)
D.fm4=new A.x("Share code & instructions",null,null,null,null,null,null,null,null,null,null,null)
D.fmA=new A.x("Scan Doc Share QR",null,null,null,null,null,null,null,null,null,null,null)
D.fmF=new A.x("Create portal",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fn2=new A.x("Share via AirDrop / Bluetooth / Nearby",null,C.eV,null,null,null,null,null,null,null,null,null)
D.fq8=new A.x("Share files & videos\nwith a scan.",null,C.aOy,null,null,null,null,null,null,null,null,null)
D.fqr=new A.x("Add files",null,C.ce,null,null,null,null,null,null,null,null,null)
D.fLm=new B.Yh(null)
D.a86=new B.abh(0,"docShare")
D.a87=new B.abh(1,"gate")
D.TL=new B.abh(2,"gateNoIndividual")})();(function staticFields(){$.aMj=null
$.f81=function(){var x=y.N
return A.T(x,x)}()
$.FK=A.T(y.N,y.D)
$.aff=A.T(y.N,A.ax("lt"))
$.Qe=A.T(y.N,y.D)
$.f8z=A.T(y.N,A.ax("aaZ"))
$.c6k=A.T(y.S,A.ax("btB"))
$.h3P=1
$.hR7=null
$.hR6=null
$.hIE=null
$.fU_=null})();(function lazyInitializers(){var x=a.lazyFinal
x($,"i8S","hkU",()=>new B.chq())
x($,"i6N","fXB",()=>C.a.t(A.bu(A.bu(A.bu(A.Gk(),"window"),"navigator"),"userAgent"),"Firefox"))})()};
(a=>{a["HdYXVo8NPHiqe+jq0L1VqwA7SJQ="]=a.current})($__dart_deferred_initializers__);