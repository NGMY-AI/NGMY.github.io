((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bH8(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.Y(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.Y(d,"data:image"))try{x=A.uN(d)
x.toString
return x}catch(w){return v}return v},
ivL(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fDD.h(0,v)
if(x!=null)return x
w=B.bH8(v)
if(w!=null){if($.fDD.a>64)$.fDD.a6(0)
$.fDD.n(0,v,w)}return w},
aT0(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.n(12):d
if(i!=null&&C.a.Y(i,"ngmy:ws-thumb:"))return A.by(u,new B.aHS(i,j,f,e,g,h,v),C.aq)
x=B.ivL(i)
if(x!=null)return A.by(u,A.tT(C.z,v,C.he,e,!0,f,x,!1,v,j),C.aq)
w=C.cE.j(0.15)
return A.p(v,A.V(g,h==null?C.cE:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.m),v,f,v,v,v,v,v,j)},
aHS:function aHS(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bp3:function bp3(){this.c=this.a=this.d=null},
f16:function f16(d,e){this.a=d
this.b=e},
hng(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.Y(A.bc("IndexedDB not available"))
return C.xA.He(x,"ngmy_worksheet_thumbs_v1",new B.fEq(),1)},
igC(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cc(d))
if(y.i.b(d))return new Uint8Array(A.cc(J.ez(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cc(A.vW(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cc(d))
if(typeof d=="string")try{x=C.cJ.aK(d)
return x}catch(w){return v}return v},
aTF(d){return B.iB7(d)},
iB7(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aTF=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aQT
x=7
return A.b(o==null?$.aQT=B.hng():o,$async$aTF)
case 7:s=f
r=J.my(s,"thumbs","readonly")
x=8
return A.b(C.iS.xV(J.mx(r,"thumbs"),m),$async$aTF)
case 8:q=f
x=9
return A.b(J.oM(r),$async$aTF)
case 9:m=B.igC(q)
v=m
x=1
break
u=2
x=6
break
case 4:u=3
l=t.pop()
p=A.ac(l)
$.an.$1("[worksheet-thumb idb get] "+A.v(p))
v=null
x=1
break
x=6
break
case 3:x=2
break
case 6:case 1:return A.h(v,w)
case 2:return A.f(t.at(-1),w)}})
return A.i($async$aTF,w)},
fEq:function fEq(){},
hPn(d){if(!(d!=null&&C.a.Y(d,"ngmy:ws-thumb:")))return null
return C.a.aY(d,14)},
crd(d){var x=0,w=A.j(y.n),v,u
var $async$crd=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hPn(d)
if(u==null){v=null
x=1
break}v=B.crc(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$crd,w)},
crc(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$crc=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cra.h(0,s)
if(u!=null&&!C.aI.gar(u)){v=u
x=1
break}x=3
return A.b(B.aTF(s),$async$crc)
case 3:t=f
if(t!=null&&!C.aI.gar(t)){$.cra.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$crc,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[77],B)
B.aHS.prototype={
R(){return new B.bp3()}}
B.bp3.prototype={
a_(){this.a3()
this.a14()},
by(d){this.bJ(d)
if(d.c!==this.a.c)this.a14()},
a14(){var x=0,w=A.j(y.v),v=this,u
var $async$a14=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.crd(v.a.c),$async$a14)
case 2:u=e
if(v.c!=null)v.l(new B.f16(v,u))
return A.h(null,w)}})
return A.i($async$a14,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gar(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tT(C.z,s,C.he,x.f,!0,v,new A.p1(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cE.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.V(u,v==null?C.cE:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.f16.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fEq.prototype={
$1(d){var x=y.h.a(new A.qI([],[]).o6(d.target.result,!1)),w=C.wZ.q(x.objectStoreNames,"thumbs")
if(!w)C.wW.GE(x,"thumbs")},
$S:168};(function inheritance(){var x=a.inherit
x(B.aHS,A.af)
x(B.bp3,A.ah)
x(B.f16,A.hS)
x(B.fEq,A.fR)})()
A.i0(b.typeUniverse,JSON.parse('{"aHS":{"af":[],"w":[]},"bp3":{"ah":["aHS"]}}'))
var y={i:A.as("mA"),h:A.as("qV"),w:A.as("ai<F>"),A:A.as("lX"),o:A.as("dC"),n:A.as("dC?"),v:A.as("~")};(function staticFields(){$.fDD=A.S(A.as("m"),A.as("mD<aE>"))
$.cra=A.S(A.as("m"),y.o)
$.aQT=null})()};
(a=>{a["OaUQpTkAdDuDE+y8l7qnCHfLvTs="]=a.current})($__dart_deferred_initializers__);