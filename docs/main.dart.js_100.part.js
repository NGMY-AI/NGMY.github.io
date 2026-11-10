((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bE6(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.us(d)
x.toString
return x}catch(w){return v}return v},
idT(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.frL.h(0,v)
if(x!=null)return x
w=B.bE6(v)
if(w!=null){if($.frL.a>64)$.frL.aa(0)
$.frL.n(0,v,w)}return w},
aQK(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bx(u,new B.aFQ(i,j,f,e,g,h,v),C.ap)
x=B.idT(i)
if(x!=null)return A.bx(u,A.tv(C.A,v,C.h8,e,!0,f,x,!1,v,j),C.ap)
w=C.cY.j(0.15)
return A.p(v,A.X(g,h==null?C.cY:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aFQ:function aFQ(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bmt:function bmt(){this.c=this.a=this.d=null},
eQT:function eQT(d,e){this.a=d
this.b=e},
h8u(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.W(A.be("IndexedDB not available"))
return C.zf.Ml(x,"ngmy_worksheet_thumbs_v1",new B.fsw(),1)},
hZS(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cn(d))
if(y.i.b(d))return new Uint8Array(A.cn(J.eH(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cn(A.ym(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cn(d))
if(typeof d=="string")try{x=C.cF.aO(d)
return x}catch(w){return v}return v},
aRn(d){return B.iiW(d)},
iiW(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aRn=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aOL
x=7
return A.b(o==null?$.aOL=B.h8u():o,$async$aRn)
case 7:s=f
r=J.mX(s,"thumbs","readonly")
x=8
return A.b(C.j1.zG(J.mW(r,"thumbs"),m),$async$aRn)
case 8:q=f
x=9
return A.b(J.pM(r),$async$aRn)
case 9:m=B.hZS(q)
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
return A.i($async$aRn,w)},
fsw:function fsw(){},
hyY(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
clR(d){var x=0,w=A.j(y.n),v,u
var $async$clR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hyY(d)
if(u==null){v=null
x=1
break}v=B.clQ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clR,w)},
clQ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$clQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.clO.h(0,s)
if(u!=null&&!C.aG.gan(u)){v=u
x=1
break}x=3
return A.b(B.aRn(s),$async$clQ)
case 3:t=f
if(t!=null&&!C.aG.gan(t)){$.clO.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$clQ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aFQ.prototype={
R(){return new B.bmt()}}
B.bmt.prototype={
Z(){this.a2()
this.a_R()},
bz(d){this.bH(d)
if(d.c!==this.a.c)this.a_R()},
a_R(){var x=0,w=A.j(y.v),v=this,u
var $async$a_R=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.clR(v.a.c),$async$a_R)
case 2:u=e
if(v.c!=null)v.m(new B.eQT(v,u))
return A.h(null,w)}})
return A.i($async$a_R,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aG.gan(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tv(C.A,s,C.h8,x.f,!0,v,new A.q1(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cY.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cY:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eQT.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fsw.prototype={
$1(d){var x=y.h.a(new A.r_([],[]).oA(d.target.result,!1)),w=C.yd.t(x.objectStoreNames,"thumbs")
if(!w)C.y9.L3(x,"thumbs")},
$S:190};(function inheritance(){var x=a.inherit
x(B.aFQ,A.af)
x(B.bmt,A.ah)
x(B.eQT,A.iG)
x(B.fsw,A.hy)})()
A.j0(b.typeUniverse,JSON.parse('{"aFQ":{"af":[],"v":[]},"bmt":{"ah":["aFQ"]}}'))
var y={i:A.at("uz"),h:A.at("ri"),w:A.at("ai<G>"),A:A.at("lZ"),o:A.at("dK"),n:A.at("dK?"),v:A.at("~")};(function staticFields(){$.frL=A.U(A.at("n"),A.at("mh<aD>"))
$.clO=A.U(A.at("n"),y.o)
$.aOL=null})()};
(a=>{a["ZJ3zCWyLjWqYz9FhRJl57NXB7po="]=a.current})($__dart_deferred_initializers__);