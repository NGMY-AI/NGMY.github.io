((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bEX(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uA(d)
x.toString
return x}catch(w){return v}return v},
ikc(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fvx.h(0,v)
if(x!=null)return x
w=B.bEX(v)
if(w!=null){if($.fvx.a>64)$.fvx.a8(0)
$.fvx.n(0,v,w)}return w},
aRs(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.by(u,new B.aGw(i,j,f,e,g,h,v),C.aq)
x=B.ikc(i)
if(x!=null)return A.by(u,A.tI(C.A,v,C.hc,e,!0,f,x,!1,v,j),C.aq)
w=C.d0.j(0.15)
return A.q(v,A.X(g,h==null?C.d0:h,v,v,v,32),C.f,v,v,new A.p(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGw:function aGw(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bne:function bne(){this.c=this.a=this.d=null},
eUy:function eUy(d,e){this.a=d
this.b=e},
hdc(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.zx.My(x,"ngmy_worksheet_thumbs_v1",new B.fwi(),1)},
i4R(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.wO(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cI.aN(d)
return x}catch(w){return v}return v},
aS5(d){return B.ipf(d)},
ipf(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aS5=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPq
x=7
return A.b(o==null?$.aPq=B.hdc():o,$async$aS5)
case 7:s=f
r=J.n0(s,"thumbs","readonly")
x=8
return A.b(C.j8.A4(J.n_(r,"thumbs"),m),$async$aS5)
case 8:q=f
x=9
return A.b(J.pV(r),$async$aS5)
case 9:m=B.i4R(q)
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
return A.i($async$aS5,w)},
fwi:function fwi(){},
hEg(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coN(d){var x=0,w=A.j(y.n),v,u
var $async$coN=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hEg(d)
if(u==null){v=null
x=1
break}v=B.coM(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coN,w)},
coM(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coK.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aS5(s),$async$coM)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coK.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coM,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGw.prototype={
S(){return new B.bne()}}
B.bne.prototype={
Y(){this.a2()
this.a0f()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0f()},
a0f(){var x=0,w=A.j(y.v),v=this,u
var $async$a0f=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coN(v.a.c),$async$a0f)
case 2:u=e
if(v.c!=null)v.m(new B.eUy(v,u))
return A.h(null,w)}})
return A.i($async$a0f,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tI(C.A,s,C.hc,x.f,!0,v,new A.q8(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.d0.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.d0:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eUy.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwi.prototype={
$1(d){var x=y.h.a(new A.r5([],[]).oK(d.target.result,!1)),w=C.ys.q(x.objectStoreNames,"thumbs")
if(!w)C.yo.Lk(x,"thumbs")},
$S:192};(function inheritance(){var x=a.inherit
x(B.aGw,A.ag)
x(B.bne,A.ah)
x(B.eUy,A.iJ)
x(B.fwi,A.ht)})()
A.iT(b.typeUniverse,JSON.parse('{"aGw":{"ag":[],"v":[]},"bne":{"ah":["aGw"]}}'))
var y={i:A.as("uI"),h:A.as("rq"),w:A.as("ai<F>"),A:A.as("m2"),o:A.as("dK"),n:A.as("dK?"),v:A.as("~")};(function staticFields(){$.fvx=A.T(A.as("n"),A.as("mm<aE>"))
$.coK=A.T(A.as("n"),y.o)
$.aPq=null})()};
(a=>{a["vzOFwqfh6lwvhr0Jt9hC0HdPiUc="]=a.current})($__dart_deferred_initializers__);