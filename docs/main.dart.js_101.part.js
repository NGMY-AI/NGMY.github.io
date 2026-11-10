((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bDS(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.uq(d)
x.toString
return x}catch(w){return v}return v},
icD(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fqO.h(0,v)
if(x!=null)return x
w=B.bDS(v)
if(w!=null){if($.fqO.a>64)$.fqO.aa(0)
$.fqO.n(0,v,w)}return w},
aQD(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aFL(i,j,f,e,g,h,v),C.ap)
x=B.icD(i)
if(x!=null)return A.bx(u,A.tu(C.A,v,C.h7,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFL:function aFL(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmk:function bmk(){this.c=this.a=this.d=null},
eQ7:function eQ7(d,e){this.a=d
this.b=e},
h7p(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zb.Mk(x,"ngmy_worksheet_thumbs_v1",new B.frz(),1)},
hYG(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cm(d))
if(y.i.b(d))return new Uint8Array(A.cm(J.eI(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cm(A.yl(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cm(d))
if(typeof d=="string")try{x=C.cF.aN(d)
return x}catch(w){return v}return v},
aRg(d){return B.ihG(d)},
ihG(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRg=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aOE
x=7
return A.b(o==null?$.aOE=B.h7p():o,$async$aRg)
case 7:s=f
r=J.mU(s,"thumbs","readonly")
x=8
return A.b(C.j0.zH(J.mT(r,"thumbs"),m),$async$aRg)
case 8:q=f
x=9
return A.b(J.pK(r),$async$aRg)
case 9:m=B.hYG(q)
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
return A.i($async$aRg,w)},
frz:function frz(){},
hxO(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
clC(d){var x=0,w=A.j(y.n),v,u
var $async$clC=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hxO(d)
if(u==null){v=null
x=1
break}v=B.clB(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clC,w)},
clB(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$clB=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.clz.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRg(s),$async$clB)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.clz.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clB,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aFL.prototype={
R(){return new B.bmk()}}
B.bmk.prototype={
Z(){this.a2()
this.a_Q()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a_Q()},
a_Q(){var x=0,w=A.j(y.v),v=this,u
var $async$a_Q=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.clC(v.a.c),$async$a_Q)
case 2:u=e
if(v.c!=null)v.m(new B.eQ7(v,u))
return A.h(null,w)}})
return A.i($async$a_Q,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tu(C.A,s,C.h7,x.f,!0,v,new A.pZ(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eQ7.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.frz.prototype={
$1(d){var x=y.h.a(new A.qZ([],[]).oz(d.target.result,!1)),w=C.y8.t(x.objectStoreNames,"thumbs")
if(!w)C.y4.L3(x,"thumbs")},
$S:184};(function inheritance(){var x=a.inherit
x(B.aFL,A.af)
x(B.bmk,A.ah)
x(B.eQ7,A.iF)
x(B.frz,A.hx)})()
A.j0(b.typeUniverse,JSON.parse('{"aFL":{"af":[],"v":[]},"bmk":{"ah":["aFL"]}}'))
var y={i:A.at("ux"),h:A.at("rh"),w:A.at("ai<G>"),A:A.at("lX"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.fqO=A.U(A.at("m"),A.at("mf<aD>"))
$.clz=A.U(A.at("m"),y.o)
$.aOE=null})()};
(a=>{a["kIBYgeyhLnfbKeM7gBw0l2b3o0k="]=a.current})($__dart_deferred_initializers__);