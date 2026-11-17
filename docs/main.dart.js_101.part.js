((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFm(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uF(d)
x.toString
return x}catch(w){return v}return v},
im2(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwL.h(0,v)
if(x!=null)return x
w=B.bFm(v)
if(w!=null){if($.fwL.a>64)$.fwL.a8(0)
$.fwL.n(0,v,w)}return w},
aRP(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aGQ(i,j,f,e,g,h,v),C.aq)
x=B.im2(i)
if(x!=null)return A.bu(u,A.tL(C.A,v,C.hm,e,!0,f,x,!1,v,j),C.aq)
w=C.cB.j(0.15)
return A.p(v,A.W(g,h==null?C.cB:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGQ:function aGQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnA:function bnA(){this.c=this.a=this.d=null},
eVK:function eVK(d,e){this.a=d
this.b=e},
hf2(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x2.GU(x,"ngmy_worksheet_thumbs_v1",new B.fxx(),1)},
i7h(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aO(d)
return x}catch(w){return v}return v},
aSr(d){return B.ira(d)},
ira(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSr=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPM
x=7
return A.b(o==null?$.aPM=B.hf2():o,$async$aSr)
case 7:s=f
r=J.ml(s,"thumbs","readonly")
x=8
return A.b(C.iD.xO(J.mk(r,"thumbs"),m),$async$aSr)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSr)
case 9:m=B.i7h(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
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
return A.i($async$aSr,w)},
fxx:function fxx(){},
hGx(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cp1(d){var x=0,w=A.j(y.n),v,u
var $async$cp1=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGx(d)
if(u==null){v=null
x=1
break}v=B.cp0(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp1,w)},
cp0(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cp0=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coZ.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSr(s),$async$cp0)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coZ.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp0,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGQ.prototype={
S(){return new B.bnA()}}
B.bnA.prototype={
Y(){this.a3()
this.a0u()},
by(d){this.bJ(d)
if(d.c!==this.a.c)this.a0u()},
a0u(){var x=0,w=A.j(y.v),v=this,u
var $async$a0u=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cp1(v.a.c),$async$a0u)
case 2:u=e
if(v.c!=null)v.m(new B.eVK(v,u))
return A.h(null,w)}})
return A.i($async$a0u,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hm,x.f,!0,v,new A.qc(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cB.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cB:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVK.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxx.prototype={
$1(d){var x=y.h.a(new A.qu([],[]).o0(d.target.result,!1)),w=C.wv.q(x.objectStoreNames,"thumbs")
if(!w)C.ws.Gl(x,"thumbs")},
$S:173};(function inheritance(){var x=a.inherit
x(B.aGQ,A.af)
x(B.bnA,A.ah)
x(B.eVK,A.iO)
x(B.fxx,A.hq)})()
A.j6(b.typeUniverse,JSON.parse('{"aGQ":{"af":[],"v":[]},"bnA":{"ah":["aGQ"]}}'))
var y={i:A.at("uO"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m7"),o:A.at("dJ"),n:A.at("dJ?"),v:A.at("~")};(function staticFields(){$.fwL=A.T(A.at("n"),A.at("mr<aF>"))
$.coZ=A.T(A.at("n"),y.o)
$.aPM=null})()};
(a=>{a["ompZ/wHxo5g9PDbQiWvI6qKQINg="]=a.current})($__dart_deferred_initializers__);