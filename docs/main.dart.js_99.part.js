((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bF_(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ikN(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvF.h(0,v)
if(x!=null)return x
w=B.bF_(v)
if(w!=null){if($.fvF.a>64)$.fvF.a8(0)
$.fvF.n(0,v,w)}return w},
aRz(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGy(i,j,f,e,g,h,v),C.aq)
x=B.ikN(i)
if(x!=null)return A.by(u,A.tL(C.A,v,C.hh,e,!0,f,x,!1,v,j),C.aq)
w=C.d0.j(0.15)
return A.r(v,A.X(g,h==null?C.d0:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGy:function aGy(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnh:function bnh(){this.c=this.a=this.d=null},
eUB:function eUB(d,e){this.a=d
this.b=e},
hdF(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GQ(x,"ngmy_worksheet_thumbs_v1",new B.fwq(),1)},
i5n(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cd(d))
if(y.i.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cd(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
aSb(d){return B.ipU(d)},
ipU(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSb=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPu
x=7
return A.b(o==null?$.aPu=B.hdF():o,$async$aSb)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iA.xL(J.mj(r,"thumbs"),m),$async$aSb)
case 8:q=f
x=9
return A.b(J.ow(r),$async$aSb)
case 9:m=B.i5n(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ab(l)
$.am.$1("[worksheet-thumb idb get] "+A.w(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aSb,w)},
fwq:function fwq(){},
hEO(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cop(d){var x=0,w=A.j(y.n),v,u
var $async$cop=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEO(d)
if(u==null){v=null
x=1
break}v=B.coo(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cop,w)},
coo(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coo=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.com.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSb(s),$async$coo)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.com.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coo,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGy.prototype={
S(){return new B.bnh()}}
B.bnh.prototype={
Y(){this.a4()
this.a0g()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0g()},
a0g(){var x=0,w=A.j(y.v),v=this,u
var $async$a0g=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cop(v.a.c),$async$a0g)
case 2:u=e
if(v.c!=null)v.m(new B.eUB(v,u))
return A.h(null,w)}})
return A.i($async$a0g,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hh,x.f,!0,v,new A.qb(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.r(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwq.prototype={
$1(d){var x=y.h.a(new A.qs([],[]).nZ(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"thumbs")
if(!w)C.we.Gh(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aGy,A.af)
x(B.bnh,A.ah)
x(B.eUB,A.iJ)
x(B.fwq,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGy":{"af":[],"v":[]},"bnh":{"ah":["aGy"]}}'))
var y={i:A.at("uN"),h:A.at("ru"),w:A.at("ai<F>"),A:A.at("m5"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fvF=A.T(A.at("m"),A.at("mq<aE>"))
$.com=A.T(A.at("m"),y.o)
$.aPu=null})()};
(a=>{a["aX69YMQj0FpYh2KY0XzIwB8scCk="]=a.current})($__dart_deferred_initializers__);