((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBN(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u2(d)
x.toString
return x}catch(w){return v}return v},
i3c(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fk8.h(0,v)
if(x!=null)return x
w=B.bBN(v)
if(w!=null){if($.fk8.a>64)$.fk8.a8(0)
$.fk8.n(0,v,w)}return w},
aP3(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEi(i,j,f,e,g,h,v),C.aq)
x=B.i3c(i)
if(x!=null)return A.bw(u,A.tb(C.A,v,C.fY,e,!0,f,x,!1,v,j),C.aq)
w=C.cX.j(0.15)
return A.p(v,A.X(g,h==null?C.cX:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEi:function aEi(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bko:function bko(){this.c=this.a=this.d=null},
eKk:function eKk(d,e){this.a=d
this.b=e},
h__(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yE.LP(x,"ngmy_worksheet_thumbs_v1",new B.fkU(),1)},
hPF(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.f_(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.A0(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aK(d)
return x}catch(w){return v}return v},
aPG(d){return B.i8a(d)},
i8a(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPG=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aN8
x=7
return A.b(o==null?$.aN8=B.h__():o,$async$aPG)
case 7:s=f
r=J.mH(s,"thumbs","readonly")
x=8
return A.b(C.iM.zs(J.mF(r,"thumbs"),m),$async$aPG)
case 8:q=f
x=9
return A.b(J.px(r),$async$aPG)
case 9:m=B.hPF(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb get] "+A.u(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPG,w)},
fkU:function fkU(){},
hp5(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b5(d,14)},
cfR(d){var x=0,w=A.j(y.n),v,u
var $async$cfR=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hp5(d)
if(u==null){v=null
x=1
break}v=B.cfQ(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfR,w)},
cfQ(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfQ=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfO.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPG(s),$async$cfQ)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cfO.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfQ,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEi.prototype={
T(){return new B.bko()}}
B.bko.prototype={
a_(){this.a1()
this.Yd()},
bv(d){this.bG(d)
if(d.c!==this.a.c)this.Yd()},
Yd(){var x=0,w=A.j(y.v),v=this,u
var $async$Yd=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfR(v.a.c),$async$Yd)
case 2:u=e
if(v.c!=null)v.m(new B.eKk(v,u))
return A.h(null,w)}})
return A.i($async$Yd,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tb(C.A,s,C.fY,x.f,!0,v,new A.pN(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cX.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cX:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eKk.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fkU.prototype={
$1(d){var x=y.h.a(new A.rL([],[]).pB(d.target.result,!1)),w=C.xw.t(x.objectStoreNames,"thumbs")
if(!w)C.xs.KC(x,"thumbs")},
$S:198};(function inheritance(){var x=a.inherit
x(B.aEi,A.ag)
x(B.bko,A.ah)
x(B.eKk,A.j8)
x(B.fkU,A.hX)})()
A.jY(b.typeUniverse,JSON.parse('{"aEi":{"ag":[],"r":[]},"bko":{"ah":["aEi"]}}'))
var y={i:A.ax("u8"),h:A.ax("r0"),w:A.ax("ai<G>"),A:A.ax("lI"),o:A.ax("dJ"),n:A.ax("dJ?"),v:A.ax("~")};(function staticFields(){$.fk8=A.T(A.ax("n"),A.ax("m1<aD>"))
$.cfO=A.T(A.ax("n"),y.o)
$.aN8=null})()};
(a=>{a["Yip4Tc7Y5WlobHWQD5i5HCZqIN8="]=a.current})($__dart_deferred_initializers__);