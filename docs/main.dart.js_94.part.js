((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBH(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u1(d)
x.toString
return x}catch(w){return v}return v},
i2t(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fjx.h(0,v)
if(x!=null)return x
w=B.bBH(v)
if(w!=null){if($.fjx.a>64)$.fjx.a8(0)
$.fjx.n(0,v,w)}return w},
aP_(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aEe(i,j,f,e,g,h,v),C.aq)
x=B.i2t(i)
if(x!=null)return A.bw(u,A.ta(C.A,v,C.fX,e,!0,f,x,!1,v,j),C.aq)
w=C.cV.j(0.15)
return A.p(v,A.X(g,h==null?C.cV:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aEe:function aEe(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bki:function bki(){this.c=this.a=this.d=null},
eJJ:function eJJ(d,e){this.a=d
this.b=e},
fZl(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yC.LN(x,"ngmy_worksheet_thumbs_v1",new B.fki(),1)},
hOV(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zY(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aJ(d)
return x}catch(w){return v}return v},
aPC(d){return B.i7r(d)},
i7r(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPC=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aN4
x=7
return A.b(o==null?$.aN4=B.fZl():o,$async$aPC)
case 7:s=f
r=J.mH(s,"thumbs","readonly")
x=8
return A.b(C.iL.zs(J.mF(r,"thumbs"),m),$async$aPC)
case 8:q=f
x=9
return A.b(J.pw(r),$async$aPC)
case 9:m=B.hOV(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.aa(l)
$.am.$1("[worksheet-thumb idb get] "+A.t(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aPC,w)},
fki:function fki(){},
hon(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cfE(d){var x=0,w=A.j(y.n),v,u
var $async$cfE=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hon(d)
if(u==null){v=null
x=1
break}v=B.cfD(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfE,w)},
cfD(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfD=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfB.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPC(s),$async$cfD)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cfB.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfD,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aEe.prototype={
T(){return new B.bki()}}
B.bki.prototype={
a_(){this.a1()
this.Yb()},
bu(d){this.bG(d)
if(d.c!==this.a.c)this.Yb()},
Yb(){var x=0,w=A.j(y.v),v=this,u
var $async$Yb=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfE(v.a.c),$async$Yb)
case 2:u=e
if(v.c!=null)v.m(new B.eJJ(v,u))
return A.h(null,w)}})
return A.i($async$Yb,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.ta(C.A,s,C.fX,x.f,!0,v,new A.pL(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cV.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cV:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJJ.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fki.prototype={
$1(d){var x=y.h.a(new A.rK([],[]).pB(d.target.result,!1)),w=C.xu.t(x.objectStoreNames,"thumbs")
if(!w)C.xq.KA(x,"thumbs")},
$S:189};(function inheritance(){var x=a.inherit
x(B.aEe,A.ag)
x(B.bki,A.ah)
x(B.eJJ,A.j8)
x(B.fki,A.hW)})()
A.jY(b.typeUniverse,JSON.parse('{"aEe":{"ag":[],"r":[]},"bki":{"ah":["aEe"]}}'))
var y={i:A.ax("u7"),h:A.ax("r0"),w:A.ax("ai<G>"),A:A.ax("lI"),o:A.ax("dJ"),n:A.ax("dJ?"),v:A.ax("~")};(function staticFields(){$.fjx=A.T(A.ax("n"),A.ax("m1<aD>"))
$.cfB=A.T(A.ax("n"),y.o)
$.aN4=null})()};
(a=>{a["A8b0Qa06DgnZzuwrU8WLPmZeHcA="]=a.current})($__dart_deferred_initializers__);