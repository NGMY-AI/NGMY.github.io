((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bDU(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.ur(d)
x.toString
return x}catch(w){return v}return v},
icZ(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fqZ.h(0,v)
if(x!=null)return x
w=B.bDU(v)
if(w!=null){if($.fqZ.a>64)$.fqZ.aa(0)
$.fqZ.n(0,v,w)}return w},
aQF(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aFM(i,j,f,e,g,h,v),C.ap)
x=B.icZ(i)
if(x!=null)return A.bx(u,A.tv(C.A,v,C.h7,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFM:function aFM(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bml:function bml(){this.c=this.a=this.d=null},
eQb:function eQb(d,e){this.a=d
this.b=e},
h7I(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zd.Mk(x,"ngmy_worksheet_thumbs_v1",new B.frK(),1)},
hZ_(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cm(d))
if(y.i.b(d))return new Uint8Array(A.cm(J.eI(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cm(A.ym(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cF.aO(d)
return x}catch(w){return v}return v},
aRi(d){return B.ii1(d)},
ii1(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRi=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aOG
x=7
return A.b(o==null?$.aOG=B.h7I():o,$async$aRi)
case 7:s=f
r=J.mW(s,"thumbs","readonly")
x=8
return A.b(C.j0.zH(J.mV(r,"thumbs"),m),$async$aRi)
case 8:q=f
x=9
return A.b(J.pL(r),$async$aRi)
case 9:m=B.hZ_(q)
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
return A.i($async$aRi,w)},
frK:function frK(){},
hy6(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
clE(d){var x=0,w=A.j(y.n),v,u
var $async$clE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hy6(d)
if(u==null){v=null
x=1
break}v=B.clD(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clE,w)},
clD(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$clD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.clB.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRi(s),$async$clD)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.clB.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clD,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aFM.prototype={
R(){return new B.bml()}}
B.bml.prototype={
Z(){this.a2()
this.a_Q()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a_Q()},
a_Q(){var x=0,w=A.j(y.v),v=this,u
var $async$a_Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.clE(v.a.c),$async$a_Q)
case 2:u=e
if(v.c!=null)v.m(new B.eQb(v,u))
return A.h(null,w)}})
return A.i($async$a_Q,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tv(C.A,s,C.h7,x.f,!0,v,new A.q0(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eQb.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.frK.prototype={
$1(d){var x=y.h.a(new A.r_([],[]).oz(d.target.result,!1)),w=C.ya.t(x.objectStoreNames,"thumbs")
if(!w)C.y6.L3(x,"thumbs")},
$S:190};(function inheritance(){var x=a.inherit
x(B.aFM,A.af)
x(B.bml,A.ah)
x(B.eQb,A.iG)
x(B.frK,A.hx)})()
A.j1(b.typeUniverse,JSON.parse('{"aFM":{"af":[],"v":[]},"bml":{"ah":["aFM"]}}'))
var y={i:A.as("uy"),h:A.as("ri"),w:A.as("ai<G>"),A:A.as("lY"),o:A.as("dK"),n:A.as("dK?"),v:A.as("~")};(function staticFields(){$.fqZ=A.U(A.as("m"),A.as("mh<aD>"))
$.clB=A.U(A.as("m"),y.o)
$.aOG=null})()};
(a=>{a["6MD2CS7W0OmmqpWe167vF8Kg6xo="]=a.current})($__dart_deferred_initializers__);