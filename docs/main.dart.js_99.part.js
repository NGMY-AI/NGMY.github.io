((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFj(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uF(d)
x.toString
return x}catch(w){return v}return v},
ilF(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwd.h(0,v)
if(x!=null)return x
w=B.bFj(v)
if(w!=null){if($.fwd.a>64)$.fwd.a8(0)
$.fwd.n(0,v,w)}return w},
aRN(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aGL(i,j,f,e,g,h,v),C.aq)
x=B.ilF(i)
if(x!=null)return A.bx(u,A.tL(C.A,v,C.hj,e,!0,f,x,!1,v,j),C.aq)
w=C.cz.j(0.15)
return A.q(v,A.X(g,h==null?C.cz:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGL:function aGL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnz:function bnz(){this.c=this.a=this.d=null},
eV8:function eV8(d,e){this.a=d
this.b=e},
heq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.bc("IndexedDB not available"))
return C.wW.GR(x,"ngmy_worksheet_thumbs_v1",new B.fwZ(),1)},
i6e(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eE(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.wS(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cM.aO(d)
return x}catch(w){return v}return v},
aSp(d){return B.iqN(d)},
iqN(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSp=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPI
x=7
return A.b(o==null?$.aPI=B.heq():o,$async$aSp)
case 7:s=f
r=J.mj(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mi(r,"thumbs"),m),$async$aSp)
case 8:q=f
x=9
return A.b(J.ow(r),$async$aSp)
case 9:m=B.i6e(q)
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
return A.i($async$aSp,w)},
fwZ:function fwZ(){},
hFD(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
coR(d){var x=0,w=A.j(y.n),v,u
var $async$coR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hFD(d)
if(u==null){v=null
x=1
break}v=B.coQ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coR,w)},
coQ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$coQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.coO.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSp(s),$async$coQ)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.coO.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$coQ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGL.prototype={
S(){return new B.bnz()}}
B.bnz.prototype={
Y(){this.a4()
this.a0k()},
bz(d){this.bJ(d)
if(d.c!==this.a.c)this.a0k()},
a0k(){var x=0,w=A.j(y.v),v=this,u
var $async$a0k=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.coR(v.a.c),$async$a0k)
case 2:u=e
if(v.c!=null)v.m(new B.eV8(v,u))
return A.h(null,w)}})
return A.i($async$a0k,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tL(C.A,s,C.hj,x.f,!0,v,new A.qb(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cz.j(0.12)
v=t.a
u=v.r
v=v.w
return A.q(s,A.X(u,v==null?C.cz:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eV8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fwZ.prototype={
$1(d){var x=y.h.a(new A.qs([],[]).o_(d.target.result,!1)),w=C.wn.q(x.objectStoreNames,"thumbs")
if(!w)C.wk.Gi(x,"thumbs")},
$S:171};(function inheritance(){var x=a.inherit
x(B.aGL,A.af)
x(B.bnz,A.ah)
x(B.eV8,A.iK)
x(B.fwZ,A.hv)})()
A.iU(b.typeUniverse,JSON.parse('{"aGL":{"af":[],"v":[]},"bnz":{"ah":["aGL"]}}'))
var y={i:A.at("uO"),h:A.at("ru"),w:A.at("ai<H>"),A:A.at("m5"),o:A.at("dL"),n:A.at("dL?"),v:A.at("~")};(function staticFields(){$.fwd=A.T(A.at("n"),A.at("mp<aE>"))
$.coO=A.T(A.at("n"),y.o)
$.aPI=null})()};
(a=>{a["Az5kxorvn89nqvpIngN1D4LsRoE="]=a.current})($__dart_deferred_initializers__);