((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBA(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u0(d)
x.toString
return x}catch(w){return v}return v},
i1M(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fj2.h(0,v)
if(x!=null)return x
w=B.bBA(v)
if(w!=null){if($.fj2.a>64)$.fj2.a9(0)
$.fj2.n(0,v,w)}return w},
aOU(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE8(i,j,f,e,g,h,v),C.aq)
x=B.i1M(i)
if(x!=null)return A.bw(u,A.ta(C.A,v,C.fX,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE8:function aE8(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bkb:function bkb(){this.c=this.a=this.d=null},
eJf:function eJf(d,e){this.a=d
this.b=e},
fYE(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yB.LK(x,"ngmy_worksheet_thumbs_v1",new B.fjO(),1)},
hOd(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aJ(d)
return x}catch(w){return v}return v},
aPw(d){return B.i6K(d)},
i6K(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fYE():o,$async$aPw)
case 7:s=f
r=J.mH(s,"thumbs","readonly")
x=8
return A.b(C.iJ.zr(J.mF(r,"thumbs"),m),$async$aPw)
case 8:q=f
x=9
return A.b(J.pv(r),$async$aPw)
case 9:m=B.hOd(q)
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
return A.i($async$aPw,w)},
fjO:function fjO(){},
hnH(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b2(d,14)},
cfq(d){var x=0,w=A.j(y.n),v,u
var $async$cfq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hnH(d)
if(u==null){v=null
x=1
break}v=B.cfp(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfq,w)},
cfp(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cfp=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cfn.h(0,s)
if(u!=null&&!C.aH.gam(u)){v=u
x=1
break}x=3
return A.b(B.aPw(s),$async$cfp)
case 3:t=f
if(t!=null&&!C.aH.gam(t)){$.cfn.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cfp,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[54],B)
B.aE8.prototype={
T(){return new B.bkb()}}
B.bkb.prototype={
a_(){this.a1()
this.Y8()},
bt(d){this.bG(d)
if(d.c!==this.a.c)this.Y8()},
Y8(){var x=0,w=A.j(y.v),v=this,u
var $async$Y8=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfq(v.a.c),$async$Y8)
case 2:u=e
if(v.c!=null)v.m(new B.eJf(v,u))
return A.h(null,w)}})
return A.i($async$Y8,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.ta(C.A,s,C.fX,x.f,!0,v,new A.pK(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJf.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fjO.prototype={
$1(d){var x=y.h.a(new A.rK([],[]).pB(d.target.result,!1)),w=C.xs.t(x.objectStoreNames,"thumbs")
if(!w)C.xo.Ky(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aE8,A.ag)
x(B.bkb,A.ah)
x(B.eJf,A.j7)
x(B.fjO,A.hV)})()
A.jW(b.typeUniverse,JSON.parse('{"aE8":{"ag":[],"r":[]},"bkb":{"ah":["aE8"]}}'))
var y={i:A.ax("u6"),h:A.ax("r0"),w:A.ax("ai<H>"),A:A.ax("lI"),o:A.ax("dI"),n:A.ax("dI?"),v:A.ax("~")};(function staticFields(){$.fj2=A.T(A.ax("n"),A.ax("m1<aD>"))
$.cfn=A.T(A.ax("n"),y.o)
$.aMZ=null})()};
(a=>{a["W9BpKwqALNx1CGEvPdv24kld6Rc="]=a.current})($__dart_deferred_initializers__);