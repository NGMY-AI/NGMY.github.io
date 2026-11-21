((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bGI(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uM(d)
x.toString
return x}catch(w){return v}return v},
itt(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fBU.h(0,v)
if(x!=null)return x
w=B.bGI(v)
if(w!=null){if($.fBU.a>64)$.fBU.a8(0)
$.fBU.n(0,v,w)}return w},
aSP(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.bv(u,new B.aHG(i,j,f,e,g,h,v),C.aq)
x=B.itt(i)
if(x!=null)return A.bv(u,A.tS(C.z,v,C.hd,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.W(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHG:function aHG(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
boJ:function boJ(){this.c=this.a=this.d=null},
f_s:function f_s(d,e){this.a=d
this.b=e},
hlq(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xt.H8(x,"ngmy_worksheet_thumbs_v1",new B.fCH(),1)},
ier(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cb(d))
if(y.i.b(d))return new Uint8Array(A.cb(J.ew(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cb(A.vT(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cb(d))
if(typeof d=="string")try{x=C.cE.aK(d)
return x}catch(w){return v}return v},
aTt(d){return B.iyP(d)},
iyP(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTt=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQG
x=7
return A.b(o==null?$.aQG=B.hlq():o,$async$aTt)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iN.xU(J.mx(r,"thumbs"),m),$async$aTt)
case 8:q=f
x=9
return A.b(J.oJ(r),$async$aTt)
case 9:m=B.ier(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.am.$1("[worksheet-thumb idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTt,w)},
fCH:function fCH(){},
hNs(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
cqM(d){var x=0,w=A.j(y.n),v,u
var $async$cqM=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hNs(d)
if(u==null){v=null
x=1
break}v=B.cqL(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cqM,w)},
cqL(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cqL=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cqJ.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTt(s),$async$cqL)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cqJ.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cqL,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[76],B)
B.aHG.prototype={
R(){return new B.boJ()}}
B.boJ.prototype={
a_(){this.a4()
this.a0Y()},
bx(d){this.bJ(d)
if(d.c!==this.a.c)this.a0Y()},
a0Y(){var x=0,w=A.j(y.v),v=this,u
var $async$a0Y=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cqM(v.a.c),$async$a0Y)
case 2:u=e
if(v.c!=null)v.l(new B.f_s(v,u))
return A.h(null,w)}})
return A.i($async$a0Y,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tS(C.z,s,C.hd,x.f,!0,v,new A.oY(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f_s.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fCH.prototype={
$1(d){var x=y.h.a(new A.qH([],[]).o6(d.target.result,!1)),w=C.wR.q(x.objectStoreNames,"thumbs")
if(!w)C.wO.Gy(x,"thumbs")},
$S:164};(function inheritance(){var x=a.inherit
x(B.aHG,A.af)
x(B.boJ,A.ah)
x(B.f_s,A.hP)
x(B.fCH,A.fO)})()
A.hZ(b.typeUniverse,JSON.parse('{"aHG":{"af":[],"w":[]},"boJ":{"ah":["aHG"]}}'))
var y={i:A.as("mA"),h:A.as("qU"),w:A.as("ai<F>"),A:A.as("lW"),o:A.as("dy"),n:A.as("dy?"),v:A.as("~")};(function staticFields(){$.fBU=A.T(A.as("m"),A.as("mD<aE>"))
$.cqJ=A.T(A.as("m"),y.o)
$.aQG=null})()};
(a=>{a["OTaiCSsuF4YKCDENs8oRZPtfBNY="]=a.current})($__dart_deferred_initializers__);