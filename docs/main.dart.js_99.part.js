((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bF_(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
ikJ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvF.h(0,v)
if(x!=null)return x
w=B.bF_(v)
if(w!=null){if($.fvF.a>64)$.fvF.a8(0)
$.fvF.n(0,v,w)}return w},
aRA(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGz(i,j,f,e,g,h,v),C.aq)
x=B.ikJ(i)
if(x!=null)return A.by(u,A.tL(C.A,v,C.hg,e,!0,f,x,!1,v,j),C.aq)
w=C.d0.j(0.15)
return A.q(v,A.X(g,h==null?C.d0:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGz:function aGz(d,e,f,g,h,i,j){var _=this
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
hdB(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wT.GQ(x,"ngmy_worksheet_thumbs_v1",new B.fwq(),1)},
i5j(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cd(d))
if(y.i.b(d))return new Uint8Array(A.cd(J.eD(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cd(A.wT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cd(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
aSc(d){return B.ipQ(d)},
ipQ(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSc=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPv
x=7
return A.b(o==null?$.aPv=B.hdB():o,$async$aSc)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iA.xL(J.mi(r,"thumbs"),m),$async$aSc)
case 8:q=f
x=9
return A.b(J.ow(r),$async$aSc)
case 9:m=B.i5j(q)
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
return A.i($async$aSc,w)},
fwq:function fwq(){},
hEK(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cop(d){var x=0,w=A.j(y.n),v,u
var $async$cop=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEK(d)
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
return A.b(B.aSc(s),$async$coo)
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
B.aGz.prototype={
S(){return new B.bnh()}}
B.bnh.prototype={
Y(){this.a4()
this.a0f()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0f()},
a0f(){var x=0,w=A.j(y.v),v=this,u
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cop(v.a.c),$async$a0f)
case 2:u=e
if(v.c!=null)v.m(new B.eUB(v,u))
return A.h(null,w)}})
return A.i($async$a0f,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hg,x.f,!0,v,new A.qb(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUB.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwq.prototype={
$1(d){var x=y.h.a(new A.qs([],[]).nY(d.target.result,!1)),w=C.wh.q(x.objectStoreNames,"thumbs")
if(!w)C.we.Gh(x,"thumbs")},
$S:162};(function inheritance(){var x=a.inherit
x(B.aGz,A.af)
x(B.bnh,A.ah)
x(B.eUB,A.iJ)
x(B.fwq,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGz":{"af":[],"v":[]},"bnh":{"ah":["aGz"]}}'))
var y={i:A.at("uN"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m4"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fvF=A.T(A.at("m"),A.at("mp<aE>"))
$.com=A.T(A.at("m"),y.o)
$.aPv=null})()};
(a=>{a["NMJg6283mgNMi6OiGAo45Flnmz8="]=a.current})($__dart_deferred_initializers__);