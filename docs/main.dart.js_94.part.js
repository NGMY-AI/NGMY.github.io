((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBz(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u0(d)
x.toString
return x}catch(w){return v}return v},
i1x(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fiV.h(0,v)
if(x!=null)return x
w=B.bBz(v)
if(w!=null){if($.fiV.a>64)$.fiV.a9(0)
$.fiV.n(0,v,w)}return w},
aOS(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE6(i,j,f,e,g,h,v),C.aq)
x=B.i1x(i)
if(x!=null)return A.bw(u,A.t9(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
w=C.cU.j(0.15)
return A.p(v,A.X(g,h==null?C.cU:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aE6:function aE6(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bka:function bka(){this.c=this.a=this.d=null},
eJ7:function eJ7(d,e){this.a=d
this.b=e},
fYq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yA.LI(x,"ngmy_worksheet_thumbs_v1",new B.fjG(),1)},
hNZ(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aJ(d)
return x}catch(w){return v}return v},
aPu(d){return B.i6v(d)},
i6v(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPu=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMX
x=7
return A.b(o==null?$.aMX=B.fYq():o,$async$aPu)
case 7:s=f
r=J.mH(s,"thumbs","readonly")
x=8
return A.b(C.iI.zq(J.mF(r,"thumbs"),m),$async$aPu)
case 8:q=f
x=9
return A.b(J.pv(r),$async$aPu)
case 9:m=B.hNZ(q)
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
return A.i($async$aPu,w)},
fjG:function fjG(){},
hnt(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cfq(d){var x=0,w=A.j(y.n),v,u
var $async$cfq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hnt(d)
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
return A.b(B.aPu(s),$async$cfp)
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
B.aE6.prototype={
S(){return new B.bka()}}
B.bka.prototype={
a_(){this.a1()
this.Y6()},
bu(d){this.bF(d)
if(d.c!==this.a.c)this.Y6()},
Y6(){var x=0,w=A.j(y.v),v=this,u
var $async$Y6=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfq(v.a.c),$async$Y6)
case 2:u=e
if(v.c!=null)v.m(new B.eJ7(v,u))
return A.h(null,w)}})
return A.i($async$Y6,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aH.gam(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.t9(C.A,s,C.fW,x.f,!0,v,new A.pK(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cU.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.X(u,v==null?C.cU:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eJ7.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fjG.prototype={
$1(d){var x=y.h.a(new A.rJ([],[]).pB(d.target.result,!1)),w=C.xs.t(x.objectStoreNames,"thumbs")
if(!w)C.xo.Kv(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aE6,A.ag)
x(B.bka,A.ah)
x(B.eJ7,A.j6)
x(B.fjG,A.hU)})()
A.jV(b.typeUniverse,JSON.parse('{"aE6":{"ag":[],"r":[]},"bka":{"ah":["aE6"]}}'))
var y={i:A.ax("u6"),h:A.ax("r_"),w:A.ax("ai<H>"),A:A.ax("lI"),o:A.ax("dI"),n:A.ax("dI?"),v:A.ax("~")};(function staticFields(){$.fiV=A.T(A.ax("n"),A.ax("m1<aC>"))
$.cfn=A.T(A.ax("n"),y.o)
$.aMX=null})()};
(a=>{a["buTjDdEJ5vkvls2INOt5A2xcLfw="]=a.current})($__dart_deferred_initializers__);