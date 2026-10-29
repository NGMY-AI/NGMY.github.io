((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bBA(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a0(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a0(d,"data:image"))try{x=A.u0(d)
x.toString
return x}catch(w){return v}return v},
i1D(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fiW.h(0,v)
if(x!=null)return x
w=B.bBA(v)
if(w!=null){if($.fiW.a>64)$.fiW.a9(0)
$.fiW.n(0,v,w)}return w},
aOU(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.m(12):d
if(i!=null&&C.a.a0(i,"ngmy:ws-thumb:"))return A.bw(u,new B.aE8(i,j,f,e,g,h,v),C.aq)
x=B.i1D(i)
if(x!=null)return A.bw(u,A.t9(C.A,v,C.fW,e,!0,f,x,!1,v,j),C.aq)
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
eJ8:function eJ8(d,e){this.a=d
this.b=e},
fYw(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.V(A.bd("IndexedDB not available"))
return C.yA.LJ(x,"ngmy_worksheet_thumbs_v1",new B.fjH(),1)},
hO4(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.ce(d))
if(y.i.b(d))return new Uint8Array(A.ce(J.eZ(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.ce(A.zU(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.ce(d))
if(typeof d=="string")try{x=C.cI.aJ(d)
return x}catch(w){return v}return v},
aPw(d){return B.i6B(d)},
i6B(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aPw=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aMZ
x=7
return A.b(o==null?$.aMZ=B.fYw():o,$async$aPw)
case 7:s=f
r=J.mH(s,"thumbs","readonly")
x=8
return A.b(C.iI.zr(J.mF(r,"thumbs"),m),$async$aPw)
case 8:q=f
x=9
return A.b(J.pv(r),$async$aPw)
case 9:m=B.hO4(q)
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
fjH:function fjH(){},
hnz(d){if(!(d!=null&&C.a.a0(d,"ngmy:ws-thumb:")))return null
return C.a.b3(d,14)},
cfq(d){var x=0,w=A.j(y.n),v,u
var $async$cfq=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hnz(d)
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
this.Y7()},
bu(d){this.bF(d)
if(d.c!==this.a.c)this.Y7()},
Y7(){var x=0,w=A.j(y.v),v=this,u
var $async$Y7=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cfq(v.a.c),$async$Y7)
case 2:u=e
if(v.c!=null)v.m(new B.eJ8(v,u))
return A.h(null,w)}})
return A.i($async$Y7,w)},
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
B.eJ8.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fjH.prototype={
$1(d){var x=y.h.a(new A.rJ([],[]).pB(d.target.result,!1)),w=C.xs.t(x.objectStoreNames,"thumbs")
if(!w)C.xo.Kw(x,"thumbs")},
$S:179};(function inheritance(){var x=a.inherit
x(B.aE8,A.ag)
x(B.bkb,A.ah)
x(B.eJ8,A.j6)
x(B.fjH,A.hV)})()
A.jV(b.typeUniverse,JSON.parse('{"aE8":{"ag":[],"r":[]},"bkb":{"ah":["aE8"]}}'))
var y={i:A.ax("u6"),h:A.ax("r_"),w:A.ax("ai<H>"),A:A.ax("lI"),o:A.ax("dI"),n:A.ax("dI?"),v:A.ax("~")};(function staticFields(){$.fiW=A.T(A.ax("n"),A.ax("m1<aC>"))
$.cfn=A.T(A.ax("n"),y.o)
$.aMZ=null})()};
(a=>{a["3Y+/3xUgWBh/rrfN3RVeDxaO5Lc="]=a.current})($__dart_deferred_initializers__);