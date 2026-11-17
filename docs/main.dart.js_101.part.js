((a,b)=>{a[b]=a[b]||{}})(self,"$__dart_deferred_initializers__")
$__dart_deferred_initializers__.current=function(a,b,c,$){var J,A,C,B={
bFu(d){var x,w,v=null
if(d==null||C.a.i(d).length===0)return v
x=C.a.a_(d,"ngmy:ws-thumb:")
if(x)return v
if(C.a.a_(d,"data:image"))try{x=A.uE(d)
x.toString
return x}catch(w){return v}return v},
imf(d){var x,w,v=d==null?null:C.a.i(d)
if(v==null)v=""
if(v.length===0)return null
x=$.fwV.h(0,v)
if(x!=null)return x
w=B.bFu(v)
if(w!=null){if($.fwV.a>64)$.fwV.a8(0)
$.fwV.n(0,v,w)}return w},
aRX(d,e,f,g,h,i,j){var x,w,v=null,u=d==null?A.l(12):d
if(i!=null&&C.a.a_(i,"ngmy:ws-thumb:"))return A.bu(u,new B.aGX(i,j,f,e,g,h,v),C.aq)
x=B.imf(i)
if(x!=null)return A.bu(u,A.tK(C.z,v,C.hn,e,!0,f,x,!1,v,j),C.aq)
w=C.cC.j(0.15)
return A.p(v,A.W(g,h==null?C.cC:h,v,v,v,32),C.f,v,v,new A.o(w,v,v,u,v,v,C.n),v,f,v,v,v,v,v,j)},
aGX:function aGX(d,e,f,g,h,i,j){var _=this
_.c=d
_.d=e
_.e=f
_.f=g
_.r=h
_.w=i
_.a=j},
bnI:function bnI(){this.c=this.a=this.d=null},
eVS:function eVS(d,e){this.a=d
this.b=e},
hfd(){var x,w=window
w.toString
x=w.indexedDB||w.webkitIndexedDB||w.mozIndexedDB
if(x==null)throw A.X(A.bc("IndexedDB not available"))
return C.x2.GV(x,"ngmy_worksheet_thumbs_v1",new B.fxI(),1)},
i7u(d){var x,w,v=null
if(d==null)return v
if(y.o.b(d))return new Uint8Array(A.cf(d))
if(y.i.b(d))return new Uint8Array(A.cf(J.eF(d,0,null)))
if(y.A.b(d))return new Uint8Array(A.cf(A.wR(d,0,v)))
if(y.w.b(d))return new Uint8Array(A.cf(d))
if(typeof d=="string")try{x=C.cK.aN(d)
return x}catch(w){return v}return v},
aSz(d){return B.irn(d)},
irn(d){var x=0,w=A.j(y.n),v,u=2,t=[],s,r,q,p,o,n,m,l
var $async$aSz=A.e(function(e,f){if(e===1){t.push(f)
x=u}for(;;)switch(x){case 0:m=C.a.i(d)
if(m.length===0){v=null
x=1
break}u=4
o=$.aPU
x=7
return A.b(o==null?$.aPU=B.hfd():o,$async$aSz)
case 7:s=f
r=J.mk(s,"thumbs","readonly")
x=8
return A.b(C.iE.xO(J.mj(r,"thumbs"),m),$async$aSz)
case 8:q=f
x=9
return A.b(J.oy(r),$async$aSz)
case 9:m=B.i7u(q)
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
return A.i($async$aSz,w)},
fxI:function fxI(){},
hGK(d){if(!(d!=null&&C.a.a_(d,"ngmy:ws-thumb:")))return null
return C.a.b4(d,14)},
cp9(d){var x=0,w=A.j(y.n),v,u
var $async$cp9=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:u=B.hGK(d)
if(u==null){v=null
x=1
break}v=B.cp8(u)
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp9,w)},
cp8(d){var x=0,w=A.j(y.n),v,u,t,s
var $async$cp8=A.e(function(e,f){if(e===1)return A.f(f,w)
for(;;)switch(x){case 0:s=C.a.i(d)
if(s.length===0){v=null
x=1
break}u=$.cp6.h(0,s)
if(u!=null&&!C.aI.gau(u)){v=u
x=1
break}x=3
return A.b(B.aSz(s),$async$cp8)
case 3:t=f
if(t!=null&&!C.aI.gau(t)){$.cp6.n(0,s,t)
v=t
x=1
break}v=null
x=1
break
case 1:return A.h(v,w)}})
return A.i($async$cp8,w)}}
J=c[1]
A=c[0]
C=c[2]
B=a.updateHolder(c[61],B)
B.aGX.prototype={
S(){return new B.bnI()}}
B.bnI.prototype={
Y(){this.a3()
this.a0v()},
bz(d){this.bK(d)
if(d.c!==this.a.c)this.a0v()},
a0v(){var x=0,w=A.j(y.v),v=this,u
var $async$a0v=A.e(function(d,e){if(d===1)return A.f(e,w)
for(;;)switch(x){case 0:x=2
return A.b(B.cp9(v.a.c),$async$a0v)
case 2:u=e
if(v.c!=null)v.m(new B.eVS(v,u))
return A.h(null,w)}})
return A.i($async$a0v,w)},
B(d){var x,w,v,u,t=this,s=null,r=t.d
if(r!=null&&!C.aI.gau(r)){r=t.d
r.toString
x=t.a
w=x.d
v=x.e
return A.tK(C.z,s,C.hn,x.f,!0,v,new A.qa(r,1),!1,s,w)}r=t.a
x=r.d
r=r.e
w=C.cC.j(0.12)
v=t.a
u=v.r
v=v.w
return A.p(s,A.W(u,v==null?C.cC:v,s,s,s,32),C.f,w,s,s,s,r,s,s,s,s,s,x)}}
var z=a.updateTypes([])
B.eVS.prototype={
$0(){return this.a.d=this.b},
$S:0}
B.fxI.prototype={
$1(d){var x=y.h.a(new A.qt([],[]).o3(d.target.result,!1)),w=C.ww.q(x.objectStoreNames,"thumbs")
if(!w)C.wt.Gl(x,"thumbs")},
$S:160};(function inheritance(){var x=a.inherit
x(B.aGX,A.af)
x(B.bnI,A.ah)
x(B.eVS,A.iO)
x(B.fxI,A.hq)})()
A.j6(b.typeUniverse,JSON.parse('{"aGX":{"af":[],"v":[]},"bnI":{"ah":["aGX"]}}'))
var y={i:A.at("uN"),h:A.at("rv"),w:A.at("ai<H>"),A:A.at("m7"),o:A.at("dJ"),n:A.at("dJ?"),v:A.at("~")};(function staticFields(){$.fwV=A.T(A.at("n"),A.at("mq<aF>"))
$.cp6=A.T(A.at("n"),y.o)
$.aPU=null})()};
(a=>{a["QMzVLTHCY+a4s0Mv9lSX81VET1E="]=a.current})($__dart_deferred_initializers__);