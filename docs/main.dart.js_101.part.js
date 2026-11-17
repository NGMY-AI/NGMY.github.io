((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFx(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
imo(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwY.h(0,v)
if(x!=null)return x
w=B.bFx(v)
if(w!=null){if($.fwY.a>64)$.fwY.a8(0)
$.fwY.n(0,v,w)}return w},
aRY(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aGY(i,j,f,e,g,h,v),C.aq)
x=B.imo(i)
if(x!=null)return A.bu(u,A.tK(C.z,v,C.h2,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.W(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGY:function aGY(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnJ:function bnJ(){this.c=this.a=this.d=null},
eVV:function eVV(d,e){this.a=d
this.b=e},
hfj(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x2.GV(x,"ngmy_worksheet_thumbs_v1",new B.fxL(),1)},
i7A(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aN(d)
return x}catch(w){return v}return v},
aSA(d){return B.irw(d)},
irw(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSA=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPV
x=7
return A.b(o==null?$.aPV=B.hfj():o,$async$aSA)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"thumbs"),m),$async$aSA)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSA)
case 9:m=B.i7A(q)
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
return A.i($async$aSA,w)},
fxL:function fxL(){},
hGR(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cpc(d){var x=0,w=A.j(y.n),v,u
var $async$cpc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGR(d)
if(u==null){v=null
x=1
break}v=B.cpb(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpc,w)},
cpb(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cpb=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cp9.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSA(s),$async$cpb)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cp9.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cpb,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGY.prototype={
S(){return new B.bnJ()}}
B.bnJ.prototype={
Y(){this.a3()
this.a0v()},
bz(d){this.bK(d)
if(d.c!==this.a.c)this.a0v()},
a0v(){var x=0,w=A.j(y.v),v=this,u
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cpc(v.a.c),$async$a0v)
case 2:u=e
if(v.c!=null)v.m(new B.eVV(v,u))
return A.h(null,w)}})
return A.i($async$a0v,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tK(C.z,s,C.h2,x.f,!0,v,new A.qc(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVV.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxL.prototype={
$1(d){var x=y.h.a(new A.qu([],[]).o4(d.target.result,!1)),w=C.ww.q(x.objectStoreNames,"thumbs")
if(!w)C.wt.Gl(x,"thumbs")},
$S:173};(function inheritance(){var x=a.inherit
x(B.aGY,A.af)
x(B.bnJ,A.ah)
x(B.eVV,A.iO)
x(B.fxL,A.hq)})()
A.j6(b.typeUniverse,JSON.parse('{"aGY":{"af":[],"v":[]},"bnJ":{"ah":["aGY"]}}'))
var y={i:A.at("uN"),h:A.at("rv"),w:A.at("ai<H>"),A:A.at("m6"),o:A.at("dJ"),n:A.at("dJ?"),v:A.at("~")};(function staticFields(){$.fwY=A.T(A.at("n"),A.at("mq<aF>"))
$.cp9=A.T(A.at("n"),y.o)
$.aPV=null})()};
(a=>{a["JqPYQtjqiG/wwD+6VxLjHxhkfDo="]=a.current})($__dart_deferred_initializers__);